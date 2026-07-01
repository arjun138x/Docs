If you're a **Node.js Backend Developer** (especially with AWS Serverless), learning **Datadog** will make you much more valuable as a backend/cloud engineer.

Since you've been working with **Node.js, AWS Lambda, Serverless Framework, PostgreSQL, and NestJS**, here's a roadmap that goes from beginner to expert.

---

# Datadog + Node.js Roadmap

## [1. What is DataDog](#1-what-is-datadog-1)

### [What is Observability?](#what-is-observability-1)

Learn

- Monitoring
- Logging
- Metrics
- Tracing
- Events
- APM
- Infrastructure Monitoring
- RUM
- Synthetic Monitoring

Understand

```
Application
       |
    Metrics
       |
    Dashboards
       |
     Alerts
```

---

### [Datadog Architecture](#datadog-architecture-1)

Learn

- Agent
- SaaS Platform
- Integrations
- API
- Dashboards
- Monitors
- Logs
- Traces

Know the data flow

```
NodeJS App

↓

Datadog Agent

↓

Datadog Cloud

↓

Dashboard
```

---

## [2: Node.js Instrumentation](#2-nodejs-instrumentation-1)

### Install Datadog

```
npm install dd-trace
```

Initialize

```javascript
require("dd-trace").init();
```

Understand

- Auto Instrumentation
- Manual Instrumentation
- Plugins

---

### Supported Frameworks

Learn integration with

- Express
- NestJS
- Fastify
- Koa
- Hapi

---

### Trace HTTP Requests

Understand

```
Incoming Request

↓

Middleware

↓

Controller

↓

Service

↓

Database

↓

Response
```

See how Datadog creates spans automatically.

---

## [3: Logging](#3-logging-1)

### Learn Logging Basics

Understand

- Structured Logs
- JSON Logs
- Log Levels

```
INFO

WARN

ERROR

DEBUG
```

---

### Winston Integration

Install

```
npm install winston
```

Log example

```javascript
logger.info({
  userId,
  orderId,
  action: "Payment",
});
```

---

### Pino Integration

Learn

- Pino
- pino-http
- pino-pretty

---

### Correlate Logs with Traces

This is one of the most important topics.

Understand

```
Request

↓

Trace ID

↓

Logs

↓

Datadog

↓

Click Log

↓

See Trace
```

---

## [4: Custom Metrics](#4-custom-metrics-1)

Learn metric types

- Counter
- Gauge
- Histogram
- Distribution
- Rate

Example

```javascript
dogstatsd.increment("user.login");
```

Custom Metrics

```
payment.success

payment.failed

user.signup

cache.hit

cache.miss
```

---

## [5: Distributed Tracing](#5-distributed-tracing-1)

Understand

```
API Gateway

↓

Lambda A

↓

Lambda B

↓

PostgreSQL

↓

Redis
```

Every call creates a Span.

Learn

- Parent Span
- Child Span
- Root Span

---

### Manual Spans

```javascript
const tracer = require("dd-trace");

const span = tracer.startSpan("payment");

span.finish();
```

---

## [6: Error Tracking](#6-error-tracking-1)

Learn

Capture

```
Exceptions

Timeouts

Unhandled Promise

Validation Errors

DB Errors
```

Understand

```
Error

↓

Trace

↓

Logs

↓

Stack Trace

↓

Alert
```

---

## [7: AWS Lambda Monitoring](#7-aws-lambda-monitoring-1)

Since you use Serverless, this is critical.

Learn

- Lambda Layer
- Datadog Lambda Extension
- Cold Starts
- Invocation Metrics
- Duration
- Memory Usage
- Timeouts
- Retries
- Concurrent Executions

Understand

```
API Gateway

↓

Lambda

↓

RDS

↓

SQS

↓

SNS

↓

EventBridge
```

---

## [8: Database Monitoring](#8-database-monitoring-1)

Learn monitoring for

- PostgreSQL
- MySQL
- MongoDB
- DynamoDB

Monitor

- Query Time
- Slow Queries
- Locks
- Connections
- Deadlocks

---

## [9: Redis Monitoring](#9-redis-monitoring-1)

Learn

- Cache Hit
- Cache Miss
- Memory Usage
- Evictions
- Latency

---

## [10: Dashboards](#10-dashboards-1)

Create dashboards

Example Dashboard

```
API Latency

Error Rate

Requests

CPU

Memory

Lambda Duration

DB Queries

Top Errors
```

Learn

- Widgets
- Timeseries
- Top List
- Heatmaps
- Tables
- Query Value

---

## [11: Alerts (Monitors)](#11-alerts-monitors-1)

Create alerts

```
API > 500ms

Error > 5%

CPU > 80%

Memory > 85%

Lambda Timeout

Queue Length

Disk Usage

DB Connection Pool
```

Learn

- Threshold
- Composite Monitor
- Recovery Alert
- Notification Channels

---

## [12: Log Management](#12-log-management-1)

Learn

- Parsing
- Pipelines
- Facets
- Retention
- Indexes
- Search Queries

Examples

```
service:payment

status:error

env:prod

@userId:123
```

---

## [13: Service Map](#13-service-map-1)

Understand

```
Frontend

↓

API

↓

Payment

↓

Order

↓

Inventory

↓

Postgres
```

Learn

- Dependencies
- Latency
- Errors

---

## [14: Profiling](#14-profiling-1)

Learn

- CPU Profile
- Heap Profile
- Memory Leaks
- Hot Functions

---

## [15: CI/CD Integration](#15-cicd-integration-1)

Learn integration with

- GitHub Actions
- Jenkins
- AWS CodePipeline
- GitLab CI

Track

- Deployments
- Build Time
- Failed Builds
- Releases

---

## [16: Security Monitoring](#16-security-monitoring-1)

Learn

- Audit Logs
- CloudTrail
- IAM Monitoring
- Threat Detection
- Compliance Monitoring

---

## [17: Kubernetes Monitoring (Optional)](#17-kubernetes-monitoring-optional-1)

Learn

- Pods
- Nodes
- Containers
- CPU
- Memory
- HPA
- Cluster Events

---

## [18: SLO / SLA / SLI](#18-slo--sla--sli-1)

Understand

```
Availability

99.9%

Latency

<200ms

Error Rate

<1%
```

Learn

- SLI
- SLO
- Error Budget

---

## 19: Real-world Project

Build and monitor a project like:

```
Client

↓

API Gateway

↓

NestJS API

↓

Auth Service

↓

Order Service

↓

Payment Service

↓

Notification Service

↓

PostgreSQL

↓

Redis

↓

S3

↓

SQS

↓

Lambda
```

Instrument the application with Datadog and implement:

- APM tracing
- Custom metrics
- Structured logging
- Log-to-trace correlation
- Error tracking
- Dashboards
- Monitors and alerts

---

## [20: Expert Topics](#20-expert-topics-1)

Master

- OpenTelemetry integration
- Datadog Agent configuration
- DogStatsD
- Trace sampling
- Span tags
- Custom instrumentation
- Log pipelines
- Synthetic monitoring
- Real User Monitoring (RUM)
- Continuous Profiler
- Watchdog AI
- Cost optimization
- Multi-environment setup (`dev`, `qa`, `prod`)
- Infrastructure as Code (Terraform) for Datadog resources

---

## Recommended Hands-on Project

Given your background, build a **production-style Serverless NestJS application** on AWS:

- **API Gateway** → **AWS Lambda** (NestJS)
- **PostgreSQL** (Amazon RDS)
- **Redis** (ElastiCache)
- **SQS** for asynchronous jobs
- **S3** for file storage
- Instrument everything with Datadog:
  - APM tracing
  - Custom metrics
  - Structured logs
  - Distributed tracing across services
  - Dashboards
  - Alerts
  - Error tracking

This closely mirrors real-world enterprise architectures and is excellent preparation for senior backend and cloud engineering roles.

After mastering this roadmap, you'll be well-prepared for **Datadog-focused backend interviews** and production observability responsibilities in Node.js and AWS environments.

---

# 1. What is DataDog

Datadog (డేటాడాగ్) గురించి తెలుగులో సులభంగా అర్థమయ్యేలా ఇక్కడ వివరణ ఉంది.

---

### **Datadog అంటే ఏమిటి? (What is Datadog?)**

సరళంగా చెప్పాలంటే, **Datadog** అనేది ఒక **Monitoring (పర్యవేక్షణ) మరియు Observability (పరిశీలన) ప్లాట్‌ఫారమ్**.

పెద్ద పెద్ద కంపెనీలు తమ అప్లికేషన్లు, సర్వర్లు మరియు క్లౌడ్ (Cloud) సేవలను (ఉదాహరణకు AWS, Azure) ఉపయోగిస్తుంటాయి. ఈ సేవలు సరిగ్గా నడుస్తున్నాయా లేదా? ఎక్కడైనా ఎర్రర్స్ (Errors) వస్తున్నాయా? పర్ఫార్మెన్స్ ఎలా ఉంది? అని తెలుసుకోవడానికి Datadog ని ఉపయోగిస్తారు.

ఇది **SaaS (Software as a Service)** మోడల్ లో పనిచేస్తుంది, అంటే మనం ప్రత్యేకంగా సర్వర్లు సెటప్ చేయాల్సిన అవసరం లేదు, నేరుగా వెబ్ బ్రౌజర్ ద్వారానే అంతా చూడవచ్చు.

---

### **Datadog ఎందుకు అవసరం? (Why do we use it?)**

ఒక అప్లికేషన్ లో ఏదైనా సమస్య వచ్చినప్పుడు (ఉదాహరణకు వెబ్‌సైట్ స్లో అవ్వడం), ఆ సమస్య ఎందుకు వచ్చిందో కనుగొనడం కష్టం. Datadog ద్వారా:

- **Infrastructure Monitoring:** సర్వర్ల CPU, Memory ఎంత వాడుతున్నారో చూడవచ్చు.
- **APM (Application Performance Monitoring):** కోడ్‌లో ఏ పాయింట్ దగ్గర అప్లికేషన్ స్లో అవుతుందో తెలుసుకోవచ్చు.
- **Log Management:** సిస్టమ్‌లో వచ్చే ఎర్రర్ లాగ్స్ (Logs) అన్నింటినీ ఒకే చోట చూడవచ్చు.
- **Alerting:** ఏదైనా సమస్య వచ్చినప్పుడు వెంటనే ఈమెయిల్ లేదా స్లాక్ (Slack) ద్వారా అలర్ట్స్ వస్తాయి.

---

### **ముఖ్యమైన పదాలు (Key Concepts in Telugu)**

మీరు చదువుతున్న topics లో ఇవి ముఖ్యమైనవి:

| పదం (Term)       | వివరణ (Explanation)                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Agent**        | సర్వర్లలో ఇన్‌స్టాల్ చేసే ఒక చిన్న సాఫ్ట్‌వేర్. ఇది డేటాను సేకరించి Datadog కి పంపుతుంది. |
| **Dashboards**   | గ్రాఫ్‌లు మరియు చార్ట్‌ల ద్వారా సిస్టమ్ యొక్క ఆరోగ్యాన్ని (Health) చూపే స్క్రీన్.         |
| **Metrics**      | సిస్టమ్ పనితీరును కొలిచే సంఖ్యలు (ఉదా: CPU శాతం, రెస్పాన్స్ టైమ్).                        |
| **Logs**         | అప్లికేషన్ లో జరిగే ప్రతి సంఘటనను రికార్డ్ చేసే సమాచారం.                                  |
| **Tracing**      | ఒక రిక్వెస్ట్ యూజర్ దగ్గర నుండి సర్వర్ వరకు ఎలా ప్రయాణిస్తుందో ట్రాక్ చేయడం.              |
| **Integrations** | AWS, Docker, Kubernetes వంటి ఇతర టూల్స్‌ను Datadog తో అనుసంధానించడం.                      |

---

### **Datadog ఎలా పనిచేస్తుంది? (How it works?)**

1. **Installation:** మీ సర్వర్లు లేదా క్లౌడ్ ఎన్విరాన్‌మెంట్‌లో "Datadog Agent" ని ఇన్‌స్టాల్ చేస్తారు.
2. **Collection:** ఈ ఏజెంట్ ఆటోమేటిక్‌గా డేటాను, లాగ్స్‌ని సేకరిస్తుంది.
3. **Visualization:** సేకరించిన డేటాను అందమైన గ్రాఫ్‌ల (Dashboards) రూపంలో చూపిస్తుంది.
4. **Analysis:** ఏదైనా సమస్య వస్తే, అది ఎక్కడి నుండి వస్తుందో విశ్లేషించి (Troubleshooting) అలర్ట్స్ పంపిస్తుంది.

---

మీ దగ్గర ఉన్న టాపిక్స్‌లో ఏదైనా నిర్దిష్టమైన అంశంపై (ఉదాహరణకు: **Infrastructure Monitoring** లేదా **APM** లేదా **Agent Installation**) మీకు ఇంకా వివరంగా కావాలంటే అడగండి, నేను వివరిస్తాను!

## మీరు ఇప్పుడు నేర్చుకుంటున్న టాపిక్స్‌లో ప్రత్యేకంగా దేని గురించి తెలుసుకోవాలని అనుకుంటున్నారు?

## What is Observability?

మీరు పైన పేర్కొన్న అంశాలు ఒక ఆధునిక సాఫ్ట్‌వేర్ ఇంజనీర్ లేదా డెవొప్స్ (DevOps) నిపుణుడికి చాలా కీలకం. వీటిని సులభంగా అర్థం చేసుకోవడానికి ఒక ఉదాహరణతో చూద్దాం.

కల్పించుకోండి, మీరు ఒక **రెస్టారెంట్** నడుపుతున్నారు అనుకుందాం:

### 1. Observability అంటే ఏమిటి?

మీ రెస్టారెంట్‌లో లోపల వంటగదిలో ఏం జరుగుతోంది? వెయిటర్లు ఎలా సర్వ్ చేస్తున్నారు? కస్టమర్లు ఎంతసేపు వేచి ఉంటున్నారు? ఇవన్నీ గమనించి, ఎక్కడైనా సమస్య వస్తే అది ఎందుకు వచ్చిందో వెంటనే కనిపెట్టే సామర్థ్యాన్నే **Observability** అంటారు.

### 2. ప్రధాన అంశాలు (The Building Blocks)

- **Monitoring:** మీ రెస్టారెంట్ ఓపెన్ ఉందా? లేదా? అని చూడటం. ఇది 'సిస్టమ్ సరిగ్గా పనిచేస్తుందా?' అని చెప్తుంది.
- **Logging:** రెస్టారెంట్‌లో జరిగిన ప్రతి సంఘటనను ఒక డైరీలో రాసి పెట్టడం. (ఉదా: "మధ్యాహ్నం 2 గంటలకు గ్యాస్ అయిపోయింది").
- **Metrics:** సంఖ్యల రూపంలో కొలవడం. (ఉదా: ఒక గంటలో ఎంతమంది కస్టమర్లు వచ్చారు? వంటకు ఎంత సమయం పడుతోంది?).
- **Tracing:** ఒక కస్టమర్ ఆర్డర్ ఇచ్చింది మొదలు, వారికి భోజనం అందే వరకు ఆ ఆర్డర్ ఏయే స్టేజీల (Kitchen -> Waiter -> Table) ద్వారా వెళ్లిందో ట్రాక్ చేయడం.
- **Events:** అకస్మాత్తుగా జరిగే మార్పులు (ఉదా: పవర్ కట్ అవ్వడం లేదా ఒక వంటకం అయిపోవడం).
- **APM (Application Performance Monitoring):** వంటగదిలో ఏ వంటకం తయారీకి ఎక్కువ సమయం పడుతోందో, ఆ "బాటిల్‌నెక్" (Bottleneck) ఎక్కడ ఉందో కనిపెట్టడం.
- **Infrastructure Monitoring:** రెస్టారెంట్ బిల్డింగ్ (సర్వర్లు), కరెంట్, గ్యాస్ వంటి బేసిక్ సౌకర్యాల పరిస్థితి చూడటం.
- **RUM (Real User Monitoring):** అసలైన కస్టమర్లు రెస్టారెంట్‌కు వచ్చాక వారి అనుభవం ఎలా ఉంది (టేబుల్ వద్ద వేచి ఉండటం, భోజనం రుచి) అని పర్యవేక్షించడం.
- **Synthetic Monitoring:** కస్టమర్లు రాకముందే, మనమే ఒక టెస్ట్ కస్టమర్‌ను పంపి "అన్నీ బాగున్నాయా?" అని చెక్ చేయడం.

---

### 3. వర్కింగ్ ఫ్లో (Understand Application)

Datadog వంటి టూల్స్ ఈ డేటాను ఎలా ప్రాసెస్ చేస్తాయో ఇక్కడ చూడండి:

1. **Application:** మీ సాఫ్ట్‌వేర్ రన్ అవుతున్నప్పుడు అది నిరంతరం డేటాను ఉత్పత్తి చేస్తుంది.
2. **Metrics (డేటా సేకరణ):** ఈ డేటా అంతా సేకరించబడుతుంది.
3. **Dashboards:** సేకరించిన డేటాను అందమైన గ్రాఫ్‌లు, చార్ట్‌లుగా మార్చి ఒకే స్క్రీన్ మీద చూపిస్తారు. దీన్నే 'డాష్‌బోర్డ్' అంటారు.
4. **Alerts:** ఒకవేళ సర్వర్ డౌన్ అయితే లేదా లోడ్ ఎక్కువైతే, వెంటనే ఇంజనీర్లకు ఫోన్ లేదా మెసేజ్ రావడం.

### క్లుప్తంగా:

- **Monitoring/Logging/Metrics/Tracing:** ఇవి డేటా సోర్సెస్ (డేటా సేకరించే మార్గాలు).
- **APM/Infrastructure/RUM/Synthetic:** ఇవి పర్యవేక్షించే ఏరియాలు (ఎక్కడ చూస్తున్నాం).
- **Dashboards/Alerts:** ఇవి అవుట్‌పుట్ (డేటాను చూడటం మరియు సమస్యలను గుర్తించడం).

