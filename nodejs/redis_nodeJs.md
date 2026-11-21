# Redis with Node.js — Complete Production Guide

ఈ డాక్యుమెంట్ Redis basics నుండి Node.js integration, caching patterns, data structures, Lua, distributed locks, rate limiting, queues, streams, persistence, clustering, observability మరియు AWS/Lambda production architecture వరకు advanced study guide.

> **Core rule:** Redis is an in-memory data store, not a substitute for every database. Correct TTL, invalidation, durability, memory and consistency policies decide whether Redis is safe for the workload.

## Redis Learning Roadmap

```mermaid
flowchart LR
    Basics[Key / value / TTL] --> Types[String / hash / list / set / sorted set / stream]
    Types --> Patterns[Cache aside / write-through / write-behind]
    Patterns --> PubSub[Pub/Sub / Streams / queues]
    PubSub --> Consistency[Invalidation / locking / idempotency]
    Consistency --> Reliability[Persistence / replication / cluster]
    Reliability --> Node[Node.js connection / backpressure]
    Node --> Cloud[AWS ElastiCache / Lambda / serverless]
    Cloud --> Observe[Metrics / memory / latency / alarms]
```

## Redis Runtime Architecture

```mermaid
flowchart TD
    App[Node.js application] --> Pool[Redis connection pool / reuse]
    Pool --> Protocol[RESP protocol]
    Protocol --> EventLoop[Redis event loop]

    EventLoop --> Command[Command parsing / dispatch]
    Command --> Memory[(RAM dictionary / structures)]
    Command --> Disk[Optional RDB / AOF persistence]

    Memory --> Eviction[TTL expiration / eviction policy]
    Memory --> Replica[Replica replication]

    Replica --> HA[Sentinel / cluster failover]
```

- Redis is single-threaded for command execution by default; network and I/O internals use event-driven processing.
- Single-command atomicity makes Redis useful for counters, Lua operations, dedupe and distributed coordination.
- Blocking/large commands such `KEYS`, huge sorted sets or large Lua scripts can harm tail latency.
- Memory is part of Redis capacity; persistence and replication do not remove RAM limits.

## Cache-aside Request Flow

```mermaid
sequenceDiagram
    participant Client
    participant Node as Node.js
    participant Redis
    participant DB as PostgreSQL

    Client->>Node: GET /users/101
    Node->>Redis: GET user:101

    alt Cache hit
        Redis-->>Node: serialized/cached value
        Node-->>Client: 200 cached result
    else Cache miss
        Redis-->>Node: nil
        Node->>DB: Parameterized read
        DB-->>Node: user record
        Node->>Redis: SETEX user:101 300s
        Node-->>Client: 200 database result
    end

    Node->>Redis: Correlate metrics / tracing
```

- **Cache aside:** application reads cache, then database on miss and writes cache.
- **Read through:** library/service abstracts cache and database fetching.
- **Write through:** write database and cache in request workflow.
- **Write behind:** queue cache-backed writes for asynchronous database persistence.
- Cache aside is easiest to reason about, but stale data/invalidation must be defined.

## Cache Consistency Patterns

```mermaid
flowchart LR
    Write[Write API] --> DB[(Database)]
    DB --> Invalidate[Invalidate Redis key]
    Invalidate --> Cache[(Redis cache)]

    Cache --> Reader[Read API]
    DB --> Reader

    Write --> Event[(Outbox / CDC event)]
    Event --> Consumer[Invalidator / projector]
    Consumer --> Cache
```

- Database write + cache delete is usually safer than writing stale data to cache.
- In distributed systems, invalidation events can arrive once, twice or out of order.
- Version keys or entity timestamps prevent old cache writes from winning.
- Cache stampedes should use TTL jitter, request coalescing or distributed locking.
- Cache deletion after database commit should use outbox/CDC to survive process failure.

## Redis Data Types and Use Cases

