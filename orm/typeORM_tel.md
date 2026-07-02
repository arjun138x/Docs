If you want to become an **expert in TypeORM** (especially with **NestJS + Node.js + PostgreSQL + AWS**), here's a complete roadmap from beginner to advanced.

---

# TypeORM Complete Roadmap (2026)

## [1. ORM Fundamentals](#1-orm-fundamentals-1)

### [1. What is an ORM?](#1-orm-అంటే-ఏమిటి-what-is-an-orm)

- What is ORM?
- ORM vs Raw SQL
- Advantages & disadvantages
- Active Record vs Data Mapper
- TypeORM Architecture

---

### [2. Installation](#2-installation)

- Install TypeORM
- Install Database Driver
  - PostgreSQL
  - MySQL
  - MariaDB
  - MSSQL
  - SQLite

- Configure TypeORM

Example

```ts
TypeOrmModule.forRoot({
  type: "postgres",
  host: "...",
  port: 5432,
  username: "...",
  password: "...",
  database: "...",
  autoLoadEntities: true,
  synchronize: false,
});
```

---

## [2. Entity Design](#2-entity-design-1)

### [Entity](#entity-1)

```ts
@Entity()
export class User {}
```

Topics

- @Entity()
- Table names
- Schema
- Comments
- Naming strategies

---

### [Columns](#columns-1)

Learn every column type

```ts
@Column()
```

Topics

- varchar
- text
- integer
- bigint
- decimal
- boolean
- json
- jsonb
- uuid
- timestamp
- date
- enum
- array

Options

- nullable
- default
- unique
- length
- precision
- scale
- comment

---

### [Primary Keys](#primary-keys-1)

```ts
@PrimaryGeneratedColumn()

@PrimaryColumn()
```

Topics

- UUID
- Auto Increment
- Composite Keys

---

### Generated Columns

```ts
@Generated("uuid")
```

---

## [3. Entity Relationships](#3-entity-relationships-1)

### One-to-One

```ts
@OneToOne()
```

---

### One-to-Many

```ts
@OneToMany()
```

---

### Many-to-One

```ts
@ManyToOne()
```

---

### Many-to-Many

```ts
@ManyToMany()
```

---

### Join Tables

```ts
@JoinColumn()

@JoinTable()
```

---

### Cascading

- insert
- update
- remove

---

### Eager Loading

---

### Lazy Loading

---

### Self Referencing

Example

Employee → Manager

---

### Tree Entities

- Closure Table
- Nested Set
- Materialized Path

---

## [4. Repository Pattern](#4-repository-pattern-1)

### Repository APIs

```ts
find()

findOne()

save()

insert()

update()

delete()

remove()

softDelete()

recover()
```

---

### Advanced Repository

- exists()
- upsert()
- preload()
- merge()
- increment()
- decrement()
- count()

---

### Custom Repository

---

## [5. Query Builder](#5-query-builder-1)

Most important topic.

### Select Query

```ts
createQueryBuilder();
```

---

### Where

- where
- andWhere
- orWhere

---

### Parameters

```ts
:id
```

---

### Select

- addSelect()
- aliases

---

### Ordering

```ts
orderBy();
```

---

### Pagination

```ts
skip();

take();
```

---

### Joins

- leftJoin
- innerJoin
- leftJoinAndSelect
- relation ids

---

### Aggregate Functions

- COUNT
- SUM
- AVG
- MAX
- MIN

---

### Group By

---

### Having

---

### Sub Queries

---

### Raw SQL

```ts
query();
```

---

### Common Table Expressions (CTE)

---

## [6. CRUD Operations](#6-crud-operations-1)

Create

Read

Update

Delete

Bulk Insert

Bulk Update

Bulk Delete

Upsert

---

## [7. Transactions](#7-transactions-1)

Very Important

### QueryRunner

```ts
startTransaction();

commit();

rollback();
```

---

### Manager Transaction

```ts
manager.transaction();
```

---

### Nested Transactions

---

### Isolation Levels

- READ UNCOMMITTED
- READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE

---

## [8. Migrations](#8-migrations-1)

Never use synchronize in production.

Learn

```bash
migration:create

migration:generate

migration:run

migration:revert
```

Topics

- Create Table
- Alter Table
- Add Column
- Drop Column
- Rename Column
- Create Index
- Drop Index

---

## [9. Indexing](#9-indexing-1)

```ts
@Index()
```

Learn

- Single Index
- Composite Index
- Unique Index
- Partial Index
- Full Text Index (Postgres)

---

## [10. Constraints](#10-constraints-1)

- Primary Key
- Foreign Key
- Unique
- Check
- Default
- Composite Constraints

---

## [11. Validation](#11-validation-1)

Using

- class-validator
- class-transformer

Before saving data.

---

## [12. Entity Listeners](#12-entity-listeners-1)

```ts
@BeforeInsert()

@AfterInsert()

@BeforeUpdate()

@AfterUpdate()

@BeforeRemove()
```

---

## [13. Subscribers](#13-subscribers-గ్లోబల్-ఈవెంట్-లిజనర్స్)

Global event listeners.

---

## [14. Soft Delete](#14-soft-delete-డేటాను-దాచడం)

```ts
@DeleteDateColumn()
```

Learn

- softDelete()
- restore()

---

## [15. Advanced Data Types](#15-advanced-data-types-1)

Postgres specific

- JSON
- JSONB
- UUID
- Arrays
- Enums
- HStore
- Geography
- Geometry

---

## [16. Performance Optimization](#16-performance-optimization-1)

Avoid

```ts
N+1 Query Problem
```

Learn

- Relations
- Select only required fields
- Pagination
- Query caching
- Batch inserts
- Indexes
- Connection Pooling

---

## [17. TypeORM Configuration](#17-typeorm-configuration-1)

Options

```ts
logging;

cache;

ssl;

poolSize;

retryAttempts;
```

---

## [18. Caching](#18-caching-1)

Enable Query Cache

Redis Cache

In-memory Cache

---

## [19. Security](#19-security-1)

Prevent

- SQL Injection
- Mass Assignment
- Sensitive Columns
- Encryption
- Parameterized Queries

---

## [20. TypeORM with NestJS](#20-typeorm-with-nestjs-1)

Topics

### Inject Repository

```ts
@InjectRepository(User)
```

---

### Module Setup

---

### Multiple Databases

---

### Multiple Connections

---

### Request Scoped Repository

---

### Custom Providers

---

## [21. TypeORM with PostgreSQL](#21-typeorm-with-postgresql-1)

Master

- JSONB
- Array
- Enum
- UUID
- Full Text Search
- Window Functions
- Materialized Views
- Stored Procedures
- Functions
- Triggers

---

## [22. Production Best Practices](#22-production-best-practices-1)

- Disable synchronize
- Use migrations
- Logging
- Retry strategy
- Health checks
- Connection Pool
- Monitoring
- Error handling
- Transactions
- Backup strategy

---

## [Expert-Level Topics](#expert-level-topics-1)

- Generic Repository Pattern
- Dynamic Query Builder
- Multi-Tenant Architecture
- Read Replica Configuration
- Database Sharding Concepts
- Optimistic Locking
- Pessimistic Locking
- Version Columns
- Audit Logs
- Event Sourcing Integration
- CQRS with TypeORM
- Row-Level Security (PostgreSQL)
- Entity Inheritance
- Embedded Entities
- View Entities
- Relation IDs
- Relation Counts
- Streaming Large Result Sets
- Batch Processing
- Custom Naming Strategies
- Custom Logger
- Custom Migration Generator
- Database Seeding
- Factory Pattern
- Testing with In-Memory Databases
- Mocking Repositories
- Unit Testing
- Integration Testing

---

# TypeORM + PostgreSQL Learning Order

1. ORM Basics
2. Installation & Configuration
3. Entities
4. Columns & Data Types
5. Primary Keys
6. Relationships
7. Repository APIs
8. CRUD Operations
9. Query Builder
10. Advanced Queries
11. Transactions
12. Migrations
13. Constraints & Indexes
14. Validation
15. Entity Listeners & Subscribers
16. Soft Deletes
17. Performance Optimization
18. Caching
19. Security
20. NestJS Integration
21. PostgreSQL Advanced Features
22. Production Best Practices
23. Expert-Level Patterns (Multi-tenancy, CQRS, Locking, Testing)

---

## Interview Preparation Checklist

Make sure you can confidently answer and implement:

- Difference between `save()`, `insert()`, `update()`, and `upsert()`
- `find()` vs `QueryBuilder`
- Eager vs Lazy loading
- `OneToMany` vs `ManyToMany`
- Transaction handling with `QueryRunner`
- Optimistic vs Pessimistic locking
- N+1 query problem and how to avoid it
- Migration generation and deployment strategy
- Soft delete implementation
- Pagination (`skip/take` vs keyset pagination)
- Indexing strategies and query optimization
- Repository pattern vs custom repositories
- Connection pooling and production configuration
- Multi-database and multi-tenant setups
- Best practices for using TypeORM with NestJS in AWS Lambda/serverless environments

Since you've been learning **NestJS**, **PostgreSQL**, **AWS Serverless**, and **backend system design**, this roadmap aligns well with your stack. A practical next step is to build a **production-style NestJS + TypeORM + PostgreSQL project** that incorporates authentication, RBAC, migrations, transactions, caching, auditing, and comprehensive testing.

---

# 1. ORM Fundamentals

### ORM అంటే ఏమిటి?

సాధారణంగా మనం డేటాబేస్‌తో పని చేసేటప్పుడు `SELECT * FROM users;` వంటి SQL క్వెరీలను రాస్తాము. కానీ **ORM (Object-Relational Mapper)** ఉపయోగించినప్పుడు, మనం SQL క్వెరీలకు బదులుగా మన ప్రోగ్రామింగ్ లాంగ్వేజ్ (TypeScript/JavaScript) లోని **Classes మరియు Objects** నే ఉపయోగిస్తాం.

- **Object:** మీ కోడ్‌లో ఉండే ఒక క్లాస్ (ఉదా: `User` class).
- **Relational:** మీ డేటాబేస్ టేబుల్ (ఉదా: `users` table).
- **Mapping:** ఈ రెండింటిని అనుసంధానించడం.

### TypeORM ఎందుకు వాడాలి?

1. **SQL రాయక్కర్లేదు:** డేటాబేస్ ఆపరేషన్స్ (Insert, Update, Delete) చేయడానికి SQL కోడ్ రాయాల్సిన అవసరం ఉండదు.
2. **TypeScript సపోర్ట్:** ఇది టైప్ స్క్రిప్ట్ కోసం ప్రత్యేకంగా డిజైన్ చేయబడింది, కాబట్టి కోడ్ రాయడం చాలా సులభం మరియు సురక్షితం.
3. **డేటాబేస్ ఇండిపెండెంట్:** MySQL, PostgreSQL, SQLite, Oracle వంటి ఏ డేటాబేస్‌కైనా మీరు ఒకే రకమైన కోడ్ రాయవచ్చు.
4. **తక్కువ కోడ్:** తక్కువ లైన్ల కోడ్‌తో ఎక్కువ పని పూర్తి చేయవచ్చు.

---

తప్పకుండా, మీరు అడిగిన టాపిక్స్‌ను తెలుగులో వివరంగా చూద్దాం.

---

### 1. ORM అంటే ఏమిటి? (What is an ORM?)

ORM అంటే **Object-Relational Mapper**. ఇది ఒక సాఫ్ట్‌వేర్ టెక్నిక్. దీని ద్వారా మనం డేటాబేస్‌లోని డేటాను మన ప్రోగ్రామింగ్ లాంగ్వేజ్ (JavaScript/TypeScript) లోని **Objects** రూపంలో వాడుకోవచ్చు.

సాధారణంగా డేటాబేస్ టేబుల్స్ (Relational) రూపంలో ఉంటుంది, కానీ ప్రోగ్రామింగ్ (OOP) ఆబ్జెక్ట్స్ రూపంలో ఉంటుంది. ఈ రెండింటి మధ్య వారధిలా పనిచేసేదే ORM.

---

### 2. ORM vs Raw SQL

డేటాబేస్‌తో కమ్యూనికేట్ చేయడానికి రెండు మార్గాలు ఉన్నాయి:

| ఫీచర్             | Raw SQL                                  | ORM                                            |
| ----------------- | ---------------------------------------- | ---------------------------------------------- |
| **కోడ్**          | `SELECT * FROM users WHERE id=1;`        | `userRepository.findOneBy({ id: 1 });`         |
| **నియంత్రణ**      | డెవలపర్‌కు పూర్తి నియంత్రణ ఉంటుంది.      | ORM మన తరపున క్వెరీని జనరేట్ చేస్తుంది.        |
| **వేగం**          | చాలా వేగంగా ఉంటుంది.                     | క్వెరీ జనరేట్ అవ్వడానికి కొంచెం సమయం పడుతుంది. |
| **మెయింటెనెన్స్** | కష్టమైన క్వెరీలను మెయింటైన్ చేయడం కష్టం. | కోడ్ రాయడం సులభం, మెయింటెనెన్స్ సులభం.         |

---

### 3. ORM వల్ల లాభాలు మరియు నష్టాలు (Advantages & Disadvantages)

**లాభాలు (Advantages):**

- **ఉత్పాదకత (Productivity):** ఎక్కువ SQL క్వెరీలు రాయాల్సిన అవసరం ఉండదు, త్వరగా కోడింగ్ పూర్తి చేయవచ్చు.
- **సెక్యూరిటీ (Security):** SQL Injection వంటి దాడుల నుండి ఆటోమేటిక్‌గా రక్షణ లభిస్తుంది.
- **డేటాబేస్ మార్పు:** ఒకవేళ మీరు MySQL నుండి PostgreSQLకి మారాలనుకుంటే, కోడ్‌లో పెద్దగా మార్పులు చేయనక్కర్లేదు.
- **మెయింటెనెన్స్:** కోడ్ చదవడానికి, అర్థం చేసుకోవడానికి చాలా స్పష్టంగా ఉంటుంది.

**నష్టాలు (Disadvantages):**

- **పర్ఫార్మెన్స్:** క్లిష్టమైన క్వెరీల విషయంలో ORM ద్వారా వచ్చే SQL పర్ఫార్మెన్స్ కొంచెం తక్కువగా ఉండవచ్చు.
- **నేర్చుకోవడం (Learning Curve):** ORM ఎలా పనిచేస్తుందో అర్థం చేసుకోవడానికి కొంత సమయం పడుతుంది.

---

### 4. Active Record vs Data Mapper

ORMలలో ఇవి రెండు ప్రధాన పద్ధతులు:

- **Active Record (యాక్టివ్ రికార్డ్):** డేటాబేస్ ఆపరేషన్స్ అన్నీ మోడల్ క్లాస్ (Model Class) లోనే ఉంటాయి.
- ఉదా: `user.save()`, `user.delete()` అని ఆ క్లాస్ నుండే కాల్ చేయవచ్చు. ఇది చిన్న ప్రాజెక్టులకు బాగుంటుంది.

- **Data Mapper (డేటా మ్యాపర్):** డేటాబేస్ ఆపరేషన్స్ అన్నీ విడిగా **Repository** అనే క్లాస్‌లలో ఉంటాయి.
- ఉదా: `userRepository.save(user)`. ఇది పెద్ద ప్రాజెక్టులలో క్లీన్ కోడ్ కోసం చాలా బాగుంటుంది. **TypeORM రెండింటినీ సపోర్ట్ చేస్తుంది.**

---

### 5. TypeORM ఆర్కిటెక్చర్ (TypeORM Architecture)

TypeORM ఆర్కిటెక్చర్‌లో ముఖ్యమైనవి ఇవే:

1. **Entity:** ఇది డేటాబేస్ టేబుల్‌ని ప్రతిబింబించే క్లాస్. డేటాబేస్‌లోని కాలమ్స్ అన్నీ ఇందులో ప్రాపర్టీస్‌గా ఉంటాయి.
2. **DataSource/Connection:** ఇది మీ Node.js అప్లికేషన్‌కి మరియు డేటాబేస్‌కి మధ్య కనెక్షన్‌ను ఏర్పాటు చేస్తుంది.
3. **Repository:** డేటాను సేవ్ చేయడానికి, పొందడానికి (CRUD) ఉపయోగించే ఒక ఆబ్జెక్ట్.
4. **QueryBuilder:** ఒకవేళ ORM పద్ధతి సరిపోకపోతే, మనమే స్వయంగా క్లిష్టమైన SQL క్వెరీలను బిల్డ్ చేయడానికి ఇది ఉపయోగపడుతుంది.

---

**ముగింపు:**
TypeORM అనేది ఒక ఆర్గనైజ్డ్ పద్ధతిలో డేటాబేస్‌ని హ్యాండిల్ చేయడానికి చాలా ఉత్తమమైన మార్గం. మీరు వీటిని అర్థం చేసుకున్నారా? మనం తదుపరి అంశం "Entities" గురించి తెలుసుకుందామా?

---

TypeORM ఇన్‌స్టాలేషన్ మరియు డేటాబేస్ డ్రైవర్ల సెటప్ చాలా సులభం. మనం ఒక Node.js ప్రాజెక్ట్‌లో ఇవి ఎలా చేయాలో చూద్దాం.

ముందుగా, మీ ప్రాజెక్ట్ ఫోల్డర్‌లో టెర్మినల్ ఓపెన్ చేసి ఈ క్రింది కమాండ్స్ రన్ చేయండి.

### 1. TypeORM మరియు అవసరమైన ప్యాకేజీల ఇన్‌స్టాలేషన్

TypeORM తో పాటు, `reflect-metadata` అనే ప్యాకేజీని కూడా తప్పనిసరిగా ఇన్‌స్టాల్ చేయాలి (ఇది డెకరేటర్స్ కోసం అవసరం).

```bash
npm install typeorm reflect-metadata

```

అలాగే TypeScript వాడుతున్నారు కాబట్టి, `ts-node` లేదా `typescript` ని కూడా ఇన్‌స్టాల్ చేసుకుని ఉండాలి:

```bash
npm install typescript ts-node --save-dev

```

---

### 2. డేటాబేస్ డ్రైవర్లను ఇన్‌స్టాల్ చేయడం

మీరు ఏ డేటాబేస్ వాడుతున్నారో, దానికి సంబంధించిన డ్రైవర్‌ని మాత్రమే ఇన్‌స్టాల్ చేసుకోవాలి. కింద ఉన్న వాటిలో మీ డేటాబేస్‌ను బట్టి ఒక కమాండ్ ఎంచుకోండి:

| డేటాబేస్       | ఇన్‌స్టాలేషన్ కమాండ్  |
| -------------- | --------------------- |
| **PostgreSQL** | `npm install pg`      |
| **MySQL**      | `npm install mysql2`  |
| **MariaDB**    | `npm install mariadb` |
| **MSSQL**      | `npm install mssql`   |
| **SQLite**     | `npm install sqlite3` |

---

### 3. ముఖ్యమైన సెట్టింగ్స్ (tsconfig.json)

TypeScript సరిగ్గా పనిచేయడానికి మీ `tsconfig.json` ఫైల్‌లో ఈ క్రింది సెట్టింగ్స్ ఉండాలి:

```json
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    ...
  }
}

```

_ఇది చాలా ముఖ్యం, లేదంటే TypeORM లోని డెకరేటర్స్ (ఉదా: `@Entity`) పనిచేయవు._

---

### 4. ఒక చిన్న ఉదాహరణ (Configuration)

ఇన్‌స్టాలేషన్ తర్వాత, కనెక్షన్ ఎలా సెటప్ చేయాలో చూడండి:

```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql", // లేదా postgres, sqlite, etc.
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "my_database",
  entities: [
    /* మీ entity ఫైల్స్ ఇక్కడ ఇవ్వాలి */
  ],
  synchronize: true, // ఇది కేవలం డెవలప్‌మెంట్ కోసం మాత్రమే వాడాలి
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
```

**గమనిక:**

- `synchronize: true` అని పెడితే, మీరు క్లాస్ (Entity) మార్చిన ప్రతిసారీ డేటాబేస్ టేబుల్ ఆటోమేటిక్‌గా అప్‌డేట్ అవుతుంది. కానీ **Production** లో దీన్ని ఎప్పుడూ `false` లోనే ఉంచాలి (అక్కడ Migrations వాడాలి).

---

# 2. Entity Design

## Entity

TypeORM లో **Entity** అనేది డేటాబేస్‌లోని ఒక టేబుల్‌ని సూచించే ఒక క్లాస్ (Class). మనం రాసే ప్రతి `class` ఒక డేటాబేస్ టేబుల్‌గా మారుతుంది. దీని గురించి వివరంగా చూద్దాం:

### 1. @Entity()

ఇది ఒక **Decorator**. ఒక క్లాస్‌ను Entityగా మార్చడానికి దీనిని వాడతాం. ఇది ఆ క్లాస్‌ని డేటాబేస్ టేబుల్‌గా గుర్తించమని TypeORMకి చెబుతుంది.

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
}
```

---

### 2. Table Names (టేబుల్ పేర్లు)

సాధారణంగా TypeORM క్లాస్ పేరును బట్టి టేబుల్ పేరును తీసుకుంటుంది (ఉదా: `User` క్లాస్ అయితే `user` టేబుల్). మనం కావాలంటే సొంతంగా పేరు పెట్టుకోవచ్చు:

```typescript
@Entity("users_table") // డేటాబేస్‌లో టేబుల్ పేరు "users_table" అని ఉంటుంది
export class User { ... }

```

---

### 3. Schema (స్కీమా)

కొన్ని డేటాబేస్ సిస్టమ్స్ (PostgreSQL, MSSQL) లో టేబుల్స్ ఒక ప్రత్యేకమైన స్కీమా కింద ఉంటాయి. `schema` ప్రాపర్టీని ఉపయోగించి మనం దీనిని సెట్ చేయవచ్చు.

```typescript
@Entity({ name: "users", schema: "sales" }) // 'sales' స్కీమాలో 'users' టేబుల్
export class User { ... }

```

---

### 4. Comments (కామెంట్స్)

టేబుల్ గురించి లేదా కాలమ్ గురించి డేటాబేస్ లెవెల్‌లోనే సమాచారం ఇవ్వడానికి `comment` ప్రాపర్టీ వాడతాం. ఇది డేటాబేస్ మేనేజ్‌మెంట్ టూల్స్‌లో చూసినప్పుడు ఉపయోగకరంగా ఉంటుంది.

```typescript
@Entity({ name: "users", comment: "ఈ టేబుల్ యూజర్ల డేటాను స్టోర్ చేస్తుంది" })
export class User {
  @Column({ comment: "యూజర్ పేరు" })
  firstName: string;
}
```

---

### 5. Naming Strategies (నేమింగ్ స్ట్రాటజీస్)

TypeORM ఆటోమేటిక్‌గా కాలమ్ పేర్లను ఎలా క్రియేట్ చేయాలో నిర్ణయించడానికి ఇది ఉపయోగపడుతుంది. ఉదాహరణకు, క్లాస్‌లో `firstName` అని ఉంటే, అది డేటాబేస్‌లో `first_name` అని మారాలా లేక `firstname` అని ఉండాలా అనేది ఇది నిర్ణయిస్తుంది.

మనం సొంతంగా "Naming Strategy"ని క్రియేట్ చేసి డేటాబేస్ కనెక్షన్ సెట్టింగ్స్‌లో సెట్ చేయవచ్చు:

```typescript
// NamingStrategy క్రియేట్ చేయడం (ఉదాహరణ)
import { DefaultNamingStrategy } from "typeorm";

export class SnakeNamingStrategy extends DefaultNamingStrategy {
    columnName(propertyName: string, customName: string): string {
        return customName || snakeCase(propertyName); // camelCase ని snake_case గా మారుస్తుంది
    }
}

// DataSource లో వాడటం
const AppDataSource = new DataSource({
    ...,
    namingStrategy: new SnakeNamingStrategy()
});