## మీరు Datadog లో వీటిలో దేనిని ముందుగా ఇంప్లిమెంట్ చేయాలనుకుంటున్నారు లేదా వీటిలో ఏ అంశంపై మీరు ప్రాక్టికల్ ప్రాజెక్ట్ చేస్తున్నారు?

## Datadog Architecture

Datadog ఆర్కిటెక్చర్ అనేది చాలా పద్ధతిగా రూపొందించబడింది. ఒక **NodeJS అప్లికేషన్** నుండి Datadog క్లౌడ్ వరకు డేటా ఎలా ప్రయాణిస్తుందో ఈ క్రింది వివరణ ద్వారా సులభంగా అర్థం చేసుకోవచ్చు.

---

### **1. Datadog ఆర్కిటెక్చర్ భాగాలు (Core Components)**

- **Datadog Agent:** ఇది మీ సర్వర్ (NodeJS ఉన్నచోట) పైన రన్ అయ్యే ఒక సాఫ్ట్‌వేర్. ఇది అప్లికేషన్ నుండి డేటాను సేకరించి (Collect), Datadog క్లౌడ్‌కు పంపుతుంది.
- **SaaS Platform:** ఇది Datadog యొక్క ప్రధాన సర్వర్ (Cloud). మీరు మీ బ్రౌజర్‌లో చూసేదంతా ఇదే. ఇక్కడే డేటా అంతా స్టోర్ అవుతుంది మరియు విశ్లేషించబడుతుంది.
- **Integrations:** మీ NodeJS అప్లికేషన్‌ను Datadog తో అనుసంధానించడానికి ఉపయోగించే ప్లగిన్స్.
- **API:** ఇతర అప్లికేషన్ల నుండి డేటాను నేరుగా Datadog కి పంపడానికి లేదా అక్కడి నుండి పొందడానికి ఉపయోగించే మార్గం.

---

### **2. డేటా ఫ్లో (Data Flow - Step-by-Step)**

మీరు అడిగినట్లుగా, NodeJS అప్లికేషన్ నుండి డేటా ఎలా వెళ్తుందో ఇక్కడ ఉంది:

1. **NodeJS App (Source):** మీ అప్లికేషన్ రన్ అవుతున్నప్పుడు, Datadog Library (Instrumentation) కోడ్ ద్వారా మెట్రిక్స్, లాగ్స్ మరియు ట్రేసెస్ జనరేట్ అవుతాయి.
2. **Datadog Agent (Collector):**

- మీ సర్వర్‌లో రన్ అవుతున్న ఏజెంట్, అప్లికేషన్ నుండి డేటాను రిసీవ్ చేసుకుంటుంది.
- అంతేకాకుండా, ఆ సర్వర్ యొక్క CPU, Memory వంటి 'Infrastructure' డేటాను కూడా ఇదే సేకరిస్తుంది.

3. **Datadog Cloud (Processing & Storage):**

- ఏజెంట్ నుండి వచ్చిన డేటాను Datadog క్లౌడ్ రిసీవ్ చేసుకుంటుంది.
- ఇక్కడ డేటా ప్రాసెస్ చేయబడి, ఇండెక్స్ (Index) చేయబడుతుంది.
- **Monitors:** ఇక్కడ మనం సెట్ చేసిన కండిషన్స్ ప్రకారం (ఉదా: 500 ఎర్రర్స్ పెరిగితే) అలర్ట్స్ ట్రిగ్గర్ అవుతాయి.

4. **Dashboard (Visualization):** చివరగా, ఈ డేటా అంతా అందమైన గ్రాఫ్‌ల రూపంలో మీకు డాష్‌బోర్డ్‌లో కనిపిస్తుంది.

---

### **3. డేటా ఫ్లో ఫ్లోచార్ట్ (Simplified)**

```text
[ NodeJS App ]  (Instrumentation/Datadog SDK)
      |
      V
[ Datadog Agent ] (Collector on Server)
      |
      V
[ Datadog Cloud ] (Processing, Storage, Alerting)
      |
      |--> [ Monitors/Alerts ] (Send Notifications)
      |
      V
[ Dashboards ] (View Metrics, Logs, Traces)

```

---

### **4. ముఖ్యమైన నోట్స్:**

- **Logs:** మీ NodeJS అప్లికేషన్ నుండి వచ్చే `console.log` లేదా `winston` లాగ్స్, ఏజెంట్ ద్వారా క్లౌడ్‌కు వెళ్తాయి.
- **Traces:** NodeJS లో ఒక API కాల్ జరిగినప్పుడు, అది ఎంత సమయం తీసుకుందో తెలుసుకోవడానికి **Datadog Tracing Library** ని కోడ్‌లో ఇన్‌స్టాల్ చేస్తారు.
- **Monitors:** ఇవి మీ సెక్యూరిటీ గార్డులు. ఏవైనా తప్పులు జరిగినప్పుడు వెంటనే మీకు తెలియజేస్తాయి.

## **మీ తదుపరి అడుగు:** మీరు ఇప్పుడు NodeJS అప్లికేషన్‌లో Datadog ని సెటప్ చేస్తున్నారా? ఒకవేళ కోడ్ లెవల్ లో (NodeJS SDK ఇన్‌స్టాలేషన్) మీకు ఏవైనా సందేహాలు ఉంటే అడగండి!

# 2: Node.js Instrumentation

Datadog లో మీ **NodeJS అప్లికేషన్‌ను ట్రాక్ (Trace) చేయడానికి** ఇన్స్టాలేషన్ మరియు ఇన్స్ట్రుమెంటేషన్ (Instrumentation) ప్రక్రియ చాలా ముఖ్యమైనది. దీన్ని స్టెప్-బై-స్టెప్ అర్థం చేసుకుందాం.

---

### **1. Datadog ఇన్‌స్టాలేషన్ (Installation)**

మీ సర్వర్‌లో (లేదా కంటైనర్‌లో) Datadog Agent ని ఇన్‌స్టాల్ చేయడం మొదటి అడుగు.

- **Agent Install:** Datadog వెబ్‌సైట్‌లో మీ OS (Linux/Windows/Docker) ని బట్టి ఒక కమాండ్ ఇస్తారు. దాన్ని సర్వర్‌లో రన్ చేయాలి.
- **API Key:** ఏజెంట్ ఇన్‌స్టాల్ చేసేటప్పుడు మీ Datadog అకౌంట్‌కు సంబంధించిన **API Key**ని తప్పనిసరిగా ఇవ్వాలి. ఇది మీ సర్వర్ నుండి వచ్చే డేటాను మీ అకౌంట్‌కు చేరుస్తుంది.

---

### **2. Instrumentation (ట్రేసింగ్ ఎలా జరుగుతుంది?)**

NodeJS అప్లికేషన్‌లో HTTP రిక్వెస్ట్‌లను ట్రాక్ చేయడానికి మనం **`dd-trace`** అనే లైబ్రరీని వాడతాము.

#### **A. Auto Instrumentation (ఆటోమేటిక్)**

ఇది చాలా ఈజీ పద్ధతి. మీరు కోడ్‌లో ఎటువంటి మార్పులు చేయకుండానే Datadog ఆటోమేటిక్‌గా అన్ని HTTP కాల్స్‌ను (Express, Koa, Fastify వంటి ఫ్రేమ్‌వర్క్స్) ట్రాక్ చేస్తుంది.

- మీ అప్లికేషన్ స్టార్ట్ అయ్యేటప్పుడు `-r dd-trace/init` అని యాడ్ చేస్తే చాలు.
- **Example:** `node -r dd-trace/init app.js`

#### **B. Manual Instrumentation (మ్యాన్యువల్)**

ఒకవేళ మీరు అప్లికేషన్‌లో ఏదైనా ఒక నిర్దిష్టమైన ఫంక్షన్‌ను లేదా డేటాబేస్ క్వెరీని ప్రత్యేకంగా ట్రాక్ చేయాలనుకుంటే, దాన్ని మ్యాన్యువల్‌గా కోడ్‌లో రాయాలి.

- **Example:**

```javascript
const tracer = require("dd-trace").init();
// ఒక నిర్దిష్టమైన పనిని ట్రాక్ చేయడం
const span = tracer.startSpan("custom_task");
// మీ కోడ్...
span.finish();
```

#### **C. Plugins**

Datadog చాలా ఫ్రేమ్‌వర్క్‌లకు (Express, Axios, MySQL, MongoDB) సపోర్ట్ చేసే ప్లగిన్స్‌ని కలిగి ఉంటుంది. మీరు `dd-trace` ని ఇన్‌స్టాల్ చేసినప్పుడు, అది ఆటోమేటిక్‌గా వీటిని గుర్తించి డేటాను సేకరిస్తుంది. మీరు వీటిని ఎనేబుల్ చేయాల్సిన అవసరం లేదు, అది వాటంతట అదే జరుగుతుంది.

---

### **3. Trace HTTP Requests (ముఖ్యమైనది)**

మీ NodeJS యాప్ లో వచ్చే ప్రతి **HTTP Request** ని Datadog లో చూడాలంటే:

1. **Library Install:**
   `npm install dd-trace --save`
2. **Initialize:** మీ అప్లికేషన్ ఫైల్ (ఉదా: `index.js`) లో అందరికంటే పైన దీనిని రాయండి:

```javascript
require("dd-trace").init({
  service: "my-nodejs-app", // మీ సర్వీస్ పేరు
  env: "production", // ఎన్విరాన్మెంట్
});
```

3. **Result:** ఇప్పుడు మీరు మీ అప్లికేషన్‌ను రన్ చేస్తే, ప్రతి HTTP Request (GET, POST, etc.) Datadog లోని **APM -> Traces** సెక్షన్‌లో కనిపిస్తుంది.

---

### **సారాంశం (Summary)**

| అంశం                       | వివరణ                                                     |
| -------------------------- | --------------------------------------------------------- |
| **Agent**                  | డేటాను పంపే "పోస్ట్ మన్".                                 |
| **Auto Instrumentation**   | కోడ్ మార్చకుండానే ఆటోమేటిక్‌గా డేటా సేకరించడం.            |
| **Manual Instrumentation** | ముఖ్యమైన కోడ్ బ్లాక్స్ కోసం ప్రత్యేకంగా ట్రేసింగ్ చేయడం.  |
| **Plugins**                | ఫ్రేమ్‌వర్క్ (Express, etc.) తో సులభంగా అనుసంధానం అవ్వడం. |

**ఒక చిన్న చిట్కా:** మీరు ఎప్పుడైనా APM సెక్షన్‌లో **"Trace HTTP Requests"** చూసేటప్పుడు, ఆ రిక్వెస్ట్ ఎక్కడ స్లో అవుతుందో (ఎక్కువ సమయం ఎక్కడ తీసుకుంటుందో) కూడా చూడవచ్చు. దీన్నే 'Flame Graph' అంటారు.

## ఇప్పుడు మీరు మీ NodeJS అప్లికేషన్‌లో `dd-trace` లైబ్రరీని ఇన్స్టాల్ చేయడానికి ట్రై చేస్తున్నారా? ఏదైనా ఎర్రర్ వస్తే చెప్పండి, సాల్వ్ చేద్దాం!

# 3: Logging

Datadog లో లాగ్స్ (Logs) పర్యవేక్షించడం అనేది అప్లికేషన్ సమస్యలను త్వరగా గుర్తించడానికి చాలా అవసరం. మీరు అడిగిన అంశాలను, ముఖ్యంగా లాగ్స్ మరియు ట్రేసెస్ (Traces) అనుసంధానాన్ని (Correlation) తెలుగులో సులభంగా అర్థం చేసుకుందాం.

---

### **1. Logging Basics (లాగింగ్ ప్రాథమికాంశాలు)**

- **Structured Logs (స్ట్రక్చర్డ్ లాగ్స్):** లాగ్స్ అనేవి కేవలం మనుషులు చదివే టెక్స్ట్ లా కాకుండా, మెషిన్ (Datadog) సులభంగా అర్థం చేసుకునే ఫార్మాట్‌లో ఉండాలి.
- **JSON Logs:** ఇది స్ట్రక్చర్డ్ లాగ్స్ కోసం బెస్ట్ ఫార్మాట్. ప్రతి లాగ్ ఒక JSON ఆబ్జెక్ట్ లా ఉంటుంది.
- _ఉదాహరణ:_ `{"level": "error", "message": "Database connection failed", "user_id": 123}`

- **Log Levels:** ప్రతి లాగ్‌కు ఒక స్థాయిని కేటాయించాలి. దీనివల్ల ముఖ్యమైన సమస్యలను ఫిల్టర్ చేయడం సులభం అవుతుంది:
- **ERROR:** తీవ్రమైన సమస్యలు.
- **WARN:** ఏదో తప్పు జరిగే అవకాశం ఉంది (హెచ్చరిక).
- **INFO:** అప్లికేషన్ సాధారణ సమాచారం.
- **DEBUG:** డెవలప్‌మెంట్ సమయంలో వాడే వివరమైన సమాచారం.

---

### **2. Winston Integration (NodeJS లో)**

NodeJS లో `Winston` అనేది లాగింగ్ కోసం అత్యంత ప్రజాదరణ పొందిన లైబ్రరీ. Datadog తో దీన్ని వాడటం చాలా సులభం.

```javascript
const winston = require("winston");

const logger = winston.createLogger({
  format: winston.format.json(), // JSON ఫార్మాట్ లో లాగ్స్ రాయడం
  transports: [new winston.transports.File({ filename: "app.log" })],
});

logger.info("User logged in", { userId: 123 });
```

_(గమనిక: Datadog Agent ఈ ఫైల్‌ను రీడ్ చేసి క్లౌడ్‌కు పంపుతుంది.)_

---

### **3. Correlate Logs with Traces (అత్యంత ముఖ్యమైనది)**

ఇదే Datadog యొక్క అసలైన శక్తి! ఒక యూజర్ రిక్వెస్ట్ వచ్చినప్పుడు, ఆ రిక్వెస్ట్ కి సంబంధించిన **Trace ID** ని లాగ్స్‌తో జత చేయడం ద్వారా, ఎర్రర్ వచ్చినప్పుడు ఆ ఎర్రర్ ఏ రిక్వెస్ట్ వల్ల వచ్చిందో సెకన్లలో తెలుసుకోవచ్చు.

#### **ఎలా పనిచేస్తుంది (The Flow):**

1. **Request:** ఒక యూజర్ మీ API ని హిట్ చేస్తాడు.
2. **Trace ID Generation:** Datadog ఆ రిక్వెస్ట్ కి ఒక **Unique Trace ID** ని క్రియేట్ చేస్తుంది.
3. **Log Injection:** Winston లాగ్ రాసేటప్పుడు, ఆ లాగ్‌లో ఆటోమేటిక్‌గా `dd.trace_id` అనే ఫీల్డ్ యాడ్ అవుతుంది.
4. **Datadog:** ఈ డేటా మొత్తం Datadog క్లౌడ్ కి వెళ్తుంది.
5. **Investigation:**

- మీరు Datadog లో ఎర్రర్ లాగ్‌ను క్లిక్ చేస్తారు.
- అక్కడ మీకు **"View Trace"** అనే ఆప్షన్ కనిపిస్తుంది.
- దాన్ని క్లిక్ చేయగానే, ఆ లాగ్ ఏ రిక్వెస్ట్ కి సంబంధించిందో, ఆ రిక్వెస్ట్ ఏ ఏ ఫంక్షన్ల ద్వారా వెళ్ళిందో క్లియర్ గా కనిపిస్తుంది.

---

### **సారాంశం (Summary Table)**

| అడుగు (Step)      | ఏమి జరుగుతుంది?                                                         |
| ----------------- | ----------------------------------------------------------------------- |
| **Log Creation**  | Winston ద్వారా JSON ఫార్మాట్‌లో లాగ్స్ రాయడం.                           |
| **Injecting ID**  | ప్రతి లాగ్‌లో `Trace ID` ని జత చేయడం (Auto-instrumentation ద్వారా).     |
| **Datadog Link**  | Datadog ఆ `Trace ID` ని బట్టి లాగ్స్ మరియు ట్రేసెస్ ని కలిపి ఉంచుతుంది. |
| **Visualization** | ఒకే క్లిక్ తో "లాగ్ నుండి ట్రేస్ కి" వెళ్లడం.                           |

**ఇది ఎందుకు ముఖ్యం?**
సాధారణంగా లాగ్స్ లో "ఏమైందో" తెలుస్తుంది, కానీ "ఎలా జరిగిందో" (Flow) తెలియదు. **Correlation** చేయడం వల్ల, మీరు కోడ్‌లో ఎక్కడో ఒక లైన్ వెతకాల్సిన అవసరం లేకుండానే, మొత్తం రిక్వెస్ట్ జర్నీని కళ్లముందు చూడవచ్చు.

## మీరు మీ NodeJS ప్రాజెక్ట్‌లో ఇప్పటికే `winston` వాడుతున్నారా? లేదా దీనికి సంబంధించిన కాన్ఫిగరేషన్ లో ఏవైనా సందేహాలు ఉన్నాయా?

# 4: Custom Metrics

Datadog లో **Custom Metrics** అంటే మీ అప్లికేషన్‌లోని బిజినెస్ లాజిక్‌కు సంబంధించిన డేటాను సేకరించడం. ఉదాహరణకు, ఒక వెబ్‌సైట్‌లో ఎన్ని 'Add to Cart' క్లిక్స్ జరిగాయి లేదా ఒక ఆర్డర్ ప్రాసెస్ అవ్వడానికి ఎంత సమయం పట్టింది వంటివి.

వీటిని అర్థం చేసుకోవడానికి ఒక రియల్ వరల్డ్ ఎగ్జాంపుల్ మరియు Datadog మెట్రిక్ రకాలు చూద్దాం:

---

### **1. Metric Types (మెట్రిక్ రకాలు)**