| Data type | Core use | Example |
|---|---|---|
| String | cached JSON, counters, flags, OTP | `user:101` |
| Hash | field-level entity data | `HSET session:x userId 101` |
| List | queues/recent lists | notifications, work queue |
| Set | unique memberships | tags, denylist |
| Sorted Set | ranking, leaderboard, scheduling | score/time queues |
| Stream | append-only event log | event replay and consumer groups |

```mermaid
flowchart TD
    Need[Redis usage] --> String{Single value?}
    String -->|Yes| S[String / JSON]
    String -->|No| Fields{Multiple fields?}

    Fields -->|Hash| H[Hash]
    Fields -->|Unique set| SET[Set]
    Fields -->|Ordering| Z[Sorted Set]

    Need --> Sequence{Event / sequence replay?}
    Sequence -->|Yes| Stream[Stream]
    Sequence -->|Queue| List[List / Streams / BullMQ]
```

- Hash is useful for field updates but large hash objects still need size limits.
- Sorted Set `ZADD`/`ZRANGE` supports leaderboard and delayed-job patterns.
- Streams support consumer groups and replay; Pub/Sub does not retain messages.
- Lists are producer/consumer queues but lack modern operational features of purpose-built job frameworks.

## Redis Atomicity and Lua

```mermaid
sequenceDiagram
    participant Node
    participant Redis

    Node->>Redis: EVAL Lua script
    Redis->>Redis: Execute commands atomically
    Redis-->>Node: Result

    Note over Node,Redis: No other command executes in Redis while script runs
```

- Lua scripts are atomic and useful for compare-and-update, rate-limit and stock operations.
- Scripts should be small and bounded; blocking Lua blocks command execution.
- Prefer Redis functions or tested libraries for maintainability if scripts grow large.
- Redis transactions (`MULTI/EXEC`) differ from database transactions and do not provide optimistic rollback by all read state.

## Distributed Locking

```mermaid
sequenceDiagram
    participant A as Service A
    participant Redis
    participant B as Service B

    A->>Redis: SET lock:key owner A NX PX ttl
    Redis-->>A: OK
    A->>A: Perform critical operation

    B->>Redis: SET lock:key owner B NX PX ttl
    Redis-->>B: nil

    A->>Redis: Lua compare owner + DEL
    Redis-->>A: released
```

- Locks need unique owner tokens and Lua compare/delete for safe release.
- TTL must exceed normal critical-section duration plus clock/latency safeguards.
- Redis standalone master locks can lose in failover; Redlock is not a universal correctness guarantee.
- Prefer database constraints/transactions or fencing tokens for correctness-critical operations.

## Rate Limiting

- Fixed window is simple but can allow boundary bursts.
- Sliding-window log is accurate but memory expensive.
- Sliding-window counter is a memory/accuracy compromise.
- Token bucket supports burst and sustained rate.
- Redis Lua or sorted sets implement atomic counters/windows.

```mermaid
flowchart LR
    Request[API request] --> Key[Identity / route / tenant key]
    Key --> Lua[Atomic Redis script]
    Lua --> Allowed{Limit?}

    Allowed -->|Yes| API[Express / Lambda]
    Allowed -->|No| Reject[429 + Retry-After]
```

## Pub/Sub vs Streams

| Capability | Pub/Sub | Streams |
|---|---|---|
| Message persistence | No | Yes |
| Consumer replay | No | Yes |
| Delivery guarantee | Fire-and-forget | Replayable/acknowledged |
| Consumer groups | No | Yes |
| Typical use | ephemeral notifications | event/work/event replay |

Use Streams or a durable broker for events that require replay, retries and audit. Pub/Sub is suitable for transient cache invalidation or live notifications.

## Persistence and Replication

```mermaid
flowchart LR
    Primary[(Redis primary)] -->|Replication| Replica[(Redis replica)]
    Replica -->|Failover candidate| Sentinel[Sentinel / managed HA]

    Primary --> RDB[(RDB snapshot)]
    Primary --> AOF[(Append-only file)]

    RDB --> Backup[(Object storage backup)]
    AOF --> Backup
```

