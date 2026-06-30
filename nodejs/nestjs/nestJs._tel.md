# NestJS Expert Roadmap (2026)

## [1 - TypeScript Mastery (Mandatory)](#1---typescript-mastery-mandatory-1)

Before NestJS, become very comfortable with TypeScript.

### Topics

- Types
- Interfaces
- Enums
- Generics
- Utility Types
- Union & Intersection
- Type Guards
- Type Inference
- Decorators
- Metadata Reflection
- Modules
- Async Programming
- Promises
- Event Loop
- Error Handling
- Functional Programming
- Advanced OOP

Expert Level

- Conditional Types
- Mapped Types
- Infer keyword
- Declaration Merging
- Module Resolution
- Namespaces
- Custom Decorators
- Reflect Metadata

---

## [2 - NestJS Fundamentals](#2---nestjs-fundamentals-1)

Learn how NestJS works internally.

Topics

- Nest CLI
- Project Structure
- Modules
- Controllers
- Providers
- Services
- Dependency Injection
- Injection Scopes
- Custom Providers
- Dynamic Modules
- Circular Dependencies
- Lifecycle Hooks
- Configuration Module
- Environment Variables

Understand

```
Request

↓

Controller

↓

Service

↓

Repository

↓

Database
```

---

## [3 - Dependency Injection Deep Dive](#3---dependency-injection-deep-dive-1)

Become expert in DI.

Topics

- Providers
- useClass
- useValue
- useExisting
- useFactory
- Factory Providers
- Async Providers
- Injection Tokens
- Global Providers
- Dynamic Modules

Understand

```
IOC Container

Dependency Graph

Resolution Process
```

---

## [4 - Request Lifecycle](#4---request-lifecycle-1)

Know every stage.

```
Incoming Request

↓

Middleware

↓

Guards

↓

Interceptors

↓

Pipes

↓

Controller

↓

Service

↓

Database

↓

Interceptors

↓

Exception Filters

↓

Response
```

Topics

- Middleware
- Pipes
- Guards
- Interceptors
- Filters

---

## [5 - Validation](#5---validation-1)

Topics

- DTO
- ValidationPipe
- class-validator
- class-transformer
- Nested Validation
- Custom Validation
- Global Validation
- Sanitization

---

## [6 - Authentication](#6---authentication-1)

Learn every authentication mechanism.

Topics

JWT

Refresh Token

Passport

OAuth

Google Login

GitHub Login

Facebook Login

Microsoft Login

LDAP

SAML

MFA

2FA

OTP

Email Verification

Password Reset

Session Authentication

Cookie Authentication

API Key Authentication

---

## [7 - Authorization](#7---authorization-1)

Expert Topics

RBAC

ABAC

Permission Based

Policy Based

CASL

Custom Guards

Roles Decorator

Claims Based Authorization

Permission Caching

Since your project already has **RBAC**, this phase is extremely important.

---

## [8 - Database](#8---database-1)

Start with PostgreSQL.

Topics

TypeORM

Prisma

Drizzle ORM

Query Builder

Relations

Transactions

Indexes

Views

Materialized Views

Pagination

Soft Delete

Migration

Seeders

Connection Pooling

Performance

Replication

Read Replica

Caching

---

## [9 - Advanced SQL](#9---advanced-sql-1)

Master SQL itself.

CTE

Recursive Query

Window Functions

Stored Procedures

Functions

Triggers

JSON

JSONB

Partitioning

Full Text Search

GIN Index

GiST Index

Execution Plan

EXPLAIN ANALYZE

---

## [10 - Exception Handling](#10---exception-handling-1)

Topics

Built-in Exceptions

Custom Exceptions

Global Filters

Error Logging

Domain Errors

Business Exceptions

---

## [11 - Middleware](#11---middleware-1)

Topics

Logging

Authentication

Correlation ID

Rate Limiting

Helmet

Compression

Request Timing

---

## [12 - Pipes](#12---pipes-1)

Topics

Validation Pipe

Transform Pipe

Parse Pipe

Custom Pipes

Reusable Pipes

---

## [13 - Guards](#13---guards-1)

Topics

JWT Guard

Role Guard

Permission Guard

Ownership Guard

API Key Guard

Multiple Guards

Guard Execution Order

---

## [14 - Interceptors](#14---interceptors-1)

Topics

Response Mapping

Caching

Logging

Timeout

Serialization

Pagination

Audit

---

## [15 - Microservices](#15---microservices-1)

NestJS supports

- REST
- GraphQL
- gRPC
- TCP
- Redis
- RabbitMQ
- Kafka
- NATS
- MQTT

Learn

Request Response

Event Driven

Saga

CQRS

Outbox Pattern

Idempotency

---

## [16 - Event Driven Architecture](#16---event-driven-architecture-1)

Topics

EventEmitter

Domain Events

Integration Events

Event Bus

Message Queue

Dead Letter Queue

Retry Strategy

---

## [17 - CQRS](#17---cqrs-1)

Topics

Commands

Queries

Handlers

Events

Aggregates

Domain Model

Read Model

Write Model

---

## [18 - Caching](#18---caching-1)

Topics

Redis

Cache Manager

Distributed Cache

TTL

Cache Invalidation

Session Cache

Permission Cache

Since you previously asked about caching RBAC permissions in AWS Lambda, this phase directly applies to your architecture.

---

## [19 - File Upload](#19---file-upload-1)

Topics

Multer

S3 Upload

Streaming

Presigned URL

Virus Scan

Image Processing

PDF Upload

---

## [20 - AWS Integration ⭐](#20---aws-integration--1)

This is the most important phase for your career.

Learn

AWS Lambda

API Gateway

CloudFront

S3

SES

SNS

SQS

DynamoDB

Secrets Manager

Parameter Store

EventBridge

Step Functions

CloudWatch

X-Ray

WAF

Cognito

NestJS on Lambda

Lambda Layers

Cold Start Optimization

Since your current company uses **Serverless Framework with AWS Lambda**, this phase should be one of your highest priorities.

---

## [21 - Testing](#21---testing-1)

Topics

Unit Test

Integration Test

E2E Test

Mocking

Jest

Supertest

Test Containers

Coverage

---

## [22 - Logging](#22---logging-1)

Topics

Winston

Pino

Structured Logging

Correlation ID

CloudWatch Logs

Log Aggregation

---

## [23 - Security](#23---security-1)

Topics

Helmet

CORS

CSRF

XSS

SQL Injection

NoSQL Injection

Rate Limiting

JWT Security

Secrets

Encryption

Hashing

Password Storage

OWASP Top 10

---

## [24 - Performance](#24---performance-1)

Topics

Lazy Loading

Compression

Streaming

Connection Pooling

Indexes

Caching

Memory Optimization

Profiling

Load Testing

---

## [25 - Architecture](#25---architecture-1)

Learn

Clean Architecture

Hexagonal

Onion

DDD

Repository Pattern

Factory Pattern

Strategy Pattern

Adapter Pattern

Facade Pattern

Builder Pattern

Singleton

Mediator

Decorator

---

## [26 - DevOps](#26---devops-1)

Topics

Docker

Docker Compose

Kubernetes Basics

GitHub Actions

CI/CD

Terraform

AWS CDK

Serverless Framework

Monitoring

---

## [27 - API Design](#27---api-design-1)

Topics

REST

Versioning

Swagger

OpenAPI

Pagination

Filtering

Sorting

Rate Limiting

Idempotency

HATEOAS

---

## [28 - GraphQL](#28---graphql-1)

Topics

Schema

Resolver

Query

Mutation

Subscription

Federation

Apollo

DataLoader

---

## [29 - WebSockets](#29---websockets-1)

Topics

Socket.IO

Gateway

Events

Rooms

Namespaces

Authentication

Scaling

---

## [30 - Production Deployment](#30---production-deployment-1)

Topics

Docker

NGINX

PM2

AWS ECS

Lambda

Kubernetes

Blue Green Deployment

Canary Deployment

Zero Downtime Deployment

---

## [31 - Expert Topics](#31---expert-topics-1)

Topics

Reflection

Metadata

Execution Context

Dynamic Modules

Plugin System

Custom CLI

Monorepo

Nx

Library Creation

Package Publishing

Multi-Tenant Architecture

Background Jobs

Cron Jobs

Worker Threads

BullMQ

Redis Streams

Event Sourcing

---

## [Final Capstone Projects](#final-capstone-projects-1)

Build these projects to demonstrate expert-level skills:

1. **Enterprise Authentication Service** (JWT, OAuth, MFA, RBAC, refresh tokens)
2. **E-commerce Backend** (Orders, payments, inventory, Redis, queues)
3. **Hospital Management System** (Microservices, CQRS, Event Sourcing)
4. **Multi-tenant SaaS CRM** (Tenant isolation, subscriptions, auditing)
5. **AWS Serverless NestJS Backend** (API Gateway, Lambda, SQS, SNS, EventBridge, PostgreSQL)
6. **Real-time Chat Application** (WebSockets, Redis Pub/Sub, notifications)
7. **File Processing Platform** (S3 uploads, queues, background workers, PDF/image processing)

---

# 1 - TypeScript Mastery (Mandatory)

జావాస్క్రిప్ట్ అనేది **Dynamically Typed** లాంగ్వేజ్ (అంటే ఒక వేరియబుల్‌లో ఎలాంటి డేటా అయినా స్టోర్ చేయవచ్చు). కానీ టైప్‌స్క్రిప్ట్ **Statically Typed**. అంటే మనం ఏ వేరియబుల్‌లో ఏ రకమైన డేటా ఉండాలో ముందే చెప్పాలి.

### Core Types:

- `string`: టెక్స్ట్ కోసం.
- `number`: నంబర్స్ (integers, decimals) కోసం.
- `boolean`: `true` లేదా `false` కోసం.
- `any`: ఏ రకమైన డేటా అయినా ఇవ్వచ్చు (కానీ దీనిని వాడకపోవడమే మంచిది).

```typescript
let userName: string = "Rahul";
let userId: number = 101;
let isActive: boolean = true;
```

### Type Inference అంటే ఏమిటి?

మీరు ప్రతిసారీ `: string` లేదా `: number` అని విడిగా చెప్పాల్సిన అవసరం లేదు. మీరు ఒక వేరియబుల్‌కి వాల్యూ అసైన్ చేసినప్పుడు, టైప్‌స్క్రిప్ట్ స్మార్ట్‌గా దానంతట అదే టైప్‌ని గుర్తుపడుతుంది. దీనినే **Type Inference** అంటారు.

```typescript
let company = "Google"; // TypeScript ఇది 'string' అని ఆటోమేటిక్‌గా ఫిక్స్ చేస్తుంది.
// company = 123; // Error: Type 'number' is not assignable to type 'string'.
```

---

## 2. Interfaces (ఇంటర్‌ఫేసెస్)

NestJSలో డేటా స్ట్రక్చర్‌ని (ముఖ్యంగా Objects, DTOs - Data Transfer Objects) డిఫైన్ చేయడానికి ఇంటర్‌ఫేస్ చాలా ఎక్కువ వాడతాం. ఇది ఒక **Contract (నియమావళి)** లాంటిది. ఒక ఆబ్జెక్ట్ ఎలా ఉండాలో ఇది చెప్తుంది.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role?: string; // '?' పెడితే ఇది Optional (ఇవ్వకపోయినా పర్లేదు)
}

// Interface ని ఉపయోగించడం:
const newUser: User = {
  id: 1,
  name: "Kiran",
  email: "kiran@mail.com", // role ఇవ్వలేదు, అయినా పర్లేదు ఎందుకంటే అది optional.
};
```

---

## 3. Enums (ఈనమ్స్)

Enums అంటే **Enumerated Types**. మన అప్లికేషన్‌లో కొన్ని స్థిరమైన వాల్యూస్ (Constant Values) ఉన్నప్పుడు వాటిని గ్రూప్ చేయడానికి ఇది వాడతాం. (ఉదాహరణకు: User Roles, Order Status, etc.)

```typescript
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

interface Employee {
  name: string;
  role: UserRole; // ఇక్కడ Enum ని టైప్ గా వాడుతున్నాం
}

const emp: Employee = {
  name: "Suresh",
  role: UserRole.ADMIN, // తప్పులు జరిగే ఛాన్స్ ఉండదు (Typo errors రావు)
};
```

---

## 4. Union & Intersection (యూనియన్ మరియు ఇంటర్సెక్షన్)

### Union Types (`|`)

ఒక వేరియబుల్ ఒకటి కంటే ఎక్కువ రకాల టైప్స్‌ని సపోర్ట్ చేయాలి అనుకున్నప్పుడు `|` (OR) సింబల్ వాడతాం.

```typescript
let id: string | number;
id = 101; // OK
id = "EMP101"; // OK
```

### Intersection Types (`&`)

రెండు వేర్వేరు ఇంటర్‌ఫేసెస్ లేదా టైప్స్‌ని కలిపి (Combine చేసి) ఒక కొత్త టైప్ లాగా మార్చడానికి `&` (AND) సింబల్ వాడతాం.

```typescript
interface Person {
  name: string;
}

interface Worker {
  employeeId: number;
}

// రెండింటినీ కలపడం:
type Staff = Person & Worker;

const manager: Staff = {
  name: "Anil",
  employeeId: 5005,
};
```

---

# 2 - NestJS Fundamentals

ఈ రోజు మనం **Nest CLI, Project Structure,** మరియు ఆ **Request Flow (Controllers, Services, Modules)** గురించి చాలా సులభంగా, ఒక రియల్ వరల్డ్ ఎగ్జాంపుల్‌తో నేర్చుకుందాం.

---

## 🏢 ఒక రియల్ వరల్డ్ అనాలజీ (హోటల్ ఉదాహరణ)

NestJS ఆర్కిటెక్చర్‌ని సులభంగా అర్థం చేసుకోవడానికి ఒక రెస్టారెంట్‌ని ఉదాహరణగా తీసుకుందాం:

1. **Request (కస్టమర్):** హోటల్‌కి వచ్చి ఆర్డర్ ఇచ్చే కస్టమర్.
2. **Controller (వెయిటర్):** కస్టమర్ దగ్గరికి వెళ్లి ఆర్డర్ తీసుకుంటాడు. కానీ వంట వండడు. వంట చేసే కిచెన్‌కి ఆర్డర్ పాస్ చేస్తాడు.
3. **Service (చీఫ్ షెఫ్/వంటవాడు):** అసలైన పని (Business Logic) ఇతనే చేస్తాడు. బిర్యానీ ఎలా వండాలో ఇతనికి తెలుసు.
4. **Repository/Database (స్టోర్ రూమ్):** వంటకు కావలసిన సామాన్లు (రైస్, చికెన్, మసాలాలు) అన్నీ ఇక్కడ ఉంటాయి. షెఫ్ ఇక్కడి నుండి సామాన్లు తీసుకుని వంట చేస్తాడు.

---

## 1. Nest CLI & Project Structure

NestJS ప్రాజెక్ట్‌ను సులభంగా క్రియేట్ చేయడానికి మరియు మేనేజ్ చేయడానికి **Nest CLI (Command Line Interface)** వాడతాం.

- **ప్రాజెక్ట్ క్రియేట్ చేయడానికి కమాండ్:**

```bash
npm i -g @nestjs/cli
nest new my-nest-app

```

### Project Structure (ముఖ్యమైన ఫైల్స్):

ప్రాజెక్ట్ క్రియేట్ అవ్వగానే `src/` ఫోల్డర్‌లో ఈ క్రింది ఫైల్స్ ఉంటాయి:

- `main.ts`: ఇది మన అప్లికేషన్ స్టార్ట్ అయ్యే **Entry Point**. ఇక్కడే సర్వర్ రన్ అవుతుంది.
- `app.module.ts`: రూట్ మోడ్యూల్. అప్లికేషన్‌కు కావలసినవన్నీ ఇక్కడే లింక్ అవుతాయి.
- `app.controller.ts`: వచ్చే రిక్వెస్ట్‌లను హ్యాండిల్ చేస్తుంది.
- `app.service.ts`: అసలైన బిజినెస్ లాజిక్ ఇక్కడే ఉంటుంది.

---

## 2. Modules, Controllers, మరియు Services

NestJS అనేది **Modular Architecture** ని ఫాలో అవుతుంది. అంటే ప్రతి ఫీచర్‌ని ఒక విడి భాగం (Module) లాగా విడగొడతాం (ఉదాహరణకు: UserModule, ProductModule, OrderModule).

### A. Controller (కంట్రోలర్)

ఇవి క్లయింట్ నుండి వచ్చే HTTP Requests (GET, POST, PUT, DELETE) ని స్వీకరిస్తాయి. ఇక్కడ `@Controller()` అనే **Decorator** వాడతాం.

```typescript
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("users") // Base URL: localhost:3000/users
export class AppController {
  // Dependency Injection ద్వారా సర్వీస్‌ని లింక్ చేస్తున్నాం
  constructor(private readonly appService: AppService) {}

  @Get() // GET Request వచ్చినప్పుడు ఇది రన్ అవుతుంది
  getUsers(): string[] {
    return this.appService.getAllUsers(); // లాజిక్ కోసం సర్వీస్‌ని అడుగుతుంది
  }
}
```

### B. Service / Provider (సర్వీస్)

డేటాబేస్ నుండి డేటా తేవడం, కాలిక్యులేషన్స్ చేయడం వంటి **Business Logic** అంతా ఇక్కడే రాస్తాం. దీనిపైన `@Injectable()` డెకరేటర్ ఉంటుంది.

```typescript
import { Injectable } from "@nestjs/common";

@Injectable() // దీని అర్థం: ఈ క్లాస్‌ని వేరే చోట Inject చేయవచ్చు
export class AppService {
  private users = ["Rahul", "Kiran", "Anil"];

  getAllUsers(): string[] {
    return this.users; // డేటాని రిటర్న్ చేస్తుంది
  }
}
```

### C. Module (మోడ్యూల్)

ఇది కంట్రోలర్‌ని, సర్వీస్‌ని ఒకచోట కలిపే **Glue (అంటునరకడం)** లాంటిది.

```typescript
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController], // కంట్రోలర్స్ ఇక్కడ పెట్టాలి
  providers: [AppService], // సర్వీసెస్ ఇక్కడ పెట్టాలి
})
export class AppModule {}
```

---

## 3. Dependency Injection (DI) అంటే ఏమిటి?

పైన కంట్రోలర్ కోడ్‌లో మీరు గమనిస్తే, మనం `new AppService()` అని ఆబ్జెక్ట్ క్రియేట్ చేయలేదు. కేవలం `constructor(private appService: AppService)` అని రాశాం.

NestJS రన్‌టైమ్‌లో దానంతట అదే `AppService` యొక్క ఆబ్జెక్ట్‌ని క్రియేట్ చేసి కంట్రోలర్‌కి ఇస్తుంది. దీనినే **Dependency Injection (DI)** అంటారు. దీనివల్ల కోడ్ మేనేజ్ చేయడం చాలా ఈజీ అవుతుంది.

---

> 💡 **క్విక్ సమ్మరీ:**
> క్లయింట్ `localhost:3000/users` కి రిక్వెస్ట్ పంపితే -> **Controller** దాన్ని రిసీవ్ చేసుకుంటుంది -> కంట్రోలర్ తనే స్వయంగా డేటా ఇవ్వకుండా **Service** ని అడుగుతుంది -> సర్వీస్ డేటాని ప్రాసెస్ చేసి కంట్రోలర్‌కి ఇస్తే, కంట్రోలర్ క్లయింట్‌కి రెస్పాన్స్ పంపుతుంది.

# 3 - Dependency Injection Deep Dive

NestJS యొక్క అత్యంత శక్తివంతమైన ఫీచర్ **Dependency Injection (DI)**. దీని వెనుక ఒక **IOC (Inversion of Control) Container** ఉంటుంది. మనం `useClass`, `useValue`, `useFactory` లాంటి Custom Providers వాడి, NestJS డిపెండెన్సీ ఇంజెక్షన్‌ను మనకు నచ్చినట్టు కంట్రోల్ చేయవచ్చు.

దీనిని సులభంగా అర్థం చేసుకోవడానికి, మొదట ఆ 3 ముఖ్యమైన పదాల (IOC, Dependency Graph, Resolution) అర్థం చూసి, ఆపై కోడ్ లోకి వెళ్దాం.

---

## 🧩 Internal Architecture: Core Concepts

### 1. IOC Container (ఇన్వర్షన్ ఆఫ్ కంట్రోల్ కంటైనర్)

సాధారణంగా ఒక క్లాస్‌లో ఇంకో క్లాస్ కావాలంటే మనం `const service = new MyService()` అని మాన్యువల్‌గా ఆబ్జెక్ట్ క్రియేట్ చేస్తాం. కానీ NestJS లో ఆ బాధ్యతను మనం **IOC Container** కి అప్పగిస్తాం. అప్లికేషన్ స్టార్ట్ అవ్వగానే ఏ క్లాస్‌కి ఏ ఆబ్జెక్ట్ కావాలో ఈ కంటైనరే చూసుకుంటుంది.

### 2. Dependency Graph (డిపెండెన్సీ గ్రాఫ్)

NestJS అప్లికేషన్ బూట్ అయ్యేటప్పుడు, ఏ మోడ్యూల్ దేని మీద ఆధారపడి ఉంది (`AppController` కి `AppService` కావాలి, `AppService` కి `DatabaseRepository` కావాలి... ఇలా) ఒక మ్యాప్ లేదా **Graph** క్రియేట్ చేసుకుంటుంది.

### 3. Resolution Process (రిజల్యూషన్ ప్రాసెస్)

ఈ గ్రాఫ్ ఆధారంగా, IOC కంటైనర్ కింద నుండి పైకి ఆబ్జెక్ట్స్‌ని క్రియేట్ చేసుకుంటూ వస్తుంది. మొదట `DatabaseRepository` ని క్రియేట్ చేస్తుంది, ఆ తర్వాత దాన్ని `AppService` కి ఇస్తుంది, ఆపై ఆ సర్వీస్‌ని `AppController` కి ఇంజెక్ట్ చేస్తుంది.

---

## 🛠️ Custom Providers (కస్టమ్ ప్రొవైడర్స్)

మనం కేవలం `@Injectable()` క్లాస్ మాత్రమే కాకుండా, రకరకాల పద్ధతుల్లో డేటాని లేదా క్లాస్‌లను ఇంజెక్ట్ చేయవచ్చు.

### 1. `useValue` (కాన్స్టాంట్స్ లేదా కాన్ఫిగరేషన్స్ కోసం)

మీరు ఒక క్లాస్ కాకుండా, ఒక డైరెక్ట్ ఆబ్జెక్ట్, స్ట్రింగ్ లేదా ఎక్స్‌టర్నల్ లైబ్రరీని ఇంజెక్ట్ చేయాలనుకున్నప్పుడు ఇది వాడతాం. ఇక్కడ మనం **Injection Token** (ఒక స్ట్రింగ్ లేదా సింబల్) వాడతాం.

```typescript
// app.module.ts
import { Module } from "@nestjs/common";

@Module({
  providers: [
    {
      provide: "APP_CONFIG", // ఇది Injection Token
      useValue: { theme: "dark", apiUrl: "https://api.com" }, // డైరెక్ట్ వాల్యూ
    },
  ],
})
export class AppModule {}
```

**దీన్ని వాడే విధానం (Injection):**

```typescript
// app.service.ts
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class AppService {
  // స్ట్రింగ్ టోకెన్ కాబట్టి @Inject() వాడాలి
  constructor(@Inject("APP_CONFIG") private config: any) {
    console.log(this.config.theme); // 'dark' అని ప్రింట్ అవుతుంది
  }
}
```

### 2. `useClass` (డైనమిక్‌గా క్లాస్ మార్చడానికి)

పరిస్థితిని బట్టి (ఉదాహరణకు డెవలప్‌మెంట్ లో ఒక క్లాస్, ప్రొడక్షన్ లో ఒక క్లాస్) వాడాలనుకుంటే `useClass` వాడతాం.

```typescript
@Module({
  providers: [
    {
      provide: LoggerService,
      // ఒకవేళ ప్రొడక్షన్ అయితే క్లౌడ్ లాగర్, లేదంటే నార్మల్ లాగర్ వాడు
      useClass:
        process.env.NODE_ENV === "production" ? CloudLogger : LocalLogger,
    },
  ],
})
export class AppModule {}
```

### 3. `useFactory` & Factory Providers (డైనమిక్ లాజిక్ కోసం)

ఒక ప్రొవైడర్ క్రియేట్ అయ్యే ముందు కొంత లాజిక్ రన్ అవ్వాలి లేదా వేరే సర్వీస్ మీద ఆధారపడి డిసైడ్ అవ్వాలి అనుకుంటే `useFactory` వాడతాం.

```typescript
@Module({
  providers: [
    {
      provide: "DATA_BASE_CONNECTION",
      inject: [ConfigService], // ఫ్యాక్టరీ ఫంక్షన్ లోకి వేరే సర్వీస్ ని పంపడానికి
      useFactory: (config: ConfigService) => {
        const dbUri = config.get("DB_URI");
        return createConnection(dbUri); // డైనమిక్‌గా కనెక్షన్ క్రియేట్ అవుతుంది
      },
    },
  ],
})
export class AppModule {}
```

### 4. Async Providers (అసింక్రోనస్ ప్రొవైడర్స్)

డేటాబేస్ కనెక్షన్ లాంటివి అసింక్రోనస్‌గా (Promise రిటర్న్ చేసేవి) కనెక్ట్ అవ్వాలి, అది కనెక్ట్ అయ్యాకే అప్లికేషన్ స్టార్ట్ అవ్వాలి అనుకుంటే `useFactory` లో `async/await` వాడవచ్చు.

```typescript
{
  provide: 'ASYNC_DB',
  useFactory: async () => {
    const connection = await connectToDatabase();
    return connection; // Promise రిజాల్వ్ అయ్యాకే NestJS ముందుకు వెళ్తుంది
  },
}

```

---

## 🌐 Global Providers & Dynamic Modules

- **Global Providers:** ఒక ప్రొవైడర్ లేదా మోడ్యూల్‌ని ప్రతిచోటా `imports: []` లో పెట్టకుండా, అప్లికేషన్ మొత్తం అవైలబుల్ గా ఉంచాలి అంటే దానిపైన `@Global()` డెకరేటర్ వాడతాం.
- **Dynamic Modules:** ఒక మోడ్యూల్‌ని ఇంపోర్ట్ చేసుకునేటప్పుడే దానికి కొన్ని కాన్ఫిగరేషన్స్ పాస్ చేయాలి అనుకుంటే డైనమిక్ మోడ్యూల్స్ రాస్తాం (ఉదాహరణకు: `ConfigModule.forRoot({ envFilePath: '.env' })`). దీని గురించి మనం ముందు ముందు ఇంకా డీప్‌గా నేర్చుకుంటాం.

---

> 💡 **ఇంటర్వ్యూ టిప్:** "NestJS లో క్లాస్ కాకుండా స్ట్రింగ్ టోకెన్ తో ఎలా ఇంజెక్ట్ చేస్తారు?" అని అడిగితే, `useValue` లేదా `useFactory` వాడి, కంట్రోలర్/సర్వీస్ లో `@Inject('TOKEN_NAME')` ద్వారా ఇంజెక్ట్ చేస్తామని చెప్పాలి.

# 4 - Request Lifecycle

NestJS లో **Request Lifecycle (భ్యర్థన జీవిత చక్రం)** అనేది అత్యంత ముఖ్యమైన కాన్సెప్ట్. మీరు పంపిన డయాగ్రామ్ NestJS బ్యాకెండ్ ఆర్కిటెక్చర్‌ను అద్దం పట్టినట్టు చూపిస్తోంది. ఒక రిక్వెస్ట్ సర్వర్‌కు వచ్చినప్పటి నుండి రెస్పాన్స్ తిరిగి వెళ్లేవరకు అది దాటాల్సిన గేట్లు ఇవి.

దీనిని సులభంగా అర్థం చేసుకోవడానికి, మన **హోటల్ (రెస్టారెంట్) ఉదాహరణను** మళ్లీ తీసుకుందాం.

---

## 🏢 Request Lifecycle: హోటల్ ఉదాహరణ

1. **Incoming Request (కస్టమర్):** కస్టమర్ హోటల్‌లోకి వస్తున్నాడు.
2. **Middleware (సెక్యూరిటీ గార్డ్):** హోటల్ ఎంట్రన్స్ లోనే ఐడి కార్డ్ చెక్ చేయడం లేదా అందరికీ కామన్‌గా ఉండే మాస్క్ లాంటివి చెక్ చేయడం. (Logging, Parsing)
3. **Guards (టికెట్ చెకర్/VVIP గేట్ కీపర్):** లోపలికి అందరినీ రానివ్వరు. కేవలం టికెట్/పర్మిషన్ ఉన్నవారిని మాత్రమే పంపిస్తారు. (Authentication & Authorization)
4. **Interceptors (Pre-Controller) (ఆర్డర్ టేకర్):** ఆర్డర్ తీసుకునే ముందు టైమ్ నోట్ చేసుకోవడం లేదా రిక్వెస్ట్‌లో ఏమైనా మార్పులు చేయడం.
5. **Pipes (ఫుడ్ ఇన్స్పెక్టర్ / వాలిడేటర్):** కస్టమర్ ఇచ్చిన ఆర్డర్ ఫార్మాట్ కరెక్ట్‌గా ఉందో లేదో (ఉదాహరణకు: క్వాంటిటీ నంబర్ లో ఉందా లేదా) చెక్ చేసి, అవసరమైతే మార్చడం. (Validation & Transformation)
6. **Controller & Service:** వంటవాడు వంట వండి డిష్ రెడీ చేయడం (Business Logic).
7. **Interceptors (Post-Controller) (ప్యాకింగ్/గార్నిషింగ్):** వంట పూర్తయ్యాక దాన్ని ఒక పద్ధతిలో ప్యాక్ చేయడం. (Response Formatting)
8. **Exception Filters (హౌస్ కీపింగ్ / కంప్లైంట్ డెస్క్):** వంటలో ఏదైనా తప్పు జరిగితే (Error వస్తే) కస్టమర్‌కి అర్థమయ్యేలా క్షమాపణ చెప్పి నీట్‌గా హ్యాండిల్ చేయడం.

---

## 🛠️ NestJS Components: కోడ్ పరంగా ఎలా ఉంటాయో చూద్దాం

### 1. Middleware (మిడిల్‌వేర్)

ఇది రిక్వెస్ట్ రాగానే అందరికంటే ముందే ఎగ్జిక్యూట్ అవుతుంది. సాధారణంగా లాగింగ్ (Logging), రిక్వెస్ట్ బాడీ రీడింగ్ వంటి పనుల కోసం వాడతాం. ఇందులో `next()` ఫంక్షన్‌ని ఖచ్చితంగా కాల్ చేయాలి, లేదంటే రిక్వెస్ట్ అక్కడే ఆగిపోతుంది.

```typescript
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Request] ${req.method} ${req.url}`);
    next(); // తదుపరి స్టేజ్ (Guards) కి పంపడానికి
  }
}
```

### 2. Guards (గార్డ్స్)

ఒక యూజర్‌కి ఈ API ని యాక్సెస్ చేసే హక్కు ఉందా లేదా (`true` లేదా `false`) అని తేల్చడానికి Guards వాడతాం. ఉదాహరణకు: JWT Auth Guard.

```typescript
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    return token === "valid-secret-token"; // true అయితేనే కంట్రోలర్ కి వెళ్తుంది, లేదంటే 403 Forbidden ఇస్తుంది.
  }
}
```

### 3. Interceptors (ఇంటర్‌సెప్టర్స్)

ఇవి చాలా పవర్‌ఫుల్. కంట్రోలర్ రన్ అవ్వకముందు, మరియు రన్ అయిపోయి రెస్పాన్స్ బయటికి వెళ్లేటప్పుడు... ఈ రెండు సమయాల్లోనూ ఇది పని చేస్తుంది. రెస్పాన్స్ డేటాని మార్చడానికి (Format చేయడానికి) లేదా క్యాషింగ్ (Caching) కోసం వాడతాం.

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    // కంట్రోలర్ నుండి వచ్చే డేటాని ఒక స్టాండర్డ్ ఫార్మాట్ లోకి మార్చడం
    return next.handle().pipe(map((data) => ({ success: true, result: data })));
  }
}
```

### 4. Pipes (పైప్స్)

పైప్స్ ప్రధానంగా రెండు పనులు చేస్తాయి:

- **Transformation:** వచ్చే డేటాని ఒక టైప్ నుండి ఇంకో టైప్ కి మార్చడం (ఉదాహరణకు: స్ట్రింగ్ `"123"` ని నంబర్ `123` గా మార్చడం).
- **Validation:** వచ్చే డేటా కరెక్ట్‌గా ఉందో లేదో చెక్ చేయడం (లేకపోతే `400 Bad Request` ఇస్తుంది).

```typescript
// కంట్రోలర్ లో నేరుగా వాడవచ్చు
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // ఇక్కడ id ఆటోమేటిక్‌గా నంబర్ గా మారిపోతుంది. ఒకవేళ 'abc' అని ఇస్తే ఎర్రర్ వస్తుంది.
  return this.service.getUser(id);
}

```

### 5. Exception Filters (ఎక్సెప్షన్ ఫిల్టర్స్)

అప్లికేషన్‌లో ఎక్కడైనా ఎర్రర్ (Error) వచ్చినప్పుడు, క్రాష్ అవ్వకుండా యూజర్‌కి ఒక క్లీన్ అండ్ నీట్ ఎర్రర్ మెసేజ్ పంపడానికి ఇది వాడతాం.

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}
```

---

> 💡 **ఎగ్జిక్యూషన్ ఆర్డర్ గుర్తుపెట్టుకోండి:**
> `Middleware` -> `Guards` -> `Interceptors (Pre)` -> `Pipes` -> `Controller/Service` -> `Interceptors (Post)` -> `Exception Filter (ఇఫ్ ఎర్రర్)` -> `Response`.

# 5 - Validation

NestJS లో **Validation (డేటా ప్రాసెసింగ్ & వాలిడేషన్)** అనేది బ్యాకెండ్ సెక్యూరిటీ మరియు స్టెబిలిటీకి అత్యంత కీలకమైన భాగం. క్లయింట్ నుండి వచ్చే చెత్త డేటా (bad data) డేటాబేస్ వరకు వెళ్లకుండా అడ్డుకునే మొదటి రక్షణ గోడ ఇది.

NestJS లో వాలిడేషన్ చేయడానికి మనం ప్రధానంగా **DTO (Data Transfer Object)**, **`class-validator`**, మరియు **`class-transformer`** లైబ్రరీలను ఉపయోగిస్తాం.

---

## 📦 ముఖ్యమైన టెర్మినాలజీస్

1. **DTO (Data Transfer Object):** ఒక రిక్వెస్ట్ (POST/PUT) ద్వారా వచ్చే డేటా ఏ స్ట్రక్చర్‌లో ఉండాలో డిఫైన్ చేసే ఒక TypeScript క్లాస్.
2. **class-validator:** డెకరేటర్స్ (ఉదాహరణకు: `@IsString()`, `@IsEmail()`) ఉపయోగించి క్లాస్ ప్రాపర్టీలను వాలిడేట్ చేసే లైబ్రరీ.
3. **class-transformer:** వచ్చే ప్లెయిన్ జేసన్ (Plain JSON) ఆబ్జెక్ట్‌ను టైప్‌స్క్రిప్ట్ క్లాస్ ఆబ్జెక్ట్‌గా మార్చే (Instantiate చేసే) లైబ్రరీ.

---

## 🛠️ ప్రాక్టికల్ ఇంప్లిమెంటేషన్ (Step-by-Step)

మొదట మనం ఈ లైబ్రరీలను ఇన్‌స్టాల్ చేయాలి:

```bash
npm i --save class-validator class-transformer

```

### 1. Global Validation Setting (గ్లోబల్ వాలిడేషన్)

మన అప్లికేషన్‌లో ప్రతి చోటా వాలిడేషన్ ఆటోమేటిక్‌గా జరగాలి అంటే, `main.ts` లో `ValidationPipe` ని గ్లోబల్‌గా సెట్ చేయాలి. ఇక్కడే మనం **Sanitization** (అనవసరమైన డేటాని తొలగించడం) కూడా సెట్ చేయవచ్చు.

```typescript
// main.ts
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO లో లేని ఎక్స్‌ట్రా ఫీల్డ్స్ వస్తే ఆటోమేటిక్‌గా డిలీట్ చేస్తుంది (Sanitization)
      forbidNonWhitelisted: true, // ఎక్స్‌ట్రా ఫీల్డ్స్ ఇస్తే రిక్వెస్ట్‌ను రిజెక్ట్ చేస్తుంది (Error ఇస్తుంది)
      transform: true, // స్ట్రింగ్ నంబర్లను అసలైన నంబర్లుగా మారుస్తుంది (Type Transformation)
    }),
  );

  await app.listen(3000);
}
bootstrap();
```