| Metric Type      | వివరణ (Explanation)                                                                                     | ఉదాహరణ (Example)                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Counter**      | ఇది ఎప్పుడూ పెరుగుతూనే ఉంటుంది (monotonic). ఎప్పటికీ తగ్గదు.                                            | వెబ్‌సైట్ కి వచ్చిన మొత్తం విజిటర్లు (Total Page Hits).       |
| **Gauge**        | ఇది ఒక పాయింట్ వద్ద విలువ ఎలా ఉందో చెబుతుంది. ఇది పెరగవచ్చు లేదా తగ్గవచ్చు.                             | కరెంట్ సర్వర్ లో ఉన్న ఫ్రీ మెమరీ (Free Memory).               |
| **Histogram**    | డేటా యొక్క డిస్ట్రిబ్యూషన్ (సగటు, 95th పర్సంటైల్) చూపిస్తుంది. అంటే డేటా ఎంత విభిన్నంగా ఉందో చెబుతుంది. | పేజీ లోడ్ అయ్యే సమయం (Latency).                               |
| **Distribution** | ఇది కూడా హిస్టోగ్రామ్ లాంటిదే, కానీ పెద్ద ఎత్తున డేటా (Aggregated) వచ్చినప్పుడు ఇది బాగా పనిచేస్తుంది.  | గ్లోబల్ ట్రాఫిక్ అనలిటిక్స్.                                  |
| **Rate**         | ఒక సెకనుకు ఎన్ని పనులు జరుగుతున్నాయో (Per Second) కొలుస్తుంది.                                          | సెకనుకు ఎన్ని రిక్వెస్టులు వస్తున్నాయి (Requests per second). |

---

### **2. NodeJS లో వీటిని ఎలా పంపాలి?**

NodeJS లో Datadog మెట్రిక్స్ పంపడానికి `dogstatsd` అనే లైబ్రరీని వాడతాము.

#### **ఉదాహరణ కోడ్:**

```javascript
const StatsD = require("hot-shots");
const dogstatsd = new StatsD();

// 1. Counter: ఆర్డర్ కౌంట్ పెంచడం
dogstatsd.increment("order.created");

// 2. Gauge: కరెంట్ ఆర్డర్ క్యూ సైజ్
dogstatsd.gauge("order.queue.size", 10);

// 3. Histogram: రెస్పాన్స్ టైమ్ రికార్డ్ చేయడం
dogstatsd.histogram("order.processing.time", 200);
```

---

### **3. ఎప్పుడు ఏది వాడాలి? (Quick Guide)**

- **Counter** ని ఎప్పుడు వాడాలంటే: మీరు "ఎన్ని సార్లు జరిగింది?" (How many times?) అని లెక్కించాలనుకున్నప్పుడు. (ఉదా: లాగిన్ అటెంప్ట్స్, ఎర్రర్ కౌంట్).
- **Gauge** ని ఎప్పుడు వాడాలంటే: మీరు "ప్రస్తుతం ఎంత ఉంది?" (What is the current value?) అని తెలుసుకోవాలనుకున్నప్పుడు. (ఉదా: కరెంట్ ఆన్‌లైన్ యూజర్లు).
- **Histogram** ని ఎప్పుడు వాడాలంటే: మీరు కేవలం సగటు (Average) మాత్రమే కాకుండా, మినిమం, మాక్సిమం మరియు పర్సంటైల్స్ (P95, P99) కూడా చూడాలనుకున్నప్పుడు.

---

### **4. ముఖ్యమైన గమనిక: Rate**

`Rate` అనేది ప్రత్యేకమైన మెట్రిక్ కాదు, ఇది `Counter` ద్వారా కాలిక్యులేట్ చేయబడుతుంది. Datadog డాష్‌బోర్డ్ లో `Counter` మెట్రిక్ పైన `.rate()` అనే ఫంక్షన్ వాడితే, అది ఆటోమేటిక్‌గా పర్-సెకండ్ లెక్కలోకి మారిపోతుంది.

---

### **మీ ప్రాజెక్ట్ కోసం సలహా:**

మీ NodeJS అప్లికేషన్‌లో ఏదైనా ఒక ఫంక్షన్ కోసం **Counter** ని ట్రై చేయండి.

1. `dogstatsd` లైబ్రరీని ఇన్‌స్టాల్ చేయండి: `npm install hot-shots`
2. పైన ఉన్న కోడ్ స్నిప్పెట్ ఉపయోగించి ఒక కౌంటర్ పంపండి.
3. Datadog అకౌంట్‌లో **Metrics -> Explorer** కి వెళ్లి మీ మెట్రిక్ పేరును వెతకండి.

## మీరు ఏ రకమైన మెట్రిక్ ని మీ ప్రాజెక్ట్ లో ఇంప్లిమెంట్ చేద్దాం అనుకుంటున్నారు? ఏదైనా కన్ఫ్యూజన్ ఉందా?

# 5: Distributed Tracing

ఒక అప్లికేషన్ లో సర్వీసులు ఒకదానితో ఒకటి మాట్లాడుకుంటున్నప్పుడు (Distributed Tracing), ఆ రిక్వెస్ట్ యొక్క ప్రయాణాన్ని ట్రాక్ చేయడానికి **Spans** అనే కాన్సెప్ట్ చాలా ముఖ్యం. మీ ఆర్కిటెక్చర్ (API Gateway -> Lambda -> DB) లో ఇది ఎలా పనిచేస్తుందో చూద్దాం.

### **1. Span అంటే ఏమిటి?**

ఒక రిక్వెస్ట్ లో జరిగే ఒక చిన్న పనిని (Unit of Work) **Span** అంటారు. ప్రతి Span లో ఆ పని ఎప్పుడు మొదలైంది, ఎంత సమయం తీసుకుంది, సక్సెస్ అయ్యిందా లేదా ఫెయిల్ అయ్యిందా అనే వివరాలు ఉంటాయి.

---

### **2. Span రకాలు (Types of Spans)**

మీ ఉదాహరణను బట్టి చూస్తే:

- **Root Span:** రిక్వెస్ట్ ఎక్కడ మొదలైందో అదే Root Span.
- _ఉదాహరణ:_ **API Gateway** కి రిక్వెస్ట్ వచ్చినప్పుడు మొదలయ్యే Span ఇదే. ఇది మొత్తం జర్నీకి మూలం.

- **Parent Span:** ఒక పనిని పూర్తి చేయడానికి మరొక పనిని పిలిచినప్పుడు, ఆ పిలిచిన (Calling) సర్వీస్ Span ని Parent Span అంటారు.
- _ఉదాహరణ:_ **Lambda A** అనేది **Lambda B** ని పిలిస్తే, Lambda A ఇక్కడ Parent Span అవుతుంది.

- **Child Span:** Parent Span పిలవడం వల్ల జరిగే పనిని Child Span అంటారు.
- _ఉదాహరణ:_ **Lambda B**, **PostgreSQL** ని క్వెరీ చేస్తున్నప్పుడు, ఆ డేటాబేస్ క్వెరీ ఒక Child Span అవుతుంది.

---

### **3. డేటా ఫ్లో మరియు ట్రేసింగ్ (Visual Flow)**

ప్రతి కాల్ ఒక Span ని క్రియేట్ చేస్తుంది, ఇవి ఒకదానితో ఒకటి ఇలా లింక్ అయి ఉంటాయి:

```text
[API Gateway] (Root Span)
      |
      |--> [Lambda A] (Child Span of Gateway)
                |
                |--> [Lambda B] (Child Span of Lambda A)
                          |
                          |--> [PostgreSQL] (Child Span of Lambda B)
                          |
                          |--> [Redis] (Child Span of Lambda B)

```

**ఇది ఎలా పనిచేస్తుంది?**

1. **Context Propagation:** ఒక సర్వీస్ నుండి మరో సర్వీస్‌కు రిక్వెస్ట్ వెళ్లేటప్పుడు, `Trace ID` మరియు `Parent Span ID` ని హెడర్స్ (Headers) ద్వారా పంపుతారు.
2. **Linkage:** Lambda B కి రిక్వెస్ట్ అందినప్పుడు, అది తనకి వచ్చిన `Trace ID` ని పట్టుకుని, తను చేసే పనిని Lambda A కి Child గా రిపోర్ట్ చేస్తుంది.

---

### **4. ఎందుకు ఇది ముఖ్యం?**

- **Latency Bottleneck:** ఒక రిక్వెస్ట్ మొత్తం 2 సెకన్లు తీసుకుంటే, ఏ సర్వీస్ (Lambda A నా, B నా, లేక DB నా?) వల్ల స్లో అవుతుందో ఈ ట్రేసింగ్ ద్వారా వెంటనే తెలిసిపోతుంది.
- **Error Tracking:** డేటాబేస్ లో ఎర్రర్ వస్తే, ఏ API రిక్వెస్ట్ వల్ల ఆ ఎర్రర్ వచ్చిందో ఆ Root Span ద్వారా పట్టుకోవచ్చు.

---

### **ఒక చిన్న చిట్కా:**

Datadog లో మీరు **APM -> Traces** కి వెళ్లినప్పుడు, మీకు ఒక **"Flame Graph"** కనిపిస్తుంది. అందులో పొడవుగా ఉండే బార్ (Bar) ఏ సర్వీస్ దయితే, ఆ సర్వీస్ ఎక్కువ సమయం తీసుకుంటున్నట్లు అర్థం.

## మీరు ఈ Traces ని మీ NodeJS అప్లికేషన్ ద్వారా Datadog కి పంపుతున్నారా? పైన ఉన్న సర్వీసుల్లో (Lambda/DB) ఎక్కడైనా పర్ఫార్మెన్స్ సమస్య ఉందా?

# 6: Error Tracking

Datadog లో **Error Tracking** అనేది మీ అప్లికేషన్‌లోని సమస్యలను కనుగొని, వాటిని పరిష్కరించే పద్ధతి. అప్లికేషన్ క్రాష్ అవ్వకముందే లేదా ఎర్రర్ వచ్చిన వెంటనే దాన్ని పట్టుకోవడమే దీని ముఖ్య ఉద్దేశ్యం.

వీటిని ఎలా అర్థం చేసుకోవాలో చూద్దాం:

---

### **1. ఎర్రర్లను క్యాప్చర్ చేయడం (Capture Exceptions)**

Datadog లోని **APM** ఆటోమేటిక్‌గా మీ అప్లికేషన్‌లో వచ్చే అన్‌హ్యాండిల్డ్ ఎర్రర్లను పట్టుకుంటుంది. అయితే, డెవలపర్లుగా మనం కొన్ని చోట్ల **Try-Catch** బ్లాక్స్ పెట్టి ఎర్రర్లను రికార్డ్ చేయాలి:

```javascript
try {
  // మీ లాజిక్
} catch (error) {
  // Datadog కి ఎర్రర్‌ని పంపడం
  tracer.scope().active().setTag("error", error);
  throw error;
}
```

---

### **2. ఎర్రర్ రకాలు - విశ్లేషణ (Error Types)**

- **Timeouts:** ఒక సర్వీస్ (ఉదా: DB లేదా API) రెస్పాన్స్ ఇవ్వడానికి ఎక్కువ సమయం తీసుకున్నప్పుడు ఇది వస్తుంది. Datadog లో ఇది 'Latency' కింద కనిపిస్తుంది.
- **Unhandled Promise Rejections (NodeJS):** NodeJS లో అసింక్రోనస్ కోడ్ (Async/Await) రాసేటప్పుడు, దేనికైనా `.catch()` రాయకపోతే అప్లికేషన్ క్రాష్ అవ్వదు కానీ లోపల ఫెయిల్ అవుతుంది. Datadog దీన్ని ఆటోమేటిక్‌గా పట్టుకుంటుంది.
- **Validation Errors (400 Bad Request):** యూజర్ పంపిన డేటా సరిగ్గా లేనప్పుడు వస్తుంది. వీటిని ఎర్రర్స్ అనడం కంటే 'Business Logic issues' అనడం మంచిది.
- **DB Errors (500 Internal Server Error):** డేటాబేస్ కనెక్ట్ అవ్వకపోవడం, క్వెరీ తప్పుగా ఉండటం లేదా 'Unique Constraint' ఎర్రర్స్. వీటిని అప్లికేషన్‌లో తప్పనిసరిగా `try-catch` లో పెట్టాలి.

---

### **3. Datadog Error Tracking లో ముఖ్యమైనవి:**

1. **Grouping:** ఒకే ఎర్రర్ 100 మంది యూజర్లకు వస్తే, Datadog వాటిని విడివిడిగా చూపించకుండా **ఒకే గ్రూప్** లో చూపిస్తుంది (Issue Grouping). దీనివల్ల మీరు 100 ఎర్రర్లను కాకుండా 1 సమస్యను పరిష్కరిస్తే చాలు.
2. **Impact Analysis:** ఈ ఎర్రర్ ఎంతమంది యూజర్లను ప్రభావితం చేస్తోంది? ఇది ఎంత తీవ్రమైనది? అనేది గ్రాఫ్ రూపంలో కనిపిస్తుంది.
3. **Trace Connection:** Error Tracking లో ఉన్న ఆప్షన్ క్లిక్ చేస్తే, ఆ ఎర్రర్ ఏ "Trace ID" వల్ల వచ్చిందో, ఏ ఫంక్షన్ వల్ల వచ్చిందో నేరుగా చూడవచ్చు.

---

### **4. బెస్ట్ ప్రాక్టీస్ (Best Practice):**

- **Custom Tags:** ఎర్రర్ పంపేటప్పుడు అదనపు సమాచారం పంపండి.
- ఉదాహరణ: `user_id`, `request_body`, `api_endpoint`
- దీనివల్ల "ఈ ఎర్రర్ ఎవరికి వచ్చింది?" అని ఈజీగా తెలుస్తుంది.

**ఒక చిన్న ప్రాక్టికల్ టిప్:**
మీరు డేటాబేస్ ఎర్రర్స్ ని Datadog లో చూడాలనుకుంటే, మీ క్వెరీలను ఎప్పుడూ `try-catch` లో ఉంచండి. Datadog APM లైబ్రరీ `dd-trace` ని వాడుతుంటే, ఆటోమేటిక్‌గా SQL క్వెరీ ఫెయిల్యూర్స్ కూడా ట్రేస్‌లో రికార్డ్ అవుతాయి.

మీ అప్లికేషన్ లో ఎర్రర్ వస్తే దాన్ని నోటిఫికేషన్ ద్వారా మీకు తెలియజేసేలా **Monitor** ని సెటప్ చేశారా? (ఉదా: "ఎర్రర్ కౌంట్ నిమిషానికి 5 కంటే ఎక్కువ ఉంటే నాకు మెయిల్ పంపు" అని).

## ఇంకేదైనా పర్టికులర్ ఎర్రర్ ని హ్యాండిల్ చేయడం గురించి తెలుసుకోవాలనుకుంటున్నారా?

# 7: AWS Lambda Monitoring

సర్వర్ లెస్ (Serverless) ఆర్కిటెక్చర్‌లో, ముఖ్యంగా **AWS Lambda** వాడేటప్పుడు Datadog తో పర్యవేక్షించడం చాలా కీలకం. ఎందుకంటే ఇక్కడ సర్వర్ మన కంట్రోల్‌లో ఉండదు, కాబట్టి Lambda లోపల ఏం జరుగుతుందో తెలుసుకోవడానికి Datadogే ఆధారం.

---

### **1. సెటప్ చేయడం ఎలా? (Integration)**

- **Lambda Layer:** ఇది ఒక లైబ్రరీ ప్యాకేజీ. మీ Lambda ఫంక్షన్‌కు Datadog కోడ్‌ని అటాచ్ చేయడానికి దీన్ని వాడతాము. దీన్ని Lambda కాన్ఫిగరేషన్‌లో యాడ్ చేస్తే, అది ఆటోమేటిక్‌గా డేటాను సేకరిస్తుంది.
- **Datadog Lambda Extension:** ఇది ఒక చిన్న ప్రోగ్రామ్. ఇది Lambda రన్ అవుతున్నప్పుడు బ్యాక్‌గ్రౌండ్‌లో నడుస్తూ, మెట్రిక్స్ మరియు ట్రేసెస్ ని Datadog కి పంపిస్తుంది. దీనివల్ల మీ ఫంక్షన్ పర్ఫార్మెన్స్ తగ్గదు.

---

### **2. కీలకమైన మెట్రిక్స్ (Critical Metrics)**

Lambda పర్ఫార్మెన్స్‌ను అర్థం చేసుకోవడానికి ఈ పదాలు ముఖ్యం:

| మెట్రిక్ (Metric)         | వివరణ (Explanation)                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Cold Starts**           | Lambda ఫంక్షన్ మొదటిసారి రన్ అయినప్పుడు లేదా చాలా సేపు గ్యాప్ తర్వాత రన్ అయినప్పుడు తీసుకునే అదనపు సమయం. |
| **Invocation Metrics**    | మీ ఫంక్షన్ ఎన్నిసార్లు పిలవబడింది (How many times triggered)?                                            |
| **Duration**              | ఒక ఫంక్షన్ పూర్తి కావడానికి తీసుకున్న సమయం (Milliseconds).                                               |
| **Memory Usage**          | ఫంక్షన్ రన్ అవ్వడానికి ఎంత RAM వాడుతోంది? (ఎక్కువైతే ఫంక్షన్ క్రాష్ అవ్వచ్చు).                           |
| **Timeouts**              | మీరు సెట్ చేసిన సమయం (ఉదా: 3 సెకన్లు) కంటే ఎక్కువ తీసుకుంటే ఫంక్షన్ ఫెయిల్ అవుతుంది.                     |
| **Retries**               | ఫంక్షన్ ఫెయిల్ అయినప్పుడు, ఆటోమేటిక్‌గా మళ్ళీ ఎన్నిసార్లు ప్రయత్నించింది?                                |
| **Concurrent Executions** | ఒకే సమయంలో ఎన్ని Lambda ఫంక్షన్లు రన్ అవుతున్నాయి? (ఇది లిమిట్ దాటితే అప్లికేషన్ ఆగిపోవచ్చు).            |

---

### **3. ఇవి ఎందుకు గమనించాలి? (Troubleshooting)**