- RDB snapshots provide point-in-time copies but can lose changes since snapshot.
- AOF logs writes for lower data-loss windows; fsync policy affects durability/performance.
- Replication improves availability/read scaling but is not an independent backup against logical corruption/delete.
- Test restore and failover regularly; Sentinel/ElastiCache policy must be deployment-specific.

## Redis Cluster

```mermaid
flowchart LR
    App[Node.js Redis client] --> Router[Cluster-aware router]
    Router --> S1[(Shard 1: slots 0-5460)]
    Router --> S2[(Shard 2: slots 5461-10922)]
    Router --> S3[(Shard 3: slots 10923-16383)]

    S1 --> M1[(Primary + replica)]
    S2 --> M2[(Primary + replica)]
    S3 --> M3[(Primary + replica)]
```

- Cluster mode partitions 16384 hash slots across primary nodes.
- Multi-key operations require same slot or `{hash_tag}` convention; cluster cross-slot limitations apply.
- Use a cluster-aware client and handle `MOVED`, `ASK`, resharding and connection discovery.
- Horizontal scaling requires workload/slot balancing and replica placement across failure domains.

## Node.js Production Integration

```mermaid
sequenceDiagram
    participant App as NestJS / Express
    participant Redis

    App->>Redis: Reuse one client / pool
    Redis-->>App: connect ready

    loop Requests
        App->>Redis: ioredis command / timeout
        alt Success
            Redis-->>App: result
        else Timeout / network
            App->>App: retry once + fallback
            Redis-->>App: reject / reconnect event
        end
    end

    App->>Redis: graceful shutdown / quit
```

- Reuse clients rather than creating one per request; ioredis/node-redis maintain resilient connections.
- Set connect, command and socket timeouts; define retry count/backoff and circuit-breaker behavior.
- Cache miss/failure policy should not make Redis unavailable a database outage.
- Graceful shutdown closes active clients and pending operations with a deadline.
- Configure TLS, authentication, DNS and VPC/network access in AWS ElastiCache deployments.

## Serverless and AWS Lambda

- Lambda cold starts should reuse module-level Redis clients but respect function lifetime/VPC/NAT limits.
- Create Redis connections once per execution environment and close/flush only during shutdown when appropriate.
- Keep ElastiCache in VPC private subnets and use security groups least-privilege.
- Lambda burst concurrency multiplies connection count; use proxy/connection strategy and pool configuration appropriately.
- ElastiCache/MemoryDB availability, engine mode, encryption and maintenance windows must match workload requirements.

## Memory and Eviction

- Set `maxmemory` and an explicit eviction policy: `noeviction`, `allkeys-lru`, `allkeys-lfu`, `volatile-ttl`, and others.
- Use TTL on cache keys; unbounded keys lead to memory pressure and eviction surprises.
- Monitor used_memory, fragmentation, eviction count, key count, hot keys and expired keys.
- Large value thresholds prevent network/CPU and memory spikes.
- Memory optimization includes hashes for small field maps, compact encoding and avoiding duplicate serialized JSON.

## Observability and Security

- Metrics: hit/miss ratio, latency, commands/sec, network, memory, fragmentation, eviction, replica lag and blocked clients.
- Trace Redis command/key namespace and cache result; never log full sensitive values or credentials.
- Use ACL users with least privilege, TLS, private networking and firewall/security group controls.
- Disable or restrict dangerous admin commands and management exposure.
- Add key namespace prefix and key-length limits to prevent accidental cross-domain collisions.

## Production Checklist