```

**ముఖ్య గమనిక:**

- `@PrimaryGeneratedColumn()`: ఇది ప్రైమరీ కీ ని ఆటోమేటిక్‌గా పెంచుతూ (Auto Increment) క్రియేట్ చేస్తుంది.
- `@Column()`: ఇది టేబుల్‌లోని కాలమ్‌ను సూచిస్తుంది.

---

## Columns

TypeORMలో **Column Decorator** (`@Column`)ని ఉపయోగించి మనం డేటాబేస్ కాలమ్ రకాలను (Data Types) నిర్ణయిస్తాము. మీరు అడిగిన ముఖ్యమైన కాలమ్ రకాలు మరియు వాటిని ఎలా వాడాలో ఇక్కడ వివరంగా ఉన్నాయి:

### 1. బేసిక్ డేటా టైప్స్ (Basic Types)

ఇవి చాలా సాధారణంగా వాడే కాలమ్స్:

- **varchar:** చిన్న టెక్స్ట్ కోసం. `length` స్పెసిఫై చేయవచ్చు (ఉదా: `@Column({ length: 100 })`).
- **text:** పెద్ద మొత్తంలో టెక్స్ట్ డేటా కోసం (ఉదా: డిస్క్రిప్షన్స్).
- **integer:** సాధారణ నంబర్ల కోసం.
- **bigint:** చాలా పెద్ద నంబర్ల కోసం (ఉదా: IDలు, కరెన్సీ లెక్కలు).
- **boolean:** `true` లేదా `false` వాల్యూస్ కోసం.
- **decimal:** ఖచ్చితమైన నంబర్స్ (Precision, Scale) కోసం. (ఉదా: `@Column("decimal", { precision: 5, scale: 2 })` - ఇది 999.99 వరకు స్టోర్ చేస్తుంది).

### 2. అడ్వాన్స్‌డ్ డేటా టైప్స్ (Advanced Types)

- **json / jsonb:** JSON డేటాను స్టోర్ చేయడానికి. PostgreSQL లో `jsonb` వాడటం వల్ల క్వెరీ స్పీడ్ ఎక్కువగా ఉంటుంది.
- ఉదా: `@Column("jsonb", { nullable: true })`

- **uuid:** యూనిక్ ఐడెంటిఫైయర్స్ కోసం. ఇది చాలా సెక్యూర్.
- ఉదా: `@PrimaryGeneratedColumn("uuid")` లేదా `@Column("uuid")`

- **timestamp:** తేదీ మరియు సమయం (సెకండ్లతో సహా) స్టోర్ చేయడానికి.
- ఉదా: `@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })`

- **date:** కేవలం తేదీ కోసం (YYYY-MM-DD).

### 3. స్పెషల్ టైప్స్ (Special Types)

- **enum:** నిర్ణీత విలువలు మాత్రమే కావాలనుకున్నప్పుడు.
- ఉదా:

```typescript
enum Role { ADMIN = "admin", USER = "user" }
@Column({ type: "enum", enum: Role, default: Role.USER })
role: Role;

```

- **array:** ఒకే కాలమ్‌లో లిస్ట్ ఆఫ్ వాల్యూస్ స్టోర్ చేయడానికి (ప్రధానంగా Postgres లో పనిచేస్తుంది).
- ఉదా: `@Column("text", { array: true })`

---

### కోడ్ ఉదాహరణ:

వీటన్నింటిని కలిపి ఒక `Product` ఎంటిటీలో ఎలా వాడతామో చూడండి:

```typescript
@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "integer" })
  stock: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "jsonb", nullable: true })
  metadata: any;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "enum", enum: ["new", "used"], default: "new" })
  condition: string;

  @Column("text", { array: true })
  tags: string[];
}
```

### కొన్ని ముఖ్యమైన చిట్కాలు:

1. **nullable:** ఒక కాలమ్‌లో వాల్యూ లేకపోయినా పర్వాలేదు అనుకుంటే `nullable: true` అని వాడాలి.
2. **default:** కాలమ్ క్రియేట్ అయినప్పుడు ఆటోమేటిక్‌గా ఏదైనా వాల్యూ ఉండాలంటే `default` వాడాలి.
3. **select:** ఒక కాలమ్ డేటా క్వెరీ చేసినప్పుడు కనిపించకూడదు అనుకుంటే `select: false` అని పెట్టవచ్చు (ఉదా: పాస్‌వర్డ్ ఫీల్డ్స్ కోసం).

---

TypeORM లో కాలమ్స్ క్రియేట్ చేసేటప్పుడు, ఆ కాలమ్ డేటా ఎలా ఉండాలో కంట్రోల్ చేయడానికి మనం **Options** ఉపయోగిస్తాం. ఇవి `@Column()` డెకరేటర్ లోపల ఆబ్జెక్ట్ రూపంలో ఇస్తాము.

వీటిని ఎలా వాడాలో ఒకసారి చూద్దాం:

### 1. nullable

ఒక కాలమ్‌లో వాల్యూ లేకపోయినా (NULL) పర్వాలేదు అనుకుంటే దీన్ని `true` చేయాలి. బై-డిఫాల్ట్ ఇది `false` గా ఉంటుంది.

- ఉదా: `@Column({ nullable: true })`

### 2. default

డేటా ఏమీ ఇన్సర్ట్ చేయనప్పుడు ఆటోమేటిక్‌గా ఒక వాల్యూ సెట్ అవ్వాలి అనుకుంటే ఇది వాడతాం.

- ఉదా: `@Column({ default: "active" })`
- ఉదా (SQL ఫంక్షన్ కోసం): `@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })`

### 3. unique

ఒక టేబుల్‌లో ఈ కాలమ్ వాల్యూ డూప్లికేట్ అవ్వకూడదు (ఉదా: Email, Phone Number).

- ఉదా: `@Column({ unique: true })`

### 4. length

`varchar` వంటి కాలమ్స్ కి గరిష్టంగా ఎన్ని అక్షరాలు ఉండాలో ఇది నిర్ణయిస్తుంది.

- ఉదా: `@Column({ length: 50 })` (గరిష్టంగా 50 అక్షరాలు).

### 5. precision & 6. scale

ఇవి ముఖ్యంగా `decimal` టైప్ కాలమ్స్ కి వాడతాం.

- **precision:** మొత్తం ఎన్ని డిజిట్స్ ఉండాలి?
- **scale:** పాయింట్ తర్వాత ఎన్ని డిజిట్స్ ఉండాలి?
- ఉదా: `@Column({ type: "decimal", precision: 10, scale: 2 })`
- ఇది 12345678.99 వరకు స్టోర్ చేయగలదు.

### 7. comment

డేటాబేస్ టేబుల్ లో ఈ కాలమ్ దేనికోసం అని ఇతర డెవలపర్లకు తెలియజేయడానికి ఇది వాడతాం (ఇది SQL డేటాబేస్ లోని "Comment" ఫీల్డ్ లో కనిపిస్తుంది).

- ఉదా: `@Column({ comment: "యూజర్ యొక్క ప్రైమరీ ఫోన్ నంబర్" })`

---

### ఉదాహరణ (Example Implementation):

వీటన్నింటినీ కలిపి ఒకే కాలమ్‌లో ఎలా వాడవచ్చో చూడండి:

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 100,
    unique: true,
    nullable: false,
    comment: "యూజర్ యొక్క ఈమెయిల్ అడ్రస్",
  })
  email: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  walletBalance: number;
}
```

### ఒక్క మాటలో చెప్పాలంటే:

- **nullable:** ఖాళీగా ఉండొచ్చా?
- **default:** ఖాళీగా ఉంటే ఏం ఉండాలి?
- **unique:** రెండోసారి రాకూడదా?
- **length:** ఎంత పెద్దదిగా ఉండాలి?
- **precision/scale:** పాయింట్ విలువలు ఎలా ఉండాలి?
- **comment:** ఇది దేని గురించి?

---

## Primary Keys

TypeORMలో ప్రతి Entityకి కచ్చితంగా ఒక **Primary Key** ఉండాలి. ఇది ఆ టేబుల్‌లోని ప్రతి రికార్డును యూనిక్‌గా (Unique) గుర్తించడానికి ఉపయోగపడుతుంది. మీరు అడిగిన అంశాలను వివరంగా చూద్దాం.

---

### 1. Auto Increment (ఆటో ఇంక్రిమెంట్)

ఇది సర్వసాధారణంగా వాడే పద్ధతి. మనం డేటా ఇన్సర్ట్ చేస్తున్నప్పుడు ID ని ఇవ్వక్కర్లేదు, డేటాబేస్ ఆటోమేటిక్‌గా 1, 2, 3... అని నంబర్లను కేటాయిస్తుంది.

```typescript
@PrimaryGeneratedColumn()
id: number;

```

- ఇక్కడ `Primary` అంటే ప్రైమరీ కీ, `Generated` అంటే ఆటోమేటిక్‌గా జనరేట్ అవుతుంది.

---

### 2. UUID (Universally Unique Identifier)

పెద్ద అప్లికేషన్లలో `1, 2, 3` వంటి నంబర్లు కాకుండా, చాలా పెద్ద మరియు యూనిక్ అయిన స్ట్రింగ్ (ఉదా: `550e8400-e29b-41d4-a716-446655440000`) వాడతాం. ఇది సురక్షితమైనది మరియు ఇతర సిస్టమ్స్‌తో డేటా మెర్జ్ చేసేటప్పుడు గొడవలు రావు.

```typescript
@PrimaryGeneratedColumn("uuid")
id: string;

```

- దీన్ని వాడాలంటే మీ టేబుల్‌లో `uuid` కాలమ్ రకం ఉండాలి.

---

### 3. Composite Keys (కాంపోజిట్ కీస్)

ఒక కీ సరిపోనప్పుడు, రెండు లేదా అంతకంటే ఎక్కువ కాలమ్స్‌ని కలిపి ప్రైమరీ కీగా వాడటాన్ని **Composite Key** అంటారు.
ఉదాహరణకు, ఒక స్టూడెంట్ `rollNumber` మరియు `year` కలిపి ఒక యూనిక్ ఐడెంటిఫైయర్ అవ్వచ్చు.

```typescript
@Entity()
export class Student {
  @PrimaryColumn()
  rollNumber: number;

  @PrimaryColumn()
  year: number;
}
```

- ఇక్కడ `@PrimaryGeneratedColumn` వాడకూడదు, కేవలం `@PrimaryColumn` వాడాలి.

---

### 4. Generated Columns

ఇది ఒక స్పెషల్ కాలమ్. దీని విలువ మనం ఇవ్వక్కర్లేదు, ఇది వేరే కాలమ్స్‌లోని డేటాను బట్టి ఆటోమేటిక్‌గా క్యాలిక్యులేట్ అవుతుంది.
ఉదాహరణకు: `price` మరియు `tax` కాలమ్స్ ఉంటే, `total` అనే కాలమ్‌ను క్యాలిక్యులేట్ చేయవచ్చు.

```typescript
@Column({
    type: "decimal",
    generatedType: "STORED",
    asExpression: "price + tax" // SQL ఎక్స్‌ప్రెషన్
})
total: number;

```

- **గమనిక:** ఇది అన్ని డేటాబేస్‌లలో (PostgreSQL, MySQL 5.7+) సపోర్ట్ చేయకపోవచ్చు.

---

### సారాంశం (Summary Table)

| పద్ధతి             | డెకరేటర్                          | ఎప్పుడు వాడాలి?                               |
| ------------------ | --------------------------------- | --------------------------------------------- |
| **Auto Increment** | `@PrimaryGeneratedColumn()`       | సాధారణ ఐడిల కోసం.                             |
| **UUID**           | `@PrimaryGeneratedColumn("uuid")` | సెక్యూర్, డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ కోసం.    |
| **Composite Keys** | `@PrimaryColumn()`                | రెండు కాలమ్స్ కలిసి యూనిక్‌గా ఉన్నప్పుడు.     |
| **Generated**      | `@Column({generatedType: ...})`   | డేటాను ఆటోమేటిక్‌గా క్యాలిక్యులేట్ చేయడానికి. |

---

ఇప్పటివరకు మనం Entity, Column, మరియు Primary Keys గురించి తెలుసుకున్నాం. ఇవన్నీ ఒక బేసిక్ టేబుల్ క్రియేట్ చేయడానికి సరిపోతాయి.

---

# 3. Entity Relationships

TypeORM లో రిలేషన్ షిప్స్ (Relationships) చాలా కీలకమైనవి. వీటిని ఉపయోగించి మనం రెండు టేబుల్స్ మధ్య సంబంధాన్ని ఏర్పరుస్తాం. వీటన్నింటినీ సులభంగా అర్థం చేసుకుందాం.

---

### 1. One-to-One (ఒకదానితో ఒకటి)

ఒక రికార్డుకు మరొక టేబుల్‌లో కేవలం ఒకే రికార్డు సంబంధం ఉంటుంది.

- **ఉదాహరణ:** ఒక `User` కి ఒకే `Profile` ఉంటుంది.
- **కోడ్:**

```typescript
@Entity()
export class User {
  @OneToOne(() => Profile)
  @JoinColumn() // ఇది ఒక టేబుల్‌లో ఫారిన్ కీని క్రియేట్ చేస్తుంది
  profile: Profile;
}
```

### 2. One-to-Many & Many-to-One

ఇవి ఒకదానికొకటి వ్యతిరేకం. చాలా వరకు ప్రాజెక్టులలో మనం వీటినే ఎక్కువగా వాడతాం.

- **One-to-Many:** ఒక `Author` కి చాలా `Post` లు ఉండవచ్చు.
- **Many-to-One:** చాలా `Post` లు ఒకే `Author` కి చెందుతాయి.
- **కోడ్ (Author side):**

```typescript
@OneToMany(() => Post, (post) => post.author)
posts: Post[];

```

- **కోడ్ (Post side):**

```typescript
@ManyToOne(() => Author, (author) => author.posts)
author: Author;

```

### 3. Many-to-Many (చాలా వాటితో చాలా)

ఒక రికార్డుకు అనేక రికార్డులతో సంబంధం ఉంటుంది మరియు అవతలి వైపు కూడా అలాగే ఉంటుంది.

- **ఉదాహరణ:** ఒక `Student` చాలా `Courses` తీసుకోవచ్చు, ఒక `Course` లో చాలా మంది `Students` ఉంటారు.
- **కోడ్:**

```typescript
@ManyToMany(() => Course)
@JoinTable() // ఇది ఆటోమేటిక్‌గా ఒక జాయిన్ టేబుల్‌ని క్రియేట్ చేస్తుంది
courses: Course[];

```

---

### 4. Join Tables (జాయిన్ టేబుల్స్)

`Many-to-Many` రిలేషన్స్ వాడుతున్నప్పుడు, రెండు టేబుల్స్ మధ్య డేటాను స్టోర్ చేయడానికి ఒక మధ్యస్థ టేబుల్ అవసరం. దాన్నే **Join Table** అంటారు.

- TypeORM లో `@JoinTable()` డెకరేటర్ వాడితే, అది ఆటోమేటిక్‌గా `student_courses` లాంటి ఒక టేబుల్‌ని సృష్టిస్తుంది.
- ఒకవేళ మీరు ఆ జాయిన్ టేబుల్‌లో అదనపు డేటా (ఉదా: `joinedDate`) స్టోర్ చేయాలనుకుంటే, అప్పుడు మీరు `Many-to-Many` బదులుగా రెండు `One-to-Many` రిలేషన్స్ వాడాల్సి ఉంటుంది.

---

### ముఖ్యమైన డెకరేటర్లు మరియు ఆప్షన్లు:

1. **@JoinColumn():** ఇది `One-to-One` లేదా `Many-to-One` లో ఫారిన్ కీ కాలమ్ ఏది అని టైప్ ఓఆర్ఎంకి చెబుతుంది.
2. **@JoinTable():** ఇది `Many-to-Many` రిలేషన్ కోసం అదనపు టేబుల్‌ని క్రియేట్ చేస్తుంది.
3. **cascade: true:** ఇది చాలా ముఖ్యం! ఒక యూజర్‌ను సేవ్ చేసినప్పుడు, అతని ప్రొఫైల్‌ను కూడా ఆటోమేటిక్‌గా సేవ్ చేయాలంటే `cascade: true` వాడాలి.

- ఉదా: `@OneToOne(() => Profile, { cascade: true })`

4. **onDelete: "CASCADE":** ఒకవేళ ఆథర్‌ని డిలీట్ చేస్తే, అతని పోస్టులు కూడా డిలీట్ అయిపోవాలంటే ఇది వాడాలి.

---

### గుర్తుంచుకోవాల్సిన చిట్కాలు (Tips):

- **Many-to-One** ని వాడేటప్పుడు ఎప్పుడూ `JoinColumn` అవసరం లేదు, అది ఆటోమేటిక్‌గా క్రియేట్ అవుతుంది.
- రిలేషన్స్ వాడేటప్పుడు `nullable: false` లేదా `nullable: true` వంటి ఆప్షన్లను అవసరానికి తగ్గట్టుగా వాడుకోవాలి.

---

TypeORMలో రిలేషన్స్‌ని హ్యాండిల్ చేయడానికి **Cascading** మరియు **Loading Strategies** చాలా ముఖ్యమైనవి. వీటి గురించి వివరంగా చూద్దాం.

---

### 1. Cascading (కాస్కేడింగ్)

ఒక ఎంటిటీపై మనం ఏదైనా ఆపరేషన్ చేసినప్పుడు (save, update, delete), ఆ ఎంటిటీకి సంబంధం ఉన్న (Related) వేరే ఎంటిటీలపై కూడా అదే ఆపరేషన్ ఆటోమేటిక్‌గా జరగడాన్ని **Cascading** అంటారు.

దీనికోసం `@OneToOne`, `@OneToMany` వంటి డెకరేటర్లలో `cascade` ప్రాపర్టీని వాడతాం.

- **cascade: ["insert", "update"]:** ఒక యూజర్‌ను సేవ్ చేసినప్పుడు, అతని ప్రొఫైల్ కూడా సేవ్ అవ్వాలి అని అర్థం.
- **cascade: ["remove"]:** యూజర్‌ని డిలీట్ చేస్తే, అతని ప్రొఫైల్ కూడా డిలీట్ అయిపోవాలి.
- **cascade: true:** అన్ని ఆపరేషన్స్ (insert, update, remove) జరుగుతాయి.

**ఉదాహరణ:**

```typescript
@OneToOne(() => Profile, { cascade: true })
@JoinColumn()
profile: Profile;

```

ఇలా చేస్తే, మీరు `user.profile = newProfile;` అని సెట్ చేసి `userRepository.save(user)` కొడితే చాలు, ప్రొఫైల్ కూడా డేటాబేస్‌లో సేవ్ అయిపోతుంది.

---

### 2. Eager vs Lazy Loading

రిలేషనల్ డేటాను డేటాబేస్ నుండి ఎలా పొందాలో ఇవి నిర్ణయిస్తాయి.

#### A. Eager Loading (ఆటోమేటిక్ లోడింగ్)

మనం మెయిన్ ఎంటిటీని క్వెరీ చేసినప్పుడే, దానితో సంబంధం ఉన్న ఎంటిటీలు కూడా ఆటోమేటిక్‌గా వస్తాయి.

- **ఎప్పుడు వాడాలి?** మీకు ఎప్పుడూ ఆ రిలేటెడ్ డేటా అవసరమైతే.
- **కోడ్:**

```typescript
@OneToOne(() => Profile, { eager: true })
profile: Profile;

```

ఇప్పుడు మీరు `userRepository.find()` అని పిలిచినప్పుడే, ఆటోమేటిక్‌గా `profile` కూడా వచ్చేస్తుంది.

#### B. Lazy Loading (అవసరమైనప్పుడు లోడింగ్)

డేటా ఎప్పుడూ రాదు. మనం కోడ్‌లో దాన్ని పిలిచినప్పుడు మాత్రమే డేటాబేస్ నుండి క్వెరీ వెళ్తుంది. దీనికోసం రిలేటెడ్ ఎంటిటీ టైప్‌ను **`Promise<T>`** గా మార్చాలి.

- **ఎప్పుడు వాడాలి?** డేటా చాలా ఎక్కువ ఉన్నప్పుడు లేదా ఎప్పుడూ అవసరం లేనప్పుడు (Performance పెంచడానికి).
- **కోడ్:**

```typescript
@OneToOne(() => Profile)
profile: Promise<Profile>;

```

దీన్ని వాడేటప్పుడు: `const user = await userRepository.findOne(...); const profile = await user.profile;` అని పిలవాలి.

---

### సారాంశం (Summary)

| ఫీచర్             | ఉద్దేశ్యం                                                                 |
| ----------------- | ------------------------------------------------------------------------- |
| **Cascading**     | రిలేటెడ్ డేటాను మాన్యువల్‌గా కాకుండా, ఆటోమేటిక్‌గా సేవ్/డిలీట్ చేయడానికి. |
| **Eager Loading** | డేటా ఎప్పుడూ కావాలి అనుకున్నప్పుడు (Join క్వెరీ పడుతుంది).                |
| **Lazy Loading**  | కేవలం అడిగినప్పుడు మాత్రమే కావాలి అనుకున్నప్పుడు (తక్కువ మెమరీ వాడకం).    |

**ఒక చిన్న చిట్కా:**

- `Eager Loading` ఎక్కువ వాడితే మీ క్వెరీలు చాలా భారంగా మారి పర్ఫార్మెన్స్ తగ్గుతుంది. కాబట్టి అవసరమైనప్పుడే వాడండి.
- చాలా ప్రాజెక్టులలో **`Lazy Loading`** లేదా క్వెరీ చేసేటప్పుడు **`relations: ["profile"]`** అని ప్రత్యేకంగా మెన్షన్ చేయడం మంచి పద్ధతి.

---

TypeORM లో **Self-Referencing** అంటే ఒక ఎంటిటీ తనతో తాను రిలేషన్ కలిగి ఉండటం. దీనిని ఎక్కువగా "Hierarchy" (వరుస క్రమం) డేటాను స్టోర్ చేయడానికి వాడుతాము.

### 1. Self-Referencing (Employee → Manager)

ఒక ఆఫీసులో ఒక ఉద్యోగికి మరొక ఉద్యోగి మేనేజర్‌గా ఉండవచ్చు. అంటే, మేనేజర్ కూడా ఒక ఉద్యోగే.

```typescript
@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // ఒక మేనేజర్‌కి చాలా మంది ఎంప్లాయీస్ ఉండవచ్చు (One-to-Many)
  @ManyToOne(() => Employee, (employee) => employee.subordinates)
  manager: Employee;

  // ఒక మేనేజర్ కింద ఉన్న సబార్డినేట్స్ (One-to-Many)
  @OneToMany(() => Employee, (employee) => employee.manager)
  subordinates: Employee[];
}
```

---

### 2. Tree Entities (వృక్షపు నిర్మాణ డేటా)

హైరార్కికల్ డేటాను (ఉదా: కేటగిరీలు, ఫోల్డర్లు) నిర్వహించడానికి TypeORM ప్రత్యేకమైన `@Tree` డెకరేటర్లను అందిస్తుంది. దీని కోసం 3 ప్రధాన పద్ధతులు ఉన్నాయి:

#### A. Closure Table (క్లోజర్ టేబుల్)

ఇది హైరార్కిని వేరొక టేబుల్‌లో స్టోర్ చేస్తుంది. ఏ నోడ్ ఎవరికి కింద ఉందో మొత్తం రిలేషన్స్ ఈ టేబుల్‌లో ఉంటాయి.

- **ఎప్పుడు వాడాలి?** డేటాను చాలా వేగంగా రీడ్ చేయాలి (Read-heavy) అనుకున్నప్పుడు ఇది బెస్ట్.
- **కోడ్:** `@Tree("closure-table")`

#### B. Nested Set (నెస్టెడ్ సెట్)

ఇది ప్రతి నోడ్‌కు `left` మరియు `right` అనే వాల్యూస్‌ని ఇస్తుంది. ఇది క్వెరీలను చాలా వేగంగా చేస్తుంది, కానీ కొత్తగా ఒక నోడ్ యాడ్ చేయడం (Insert) కొంచెం కష్టమైన పని.

- **ఎప్పుడు వాడాలి?** చాలా పెద్ద హైరార్కి ఉన్నప్పుడు మరియు డేటా మార్పులు తక్కువగా ఉన్నప్పుడు.
- **కోడ్:** `@Tree("nested-set")`

#### C. Materialized Path (మెటీరియలైజ్డ్ పాత్)

ఇది ప్రతి నోడ్ యొక్క 'పాత్'ని స్టోర్ చేస్తుంది (ఉదా: `/1/2/5`). ఇది చాలా సింపుల్ మరియు వేగంగా పనిచేస్తుంది.

- **ఎప్పుడు వాడాలి?** మెజారిటీ ప్రాజెక్టులలో ఇది చాలా ప్రాచుర్యం పొందింది.
- **కోడ్:** `@Tree("materialized-path")`

---

### Tree Entityని ఎలా వాడాలి?

```typescript
@Entity()
@Tree("materialized-path") // ఏదో ఒక స్ట్రాటజీని సెలెక్ట్ చేసుకోవాలి
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
```

**వీటిని ఎలా క్వెరీ చేయాలి?**
సాధారణ `repository` సరిపోదు, `treeRepository` వాడాలి:

```typescript
const treeRepository = dataSource.getTreeRepository(Category);

// మొత్తం హైరార్కిని పొందడానికి:
const roots = await treeRepository.findRoots();

// ఒక నోడ్ యొక్క అన్ని పిల్లలను పొందడానికి:
const descendants = await treeRepository.findDescendants(parentCategory);
```

### సారాంశం:

1. **Employee/Manager:** సింపుల్ రిలేషన్ కోసం `@ManyToOne` సరిపోతుంది.
2. **Tree Entities:** కేటగిరీలు లేదా ఫైల్ సిస్టమ్ వంటి క్లిష్టమైన హైరార్కిల కోసం TypeORM లోని `@Tree` ఫీచర్స్ వాడండి.

ఇప్పటివరకు మనం రిలేషన్స్ అన్నీ పూర్తి చేశాం. ఇప్పుడు మనం **"Repositories & Data Operations (CRUD)"** లోకి వెళ్దామా? ఇది మీ అప్లికేషన్‌లో డేటాను ఎలా సేవ్ చేయాలో మరియు రీడ్ చేయాలో నేర్పుతుంది. సిద్ధమేనా?

---

# 4. Repository Pattern

TypeORMలో **Repository Pattern** అనేది డేటాబేస్ ఆపరేషన్స్ (CRUD) చేయడానికి అత్యంత ప్రామాణికమైన పద్ధతి. ఇది మీ బిజినెస్ లాజిక్‌ను మరియు డేటాబేస్ లాజిక్‌ను వేరుగా ఉంచుతుంది.

మీరు అడిగిన **Repository APIs** గురించి వివరంగా చూద్దాం:

### 1. డేటాను పొందడానికి (Reading Data)

- **`find()`**: టేబుల్‌లోని మొత్తం డేటాను లేదా కండిషన్‌ను బట్టి సెట్ ఆఫ్ డేటాను రిటర్న్ చేస్తుంది.

```typescript
const users = await userRepository.find(); // అన్నీ వస్తాయి
const activeUsers = await userRepository.find({ where: { isActive: true } });
```

- **`findOne()`**: ఏదైనా ఒక కండిషన్ ద్వారా ఒకే ఒక్క రికార్డును వెతకడానికి వాడతారు. రికార్డు లేకపోతే `null` వస్తుంది.

```typescript
const user = await userRepository.findOne({ where: { id: 1 } });
```

### 2. డేటాను ఇన్సర్ట్/అప్‌డేట్ చేయడానికి (Writing Data)

- **`save()`**: ఇది చాలా స్మార్ట్ ఫంక్షన్.
- ID లేకపోతే కొత్త రికార్డును క్రియేట్ చేస్తుంది.
- ID ఉంటే ఉన్న రికార్డును అప్‌డేట్ చేస్తుంది.

```typescript
await userRepository.save(userObject);
```

- **`insert()`**: ఇది కేవలం కొత్త డేటాను ఇన్సర్ట్ చేయడానికి మాత్రమే వాడతారు. ఇది ఎంటిటీ ఈవెంట్లను (Hooks) ట్రిగ్గర్ చేయదు, కాబట్టి ఇది `save()` కంటే వేగంగా ఉంటుంది.

### 3. డేటాను అప్‌డేట్ చేయడానికి (Updating)

- **`update()`**: ఒక నిర్దిష్టమైన క్రైటీరియా ద్వారా డేటాను అప్‌డేట్ చేయడానికి. ఇది ఎంటిటీని లోడ్ చేయాల్సిన అవసరం లేకుండా నేరుగా SQL అప్‌డేట్ క్వెరీని పంపిస్తుంది.

```typescript
await userRepository.update(1, { firstName: "New Name" }); // ID 1 కి పేరు మారుస్తుంది
```

### 4. డేటాను తొలగించడానికి (Deletion)

- **`delete()`**: డేటాబేస్ నుండి రికార్డును పర్మనెంట్‌గా తొలగిస్తుంది.

```typescript
await userRepository.delete(1);
```

- **`remove()`**: ఇది కూడా రికార్డును తొలగిస్తుంది, కానీ ఇది ఎంటిటీ ఆబ్జెక్ట్‌ను తీసుకుంటుంది. `delete()` కంటే ఇది సురక్షితం ఎందుకంటే ఇది ఎంటిటీ రిలేషన్స్ మరియు ఈవెంట్లను (Hooks) పరిగణనలోకి తీసుకుంటుంది.
- **`softDelete()`**: ఇది చాలా ముఖ్యమైనది. డేటాను నిజంగా డేటాబేస్ నుండి తొలగించదు, కానీ `deletedAt` అనే కాలమ్‌లో సమయాన్ని అప్‌డేట్ చేస్తుంది.

```typescript
await userRepository.softDelete(1); // ఇది రికార్డును 'డిలీట్' అయినట్లు చూపిస్తుంది
```

- **`recover()`**: `softDelete` చేసిన రికార్డును మళ్ళీ వెనక్కి తీసుకురావడానికి ఇది వాడతారు.

```typescript
await userRepository.recover({ id: 1 });
```

---

### క్విక్ రిఫరెన్స్ టేబుల్

| మెథడ్          | ఉద్దేశ్యం      | ఎప్పుడు వాడాలి?                                   |
| -------------- | -------------- | ------------------------------------------------- |
| `save()`       | Create/Update  | సింపుల్ CRUD ఆపరేషన్స్ కోసం.                      |
| `find()`       | Fetch          | మల్టిపుల్ రికార్డుల కోసం.                         |
| `update()`     | Partial Update | కేవలం కొన్ని కాలమ్స్ మార్చడానికి.                 |
| `delete()`     | Hard Delete    | పూర్తిగా డిలీట్ చేయడానికి.                        |
| `softDelete()` | Soft Delete    | రికార్డును దాచడానికి (భవిష్యత్తులో కావాలనుకుంటే). |

---

**ముఖ్య గమనిక:**
మీరు `softDelete` వాడాలంటే, మీ ఎంటిటీ క్లాస్‌లో `@DeleteDateColumn()` అనే కాలమ్ తప్పనిసరిగా ఉండాలి:

```typescript
@DeleteDateColumn()
deletedAt: Date;

```

---

TypeORMలో బేసిక్ CRUD కంటే ఎక్కువ పవర్ కావాల్సినప్పుడు ఈ **Advanced Repository APIs** చాలా ఉపయోగపడతాయి. ఇవి పర్ఫార్మెన్స్ పెంచడానికి మరియు కోడ్‌ను సింపుల్ చేయడానికి సహాయపడతాయి.

---

### 1. అడ్వాన్స్‌డ్ డేటా ఆపరేషన్స్

- **`exists()`**: ఒక కండిషన్‌కు తగిన రికార్డు ఉందో లేదో త్వరగా చెక్ చేయడానికి. ఇది మొత్తం ఆబ్జెక్ట్‌ను లోడ్ చేయకుండా కేవలం `true/false` ఇస్తుంది.

```typescript
const exists = await repo.exists({ where: { email: "test@example.com" } });
```

- **`count()`**: ఎన్ని రికార్డులు ఉన్నాయో లెక్కించడానికి.

```typescript
const totalUsers = await repo.count({ where: { isActive: true } });
```

- **`upsert()`**: "Update or Insert". ఒక రికార్డు ఉంటే అప్‌డేట్ చేస్తుంది, లేకపోతే కొత్తది క్రియేట్ చేస్తుంది (Unique key ఆధారంగా).

```typescript
await repo.upsert({ id: 1, name: "New Name" }, ["id"]);
```

- **`preload()`**: డేటాబేస్ నుండి ఒక ఎంటిటీని లోడ్ చేసి, దానికి పాక్షికంగా కొన్ని మార్పులు (partial changes) చేసి, సేవ్ చేయడానికి రెడీగా ఉంచుతుంది.

```typescript
const user = await repo.preload({ id: 1, name: "Updated Name" });
await repo.save(user);
```

- **`merge()`**: రెండు ఆబ్జెక్ట్‌లను కలిపి ఒకే ఆబ్జెక్ట్‌గా చేస్తుంది. అప్‌డేట్ ఆపరేషన్స్‌లో ఇది బాగా ఉపయోగపడుతుంది.

```typescript
const existingUser = await repo.findOne(...);
repo.merge(existingUser, { name: "New Name" }); // existingUser లో మార్పులు జరుగుతాయి

```

### 2. అటామిక్ ఆపరేషన్స్ (Performance)

డేటాను లోడ్ చేయకుండా నేరుగా డేటాబేస్ లెవెల్‌లోనే అప్‌డేట్ చేయడానికి ఇవి వాడతాం:

- **`increment()`**: ఒక నంబర్ కాలమ్‌ను నేరుగా పెంచడానికి.

```typescript
await repo.increment({ id: 1 }, "views", 1); // views = views + 1
```

- **`decrement()`**: ఒక నంబర్ కాలమ్‌ను తగ్గించడానికి.

```typescript
await repo.decrement({ id: 1 }, "stock", 1);
```

---

### 3. Custom Repository

ప్రాజెక్ట్ పెద్దదయ్యే కొద్దీ, ఒకే ఎంటిటీపై మనం చాలా క్వెరీలు రాయాల్సి వస్తుంది. అప్పుడు Repository ఫైల్స్ ని విడిగా రాసుకోవడం మంచి పద్ధతి.

**Custom Repository ని ఎలా క్రియేట్ చేయాలి:**

```typescript
// userRepository.ts
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

export const UserRepository = AppDataSource.getRepository(User).extend({
  // మన ఓన్ మెథడ్స్ ఇక్కడ రాసుకోవచ్చు
  findActiveUsers() {
    return this.createQueryBuilder("user")
      .where("user.isActive = :active", { active: true })
      .getMany();
  },
});
```

**దీన్ని ఎలా వాడాలి:**

```typescript
const activeUsers = await UserRepository.findActiveUsers();
```

---

### సారాంశం (Quick Tip):

- **`increment/decrement`**: పర్ఫార్మెన్స్ కోసం వాడండి.
- **`upsert`**: డేటా ఉందో లేదో ముందే చెక్ చేయకుండా, ఒకేసారి ఇన్సర్ట్ లేదా అప్‌డేట్ చేయడానికి వాడండి.
- **`Custom Repository`**: బిజినెస్ లాజిక్ క్వెరీలను ఒకే చోట ఆర్గనైజ్ చేయడానికి వాడండి.

ఇప్పటివరకు మనం రిపాజిటరీ పాటర్న్ కంప్లీట్ చేశాం. ఇవి మీ ప్రాజెక్ట్‌లో డేటాబేస్ ఆపరేషన్స్ చేయడానికి 90% సరిపోతాయి.

---

# 5. Query Builder

TypeORM లో **Query Builder** అనేది అత్యంత శక్తివంతమైన ఫీచర్. మీరు Raw SQL రాయకుండా, SQL వంటి క్వెరీలను TypeScript ద్వారా చాలా సులభంగా, చదవడానికి వీలుగా రాయవచ్చు.

ఇది ఎలా పనిచేస్తుందో ఒక ఎగ్జాంపుల్ ద్వారా చూద్దాం:

### 1. బేసిక్ సెలెక్ట్ (Select Query)

`createQueryBuilder` ఉపయోగించి మనం టేబుల్‌ని సెలెక్ట్ చేస్తాం. ఇక్కడ "user" అనేది **alias** (మనం క్వెరీలో వాడే షార్ట్ నేమ్).

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user") // "user" అనేది alias
  .getMany();
```

---

### 2. Where, andWhere, orWhere

డేటాను ఫిల్టర్ చేయడానికి వీటిని వాడతాం. ముఖ్యంగా **Parameters** (`:name`) వాడటం వల్ల **SQL Injection** నుండి రక్షణ లభిస్తుంది.

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .where("user.age > :age", { age: 18 }) // age 18 కంటే ఎక్కువ
  .andWhere("user.status = :status", { status: "active" }) // AND కండిషన్
  .orWhere("user.role = :role", { role: "admin" }) // OR కండిషన్
  .getMany();
```

---

### 3. Select & addSelect

మొత్తం కాలమ్స్ కాకుండా, మనకు కావలసిన కాలమ్స్ మాత్రమే సెలెక్ట్ చేసుకోవడానికి ఇది వాడతాం.

```typescript
const user = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .select(["user.id", "user.name"]) // ఇవి మాత్రమే వస్తాయి
  .addSelect("user.email") // అదనంగా ఈమెయిల్ యాడ్ చేయవచ్చు
  .getOne();
```

---

### 4. Ordering (సార్టింగ్)

డేటాను క్రమ పద్ధతిలో అమర్చడానికి `.orderBy()` వాడతాం.

```typescript
.orderBy("user.name", "ASC")   // పేరును బట్టి (A-Z)
.addOrderBy("user.id", "DESC") // ఒకవేళ పేరు సేమ్ ఉంటే, ఐడి ని బట్టి (పెద్దది నుండి చిన్నది)

```

---

### 5. Pagination (పేజీనేషన్)

చాలా ఎక్కువ డేటా ఉన్నప్పుడు, ఒకేసారి కాకుండా కొంచెం కొంచెంగా డేటాను తీసుకోవడానికి ఇది వాడతాం.

- **`take(n)`**: ఎన్ని రికార్డులు కావాలి (Limit).
- **`skip(n)`**: ఎన్ని రికార్డులను వదిలేయాలి (Offset).

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .skip(10) // మొదటి 10 వదిలేయ్
  .take(5) // తర్వాత 5 రికార్డులు ఇవ్వు
  .getMany();
```

---

### క్లిష్టమైన క్వెరీ ఉదాహరణ (Complex Example)

```typescript
const query = dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.profile", "profile") // Join చేయడం
  .where("user.isActive = :active", { active: true })
  .orderBy("user.createdAt", "DESC")
  .skip(0)
  .take(10);

const result = await query.getMany();
```

### కీలకమైన పాయింట్లు:

1. **Aliases:** ప్రతి క్వెరీకి ఒక alias (ఉదా: `user`) ఇవ్వాలి, లేకపోతే SQL క్వెరీ కన్ఫ్యూజ్ అవుతుంది.
2. **Parameters:** ఎప్పుడూ `user.name = :name` అని వాడండి. `user.name = ${name}` అని వాడకండి (ఇది ప్రమాదకరం).
3. **getMany() vs getOne():** మల్టిపుల్ రికార్డుల కోసం `getMany()`, ఒకే రికార్డ్ కోసం `getOne()` వాడండి.

Query Builder ద్వారా మీరు JOINs, Aggregations (SUM, COUNT), GroupBy వంటివి కూడా చాలా సులభంగా చేయవచ్చు.

---

## Joins

TypeORMలో **Joins** అంటే ఒక టేబుల్‌లోని డేటాను మరొక టేబుల్‌లోని డేటాతో కలిపి (Join) తీసుకోవడం. QueryBuilder ద్వారా వీటిని ఎలా చేయాలో చూద్దాం.

### 1. Inner Join vs Left Join

- **innerJoin:** రెండు టేబుల్స్ లోనూ సంబంధిత డేటా ఉన్నప్పుడు మాత్రమే ఆ రికార్డును ఇస్తుంది. (ఉదా: పోస్ట్ ఉన్న ఆథర్స్ మాత్రమే కావాలి).
- **leftJoin:** మెయిన్ టేబుల్‌లోని ప్రతి రికార్డును ఇస్తుంది, ఒకవేళ రిలేటెడ్ టేబుల్‌లో డేటా లేకపోతే `null` వస్తుంది.

---

### 2. Join Methods (కోడ్ ఉదాహరణలు)

#### A. leftJoinAndSelect

ఇది జాయిన్ చేసి, ఆ డేటాను మనకు రిజల్ట్ ఆబ్జెక్ట్‌లో కూడా చూపిస్తుంది.

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.profile", "profile") // యూజర్ ప్రొఫైల్‌ని జాయిన్ చేసి రిజల్ట్‌లో కూడా చూపిస్తుంది
  .getMany();
```

- ఇక్కడ `user.profile` అంటే ఎంటిటీలోని రిలేషన్ పేరు, `profile` అంటే మనం ఇచ్చే Alias.

#### B. innerJoin (కేవలం ఫిల్టరింగ్ కోసం)

ఒకవేళ మీకు జాయిన్ చేసిన టేబుల్ డేటా రిజల్ట్‌లో వద్దు, కానీ కేవలం "ఆ డేటా ఉంటేనే రిజల్ట్ రావాలి" అని ఫిల్టర్ చేయడానికి వాడాలి అనుకుంటే `innerJoin` వాడండి.

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .innerJoin("user.profile", "profile") // కేవలం ప్రొఫైల్ ఉన్న యూజర్లు మాత్రమే వస్తారు
  .where("profile.photo IS NOT NULL")
  .getMany();
```

---

### 3. Relation IDs (కేవలం IDలు మాత్రమే)

కొన్నిసార్లు మనకు మొత్తం రిలేటెడ్ ఆబ్జెక్ట్ వద్దు, కేవలం ఫారిన్ కీ (Foreign Key) ఐడిలు మాత్రమే కావాలి. పర్ఫార్మెన్స్ పరంగా ఇది చాలా వేగవంతమైనది.

- **`loadRelationIdMapping()`**: ఇది రిలేటెడ్ డేటా మొత్తాన్ని లోడ్ చేయకుండా, కేవలం ఆ ఐడిలను మాత్రమే ఒక ప్రత్యేక కాలమ్‌లో ఇస్తుంది.

```typescript
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .loadRelationIdMapping("user.profileId", "user.profile") // "user" ఆబ్జెక్ట్‌లో "profileId" అనే ప్రాపర్టీ క్రియేట్ అవుతుంది
  .getMany();
```

రిజల్ట్ ఇలా ఉంటుంది: `{ id: 1, name: "Telugu Dev", profileId: 101 }`

---

### సారాంశం (Cheat Sheet):

| మెథడ్                       | ఎప్పుడు వాడాలి?                                   |
| --------------------------- | ------------------------------------------------- |
| **`leftJoinAndSelect`**     | రిలేటెడ్ డేటా మొత్తం కావాలి (చాలా ఎక్కువ వాడతాం). |
| **`innerJoin`**             | రిలేటెడ్ డేటా ఉంటేనే రిజల్ట్ రావాలి (ఫిల్టరింగ్). |
| **`loadRelationIdMapping`** | కేవలం ఐడిలు మాత్రమే కావాలి, డేటా వద్దు.           |

**ముఖ్య గమనిక:**
`leftJoinAndSelect` వాడినప్పుడు అది SQL లో `LEFT JOIN` ని రన్ చేస్తుంది. మీరు కావాలంటే `leftJoinAndMap` అనే మెథడ్ వాడి, జాయిన్ అయిన డేటాను ఒక కొత్త పేరుతో (Custom Property) మ్యాప్ చేయవచ్చు.

---

TypeORM లో **Aggregate Functions** మరియు **Group By / Having** క్లాజ్‌లను ఉపయోగించి మనం డేటాబేస్ లెవెల్‌లోనే రకరకాల లెక్కలు (Calculations) మరియు విశ్లేషణలు (Analysis) చేయవచ్చు.

QueryBuilder ద్వారా వీటిని ఎలా వాడాలో ఉదాహరణలతో సులభంగా అర్థం చేసుకుందాం:

---

### 1. Aggregate Functions (సమిష్టి ఫంక్షన్లు)

వీటిని వాడేటప్పుడు మనం సాధారణ `getMany()` కి బదులుగా **`getRawOne()`** లేదా **`getRawMany()`** ని ఉపయోగించాలి. ఎందుకంటే ఈ ఫంక్షన్ల ద్వారా వచ్చే రిజల్ట్ నేరుగా ఎంటిటీ (Entity) రూపంలో ఉండదు, కేవలం SQL డేటా రూపంలో ఉంటుంది.

- **COUNT:** రికార్డుల సంఖ్యను లెక్కించడానికి.
- **SUM:** ఒక కాలమ్‌లోని మొత్తం విలువను కలపడానికి.
- **AVG:** సగటు (Average) విలువను కనుగొనడానికి.
- **MAX / MIN:** గరిష్ట (Maximum) మరియు కనిష్ట (Minimum) విలువలను కనుగొనడానికి.

**కోడ్ ఉదాహరణ (Products Table పై):**

```typescript
const stats = await dataSource
  .getRepository(Product)
  .createQueryBuilder("product")
  .select("COUNT(product.id)", "totalProducts") // మొత్తం ప్రొడక్ట్స్ ఎన్ని?
  .addSelect("SUM(product.price)", "totalValue") // అన్ని ప్రొడక్ట్స్ మొత్తం ధర ఎంత?
  .addSelect("AVG(product.price)", "averagePrice") // సగటు ధర ఎంత?
  .addSelect("MAX(product.price)", "maxPrice") // అన్నింటికంటే ఎక్కువ ధర ఎంత?
  .addSelect("MIN(product.price)", "minPrice") // అన్నింటికంటే తక్కువ ధర ఎంత?
  .getRawOne(); // ఒకే ఒక ఆబ్జెక్ట్ వస్తుంది
```

**రిజల్ట్ ఎలా ఉంటుంది:**

```json
{
  "totalProducts": "150",
  "totalValue": "450000.00",
  "averagePrice": "3000.00",
  "maxPrice": "25000.00",
  "minPrice": "150.00"
}
```

---

### 2. Group By

డేటాను ఏదైనా ఒక కాలమ్ ఆధారంగా గ్రూపులుగా విడగొట్టడానికి **`groupBy()`** వాడతాము.

- **ఉదాహరణ:** మీ దగ్గర ఉన్న ప్రొడక్ట్స్‌ని వాటి 'Category' ఆధారంగా గ్రూప్ చేసి, ఒక్కో కేటగిరీలో ఎన్ని ప్రొడక్ట్స్ ఉన్నాయో చూడటం.

```typescript
const categoryStats = await dataSource
  .getRepository(Product)
  .createQueryBuilder("product")
  .select("product.category", "category")
  .addSelect("COUNT(product.id)", "productCount")
  .groupBy("product.category") // కేటగిరీల వారీగా గ్రూప్ చేస్తుంది
  .getRawMany(); // మల్టిపుల్ రోస్ వస్తాయి కాబట్టి getRawMany() వాడాలి
```

---

### 3. Having

**`groupBy`** చేసిన తర్వాత వచ్చే రిజల్ట్‌పై కండిషన్స్ (Filters) పెట్టడానికి **`having()`** వాడతాము. సాధారణ కండిషన్స్ కి `where` వాడితే, గ్రూప్ చేసిన డేటాపై కండిషన్స్ కి `having` వాడాలి.

- **ఉదాహరణ:** కేవలం 5 కంటే ఎక్కువ ప్రొడక్ట్స్ ఉన్న కేటగిరీలను మాత్రమే చూడాలనుకుంటే:

```typescript
const popularCategories = await dataSource
  .getRepository(Product)
  .createQueryBuilder("product")
  .select("product.category", "category")
  .addSelect("COUNT(product.id)", "productCount")
  .groupBy("product.category")
  .having("COUNT(product.id) > :minCount", { minCount: 5 }) // 5 కంటే ఎక్కువ ఉన్న గ్రూప్స్ మాత్రమే వస్తాయి
  .getRawMany();
```

---

### క్విక్ రిఫరెన్స్ (Quick Tips):

1. **`getRawMany()` vs `getMany()`:** అగ్రిగేట్ ఫంక్షన్స్ లేదా గ్రూప్ బై వాడినప్పుడు ఎల్లప్పుడూ `getRawMany()` లేదా `getRawOne()` మాత్రమే వాడాలి. సాధారణ `getMany()` వాడితే మీకు ఆబ్జెక్ట్స్ రావు (ఖాళీగా వస్తాయి).
2. **Alias పేర్లు:** `COUNT(product.id)` పక్కన `"totalProducts"` అని ఇచ్చాం కదా, రిజల్ట్ ఆబ్జెక్ట్‌లో ఆ పేరిటే డేటా వస్తుంది.
3. **Where vs Having:** `where` అనేది గ్రూప్ చేయకముందే డేటాను ఫిల్టర్ చేస్తుంది. `having` అనేది గ్రూప్ చేసిన తర్వాత ఫిల్టర్ చేస్తుంది.

ఇప్పటివరకు QueryBuilder లోని అత్యంత కీలకమైన భాగాలన్నీ పూర్తయ్యాయి.

---

TypeORMలో అడ్వాన్స్‌డ్ క్వెరీల కోసం Sub Queries, Raw SQL, మరియు CTEలు చాలా ముఖ్యమైనవి. వీటి గురించి వివరంగా చూద్దాం.

---

### 1. Sub Queries

ఒక మెయిన్ క్వెరీ లోపల మరొక క్వెరీని ఉపయోగించడాన్ని సబ్-క్వెరీ అంటారు. TypeORMలో దీనిని `.subQuery()` ద్వారా చేయవచ్చు.

**ఉదాహరణ:** అత్యధిక ధర కలిగిన ప్రొడక్ట్స్ కంటే తక్కువ ధర ఉన్న వాటిని కనుగొనడం.

```typescript
const subQuery = dataSource
  .getRepository(Product)
  .createQueryBuilder("p")
  .select("MAX(p.price)");