### 2. DTO & Nested Validation (నెస్టెడ్ వాలిడేషన్)

ఇప్పుడు ఒక యూజర్ రిజిస్ట్రేషన్ మరియు అతని అడ్రస్ (Nested Object) కోసం DTO ఎలా రాయాలో చూద్దాం.

```typescript
// dto/create-user.dto.ts
import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  ValidateNested,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

// నెస్టెడ్ ఆబ్జెక్ట్ కోసం విడిగా క్లాస్
class AddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsInt()
  zipCode: number;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: "దయచేసి సరైన ఈమెయిల్ ఇవ్వండి!" }) // Custom Message
  email: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age: number;

  // Nested Validation ఇక్కడే జరుగుతుంది
  @ValidateNested()
  @Type(() => AddressDto) // class-transformer కి ఇది ఏ క్లాస్ ఆబ్జెక్టో చెప్తుంది
  address: AddressDto;
}
```

### 3. Controller లో వాడకం

కంట్రోలర్‌లో `@Body()` కి పక్కన మనం క్రియేట్ చేసిన DTO ని టైప్ లాగా ఇస్తే చాలు, `ValidationPipe` మిగతాదంతా చూసుకుంటుంది.

```typescript
// users.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Post("register")
  registerUser(@Body() createUserDto: CreateUserDto) {
    // ఒకవేళ డేటా వాలిడ్ కాకపోతే, కంట్రోలర్ లోపలికి రాదు.
    // ముందే 400 Bad Request ఎర్రర్ వెళ్ళిపోతుంది.
    return { message: "యూజర్ డేటా పర్ఫెక్ట్‌గా ఉంది!", data: createUserDto };
  }
}
```

---

## 🎨 Custom Validation (సొంతంగా వాలిడేటర్ రాయడం)

ఒకవేళ `class-validator` లో లేని ఒక ప్రత్యేకమైన కండిషన్ (ఉదాహరణకు: పాస్‌వర్డ్‌లో 'password' అనే పదం ఉండకూడదు) చెక్ చేయాలంటే, మనం సొంతంగా కస్టమ్ వాలిడేటర్ రాసుకోవచ్చు.

```typescript
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsNotIsPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotIsPassword",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return (
            typeof value === "string" && value.toLowerCase() !== "password"
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} వాల్యూ 'password' అని ఉండకూడదు!`;
        },
      },
    });
  };
}

// DTO లో వాడే విధానం:
// @IsNotIsPassword()
// password: string;
```

---

> 💡 **ముఖ్య గమనిక (Sanitization):** `whitelist: true` పెట్టడం వల్ల హ్యాకర్లు మన DTO లో లేని మాలిషియస్ డేటాని (SQL Injection లేదా Script Tags లాంటివి) రిక్వెస్ట్ బాడీలో పంపినా, NestJS వాటిని ఆటోమేటిక్‌గా ఫిల్టర్ చేసి పారేస్తుంది.

# 6 - Authentication

NestJS లో **Authentication (ధృవీకరణ)** అనేది ఒక బ్యాకెండ్ డెవలపర్‌కు అత్యంత కీలకమైన మైలురాయి. మీరు పంపిన లిస్ట్‌లో బేసిక్ API కీస్ నుండి ఎంటర్‌ప్రైజ్ లెవెల్ SAML/LDAP వరకు అన్నీ ఉన్నాయి.

NestJS లో వీటిని ఇంప్లిమెంట్ చేయడానికి మనం అఫీషియల్ `@nestjs/passport` మరియు `passport` లైబ్రరీలను ఎక్కువగా ఉపయోగిస్తాం.

ఈ భారీ టాపిక్‌ను సులభంగా అర్థం చేసుకోవడానికి, మొదట వీటిని కొన్ని గ్రూపులుగా విడగొట్టి, ఆపై మోస్ట్ ఇంపార్టెంట్ అయిన **JWT & Refresh Tokens** మెకానిజంను కోడ్ ఉదాహరణతో చూద్దాం.

---

## 🔐 Authentication Mechanisms (వర్గీకరణ)

| రకం (Type)                    | ఎప్పుడు వాడతాం?                                                               |
| ----------------------------- | ----------------------------------------------------------------------------- |
| **Session & Cookie Auth**     | ట్రెడిషనల్ వెబ్ అప్లికేషన్స్ (SSR) మరియు ఒకే డొమైన్ లో ఉండే యాప్స్ కోసం.      |
| **JWT & Refresh Tokens**      | మోడరన్ SPA (React/Vue), మొబైల్ యాప్స్ మరియు మైక్రోసర్వీసెస్ కోసం (Stateless). |
| **OAuth (Social Logins)**     | గూగుల్, గిట్‌హబ్, ఫేస్‌బుక్ ఐడీలతో ఈజీగా లాగిన్ అవ్వడానికి.                   |
| **Security Layers (MFA/OTP)** | సెక్యూరిటీని పెంచడానికి (2FA, Email OTP, SMS).                                |
| **Enterprise Auth**           | పెద్ద ఆఫీసులలో వాడే LDAP, SAML (Single Sign-On - SSO).                        |
| **API Key Auth**              | థర్డ్ పార్టీ డెవలపర్స్ మన API ని వాడుకోవడానికి (ఉదా: Stripe, AWS Keys).       |

---

## 🛠️ NestJS లో JWT & Passport ఇంప్లిమెంటేషన్ ఫ్లో

NestJS లో ఆర్కిటెక్చర్ పరంగా Auth ని ఎలా డిజైన్ చేస్తామో ఒక స్టాండర్డ్ ఫ్లో ఇక్కడ చూద్దాం:

```
Login Request (Credentials) -> AuthService (Validate) -> Generate Token -> Client

```

ఆ తర్వాత వచ్చే ప్రతి రిక్వెస్ట్‌ను **Guard & Strategy** కాపాడతాయి:

```
Protected Request -> AuthGuard -> JwtStrategy (Validate Token) -> Controller

```

### 1. Strategy క్రియేట్ చేయడం (JwtStrategy)

Passport లైబ్రరీ మనకు `PassportStrategy` ని ఇస్తుంది. ఇది టోకెన్‌ను ఆటోమేటిక్‌గా రీడ్ చేసి, వాలిడేట్ చేస్తుంది.

```typescript
// auth/strategies/jwt.strategy.ts
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Request Headers లో 'Authorization: Bearer <TOKEN>' నుండి టోకెన్ తీసుకుంటుంది
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // టోకెన్ ఎక్స్‌పైర్ అయిపోతే రిజెక్ట్ చేస్తుంది
      secretOrKey: "MY_SUPER_SECRET_KEY", // ప్రొడక్షన్ లో ఇది .env లో పెట్టాలి
    });
  }

  async validate(payload: any) {
    // టోకెన్ వాలిడ్ అయితే, ఈ పేలోడ్ డేటా (userId, email) 'req.user' కి అసైన్ అవుతుంది
    return { userId: payload.sub, username: payload.username };
  }
}
```

### 2. Custom Guard క్రియేట్ చేయడం (JwtAuthGuard)

ప్రతి రూట్ దగ్గర Passport కమాండ్స్ రాయకుండా ఒక క్లీన్ గార్డ్ తయారు చేసుకోవచ్చు.

```typescript
// auth/guards/jwt-auth.guard.ts
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {} // 'jwt' అనేది పైన ఉన్న స్ట్రాటజీ పేరు
```

### 3. Controller లో వాడకం

ఇప్పుడు మనం క్రియేట్ చేసిన గార్డ్‌ను ఏ API కి ప్రొటెక్షన్ కావాలంటే అక్కడ `@UseGuards()` లో పెట్టాలి.

```typescript
// users.controller.ts
import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";

@Controller("profile")
export class ProfileController {
  @UseGuards(JwtAuthGuard) // ఈ గార్డ్ లేకపోతే లోపలికి రానివ్వదు
  @Get()
  getProfile(@Request() req) {
    // JwtStrategy నుండి వచ్చిన యూజర్ డేటా ఇక్కడ అవైలబుల్ గా ఉంటుంది
    return { message: "సక్సెస్!", user: req.user };
  }
}
```

---

## 🔄 Refresh Token మెకానిజం అంటే ఏమిటి?

- **Access Token:** ఇది కేవలం 15 నిమిషాలు మాత్రమే బ్రతుకుతుంది. దీనితోనే యూజర్ API ని యాక్సెస్ చేస్తాడు.
- **Refresh Token:** ఇది 7 రోజులు లేదా అంతకంటే ఎక్కువ రోజులు ఉంటుంది. ఇది డేటాబేస్ లో సేవ్ అయి ఉంటుంది.
- **పనిచేసే విధానం:** Access Token ఎక్స్‌పైర్ అవ్వగానే, క్లయింట్ బ్యాక్‌గ్రౌండ్‌లో `Refresh Token` ని పంపి కొత్త Access Token ని తీసుకుంటుంది. దీనివల్ల యూజర్ ప్రతి 15 నిమిషాలకూ మళ్లీ మళ్లీ పాస్‌వర్డ్ కొట్టి లాగిన్ అవ్వాల్సిన అవసరం ఉండదు.

---

> 💡 **OAuth & Social Logins గమనిక:** గూగుల్ లేదా గిట్‌హబ్ లాగిన్స్ చేసేటప్పుడు కూడా ప్రాసెస్ ఇంతే సులభంగా ఉంటుంది. `passport-google-oauth20` లాంటి స్ట్రాటజీని ఇంజెక్ట్ చేసి, గూగుల్ ఇచ్చే `Profile` డేటాని మన డేటాబేస్ లో సేవ్ చేసుకుంటాం.

# 7 - Authorization

NestJS లో **Authorization (అధికార నిర్ధారణ)** అనేది అత్యంత కీలకమైన సెక్యూరిటీ లేయర్. Authentication యూజర్ ఎవరో చెప్తే (`Who are you?`), Authorization ఆ యూజర్‌కి ఏమేం చేసే హక్కులు ఉన్నాయో డిసైడ్ చేస్తుంది (`What can you do?`).

మీ ప్రాజెక్ట్‌లో ఇప్పటికే **RBAC (Role-Based Access Control)** వాడుతున్నారు కాబట్టి, దానిని మరింత అడ్వాన్స్‌డ్ లెవెల్‌కి (Permission/Policy-Based, CASL) ఎలా తీసుకెళ్లాలో ఇక్కడ చూద్దాం.

---

## 🛡️ Authorization మోడల్స్ (ముఖ్యమైన తేడాలు)

- **RBAC (Role-Based):** యూజర్ రోల్ ఆధారంగా నిర్ణయం జరుగుతుంది (ఉదా: `Admin` అయితే డిలీట్ చేయవచ్చు, `User` అయితే చేయలేడు).
- **ABAC (Attribute-Based):** కండిషన్స్ ఆధారంగా నిర్ణయం జరుగుతుంది (ఉదా: "డాక్యుమెంట్ క్రియేట్ చేసిన ఓనర్ (`Owner`) అయితేనే దాన్ని ఎడిట్ చేయాలి" లేదా "ఆఫీస్ టైమింగ్స్ 9-5 మధ్యలోనే యాక్సెస్ ఉండాలి").
- **Permission/Claims-Based:** రోల్స్ కాకుండా స్పెసిఫిక్ పర్మిషన్స్ చెక్ చేస్తాం (ఉదా: `users:delete`, `products:write`). దీనివల్ల ఒక రోల్‌కి ఏ పర్మిషన్స్ ఉండాలో డైనమిక్‌గా మార్చవచ్చు.
- **CASL:** ఇది NestJS లో ABAC మరియు పర్మిషన్ బేస్డ్ ఆథరైజేషన్ రాయడానికి వాడే అత్యంత పవర్‌ఫుల్ లైబ్రరీ.

---

## 🛠️ NestJS లో అడ్వాన్స్‌డ్ RBAC & Permission-Based ఇంప్లిమెంటేషన్

మనం ఒక కస్టమ్ `@Roles()` లేదా `@Permissions()` డెకరేటర్ మరియు ఒక **Custom Guard** రాసి, రిక్వెస్ట్ వచ్చేటప్పుడే మెటాడేటాని ఎలా రీడ్ చేయాలో చూద్దాం.

### 1. Custom Roles/Permissions Decorator

NestJS లో మనం మన సొంత డెకరేటర్స్ క్రియేట్ చేసుకోవచ్చు. దీనికోసం `Reflector` క్లాస్ ఉపయోగపడుతుంది.

```typescript
// auth/decorators/permissions.decorator.ts
import { SetMetadata } from "@nestjs/common";

// 'permissions' అనే కీ తో మనం పంపే వాల్యూస్ ని మెటాడేటా లో సేవ్ చేస్తుంది
export const RequirePermissions = (...permissions: string[]) =>
  SetMetadata("permissions", permissions);
```

### 2. Custom Authorization Guard (పర్మిషన్స్ చెక్ చేయడానికి)

ఈ గార్డ్ లో మనం `Reflector` ఉపయోగించి కంట్రోలర్/హ్యాండ్లర్ పైన ఉన్న పర్మిషన్స్ ని రీడ్ చేసి, యూజర్ పర్మిషన్స్ తో మ్యాచ్ చేస్తాం.

```typescript
// auth/guards/permissions.guard.ts
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. కంట్రోలర్ మెథడ్ పైన మనం సెట్ చేసిన పర్మిషన్స్ ని రీడ్ చేయడం
    const requiredPermissions = this.reflector.get<string[]>(
      "permissions",
      context.getHandler(),
    );

    if (!requiredPermissions) {
      return true; // ఏ పర్మిషన్ సెట్ చేయకపోతే, అందరికీ యాక్సెస్ ఇస్తున్నాం
    }

    // 2. Request నుండి యూజర్ ఆబ్జెక్ట్ ని తీసుకోవడం (ఇది JwtGuard నుండి వస్తుంది)
    const request = context.switchToHttp().getRequest();
    const user = request.user; // e.g., user = { name: 'Rahul', permissions: ['user:read', 'user:delete'] }

    // 3. యూజర్ దగ్గర కావలసిన పర్మిషన్ ఉందో లేదో చెక్ చేయడం
    return requiredPermissions.every((permission) =>
      user.permissions?.includes(permission),
    );
  }
}
```

### 3. Controller లో వాడకం

```typescript
// users.controller.ts
import { Controller, Delete, UseGuards, Param } from "@nestjs/common";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { PermissionsGuard } from "./auth/guards/permissions.guard";
import { RequirePermissions } from "./auth/decorators/permissions.decorator";

@Controller("users")
@UseGuards(JwtAuthGuard, PermissionsGuard) // రెండు గార్డ్స్ ఒకదాని తర్వాత ఒకటి రన్ అవుతాయి
export class UsersController {
  @Delete(":id")
  @RequirePermissions("user:delete") // ఈ పర్మిషన్ ఉంటేనే లోపలికి రానిస్తుంది
  deleteUser(@Param("id") id: string) {
    return { message: `${id} యూజర్ సక్సెస్‌ఫుల్‌గా డిలీట్ చేయబడ్డారు.` };
  }
}
```

---

## ⚡ Expert Optimization: Permission Caching

పెద్ద అప్లికేషన్లలో, ప్రతి రిక్వెస్ట్ వచ్చినప్పుడల్లా యూజర్ పర్మిషన్స్ ఏంటో తెలుసుకోవడానికి డేటాబేస్ కి క్వెరీ పంపడం వల్ల పర్ఫార్మెన్స్ తగ్గుతుంది.

- **పరిష్కారం:** యూజర్ లాగిన్ అయినప్పుడు అతని పర్మిషన్స్ లిస్ట్‌ను **Redis Cache** లో సేవ్ చేస్తాం (Permission Caching).
- గార్డ్ రన్ అయ్యేటప్పుడు ముందుగా Redis లో చెక్ చేసి, అక్కడ ఉంటే డైరెక్ట్ గా వాలిడేట్ చేస్తాం. దీనివల్ల API రెస్పాన్స్ టైమ్ చాలా ఫాస్ట్ గా ఉంటుంది.

---

> 💡 **CASL ఎప్పుడు వాడాలి?:** ఒకవేళ మీ ప్రాజెక్ట్‌లో "ఒక యూజర్ తను రాసిన ఆర్టికల్‌ను మాత్రమే డిలీట్ చేయాలి, వేరేవాళ్లది చేయకూడదు" (Data-level/Instance-level authorization) అనే కండిషన్ వస్తే, అప్పుడు **CASL** లైబ్రరీని వాడటం బెస్ట్ ఛాయిస్.

# 8 - Database

NestJS లో **Database Layer (డేటాబేస్ విభాగం)** అనేది అప్లికేషన్ యొక్క బ్యాక్‌బోన్ (వెన్నెముక). మీరు ఎంచుకున్న **PostgreSQL** ప్రొడక్షన్ లెవెల్ యాప్స్‌కి ఒక అద్భుతమైన, నమ్మకమైన రిలేషనల్ డేటాబేస్ (RDBMS).

NestJS లో డేటాబేస్‌తో కనెక్ట్ అవ్వడానికి మనకు **TypeORM, Prisma,** మరియు **Drizzle ORM** వంటి అద్భుతమైన టూల్స్ ఉన్నాయి. ప్రస్తుతం మార్కెట్లో **Prisma** మరియు **Drizzle** వాటి స్పీడ్ మరియు టైప్-సేఫ్టీ వల్ల చాలా పాపులర్ అవుతున్నాయి.

ఈ రోజు మనం ఈ మూడు ORM ల మధ్య తేడాలు చూసి, ఆపై మోస్ట్ ఇంపార్టెంట్ ప్రొడクション టాపిక్స్ అయిన **Transactions** మరియు **Pagination** గురించి సులభంగా అర్థం చేసుకుందాం.

---

## 📊 ORMల పోలిక (TypeORM vs Prisma vs Drizzle)

| ఫీచర్             | TypeORM                                         | Prisma                                                      | Drizzle ORM                            |
| ----------------- | ----------------------------------------------- | ----------------------------------------------------------- | -------------------------------------- |
| **స్టైల్**        | Data Mapper / Active Record (Decorators ఎక్కువ) | Custom Schema Language (`schema.prisma`)                    | Pure TypeScript (SQL-like syntax)      |
| **టైప్-సేఫ్టీ**   | గుడ్, కానీ కొన్ని చోట్ల మాన్యువల్ టైప్స్ రాయాలి | ఎక్సలెంట్ (ఆటోమేటిక్ కోడ్ జనరేషన్)                          | అల్టిమేట్ (100% టైప్-సేఫ్, నో జనరేషన్) |
| **పర్ఫార్మెన్స్** | నార్మల్                                         | బాగుంటుంది, కానీ ఇంటర్నల్ ఇంజిన్ వల్ల కొంచెం హెవీగా ఉంటుంది | అత్యంత వేగవంతమైనది (Lightweight)       |

---

## ⚡ 1. Transactions (ట్రాన్సాక్షన్స్ - ఆల్ ఆర్ నథింగ్)

బ్యాకెండ్ డెవలప్‌మెంట్‌లో ట్రాన్సాక్షన్స్ చాలా ముఖ్యం. **ఉదాహరణకు:** ఒక యూజర్ కోర్సు కొన్నప్పుడు (E-commerce Order) రెండు పనులు జరగాలి:

1. యూజర్ అకౌంట్ నుండి డబ్బులు కట్ అవ్వాలి (`Orders Table` లో ఎంట్రీ పడాలి).
2. కోర్సు సీట్లు ఒకటి తగ్గాలి (`Inventory Table` అప్‌డేట్ అవ్వాలి).

ఒకవేళ మొదటిది జరిగి, రెండో దాంట్లో ఎర్రర్ వస్తే... డబ్బులు కట్ అవుతాయి కానీ ఆర్డర్ రాదు. అలా జరగకూడదు! అయితే రెండు పనులూ సక్సెస్ అవ్వాలి, లేదా ఏదీ అవ్వకూడదు (Rollback). దీనినే **Transaction** అంటారు.

### TypeORM లో ట్రాన్సాక్షన్ ఉదాహరణ:

```typescript
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class OrderService {
  constructor(private dataSource: DataSource) {}

  async createOrder(userId: number, courseId: number) {
    // క్వెరీ రన్నర్ క్రియేట్ చేయడం
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction(); // ట్రాన్సాక్షన్ స్టార్ట్ అయింది

    try {
      // 1. ఆర్డర్ క్రియేట్ చేయడం
      await queryRunner.manager.save(Order, { userId, courseId });

      // 2. ఇన్వెంటరీ తగ్గించడం
      await queryRunner.manager.decrement(
        Course,
        { id: courseId },
        "availableSeats",
        1,
      );

      // అంతా సక్సెస్ అయితేనే డేటాబేస్ లో సేవ్ చెయ్ (Commit)
      await queryRunner.commitTransaction();
      return { success: true, message: "ఆర్డర్ విజయవంతమైంది!" };
    } catch (error) {
      // ఏ ఒక్కటి ఫెయిల్ అయినా సరే, మార్పులన్నీ క్యాన్సిల్ చెయ్ (Rollback)
      await queryRunner.rollbackTransaction();
      throw new Error("ఆర్డర్ ఫెయిల్ అయింది, డబ్బులు సురక్షితం!");
    } finally {
      // కనెక్షన్ క్లోజ్ చేయడం మర్చిపోవద్దు
      await queryRunner.release();
    }
  }
}
```

---

## 📄 2. Pagination (పేజినేషన్ - స్మార్ట్ డేటా లోడింగ్)

డేటాబేస్ లో లక్షల్లో రికార్డ్స్ ఉన్నప్పుడు, `SELECT * FROM users` అని ఒకేసారి మొత్తం డేటా లాగితే సర్వర్ క్రాష్ అయిపోతుంది. అందుకే డేటాని ముక్కలు ముక్కలుగా (పేజీల వారీగా) తీసుకురావాలి. దీనికోసం `limit` (ఎన్ని రికార్డ్స్ కావాలి) మరియు `offset` (ఎన్ని రికార్డ్స్ వదిలేసి ముందుకు వెళ్లాలి) వాడతాం.

```typescript
// users.service.ts
async findAllPaginated(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit; // offset లెక్కించడం

  // TypeORM findAndCount వాడితే డేటాతో పాటు మొత్తం ఎన్ని రికార్డ్స్ ఉన్నాయో కూడా వస్తుంది
  const [data, total] = await this.userRepository.findAndCount({
    take: limit, // LIMIT
    skip: skip,  // OFFSET
    order: { id: 'DESC' } // లేటెస్ట్ డేటా పైన రావడానికి
  });

  return {
    data,
    meta: {
      totalItems: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    }
  };
}

```

---

## 🚀 Expert level Production Tips

- **Indexes (ఇండెక్స్‌లు):** మీ అప్లికేషన్‌లో `email` లేదా `username` తో ఎక్కువగా వెతుకుతుంటే (Queries చేస్తుంటే), ఆ ఫీల్డ్స్‌ పైన తప్పకుండా `Index` క్రియేట్ చేయాలి. ఇది బుక్ చివర ఉండే ఇండెక్స్ లాగా పనిచేసి, క్వెరీ స్పీడ్‌ని 100 రెట్లు పెంచుతుంది.
- **Read Replicas (రీడ్ రెప్లికాస్):** ప్రొడక్షన్ లో డేటాబేస్ మీద లోడ్ తగ్గించడానికి, మెయిన్ డేటాబేస్ (Write DB) ని కేవలం ఇన్సర్ట్/అప్‌డేట్ లకే వాడి, డేటా రీడ్ చేయడానికి (Select queries) దానికి కాపీగా ఉండే ఇంకో డేటాబేస్ (Read DB/Replica) ని వాడుతాం.
- **Soft Delete:** నిజమైన డేటాని డిలీట్ చేయకుండా, ఒక `deletedAt` అనే కాలమ్ పెట్టి అందులో టైమ్‌స్టాంప్ వేస్తాం. దీనివల్ల పొరపాటున డిలీట్ అయిన డేటాని ఈజీగా రికవర్ చేయవచ్చు.

# 9 - Advanced SQL

ఒక NestJS/Node.js డెవలపర్ కేవలం ORM (Prisma/TypeORM) మీద మాత్రమే ఆధారపడకూడదు. ఎందుకంటే బ్యాకెండ్‌లో భారీ డేటా, రిపోర్టింగ్ (Reporting), లేదా కాంప్లెక్స్ లాజిక్ వచ్చినప్పుడు ప్యూర్ SQL నాలెడ్జ్ అవసరం అవుతుంది. ముఖ్యంగా **PostgreSQL** లో ఉండే అడ్వాన్స్‌డ్ ఫీచర్స్ మీ అప్లికేషన్ పర్ఫార్మెన్స్‌ను నెక్స్ట్ లెవెల్‌కి తీసుకెళ్తాయి.

ఈ రోజు మనం ఈ అడ్వాన్స్‌డ్ SQL టాపిక్స్‌లో మోస్ట్ ఇంపార్టెంట్ అయిన **CTE, Window Functions,** మరియు **JSONB vs JSON** తేడాలను చాలా సులభంగా నేర్చుకుందాం.

---

## 📊 1. CTE (Common Table Expressions) - కోడ్ క్లీన్‌నెస్ కోసం

CTE అనేది ఒక కాంప్లెక్స్ క్వెరీ మధ్యలో మనం క్రియేట్ చేసుకునే ఒక **తాత్కాలిక రిజల్ట్ సెట్ (Temporary Result Set)**. దీనిని ఒక వేరియబుల్ లేదా వర్చువల్ టేబుల్ లాగా వాడుకోవచ్చు. ఇది `WITH` కీవర్డ్‌తో స్టార్ట్ అవుతుంది.

### ఉదాహరణ (రియల్ వరల్డ్):

మనకు ఒక ఈ-కామర్స్ యాప్ ఉందనుకుందాం. రూ. 10,000 కంటే ఎక్కువ ఖర్చు చేసిన కస్టమర్ల వివరాలు మరియు వారి లేటెస్ట్ ఆర్డర్ ఐడీ కావాలి.

```sql
WITH HighSpendingUsers AS (
    -- 1. ముందుగా ఎక్కువ ఖర్చు చేసిన యూజర్ల ఐడీలను ఫిల్టర్ చేస్తున్నాం
    SELECT user_id, SUM(total_amount) as total_spent
    FROM orders
    GROUP BY user_id
    HAVING SUM(total_amount) > 10000
)
-- 2. పైన వచ్చిన తాత్కాలిక టేబుల్ (HighSpendingUsers) ని మెయిన్ టేబుల్ తో జాయిన్ చేస్తున్నాం
SELECT u.id, u.name, h.total_spent
FROM users u
JOIN HighSpendingUsers h ON u.id = h.user_id;

```

> 💡 **Recursive CTE:** ఒక ఆర్గనైజేషన్‌లో ఎంప్లాయ్-మేనేజర్ హైరార్కీ (Hierarchy) లేదా కేటగిరీ-సబ్ కేటగిరీ ట్రీ స్ట్రక్చర్ (Tree Structure) ని క్వెరీ చేయడానికి `WITH RECURSIVE` వాడుతాం.

---

## 🪟 2. Window Functions (విండో ఫంక్షన్స్) - గ్రూపింగ్ వితౌట్ కొల్లాప్సింగ్

సాధారణ `GROUP BY` వాడితే రోస్ (Rows) అన్నీ కలిసిపోయి ఒకే రో గా మారిపోతాయి. కానీ **Window Functions** టేబుల్‌లోని రోస్‌ని కొల్లాప్స్ చేయకుండా, ప్రతి రో పక్కన ఒక విశ్లేషణాత్మక కాలిక్యులేషన్ (Analytical Calculation) చూపించడానికి ఉపయోగపడతాయి. దీనికోసం `OVER()` క్లాజ్ వాడుతాం.

### ముఖ్యమైన ఫంక్షన్స్: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`

### ఉదాహరణ:

ప్రతి డిపార్ట్‌మెంట్‌లో ఎక్కువ శాలరీ తీసుకుంటున్న టాప్ 2 ఎంప్లాయ్స్ వివరాలు కావాలి.

```sql
SELECT employee_name, department, salary,
       DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) as salary_rank
FROM employees;

```

- **PARTITION BY:** డిపార్ట్‌మెంట్ వైజ్ గా డేటాని విడగొడుతుంది (గ్రూప్ లాగా).
- **ORDER BY:** శాలరీ ఆధారంగా ర్యాంక్ ఇస్తుంది. దీనివల్ల ప్రతి ఎంప్లాయ్ పక్కన అతని ర్యాంక్ (1, 2, 3...) డిపార్ట్‌మెంట్ వారీగా ప్రింట్ అవుతుంది.

---

## 🗂️ 3. JSON vs JSONB (పోస్ట్‌గ్రెస్‌లో డాక్యుమెంట్ స్టోరేజ్)

PostgreSQL ఒక రిలేషనల్ డేటాబేస్ అయినప్పటికీ, అది NoSQL (MongoDB లాగా) డేటాని కూడా స్టోర్ చేయగలదు. దీనికోసం రెండు డేటా టైప్స్ ఉన్నాయి: `JSON` మరియు `JSONB`.

| ఫీచర్               | JSON                                                 | JSONB (Binary)                                  |
| ------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| **స్టోరేజ్**        | టెక్స్ట్ ఫార్మాట్‌లో యాజ్ ఇట్ ఈజ్ గా సేవ్ చేస్తుంది. | బైనరీ ఫార్మాట్‌లో కంప్రెస్ చేసి సేవ్ చేస్తుంది. |
| **ఇన్సర్ట్ స్పీడ్** | ఫాస్ట్ (ఎలాంటి ప్రాసెసింగ్ ఉండదు).                   | కొంచెం స్లో (బైనరీగా మార్చాలి కాబట్టి).         |
| **క్వెరీ స్పీడ్**   | స్లో (ప్రతిసారీ టెక్స్ట్ పార్స్ చేయాలి).             | **చాలా ఫాస్ట్** (ఇండెక్స్ సపోర్ట్ ఉంటుంది).     |
| **ఇండెక్సింగ్**     | నో (ఇండెక్స్ చేయలేము).                               | **యెస్ (GIN ఇండెక్స్ వాడవచ్చు).**               |

**ప్రొడక్షన్ టిప్:** బ్యాకెండ్ డెవలప్‌మెంట్‌లో 99% మనం **`JSONB`** నే వాడాలి. ఎందుకంటే దీని మీద క్వెరీలు చేయడం, ఫిల్టర్ చేయడం చాలా వేగంగా జరుగుతుంది.

---

## 🔍 4. EXPLAIN ANALYZE (క్వెరీ పర్ఫార్మెన్స్ చెకింగ్)

మీరు రాసిన క్వెరీ ఎందుకు స్లోగా ఉందో తెలుసుకోవడానికి PostgreSQL ఇచ్చిన బ్రహ్మాస్త్రం `EXPLAIN ANALYZE`.

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'rahul@mail.com';

```

ఇది రన్ చేస్తే, డేటాబేస్ ఆ క్వెరీని ఎలా ఎగ్జిక్యూట్ చేసిందో ఒక **Execution Plan** ఇస్తుంది:

- **Seq Scan (Sequential Scan):** అంటే ఇండెక్స్ లేక టేబుల్ మొత్తం వెతికింది (ఇది స్లో).
- **Index Scan:** అంటే ఇండెక్స్ వాడుకుని డైరెక్ట్ గా డేటా తెచ్చింది (ఇది సూపర్ ఫాస్ట్).

> 💡 **NestJS Connection:** NestJS లో TypeORM/Prisma లో రాసే `queryBuilder` క్వెరీలు బ్యాక్‌గ్రౌండ్‌లో ఇలాంటి SQL గానే మారుతాయి. కాబట్టి ఈ బేసిక్స్ తెలిస్తే మీ యాప్ ఎప్పటికీ స్లో అవ్వదు.

# 10 - Exception Handling

NestJS లో **Exception Handling (ఎర్రర్ మేనేజ్‌మెంట్)** అనేది మన అప్లికేషన్ క్రాష్ అవ్వకుండా కాపాడే అత్యంత ముఖ్యమైన రక్షణ వలయం. ఒక ప్రొడక్షన్ యాప్‌లో ఎర్రర్ వచ్చినప్పుడు, యూజర్‌కి అర్థం కాని ఇంటర్నల్ కోడ్ చూపించకుండా, నీట్‌గా ఒక స్టాండర్డ్ ఫార్మాట్‌లో ఎర్రర్ మెసేజ్ పంపడం మరియు బ్యాక్‌గ్రౌండ్‌లో దాన్ని లాగ్ (Log) చేయడం డెవలపర్ యొక్క బాధ్యత.

NestJS లో **Built-in Exceptions, Custom Exceptions, మరియు Global Filters** ఉపయోగించి ఎర్రర్స్‌ని ఎలా హ్యాండిల్ చేయాలో చూద్దాం.

---

## 🛑 1. Built-in HTTP Exceptions (ఇన్‌బిల్ట్ ఎర్రర్స్)

NestJS మనకు రెడీమేడ్‌గా చాలా HTTP ఎర్రర్ క్లాస్‌లను ఇస్తుంది. ఇవి వాడినప్పుడు సరైన HTTP Status Code ఆటోమేటిక్‌గా వెళ్తుంది.

- `BadRequestException` (400) - ఇన్పుట్ డేటా తప్పుగా ఉన్నప్పుడు.
- `UnauthorizedException` (401) - లాగిన్ అవ్వనప్పుడు (No token).
- `ForbiddenException` (403) - పర్మిషన్ లేనప్పుడు.
- `NotFoundException` (404) - డేటా లేదా రౌట్ దొరకనప్పుడు.
- `InternalServerErrorException` (500) - సర్వర్ లోపల ఏదైనా కోడ్ ఫెయిల్ అయినప్పుడు.

### కంట్రోలర్/సర్వీస్ లో వాడే విధానం:

```typescript
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService {
  async getUserById(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      // 404 Error ని క్లీన్ గా త్రో చేస్తుంది
      throw new NotFoundException(`ID ${id} తో ఎలాంటి యూజర్ దొరకలేదు!`);
    }
    return user;
  }
}
```

---

## 🎨 2. Custom & Business Exceptions (సొంతంగా ఎర్రర్స్ రాయడం)

కొన్నిసార్లు మన బిజినెస్ లాజిక్ ప్రకారం ప్రత్యేకమైన ఎర్రర్స్ (Domain Errors) కావాల్సి వస్తుంది. ఉదాహరణకు: ఒక యూజర్ అకౌంట్ లో తగినంత డబ్బు లేనప్పుడు `InsufficientFundsException` అని చూపించాలి.

```typescript
// exceptions/insufficient-funds.exception.ts
import { HttpException, HttpStatus } from "@nestjs/common";

export class InsufficientFundsException extends HttpException {
  constructor() {
    // సూపర్ క్లాస్ కి మన కస్టమ్ మెసేజ్ మరియు స్టేటస్ కోడ్ ని పంపుతున్నాం
    super("మీ అకౌంట్ లో తగినంత బ్యాలెన్స్ లేదు!", HttpStatus.BAD_REQUEST);
  }
}
```

**దీన్ని వాడకం:** `throw new InsufficientFundsException();`

---

## 🌐 3. Global Exception Filter & Error Logging

మన అప్లికేషన్‌లో ఎక్కడ ఏ ఎర్రర్ వచ్చినా (ఉదాహరణకు పొరపాటున డేటాబేస్ క్రాష్ అయినా లేదా కోడ్‌లో టైపో ఎర్రర్ ఉన్నా), అది ఒకే రకమైన రెస్పాన్స్ ఫార్మాట్ లో యూజర్‌కి వెళ్లాలి అంటే **Global Exception Filter** వాడాలి. అలాగే అక్కడే మనం **Error Logging** కూడా చేయవచ్చు.

```typescript
// filters/global-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch() // ఖాళీగా వదిలేస్తే ఇది అన్ని రకాల ఎర్రర్స్ (Http మరియు Non-Http) ని క్యాచ్ చేస్తుంది
export class GlobalExceptionFilter implements ExceptionFilter {
  // NestJS ఇన్‌బిల్ట్ లాగర్ టూల్
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // ఎర్రర్ Http ఎక్సెప్షన్ అయితే దాని స్టేటస్ తీసుకుంటుంది, లేదంటే 500 (Internal Server Error) ఇస్తుంది
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : "ఇంటర్నల్ సర్వర్ ఎర్రర్ జరిగింది!";

    // 1. Error Logging: ప్రొడక్షన్ లో ట్రాక్ చేయడానికి సర్వర్ కన్సోల్/ఫైల్ లో లాగ్ చేయడం
    this.logger.error(
      `Route: ${request.url} | Method: ${request.method} | Error: ${message}`,
      (exception as Error).stack,
    );