1. **Cold Starts తగ్గించడం:** ఒకవేళ మీ యూజర్లు "యాప్ స్లోగా ఉంది" అని చెప్తుంటే, దానికి కారణం Cold Starts కావచ్చు. Datadog లో `aws.lambda.cold_starts` అనే మెట్రిక్ చూడండి.
2. **Memory Optimization:** `aws.lambda.max_memory_used` ని గమనించండి. మీరు అలకేట్ చేసిన మెమరీలో 90% కంటే ఎక్కువ వాడుతుంటే, మెమరీని పెంచడం మంచిది.
3. **Timeout Issues:** ఒకవేళ ఫంక్షన్ మధ్యలోనే ఆగిపోతుంటే (Timeout), అది ఎక్కడ ఆగిపోతుందో **Tracing (APM)** ద్వారా చూడవచ్చు.
4. **Concurrency Limits:** మీ అప్లికేషన్‌కి ట్రాఫిక్ బాగా పెరిగినప్పుడు, AWS Concurrency లిమిట్స్ ని అకౌంట్ లెవల్‌లో చెక్ చేసుకోవాలి.

---

### **4. వర్కింగ్ ఫ్లో**

- **Lambda** -> **Extension** (Data collection) -> **Datadog** -> **Dashboard/Monitor**.
- మీరు Datadog లో Lambda కోసం ఒక **Out-of-the-box Dashboard** ని ఇంపోర్ట్ చేసుకోవచ్చు. అందులో పైన చెప్పిన అన్ని మెట్రిక్స్ ఆటోమేటిక్‌గా గ్రాఫ్‌ల రూపంలో కనిపిస్తాయి.

---

### **ఒక చిన్న చిట్కా:**

Serverless లో సమస్యలను పట్టుకోవడానికి **"Error Tracking"** కి అలర్ట్స్ సెట్ చేయడం మర్చిపోకండి. ఉదాహరణకు, **"Timeout" ఎర్రర్స్** వచ్చినప్పుడు మీకు వెంటనే అలర్ట్ వచ్చేలా `Monitor` క్రియేట్ చేయండి.

## మీరు మీ Lambda ఫంక్షన్‌కు Datadog ని అటాచ్ చేశారా? లేక ఇంకా ప్లాన్ చేస్తున్నారా? దీనికి సంబంధించి ఏదైనా కాన్ఫిగరేషన్ సమస్య ఉందా?

# 8: Database Monitoring

డేటాబేస్ అనేది ఏదైనా అప్లికేషన్‌కి గుండెకాయ వంటిది. Datadog **Database Monitoring (DBM)** ద్వారా మీ డేటాబేస్ (PostgreSQL, MySQL, MongoDB, DynamoDB) లోపల ఏం జరుగుతుందో మీరు క్లియర్ గా చూడవచ్చు.

డేటాబేస్ పర్ఫార్మెన్స్ తెలుసుకోవడానికి మీరు గమనించాల్సిన 5 కీలక అంశాలు ఇవే:

### 1. కీలకమైన మానిటరింగ్ పాయింట్స్ (What to Monitor)

- **Query Time (Latency):** ఒక క్వెరీ డేటాబేస్ నుండి ఫలితాన్ని తీసుకురావడానికి ఎంత సమయం తీసుకుంటోంది?
- **Slow Queries:** ఏ క్వెరీలు అత్యంత నెమ్మదిగా నడుస్తున్నాయో గుర్తించడం. ఇవే అప్లికేషన్ స్లో అవ్వడానికి ప్రధాన కారణం.
- **Locks:** ఒక డేటాబేస్ టేబుల్ లేదా రో (row) మీద లాక్ పడితే, మిగతా ప్రాసెస్లు ఆగిపోతాయి. ఇది పెరిగితే అప్లికేషన్ హ్యాంగ్ అవుతుంది.
- **Connections:** డేటాబేస్ కి ఎన్ని కనెక్షన్లు వస్తున్నాయి? కనెక్షన్ పూల్ నిండిపోతే కొత్త రిక్వెస్టులు రిజెక్ట్ అవుతాయి.
- **Deadlocks:** రెండు క్వెరీలు ఒకదానికొకటి లాక్ చేసుకుని ఆగిపోవడం. దీన్ని వెంటనే గుర్తించి పరిష్కరించాలి.

---

### 2. Datadog DBM ఎలా పనిచేస్తుంది?

Datadog లో **Database Monitoring** ని ఎనేబుల్ చేసినప్పుడు, అది క్వెరీల యొక్క **Execution Plan** ని కూడా చూపిస్తుంది.

- **PostgreSQL/MySQL:** వీటి కోసం మీరు Datadog ఏజెంట్ లో ప్రత్యేకమైన యూజర్ (ReadOnly access) ని క్రియేట్ చేసి పర్మిషన్లు ఇవ్వాలి. అది `pg_stat_statements` వంటి టేబుల్స్ నుండి డేటాను సేకరిస్తుంది.
- **MongoDB:** దీని కోసం Datadog Agent లో `mongodb` ఇంటిగ్రేషన్ ఎనేబుల్ చేయాలి. ఇది 'Operation counters' మరియు 'Memory usage' ని మానిటర్ చేస్తుంది.
- **DynamoDB (AWS):** ఇది సర్వర్ లెస్ కాబట్టి, CloudWatch ద్వారా డేటా సేకరిస్తుంది. ఇందులో `ReadCapacityUnits`, `WriteCapacityUnits`, `ThrottledRequests` వంటి మెట్రిక్స్ ముఖ్యం.

---

### 3. ఎలా విశ్లేషించాలి? (Troubleshooting Steps)

మీ డేటాబేస్ స్లోగా ఉంటే Datadog లో ఇలా వెతకండి:

1. **Query Samples:** Datadog DBM లో **"Explain Plan"** ఆప్షన్ చూడండి. ఇది మీ క్వెరీని డేటాబేస్ ఎలా రన్ చేస్తుందో (ఏ ఇండెక్స్ వాడుతుందో) చూపిస్తుంది.
2. **Top Spenders:** ఏ క్వెరీ మొత్తం డేటాబేస్ లో ఎక్కువ CPU లేదా టైమ్ తీసుకుంటుందో ఆ లిస్ట్ చూడండి.
3. **Wait Events:** క్వెరీ ఎందుకు ఆగుతోంది? (ఉదా: డిస్క్ ఐ/ఓ (I/O) వల్లనా, లాక్స్ వల్లనా?) అనేది Wait Events ద్వారా తెలుస్తుంది.

---

### 4. ముఖ్యమైన సూచన (Best Practices)

- **Indexing:** Slow Queries కనిపిస్తే, ఆ టేబుల్స్ కి సరిగ్గా 'Indexes' ఉన్నాయో లేదో చెక్ చేసుకోండి.
- **Connection Pooling:** కనెక్షన్ల సంఖ్య ఎక్కువ అవుతుంటే, మీ అప్లికేషన్ కోడ్ లో కనెక్షన్ పూలింగ్ వాడుతున్నారో లేదో చూడండి.
- **Alerts:** `Slow Query Time > 500ms` లేదా `Database Connections > 80%` లాంటి కండిషన్స్ పెట్టి అలర్ట్స్ సెట్ చేయండి.

---

### సారాంశం (Summary)

| DB రకం               | ముఖ్యమైన మానిటరింగ్ పాయింట్             |
| -------------------- | --------------------------------------- |
| **PostgreSQL/MySQL** | Slow queries, Deadlocks, Locks          |
| **MongoDB**          | Operation Throughput, Memory usage      |
| **DynamoDB**         | Throttled requests, Read/Write capacity |

## మీరు ప్రస్తుతం మీ ప్రాజెక్ట్‌లో **PostgreSQL** వాడుతున్నారా లేక **DynamoDB** నా? మీరు ఏదైనా ఒక డేటాబేస్ లోని "Slow Queries" ని చూస్తున్నట్లయితే, దాన్ని ఎలా ఫిక్స్ చేయాలో అడగండి, నేను హెల్ప్ చేస్తాను!

# 9: Redis Monitoring

Redis అనేది చాలా వేగవంతమైన **In-memory Data Store**. అప్లికేషన్ వేగాన్ని పెంచడానికి మనం దీన్ని 'Cache' గా వాడుతాము. Datadog ద్వారా Redis ని పర్యవేక్షించడం వల్ల మీ అప్లికేషన్ రెస్పాన్స్ టైమ్ ఎందుకు తక్కువగా ఉందో (లేదా ఎందుకు పెరిగిందో) సులభంగా అర్థం చేసుకోవచ్చు.

Redis మానిటరింగ్‌లో మీరు నేర్చుకోవాల్సిన ముఖ్యమైన 5 అంశాలు ఇక్కడ ఉన్నాయి:

---

### **1. ముఖ్యమైన మెట్రిక్స్ (Key Metrics)**

- **Cache Hit:** మీరు అడిగిన డేటా Redis లో దొరికినప్పుడు దాన్ని 'Hit' అంటారు. ఇది పెరిగితే అప్లికేషన్ చాలా వేగంగా పనిచేస్తుంది.
- **Cache Miss:** డేటా Redis లో లేక, అప్పుడు డేటాబేస్ (DB) నుండి తెచ్చుకోవాల్సి వస్తే దాన్ని 'Miss' అంటారు. ఇది ఎక్కువైతే మీ అప్లికేషన్ స్లో అవుతుంది.
- **Memory Usage:** Redis డేటాను రామ్ (RAM) లో దాస్తుంది. RAM నిండిపోతే Redis పాత డేటాను తొలగించడం మొదలుపెడుతుంది.
- **Evictions:** RAM నిండిపోయినప్పుడు, కొత్త డేటా కోసం పాత డేటాను బలవంతంగా తొలగించడాన్ని 'Eviction' అంటారు. ఇది ఎక్కువైతే మీ Cache పర్ఫార్మెన్స్ దెబ్బతింటుంది.
- **Latency:** క్లయింట్ అడిగిన డేటాను Redis ఎంత వేగంగా ఇస్తుందో (milliseconds) చూపే సమయం.

---

### **2. విశ్లేషణ - ఎప్పుడు జాగ్రత్త పడాలి?**

Datadog లో ఈ గ్రాఫ్స్ చూసేటప్పుడు ఈ విషయాలు గమనించండి:

1. **High Cache Miss Rate:** మీ Cache "Hit Ratio" తక్కువగా ఉంటే, అంటే మీరు డేటాను సరిగ్గా Cache చేయట్లేదని అర్థం. Cache లో ఉంచాల్సిన 'Keys' ని సరిగ్గా ఎంచుకోవాలి (TTL - Time to Live పెంచడం వంటివి చేయాలి).
2. **High Evictions:** గ్రాఫ్‌లో Evictions పెరుగుతుంటే, మీ Redis కి ఇచ్చిన RAM సరిపోవట్లేదని అర్థం. వెంటనే Redis సర్వర్ మెమరీ పెంచాలి.
3. **Latency Spikes:** క్వెరీ రెస్పాన్స్ టైమ్ సడన్ గా పెరిగితే, బహుశా మీరు ఏదైనా చాలా పెద్ద 'Key' ని రీడ్ చేస్తున్నారని అర్థం. Redis 'Single Threaded' కాబట్టి, ఒకేసారి పెద్ద డేటా ప్రాసెస్ చేస్తే మిగతావన్నీ ఆగిపోతాయి.

---

### **3. Datadog లో సెటప్ చేయడం ఎలా?**

- **Integration:** Datadog ఏజెంట్‌లో `redis` ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయాలి.
- **Configuration:** `redis.d/conf.yaml` ఫైల్‌లో మీ Redis హోస్ట్ (Host) మరియు పోర్ట్ (Port) ఇవ్వాలి.
- **Dashboard:** Datadog లో Redis కోసం "Out-of-the-box" డాష్‌బోర్డ్ ఉంటుంది. దీన్ని యాడ్ చేస్తే, పైన చెప్పిన అన్ని మెట్రిక్స్ మీకు అందమైన గ్రాఫ్‌ల రూపంలో కనిపిస్తాయి.

---

### **4. క్లుప్తమైన సారాంశం**

| మెట్రిక్            | మీ లక్ష్యం (Goal)                     |
| ------------------- | ------------------------------------- |
| **Cache Hit Ratio** | వీలైనంత ఎక్కువగా ఉండాలి (ఉదా: > 80%). |
| **Evictions**       | సున్నా (0) లేదా చాలా తక్కువగా ఉండాలి. |
| **Latency**         | చాలా తక్కువగా (ఉదా: < 1ms) ఉండాలి.    |
| **Memory Usage**    | 80% దాటకూడదు.                         |

---

**ఒక ముఖ్యమైన సలహా:**
మీరు `Cache Hit` పెంచడానికి, ఏ డేటా ఎక్కువగా అడుగుతున్నారో (Frequently accessed data) వాటిని మాత్రమే Cache లో ఉంచండి. అలాగే, `TTL (Time to Live)` ని సరిగ్గా సెట్ చేయడం వల్ల పాత డేటా ఆటోమేటిక్‌గా డిలీట్ అయ్యి Evictions తగ్గుతాయి.

## మీ అప్లికేషన్‌లో Redis ని ఏ పర్పస్ కోసం వాడుతున్నారు? Cache కోసమా? లేక Session Management కోసమా? దానిని బట్టి మానిటరింగ్ స్ట్రాటజీ మారుతుంది.

# 10: Dashboards

Datadog **Dashboards** అనేది మీ సిస్టమ్ యొక్క మొత్తం ఆరోగ్యాన్ని (Health) ఒకే చోట చూసే కంట్రోల్ ప్యానెల్. మీరు పేర్కొన్న అంశాలతో ఒక పవర్‌ఫుల్ **"API Performance Dashboard"** ని ఎలా క్రియేట్ చేయాలో చూద్దాం.

---

### **1. డాష్‌బోర్డ్‌లో ఉండాల్సిన ముఖ్యమైన విడ్జెట్లు (Widgets)**

ఒక మంచి డాష్‌బోర్డ్ మీ సమస్యను ఒక్క చూపులో గుర్తించేలా ఉండాలి. పైన చెప్పిన వాటిని ఇలా అమర్చుకోవచ్చు:

| విడ్జెట్ రకం    | దేనికి వాడాలి (Use Case)                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Timeseries**  | సమయంతో పాటు API Latency, Requests, CPU/Memory ఎలా మారుతున్నాయో చూడటానికి.                      |
| **Top List**    | ఎక్కువ ఎర్రర్లు ఉన్న ఎండ్-పాయింట్స్ లేదా ఎక్కువ సమయం తీసుకుంటున్న క్వెరీలను గుర్తించడానికి.    |
| **Query Value** | ప్రస్తుత CPU/Memory శాతం లేదా ప్రస్తుత Request count ని పెద్ద అంకెగా చూపించడానికి.             |
| **Heatmaps**    | Latency డిస్ట్రిబ్యూషన్‌ని చూడటానికి (అంటే ఎక్కువ మంది యూజర్లు ఎంత సేపు వెయిట్ చేస్తున్నారు?). |
| **Tables**      | ఎర్రర్ల వివరాలను లేదా సర్వర్ లిస్ట్‌ని క్లియర్‌గా చూడటానికి.                                   |

---

### **2. ఎగ్జాంపుల్ డాష్‌బోర్డ్ లేఅవుట్ (Recommended Layout)**

మీరు డాష్‌బోర్డ్ క్రియేట్ చేసేటప్పుడు ఇలా ఆర్డర్ చేయండి:

- **Row 1 (Health Overview):**
- **Requests/Sec (Timeseries):** ట్రాఫిక్ ఎలా ఉందో చూడటానికి.
- **Error Rate % (Query Value/Timeseries):** అప్లికేషన్ హెల్త్ కోసం.
- **Average API Latency (Query Value):** యాప్ ఎంత ఫాస్ట్ గా ఉందో చూడటానికి.

- **Row 2 (Resource Utilization):**
- **CPU & Memory Usage (Timeseries):** మీ సర్వర్లు లేదా Lambda పర్ఫార్మెన్స్.
- **Lambda Duration (Timeseries):** సర్వర్ లెస్ ఫంక్షన్ల వేగం.

- **Row 3 (Deep Dive & Errors):**
- **Top 10 Slow DB Queries (Top List):** ఏ క్వెరీలు డేటాబేస్‌ని స్లో చేస్తున్నాయో చూడటానికి.
- **Top Errors (Table):** ఏయే ఎర్రర్స్ ఎక్కువగా వస్తున్నాయో చూడటానికి.

---

### **3. విడ్జెట్స్ ఎలా వాడాలి? (Learn Widgets)**

- **Timeseries:** ఇది డిఫాల్ట్ విడ్జెట్. రెండు వేర్వేరు మెట్రిక్స్ ని ఒకే గ్రాఫ్ లో చూడవచ్చు (ఉదా: Requests vs Latency).
- **Top List:** ఒకవేళ మీ దగ్గర 100 API ఎండ్-పాయింట్స్ ఉంటే, కేవలం స్లోగా ఉన్న మొదటి 5 మాత్రమే ఇది చూపిస్తుంది.
- **Heatmaps:** ఇది చాలా ముఖ్యం! సాధారణ గ్రాఫ్ లో "Average" మాత్రమే కనిపిస్తుంది, కానీ హీట్ మ్యాప్ లో **P95, P99** లాంటివి చూసి, ఎంత శాతం మంది యూజర్లు స్లోగా ఫీల్ అవుతున్నారో తెలుసుకోవచ్చు.
- **Tables:** లాగ్స్ లేదా ఎర్రర్ మెసేజ్‌లను వరుస క్రమంలో చూడటానికి ఇది బెస్ట్.

---

### **4. బెస్ట్ ప్రాక్టీస్ (Pro Tips)**

1. **Templates (Variables):** డాష్‌బోర్డ్ పైన `Environment` (Dev, Prod) లేదా `Service` అనే డ్రాప్‌డౌన్ క్రియేట్ చేయండి. దీనివల్ల ఒకే డాష్‌బోర్డ్‌లో అన్ని ఎన్విరాన్‌మెంట్ల డేటా చూడవచ్చు.
2. **Color Coding:** ఎర్రర్ రేట్ గ్రాఫ్‌లో ఎరుపు (Red) రంగును వాడండి, దీనివల్ల సమస్య వచ్చినప్పుడు త్వరగా కంటికి కనిపిస్తుంది.
3. **Grouping:** అన్నింటినీ ఒకే చోట గుమ్మరించకుండా, సంబంధిత మెట్రిక్స్‌ని (ఉదా: Infrastructure అంతా ఒక వరుసలో, Application అంతా మరో వరుసలో) గ్రూప్ చేయండి.

---