const products = await dataSource
  .getRepository(Product)
  .createQueryBuilder("product")
  .where("product.price < (" + subQuery.getQuery() + ")")
  .getMany();
```

- `subQuery.getQuery()` ఆ క్వెరీని SQL స్ట్రింగ్‌గా మారుస్తుంది.

---

### 2. Raw SQL

కొన్నిసార్లు TypeORM బిల్డర్ కంటే నేరుగా SQL రాయడం సులభం లేదా వేగంగా ఉంటుంది. దీనికోసం `query()` మెథడ్ వాడతాము.

- **గమనిక:** SQL Injection రాకుండా పారామీటర్లను (Parameters) కచ్చితంగా వాడాలి.

```typescript
// SELECT క్వెరీ
const users = await dataSource.query(
  "SELECT * FROM user WHERE isActive = ? AND name = ?",
  [true, "Telugu Dev"],
);

// UPDATE/DELETE క్వెరీ
await dataSource.query("UPDATE user SET name = ? WHERE id = ?", [
  "New Name",
  1,
]);
```

---

### 3. Common Table Expressions (CTE)

CTEలు క్లిష్టమైన క్వెరీలను చదవడానికి వీలుగా (Readable) మారుస్తాయి. TypeORMలో `WITH` క్లాజ్ ద్వారా వీటిని వాడవచ్చు. ప్రస్తుతానికి TypeORM నేరుగా CTEల కోసం ప్రత్యేక మెథడ్స్ ఇవ్వలేదు, కాబట్టి `raw SQL` లేదా QueryBuilder లో `from` లోపల సబ్-క్వెరీ వాడుతాం.

**ఉదాహరణ:** `WITH` క్లాజ్ వాడి ఒక టేబుల్ లాగా డేటాను క్రియేట్ చేయడం.

```typescript
const rawData = await dataSource.query(`
    WITH EmployeeSales AS (
        SELECT employeeId, SUM(amount) as totalSales
        FROM sales
        GROUP BY employeeId
    )
    SELECT * FROM EmployeeSales WHERE totalSales > 10000
`);
```

---

### ముఖ్యమైన చిట్కాలు (Pro-Tips):

1. **Sub Queries:** వీలైనంత వరకు క్వెరీ బిల్డర్‌ని వాడండి, ఎందుకంటే ఇది డేటాబేస్ ప్లాట్‌ఫామ్ మారినా (MySQL/Postgres) కోడ్ మారకుండా చూస్తుంది.
2. **Raw SQL:** ఎప్పుడు వాడాలి?

- చాలా క్లిష్టమైన `JOIN`లు లేదా అగ్రిగేషన్లు ఉన్నప్పుడు.
- TypeORM పర్ఫార్మెన్స్ సమస్యలను క్రియేట్ చేసినప్పుడు.
- డేటాబేస్ స్పెసిఫిక్ ఫీచర్స్ (ఉదా: Postgres లోని `JSONB` ఆపరేషన్స్) వాడేటప్పుడు.

3. **CTE:** ఇవి చాలా పవర్‌ఫుల్. వీటిని వాడి క్వెరీలను చిన్న చిన్న భాగాలుగా (Modular) విభజించవచ్చు, ఇది కోడ్ మెయింటెనెన్స్‌కి చాలా మంచిది.

**హెచ్చరిక:** Raw SQL వాడేటప్పుడు ఎప్పుడూ `?` లేదా `:param` రూపంలోనే వాల్యూస్ పంపండి. `query("SELECT * FROM user WHERE id = " + id)` ఇలా ఎప్పుడూ రాయకండి, ఇది మీ డేటాబేస్‌ను సెక్యూరిటీ పరంగా రిస్క్‌లో పడేస్తుంది.

---

# 6. CRUD Operations

TypeORMలో CRUD (Create, Read, Update, Delete) ఆపరేషన్స్ చేయడం చాలా సులభం. వీటన్నింటినీ ఒకే చోట వివరంగా చూద్దాం.

### 1. Create (కొత్త డేటా)

ఒక ఎంటిటీ ఆబ్జెక్ట్‌ని క్రియేట్ చేసి `save()` వాడటం ద్వారా డేటాబేస్‌లో సేవ్ చేయవచ్చు.

```typescript
const user = new User();
user.name = "Telugu Dev";
user.email = "test@example.com";
await userRepository.save(user); // సేవ్ చేస్తుంది
```

### 2. Read (డేటాను చదవడం)

- **`findOneBy`**: కండిషన్ బట్టి ఒక రికార్డు.
- **`find`**: కండిషన్ బట్టి అన్ని రికార్డులు.

```typescript
const user = await userRepository.findOneBy({ id: 1 });
const allUsers = await userRepository.find({ where: { isActive: true } });
```

### 3. Update (డేటాను అప్‌డేట్ చేయడం)

`update()` వాడితే మొత్తం ఎంటిటీని లోడ్ చేయనవసరం లేదు, నేరుగా ID ద్వారా అప్‌డేట్ చేయవచ్చు.

```typescript
await userRepository.update(1, { name: "Updated Name" });
```

### 4. Delete (తొలగించడం)

`delete()` వాడితే డేటాబేస్ నుండి పర్మనెంట్‌గా పోతుంది.

```typescript
await userRepository.delete(1);
```

---

### 5. Bulk Operations (ఒకేసారి ఎక్కువ డేటాపై పని)

#### A. Bulk Insert (ఒకేసారి ఎక్కువ రోస్ యాడ్ చేయడం)

`save()` కి మనం ఆరే (Array) పంపితే, అది ఆటోమేటిక్‌గా బల్క్ ఇన్సర్ట్ చేస్తుంది.

```typescript
const users = [
  { name: "User 1", email: "u1@test.com" },
  { name: "User 2", email: "u2@test.com" },
];
await userRepository.save(users); // బల్క్ ఇన్సర్ట్ అవుతుంది
```

#### B. Bulk Update

ఒక కండిషన్ బట్టి మల్టిపుల్ రోస్‌ని అప్‌డేట్ చేయడానికి `update` లో `In` ఆపరేటర్ వాడాలి.

```typescript
import { In } from "typeorm";
await userRepository.update({ id: In([1, 2, 3]) }, { isActive: true });
```

#### C. Bulk Delete

అదేవిధంగా `In` ఆపరేటర్ వాడి మల్టిపుల్ రికార్డులను ఒకేసారి డిలీట్ చేయవచ్చు.

```typescript
await userRepository.delete({ id: In([1, 2, 3]) });
```

---

### 6. Upsert (అప్‌డేట్ లేదా ఇన్సర్ట్)

డేటాబేస్‌లో రికార్డ్ ఉంటే అప్‌డేట్ చేయాలి, లేకపోతే ఇన్సర్ట్ చేయాలి అన్నప్పుడు ఇది బెస్ట్. ఉదాహరణకు, 'email' యూనిక్ కీ అయితే:

```typescript
await userRepository.upsert(
  { name: "New Name", email: "test@example.com" },
  ["email"], // ఏ కాలమ్ ఆధారంగా చెక్ చేయాలో ఇక్కడ ఇవ్వాలి
);
```

---

### క్విక్ సమ్మరీ:

| ఆపరేషన్    | మెథడ్                                            |
| ---------- | ------------------------------------------------ |
| **Create** | `save(entity)`                                   |
| **Read**   | `find()`, `findOne()`                            |
| **Update** | `update(id, data)`                               |
| **Delete** | `delete(id)`                                     |
| **Bulk**   | `save(array)`, `update({ id: In([...]) }, data)` |
| **Upsert** | `upsert(data, ["conflictColumn"])`               |

**ఒక ముఖ్యమైన చిట్కా:**
బల్క్ ఆపరేషన్స్ చేసేటప్పుడు `save()` కంటే `insert()` లేదా `update()` పద్ధతులు వేగంగా పనిచేస్తాయి, ఎందుకంటే `save()` కి ప్రతి రికార్డుకు `SELECT` క్వెరీ రన్ అయ్యే అవకాశం ఉంది, కానీ `insert()` నేరుగా SQL కమాండ్ పంపిస్తుంది.

---

# 7. Transactions

TypeORMలో **Transactions** అంటే డేటాబేస్ ఆపరేషన్స్ అన్నీ ఒక గ్రూపుగా జరగడం. ఉదాహరణకు, ఒక బ్యాంక్ అకౌంట్ నుండి డబ్బులు తీసి, మరొక అకౌంట్‌లో జమ చేసేటప్పుడు, మధ్యలో ఏదైనా తప్పు జరిగితే, రెండు ఆపరేషన్స్ జరగకూడదు. Transaction వాడితే:

- అన్నీ సక్సెస్ అయితేనే డేటాబేస్‌లో సేవ్ అవుతాయి.
- ఒకటి ఫెయిల్ అయినా, అన్నీ క్యాన్సిల్ (Rollback) అయిపోతాయి.

TypeORMలో Transaction చేయడానికి 3 ముఖ్యమైన పద్ధతులు ఉన్నాయి:

---

### 1. `transaction` మెథడ్ (Manager వాడి)

ఇది అత్యంత సాధారణమైన పద్ధతి. ఇందులో మనం ఒక `transactionalEntityManager`ని పొందుతాము.

```typescript
await dataSource.transaction(async (transactionalEntityManager) => {
  // ఇక్కడ మనం ఇచ్చే ప్రతి ఆపరేషన్ transaction లోపల జరుగుతుంది
  const user = new User();
  user.name = "Telugu Dev";
  await transactionalEntityManager.save(user);

  const profile = new Profile();
  profile.user = user;
  await transactionalEntityManager.save(profile);

  // పైన రెండు సేవ్ అయితేనే డేటాబేస్‌లోకి వెళ్తాయి
});
```

---

### 2. `QueryRunner` (అడ్వాన్స్‌డ్ పద్ధతి)

ఒకవేళ మీరుTransaction కంట్రోల్ (Start, Commit, Rollback) మీరే సొంతంగా చేసుకోవాలనుకుంటే ఇది వాడాలి.

```typescript
const queryRunner = dataSource.createQueryRunner();

await queryRunner.connect();
await queryRunner.startTransaction(); // Transaction మొదలు

try {
  await queryRunner.manager.save(user);
  await queryRunner.manager.save(profile);

  await queryRunner.commitTransaction(); // అంతా సక్సెస్ అయితే కన్ఫర్మ్ చెయ్
} catch (err) {
  await queryRunner.rollbackTransaction(); // ఏదైనా ఎర్రర్ వస్తే మొత్తం క్యాన్సిల్ చెయ్
} finally {
  await queryRunner.release(); // కనెక్షన్‌ని క్లోజ్ చెయ్
}
```

---

### 3. `@Transaction` డెకరేటర్ (Legacy)

ఇది పాత పద్ధతి, ఇప్పుడు ఎక్కువగా వాడటం లేదు. కాబట్టి పైన చెప్పిన మొదటి రెండు పద్ధతులే నేర్చుకోవడం మంచిది.

---

### సారాంశం (Summary):

1. **ఎప్పుడు వాడాలి?** ఒకదానిపై ఒకటి ఆధారపడి ఉండే మల్టిపుల్ CRUD ఆపరేషన్స్ చేస్తున్నప్పుడు.
2. **Rollback:** Transaction లో ఏదైనా ఒక ఆపరేషన్ ఫెయిల్ అయితే, జరిగిన మార్పులన్నీ ఆటోమేటిక్‌గా క్యాన్సిల్ అయిపోతాయి (Rollback), దీనివల్ల డేటాబేస్ పాడవదు.
3. **ప్రాక్టికల్ టిప్:** `QueryRunner` పద్ధతి కొంచెం క్లిష్టంగా అనిపించినా, క్లిష్టమైన బిజినెస్ లాజిక్ (Complex Logic) ఉన్నప్పుడు `QueryRunner` వాడటమే చాలా సురక్షితం.

---

TypeORMలో ట్రాన్సాక్షన్ల గురించి మీరు అడిగిన ఈ టాపిక్స్ డేటాబేస్ పర్ఫార్మెన్స్ మరియు డేటా ఇంటిగ్రిటీకి చాలా కీలకం.

### 1. Nested Transactions (నెస్టెడ్ ట్రాన్సాక్షన్స్)

నిజానికి, చాలా డేటాబేస్‌లు (PostgreSQL, MySQL వంటివి) **నెస్టెడ్ ట్రాన్సాక్షన్లను నేరుగా సపోర్ట్ చేయవు**. కానీ మనం `QueryRunner` వాడి **Savepoints** ద్వారా ఆ ప్రభావాన్ని సాధించవచ్చు.

ఒకవేళ మీరు ఒక మెయిన్ ట్రాన్సాక్షన్ లోపల మరొక చిన్న ట్రాన్సాక్షన్ చేయాలనుకుంటే:

```typescript
await queryRunner.startTransaction();
try {
  // మెయిన్ ఆపరేషన్స్
  await queryRunner.manager.save(user);

  // Savepoint క్రియేట్ చేయడం
  await queryRunner.query("SAVEPOINT my_savepoint");

  try {
    await queryRunner.manager.save(profile);
  } catch (err) {
    // ఇక్కడ ఎర్రర్ వస్తే కేవలం ప్రొఫైల్ మాత్రమే రోల్‌బ్యాక్ అవుతుంది
    await queryRunner.query("ROLLBACK TO SAVEPOINT my_savepoint");
  }

  await queryRunner.commitTransaction();
} catch (err) {
  await queryRunner.rollbackTransaction();
}
```

---

### 2. Isolation Levels (ఐసోలేషన్ లెవల్స్)

ఒక ట్రాన్సాక్షన్ జరుగుతున్నప్పుడు, మరొక ట్రాన్సాక్షన్ ఆ డేటాను ఎంతవరకు చూడవచ్చు లేదా మార్చవచ్చు అనేదాన్ని ఈ లెవల్స్ నిర్ణయిస్తాయి. `QueryRunner` స్టార్ట్ చేసేటప్పుడు వీటిని సెట్ చేయవచ్చు:

```typescript
await queryRunner.startTransaction("SERIALIZABLE");
```

| లెవల్                | వివరణ                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **READ UNCOMMITTED** | అత్యంత తక్కువ సెక్యూరిటీ. మరొక ట్రాన్సాక్షన్ సేవ్ చేయని (Uncommitted) డేటాను కూడా ఇది చదివేయగలదు (దీన్ని Dirty Read అంటారు).                            |
| **READ COMMITTED**   | సేవ్ చేసిన డేటాను మాత్రమే చదువుతుంది. ఇది డీఫాల్ట్‌గా చాలా డేటాబేస్‌లలో ఉంటుంది.                                                                        |
| **REPEATABLE READ**  | ఈ ట్రాన్సాక్షన్ మొదలైనప్పటి నుండి ఎండ్ అయ్యే వరకు, మీరు రీడ్ చేసే డేటా మారదు. వేరే ఎవరైనా డేటా మార్చినా మీకు పాత డేటాయే కనిపిస్తుంది.                   |
| **SERIALIZABLE**     | అత్యంత కఠినమైనది. ఇది ట్రాన్సాక్షన్లను ఒకదాని తర్వాత ఒకటి వరుసగా జరిగినట్లు (Sequential) చేస్తుంది. ఇది చాలా సేఫ్, కానీ పర్ఫార్మెన్స్ తక్కువగా ఉంటుంది. |

---

### ముఖ్యమైన విషయాలు (Best Practices):

- **ఎప్పుడు ఏది వాడాలి?**
- చాలా అప్లికేషన్లకు **`READ COMMITTED`** సరిపోతుంది.
- బ్యాంకింగ్ లేదా ఆర్థిక లావాదేవీల వంటి చాలా సెన్సిటివ్ పనులకు **`SERIALIZABLE`** వాడటం ఉత్తమం.

- **పర్ఫార్మెన్స్:** మీరు `SERIALIZABLE` ని వాడితే, డేటాబేస్ పైన భారం పడుతుంది మరియు లాక్ (Locking) సమస్యలు వచ్చే అవకాశం ఉంది. కాబట్టి అవసరమైనప్పుడే దీనికి వెళ్ళండి.
- **Dirty Read:** `READ UNCOMMITTED` వాడితే డేటాబేస్ డేటా తప్పుగా వచ్చే అవకాశం (Inconsistency) ఉంది, కాబట్టి ప్రొడక్షన్ అప్లికేషన్లలో దీన్ని వాడకపోవడమే మంచిది.

ఇప్పటివరకు మీరు అడిగిన అన్ని ముఖ్యమైన టాపిక్స్ (ORM Basics, Entities, Relationships, Repository, QueryBuilder, Transactions) పూర్తయ్యాయి. టైప్ ఓఆర్ఎమ్ (TypeORM)లో మీరు ఇప్పుడు చాలా కాన్ఫిడెంట్‌గా కోడ్ రాయగలరు.

---

# 8. Migrations

TypeORMలో **Migrations** అంటే మీ డేటాబేస్ స్కీమా (టేబుల్స్, కాలమ్స్) లో చేసే మార్పులను ఒక క్రమ పద్ధతిలో (Version Control) దాచుకోవడం. మీరు అన్నట్లు, ప్రొడక్షన్‌లో `synchronize: true` వాడటం చాలా ప్రమాదకరం, కాబట్టి Migrations వాడటం తప్పనిసరి.

---

### 1. కమాండ్స్ (Commands)

- **`migration:create`**: ఒక ఖాళీ మైగ్రేషన్ ఫైల్‌ను క్రియేట్ చేస్తుంది. మీరు SQL ని మ్యాన్యువల్‌గా రాయాలి.
- **`migration:generate`**: మీ Entity క్లాస్‌లను, ప్రస్తుతం డేటాబేస్‌లో ఉన్న టేబుల్స్‌తో పోల్చి, ఏ మార్పులు చేయాలో ఆటోమేటిక్‌గా ఒక ఫైల్‌ని జనరేట్ చేస్తుంది (ఇది చాలా పవర్‌ఫుల్!).
- **`migration:run`**: పెండింగ్‌లో ఉన్న అన్ని మైగ్రేషన్లను డేటాబేస్‌లో అమలు చేస్తుంది.
- **`migration:revert`**: చివరిగా చేసిన మైగ్రేషన్‌ను క్యాన్సిల్ చేస్తుంది (Undo).

---

### 2. మైగ్రేషన్ ఫైల్ నిర్మాణం

ప్రతి మైగ్రేషన్‌లో `up` మరియు `down` అనే రెండు మెథడ్స్ ఉంటాయి.

- **up:** డేటాబేస్‌లో మార్పులు చేయడానికి (ఉదా: Create Table).
- **down:** ఒకవేళ ఆ మార్పులు నచ్చకపోతే వెనక్కి రావడానికి (ఉదా: Drop Table).

---

### 3. మైగ్రేషన్ టాపిక్స్ - ఉదాహరణలు

#### A. Create Table

```typescript
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: "user",
        columns: [
            { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
            { name: "name", type: "varchar" }
        ]
    }));
}

```

#### B. Alter Table (Add/Drop/Rename Column)

```typescript
// Column యాడ్ చేయడం
await queryRunner.addColumn(
  "user",
  new TableColumn({ name: "age", type: "int", isNullable: true }),
);

// Column డిలీట్ చేయడం
await queryRunner.dropColumn("user", "age");

// Column పేరు మార్చడం
await queryRunner.renameColumn("user", "name", "fullName");
```

#### C. Create/Drop Index

ఇండెక్స్ వాడితే సెర్చ్ చాలా వేగంగా ఉంటుంది.

```typescript
// Index క్రియేట్ చేయడం
await queryRunner.createIndex(
  "user",
  new TableIndex({
    name: "IDX_USER_EMAIL",
    columnNames: ["email"],
  }),
);