    // 2. స్టాండర్డ్ రెస్పాన్స్ ఫార్మాట్
    response.status(status).json({
      success: false,
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

### గ్లోబల్‌గా అప్లై చేయడం ఎలా?

ఈ ఫిల్టర్‌ని `main.ts` లో అప్లై చేయాలి:

```typescript
// main.ts
app.useGlobalFilters(new GlobalExceptionFilter());
```

---

> 💡 **లాగిన్ టిప్ (Production Tip):** ప్రొడక్షన్ యాప్స్‌లో ఈ `this.logger.error()` డేటాని కేవలం కన్సోల్‌లో వదిలేయకుండా **Winston** లేదా **Pino** లాంటి లైబ్రరీస్ వాడి AWS CloudWatch, Datadog లేదా Sentry లాంటి ఎర్రర్ ట్రాకింగ్ టూల్స్‌కి పంపిస్తారు. దీనివల్ల లైవ్ యాప్‌లో ఎక్కడ ఎర్రర్ వచ్చినా డెవలపర్లకు వెంటనే అలర్ట్ వెళ్తుంది.

# 11 - Middleware

NestJS లో **Middleware (మిడిల్‌వేర్)** అనేది రిక్వెస్ట్ లైఫ్‌సైకిల్‌లో అందరికంటే ముందు నిలబడే ఒక గేట్‌కీపర్ లాంటిది. క్లయింట్ నుండి వచ్చే HTTP రిక్వెస్ట్ నేరుగా కంట్రోలర్‌కి వెళ్లేముందు, దానిని తనిఖీ చేయడానికి, మార్చడానికి, లేదా కొన్ని సెక్యూరిటీ లేయర్స్ అప్లై చేయడానికి మిడిల్‌వేర్ ఉపయోగపడుతుంది.

మీరు ఇచ్చిన లిస్ట్‌లో ప్రొడక్షన్-లెవెల్ యాప్స్‌కి కావలసిన మోస్ట్ ఇంపార్టెంట్ మిడిల్‌వేర్స్ ఉన్నాయి. వాటిని సులభంగా అర్థం చేసుకుందాం.

---

## 🛠️ NestJS Built-in & Third-Party Middlewares

మనం అప్లికేషన్‌ను సెక్యూర్ మరియు ఫాస్ట్ చేయడానికి కొన్ని పాపులర్ ఎక్స్‌ప్రెస్ (Express) మిడిల్‌వేర్లను NestJS లో వాడుతాం.

- **Helmet:** ఇది మన యాప్ యొక్క HTTP Headers ని సెక్యూర్ చేసి, XSS (Cross-Site Scripting) వంటి కామన్ వెబ్ అటాక్స్ నుండి కాపాడుతుంది.
- **Compression:** ఇది సర్వర్ నుండి వెళ్లే రెస్పాన్స్ సైజ్‌ను జిప్ (Gzip) చేసి తగ్గిస్తుంది. దీనివల్ల డేటా ట్రాన్స్‌ఫర్ ఫాస్ట్ గా జరిగి యాప్ స్పీడ్ పెరుగుతుంది.
- **Rate Limiting:** ఒకే ఐపీ అడ్రస్ నుండి సెకనుకు వందల రిక్వెస్ట్లు రాకుండా (Brute-force / DDoS అటాక్స్) అడ్డుకుంటుంది. (NestJS లో దీనికోసం `@nestjs/throttler` వాడతాం).

---

## 💻 ప్రాక్టికల్ ఇంప్లిమెంటేషన్: Custom Middlewares

ఇప్పుడు మనం ప్రొడక్షన్ యాప్స్‌లో వాడే రెండు ముఖ్యమైన కస్టమ్ మిడిల్‌వేర్స్ (**Request Timing** మరియు **Correlation ID**) ఒకే ఫైల్‌లో లేదా విడిగా ఎలా రాస్తామో చూద్దాం.

### 1. Correlation ID & Request Timing Middleware

- **Correlation ID అంటే ఏమిటి?:** ప్రతి రిక్వెస్ట్‌కి ఒక యూనిక్ ఐడీ (UUID) క్రియేట్ చేసి దాన్ని హెడర్స్‌లో పెడతాం. ఒకవేళ ఆ రిక్వెస్ట్ వల్ల ఎక్కడైనా ఎర్రర్ వస్తే, ఈ ఐడీని బట్టి సర్వర్ లాగ్స్‌లో ఆ ఒక్క రిక్వెస్ట్ హిస్టరీ మొత్తాన్ని ఈజీగా వెతకవచ్చు.
- **Request Timing:** ఈ రిక్వెస్ట్ స్టార్ట్ అవ్వడానికి, పూర్తి అవ్వడానికి ఎంత సమయం (milliseconds) పట్టిందో లెక్కగడుతుంది.

```typescript
// middleware/request-logger.middleware.ts
import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid"; // npm i uuid

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");

  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now(); // 1. స్టార్ట్ టైమ్ నోట్ చేసుకోవడం

    // 2. Correlation ID క్రియేట్ చేయడం (లేకపోతే కొత్తది ఇవ్వడం)
    const correlationId = req.headers["x-correlation-id"] || uuidv4();
    req.headers["x-correlation-id"] = correlationId;
    res.setHeader("x-correlation-id", correlationId); // రెస్పాన్స్ హెడర్ లో కూడా పంపడం

    // రిక్వెస్ట్ అంతా పూర్తయ్యాక (Response వెళ్ళేటప్పుడు) రన్ అవుతుంది
    res.on("finish", () => {
      const { method, originalUrl } = req;
      const { statusCode } = res;
      const duration = Date.now() - startTime; // 3. టైమ్ డిఫరెన్స్ లెక్కించడం

      // కన్సోల్ లో నీట్‌గా లాగ్ చేయడం
      this.logger.log(
        `[${correlationId}] ${method} ${originalUrl} | Status: ${statusCode} | Time: ${duration}ms`,
      );
    });

    next(); // తదుపరి లేయర్ (Guards/Pipes) కి రిక్వెస్ట్ ని పంపడం
  }
}
```

---

## 🌐 మిడిల్‌వేర్‌ను అప్లై చేయడం ఎలా?

NestJS లో మిడిల్‌వేర్లను రూట్ మోడ్యూల్ (`app.module.ts`) లో `configure()` మెథడ్ ఉపయోగించి అప్లై చేస్తాం.

```typescript
// app.module.ts
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { RequestLoggerMiddleware } from "./middleware/request-logger.middleware";
import { UsersController } from "./users/users.controller";

@Module({
  // controllers, providers...
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // 1. మన కస్టమ్ లాగర్ మిడిల్‌వేర్ ని పెడుతున్నాం
      .apply(RequestLoggerMiddleware)
      // 2. ఏ రూట్స్‌కి అప్లై అవ్వాలో చెప్పడం (ఇక్కడ అన్ని రూట్స్‌కి పెట్టాం)
      .forRoutes({ path: "*", method: RequestMethod.ALL });

    // ఒకవేళ కేవలం ఒకే కంట్రోలర్ కి పెట్టాలంటే ఇలా రాయాలి:
    // .forRoutes(UsersController)
  }
}
```

---

> 💡 **ఇంటర్వ్యూ టిప్:** "NestJS లో మిడిల్‌వేర్‌కి, గార్డ్‌కి (Guard) తేడా ఏంటి?" అని అడిగితే — మిడిల్‌వేర్ అనేది ఎక్స్‌ప్రెస్ లెవెల్‌లో రన్ అవుతుంది, దానికి NestJS యొక్క `ExecutionContext` తెలియదు. కానీ గార్డ్ అనేది NestJS ఫ్రేమ్‌వర్క్ లోపల రన్ అవుతుంది, కాబట్టి ఏ కంట్రోలర్ మెథడ్ రన్ అవుతుందో, దానికి ఏ పర్మిషన్స్ ఉన్నాయో (Reflector ద్వారా) గార్డ్ తెలుసుకోగలదు.

# 12 - Pipes

NestJS లో **Pipes (పైప్స్)** అనేవి రిక్వెస్ట్ బాడీ, పారామితులు (`@Param`), లేదా క్వెరీ పారామితులు (`@Query`) కంట్రోలర్ మెథడ్‌కు చేరడానికి ముందే వాటిని తనిఖీ చేయడానికి లేదా మార్చడానికి వాడే అద్భుతమైన టూల్స్.

సాధారణంగా పైప్స్ రెండు ముఖ్యమైన పనులు (Responsibilities) చేస్తాయి:

1. **Transformation (రూపాంతరము):** వచ్చే డేటాను మనకు కావలసిన ఫార్మాట్ లేదా టైప్‌లోకి మార్చడం (ఉదాహరణకు: స్ట్రింగ్ `"5"` ని నంబర్ `5` గా మార్చడం).
2. **Validation (ధృవీకరణ):** వచ్చే డేటా కరెక్ట్‌గా ఉందో లేదో చెక్ చేయడం. ఒకవేళ తప్పుగా ఉంటే కంట్రోలర్ వరకు వెళ్లకుండా అక్కడే ఆపేసి ఎర్రర్ ఇవ్వడం.

---

## 🛠️ Built-in Parse Pipes (ఇన్‌బిల్ట్ పార్స్ పైప్స్)

NestJS మనకు డేటా టైప్స్ మార్చడానికి మరియు వాలిడేట్ చేయడానికి కొన్ని రెడీమేడ్ పైప్స్ ఇస్తుంది:

- `ParseIntPipe`: వాల్యూని `number` కి మారుస్తుంది. కాకపోతే ఎర్రర్ ఇస్తుంది.
- `ParseUUIDPipe`: వచ్చే ఐడీ కరెక్ట్ UUID ఫార్మాట్ లో ఉందో లేదో చెక్ చేస్తుంది.
- `ParseBoolPipe`: `"true"` లేదా `"false"` స్ట్రింగ్స్‌ను అసలైన `boolean` కి మారుస్తుంది.

### వాడే విధానం:

```typescript
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from "@nestjs/common";

@Controller("products")
export class ProductsController {
  @Get(":id")
  // ParseIntPipe వాడటం వల్ల 'id' ఆటోమేటిక్‌గా నంబర్ గా మారుతుంది.
  // ఒకవేళ క్లయింట్ /products/abc అని పిలిస్తే, 400 Bad Request ఎర్రర్ వచ్చేస్తుంది.
  findOne(@Param("id", ParseIntPipe) id: number) {
    return { productId: id, type: typeof id }; // type: 'number' అని వస్తుంది
  }

  @Get("uuid/:uuid")
  findByUuid(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return { validUuid: uuid };
  }
}
```

---

## 🎨 Custom & Reusable Pipes (సొంతంగా పైప్స్ రాయడం)

మన అప్లికేషన్‌లో కొన్ని ప్రత్యేకమైన అవసరాల కోసం కస్టమ్ పైప్స్ రాసుకోవచ్చు. ప్రతి కస్టమ్ పైప్ తప్పకుండా **`PipeTransform`** ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేయాలి మరియు అందులో **`transform()`** మెథడ్ ఉండాలి.

### ఉదాహరణ 1: `ParseIntPipe` లాంటిదే మన సొంత Custom Transform Pipe

క్లయింట్ పంపే స్ట్రింగ్‌ను డెసిమల్ నంబర్‌గా మార్చే ఒక పైప్ రాద్దాం:

```typescript
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

@Injectable()
export class CustomParseFloatPipe implements PipeTransform<string, number> {
  // value: ఇన్పుట్ వచ్చే డేటా, metadata: ఆ వేరియబుల్ రకం (Param ఆ, Body ఆ అనేది)
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseFloat(value);

    if (isNaN(val)) {
      throw new BadRequestException(`"${value}" అనేది సరైన నంబర్ కాదు!`);
    }

    return val;
  }
}
```

### ఉదాహరణ 2: Reusable Value Trimming Pipe (డేటా క్లీనింగ్)

యూజర్ ఫారమ్ సబ్మిట్ చేసినప్పుడు పేరు లేదా ఈమెయిల్ పక్కన పొరపాటున స్పేసెస్ (`"  rahul@mail.com "`) ఇస్తుంటారు. వాటిని క్లీన్ చేయడానికి (`"rahul@mail.com"`) ఒక రీయూజబుల్ పైప్:

```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class TrimStringsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // ఒకవేళ వచ్చే వాల్యూ ఆబ్జెక్ట్ (Request Body) అయితే, అందులోని స్ట్రింగ్స్ అన్నింటినీ ట్రిమ్ చేస్తుంది
    if (typeof value === "object" && value !== null) {
      Object.keys(value).forEach((key) => {
        if (typeof value[key] === "string") {
          value[key] = value[key].trim();
        }
      });
    }
    return value;
  }
}
```

**కంట్రోలర్ లో వాడకం:**

```typescript
@Post('register')
// TrimStringsPipe బాడీలో ఉన్న స్ట్రింగ్స్ స్పేసెస్ ని తీసేస్తుంది
async register(@Body(TrimStringsPipe) createUserDto: any) {
  return createUserDto;
}

```

---

> 💡 **ValidationPipe రీక్యాప్:** మనం 5వ టాపిక్‌లో చూసిన `ValidationPipe` కూడా ఒక పైపే. అది `class-validator` డెకరేటర్స్ ఆధారంగా మొత్తం ఆబ్జెక్ట్ స్ట్రక్చర్‌ను వాలిడేట్ చేస్తుంది.

# 13 - Guards

NestJS లో **Guards (రక్షకులు)** అనేవి రిక్వెస్ట్ లైఫ్‌సైకిల్‌లో అత్యంత పవర్‌ఫుల్ సెక్యూరిటీ లేయర్స్. ఒక రిక్వెస్ట్ కంట్రోలర్ మెథడ్ (Route Handler) వరకు వెళ్లాలా లేదా అక్కడే ఆగిపోవాలా (`true` లేదా `false`) అని డిసైడ్ చేసే బాధ్యత గార్డ్స్‌దే.

ఇవి అన్నీ `CanActivate` అనే ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేస్తాయి. మీ లిస్ట్‌లో ఉన్న మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ గార్డ్స్ మరియు వాటి ఎగ్జిక్యూషన్ ఆర్డర్ గురించి ఇక్కడ క్లియర్ గా తెలుసుకుందాం.

---

## 🛠️ 1. Ownership Guard (ఓనర్‌షిప్ గార్డ్ - అడ్వాన్స్‌డ్)

మీరు ఆల్రెడీ రోల్ మరియు పర్మిషన్ గార్డ్స్ గురించి 7వ టాపిక్‌లో చూశారు. ఇప్పుడు ఒక అడ్వాన్స్‌డ్ గార్డ్ అయిన **Ownership Guard** గురించి చూద్దాం.

- **ఇది ఎందుకు?:** ఒక యూజర్ తను క్రియేట్ చేసిన పోస్ట్ లేదా ప్రొఫైల్‌ను మాత్రమే ఎడిట్/డిలీట్ చేయాలి, వేరేవాళ్లది చేయకూడదు (డేటా లెవెల్ సెక్యూరిటీ).

```typescript
// auth/guards/ownership.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class OwnershipGuard implements CanActivate {
  // ఇక్కడ కావాలంటే మీ డేటాబేస్ సర్వీస్ ని ఇంజెక్ట్ చేసుకోవచ్చు
  // constructor(private postService: PostService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // JwtGuard నుండి వచ్చిన యూజర్
    const resourceId = request.params.id; // URL నుండి వచ్చే ID (e.g., /posts/:id)

    // ఇక్కడ ఒక చిన్న బిజినెస్ లాజిక్ కండిషన్:
    // డేటాబేస్ లో ఆ పోస్ట్ ఓనర్ ఐడీ, ఈ లాగిన్ అయిన యూజర్ ఐడీ సేమ్ అని చెక్ చేయాలి
    // const post = await this.postService.getPostById(resourceId);
    // if (post.ownerId !== user.id) { throw new ForbiddenException("ఇది మీ పోస్ట్ కాదు!"); }

    return true; // ఓనర్ అయితేనే అనుమతి లభిస్తుంది
  }
}
```

---

## 🚦 2. Multiple Guards & Execution Order (గార్డ్స్ రన్ అయ్యే ఆర్డర్)

ఒక సింగిల్ API రౌట్ పైన మనం ఒకటి కంటే ఎక్కువ గార్డ్స్ వాడవచ్చు. ఉదాహరణకు, ఒక పోస్ట్‌ను డిలీట్ చేయాలంటే:

1. యూజర్ ముందు లాగిన్ అయి ఉండాలి (`JwtAuthGuard`).
2. యూజర్‌కి డిలీట్ చేసే పర్మిషన్ ఉండాలి (`PermissionGuard`).
3. ఆ పోస్ట్ అతనిదై ఉండాలి (`OwnershipGuard`).

### కోడ్ ఉదాహరణ:

```typescript
@Controller("posts")
export class PostsController {
  @Delete(":id")
  // NestJS లో మనం రాసిన ఎడమ నుండి కుడి (Left to Right) ఆర్డర్ లో గార్డ్స్ రన్ అవుతాయి
  @UseGuards(JwtAuthGuard, PermissionGuard, OwnershipGuard)
  deletePost(@Param("id") id: string) {
    return { message: "పోస్ట్ విజయవంతంగా డిలీట్ చేయబడింది!" };
  }
}
```

### ⚠️ ముఖ్యమైన నియమం (Guard Execution Order):

- **గ్లోబల్ గార్డ్స్ (Global Guards):** అప్లికేషన్ మొత్తం అప్లై చేసినవి అందరికంటే ముందు రన్ అవుతాయి.
- **కంట్రోలర్ గార్డ్స్ (Controller Guards):** క్లాస్ పైన `@UseGuards()` పెట్టినవి రెండో స్థానంలో రన్ అవుతాయి.
- **రౌట్ గార్డ్స్ (Route Guards):** స్పెసిఫిక్ మెథడ్ పైన పెట్టినవి చివరగా రన్ అవుతాయి.
- **గమనిక:** పైన కోడ్‌లో ఒకవేళ `JwtAuthGuard` ఫెయిల్ అయితే, NestJS మిగతా రెండు గార్డ్స్‌ను రన్ చేయదు, అక్కడికక్కడే `401 Unauthorized` ఇచ్చేస్తుంది.

---

## 🔑 3. API Key Guard (థర్డ్ పార్టీ యాక్సెస్ కోసం)

వెబ్ యాప్స్ కాకుండా వేరే కంపెనీలు లేదా స్క్రిప్ట్స్ మన API ని వాడుకోవడానికి Headers లో `x-api-key` పంపుతారు. దాన్ని వాలిడేట్ చేసే గార్డ్:

```typescript
// auth/guards/api-key.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers["x-api-key"];

    const VALID_API_KEY = "my-secret-partner-key-123"; // ఇది .env లో ఉండాలి

    if (apiKey !== VALID_API_KEY) {
      throw new UnauthorizedException("సరైన API Key లేదు!");
    }

    return true;
  }
}
```

---

> 💡 **గుర్తుపెట్టుకోండి:** గార్డ్స్ ఎల్లప్పుడూ **Pipes** కంటే ముందే రన్ అవుతాయి. అంటే వచ్చే డేటా కరెక్టో కాదో చెక్ చేసే ముందే, అసలు ఆ యూజర్‌కి పర్మిషన్ ఉందో లేదో గార్డ్స్ డిసైడ్ చేస్తాయి. దీనివల్ల సర్వర్ మెమరీ సేవ్ అవుతుంది.

# 14 - Interceptors

NestJS లో **Interceptors (ఇంటర్‌సెప్టర్స్)** అనేవి చాలా అద్భుతమైన మరియు పవర్‌ఫుల్ ఫీచర్. ఇవి **Aspect-Oriented Programming (AOP)** కాన్సెప్ట్ ఆధారంగా పనిచేస్తాయి.

సింపుల్‌గా చెప్పాలంటే, ఒక రిక్వెస్ట్ కంట్రోలర్ మెథడ్‌కి **వెళ్లేముందు**, మరియు కంట్రోలర్ నుండి రెస్పాన్స్ బయటికి **వెళ్లేటప్పుడు**... ఈ రెండు సమయాల్లోనూ మనం డేటాని మార్చడానికి (Mutate/Transform) లేదా అదనపు లాజిక్ రన్ చేయడానికి ఇంటర్‌సెప్టర్స్ ఉపయోగపడతాయి. దీనికోసం RxJS లైబ్రరీ లోని ఆపరేటర్స్ (operators) ని వాడుతాం.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడクション టాపిక్స్ అయిన **Response Mapping, Timeout,** మరియు **Serialization** కాన్సెప్ట్స్ ఇక్కడ ప్రాక్టికల్‌గా చూద్దాం.

---

## 🛠️ 1. Response Mapping (స్టాండర్డ్ రెస్పాన్స్ ఫార్మాట్)

ప్రొడక్షన్ అప్లికేషన్లలో ఫ్రంటెండ్ (React/Mobile Apps) డెవలపర్స్ కోసం అన్ని API ల నుండి ఒకే రకమైన రెస్పాన్స్ స్ట్రక్చర్ వెళ్లడం చాలా ముఖ్యం.

కంట్రోలర్ ఎలాంటి డేటా (Object లేదా Array) ఇచ్చినా, దాన్ని `{ success: true, data: [...] }` అనే స్టాండర్డ్ ఫార్మాట్‌లోకి మార్చే ఇంటర్‌సెప్టర్ ఇది:

```typescript
// interceptors/transform.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T> {
  success: boolean;
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  Response<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // next.handle() కాల్ అయ్యాక కంట్రోలర్ లాజిక్ రన్ అవుతుంది
    return next.handle().pipe(
      // RxJS 'map' ఆపరేటర్ ద్వారా వచ్చే డేటాని రీ-ఫార్మాట్ చేస్తున్నాం
      map((data) => ({
        success: true,
        statusCode: context.switchToHttp().getResponse().statusCode,
        data: data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
```

---

## ⏱️ 2. Timeout Interceptor (సర్వర్ హ్యాంగ్ అవ్వకుండా ఆపడం)

కొన్నిసార్లు థర్డ్ పార్టీ API లు లేదా కాంప్లెక్స్ డేటాబేస్ క్వెరీలు చాలా ఎక్కువ సమయం తీసుకుంటాయి. అలాంటప్పుడు క్లయింట్ అనంత కాలం వేచి ఉండకుండా, ఒక 5 సెకన్లలో రెస్పాన్స్ రాకపోతే ఆటోమేటిక్‌గా రిక్వెస్ట్‌ని క్యాన్సిల్ చేసి `408 Request Timeout` ఎర్రర్ ఇచ్చే ఇంటర్‌సెప్టర్ ఇది:

```typescript
// interceptors/timeout.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  RequestTimeoutException,
} from "@nestjs/common";
import { Observable, throwError, TimeoutError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000), // 5 సెకన్లు టైమ్ లిమిట్ (5000ms)
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(
            () =>
              new RequestTimeoutException(
                "సర్వర్ నుండి స్పందన రావడానికి చాలా సమయం పడుతోంది!",
              ),
          );
        }
        return throwError(() => err);
      }),
    );
  }
}
```

---

## 🔒 3. Serialization (పాస్‌వర్డ్స్ లాంటి సెన్సిటివ్ డేటా దాచడం)

డేటాబేస్ నుండి యూజర్ ప్రొఫైల్ రిటర్న్ చేసేటప్పుడు పొరపాటున కూడా `password` లేదా `salt` లాంటి ఫీల్డ్స్ క్లయింట్‌కి వెళ్ళకూడదు. దీనికోసం NestJS లో `@UseInterceptors(ClassSerializerInterceptor)` వాడతాం.

**Entity లేదా DTO లో ఇలా సెట్ చేయాలి:**

```typescript
import { Exclude } from "class-transformer";

export class UserEntity {
  id: number;
  name: string;
  email: string;

  @Exclude() // ఈ డెకరేటర్ ఉంటే, ఇంటర్‌సెప్టర్ ఈ ఫీల్డ్‌ని రెస్పాన్స్ నుండి తీసేస్తుంది
  password: string;
}
```

---

## 📦 4. Other Production Concepts

- **Caching (క్యాషింగ్):** ఒకే రకమైన డేటా కోసం (ఉదా: ప్రొడక్ట్ లిస్ట్) ప్రతిసారీ డేటాబేస్‌కి వెళ్లకుండా, మొదటిసారి వచ్చిన రెస్పాన్స్‌ని మెమరీలో సేవ్ చేసి, నెక్స్ట్ టైమ్ నుండి ఇంటర్‌సెప్టర్ లెవెల్ నుండే డైరెక్ట్ గా రెస్పాన్స్ పంపడం (`CacheInterceptor`).
- **Audit (ఆడిట్ లాగింగ్):** ఏ యూజర్ ఏ API ని హిట్ చేశాడు, ఏ డేటాని మార్చాడు అనే వివరాలను సెక్యూరిటీ కోసం డేటాబేస్‌లో ఒక లాగ్ లాగా రికార్డ్ చేయడం.

---

> 💡 **గ్లోబల్‌గా అప్లై చేయడం ఎలా?:** `main.ts` లో `app.useGlobalInterceptors(new TransformInterceptor());` అని రాస్తే అప్లికేషన్ మొత్తం ఒకే ఫార్మాట్ లోకి మారిపోతుంది.

# 15 - Microservices

NestJS యొక్క నిజమైన సత్తా **Microservices ఆర్కిటెక్చర్** లోనే బయటపడుతుంది. NestJS అనేది కేవలం ఒక నార్మల్ REST API ఫ్రేమ్‌వర్క్ కాదు; ఇది ఒక **Agnostic Framework**. అంటే, మనం రాసిన కోడ్‌ని పెద్దగా మార్చకుండానే REST నుండి gRPC, Kafka, లేదా RabbitMQ లాంటి ఏ ట్రాన్స్‌పోర్ట్ లేయర్‌కైనా మార్చుకోవచ్చు.

మీరు ఇచ్చిన లిస్ట్‌లో మైక్రోసర్వీసెస్ డిజైన్ చేయడానికి కావలసిన అన్ని అడ్వాన్స్‌డ్ డిజైన్ ప్యాటర్న్స్ ఉన్నాయి. వీటిని ప్రొడక్షన్ లెవెల్ కాన్సెప్ట్స్‌తో సులభంగా అర్థం చేసుకుందాం.

---

## 🏎️ Communication Styles (కమ్యూనికేషన్ పద్ధతులు)

మైక్రోసర్వీసెస్ మధ్య కమ్యూనికేషన్ ప్రధానంగా రెండు రకాలుగా జరుగుతుంది:

### 1. Request-Response (సమకాలీన - Synchronous)

- ఒక సర్వీస్ ఇంకో సర్వీస్ కి రిక్వెస్ట్ పంపి, రెస్పాన్స్ వచ్చే వరకు వెయిట్ చేస్తుంది.
- **NestJS మెథడ్:** `this.client.send(pattern, data)`
- **ఎప్పుడు వాడతాం?:** TCP, gRPC. ఉదాహరణకు: ఆర్డర్ ప్లేస్ చేసే ముందు `Order Service` వెళ్ళి `Inventory Service` ని "స్టాక్ ఉందా లేదా?" అని అడిగి కన్ఫర్మేషన్ తీసుకోవడం.

### 2. Event-Driven (అసమకాలీన - Asynchronous)

- ఒక సర్వీస్ కేవలం ఒక ఈవెంట్‌ను ఫైర్ చేసి (Publish) వదిలేస్తుంది. రెస్పాన్స్ కోసం వెయిట్ చేయదు.
- **NestJS మెథడ్:** `this.client.emit(pattern, data)`
- **ఎప్పుడు వాడతాం?:** Kafka, RabbitMQ. ఉదాహరణకు: ఆర్డర్ సక్సెస్ అయ్యాక `order.created` అనే ఈవెంట్ పంపితే, `Notification Service` దాన్ని పట్టుకుని యూజర్‌కి ఈమెయిల్ పంపుతుంది.

---

## 🏗️ Advanced Microservice Patterns (అడ్వాన్స్‌డ్ ప్యాటర్న్స్)

### 1. CQRS (Command Query Responsibility Segregation)

సాధారణంగా మనం డేటాబేస్ లో రీడ్ (Read) చేయడానికి, రైట్ (Write) చేయడానికి ఒకే మోడల్ లేదా సర్వీస్ వాడుతాం. కానీ CQRS ప్యాటర్న్ ప్రకారం:

- **Commands (Write):** డేటాని ఇన్సర్ట్/అప్‌డేట్ చేసే లాజిక్ విడిగా ఉంటుంది.
- **Queries (Read):** డేటాని రీడ్ చేసే లాజిక్ విడిగా ఉంటుంది.
- **లాభం:** రీడ్ క్వెరీలు చాలా ఎక్కువగా ఉన్నప్పుడు, కేవలం రీడ్ డేటాబేస్/సర్వీస్‌ను మాత్రమే స్కేల్ చేసుకోవచ్చు. NestJS లో దీనికోసం అఫీషియల్ `@nestjs/cqrs` మోడ్యూల్ ఉంది.

### 2. Saga Pattern (సగా ప్యాటర్న్ - డిస్ట్రిబ్యూటెడ్ ట్రాన్సాక్షన్స్)

మోనోలిత్ యాప్‌లో అయితే `DataSource.transaction` వాడి అంతా ఒకే డేటాబేస్ లో రోల్‌బ్యాక్ (Rollback) చేయవచ్చు. కానీ మైక్రోసర్వీసెస్ లో `Order DB` విడిగా, `Payment DB` విడిగా ఉంటాయి.

ఒకవేళ ఆర్డర్ క్రియేట్ అయ్యాక, పేమెంట్ ఫెయిల్ అయితే... ఆర్డర్‌ను ఎలా క్యాన్సిల్ చేయాలి? దీనికోసం **Saga Pattern** వాడుతాం. ఇది ప్రతి స్టెప్ ఫెయిల్ అయినప్పుడు దానికి రివర్స్ లాజిక్ (**Compensating Transaction**) ని రన్ చేసి డేటాని సరిచేస్తుంది (ఉదా: ఆర్డర్ స్టేటస్‌ను `PENDING` నుండి `FAILED` కి మార్చడం).

### 3. Transactional Outbox Pattern (అవుట్‌బాక్స్ ప్యాటర్న్)

ఒక సర్వీస్ డేటాబేస్‌లో డేటాని సేవ్ చేసి, అదే సమయంలో Kafka కి ఈవెంట్ పంపాలి. ఒకవేళ డేటాబేస్ లో సేవ్ అయ్యాక, ఇంటర్నెట్ పోయి Kafka కి ఈవెంట్ వెళ్ళకపోతే డేటా మిస్‌మ్యాచ్ అవుతుంది.

- **పరిష్కారం:** డేటాబేస్ లో మెయిన్ టేబుల్‌తో పాటు **`Outbox`** అనే ఇంకో టేబుల్ లో ఈవెంట్ డేటాని ఒకే ట్రాన్సాక్షన్ లో సేవ్ చేస్తాం. బ్యాక్‌గ్రౌండ్‌లో ఒక క్రోన్ జాబ్ (Message Relayer) ఆ అవుట్‌బాక్స్ టేబుల్ ని చూసి, సక్సెస్ ఫుల్ గా Kafka కి మెసేజ్ పంపిస్తుంది.

### 4. Idempotency (ఐడెంపోటెన్సీ - డూప్లికేట్ ప్రొటెక్షన్)

నెట్‌వర్క్ ఇష్యూస్ వల్ల క్లయింట్ ఒకే ఆర్డర్ రిక్వెస్ట్‌ను పొరపాటున రెండుసార్లు పంపవచ్చు, లేదా Kafka ఒకే మెసేజ్‌ను రెండుసార్లు డెలివరీ చేయవచ్చు. ఒకే రిక్వెస్ట్ ఎన్నిసార్లు వచ్చినా, సర్వర్ లో మాత్రం **ఒక్కసారే** యాక్షన్ జరగడాన్ని **Idempotency** అంటారు.

- **ఇంప్లిమెంటేషన్:** ప్రతి రిక్వెస్ట్ కి ఒక యూనిక్ `Idempotency-Key` (UUID) పంపమని క్లయింట్‌కి చెప్తాం. సర్వర్ లో ఆ కీ ని Redis లో సేవ్ చేసి, రెండోసారి సేమ్ కీ తో రిక్వెస్ట్ వస్తే ప్రాసెస్ చేయకుండా పాత రెస్పాన్స్‌నే పంపించేస్తాం.

---

## 💻 NestJS Microservice (gRPC / TCP) కోడ్ ఎలా ఉంటుందంటే:

**Microservice (Main.ts) లో వినేవాడు (Listener):**

```typescript
import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  // నార్మల్ HTTP కి బదులు Microservice క్రియేట్ చేస్తున్నాం
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP, // లేదా KAFKA, REDIS, gRPC
      options: { port: 8888 },
    },
  );
  await app.listen();
}
bootstrap();
```

**Controller లో ఈవెంట్ లేదా మెసేజ్ క్యాచ్ చేయడం:**

```typescript
import { Controller } from "@nestjs/common";
import { MessagePattern, EventPattern } from "@nestjs/microservices";

@Controller()
export class OrderEventController {
  @MessagePattern({ cmd: "get_order_status" }) // Request-Response మోడల్
  getStatus(id: number): string {
    return `Order ${id} is Shipping`;
  }

  @EventPattern("order_placed") // Event-Driven మోడల్ (రెస్పాన్స్ ఇవ్వదు)
  handleOrderPlaced(data: any) {
    console.log("కొత్త ఆర్డర్ వచ్చింది, ఈమెయిల్ పంపుతున్నాను...", data);
  }
}
```

---

> 💡 **NestJS మైక్రోసర్వీసెస్ బలం:** మీరు పైన చూసినట్టు, `@MessagePattern` మరియు `@EventPattern` డెకరేటర్స్ వాడితే చాలు, వెనుక ఉన్నది TCP ఆ, Kafka నా లేదా RabbitMQ నా అనేది NestJS ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తుంది. డెవలపర్‌గా మనం కేవలం బిజినెస్ లాజిక్ మీద మాత్రమే ఫోకస్ పెట్టవచ్చు.

# 16 - Event Driven Architecture

NestJS లో **Event-Driven Architecture (EDA - ఈవెంట్ ఆధారిత ఆర్కిటెక్చర్)** అనేది అప్లికేషన్ యొక్క విభిన్న భాగాలను లేదా వేర్వేరు మైక్రోసర్వీసెస్‌ను ఒకదానితో ఒకటి గట్టిగా ముడేయకుండా (**Loosely Coupled** గా) డిజైన్ చేయడానికి ఉపయోగపడే అత్యుత్తమ పద్ధతి.

సింపుల్‌గా చెప్పాలంటే, ఒక పని జరిగినప్పుడు ("User Registered"), ఆ సిస్టమ్ కేవలం ఆ విషయాన్ని ఒక ఈవెంట్ రూపంలో చాటి చెప్తుంది. ఆ సమాచారం ఎవరికి కావాలో వాళ్లే (Listeners) దాన్ని పట్టుకుని తమ పనులు చేసుకుంటారు.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడクション కాన్సెప్ట్స్‌ను సులభంగా అర్థం చేసుకుందాం.

---

## 📢 1. Domain Events vs Integration Events

ఈవెంట్స్ అనేవి ప్రధానంగా రెండు రకాలు:

- **Domain Events (లోకల్ ఈవెంట్స్):** ఒకే అప్లికేషన్ (Monolith లేదా ఒకే మైక్రోసర్వీస్) లోపల జరిగేవి. ఉదాహరణకు, యూజర్ రిజిస్టర్ అవ్వగానే అదే యాప్‌లో ఉన్న `WelcomeEmailService` కి తెలపడం. NestJS లో దీనికోసం `@nestjs/event-emitter` అనే లైబ్రరీ వాడుతాం.
- **Integration Events (గ్లోబల్ ఈవెంట్స్):** ఒక మైక్రోసర్వీస్ నుండి ఇంకో మైక్రోసర్వీస్‌కి సమాచారం పంపడానికి వాడేవి. ఉదాహరణకు, `Order Service` లో ఆర్డర్ క్రియేట్ అయ్యాక, ఆ విషయం `Shipping Service` కి తెలపడం. దీనికోసం **Message Queues** (Kafka, RabbitMQ) వాడుతాం.

---

## 🛠️ 2. NestJS EventEmitter (Domain Events ఉదాహరణ)

ముందుగా లైబ్రరీ ఇన్‌స్టాల్ చేయాలి: `npm i --save @nestjs/event-emitter`

### ఈవెంట్‌ను ఫైర్ చేయడం (Publishing)

యూజర్ క్రియేట్ అవ్వగానే `user.created` అనే ఈవెంట్‌ను పంపుతాం:

```typescript
// users.service.ts
import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async createUser(userDto: any) {
    // 1. డేటాబేస్ లో యూజర్ ని సేవ్ చేసే లాజిక్...
    const newUser = { id: 1, email: "rahul@mail.com", name: "Rahul" };

    // 2. ఈవెంట్ ని ఫైర్ చేయడం (Emit)
    this.eventEmitter.emit("user.created", newUser);

    return newUser;
  }
}
```

### ఈవెంట్‌ను అందుకోవడం (Listening)

ఇప్పుడు ఈమెయిల్ సర్వీస్ లేదా నోటిఫికేషన్ సర్వీస్ కంట్రోలర్‌లో `@OnEvent()` డెకరేటర్ వాడి ఆ డేటాని పట్టుకోవచ్చు:

```typescript
// mail.service.ts
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class MailService {
  @OnEvent("user.created") // ఈవెంట్ పేరు మ్యాచ్ అవ్వాలి
  handleUserCreatedEvent(payload: any) {
    // యూజర్ డేటా ఇక్కడికి వచ్చేస్తుంది. ఇక ఈమెయిల్ పంపవచ్చు.
    console.log(`వెల్‌కమ్ ఈమెయిల్ పంపుతున్నాం: ${payload.email}`);
  }
}
```

---

## 🔄 3. Message Queue, DLQ, మరియు Retry Strategy (ప్రొడక్షన్ ఆర్కిటెక్చర్)

మైక్రోసర్వీసెస్ మధ్య Integration Events వాడేటప్పుడు **RabbitMQ** లేదా **Kafka** లాంటి **Message Queues** (Event Bus) వాడుతాం. ప్రొడక్షన్ లో మెసేజ్ మిస్ అవ్వకుండా ఉండటానికి ఈ క్రింది స్ట్రాటజీస్ వాడటం తప్పనిసరి:

```
[Publisher] ──> [Message Queue (Main)] ──(Error?)──> [Retry Strategy] ──(Final Failure?)──> [Dead Letter Queue (DLQ)]

```

### A. Retry Strategy (తిరిగి ప్రయత్నించడం)

ఒక ఈవెంట్ వచ్చినప్పుడు, మన సర్వర్ నెట్‌వర్క్ ఇష్యూ వల్ల లేదా డేటాబేస్ డౌన్ అవ్వడం వల్ల ఆ ఈవెంట్‌ను ప్రాసెస్ చేయడం ఫెయిల్ అవ్వచ్చు. అలాంటప్పుడు వెంటనే వదిలేయకుండా, ఒక 3 సార్లు (కొంత టైమ్ గ్యాప్‌తో - Exponential Backoff) మళ్లీ మళ్లీ ప్రయత్నించడాన్ని **Retry Strategy** అంటారు.

### B. DLQ - Dead Letter Queue (డెడ్ లెటర్ క్యూ)

మనం ఎన్నిసార్లు ట్రై చేసినా (ఉదాహరణకు 3 సార్లు రోబోట్ లాగా ప్రయత్నించినా) ఆ మెసేజ్ ప్రాసెస్ అవ్వకపోతే (బహుశా వచ్చే డేటాలోనే తప్పు ఉండవచ్చు), దాన్ని మెయిన్ క్యూ లోనే ఉంచితే మిగతా మెッセージలు ఆగిపోతాయి (Blocking).

- **పరిష్కారం:** ఆ పాడైపోయిన మెసేజ్‌ను విడిగా **Dead Letter Queue (DLQ)** అనే ప్రత్యేకమైన క్యూ లోకి నెట్టేస్తాం.
- డెవలపర్లు తర్వాత ప్రశాంతంగా ఆ DLQ లో ఉన్న మెసేజ్‌లను చూసి, ఎందుకు ఫెయిల్ అయ్యాయో బగ్స్ ఫిక్స్ చేస్తారు.

---

> 💡 **లాభం:** ఈవెంట్ డ్రివెన్ ఆర్కిటెక్చర్ వల్ల ఒకవేళ మన `Mail Service` డౌన్ అయినా సరే, `Users Service` కి ఎలాంటి ఇబ్బంది ఉండదు. యూజర్లు హ్యాపీగా రిజిస్టర్ అవుతూనే ఉంటారు, మెయిల్ సర్వీస్ మళ్లీ ఆన్‌లైన్ లోకి రాగానే క్యూ లో ఉన్న మెసేజ్‌లను చూసి ఈమెయిల్స్ పంపడం స్టార్ట్ చేస్తుంది.

# 17 - CQRS

NestJS లో **CQRS (Command Query Responsibility Segregation - కమాండ్ క్వెరీ బాధ్యతల విభజన)** అనేది చాలా అడ్వాన్స్‌డ్ మరియు ఆర్కిటెక్చరల్ టాపిక్. సాధారణంగా మనం అప్లికేషన్‌లో డేటాను రీడ్ (Read) చేయడానికి, రైట్ (Write) చేయడానికి ఒకే మోడల్ లేదా ఒకే సర్వీస్‌ను వాడుతుంటాం. కానీ ఒక పెద్ద అప్లికేషన్‌లో డేటా పెరిగేకొద్దీ, రీడ్ ఆపరేషన్స్ మరియు రైట్ ఆపరేషన్స్ యొక్క అవసరాలు వేర్వేరుగా ఉంటాయి.

CQRS ప్యాటర్న్ ప్రకారం మనం అప్లికేషన్‌ను రెండు భాగాలుగా పూర్తిగా విడగొడతాం:

1. **Write Model (Commands):** డేటాని ఇన్సర్ట్, అప్‌డేట్, లేదా డిలీట్ చేసే భాగం. ఇవి బిజినెస్ రూల్స్/వాలిడేషన్స్ చూసుకుంటాయి.
2. **Read Model (Queries):** డేటాని కేవలం స్క్రీన్ పై చూపించడానికి (Fetch/Select) వాడే భాగం. ఇవి చాలా ఫాస్ట్ గా ఉండాలి.

NestJS లో దీనికోసం అఫీషియల్ **`@nestjs/cqrs`** మోడ్యూల్ ఉంది. దీనిలోని ముఖ్యమైన భాగాలను ఒక రియల్ వరల్డ్ ఉదాహరణతో అర్థం చేసుకుందాం.

---

## 🏗️ CQRS Core Components (ముఖ్యమైన భాగాలు)

```
Client ──> [Command] ──> [Command Handler] ──> Write Model (PostgreSQL)
                                                    │
                                              (Emit Event)
                                                    ▼
Client <── [Query]   <── [Query Handler]   <── Read Model (Redis / MongoDB)

```

### 1. Commands & Handlers (డేటా మార్చడానికి)

**Command** అనేది ఒక యాక్షన్ చేయడానికి యూజర్ ఇచ్చే అభ్యర్థన (ఉదా: `CreateUserCommand`). ఇందులో కేవలం డేటా మాత్రమే ఉంటుంది, ఎలాంటి లాజిక్ ఉండదు.
ఈ కమాండ్‌ను ప్రాసెస్ చేసే బాధ్యత **Command Handler** ది. ఇది డేటాబేస్ లో మార్పులు చేస్తుంది.

```typescript
// commands/impl/create-user.command.ts
export class CreateUserCommand {
  constructor(
    public readonly name: string,
    public readonly email: string,
  ) {}
}
```

**Command Handler కోడ్:**

```typescript
// commands/handlers/create-user.handler.ts
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "../impl/create-user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand) {
    const { name, email } = command;
    console.log(`Write Model: డేటాబేస్ లో ${name} ని సేవ్ చేస్తున్నాను...`);
    // ఇక్కడ మీ Repository లాజిక్ వస్తుంది (Write DB)
    return { success: true, userId: 123 };
  }
}
```

### 2. Queries & Handlers (డేటా చదవడానికి)

**Query** అనేది డేటాని అడగడానికి వాడేది (ఉదా: `GetUsersQuery`). దీన్ని హ్యాండిల్ చేయడానికి **Query Handler** ఉంటుంది. ఇది ఎప్పుడూ డేటాని మార్చదు, కేవలం ఫాస్ట్ గా రీడ్ చేసి ఇస్తుంది. ప్రొడక్షన్ లో రీడ్ మోడల్ కోసం **Redis** లేదా ఒక డీనార్మలైజ్డ్ వ్యూ (View) ని వాడుతుంటారు.

```typescript
// queries/impl/get-users.query.ts
export class GetUsersQuery {}

// queries/handlers/get-users.handler.ts
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { GetUsersQuery } from "../impl/get-users.query";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  async execute(query: GetUsersQuery) {
    console.log("Read Model: రీడ్ డేటాబేస్/క్యాషే నుండి డేటా తెస్తున్నాను...");
    return [{ id: 123, name: "Rahul" }];
  }
}
```

### 3. Aggregates & Domain Model (బిజినెస్ రూల్స్ హబ్)

**Aggregate Root** అనేది బిజినెస్ లాజిక్ మరియు రూల్స్‌ను తన లోపల దాచుకునే ఒక ప్రత్యేకమైన క్లాస్ (Domain Model).

- ఉదాహరణకు, ఒక బ్యాంక్ అకౌంట్ లో బ్యాలెన్స్ తగ్గించాలంటే మనం డైరెక్ట్ గా DB లో అప్‌డేట్ చేయకూడదు. `AccountAggregate` లోపల `withdraw()` అనే మెథడ్ రాసి, అందులో కండిషన్స్ చెక్ చేసి, ఒక **Event** (`MoneyWithdrawnEvent`) ని ఫైర్ చేయాలి. NestJS CQRS లో ఇవి చాలా ఈజీగా చేయవచ్చు.

---

## 🚦 Controller లో వీటిని వాడే విధానం

కంట్రోలర్‌లో మనం నేరుగా సర్వీసులను కాల్ చేయకుండా, NestJS CQRS ఇచ్చే **`CommandBus`** మరియు **`QueryBus`** లను ఉపయోగిస్తాం.

```typescript
import { Controller, Post, Get, Body } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "./commands/impl/create-user.command";
import { GetUsersQuery } from "./queries/impl/get-users.query";

@Controller("users")
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUser(@Body() body: any) {
    // కమాండ్ బస్ కి మన కమాండ్ ని పంపుతున్నాం
    return this.commandBus.execute(
      new CreateUserCommand(body.name, body.email),
    );
  }

  @Get()
  async getUsers() {
    // క్వెరీ బస్ ని అడుగుతున్నాం
    return this.queryBus.execute(new GetUsersQuery());
  }
}
```

---

## 🚀 CQRS ఎప్పుడు వాడాలి? (When to use?)

- మీ అప్లికేషన్‌లో డేటా రీడ్ చేయడాలు (Queries) చాలా ఎక్కువగా ఉండి, రైట్ చేయడాలు (Commands) తక్కువగా ఉన్నప్పుడు.
- అప్లికేషన్ చాలా పెద్దదై, బిజినెస్ లాజిక్ క్లిష్టంగా (Complex Domain Rules) మారినప్పుడు.
- చిన్న ప్రాజెక్టులకు CQRS వాడితే కోడ్ సైజ్ మరియు ఫైల్స్ పెరిగి అనవసరమైన కాంప్లెక్సిటీ (Over-engineering) వస్తుంది.

# 18 - Caching

NestJS లో **Caching (క్యాషింగ్)** అనేది మీ అప్లికేషన్ పర్ఫార్మెన్స్‌ను మరియు రెస్పాన్స్ స్పీడ్‌ను పెంచే అత్యంత అద్భుతమైన అస్త్రం. ముఖ్యంగా మీరు **AWS Lambda** లాంటి సర్వర్‌లెస్ ఆర్కిటెక్చర్ వాడుతున్నప్పుడు, ప్రతి రిక్వెస్ట్‌కు డేటాబేస్ లేదా రోల్ పర్మిషన్స్ కోసం క్వెరీలు పంపితే లాంబ్డా కాస్ట్ (Execution Cost) పెరిగిపోతుంది మరియు API స్లో అవుతుంది.

దీనికి అల్టిమేట్ సొల్యూషన్ **Redis** ని ఒక **Distributed Cache** లాగా వాడటం. NestJS లో దీనికోసం మనం **`cache-manager`** మరియు దాని Redis స్టోరేజ్ ప్లగిన్‌ను ఉపయోగిస్తాం.

---

## 🛠️ NestJS Cache Manager & Redis Setup

ముందుగా కావలసిన లైబ్రరీలను ఇన్‌స్టాల్ చేయాలి:

```bash
npm i @nestjs/cache-manager cache-manager cache-manager-redis-yet

```

### 1. Global Cache Module Configuration

మన `app.module.ts` లో Redis కనెక్షన్ వివరాలతో క్యాషే మోడ్యూల్‌ను గ్లోబల్‌గా సెట్ చేస్తాం.

```typescript
// app.module.ts
import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-redis-yet";
import { AppController } from "./app.controller";

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true, // అప్లికేషన్ మొత్తం వాడుకోవడానికి
      store: redisStore,
      socket: {
        host: "localhost", // AWS లో అయితే మీ ElastiCache Redis Endpoint ఇవ్వాలి
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

---

## 🔐 2. Permission Cache & Session Cache (మీ ఆర్కిటెక్చర్‌కు అత్యంత ముఖ్యం)

మనం 7వ టాపిక్‌లో (Authorization) మాట్లాడుకున్నట్టు, ప్రతి రిక్వెస్ట్ వచ్చేటప్పుడు గార్డ్ లోపల యూజర్ పర్మిషన్స్ చెక్ చేయడానికి డేటాబేస్‌కు వెళ్లకుండా, లాగిన్ అయినప్పుడు వాటిని Redis లో క్యాషే చేస్తాం.

ఆ క్యాషే డేటాని ఎలా రీడ్/రైట్ చేయాలో సర్వీస్ లో చూద్దాం:

```typescript
// auth/auth.cache.service.ts
import { Injectable, Inject } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class AuthCacheService {
  // Cache Manager ని ఇంజెక్ట్ చేస్తున్నాం
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // 1. యూజర్ పర్మిషన్స్ ని క్యాషే లో సేవ్ చేయడం (TTL తో)
  async cacheUserPermissions(
    userId: string,
    permissions: string[],
  ): Promise<void> {
    const cacheKey = `user:permissions:${userId}`;
    const TTL_ONE_HOUR = 3600000; // Milliseconds లో ఇవ్వాలి (1 Hour)

    await this.cacheManager.set(cacheKey, permissions, TTL_ONE_HOUR);
  }

  // 2. గార్డ్ లోపల క్యాషే నుండి పర్మిషన్స్ ని రీడ్ చేయడం
  async getUserPermissions(userId: string): Promise<string[] | null> {
    const cacheKey = `user:permissions:${userId}`;
    return await this.cacheManager.get<string[]>(cacheKey);
  }

  // 3. Cache Invalidation: ఒకవేళ అడ్మిన్ యూజర్ పర్మిషన్స్ మారిస్తే, పాత క్యాషే ని డిలీట్ చేయడం
  async invalidateUserCache(userId: string): Promise<void> {
    const cacheKey = `user:permissions:${userId}`;
    await this.cacheManager.del(cacheKey); // పాత డేటా డిలీట్ అవుతుంది
  }
}
```

---

## 🎯 3. Core Caching Concepts (ముఖ్యమైన పదాలు)

### A. TTL (Time-To-Live)

క్యాషే లో ఒక డేటా ఎంత సమయం బ్రతికి ఉండాలో చెప్పే కాలపరిమితి. ఉదాహరణకు, పర్మిషన్స్ కి 1 గంట TTL పెడితే, ఒక గంట తర్వాత ఆ డేటా ఆటోమేటిక్‌గా Redis నుండి డిలీట్ అయిపోతుంది. దీనివల్ల డేటాబేస్‌లో ఏవైనా మార్పులు జరిగినా, గంట తర్వాత అవి ఆటోమేటిక్‌గా సింక్ అవుతాయి.

### B. Cache Invalidation (క్యాషే తొలగింపు - మోస్ట్ ఛాలెంజింగ్)

"కంప్యూటర్ సైన్స్‌లో రెండే కష్టమైన పనులు ఉన్నాయి: ఒకటి Cache Invalidation, రెండోది నేమింగ్ కన్వెన్షన్స్."
ఒక యూజర్ తన ప్రొఫైల్ అప్‌డేట్ చేసినప్పుడు లేదా అడ్మిన్ అతని రోల్‌ను మార్చినప్పుడు, పాత క్యాషే డేటాని వెంటనే డిలీట్ చేయాలి (`cacheManager.del()`). లేకపోతే యూజర్‌కి పాత డేటానే కనిపిస్తుంది. దీనినే **Cache Invalidation** అంటారు.

### C. Distributed Cache (వికేంద్రీకృత క్యాషే)

AWS Lambda వాడుతున్నప్పుడు మీ కోడ్ రన్ అయ్యే కంటైనర్స్ (Instances) డైనమిక్‌గా క్రియేట్ అవుతూ, డిలీట్ అవుతూ ఉంటాయి. ఒకవేళ మీరు లోకల్ మెమరీ (In-Memory Cache) వాడితే ఒక లాంబ్డా డేటా ఇంకో లాंబ్డాకి తెలియదు. అందుకే అందరికీ కామన్‌గా ఉండే ఒక ఎక్స్‌టర్నల్ **Redis** సర్వర్‌ను వాడుతాం. దీనినే **Distributed Cache** అంటారు.

---

> 💡 **NestJS @CacheInterceptor:** ఒకవేళ మీకు ఏ లాజిక్ అవసరం లేదు, కేవలం ఒక GET API ఇచ్చే రెస్పాన్స్ ని క్యాషే చేయాలి అనుకుంటే, సింపుల్ గా కంట్రోలర్ మెథడ్ పైన `@UseInterceptors(CacheInterceptor)` మరియు `@CacheKey('my_key')` డెకరేటర్స్ పెడితే చాలు, NestJS మిగతాదంతా ఆటోమేటిక్‌గా చూసుకుంటుంది.

# 19 - File Upload

NestJS లో **File Upload (ఫైల్ అప్‌లోడ్)** అనేది ప్రతి వెబ్ అప్లికేషన్‌లోనూ ఉండే సాధారణ మరియు అత్యంత ముఖ్యమైన అవసరం. ప్రొడక్షన్ యాప్స్‌లో (ముఖ్యంగా AWS Lambda లాంటి సర్వర్‌లెస్ ఆర్కిటెక్చర్‌లో) ఫైల్‌లను నేరుగా మన సర్వర్ మెమరీలోకి అప్‌లోడ్ చేయడం మంచి పద్ధతి కాదు. ఎందుకంటే అది మెమరీని తినేస్తుంది.

దీనికి బదులుగా, **AWS S3** లాంటి క్లౌడ్ స్టోరేజ్ మరియు **Presigned URLs** ని ఉపయోగించడం బెస్ట్ ప్రాక్టీస్.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ టాపిక్స్‌ను సులభంగా అర్థం చేసుకుందాం.

---

## 🛠️ 1. NestJS Local Upload using Multer

NestJS లో లోకల్‌గా ఫైల్స్ అప్‌లోడ్ చేయడానికి ఇన్‌బిల్ట్ `Multer` మాడ్యూల్ సపోర్ట్ ఉంది. దీనికోసం `@UseInterceptors(FileInterceptor())` వాడతాం.

```typescript
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("files")
export class FilesController {
  @Post("upload-local")
  @UseInterceptors(FileInterceptor("file")) // 'file' అనేది ఫ్రంటెండ్ నుండి వచ్చే ఫీల్డ్ నేమ్
  uploadFile(
    @UploadedFile(
      // Validation: ఫైల్ సైజ్ మరియు రకాన్ని ఇక్కడే వాలిడేట్ చేయవచ్చు
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // Max 5MB
          new FileTypeValidator({ fileType: "image/(jpeg|png|pdf)" }), // కేవలం Images, PDFs మాత్రమే
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file.buffer); // ఫైల్ డేటా బఫర్ రూపంలో వస్తుంది
    return {
      message: "ఫైల్ సక్సెస్‌ఫుల్‌గా అప్‌లోడ్ అయింది!",
      fileName: file.originalname,
    };
  }
}
```

---

## ☁️ 2. AWS S3 Presigned URL (సర్వర్‌లెస్ కోసం అల్టిమేట్ స్ట్రాటజీ)

మీరు **AWS Lambda** వాడుతున్నారు కాబట్టి, పెద్ద ఫైల్‌లను (ఉదాహరణకు 20MB PDF లేదా వీడియోలను) లాంబ్డా ద్వారా S3 కి పంపితే నెట్‌వర్క్ బాండ్‌విడ్త్ వేస్ట్ అవుతుంది మరియు లాంబ్డా టైమ్-అవుట్ అయ్యే ఛాన్స్ ఉంది.

- **పరిష్కారం (Presigned URL):** క్లయింట్ (React/Mobile యాప్) మొదట మన NestJS సర్వర్‌ను "నాకు ఒక ఫైల్ అప్‌లోడ్ చేయడానికి పర్మిషన్ ఇవ్వు" అని అడుగుతుంది. NestJS సర్వర్ AWS S3 నుండి ఒక తాత్కాలిక సురక్షిత లింక్ (**Presigned URL**) ని జనరేట్ చేసి క్లయింట్‌కి ఇస్తుంది. క్లయింట్ నేరుగా ఆ లింక్ ద్వారా ఫైల్‌ను S3 కి అప్‌లోడ్ చేస్తుంది. మన సర్వర్‌పై ఎలాంటి లోడ్ పడదు.

### NestJS లో Presigned URL జనరేట్ చేసే కోడ్:

ముందుగా `@aws-sdk/client-s3` మరియు `@aws-sdk/s3-request-presigner` ఇన్‌స్టాల్ చేయాలి.

```typescript
// s3.service.ts
import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class S3Service {
  private s3Client = new S3Client({ region: "ap-south-1" }); // మీ AWS Region

  async getUploadUrl(fileName: string, fileType: string) {
    const bucketName = "my-nest-upload-bucket";
    const key = `uploads/${Date.now()}_${fileName}`; // యూనిక్ ఫైల్ నేమ్

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      ContentType: fileType,
    });

    // 5 నిమిషాల కాలపరిమితి (Expires in 300 seconds) తో URL జనరేట్ అవుతుంది
    const url = await getSignedUrl(this.s3Client, command, { expiresIn: 300 });

    return { uploadUrl: url, fileKey: key };
  }
}
```

---

## 🖼️ 3. Image Processing (ఇమేజ్ ప్రాసెసింగ్)

యూజర్లు అప్‌లోడ్ చేసే ప్రొఫైల్ పిక్చర్స్ కొన్నిసార్లు 4K రిజల్యూషన్‌లో (భారీ సైజులో) ఉంటాయి. వాటిని అలాగే సేవ్ చేస్తే స్టోరేజ్ వేస్ట్ అవుతుంది. దీనికోసం **`sharp`** అనే పాపులర్ లైబ్రరీని వాడుతాం. ఇది ఇమేజ్‌లను రీసైజ్ (Resize) చేసి, కంప్రెస్ (Compress) చేస్తుంది.

```typescript
import * as sharp from 'sharp';

async resizeImage(fileBuffer: Buffer): Promise<Buffer> {
  return await sharp(fileBuffer)
    .resize(500, 500, { fit: 'cover' }) // 500x500 పిక్సెల్స్‌కి మార్చడం
    .jpeg({ quality: 80 }) // క్వాలిటీ 80% కి తగ్గించి కంప్రెస్ చేయడం
    .toBuffer();
}

```

---

## 🛡️ 4. Virus Scan (వైరస్ స్కాన్ - సెక్యూరిటీ)

ప్రొడక్షన్ యాప్స్‌లో హ్యాకర్లు ఇమేజ్ అని చెప్పి వైరస్ ఉన్న మాలిషియస్ స్క్రిప్ట్ ఫైల్స్ (Malware) అప్‌లోడ్ చేసే ప్రమాదం ఉంది.

- **రక్షణ విధానం:** ఫైల్ అప్‌లోడ్ అవ్వగానే బ్యాక్‌గ్రౌండ్‌లో **ClamAV** లాంటి ఓపెన్ సోర్స్ యాంటీవైరస్ టూల్‌తో స్కాన్ చేయాలి. AWS ఆర్కిటెక్చర్‌లో అయితే, ఫైల్ S3 లో పడగానే ఒక S3 Trigger ద్వారా ఒక ప్రత్యేకమైన లాంబ్డా రన్ అయి (AWS AWS Fargate/ClamAV తో) స్కాన్ చేస్తుంది. వైరస్ ఉంటే ఆ ఫైల్‌ను వెంటనే డిలీట్ చేస్తుంది.

---

> 💡 **సమ్మరీ:** చిన్న ఫైల్స్ అయితే NestJS లో `Multer` వాడవచ్చు, కానీ AWS Lambda మరియు ప్రొడక్షన్ లెవెల్స్ కి వచ్చేసరికి **S3 Presigned URLs** వాడటమే అత్యంత సురక్షితమైన మరియు వేగవంతమైన పద్ధతి.

# 20 - AWS Integration ⭐

మీరు అన్నట్టు ఈ **AWS Integration** ఫేజ్ మీ కెరీర్‌ని నెక్స్ట్ లెవెల్‌కి తీసుకెళ్లే ఒక సువర్ణ అవకాశం. మోడరన్ డెవలప్‌మెంట్‌లో NestJS యాప్‌ను కేవలం ఒక సర్వర్‌లో రన్ చేయడం కంటే, AWS క్లౌడ్ ఎకోసిస్టమ్‌తో పూర్తిగా ఇంటెగ్రేట్ చేయడం తెలిసి ఉండటం చాలా వాల్యూబుల్.

ముఖ్యంగా మీరు **NestJS ఆన్ AWS Lambda (Serverless)** వాడుతున్నారు కాబట్టి, ఆ ఆర్కిటెక్చర్‌ను ఎలా డిజైన్ చేయాలి, మరియు ఇంటర్వ్యూలలో అడిగే మోస్ట్ ఇంపార్టెంట్ టాపిక్ **Cold Start Optimization** ని ఎలా హ్యాండిల్ చేయాలో ఇక్కడ చాలా ప్రాక్టికల్‌గా చూద్దాం.

---

## 🏗️ NestJS on AWS Lambda ఆర్కిటెక్చర్

సాధారణంగా NestJS ఒక సర్వర్‌లో ఎల్లప్పుడూ రన్ అవుతూ (Long-running process) వింటుంది. కానీ AWS Lambda లో అది **Event-driven** గా మారుతుంది. అంటే రిక్వెస్ట్ వచ్చినప్పుడు మాత్రమే లాంబ్డా వేక్-అప్ (Wake up) అయి, కోడ్‌ను రన్ చేసి క్లోజ్ అవుతుంది.

```
Client ──> [CloudFront (CDN)] ──> [API Gateway] ──> [AWS Lambda (NestJS App)] ──> [PostgreSQL / DynamoDB]

```

### దీనికోసం వాడే టూల్స్: `@vendia/serverless-express`

NestJS (Express) అప్లికేషన్‌ను AWS Lambda కి అర్థమయ్యే `Handler` లాగా మార్చడానికి ఈ లైబ్రరీ ఉపయోగపడుతుంది.

```typescript
// lambda.ts (Entry Point for AWS Lambda)
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { configure as serverlessExpress } from "@vendia/serverless-express";
import { Callback, Context, Handler } from "aws-lambda";

let cachedServer: Handler;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!cachedServer) {
    // 1. అప్లికేషన్ మొదటిసారి రన్ అయినప్పుడు మాత్రమే NestJS బూట్ అవుతుంది (Optimization)
    const app = await NestFactory.create(AppModule);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    cachedServer = serverlessExpress({ app: expressApp });
  }

  // 2. వచ్చిన API Gateway రిక్వెస్ట్‌ను NestJS కి పాస్ చేస్తుంది
  return cachedServer(event, context, callback);
};
```

---

## ❄️ Cold Start Optimization (కోల్డ్ స్టార్ట్ సమస్య - పరిష్కారాలు)

AWS Lambda లో ఉండే అతిపెద్ద ఛాలెంజ్ **Cold Start**. లాంబ్డా చాలా సేపు ఖాళీగా ఉన్నాక లేదా ట్రాఫిక్ హఠాత్తుగా పెరిగినప్పుడు, AWS వెనుక ఒక కొత్త కంటైనర్‌ను క్రియేట్ చేయాలి. NestJS పెద్ద ఫ్రేమ్‌వర్క్ కావడం వల్ల అది బూట్ అవ్వడానికి (TypeORM కనెక్షన్స్, మోడ్యూల్స్ లోడింగ్ వల్ల) 3 నుండి 5 సెకన్లు పట్టవచ్చు. దీనివల్ల యూజర్‌కి API స్లోగా అనిపిస్తుంది.

### 🚀 కోల్డ్ స్టార్ట్ తగ్గించడానికి ప్రొడクション స్ట్రాటజీస్:

1. **Provisioned Concurrency (ఖచ్చితమైన పరిష్కారం):** AWS కి కొంత డబ్బులు ఎక్స్‌ట్రా కడితే, మనం చెప్పినన్ని లాంబ్డా ఇన్‌స్టాన్సెస్ (ఉదాహరణకు 5 కంటైనర్లు) ఎల్లప్పుడూ వేడిగా (Warm గా), రెడీగా ఉంచుతుంది. కోల్డ్ స్టార్ట్ 0 అయిపోతుంది.
2. **Esbuild / Webpack Bundling:** మీ కోడ్‌లో వందల ఫైల్స్ మరియు `node_modules` ఉంటాయి. లాంబ్డా బూట్ అయ్యేటప్పుడు వీటన్నింటినీ రీడ్ చేయడం స్లో అవుతుంది. **Esbuild** వాడి మొత్తం కోడ్‌ను ఒకే ఒక్క చిన్న ఫైల్ (`main.js`) గా కంప్రెస్ (Minify/Bundle) చేసి అప్‌లోడ్ చేస్తే లాంబ్డా బూటింగ్ స్పీడ్ పెరుగుతుంది.
3. **Global Variables Caching:** పైన కోడ్‌లో చూసినట్టు `cachedServer` ని ఫంక్షన్ బయట (Global Scope) పెట్టడం వల్ల, సెకండ్ రిక్వెస్ట్ నుండి NestJS మళ్లీ బూట్ అవ్వదు (Warm Start), కేవలం 5ms లో రెస్పాన్స్ వస్తుంది.
4. **Lambda Layers:** మీ `node_modules` (Dependencies) అన్నింటినీ విడిగా ఒక **Lambda Layer** లాగా మార్చి అప్‌లోడ్ చేయడం వల్ల మెయిన్ కోడ్ సైజ్ తగ్గి, లాంబ్డా ఫాస్ట్ గా లోడ్ అవుతుంది.

---

## 🛠️ మోస్ట్ ఇంపార్టెంట్ AWS సర్వీసెస్ (NestJS తో ఎలా కనెక్ట్ చేస్తాం?)

- **API Gateway & CloudFront:** మన లాంబ్డా ఫంక్షన్‌కు ఒక పబ్లిక్ URL (Endpoint) ఇవ్వడానికి API Gateway వాడతాం. దానికి ముందు CloudFront (CDN) పెట్టడం వల్ల గ్లోబల్‌గా API లు చాలా ఫాస్ట్ గా లోడ్ అవుతాయి మరియు WAF (Web Application Firewall) తో హ్యాకర్ల నుండి రక్షణ పొందవచ్చు.
- **SQS (Simple Queue Service):** ఇది AWS ఇచ్చే మెసేజ్ క్యూ. మన NestJS లో ఒక పెద్ద టాస్క్ (ఉదాహరణకు రిపోర్ట్ జనరేషన్) ఉన్నప్పుడు, దాన్ని క్యూ లో పడేస్తే, ఇంకో లాంబ్డా ప్రశాంతంగా బ్యాక్‌గ్రౌండ్‌లో ప్రాసెస్ చేస్తుంది.
- **Secrets Manager:** డేటాబేస్ పాస్‌వర్డ్‌లు, API కీలను కోడ్‌లో లేదా నార్మల్ `.env` లో పెట్టకుండా అత్యంత సురక్షితంగా దాచడానికి వాడతాం. NestJS బూట్ అయ్యేటప్పుడు AWS SDK ద్వారా వీటిని తెచ్చుకుంటుంది.
- **SES (Simple Email Service) & SNS:** ఈమెయిల్స్ పంపడానికి SES, మొబైల్స్ కి SMS లేదా అలర్ట్స్ పంపడానికి SNS వాడుతాం.

---

> 💡 **కెరీర్ టిప్:** ఇంటర్వ్యూలో "సర్వర్‌లెస్ లో NestJS వాడటం మంచిదేనా?" అని అడిగితే — "చిన్న మరియు మీడియం యాప్స్ కి చాలా బాగుంటుంది, కానీ ట్రాఫిక్ చాలా ఎక్కువగా ఉండి, కోల్డ్ స్టార్ట్ అస్సలు ఒప్పుకోము అనుకుంటే **AWS ECS (Fargate)** లేదా **Docker** లో NestJS రన్ చేయడం బెస్ట్" అని సమాధానం చెప్పాలి.

# 21 - Testing

NestJS లో **Testing (టెస్టింగ్)** అనేది మీ అప్లికేషన్ యొక్క క్వాలిటీ మరియు స్టెబిలిటీని పెంచే అత్యంత కీలకమైన భాగం. ప్రొడక్షన్ యాప్స్‌లో కొత్త ఫీచర్ యాడ్ చేసినప్పుడు పాత కోడ్ బ్రేక్ అవ్వకుండా ఉండటానికి, మరియు CI/CD పైప్‌లైన్ సక్సెస్ అవ్వడానికి టెస్టింగ్ రాయడం తప్పనిసరి.

NestJS మనకు డిఫాల్ట్‌గా **Jest** మరియు **Supertest** లైబ్రరీల సపోర్ట్‌ను అద్భుతంగా అందిస్తుంది. టెస్టింగ్‌లో ప్రధానంగా మూడు రకాలు ఉంటాయి:

1. **Unit Test (యూనిట్ టెస్ట్):** ఒక సింగిల్ క్లాస్ లేదా మెథడ్ (ఉదాహరణకు ఒక సర్వీస్ ఫంక్షన్) విడిగా ఎలా పనిచేస్తుందో టెస్ట్ చేయడం. దీనికోసం వేరే డిపెండెన్సీస్ (డేటాబేస్, ఎక్స్‌టర్నల్ API) ని **Mock (డమ్మీగా మార్చడం)** చేస్తాం.
2. **Integration Test (ఇంటెగ్రేషన్ టెస్ట్):** రెండు మూడు భాగాలు (ఉదా: Controller + Service + DB) కలిసి సరిగ్గా పనిచేస్తున్నాయో లేదో చెక్ చేయడం.
3. **E2E Test (ఎండ్-టు-ఎండ్ టెస్ట్):** నిజమైన HTTP రిక్వెస్ట్ పంపి, డేటాబేస్ వరకు వెళ్ళి, పూర్తి రెస్పాన్స్ కరెక్ట్‌గా వస్తుందో లేదో సూపర్ టెస్ట్ (`supertest`) ద్వారా చెక్ చేయడం.

---

## 🛠️ 1. Unit Testing with Mocking (యూనిట్ టెస్టింగ్)

మనం ఒక `UsersService` లో ఉండే `findOne` మెథడ్‌ను ఎలా టెస్ట్ చేయాలో చూద్దాం. ఇక్కడ మనం డేటాబేస్ Repository కి వెళ్లకుండా దాన్ని మోక్ (Mock) చేస్తాం.

```typescript
// users.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