**ఒక చిన్న టాస్క్:**
మీరు ఇప్పుడు Datadog లోకి వెళ్లి, **Dashboards -> New Dashboard** క్లిక్ చేసి, మీ NodeJS అప్లికేషన్ కోసం ఒక చిన్న "API Health" డాష్‌బోర్డ్ క్రియేట్ చేయండి.

## మీరు ఈ విడ్జెట్స్‌ని క్రియేట్ చేసేటప్పుడు ఏదైనా క్వెరీ (Query) ఎలా రాయాలో తెలియకపోతే అడగండి! ఉదాహరణకు, "ఎర్రర్ రేట్ ఎలా క్యాలిక్యులేట్ చేయాలి?" అని మీరు అడగవచ్చు.

# 11: Alerts (Monitors)

Datadog **Monitors (Alerts)** అనేవి మీ అప్లికేషన్ యొక్క సెక్యూరిటీ గార్డులు. సమస్య వచ్చినప్పుడు ఆటోమేటిక్‌గా మీకు తెలియజేయడం వీటి పని. వీటిని ఎలా సెటప్ చేయాలో మరియు వాటిలోని ముఖ్యమైన కాన్సెప్ట్స్ చూద్దాం.

---

### **1. మానిటర్ రకాలు (Types of Alerts)**

మీరు అడిగిన వాటికి తగినట్లుగా కొన్ని **Threshold Monitors** ని క్రియేట్ చేయాలి:

| Monitor Name       | కండిషన్ (Condition)    | ఎందుకు? (Reason)                                 |
| ------------------ | ---------------------- | ------------------------------------------------ |
| **API Latency**    | `avg(last_5m) > 500ms` | యూజర్లకు వెబ్‌సైట్ స్లోగా ఉండకూడదు.              |
| **Error Rate**     | `avg(last_5m) > 5%`    | అప్లికేషన్‌లో ఏదో సీరియస్ సమస్య ఉందని అర్థం.     |
| **CPU Usage**      | `avg(last_10m) > 80%`  | సర్వర్ ఓవర్‌లోడ్ అవుతోంది, స్కేల్ చేయాలి.        |
| **Memory Usage**   | `avg(last_10m) > 85%`  | RAM నిండిపోతే సర్వర్ క్రాష్ అయ్యే అవకాశం ఉంది.   |
| **Lambda Timeout** | `sum(last_5m) > 0`     | మీ ఫంక్షన్ కంప్లీట్ అవ్వకుండా ఆగిపోతోంది.        |
| **Disk Usage**     | `avg(last_15m) > 80%`  | లాగ్స్ లేదా డేటా ఎక్కువైతే డిస్క్ ఫుల్ అవుతుంది. |

---

### **2. ముఖ్యమైన కాన్సెప్ట్స్ (Learning Core Concepts)**

- **Threshold:** ఒక నిర్దిష్ట పరిమితి. (ఉదా: 80%). దీనిని దాటినప్పుడు అలర్ట్ రావాలి.
- **Composite Monitor:** ఇది చాలా తెలివైన ఫీచర్. ఉదాహరణకు: **"CPU > 80% AND Error Rate > 5%"** రెండు జరిగితేనే అలర్ట్ పంపు. ఇది అనవసరమైన అలర్ట్స్ (Noise) ని తగ్గిస్తుంది.
- **Recovery Alert:** సమస్య పరిష్కారమైనప్పుడు ("Resolved"), అది మీకు ఈమెయిల్ లేదా స్లాక్ ద్వారా తెలియజేస్తుంది. ఇది చాలా ముఖ్యం, ఎందుకంటే పని పూర్తయిందో లేదో మనకు తెలియాలి కదా!
- **Notification Channels:** అలర్ట్ వచ్చినప్పుడు అది ఎక్కడికి వెళ్లాలి?
- `@slack-channel`
- `@email-address`
- `@pagerduty` (ఇంజినియర్లకు ఫోన్ కాల్ వెళ్లడానికి).

---

### **3. అలర్ట్ క్రియేట్ చేసేటప్పుడు జాగ్రత్తలు (Best Practices)**

1. **Alert Evaluation Delay:** వెంటనే అలర్ట్ పంపకుండా, ఒక 5 నిమిషాలు వేచి చూడండి (ఉదా: `avg(last_5m)`). అప్పుడే "ఫ్లక్చువేషన్స్" (స్మాల్ స్పైక్స్) వల్ల అనవసరమైన మెసేజ్‌లు రావు.
2. **Notification Message:** మెసేజ్‌లో క్లియర్ గా రాయండి.

- _ఉదాహరణ:_ `🚨 ALERT: API Latency High. Current: {{value}}ms. Check: [Dashboard Link]`

3. **No-Data Alert:** మానిటర్ డేటాను పంపడం ఆపేస్తే ("No Data"), అప్పుడు కూడా అలర్ట్ వచ్చేలా చేయండి (బహుశా ఏజెంట్ డౌన్ అయ్యి ఉండొచ్చు).

---

### **4. ఎలా క్రియేట్ చేయాలి? (Steps)**

1. Datadog లో **Monitors -> New Monitor** క్లిక్ చేయండి.
2. **Threshold Alert** సెలెక్ట్ చేసుకోండి.
3. **Define the metric:** `aws.lambda.duration` లేదా `system.cpu.idle` వంటి మెట్రిక్ ఎంచుకోండి.
4. **Set threshold:** మీ పరిమితి (ఉదా: > 80) ఇవ్వండి.
5. **Configure notifications:** ఎవరికి పంపాలో, ఏ మెసేజ్ పంపాలో రాయండి.

---

**ఒక ముఖ్యమైన సూచన:**
అన్నింటికీ అలర్ట్స్ పెడితే, మీకు ప్రతిరోజూ 100 మెయిల్స్ వస్తాయి. దీనివల్ల అసలైన సమస్యలు మిస్ అయ్యే ప్రమాదం ఉంది. **"Actionable Alerts"** (ఏది నిజంగా రిపేర్ చేయాలో దానిపై మాత్రమే అలర్ట్) పైన ఫోకస్ చేయండి.

## మీరు మీ NodeJS అప్లికేషన్ కోసం మొదటి **Monitor** ని క్రియేట్ చేశారా? లేక ఏదైనా మానిటర్ ని సెటప్ చేసేటప్పుడు కన్ఫ్యూజన్ ఉందా?

# 12: Log Management

Datadog లో **Log Management** అంటే కేవలం లాగ్స్‌ని స్టోర్ చేయడం మాత్రమే కాదు, వాటిని తెలివిగా విశ్లేషించి, అసలు సమస్య ఎక్కడ ఉందో కనుగొనడం.

దీనిని అర్థం చేసుకోవడానికి ముఖ్యమైన 6 అంశాలు ఇక్కడ ఉన్నాయి:

---

### **1. Parsing (పార్సింగ్)**

లాగ్స్ సాధారణంగా టెక్స్ట్ రూపంలో ఉంటాయి. Datadog ఈ టెక్స్ట్‌ని ముక్కలు చేసి, అందులోని ముఖ్యమైన సమాచారాన్ని (ఉదా: Status Code, User ID, IP Address) విడిగా గుర్తిస్తుంది. దీన్నే 'Parsing' అంటారు.

- _ఉదాహరణ:_ `2026-07-01 11:00:00 ERROR 500 User:123` అనే లైన్ నుండి `500` ని `status_code` గా, `123` ని `user_id` గా విడదీయడం.

### **2. Pipelines (పైప్‌లైన్స్)**

లాగ్స్ డేటా క్లౌడ్‌లోకి వచ్చేటప్పుడు, వాటిపై ఒక క్రమ పద్ధతిలో ప్రాసెసింగ్ జరగాలి. దీన్నే 'Pipeline' అంటారు.

- **క్రమం:** Log Receive -> Parsing -> Remapping (పేర్లు మార్చడం) -> Tagging (టాగ్స్ యాడ్ చేయడం) -> Storage.

### **3. Facets (ఫ్యాసెట్స్)**

ఇవి మీ లాగ్స్‌లో ఉన్న 'Filters' లేదా 'Fields'. మీరు ఒకసారి లాగ్స్‌ని పార్స్ చేశాక, ఆ ఫీల్డ్స్ అన్నీ **Facets** గా మారుతాయి. వీటి ద్వారా మీరు లాగ్స్‌ని ఫిల్టర్ చేయవచ్చు.

- _ఉదాహరణ:_ `status_code: 500` అని సెర్చ్ చేస్తే, కేవలం ఎర్రర్ ఉన్న లాగ్స్ మాత్రమే కనిపిస్తాయి.

### **4. Indexes (ఇండెక్సెస్)**

Datadog లో అన్ని లాగ్స్‌ని స్టోర్ చేయలేం (ఖర్చు పెరుగుతుంది). మనం ఒక 'Index' క్రియేట్ చేసి, అందులో ఏ లాగ్స్ ఉండాలో (ఉదా: కేవలం `ERROR` లాగ్స్) నిర్ణయించుకుంటాం. మీరు ఎంచుకున్న లాగ్స్ మాత్రమే సెర్చ్ చేయడానికి అందుబాటులో ఉంటాయి.

### **5. Retention (రిటెన్షన్)**

లాగ్స్ ఎన్ని రోజులు స్టోర్ అవ్వాలి అనేది Retention.

- సాధారణంగా డెవలప్మెంట్ లాగ్స్ 7-15 రోజులు, ప్రొడక్షన్ లాగ్స్ 30-90 రోజులు ఉంచుతారు. మీ అవసరాన్ని బట్టి దీన్ని సెట్ చేసుకోవాలి.

### **6. Search Queries (సెర్చ్ క్వెరీస్)**

Datadog సెర్చ్ బార్ చాలా పవర్‌ఫుల్. SQL లాగానే క్వెరీస్ రాయొచ్చు.

- `service:my-nodejs-app status:error @user_id:123`
- `service`: ఏ సర్వీస్ నుండి రావాలి?
- `status`: ఏం జరగాలి?
- `@`: ఫ్యాసెట్ (Facets) ని సెర్చ్ చేయడానికి వాడే గుర్తు.

---

### **ఒక చిన్న వర్కింగ్ ఫ్లో:**

1. **Ingestion:** మీ NodeJS యాప్ నుండి `winston` ద్వారా JSON లాగ్ పంపండి.
2. **Processing:** Datadog పైప్‌లైన్ ఆ JSON ని అర్థం చేసుకుని `status` ఫీల్డ్ ని ఫ్యాసెట్‌గా మారుస్తుంది.
3. **Analysis:** మీరు డాష్‌బోర్డ్ లో `status:error` అని సెర్చ్ చేసి, రోజుకు ఎన్ని ఎర్రర్స్ వస్తున్నాయో గ్రాఫ్ చూడవచ్చు.
4. **Action:** ఆ గ్రాఫ్ పైన మానిటర్ (Monitor) సెట్ చేసి, అలర్ట్స్ పొందవచ్చు.

---

### **ముఖ్యమైన గమనిక:**

లాగ్స్‌ని అనవసరంగా ఇండెక్స్ చేయకండి. చాలా ఎక్కువ లాగ్స్ ఉంటే మీ Datadog బిల్లు పెరుగుతుంది. కాబట్టి **"Retention & Indexes"** ప్లాన్ చేసేటప్పుడు, ఏది ముఖ్యమైన డేటానో (Errors, Warnings) మాత్రమే ఇండెక్స్ చేయండి.

## మీరు మీ లాగ్స్‌ని Datadog లో చూడగలుగుతున్నారా? లేదా ఇంకా లాగ్స్ పంపడంలో (Winston/Agent configuration) ఏవైనా సమస్యలు ఉన్నాయా?

# 13: Service Map

Datadog **Service Map** అనేది మీ అప్లికేషన్ యొక్క "రూపరేఖ" (Blueprint). ఇది మీ మైక్రో సర్వీసెస్ (Microservices) ఒకదానితో ఒకటి ఎలా కనెక్ట్ అయ్యి ఉన్నాయో విజువల్‌గా చూపిస్తుంది.

మీరు ఇచ్చిన ఆర్కిటెక్చర్ (Frontend -> API -> Payment -> Order -> Inventory -> Postgres) ఎలా కనిపిస్తుందో మరియు దాన్ని ఎలా అర్థం చేసుకోవాలో చూద్దాం.

---

### **1. Service Map అంటే ఏమిటి?**

మీరు కోడ్ రాయాల్సిన అవసరం లేకుండానే, Datadog ఆటోమేటిక్‌గా మీ సర్వీసుల మధ్య ఉన్న సంబంధాలను (Dependencies) గుర్తించి ఒక నెట్‌వర్క్ డయాగ్రామ్ లాగా గీస్తుంది.

- **Nodes (సర్వీసులు):** ప్రతి సర్వీస్ ఒక సర్కిల్ లా కనిపిస్తుంది.
- **Edges (లైన్లు):** ఒక సర్వీస్ ఇంకో సర్వీస్‌ను పిలిచినప్పుడు వాటి మధ్య లైన్ ఉంటుంది.

---

### **2. లెర్నింగ్ (Learn): మీరు ఏమేమి తెలుసుకోవచ్చు?**

#### **A. Dependencies (డిపెండెన్సీలు)**

ఏ సర్వీస్ దేని మీద ఆధారపడి ఉందో స్పష్టంగా తెలుస్తుంది.

- _ఉదాహరణ:_ `Payment` సర్వీస్ ఫెయిల్ అయితే, అది `Order` సర్వీస్‌ని ఎలా ప్రభావితం చేస్తుందో మీరు మ్యాప్‌లో చూడొచ్చు.

#### **B. Latency (జాప్యం)**

సర్వీసులను కలిపే లైన్ల పైన రంగులు (Colors) ఉంటాయి.

- **Green:** పర్ఫార్మెన్స్ బాగుంది.
- **Red/Orange:** ఏదో సర్వీస్ చాలా స్లోగా రిస్పాన్స్ ఇస్తోంది. మ్యాప్‌లో ఏ లైన్ ఎర్రగా ఉంటే, ఆ కనెక్షన్‌లో సమస్య ఉందని అర్థం.

#### **C. Errors (ఎర్రర్లు)**

సర్వీస్ సర్కిల్ మీద ఎరుపు రంగు రింగ్ కనిపిస్తుంటే, ఆ సర్వీస్‌లో ఎర్రర్లు ఎక్కువగా వస్తున్నాయని అర్థం. దీన్ని క్లిక్ చేస్తే నేరుగా ఆ సర్వీస్ యొక్క **Error Tracking** కి వెళ్లవచ్చు.

---

### **3. విజువల్ ఫ్లో (Visualizing your Architecture)**

మీ ఆర్కిటెక్చర్ Datadog లో ఇలా కనిపిస్తుంది:

```text
[Frontend] --(Calls)--> [API] --(Calls)--> [Payment]
                                            |
                                            |--> [Order] --(Calls)--> [Inventory] --(Queries)--> [Postgres]

```

- **Postgres** అనేది చివరి నోడ్ (Leaf node). ఇందులో ఏవైనా లాక్స్ పడితే, దాని ఎఫెక్ట్ `Inventory` మీద, ఆ తర్వాత `Order` మీద ఇలా గొలుసుకట్టుగా తెలుస్తుంది.

---

### **4. Service Map లో ఏమేమి చేయాలి?**

1. **Troubleshooting (సమస్యను కనిపెట్టడం):** మీ వెబ్‌సైట్ స్లోగా ఉన్నప్పుడు, మొదట Service Map ఓపెన్ చేయండి. ఏ సర్వీస్ పైన ఎరుపు రంగులో ఉందో చూడండి. అదే మీ 'Bottleneck'.
2. **Filter by Environment:** `env:production` అని ఫిల్టర్ చేస్తే, కేవలం ప్రొడక్షన్ ట్రాఫిక్ మాత్రమే మ్యాప్‌లో కనిపిస్తుంది.
3. **Click & Inspect:** ఒక సర్వీస్ సర్కిల్ మీద క్లిక్ చేస్తే, ఆ సర్వీస్‌కి సంబంధించిన 'Latency', 'Request count', 'Error rate' అన్నీ పక్కన పాప్-అప్ అవుతాయి.

---

### **ఒక చిన్న ప్రో టిప్:**

మీరు సర్వీస్ మ్యాప్‌లో ఏదైనా ఒక లైన్ మీద మౌస్ పెడితే, అది ఎంత సమయం తీసుకుంటోందో (Latency) చూపిస్తుంది. ఇది **"Distributed Tracing"** వల్ల సాధ్యమవుతుంది. కాబట్టి మీ అన్ని సర్వీసుల్లో `dd-trace` లైబ్రరీని కచ్చితంగా ఇన్‌స్టాల్ చేయాలి.

**ఇప్పుడు మీరు:**
మీరు డేటాడగ్‌లో **APM -> Service Map** కి వెళ్లి చూడండి. అక్కడ మీ సర్వీసుల మధ్య ఉన్న లైన్లు కనెక్ట్ అయ్యి ఉన్నాయా? ఒకవేళ కొన్ని సర్వీసులు కనిపించకపోతే, వాటిలో ఏజెంట్ లేదా ట్రేసింగ్ లైబ్రరీ సరిగ్గా సెటప్ అవ్వలేదని అర్థం.

## ఏదైనా సర్వీస్ కనెక్షన్ మ్యాప్‌లో మిస్ అవుతోందా?

# 14: Profiling

Datadog **Continuous Profiler** అనేది మీ అప్లికేషన్ లోపల కోడ్ ఏ విధంగా పనిచేస్తుందో లోతుగా విశ్లేషించడానికి ఉపయోగపడుతుంది. APM ట్రేసింగ్ ద్వారా "ఎక్కడ స్లోగా ఉంది?" అని తెలిస్తే, **Profiling** ద్వారా "ఎందుకు స్లోగా ఉంది?" (ఏ ఫంక్షన్ వల్ల?) అనేది తెలుస్తుంది.

దీన్ని అర్థం చేసుకోవడానికి ముఖ్యమైన 4 అంశాలు ఇక్కడ ఉన్నాయి:

---

### **1. CPU Profile (CPU ప్రొఫైల్)**