- Define cache keys, TTL, invalidation and stale-data policy.
- Use cache-aside/write policy appropriate to consistency needs.
- Add stampede protection and bounded fallback behavior.
- Configure persistence/replication/failover and test recovery.
- Use distributed lock, Lua or database constraints only as required; avoid Redlock claims as universal correctness.
- Set memory limits/eviction and monitor hot keys, latency and misses.
- Secure VPC, TLS, ACL and secret rotation.
- Reuse Node.js Redis clients, set timeouts and handle reconnect/graceful shutdown.

---

Since you're learning **Node.js, NestJS, AWS Serverless, PostgreSQL, and System Design**, Redis is one of the most important technologies to master. I'll explain it from **beginner to expert level** in Telugu, with a focus on **Node.js applications**.

---

# Redis అంటే ఏమిటి?


```mermaid
mindmap
  root((Redis అంటే ఏమిటి?))
    ఎందుకు Redis అవసరం?
    Redis ఉపయోగిస్తే?
    Cache అంటే ఏమిటి?
    Redis ఎలా పని చేస్తుంది?
    Node.js Flow
    Example Flow
    Node.js Example
```
**Redis (Remote Dictionary Server)** అనేది ఒక **In-Memory Data Store**.

సాధారణ Database (PostgreSQL, MySQL) లో Data **Disk (SSD/HDD)** లో Store అవుతుంది.

Redis లో Data **RAM (Memory)** లో Store అవుతుంది.

అందుకే Redis చాలా Fast.

```text
PostgreSQL
      │
      ▼
Disk (SSD)
      │
   5-20 ms

Redis
      │
      ▼
RAM
      │
0.1 - 1 ms
```

అందుకే Redis Database కంటే 10 నుంచి 100 రెట్లు వేగంగా ఉంటుంది.

---

# ఎందుకు Redis అవసరం?

ఒక ఉదాహరణ తీసుకుందాం.

మన దగ్గర ఒక API ఉంది.

```http
GET /users/100
```

Flow:

```text
Client
   │
   ▼
Node.js
   │
   ▼
PostgreSQL
   │
   ▼
Return User
```

1000 మంది ఒకేసారి ఈ API ని Call చేస్తే?

ప్రతి Request Database కి వెళ్తుంది.

```text
1000 Requests
      │
      ▼
Database
```

Database మీద భారీ Load పడుతుంది.

---

# Redis ఉపయోగిస్తే?

```text
Client
     │
     ▼
Node.js
     │
     ▼
Redis
     │
     ▼
Found?
 ┌──────┴──────┐
 │             │
Yes            No
 │             │
 ▼             ▼
Return      PostgreSQL
               │
               ▼
          Save in Redis
               │
               ▼
           Return Data
```

దీనిని **Cache Aside Pattern** అంటారు.

---

# Cache అంటే ఏమిటి?

Cache అంటే

**తరచుగా ఉపయోగించే Data ని Fast Memory లో Store చేయడం.**

ఉదాహరణ

```text
User Profile

Roles

Permissions

Product Details

Movie List

Configuration

JWT Session
```

---

# Redis ఎలా పని చేస్తుంది?

Redis ఒక **Key-Value Store**.

ఉదాహరణ

```text
Key

user:101
```

Value

```json
{
  "id": 101,
  "name": "Ravi",
  "age": 30
}
```

Redis లో

```text
user:101

↓

JSON Data
```

---

# Node.js Flow

User API Call చేశాడు.

```http
GET /users/101
```

Node.js

మొదట Redis ని అడుగుతుంది.

```text
Node.js

↓

Redis

↓

user:101
```

ఉంటే

```text
Return Immediately
```

లేకపోతే

```text
Node.js

↓

PostgreSQL

↓

Get Data

↓

Redis Save

↓

Return
```

---

# Example Flow

మొదటి Request

```text
Client

↓

Node.js

↓

Redis

↓

Not Found

↓

Database

↓

Redis Save

↓

Client
```

రెండవ Request

```text
Client

↓

Node.js

↓

Redis

↓

Found

↓

Client
```

Database కి వెళ్లాల్సిన అవసరం లేదు.

---

# Node.js Example