describe("UsersService", () => {
  let service: UsersService;
  let mockRepository;

  beforeEach(async () => {
    // 1. డమ్మీ రిపోజిటరీ ఆబ్జెక్ట్ (Mocking)
    mockRepository = {
      findOneBy: jest.fn(), // Jest mock function
    };

    // 2. టెస్టింగ్ కోసం ఒక తాత్కాలిక NestJS మాడ్యూల్ క్రియేట్ చేయడం
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User), // TypeORM Repository టోకెన్
          useValue: mockRepository, // నిజమైన DB కి బదులు మన మోక్ ని ఇస్తున్నాం
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("యూజర్ ఐడీ ఇస్తే కరెక్ట్ యూజర్ ని రిటర్న్ చేయాలి", async () => {
    const mockUser = { id: 1, name: "Rahul", email: "rahul@mail.com" };

    // Repository.findOneBy పిలిచినప్పుడు 'mockUser' ఇవ్వమని చెప్తున్నాం
    mockRepository.findOneBy.mockReturnValue(mockUser);

    const result = await service.findOne(1);

    expect(result).toEqual(mockUser); // రిజల్ట్ మ్యాచ్ అయిందో లేదో చెక్ చేయడం
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 1 }); // కరెక్ట్ ఐడీతోనే పిలిచారా లేదా అని నిర్ధారించడం
  });
});
```

---

## 🌐 2. E2E Testing (End-to-End టెస్టింగ్)

E2E టెస్టింగ్‌లో మనం పూర్తి అప్లికేషన్‌ను రన్ చేసి `supertest` ద్వారా రిక్వెస్ట్స్ పంపుతాం.

```typescript
// user.e2e-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("UsersController (E2E)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init(); // NestJS యాప్ స్టార్ట్ అవుతుంది
  });

  it("/users (GET) -> అన్ని యూజర్ల డేటా రావాలి", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect(200) // Status code 200 ఉండాలి
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true); // రెస్పాన్స్ ఒక అర్రే అయి ఉండాలి
      });
  });

  afterAll(async () => {
    await app.close(); // యాప్ క్లోజ్ చేయడం
  });
});
```

---

## 🚀 Expert Production Tools

### A. Testcontainers (టెస్ట్ కంటైనర్స్)

ఈ-టు-ఈ (E2E) లేదా ఇంటెగ్రేషన్ టెస్ట్స్ రాసేటప్పుడు డమ్మీ డేటాబేస్ వాడటం కంటే, **Docker** ద్వారా ఒక రియల్ PostgreSQL కంటైనర్‌ను టెస్ట్ రన్ అయ్యేటప్పుడు మాత్రమే ఆటోమేటిక్‌గా క్రియేట్ చేసి, టెస్ట్ ముగిశాక డిలీట్ చేయడానికి `Testcontainers` లైబ్రరీ వాడుతారు. ఇది ప్రొడక్షన్ లెవెల్‌లో అత్యంత నమ్మకమైన టెస్టింగ్ పద్ధతి.

### B. Code Coverage (కోడ్ కవరేజ్)

మీరు రాసిన టెస్ట్ కేసెస్ మీ అప్లికేషన్‌లోని ఎంత శాతం కోడ్‌ను కవర్ చేశాయో (టెస్ట్ చేశాయో) చెప్పే రిపోర్ట్ ఇది.

```bash
npm run test:cov