మీ కోడ్‌లో ఏ ఫంక్షన్లు ఎక్కువ CPU పవర్ వాడుతున్నాయో ఇది చూపిస్తుంది.

- **ఎందుకు?** కొన్నిసార్లు ఒక చిన్న లూప్ (Loop) మిలియన్ల సార్లు రన్ అవుతూ సర్వర్‌ను బిజీగా ఉంచుతుంది. CPU ప్రొఫైలర్ ద్వారా ఆ లూప్‌ని లేదా ఆ ఫంక్షన్‌ని ఈజీగా పట్టుకోవచ్చు.

### **2. Heap Profile (హీప్ ప్రొఫైల్)**

అప్లికేషన్ నడుస్తున్నప్పుడు RAM (Memory) లో ఏ ఆబ్జెక్ట్స్ (Objects) ఎక్కువగా చోటు ఆక్రమిస్తున్నాయో ఇది చూపిస్తుంది.

- **ఎందుకు?** మీ అప్లికేషన్ RAM ఎందుకు పెరుగుతుందో తెలుసుకోవడానికి ఇది వాడతాము.

### **3. Memory Leaks (మెమరీ లీక్స్)**

అప్లికేషన్ నడుస్తున్న కొద్దీ RAM వాడుక పెరుగుతూనే ఉండి, చివరకు అప్లికేషన్ క్రాష్ అవ్వడాన్ని 'Memory Leak' అంటారు.

- **Profiling ఎలా హెల్ప్ చేస్తుంది:** Profiler లో మీరు రెండు వేర్వేరు సమయాల్లో 'Heap Snapshots' తీసుకుంటే, ఏ ఆబ్జెక్ట్స్ డిలీట్ అవ్వకుండా RAM లో ఉండిపోయాయో కనిపిస్తుంది.

### **4. Hot Functions (హాట్ ఫంక్షన్స్)**

ప్రోఫైలర్ లో "Flame Graph" అనే డయాగ్రామ్ ఉంటుంది. ఇందులో వెడల్పుగా ఉన్న ఫంక్షన్లను **Hot Functions** అంటారు.

- అంటే, ఎక్కువ CPU టైమ్ లేదా మెమరీని ఈ ఫంక్షన్లు వాడుతున్నాయి అని అర్థం. ఇవే మీ అప్లికేషన్ పర్ఫార్మెన్స్ కి అసలైన అడ్డంకులు (Bottlenecks).

---

### **Datadog Profiling - వర్కింగ్ ఫ్లో**

1. **Instrumentation:** `dd-trace` లైబ్రరీలోనే `profiling` ని ఎనేబుల్ చేయాలి.

```javascript
// మీ index.js లో
require("dd-trace").init({ profiling: true });
```

2. **Visualization (Flame Graph):** Datadog లో **APM -> Profiling** కి వెళ్తే, ఒక Flame Graph కనిపిస్తుంది.

- గ్రాఫ్ ఎంత వెడల్పుగా ఉంటే, ఆ ఫంక్షన్ అంత ఎక్కువ సమయం తీసుకుంటుందని అర్థం.

3. **Optimization:** ఆ Hot Function ని చూసి, కోడ్ ని ఆప్టిమైజ్ చేయడం (ఉదా: అనవసరమైన ఆబ్జెక్ట్స్ క్రియేట్ చేయకుండా ఉండటం, ఇండెక్సింగ్ వాడటం).

---

### **ఎప్పుడు వాడాలి?**

- మీ సర్వర్ CPU ఎప్పుడూ 90% పైనే ఉంటే.
- మీ యాప్ మెమరీ రోజురోజుకీ పెరుగుతుంటే.
- పర్ఫార్మెన్స్ సమస్యలు ఎక్కడ వస్తున్నాయో ట్రేసెస్ (Traces) ద్వారా తెలియకపోతే.

**ముఖ్య గమనిక:**
Profiling అనేది నిరంతరం (Continuous) రన్ అవుతూ ఉంటుంది, కానీ ఇది అప్లికేషన్ పర్ఫార్మెన్స్‌పై చాలా తక్కువ ప్రభావం (Performance overhead < 1%) మాత్రమే చూపిస్తుంది, కాబట్టి ప్రొడక్షన్‌లో కూడా దీన్ని ధైర్యంగా వాడుకోవచ్చు.

## మీరు మీ NodeJS యాప్‌లో `profiling: true` అని సెట్ చేసి, Datadog లో Flame Graph ని చూశారా? అందులో అత్యంత వెడల్పుగా ఉన్న ఫంక్షన్ ఏది?

# 15: CI/CD Integration

Datadog తో **CI/CD Integration** చేయడం వల్ల, మీరు కోడ్ డిప్లాయ్ చేసిన ప్రతిసారీ అప్లికేషన్ పర్ఫార్మెన్స్ ఎలా మారుతుందో ట్రాక్ చేయవచ్చు. దీన్నే **"Continuous Deployment Monitoring"** అంటారు.

దీని ద్వారా మీరు కేవలం 'ఏమైందో' కాకుండా, 'ఏ మార్పు వల్ల సమస్య వచ్చిందో' కూడా తెలుసుకోవచ్చు.

---

### **1. ప్రధాన లక్ష్యాలు (What to Track)**

- **Deployments:** కొత్త వెర్షన్ కోడ్ ఎప్పుడు సర్వర్‌లోకి వెళ్లిందో తెలుస్తుంది. (Datadog లో దీన్ని 'Deployment Marker' అంటారు).
- **Build Time:** ఒక సాఫ్ట్‌వేర్ బిల్డ్ అవ్వడానికి (Compile/Test/Package) ఎంత సమయం పడుతుందో పర్యవేక్షించడం.
- **Failed Builds:** బిల్డ్ ఫెయిల్ అయితే ఎందుకు అయ్యిందో (Tests? Compile error?) అని చూడటం.
- **Releases:** ఏ 'Commit' లేదా ఏ 'Version' ప్రస్తుతం లైవ్‌లో ఉందో ట్రాక్ చేయడం.

---

### **2. ఇంటిగ్రేషన్ పద్ధతులు (How to Integrate)**

Datadog ని మీ CI/CD టూల్స్‌తో ఎలా కనెక్ట్ చేయాలో చూద్దాం:

#### **A. GitHub Actions / GitLab CI / Jenkins**

వీటిలో మీరు Datadog యొక్క **CI Visibility** ప్యాకేజీని వాడుకోవాలి.

- **Datadog CLI:** మీరు మీ పైప్‌లైన్ స్క్రిప్ట్‌లో `datadog-ci` అనే టూల్ ని ఇన్‌స్టాల్ చేస్తారు.
- **API Key & App Key:** మీ Datadog అకౌంట్ కనెక్ట్ అవ్వడానికి ఇవి తప్పనిసరి.

#### **B. AWS CodePipeline**

AWS లో అయితే, Datadog ను 'CloudWatch Events' ద్వారా లేదా Lambda ఫంక్షన్ ద్వారా అలర్ట్ చేయడం ద్వారా ఇంటిగ్రేట్ చేయవచ్చు.

---

### **3. డెవలపర్‌కు ఇది ఎలా హెల్ప్ అవుతుంది? (Benefits)**

1. **Deployment Markers:** మీరు Datadog డాష్‌బోర్డ్ చూస్తున్నప్పుడు, గ్రాఫ్ పైన ఒక గీత (Marker) కనిపిస్తుంది. అంటే "ఈ సమయం తర్వాతే సమస్య మొదలైంది" అని అర్థం. ఒకవేళ ఆ మార్పు వల్ల సమస్య వస్తే, వెంటనే 'Rollback' చేయవచ్చు.
2. **Test Optimization:** మీ టెస్ట్ కేస్‌లు ఎక్కువ సమయం తీసుకుంటుంటే, ఏ టెస్ట్ స్లోగా ఉందో 'CI Visibility' రిపోర్ట్ ద్వారా తెలిసిపోతుంది.
3. **Cross-Team Visibility:** డెవొప్స్ (DevOps) టీమ్‌కు ఏ బిల్డ్ ఫెయిల్ అయ్యిందో, దానికి కారణం ఏంటో (Logs via CI) ఈజీగా తెలుస్తుంది.

---

### **4. ప్రాక్టికల్ ఇంప్లిమెంటేషన్ (Example)**

మీరు **GitHub Actions** వాడుతుంటే, మీ `.github/workflows/main.yml` లో ఇలాంటి స్టెప్ యాడ్ చేయాలి:

```yaml
- name: Notify Datadog of Deployment
  uses: datadog/datadog-ci-action@v1
  with:
    datadog_api_key: ${{ secrets.DD_API_KEY }}
    datadog_app_key: ${{ secrets.DD_APP_KEY }}
    command: "deployment"
    service: "my-nodejs-app"
    version: "v1.0.2"
```

---

### **సారాంశం (Summary)**

| CI/CD Component              | Datadog Metric/Feature  |
| ---------------------------- | ----------------------- |
| **Pipeline Success/Failure** | CI Visibility Dashboard |
| **Code Changes**             | Deployment Markers      |
| **Test Duration**            | Test Traces             |
| **Release Version**          | Version Tagging         |

**ఒక చిన్న సలహా:**
మీరు ఇంకా ఈ ఇంటిగ్రేషన్ మొదలుపెట్టకపోతే, ముందుగా **"Deployment Markers"** తో స్టార్ట్ చేయండి. మీ అప్లికేషన్ డాష్‌బోర్డ్‌లో ఎప్పుడు కొత్త కోడ్ డిప్లాయ్ అయ్యిందో అది చూపిస్తుంది, ఇది ప్రాబ్లమ్ ఐడెంటిఫికేషన్‌కు చాలా చాలా హెల్ప్ అవుతుంది.

## మీరు మీ ప్రాజెక్ట్‌లో GitHub Actions వాడుతున్నారా లేక వేరే ఏదైనా CI/CD టూల్ వాడుతున్నారా? మీరు దీన్ని ఇంప్లిమెంట్ చేయడానికి ఏదైనా గైడెన్స్ కావాలా?

# 16: Security Monitoring

Datadog **Security Monitoring** అనేది మీ అప్లికేషన్ మరియు క్లౌడ్ ఇన్ఫ్రాస్ట్రక్చర్‌ను హ్యాకర్ల నుండి మరియు డేటా లీక్స్ నుండి రక్షించడానికి ఉపయోగపడుతుంది. ఇది కేవలం పర్ఫార్మెన్స్ చూడటమే కాకుండా, సిస్టమ్‌లో జరిగే "అనుమానాస్పద కార్యకలాపాలను" (Suspicious Activities) గుర్తించి అలర్ట్ చేస్తుంది.

దీనిలోని ముఖ్యమైన 5 అంశాలను సులభంగా అర్థం చేసుకుందాం:

---

### **1. Audit Logs (ఆడిట్ లాగ్స్)**

మీ సిస్టమ్‌లో ఎవరు, ఎప్పుడు, ఏం చేశారో రికార్డ్ చేయడాన్ని ఆడిట్ లాగింగ్ అంటారు.

- **ఉదాహరణ:** Datadog లో ఎవరైనా కొత్త మానిటర్ డిలీట్ చేస్తే, లేదా కొత్త API Key క్రియేట్ చేస్తే, అది ఆడిట్ లాగ్స్‌లో కనిపిస్తుంది. సిస్టమ్ సెక్యూరిటీని చెక్ చేయడానికి ఇది మొదటి మెట్టు.

### **2. CloudTrail (AWS Security)**

AWS వాడుతున్నప్పుడు, మీ AWS అకౌంట్‌లో జరిగే ప్రతి API కాల్‌ని (ఉదా: కొత్త S3 బకెట్ క్రియేట్ చేయడం, IAM యూజర్‌ని యాడ్ చేయడం) AWS **CloudTrail** రికార్డ్ చేస్తుంది.

- Datadog, ఈ CloudTrail లాగ్స్‌ని రీడ్ చేసి, ఏదైనా అసాధారణమైన పని (ఉదా: తెలియని లొకేషన్ నుండి లాగిన్) జరిగితే వెంటనే అలర్ట్ పంపుతుంది.

### **3. IAM Monitoring (Identity & Access Management)**

IAM అనేది యూజర్ల పర్మిషన్లకు సంబంధించింది.

- **ఏం మానిటర్ చేస్తాం:**
- అడ్మిన్ యాక్సెస్ ఉన్న యూజర్లు ఎవరు?
- చాలా కాలంగా వాడని (Inactive) IAM యూజర్లు ఎవరు?
- MFA (Multi-Factor Authentication) లేని అకౌంట్లు ఏవి?

- వీటిని మానిటర్ చేయడం ద్వారా "అనధికారిక యాక్సెస్" (Unauthorized access) జరగకుండా చూడవచ్చు.

### **4. Threat Detection (ముప్పును గుర్తించడం)**

ఇది Datadog Security యొక్క ప్రధాన భాగం. ఇది "Out-of-the-box" రూల్స్‌తో వస్తుంది.

- **Detection Rules:** ఉదాహరణకు, ఒకే నిమిషంలో 10 సార్లు రాంగ్ పాస్‌వర్డ్‌తో లాగిన్ ప్రయత్నిస్తే, Datadog దీన్ని **"Brute Force Attack"** గా గుర్తించి అలర్ట్ పంపుతుంది.
- **Real-time Monitoring:** లాగ్స్ వస్తున్నప్పుడే ఇది స్కాన్ చేసి హానికరమైన క్వెరీలను (SQL Injection వంటివి) పట్టుకుంటుంది.

### **5. Compliance Monitoring (నిబంధనల అనుసరణ)**

పెద్ద పెద్ద కంపెనీలు కొన్ని సెక్యూరిటీ రూల్స్ పాటించాలి (ఉదా: PCI-DSS, HIPAA, SOC2).

- మీ క్లౌడ్ సెటప్ ఈ రూల్స్‌కి అనుగుణంగా ఉందో లేదో Datadog చెక్ చేస్తుంది (Posture Management).
- ఏదైనా సెక్యూరిటీ రూల్ వయొలేషన్ (Violation) జరిగితే, అది "నాన్-కంప్లైంట్" (Non-compliant) అని మీకు చూపిస్తుంది.

---

### **ఇది ఎలా పనిచేస్తుంది? (Security Workflow)**

1. **Log Collection:** CloudTrail, Application Logs, Network Logs ని Datadog లోకి పంపుతారు.
2. **Analysis:** Datadog **Security Signals** ని వాడి, వచ్చిన లాగ్స్‌లో ఏవైనా థ్రెట్స్ ఉన్నాయో చూస్తుంది.
3. **Alerts:** ఏదైనా ప్రమాదం అనిపిస్తే, అది **"Security Signal"** గా మారుతుంది.
4. **Remediation:** మీరు ఆ సిగ్నల్ ని చూసి, సమస్యను ఫిక్స్ చేయవచ్చు (ఉదా: ఆ యూజర్ ని డిలీట్ చేయడం లేదా ఆ API కీ ని డిసేబుల్ చేయడం).

---

### **ముఖ్యమైన చిట్కా:**

మీరు Datadog లో **"Security Overview"** డాష్‌బోర్డ్‌ని ఒకసారి ఎనేబుల్ చేసి చూడండి. ఇది మీ అకౌంట్‌లోని సెక్యూరిటీ వీక్‌నెస్‌లను (Security Posture) ఆటోమేటిక్‌గా ఒక రిపోర్ట్ లాగా చూపిస్తుంది.

## మీరు మీ క్లౌడ్ ఎన్విరాన్మెంట్‌లో (AWS/Azure) ఇప్పటికే సెక్యూరిటీ మానిటరింగ్ సెటప్ చేశారా? లేదా ఏదైనా నిర్దిష్టమైన రూల్ (Detection Rule) సెటప్ చేయడంలో హెల్ప్ కావాలా?

# 17: Kubernetes Monitoring (Optional)

Kubernetes (K8s) పర్యవేక్షణ అనేది చాలా కీలకం ఎందుకంటే ఇందులో సర్వీసులు నిరంతరం మారుతూ (Scale in/out) ఉంటాయి. Datadog ద్వారా Kubernetes ని మానిటర్ చేయడం అంటే క్లస్టర్ యొక్క ప్రతి అణువును గమనించడం.

దీనిలోని ముఖ్యమైన అంశాలు ఇక్కడ ఉన్నాయి:

---

### **1. ప్రధాన భాగాలు (Core Components)**

- **Nodes:** ఇది ఫిజికల్ లేదా వర్చువల్ సర్వర్. Node పర్ఫార్మెన్స్ బాగుంటేనే క్లస్టర్ బాగుంటుంది.
- **Pods:** Kubernetes లో ఇది కంటైనర్లను రన్ చేసే చిన్న యూనిట్. ఒక పాడ్ డౌన్ అయినా అప్లికేషన్ ఆగిపోవచ్చు.
- **Containers:** పాడ్ లోపల ఉండే అసలైన యాప్ రన్నింగ్ యూనిట్.

---

### **2. కీలకమైన మానిటరింగ్ మెట్రిక్స్**

| మెట్రిక్                            | ఎందుకు మానిటర్ చేయాలి?                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **CPU/Memory**                      | పాడ్ లేదా నోడ్ తన లిమిట్ కంటే ఎక్కువ వాడుతుంటే అది పర్ఫార్మెన్స్‌ను తగ్గిస్తుంది.                                |
| **HPA (Horizontal Pod Autoscaler)** | ట్రాఫిక్ పెరిగినప్పుడు పాడ్స్ సంఖ్య పెరుగుతుందా? తగ్గుతుందా? అని గమనించడం.                                       |
| **Cluster Events**                  | "Pod CrashLoopBackOff", "ImagePullBackOff" వంటి ఈవెంట్స్ వస్తే ఏ పాడ్ ఎందుకు ఫెయిల్ అయ్యిందో ఇక్కడే తెలుస్తుంది. |

---

### **3. Kubernetes మానిటరింగ్‌లో ముఖ్యమైన కాన్సెప్ట్స్**