Install

```bash
npm install redis
```

Connect

```javascript
import { createClient } from "redis";

const client = createClient();

await client.connect();
```

Save

```javascript
await client.set("user:101", JSON.stringify(user));
```

Read

```javascript
const data = await client.get("user:101");

const user = JSON.parse(data);
```

Delete

```javascript
await client.del("user:101");
```

---

# TTL అంటే?

TTL

**Time To Live**

ఉదాహరణ

20 Minutes Cache

```javascript
await client.set("user:101", JSON.stringify(user), {
  EX: 1200,
});
```

1200 Seconds తర్వాత

Redis ఆటోమేటిక్‌గా Delete చేస్తుంది.

---

# మీ RBAC Example

మీరు ముందు అడిగిన ప్రశ్న గుర్తుందా?

> ప్రతి API లో Roles & Permissions Database నుండి Fetch చేయకుండా 20 Minutes Cache చేయాలి.

దానికి Redis Perfect Solution.

Flow

```text
User

↓

API Gateway

↓

Lambda

↓

Redis

↓

Roles Found?

     │

 ┌───┴────┐
 │        │
Yes       No
 │        │
 ▼        ▼
Return   PostgreSQL
            │
            ▼
      Save Redis
            │
            ▼
         Return
```

అప్పుడు ప్రతి Request కి Database Hit ఉండదు.

---

# Redis లో ఏమేమి Store చేయవచ్చు?

### 1. User Sessions

```text
session:abc123
```

---

### 2. JWT Blacklist

```text
jwt:blacklist:token
```

---

### 3. OTP

```text
otp:9876543210

↓

948372
```

TTL

```text
5 Minutes
```

---

### 4. API Response

```text
movies:top10
```

---

### 5. Product Details

```text
product:1001
```

---

### 6. Permissions

```text
role:admin
```

---

### 7. Configuration

```text
config:payment
```

---

# Redis Data Types

Redis కేవలం String మాత్రమే కాదు.

చాలా Data Types ఉన్నాయి.

---

## 1. String

```text
name

↓

Ravi
```

---

## 2. Hash

```text
user:101

↓

name

↓

Ravi

age

↓

30
```

Node.js

```javascript
await client.hSet("user:101", {
  name: "Ravi",
  age: 30,
});
```

---

## 3. List

```text
movies

↓

Avatar

↓

Titanic

↓

Batman
```

---

## 4. Set

Duplicate ఉండదు.

```text
roles

↓

Admin

User

Manager
```

---

## 5. Sorted Set

Leaderboard కోసం.

```text
Player

↓

100 Points

↓

Rank
```

Gaming Apps ఎక్కువగా వాడతాయి.

---

## 6. Streams

Event Processing కోసం.

---

# Redis Persistence

Redis RAM లో ఉంటుంది.

Power Off అయితే?

Data పోతుందా?

Redis దగ్గర రెండు Options ఉన్నాయి.

---

## RDB

కొంతకొంత సేపుకి Snapshot తీసుకుంటుంది.

```text
RAM

↓

Dump.rdb
```

---

## AOF

ప్రతి Write ని Log చేస్తుంది.

```text
SET

DEL

HSET

APPEND
```

---

# Redis Pub/Sub

ఉదాహరణ

Chat Application

User A

↓

Message

↓

Redis

↓

Subscribers

↓

User B

↓

User C

↓

User D

```
Publisher
     │
     ▼
Redis Channel
     │
 ┌───┼────┐
 ▼   ▼    ▼
A   B     C
```

---

# Distributed Cache

ఒక Server కాదు.

చాలా Servers.

```text
Node1

Node2

Node3

Node4

↓

Redis Cluster
```

అందరూ అదే Redis ని Use చేస్తారు.

---

# Redis Cluster

```text
          Redis Cluster

      ┌──────────────┐
      │   Master 1   │
      └──────┬───────┘
             │
        Replica 1

      ┌──────────────┐
      │   Master 2   │
      └──────┬───────┘
             │
        Replica 2
```