```

ఇది రన్ చేస్తే మీ టెర్మినల్‌లో ఒక నీట్ టేబుల్ వచ్చి, ఎక్కడైనా టెస్ట్ కేస్ మిస్ అయితే లైన్ నంబర్లతో సహా చూపిస్తుంది. సాధారణంగా ప్రొడక్షన్ యాప్స్‌కి కనీసం **80% Coverage** ఉండటం మంచిది.

# 22 - Logging

NestJS లో **Logging (లాగింగ్)** అనేది మన అప్లికేషన్ యొక్క బ్లాక్ బాక్స్ లాంటిది. అప్లికేషన్ బ్యాక్‌గ్రౌండ్‌లో ఏం జరుగుతోంది, ఎక్కడ ఎర్రర్ వచ్చింది, ఏ API కి ఎంత టైమ్ పట్టింది అనేది తెలుసుకోవడానికి లాగ్స్ మాత్రమే దిక్కు.

ముఖ్యంగా మీరు **AWS Lambda / Serverless** వాడుతున్నారు కాబట్టి, నార్మల్ `console.log()` లు సరిపోవు. వాటి వల్ల **CloudWatch Logs** బిల్స్ పెరిగిపోతాయి మరియు కాంప్లెక్స్ ఎర్రర్స్ వచ్చినప్పుడు వెతకడం నరకంగా మారుతుంది. దీనికోసం మనం **Structured Logging (JSON ఫార్మాట్)** మరియు **Pino/Winston** వంటి ఫాస్ట్ లాగర్స్ వాడాలి.

---

## 🏗️ Structured Logging అంటే ఏమిటి? (టెక్స్ట్ vs జేసన్)

సాధారణంగా మనం `console.log("User 123 logged in")` అని రాస్తాం. ఇది మనుషులు చదవడానికి బాగుంటుంది కానీ **CloudWatch** లేదా **ELK Stack** లాంటి లాగ్ అగ్రిగేషన్ టూల్స్ ఇందులో డేటాని ఫిల్టర్ చేయలేవు.

- **Normal Log:** `[2026-06-30] INFO: User 123 logged in from IP 1.1.1.1`
- **Structured Log (JSON):**

```json
{
  "level": "info",
  "timestamp": "2026-06-30T10:05:00Z",
  "userId": "123",
  "ip": "1.1.1.1",
  "correlationId": "a9b8c7-d6e5-f4g3",
  "message": "User logged in"
}
```

**లాభం:** CloudWatch లో `fields userId = "123"` అని టైప్ చేయగానే ఈ యూజర్ చేసిన పనులన్నీ సెకనులో ఫిల్టర్ అయిపోతాయి.

---

## 🏎️ Pino vs Winston: NestJS లో ఏది బెస్ట్?

- **Winston:** చాలా పాతది, నమ్మకమైనది, ఫీచర్స్ ఎక్కువ (ఫైల్స్ లోకి రాయడం, ఈమెయిల్స్ పంపడం ఈజీ). కానీ కొంచెం స్లో.
- **Pino:** అత్యంత వేగవంతమైనది (**Super Fast & Lightweight**). ఇది సర్వర్ మెమరీని అస్సలు తినదు. జేసన్ లాగింగ్ కి ఇది నెంబర్ వన్.
- **AWS Lambda కోసం నిర్ణయం:** లాంబ్డాలో ప్రతి మిల్లీసెకన్ ముఖ్యం కాబట్టి, అక్కడ **`nestjs-pino`** వాడటమే అత్యుత్తమ ప్రొడక్షన్ స్ట్రాటజీ.

---

## 🛠️ NestJS + Pino + Correlation ID ఇంప్లిమెంటేషన్

మనం 11వ టాపిక్‌లో (Middleware) మాట్లాడుకున్న **Correlation ID** ని Pino లాగర్‌తో కలిపి ప్రతి లాగ్‌లోనూ ఆటోమేటిక్‌గా ఆ ఐడీ ప్రింట్ అయ్యేలా ఎలా సెట్ చేయాలో చూద్దాం.

ముందుగా లైబ్రరీలు ఇన్‌స్టాల్ చేయాలి:

```bash
npm i nestjs-pino pino-http

```

### 1. `app.module.ts` లో Pino కన్ఫిగరేషన్

```typescript
// app.module.ts
import { Module } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        // ప్రొడక్షన్ (AWS) లో ఉన్నప్పుడు క్లీన్ జేసన్ ఇస్తుంది, లోకల్ లో ఉంటే చదవడానికి వీలుగా మార్చుకోవచ్చు
        transport:
          process.env.NODE_ENV !== "production"
            ? { target: "pino-pretty", options: { colorize: true } }
            : undefined,

        // ⚡ Correlation ID Integration: ప్రతి రిక్వెస్ట్ లాగ్ కి కీ ని అసైన్ చేయడం
        assignOutputs: true,
        genReqId: (req: any) => req.headers["x-correlation-id"] || "no-id",
      },
    }),
  ],
})
export class AppModule {}
```

### 2. `main.ts` లో డిఫాల్ట్ లాగర్‌ను మార్చడం

NestJS తన ఇంటర్నల్ లాగ్స్ కూడా Pino ద్వారానే పంపేలా `main.ts` లో సెట్ చేయాలి:

```typescript
// main.ts
import { Logger } from "nestjs-pino";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // NestJS ఇన్‌బిల్ట్ లాగర్ ప్లేస్ లో Pino ని కూర్చోబెడుతున్నాం
  app.useLogger(app.get(Logger));

  await app.listen(3000);
}
```

### 3. సర్వీసెస్/కంట్రోలర్స్ లో వాడే విధానం

```typescript
// users.service.ts
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class UsersService {
  // NestJS Logger ని ఎప్పటిలాగే వాడవచ్చు, కానీ వెనుక రన్ అయ్యేది Pino జేసన్ లాగర్!
  private readonly logger = new Logger(UsersService.name);

  async deleteUser(id: string) {
    // ఈ లాగ్ ప్రింట్ అయినప్పుడు, ప్రస్తుతం రన్ అవుతున్న రిక్వెస్ట్ యొక్క Correlation ID కూడా ఆటోమేటిక్ గా జేసన్ లో యాడ్ అవుతుంది
    this.logger.log(`యూజర్ ${id} ని డిలీట్ చేయడానికి అభ్యర్థన వచ్చింది.`);

    // ఆడిట్ లేదా అదనపు డేటా పంపాలంటే ఇలా రాయాలి (Structured Log)
    this.logger.warn(
      { userId: id, action: "DELETE" },
      "సెన్సిటివ్ ఆపరేషన్ జరుగుతోంది!",
    );
  }
}
```

---

## ☁️ Log Aggregation & CloudWatch (ప్రొడక్షన్ మేనేజ్మెంట్)

AWS Lambda లో మీ లాగ్స్ అన్నీ **CloudWatch Logs** లో పడతాయి. అక్కడ మనం ఈ క్రింది పనులు చేయాలి:

1. **Log Retention Policy:** లాంబ్డా లాగ్స్ ఎప్పటికీ అలాగే ఉంటే బిల్స్ భారీగా వస్తాయి. కాబట్టి ప్రొడక్షన్ లో 14 రోజులు లేదా 30 రోజుల తర్వాత పాత లాగ్స్ ఆటోమేటిక్‌గా డిలీట్ అయ్యేలా (Retention) సెట్ చేయాలి.
2. **CloudWatch Logs Insights:** ఇది CloudWatch లోపల ఉండే ఒక క్వెరీ టూల్. మనం రాసిన జేసన్ లాగ్స్ నుండి ఎర్రర్స్ ని వెతకడానికి ఇది ఉపయోగపడుతుంది.

- _క్వెరీ ఉదాహరణ:_ `fields @timestamp, message | filter level = 'error' | sort @timestamp desc | limit 20`

3. **Log Aggregation (Kinesis / Firehose):** ఒకవేళ మీ కంపెనీ Datadog, ELK Stack (Elasticsearch), లేదా New Relic లాంటి థర్డ్ పార్టీ టూల్స్ వాడుతుంటే, CloudWatch నుండి లాగ్స్ ఆటోమేటిక్‌గా అక్కడికి ఫార్వార్డ్ అయిపోతాయి.

# 23 - Security

NestJS లో **Security (భద్రత)** అనేది కోడ్ రాయడం ఎంత ముఖ్యమో, అంతకంటే ముఖ్యం. ఎందుకంటే మనం ఎంత అద్భుతమైన ఫీచర్లు చేసినా, ఒక్క సెక్యూరిటీ లూప్‌హోల్ (Vulnerability) ఉంటే యాప్ మొత్తం హ్యాక్ అయిపోతుంది.

బ్యాకెండ్ డెవలపర్‌గా మనం **OWASP Top 10** (ప్రపంచవ్యాప్తంగా వెబ్ అప్లికేషన్లలో వచ్చే టాప్ 10 సెక్యూరిటీ రిస్క్స్) ని దృష్టిలో పెట్టుకుని అప్లికేషన్‌ను డిజైన్ చేయాలి. మీ లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడクション సెక్యూరిటీ కాన్సెప్ట్స్‌ను ఇక్కడ క్లియర్ గా చూద్దాం.

---

## 🛡️ 1. HTTP Headers & CORS Protection

మొదట అప్లికేషన్ లెవెల్‌లో బేసిక్ గేట్లను సెక్యూర్ చేయాలి. దీనికోసం `Helmet` మరియు `CORS` ని `main.ts` లో కాన్ఫిగర్ చేస్తాం.

- **Helmet:** ఇది మన యాప్ యొక్క HTTP Headers ని దాచిపెట్టి, బ్రౌజర్ లెవెల్‌లో వచ్చే XSS (Cross-Site Scripting) లాంటి అటాక్స్ నుండి కాపాడుతుంది.
- **CORS (Cross-Origin Resource Sharing):** మన API ని కేవలం మన అధికారిక ఫ్రంటెండ్ డొమైన్ (ఉదా: `https://myfrontend.com`) మాత్రమే యాక్సెస్ చేసేలా లాక్ చేస్తుంది. హ్యాకర్లు వేరే వెబ్‌సైట్ నుండి మన API కి రిక్వెస్ట్ పంపకుండా ఇది అడ్డుకుంటుంది.

```typescript
// main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Helmet తో సెక్యూర్ హెడర్స్ అప్లై చేయడం
  app.use(helmet());

  // 2. CORS కాన్ఫిగరేషన్ (ప్రొడక్షన్ లో తప్పనిసరి)
  app.enableCors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://myfrontend.com" // ప్రొడక్షన్ డొమైన్ మాత్రమే
        : "*", // లోకల్ డెవలప్‌మెంట్‌లో అందరికీ అనుమతి
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
```

---

## 🔐 2. Password Storage: Hashing vs Encryption

చాలా మంది డెవలపర్లు కన్ఫ్యూజ్ అయ్యే ఏరియా ఇది. పాస్‌వర్డ్స్ స్టోర్ చేసేటప్పుడు వాటి మధ్య తేడా స్పష్టంగా తెలియాలి:

- **Encryption (Two-way):** దీనికి ఒక సీక్రెట్ కీ ఉంటుంది. ఎన్‌క్రిప్ట్ చేసిన డేటాని మళ్లీ డిక్రిప్ట్ చేసి ఒరిజినల్ టెక్స్ట్ చూడవచ్చు (ఉదా: `AES-256`). యూజర్ క్రెడిట్ కార్డ్ నంబర్స్ లాంటి వాటికి ఇది వాడతాం.
- **Hashing (One-way):** దీన్ని మళ్లీ వెనక్కి మార్చలేము (No Decryption). పాస్‌వర్డ్స్ కోసం ఎల్లప్పుడూ **Hashing** మాత్రమే వాడాలి. హ్యాకర్ల దగ్గర సూపర్ కంప్యూటర్లు ఉన్నా కూడా క్రాక్ చేయలేనంత స్ట్రాంగ్ అల్గారిథమ్స్ అయిన **`bcrypt`** లేదా **`argon2`** ని వాడటం ప్రొడక్షన్ రూల్.

### Bcrypt తో పాస్‌వర్డ్ హ్యాషింగ్ ఉదాహరణ:

```typescript
import * as bcrypt from "bcrypt";

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12; // ఎంత ఎక్కువ పెంచితే అంత సేఫ్, కానీ సర్వర్ పై లోడ్ పడుతుంది (12 బెస్ట్)
  return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(
  password: string,
  hash: string,
): Promise<boolean> {
  // యూజర్ కొట్టిన పాస్‌వర్డ్, DB లో ఉన్న హ్యాష్ మ్యాచ్ అయ్యాయో లేదో చెక్ చేస్తుంది
  return await bcrypt.compare(password, hash);
}
```

---

## 💉 3. Injection Attacks (SQL & NoSQL)

హ్యాకర్లు ఇన్‌పుట్ బాక్సుల ద్వారా లేదా URL ద్వారా మాలిషియస్ కోడ్‌ను పంపి డేటాబేస్‌ను డిలీట్ లేదా హ్యాక్ చేయడానికి ట్రై చేస్తారు.

- **SQL Injection:** `SELECT * FROM users WHERE email = 'rahul@mail.com' OR '1'='1'` అని హ్యాకర్ పంపితే, ఇండెక్స్ మొత్తం లీక్ అవుతుంది.
- **పరిష్కారం:** మనం 5వ టాపిక్‌లో నేర్చుకున్న **`ValidationPipe` (with whitelist: true)** వాడితే, DTO లో లేని చెత్త డేటా లోపలికి రాదు. అలాగే **TypeORM/Prisma** లాంటి ORM లు ఆటోమేటిక్‌గా `Parameterized Queries` వాడుతాయి కాబట్టి SQL Injection జరగకుండా 100% కాపాడతాయి.

---

## 🪙 4. JWT Security Best Practices

JSON Web Tokens (JWT) వాడేటప్పుడు ఈ క్రింది జాగ్రత్తలు తప్పకుండా తీసుకోవాలి:

1. **Never put sensitive data in payload:** JWT పేలోడ్ కేవలం బేస్-64 ఎన్‌కోడ్ అవుతుంది (ఎవరైనా ఓపెన్ చేసి చూడవచ్చు). కాబట్టి అందులో పాస్‌వర్డ్‌లు, యూజర్ ఫోన్ నంబర్లు పెట్టకూడదు. కేవలం `userId`, `role` లాంటివి మాత్రమే పెట్టాలి.
2. **Short-lived Access Tokens:** యాక్సెస్ టోకెన్ ఎక్స్‌పైరీ టైమ్ (TTL) కేవలం 15 నిమిషాలు మాత్రమే ఉండాలి.
3. **Strong Secret Key:** JWT ని సైన్ చేయడానికి వాడే కీ చాలా కాంప్లెక్స్ గా ఉండాలి మరియు దాన్ని ఎట్టి పరిస్థితుల్లోనూ **AWS Secrets Manager** లోనే దాచాలి.

---

> 💡 **Rate Limiting (DDoS ప్రొడక్షన్ టిప్):** హ్యాకర్లు స్క్రిప్ట్స్ రాసి మన లాగిన్ API ని సెకనుకు లక్ష సార్లు హిట్ చేసి సర్వర్ క్రాష్ చేయకుండా ఉండటానికి, NestJS లో `@nestjs/throttler` వాడి "ఒక ఐపీ నుండి నిమిషానికి 10 సార్ల కంటే ఎక్కువ లాగిన్ ట్రై చేస్తే బ్లాక్ చెయ్" అని లిమిట్ సెట్ చేయాలి.

# 24 - Performance

NestJS మరియు PostgreSQL లలో **Performance (పనితీరును మెరుగుపరచడం)** అనేది మీ అప్లికేషన్‌ను తక్కువ ఖర్చుతో (Low Server Cost), అత్యంత వేగంగా (High Speed) రన్ చేయడానికి ఉపయోగపడే కీలకమైన ఘట్టం. ముఖ్యంగా ప్రొడక్షన్‌లో వేలమంది యూజర్లు ఒకేసారి యాప్‌ను వాడుతున్నప్పుడు సిస్టమ్ హ్యాంగ్ అవ్వకుండా ఉండటానికి ఈ ఆప్టిమైజేషన్స్ సహాయపడతాయి.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడクション పెర్ఫార్మెన్స్ స్ట్రాటజీలను ఇక్కడ ప్రాక్టికల్‌గా చూద్దాం.

---

## 🏊 1. Connection Pooling (డేటాబేస్ కనెక్షన్స్ ఆప్టిమైజేషన్)

ప్రతిసారి ఒక API రిక్వెస్ట్ వచ్చినప్పుడు డేటాబేస్‌కు కొత్తగా కనెక్ట్ అవ్వడం (Handshake చేయడం) చాలా స్లో ప్రాసెస్. దీనివల్ల సర్వర్ పై లోడ్ పడుతుంది.

- **పరిష్కారం:** **Connection Pooling** ఉపయోగించడం. ఇది డేటాబేస్‌కు ముందే కొన్ని కనెక్షన్‌లను (ఉదాహరణకు 10 లేదా 20) క్రియేట్ చేసి రెడీగా ఉంచుతుంది (Pool). రిక్వెస్ట్ రాగానే ఒక కనెక్షన్ వాడుకుని, పని అవ్వగానే దాన్ని మళ్లీ పూల్‌లో పెట్టేస్తుంది.
- **TypeORM/Prisma లో సెటప్:** `database.config.ts` లో `extra` పారామీటర్ ద్వారా దీన్ని కంట్రోల్ చేయవచ్చు.

```typescript
// database.config.ts (TypeORM)
export const databaseConfig = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  extra: {
    max: 20, // ⚡ పూల్‌లో గరిష్టంగా ఉండే కనెక్షన్స్ సంఖ్య
    idleTimeoutMillis: 30000, // ఖాళీగా ఉంటే 30 సెకన్లలో కనెక్షన్ క్లోజ్ అవుతుంది
    connectionTimeoutMillis: 2000, // 2 సెకన్లలో కనెక్షన్ దొరకకపోతే ఎర్రర్ ఇస్తుంది
  },
};
```

---

## 🌊 2. Streaming (భారీ డేటాను ముక్కలు ముక్కలుగా పంపడం)

డేటాబేస్ నుండి లక్ష రికార్డ్‌లు ఉన్న ఒక పెద్ద రిపోర్ట్‌ను లేదా ఫైల్‌ను డౌన్‌లోడ్ చేయాల్సి వచ్చినప్పుడు, సాధారణ `res.json(data)` వాడితే సర్వర్ మెమరీ మొత్తం నిండిపోయి (`JavaScript heap out of memory`) క్రాష్ అవుతుంది.

- **పరిష్కారం:** **Streaming** వాడటం. ఇది డేటాని ఒకేసారి మెమరీలోకి లోడ్ చేయకుండా, డేటాబేస్ నుండి వచ్చే కొద్దీ క్లయింట్‌కి పైప్ (Pipe) లైన్ ద్వారా పంపుతూ ఉంటుంది.

```typescript
// report.controller.ts
import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { DataSource } from "typeorm";

@Controller("report")
export class ReportController {
  constructor(private dataSource: DataSource) {}

  @Get("download")
  async downloadLargeReport(@Res() res: Response) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=report.csv");

    // TypeORM QueryRunner ద్వారా స్ట్రీమ్ క్రియేట్ చేయడం
    const queryRunner = this.dataSource.createQueryRunner();
    const stream = await queryRunner.stream(
      "SELECT * FROM large_transaction_table",
    );

    // డేటాబేస్ నుండి రోస్ వచ్చే కొద్దీ క్లయింట్ రెస్పాన్స్‌కి స్ట్రీమ్ (Stream) అవుతుంది
    stream.on("data", (row) => {
      res.write(`${row.id},${row.amount},${row.createdAt}\n`);
    });

    stream.on("end", () => {
      res.end();
      queryRunner.release();
    });
  }
}
```

---

## 📦 3. Lazy Loading vs Eager Loading (ORM Optimization)

డేటాబేస్ రిలేషన్స్ (ఉదాహరణకు: User has many Posts) వాడేటప్పుడు చాలా జాగ్రత్తగా ఉండాలి.

- **Eager Loading:** యూజర్ డేటా అడిగిన ప్రతిసారీ వెనుక ఉన్న వందల పోస్ట్‌ల డేటాని కూడా లాక్కురావడం. ఇది చాలా స్లో అవుతుంది.
- **Lazy Loading / Explicit Loading:** కేవలం అవసరమైనప్పుడు మాత్రమే (Explicit గా అడిగినప్పుడు) జాయిన్ క్వెరీలు రాయడం. దీనివల్ల అనవసరమైన డేటా లోడింగ్ తగ్గి నెట్‌వర్క్ స్పీడ్ పెరుగుతుంది.

---

## 🏎️ 4. Compression (రెస్పాన్స్ సైజ్ తగ్గించడం)

మనం 11వ టాపిక్‌లో చూసినట్టు, ఎక్స్‌ప్రెస్ `compression` మిడిల్‌వేర్ వాడటం వల్ల మన జేసన్ (JSON) డేటా సైజ్ 80% వరకు తగ్గిపోతుంది (Gzip/Brotli కంప్రెషన్). దీనివల్ల ఫ్రంటెండ్‌లో డేటా చాలా త్వరగా డిస్‌ప్లే అవుతుంది.

---

## 🏋️ 5. Profiling & Load Testing (సర్వర్ బలాన్ని పరీక్షించడం)

మన యాప్ ప్రొడక్షన్‌కి వెళ్లేముందు ఎంత లోడ్‌ను తట్టుకోగలదో లైవ్‌లో టెస్ట్ చేయాలి.

- **Load Testing (Artillery / k6):** `k6` లాంటి మోడరన్ టూల్స్ వాడి ఒకేసారి 5000 మంది వర్చువల్ యూజర్లు (Virtual Users) మన API ని హిట్ చేస్తే సర్వర్ రెస్పాన్స్ టైమ్ ఎలా ఉందో టెస్ట్ చేయవచ్చు.
- **Profiling (Clinic.js / Node.js Inspect):** ఒకవేళ మన కోడ్‌లో ఎక్కడైనా మెమరీ లీక్ (Memory Leak) ఉండి రామ్ (RAM) నిరంతరం పెరిగిపోతుంటే, `Clinic.js` అనే టూల్ వాడి గ్రాఫ్‌ల రూపంలో ఏ ఫంక్షన్ వల్ల మెమరీ వేస్ట్ అవుతుందో ఈజీగా కనిపెట్టవచ్చు.

---

> 💡 **పెర్ఫార్మెన్స్ గోల్డెన్ రూల్:** మొదట **Database Indexes** సెట్ చేయాలి, తర్వాత **Redis Caching** అప్లై చేయాలి, చివరగా కాంప్లెక్స్ డేటా కోసం **Streaming** వాడాలి. ఈ మూడు పక్కాగా ఉంటే మీ యాప్ ఎప్పటికీ స్లో అవ్వదు.

# 25 - Architecture

NestJS లో **Architecture (ఆర్కిటెక్చర్) మరియు Design Patterns (డిజైన్ ప్యాటర్న్స్)** అనేవి మీ కోడ్‌ను కేవలం పని చేసేలా రాయడం కాకుండా, భవిష్యత్తులో ఎంత పెద్ద మార్పులు వచ్చినా ఈజీగా మేనేజ్ చేసేలా, టెస్ట్ చేసేలా మరియు స్కేల్ చేసేలా డిజైన్ చేయడానికి ఉపయోగపడతాయి.

NestJS ఫ్రేమ్‌వర్క్ డిజైనే అంతర్గతంగా **Architecture-first** మైండ్‌సెట్‌తో ఉంటుంది (ఉదాహరణకు NestJS లో ఉండే `Injectable` అనేది **Dependency Injection / Strategy Pattern** కి ఒక రూపం).

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ ఆర్కిటెక్చరల్ టాపిక్స్ మరియు గ్యాంగ్ ఆఫ్ ఫోర్ (GoF) డిజైన్ ప్యాటర్న్స్‌ను ఇక్కడ సులభంగా అర్థం చేసుకుందాం.

---

## 🏛️ 1. Architectural Styles: Clean, Hexagonal & DDD

ఈ మూడు ఆర్కిటెక్చర్ల యొక్క ముఖ్య ఉద్దేశం ఒక్కటే: **"మీ బిజినెస్ లాజిక్ (Core Logic) అనేది మీరు వాడే డేటాబేస్ (TypeORM/Prisma) లేదా ఎక్స్‌టర్నల్ ఫ్రేమ్‌వర్క్ పైన ఆధారపడకూడదు."**

### Domain-Driven Design (DDD) & Hexagonal Architecture:

దీని ప్రకారం కోడ్‌ను పొరలుగా విడగొడతాం:

- **Domain (Core):** మీ అప్లికేషన్ యొక్క అసలైన బిజినెస్ రూల్స్, ఎంటిటీలు ఇక్కడ ఉంటాయి. దీనికి NestJS లేదా TypeORM తో ఎలాంటి సంబంధం ఉండదు (Pure TypeScript).
- **Ports (Interfaces):** లోపలి డొమైన్ బయటి ప్రపంచంతో మాట్లాడటానికి వాడే గేట్లు (ఉదా: `IUserRepository` ఇంటర్‌ఫేస్).
- **Adapters (Implementation):** బయటి టూల్స్. ఉదాహరణకు, ఈరోజు మీరు PostgreSQL వాడి రేపు MongoDB కి మారాలనుకుంటే, కేవలం అడాప్టర్ మారిస్తే చాలు, లోపల ఉన్న బిజినెస్ లాజిక్ ఫైల్స్ అస్సలు ముట్టుకోవాల్సిన అవసరం లేదు.

---

## 🛠️ 2. Core Design Patterns (ప్రాక్టికల్ ప్రొడక్షన్ ఉదాహరణలు)

### A. Strategy Pattern (విభిన్న పద్ధతులను మార్చడం)

ఒక అప్లికేషన్‌లో పేమెంట్స్ చేయడానికి Stripe, PayPal, Razorpay లాంటి మల్టిపుల్ గేట్‌వేస్ ఉన్నప్పుడు ఈ ప్యాటర్న్ వాడుతాం.

```typescript
// 1. ఇంటర్‌ఫేస్ (Port) డిఫైన్ చేయడం
export interface PaymentStrategy {
  pay(amount: number): Promise<boolean>;
}

// 2. స్ట్రాటజీ 1: Stripe Implementation
export class StripePayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`Stripe ద్వారా $${amount} ప్రాసెస్ అయింది.`);
    return true;
  }
}

// 3. స్ట్రాటజీ 2: PayPal Implementation
export class PayPalPayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`PayPal ద్వారా $${amount} ప్రాసెస్ అయింది.`);
    return true;
  }
}
```

**NestJS లో వాడే విధానం (Context):**

```typescript
@Injectable()
export class PaymentService {
  private strategy: PaymentStrategy;

  // రన్‌టైమ్‌లో యూజర్ ఛాయిస్ ని బట్టి స్ట్రాటజీని మారుస్తాం
  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  async executePayment(amount: number) {
    return this.strategy.pay(amount);
  }
}
```

---

### B. Factory Pattern (ఆబ్జెక్ట్స్ క్రియేషన్ సులభతరం చేయడం)

యూజర్ అడిగిన ఆప్షన్ ని బట్టి పైన చూసిన స్ట్రాటజీ ఆబ్జెక్ట్‌ను క్రియేట్ చేసి ఇచ్చే బాధ్యత ఈ ఫ్యాక్టరీది.

```typescript
@Injectable()
export class PaymentFactory {
  createPaymentMethod(method: string): PaymentStrategy {
    if (method === "stripe") return new StripePayment();
    if (method === "paypal") return new PayPalPayment();
    throw new Error("సరిపోలని పేమెంట్ పద్ధతి!");
  }
}
```

---

### C. Builder Pattern (కాంప్లెక్స్ ఆబ్జెక్ట్స్ బిల్డింగ్)

ఒక ఆబ్జెక్ట్ క్రియేట్ చేయడానికి 10 పారామీటర్లు పంపాల్సి వచ్చినప్పుడు కన్ఫ్యూజ్ అవ్వకుండా, చదవడానికి వీలుగా స్టెప్-బై-స్టెప్ బిల్డ్ చేయడానికి ఇది ఉపయోగపడుతుంది (ఉదా: SQL Query Builder).

```typescript
export class InvoiceBuilder {
  private invoice = { id: 0, items: [], tax: 0 };

  constructor(id: number) {
    this.invoice.id = id;
  }

  addItem(name: string, price: number) {
    this.invoice.items.push({ name, price });
    return this; // 'this' రిటర్న్ చేయడం వల్ల చైనింగ్ (Chaining) సాధ్యమవుతుంది
  }

  setTax(rate: number) {
    this.invoice.tax = rate;
    return this;
  }

  build() {
    return this.invoice;
  }
}

// వాడకం:
const myInvoice = new InvoiceBuilder(101)
  .addItem("Laptop", 50000)
  .addItem("Mouse", 1000)
  .setTax(18)
  .build();
```

---

### D. Singleton Pattern (ఒక్కటే ఇన్‌స్టాన్స్)

అప్లికేషన్ మొత్తం మీద ఒక క్లాస్‌కు ఒకే ఒక్క ఆబ్జెక్ట్ (Instance) మాత్రమే క్రియేట్ అవ్వాలి అనుకుంటే దీన్ని వాడుతాం (ఉదా: Database Connection Pool). NestJS లో ప్రతి `Provider` లేదా `Service` డిఫాల్ట్‌గా **Singleton Scope** లోనే రన్ అవుతుంది. అంటే యాప్ మొత్తం మీద ఆ సర్వీస్ ఒక్కసారే మెమరీలోకి లోడ్ అవుతుంది.

### E. Mediator Pattern (మధ్యవర్తిత్వం)

మనం 17వ టాపిక్‌లో చూసిన **CQRS (`CommandBus` / `QueryBus`)** అనేది **Mediator Pattern** కి పక్కా ఉదాహరణ. కంట్రోలర్ నేరుగా హ్యాండ్లర్‌ని పిలవకుండా, మధ్యలో ఉండే ఒకే ఒక్క బస్ (Mediator) కి మెసేజ్ పంపుతుంది, అది కరెక్ట్ హ్యాండ్లర్‌కి రూట్ చేస్తుంది.

---

> 💡 **ఆర్కిటెక్చర్ సమ్మరీ:** పెద్ద పెద్ద ఎంటర్‌ప్రైజ్ యాప్స్ రాసేటప్పుడు ఈ డిజైన్ ప్యాటర్న్స్ వాడటం వల్ల కోడ్‌లో రీ-యూజబిలిటీ పెరుగుతుంది, మరియు టెస్టింగ్ చేయడం చాలా ఈజీ అవుతుంది.

# 26 - DevOps

NestJS అప్లికేషన్‌ను డెవలప్ చేయడం ఒక ఎత్తైతే, దాన్ని ప్రొడక్షన్‌లోకి సురక్షితంగా, ఆటోమేటిక్‌గా పంపడం (Deploy చేయడం) మరియు నిరంతరం పర్యవేక్షించడం (Monitoring) ఇంకొక ఎత్తు. **DevOps** ఫేజ్ ఒక డెవలపర్‌ను ప్రొడక్షన్-రెడీ ఇంజనీర్‌గా మారుస్తుంది.

ముఖ్యంగా మీరు **AWS Lambda** మరియు **Serverless ఆర్కిటెక్చర్** వాడుతున్నారు కాబట్టి, ఈ ఫేజ్‌లో మీరు ఎక్కువగా ఫోకస్ చేయవలసిన ప్రొడక్షన్ టూల్స్ మరియు కాన్సెప్ట్స్‌ను ఇక్కడ క్లియర్ గా చూద్దాం.

---

## 🏗️ 1. Infrastructure as Code (IaC): AWS CDK vs Serverless Framework

సర్వర్‌లెస్ అప్లికేషన్లలో S3 బకెట్స్, API Gateway, AWS Lambda ఫంక్షన్స్ వంటి రిసోర్స్‌లను AWS కన్సోల్‌లోకి వెళ్లి మాన్యువల్‌గా క్రియేట్ చేయకూడదు. దానికి బదులుగా కోడ్ రూపంలో రాయాలి (IaC).

- **Serverless Framework (SLS):** ఇది చాలా సులభంగా ఉంటుంది. ఒక `serverless.yml` ఫైల్‌లో కాన్ఫిగరేషన్ రాస్తే చాలు, మన NestJS యాప్‌ను లాంబ్డాలోకి డిప్లాయ్ చేస్తుంది.
- **AWS CDK (Cloud Development Kit):** ఇది మరింత అడ్వాన్స్‌డ్ ఎంటర్‌ప్రైజ్ పద్ధతి. TypeScript కోడ్ ఉపయోగించి మనకు కావలసిన AWS ఇన్‌ఫ్రాస్ట్రక్చర్‌ను డిజైన్ చేయవచ్చు.

### `serverless.yml` ఉదాహరణ:

```yaml
service: nestjs-lambda-app

plugins:
  - serverless-offline # లోకల్‌గా టెస్ట్ చేసుకోవడానికి

provider:
  name: aws
  runtime: nodejs20.x
  region: ap-south-1
  environment:
    NODE_ENV: production

functions:
  main:
    handler: dist/lambda.handler # మనం 20వ టాపిక్‌లో రాసిన లాంబ్డా హ్యాండ్లర్ ఫైల్
    events:
      - http:
          path: /{proxy+}
          method: any
```

---

## 🐋 2. Docker & Containerization (ఒకవేళ లాంబ్డా కాకుండా ECS/EKS కి వెళ్తే)

ఒకవేళ మీ అప్లికేషన్ చాలా పెద్దదై, కోల్డ్ స్టార్ట్ సమస్యలు లేకుండా ఎల్లప్పుడూ రన్ అవ్వాలి అనుకుంటే, దాన్ని Docker కంటైనర్‌గా మార్చి **AWS ECS (Fargate)** లేదా **Kubernetes (EKS)** లో రన్ చేస్తారు.

### ప్రొడక్షన్-రెడీ Multi-stage NestJS Dockerfile:

ఇది ఇమేజ్ సైజ్‌ను విపరీతంగా తగ్గించి, సెక్యూరిటీని పెంచుతుంది.

```dockerfile
# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# ప్రొడక్షన్‌కి కావలసిన node_modules మాత్రమే ఇన్‌స్టాల్ చేస్తుంది (No devDependencies)
RUN npm ci --only=production
COPY --from=builder /dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]

```

---

## 🚀 3. CI/CD Pipeline with GitHub Actions

మనం GitHub లో కోడ్‌ను `main` బ్రాంచ్‌కి పుష్ చేయగానే, అది ఆటోమేటిక్‌గా టెస్ట్‌లు రన్ చేసి, బిల్డ్ చేసి, AWS లో డిప్లాయ్ అవ్వాలి. దీనినే **Continuous Integration & Continuous Deployment (CI/CD)** అంటారు.

### `.github/workflows/deploy.yml` ఉదాహరణ:

```yaml
name: Deploy NestJS App to AWS Lambda

on:
  push:
    branches:
      - main # కేవలం మెయిన్ బ్రాంచ్‌కి పుష్ అయినప్పుడు మాత్రమే రన్ అవుతుంది

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-node: "20"

      - name: Install Dependencies & Build
        run: |
          npm ci
          npm run build

      - name: Run Tests
        run: npm run test

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Deploy using Serverless Framework
        run: |
          npm install -g serverless
          serverless deploy
```