- **Datadog Cluster Agent:** క్లస్టర్ లెవల్ డేటా (Events, HPA status) సేకరించడానికి ఇది అవసరం. ఇది సాధారణ ఏజెంట్ కంటే అడ్వాన్స్‌డ్.
- **Kube-State-Metrics:** మీ క్లస్టర్ ఏ స్టేట్‌లో ఉంది? ఎన్ని పాడ్స్ రెడీగా ఉన్నాయి? అనే సమాచారాన్ని ఇది అందిస్తుంది.
- **Auto-discovery:** Datadog యొక్క గొప్ప ఫీచర్ ఇది. మీరు కొత్త పాడ్ క్రియేట్ చేయగానే, ఏజెంట్ దాన్ని ఆటోమేటిక్‌గా గుర్తించి మానిటర్ చేయడం ప్రారంభిస్తుంది. మీరు ప్రత్యేకంగా సెటప్ చేయక్కర్లేదు.

---

### **4. ఎలా విశ్లేషించాలి? (Troubleshooting Flow)**

1. **Dashboard:** Datadog లో "Kubernetes Overview" డాష్‌బోర్డ్ ఓపెన్ చేయండి. ఇక్కడ మీకు అన్ని పాడ్స్ మరియు నోడ్స్ ఆరోగ్యంగా ఉన్నాయో లేదో తెలుస్తుంది.
2. **Live Containers:** **Infrastructure -> Containers** కి వెళ్తే, రన్ అవుతున్న ప్రతి కంటైనర్‌ను లైవ్‌గా చూడవచ్చు.
3. **Investigate Crashes:** ఏదైనా పాడ్ పదే పదే రీస్టార్ట్ అవుతుంటే (CrashLoopBackOff), ఆ పాడ్ యొక్క **Logs** ని Datadog లో సెర్చ్ చేయండి. ఎర్రర్ ఎందుకు వస్తుందో అక్కడ కనిపిస్తుంది.
4. **HPA Health:** HPA సరిగ్గా పనిచేస్తుందో లేదో చూడటానికి `kube.hpa.status.current_replicas` మెట్రిక్ వాడండి.

---

### **ముఖ్యమైన చిట్కా:**

Kubernetes లో **Events** ని మానిటర్ చేయడం మర్చిపోకండి. అప్లికేషన్‌లో ఏదైనా సమస్య వస్తే, ముందుగా Kubernetes ఈవెంట్స్‌లో `Warning` మెసేజ్‌లు కనిపిస్తాయి. దీని కోసం మీరు ఒక మానిటర్ క్రియేట్ చేయండి:

- _Alert:_ `events("priority:normal OR priority:high").rollup("count").last("15m") > 0`

**ప్రశ్న:**
మీరు Kubernetes క్లస్టర్‌లో Datadog ఏజెంట్‌ని సెటప్ చేశారా? `Helm Chart` ద్వారా దీన్ని ఇన్స్టాల్ చేయడం చాలా సులభం, మీకు దానికి సంబంధించిన కమాండ్స్ కావాలా?

---

# 18: SLO / SLA / SLI

Datadog లో **SLO (Service Level Objectives)** అనేది మీ అప్లికేషన్ యొక్క విశ్వసనీయతను (Reliability) కొలవడానికి అత్యంత ముఖ్యమైన మార్గం. ఇది కేవలం "సిస్టమ్ ఎలా ఉంది?" అని మాత్రమే కాకుండా, "మనం యూజర్‌కు ఇచ్చిన మాట ప్రకారం నడుస్తున్నామా?" అని చెబుతుంది.

వీటిని తెలుగులో సులభంగా అర్థం చేసుకుందాం:

---

### **1. మూడు కీలక పదాలు (The Definitions)**

- **SLI (Service Level Indicator):** ఇది మీ సిస్టమ్ యొక్క ఆరోగ్యాన్ని కొలిచే ఒక కొలమానం. (ఉదా: వెబ్‌సైట్ రెస్పాన్స్ టైమ్, ఎర్రర్ రేట్). ఇది ఒక **"వాస్తవం"**.
- **SLO (Service Level Objective):** మీ SLI ఎంత ఉండాలో మీరు పెట్టుకున్న లక్ష్యం. (ఉదా: "నా API 99.9% సమయం సక్సెస్ అవ్వాలి"). ఇది మీరు మీ టీమ్ కి ఇచ్చిన **"లక్ష్యం"**.
- **SLA (Service Level Agreement):** ఇది వ్యాపార ఒప్పందం (Business Contract). లక్ష్యం (SLO) తప్పితే కస్టమర్‌కు జరిమానా చెల్లించాల్సి రావచ్చు.

---

### **2. మీరు పేర్కొన్న ఉదాహరణలు (Real-world Targets)**

- **Availability (99.9%):** అంటే ఒక నెలలో మొత్తం సమయంలో 0.1% మాత్రమే సిస్టమ్ డౌన్ అవ్వచ్చు. అంటే సుమారు 43 నిమిషాలు మాత్రమే. అంతకు మించి డౌన్ అయితే మీరు ఫెయిల్ అయినట్లే.
- **Latency (< 200ms):** 99% రిక్వెస్ట్‌లు 200ms లోపు కంప్లీట్ అవ్వాలి.
- **Error Rate (< 1%):** ప్రతి 100 రిక్వెస్ట్‌లలో 1 కంటే ఎక్కువ ఎర్రర్లు రాకూడదు.

---

### **3. Error Budget (ఎర్రర్ బడ్జెట్) - అత్యంత ముఖ్యమైనది**

ఇది చాలా ఇంట్రెస్టింగ్ కాన్సెప్ట్!

- **Error Budget = 100% - SLO.**
- ఉదాహరణకు, మీ SLO 99.9% అయితే, మీ 'Error Budget' 0.1%. అంటే మీకు సంవత్సరంలో లేదా నెలలో కొన్ని తప్పులు చేసే అవకాశం (బడ్జెట్) ఉంది.
- ఈ బడ్జెట్ ఉన్నంత వరకు మీరు కోడ్‌ని వేగంగా డిప్లాయ్ చేయవచ్చు. ఒకవేళ ఈ **బడ్జెట్ అయిపోతే**, మీరు కొత్త ఫీచర్లు యాడ్ చేయడం ఆపేసి, కేవలం అప్లికేషన్ స్టేబిలిటీ కోసం మాత్రమే పనిచేయాలి.

---

### **4. Datadog లో SLO ఎలా క్రియేట్ చేయాలి?**

1. **SLO క్రియేషన్:** Datadog లో `SLOs` సెక్షన్‌కి వెళ్లి **"New SLO"** క్లిక్ చేయండి.
2. **Define SLI:** మీకు కావాల్సిన మెట్రిక్ ఎంచుకోండి (ఉదా: `sum:api.requests.error`).
3. **Target:** 99.9% అని సెట్ చేయండి.
4. **Error Budget Tracking:** ఇది ఆటోమేటిక్‌గా గ్రాఫ్ లో చూపిస్తుంది. మీరు ఎంత బడ్జెట్ వాడేశారు, ఇంకెంత మిగిలి ఉంది అనేది డాష్‌బోర్డ్ లో కనిపిస్తుంది.

---

### **సారాంశం (Quick View)**

| పదం              | ఏం చేస్తుంది?                       | ఉదాహరణ                 |
| ---------------- | ----------------------------------- | ---------------------- |
| **SLI**          | కొలుస్తుంది (Measure)               | API Latency            |
| **SLO**          | లక్ష్యాన్ని నిర్దేశిస్తుంది (Goal)  | < 200ms                |
| **Error Budget** | రిస్క్ తీసుకునే అవకాశాన్ని ఇస్తుంది | 0.1% ఫెయిల్యూర్ ఛాన్స్ |

**ఎందుకు ఇది ముఖ్యం?**
చాలా కంపెనీల్లో "సిస్టమ్ బాగానే ఉంది" అని టీమ్స్ అంటుంటాయి, కానీ యూజర్లు స్లోగా ఉందని ఫీల్ అవుతారు. SLO వాడటం వల్ల అందరికీ ఒకే విధమైన కచ్చితమైన లెక్క ఉంటుంది.

## మీరు మీ API కోసం ఏదైనా SLO ని సెట్ చేస్తున్నారా? ఒకవేళ మీరు మీ `Latency` లేదా `Error Rate` ని SLO గా కన్వర్ట్ చేయాలనుకుంటే, దానికి సంబంధించిన క్వెరీ ఎలా రాయాలో చెప్తాను! మీకు ఏదైనా సందేహం ఉందా?

# 20: Expert Topics

Datadog పర్యవేక్షణలో మీరు అడిగిన ఈ మూడు అంశాలు "Expert Level" కి సంబంధించినవి. వీటిని మాస్టర్ చేయడం వల్ల మీరు సిస్టమ్‌ను ఎంతటి క్లిష్ట పరిస్థితుల్లోనైనా నియంత్రించగలరు.

---

### **1. OpenTelemetry (OTel) Integration**

ఇది వెండర్-న్యూట్రల్ (Vendor-neutral) ప్రమాణం. Datadog కి మాత్రమే కట్టుబడి ఉండకుండా, భవిష్యత్తులో వేరే టూల్స్ వాడాలనుకున్నా కూడా OTel మీకు హెల్ప్ అవుతుంది.

- **ఎలా పనిచేస్తుంది:** మీరు మీ కోడ్‌లో OTel SDK వాడి ట్రేసెస్/మెట్రిక్స్ జనరేట్ చేస్తారు. Datadog Agent ఈ డేటాను రిసీవ్ చేసుకుని Datadog బ్యాకెండ్‌కి పంపుతుంది.
- **Mastery Tip:** `OTLP (OpenTelemetry Protocol)` ఎండ్‌పాయింట్‌ను Datadog Agent కి పాయింట్ చేయడం ద్వారా డేటా ఇన్‌జెషన్ చేయాలి. ఇది APM (Auto-instrumentation) కంటే ఎక్కువ ఫ్లెక్సిబిలిటీని ఇస్తుంది.

---

### **2. Datadog Agent Configuration (`datadog.yaml`)**

ఏజెంట్ అనేది మీ అప్లికేషన్ మరియు Datadog క్లౌడ్ మధ్య ఉండే వంతెన. దీని పర్ఫార్మెన్స్ మీ మొత్తం సిస్టమ్‌ని ప్రభావితం చేస్తుంది.

- **Custom Check:** మీ అప్లికేషన్ కి సంబంధించిన కస్టమ్ మెట్రిక్స్ కావాలంటే `conf.d/` ఫోల్డర్‌లో YAML ఫైల్ రాసి ఏజెంట్ కి చెప్పాలి.
- **Proxy Configuration:** సెక్యూరిటీ కారణాల వల్ల అప్లికేషన్ నేరుగా ఇంటర్నెట్‌కి వెళ్ళకూడదంటే, ఏజెంట్‌ని `proxy` ద్వారా కాన్ఫిగర్ చేయాలి.
- **Auto-discovery:** Kubernetes లో ఉంటే, పాడ్స్ (Pods) లో ఉండే అనొటేషన్స్ (Annotations) ని బట్టి ఏజెంట్ దానంతట అదే మానిటరింగ్ స్టార్ట్ చేసేలా సెటప్ చేయాలి.

---

### **3. DogStatsD (The Secret Power)**

ఇది UDP ప్రోటోకాల్ మీద నడిచే ఒక 'Metrics Aggregator'. మీ అప్లికేషన్ చాలా ఎక్కువ (High volume) మెట్రిక్స్ పంపిస్తుంటే, HTTP ద్వారా పంపడం స్లో అవుతుంది. అప్పుడు `DogStatsD` వాడాలి.

- **UDP vs TCP:** DogStatsD UDP వాడుతుంది కాబట్టి, మీ అప్లికేషన్ మెట్రిక్స్ పంపి ఆగిపోదు (Non-blocking). ఇది చాలా వేగవంతమైనది.
- **Aggregation:** ఒకే సెకనులో మీరు 1000 కౌంటర్స్ పంపితే, DogStatsD వాటిని అగ్రిగేట్ చేసి (ఉదా: 1000 సార్లు +1 చేయడానికి బదులు, మొత్తం 1000 అని ఒకే సారి) Datadog కి పంపుతుంది.
- **Tags:** మెట్రిక్స్ పంపేటప్పుడే `dogstatsd.increment('my_metric', tags=['env:prod', 'service:order'])` అని ట్యాగ్స్ యాడ్ చేయడం చాలా ముఖ్యం.

---

### **మాస్టరీ కోసం మీరు చేయవలసినవి:**

1. **OTel:** మీరు వాడుతున్న `dd-trace` లైబ్రరీని కాకుండా, ఒకసారి ఓపెన్ టెలిమెట్రీ ఎక్స్‌పోర్టర్ (OTel Exporter) వాడి ట్రేసెస్ Datadog కి పంపడానికి ప్రయత్నించండి.
2. **Agent:** `datadog.yaml` లో `log_level: DEBUG` పెట్టి ఏజెంట్ ఎలా పనిచేస్తుందో ఒకసారి గమనించండి (కానీ ప్రొడక్షన్‌లో వద్దు).
3. **DogStatsD:** `hot-shots` లైబ్రరీ వాడి మీ మెట్రిక్స్ ని `buffer` చేయడం ప్రాక్టీస్ చేయండి.

**నిపుణుల సలహా:**
ఒక నిపుణుడిగా మీరు ఎప్పుడూ **"Cardinals"** గురించి జాగ్రత్తగా ఉండాలి. అంటే, ప్రతి యూజర్ ఐడికి ఒక యూనిక్ మెట్రిక్ క్రియేట్ చేయకండి (ఉదా: `user.count.1`, `user.count.2`). దీనివల్ల Datadog లో "High Cardinality" సమస్య వచ్చి బిల్లు భారీగా పెరుగుతుంది. మెట్రిక్స్ ఎప్పుడూ `Grouped/Categorized` గా ఉండేలా చూసుకోండి.

## మీరు ఈ మూడింటిలో దేనిపై ఎక్కువ ఫోకస్ చేద్దాం అనుకుంటున్నారు? ఏదైనా కాన్ఫిగరేషన్ ఫైల్స్ లో ఇబ్బందులు ఉన్నాయా?

మీరు Datadog APM లో అడ్వాన్స్‌డ్ ట్రేసింగ్ నేర్చుకోవడానికి ఇవి చాలా ముఖ్యమైన అంశాలు. ఇవి అప్లికేషన్ యొక్క పర్ఫార్మెన్స్ సమస్యలను రూట్ లెవల్‌లో అర్థం చేసుకోవడానికి సహాయపడతాయి.

---

### **1. Trace Sampling (ట్రేస్ శాంప్లింగ్)**

మీ అప్లికేషన్‌కి సెకనుకు వేల సంఖ్యలో రిక్వెస్టులు వస్తుంటే, వాటన్నింటినీ Datadogకి పంపడం వల్ల ఖర్చు (Cost) మరియు నెట్‌వర్క్ లోడ్ పెరుగుతుంది. అందుకే **Sampling** వాడుతాము.

- **Head-based Sampling:** రిక్వెస్ట్ మొదలైనప్పుడే (API Gateway లెవల్‌లో) దీన్ని నిర్ణయిస్తారు. ఉదాహరణకు, 10% రిక్వెస్ట్‌లను మాత్రమే పంపాలని సెట్ చేస్తే, Datadog కేవలం 10% ట్రేస్‌లను మాత్రమే స్టోర్ చేస్తుంది.
- **Tail-based Sampling:** ఇది తెలివైన పద్ధతి. రిక్వెస్ట్ కంప్లీట్ అయ్యే వరకు వేచి చూస్తుంది. ఒకవేళ ఆ రిక్వెస్ట్‌లో **ఎర్రర్** ఉన్నా లేదా **Latency (స్లో)** ఎక్కువగా ఉన్నా, దాన్ని కచ్చితంగా Datadogకి పంపుతుంది. మిగతా సాధారణ రిక్వెస్టులను శాంపిల్ చేస్తుంది.
- **ప్రయోజనం:** ముఖ్యమైన ఎర్రర్స్ ఏవీ మిస్ అవ్వవు, అలాగే ఖర్చు తగ్గుతుంది.

---

### **2. Span Tags (స్పాన్ ట్యాగ్స్)**

ట్రేస్‌లో ఉండే ప్రతి Span కి అదనపు సమాచారాన్ని (Context) యాడ్ చేయడమే 'Tags'.

- **ఎందుకు?** డిఫాల్ట్‌గా ట్రేస్‌లో సర్వీస్ పేరు, టైమ్ మాత్రమే ఉంటాయి. కానీ, `user_id`, `order_id`, `customer_type` వంటివి ఉంటే సమస్య వచ్చినప్పుడు ఎవరికి వచ్చిందో వెంటనే తెలుస్తుంది.
- **కోడ్ ఉదాహరణ (NodeJS):**

```javascript
const span = tracer.scope().active();
if (span) {
  span.setTag("customer.type", "premium"); // కస్టమర్ టైప్ యాడ్ చేయడం
  span.setTag("order.id", orderId); // ఆర్డర్ ఐడి యాడ్ చేయడం
}
```

- **ఉపయోగం:** Datadogలో `customer.type:premium` అని ఫిల్టర్ చేసి, కేవలం వారి కోసమే లాగ్స్/ట్రేసెస్ చూడవచ్చు.

---

### **3. Custom Instrumentation (కస్టమ్ ఇన్స్ట్రుమెంటేషన్)**

Datadog ఆటోమేటిక్‌గా అన్నింటినీ ట్రాక్ చేస్తుంది, కానీ మీ అప్లికేషన్‌లో ఏదైనా పర్టికులర్ బిజినెస్ లాజిక్ (ఉదా: థర్డ్ పార్టీ పేమెంట్ గేట్‌వే కాల్) ఎంత టైమ్ తీసుకుంటుందో చూడాలంటే కస్టమ్ ట్రేసింగ్ చేయాలి.

- **Manual Spans:** మీరు సొంతంగా ఒక Span ని క్రియేట్ చేయవచ్చు.

```javascript
tracer.trace("payment.process", { resource: "stripe_api" }, () => {
  // ఇక్కడ జరిగే పని మొత్తం ఒక Span లా రికార్డ్ అవుతుంది
  return processPayment(data);
});
```