High Availability కోసం.

---

# AWS లో Redis

AWS లో

Redis Service పేరు

**Amazon ElastiCache for Redis**

Flow

```text
API Gateway

↓

Lambda

↓

Redis (ElastiCache)

↓

PostgreSQL
```

---

# మీ Serverless Application Flow

మీ Architecture కి దగ్గరగా:

```text
Client
   │
   ▼
API Gateway
   │
   ▼
Lambda (Node.js)
   │
   ▼
Redis
   │
Found?
┌─────┴─────┐
│           │
Yes         No
│           │
▼           ▼
Return   PostgreSQL
             │
             ▼
      Save in Redis (TTL 20 min)
             │
             ▼
          Return Response
```

---

# Cache Invalidation

ఇది Redis లో అత్యంత ముఖ్యమైన Topic.

ఉదాహరణ

User పేరు Database లో Update అయింది.

కానీ Redis లో ఇంకా పాత పేరు ఉంది.

Flow

```text
User Update

↓

Database Update

↓

Delete Redis Cache

↓

Next Request

↓

Database

↓

New Cache
```

ఉదాహరణ

```javascript
await updateUser(user);

await client.del(`user:${user.id}`);
```

ఇదే **Cache Invalidation**.

---

# Redis Best Practices

✅ Cache Frequently Used Data మాత్రమే చేయాలి.

✅ TTL తప్పనిసరిగా పెట్టాలి.

✅ Database ను Redis కి Replacement గా ఉపయోగించకూడదు (ప్రత్యేక Use Cases మినహా).

✅ Cache Key Naming Consistent గా ఉండాలి.

ఉదాహరణలు:

```text
user:101

role:admin

permissions:manager

movies:top10

products:iphone16

config:payment

session:abcd1234
```

---

# Interview Questions (Node.js + Redis)

1. Redis అంటే ఏమిటి?
2. Redis ఎందుకు Fast?
3. Cache అంటే ఏమిటి?
4. Cache Aside Pattern అంటే?
5. Write Through Cache అంటే?
6. Write Behind Cache అంటే?
7. TTL అంటే?
8. Redis Data Types ఏమిటి?
9. Pub/Sub ఎలా పని చేస్తుంది?
10. Redis Cluster అంటే?
11. Redis Sentinel అంటే?
12. Redis Persistence అంటే?
13. Cache Invalidation ఎలా చేస్తారు?
14. Redis ను Session Store గా ఎలా ఉపయోగిస్తారు?
15. Redis మరియు PostgreSQL మధ్య తేడా ఏమిటి?
16. AWS ElastiCache అంటే ఏమిటి?
17. Node.js లో Redis Connection Pooling ఎలా నిర్వహిస్తారు?
18. Lambda లో Redis Connections గురించి ఏ జాగ్రత్తలు తీసుకోవాలి?
19. Redis Memory Full అయితే ఏమవుతుంది?
20. Redis Eviction Policies (`allkeys-lru`, `volatile-ttl` మొదలైనవి) ఎలా పనిచేస్తాయి?

---

ఈ Foundation తర్వాత నేర్చుకోవాల్సిన Advanced Topics:

1. **Redis Internal Architecture** (Memory Layout, Event Loop, Single-threaded Design)
2. **Redis Commands** (100+ ముఖ్యమైన Commands)
3. **Redis + Node.js** (Production-grade implementation)
4. **Redis + AWS Lambda** (Connection Reuse, Cold Starts)
5. **Redis Cluster & Sentinel**
6. **Distributed Locking (Redlock)**
7. **Rate Limiting using Redis**
8. **Job Queues (BullMQ/Bull with Redis)**
9. **Pub/Sub vs Streams**
10. **Netflix/Amazon-scale Redis Architecture** (మిలియన్ల Requests ను ఎలా Handle చేస్తారో)