---

## 📊 4. Monitoring & Observability (నిరంతర పర్యవేక్షణ)

యాప్ లైవ్‌లోకి వెళ్ళాక అది ఎలా పనిచేస్తుందో ట్రాక్ చేయడానికి ఈ 3 పిల్లర్స్ (Metrics, Logs, Traces) చాలా ముఖ్యం:

1. **AWS CloudWatch (Logs & Metrics):** లాంబ్డా ఎర్రర్స్, మెమరీ యూసేజ్, మరియు API రెస్పాన్స్ టైమ్స్ (Latency) ని గ్రాఫ్‌ల రూపంలో చూడవచ్చు. అలర్ట్స్ (CloudWatch Alarms) సెట్ చేస్తే, యాప్‌లో 500 Errors పెరిగినప్పుడు మన Slack లేదా ఈమెయిల్ కి మెసేజ్ వస్తుంది.
2. **AWS X-Ray (Distributed Tracing):** ఒక రిక్వెస్ట్ API Gateway నుండి బయలుదేరి లాంబ్డాకి వెళ్లి, అక్కడి నుండి PostgreSQL డేటాబేస్‌కు వెళ్ళడానికి ఏ ఏ లేయర్‌లో ఎంతెంత సమయం పట్టిందో ప్రతి మిల్లీసెకన్‌ను ట్రాక్ చేసి మ్యాప్ రూపంలో చూపిస్తుంది. దీనివల్ల బాటిల్‌నెక్స్ (Bottlenecks - స్లో కోడ్) ని ఈజీగా కనిపెట్టవచ్చు.

---

> 🎉 **అభినందనలు!** మీరు NestJS కోర్స్ రోడ్‌మ్యాప్‌లోని 1 నుండి 26 టాపిక్స్ (Basics నుండి DevOps & AWS వరకు) విజయవంతంగా పూర్తి చేశారు. ఈ నాలెడ్జ్ మిమ్మల్ని ఒక కంప్లీట్ సీనియర్ NestJS/Backend డెవలపర్‌గా నిలబెడుతుంది.

# 27 - API Design

NestJS లో ఒక అద్భుతమైన, ప్రొడక్షన్-రెడీ **API ని డిజైన్ చేయడం (API Design)** అనేది కేవలం డేటాని రిటర్న్ చేయడం మాత్రమే కాదు; ఆ API ఎంత సులభంగా అర్థమవుతోంది, ఎంత సెక్యూర్ గా ఉంది, మరియు ఎంత స్కేలబుల్ గా ఉంది అనే విషయాలపై ఆధారపడి ఉంటుంది.

ముఖ్యంగా ఇతర డెవలపర్లు (Frontend or Third-party Developers) మీ API ని వాడుకునేటప్పుడు వారికి ఎలిగెంట్ ఎక్స్పీరియన్స్ ఇవ్వడానికి మీ లిస్ట్‌లో ఉన్న టాపిక్స్ చాలా ఉపయోగపడతాయి. వాటిని క్లియర్ గా చూద్దాం.

---

## 🛣️ 1. API Versioning (వర్షనింగ్ - మార్పులను తట్టుకోవడం)

కాలక్రమేణా మన API బిజినెస్ లాజిక్ మారవచ్చు. పాత యాప్స్ బ్రేక్ అవ్వకుండా, కొత్త ఫీచర్స్ ఇవ్వడానికి API Versioning (e.g., `v1`, `v2`) వాడాలి. NestJS లో దీనికి ఇన్‌బిల్ట్ సపోర్ట్ ఉంది.

### `main.ts` లో ఎనేబుల్ చేయడం:

```typescript
// main.ts
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // URI ఆధారిత వర్షనింగ్ ఎనేబుల్ చేయడం (e.g., /v1/users)
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(3000);
}
```

### కంట్రోలర్ లో వాడే విధానం:

```typescript
@Controller({
  path: "users",
  version: "1", // ఇది /v1/users రౌట్ అవుతుంది
})
export class UsersV1Controller {
  @Get()
  findAll() {
    return "This returns v1 users";
  }
}
```

---

## 📖 2. Swagger & OpenAPI Documentation (ఆటోమేటిక్ డాక్యుమెంటేషన్)

ఫ్రంటెండ్ డెవలపర్లకి మనం ఏ రౌట్స్ రాశాం, ఏ హెడర్స్ పంపాలి అని విడిగా నోట్స్‌లో రాసి ఇవ్వాల్సిన అవసరం లేదు. NestJS మన కోడ్ నుండే ఆటోమేటిక్‌గా ఒక అద్భుతమైన ఇంటరాక్టివ్ వెబ్‌పేజీ (**Swagger UI**) ని జనరేట్ చేస్తుంది.

### `main.ts` లో సెటప్:

```typescript
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

// bootstrap ఫంక్షన్ లోపల:
const config = new DocumentBuilder()
  .setTitle("My NestJS API")
  .setDescription("అప్లికేషన్ యొక్క అధికారిక API డాక్యుమెంటేషన్")
  .setVersion("1.0")
  .addBearerAuth() // JWT సెక్యూరిటీ కోసం
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup("api/docs", app, document); // /api/docs లో ఓపెన్ అవుతుంది
```

---

## 📉 3. Pagination, Filtering, & Sorting (ప్రొడక్షన్ క్వెరీ డిజైన్)

డేటాబేస్ లో వేల రికార్డ్స్ ఉన్నప్పుడు `GET /products` అనగానే అన్నింటినీ ఒకేసారి పంపితే యాప్ స్లో అవుతుంది. అందుకే క్లయింట్ అడిగిన ముక్కలను మాత్రమే పంపాలి.

- **Pagination (పేజీల విభజన):** `limit` (ఎన్ని కావాలి) మరియు `page` (ఎన్నో పేజీ) లేదా `offset` పంపడం.
- **Filtering:** `status=active` లేదా `category=electronics` అని ఫిల్టర్ చేయడం.
- **Sorting:** `sortBy=createdAt&order=DESC` అని ఆర్డర్ సెట్ చేయడం.

### కంట్రోలర్ DTO మరియు లాజిక్ ఎలా ఉంటుందంటే:

```typescript
// dto/pagination-query.dto.ts
import { IsOptional, IsInt, Min } from "class-validator";
import { Type } from "class-transformer";

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;
}
```

---

## 🔄 4. Advanced Patterns

### Idempotency (ఐడెంపోటెన్సీ)

మనం 15వ టాపిక్‌లో చూసినట్టు, నెట్‌వర్క్ ఫెయిల్యూర్ వల్ల ఫ్రంటెండ్ నుండి ఒకే పేమెంట్ రిక్వెస్ట్ డూప్లికేట్‌గా రెండుసార్లు వస్తే, సర్వర్ లోపల ఒకే ఒక్కసారి మాత్రమే యాక్షన్ జరిగి, రెండోసారి పాత రెస్పాన్స్‌నే తిప్పి పంపాలి. దీనికోసం క్లయింట్ నుండి వచ్చే `Idempotency-Key` హెడర్‌ను Redis లో చెక్ చేస్తాం.

### HATEOAS (Hypermedia As The Engine Of Application State)

ఇది REST API డిజైన్‌లో అత్యున్నత స్థాయి (Level 3 of Richardson Maturity Model). ఒక API రెస్పాన్స్ ఇచ్చినప్పుడు, ఆ డేటాతో పాటు... క్లయింట్ తర్వాత చేయబోయే పనుల యొక్క URL లింక్స్‌ను కూడా రెస్పాన్స్ లోనే పంపడం.

```json
{
  "id": 101,
  "name": "Laptop",
  "price": 50000,
  "_links": {
    "self": { "href": "/v1/products/101" },
    "delete": { "href": "/v1/products/101", "method": "DELETE" },
    "update": { "href": "/v1/products/101", "method": "PATCH" }
  }
}
```

**లాభం:** ఫ్రంటెండ్ డొమైన్‌కి డిలీట్ లేదా అప్‌డేట్ చేయడానికి URL లు ఎలా రాయాలో ముందే తెలియక్కర్లేదు, సర్వర్ ఇచ్చే లింక్స్ వాడుకుంటే సరిపోతుంది.

---

> 💡 **డిజైన్ టిప్:** ఎల్లప్పుడూ API రెస్పాన్స్ స్టేటస్ కోడ్స్ ని కరెక్ట్ గా వాడండి. డేటా సక్సెస్ ఫుల్ గా క్రియేట్ అయితే `201 Created`, కేవలం అప్‌డేట్ లేదా డిలీట్ సక్సెస్ అయితే `200 OK` లేదా `204 No Content` వాడటం ఉత్తమ పద్ధతి.

# 28 - GraphQL

NestJS లో **GraphQL** అనేది REST APIలకి ఒక అద్భుతమైన ప్రత్యామ్నాయం. REST APIలలో ఉండే అతిపెద్ద సమస్యలు **Over-fetching** (అవసరం లేని డేటా కూడా రావడం) మరియు **Under-fetching** (ఒక స్క్రీన్ లోడ్ అవ్వడానికి మల్టిపుల్ APIలు హిట్ చేయాల్సి రావడం).

GraphQL ద్వారా క్లయింట్ (Frontend) తనకు ఏ ఫీల్డ్స్ కావాలో స్పష్టంగా అడగవచ్చు, సర్వర్ కేవలం ఆ డేటాని మాత్రమే రిటర్న్ చేస్తుంది. NestJS మనకు **Apollo Server** తో టైట్ ఇంటెగ్రేషన్‌ను అందిస్తుంది.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ GraphQL టాపిక్స్‌ను సులభంగా అర్థం చేసుకుందాం.

---

## 🏗️ 1. Core Concepts (ముఖ్యమైన భాగాలు)

NestJS GraphQL లో REST లోని కంట్రోలర్స్, రౌట్స్ స్థానంలో ఈ క్రిందివి వస్తాయి:

- **Schema:** మన API లో ఎలాంటి డేటా టైప్స్ ఉన్నాయి, ఏ ఏ క్వెరీలు అందుబాటులో ఉన్నాయో చెప్పే బ్లూప్రింట్.
- **Query:** డేటాని రీడ్ (Fetch) చేయడానికి వాడేది (REST లో `GET` లాంటిది).
- **Mutation:** డేటాని క్రియేట్, అప్‌డేట్, లేదా డిలీట్ చేయడానికి వాడేది (REST లో `POST`, `PUT`, `DELETE` లాంటివి).
- **Subscription:** వెబ్‌సాకెట్స్ (WebSockets) ద్వారా రియల్-టైమ్ డేటా అప్‌డేట్స్ పంపడానికి వాడేది (ఉదాహరణకు: Chat messages).

---

## 💻 2. NestJS Code-First GraphQL ఇంప్లిమెంటేషన్

NestJS లో **Code-First** పద్ధతి చాలా పాపులర్. అంటే మనం కేవలం TypeScript క్లాసెస్ మరియు డెకరేటర్స్ రాస్తే చాలు, NestJS ఆటోమేటిక్‌గా వెనుక GraphQL Schema ఫైల్‌ను జనరేట్ చేస్తుంది.

### A. Object Type (Model)

```typescript
// posts/models/post.model.ts
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType() // ఇది GraphQL Schema లో 'Post' టైప్ గా మారుతుంది
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;
}
```

### B. Resolver (REST Controller లాంటిది)

```typescript
// posts/posts.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { Post } from "./models/post.model";

@Resolver(() => Post)
export class PostsResolver {
  // 1. QUERY: ఒక సింగిల్ పోస్ట్ ని తెచ్చుకోవడం
  @Query(() => Post, { name: "post" })
  async getPost(@Args("id", { type: () => Int }) id: number): Promise<Post> {
    return {
      id,
      title: "NestJS GraphQL ప్రొడక్షన్ గైడ్",
      content: "అద్భుతమైన ఫీచర్!",
    };
  }

  // 2. MUTATION: కొత్త పోస్ట్ ని క్రియేట్ చేయడం
  @Mutation(() => Post)
  async createPost(
    @Args("title") title: string,
    @Args("content", { nullable: true }) content: string,
  ): Promise<Post> {
    return { id: Math.floor(Math.random() * 100), title, content };
  }
}
```

---

## 🚀 3. Expert Production Patters (DataLoader & Federation)

ప్రొడక్షన్ లెవెల్స్ లో GraphQL వాడేటప్పుడు ఇంటర్వ్యూలలో కచ్చితంగా అడిగే రెండు అడ్వాన్స్‌డ్ టాపిక్స్ ఇవి:

### A. DataLoader (N+1 Query ప్రాబ్లమ్ సొల్యూషన్)

GraphQL లో ఒక పెద్ద ఛాలెంజ్ **N+1 Query Problem**. ఉదాహరణకు, మీరు 10 పోస్ట్‌లను ఫెచ్ చేసినప్పుడు, ప్రతి పోస్ట్‌కు సంబంధించిన యూజర్ (Author) డేటా కావాలని అడిగితే, GraphQL అంతర్గతంగా ప్రతి పోస్ట్‌కు ఒకసారి... మొత్తం 10 సార్లు డేటాబేస్‌కు వెళ్తుంది (1 Main Query + N Sub-queries). దీనివల్ల DB క్రాష్ అవుతుంది.

- **పరిష్కారం:** **DataLoader** వాడటం. ఇది ఆ 10 ఇండివిడ్యువల్ రిక్వెస్ట్‌లను బ్యాచ్ (Batch) చేసి, డేటాబేస్‌కు `SELECT * FROM users WHERE id IN (1,2,3...)` అని **ఒకే ఒక్క క్వెరీ** పంపుతుంది. దీనివల్ల పర్ఫార్మెన్స్ 10 రెట్లు పెరుగుతుంది.

### B. GraphQL Federation (మైక్రోసర్వీసెస్ కి అల్టిమేట్)

ఒకవేళ మీ కంపెనీ మైక్రోసర్వీసెస్ ఆర్కిటెక్చర్ వాడుతుంటే, `Users Service` కి ఒక GraphQL, `Orders Service` కి ఒక GraphQL విడిగా ఉంటాయి. ఫ్రంటెండ్ డెవలపర్ ఈ అన్ని సర్వీసెస్ కోసం వేర్వేరు GraphQL ఎండ్‌పాయింట్స్ వాడటం కష్టం.

- **పరిష్కారం (Apollo Federation):** అన్ని మైక్రోసర్వీసెస్ యొక్క GraphQL స్కీమాలను కలిపి, క్లయింట్‌కు ఒకే ఒక్క గేట్‌వే ఎండ్‌పాయింట్ లాగా చూపించడాన్ని **Federation** అంటారు. దీనివల్ల క్లయింట్ ఒకే క్వెరీలో యూజర్ డేటాని మరియు అతని ఆర్డర్ డేటాని కలిపి ఒకేసారి తెచ్చుకోవచ్చు.

---

> 💡 **చిట్కా:** NestJS లో GraphQL ఇంప్లిమెంటేషన్ చేసేటప్పుడు `GraphQLModule.forRoot({ autoSchemaFile: join(process.cwd(), 'src/schema.gql') })` అని సెట్ చేస్తే, మీరు రాసే ప్రతి `@Query` ఆటోమేటిక్‌గా ఒక ఫైల్‌లో రికార్డ్ అవుతుంది.

# 29 - WebSockets

NestJS లో **WebSockets** అనేది క్లయింట్ (Frontend) మరియు సర్వర్ (Backend) మధ్య నిరంతరం కమ్యూనికేషన్ జరగడానికి వాడే ఒక అద్భుతమైన టెక్నాలజీ. సాధారణ REST API లలో క్లయింట్ అడిగితేనే సర్వర్ రెస్పాన్స్ ఇస్తుంది (One-way). కానీ వెబ్‌సాకెట్స్‌లో ఒకసారి కనెక్షన్ ఏర్పడ్డాక, రెండు వైపులా ఎప్పుడైనా డేటాని పంపుకోవచ్చు (**Bi-directional, Real-time**).

ఉదాహరణకు: **Chat Applications, Live Notifications, Uber లాంటి Live Location Tracking** యాప్స్ డిజైన్ చేయడానికి ఇది వాడతాం. NestJS లో దీనికోసం మోస్ట్ పాపులర్ లైబ్రరీ అయిన **Socket.IO** కి ఇన్‌బిల్ట్ సపోర్ట్ ఉంది.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడクション వెబ్‌సాకెట్ టాపిక్స్‌ను సులభంగా అర్థం చేసుకుందాం.

---

## 🏗️ 1. Core Concepts (ముఖ్యమైన భాగాలు)

NestJS WebSockets లో REST లోని కంట్రోలర్స్ స్థానంలో **Gateways** వస్తాయి.

- **Gateway:** వెబ్‌సాకెట్ రిక్వెస్ట్‌లను వినే మరియు హ్యాండిల్ చేసే క్లాస్ (`@WebSocketGateway()`).
- **Events:** క్లయింట్ నుండి వచ్చే మెసేజ్‌లను పట్టుకోవడానికి `@SubscribeMessage()` వాడుతాం.
- **Namespaces:** ఒకే సాకెట్ కనెక్షన్‌ను విభిన్న ఛానల్స్‌గా విడగొట్టడం (ఉదా: `/chat` కి విడిగా, `/notifications` కి విడిగా లాజిక్ రాయడం).
- **Rooms:** ఒక గ్రూప్ క్రియేట్ చేయడం. ఒక రూమ్‌లో ఉన్న యూజర్లందరికీ ఒకేసారి మెసేజ్ (Broadcast) పంపడానికి ఇది ఉపయోగపడుతుంది.

---

## 💻 2. NestJS WebSocket Gateway ఇంప్లిమెంటేషన్

ముందుగా కావలసిన లైబ్రరీలు ఇన్‌స్టాల్ చేయాలి:

```bash
npm i @nestjs/websockets @nestjs/platform-socket.io

```

### ప్రాక్టికల్ చాట్ గేట్‌వే కోడ్:

```typescript
// chat/chat.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// cors: '*' అనేది లోకల్ డెవలప్‌మెంట్‌లో ఫ్రంటెండ్ కనెక్ట్ అవ్వడానికి ఇస్తున్నాం
@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {

  // సాకెట్.ఐఓ యొక్క అసలైన సర్వర్ ఆబ్జెక్ట్ ఇక్కడికి ఇంజెక్ట్ అవుతుంది
  @WebSocketServer()
  server: Server;

  // 1. క్లయింట్ కనెక్ట్ అయినప్పుడు రన్ అవుతుంది
  handleConnection(client: Socket) {
    console.log(`కొత్త క్లయింట్ కనెక్ట్ అయ్యాడు: ${client.id}`);
  }

  // 2. క్లయింట్ డిస్‌కనెక్ట్ అయినప్పుడు రన్ అవుతుంది
  handleDisconnect(client: Socket) {
    console.log(`క్లయింట్ వెళ్ళిపోయాడు: ${client.id}`);
  }

  // 3. 'join_room' ఈవెంట్ - ఒక యూజర్ ని స్పెసిఫిక్ చాట్ గ్రూప్ లో పెట్టడం
  @SubscribeMessage('join_room')
  handleJoinRoom(@MessageBody() roomName: string, @ConnectedSocket() client: Socket) {
    client.join(roomName); // సాకెట్ రూమ్ లో జాయిన్ చేయడం
    client.emit('joined', `మీరు విజయవంతంగా ${roomName} రూమ్ లో చేరారు!`);
  }

  // 4. 'send_message' ఈవెంట్ - క్లయింట్ పంపిన మెసేజ్ ని రూమ్ లోని అందరికీ పంపడం
  @SubscribeMessage('send_message')
  handleMessage(
    @MessageBody() data: { room: string; message: string; user: string }
  ) {
    // ఆ రూమ్ లో ఉన్న మిగతా అందరికీ మెసేజ్ బ్రాడ్‌కాస్ట్ (Broadcast) అవుతుంది
    this.server.to(data.room).emit('new_message', {
      user: data.user,
      message: data.message,
      timestamp: new Date()
    });
  end
}

```

---

## 🔐 3. WebSocket Authentication (సాకెట్ కనెక్షన్ కి సెక్యూరిటీ)

ఎవరు పడితే వాళ్లు మన వెబ్‌సాకెట్ సర్వర్‌కి కనెక్ట్ అవ్వకుండా ఆపాలి. REST API లో లాగా ఇక్కడ నార్మల్ HTTP Guards నేరుగా పనిచేయవు (ఎందుకంటే సాకెట్ కనెక్షన్ ఒక్కసారే జరుగుతుంది).

- **పరిష్కారం:** క్లయింట్ కనెక్ట్ అయ్యేటప్పుడు `auth token` ని పంపాలి. గేట్‌వే లోపల `handleConnection` మెథడ్‌లో దాన్ని వాలిడేట్ చేయాలి.

```typescript
async handleConnection(client: Socket) {
  try {
    // క్లయింట్ హాండ్‌షేక్ (Handshake) లో పంపిన టోకెన్ ని పట్టుకోవడం
    const token = client.handshake.auth.token;
    // const user = await this.jwtService.verify(token); // JWT వాలిడేషన్
    // client.data.user = user; // యూజర్ డేటాని సాకెట్ సెషన్‌లో దాచడం
  } catch (err) {
    client.disconnect(); // టోకెన్ తప్పు అయితే కనెక్షన్ కట్ చేయడం
  }
}

```

---

## 🚀 4. Scaling WebSockets (ప్రొడక్షన్ స్కేలింగ్ ఛాలెంజ్)

వెబ్‌సాకెట్స్‌ను ప్రొడక్షన్‌లో స్కేల్ చేసేటప్పుడు ఒక పెద్ద సమస్య వస్తుంది. ఒకవేళ మీ యాప్ **AWS ECS/Lambda** లో మల్టిపుల్ ఇన్‌స్టాన్సెస్ (Server A, Server B) లో రన్ అవుతుంటే:

- `User 1` వెళ్ళి `Server A` కి కనెక్ట్ అయ్యాడు.
- `User 2` వెళ్ళి `Server B` కి కనెక్ట్ అయ్యాడు.
- ఇప్పుడు `User 1` ఒక మెసేజ్ పంపితే, `Server A` కి మాత్రమే తెలుస్తుంది, `Server B` కి తెలియదు. దీనివల్ల `User 2` కి ఆ మెసేజ్ వెళ్ళదు.

```
[User 1] ──> [Server A] ──┐
                          v
                    [Redis Adapter] <── (Message Broker)
                          ^
[User 2] ──> [Server B] ──┘

```

- **అల్టిమేట్ ప్రొడక్షన్ సొల్యూషన్:** **`@socket.io/redis-adapter`** ఉపయోగించడం. మన అన్ని సర్వర్లను ఒక **Redis** సర్వర్‌తో కనెక్ట్ చేస్తాం. `Server A` కి ఏ ఈవెంట్ వచ్చినా, అది Redis ద్వారా వెంటనే `Server B` కి కూడా పాస్ అవుతుంది. దీనివల్ల మీ యాప్ ఎన్ని సర్వర్లలో రన్ అయినా సరే, మెసేజ్‌లు ఎక్కడా మిస్ అవ్వకుండా అందరికీ రియల్-టైమ్‌లో డెలివరీ అవుతాయి.

# 30 - Production Deployment

NestJS ప్రయాణంలో ఇది చివరి, మరియు అత్యంత కీలకమైన ఘట్టం. మనం ఎంత అద్భుతమైన కోడ్ రాసినా, సెక్యూర్ ఆర్కిటెక్చర్ బిల్డ్ చేసినా... అది లైవ్ ప్రొడక్షన్‌లో వినియోగదారులకు (End Users) ఎలాంటి అంతరాయం లేకుండా అందుబాటులోకి వచ్చినప్పుడే దానికి పూర్తి విలువ దక్కుతుంది.

ముఖ్యంగా మీరు **AWS Lambda (Serverless)** మరియు కంటైనరైజ్డ్ అప్రోచెస్ చూస్తున్నారు కాబట్టి, ప్రొడక్షన్ డిప్లాయ్‌మెంట్‌లో వాడే విభిన్న వ్యూహాలు (Deployment Strategies) మరియు రన్‌టైమ్ మేనేజ్‌మెంట్ గురించి ఇక్కడ క్లియర్ గా చూద్దాం.

---

## 🚀 1. Serverless vs Containerized Deployment

ప్రొడక్షన్‌లో NestJS ని రన్ చేయడానికి ప్రధానంగా రెండు పద్ధతులు ఉన్నాయి:

### A. AWS Lambda (Serverless)

- **ఎలా పనిచేస్తుంది?:** మనం 20వ టాపిక్‌లో చూసినట్టు, `@vendia/serverless-express` వాడి యాప్‌ను ఒక సింగిల్ ఫంక్షన్‌గా మారుస్తాం.
- **లాభాలు:** జీరో సర్వర్ మేనేజ్‌మెంట్, ట్రాఫిక్‌ను బట్టి ఆటోమేటిక్‌గా స్కేల్ అవుతుంది, రిక్వests లేనప్పుడు బిల్లు పడదు (No Traffic = No Cost).
- **డిప్లాయ్ టూల్స్:** Serverless Framework (`serverless deploy`) లేదా AWS CDK.

### B. AWS ECS / Kubernetes (Containerized)

- **ఎలా పనిచేస్తుంది?:** మనం 26వ టాపిక్‌లో రాసిన Multi-stage Dockerfile ని బిల్డ్ చేసి, ఆ ఇమేజ్‌ను **AWS ECR (Elastic Container Registry)** లో పుష్ చేస్తాం. అక్కడ నుండి **AWS ECS (Fargate)** లేదా **Kubernetes (EKS)** కంటైనర్లను రన్ చేస్తాయి.
- **ఎప్పుడు వాడతాం?:** యాప్‌లో WebSockets (రియల్-టైమ్ కనెక్షన్స్) ఉన్నప్పుడు, లేదా లాంబ్డా యొక్క 15-నిమిషాల ఎగ్జిక్యూషన్ టైమ్ లిమిట్ కంటే ఎక్కువ రన్ అయ్యే బ్యాచ్ జాబ్స్ ఉన్నప్పుడు.

---

## 🛡️ 2. Zero Downtime Deployment Strategies (జీరో డౌన్‌టైమ్ వ్యూహాలు)

పాత కోడ్ రన్ అవుతున్నప్పుడు, మనం కొత్త అప్‌డేట్ (New Version) డిప్లాయ్ చేస్తే... సర్వర్ రీస్టార్ట్ అయ్యే ఆ కొన్ని సెకన్లు లేదా నిమిషాలు యాప్ డౌన్ అవ్వకూడదు. యూజర్లకు ఎలాంటి డిస్టర్బెన్స్ లేకుండా బ్యాక్‌గ్రౌండ్‌లో అప్‌డేట్ జరగడాన్నే **Zero Downtime Deployment** అంటారు.

```
Blue Version (v1.0)  ──[ 100% Traffic ]──> Active Users

Green Version (v2.0) ──[ Testing Phase ]──> QA / Internal Devs

```

### A. Blue-Green Deployment

- **విధానం:** ప్రొడక్షన్‌లో రెండు ఒకేలాంటి ఎన్విరాన్మెంట్స్ ఉంటాయి. ఒకదాన్ని **Blue** (ప్రస్తుతం లైవ్‌లో ఉన్న పాత కోడ్), ఇంకోదాన్ని **Green** (మనం పంపిన కొత్త కోడ్) అంటాం.
- కొత్త కోడ్‌ను Green లో డిప్లాయ్ చేసి, అంతా బాగుంది అని టెస్ట్ చేసుకున్నాక... **AWS Route 53 (DNS)** లేదా **Application Load Balancer (ALB)** ద్వారా ట్రాఫిక్‌ను ఒకే ఒక్క సెకనులో Blue నుండి Green కి మారుస్తాం.
- **లాభం:** ఒకవేళ కొత్త కోడ్‌లో ఏదైనా బగ్ ఉంటే, వెంటనే పాత Blue వర్షన్‌కి రోల్‌బ్యాక్ (Rollback) అయిపోవచ్చు.

### B. Canary Deployment

- **విధానం:** కొత్త వర్షన్‌ను ఒకేసారి అందరికీ రిలీజ్ చేయకుండా, కేవలం **5% లేదా 10% మంది యూజర్లకు** మాత్రమే రూట్ చేస్తాం (టెస్టింగ్ కోడి పక్షి లాగా).
- CloudWatch లో లాగ్స్ మరియు ఎర్రర్స్ చెక్ చేస్తూ, 10 నిమిషాల పాటు ఎలాంటి ఎర్రర్స్ రాకపోతే, మిగతా 90% ట్రాఫిక్‌ను కూడా కొత్త వర్షన్‌కి మారుస్తాం. AWS Lambda లో **Lambda Aliases & Traffic Shifting** ద్వారా దీన్ని చాలా ఈజీగా చేయవచ్చు.

---

## 🛠️ 3. Traditional VPS Deployment (NGINX & PM2)

ఒకవేళ మీరు AWS Lambda/ECS కాకుండా ఒక నార్మల్ Linux Server (AWS EC2 లేదా DigitalOcean Droplet) లో NestJS రన్ చేయాల్సి వస్తే, ఈ క్రింది కాంబినేషన్ వాడాలి:

### PM2 (Process Manager)

Node.js అనేది సింగిల్-థ్రెడెడ్. ఒకవేళ కోడ్‌లో ఏదైనా అన్‌హ్యాండిల్డ్ ఎర్రర్ వస్తే సర్వర్ ఆగిపోతుంది. **PM2** అనేది మన NestJS యాప్ బ్యాక్‌గ్రౌండ్‌లో నిరంతరం రన్ అయ్యేలా చూస్తుంది. ఒకవేళ క్రాష్ అయినా సరే మిల్లీసెకన్లలో ఆటోమేటిక్‌గా రీస్టార్ట్ చేస్తుంది. అలాగే సర్వర్ లోని అన్ని CPU కోర్స్ (Cores) ని వాడుకోవడానికి `cluster mode` ని అందిస్తుంది.

```bash
pm2 start dist/main.js -i max --name "nestjs-app"

```

### NGINX (Reverse Proxy)

మన NestJS యాప్ లోపల పోర్ట్ `3000` లో రన్ అవుతుంటే, బయటి ప్రపంచానికి దాన్ని డైరెక్ట్ గా ఎక్స్‌పోజ్ చేయకూడదు. ముందర **NGINX** ని ఒక రివర్స్ ప్రాక్సీగా పెట్టి, అది పోర్ట్ `80` (HTTP) లేదా `443` (HTTPS - SSL) రిక్వెస్ట్‌లను తీసుకుని లోపల ఉన్న NestJS కి పాస్ చేస్తుంది. ఇది SSL Certification (Certbot) హ్యాండిల్ చేయడానికి మరియు బేసిక్ రేట్ లిమిటింగ్ పెట్టడానికి ఉపయోగపడుతుంది.

---

> 💡 **ప్రొడక్షన్ చెక్‌లిస్ట్ (Go-Live Checklist):**
>
> 1. `NODE_ENV` అనేది `production` కి సెట్ అయి ఉందో లేదో చూడాలి.
> 2. మీ డేటాబేస్ పాస్‌వర్డ్‌లు `.env` లో కాకుండా **AWS Secrets Manager** లో ఉండాలి.
> 3. CORS మరియు Helmet ఆన్‌లైన్ లో పక్కాగా కాన్ఫిగర్ అయి ఉండాలి.
> 4. CloudWatch అప్రూవ్డ్ అలార్మ్స్ రెడీగా ఉండాలి.

ఈ ప్రొడక్షన్ డిప్లాయ్‌మెంట్ స్ట్రాటజీస్ (ముఖ్యంగా Blue-Green, Canary మరియు PM2/NGINX) పై మీకు స్పష్టత వచ్చిందా?

# 31 - Expert Topics

NestJS లో **Expert Topics (ఎక్స్‌పర్ట్ టాపిక్స్)** కి స్వాగతం. ఈ ఫేజ్ మిమ్మల్ని ఒక సాధారణ డెవలపర్ స్థాయి నుండి అప్లికేషన్ యొక్క రూపురేఖలను మార్చగల **ఆర్కిటెక్ట్ (Architect)** స్థాయికి తీసుకెళ్తుంది. ఇక్కడ మనం మాట్లాడబోయే కాన్సెప్ట్స్ అన్నీ ఎంటర్‌ప్రైజ్ లెవెల్ సాఫ్ట్‌వేర్ బిల్డ్ చేయడానికి, ఫ్రేమ్‌వర్క్ ఇంటర్నల్స్‌ను కస్టమైజ్ చేయడానికి వాడుతుంటారు.

మీరు ఇచ్చిన లిస్ట్‌లోని మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ కాన్సెప్ట్స్‌ను సులభంగా అర్థం చేసుకుందాం.

---

## 🎭 1. Reflection & Metadata (NestJS ఇంటర్నల్స్)

NestJS మనకు ఇచ్చే `@Roles('admin')` లేదా `@SetMetadata()` డెకరేటర్స్ ఎలా పనిచేస్తాయో ఎప్పుడైనా ఆలోచించారా? దీని వెనుక ఉన్న మ్యాజిక్ **Reflect Metadata**. ఒక క్లాస్ లేదా మెథడ్‌కు అదనపు సమాచారాన్ని (Metadata) అటాచ్ చేయడానికి, మరియు రన్‌టైమ్‌లో దాన్ని చదవడానికి ఇది ఉపయోగపడుతుంది.

```typescript
// 1. మెథడ్ పైన మెటాడేటాని సెట్ చేయడం
import { SetMetadata } from "@nestjs/common";
export const IsPublic = () => SetMetadata("isPublic", true);

// 2. గార్డ్ (Guard) లోపల దీన్ని చదవడం (Reflector ద్వారా)
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // ExecutionContext ద్వారా ప్రస్తుతం రన్ అవుతున్న కంట్రోలర్/మెథడ్ వివరాలు తెలుస్తాయి
    const isPublic = this.reflector.getAllAndOverride<boolean>("isPublic", [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true; // ఒకవేళ పబ్లిక్ రూట్ అయితే అథెంటికేషన్ అవసరం లేదు
    // మిగతా లాజిక్...
  }
}
```

---

## ⚙️ 2. Dynamic Modules (డైనమిక్ మోడ్యూల్స్)

నార్మల్ మోడ్యూల్స్ స్టాటిక్‌గా ఉంటాయి. కానీ మనకు డేటాబేస్ కనెక్షన్ లేదా థర్డ్ పార్టీ API కీలను రన్‌టైమ్‌లో ఎన్విరాన్మెంట్ వేరియబుల్స్ నుండి ఇంజెక్ట్ చేయాల్సి వచ్చినప్పుడు **Dynamic Modules** రాస్తాం (ఉదా: `ConfigModule.forRoot()`, `TypeOrmModule.forRoot()`).

```typescript
// config.module.ts
import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class ConfigModule {
  static register(options: { folder: string }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTIONS",
          useValue: options,
        },
      ],
      exports: ["CONFIG_OPTIONS"],
    };
  }
}
```

---

## 🏢 3. Multi-Tenant Architecture (మల్టీ-టెనెంట్ ఆర్కిటెక్చర్)

SaaS (Software as a Service) అప్లికేషన్లలో ఇది మోస్ట్ ఇంపార్టెంట్ కాన్సెప్ట్. ఒకే సాఫ్ట్‌వేర్‌ను మల్టిపుల్ కంపెనీలు (Tenants) వాడుతుంటాయి. కానీ ఒక కంపెనీ డేటా ఇంకో కంపెనీకి కనిపించకూడదు.

- **Tenant Isolation:** ప్రతి రిక్వెస్ట్ వచ్చేటప్పుడు హెడర్స్ లో `X-Tenant-Id` ని పట్టుకుని, దాన్ని బట్టి రన్‌టైమ్‌లో డేటాబేస్ కనెక్షన్‌ను మార్చడం లేదా క్వెరీలో ఆటోమేటిక్‌గా `WHERE tenant_id = 'XYZ'` అని యాడ్ చేయడం. NestJS లో `REQUEST` స్కోప్డ్ ప్రొవైడర్స్ ద్వారా దీన్ని అద్భుతంగా హ్యాండిల్ చేయవచ్చు.

---

## 🏎️ 4. Heavy Background Jobs: BullMQ vs Worker Threads

Node.js సింగిల్ థ్రెడెడ్ కావడం వల్ల భారీ టాస్క్స్ (ఉదా: వీడియో కంప్రెషన్, లక్షల మెయిల్స్ పంపడం, హెవీ రిపోర్ట్స్) మెయిన్ థ్రెడ్‌లో రన్ చేస్తే యాప్ హ్యాంగ్ అయిపోతుంది. దీనికి రెండు సొల్యూషన్స్ ఉన్నాయి:

### A. Worker Threads (ఇన్-మెమరీ)