- **Nested Spans:** ఒక పనిలో మళ్ళీ చిన్న చిన్న పనులు ఉంటే, వాటిని `Child Spans` గా క్రియేట్ చేయవచ్చు.
- **ప్రయోజనం:** మీ బిజినెస్ ప్రాసెస్ ఏ దశలో ఆగుతుందో (ఉదా: బ్యాంక్ ఏపిఐ రెస్పాన్స్ కోసం వెయిట్ చేస్తోందా?) అనేది స్పష్టంగా కనిపిస్తుంది.

---

### **సారాంశం (Best Practices)**

1. **Sampling:** ప్రొడక్షన్‌లో `Tail-based sampling` వాడటం ఉత్తమం (ఎర్రర్స్ మిస్ అవ్వకుండా ఉండటానికి).
2. **Tags:** ఎప్పుడూ `user_id` లేదా `tenant_id` వంటి ముఖ్యమైన ఐడెంటిఫయర్స్ ట్యాగ్స్ లా యాడ్ చేయండి. ఇది **'Search & Filter'** చేయడానికి ప్రాణం వంటిది.
3. **Instrumentation:** అప్లికేషన్ లోని ముఖ్యమైన 'External calls' (Database, Third-party API, Message Queues) అన్నింటినీ కచ్చితంగా Custom Spans తో కవర్ చేయండి.

## **ఒక చిన్న ప్రశ్న:** మీరు ట్రేసింగ్ సెటప్ చేసినప్పుడు ఏదైనా పర్టికులర్ సర్వీస్ లేదా ఫంక్షన్ యొక్క టైమ్ ని సరిగ్గా చూడలేకపోతున్నారా? లేదా ట్రేసింగ్ లో వచ్చే 'Noise' (అనవసరమైన ట్రేసెస్) తగ్గించడానికి ఏమైనా హెల్ప్ కావాలా?

Datadogలో మీరు అడిగిన ఈ మూడు ఫీచర్లు మీ అప్లికేషన్ యొక్క పూర్తి స్థాయి దృశ్యమానతను (Full-stack Observability) మెరుగుపరుస్తాయి. వీటిని వివరంగా చూద్దాం.

---

### **1. Log Pipelines (లాగ్ పైప్‌లైన్స్)**

లాగ్స్ కేవలం టెక్స్ట్ ఫైల్స్ కాదు, అవి డేటా. **Log Pipelines** ద్వారా మీరు ముడి లాగ్స్‌ను (Raw logs) ఉపయోగకరమైన సమాచారంగా మార్చవచ్చు.

- **Parsing:** లాగ్ మెసేజ్‌లను డికోడ్ చేయడం (ఉదా: JSONని పార్స్ చేసి `error_code`ని విడిగా తీయడం).
- **Remapping:** ఫీల్డ్ పేర్లను మార్చడం (ఉదా: `user_id`ని `user.id`గా మార్చడం).
- **Masking (Sensitive Data):** క్రెడిట్ కార్డ్ నంబర్లు లేదా పాస్‌వర్డ్స్ వంటి వ్యక్తిగత సమాచారాన్ని (PII) లాగ్స్ నుండి ఆటోమేటిక్‌గా తొలగించడం లేదా మాస్క్ చేయడం.
- **Pipeline Order:** లాగ్ వచ్చినప్పుడు ఏ క్రమంలో ప్రాసెస్ అవ్వాలో పైప్‌లైన్ నిర్ణయిస్తుంది. ఇది లాగ్స్ Datadog కి చేరకముందే జరుగుతుంది.

---

### **2. Synthetic Monitoring (సింథటిక్ మానిటరింగ్)**

మీ అప్లికేషన్‌ను యూజర్లు వాడకపోయినా, అది పనిచేస్తుందో లేదో ముందే తెలుసుకోవడం దీని ఉద్దేశ్యం.

- **API Tests:** మీ API ఎండ్-పాయింట్స్ (Endpoints) అప్ ఉన్నాయా? సరైన రెస్పాన్స్ ఇస్తున్నాయా? అని ఆటోమేటిక్‌గా ప్రతి 1 నిమిషానికి చెక్ చేయడం.
- **Browser Tests:** ఒక రోబోట్ లాగా వెబ్‌సైట్‌లోకి లాగిన్ అయ్యి, 'Add to Cart' క్లిక్ చేసి, పేమెంట్ పేజీ వరకు వెళ్ళిందా లేదా అని టెస్ట్ చేయడం (Selenium వంటిది).
- **Global Locations:** మీ వెబ్‌సైట్ హైదరాబాద్‌లో బాగుంది, కానీ అమెరికా యూజర్లకు స్లోగా ఉందేమో అని వివిధ దేశాల నుండి టెస్ట్ చేయడం.
- **ప్రయోజనం:** యూజర్ కంప్లైంట్ చేయకముందే మీకే సమస్య తెలిసిపోతుంది (Proactive monitoring).

---

### **3. Real User Monitoring (RUM)**

ఇది మీ వెబ్‌సైట్ లేదా యాప్‌లో **నిజమైన యూజర్లు** చేస్తున్న పనులను ట్రాక్ చేస్తుంది.

- **User Journey:** ఒక యూజర్ ఏ పేజీ నుండి ఏ పేజీకి వెళ్తున్నారు? ఎక్కడ ఆగిపోతున్నారు? అనేది చూపిస్తుంది.
- **Frontend Performance:** పేజీ లోడ్ అవ్వడానికి ఎంత టైమ్ పట్టింది? ఏ ఇమేజ్ వల్ల సైట్ స్లో అవుతోంది? (Core Web Vitals).
- **Error Tracking (Client Side):** యూజర్ బ్రౌజర్‌లో వచ్చే JavaScript ఎర్రర్స్ ని పట్టుకుంటుంది.
- **Session Replay:** ఒక యూజర్ మీ వెబ్‌సైట్‌లో ఏం చేశారో రికార్డింగ్ లాగా చూడవచ్చు. ఎక్కడ క్లిక్ చేశారో, ఎక్కడ కన్ఫ్యూజ్ అయ్యారో అర్థం చేసుకోవడానికి ఇది బెస్ట్.

---

### **సారాంశం: ఎప్పుడు ఏది వాడాలి?**

| ఫీచర్                    | ఉద్దేశ్యం                                                       |
| ------------------------ | --------------------------------------------------------------- |
| **Log Pipelines**        | లాగ్స్‌ని శుభ్రం చేసి, డేటాబేస్/సెర్చ్‌కి సిద్ధం చేయడం.         |
| **Synthetic Monitoring** | యూజర్లు రాకముందే సిస్టమ్ బాగుందో లేదో చెక్ చేయడం (Robot Test).  |
| **RUM**                  | రియల్ యూజర్ల ఎక్స్‌పీరియన్స్ మరియు ఫ్రంటెండ్ బగ్స్ తెలుసుకోవడం. |

**ఒక చిన్న సలహా:**

- **Synthetic Monitoring** ని ఎప్పుడూ 'Critical Paths' (Login, Checkout) కోసం సెట్ చేయండి.
- **RUM** ని మీ వెబ్‌సైట్ ఫ్రంటెండ్ పర్ఫార్మెన్స్ మెరుగుపరచడానికి వాడండి.
- **Log Pipelines** లో ఎప్పుడూ PII (Personal Identifiable Information) డేటాను మాస్క్ చేయడం మర్చిపోవద్దు.

## మీరు మీ వెబ్‌సైట్ కోసం **Synthetic Monitor** ని క్రియేట్ చేశారా? అది ఏదైనా ఒక ఎండ్-పాయింట్ ని టెస్ట్ చేయడంలో ఏమైనా ఇబ్బంది ఉందా?

Datadog యొక్క **Continuous Profiler**, **Watchdog AI**, మరియు **Cost Optimization** అనేవి మీ అప్లికేషన్ యొక్క పర్ఫార్మెన్స్, ఆటోమేషన్ మరియు బడ్జెట్ నిర్వహణకు సంబంధించి అడ్వాన్స్‌డ్ టూల్స్. వీటి గురించి క్లుప్తంగా మరియు నిపుణుల దృక్కోణంలో చూద్దాం.

---

### **1. Continuous Profiler (కోడ్-లెవల్ ఆప్టిమైజేషన్)**

మనం ముందు చర్చించినట్లుగా, ఇది కోడ్ ఎగ్జిక్యూషన్‌ను విశ్లేషిస్తుంది.

- **Expert Insight:** ఇది కేవలం CPU/Memory మాత్రమే కాకుండా, **Lock Contention** (ఒక థ్రెడ్ ఇంకో దాని కోసం వెయిట్ చేయడం) మరియు **Garbage Collection (GC) pauses** ని కూడా పట్టుకుంటుంది.
- **Usage:** ప్రొడక్షన్‌లో మీ సర్వర్స్ రెస్పాన్స్ టైమ్ ఎందుకు స్పైక్ అవుతుందో, ఏ ఫంక్షన్ వల్ల మెమరీ వేస్ట్ అవుతుందో తెలుసుకోవడానికి **Flame Graph** ని లోతుగా పరిశీలించండి.

---

### **2. Watchdog AI (ఇంటెలిజెంట్ అనాలిసిస్)**

ఇది Datadog లో ఉండే ఒక 'AI-powered' అసిస్టెంట్. మీరు మ్యాన్యువల్‌గా అలర్ట్స్ లేదా డాష్‌బోర్డ్స్ సెట్ చేయాల్సిన అవసరం లేకుండా, ఇది సిస్టమ్‌ను అబ్జర్వ్ చేస్తుంది.

- **ఎలా పనిచేస్తుంది:** మీ మెట్రిక్స్ మరియు లాగ్స్‌ను ఇది నిరంతరం గమనిస్తూ, "అసాధారణమైన మార్పులు" (Anomalies) కనిపిస్తే ఆటోమేటిక్‌గా నోటిఫికేషన్ పంపుతుంది.
- **ప్రయోజనం:** \* **Automatic Root Cause Analysis:** ఒక ఎర్రర్ వచ్చినప్పుడు "ఏ సర్వీస్ నుండి ఇది స్టార్ట్ అయ్యింది?" అని ఇది విశ్లేషించి మీకు క్లూస్ ఇస్తుంది.
- **Noise Reduction:** అనవసరమైన అలర్ట్స్‌ని తగ్గించి, నిజంగా ముఖ్యమైన వాటిపైనే దృష్టి పెడుతుంది.

- **Mastery Tip:** మీ డాష్‌బోర్డ్‌లో **Watchdog Insights** ని ఎనేబుల్ చేయండి. మీరు సెట్ చేయని మానిటర్ల గురించి కూడా ఇది హెచ్చరిస్తుంది.

---

### **3. Cost Optimization (ఖర్చు నియంత్రణ)**

Datadog లో డేటా పెరిగే కొద్దీ బిల్లు పెరుగుతుంది. దీనిని నియంత్రించడం ఒక సవాలు.

- **Log Indexes (ముఖ్యమైనది):** అన్ని లాగ్స్‌ని ఇండెక్స్ చేయకండి. డెవలప్‌మెంట్ లాగ్స్‌ని 'Exclusion Filters' ద్వారా Datadog లోకి పంపకుండా ఆపేయండి (Drop logs).
- **Trace Sampling:** మనం ముందుగా మాట్లాడుకున్నట్టు, **Tail-based sampling** ని కరెక్ట్‌గా సెట్ చేయండి. అన్నీ ట్రేసెస్ పంపాల్సిన అవసరం లేదు.
- **Metric Cardinals:** యూనిక్ మెట్రిక్స్ (ఉదా: `user_id` బేస్డ్ మెట్రిక్స్) పెంచకండి. ఇది చాలా ఖరీదైనది.
- **Retention Policy:** పాత డేటా (ఉదా: 30 రోజుల కంటే పాత లాగ్స్) ని ఆటోమేటిక్‌గా డిలీట్ అయ్యేలా సెట్ చేయండి (S3 కి పంపి అక్కడ స్టోర్ చేయండి, Datadog లో వద్దు).

---

### **నిపుణుడి సలహా (Expert Summary)**

| ఫీచర్           | మీ లక్ష్యం (Goal)                                           |
| --------------- | ----------------------------------------------------------- |
| **Profiler**    | కోడ్ స్పీడ్ పెంచడం, క్రాష్ తగ్గించడం.                       |
| **Watchdog AI** | మ్యాన్యువల్ వర్క్ తగ్గించి, ఆటోమేటిక్‌గా సమస్యలను కనుగొనడం. |
| **Cost Opt.**   | డేటా క్వాలిటీ తగ్గకుండా, అనవసరమైన డేటాను ఫిల్టర్ చేయడం.     |

**ముఖ్యమైన ప్రశ్న:**
మీ Datadog బిల్లులో ఎక్కువ భాగం దేనికి వెళ్తోంది (Logs కా, Traces కా, లేక Metrics కా?) అని ఎప్పుడైనా గమనించారా?

## మీరు Datadog లో **Usage** సెక్షన్‌కి వెళ్తే ఏ సర్వీస్ ఎక్కువ ఖర్చు పెడుతుందో చూపిస్తుంది. ఆ డేటాను బట్టి మనం **Cost Optimization** ని ప్లాన్ చేయవచ్చు. మీరు దాన్ని ఒకసారి చెక్ చేసి ఏది ఎక్కువ ఖర్చు పెడుతుందో చెప్పగలరా?

Datadog లో మల్టీ-ఎన్విరాన్మెంట్ సెటప్ (Dev, QA, Prod) చేయడం అనేది ఒక బెస్ట్ ప్రాక్టీస్. దీనిని **Terraform** ద్వారా చేయడం వల్ల మీ మానిటరింగ్ కాన్ఫిగరేషన్ మొత్తం "Version Controlled" (Git లో) ఉంటుంది.

దీనిని మాస్టర్ చేయడానికి ఇక్కడ ఒక రోడ్‌మ్యాప్ ఉంది:

---

### **1. మల్టీ-ఎన్విరాన్మెంట్ స్ట్రాటజీ (Environment Strategy)**

Datadog లో ఎన్విరాన్మెంట్లను వేరు చేయడానికి **"Tags"** ఉత్తమమైన మార్గం.

- **Global Tags:** ప్రతి ఏజెంట్ కాన్ఫిగరేషన్‌లో `env:dev`, `env:qa`, `env:prod` అని ట్యాగ్స్ యాడ్ చేయాలి.
- **Separation:** డాష్‌బోర్డ్స్, అలర్ట్స్ క్రియేట్ చేసేటప్పుడు `env` ట్యాగ్ ని బేస్ చేసుకుని ఫిల్టర్స్ వాడాలి.
- **Organization:** సాధ్యమైతే, పెద్ద కంపెనీలలో Prod కోసం ఒక సెపరేట్ Datadog Organization (Sub-account) ని వాడతారు, కానీ చిన్న/మధ్య తరహా ప్రాజెక్ట్స్ కి ఒకే అకౌంట్‌లో 'Tags' వాడటం సరిపోతుంది.

---

### **2. Terraform for Datadog (IaC)**

Terraform ద్వారా Datadog రిసోర్సెస్ (Monitors, Dashboards, SLOs) క్రియేట్ చేయడం వల్ల మ్యాన్యువల్ మిస్టేక్స్ తగ్గుతాయి.

#### **ఎగ్జాంపుల్ Terraform కోడ్:**

ముందుగా `datadog` ప్రొవైడర్‌ను సెటప్ చేయండి:

```hcl
provider "datadog" {
  api_key = var.dd_api_key
  app_key = var.dd_app_key
}

# ఒక Monitor క్రియేట్ చేయడం
resource "datadog_monitor" "api_latency" {
  name    = "API Latency High in ${var.env}"
  type    = "query alert"
  query   = "avg(last_5m):avg:api.latency{env:${var.env}} > 500"
  message = "Alert on ${var.env}: Latency is high @slack-channel"
}

```

---

### **3. బెస్ట్ ప్రాక్టీసెస్ (Pro Tips)**

#### **A. Variables వాడండి**

ప్రతి ఎన్విరాన్మెంట్ కోసం ఒక `.tfvars` ఫైల్ ఉంచండి.

- `dev.tfvars`: `env = "dev"`
- `prod.tfvars`: `env = "prod"`
  దీనివల్ల ఒకే కోడ్ ని అన్ని ఎన్విరాన్మెంట్లలో వాడవచ్చు.

#### **B. Modules వాడండి**

మీరు ప్రతి ఎన్విరాన్మెంట్‌లో ఒకే రకమైన మానిటర్స్ క్రియేట్ చేస్తుంటే, వాటిని ఒక **Terraform Module** గా రాయండి.

- `module "api_monitors" { source = "./modules/monitors", env = "prod" }`

#### **C. Secret Management**

`DD_API_KEY`, `DD_APP_KEY` వంటి వాటిని కోడ్‌లో ఎప్పుడూ రాయకండి. **GitHub Secrets** లేదా **AWS Secrets Manager** ని వాడండి.

---

### **4. వర్క్‌ఫ్లో ఎలా ఉండాలి?**

1. **Code Changes:** ఏదైనా మానిటర్ మార్చాలంటే డైరెక్ట్ గా Datadog UI లో కాకుండా, Terraform కోడ్‌లో మార్చండి.
2. **Pull Request:** ఆ కోడ్ ని PR చేయండి (టీమ్ సభ్యులు రివ్యూ చేస్తారు).
3. **Apply:** CI/CD పైప్‌లైన్ ద్వారా `terraform apply` రన్ చేయండి. దీనివల్ల మీ మానిటరింగ్ కూడా అప్లికేషన్ కోడ్ లాగే అప్డేట్ అవుతుంది.

---

### **మీరు చేయాల్సిన తదుపరి పని:**

మీ దగ్గర ఇప్పటికే Terraform సెటప్ ఉందా? లేదా మానిటర్స్ ని మ్యాన్యువల్ గా క్రియేట్ చేస్తున్నారా?

మీరు ఒకవేళ కొత్తగా మొదలుపెడుతుంటే, **"Terraform Datadog Provider"** ని వాడటం మొదలుపెట్టండి. ఇది మీ మానిటరింగ్ ని చాలా ప్రొఫెషనల్‌గా మారుస్తుంది. ఏదైనా ఒక మానిటర్ ని Terraform లోకి ఎలా మార్చాలో తెలియకపోతే చెప్పండి, నేను మీకు ఉదాహరణ కోడ్ ఇస్తాను!

---