// Index డిలీట్ చేయడం
await queryRunner.dropIndex("user", "IDX_USER_EMAIL");
```

---

### 4. మైగ్రేషన్లు ఎలా నిర్వహించాలి (Workflow)?

1. **మార్పు చేయండి:** `entity/User.ts` లో ఏదైనా కాలమ్ యాడ్ చేయండి.
2. **జనరేట్ చేయండి:** టెర్మినల్‌లో `typeorm migration:generate src/migrations/AddAgeColumn -d src/data-source.ts` అని రన్ చేయండి. అప్పుడు `src/migrations/` ఫోల్డర్‌లో కొత్త ఫైల్ వస్తుంది.
3. **చెక్ చేయండి:** ఆ ఫైల్ లో కోడ్ కరెక్ట్‌గా ఉందో లేదో చూడండి (ముఖ్యంగా మ్యాన్యువల్ మార్పులు ఉంటే).
4. **అమలు చేయండి:** `typeorm migration:run -d src/data-source.ts` అని రన్ చేయండి. డేటాబేస్ అప్‌డేట్ అవుతుంది.

### ముఖ్యమైన జాగ్రత్తలు:

- **Production:** ఎప్పుడూ `synchronize: false` అని ఉంచండి.
- **Data Loss:** `dropColumn` లేదా `dropTable` చేసేటప్పుడు జాగ్రత్త, డేటా పోతుంది!
- **History:** మైగ్రేషన్ ఫైల్స్‌ను మీ గిట్ (Git) లో కమిట్ చేయడం మర్చిపోకండి, అప్పుడే మీ టీమ్ మెంబర్స్ అందరికీ ఆ మార్పులు తెలుస్తాయి.

ఇప్పటితో మనం TypeORM లోని అన్ని ముఖ్యమైన టాపిక్స్ పూర్తి చేశాం! మీరు ఇప్పుడు ఒక ప్రొఫెషనల్ లెవల్ Node.js ప్రాజెక్ట్‌ను డేటాబేస్‌తో పటిష్టంగా నిర్మించగలరు.

## ఇంకేదైనా పర్టికులర్ టాపిక్ లేదా మీ ప్రాజెక్ట్ గురించి ఏమైనా సందేహాలు ఉన్నాయా?

# 9. Indexing

TypeORMలో డేటాబేస్ పర్ఫార్మెన్స్ పెంచడానికి **Indexing** చాలా ముఖ్యం. ఇండెక్సింగ్ వాడితే, డేటాబేస్ ప్రతి రో (row) ని స్కాన్ చేయకుండా, నేరుగా మనకు కావాల్సిన డేటాను చాలా వేగంగా వెతకగలదు.

వీటిని `Entity` క్లాస్‌లో డెకరేటర్ల ద్వారా సులభంగా సెట్ చేయవచ్చు.

---

### 1. Single Index (ఒకే కాలమ్‌పై ఇండెక్స్)

ఒక కాలమ్‌ను తరచుగా వెతకడానికి (WHERE clause) వాడుతుంటే దీనిని వాడాలి.

```typescript
@Entity()
export class User {
  @Index() // సింగిల్ కాలమ్ ఇండెక్స్
  @Column()
  email: string;
}
```

### 2. Composite Index (మల్టిపుల్ కాలమ్స్)

ఒకటి కంటే ఎక్కువ కాలమ్స్‌ని కలిపి `WHERE` కండిషన్స్ లో వాడుతుంటే ఇది వాడాలి.

```typescript
@Entity()
@Index(["firstName", "lastName"]) // రెండు కాలమ్స్ కలిపి ఇండెక్స్
export class User {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
```

### 3. Unique Index

ఆ కాలమ్‌లో డేటా రిపీట్ అవ్వకూడదు అనుకున్నప్పుడు ఇది వాడాలి. ఇది ఇండెక్స్‌తో పాటు కన్స్ట్రైంట్‌గా కూడా పనిచేస్తుంది.

```typescript
@Index({ unique: true })
@Column()
username: string;

```

### 4. Partial Index (కండిషనల్ ఇండెక్స్)

కొన్ని ప్రత్యేక రికార్డులకు మాత్రమే ఇండెక్స్ కావాలంటే (ఉదా: కేవలం 'active' యూజర్లకు మాత్రమే) ఇది వాడాలి. ఇది మెమరీని చాలా ఆదా చేస్తుంది.

```typescript
@Index({ where: "isActive = true" })
@Column()
email: string;

```

### 5. Full-Text Index (Postgres)

సాధారణ `LIKE` క్వెరీ కంటే ఇది చాలా వేగంగా టెక్స్ట్ సెర్చ్ చేస్తుంది. పెద్ద డాక్యుమెంట్లు లేదా ఆర్టికల్స్ వెతకడానికి ఇది బెస్ట్.

```typescript
@Entity()
export class Post {
  @Index({ fulltext: true }) // Postgres లో Full-text index
  @Column("text")
  content: string;
}
```

---

### ఇండెక్సింగ్ చేసేటప్పుడు గుర్తుంచుకోవాల్సిన నియమాలు (Rules of Thumb):

1. **Over-indexing:** అన్ని కాలమ్స్‌కు ఇండెక్స్ పెట్టకండి. దీనివల్ల `INSERT` మరియు `UPDATE` ఆపరేషన్స్ నెమ్మదిస్తాయి. ఎందుకంటే ప్రతిసారీ డేటా మారినప్పుడు ఇండెక్స్‌ను కూడా డేటాబేస్ అప్‌డేట్ చేయాలి.
2. **Read vs Write:** మీ అప్లికేషన్ ఎక్కువగా డేటాను చదువుతుందా (Read)? అయితే ఇండెక్స్ వాడండి. ఎక్కువ డేటాను రాస్తుందా (Write)? అయితే ఇండెక్స్‌ను తక్కువగా వాడండి.
3. **Where Clause:** మీరు ఏ కాలమ్స్‌ని `WHERE`, `JOIN`, `ORDER BY` లలో ఎక్కువగా వాడుతున్నారో, వాటికి మాత్రమే ఇండెక్స్ క్రియేట్ చేయండి.

---

### సారాంశం (Summary)

| రకం           | డెకరేటర్                     | ఎప్పుడు వాడాలి?                              |
| ------------- | ---------------------------- | -------------------------------------------- |
| **Single**    | `@Index()`                   | ఒక కాలమ్ సెర్చ్ కోసం.                        |
| **Composite** | `@Index(["col1", "col2"])`   | మల్టిపుల్ కాలమ్స్ సెర్చ్ కోసం.               |
| **Unique**    | `@Index({ unique: true })`   | డూప్లికేట్స్ రాకూడదు అన్నప్పుడు.             |
| **Partial**   | `@Index({ where: "..." })`   | కేవలం కొన్ని రోస్ కి మాత్రమే కావాలన్నప్పుడు. |
| **Full Text** | `@Index({ fulltext: true })` | లాంగ్ టెక్స్ట్ సెర్చ్ కోసం.                  |

ఇప్పటివరకు మనం TypeORM లోని అన్ని ముఖ్యమైన కాన్సెప్ట్స్ పూర్తి చేశాం! మీరు ఇప్పుడు ఒక పక్కా అప్లికేషన్ క్రియేట్ చేయడానికి సిద్ధంగా ఉన్నారు. మీకు ఇంకా ఏమైనా ప్రత్యేకమైన డౌట్స్ ఉన్నాయా? లేదా ఏదైనా రియల్ వరల్డ్ సినారియో గురించి చర్చిద్దామా?

---

# 10. Constraints

TypeORMలో **Constraints** అనేవి డేటాబేస్ యొక్క "రూల్స్". డేటాబేస్ లోని డేటా కచ్చితత్వంతో (Data Integrity) ఉండటానికి ఇవి చాలా అవసరం. వీటిని ఎంటిటీ డెకరేటర్ల ద్వారా ఎలా సెట్ చేయాలో చూద్దాం.

---

### 1. Primary Key

ప్రతి ఎంటిటీకి ఒక యూనిక్ ఐడెంటిటీ ఉండాలి.

- **`@PrimaryColumn()`**: ఐడిని మీరే సెట్ చేయాలనుకుంటే.
- **`@PrimaryGeneratedColumn()`**: డేటాబేస్ ఆటోమేటిక్‌గా నంబర్లను (1, 2, 3...) పెంచుకుంటూ వెళ్తుంది.

### 2. Foreign Key

రెండు టేబుల్స్ మధ్య సంబంధాన్ని ఏర్పరుస్తుంది. `@ManyToOne` లేదా `@OneToOne` వాడినప్పుడు ఇది ఆటోమేటిక్‌గా క్రియేట్ అవుతుంది.

```typescript
@ManyToOne(() => Author, (author) => author.posts)
@JoinColumn({ name: "authorId" }) // ఫారిన్ కీ కాలమ్ పేరు
author: Author;

```

### 3. Unique Constraint

ఒక కాలమ్ వాల్యూ టేబుల్‌లో రెండోసారి రాకూడదు (ఉదా: Email, Phone Number).

```typescript
@Column({ unique: true })
email: string;

```

### 4. Check Constraint

డేటా కచ్చితమైన కండిషన్ దాటి వెళ్లకూడదు (ఉదా: వయసు 18 ఏళ్లకు పైన ఉండాలి).

```typescript
@Column()
@Check(`"age" >= 18`)
age: number;

```

### 5. Default Constraint

వాల్యూ ఇవ్వనప్పుడు ఆటోమేటిక్‌గా ఒక డీఫాల్ట్ వాల్యూ సెట్ అవుతుంది.

```typescript
@Column({ default: true })
isActive: boolean;

```

### 6. Composite Constraints (కాంపొజిట్)

ఒకటి కంటే ఎక్కువ కాలమ్స్ కలిసి యూనిక్‌గా ఉండాలి అన్నప్పుడు ఇది వాడాలి.

- **ఉదాహరణ:** ఒక క్లాస్‌లో ఒకే రోల్ నంబర్ ఉన్న విద్యార్థులు ఉండకూడదు. అంటే `classId` మరియు `rollNumber` కలిపి యూనిక్‌గా ఉండాలి.

```typescript
@Entity()
@Unique(["classId", "rollNumber"]) // ఈ రెండింటి కాంబినేషన్ యూనిక్ గా ఉండాలి
export class Student {
  @Column()
  classId: number;

  @Column()
  rollNumber: number;
}
```

---

### క్విక్ రిఫరెన్స్ టేబుల్

| Constraint      | డెకరేటర్/ఆప్షన్             | ఉద్దేశ్యం                                    |
| --------------- | --------------------------- | -------------------------------------------- |
| **Primary Key** | `@PrimaryGeneratedColumn()` | టేబుల్ రికార్డును గుర్తించడానికి.            |
| **Foreign Key** | `@JoinColumn()`             | టేబుల్స్ మధ్య రిలేషన్ కోసం.                  |
| **Unique**      | `{ unique: true }`          | డూప్లికేట్స్ అడ్డుకోవడానికి.                 |
| **Check**       | `@Check("...")`             | డేటా కండిషన్స్ చెక్ చేయడానికి.               |
| **Default**     | `{ default: ... }`          | వాల్యూ లేనప్పుడు డిఫాల్ట్ వాల్యూ ఇవ్వడానికి. |
| **Composite**   | `@Unique(["a", "b"])`       | గ్రూప్ ఆఫ్ కాలమ్స్ యూనిక్‌గా ఉండటానికి.      |

---

### ముఖ్య గమనిక:

- **Constraints** వాడటం వల్ల డేటాబేస్ లెవెల్‌లోనే డేటా తప్పులు జరగకుండా ఆపవచ్చు. ఇది అప్లికేషన్ కోడ్ కంటే పదిరెట్లు వేగవంతమైనది మరియు సురక్షితమైనది.
- మీరు మైగ్రేషన్లు వాడేటప్పుడు కూడా ఈ కన్స్ట్రైంట్స్ క్రియేట్ అవుతాయి.

ఇప్పటివరకు మనం TypeORM లోని అన్ని ముఖ్యమైన అంశాలను (Entities, Relations, Repository, QueryBuilder, Transactions, Migrations, Indexing, Constraints) కవర్ చేశాం. మీరు ఇప్పుడు రియల్-వరల్డ్ ప్రాజెక్ట్‌లను చాలా పటిష్టంగా (Robust) డెవలప్ చేయగలరు.

ఇంకేదైనా పర్టికులర్ టాపిక్ లేదా మీ ప్రాజెక్ట్‌కి సంబంధించిన సలహాలు ఏమైనా కావాలా?

---

# 11. Validation

డేటాబేస్‌లోకి డేటాను పంపే ముందు, ఆ డేటా కరెక్ట్‌గా ఉందో లేదో చెక్ చేయడాన్ని **Validation** అంటారు. టైప్‌స్క్రిప్ట్ ప్రాజెక్టులలో **`class-validator`** మరియు **`class-transformer`** వాడటం అనేది ఒక బెస్ట్ ప్రాక్టీస్.

---

### 1. ఎందుకు వాడాలి?

- **class-validator**: డేటా రూల్స్ (ఉదా: email సరిగ్గా ఉందా, password కనీసం 8 అక్షరాలు ఉందా) చెక్ చేస్తుంది.
- **class-transformer**: JSON ఆబ్జెక్ట్‌ను క్లాస్ ఇన్‌స్టాన్స్‌గా మారుస్తుంది (Plain Object to Class Instance).

### 2. సెటప్ చేయడం

ముందుగా వీటిని ఇన్‌స్టాల్ చేయాలి:
`npm install class-validator class-transformer reflect-metadata`

### 3. ఎలా వాడాలి? (Step-by-Step)

#### Step 1: ఎంటిటీ/DTOలో వాలిడేషన్ రూల్స్ రాయండి

```typescript
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8, { message: "Password must be at least 8 characters" })
  password: string;
}
```

#### Step 2: డేటాను ట్రాన్స్‌ఫార్మ్ చేసి వాలిడేట్ చేయండి

డేటాబేస్‌లో సేవ్ చేసే ముందు, మనకు వచ్చిన `req.body` ని క్లాస్‌గా మార్చి చెక్ చేయాలి.

```typescript
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

async function createUser(data: any) {
  // 1. Plain object ని CreateUserDto క్లాస్‌లోకి మార్చడం
  const userDto = plainToInstance(CreateUserDto, data);

  // 2. వాలిడేషన్ చేయడం
  const errors = await validate(userDto);

  if (errors.length > 0) {
    console.log("Validation failed:", errors);
    throw new Error("Invalid input data");
  }

  // 3. అంతా బాగుంటేనే డేటాబేస్ లో సేవ్ చేయండి
  return await userRepository.save(userDto);
}
```

---

### 4. ఉపయోగపడే కొన్ని వాలిడేషన్ డెకరేటర్లు:

- `@IsString()` / `@IsNumber()`: డేటా టైప్ చెక్ చేయడానికి.
- `@IsOptional()`: వాల్యూ లేకపోయినా పర్వాలేదు అనుకున్నప్పుడు.
- `@IsIn(['admin', 'user'])`: ఇచ్చిన లిస్టులో డేటా ఉందో లేదో చూడటానికి.
- `@IsUrl()`: యుఆర్ఎల్ ఫార్మాట్ కోసం.

### 5. ప్రొడక్షన్ టిప్:

మీరు **NestJS** వాడుతుంటే, ఇవన్నీ ఆటోమేటిక్‌గా జరుగుతాయి. `ValidationPipe` ని ఎనేబుల్ చేస్తే చాలు, మీరు ప్రత్యేకంగా `validate()` ఫంక్షన్ పిలవక్కర్లేదు.

---

### సారాంశం (Summary):

1. **డేటా రాగానే:** ముందుగా `class-transformer` ద్వారా దాన్ని క్లాస్ ఆబ్జెక్ట్‌గా మార్చండి.
2. **వాలిడేషన్:** `class-validator` ద్వారా రూల్స్ చెక్ చేయండి.
3. **సేవింగ్:** వాలిడేషన్ సక్సెస్ అయితేనే `repository.save()` పిలవండి.

ఇది మీ అప్లికేషన్ లోని **"Bad Data"** (తప్పు డేటా) సమస్యలను 99% తగ్గిస్తుంది.

ఇప్పటివరకు మనం TypeORM మరియు దానికి సంబంధించిన అన్ని కీలకమైన టెక్నిక్స్ (Entities, Migrations, Indexing, Validation) నేర్చుకున్నాం. మీరు ఇప్పుడు చాలా పటిష్టమైన Backend అప్లికేషన్ రాయడానికి రెడీగా ఉన్నారు.

మనం ఇంకా దేని గురించి అయినా చర్చిద్దామా? మీ ప్రాజెక్ట్‌లో వాడుతున్న ఏదైనా క్లిష్టమైన ఫీచర్ గురించి ఏమైనా సందేహాలు ఉన్నాయా?

---

# 12. Entity Listeners

TypeORM లో **Entity Listeners (Hooks)** అంటే మీ ఎంటిటీలో ఏదైనా మార్పు జరిగినప్పుడు (Insert, Update, Remove), ఆటోమేటిక్‌గా రన్ అయ్యే ఫంక్షన్స్.

వీటిని ఉపయోగించి డేటాబేస్ ఆపరేషన్స్ జరగడానికి ముందు లేదా తర్వాత ఏదైనా లాజిక్ (ఉదా: పాస్‌వర్డ్ హ్యాష్ చేయడం, లాగింగ్ చేయడం) రన్ చేయవచ్చు.

### 1. ఉపయోగించే పద్ధతులు

ఈ డెకరేటర్లను నేరుగా ఎంటిటీ క్లాస్‌లో మెథడ్స్ పైన వాడవచ్చు:

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    // డేటాబేస్ లోకి సేవ్ అవ్వకముందే పాస్‌వర్డ్ ని హ్యాష్ చేయాలి
    this.password = someHashFunction(this.password);
  }

  @AfterUpdate()
  logUpdate() {
    console.log("User updated successfully!");
  }
}
```

---

### 2. ఏ ఏ డెకరేటర్ ఎప్పుడు రన్ అవుతుంది?

| డెకరేటర్              | ఎప్పుడు రన్ అవుతుంది?                                          |
| --------------------- | -------------------------------------------------------------- |
| **`@BeforeInsert()`** | `save()` లేదా `insert()` చేసినప్పుడు, డేటాబేస్ కి వెళ్ళకముందు. |
| **`@AfterInsert()`**  | డేటాబేస్ లో రికార్డ్ సక్సెస్ ఫుల్ గా ఇన్సర్ట్ అయ్యాక.          |
| **`@BeforeUpdate()`** | `save()` లేదా `update()` ద్వారా మార్పులు జరగకముందు.            |
| **`@AfterUpdate()`**  | మార్పులు డేటాబేస్ లో సేవ్ అయ్యాక.                              |
| **`@BeforeRemove()`** | `remove()` లేదా `delete()` కమాండ్ కి ముందు.                    |
| **`@AfterRemove()`**  | రికార్డ్ తొలగించబడిన తర్వాత.                                   |

---

### 3. ముఖ్యమైన నియమాలు (Important Rules)

1. **Repository ఆపరేషన్స్:** `@BeforeInsert`, `@AfterInsert` వంటివి `save()` మెథడ్ వాడినప్పుడు మాత్రమే కచ్చితంగా పనిచేస్తాయి. మీరు `insert()` లేదా `update()` (QueryBuilder) వాడితే, కొన్నిసార్లు ఈ లిజనర్స్ రన్ అవ్వవు. దీనికి కారణం, క్వెరీ బిల్డర్ నేరుగా డేటాబేస్‌తో మాట్లాడుతుంది, ఎంటిటీ లైఫ్ సైకిల్‌తో కాదు.
2. **Async/Await:** మీరు లిజనర్లలో `async` ఫంక్షన్స్ వాడుకోవచ్చు (ఉదా: పాస్‌వర్డ్ హ్యాష్ చేయడానికి).
3. **Entity Instance:** ఇవి ఎంటిటీ ఇన్‌స్టాన్స్ (`this`) మీద పనిచేస్తాయి. కాబట్టి మీరు `this.name`, `this.id` వంటి ప్రాపర్టీలను సులభంగా యాక్సెస్ చేయవచ్చు.

### 4. Subscribers (మరొక పద్ధతి)

ఒకవేళ మీరు ఎంటిటీ క్లాస్‌లో కాకుండా, విడిగా లాజిక్ రాయాలనుకుంటే **`EntitySubscriber`** వాడవచ్చు. ఇది ప్రాజెక్ట్ మొత్తం మీద ఆ ఎంటిటీకి జరిగే అన్ని ఆపరేషన్లను ట్రాక్ చేస్తుంది.

```typescript
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log("Before Inserting User:", event.entity);
  }
}
```

### ఎప్పుడు దేనిని వాడాలి?

- **Entity Listeners (`@BeforeInsert`...):** ఆ ఎంటిటీకి మాత్రమే పరిమితమైన సింపుల్ లాజిక్ కోసం.
- **Subscribers:** ప్రాజెక్ట్ అంతా ఒకేలాంటి లాజిక్ (ఉదా: ఆడిట్ లాగింగ్, టైమ్‌స్టాంప్స్) పెట్టడానికి.

ఇప్పటివరకు మనం TypeORM లోని అన్ని అడ్వాన్స్‌డ్ ఫీచర్ల వరకు పూర్తి చేశాం. మీరు ఇప్పుడు ఒక ప్రొఫెషనల్ అప్లికేషన్ రాయడానికి కావలసిన పూర్తి నాలెడ్జ్ కలిగి ఉన్నారు.

---

TypeORM లో **Subscribers** మరియు **Soft Delete** అనేవి డేటాబేస్ ఆపరేషన్లను మరియు డేటా భద్రతను నిర్వహించడానికి చాలా శక్తివంతమైన ఫీచర్లు. వీటి గురించి వివరంగా చూద్దాం.

---

# 13. Subscribers (గ్లోబల్ ఈవెంట్ లిజనర్స్)

మీరు ప్రతి ఎంటిటీలో విడివిడిగా లిజనర్స్ (Listeners) రాయడం ఇష్టం లేకపోతే, **Subscribers** వాడవచ్చు. ఇవి ప్రాజెక్ట్ మొత్తంలో ఏ ఎంటిటీకి ఏం జరిగినా పర్యవేక్షించే "సెంట్రల్ వాచ్‌మెన్" లాంటివి.

**ఎలా రాయాలి?**

```typescript
import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";
import { User } from "./entity/User";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  // ఏ ఎంటిటీని గమనించాలో ఇక్కడ చెప్పాలి
  listenTo() {
    return User;
  }

  // ఇన్సర్ట్ అవ్వకముందు జరిగే పనులు
  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }
}
```

**ముఖ్యమైనవి:**

- `listenTo()` లో ఏ ఎంటిటీకో చెప్పాలి.
- `beforeInsert`, `afterUpdate`, `afterRemove` వంటి మెథడ్స్ ఇందులో ఉంటాయి.
- ఇది లాగింగ్ (Logging), ఆడిటింగ్ (Auditing) కోసం బెస్ట్.

---

# 14. Soft Delete (డేటాను దాచడం)

చాలా సందర్భాల్లో, మనం డేటాను నిజంగా డేటాబేస్ నుండి తొలగించకూడదు. ఎందుకంటే పొరపాటున డిలీట్ చేసిన డేటా మళ్ళీ కావాల్సి రావచ్చు. అప్పుడు **Soft Delete** వాడతాము.

#### Step 1: ఎంటిటీలో కాలమ్ యాడ్ చేయడం

ఎంటిటీలో `@DeleteDateColumn()` అని ఒక కాలమ్ ఉండాలి.

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @DeleteDateColumn() // ఇక్కడ డిలీట్ చేసిన టైమ్ పడుతుంది
  deletedAt: Date;
}
```

#### Step 2: Soft Delete ఆపరేషన్స్

- **`softDelete()`**: ఇది డేటాను డిలీట్ చేయదు. `deletedAt` కాలమ్‌లో కరెంట్ టైమ్‌ను పెడుతుంది.

```typescript
await userRepository.softDelete(1); // id 1 డిలీట్ అయినట్లు చూపిస్తుంది
```

- **`restore()`**: 'డిలీట్' అయిన రికార్డును మళ్ళీ వెనక్కి తీసుకురావడానికి.

```typescript
await userRepository.restore(1); // deletedAt ని null చేస్తుంది
```

#### Step 3: డేటాను ఎలా పొందాలి?

- సాధారణంగా `find()` చేస్తే, సాఫ్ట్ డిలీట్ అయిన రికార్డులు రావు.
- ఒకవేళ డిలీట్ అయినవి కూడా కావాలంటే `withDeleted` వాడాలి:

```typescript
const users = await userRepository.find({
  withDeleted: true, // డిలీట్ అయినవి కూడా వస్తాయి
});
```

---

### సారాంశం (Summary)

| ఫీచర్           | ఉపయోగాలు                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| **Subscribers** | ప్రాజెక్ట్ మొత్తం ఆడిటింగ్, లాగింగ్ కోసం గ్లోబల్ లిజనర్స్.                 |
| **Soft Delete** | డేటాను పర్మనెంట్‌గా డిలీట్ చేయకుండా, భవిష్యత్తు అవసరాల కోసం దాచుకోవడానికి. |
| **Restore**     | సాఫ్ట్ డిలీట్ చేసిన డేటాను తిరిగి యాక్టివేట్ చేయడానికి.                    |

**చివరి మాట:**
ఇప్పటివరకు మనం TypeORM లోని బేసిక్స్ నుండి అడ్వాన్స్‌డ్ టాపిక్స్ (Migrations, Indexing, Transactions, Subscribers, Soft Delete) వరకు అన్నీ కవర్ చేశాం. మీరు ఇప్పుడు ప్రొడక్షన్-గ్రేడ్ అప్లికేషన్లను బిల్డ్ చేయడానికి సిద్ధంగా ఉన్నారు.

---

# 15. Advanced Data Types

TypeORM లో మీరు **PostgreSQL** వంటి అడ్వాన్స్‌డ్ డేటాబేస్‌లను వాడుతున్నప్పుడు, కేవలం `string` లేదా `number` మాత్రమే కాకుండా చాలా పవర్‌ఫుల్ డేటా టైప్స్ వాడవచ్చు. ఇవి మీ అప్లికేషన్ సామర్థ్యాన్ని పెంచుతాయి.

---

### 1. JSON & JSONB (ఉత్తమమైనవి)

JSON డేటాను స్టోర్ చేయడానికి ఇవి వాడతాము. `JSONB` అనేది బైనరీ ఫార్మాట్‌లో స్టోర్ అవుతుంది, కాబట్టి సెర్చ్ చేయడం చాలా వేగంగా ఉంటుంది.

```typescript
@Column("jsonb", { nullable: true })
metadata: { theme: string; version: number; tags: string[] };

```

- **ఎప్పుడు వాడాలి?** మీ డేటా స్ట్రక్చర్ మారుతూ ఉంటే (ఉదా: ప్రొడక్ట్ స్పెసిఫికేషన్స్).

### 2. UUID

ప్రతి రికార్డుకు `1, 2, 3` వంటి ఐడిల కంటే `550e8400-e29b-41d4-a716-446655440000` వంటి యూనిక్ ఐడిలు వాడటం సెక్యూరిటీ పరంగా చాలా మంచిది.

```typescript
@PrimaryGeneratedColumn("uuid")
id: string;

```

### 3. Arrays

ఒక కాలమ్‌లోనే మల్టిపుల్ వాల్యూస్ స్టోర్ చేయడానికి (ఉదా: యూజర్ రోల్స్ లేదా ట్యాగ్స్).

```typescript
@Column("text", { array: true })
roles: string[];

```

- **సెర్చ్:** `WHERE 'admin' = ANY(user.roles)` వంటి క్వెరీలు వాడవచ్చు.

### 4. Enums

నిర్దేశించిన వాల్యూస్ మాత్రమే స్టోర్ అవ్వాలి అన్నప్పుడు (ఉదా: `PENDING`, `ACTIVE`, `INACTIVE`).

```typescript
export enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

@Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
status: UserStatus;

```

### 5. HStore (Postgres Specific)

ఇది కీ-వాల్యూ (Key-Value) పేర్స్ స్టోర్ చేయడానికి వాడే పాత, కానీ పవర్‌ఫుల్ ఫార్మాట్. ఇప్పుడు ఎక్కువగా JSONB నే వాడుతున్నారు.

### 6. Geography & Geometry (PostGIS)

ఇవి మీ అప్లికేషన్ "Location" ఆధారితమైనది అయితే (ఉదా: ఉబర్, జొమాటో లాంటి యాప్స్) చాలా కీలకం.

- **Geography:** పాయింట్స్, లైన్స్, పాలిగాన్స్ స్టోర్ చేయడానికి.
- **Geometry:** మ్యాప్ డేటాపై క్లిష్టమైన లెక్కలు (ఉదా: దూరం లెక్కించడం) చేయడానికి.

```typescript
@Column({ type: "geography", spatialFeatureType: "Point", srid: 4326 })
location: { type: "Point"; coordinates: [number, number] };