ఒకే సర్వర్ లోపల మల్టిపుల్ CPU కోర్స్ ని వాడుకుంటూ పారలల్ గా మల్టిపుల్ థ్రెడ్స్ రన్ చేయడం. ఇది CPU ఇంటెన్సివ్ టాస్క్స్ (ఇమేజ్ ప్రాసెసింగ్, మ్యాథ్స్ కాలిక్యులేషన్స్) కి బాగుంటుంది.

### B. BullMQ (డిస్ట్రిబ్యూటెడ్ క్యూ - బెస్ట్ ప్రొడక్షన్ పద్ధతి)

**Redis** ఆధారంగా పనిచేసే అత్యంత పవర్‌ఫుల్ బ్యాక్‌గ్రౌండ్ జాబ్ మేనేజర్. మనం టాస్క్‌లను క్యూ లో పడేస్తే, బ్యాక్‌గ్రౌండ్‌లో విడిగా రన్ అయ్యే వర్కర్స్ వాటిని ప్రాసెస్ చేస్తారు. ఒకవేళ సర్వర్ క్రాష్ అయినా సరే జాబ్స్ మిస్ అవ్వవు (Retry Strategy ఉంటుంది). NestJS లో దీనికోసం `@nestjs/bullmq` మాడ్యూల్ ఉంది.

```typescript
// video.processor.ts (BullMQ Worker)
import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor("video-transcoding")
export class VideoProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(
      `జాబ్ ${job.id} ప్రాసెస్ అవుతోంది. వీడియో రీసైజ్ చేస్తున్నాను...`,
    );
    // ఇక్కడ హెవీ లాజిక్ రన్ అవుతుంది, మెయిన్ API లకి ఎలాంటి ఇబ్బంది ఉండదు!
    return { success: true };
  }
}
```

---

## 🌳 5. Monorepos & Nx

మీ కంపెనీలో 5 మైక్రోసర్వీసెస్, 2 ఫ్రంటెండ్ యాప్స్ ఉన్నాయనుకోండి. వీటన్నింటికీ విడివిడిగా 7 రిపోజిటరీలు పెట్టే బదులు, ఒకే ఒక్క పెద్ద రిపోజిటరీలో పెట్టడాన్ని **Monorepo** అంటారు.

- **Nx / NestJS Monorepo:** ఇది కోడ్ షేరింగ్‌ని సులభం చేస్తుంది. ఉదాహరణకు, మీరు రాసిన `UserDTO` లేదా డేటాబేస్ ఎంటిటీలను అన్ని మైక్రోసర్వీసెస్ రీ-యూస్ చేసుకోవచ్చు. `Nx` అనేది కేవలం మారిన కోడ్‌ను మాత్రమే బిల్డ్ చేసి, టెస్ట్ చేయడానికి (Computation Caching) ఉపయోగపడే ఒక అద్భుతమైన బిల్డ్ సిస్టమ్.

---

> 💡 **ఆర్కిటెక్ట్ సమ్మరీ:** ఈ ఎక్స్‌పర్ట్ టాపిక్స్ లోని **Reflection, Execution Context** పై పట్టు సాధిస్తే, మీరు కంపెనీలో ఓన్ కస్టమరైజ్డ్ ప్యాకేజీలను, ప్లగిన్ సిస్టమ్స్‌ను డెవలప్ చేసి **npm** లో పబ్లిష్ చేయగలరు.

# Final Capstone Projects

# 1. Enterprise Authentication Service (JWT, OAuth, MFA, RBAC, refresh tokens)

ఇది మీ కెరీర్‌కు అత్యంత కీలకమైన, మరియు ఇంటర్వ్యూలలో మిమ్మల్ని ఒక సీనియర్ ఆర్కిటెక్ట్‌గా నిలబెట్టే ప్రొడక్షన్-లెవెల్ ప్రాజెక్ట్. ఈ **Enterprise Authentication Service** కి సంబంధించిన **High-Level Design (HLD)** ని మనం నేర్చుకున్న NestJS అడ్వాన్స్‌డ్ ప్యాటర్న్స్ మరియు AWS సర్వర్‌లెస్ ఎకోసిస్టమ్‌తో కలిపి డిజైన్ చేద్దాం.

---

## 🏛️ 1. High-Level System Architecture

ఈ సిస్టమ్ **AWS Lambda (Serverless)** మరియు **Distributed Cache (Redis)** ఆధారంగా పనిచేస్తుంది, దీనివల్ల కోల్డ్ స్టార్ట్స్ తగ్గుతాయి మరియు మిలియన్ల రిక్వెస్ట్‌లను తట్టుకోగలదు.

```
Client (Web/Mobile)
       │
       ▼
 [AWS WAF (Firewall)]
       │
       ▼
 [Amazon API Gateway] ──(Rate Limiting/Throttling)
       │
       ▼
 [AWS Lambda (NestJS App)]
       ├──> [AWS Secrets Manager] (JWT Secrets & OAuth Keys)
       ├──> [Amazon ElastiCache Redis] (Session Cache, Refresh Tokens, Rate Limit)
       └──> [Amazon Aurora PostgreSQL] (Users, Roles, Permissions DB)

```

---

## 🛠️ 2. Core NestJS & AWS Components

- **API Gateway & AWS WAF:** హ్యాకర్ల నుండి Brute-force మరియు DDoS అటాక్స్ రాకుండా `AWS WAF` కాపాడుతుంది. `API Gateway` ద్వారా ప్రతి క్లయింట్‌కు **Rate Limiting** అప్లై అవుతుంది.
- **NestJS App on Lambda:** `@vendia/serverless-express` తో రన్ అవుతుంది. కోల్డ్ స్టార్ట్ ఆప్టిమైజేషన్ కోసం **Esbuild** తో బండిల్ చేయబడుతుంది.
- **Amazon ElastiCache (Redis):** ఇది కేవలం నార్మల్ క్యాషే కాదు, సెషన్స్ మరియు టోకెన్స్ మేనేజ్ చేయడానికి వాడే **Distributed Cache**.
- **AWS Secrets Manager:** JWT Secret Keys, Google/GitHub OAuth క్లయింట్ ఐడీలను అత్యంత సురక్షితంగా దాచడానికి.

---

## 📊 3. Database & Cache Schema Design (PostgreSQL + Redis)

### PostgreSQL (Write Model - Core Data)

మనం 6వ టాపిక్‌లో మాట్లాడుకున్న **RBAC (Role-Based Access Control)** ని ఇక్కడ `Many-to-Many` రిలేషన్‌తో డిజైన్ చేస్తాం.

- **`users` ടేబుల్:** `id (UUID)`, `email`, `password_hash` (Bcrypt/Argon2), `mfa_secret`, `is_mfa_enabled`, `status`.
- **`roles` ടేబుల్:** `id`, `name` (e.g., ADMIN, DEVELOPER).
- **`permissions` టేబుల్:** `id`, `name` (e.g., `user:delete`, `report:read`).
- **`user_roles` & `role_permissions`:** మ్యాపింగ్ జాయిన్ టేబుల్స్.

### Redis (Read Model - Fast Validation)

ప్రతి API రిక్వెస్ట్‌కు PostgreSQL డేటాబేస్‌కు వెళ్తే సిస్టమ్ స్లో అవుతుంది. కాబట్టి ఈ క్రింది వాటిని Redis లో స్టోర్ చేస్తాం:

- **Refresh Tokens (White-listing):** Key: `refresh_token:<userId>:<token_uuid>` -> Value: `true` (TTL: 7 Days).
- **Permission Cache:** Key: `user:permissions:<userId>` -> Value: `["user:delete", "report:read"]` (TTL: 1 Hour).
- **MFA OTP (One-Time Passwords):** Key: `mfa:otp:<userId>` -> Value: `6-digit-code` (TTL: 5 Minutes).

---

## 🔄 4. Advanced Authentication Flows & Patterns

### A. Dual Token Strategy (Access + Refresh Tokens)

1. **Access Token (JWT):** Short-lived (TTL: 15 Minutes). ఇందులో `userId` మరియు `role` మాత్రమే ఉంటాయి. ఇది క్లయింట్ దగ్గరే ఉంటుంది, సర్వర్ డిబి కి వెళ్లకుండానే వెరిఫై చేస్తుంది.
2. **Refresh Token (Opaque String/UUID):** Long-lived (TTL: 7 Days). ఇది డేటాబేస్/Redis లో స్టోర్ అవుతుంది. Access Token ఎక్స్‌పైర్ అవ్వగానే, క్లయింట్ ఈ రిఫ్రెష్ టోకెన్ పంపి కొత్త యాక్సెస్ టోకెన్ తెచ్చుకుంటుంది.

> 🛡️ **Token Rotation (Security):** ఒకవేళ హ్యాకర్ ఎవరిదైనా రిఫ్రెష్ టోకెన్ దొంగిలిస్తే, ఆ టోకెన్‌తో కొత్త టోకెన్ అడిగిన ప్రతిసారీ పాత టోకెన్‌ను ఇన్వాలిడేట్ చేసి, కొత్త రిఫ్రెష్ టోకెన్ ఇవ్వాలి. ఒకే పాత టోకెన్ రెండోసారి వస్తే, ఆ యూజర్ యొక్క అన్ని సెషన్స్ ని Redis నుండి డిలీట్ చేసేయాలి (**Breach Detection**).

### B. Two-Factor Authentication (MFA) Flow

- యూజర్ ఫస్ట్ టైమ్ లాగిన్ అయినప్పుడు `speakeasy` లైబ్రరీ ద్వారా ఒక **Secret QR Code** జనరేట్ చేస్తాం. యూజర్ దాన్ని Google Authenticator యాప్‌తో స్కాన్ చేస్తాడు.
- ప్రతిసారి లాగిన్ అయ్యాక, యాక్సెస్ టోకెన్ ఇవ్వడానికి ముందే MFA OTP అడుగుతాం. అది సక్సెస్ అయితేనే పూర్తి పర్మిషన్స్ ఉన్న టోకెన్ ఇస్తాం.

### C. OAuth 2.0 Integration (Social Login)

- NestJS లో **Passport-Google-OAuth20** లేదా **Passport-Github** స్ట్రాటజీస్ వాడుతాం.
- క్లయింట్ Google బటన్ నొక్కగానే, అది Google లాగిన్ కి వెళ్తుంది. అక్కడ సక్సెస్ అయ్యాక వచ్చే `profile` డేటాని పట్టుకుని, మన DB లో ఆ ఈమెయిల్ తో యూజర్ ఉంటే లాగిన్ చేస్తాం, లేకపోతే కొత్త అకౌంట్ క్రియేట్ చేస్తాం.

### D. Multi-Tenant Permission Isolation (Custom Guard)

మనం 25వ టాపిక్‌లో చూసిన **Reflector** మరియు **Execution Context** ని ఉపయోగించి ఒక గ్లోబల్ `PermissionGuard` రాస్తాం.

```typescript
// permissions.guard.ts
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private cacheManager: Cache,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<string[]>(
      "permissions",
      context.getHandler(),
    );
    if (!requiredPermissions) return true;

    const request = context.switchToHttp().getRequest();
    const userId = request.user.id;

    // ⚡ First check in Redis Cache (Performance Optimization)
    let permissions = await this.cacheManager.get<string[]>(
      `user:permissions:${userId}`,
    );

    if (!permissions) {
      // If cache miss, fetch from DB and save to Redis
      permissions = await this.userService.getPermissions(userId);
      await this.cacheManager.set(
        `user:permissions:${userId}`,
        permissions,
        3600,
      );
    }

    return requiredPermissions.every((perm) => permissions.includes(perm));
  }
}
```

---

## 🛡️ 5. Security & DevOps Summary

- **Password Hashing:** `argon2` లేదా `bcrypt` (with salt rounds 12).
- **Helmet & CORS:** `main.ts` లో ఎనేబుల్ చేసి, కేవలం మీ అఫీషియల్ ఫ్రంటెండ్ ఆరిజిన్‌ను మాత్రమే అలౌ చేస్తారు.
- **CI/CD Pipeline:** GitHub Actions ద్వారా కోడ్ పుష్ అవ్వగానే `npm run test` (Unit/E2E Tests Jest లో) రన్ అయి, అంతా సక్సెస్ అయితే **Serverless Framework** ద్వారా AWS Lambda లోకి ఆటో-డిప్లాయ్ అవుతుంది.
- **Structured Logging:** `nestjs-pino` వాడి ప్రతి లాగిన్ అటెంప్ట్‌ను JSON ఫార్మాట్‌లో **CloudWatch** కి పంపుతాం, తద్వారా ఎవరైనా హ్యాక్ చేయడానికి ట్రై చేస్తే అలర్ట్స్ వస్తాయి.

---

# 2. E-commerce Backend (Orders, payments, inventory, Redis, queues)

ఇది మీ బ్యాకెండ్ ఆర్కిటెక్చర్ నాలెడ్జ్‌ను (ముఖ్యంగా డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ మరియు కాంప్లెక్స్ ట్రాన్సాక్షన్స్) నిరూపించడానికి ఒక అద్భుతమైన కాప్‌స్టోన్ ప్రాజెక్ట్. వేల మంది యూజర్లు ఒకేసారి ఆర్డర్స్ పెడుతున్నప్పుడు సిస్టమ్ క్రాష్ అవ్వకుండా, మరియు ఇన్వెంటరీ తప్పు అవ్వకుండా ఎలా డిజైన్ చేయాలో ఈ **E-commerce Backend High-Level Design (HLD)** లో చూద్దాం.

---

## 🏛️ 1. High-Level System Architecture (Event-Driven & Microservices)

ఈ సిస్టమ్‌ను మనం **Event-Driven Microservices Architecture** లో డిజైన్ చేస్తున్నాం. దీనివల్ల ఒక సర్వీస్ డౌన్ అయినా మిగతా సిస్టమ్ పనిచేస్తుంది.

```
Client (Web/App) ──> [API Gateway]
                           │
      ┌────────────────────┼────────────────────┐
      ▼                    ▼                    ▼
[Order Service]      [Payment Service]    [Inventory Service]
(NestJS + Mongo)     (NestJS + Stripe)    (NestJS + Postgres)
      │                    │                    │
      └───────────┬────────┴────────────────────┘
                  ▼
         [Message Broker: Kafka / RabbitMQ]
                  │
                  ▼
         [Notification/Shipping Service]

```

---

## 🛠️ 2. Core Components & AWS Integration

- **Order Service:** ఆర్డర్స్ క్రియేట్ చేయడం మరియు ట్రాక్ చేయడం దీని పని. చాలా ఫాస్ట్ రైట్స్ కోసం మరియు ఆర్డర్ హిస్టరీ ఫ్లెక్సిబిలిటీ కోసం **MongoDB** వాడతాం.
- **Inventory Service:** ప్రొడక్ట్స్ మరియు స్టాక్ మేనేజ్‌మెంట్ చూసుకుంటుంది. స్టాక్ లెవెల్స్ కరెక్ట్‌గా ఉండాలి కాబట్టి ACID కాంప్లియెన్స్ ఉన్న **PostgreSQL** వాడుతాం.
- **Payment Service:** Stripe અથવા Razorpay API లతో ఇంటెగ్రేట్ అయి ఉంటుంది.
- **Message Broker (Kafka/RabbitMQ):** సర్వీసెస్ మధ్య అసమకాలీన (Asynchronous) కమ్యూనికేషన్ కోసం.
- **Redis Cluster:** ఇన్వెంటరీ స్టాక్ లాకింగ్ (Distributed Locks) మరియు ప్రొడక్ట్ క్యాషింగ్ కోసం.

---

## 🔄 3. Advanced Design Patterns (మోస్ట్ ఇంపార్టెంట్)

ఇంటర్వ్యూలలో మిమ్మల్ని సీనియర్‌గా నిలబెట్టే మూడు ముఖ్యమైన ప్యాటర్న్స్ ఇక్కడ అప్లై అవుతాయి:

### A. Idempotency Pattern (డూప్లికేట్ ఆర్డర్ ప్రొటెక్షన్)

యూజర్ ఆర్డర్ బటన్ రెండుసార్లు నొక్కినా లేదా నెట్‌వర్క్ ఇష్యూ వల్ల పేమెంట్ రిక్వెస్ట్ మళ్లీ వచ్చినా, ఒకే ఆర్డర్ రెండుసార్లు ప్లేస్ అవ్వకూడదు.

- **పరిష్కారం:** క్లయింట్ ఒక యూనిక్ `Idempotency-Key` (UUID) ని పంపుతుంది. NestJS సర్వర్ ఆ కీ ని Redis లో చెక్ చేస్తుంది. ఒకవేళ కీ ముందే ఉంటే, పాత రెస్పాన్స్‌నే తిప్పి పంపుతుంది, కొత్త ఆర్డర్ క్రియేట్ చేయదు.

### B. Distributed Locking with Redis (స్టాక్ ఓవర్‌సెల్లింగ్ నివారణ)

ఫ్లాష్ సేల్స్ (Flash Sales) జరుగుతున్నప్పుడు, స్టాక్ కేవలం 1 ముక్కే ఉండి, ఒకే మిల్లీసెకన్ లో 100 మంది ఆర్డర్ చేస్తే స్టాక్ మైనస్ లోకి వెళ్ళిపోతుంది (`Race Condition`).

- **పరిష్కారం:** ఆర్డర్ ప్రాసెస్ చేసే ముందు Redis లో **`Redlock`** అల్గారిథమ్ వాడి ఆ ప్రొడక్ట్ ఐడీని లాక్ చేస్తాం.
- `User 1` రిక్వెస్ట్ ప్రాసెస్ అవుతున్న ఆ 100ms లో `User 2` కి లాక్ దొరకదు, వెయిట్ చేయాల్సి వస్తుంది. దీనివల్ల ఇన్వెントరీ ఎప్పటికీ తప్పు అవ్వదు.

### C. Saga Pattern (Distributed Transactions)

ఒక ఆర్డర్ సక్సెస్ అవ్వాలంటే: Order Created -> Payment Success -> Inventory Deducted జరగాలి. ఒకవేళ ఇన్వెంటరీ తగ్గాక పేమెంట్ ఫెయిల్ అయితే, ఇన్వెంటరీని మళ్లీ పెంచాలి (Rollback). మైక్రోసర్వీసెస్ లో దీన్ని **Saga Pattern** ద్వారా హ్యాండిల్ చేస్తాం.

```
[Order Created] ──> [Deduct Inventory] ──> [Process Payment] (FAILED!)
                                                    │
[Order Cancelled] <── [Restore Inventory] <─────────┘  (Compensating Actions)

```

---

## 📊 4. Database & Cache Design

### Redis Cache (Speed Layer)

- **Product Catalog:** ప్రొడక్ట్ వివరాలను `product:<id>` గా సేవ్ చేస్తాం (TTL: 24 Hours).
- **Inventory Stock Count:** `stock:<product_id>` -> Value: `50` (డేటాబేస్ కంటే ముందే ఇక్కడే స్టాక్ తగ్గించి, తర్వాత DB కి సింక్ చేస్తాం - Performance Boost).

### PostgreSQL / MongoDB Schema

- **Orders:** `id`, `user_id`, `items: [{ product_id, quantity, price }]`, `total_amount`, `status` (`PENDING, CONFIRMED, FAILED`).
- **Inventory:** `product_id (Primary Key)`, `stock_quantity`, `reserved_quantity`.

---

## 💻 5. NestJS Implementation (Transactional Outbox Pattern)

డేటాబేస్‌లో ఆర్డర్ సేవ్ అవ్వడం మరియు Kafka కి మెసేజ్ వెళ్లడం ఒకే ట్రాన్సాక్షన్ లో జరగాలి. లేకపోతే DB లో సేవ్ అయి, Kafka ఫెయిల్ అయితే డేటా మిస్‌మ్యాచ్ అవుతుంది. దీనికోసం **Outbox Pattern** వాడుతాం.

```typescript
// order.service.ts
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Order } from "./entities/order.entity";
import { Outbox } from "./entities/outbox.entity";

@Injectable()
export class OrderService {
  constructor(private dataSource: DataSource) {}

  async createOrder(orderData: any, idempotencyKey: string) {
    // Redis Idempotency Check ఇక్కడ వస్తుంది...

    return await this.dataSource.transaction(async (manager) => {
      // 1. ఆర్డర్ ని సేవ్ చేయడం
      const order = manager.create(Order, orderData);
      const savedOrder = await manager.save(order);

      // 2. అదే ట్రాన్సాక్షన్ లో ఈవెంట్ ని 'Outbox' టేబుల్ లో వేయడం
      const outboxEvent = manager.create(Outbox, {
        aggregateType: "Order",
        aggregateId: savedOrder.id,
        type: "OrderCreated",
        payload: JSON.stringify(savedOrder),
        status: "PENDING",
      });
      await manager.save(outboxEvent);

      return savedOrder;
    });
    // బ్యాక్‌గ్రౌండ్‌లో ఒక Cron Job లేదా BullMQ వర్కర్ ఈ Outbox టేబుల్ ని చూసి Kafka కి మెసేజ్ పంపి, స్టేటస్ ని 'PROCESSED' కి మారుస్తుంది.
  }
}
```

---

## 🛡️ 6. Resiliency & DevOps

- **Dead Letter Queue (DLQ):** ఒకవేళ పేమెంట్ ఈవెంట్ ప్రాసెస్ చేయడం 3 సార్లు ఫెయిల్ అయితే, ఆ మెసేజ్ ని `payment-dlq` క్యూ లోకి నెట్టేస్తాం.
- **Zero Downtime Deployment:** **Canary Deployment** వాడుతాం. కొత్త ఆర్డర్ లాజిక్ వర్షన్‌ను మొదట 5% యూజర్లకే ఇచ్చి, బగ్స్ లేవని కన్ఫర్మ్ అయ్యాక అందరికీ రోల్ అవుట్ చేస్తాం.
- **Metrics & Monitoring:** **Prometheus & Grafana** లేదా **AWS CloudWatch** వాడి సెకనుకు ఎన్ని ఆర్డర్స్ వస్తున్నాయి (`Throughput`) మరియు ఆర్డర్ API ఎంత టైమ్ తీసుకుంటుంది (`Latency`) అనేది నిరంతరం పర్యవేక్షిస్తాం.

---

# 3. Hospital Management System (Microservices, CQRS, Event Sourcing)

ఈ **Hospital Management System (HMS)** మైక్రోసర్వీసెస్, CQRS మరియు Event Sourcing ఆర్కిటెక్చర్‌తో డిజైన్ చేయడం అనేది సిస్టమ్ డిజైన్ ఇంటర్వ్యూలలో మిమ్మల్ని టాప్ 1% అడ్వాన్స్‌డ్ డెవలపర్‌గా నిలబెడుతుంది. హాస్పిటల్స్ లో ప్రతి పేషెంట్ మెడికల్ రికార్డ్ మరియు అపాయింట్‌మెంట్ హిస్టరీ అత్యంత సురక్షితంగా మరియు ఏ ఒక్క చిన్న మార్పు జరిగినా (Audit Trail) ట్రాక్ అయ్యేలా ఉండాలి.

దీని కోసం ఎంటర్‌ప్రైజ్-లెవెల్ **High-Level Design (HLD)** ని ఇక్కడ చూద్దాం.

---

## 🏛️ 1. High-Level System Architecture (CQRS & Event Sourcing)

సాధారణ ఆర్కిటెక్చర్‌లో డేటాని ఒకే డిబిలో రీడ్ మరియు రైట్ చేస్తాం. కానీ ఇక్కడ **CQRS (Command Query Responsibility Segregation)** పద్ధతిలో రైట్ ఆపరేషన్స్ (Commands) ఒక వైపు, రీడ్ ఆపరేషన్స్ (Queries) ఇంకోవైపు విడిపోతాయి.

```
                  [ API Gateway / CloudFront ]
                               │
         ┌─────────────────────┴─────────────────────┐
         ▼                                           ▼
  [ COMMAND SIDE ]                            [ QUERY SIDE ]
(Create Appointment, Update Records)       (Fetch Patient History, Analytics)
         │                                           ▲
         ▼                                           │ (Read Only)
 [ NestJS Command Service ]                  [ NestJS Query Service ]
         │                                           ▲
         ▼                                           │ (Sync via Events)
[ Event Store (Write DB) ] ──> [ Kafka Broker ] ────┘
 (MongoDB/EventStoreDB)

```

---

## 🛠️ 2. Core Microservices

1. **Patient Service (Command):** కొత్త రోగుల రిజిస్ట్రేషన్, వివరాల మార్పులను హ్యాండిల్ చేస్తుంది.
2. **Appointment Service (Command):** డాక్టర్ల అవైలబిలిటీ, బుకింగ్స్, క్యాన్సిలేషన్స్ చూసుకుంటుంది.
3. **Medical Records Service (Event Sourced):** పేషెంట్ ప్రిస్క్రిప్షన్స్, ల్యాబ్ రిపోర్ట్స్ హిస్టరీని స్టోర్ చేస్తుంది.
4. **Patient Analytics & Portal Service (Query):** డాక్టర్లు మరియు పేషెంట్లకు ఫాస్ట్ గా డేటాని డిస్‌ప్లే చేయడానికి రీడ్-ఆప్టిమైజ్డ్ సర్వీస్.

---

## 🔄 3. CQRS & Event Sourcing ఎలా పనిచేస్తుంది? (Core Engine)

### A. Event Sourcing (ఈవెంట్ సోర్సింగ్)

సాధారణంగా ఒక పేషెంట్ అపాయింట్‌మెంట్ బుక్ చేసుకుని, తర్వాత క్యాన్సిల్ చేస్తే డేటాబేస్‌లో స్టేటస్ `CANCELLED` అని అప్‌డేట్ అవుతుంది (పాత `BOOKED` డేటా పోతుంది). కానీ ఈవెంట్ సోర్సింగ్‌లో డేటా ఎప్పటికీ అప్‌డేట్ అవ్వదు; కేవలం కొత్త ఈవెంట్స్ యాడ్ అవుతూ ఉంటాయి (Append-Only).

**Event Store (Write Model) లో డేటా ఇలా సేవ్ అవుతుంది:**

1. `Event 1: AppointmentCreated` (Payload: PatientId: 5, DoctorId: 10, Date: 2026-07-01)
2. `Event 2: AppointmentRescheduled` (Payload: NewDate: 2026-07-03)
3. `Event 3: AppointmentCancelled` (Payload: Reason: "Doctor Unavailable")

**లాభం:** హాస్పిటల్ ఆడిటింగ్ కోసం గతంలో ఏ రోజు, ఏ మిల్లీసెకన్ లో ఎవరు మార్పులు చేశారో 100% పక్కా హిస్టరీ (Audit Trail) దొరుకుతుంది.

### B. CQRS Integration

రైట్ సర్వీస్ ఈ ఈవెంట్స్‌ను **Event Store** లో సేవ్ చేయడంతో పాటు, **Kafka** క్యూ లోకి పంపుతుంది. క్వెరీ సైడ్ ఉండే NestJS సర్వీస్ ఆ ఈవెంట్‌ను రీడ్ చేసి, యూజర్ కి క్విక్ గా చూపించడానికి **Elasticsearch** లేదా **PostgreSQL View** లో డేటాని అప్‌డేట్ చేస్తుంది.

---

## 💻 4. NestJS CQRS Implementation

NestJS మనకు `@nestjs/cqrs` అనే ఇన్‌బిల్ట్ ప్యాకేజీని అందిస్తుంది. ఇది కంట్రోలర్స్, కమాండ్స్ మరియు హ్యాండ్లర్స్‌ను చాలా క్లీన్ గా విడగొడుతుంది.

### 1. Command (ఏం చేయాలో చెప్పే ఆబ్జెక్ట్)

```typescript
// commands/impl/book-appointment.command.ts
export class BookAppointmentCommand {
  constructor(
    public readonly patientId: string,
    public readonly doctorId: string,
    public readonly appointmentDate: Date,
  ) {}
}
```

### 2. Command Handler (బిజినెస్ లాజిక్ రన్ చేసి, ఈవెంట్ జనరేట్ చేసేది)

```typescript
// commands/handlers/book-appointment.handler.ts
import { CommandHandler, ICommandHandler, EventPublisher } from "@nestjs/cqrs";
import { BookAppointmentCommand } from "../impl/book-appointment.command";
import { InjectRepository } from "@nestjs/typeorm";
import { EventStoreRepository } from "../../repository/event-store.repository";

@CommandHandler(BookAppointmentCommand)
export class BookAppointmentHandler implements ICommandHandler<BookAppointmentCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly eventStore: EventStoreRepository,
  ) {}

  async execute(command: BookAppointmentCommand) {
    const { patientId, doctorId, appointmentDate } = command;

    // 1. ఈవెంట్ క్రియేట్ చేయడం
    const event = {
      streamId: `appointment-${patientId}`,
      type: "AppointmentCreated",
      data: { doctorId, appointmentDate, createdAt: new Date() },
    };

    // 2. Event Store (Append-Only) లో సేవ్ చేయడం
    await this.eventStore.append(event);

    // 3. Kafka/EventBus ద్వారా బయటి మైక్రోసర్వీసెస్ కి పంపడం
    // ఈ ఈవెంట్ ని బట్టే రీడ్ డేటాబేస్ అప్‌డేట్ అవుతుంది
    this.publisher.mergeObjectContext(event).commit();

    return { success: true, message: "అపాయింట్‌మెంట్ ఈవెంట్ రికార్డ్ అయింది." };
  }
}
```

---

## 📊 5. Database & Read Model Synchronization (Snapshots)

ఎవరైనా పేషెంట్ తన పూర్తి హిస్టరీ అడిగినప్పుడు మొదటి నుండి జరిగిన వేల ఈవెంట్స్‌ను రన్‌టైమ్‌లో క్యాలిక్యులేట్ చేయడం స్లో అవుతుంది.

- **Snapshots (స్నాప్‌షాట్స్):** ప్రతి 100 ఈవెంట్స్ తర్వాత, అప్పటివరకు ఉన్న ఫైనల్ స్టేట్‌ను ఒక స్నాప్‌షాట్ లాగా (ఉదా: `CurrentStatus: CANCELLED`) ఒక చోట దాస్తాం. నెక్స్ట్ టైమ్ డేటా కావాలన్నప్పుడు స్నాప్‌షాట్ తీసుకుని, దాని తర్వాత వచ్చిన 2 లేదా 3 ఈవెంట్స్ కలిపి చూపిస్తాం.
- **Read Database:** సెర్చింగ్ మరియు ఫిల్టరింగ్ ఫాస్ట్ గా ఉండటానికి (ఉదా: "హైదరాబాద్ లో ఉన్న కార్డియాలజిస్ట్ ల లిస్ట్ కావాలి") రీడ్ మోడల్ కోసం **Elasticsearch** వాడుతాం.

---

## 🛡️ 6. Security, Compliance & DevOps (HIPAA)

హెల్త్‌కేర్ యాప్స్ బిల్డ్ చేసేటప్పుడు **HIPAA Compliance** రూల్స్ పాటించాలి:

- **Data Encryption at Rest & In Transit:** AWS Aurora/MongoDB లో డేటా ఎన్‌క్రిప్ట్ అవ్వాలి (`AES-256`). మెడికల్ రికార్డ్స్ లీక్ అవ్వకుండా డేటాబేస్ కనెక్షన్స్ అన్నీ TLS/SSL తో జరగాలి.
- **RBAC (Role-Based Access Control):** ఒక పేషెంట్ రికార్డ్‌ను కేవలం అతనికి ట్రీట్‌మెంట్ చేసే డాక్టర్ లేదా అడ్మిన్ మాత్రమే చూడగలగాలి. నార్మల్ స్టాఫ్ కి యాక్సెస్ ఉండకూడదు (మనం 23వ టాపిక్‌లో చూసిన NestJS Guards & Reflector ఇక్కడ వాడతాం).
- **Monitoring:** **AWS X-Ray** వాడటం ఇక్కడ చాలా ముఖ్యం. ఎందుకంటే కమాండ్ ఒక సర్వీస్ కి వెళ్లి, Kafka ద్వారా ఇంకో సర్వీస్ కి వెళ్తుంది కాబట్టి, ఎక్కడైనా డిలే (Latency) ఉంటే X-Ray డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ ద్వారా ఈజీగా పట్టుకోవచ్చు.

---

# 4. Multi-tenant SaaS CRM (Tenant isolation, subscriptions, auditing)

ఈ **Multi-tenant SaaS CRM** (Software as a Service) ప్రాజెక్ట్ ఒక అద్భుతమైన ఎంటర్‌ప్రైజ్ ఆర్కిటెక్చర్ ఛాలెంజ్. ఇక్కడ ఒకే సాఫ్ట్‌వేర్ కోడ్‌బేస్‌ను వందల కంపెనీలు (Tenants) వాడుతుంటాయి. కానీ ఒక కంపెనీ డేటా, కాంటాక్ట్స్ లేదా డీల్స్ ఇంకో కంపెనీకి అస్సలు కనిపించకూడదు (**Data Isolation**). అలాగే ప్రతి కంపెనీ ఏ సబ్‌స్క్రిప్షన్ ప్లాన్ (Free, Pro, Enterprise) లో ఉందో దాన్ని బట్టి ఫీచర్స్ లాక్ అవ్వాలి.

దీనికి సంబంధించిన ప్రొడక్షన్-రెడీ **High-Level Design (HLD)** ని ఇక్కడ చూద్దాం.

---

## 🏛️ 1. Multi-Tenant Database Architecture Options

మల్టీ-టెనెంట్ సిస్టమ్స్ డిజైన్ చేసేటప్పుడు డేటా ఐసోలేషన్ కోసం 3 పద్ధతులు ఉంటాయి. మన CRM కోసం మనం **"Pooled Database with Shared Schema (Row-Level Isolation)"** లేదా **"Database-per-Tenant"** వాడవచ్చు.

ఈ ప్రాజెక్ట్ కోసం అత్యంత కాస్ట్-ఎఫెక్టివ్ మరియు ప్రొడక్షన్-పాపులర్ అయిన **`Shared Database, Shared Schema (Row-Level Separation)`** పద్ధతిని ఎంచుకుందాం, దీనికి అదనంగా సెక్యూరిటీ కోసం PostgreSQL **Row-Level Security (RLS)** ని యాడ్ చేద్దాం.

```
Client Request (Header: x-tenant-id)
       │
       ▼
 [API Gateway / Route 53] ──> Tenant Identification (e.g., apple.crm.com or Header)
       │
       ▼
 [NestJS Core Application] ──> Tenant Interceptor / Middleware
       │
       ├──> [AWS Secrets Manager] (Stripe Keys & DB Passwords)
       ├──> [Redis Cache] (Tenant Subscriptions & Session Cache)
       └──> [Amazon Aurora PostgreSQL]
                 │
                 └──> (Tables enforced with Tenant ID & Row-Level Security)

```

---

## 🛠️ 2. Core Modules & Multi-Tenancy Engine

1. **Tenant & Subscription Module:** కొత్త కంపెనీల రిజిస్ట్రేషన్, **Stripe Billing** తో సబ్‌స్క్రిప్షన్ ప్లాన్స్ (Tier Limits) హ్యాండిల్ చేస్తుంది.
2. **Contact & Deal Management (CRM Core):** సేల్స్ లీడ్స్, కస్టమర్ డేటా, డీల్ పైప్‌లైన్‌ను మేనేజ్ చేస్తుంది.
3. **Global Audit Log Module:** కంపెనీలో ఏ యూజర్, ఏ రికార్డ్‌ను ఎప్పుడు డిలీట్ లేదా అప్‌డేట్ చేశారో ట్రాక్ చేసే సెంట్రలైజ్డ్ ఆడిటింగ్ సిస్టమ్.

---

## 🔄 3. Advanced Multi-Tenant Patterns in NestJS

### A. Dynamic Tenant Context Injection (Middleware)

ప్రతి రిక్వెస్ట్ వచ్చినప్పుడు అది ఏ కంపెనీ (Tenant) నుండి వచ్చిందో కనుక్కోవడానికి NestJS Middleware లేదా Interceptor వాడుతాం. ఇది సబ్‌డొమైన్ (`apple.crm.com`) లేదా హెడర్ (`x-tenant-id`) ద్వారా ఐడెంటిఫై చేస్తుంది.

```typescript
// tenant.middleware.ts
import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // క్లయింట్ హెడర్స్ నుండి Tenant ID ని పట్టుకోవడం
    const tenantId = req.headers["x-tenant-id"] as string;

    if (!tenantId) {
      throw new BadRequestException("X-Tenant-Id హెడర్ తప్పనిసరి!");
    }

    // రెస్పాన్స్ లోకల్స్ లేదా రిక్వెస్ట్ ఆబ్జెక్ట్ లో భద్రపరచడం, తద్వారా సర్వీసెస్ లో వాడుకోవచ్చు
    req["tenantId"] = tenantId;
    next();
  }
}
```

### B. Row-Level Security (RLS) లేదా Automated Query Filtering

డేటాబేస్ క్వెరీలు రాసేటప్పుడు డెవలపర్ పొరపాటున `WHERE tenant_id = 'XYZ'` అని రాయడం మర్చిపోతే, ఒకరి డేటా ఇంకొకరికి లీక్ అయిపోతుంది (SaaS లలో ఇది అతిపెద్ద విపత్తు).

- **పరిష్కారం:** **PostgreSQL Row-Level Security (RLS)** ఎనేబుల్ చేయడం. NestJS డేటాబేస్ కనెక్షన్ పూల్ నుండి కనెక్షన్ తీసుకున్న ప్రతిసారీ, `SET LOCAL app.current_tenant = 'tenant_uuid'` అని రన్ చేస్తుంది. దీనివల్ల పోస్ట్‌గ్రెస్‌ డేటాబేసే ఆటోమేటిక్‌గా కేవలం ఆ టెనెంట్‌కు సంబంధించిన రోస్ (Rows) మాత్రమే రిటర్న్ చేస్తుంది.

---

## 💳 4. Subscription & Feature Gating (Stripe Integration)

యూజర్ ప్రొడక్ట్స్ యాడ్ చేస్తుంటే, Pro ప్లాన్ లో 10,000 కాంటాక్ట్స్ లిమిట్ దాటగానే "Please Upgrade Your Plan" అని ఆపాలి.

- **పరిష్కారం:** మనం 23వ టాపిక్‌లో నేర్చుకున్న **NestJS Guards** ని ఇక్కడ వాడుతాం.

```typescript
// guards/feature-gating.guard.ts
@Injectable()
export class FeatureGatingGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private cacheManager: Cache,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredLimitKey = this.reflector.get<string>(
      "limitKey",
      context.getHandler(),
    );
    if (!requiredLimitKey) return true;

    const request = context.switchToHttp().getRequest();
    const tenantId = request["tenantId"];

    // ⚡ Redis నుండి ఆ టెనెంట్ యొక్క సబ్‌స్క్రిప్షన్ స్టేటస్ క్విక్ గా చెక్ చేయడం
    const tenantPlan = await this.cacheManager.get<any>(
      `tenant:plan:${tenantId}`,
    );

    // ఉదాహరణకు: కరెంట్ కౌంట్ లిమిట్ దాటితే ఫాల్స్ రిటర్న్ చేయడం
    const currentUsage = await this.getCurrentUsage(tenantId, requiredLimitKey);
    if (currentUsage >= tenantPlan.limits[requiredLimitKey]) {
      throw new ForbiddenException(
        "మీ ప్లాన్ లిమిట్ పూర్తయింది. దయచేసి అప్‌గ్రేడ్ చేయండి!",
      );
    }

    return true;
  }
}
```

---

## 📝 5. Global Audit Logging (BullMQ / Async Processing)

CRM లో ఒక డీల్ స్టేటస్ `$10,000` నుండి `$50,000` కి మారినా, లేదా ఒక కాంటాక్ట్ డిలీట్ అయినా ఆడిట్ లాగ్ రికార్డ్ అవ్వాలి.

- **ఆర్కిటెక్చర్ పద్ధతి:** ఆడిట్ లాగ్స్ రాయడం అనేది మెయిన్ API ని స్లో చేయకూడదు. కాబట్టి NestJS కంట్రోలర్ లో పని అవ్వగానే, ఒక ఆడిట్ ఈవెంట్‌ను **BullMQ (Redis)** లోకి నెట్టేస్తాం.
- బ్యాక్‌గ్రౌండ్ వర్కర్ ప్రశాంతంగా ఆ ఈవెంట్‌ను తీసుకుని **Time-Series Database** (ఉదాహరణకు: AWS Timestream) లేదా PostgreSQL లోని ఒక ప్రత్యేక ఆడిట్ టేబుల్‌లో సేవ్ చేస్తుంది.

---

## 📊 6. Database & Cache Schema Design

### PostgreSQL Core Tables

- **`tenants`:** `id (UUID)`, `company_name`, `domain`, `stripe_customer_id`, `plan_status` (`ACTIVE, TRIAL, PAST_DUE`), `created_at`.
- **`users`:** `id`, `tenant_id (FK)`, `name`, `email`, `password_hash`, `role` (`ADMIN, MANAGER, USER`).
- **`contacts`:** `id`, `tenant_id (FK)`, `first_name`, `email`, `phone`, `assigned_to (User FK)`. _(ఈ టేబుల్ పై RLS అమలవుతుంది)_

### Redis Cache

- **Tenant Metadata Cache:** Key: `tenant:plan:<tenantId>` -> Value: `{ plan: 'PRO', limits: { contacts: 10000, pipelines: 5 } }` (TTL: 24 Hours, Stripe Webhook వచ్చినప్పుడు ఫ్లష్ అవుతుంది).

---

## 🛡️ 7. DevOps & Security (AWS Cloud)

- **Subdomain Routing:** **AWS Route 53** మరియు **Application Load Balancer (ALB)** వాడి Wildcard Subdomains (`*.crm.com`) ని మేనేజ్ చేస్తాం. ఇది రిక్వెస్ట్‌లను ఆటోమేటిక్‌గా మన NestJS ECS Cluster లేదా Lambda కి రూట్ చేస్తుంది.
- **Tenant-Specific Encryption:** మరింత అడ్వాన్స్‌డ్ సెక్యూరిటీ కోసం, ప్రతి టెనెంట్‌కు **AWS KMS (Key Management Service)** ద్వారా ఒక విడి ఎన్‌క్రిప్షన్ కీ ని కేటాయించి, వారి సెన్సిటివ్ డేటాని ఎన్‌క్రిప్ట్ చేయవచ్చు.
- **CI/CD Pipeline:** GitHub Actions ద్వారా మల్టీ-టెనెంట్ మైగ్రేషన్స్ రన్ అవుతాయి. డేటాబేస్ అప్‌డేట్ చేసేటప్పుడు అన్ని టెనెంట్స్ టేబుల్స్ బ్రేక్ అవ్వకుండా బ్లూ-గ్రీన్ డిప్లాయ్‌మెంట్స్ వాడటం ఇక్కడ అత్యంత ఉత్తమమైన పద్ధతి.

---

# 5. AWS Serverless NestJS Backend (API Gateway, Lambda, SQS, SNS, EventBridge, PostgreSQL)

ఇది మీ సిలబస్‌లోని **Phase 20 (AWS Integration)** మరియు **Phase 30 (Production Deployment)** లను కలిపి మీ క్లౌడ్ ఆర్కిటెక్చర్ నాలెడ్జ్‌ను నిరూపించడానికి ఒక అల్టిమేట్ **Serverless Capstone Project**.

ఈ సిస్టమ్ యొక్క ముఖ్య ఉద్దేశ్యం: ఒక సర్వర్‌ను 24/7 రన్ చేస్తూ బిల్స్ పెంచకుండా, కేవలం రిక్వెస్ట్ వచ్చినప్పుడు మాత్రమే పని చేస్తూ, మిలియన్ల కొద్దీ ఈవెంట్లను తట్టుకోగల **Event-Driven Serverless Architecture** ని బిల్డ్ చేయడం.

దీనికి సంబంధించిన ప్రొడక్షన్-రెడీ **High-Level Design (HLD)** ని ఇక్కడ క్లియర్ గా చూద్దాం.

---

## 🏛️ 1. High-Level System Architecture

ఈ ఆర్కిటెక్చర్‌లో ప్రతి భాగం పూర్తిగా **Decoupled (విడివిడిగా)** ఉంటుంది. ఒకవేళ డేటాబేస్ డౌన్ అయినా సరే, కస్టమర్ రిక్వెస్ట్‌లు మిస్ అవ్వకుండా క్యూ (Queue) లో భద్రంగా ఉంటాయి.

```
Client (Web/App)
       │
       ▼
 [API Gateway] ──> [AWS Lambda (Core NestJS API)]
                          │
                          ├──> [AWS Secrets Manager] (DB Credentials)
                          │
                          ▼ (Asynchronous Event)
                    [Amazon EventBridge (Event Bus)]
                          │
               ┌──────────┴──────────┐
               ▼                     ▼
        [Amazon SQS]          [Amazon SNS]
        (Jobs Queue)       (Notification Topic)
               │                     │
               ▼                     ▼
 [AWS Lambda (Worker)]        [Email / SMS / Push]
               │
               ▼
  [Amazon Aurora Serverless v2] (PostgreSQL)

```

---

## 🛠️ 2. Core AWS & NestJS Components

- **Amazon API Gateway:** ప్రొడక్షన్ ఎండ్‌పాయింట్స్ (REST) ని మేనేజ్ చేస్తుంది. ఇది రూటింగ్‌ను చూసుకుంటూ, మాలిషియస్ ట్రాఫిక్ రాకుండా రక్షణ ఇస్తుంది.
- **AWS Lambda (NestJS Core):** మన మెయిన్ అప్లికేషన్ లాజిక్ అంతా ఇందులో ఉంటుంది. ఇది `@vendia/serverless-express` తో రన్ అవుతుంది.
- **Amazon EventBridge:** ఇది మన అప్లికేషన్ యొక్క **Central Event Hub**. ఒక యాక్షన్ జరగ్గానే (ఉదా: `UserRegistered`), ఆ ఈవెంట్‌ను EventBridge కి పంపుతాం. అక్కడ నుండి రూల్స్ ని బట్టి అది వేర్వేరు సర్వీసెస్ కి ట్రిగ్గర్ అవుతుంది.
- **Amazon SQS (Simple Queue Service):** డేటాబేస్ లో రైట్స్ (Writes) ఎక్కువగా ఉన్నప్పుడు లేదా భారీ టాస్క్స్ ఉన్నప్పుడు, డేటాబేస్ క్రాష్ అవ్వకుండా రిక్వెస్ట్‌లను క్యూ లో పెడుతుంది.
- **AWS Lambda (Queue Processor Worker):** ఇది ఒక విడి, చిన్న లైట్‌వెయిట్ లాంబ్డా ఫంక్షన్. ఇది కేవలం SQS లోని మెసేజ్‌లను తీసుకుని డేటాబేస్‌లో సేవ్ చేస్తుంది. దీనివల్ల మెయిన్ API పై లోడ్ పడదు.
- **Amazon Aurora Serverless v2 (PostgreSQL):** ట్రాఫిక్‌ను బట్టి తనంతట తానుగా CPU మరియు RAM ని పెంచుకునే (Auto-scale) రిలేషనల్ డేటాబేస్.

---

## 🔄 3. Advanced Serverless Patterns & Solutions

### A. Cold Start Optimization (ఎగ్జిక్యూషన్ స్పీడ్ పెంచడం)

మనం 20వ టాపిక్‌లో చూసినట్టు, NestJS పెద్ద ఫ్రేమ్‌వర్క్ కావడం వల్ల లాంబ్డా బూట్ అవ్వడానికి టైమ్ పడుతుంది.

- **పరిష్కారాలు:** 1. **Esbuild బండ్లింగ్:** మన కోడ్ మొత్తాన్ని ఒకే ఒక చిన్న `main.js` గా కంప్రెస్ చేసి డిప్లాయ్ చేస్తాం.

2. **Provisioned Concurrency:** ప్రొడక్షన్ లో మోస్ట్ క్రిటికల్ API ల కోసం కనీసం 2 లేదా 3 లాంబ్డా కంటైనర్లను ఎల్లప్పుడూ 'Warm' (రెడీగా) ఉంచుతాం.

### B. Connection Pooling in Serverless (కనెక్షన్ మేనేజ్‌మెంట్ సమస్య)

లాంబ్డా ఫంక్షన్స్ రిక్వెస్ట్‌లు పెరిగే కొద్దీ వందల కంటైనర్లుగా విడిపోతాయి. ప్రతి కంటైనర్ పోస్ట్‌గ్రెస్‌ డేటాబేస్‌కు విడివిడిగా కనెక్ట్ అయితే, డేటాబేస్ యొక్క `max_connections` లిమిట్ దాటిపోయి యాప్ క్రాష్ అవుతుంది.

- **అల్టిమేట్ ప్రొడక్షన్ సొల్యూషన్:** **AWS RDS Proxy** ఉపయోగించడం. మన లాంబ్డా ఫంక్షన్స్ నేరుగా DB కి వెళ్లకుండా ఈ ప్రాక్సీ కి కనెక్ట్ అవుతాయి. RDS Proxy ఆ కనెక్షన్స్ అన్నింటినీ పూల్ (Pool) చేసి డేటాబేస్‌ను కాపాడుతుంది.

---

## 💻 4. NestJS Event Bridge Integration (Publishing Events)

మన NestJS కోడ్ నుండి ఒక ఈవెంట్‌ను EventBridge కి ఎలా పంపాలో చూద్దాం:

```typescript
// events/user-event.service.ts
import { Injectable } from "@nestjs/common";
import {
  EventBridgeClient,
  PutEventsCommand,
} from "@aws-sdk/client-eventbridge";

@Injectable()
export class UserEventService {
  private eventBridge = new EventBridgeClient({ region: "ap-south-1" });

  async publishUserRegistered(userData: any) {
    const command = new PutEventsCommand({
      Entries: [
        {
          Source: "com.mycrm.user", // మన అప్లికేషన్ పేరు
          DetailType: "UserRegistered", // ఈవెంట్ రకం
          Detail: JSON.stringify(userData), // డేటా
          EventBusName: "custom-crm-bus", // AWS EventBridge బస్ పేరు
        },
      ],
    });

    try {
      await this.eventBridge.send(command);
      console.log("EventBridge కి ఈవెంట్ విజయవంతంగా పంపబడింది.");
    } catch (error) {
      console.error("EventBridge ఫెయిల్యూర్:", error);
    }
  }
}
```

---

## 📊 5. Database & Schema Configuration (PostgreSQL)

సర్వర్‌లెస్ లో మనం **TypeORM** లేదా **Prisma** వాడుతాం.

- **`users` టేబుల్:** `id (UUID)`, `name`, `email`, `status`.
- **`audit_events` టేబుల్:** `id`, `event_type`, `payload (JSONB)`, `processed_at`. (ఇక్కడ PostgreSQL లో `JSONB` వాడటం వల్ల ఫ్యూచర్ లో ఎలాంటి ఈవెంట్ స్ట్రక్చర్ వచ్చినా ఈజీగా స్టోర్ చేయవచ్చు).

---

## 🛡️ 6. Security, Monitoring & DevOps (Serverless Deploy)

- **Infrastructure as Code (IaC):** ఈ పూర్తి ఆర్కిటెక్చర్‌ను మనం కన్సోల్‌లో మాన్యువల్‌గా కాకుండా **Serverless Framework (`serverless.yml`)** లేదా **AWS CDK** ద్వారా TypeScript లో కోడ్ లాగా రాసి డిప్లాయ్ చేస్తాం.
- **Secrets Protection:** డేటాబేస్ యుఆర్ఎల్ లేదా పాస్‌వర్డ్స్ కోడ్‌లో పెట్టకుండా, లాంబ్డా బూట్ అయ్యేటప్పుడు **AWS Secrets Manager** నుండి ఆటోమేటిక్‌గా ఫెచ్ చేసుకునేలా సెట్ చేస్తాం (మనం 22వ టాపిక్‌లో నేర్చుకున్న పద్ధతి).
- **Observability (X-Ray & CloudWatch Insights):** \* **AWS X-Ray** ని ఎనేబుల్ చేయడం వల్ల, ఒక రిక్వెస్ట్ API Gateway నుండి లాంబ్డాకి, అక్కడి నుండి EventBridge ద్వారా SQS కి వెళ్ళడానికి పట్టిన సమయాన్ని గ్రాఫికల్ మ్యాప్ రూపంలో చూడవచ్చు.
- **nestjs-pino** వాడి జేసన్ (JSON) లాగ్స్ ని CloudWatch కి పంపుతాం.

---

> 💡 **ప్రాజెక్ట్ ముగింపు సమ్మరీ:** ఈ 5 కాప్‌స్టోన్ ప్రాజెక్ట్స్ (Enterprise Auth, E-commerce, HMS, SaaS CRM, AWS Serverless) మీ రెజ్యూమేలో ఉంటే, మీరు బ్యాకెండ్ ఆర్కిటెక్చర్‌లో ఏ సవాలునైనా తట్టుకోగలరని నిరూపితమవుతుంది.

---

# 6. Real-time Chat Application (WebSockets, Redis Pub/Sub, notifications)

ఇది మీ సిలబస్‌లోని **Phase 29 (WebSockets)**, **Phase 24 (Performance)** మరియు **Redis Pub/Sub Architecture** నాలెడ్జ్‌ను నిరూపించడానికి ఒక అద్భుతమైన రియల్-టైమ్ కాప్‌స్టోన్ ప్రాజెక్ట్.

వేల మంది యూజర్లు ఒకేసారి చాట్ చేస్తున్నప్పుడు, మెసేజ్‌లు ఎలాంటి డిలే (Latency) లేకుండా మిల్లీసెకన్లలో డెలివరీ అవ్వాలి. అలాగే సర్వర్లు స్కేల్ అయినప్పుడు (Server A, Server B ఉన్నప్పుడు) మెసేజ్‌లు మిస్ అవ్వకుండా ఉండాలి.

దీనికి సంబంధించిన ప్రొడక్షన్-రెడీ **High-Level Design (HLD)** ని ఇక్కడ చూద్దాం.

---

## 🏛️ 1. High-Level System Architecture (Distributed WebSockets)

ఈ సిస్టమ్‌ను మనం **Horizontal Scaling Architecture** లో డిజైన్ చేస్తున్నాం. క్లయింట్స్ లోడ్ బ్యాలెన్సర్ ద్వారా వేర్వేరు సాకెట్ సర్వర్లకు కనెక్ట్ అయినా, వెనుక ఉన్న **Redis Pub/Sub (Adapter)** ద్వారా అందరూ ఒకరితో ఒకరు కనెక్ట్ అయి ఉంటారు.

```
Client 1 (Mobile)           Client 2 (Web)
       │                           │
       ▼                           ▼
  [Server A]                  [Server B]  <──> (NestJS Socket.IO Gateways)
       │                           │
       └───────────┬───────────────┘
                   ▼
         [Redis Pub/Sub Adapter] (Message Broker)
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [MongoDB / DynamoDB]  [Amazon SNS / FCM] ──> Push Notifications
   (Chat History DB)     (If User is Offline)

```

---

## 🛠️ 2. Core Components & Architecture Layers

- **NestJS Socket.IO Gateways:** క్లయింట్స్ మరియు సర్వర్ మధ్య నిరంతర (Persistent) TCP కనెక్షన్‌ను మెయింటెన్ చేస్తాయి.
- **Redis Pub/Sub Adapter:** మీ చాట్ అప్లికేషన్ యొక్క గుండెకాయ లాంటిది. ఒక సర్వర్ లోని యూజర్ పంపిన మెసేజ్, ఇంకో సర్వర్ లోని యూజర్ కి చేరడానికి ఇది మధ్యవర్తిగా పనిచేస్తుంది.
- **Database Layer (MongoDB/DynamoDB):** చాట్ మెసేజ్‌లు చాలా వేగంగా (High Write Throughput) స్టోర్ అవ్వాలి కాబట్టి, ఇక్కడ **NoSQL Database** వాడటం అత్యుత్తమ ప్రొడక్షన్ పద్ధతి.
- **Push Notification Service (FCM / Amazon SNS):** ఒకవేళ మెసేజ్ అందుకునే యూజర్ ఆన్‌లైన్ లో లేకపోతే (Socket Disconnected), ఈ సర్వీస్ ఆటోమేటిక్‌గా అతనికి మొబైల్ పుష్ నోటిఫికేషన్ పంపుతుంది.

---

## 🔄 3. Advanced Real-time Patterns & Solutions

### A. WebSocket Scaling with Redis Adapter (మల్టిపుల్ సర్వర్స్ కమ్యూనికేషన్)

మనం 29వ టాపిక్‌లో చూసినట్టు, `User 1` వెళ్ళి `Server A` కి, `User 2` వెళ్ళి `Server B` కి కనెక్ట్ అయితే ఒకరి మెసేజ్ ఇంకొకరికి వెళ్ళదు.

- **పరిష్కారం:** NestJS లో `@socket.io/redis-adapter` కాన్ఫిగర్ చేస్తాం. `Server A` కి మెసేజ్ రాగానే, అది Redis Pub/Sub లోని ఛానల్ కి పబ్లిష్ చేస్తుంది. `Server B` ఆ ఛానల్‌ని సబ్‌స్క్రైబ్ చేసుకుంటుంది కాబట్టి, వెంటనే మెసేజ్ అందుకుని `User 2` కి డెలివరీ చేస్తుంది.

### B. Chat History Caching (క్యాషింగ్ స్ట్రాటజీ)

యూజర్ చాట్ రూమ్ ఓపెన్ చేసిన ప్రతిసారీ మెసేజ్ హిస్టరీ కోసం నేరుగా డేటాబేస్ కి వెళ్తే DB పై లోడ్ పడుతుంది.

- **పరిష్కారం:** ప్రతి చాట్ రూమ్ యొక్క చివరి 20 లేదా 50 మెసేజ్‌లను **Redis Sorted Sets (ZSET)** లో దాస్తాం. టైమ్‌స్టాంప్‌ను స్కోర్‌గా వాడటం వల్ల మెసేజ్‌లు ఎప్పుడూ ఆర్డర్ లో ఉంటాయి. క్యాషే మిస్ అయితేనే MongoDB కి వెళ్తాం.

### C. Hybrid Online/Offline Status Tracking (ప్రెజెన్స్ ఇంజన్)

ఒక యూజర్ ఆన్‌లైన్ లో ఉన్నాడా లేదా అని తెలుసుకోవడం చాలా ముఖ్యం.

- **పరిష్కారం:** యూజర్ కనెక్ట్ అవ్వగానే Redis లో `user:status:<userId> = "online"` అని పెడతాం (with TTL: 60 seconds). క్లయింట్ ప్రతి 30 సెకన్లకి ఒక చిన్న **Heartbeat (Ping)** ఈవెంట్ పంపుతూ ఉంటుంది. కనెక్షన్ కట్ అవ్వగానే Heartbeat ఆగిపోతుంది, Redis కీ ఎక్స్‌పైర్ అయిపోతుంది. తద్వారా అతను ఆఫ్‌లైన్ లోకి వెళ్ళినట్టు సిస్టమ్ గుర్తిస్తుంది.

---

## 💻 4. NestJS Core Implementation (Gateway with Authentication)

సాకెట్ హాండ్‌షేక్ సమయంలోనే **JWT Authentication Guard** వాడి కనెక్షన్‌ను సెక్యూర్ చేసే విధానం:

```typescript
// chat/chat.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { UseGuards } from "@nestjs/common";
import { WsJwtGuard } from "./guards/ws-jwt.guard"; // Custom WS Guard

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway {
  @WebSocketServer() server: Server;

  // 1. కనెక్ట్ అయ్యేటప్పుడే టోకెన్ వెరిఫికేషన్ (Security)
  async handleConnection(client: Socket) {
    const token = client.handshake.auth?.token;
    if (!token) {
      client.disconnect();
      return;
    }
    // టోకెన్ వెరిఫై చేసి యూజర్ ఐడీని సాకెట్ సెషన్‌లో దాచడం
    client.data.userId = "extracted-user-id";
    console.log(`User ${client.data.userId} connected`);
  }

  // 2. రూమ్ బేస్డ్ చాటింగ్ (Group Chat)
  @SubscribeMessage("send_message")
  @UseGuards(WsJwtGuard)
  async handleMessage(
    @MessageBody() data: { roomId: string; message: string },
    @ConnectedSocket() client: Socket,
  ) {
    const payload = {
      senderId: client.data.userId,
      message: data.message,
      timestamp: new Date(),
    };

    // ⚡ A. రూమ్ లోని మిగతా అందరికీ రియల్-టైమ్ లో పంపడం (Redis Adapter వెనుక పనిచేస్తుంది)
    this.server.to(data.roomId).emit("receive_message", payload);

    // 📦 B. బ్యాక్‌గ్రౌండ్ జాబ్ (BullMQ) కి పంపడం - మెసేజ్ ని DB లో సేవ్ చేయడానికి
    // దీనివల్ల సాకెట్ కనెక్షన్ స్లో అవ్వదు
    // await this.chatQueue.add('save_message', { roomId: data.roomId, ...payload });
  }
}
```

---

## 📊 5. Database Schema Design (MongoDB)

చాట్ హిస్టరీ కోసం మోంగోడిబి లో **Bucket Pattern** వాడటం ప్రొడక్షన్ స్టాండర్డ్. అంటే ప్రతి ఒక మెసేజ్ కి ఒక రో (Row) క్రియేట్ చేయకుండా, ఒక రూమ్ లోని 100 మెసేజ్‌లను ఒకే డాక్యుమెంట్ (Bucket) లో దాస్తాం. దీనివల్ల ఇండెక్సింగ్ సైజ్ తగ్గి రీడ్ స్పీడ్ విపరీతంగా పెరుగుతుంది.

- **`messages` కలెక్షన్ (Bucket Pattern):**

```json
{
  "_id": "bucket_uuid",
  "roomId": "room_123",
  "count": 2,
  "messages": [
    {
      "senderId": "user_A",
      "message": "హాయ్ రా!",
      "timestamp": "2026-06-30T10:00:00Z"
    },
    {
      "senderId": "user_B",
      "message": "చెప్పరా..",
      "timestamp": "2026-06-30T10:00:05Z"
    }
  ]
}
```

---

## 🛡️ 6. DevOps & Infrastructure

- **Sticky Sessions:** AWS Application Load Balancer (ALB) వాడుతున్నప్పుడు **Sticky Sessions (Session Affinity)** ఎనేబుల్ చేయాలి. ఎందుకంటే Socket.IO మొదట HTTP Long-polling ద్వారా కనెక్ట్ అయి తర్వాత WebSockets కి అప్‌గ్రేడ్ అవుతుంది కాబట్టి, క్లయింట్ రిక్వెస్ట్‌లు ఒకే సర్వర్ కి వెళ్లాలి.
- **API Gateway Support:** ఒకవేళ మీరు AWS Lambda వాడుతుంటే, నార్మల్ API Gateway సరిపోదు, దానికి బదులు **API Gateway WebSocket APIs** వాడాల్సి ఉంటుంది.
- **Load Testing:** ఈ చాట్ అప్లికేషన్‌ను ప్రొడక్షన్‌కి పంపేముందు **Artillery** టూల్ లో `artillery-engine-socketio` ప్లగిన్ వాడి, ఒకేసారి 10,000 సాకెట్ కనెక్షన్స్ క్రియేట్ చేసి సర్వర్ లోడ్ తట్టుకోగలదో లేదో టెస్ట్ చేస్తాం.

---

# 7. File Processing Platform (S3 uploads, queues, background workers, PDF/image processing)

ఈ **File Processing Platform** కాప్‌స్టోన్ ప్రాజెక్ట్ మీ సిలబస్‌లోని **Phase 24 (Performance - Streaming)**, **Phase 26 (DevOps - Lambda/Serverless)** మరియు **Phase 31 (Expert Topics - BullMQ/Worker Threads)** ల నాలెడ్జ్‌ను నిరూపించడానికి ఒక పక్కా ప్రొడక్షన్-లెవెల్ ప్రాజెక్ట్.

యూజర్లు పెద్ద పెద్ద ఫైల్స్ (PDFs, Images, Videos) అప్‌లోడ్ చేసినప్పుడు మీ NestJS మెయిన్ సర్వర్ మెమరీ నిండిపోయి (`Heap out of memory`) క్రాష్ అవ్వకుండా, బ్యాక్‌గ్రౌండ్‌లో అత్యంత వేగంగా ఆ ఫైల్స్‌ను రీసైజ్ లేదా కంప్రెస్ ఎలా చేయాలో ఈ **High-Level Design (HLD)** లో చూద్దాం.

---

## 🏛️ 1. High-Level System Architecture (Decoupled Storage & Processing)

ఈ ఆర్కిటెక్చర్ యొక్క ముఖ్య ఉద్దేశ్యం: **"ఫైల్ డేటా మన NestJS మెయిన్ సర్వర్ లోపలికి అస్సలు రాకూడదు."** క్లయింట్ నేరుగా AWS S3 కే అప్‌లోడ్ చేస్తుంది, మన సర్వర్ కేవలం ఈవెంట్లను మాత్రమే హ్యాండిల్ చేస్తుంది.

```
Client (Web/App) ──[ 1. Request Presigned URL ]──> [ NestJS Main API ]
       │                                                   │
       │ [ 2. Returns Secure S3 Upload URL ] <─────────────┘
       ▼
 [ Amazon S3 Bucket ] (Raw Files Store)
       │
       ▼ [ 3. Trigger S3 Event Notification ]
  [ Amazon SQS ] (File Processing Queue)
       │
       ▼
 [ NestJS / Lambda Workers ] ──> (Sharp / PDF-Kit Processing)
       │
       ▼
 [ Amazon S3 Bucket ] (Processed / Optimized Files)

```

---

## 🛠️ 2. Core Components & AWS Integration

- **NestJS Main API:** ఇది కేవలం యూజర్ రిక్వెస్ట్‌లను తీసుకోవడం, అథెంటికేషన్ మరియు S3 **Presigned URLs** ని జనరేట్ చేసి ఇవ్వడానికి మాత్రమే ఉపయోగపడుతుంది.
- **Amazon S3 (Simple Storage Service):** రెండు బకెట్లు ఉంటాయి: ఒకటి `raw-uploads-bucket` (యూజర్ అప్‌లోడ్ చేసే ఒరిజినల్ ఫైల్స్), రెండు `processed-files-bucket` (కంప్రెస్ లేదా వాటర్‌మార్క్ చేసిన ఫైనల్ ఫైల్స్).
- **Amazon SQS / BullMQ (Redis):** ఫైల్ అప్‌లోడ్ అవ్వగానే బ్యాక్‌గ్రౌండ్ టాస్క్‌లను లైన్‌లో పెట్టే (Queuing) లేయర్.
- **Background Workers (NestJS Microservice / AWS Lambda):** మెయిన్ API తో సంబంధం లేకుండా కేవలం ఫైల్స్ ప్రాసెస్ చేయడానికి మాత్రమే రన్ అయ్యే డెడికేటెడ్ వర్కర్స్.

---

## 🔄 3. Advanced Production Patterns & Solutions

### A. S3 Presigned URL Pattern (సర్వర్ మెమరీ సేవింగ్)

సాధారణంగా మనం `@UploadedFile()` వాడి ఫైల్‌ను మన సర్వర్ ద్వారా అప్‌లోడ్ చేస్తాం. కానీ ఒకేసారి 100 మంది 50MB ఫైల్స్ అప్‌లోడ్ చేస్తే, మన సర్వర్ రామ్ (RAM) మొత్తం నిండిపోయి యాప్ డౌన్ అవుతుంది.

- **పరిష్కారం:** యూజర్ అప్‌లోడ్ బటన్ నొక్కగానే మన NestJS API, AWS SDK ని వాడుకుని ఒక సురక్షితమైన **Presigned URL** ని క్రియేట్ చేసి ఫ్రంటెండ్‌కి ఇస్తుంది. ఫ్రంటెండ్ ఆ యుఆర్ఎల్ ని వాడుకుని ఫైల్‌ను **డైరెక్ట్ గా ఎస్3 బకెట్ లోకి** పుష్ చేస్తుంది. మన సర్వర్ పై 0% మెమరీ లోడ్ పడుతుంది!

### B. Heavy Processing using Sharp & Worker Threads

ఇమేజ్ రీసైజింగ్ (`sharp` లైబ్రరీ) లేదా PDF ప్రాసెసింగ్ (`pdf-lib`) అనేవి విపరీతమైన CPU శక్తిని తీసుకుంటాయి (CPU Intensive).

- **పరిష్కారం:** మనం 31వ టాపిక్‌లో చూసినట్టు, వీటిని మెయిన్ థ్రెడ్‌లో రన్ చేయకుండా **BullMQ (with Redis)** లేదా **Node.js Worker Threads** ద్వారా విడిగా రన్ చేయాలి. ఒకవేళ మీరు AWS వాడితే, S3 బకెట్‌కి ఫైల్ రాగానే ఆటోమేటిక్‌గా ఒక **AWS Lambda Worker ఫంక్షన్** ట్రిగ్గర్ అయ్యేలా సెట్ చేయవచ్చు.

---

## 💻 4. NestJS Core Implementation (Presigned URL Generation)

మన NestJS సర్వర్ లో ప్రెసైన్డ్ యుఆర్ఎల్ ఎలా జనరేట్ చేయాలో చూద్దాం:

```typescript
// file/file.service.ts
import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class FileService {
  private s3 = new S3Client({ region: "ap-south-1" });

  async generateUploadUrl(userId: string, fileName: string, fileType: string) {
    const fileKey = `raw/${userId}/${uuidv4()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: "raw-uploads-bucket",
      Key: fileKey,
      ContentType: fileType,
    });

    // ⚡ 2 నిమిషాల పాటు మాత్రమే పనిచేసే సురక్షితమైన అప్‌లోడ్ లింక్ ని జనరేట్ చేయడం
    const presignedUrl = await getSignedUrl(this.s3, command, {
      expiresIn: 120,
    });

    return {
      presignedUrl,
      fileKey, // ఈ కీ ని ఫ్రంటెండ్ తర్వాత మన DB లో సేవ్ చేయడానికి వాడుకుంటుంది
    };
  }
}
```

---

## 📊 5. Background Processing Worker (BullMQ Example)

ఫైల్ అప్‌లోడ్ అయిపోయిన తర్వాత, ఇమేజ్‌ను రీసైజ్ చేయడానికి బ్యాక్‌గ్రౌండ్ వర్కర్ కోడ్ ఇలా ఉంటుంది:

```typescript
// file/file.processor.ts
import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import * as sharp from "sharp";
// AWS SDK Imports...

@Processor("file-processing-queue")
export class FileProcessor extends WorkerHost {
  async process(job: Job<{ fileKey: string; userId: string }>) {
    const { fileKey } = job.data;
    console.log(`ఫైల్ ప్రాసెస్ అవుతోంది: ${fileKey}`);

    // 1. S3 నుండి ఒరిజినల్ ఫైల్ ని స్ట్రీమ్ (Stream) ద్వారా తెచ్చుకోవడం
    const s3Object = await this.downloadFromS3(fileKey);

    // 2. 'Sharp' లైబ్రరీ వాడి ఇమేజ్ ని 800x600 కి రీసైజ్ చేసి కంప్రెస్ చేయడం
    const optimizedBuffer = await sharp(s3Object.Body)
      .resize(800, 600, { fit: "inside" })
      .jpeg({ quality: 80 })
      .toBuffer();

    // 3. ప్రాసెస్ చేసిన ఫైనల్ ఫైల్ ని 'processed-files-bucket' లో సేవ్ చేయడం
    const newKey = fileKey.replace("raw/", "optimized/");
    await this.uploadToS3(newKey, optimizedBuffer);

    // 4. డేటాబేస్ లో ఫైల్ స్టేటస్ ని 'COMPLETED' గా అప్‌డేట్ చేయడం
    // await this.fileDb.updateStatus(job.id, 'COMPLETED', newKey);

    return { success: true };
  }
}
```

---

## 🛡️ 6. DevOps, Security & Resiliency

- **S3 Lifecycle Rules (కాస్ట్ సేవింగ్):** యూజర్లు అప్‌లోడ్ చేసే ఒరిజినల్ `raw` ఫైల్స్ ప్రాసెస్ అయిపోయాక మనకు అనవసరం. కాబట్టి S3 Lifecycle Policy సెట్ చేసి, 7 రోజుల తర్వాత ఆ ఒరిజినల్ ఫైల్స్ ఆటోమేటిక్‌గా డిలీట్ అయ్యేలా చేయాలి. దీనివల్ల AWS బిల్స్ భారీగా తగ్గుతాయి.
- **Dead Letter Queue (DLQ):** ఒకవేళ యూజర్ పాడైపోయిన (Corrupted) ఫైల్ అప్‌లోడ్ చేస్తే, మన వర్కర్ ఫెయిల్ అవుతుంది. అలా 3 సార్లు ఫెయిల్ అయిన జాబ్స్‌ను ఆటోమేటిక్‌గా SQS DLQ కి పంపి, డెవలపర్లకి అలర్ట్ వెళ్ళేలా చేయాలి.
- **Anti-Virus Scanning:** ప్రొడక్షన్ లెవెల్స్ లో హ్యాకర్లు వైరస్ ఉన్న ఫైల్స్ అప్‌లోడ్ చేయకుండా ఉండటానికి, S3 కి ఫైల్ రాగానే బ్యాక్‌గ్రౌండ్ లో **AWS Lambda + ClamAV (Antivirus)** వాడి ఫైల్ క్లీన్ గా ఉందో లేదో వెరిఫై చేసాకే వర్కర్ కి పంపాలి.

---