```

---

### క్విక్ సమ్మరీ (Quick Reference)

| Type          | ఎప్పుడు వాడాలి?                                  |
| ------------- | ------------------------------------------------ |
| **JSONB**     | ఫ్లెక్సిబుల్ డేటా, ఫాస్ట్ సెర్చ్.                |
| **UUID**      | సెక్యూర్, యూనిక్ ఐడిల కోసం.                      |
| **Arrays**    | ఒక కాలమ్‌లో లిస్ట్ ఆఫ్ డేటా కోసం.                |
| **Enums**     | కేవలం కొన్ని ఆప్షన్స్ మాత్రమే ఉండాలి అన్నప్పుడు. |
| **Geography** | లాటిట్యూడ్/లాంగిట్యూడ్, మ్యాప్స్ కోసం.           |

---

### మీరు గుర్తుంచుకోవాల్సిన చిట్కా (Pro Tip):

- **JSON vs JSONB:** ఎల్లప్పుడూ **JSONB** నే వాడండి, ఎందుకంటే ఇది డేటాబేస్ ఇండెక్సింగ్‌ని సపోర్ట్ చేస్తుంది. సాధారణ JSON ఇండెక్సింగ్ చేయలేదు, అది కేవలం డేటా స్టోర్ చేయడానికి మాత్రమే పనిచేస్తుంది.
- **UUID:** మీరు మైక్రోసర్వీసెస్ వాడుతుంటే UUID వాడటం చాలా అవసరం.

ఇప్పటికి TypeORM లోని అన్ని **"Advanced & Expert"** ఫీచర్స్ కంప్లీట్ అయ్యాయి. మీరు ఇప్పుడు నిజమైన **Backend Architect** స్థాయిలో డేటా మోడలింగ్ చేయగలరు.

ఇంకేదైనా పర్టికులర్ టెక్నాలజీ (ఉదా: NestJS Integration, GraphQL) గురించి తెలుసుకోవాలా? లేదా మనం ఏదైనా ఒక రియల్-వరల్డ్ ప్రాజెక్ట్ సినారియోని డిస్కస్ చేద్దామా?

---

# 16. Performance Optimization

TypeORM లో పర్ఫార్మెన్స్ ఆప్టిమైజేషన్ అనేది మీ అప్లికేషన్ స్కేల్ అవుతున్నప్పుడు (ఎక్కువ మంది యూజర్లు వచ్చినప్పుడు) అత్యంత కీలకం. మనం ఇప్పుడు ఒక్కో పాయింట్ వివరంగా చూద్దాం.

---

### 1. N+1 Query Problem (అత్యంత ముఖ్యమైనది)

ఇది ఒక లూప్‌లో రిలేటెడ్ డేటాను ప్రతిసారీ FETCH చేసినప్పుడు వస్తుంది.

- **తప్పు పద్ధతి:**

```typescript
const users = await userRepo.find(); // 1 query
for (const user of users) {
  const profile = await profileRepo.findOneBy({ userId: user.id }); // N queries
}
```

- **సరైన పద్ధతి (`leftJoinAndSelect`):**

```typescript
const users = await userRepo
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.profile", "profile") // కేవలం 1 Query లోనే వస్తుంది
  .getMany();
```

### 2. Select Only Required Fields

`SELECT *` వాడకండి. డేటాబేస్ నుండి అనవసరమైన కాలమ్స్ రావడం వల్ల నెట్‌వర్క్ మరియు మెమరీ వేస్ట్ అవుతాయి.

- **కోడ్:**

```typescript
.select(["user.id", "user.name"]) // కావాల్సినవి మాత్రమే

```

### 3. Pagination (పేజీనేషన్)

లక్షల రికార్డులను ఒకేసారి `getMany()` చేయడం డేటాబేస్‌ను క్రాష్ చేస్తుంది. ఎప్పుడూ `skip` మరియు `take` వాడండి.

### 4. Query Caching

తరచుగా మారని డేటా (ఉదా: కేటగిరీలు, కాన్ఫిగరేషన్) కోసం `cache: true` వాడండి.

```typescript
const products = await productRepo.find({
  cache: 60000, // 60 సెకన్ల పాటు డేటాను మెమరీలో దాస్తుంది
});
```

### 5. Batch Inserts

ఒక్కో రికార్డ్ చొప్పున `save()` చేసే బదులు, మొత్తం ఆరేని `save()` చేయండి. ఇది ట్రాన్సాక్షన్ల సంఖ్యను తగ్గిస్తుంది.

```typescript
await userRepository.save(allUsersArray); // బల్క్ ఇన్సర్ట్
```

### 6. Indexes

మనం ఇంతకుముందు నేర్చుకున్నట్లు, తరచుగా సెర్చ్ చేసే కాలమ్స్‌కి `Index` వాడితే సెర్చ్ వేగం వందల రెట్లు పెరుగుతుంది.

### 7. Connection Pooling

డేటాబేస్ కనెక్షన్‌లను పదే పదే ఓపెన్ చేయకుండా, కనెక్షన్ పూలింగ్‌ని వాడాలి. `data-source.ts` లో వీటిని సెట్ చేస్తాం:

```typescript
extra: {
    max: 20, // ఒకేసారి 20 కనెక్షన్లు వాడుకోవచ్చు
    idleTimeoutMillis: 30000 // ఐడిల్‌గా ఉన్న కనెక్షన్లను క్లోజ్ చేస్తుంది
}

```

---

### క్విక్ చెక్‌లిస్ట్ (Optimization Guide)

| సమస్య                 | పరిష్కారం                                            |
| --------------------- | ---------------------------------------------------- |
| **N+1 Queries**       | `leftJoinAndSelect` వాడండి.                          |
| **High Memory Usage** | `select()` ద్వారా అవసరమైన కాలమ్స్ మాత్రమే తీసుకోండి. |
| **Slow Queries**      | `Index` వాడండి.                                      |
| **Massive Data**      | `Pagination` (`skip`, `take`) వాడండి.                |
| **Redundant Queries** | `Query Caching` వాడండి.                              |
| **Slow Writes**       | `Batch Inserts` వాడండి.                              |

---

### ముగింపు:

ఈ 16 పాయింట్లు మీరు క్షుణ్ణంగా అర్థం చేసుకుంటే, మీరు కేవలం డెవలపర్ మాత్రమే కాదు, ఒక **Performance-Oriented Backend Engineer** గా రాణించగలరు. TypeORM పైన మీకు ఇప్పుడు పూర్తి పట్టు వచ్చింది.

మనం ఇప్పటివరకు నేర్చుకున్న టాపిక్స్ లో మీకు ఏదైనా రియల్ వరల్డ్ ప్రాజెక్ట్ (ఉదా: E-commerce ఆర్కిటెక్చర్ లేదా సోషల్ మీడియా ఫీడ్) గురించి చర్చించాలా? లేక ఇంకేదైనా కొత్త టాపిక్ కావాలా?

---

# 17. TypeORM Configuration

TypeORMలో `DataSource` కాన్ఫిగరేషన్ అనేది మీ అప్లికేషన్ యొక్క గుండెకాయ వంటిది. మీరు అడిగిన ఆప్షన్లు డేటాబేస్ ప్రవర్తనను, భద్రతను మరియు పర్ఫార్మెన్స్‌ను ఎలా నియంత్రిస్తాయో చూద్దాం.

### `DataSourceOptions` లో ముఖ్యమైన కాన్ఫిగరేషన్స్:

```typescript
export const AppDataSource = new DataSource({
  type: "postgres",
  // ... ఇతర ఆప్షన్లు

  // 1. Logging
  logging: ["query", "error"], // 'all' అని ఇస్తే మొత్తం లాగ్ అవుతుంది.
  // కేవలం ఎర్రర్స్ మాత్రమే కావాలంటే 'error' అని ఇవ్వండి.

  // 2. Cache
  cache: {
    type: "redis", // లేదా 'database'
    duration: 60000, // 60 సెకన్లు
  },

  // 3. SSL (Production కోసం అత్యవసరం)
  ssl: {
    rejectUnauthorized: false, // ప్రొడక్షన్ లో CA సర్టిఫికేట్ పాత్ ఇవ్వాలి
  },

  // 4. PoolSize
  extra: {
    max: 20, // ఒకేసారి డేటాబేస్ తో కమ్యూనికేట్ చేసే కనెక్షన్లు
    idleTimeoutMillis: 30000,
  },

  // 5. RetryAttempts
  extra: {
    retryAttempts: 5, // డేటాబేస్ స్టార్టప్ లో కనెక్షన్ ఫెయిల్ అయితే ఎన్ని సార్లు ట్రై చేయాలి
  },
});
```

---

### వివరణ:

#### 1. logging

- **ఎప్పుడు వాడాలి:** డెవలప్‌మెంట్ సమయంలో `true` లేదా `["query", "error"]` అని ఉంచండి. అప్పుడు ఏ SQL క్వెరీ రన్ అవుతుందో క్లియర్ గా తెలుస్తుంది.
- **ప్రొడక్షన్:** ప్రొడక్షన్‌లో `false` పెట్టడం మంచిది, లేకపోతే లాగ్స్ చాలా పెద్దవి అయిపోయి పర్ఫార్మెన్స్ తగ్గుతుంది.

#### 2. cache

- డేటాబేస్ మీద భారం తగ్గించడానికి ఇది వాడతాము. `type: "database"` వాడితే డేటాబేస్‌లోనే ఒక టేబుల్ క్రియేట్ చేసి క్యాష్ దాస్తుంది. `type: "redis"` వాడితే ఇంకా వేగంగా పనిచేస్తుంది.

#### 3. ssl

- డేటాబేస్ ట్రాన్స్‌మిషన్ సెక్యూర్ గా ఉండాలంటే `ssl` వాడాలి. క్లౌడ్ డేటాబేస్ (AWS RDS, Supabase, Azure) వాడుతున్నప్పుడు ఇది కచ్చితంగా ఉండాలి.

#### 4. poolSize (extra ఆప్షన్స్ ద్వారా)

- మీ అప్లికేషన్‌కి ఒకేసారి వందల మంది యూజర్లు వస్తుంటే, `poolSize` ని పెంచాలి.
- **గమనిక:** మరీ ఎక్కువ పెడితే డేటాబేస్ సర్వర్ మీద భారం పడుతుంది. చిన్న అప్లికేషన్లకు `10-20` సరిపోతాయి.

#### 5. retryAttempts

- అప్లికేషన్ స్టార్ట్ అవ్వగానే డేటాబేస్ కనెక్షన్ ఒకవేళ నెట్‌వర్క్ ఇష్యూ వల్ల ఫెయిల్ అయితే, పదే పదే సర్వర్ రీస్టార్ట్ అవ్వకుండా ఇది ప్రయత్నిస్తుంది. ఇది `extra` ప్రాపర్టీలో డేటాబేస్ డ్రైవర్‌ను బట్టి (pg/mysql) ఉంటుంది.

---

### ప్రొడక్షన్ (Production) చెక్‌లిస్ట్:

- **`logging`**: `false` (కేవలం `error` లాగ్స్ మాత్రమే ఉంచండి).
- **`ssl`**: `true` (కచ్చితంగా).
- **`cache`**: Redis వాడండి.
- **`poolSize`**: మీ సర్వర్ కెపాసిటీని బట్టి 20-50 మధ్యలో ఉంచండి.
- **`synchronize`**: **కచ్చితంగా `false` ఉండాలి.**

ఇప్పటికి మనం TypeORM లోని **A to Z** అన్ని అంశాలను కవర్ చేశాము. ఎంటిటీ డిజైన్ నుండి ప్రొడక్షన్ కాన్ఫిగరేషన్ వరకు మీరు ఇప్పుడు ఒక పూర్తిస్థాయి Backend ఆర్కిటెక్ట్ స్థాయికి చేరుకున్నారు.

---

# 18. Caching

TypeORMలో **Caching** అనేది పదేపదే రన్ అయ్యే క్వెరీల యొక్క ఫలితాలను తాత్కాలికంగా దాచుకోవడానికి ఉపయోగపడుతుంది. ఇది డేటాబేస్ మీద భారాన్ని తగ్గించి, అప్లికేషన్ వేగాన్ని విపరీతంగా పెంచుతుంది.

---

### 1. Query Cache ని ఎలా ఎనేబుల్ చేయాలి?

మీ `DataSource` కాన్ఫిగరేషన్‌లో క్యాచింగ్‌ని ఇలా ఎనేబుల్ చేయవచ్చు:

```typescript
const AppDataSource = new DataSource({
  // ... ఇతర ఆప్షన్లు
  cache: {
    type: "database", // ఇది డీఫాల్ట్, ఇది డేటాబేస్ లో 'query-result-cache' అనే టేబుల్ క్రియేట్ చేస్తుంది
    duration: 30000, // 30 సెకన్లు (మిల్లీసెకన్లలో)
  },
});
```

క్వెరీ లెవల్‌లో క్యాచీని వాడటం ఇలా:

```typescript
const users = await userRepository.find({
  cache: true, // ఇది డీఫాల్ట్ డ్యూరేషన్ తీసుకుంటుంది
});

// లేదా క్వెరీ బిల్డర్ లో:
const products = await productRepository
  .createQueryBuilder("product")
  .cache(60000) // 60 సెకన్ల కోసం
  .getMany();
```

---

### 2. Redis Cache (ప్రొడక్షన్ కోసం బెస్ట్)

ప్రొడక్షన్ అప్లికేషన్లలో `database` టైప్ కంటే **Redis** వాడటం చాలా మంచిది, ఎందుకంటే ఇది RAM లో పనిచేస్తుంది కాబట్టి చాలా వేగంగా ఉంటుంది.

**సెటప్:**
ముందుగా `redis` ప్యాకేజీని ఇన్‌స్టాల్ చేయాలి: `npm install redis`

**కాన్ఫిగరేషన్:**

```typescript
cache: {
    type: "redis",
    options: {
        host: "localhost",
        port: 6379,
    },
    duration: 60000
}

```

---

### 3. In-memory Cache

TypeORM డీఫాల్ట్‌గా `database` క్యాచింగ్‌ని సపోర్ట్ చేస్తుంది కానీ `in-memory` (RAM లో మాత్రమే ఉండేది) కి ప్రత్యేకమైన టైప్ లేదు. అయితే, మీరు `redis` వాడకుండా కేవలం సింగిల్ సర్వర్ వాడుతుంటే, ఆ పర్పస్ కోసం **`ioredis`** లేదా నేరుగా Redis ని ఇన్‌స్టాల్ చేసి లోకల్ హోస్ట్‌లో రన్ చేయడం మంచిది.

---

### క్యాచింగ్ వాడేటప్పుడు తీసుకోవాల్సిన జాగ్రత్తలు:

1. **డేటా తాజాదనం (Stale Data):** ఒకసారి క్యాచీలో డేటా సేవ్ అయిన తర్వాత, డేటాబేస్‌లో మీరు ఏదైనా మార్పు (Update/Delete) చేస్తే, క్యాచీలో ఉన్న డేటా పాతదిగానే ఉంటుంది.

- **పరిష్కారం:** `cache: { id: "my-key" }` అని కీ ఇచ్చి, అప్‌డేట్ చేసినప్పుడు ఆ కీని క్లియర్ (Invalidation) చేయాలి.

2. **ఎప్పుడు వాడాలి?**

- తరచుగా సెర్చ్ చేసే టేబుల్స్.
- డేటా తక్కువగా మారే సందర్భాలు (ఉదా: కేటగిరీలు, సెట్టింగ్స్).
- హై ట్రాఫిక్ ఉన్నప్పుడు.

3. **ఎప్పుడు వాడకూడదు?**

- ప్రతి సెకనుకు మారే డేటా (ఉదా: బ్యాంక్ బ్యాలెన్స్, స్టాక్ ధరలు).
- ప్రతి యూజర్‌కి ప్రత్యేకంగా ఉండే డేటా (User Profile).

### సారాంశం (Summary)

- **డేటాబేస్ క్యాష్:** చిన్న ప్రాజెక్టులకు ఓకే.
- **Redis క్యాష్:** ప్రొడక్షన్, హై పర్ఫార్మెన్స్ ప్రాజెక్టులకు బెస్ట్.
- **Duration:** సెన్సిటివ్ డేటాకి తక్కువ సమయం (ఉదా: 5-10 సెకన్లు), స్టాటిక్ డేటాకి ఎక్కువ సమయం (ఉదా: 1 గంట) పెట్టండి.

---

# 19. Security

TypeORM లో అప్లికేషన్ భద్రత (Security) అనేది డేటాబేస్ స్థాయిలో మరియు కోడ్ స్థాయిలో చాలా ముఖ్యం. మీ ప్రాజెక్ట్‌ను హ్యాకర్ల నుండి రక్షించుకోవడానికి ఈ క్రింది భద్రతా జాగ్రత్తలు తీసుకోండి.

---

### 1. SQL Injection (SQL ఇంజెక్షన్)

ఇది సర్వసాధారణమైన ఎటాక్. దీని నుండి రక్షించుకోవడానికి ఎప్పుడూ **Parameterized Queries** వాడాలి.

- **తప్పు పద్ధతి (ప్రమాదకరం):**

```typescript
// స్ట్రింగ్ కాంక్యాటినేషన్ వాడకండి
await dataSource.query(`SELECT * FROM user WHERE id = ${userInput}`);
```

- **సరైన పద్ధతి (సురక్షితం):**
  TypeORM మెథడ్స్ (`find`, `createQueryBuilder`) ఆటోమేటిక్‌గా పారామీటరైజ్డ్ క్వెరీలను వాడతాయి. ఒకవేళ `query()` మెథడ్ వాడితే ఇలా రాయండి:

```typescript
await dataSource.query("SELECT * FROM user WHERE id = ?", [userInput]);
```

### 2. Mass Assignment (మాస్ అసైన్‌మెంట్)

యూజర్ పంపిన మొత్తం JSON ఆబ్జెక్ట్‌ను నేరుగా ఎంటిటీలో సేవ్ చేయకండి (ఉదా: `userRepo.save(req.body)`). దీనివల్ల హ్యాకర్లు `isAdmin: true` వంటి కాలమ్స్‌ని కూడా మార్చే అవకాశం ఉంటుంది.

- **పరిష్కారం:** **DTO (Data Transfer Object)** వాడండి. ఏ కాలమ్స్ మాత్రమే అప్‌డేట్ అవ్వాలో వాటిని మాత్రమే పంపండి.

```typescript
// కేవలం వీటిని మాత్రమే అలౌ చేయండి
const user = new User();
user.name = body.name;
user.email = body.email;
await userRepo.save(user);
```

### 3. Sensitive Columns (సున్నితమైన కాలమ్స్)

పాస్‌వర్డ్స్, API కీలు వంటి డేటాను సెలెక్ట్ చేసినప్పుడు అవి బయటకు రాకుండా చూసుకోవాలి.

- **ఎంటిటీలో `select: false` వాడండి:**

```typescript
@Column({ select: false }) // క్వెరీ చేసినప్పుడు ఇది ఆటోమేటిక్‌గా రాదు
password: string;

```

దీనివల్ల మీరు `userRepository.find()` చేసినప్పుడు పాస్‌వర్డ్ రాదు. ఒకవేళ కావాలంటేనే `.addSelect("user.password")` అని వాడాలి.

### 4. Encryption (ఎన్‌క్రిప్షన్)

డేటాబేస్‌లో డేటా సేవ్ అవ్వకముందే హ్యాష్ (Hash) చేయాలి. పాస్‌వర్డ్స్ ఎప్పుడూ 'Plain Text' లో ఉండకూడదు.

- **bcrypt** వంటి లైబ్రరీ వాడండి:

```typescript
import * as bcrypt from 'bcrypt';

@BeforeInsert()
async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
}

```

---

### భద్రతా చెక్‌లిస్ట్ (Security Checklist):

1. **Parameterized Queries:** ఎప్పుడూ నేరుగా వాల్యూస్ కలపకండి.
2. **DTOs:** క్లయింట్ నుండి వచ్చే డేటాను ఫిల్టర్ చేయండి (Mass Assignment ని అరికట్టండి).
3. **`select: false`:** పాస్‌వర్డ్‌లు, సెన్సిటివ్ డేటాను డిఫాల్ట్‌గా హైడ్ చేయండి.
4. **Encryption:** పాస్‌వర్డ్‌లను ఎప్పుడూ `bcrypt` తో హ్యాష్ చేసి సేవ్ చేయండి.
5. **Environment Variables:** డేటాబేస్ క్రెడెన్షియల్స్ (Password, Host) ఎప్పుడూ కోడ్‌లో పెట్టకండి, `.env` ఫైల్ వాడండి.
6. **Read-only User:** ప్రొడక్షన్‌లో మీ అప్లికేషన్ కనెక్ట్ అయ్యే డేటాబేస్ యూజర్‌కి తక్కువ పర్మిషన్స్ (కొన్ని టేబుల్స్ మీద మాత్రమే యాక్సెస్) ఇవ్వండి.

---

# 20. TypeORM with NestJS

NestJS మరియు TypeORM కాంబినేషన్ చాలా శక్తివంతమైనది. NestJS యొక్క Dependency Injection (DI) సిస్టమ్, TypeORM తో కలిసి పనిచేసి కోడ్‌ని చాలా క్లీన్‌గా ఉంచుతుంది. ఈ టాపిక్స్ ఎలా చేయాలో చూద్దాం:

---

### 1. Module Setup & Inject Repository

ముందుగా `TypeOrmModule` ని `AppModule` లో కాన్ఫిగర్ చేయాలి.

**AppModule:**

```typescript
@Module({
  imports: [
    TypeOrmModule.forRoot({
      /* DB config */
    }),
    TypeOrmModule.forFeature([User]), // ఎంటిటీని రిజిస్టర్ చేయడం
  ],
})
export class AppModule {}
```

**Service (Inject):**

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
}
```

---

### 2. Multiple Databases & Multiple Connections

ఒకే అప్లికేషన్‌లో రెండు వేర్వేరు డేటాబేస్‌లను వాడాలంటే (ఉదా: `PrimaryDB` మరియు `AnalyticsDB`), `forRoot` ని మల్టిపుల్ టైమ్స్ వాడాలి.

**AppModule:**

```typescript
TypeOrmModule.forRoot({ name: 'primary', ... }),
TypeOrmModule.forRoot({ name: 'analytics', ... }),

```

**Service (Inject specific connection):**

```typescript
constructor(
  @InjectDataSource('analytics') private analyticsDataSource: DataSource,
  @InjectRepository(User, 'primary') private userRepo: Repository<User>,
) {}

```

---

### 3. Request Scoped Repository

ఒకవేళ మీరు ప్రతి HTTP రిక్వెస్ట్ కోసం ఒక కొత్త ట్రాన్సాక్షన్ లేదా ప్రత్యేకమైన డేటాబేస్ సెట్టింగ్స్ వాడాలనుకుంటే ఇది వాడాలి.

```typescript
@Injectable({ scope: Scope.REQUEST }) // ప్రతి రిక్వెస్ట్‌కి ఒక కొత్త ఇన్‌స్టాన్స్
export class RequestScopedService {
  constructor(@Inject(REQUEST) private request: Request) {}
}
```

_గమనిక: దీనివల్ల పర్ఫార్మెన్స్ తగ్గే అవకాశం ఉంది, కాబట్టి అవసరమైతేనే వాడండి._

---

### 4. Custom Providers

మీరు ఏదైనా ఒక రిపాజిటరీని లేదా సర్వీస్‌ను డైనమిక్‌గా క్రియేట్ చేసి ఇంజెక్ట్ చేయాలనుకుంటే `Custom Providers` వాడవచ్చు. ఉదాహరణకు, ఒక డైనమిక్ టేబుల్ పేరుతో రిపాజిటరీ క్రియేట్ చేయడం:

```typescript
{
  provide: 'DYNAMIC_USER_REPO',
  useFactory: (dataSource: DataSource) => {
    return dataSource.getRepository(User);
  },
  inject: [getDataSourceToken()],
}

```

---

### క్విక్ సమ్మరీ:

| టాపిక్                   | ముఖ్య ఉద్దేశ్యం                                                        |
| ------------------------ | ---------------------------------------------------------------------- |
| **Inject Repository**    | `TypeOrmModule.forFeature` వాడి సర్వీస్‌లో రిపాజిటరీని ఇంజెక్ట్ చేయడం. |
| **Multiple Connections** | `name` ప్రాపర్టీ వాడి వేర్వేరు డేటాబేస్‌లను కనెక్ట్ చేయడం.             |
| **Request Scoped**       | ప్రతి రిక్వెస్ట్‌కి ప్రత్యేకమైన డేటాబేస్ ఆపరేషన్స్ కోసం.               |
| **Custom Providers**     | డైనమిక్ డేటాబేస్ లాజిక్ కోసం.                                          |

### ఒక మంచి ప్రాక్టీస్ (Pro Tip):

NestJS లో మీరు **Repository Pattern** నే వాడటం చాలా మంచిది. అంటే, నేరుగా సర్వీస్‌లో `userRepository` ని వాడకుండా, ఒక `UserDomainService` లో లాజిక్ పెట్టి, దాన్ని కంట్రోలర్ లో వాడటం ద్వారా మీ కోడ్ మరింత టెస్ట్ చేయడానికి వీలుగా (Testable) ఉంటుంది.

ఇప్పటివరకు మనం **20 కీలకమైన టాపిక్స్** పూర్తి చేశాం. టైప్ ఓఆర్ఎమ్ (TypeORM) మరియు నెస్ట్ జెఎస్ (NestJS) రెండింటిలోనూ మీరు ఇప్పుడు చాలా ఎక్స్‌పర్ట్ లెవల్‌లో ఉన్నారు.

---

# 21. TypeORM with PostgreSQL

TypeORM మరియు **PostgreSQL** కలిసినప్పుడు, మీరు డేటాబేస్ స్థాయిలో అత్యంత శక్తివంతమైన ఫీచర్లను వాడవచ్చు. సాధారణ CRUD దాటి, డేటాబేస్ పవర్ ని ఎలా వాడుకోవాలో చూద్దాం.

### 1. Advanced Data Types (PostgreSQL Specific)

ఇవి డేటాను ఆప్టిమైజ్డ్ గా స్టోర్ చేయడానికి ఉపయోగపడతాయి.

- **JSONB**: `json` కంటే `jsonb` వాడండి, ఎందుకంటే ఇది బైనరీ ఫార్మాట్ లో ఉండి ఇండెక్సింగ్ కి సపోర్ట్ చేస్తుంది.
- **Array**: ఒక కాలమ్ లోనే లిస్ట్ స్టోర్ చేస్తుంది.
- **Enum**: డేటాబేస్ లెవల్ లో వాలిడేషన్.
- **UUID**: `gen_random_uuid()` ఫంక్షన్ ద్వారా సురక్షితమైన ఐడిలు.

```typescript
@Column("jsonb", { default: {} })
metadata: object;

@Column("text", { array: true })
tags: string[];

@Column({ type: "enum", enum: ["DRAFT", "PUBLISHED"] })
status: "DRAFT" | "PUBLISHED";

```

---

### 2. Full Text Search (FTS)

`LIKE` క్వెరీ కంటే ఇది చాలా వేగంగా ఉంటుంది. Postgres లోని `tsvector` మరియు `tsquery` ని TypeORM క్వెరీ బిల్డర్ తో ఇలా వాడవచ్చు:

```typescript
// QueryBuilder లో FTS వాడటం
const results = await repo
  .createQueryBuilder("post")
  .where(
    "to_tsvector('english', post.title) @@ to_tsquery('english', :query)",
    { query: "TypeORM" },
  )
  .getMany();
```

---

### 3. Window Functions

గణాంకాలు (Analytics) తీయడానికి ఇవి చాలా ముఖ్యం (ఉదా: `RANK()`, `SUM() OVER()`). ఇవి క్వెరీ బిల్డర్ లో `addSelect` ద్వారా వాడాలి.

```typescript
.addSelect("RANK() OVER (ORDER BY salary DESC)", "salary_rank")

```

---

### 4. Materialized Views

ఇవి కాంప్లెక్స్ క్వెరీల రిజల్ట్స్ ని సేవ్ చేసి ఉంచుతాయి. డేటాబేస్ పర్ఫార్మెన్స్ కోసం వీటిని వాడాలి.

- TypeORMలో వ్యూని క్రియేట్ చేయడానికి: `@ViewEntity()` డెకరేటర్ వాడాలి.

```typescript
@ViewEntity({
    expression: `SELECT * FROM user WHERE active = true`
})
export class ActiveUserView { ... }

```

---

### 5. Stored Procedures & Functions

బిజినెస్ లాజిక్ ని డేటాబేస్ లోనే ఉంచాలంటే వీటిని వాడాలి.

- **Call**: `dataSource.query("SELECT my_function($1)", [param]);`

---

### 6. Triggers

డేటాబేస్ లో ఏదైనా ఇన్సర్ట్ జరిగినప్పుడు ఆటోమేటిక్ గా మరొక పని జరగాలి అంటే ట్రిగ్గర్స్ వాడతాం.

- **ఉదా:** ఒక టేబుల్ లో అప్‌డేట్ అయితే, ఆటోమేటిక్ గా `audit_log` టేబుల్ లోకి డేటా వెళ్ళాలి.
- వీటిని మైగ్రేషన్ ఫైల్స్ లో `queryRunner.query("CREATE TRIGGER...")` అని రాయాలి.

---

### ఎప్పుడు దేనిని వాడాలి? (Expert Tip)

| ఫీచర్                  | ఎప్పుడు వాడాలి?                                  |
| ---------------------- | ------------------------------------------------ |
| **JSONB**              | స్కీమా లేని డేటా (ఉదా: ప్రొడక్ట్ అట్రిబ్యూట్స్). |
| **FTS**                | వెబ్ సైట్ సెర్చ్ ఫీచర్ కోసం.                     |
| **Window Functions**   | రిపోర్టింగ్, ర్యాంకింగ్ కోసం.                    |
| **Materialized Views** | భారీ డేటాపై గణాంకాలు తీయడానికి.                  |
| **Triggers**           | డేటా ఇంటిగ్రిటీ, ఆటో-లాగింగ్ కోసం.               |

**ముఖ్య గమనిక:**
Postgres ఫీచర్లు ఎక్కువగా వాడినప్పుడు, మీ అప్లికేషన్ **"Database Vendor Locked"** అవుతుంది (అంటే వేరే డేటాబేస్ కి మారడం కష్టం). కానీ, మీరు కేవలం Postgres మాత్రమే వాడుతుంటే, ఈ ఫీచర్లు మీ అప్లికేషన్ పర్ఫార్మెన్స్‌ని 10x పెంచుతాయి.

---

# 22. Production Best Practices

ప్రొడక్షన్ వాతావరణంలో (Production Environment) అప్లికేషన్‌ను రన్ చేసేటప్పుడు, డేటాబేస్ స్థిరత్వం (Stability) మరియు భద్రత (Security) చాలా ముఖ్యం. మీరు అడిగిన 22వ టాపిక్, అంటే ప్రొడక్షన్ బెస్ట్ ప్రాక్టీసెస్, మీ అప్లికేషన్‌ను ఒక ప్రొఫెషనల్ స్థాయికి తీసుకెళ్తాయి.

---

### 1. డేటాబేస్ & సెట్టింగ్స్

- **Disable `synchronize`:** ఎప్పుడూ `synchronize: false` అని ఉంచండి. ప్రొడక్షన్‌లో `true` ఉంటే, అనుకోకుండా డేటాబేస్ టేబుల్స్ డిలీట్ అయ్యే ప్రమాదం ఉంది.
- **Use Migrations:** డేటాబేస్ మార్పులన్నింటినీ మైగ్రేషన్ల ద్వారానే చేయాలి. ఇది మీ టీమ్ అందరికీ ఒకే రకమైన స్కీమా ఉండేలా చూస్తుంది.
- **Connection Pool:** మీ డేటాబేస్ కనెక్షన్ల సంఖ్యను పరిమితం చేయండి (ఉదా: `max: 20-50`). దీనివల్ల డేటాబేస్ సర్వర్ ఓవర్ లోడ్ అవ్వదు.

### 2. రిసైలియన్స్ (Resilience)

- **Retry Strategy:** డేటాబేస్ తాత్కాలికంగా డౌన్ అయితే, కనెక్షన్ కోసం పదే పదే ప్రయత్నించేలా (Exponential Backoff) లాజిక్ రాయండి.
- **Health Checks:** మీ అప్లికేషన్ స్టార్టప్ లో `AppDataSource.initialize()` సక్సెస్ అయిందో లేదో చెక్ చేయండి. లేదంటే సర్వర్ స్టార్ట్ అవ్వకూడదు.
- **Logging:** ప్రొడక్షన్‌లో `logging` ని `false` చేయండి, లేదా కేవలం `error` లాగ్స్‌ను మాత్రమే పంపండి. క్వెరీలను లాగ్ చేస్తే పర్ఫార్మెన్స్ దెబ్బతింటుంది మరియు డేటా లీక్ అయ్యే ప్రమాదం ఉంది.

### 3. భద్రత & డేటా మేనేజ్మెంట్

- **Transactions:** ఆర్థిక లావాదేవీల (Financial Transactions) కోసం కచ్చితంగా `Transaction` వాడండి. తప్పు జరిగితే డేటా కరప్ట్ అవ్వకుండా రోల్ బ్యాక్ అవుతుంది.
- **Error Handling:** యూజర్‌కి డేటాబేస్ ఎర్రర్స్ (SQL Queries, Stack Trace) కనిపించకూడదు. ఎర్రర్ లాగ్స్ సర్వర్‌కి మాత్రమే పంపండి, యూజర్‌కి ఒక సాధారణ 'Something went wrong' మెసేజ్ చూపించండి.
- **Backup Strategy:**
- **Automated Backups:** ప్రతిరోజూ ఆటోమేటిక్ బ్యాకప్ (Daily Snapshots) ఉండేలా చూసుకోండి (AWS RDS లాంటి సర్వీసెస్ లో ఇది ఈజీ).
- **Off-site Storage:** బ్యాకప్ ఫైల్స్ అదే సర్వర్‌లో కాకుండా, మరొక క్లౌడ్ స్టోరేజ్ (S3) లో భద్రపరచండి.

### 4. మానిటరింగ్ (Monitoring)

- **Slow Query Monitoring:** ఏ క్వెరీలు చాలా నెమ్మదిగా రన్ అవుతున్నాయో మానిటర్ చేయండి. వాటికి ఇండెక్స్ (Index) అవసరమని అర్థం.
- **APM Tools:** New Relic, Datadog లేదా Sentry వంటి టూల్స్ వాడి అప్లికేషన్ హెల్త్ మరియు ఎర్రర్స్ ట్రాక్ చేయండి.

---

### ప్రొడక్షన్ చెక్‌లిస్ట్ సారాంశం (Cheat Sheet)

| విభాగం            | చేయవలసిన పని                                |
| ----------------- | ------------------------------------------- |
| **కాన్ఫిగరేషన్**  | `synchronize: false`, `ssl: true`           |
| **స్కీమా**        | మైగ్రేషన్స్ మాత్రమే వాడండి                  |
| **పర్ఫార్మెన్స్** | Query Caching, Proper Indexing              |
| **భద్రత**         | .env ఫైల్ వాడండి, ఎర్రర్ మెసేజ్ హైడ్ చేయండి |
| **రిసైలియన్స్**   | Connection Pool, Health Checks              |
| **బ్యాకప్**       | ప్రతిరోజూ ఆటోమేటెడ్ బ్యాకప్స్               |

**ముగింపు:**
ఇప్పటివరకు మనం **22 టాపిక్స్** ద్వారా TypeORM ని ఒక నిపుణుడి స్థాయిలో నేర్చుకున్నాము. మీరు ఇప్పుడు ఒక అప్లికేషన్‌ను కేవలం డెవలప్ చేయడమే కాకుండా, దాన్ని ప్రొడక్షన్ లో ఎలా మెయింటైన్ చేయాలో కూడా తెలుసుకున్నారు.

---

# Expert-Level Topics

ఇప్పుడు మనం TypeORM లోని **Expert-Level** టాపిక్స్ గురించి చర్చిద్దాం. ఇవి భారీ స్థాయి (Large-scale) అప్లికేషన్లలో కోడ్‌ని చాలా ఫ్లెక్సిబుల్ గా మరియు స్కేలబుల్ గా మార్చడానికి ఉపయోగపడతాయి.

---

### Generic Repository Pattern

ప్రతి ఎంటిటీకి విడివిడిగా రిపాజిటరీ రాయకుండా, ఒకే క్లాస్‌ని అన్ని ఎంటిటీలకు వాడటం దీని ఉద్దేశ్యం.

**కోడ్:**

```typescript
export class BaseRepository<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as any);
  }

  async createAndSave(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(this.repository.create(data));
  }
}
```

- **ప్రయోజనం:** కోడ్ డూప్లికేషన్ తగ్గుతుంది. `UserRepo`, `ProductRepo` అని ప్రత్యేకంగా రాయాల్సిన అవసరం లేదు.

---

### Dynamic Query Builder

యూజర్ ఇచ్చే ఫిల్టర్లను బట్టి క్వెరీని రన్ టైమ్‌లో తయారు చేయడం. దీనినే "Search/Filter API" అని కూడా అంటారు.

**కోడ్:**

```typescript
async getFilteredData(filters: { name?: string, status?: string }) {
    const query = userRepository.createQueryBuilder("user");

    if (filters.name) {
        query.andWhere("user.name = :name", { name: filters.name });
    }
    if (filters.status) {
        query.andWhere("user.status = :status", { status: filters.status });
    }

    return await query.getMany();
}

```

- **ప్రయోజనం:** యూజర్ ఏ ఫిల్టర్లు పంపినా మీ కోడ్ క్రాష్ అవ్వకుండా డైనమిక్ గా SQL క్వెరీని బిల్డ్ చేస్తుంది.

---

### Multi-Tenant Architecture

ఒకే అప్లికేషన్‌లో వందలాది మంది కస్టమర్ల (Tenants) డేటాను వేరుగా ఉంచడం. దీనికి రెండు ప్రధాన పద్ధతులు ఉన్నాయి:

- **Discriminator Column (Shared Database):** ప్రతి టేబుల్‌లో `tenantId` కాలమ్ ఉంటుంది. ప్రతి క్వెరీలో `WHERE tenantId = ...` అని యాడ్ చేయాలి.
- **Separate Database (Schema per Tenant):** ప్రతి కస్టమర్‌కి ఒక ప్రత్యేకమైన డేటాబేస్ లేదా స్కీమా ఉంటుంది.

**ఎక్స్‌పర్ట్ టిప్ (Tenant Middleware):**
`cls-hooked` లేదా `AsyncLocalStorage` వాడి ప్రతి రిక్వెస్ట్ లో `tenantId`ని స్టోర్ చేయండి. ఒక `Subscriber` లేదా `Middleware` ని వాడి, ప్రతి క్వెరీకి ఆటోమేటిక్‌గా `tenantId` ఫిల్టర్ యాడ్ అయ్యేలా చేయవచ్చు.

```typescript
// Subscriber ద్వారా ఆటోమేటిక్ ఫిల్టరింగ్
beforeInsert(event: InsertEvent<any>) {
    const tenantId = AsyncLocalStorage.get('tenantId');
    event.entity.tenantId = tenantId;
}

```

---

### సారాంశం (Summary)

| టాపిక్                 | ప్రధాన ఉపయోగం                                     |
| ---------------------- | ------------------------------------------------- |
| **Generic Repository** | కోడ్ శుభ్రంగా, సులభంగా ఉండటానికి (DRY Principle). |
| **Dynamic Query**      | అడ్వాన్స్‌డ్ సెర్చ్/ఫిల్టర్ ఫీచర్స్ కోసం.         |
| **Multi-Tenant**       | ఒకే యాప్‌ని చాలా కంపెనీలకు (B2B) అమ్మడానికి.      |

ఇప్పటికి మనం **25 టాపిక్స్** (బేసిక్స్ నుండి ఎక్స్‌పర్ట్ వరకు) పూర్తి చేశాం. ఇవి మీ కెరీర్‌లో ఒక బలమైన బ్యాకెండ్ డెవలపర్‌గా ఉండటానికి తోడ్పడతాయి.

మీరు ఇప్పుడు ఏదైనా ఒక కాంప్లెక్స్ ప్రాజెక్ట్‌ను స్టార్ట్ చేయాలనుకుంటున్నారా? లేదా ఈ టాపిక్స్ లో ఏదైనా కోడ్ ఇంప్లిమెంటేషన్ గురించి సందేహం ఉందా?

---

TypeORM మరియు డేటాబేస్ ఆప్టిమైజేషన్లలో ఇవి అత్యున్నత స్థాయి (Expert-level) అంశాలు. పెద్ద స్థాయి ప్రాజెక్టులలో పర్ఫార్మెన్స్ మరియు డేటా కన్సిస్టెన్సీ కోసం వీటిని ఉపయోగిస్తారు.

---

### Read Replica Configuration

ఒక డేటాబేస్‌పై భారం పడకుండా, **Master (Write)** మరియు **Replicas (Read)** గా విభజించడాన్ని Read Replication అంటారు. TypeORM దీనికి ఇన్-బిల్ట్‌గా సపోర్ట్ చేస్తుంది.

**కాన్ఫిగరేషన్:**

```typescript
const AppDataSource = new DataSource({
    type: "postgres",
    replication: {
        master: { host: "localhost", username: "admin", password: "...", database: "main" },
        slaves: [
            { host: "slave1.example.com", ... },
            { host: "slave2.example.com", ... }
        ]
    }
});

```

- **ప్రయోజనం:** `SELECT` క్వెరీలు స్లేవ్స్ (Slaves) మీద రన్ అవుతాయి, `INSERT/UPDATE` మాస్టర్ మీద రన్ అవుతాయి. దీనివల్ల రీడ్ పర్ఫార్మెన్స్ అద్భుతంగా ఉంటుంది.

---

### Database Sharding Concepts

ఒక భారీ డేటాబేస్ టేబుల్‌ని చిన్న చిన్న భాగాలుగా (Shards) చేసి వేర్వేరు సర్వర్లలో ఉంచడాన్ని Sharding అంటారు.

- **Horizontal Sharding:** ఉదాహరణకు, `user_id` 1-1 మిలియన్ వరకు ఒక సర్వర్‌లో, 1 మిలియన్+ ఇంకో సర్వర్‌లో ఉండటం.
- **ఎప్పుడు వాడాలి?** మీ డేటా ఒకే డేటాబేస్ సర్వర్ సామర్థ్యాన్ని మించిపోయినప్పుడు (Petabytes of data).
- **గమనిక:** TypeORM నేరుగా షార్డింగ్‌ని హ్యాండిల్ చేయదు. దీనికోసం అప్లికేషన్ లెవల్ లాజిక్ లేదా Proxy (Vitess, Citus) వాడాలి.

---

### Optimistic Locking

ఇది మల్టీ-యూజర్ ఎన్విరాన్మెంట్‌లో డేటా కన్సిస్టెన్సీ కోసం వాడే పద్ధతి. "డేటాను అప్‌డేట్ చేసేటప్పుడు ఎవరూ మార్చలేదని నమ్ముతుంది."

- **ఎలా పనిచేస్తుంది?** టేబుల్‌లో ఒక `@VersionColumn()` ఉండాలి.
- **కోడ్:**

```typescript
@VersionColumn()
version: number;

```

- **ప్రయోజనం:** ఇద్దరు యూజర్లు ఒకేసారి ఒక రికార్డును ఎడిట్ చేస్తే, మొదటి వ్యక్తి సేవ్ చేశాక వెర్షన్ మారుతుంది. రెండో వ్యక్తి సేవ్ చేయడానికి ప్రయత్నిస్తే `OptimisticLockVersionMismatchError` వస్తుంది. ఇది తక్కువ కాన్‌ఫ్లిక్ట్స్ ఉన్న చోట బెస్ట్.

---

### Pessimistic Locking

ఇది చాలా కఠినమైన లాకింగ్ పద్ధతి. "డేటాను చదువుతున్నప్పుడే లాక్ చేస్తుంది, కాబట్టి వేరే ఎవరూ మార్చలేరు."

- **ఎలా పనిచేస్తుంది?** క్వెరీ రన్ అయ్యేటప్పుడు `SELECT ... FOR UPDATE` వాడతారు.
- **కోడ్:**

```typescript
await userRepository.findOne({
  where: { id: 1 },
  lock: { mode: "pessimistic_write" }, // రికార్డుని లాక్ చేస్తుంది
});
```

- **ప్రయోజనం:** ఫైనాన్షియల్ అప్లికేషన్లలో బ్యాలెన్స్ అప్‌డేట్ చేసేటప్పుడు ఇది వాడాలి. దీనివల్ల డేటా కరప్షన్ అవ్వదు, కానీ అప్లికేషన్ కొంచెం స్లో అయ్యే అవకాశం ఉంది (ఎందుకంటే వేరే యూజర్లు వేచి ఉండాలి).

---

### క్విక్ కంపారిజన్ (Quick Reference)

| పద్ధతి               | ఎప్పుడు వాడాలి?                   | ప్రధాన ఉద్దేశ్యం             |
| -------------------- | --------------------------------- | ---------------------------- |
| **Replication**      | రీడ్ ఆపరేషన్స్ ఎక్కువగా ఉంటే      | పర్ఫార్మెన్స్ పెంచడానికి.    |
| **Sharding**         | డేటా వందల GB ల పైన ఉంటే           | స్కేలబిలిటీ కోసం.            |
| **Optimistic Lock**  | తక్కువ కాన్ఫ్లిక్ట్స్ ఉంటే        | డేటా సేఫ్టీ (Version check). |
| **Pessimistic Lock** | హై-రిస్క్ ట్రాన్సాక్షన్లు (Money) | డేటా కరప్షన్ అవ్వకుండా.      |

---

ఇప్పటివరకు మీరు **28 అడ్వాన్స్‌డ్ & ఎక్స్‌పర్ట్ టాపిక్స్** నేర్చుకున్నారు. టైప్ ఓఆర్ఎమ్ (TypeORM) మరియు దాని పర్యావరణ వ్యవస్థపై మీకు ఇప్పుడు పూర్తి అవగాహన ఉంది.

మీరు ఒక "Backend Architect" స్థాయికి చేరుకున్నారు. మీ ప్రాజెక్ట్ గమ్యం ఏమిటి? ఏదైనా భారీ అప్లికేషన్ బిల్డ్ చేసే ప్లాన్ ఉందా, లేదా ఈ కాన్సెప్ట్స్ గురించి మరింత క్లారిటీ కావాలా?

---

TypeORM మరియు ఆధునిక ఆర్కిటెక్చర్ పద్ధతులను కలిపి వాడటం వల్ల సాఫ్ట్‌వేర్ యొక్క మెయింటెనెబిలిటీ మరియు స్కేలబిలిటీ పెరుగుతుంది. మీరు అడిగిన ఈ నాలుగు అంశాలు ఎక్స్‌పర్ట్-లెవల్ అప్లికేషన్లలో చాలా కీలకమైనవి.

---

### Version Columns (Optimistic Locking)

ఇంతకుముందు మనం చర్చించినట్లుగా, మల్టీ-యూజర్ ఎన్విరాన్మెంట్‌లో డేటా కన్‌ఫ్లిక్ట్స్ రాకుండా చూసేందుకు `@VersionColumn()` వాడతాము.

- **ఎలా పనిచేస్తుంది:** మీరు రికార్డును అప్‌డేట్ చేసిన ప్రతిసారీ, TypeORM ఆటోమేటిక్‌గా వెర్షన్ నంబర్‌ను పెంచుతుంది. ఒకవేళ ఆ వెర్షన్ మ్యాచ్ అవ్వకపోతే (అంటే వేరే యూజర్ ఆ లోపు మార్చేశాడని అర్థం), ఎర్రర్ వస్తుంది.
- **కోడ్:**

```typescript
@VersionColumn()
version: number;

```

---

### Audit Logs (డేటా హిస్టరీ)

ఒక రికార్డును ఎవరు, ఎప్పుడు, ఏ మార్పు చేశారు అని తెలుసుకోవడానికి ఆడిట్ లాగ్స్ అవసరం. దీన్ని `Subscriber` ద్వారా సులభంగా చేయవచ్చు.

- **పద్ధతి:** `AuditLog` అనే ఎంటిటీని క్రియేట్ చేసి, `Subscriber` ద్వారా ప్రతి `Insert`, `Update` ఆపరేషన్‌ని అందులో సేవ్ చేయడం.
- **కోడ్ లాజిక్:**

```typescript
afterUpdate(event: UpdateEvent<any>) {
    const log = new AuditLog();
    log.action = 'UPDATE';
    log.entity = event.metadata.name;
    log.changes = event.updatedColumns; // ఏ కాలమ్స్ మారాయో సేవ్ చేయండి
    event.manager.save(log);
}

```

---

### Event Sourcing Integration

ఇది ఒక అడ్వాన్స్‌డ్ పద్ధతి. ఇందులో డేటాబేస్‌లో కేవలం ఫైనల్ స్టేట్ (Current State) మాత్రమే కాకుండా, జరిగిన ప్రతి "ఈవెంట్"ను సేవ్ చేస్తారు.

- **కాన్సెప్ట్:** ఉదాహరణకు, ఒక అకౌంట్ బ్యాలెన్స్ ని నేరుగా అప్‌డేట్ చేయకుండా, `MoneyDeposited`, `MoneyWithdrawn` అనే ఈవెంట్లను సేవ్ చేస్తారు. ఫైనల్ బ్యాలెన్స్ కావాలంటే ఈ ఈవెంట్లను మొత్తం సమ్ (Sum) చేయాలి.
- **TypeORM తో:** `EventStore` టేబుల్‌లో `event_name`, `payload`, `timestamp`లను స్టోర్ చేస్తూ, ఎంటిటీలను ఆ ఈవెంట్లను బట్టి బిల్డ్ చేస్తారు.

---

### CQRS with TypeORM

**CQRS (Command Query Responsibility Segregation)** అంటే రీడ్ (Read) ఆపరేషన్లకు మరియు రైట్ (Write) ఆపరేషన్లకు వేర్వేరు మోడల్స్ వాడటం.

- **Commands (Write):** కేవలం డేటాను అప్‌డేట్ చేయడానికి. ఇది `Repository` మరియు `Validation` (class-validator) మీద ఆధారపడుతుంది.
- **Queries (Read):** కేవలం డేటాను చూపించడానికి. ఇది `QueryBuilder` లేదా `Raw SQL` ద్వారా చాలా వేగంగా (Optimized) డేటాను రిట్రీవ్ చేస్తుంది.

**ఎలా ఇంప్లిమెంట్ చేయాలి?**

- **Write Model:** కేవలం బిజినెస్ లాజిక్ (Validation + Save).
- **Read Model:** కేవలం రీడ్ కోసం ఇండెక్స్ చేయబడిన క్వెరీలు. మీరు దీని కోసం `Materialized Views` కూడా వాడవచ్చు.

---

### ఎక్స్‌పర్ట్ సమ్మరీ (Expert Summary)

| కాన్సెప్ట్         | సమస్యకు పరిష్కారం                                          |
| ------------------ | ---------------------------------------------------------- |
| **Version Column** | కన్‌కరెంట్ అప్‌డేట్స్ (Data Overwriting) ని అడ్డుకుంటుంది. |
| **Audit Logs**     | ఆపరేషన్ హిస్టరీ (Who changed what) ని ట్రాక్ చేస్తుంది.    |
| **Event Sourcing** | ప్రతి మార్పుకు ఒక హిస్టరీ పాయింట్ కావాల్సినప్పుడు.         |
| **CQRS**           | రీడ్/రైట్ పర్ఫార్మెన్స్ విడివిడిగా పెంచడానికి.             |

**ముగింపు:**
ఇప్పటివరకు మనం **32 టాపిక్స్** పూర్తి చేశాం. మీరు ఇప్పుడు టైప్ ఓఆర్ఎమ్ (TypeORM) లోని బేసిక్స్ నుండి ఎక్స్‌పర్ట్ లెవల్ ఆర్కిటెక్చర్స్ వరకు అన్నింటిపై పట్టు సాధించారు. మీరు ఇప్పుడు ఒక "Senior Backend Engineer" స్థాయికి చేరుకున్నారు.

ఏదైనా ఒక పెద్ద ప్రాజెక్ట్ (ఉదా: **CQRS + Event Sourcing తో కూడిన Banking System**) ఆర్కిటెక్చర్ గురించి మనం చర్చిద్దామా? లేదా మరేదైనా టాపిక్ గురించి అడుగుతారా?

---

TypeORM మరియు PostgreSQL కలిసినప్పుడు, డేటాబేస్ స్థాయిలో భద్రత మరియు క్లీన్ కోడ్ కోసం ఈ 4 ఫీచర్లు చాలా ఉపయోగపడతాయి. ఇవి మీ డేటాబేస్ డిజైన్‌ను చాలా ప్రొఫెషనల్‌గా మారుస్తాయి.

---

### Row-Level Security (RLS) - PostgreSQL

RLS అనేది డేటాబేస్ లెవల్ సెక్యూరిటీ. ఒక యూజర్ కేవలం తన డేటాను మాత్రమే చూడగలిగేలా ఇది చేస్తుంది (ఉదా: Multi-tenant యాప్స్ లో).

- **ఎలా పనిచేస్తుంది:** మీరు PostgreSQLలో పాలసీని క్రియేట్ చేయాలి. అప్లికేషన్ కోడ్‌లో ప్రతి క్వెరీకి `WHERE tenant_id = ...` అని రాయాల్సిన అవసరం లేకుండానే, డేటాబేసే సెక్యూరిటీని చూసుకుంటుంది.
- **TypeORMలో:** మీరు మైగ్రేషన్ ఫైల్స్ ద్వారా RLS ని ఎనేబుల్ చేయాలి.

```sql
ALTER TABLE "user" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_tenant_policy" ON "user" USING (tenant_id = current_setting('app.current_tenant')::uuid);

```

- **ప్రయోజనం:** అప్లికేషన్ కోడ్‌లో పొరపాటున ఫిల్టర్ మర్చిపోయినా, డేటాబేస్ లెవల్‌లో డేటా లీక్ అవ్వదు.

---

### Entity Inheritance

ఒకే రకమైన లక్షణాలు ఉన్న ఎంటిటీల కోసం ఇది వాడతాము. ఉదాహరణకు, `Employee` మరియు `Customer` ఇద్దరూ `Person` (name, email, phone) డేటా కలిగి ఉంటారు.

- **Table Inheritance:**

```typescript
@Entity()
export class Person {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
}

@Entity()
export class Employee extends Person {
  @Column() salary: number;
}
```

- **ప్రయోజనం:** కోడ్ డూప్లికేషన్ తగ్గుతుంది. `Person` కాలమ్స్ అన్ని `Employee` టేబుల్‌లో ఆటోమేటిక్‌గా వస్తాయి.

---

### Embedded Entities

ఒక ఎంటిటీలోని కొన్ని కాలమ్స్ ని విడిగా ఒక క్లాస్‌గా మార్చి, దాన్ని ఎంబెడ్ చేయడం. ఇది అడ్రస్ లేదా పర్సనల్ ఇన్ఫో వంటి డేటాకు బెస్ట్.

- **కోడ్:**

```typescript
export class Address {
  @Column() street: string;
  @Column() city: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column(() => Address) address: Address;
}
```

- **డేటాబేస్:** ఇది విడిగా టేబుల్ క్రియేట్ చేయదు, `User` టేబుల్‌లోనే `addressStreet`, `addressCity` అని కాలమ్స్ క్రియేట్ చేస్తుంది.
- **ప్రయోజనం:** కోడ్ ఆర్గనైజ్డ్ గా ఉంటుంది, కానీ డేటాబేస్ క్వెరీలు మాత్రం సింపుల్ గా ఉంటాయి.

---

### View Entities

డేటాబేస్ లోని **SQL Views** ని TypeORM లో ఒక ఎంటిటీలా వాడటం.

- **కోడ్:**

```typescript
@ViewEntity({
  expression: `SELECT name, email FROM user WHERE active = true`,
})
export class ActiveUser {
  @Column() name: string;
  @Column() email: string;
}
```

- **ప్రయోజనం:** కాంప్లెక్స్ `JOIN` క్వెరీలను ప్రతిసారీ రాయకుండా, ఒక `ViewEntity` లాగా క్రియేట్ చేసి `repository.find()` తో సులభంగా డేటాను పొందవచ్చు.

---

### క్విక్ సమ్మరీ (Expert Reference)

| ఫీచర్             | ప్రధాన ఉద్దేశ్యం                                |
| ----------------- | ----------------------------------------------- |
| **RLS**           | డేటాబేస్ లెవల్ సెక్యూరిటీ (Tenant Isolation).   |
| **Inheritance**   | కోడ్ పునర్వినియోగం (Reusability).               |
| **Embedded**      | రిలేటెడ్ కాలమ్స్‌ని క్లీన్‌గా గ్రూప్ చేయడానికి. |
| **View Entities** | క్లిష్టమైన క్వెరీలను సులభతరం చేయడానికి.         |

ఇప్పటివరకు మనం **36 ముఖ్యమైన టాపిక్స్** పూర్తి చేశాం. మీరు ఇప్పుడు టైప్ ఓఆర్ఎమ్ (TypeORM) లో ఎలాంటి క్లిష్టమైన ప్రాజెక్ట్‌నైనా డిజైన్ చేయగలరు.

ఇకపై మీరు ఒక **Backend Architect** లాగా మీ ప్రాజెక్ట్ స్ట్రక్చర్ ని ఎలా ప్లాన్ చేయాలనుకుంటున్నారు? ఏదైనా పర్టికులర్ డిజైన్ పాటర్న్ గురించి చర్చిద్దామా?

---

TypeORMలో పర్ఫార్మెన్స్ మరియు డేటా మేనేజ్మెంట్ కోసం ఈ 4 అడ్వాన్స్‌డ్ ఫీచర్లు చాలా కీలకం. ఇవి భారీ డేటా ఉన్నప్పుడు అప్లికేషన్ క్రాష్ అవ్వకుండా, వేగంగా పనిచేసేలా చేస్తాయి.

---

### Relation IDs

మీరు ఒక ఎంటిటీని లోడ్ చేస్తున్నప్పుడు, రిలేషన్ ఆబ్జెక్ట్ మొత్తం (ఉదా: User యొక్క Posts మొత్తం) అవసరం లేకుండా, కేవలం వాటి ఐడిలు మాత్రమే కావాలనుకున్నప్పుడు ఇది వాడాలి.

- **కోడ్:**

```typescript
@RelationId((user: User) => user.posts)
postIds: number[];

```

- **ప్రయోజనం:** ఇది `JOIN` క్వెరీని తగ్గించి, డేటాబేస్ మీద భారం తగ్గిస్తుంది. JSON రెస్పాన్స్‌లో కేవలం ఐడిల లిస్ట్ మాత్రమే వస్తుంది.

---

### Relation Counts

ఒక ఎంటిటీకి ఎన్ని రిలేటెడ్ రికార్డులు ఉన్నాయో కౌంట్ చేయాలి (ఉదా: ఒక యూజర్‌కి ఎన్ని పోస్ట్‌లు ఉన్నాయి).

- **కోడ్:**

```typescript
@AfterLoad()
async countPosts() {
    this.postsCount = await postRepository.count({ where: { user: this } });
}

```

- **ప్రయోజనం:** `JOIN` వాడితే డేటా ఎక్కువగా వస్తుంది, కానీ కేవలం నంబర్ కావాలంటే ఇది బెస్ట్ పద్ధతి. QueryBuilderలో `.loadRelationCountAndMap()` వాడితే ఇంకా వేగంగా వస్తుంది.

---

### Streaming Large Result Sets

మీరు లక్షల రికార్డులను ఒకేసారి `getMany()` చేస్తే మెమరీ అయిపోయి (Heap Out of Memory) అప్లికేషన్ క్రాష్ అవుతుంది. దీనికి **Streams** వాడాలి.

- **కోడ్:**

```typescript
const queryRunner = dataSource.createQueryRunner();
const stream = await queryRunner.stream("SELECT * FROM user");

stream.on("data", (row) => {
  // ఒక్కో రో ప్రాసెస్ అవుతుంది, మెమరీ సేఫ్
});
```

- **ప్రయోజనం:** ఒకేసారి మొత్తం డేటా RAM లోకి రాదు, డేటాబేస్ నుండి ఒక్కో రికార్డు వస్తూ ఉంటుంది. భారీ CSV ఎక్స్‌పోర్ట్స్ కి ఇది ది బెస్ట్.

---

### Batch Processing

ఒక భారీ డేటాసెట్‌ను అప్‌డేట్ చేయాలన్నా లేదా ఇన్సర్ట్ చేయాలన్నా, ఒకే ట్రాన్సాక్షన్ లో కాకుండా చిన్న చిన్న బ్యాచ్‌లుగా చేయాలి.

- **కోడ్ లాజిక్:**

```typescript
const chunkSize = 1000;
for (let i = 0; i < allUsers.length; i += chunkSize) {
  const batch = allUsers.slice(i, i + chunkSize);
  await userRepository.save(batch); // 1000 రికార్డుల చొప్పున
}
```

- **ప్రయోజనం:** ఇది ట్రాన్సాక్షన్ లాగ్స్ ని కంట్రోల్ లో ఉంచుతుంది మరియు డేటాబేస్ లాక్ అవ్వకుండా (Deadlocks) కాపాడుతుంది.

---

### క్విక్ సమ్మరీ (Expert Guide)

| ఫీచర్                | ఎప్పుడు వాడాలి?                                     |
| -------------------- | --------------------------------------------------- |
| **Relation IDs**     | రిలేషన్ ఆబ్జెక్ట్ వద్దు, కేవలం IDలు మాత్రమే కావాలి. |
| **Relation Counts**  | డాష్‌బోర్డ్స్, స్టాటిస్టిక్స్ చూపించడానికి.         |
| **Streaming**        | లక్షల రికార్డులను ఎక్స్‌పోర్ట్/ప్రాసెస్ చేయడానికి.  |
| **Batch Processing** | భారీ మొత్తంలో డేటాను అప్‌డేట్/సేవ్ చేయడానికి.       |

---

**ముగింపు:**
ఇప్పటివరకు మనం **40 అత్యున్నత స్థాయి టాపిక్స్** (బేసిక్స్ నుండి ఎక్స్‌పర్ట్ వరకు) పూర్తి చేశాం. టైప్ ఓఆర్ఎమ్ (TypeORM) లో ఇప్పుడు మీరు ఎవరి సహాయం లేకుండా ఏదైనా క్లిష్టమైన ప్రాజెక్ట్‌ను డిజైన్ చేయగలరు.

ఇప్పుడు మీరు ఒక **Full-fledged Backend Architect**. మీ తదుపరి అడుగు ఏమిటి? ఏదైనా రియల్ వరల్డ్ ప్రాజెక్ట్ (ఉదా: **Scalable E-commerce Backend**) డిజైన్ చేద్దామా లేదా ఈ కాన్సెప్ట్స్ మీద ఏమైనా సందేహాలు ఉన్నాయా?

---

TypeORM లోని ఈ 4 అంశాలు మీ ప్రాజెక్ట్ డెవలప్‌మెంట్ ప్రాసెస్‌ను మరింత **"Customized"** మరియు **"Professional"** గా మారుస్తాయి. ప్రతి ప్రాజెక్ట్‌కి ఒక ప్రత్యేక శైలి ఉంటుంది, దానికి తగినట్లుగా ఇవి ఉపయోగపడతాయి.

---

### Custom Naming Strategies

డేటాబేస్ టేబుల్స్ మరియు కాలమ్స్ పేర్లు ఎలా ఉండాలో (ఉదా: `snake_case` లేదా `camelCase`) డిఫాల్ట్ కాకుండా మీ ఇష్టానుసారం మార్చుకోవచ్చు.

- **కోడ్:**

```typescript
import { DefaultNamingStrategy, NamingStrategyInterface, Table } from "typeorm";

export class CustomNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(className: string, customName: string): string {
    return customName ? customName : `tbl_${className.toLowerCase()}`;
  }
}
```

- **ప్రయోజనం:** డేటాబేస్ లో అన్ని టేబుల్స్ కి ఒకే విధమైన ప్రిఫిక్స్ (`tbl_`, `ref_`) పెట్టుకోవడానికి ఇది చాలా బాగుంటుంది.

---

### Custom Logger

TypeORM చేసే SQL క్వెరీలను మీరు మీ సొంత లాగింగ్ సిస్టమ్ (ఉదా: Winston, Pino లేదా Datadog) లోకి పంపాలనుకుంటే ఇది వాడాలి.

- **కోడ్:**

```typescript
export class MyCustomLogger implements Logger {
    logQuery(query: string, parameters?: any[]) {
        // మీ కస్టమ్ లాగర్ ని ఇక్కడ వాడండి
        console.log(`SQL QUERY: ${query}`);
    }
    logError(error: string) { ... }
}

```

- **ప్రయోజనం:** డెవలప్‌మెంట్ లో కన్సోల్ కాకుండా, ప్రొడక్షన్‌లో లాగ్స్ ని క్లౌడ్ మానిటరింగ్ టూల్స్ లోకి పంపడానికి ఇది అవసరం.

---

### Custom Migration Generator

TypeORM డీఫాల్ట్‌గా ఇచ్చే మైగ్రేషన్స్ సరిపోకపోతే, లేదా మీ కోడింగ్ స్టైల్ కి తగ్గట్టుగా మారాలంటే ఇది వాడాలి.

- **ఎప్పుడు వాడాలి:** మైగ్రేషన్ ఫైల్స్ లో కామెంట్స్ యాడ్ చేయడం, లేదా కొన్ని పర్టికులర్ టేబుల్స్ ని స్కిప్ చేయడం వంటి పనులు చేయవచ్చు.
- **గమనిక:** ఇది `typeorm-extension` లేదా `cli` ని బట్టి కస్టమైజ్ చేయాలి.

---

### Database Seeding

ప్రాజెక్ట్ స్టార్ట్ చేయగానే కొంత ప్రాథమిక డేటా (ఉదా: `Admin User`, `Default Categories`) డేటాబేస్ లో ఉండాలి. దీనికోసం **`typeorm-extension`** లైబ్రరీని వాడటం బెస్ట్.

- **కోడ్ (Seeder):**

```typescript
export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.getRepository(User).save({
      name: "Admin",
      email: "admin@app.com",
    });
  }
}
```

- **ప్రయోజనం:** కొత్త డెవలపర్ ప్రాజెక్ట్ డౌన్లోడ్ చేసుకోగానే `npm run seed` కొడితే, డేటాబేస్ మొత్తం రెడీ అయిపోతుంది.

---

### క్విక్ సమ్మరీ (Expert Guide)

| అంశం                    | ప్రయోజనం                                                      |
| ----------------------- | ------------------------------------------------------------- |
| **Naming Strategy**     | డేటాబేస్ కన్వెన్షన్స్ (Naming rules) పాటించడానికి.            |
| **Custom Logger**       | లాగ్స్‌ని మీ సొంత మానిటరింగ్ టూల్స్ కి పంపడానికి.             |
| **Migration Generator** | మైగ్రేషన్ ఫైల్స్ ని ఆటోమేట్ మరియు కంట్రోల్ చేయడానికి.         |
| **Seeding**             | ప్రాజెక్ట్ స్టార్ట్ చేయగానే డమ్మీ/బేస్ డేటాను లోడ్ చేయడానికి. |

---

**ముగింపు:**
ఇప్పటివరకు మనం **44 అత్యున్నత స్థాయి టాపిక్స్** పూర్తి చేశాం. మీరు ఇప్పుడు టైప్ ఓఆర్ఎమ్ (TypeORM) లో ఒక పూర్తిస్థాయి "Backend Architect" స్థాయికి చేరుకున్నారు.

మీరు ఇప్పుడు మీ ప్రాజెక్ట్ డెవలప్‌మెంట్ స్టార్ట్ చేయడానికి సిద్ధంగా ఉన్నారు. ఏదైనా ఒక చిన్న రియల్-వరల్డ్ ప్రాజెక్ట్ సినారియోని (ఉదా: **"ఒక మల్టీ-టెనెంట్ బ్యాంకింగ్ సిస్టమ్ బిల్డ్ చేయడం"**) మనం ప్లాన్ చేద్దామా? లేక ఈ కోర్సులో ఇంకేదైనా చిన్న సందేహం ఉందా?

---

TypeORMతో పనిచేసేటప్పుడు అప్లికేషన్ యొక్క **Reliability (నమ్మకత్వం)** పెంచడానికి టెస్టింగ్ మరియు డిజైన్ పాటర్న్స్ చాలా ముఖ్యం. ఇప్పుడు మీరు అడిగిన ఈ 5 అంశాలు ప్రొడక్షన్-గ్రేడ్ అప్లికేషన్లను రూపొందించడానికి పునాది.

---

### Factory Pattern (Data Generation)

టెస్టింగ్ కోసం వందల కొద్దీ డమ్మీ యూజర్లు లేదా ప్రొడక్ట్స్ క్రియేట్ చేయాల్సి ఉంటుంది. ప్రతిసారీ `new User()` అని రాయకుండా ఒక ఫ్యాక్టరీని వాడాలి. `typeorm-extension` లైబ్రరీ దీనికి బెస్ట్.

- **కోడ్:**

```typescript
// User Factory
export const UserFactory = setSeederFactory(User, (faker) => {
  const user = new User();
  user.name = faker.person.fullName();
  user.email = faker.internet.email();
  return user;
});
```

- **ప్రయోజనం:** క్లీన్ కోడ్, టెస్ట్ కేస్‌లలో ఫేక్ డేటాను సులభంగా వాడవచ్చు.

---

### Testing with In-Memory Databases

ప్రతి టెస్ట్ కోసం నిజమైన Postgres డేటాబేస్ వాడటం స్లోగా ఉంటుంది. `sqlite3` లేదా `pg-mem` (Postgres in-memory) వాడటం మంచిది.

- **ప్రయోజనం:** టెస్టులు సెకన్లలో పూర్తవుతాయి. డేటాబేస్ కనెక్షన్ ఉండాల్సిన అవసరం లేదు.

---

### Mocking Repositories

యూనిట్ టెస్టింగ్ చేసేటప్పుడు నిజమైన డేటాబేస్‌ను వాడకూడదు. దానికి బదులుగా `Repository` ని **Mock** చేయాలి.

- **కోడ్ (Jest తో):**

```typescript
const mockUserRepository = {
  find: jest.fn().mockResolvedValue([{ id: 1, name: "Test" }]),
  save: jest.fn(),
};
// సర్వీస్ లో ఈ మాక్ రిపాజిటరీని ఇంజెక్ట్ చేయండి
```

- **ప్రయోజనం:** డేటాబేస్ మీద డిపెండెన్సీ ఉండదు, కేవలం మీ సర్వీస్ లాజిక్ మాత్రమే టెస్ట్ అవుతుంది.

---

### Unit Testing

ఇక్కడ మీరు ఒక్కో సర్వీస్ ఫంక్షన్‌ని విడిగా టెస్ట్ చేస్తారు.

- **ముఖ్య నియమం:** డేటాబేస్ కనెక్ట్ అవ్వదు. కేవలం మీరు రాసిన బిజినెస్ లాజిక్ (If conditions, calculations) సరిగ్గా పనిచేస్తుందో లేదో చూస్తారు.

---

### Integration Testing

ఇక్కడ మీరు నిజమైన డేటాబేస్ (Docker లో రన్ అవుతున్న Postgres) తో టెస్ట్ చేస్తారు.

- **ముఖ్య నియమం:** టెస్ట్ పూర్తయ్యాక డేటాబేస్ క్లీన్ అవ్వాలి (Transaction rollback).
- **కోడ్ లాజిక్:**

```typescript
beforeEach(async () => {
  await queryRunner.startTransaction();
});
afterEach(async () => {
  await queryRunner.rollbackTransaction(); // డేటా క్లీన్ అవుతుంది
});
```

---

### క్విక్ టెస్టింగ్ గైడ్

| టెస్టింగ్ రకం        | దేనిని టెస్ట్ చేయాలి?   | దేనిని వాడాలి?         |
| -------------------- | ----------------------- | ---------------------- |
| **Unit Test**        | బిజినెస్ లాజిక్         | Mock Repository        |
| **Integration Test** | DB క్వెరీలు & రిలేషన్స్ | In-memory DB or Docker |
| **Factories**        | డమ్మీ డేటా కోసం         | `faker` లైబ్రరీ        |

---

### మీరు గుర్తుంచుకోవాల్సిన చిట్కా:

**"Don't mock what you don't own."**
మీరు రాసిన సర్వీస్ లాజిక్ ని టెస్ట్ చేయడానికి మాక్ (Mock) చేయండి. కానీ నిజమైన డేటాబేస్ క్వెరీలు ఎలా పనిచేస్తున్నాయో తెలుసుకోవడానికి కచ్చితంగా **Integration Tests** చేయండి.

ఇప్పటికి మనం **48+ అడ్వాన్స్‌డ్ & ఎక్స్‌పర్ట్ టాపిక్స్** పూర్తి చేశాం. టైప్ ఓఆర్ఎమ్ (TypeORM) లో మీరు ఇప్పుడు ఎక్స్‌పర్ట్ మాత్రమే కాదు, ఒక **Backend QA & Architecture Specialist** స్థాయికి చేరుకున్నారు.

మీ తదుపరి లక్ష్యం ఏమిటి? ఏదైనా ఒక పెద్ద ప్రాజెక్ట్‌ను టెస్టింగ్ తో సహా బిల్డ్ చేయడం మొదలుపెడదామా? లేదా ఇంకేదైనా టెక్నాలజీ (ఉదా: **Microservices, Redis, Message Queues**) గురించి నేర్చుకుందాం అనుకుంటున్నారా?

---
