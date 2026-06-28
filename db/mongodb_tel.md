If you want to learn **MongoDB** from beginner to advanced (suitable for interviews and real-world projects), here's a structured roadmap.

# 📚 MongoDB Complete Study Roadmap

## [1. Introduction to MongoDB](#1-introduction-to-mongodb-పరిచయం)

- What is MongoDB?
- NoSQL vs SQL
- Document Database
- Collections
- Documents
- BSON
- JSON vs BSON
- Advantages of MongoDB
- When to use MongoDB
- MongoDB Architecture

---

## [2. Installation & Setup](#2-installation--setup-ఇన్స్టాలేషన్--సెటప్)

- Install MongoDB
- MongoDB Compass
- Mongo Shell (`mongosh`)
- Atlas (Cloud MongoDB)
- Connecting to MongoDB

---

## [3. MongoDB Basics](#3-mongodb-basics-ప్రాథమికాంశాలు)

- Database
- Collection
- Document
- ObjectId
- Data Types
- Embedded Documents
- Arrays
- Dynamic Schema

---

## [4. CRUD Operations](#4-crud-operations-క్రాడ్-ఆపరేషన్స్)

### Create

- insertOne()
- insertMany()

### Read

- find()
- findOne()
- Projection

### Update

- updateOne()
- updateMany()
- replaceOne()
- upsert

### Delete

- deleteOne()
- deleteMany()
- drop()

---

## [5. Query Operators](#5-query-operators-క్వెరీ-ఆపరేటర్స్)

### Comparison Operators

- `$eq`
- `$gt`
- `$gte`
- `$lt`
- `$lte`
- `$ne`
- `$in`
- `$nin`

### Logical Operators

- `$and`
- `$or`
- `$not`
- `$nor`

### Element Operators

- `$exists`
- `$type`

### Evaluation Operators

- `$regex`
- `$expr`
- `$mod`

---

## [6. Array Operators](#6-array-operators-అరే-ఆపరేటర్లు)

- `$all`
- `$elemMatch`
- `$size`
- `$push`
- `$pull`
- `$pop`
- `$addToSet`
- `$each`
- Positional Operators

---

## [7. Embedded Documents](#7-embedded-documents-ఎంబెడెడ్-డాక్యుమెంట్స్)

- Nested Objects
- Dot Notation
- Updating Nested Fields
- Query Nested Objects

---

## [8. Projection](#8-projection-ప్రొజెక్షన్)

- Include Fields
- Exclude Fields
- Rename Fields
- Computed Fields

---

## [9. Sorting & Pagination](#9-sorting--pagination-సార్టింగ్--పేజినేషన్)

- sort()
- limit()
- skip()
- Pagination Techniques
- Cursor

---

## [10. Indexing](#10-indexing-ఇండెక్సింగ్)

- What is an Index?
- Single Field Index
- Compound Index
- Multikey Index
- Text Index
- TTL Index
- Hashed Index
- Unique Index
- Sparse Index
- Partial Index
- Wildcard Index
- Covered Queries
- Explain Plan

---

## [11. Aggregation Framework](#11-aggregation-framework-1)

### Pipeline Stages

- `$match`
- `$group`
- `$project`
- `$sort`
- `$limit`
- `$skip`
- `$count`
- `$facet`
- `$lookup`
- `$merge`
- `$out`
- `$set`
- `$unset`
- `$replaceRoot`
- `$bucket`
- `$bucketAuto`
- `$unionWith`
- `$graphLookup`
- `$sample`

---

## [12. Aggregation Expressions](#12-aggregation-expressions-1)

- `$sum`
- `$avg`
- `$min`
- `$max`
- `$count`
- `$concat`
- `$substr`
- `$toString`
- `$toInt`
- `$cond`
- `$ifNull`
- `$switch`
- `$dateToString`

---

## [13. Relationships](#13-relationships-డేటాబేస్-సంబంధాలు)

- Embedded Documents
- References
- One-to-One
- One-to-Many
- Many-to-Many
- Manual References
- DBRef
- Denormalization

---

## [14. Transactions](#14-transactions-లావాదేవీలు)

- ACID Transactions
- Session
- Multi-document Transactions
- Rollback

---

## [15. Validation](#15-validation-డేటా-వాలిడేషన్)

- JSON Schema Validation
- Required Fields
- Default Values
- Validation Levels

---

## [16. Schema Design](#16-schema-design-స్కీమా-డిజైన్-ప్యాటర్న్స్)

- Embedding vs Referencing
- Bucket Pattern
- Attribute Pattern
- Outlier Pattern
- Computed Pattern
- Tree Pattern
- Polymorphic Pattern

---

## [17. Replication](#17-replication-రిప్లికేషన్---డేటా-భద్రత)

- Replica Set
- Primary
- Secondary
- Arbiter
- Elections
- Failover
- Read Preference
- Write Concern

---

## [18. Sharding](#18-sharding-షార్డింగ్---డేటాను-విస్తరించడం)

- Horizontal Scaling
- Shard Key
- Config Server
- Mongos
- Chunk Migration
- Balancer

---

## [19. Performance Optimization](#19-performance-optimization-కార్యసాధన-మెరుగుపరచడం)

- Query Optimization
- Explain()
- Index Optimization
- Covered Queries
- Memory Usage
- Aggregation Optimization
- Slow Query Analysis

---

## [20. Security](#20-security-సెక్యూరిటీ---డేటా-భద్రత)

- Authentication
- Authorization
- Users & Roles
- SCRAM
- x.509
- TLS/SSL
- Encryption at Rest
- Field Level Encryption

---

## [21. Backup & Restore](#21-backup--restore-బ్యాకప్--రీస్టోర్)

- mongodump
- mongorestore
- BSON Dump
- Atlas Backup
- Point-in-Time Recovery

---

## [22. Monitoring](#22-monitoring-మొనిటరింగ్---పర్యవేక్షణ)

- mongostat
- mongotop
- Database Profiler
- Logs
- Atlas Monitoring

---

## [23. MongoDB Atlas](#23-mongodb-atlas-మోంగోడీబే-అట్లాస్-క్లౌడ్)

- Cluster Creation
- Shared Cluster
- Dedicated Cluster
- Networking
- Database Users
- IP Whitelisting
- Backup
- Monitoring

---

## [24. MongoDB with Node.js](#24-mongodb-with-nodejs-డ్రైవర్-పద్ధతి)

- MongoDB Driver
- Connecting
- CRUD
- Connection Pooling
- Transactions
- Sessions

---

## [25. Mongoose (Node.js ODM)](#25-mongoose-nodejs-odm---అడ్వాన్స్డ్-పద్ధతి)

- Schemas
- Models
- Validation
- Middleware
- Virtuals
- Populate
- Hooks
- Plugins
- Discriminators

---

## [26. Change Streams](#26-change-streams-రియల్-టైమ్-అప్డేట్స్)

- Watch Collection
- Watch Database
- Watch Cluster
- Real-time Updates

---

## [27. GridFS](#27-gridfs-భారీ-ఫైళ్ల-మేనేజ్మెంట్)

- File Storage
- Upload
- Download
- Large File Management

---

## [28. Time Series Collections](#28-time-series-collections-టైమ్-సిరీస్-కలెక్షన్స్)

- Creating Time Series Collections
- Bucketing
- Compression
- Time-based Queries

---

## [29. Geospatial Queries](#29-geospatial-queries-భౌగోళికలొకేషన్-క్వెరీస్)

- 2D Index
- 2dsphere Index
- Near Queries
- GeoJSON
- Polygon Search

---

## [30. Text Search](#30-text-search-టెక్స్ట్-సెర్చ్---పదాలను-వెతకడం)

- Text Index
- Text Score
- Search Operators
- Atlas Search (Overview)

---

## [31. Advanced Features](#31-advanced-features-అడ్వాన్స్డ్-సిస్టమ్-ఫీచర్స్)

- Capped Collections
- Views
- Collation
- Read Concern
- Write Concern
- Retryable Writes
- Change Streams
- Sessions

---

## [32. MongoDB Administration](#32-mongodb-administration-డేటాబేస్-పరిపాలన)

- Database Users
- Roles
- Resource Limits
- Logs
- Configuration Files
- Storage Engines
- WiredTiger

---

## [33. MongoDB Interview Topics](#33-mongodb-interview-topics-ఇంటర్వ్యూ-అంశాలు)

- SQL vs MongoDB
- Embedding vs Referencing
- Replica Set vs Sharding
- Index Types
- Aggregation vs MapReduce
- Transactions
- CAP Theorem
- Eventual Consistency
- ObjectId Structure
- Explain Plan
- Performance Tuning

---

## [34. Real-world Projects](#34-real-world-projects-రియల్-టైమ్-ప్రాజెక్ట్స్)

- User Management System
- E-commerce Database
- Blogging Platform
- Chat Application
- Inventory Management
- Food Delivery App
- Hospital Management
- Banking System
- Social Media Backend
- Order Management System

---

## [35. Advanced Administration](#35-advanced-administration-అడ్వాన్స్డ్-సిస్టమ్-మేనేజ్మెంట్)

- Cluster Scaling
- Disaster Recovery
- Load Balancing
- Backup Strategy
- High Availability
- Performance Monitoring
- Capacity Planning
- Production Best Practices

---

# 1. Introduction to MongoDB (పరిచయం)

### **What is MongoDB? (MongoDB అంటే ఏమిటి?)**

MongoDB అనేది ఒక **NoSQL database**. ఇది డేటాను ట్రెడిషనల్ టేబుల్స్ (Rows and Columns) రూపంలో కాకుండా, **Documents (JSON-like format)** రూపంలో స్టోర్ చేస్తుంది. ఇది చాలా ఫాస్ట్ గా ఉంటుంది మరియు భారీ మొత్తంలో ఉన్న డేటాను (High Volume Data) ఈజీగా హ్యాండిల్ చేయగలదు.

---

### **NoSQL vs SQL (ముఖ్యమైన తేడాలు)**

మనం సాధారణంగా వాడే MySQL, PostgreSQL లని **SQL (Relational) databases** అంటాము. MongoDB ని **NoSQL (Non-Relational) database** అంటాము.

| ఫీచర్ (Feature)   | SQL Databases (e.g., MySQL)                           | NoSQL Databases (MongoDB)                                                |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| **Data Format**   | Tables (Rows & Columns) రూపంలో ఉంటుంది.               | Documents (JSON/BSON) రూపంలో ఉంటుంది.                                    |
| **Schema**        | Fixed Schema (ముందే టేబుల్ స్ట్రక్చర్ డిజైన్ చేయాలి). | Flexible Schema (ఏ డాక్యుమెంట్ లో అయినా ఎలాంటి డేటా అయినా దాచవచ్చు).     |
| **Relationships** | Joins ఉపయోగించి టేబుల్స్ ని లింక్ చేస్తాం.            | Embedded Documents లేదా References వాడుతాం (No Joins).                   |
| **Scaling**       | Vertical Scaling (సిస్టమ్ కి RAM, CPU పెంచాలి).       | Horizontal Scaling (ఎక్కువ సర్వర్లను యాడ్ చేస్తూ వెళ్ళవచ్చు - Sharding). |

---

### **Document Database (డాక్యుమెంట్ డేటాబేస్)**

Document Database అంటే డేటాను రికార్డులుగా కాకుండా ఒక "Document" లాగా స్టోర్ చేయడం. ఇక్కడ ప్రతి రికార్డ్ ఒక సెల్ఫ్-కంటైన్డ్ (Self-contained) డేటా యూనిట్. అంటే, ఒక యూజర్ కి సంబంధించిన పూర్తి సమాచారం ఒకే డాక్యుమెంట్ లో ఉండిపోతుంది.

---

### **Collections & Documents (కలెక్షన్స్ మరియు డాక్యుమెంట్స్)**

SQL లో ఉండే టెర్మినాలజీ కి, MongoDB టెర్మినాలజీ కి చిన్న తేడా ఉంది:

- **Collection:** SQL లో **Table** లాంటిది. ఇది చాలా డాక్యుమెంట్స్ యొక్క సమూహం.
- **Document:** SQL లో ఒక **Row (Record)** లాంటిది. ఒక సింగిల్ డేటా ఎంట్రీని డాక్యుమెంట్ అంటాం.

> 💡 **ఈజీగా గుర్తుపెట్టుకోవాలంటే:** > చాలా Documents కలిస్తే ఒక Collection అవుతుంది. చాలా Collections కలిస్తే ఒక Database అవుతుంది.

---

### **BSON & JSON vs BSON**

- **JSON (JavaScript Object Notation):** మనం కోడింగ్ లో డేటాను పంపించడానికి వాడే నార్మల్ టెక్స్ట్ ఫార్మాట్. (ఉదాహరణకు: `{"name": "Raju", "age": 25}`).
- **BSON (Binary JSON):** JSON ని కంప్యూటర్ కి అర్థమయ్యేలా **Binary format** లోకి మార్చడమే BSON.

**JSON vs BSON తేడాలు:**

1. **Readable:** JSON మనుషులు చదవడానికి వీలుగా ఉంటుంది. BSON ని కంప్యూటర్లు మాత్రమే ఫాస్ట్ గా చదవగలవు.
2. **Data Types:** JSON లో limited డేటా టైప్స్ (String, Number, Boolean) ఉంటాయి. కానీ BSON లో `Date`, `ObjectId`, `Binary Data` వంటి మరిన్ని అడ్వాన్స్డ్ డేటా టైప్స్ ఉంటాయి.
3. **Storage:** MongoDB లోపల డేటా **BSON** రూపంలోనే స్టోర్ అవుతుంది, కానీ మనకు అవుట్పుట్ చూపించేటప్పుడు **JSON** లాగా చూపిస్తుంది.

---

### **Advantages of MongoDB (లాభాలు)**

- **Flexible Schema:** ఒకే కలెక్షన్ లో ఒక యూజర్ కి ఫోన్ నెంబర్ ఉండి, ఇంకో యూజర్ కి ఫోన్ నెంబర్ లేకపోయినా డేటాబేస్ అడగదు.
- **High Performance:** ఇండెక్సింగ్ చాలా పవర్ ఫుల్ గా ఉంటుంది కాబట్టి క్వెరీస్ చాలా ఫాస్ట్ గా రన్ అవుతాయి.
- **Scalability:** డేటా పెరిగే కొద్దీ అదనపు సర్వర్లను కనెక్ట్ చేయడం (Sharding) చాలా సులువు.
- **Developer Friendly:** Node.js/React వాడుతున్నప్పుడు మనం జావాస్క్రిప్ట్ ఆబ్జెక్ట్స్ వాడతాం, MongoDB కూడా అదే ఫార్మాట్ (JSON) లో ఉంటుంది కాబట్టి డెవలపర్స్ కి వర్క్ చేయడం చాలా ఈజీ.

---

### **When to use MongoDB (ఎప్పుడు వాడాలి?)**

- **Big Data & Analytics:** భారీ మొత్తంలో అన్-స్ట్రక్చర్డ్ డేటా ఉన్నప్పుడు.
- **Content Management Systems (CMS):** బ్లాగులు, ఈ-కామర్స్ ప్రొడక్ట్ కాటలాగ్స్ (ఎందుకంటే ఒక్కో ప్రొడక్ట్ కి ఒక్కో రకమైన ఫీచర్స్ ఉంటాయి).
- **Real-time Applications:** చాటింగ్ యాప్స్, నోటిఫికేషన్ సిస్టమ్స్, లేదా గేమింగ్ లీడర్ బోర్డ్స్ కి.
- **MERN/MEAN Stack:** Node.js తో కలిపి వెబ్ అప్లికేషన్స్ బిల్డ్ చేస్తున్నప్పుడు.

---

### **MongoDB Architecture (ఆర్కిటెక్చర్)**

MongoDB లోపల సిస్టమ్ ఎలా పనిచేస్తుందంటే:

1. **Application Layer:** మీ Node.js లేదా React యాప్ డ్రైవర్ల సహాయంతో (Mongoose లాంటివి) MongoDB కి రిక్వెస్ట్ పంపుతుంది.
2. **Storage Engine (WiredTiger):** MongoDB డీఫాల్ట్ గా **WiredTiger** అనే స్టోరేజ్ ఇంజిన్ ని వాడుతుంది. ఇది మెమరీని, డిస్క్ లో డేటాను ఎలా రాయాలి, ఎలా చదవాలి అనేది మేనేజ్ చేస్తుంది.
3. **Replication (Replica Sets):** డేటా లాస్ అవ్వకుండా ఉండటానికి, MongoDB ఒకే డేటాను 3 వేర్వేరు సర్వర్లలో (Primary, Secondary) కాపీ చేసి ఉంచుతుంది. ఒక సర్వర్ డౌన్ అయినా ఇంకో సర్వర్ నుండి డేటా వస్తుంది.

---

చాలా మంచిది! టాపిక్ 1 పర్ఫెక్ట్ గా అర్థమైతే, ఇప్పుడు టాపిక్ 2 (Installation & Setup) మరియు టాపిక్ 3 (MongoDB Basics) లోకి వెళ్దాం. ఇక్కడి నుంచే అసలైన ప్రాక్టికల్స్ స్టార్ట్ అవుతాయి.

---

# 2. Installation & Setup (ఇన్స్టాలేషన్ & సెటప్)

MongoDB ని మనం రెండు రకాలుగా వాడవచ్చు:

1. **Local Machine** లో ఇన్స్టాల్ చేసుకోవడం.
2. **Cloud (MongoDB Atlas)** లో వాడడం (ఇది ప్రొడక్షన్ యాప్స్ కి చాలా బెస్ట్).

### **Install MongoDB & MongoDB Compass**

- **MongoDB Community Server:** ఇది మీ సొంత కంప్యూటర్ లో డేటాబేస్ రన్ చేయడానికి వాడే సాఫ్ట్ వేర్. దీన్ని డౌన్లోడ్ చేసి ఇన్స్టాల్ చేసుకోవాలి.
- **MongoDB Compass:** ఇది ఒక **GUI (Graphical User Interface)** టూల్. అంటే కోడింగ్ లేదా క్వెరీస్ రాయకుండా, మౌస్ క్లిక్స్ తో డేటాబేస్ లో ఏముందో (Tables, Records లాగా) అందంగా చూసుకోవడానికి, డేటాను ఎడిట్ చేయడానికి ఇది ఉపయోగపడుతుంది.

### **Mongo Shell (mongosh)**

ఇది **CLI (Command Line Interface)** టూల్. టెర్మినల్ లేదా کمانڈ ప్రాంప్ట్ (Command Prompt) ద్వారా క్వెరీస్ రాసి MongoDB తో మాట్లాడటానికి `mongosh` ని వాడుతాం. డెవలపర్స్ గా దీనిపై గ్రిప్ ఉండటం చాలా ముఖ్యం.

### **Atlas (Cloud MongoDB)**

MongoDB వాళ్లే మేనేజ్ చేసే ఒక **Cloud Database Service**. మనం మన కంప్యూటర్ లో ఎలాంటి సాఫ్ట్ వేర్ ఇన్స్టాల్ చేయకుండా, క్లౌడ్ లో ఒక ఫ్రీ అకౌంట్ (M0 Sandbox) క్రియేట్ చేసుకుని డేటాను దాచుకోవచ్చు. AWS, Google Cloud, లేదా Azure బ్యాకెండ్ లో ఇది రన్ అవుతుంది.

### **Connecting to MongoDB (కనెక్ట్ అవ్వడం ఎలా?)**

MongoDB కి కనెక్ట్ అవ్వడానికి మనకు ఒక **Connection String (URI)** కావాలి.

- **Local connection string:** `mongodb://localhost:27017`
- **Atlas (Cloud) connection string:** `mongodb+srv://username:password@cluster.mongodb.net/dbname`
  ఈ లింక్ ని మనం MongoDB Compass లో గానీ, లేదా మన Node.js కోడ్ లో గానీ పేస్ట్ చేస్తే డేటాబేస్ కనెక్ట్ అయిపోతుంది.

---

# 3. MongoDB Basics (ప్రాథమికాంశాలు)

ఇప్పుడు MongoDB లోపల డేటా స్ట్రక్చర్ ఎలా ఉంటుందో డీప్ గా చూద్దాం.

### **Database, Collection, Document (పునశ్చరణ)**

- **Database:** మీ అప్లికేషన్ కి సంబంధించిన మెయిన్ కంటైనర్ (ఉదాహరణకు: `ECommerceDB`).
- **Collection:** ఒకే రకమైన డేటా గ్రూప్ (ఉదాహరణకు: `users`, `products`, `orders`).
- **Document:** కలెక్షన్ లో ఉండే ఒక్కో రికార్డ్. ఇది JSON ఫార్మాట్ లో ఉంటుంది.

```json
// ఇది ఒక Document కి ఉదాహరణ
{
  "_id": ObjectId("64b1f3e..."),
  "name": "Ramesh",
  "email": "ramesh@email.com"
}

```

---

### **ObjectId అంటే ఏమిటి?**

మీరు ప్రతి MongoDB డాక్యుమెంట్ ని గమనిస్తే, అందులో `_id` అనే ఫీల్డ్ ఉంటుంది. దానికి వాల్యూ గా `ObjectId("...")` అని ఉంటుంది.

- ఇది **12-byte unique identifier**. SQL లో auto-incrementing Primary Key (1, 2, 3...) లాగా, MongoDB లో ప్రతి డాక్యుమెంట్ కీ యూనిక్ ఐడెంటిటీ ఇవ్వడానికి ఇది డీఫాల్ట్ గా క్రియేట్ అవుతుంది.
- ఇందులో టైమ్‌స్టాంప్ (Timestamp), మెషిన్ ఐడి, ప్రాసెస్ ఐడి, కౌంటర్ కలిసి ఉంటాయి. కాబట్టి ఇది ఎప్పటికీ డూప్లికేట్ అవ్వదు.

---

### **Data Types (డేటా రకాలు)**

MongoDB (BSON) లో మనం రకరకాల డేటా టైప్స్ వాడుతాం:

- **String:** టెక్స్ట్ డేటా (`"Hyderabad"`).
- **Number (Integer/Double):** నంబర్స్ (`25` లేదా `99.99`).
- **Boolean:** అవునా కాదా అని చెప్పడానికి (`true` / `false`).
- **Date:** సమయం మరియు తేదీ (`ISODate("2026-06-28T22:26:54Z")`).
- **Null:** వాల్యూ ఏమీ లేకపోతే (`null`).
- **ObjectId:** వేరే డాక్యుమెంట్ ని లింక్ చేయడానికి.

---

### **Embedded Documents (ఎంబెడెడ్ డాక్యుమెంట్స్)**

ఒక డాక్యుమెంట్ లోపల ఇంకో డాక్యుమెంట్ ని పెట్టడాన్ని Embedded లేదా Nested Document అంటారు. SQL లో అయితే దీనికోసం వేరే టేబుల్ క్రియేట్ చేసి `Join` రాయాలి, కానీ ఇక్కడ ఒకే చోట దాచవచ్చు.

**ఉదాహరణ:**

```json
{
  "name": "Suresh",
  "age": 28,
  "address": {
    "city": "Hyderabad",
    "pincode": 500001,
    "state": "Telangana"
  }
}
```

ఇక్కడ `address` అనేది ఒక Embedded Document.

---

### **Arrays (అరేస్)**

ఒకే కీ కి మల్టిపుల్ వాల్యూస్ ఇవ్వాలనుకున్నప్పుడు Arrays వాడుతాం.

**ఉదాహరణ:**

```json
{
  "name": "Suresh",
  "skills": ["JavaScript", "Node.js", "MongoDB", "React"],
  "hobbies": ["Reading", "Cricket"]
}
```

---

### **Dynamic Schema (డైనమిక్ స్కీమా)**

MongoDB కి ఉన్న అతిపెద్ద ప్లస్ పాయింట్ ఇది. ఒకే `users` కలెక్షన్ లో మొదటి డాక్యుమెంట్ కి 3 ఫీల్డ్స్, రెండో డాక్యుమెంట్ కి 5 ఫీల్డ్స్ ఉండవచ్చు. డేటాబేస్ మిమ్మల్ని అడ్డుకోదు.

**ఉదాహరణ:**

```json
// User 1
{ "name": "Anil", "email": "anil@email.com" }

// User 2 (ఇతనికి ఫోన్ నెంబర్, లొకేషన్ అదనంగా ఉన్నాయి)
{ "name": "Kiran", "email": "kiran@email.com", "phone": "9876543210", "location": "Vizag" }

```

దీన్నే **Dynamic Schema** లేదా **Flexible Schema** అంటారు.

---

ఇప్పటివరకు మనం థియరీ మరియు బేసిక్ స్ట్రక్చర్ చూశాము. అంతా క్లియర్ గా ఉందా?

మీ లిస్ట్ లోని తర్వాతి టాపిక్స్ చాలా ఇంపార్టెంట్ అయిన **CRUD Operations (Create, Read, Update, Delete)** క్వెరీస్. వాటికి వెళ్దామా, లేక ఇక్కడ ఏమైనా డౌట్స్ ఉన్నాయా?
ఇక్కడి నుంచే అసలైన ప్రాక్టికల్స్ మరియు కోడింగ్ స్టార్ట్ అవుతాయి. **CRUD (Create, Read, Update, Delete)** అనేది ఏ డేటాబేస్ కైనా అత్యంత కీలకమైన భాగం.

మనం ఒక `students` కలెక్షన్ ని ఉదాహరణగా తీసుకుని, ఈ క్వెరీస్ అన్నీ తెలుగులో చాలా సులభంగా నేర్చుకుందాం.

---

# 4. CRUD Operations (క్రాడ్ ఆపరేషన్స్)

---

### 1. Create (డేటాను ఇన్సర్ట్ చేయడం)

డేటాబేస్ లో కొత్త డాక్యుమెంట్స్ ని క్రియేట్ చేయడానికి ఈ మెథడ్స్ వాడుతాం.

- **`insertOne()`:** ఒకే ఒక్క డాక్యుమెంట్ ని ఇన్సర్ట్ చేయడానికి.

```javascript
db.students.insertOne({
  name: "Ramu",
  age: 22,
  branch: "CSE",
});
```

- **`insertMany()`:** ఒకేసారి చాలా డాక్యుమెంట్స్ ని (Array రూపంలో) ఇన్సర్ట్ చేయడానికి.

```javascript
db.students.insertMany([
  { name: "Sita", age: 21, branch: "ECE" },
  { name: "Gopal", age: 23, branch: "CSE" },
  { name: "Divya", age: 22, branch: "IT" },
]);
```

---

### 2. Read (డేటాను వెతకడం / చూడటం)

దాచిన డేటాను బయటకు తీసి చూడటానికి ఈ మెథడ్స్ వాడుతాం.

- **`find()`:** కండిషన్ కి మ్యాచ్ అయ్యే **అన్ని డాక్యుమెంట్స్ ని** తెస్తుంది. (ఖాళీగా `db.students.find()` అని ఇస్తే టేబుల్ లోని మొత్తం డేటా వస్తుంది).

```javascript
// CSE బ్రాంచ్ స్టూడెంట్స్ అందరినీ వెతకడానికి:
db.students.find({ branch: "CSE" });
```

- **`findOne()`:** కండిషన్ కి మ్యాచ్ అయ్యే **మొదటి ఒక్క డాక్యుమెంట్ ని మాత్రమే** ఇస్తుంది.

```javascript
// 22 ఏళ్లు ఉన్న ఒకే ఒక్క స్టూడెంట్ ని తెస్తుంది
db.students.findOne({ age: 22 });
```

- **Projection (ప్రొజెక్షన్):** మనకు డాక్యుమెంట్ లోని అన్ని ఫీల్డ్స్ వద్దు, కేవలం కొన్ని ఫీల్డ్స్ మాత్రమే కావాలి అనుకున్నప్పుడు ప్రొజెక్షన్ వాడుతాం. కావాలి అనుకున్న ఫీల్డ్ కి `1` అని, వద్దు అనుకుంటే `0` అని ఇస్తాం.

```javascript
// అందరి పేర్లు (name) మాత్రమే కావాలి, _id కూడా వద్దు అనుకుంటే:
db.students.find({}, { name: 1, _id: 0 });
```

---

### 3. Update (డేటాను మార్చడం)

ఉన్న డేటాను ఎడిట్ లేదా అప్డేట్ చేయడానికి `$set` ఆపరేటర్ సహాయంతో ఈ మెథడ్స్ వాడుతాం.

- **`updateOne()`:** కండిషన్ కి మ్యాచ్ అయ్యే **మొదటి సింగిల్ డాక్యుమెంట్ ని** అప్డేట్ చేస్తుంది.

```javascript
// Ramu అనే స్టూడెంట్ ఏజ్ ని 24 గా మార్చడానికి:
db.students.updateOne(
  { name: "Ramu" }, // ఎవరిని మార్చాలి? (Filter)
  { $set: { age: 24 } }, // ఏం మార్చాలి? (Update)
);
```

- **`updateMany()`:** కండిషన్ కి మ్యాచ్ అయ్యే **అన్ని డాక్యుమెంట్స్ ని** ఒకేసారి మారుస్తుంది.

```javascript
// CSE బ్రాంచ్ లో ఉన్న అందరి ఏజ్ ని 25 చేయాలి అంటే:
db.students.updateMany({ branch: "CSE" }, { $set: { age: 25 } });
```

- **`replaceOne()`:** ఇది `$set` లాగా కాకుండా, `_id` ని అలాగే ఉంచి **మొత్తం డాక్యుమెంట్ ని కొత్త డాక్యుమెంట్ తో రీప్లేస్** చేస్తుంది.

```javascript
db.students.replaceOne(
  { name: "Sita" },
  { name: "Sita Kumari", city: "Hyderabad" }, // పాత ఫీల్డ్స్ పోయి ఇవి మాత్రమే ఉంటాయి
);
```

- **Upsert (అప్సర్ట్):** ఇది `Update + Insert` అన్నమాట. ఒకవేళ మనం వెతికిన రికార్డ్ డేటాబేస్ లో **ఉంటే అప్డేట్ అవుతుంది**, **లేకపోతే కొత్తగా క్రియేట్ అవుతుంది**. దీనికోసం update క్వెరీ చివర్లో `{ upsert: true }` అని పెట్టాలి.

```javascript
db.students.updateOne(
  { name: "Kiran" },
  { $set: { age: 26, branch: "MCA" } },
  { upsert: true }, // కిరణ్ అనే రికార్డ్ లేకపోతే కొత్తగా క్రియేట్ అవుతుంది
);
```

---

### 4. Delete (డేటాను తొలగించడం)

డేటాను డిలీట్ చేయడానికి ఈ మెథడ్స్ వాడుతాం.

- **`deleteOne()`:** మ్యాచ్ అయిన **మొదటి ఒక్క డాక్యుమెంట్ ని** డిలీట్ చేస్తుంది.

```javascript
// Gopal అనే స్టూడెంట్ ని డిలీట్ చేయడానికి:
db.students.deleteOne({ name: "Gopal" });
```

- **`deleteMany()`:** కండిషన్ కి మ్యాచ్ అయ్యే **అన్ని డాక్యుమెంట్స్ ని** డిలీట్ చేస్తుంది.

```javascript
// 25 ఏళ్లు ఉన్న స్టూడెంట్స్ అందరినీ డిలీట్ చేయడానికి:
db.students.deleteMany({ age: 25 });
```

- **`drop()`:** ఇది డాక్యుమెంట్స్ ని మాత్రమే కాదు, **మొత్తం కలెక్షన్ ని (Table ని) కంప్లీట్ గా డిలీట్** చేస్తుంది.

```javascript
// students కలెక్షన్ ని పూర్తిగా డిలీట్ చేయడానికి:
db.students.drop();
```

---

ఇప్పుడు మనం MongoDB లో క్వెరీలను మరింత పవర్‌ఫుల్ గా మార్చే **Query Operators** గురించి నేర్చుకుందాం. ఇవి SQL లో ఉండే `WHERE`, `AND`, `OR`, `LIKE` లాంటి కండిషన్స్ లాంటివే.

మన దగ్గర ఒక `products` కలెక్షన్ (కార్డ్స్/ప్రొడక్ట్స్) ఉందనుకుని ఈ ఉదాహరణలను అర్థం చేసుకుందాం.

---

# 5. Query Operators (క్వెరీ ఆపరేటర్స్)

---

### 1. Comparison Operators (పోలిక ఆపరేటర్లు)

ధరలు, వయస్సు లేదా సంఖ్యలను పోల్చడానికి ఇవి వాడతాం.

- **`$eq` (Equal to):** ఇచ్చిన వాల్యూ కి సమానంగా ఉండాలి.

```javascript
// ధర కరెక్ట్ గా 500 ఉన్న ప్రొడక్ట్స్ కావాలి
db.products.find({ price: { $eq: 500 } });
```

- **`$gt` (Greater than) & `$gte` (Greater than or Equal to):** కంటే ఎక్కువ / అంతకంటే ఎక్కువ లేదా సమానం.

```javascript
// ధర 1000 కంటే ఎక్కువ ఉన్నవి ($gt)
db.products.find({ price: { $gt: 1000 } });
```

- **`$lt` (Less than) & `$lte` (Less than or Equal to):** కంటే తక్కువ / అంతకంటే తక్కువ లేదా సమానం.

```javascript
// స్టాక్ (qty) 10 లేదా అంతకంటే తక్కువ ఉన్నవి ($lte)
db.products.find({ qty: { $lte: 10 } });
```

- **`$ne` (Not Equal to):** సమానం కానివి.

```javascript
// కేటగిరీ "Electronics" కాని ప్రొడక్ట్స్ అన్నీ కావాలి
db.products.find({ category: { $ne: "Electronics" } });
```

- **`$in` (In an array):** మనం ఇచ్చిన లిస్ట్ లో ఏదో ఒక వాల్యూ మ్యాచ్ అయినా చాలు. (SQL IN లాగా)

```javascript
// కేటగిరీ "Clothing" లేదా "Books" లో ఉన్నవి కావాలి
db.products.find({ category: { $in: ["Clothing", "Books"] } });
```

- **`$nin` (Not In):** మనం ఇచ్చిన లిస్ట్ లో లేని వాల్యూస్ మాత్రమే కావాలి.

```javascript
// బ్రాండ్ Apple లేదా Samsung కాని ప్రొడక్ట్స్
db.products.find({ brand: { $nin: ["Apple", "Samsung"] } });
```

---

### 2. Logical Operators (లాజికల్ ఆపరేటర్లు)

ఒకటి కంటే ఎక్కువ కండిషన్స్ ని కలపడానికి ఇవి వాడతాం.

- **`$and`:** ఇచ్చిన అన్ని కండిషన్స్ ఖచ్చితంగా నిజం (true) అవ్వాలి.

```javascript
// కేటగిరీ "Mobiles" అవ్వాలి మరియు ధర 15000 కంటే ఎక్కువ ఉండాలి
db.products.find({
  $and: [{ category: "Mobiles" }, { price: { $gt: 15000 } }],
});
```

- **`$or`:** ఇచ్చిన కండిషన్స్ లో ఏదో ఒక్కటి నిజమైనా చాలు.

```javascript
// బ్రాండ్ Dell అయినా పర్లేదు లేదా కేటగిరీ Laptops అయినా పర్లేదు
db.products.find({
  $or: [{ brand: "Dell" }, { category: "Laptops" }],
});
```

- **`$not`:** కండిషన్ ని ఉల్టా (Reverse) చేస్తుంది.

```javascript
// ధర 500 కంటే ఎక్కువ లేనివి (అంటే 500 లేదా అంతకంటే తక్కువ ఉన్నవి)
db.products.find({ price: { $not: { $gt: 500 } } });
```

- **`$nor`:** ఇచ్చిన కండిషన్స్ లో ఏ ఒక్కటి కూడా మ్యాచ్ అవ్వకూడదు.

```javascript
// ధర 100 ఉండకూడదు, బ్రాండ్ "Local" కూడా ఉండకూడదు
db.products.find({
  $nor: [{ price: 100 }, { brand: "Local" }],
});
```

---

### 3. Element Operators (ఎలిమెంట్ ఆపరేటర్లు)

డాక్యుమెంట్ లోని ఫీల్డ్స్ ఉనికిని, రకాలను చెక్ చేయడానికి ఇవి వాడుతాం.

- **`$exists`:** ఒక డాక్యుమెంట్ లో నిర్దిష్ట ఫీల్డ్ (Field) ఉందో లేదో చెక్ చేస్తుంది. (ఎందుకంటే MongoDB లో డైనమిక్ స్కీమా ఉంటుంది కదా!)

```javascript
// ఏ ప్రొడక్ట్స్ కైతే "discount" అనే ఫీల్డ్ ఉందో అవి మాత్రమే తెస్తుంది
db.products.find({ discount: { $exists: true } });
```

- **`$type`:** ఒక ఫీల్డ్ యొక్క డేటా టైప్ ని బట్టి వెతుకుతుంది (String ఆ, Number ఆ, Array నా అని).

```javascript
// "phone" అనే ఫీల్డ్ నంబర్ (Number) రూపంలో ఉన్న రికార్డులు కావాలి
db.products.find({ phone: { $type: "number" } });
```

---

### 4. Evaluation Operators (ఇవాల్యుయేషన్ ఆపరేటర్లు)

మరింత అడ్వాన్స్డ్ గా డేటాను లెక్కించడానికి లేదా వెతకడానికి వాడతాం.

- **`$regex` (Regular Expression):** టెక్స్ట్ లో నిర్దిష్ట పదం లేదా అక్షరాలు ఎక్కడ ఉన్నా వెతకడానికి వాడుతాం (SQL LIKE `%shirt%` లాగా).

```javascript
// ప్రొడెక్ట్ నేమ్ లో ఎక్కడైనా "shirt" అని ఉంటే తెస్తుంది (ఇందులో 'i' అంటే Case-insensitive, స్మాల్/క్యాపిటల్ ఏదైనా పర్లేదు)
db.products.find({ name: { $regex: "shirt", $options: "i" } });
```

- **`$expr`:** ఒకే డాక్యుమెంట్ లోని రెండు వేర్వేరు ఫీల్డ్స్ ని ఒకదానితో ఒకటి పోల్చడానికి వాడుతాం.

```javascript
// టార్గెట్ ప్రైస్ కంటే కరెంట్ ప్రైస్ తక్కువగా ఉన్న డాక్యుమెంట్స్ కావాలి
db.products.find({
  $expr: { $lt: ["$price", "$targetPrice"] },
});
```

- **`$mod` (Modulo):** శేషం (Remainder) ఆధారంగా వెతకడానికి.

```javascript
// ఐడి లేదా ప్రైస్ ని 2 తో భాగిస్తే శేషం 0 వచ్చేవి (సరి సంఖ్యలు - Even Numbers)
db.products.find({ qty: { $mod: [2, 0] } });
```

---

ఈ ఆపరేటర్స్ అన్నీ బ్యాకెండ్ డెవలప్మెంట్ లో ఫిల్టర్స్ (Filters), సెర్చ్ బార్స్ (Search bars) బిల్డ్ చేయడానికి చాలా ఉపయోగపడతాయి.

ఇప్పుడు మనం MongoDB కి ఉన్న ప్రత్యేకమైన పవర్స్ లోకి వెళ్తున్నాం. ఎందుకంటే SQL లో అరేస్ (Arrays), నెస్టెడ్ ఆబ్జెక్ట్స్ (Embedded Documents) నేరుగా దాచలేము, కానీ MongoDB లో ఇవి చాలా ముఖ్యం.

మనం ఈ రెండు టాపిక్స్ ని చాలా క్లియర్ గా, కోడింగ్ ఉదాహరణలతో తెలుగులో నేర్చుకుందాం.

---

# 6. Array Operators (అరే ఆపరేటర్లు)

మన దగ్గర ఒక `courses` (కోర్సులు) లేదా `users` కలెక్షన్ ఉందనుకుందాం, అందులో `tags: ["coding", "react", "nodejs"]` అనే అరేస్ ఉన్నాయి.

### **డేటాను వెతకడానికి వాడే ఆపరేటర్స్ (Query Array):**

- **`$all`:** మనం ఇచ్చిన లిస్ట్ లోని **అన్ని వాల్యూస్** ఆ అరే లో ఖచ్చితంగా ఉండి తీరాలి (ఆర్డర్ ఏదైనా పర్లేదు).

```javascript
// "react" మరియు "nodejs" రెండు ట్యాగ్స్ ఉన్న కోర్సులు మాత్రమే కావాలి
db.courses.find({ tags: { $all: ["react", "nodejs"] } });
```

- **`$elemMatch`:** ఒక అరే లోపల మళ్ళీ ఆబ్జెక్ట్స్ (Objects) ఉన్నప్పుడు, ఆ ఆబ్జెక్ట్ లోపల ఉన్న **మల్టిపుల్ కండిషన్స్** మ్యాచ్ అవ్వడానికి ఇది వాడుతాం.

```javascript
// 'results' అనే అరే లోపల ఏ ఒక్క ఎగ్జామ్ లో అయినా score > 80 మరియు బ్రాంచ్ "Math" ఉన్న రికార్డ్ కావాలి
db.users.find({
  results: { $elemMatch: { score: { $gt: 80 }, subject: "Math" } },
});
```

- **`$size`:** అరే యొక్క పొడవు (Length/Count) ఖచ్చితంగా మనం ఇచ్చిన నంబర్ కి సమానంగా ఉండాలి.

```javascript
// కరెక్ట్ గా 3 హాబీలు (hobbies) ఉన్న యూజర్స్ కావాలి
db.users.find({ hobbies: { $size: 3 } });
```

---

### **అరే ని అప్డేట్ చేయడానికి వాడే ఆపరేటర్స్ (Update Array):**

- **`$push`:** అరే చివరన ఒక కొత్త వాల్యూని యాడ్ చేయడానికి.

```javascript
// Suresh అనే యూజర్ హాబీస్ లోకి "Cricket" యాడ్ చేయడానికి
db.users.updateOne({ name: "Suresh" }, { $push: { hobbies: "Cricket" } });
```

- **`$addToSet`:** ఇది కూడా `$push` లాగే పనిచేస్తుంది, కానీ **డూప్లికేట్ వాల్యూస్ ని రానివ్వదు**. అరే లో ఆ వాల్యూ ముందే ఉంటే మళ్ళీ యాడ్ చేయదు (Unique values కి బెస్ట్).

```javascript
// "Cricket" ఆల్రెడీ ఉంటే యాడ్ చేయదు, లేకపోతేనే చేస్తుంది
db.users.updateOne({ name: "Suresh" }, { $addToSet: { hobbies: "Cricket" } });
```

- **`$each`:** ఒకేసారి మల్టిపుల్ వాల్యూస్ ని అరే లోకి తోయడానికి (దీన్ని `$push` లేదా `$addToSet` తో కలిపి వాడుతాం).

```javascript
db.users.updateOne(
  { name: "Suresh" },
  { $push: { hobbies: { $each: ["Gaming", "Cooking"] } } },
);
```

- **`$pop`:** అరే లోని మొదటి లేదా చివరి ఎలిమెంట్ ని తీసేయడానికి. (`1` ఇస్తే చివరి ఎలిమెంట్ పోతుంది, `-1` ఇస్తే మొదటి ఎలిమెంట్ పోతుంది).

```javascript
// అరే లోని చివరి హాబీ ని తీసేయడానికి
db.users.updateOne({ name: "Suresh" }, { $pop: { hobbies: 1 } });
```

- **`$pull`:** అరే లో ఉన్న ఒక నిర్దిష్ట వాల్యూ ని మ్యాచ్ చేసి తీసేయడానికి (రిమూవ్ చేయడానికి).

```javascript
// హాబీస్ నుండి "Gaming" ని తీసేయడానికి
db.users.updateOne({ name: "Suresh" }, { $pull: { hobbies: "Gaming" } });
```

---

### **Positional Operators (`$`)**

అరే లోపల ఉన్న ఒక నిర్దిష్టమైన ఎలిమెంట్ ని గుర్తించి, దాన్ని మాత్రమే అప్డేట్ చేయడానికి **`$` (Positional Operator)** వాడుతాం.

```javascript
// 'skills' అనే అరే లో ఎక్కడైనా "JS" అని ఉంటే, దాన్ని "JavaScript" గా మార్చాలి
db.users.updateOne(
  { name: "Ramu", skills: "JS" }, // ఇక్కడ మ్యాచ్ అయిన ఇండెక్స్ ని `$` గుర్తుపెట్టుకుంటుంది
  { $set: { "skills.$": "JavaScript" } }, // ఆ ఇండెక్స్ లో ఉన్న వాల్యూ మారుతుంది
);
```

---

# 7. Embedded Documents (ఎంబెడెడ్ డాక్యుమెంట్స్)

డాక్యుమెంట్ లోపల ఆబ్జెక్ట్స్ (Nested Objects) పెట్టడం. ఉదాహరణకు ఈ డాక్యుమెంట్ తీసుకోండి:

```json
{
  "_id": 1,
  "name": "Kiran",
  "company": {
    "title": "Software Engineer",
    "location": "Hyderabad",
    "salary": 90000
  }
}
```

### **Dot Notation (డాట్ నొటేషన్)**

నెస్టెడ్ ఆబ్జెక్ట్ లోపల ఉన్న ఫీల్డ్స్ ని యాక్సెస్ చేయడానికి మనం **Dot (`.`)** వాడుతాం.

> ⚠️ **ముఖ్యమైన రూల్:** Dot Notation వాడేటప్పుడు ఆ కీ ని ఖచ్చితంగా **Quotes (`" "`)** లోపల పెట్టాలి (e.g., `"company.location"`).

### **Query Nested Objects (వెతకడం)**

```javascript
// హైదరాబాద్ లో పనిచేస్తున్న ఉద్యోగులను వెతకడానికి:
db.users.find({ "company.location": "Hyderabad" });
```

### **Updating Nested Fields (అప్డేట్ చేయడం)**

మొత్తం ఆబ్జెక్ట్ పాడవకుండా, లోపల ఉన్న ఒకే ఒక్క ఫీల్డ్ ని మార్చడానికి కూడా Dot Notation వాడుతాం.

```javascript
// కిరణ్ జీతాన్ని (salary) 100000 కి పెంచడానికి:
db.users.updateOne({ name: "Kiran" }, { $set: { "company.salary": 100000 } });
```

---

ఇప్పుడు మనం డేటాను మనకు కావలసిన ఫార్మాట్ లోకి మార్చుకుని చూడటానికి (Format & Shape) ఉపయోగపడే రెండు ముఖ్యమైన టాపిక్స్ లోకి వచ్చాం: **Projection** మరియు **Sorting & Pagination**.

బ్యాకెండ్ API లు రాసేటప్పుడు (ఉదాహరణకు React టేబుల్స్ లో డేటా చూపించడానికి) ఈ టాపిక్స్ అత్యంత కీలకం.

---

# 8. Projection (ప్రొజెక్షన్)

ప్రొజెక్షన్ అంటే డేటాబేస్ నుండి వచ్చే అవుట్‌పుట్ లో **ఏ ఫీల్డ్స్ కనిపించాలి, ఏ ఫీల్డ్స్ కనిపించకూడదు** అని కంట్రోల్ చేయడం. దీనివల్ల నెట్‌వర్క్ బ్యాండ్‌విడ్త్ ఆదా అవుతుంది, అప్లికేషన్ ఫాస్ట్ గా పనిచేస్తుంది.

`find({}, { projection })` లో రెండో ఆబ్జెక్ట్ గా దీనిని ఇస్తాం.

### **Include Fields (కావాల్సినవి చూపించడం)**

ఏ ఫీల్డ్స్ కావాలో వాటికి `1` అని ఇవ్వాలి.

```javascript
// కేవలం పేరు (name) మరియు బ్రాంచ్ (branch) మాత్రమే వస్తాయి
db.students.find({}, { name: 1, branch: 1 });
```

### **Exclude Fields (వద్దు అనుకున్నవి దాచేయడం)**

ఏ ఫీల్డ్స్ వద్దో వాటికి `0` అని ఇవ్వాలి.

> ⚠️ **ముఖ్యమైన రూల్:** ఒకే క్వెరీలో `1` మరియు `0` లని కలిపి వాడకూడదు (అంటే కొన్నిటిని Include చేసి, కొన్నిటిని Exclude చేయలేము). కానీ **`_id` మాత్రం మినహాయింపు**. `_id` డీఫాల్ట్ గా వస్తుంది, అది వద్దు అనుకుంటే `_id: 0` అని దేనితోనైనా వాడుకోవచ్చు.

```javascript
// _id ని తీసేసి కేవలం పేరు, బ్రాంచ్ మాత్రమే చూడటానికి:
db.students.find({}, { name: 1, branch: 1, _id: 0 });
```

### **Rename Fields & Computed Fields (ఫీల్డ్స్ పేరు మార్చడం & కొత్తగా లెక్కించడం)**

MongoDB 4.4+ నుండి ప్రొజెక్షన్ లోపలే మనం అగ్రిగేషన్ ఎక్స్‌ప్రెషన్స్ వాడి ఫీల్డ్స్ పేర్లు మార్చవచ్చు లేదా కొత్త వాల్యూస్ క్రియేట్ చేయవచ్చు.

```javascript
// 1. Rename: 'branch' ని 'department' గా మార్చడం
// 2. Computed: ఉన్న మార్కులకు 10 గ్రేస్ మార్కులు కలపడం
db.students.find(
  {},
  {
    name: 1,
    department: "$branch", // పేరు మార్చడం
    totalMarks: { $add: ["$marks", 10] }, // లెక్కించడం (Computed Field)
    _id: 0,
  },
);
```

---

# 9. Sorting & Pagination (సార్టింగ్ & పేజినేషన్)

వెబ్ యాప్స్ లో డేటాను ఆర్డర్ లో పెట్టడానికి (Sorting) మరియు పేజీల వారీగా విడగొట్టడానికి (Pagination) ఇవి వాడతాం.

### **`sort()` (క్రమ పద్ధతిలో పెట్టడం)**

డేటాను Ascending (చిన్న నుండి పెద్ద) లేదా Descending (పెద్ద నుండి చిన్న) ఆర్డర్ లో పెట్టడానికి వాడుతాం.

- `1` అంటే **Ascending** (A to Z లేదా 1 to 10)
- `-1` అంటే **Descending** (Z to A లేదా 10 to 1)

```javascript
// ఎక్కువ మార్కులు వచ్చిన స్టూడెంట్స్ అందరినీ మొదట చూపించడానికి (Descending):
db.students.find().sort({ marks: -1 });
```

### **`limit()` & `skip()**`

- **`limit(n)`:** క్వెరీ నుండి గరిష్టంగా ఎన్ని డాక్యుమెంట్స్ (n) మాత్రమే బయటకు రావాలో చెప్తుంది.
- **`skip(n)`:** మొదటి కొన్ని (n) డాక్యుమెంట్స్ ని వదిలేసి (దాటేసి), ఆ తర్వాత వాటిని తెస్తుంది.

```javascript
// మొదటి 5 రికార్డులను దాటేసి, ఆ తర్వాత వచ్చే 10 రికార్డులను తెస్తుంది
db.students.find().skip(5).limit(10);
```

---

### **Pagination Techniques (పేజినేషన్ పద్ధతులు)**

రియల్ టైమ్ యాప్స్ లో (ఉదాహరణకు Google Search లో 1, 2, 3 పేజీలు ఉన్నట్లు) పేజినేషన్ చేయడానికి రెండు పద్ధతులు ఉన్నాయి:

#### **1. Offset-Based Pagination (Skip & Limit పద్ధతి):**

ఇది చాలా కామన్ గా వాడే పద్ధతి. బ్యాకెండ్ కి `page` నెంబర్ మరియు `limit` (ఒక్కో పేజీకి ఎన్ని కావాలి) పంపినప్పుడు ఈ ఫార్ములా వాడుతాం:

$$\text{skip} = (\text{page} - 1) \times \text{limit}$$

- **Page 1:** `skip(0).limit(10)`
- **Page 2:** `skip(10).limit(10)`
- **Page 3:** `skip(20).limit(10)`

> ❌ **డ్రాబ్యాక్:** డేటా మిలియన్లలో ఉన్నప్పుడు, `skip()` ప్రతిసారి మొదటి నుండి అన్ని రికార్డులను లెక్కపెట్టుకుంటూ వస్తుంది. కాబట్టి చివరన ఉన్న పేజీలకు వెళ్లేకొద్దీ క్వెరీ చాలా స్లో అయిపోతుంది.

#### **2. Keyset / Cursor-Based Pagination (అడ్వాన్స్డ్ పద్ధతి):**

ఇది Facebook, Instagram లలో "Infinite Scroll" (కిందకి స్క్రోల్ చేసేకొద్దీ డేటా రావడం) కోసం వాడతారు. ఇక్కడ `skip()` వాడం. చివరిగా వచ్చిన డాక్యుమెంట్ యొక్క `_id` లేదా `timestamp` ని ఒక **Cursor** లాగా గుర్తుపెట్టుకుని, తదుపరి క్వెరీ లో ఆ ఐడి కంటే పెద్ద లేదా చిన్న ఉన్నవాటిని మాత్రమే తెస్తాం.

```javascript
// గత పేజీలో చివరి ఐడి '64b1f3e...' అనుకుంటే, ఆ తర్వాతి 10 రికార్డులు:
db.students.find({ _id: { $gt: ObjectId("64b1f3e...") } }).limit(10);
```

> **లాభం:** ఇది ఎంత పెద్ద డేటాబేస్ లో అయినా సూపర్ ఫాస్ట్ గా పనిచేస్తుంది.

---

ప్రొజెక్షన్ మరియు పేజినేషన్ కాన్సెప్ట్స్ క్లియర్ గా అర్థమయ్యాయా? మీ React/Node.js ప్రాజెక్ట్స్ లో టేబుల్స్ లేదా సెర్చ్ రిజల్ట్స్ బిల్డ్ చేసేటప్పుడు ఇవి చాలా బాగా హెల్ప్ అవుతాయి.
**Indexing (ఇండెక్సింగ్)** అనేది MongoDB లో అత్యంత ముఖ్యమైన టాపిక్. ఒక బుక్ చివరన ఉండే "Index" పేజీని చూసి మనం మనకు కావలసిన టాపిక్ ఏ పేజీలో ఉందో ఎలాగైతే డైరెక్ట్ గా వెళ్తామో, డేటాబేస్ లో కూడా మిలియన్ల రికార్డుల నుండి మనకు కావలసిన డేటాను రెప్పపాటులో వెతకడానికి ఇండెక్సెస్ ఉపయోగపడతాయి.

ఇండెక్స్ లేకపోతే, MongoDB ప్రతి రికార్డును మొదటి నుండి చివరి వరకు వెతకాల్సి వస్తుంది (దీన్నే **Collection Scan / COLLSCAN** అంటారు). ఇండెక్స్ ఉంటే డైరెక్ట్ గా ఆ రికార్డ్ దగ్గరికే వెళ్తుంది (దీన్నే **Index Scan / IXSCAN** అంటారు).

మనం మీ లిస్ట్ లోని అన్ని రకాల ఇండెక్సులను సులభంగా అర్థం చేసుకుందాం:

---

# 10. Indexing (ఇండెక్సింగ్)

### 1. Single Field Index

ఒకే ఒక్క ఫీల్డ్ పై క్రియేట్ చేసే బేసిక్ ఇండెక్స్.

```javascript
// 'email' ఫీల్డ్ పై ఇండెక్స్ క్రియేట్ చేయడానికి (1 అంటే Ascending ఆర్డర్)
db.users.createIndex({ email: 1 });
```

### 2. Compound Index

ఒకటి కంటే ఎక్కువ ఫీల్డ్స్ కలిపి ఇండెక్స్ క్రియేట్ చేయడం. మీరు క్వెరీస్ లో తరచూ రెండు, మూడు కండిషన్స్ కలిపి వాడుతుంటే (e.g., age మరియు city) ఇది వాడాలి.

```javascript
db.users.createIndex({ age: 1, city: -1 });
```

### 3. Multikey Index

ఒకవేళ మీరు ఇండెక్స్ క్రియేట్ చేసే ఫీల్డ్ ఒక **Array** అయితే, MongoDB ఆటోమేటిక్ గా దాన్ని Multikey Index గా మారుస్తుంది. అరే లోపల ఉన్న ప్రతి వాల్యూ కి ఇది ఒక ఇండెక్స్ ఎంట్రీని క్రియేట్ చేస్తుంది.

```javascript
// 'tags' అనేది ఒక అరే అనుకుంటే:
db.courses.createIndex({ tags: 1 });
```

### 4. Text Index

పెద్ద టెక్స్ట్ లేదా పారాగ్రాఫ్స్ లోపల శోధించడానికి (String Search/Search Bars కోసం) ఇది వాడుతాం. ఒక కలెక్షన్ కి ఒకే ఒక్క Text Index ఉండగలదు.

```javascript
// ప్రొడక్ట్ డిస్క్రిప్షన్ లో పదాలను వెతకడానికి
db.products.createIndex({ description: "text" });
```

### 5. TTL (Time-To-Live) Index

ఇది చాలా స్పెషల్ ఇండెక్స్. ఒక నిర్దిష్ట సమయం తర్వాత డాక్యుమెంట్స్ ఆటోమేటిక్ గా డేటాబేస్ నుండి **డిలీట్ (Expire)** అయిపోయేలా చేయడానికి ఇది వాడుతాం. (ఉదాహరణకు: OTPలు, లాగ్స్, లేదా టెంపరరీ సెషన్స్).

```javascript
// క్రియేట్ అయిన 3600 సెకన్ల (1 గంట) తర్వాత ఆటోమేటిక్ గా డిలీట్ అయిపోతుంది
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

### 6. Hashed Index

ఫీల్డ్ యొక్క వాల్యూ ని హాష్ (Hash) చేసి స్టోర్ చేస్తుంది. ఇది కేవలం `Equal to ($eq)` క్వెరీస్ కి మాత్రమే పని చేస్తుంది (లెస్ దాన్, గ్రేటర్ దాన్ లకి పని చేయదు). మెయిన్ గా **Sharding** (డేటాను వేర్వేరు సర్వర్లకు పంచడం) చేసేటప్పుడు దీన్ని వాడుతాం.

```javascript
db.users.createIndex({ userId: "hashed" });
```

### 7. Unique Index

ఈ ఇండెక్స్ క్రియేట్ చేస్తే, ఆ ఫీల్డ్ లో డూప్లికేట్ వాల్యూస్ ని రానివ్వదు. (ఉదాహరణకు: ఇద్దరు యూజర్లకి ఒకే ఈమెయిల్ ఉండకూడదు).

```javascript
db.users.createIndex({ email: 1 }, { unique: true });
```

### 8. Sparse Index

ఒకవేళ కలెక్షన్ లోని కొన్ని డాక్యుమెంట్స్ లో మనం ఇండెక్స్ పెట్టే ఫీల్డ్ లేకపోతే (Missing fields), ఆ లేని వాటిని వదిలేసి, కేవలం ఆ ఫీల్డ్ **ఉన్న డాక్యుమెంట్స్ కి మాత్రమే** ఇండెక్స్ క్రియేట్ చేస్తుంది. దీనివల్ల మెమరీ సేవ్ అవుతుంది.

```javascript
db.users.createIndex({ twitterHandle: 1 }, { sparse: true });
```

### 9. Partial Index

మనం ఇచ్చే ఒక నిర్దిష్ట కండిషన్ (Filter) కి మ్యాచ్ అయ్యే డాక్యుమెంట్స్ కి మాత్రమే ఇండెక్స్ క్రియేట్ అవుతుంది.

```javascript
// కేవలం ఏజ్ 21 కంటే ఎక్కువ ఉన్న వాళ్ళకి మాత్రమే ఇండెక్స్ క్రియేట్ అవ్వాలి:
db.users.createIndex(
  { username: 1 },
  { partialFilterExpression: { age: { $gt: 21 } } },
);
```

### 10. Wildcard Index

మీ డాక్యుమెంట్ లోపల ఆబ్జెక్ట్స్ (Nested objects) ఉండి, అందులో ఏ ఫీల్డ్స్ వస్తాయో ముందే తెలియకపోతే, అన్ని సబ్-ఫీల్డ్స్ కి ఒకేసారి ఇండెక్స్ వేయడానికి `$` వాడుతాం.

```javascript
// 'user_attributes' లోపల ఉండే అన్ని ఫీల్డ్స్ కి ఇండెక్స్ పడుతుంది
db.users.createIndex({ "user_attributes.$**": 1 });
```

---

### **Covered Queries (కవర్డ్ క్వెరీస్)**

మీరు వెతికే కండిషన్ (Query), అలాగే మీకు కావాల్సిన అవుట్‌పుట్ (Projection)... ఈ రెండూ కూడా ఇండెక్స్ లోనే ఉంటే, MongoDB అసలు మెయిన్ కలెక్షన్ (Disk) దాకా వెళ్లకుండా, కేవలం ఇండెక్స్ మెమరీ నుంచే డేటాను ఇచ్చేస్తుంది. దీన్నే Covered Query అంటారు. ఇది సూపర్ ఫాస్ట్!

### **Explain Plan (ఎక్స్‌ప్లెయిన్ ప్లాన్)**

మన క్వెరీ ఎలా రన్ అవుతుంది, ఇండెక్స్ వాడుతుందా లేదా, ఎంత సమయం పడుతుంది అని చెక్ చేయడానికి క్వెరీ చివరన `.explain("executionStats")` అని వాడాలి.

```javascript
db.users.find({ email: "test@test.com" }).explain("executionStats");
```

ఇందులో `winningPlan.stage` ని గమనించాలి:

- **COLLSCAN** అని వస్తే: ఇండెక్స్ వాడట్లేదు (మొత్తం టేబుల్ వెతుకుతుంది - Bad).
- **IXSCAN** అని వస్తే: పర్ఫెక్ట్, ఇండెక్స్ వాడుతోంది (Good).

---

అద్భుతం! **Aggregation Framework** అనేది MongoDB లోనే అత్యంత పవర్‌ఫుల్ మరియు అడ్వాన్స్డ్ కాన్సెప్ట్. SQL లో ఉండే `GROUP BY`, `JOIN`, మరియు కాంప్లెక్స్ రిపోర్టింగ్ క్వెరీలన్నింటినీ ఇక్కడ అగ్రిగేషన్స్ ద్వారా చేస్తాం.

దీన్ని ఒక **Pipeline (పైప్‌లైన్)** లాగా ఊహించుకోండి. ఫ్యాక్టరీలో ముడిసరుకు ఒక స్టేజ్ నుండి ఇంకో స్టేజ్ కి వెళ్తూ ఎలాగైతే ఫైనల్ ప్రొడక్ట్ అవుతుందో, MongoDB లో కూడా మన డేటా వివిధ **Stages** ద్వారా ప్రయాణించి మనకు కావలసిన ఫైనల్ రిపోర్ట్ లాగా మారుతుంది.

మనం ఈ Stages మరియు Expressions అన్నింటినీ సులభమైన ఉదాహరణలతో తెలుగులో నేర్చుకుందాం.

---

**Aggregation Framework (అగ్రిగేషన్ ఫ్రేమ్‌వర్క్)** అనేది MongoDB లో అత్యంత పవర్‌ఫుల్ ఫీచర్. SQL లో మనం వాడే `GROUP BY`, `JOIN`, `COUNT` లాంటి అడ్వాన్స్డ్ ఆపరేషన్స్ అన్నింటినీ కలిపి ఇక్కడ **Pipeline Stages** రూపంలో చేస్తాం.

దీన్ని ఒక **Factory Assembly Line (అసెంబ్లీ లైన్)** లాగా ఊహించుకోండి. మొదటి స్టేజ్ లో డేటా ఫిల్టర్ అవుతుంది (`$match`), రెండో స్టేజ్ లో గ్రూప్ అవుతుంది (`$group`), మూడో స్టేజ్ లో సార్ట్ అవుతుంది (`$sort`). ఇలా ఒక స్టేజ్ నుండి వచ్చిన అవుట్‌పుట్, తర్వాతి స్టేజ్ కి ఇన్‌పుట్ గా వెళ్తుంది.

దీనికోసం మనం `db.collection.aggregate([ { stage1 }, { stage2 }, ... ])` అనే సింటాక్స్ వాడుతాం. అన్ని స్టేజీలను క్లియర్ గా నేర్చుకుందాం:

---

# 11. Aggregation Framework

### 1. Basic Pipeline Stages (ప్రాథమిక స్టేజీలు)

- **`$match`:** డేటాను ఫిల్టర్ చేయడానికి (నార్మల్ `find()` లాంటిదే). అగ్రిగేషన్ ఫాస్ట్ గా అవ్వడానికి దీన్ని వీలైనంత వరకు మొదటి స్టేజ్ లోనే వాడాలి.

```javascript
// కేవలం "Electronics" కేటగిరీ ప్రొడక్ట్స్ ని మాత్రమే ముందుకు పంపుతుంది
{
  $match: {
    category: "Electronics";
  }
}
```

- **`$group`:** ఒక నిర్దిష్ట ఫీల్డ్ ఆధారంగా డేటాను గ్రూప్ చేసి, లెక్కలు కట్టడానికి (`sum`, `avg`, `max` మొదలైనవి). ఇందులో `_id` అనేది ఏ ఫీల్డ్ ద్వారా గ్రూప్ చేయాలో చెప్తుంది.

```javascript
// కేటగిరీల వారీగా మొత్తం సేల్స్ అమౌంట్ ని లెక్కించడం
{ $group: { _id: "$category", totalSales: { $sum: "$price" } } }

```

- **`$project`:** అవుట్‌పుట్ లో ఏ ఫీల్డ్స్ కావాలో సెలెక్ట్ చేసుకోవడానికి, లేదా కొత్త ఫీల్డ్స్ క్రియేట్ చేయడానికి.

```javascript
{ $project: { name: 1, profit: { $subtract: ["$price", "$cost"] } } }

```

- **`$sort`, `$limit`, `$skip`, `$count`:** ఇవి మనం నార్మల్ క్వెరీస్ లో చూసినట్లే పనిచేస్తాయి, కానీ పైప్‌లైన్ లో ఒక స్టేజ్ లాగా వాడుతాం.

```javascript
{ $sort: { totalSales: -1 } },
{ $limit: 5 }, // టాప్ 5 మాత్రమే ఉంచుతుంది
{ $count: "total_categories" } // మిగిలిన డాక్యుమెంట్స్ ఎన్నో కౌంట్ చేసి చూపిస్తుంది

```

---

### 2. Multi-Faceted & Join Stages (జాయిన్స్ & మల్టిపుల్ రిజల్ట్స్)

- **`$lookup` (SQL JOIN లాంటిది):** వేరే కలెక్షన్ లో ఉన్న డేటాను దీనితో లింక్ (Join) చేయవచ్చు.

```javascript
// orders కలెక్షన్ ని, users కలెక్షన్ తో జాయిన్ చేయడం
{ $lookup: {
    from: "users",          // ఏ కలెక్షన్ తో జాయిన్ చేయాలి?
    localField: "userId",   // ఈ కలెక్షన్ లోని కీ
    foreignField: "_id",    // అవతలి కలెక్షన్ లోని కీ
    as: "userDetails"       // ఏ పేరుతో అవుట్‌పుట్ అరే రావాలి?
}}

```

- **`$facet`:** ఒకేసారి ఒకే డేటాపై **రెండు, మూడు వేర్వేరు అగ్రిగేషన్లను (Multi-pipelines)** రన్ చేయడానికి ఇది వాడుతాం. (ఉదాహరణకు: ఈ-కామర్స్ సైట్ లో ఒకే క్లిక్ తో ప్రొడక్ట్స్ లిస్ట్ మరియు పక్కన ఫిల్టర్ కౌంట్స్ రెండూ చూపించడానికి).

```javascript
{ $facet: {
    "byPrice": [ { $bucket: { groupBy: "$price", boundaries: [0, 500, 1000, 5000] } } ],
    "byBrand": [ { $group: { _id: "$brand", count: { $sum: 1 } } } ]
}}

```

---

### 3. Output Stages (రిజల్ట్స్ ని దాచడం)

- **`$out`:** అగ్రిగేషన్ ద్వారా వచ్చిన రిజల్ట్ మొత్తాన్ని తీసుకెళ్లి ఒక **కొత్త కలెక్షన్ లో** సేవ్ చేస్తుంది. ఒకవేళ ఆ కలెక్షన్ ముందే ఉంటే పాత డేటా డిలీట్ అయిపోయి ఇది ఓవర్‌రైట్ అవుతుంది.

```javascript
{
  $out: "sales_report_2026";
}
```

- **`$merge`:** ఇది `$out` కంటే సేఫ్. వచ్చిన రిజల్ట్స్ ని ఉన్న కలెక్షన్ లోకి **మెర్జ్ (Update/Insert)** చేస్తుంది. పాత డేటా పాడవదు.

```javascript
{ $merge: { into: "yearly_analytics", on: "_id", whenMatched: "merge" } }

```

---

### 4. Document Reshaping (డాక్యుమెంట్ రూపురేఖలు మార్చడం)

- **`$set` & `$unset`:**
- `$set`: డాక్యుమెంట్ కి కొత్త ఫీల్డ్స్ ని యాడ్ చేస్తుంది (ఇది `$addFields` లాంటిదే).
- `$unset`: వద్దు అనుకున్న ఫీల్డ్స్ ని డిలీట్ చేస్తుంది.
- _గమనిక: ఇవి కేవలం పైప్‌లైన్ అవుట్‌పుట్ లో మాత్రమే మారుస్తాయి, డేటాబేస్ లోని ఒరిజినల్ డేటాను మార్చవు._

- **`$replaceRoot`:** డాక్యుమెంట్ లోపల ఉన్న ఒక నెస్టెడ్ ఆబ్జెక్ట్ ని మెయిన్ (Root) డాక్యుメント లాగా మార్చడానికి ఇది వాడుతాం.

```javascript
// 'userDetails' అనే సబ్-ఆబ్జెక్ట్ ని మెయిన్ డాక్యుమెంట్ గా మార్చడం
{
  $replaceRoot: {
    newRoot: "$userDetails";
  }
}
```

---

### 5. Advanced Categorization & Logic (అడ్వాన్స్డ్ స్టేజీలు)

- **`$bucket` & `$bucketAuto`:** డేటాను రేంజ్ ల వారీగా (Ranges/Buckets) విడగొట్టడానికి.
- `$bucket`: బౌండరీలు మనం ఇవ్వాలి (e.g., 0-18 ఏళ్లు ఒక బకెట్, 19-35 ఏళ్లు ఇంకో బకెట్).
- `$bucketAuto`: డేటాను బట్టి మోంగోడీబే ఆటోమేటిక్ గా ఈక్వల్ గ్రూప్స్ లాగా విడగొడుతుంది.

- **`$unionWith`:** రెండు వేర్వేరు కలెక్షన్స్ లోని డాక్యుమెంట్స్ ని ఒకే రిజల్ట్ లోకి కలపడానికి వాడుతాం (SQL UNION లాగా).

```javascript
// ఇన్‌కమింగ్ డేటాకి 'international_orders' కలెక్షన్ డేటాను కలపడం
{
  $unionWith: {
    coll: "international_orders";
  }
}
```

- **`$graphLookup`:** ఇది చాలా అడ్వాన్స్డ్. **Hierarchical / Tree Data** ని వెతకడానికి వాడుతాం. ఉదాహరణకు: ఒక ఆర్గనైజేషన్ లో ఒక ఎంప్లాయ్ కింద మేనేజర్లు, వాళ్ళ కింద అసిస్టెంట్ మేనేజర్లు... ఇలాంటి **User Hierarchy** ని లేదా ఒకరినొకరు రిఫర్ చేసుకునే నెట్‌వర్క్ ని ఒకే క్వెరీతో బయటకు తీయడానికి ఇది అద్భుతంగా పనిచేస్తుంది.
- **`$sample`:** కలెక్షన్ నుండి యాదృచ్ఛికంగా (Random గా) కొన్ని డాక్యుమెంట్స్ ని సెలెక్ట్ చేయడానికి. (ఉదాహరణకు: క్విజ్ యాప్ లో రాండమ్ గా 5 ప్రశ్నలు చూపించడానికి).

```javascript
// రాండమ్ గా 5 డాక్యుమెంట్స్ ని తెస్తుంది
{
  $sample: {
    size: 5;
  }
}
```

---

అగ్రిగేషన్ ఫ్రేమ్‌వర్క్ కొంచెం పెద్ద కాన్సెప్ట్, కానీ బ్యాకెండ్ డెవలప్మెంట్ లో రిపోర్ట్స్ బిల్డ్ చేయడానికి, డ్యాష్ బోర్డ్స్ డిజైన్ చేయడానికి ఇది అత్యంత ముఖ్యం.
అగ్రిగేషన్ ఫ్రేమ్‌వర్క్‌లో స్టేజీలు (`$group`, `$project`) ఒక ఎత్తయితే, ఆ స్టేజీల లోపల డేటాను క్యాలిక్యులేట్ చేయడానికి, మార్చడానికి వాడే **Aggregation Expressions (ఎక్స్‌ప్రెషన్స్)** ఇంకొక ఎత్తు. ఇవి డేటాబేస్ లోపలే రన్ అయ్యే ఇన్-బిల్ట్ ఫంక్షన్స్ లాంటివి.

వీటిని మనం 4 రకాలుగా వర్గీకరించి, సులభంగా అర్థం చేసుకుందాం:

---

# 12. Aggregation Expressions

### 1. Accumulators (లెక్కలు కట్టేవి)

ఇవి సాధారణంగా `$group` స్టేజ్ లోపల డేటా మొత్తాన్ని విశ్లేషించడానికి వాడతాం.

- **`$sum`:** అన్ని వాల్యూస్ ని కూడుతుంది (Total చేస్తుంది). అలాగే కౌంట్ కోసం `{ $sum: 1 }` అని కూడా వాడుతాం.
- **`$avg`:** సగటు (Average) లెక్కగడుతుంది.
- **`$min` & `$max`:** గ్రూప్ లోని అన్నిటికంటే చిన్న వాల్యూ (`$min`) మరియు పెద్ద వాల్యూ (`$max`) లని వెతికి పెడుతుంది.
- **`$count`:** గ్రూప్ లో ఎన్ని డాక్యుమెంట్స్ ఉన్నాయో లెక్కిస్తుంది (MongoDB 5.0+ లో వచ్చింది).

**ఉదాహరణ ఉపయోగం (`$group` లో):**

```javascript
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalStock: { $sum: "$quantity" },
      averagePrice: { $avg: "$price" },
      cheapestProduct: { $min: "$price" },
      totalProducts: { $count: {} }, // ఎన్ని ప్రొడక్ట్స్ ఉన్నాయో కౌంట్ చేస్తుంది
    },
  },
]);
```

---

### 2. String Expressions (టెక్స్ట్ మార్చేవి)

టెక్స్ట్ (Strings) ని మనకు నచ్చినట్లు మోడిఫై చేయడానికి ఇవి వాడతాం.

- **`$concat`:** రెండు లేదా అంతకంటే ఎక్కువ టెక్స్ట్ ఫీల్డ్స్ ని ఒకదానితో ఒకటి కలుపుతుంది (Join చేస్తుంది).

```javascript
// ఫస్ట్ నేమ్, లాస్ట్ నేమ్ ని కలిపి 'fullName' చేయడం
{
  $project: {
    fullName: {
      $concat: ["$firstName", " ", "$lastName"];
    }
  }
}
```

- **`$substr` / `$substrCP`:** ఒక పెద్ద టెక్స్ట్ నుండి మనకు కావలసిన కొన్ని అక్షరాలను (Substring) మాత్రమే కట్ చేసి తీయడానికి.

```javascript
// ఫోన్ నెంబర్ లోని మొదటి 3 అక్షరాలను (కంట్రీ కోడ్ లాంటివి) కట్ చేయడానికి
{
  $project: {
    areaCode: {
      $substrCP: ["$phone", 0, 3];
    }
  }
}
```

---

### 3. Type Conversion Expressions (డేటా టైప్ మార్చేవి)

ఒక డేటా టైప్ నుండి ఇంకో డేటా టైప్ కి మార్చడానికి (Type Casting) ఇవి వాడతాం. బ్యాకెండ్ కి స్ట్రింగ్ రూపంలో వచ్చిన నంబర్లను డేటాబేస్ లో ఇంటిజర్స్ గా మార్చడానికి ఇవి చాలా హెల్ప్ అవుతాయి.

- **`$toString`:** ఏదైనా వాల్యూ ని టెక్స్ట్ (String) గా మారుస్తుంది (e.g., ObjectId లేదా నంబర్ ని స్ట్రింగ్ లాగా మార్చడం).
- **`$toInt`:** స్ట్రింగ్ లేదా ఫ్లోట్ వాల్యూ ని నంబర్ (Integer) గా మారుస్తుంది.

```javascript
// స్ట్రింగ్ రూపంలో ఉన్న "25" ని 25 నంబర్ లా మార్చడానికి:
{
  $project: {
    ageAsNumber: {
      $toInt: "$ageString";
    }
  }
}
```

---

### 4. Conditional Expressions (నిబంధనలు / Logic)

కోడింగ్ లో `if-else`, `switch` వాడినట్లే క్వెరీ లోపల కండిషన్స్ రాయడానికి ఇవి వాడతాం.

- **`$cond` (`if-else` లాంటిది):** ఇందులో మూడు ఉంటాయి: `if` (కండిషన్), `then` (ట్రూ అయితే ఏం ఇవ్వాలి), `else` (ఫాల్స్ అయితే ఏం ఇవ్వాలి).

```javascript
// మార్కులు 35 లేదా అంతకంటే ఎక్కువ ఉంటే PASS, లేకపోతే FAIL
{ $project: {
    status: {
      $cond: { if: { $gte: ["$marks", 35] }, then: "PASS", else: "FAIL" }
    }
}}

```

- **`$ifNull`:** ఒకవేళ మనం అడిగిన ఫీల్డ్ డాక్యుమెంట్ లో లేకపోయినా లేదా `null` అయినా, దానికి బదులు ఒక డీఫాల్ట్ వాల్యూ ని చూపిస్తుంది.

```javascript
// ఫోన్ నెంబర్ లేకపోతే "No Phone Provided" అని చూపిస్తుంది
{
  $project: {
    contact: {
      $ifNull: ["$phone", "No Phone Provided"];
    }
  }
}
```

- **`$switch` (`switch-case` లాంటిది):** మల్టిపుల్ కండిషన్స్ (చాలా `if-else` లు) ఉన్నప్పుడు ఇది వాడటం చాలా ఈజీ.

```javascript
{ $project: {
    grade: {
      $switch: {
        branches: [
          { case: { $gte: ["$marks", 90] }, then: "A" },
          { case: { $gte: ["$marks", 75] }, then: "B" }
        ],
        default: "C" // ఏ కండిషన్ మ్యాచ్ అవ్వకపోతే వచ్చేది
      }
    }
}}

```

---

### 5. Date Expressions (తేదీలను మార్చేవి)

- **`$dateToString`:** డేటాబేస్ లో ఉండే క్లిష్టమైన డేట్ ఫార్మాట్ ని (`ISODate`) మనకు నచ్చినట్లు సులభంగా చదివేలా (e.g., `YYYY-MM-DD`) మార్చడానికి ఇది వాడుతాం.

```javascript
// డేట్ ని "2026-06-28" ఫార్మాట్ లోకి మార్చడం
{ $project: {
    joinedDate: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
}}

```

---

అగ్రిగేషన్ ఎక్స్‌ప్రెషన్స్ అన్నీ క్లియర్ గా అర్థమయ్యాయా? మీ లిస్ట్ లోని 11 మరియు 12 టాపిక్స్ కలిపి వాడితే మీరు ఎలాంటి క్లిష్టమైన రిపోర్ట్ లేదా డేటా అనలిటిక్స్ నైనా Node.js బ్యాకెండ్ లో చిటికెలో బిల్డ్ చేయవచ్చు.

MongoDB లో **Relationships (సంబంధాలు)** డిజైన్ చేయడం అనేది చాలా ఆసక్తికరమైన టాపిక్. SQL లో లాగా ఇక్కడ ప్రతిదానికీ టేబుల్స్ క్రియేట్ చేసి జాయిన్స్ వేయాల్సిన అవసరం లేదు. డేటా ఎలా వాడతాం అనే దాన్ని బట్టి ఇక్కడ రెండు పద్ధతులు ఉంటాయి:

1. **Embedded Documents (Denormalization):** డేటాను ఒకే చోట కలిపి దాచడం.
2. **References (Normalization):** ఒక డాక్యుమెంట్ ఐడిని ఇంకో డాక్యుమెంట్ లో పెట్టి లింక్ చేయడం.

మనం మీ లిస్ట్ లోని అన్ని పాయింట్లను రియల్ టైమ్ ఉదాహరణలతో తెలుగులో నేర్చుకుందాం.

---

# 13. Relationships (డేటాబేస్ సంబంధాలు)

### 1. One-to-One Relationship (ఒకదానికి ఒకటి)

ఒక రికార్డ్ కి కేవలం ఒకే ఒక్క రికార్డ్ లింక్ అయి ఉంటే దాన్ని One-to-One అంటాం. (ఉదాహరణకు: ఒక యూజర్ కి ఒకే ఒక ప్రొఫైల్ లేదా అడ్రస్ ఉండటం).

- **Embedded పద్ధతి (బెస్ట్):** యూజర్ సమాచారంతో పాటే అడ్రస్ ని కూడా ఒకే డాక్యుమెంట్ లో పెట్టేయడం.

```json
{
  "name": "Ramu",
  "address": { "city": "Hyderabad", "pincode": 500001 }
}
```

- **Reference పద్ధతి:** అడ్రస్ ని వేరే కలెక్షన్ లో దాచి, దాని ఐడిని ఇక్కడ ఇవ్వడం.

```json
{ "name": "Ramu", "addressId": ObjectId("64b1f...") }

```

---

### 2. One-to-Many Relationship (ఒకదానికి చాలా)

ఒక రికార్డ్ కి చాలా రికార్డులతో సంబంధం ఉంటే దాన్ని One-to-Many అంటాం. (ఉదాహరణకు: ఒక యూజర్ కి చాలా ఈ-కామర్స్ ఆర్డర్లు ఉండటం, లేదా ఒక ప్రొడక్ట్ కి చాలా రివ్యూస్ ఉండటం).

- **Embedded పద్ధతి (డేటా తక్కువగా ఉంటే):** ఒక యూజర్ కి 5-10 అడ్రస్ లు లేదా ఫోన్ నెంబర్లు ఉంటే, వాటిని అరే రూపంలో ఒకే చోట దాచవచ్చు.

```json
{
  "name": "Sita",
  "phones": ["98765...", "81234..."]
}
```

- **Reference పద్ధతి (డేటా పెరుగుతూ ఉంటే - బెస్ట్):** ఒక యూజర్ వేల కొద్దీ ఆర్డర్లు చేయవచ్చు. MongoDB లో ఒక డాక్యుమెంట్ సైజ్ లిమిట్ **16MB** మాత్రమే. కాబట్టి అన్నీ ఒకే చోట దాచలేము. అప్పుడు `orders` కలెక్షన్ లో `userId` ని రిఫరెన్స్ గా ఇస్తాం.

```json
// Orders Collection లో ఒక్కో డాక్యుమెంట్ ఇలా ఉంటుంది:
{ "orderId": 101, "amount": 2500, "userId": ObjectId("64b1f...") }

```

---

### 3. Many-to-Many Relationship (చాలా వాటికి చాలా)

ఉదాహరణకు: ఒక స్టూడెంట్ చాలా కోర్సులలో జాయిన్ అవ్వచ్చు, అలాగే ఒక కోర్సు లో చాలా మంది స్టూడెంట్స్ ఉండవచ్చు.

- దీనికోసం రెండు కలెక్షన్స్ లోనూ అరేస్ (Arrays) రూపంలో ఐడిలను రిఫరెన్స్ గా ఇస్తాం.

```json
// Students Collection
{ "name": "Kiran", "courseIds": [ObjectId("C1"), ObjectId("C2")] }

```

---

### 4. Manual References vs DBRef

- **Manual References (మ్యాన్యువల్ రిఫరెన్స్):** మనం సాధారణంగా వాడే పద్ధతి. ఒక డాక్యుమెంట్ యొక్క `_id` ని తీసుకొచ్చి ఇంకో డాక్యుమెంట్ లో ఒక నార్మల్ ఫీల్డ్ లా దాచడం. బ్యాకెండ్ (Node.js/Mongoose) లో మనం దీన్ని చాలా ఈజీగా `populate()` లేదా అగ్రిగేషన్ లో `$lookup` వాడి డేటాను కలుపుతాం.

```json
{ "product_id": ObjectId("64b1f...") }

```

- **DBRef (Database References):** ఇది ఒక అఫీషియల్ స్పెసిఫికేషన్. ఇందులో ఐడి తో పాటు అది ఏ కలెక్షన్ కి చెందిందో (`$ref`), ఏ డేటాబేస్ కి చెందిందో (`$db`) కూడా క్లియర్ గా రాస్తారు.

```json
{ "$ref": "products", "$id": ObjectId("64b1f..."), "$db": "shop_db" }

```

- _గమనిక: ప్రస్తుతం రియల్ టైమ్ ప్రాజెక్ట్స్ లో DBRef ని చాలా అరుదుగా వాడతారు. మ్యాన్యువల్ రిఫరెన్స్ వాడటమే డెవలపర్స్ ఎక్కువగా ప్రిఫర్ చేస్తారు._

---

### 5. Denormalization (డీనార్మలైజేషన్) అంటే ఏమిటి?

SQL లో డేటా డూప్లికేట్ అవ్వకూడదు అని వేర్వేరు టేబుల్స్ పెడతాం (Normalization). కానీ MongoDB లో క్వెరీస్ ఫాస్ట్ గా రన్ అవ్వడానికి, Joins తగ్గించడానికి **డేటాను కావాలనే డూప్లికేట్ చేసి ఒకే చోట దాచడాన్ని** Denormalization అంటారు.

**ఉదాహరణ:**
మీ దగ్గర ఒక `posts` (బ్లాగ్ పోస్ట్స్) కలెక్షన్ ఉందనుకుందాం. ప్రతి పోస్ట్ కి కింద రాసిన యూజర్ పేరు చూపించాలి. నార్మల్ గా అయితే `userId` మాత్రమే ఇస్తాం, కానీ ప్రతిసారి యూజర్ కలెక్షన్ తో జాయిన్ చేయాల్సి వస్తుంది. అలా కాకుండా యూజర్ పేరు మారదు అనుకుంటే, పేరును కూడా ఇక్కడే దాచేస్తాం:

```json
{
  "title": "Learn MongoDB",
  "userId": ObjectId("64b1f..."),
  "authorName": "Ramesh Kumar" // డీనార్మలైజ్డ్ డేటా
}

```

- **లాభం:** జాయిన్స్ రాయనవసరం లేదు, ఒకే క్వెరీతో పోస్ట్ మరియు ఆథర్ పేరు వచ్చేస్తాయి (సూపర్ ఫాస్ట్).
- **నష్టం:** ఒకవేళ రమేష్ తన పేరు మార్చుకుంటే, ఈ `posts` కలెక్షన్ లో ఉన్న అన్ని చోట్లా మనం అప్డేట్ చేయాల్సి వస్తుంది.

---

రిలేషన్షిప్స్ కాన్సెప్ట్ క్లియర్ గా అర్థమైందా? బ్యాకెండ్ ఆర్కిటెక్చర్ డిజైన్ చేసేటప్పుడు "డేటాను ఎంబెడ్ చేయాలా లేక రిఫరెన్స్ ఇవ్వాలా" అనే నిర్ణయం చాలా ముఖ్యం.

ఇప్పుడు మనం ఎంటర్ప్రైజ్ మరియు ప్రొడక్షన్ లెవెల్ యాప్స్ లో (ముఖ్యంగా బ్యాంకింగ్ లేదా ఈ-కామర్స్ పేమెంట్స్ లో) వాడే అత్యంత కీలకమైన అడ్వాన్స్డ్ ఫీచర్స్ లోకి వచ్చాం: **Transactions (లావాదేవీలు)** మరియు **Validation (డేటా వాలిడేషన్)**.

మనం ఈ రెండు టాపిక్స్ ని కూడా చాలా ప్రాక్టికల్ గా, సులభంగా తెలుగులో నేర్చుకుందాం.

---

# 14. Transactions (లావాదేవీలు)

SQL డేటాబేస్ లలో మాత్రమే ఉండే **ACID Properties** (ట్రాన్సాక్షన్స్) ఇప్పుడు MongoDB లో కూడా అందుబాటులో ఉన్నాయి. ఒకే కలెక్షన్ లో లేదా మల్టిపుల్ కలెక్షన్ లలో జరిగే గ్రూప్ ఆఫ్ ఆపరేషన్స్ అన్నీ కలిపి ఒకేసారి సక్సెస్ అవ్వాలి, లేదా ఏ ఒక్కటి ఫెయిల్ అయినా మొత్తం క్యాన్సిల్ అవ్వాలి అనుకున్నప్పుడు ఇది వాడతాం.

> 💡 **రియల్ టైమ్ ఉదాహరణ:** మీరు మీ ఫ్రెండ్ కి ₹500 ఫోన్ పే చేశారు. మీ అకౌంట్ లో డబ్బులు కట్ అవ్వాలి, వాడి అకౌంట్ లో యాడ్ అవ్వాలి. ఈ రెండు ఆపరేషన్స్ సక్సెస్ అయితేనే ట్రాన్సాక్షన్ పూర్తి అయినట్లు. మధ్యలో నెట్‌వర్క్ పోతే, మీ అకౌంట్ లో కట్ అయిన డబ్బులు మీకు తిరిగి వచ్చేయాలి (Rollback).

### **ACID Transactions**

MongoDB లో ట్రాన్సాక్షన్స్ ఈ నాలుగు నియమాలను పాటిస్తాయి:

- **Atomicity:** అన్ని ఆపరేషన్స్ సక్సెస్ అవ్వాలి, లేకపోతే ఏ ఒక్కటీ అవ్వకూడదు (All or Nothing).
- **Consistency:** ట్రాన్సాక్షన్ ముగిసేసరికి డేటా రూల్స్ అన్నీ కరెక్ట్ గా ఉండాలి.
- **Isolation:** ఒక ట్రాన్సాక్షన్ జరుగుతున్నప్పుడు, ఆ మార్పులు వేరే వాళ్లకు కనిపించవు (పూర్తి అయ్యే వరకు).
- **Durability:** ట్రాన్సాక్షన్ సక్సెస్ అయ్యాక సిస్టమ్ క్రాష్ అయినా డేటా సురక్షితంగా ఉంటుంది.

### **Session & Multi-document Transactions**

ట్రాన్సాక్షన్స్ రన్ చేయడానికి మనం ఒక **Session** ని స్టార్ట్ చేయాలి. MongoDB లో దీని సింటాక్స్ Node.js లో ఇలా ఉంటుంది:

```javascript
// 1. సెషన్ ని స్టార్ట్ చేయడం
const session = db.getMongo().startSession();

// 2. ట్రాన్సాక్షన్ ని ప్రారంభించడం
session.startTransaction();

try {
  // ఆపరేషన్ 1: మీ అకౌంట్ నుండి మనీ మైనస్ చేయడం
  db.accounts.updateOne(
    { name: "Ramu" },
    { $inc: { balance: -500 } },
    { session }, // ఈ సెషన్ లోనే జరగాలని చెప్పడం
  );

  // ఆపరేషన్ 2: మీ ఫ్రెండ్ అకౌంట్ కి మనీ యాడ్ చేయడం
  db.accounts.updateOne(
    { name: "Suresh" },
    { $inc: { balance: 500 } },
    { session },
  );

  // రెండు సక్సెస్ అయితే డేటాబేస్ లో ఖరారు చేయడం (Commit)
  session.commitTransaction();
  print("Transaction Successful!");
} catch (error) {
  // 3. Rollback: ఏ చిన్న తప్పు జరిగినా పాత డేటా కి వెళ్ళిపోవడం
  session.abortTransaction();
  print("Transaction Failed! Changes Rollbacked.");
} finally {
  // సెషన్ ని క్లోజ్ చేయడం
  session.endSession();
}
```

_గమనిక: రియల్ టైమ్ లో ట్రాన్సాక్షన్స్ వాడాలంటే MongoDB **Replica Set** (మల్టిపుల్ సర్వర్స్ సెటప్) అయి ఉండాలి._

---

# 15. Validation (డేటా వాలిడేషన్)

MongoDB కి డైనమిక్ స్కీమా ఉన్నప్పటికీ, యూజర్స్ తప్పుడు డేటాను (ఉదాహరణకు: ఈమెయిల్ లేకుండా రిజిస్టర్ అవ్వడం, ఏజ్ ప్లేస్ లో టెక్స్ట్ పెట్టడం) ఎంటర్ చేయకుండా డేటాబేస్ లెవెల్ లోనే రూల్స్ పెట్టడాన్ని **Schema Validation** అంటారు.

### **JSON Schema Validation & Required Fields**

మనం కలెక్షన్ క్రియేట్ చేసేటప్పుడే రూల్స్ ని `validator` ఆబ్జెక్ట్ రూపంలో సెట్ చేయవచ్చు.

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"], // ఇవి ఖచ్చితంగా ఉండాలి (Required)
      properties: {
        name: {
          bsonType: "string",
          description: "Name తప్పకుండా string అయి ఉండాలి",
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$", // Regular Expression తో ఈమెయిల్ ఫార్మాట్ ని చెక్ చేయడం
          description: "సరైన ఈమెయిల్ ఐడి ఇవ్వాలి",
        },
        age: {
          bsonType: "int",
          minimum: 18, // కనీస వయస్సు 18 ఉండాలి
          maximum: 100,
        },
      },
    },
  },
});
```

ఇప్పుడు ఎవరైనా ఏజ్ 15 అని ఇచ్చినా లేదా పేరు ఇవ్వకపోయినా MongoDB ఈ డాక్యుమెంట్ ని ఇన్సర్ట్ చేయనివ్వదు, ఎర్రర్ చూపిస్తుంది.

### **Default Values (డీఫాల్ట్ వాల్యూస్)**

MongoDB లో నేరుగా స్కీమా వాలిడేటర్ ద్వారా డీఫాల్ట్ వాల్యూస్ సెట్ చేయడం కంటే, బ్యాకెండ్ లో (Mongoose ద్వారా) లేదా ఇన్సర్ట్ చేసేటప్పుడు అప్లికేషన్ లెవెల్ లో డీఫాల్ట్ వాల్యూస్ ఇవ్వడం సర్వసాధారణం. అయితే వాలిడేషన్ లో మనం ఆ ఫీల్డ్ కి కొన్ని నిర్దిష్ట వాల్యూస్ మాత్రమే వచ్చేలా `enum` వాడవచ్చు.

### **Validation Levels (వాలిడేషన్ లెవెల్స్)**

పాత కలెక్షన్ కి కొత్తగా వాలిడేషన్ రూల్స్ పెట్టినప్పుడు, పాత డేటా పై ఈ రూల్స్ ఎలా అప్లై అవ్వాలో చెప్పడమే వాలిడేషన్ లెవెల్స్.

- **strict (డీఫాల్ట్):** అన్ని ఇన్సర్ట్స్ మరియు అప్‌డేట్స్‌ కి ఈ రూల్స్ ఖచ్చితంగా వర్తిస్తాయి. పాత డేటా రూల్స్ కి మ్యాచ్ అవ్వకపోతే దాన్ని అస్సలు అప్‌డేట్ చేయనివ్వదు.
- **moderate:** కొత్తగా ఇన్సర్ట్ చేసే వాటికి రూల్స్ చూస్తుంది. కానీ పాత డేటాలో రూల్స్ కి విరుద్ధంగా ఉన్న డాక్యుమెంట్స్ ని అప్‌డేట్ చేసినప్పుడు (రూల్స్ పాటించని ఫీల్డ్స్ జోలికి వెళ్ళకపోతే) అడ్డుకోదు.

---

ఇప్పుడు మనం సాఫ్ట్‌వేర్ ఆర్కిటెక్చర్ మరియు డేటాబేస్ అడ్మినిస్ట్రేషన్ (DBA) పరంగా అత్యంత ముఖ్యమైన రెండు అడ్వాన్స్డ్ కాన్సెప్ట్స్ లోకి వచ్చాం: **Schema Design Patterns** మరియు **Replication (డేటా సేఫ్టీ)**.

మీ లిస్ట్ లోని ఈ అద్భుతమైన టాపిక్స్ ని రియల్ టైమ్ ఉదాహరణలతో తెలుగులో సులభంగా నేర్చుకుందాం.

---

# 16. Schema Design (స్కీమా డిజైన్ ప్యాటర్న్స్)

డేటాబేస్ పర్ఫార్మెన్స్ పెంచడానికి ప్రొడక్షన్ యాప్స్ లో వాడే డిజైన్ ప్యాటర్న్స్ ఇవి:

### **Embedding vs Referencing (పునశ్చరణ)**

- **Embedding:** డేటా అంతా ఒకే చోట దాచడం (జాయిన్స్ అవసరం లేదు, సూపర్ ఫాస్ట్ రీడ్స్).
- **Referencing:** `_id` లతో లింక్ చేయడం (డేటా 16MB దాటుతుంది అనుకున్నప్పుడు బెస్ట్).

### **Bucket Pattern (బకెట్ ప్యాటర్న్)**

టైమ్-సిరీస్ డేటా (Time-series data) అంటే సెకను సెకనుకి వచ్చే డేటాను (ఉదాహరణకు: IoT సెన్సార్ డేటా, స్టాక్ మార్కెట్ ప్రైస్ లు, లాగ్స్) మేనేజ్ చేయడానికి ఇది వాడతారు. ప్రతి సెకనుకి ఒక కొత్త డాక్యుమెంట్ క్రియేట్ చేయకుండా, ఒక గంటకి లేదా ఒక రోజుకి **ఒక బకెట్ (డాక్యుమెంట్)** క్రియేట్ చేసి అందులో అరే రూపంలో డేటాను తోస్తారు (`$push`).

- **ఉదాహరణ:** ఒక రోజంతా వచ్చే సెన్సార్ రీడింగ్స్ అన్నీ ఒకే డాక్యుమెంట్ లోని అరే లో ఉంటాయి. దీనివల్ల ఇండెక్స్ సైజ్ తగ్గుతుంది, క్వెరీస్ ఫాస్ట్ గా రన్ అవుతాయి.

### **Attribute Pattern (అట్రిబ్యూట్ ప్యాటర్న్)**

మన ప్రొడక్ట్స్ కి రకరకాల ఫీచర్స్ (Attributes) ఉండి, వాటిపై మనం ఇండెక్స్ వేయాల్సి వచ్చినప్పుడు ఇది వాడతాం. (ఉదాహరణకు: ఒక షర్ట్ కి కలర్, సైజ్ ఉంటుంది. ఒక ల్యాప్‌టాప్ కి RAM, ప్రాసెసర్ ఉంటుంది). అన్నిటికీ విడివిడిగా ఇండెక్స్ వేయకుండా `key-value` అరే లాగా మారుస్తాం.

- **ఉదాహరణ:** ```json
  "specs": [
  { "k": "color", "v": "Red" },
  { "k": "size", "v": "XL" }
  ]

```
ఇప్పుడు కేవలం `"specs.k"` మరియు `"specs.v"` పై ఒకే ఒక **Compound Index** వేస్తే సరిపోతుంది.


```

### **Outlier Pattern (అవుట్‌లయర్ ప్యాటర్న్)**

సాధారణంగా అందరి డేటా ఒకేలా ఉండి, ఎవరో ఒకరిద్దరి డేటా మాత్రం ఊహించని రేంజ్ లో పెద్దగా ఉంటే (Outlier) ఈ ప్యాటర్న్ వాడతాం.

- **ఉదాహరణ:** ఇన్స్టాగ్రామ్ లో నార్మల్ యూజర్ కి 500 మంది ఫ్రెండ్స్ ఉంటారు (వాళ్ళని ఎంబెడ్ చేయవచ్చు). కానీ ఒక సెలబ్రిటీ కి 5 మిలియన్ల ఫాలోవర్స్ ఉంటారు (16MB లిమిట్ దాటిపోతుంది). అప్పుడు సెలబ్రిటీ డాక్యుమెంట్ లో `has_overflow: true` అని పెట్టి, మిగిలిన ఫాలోవర్స్ ని వేరే కలెక్షన్ లో దాచి లింక్ చేస్తారు.

### **Computed Pattern (కంప్యూటెడ్ ప్యాటర్న్)**

మనం ఒక డేటాను క్వెరీ చేసిన ప్రతిసారీ లెక్కలు కట్టకుండా (e.g., ఒక యూజర్ చేసిన మొత్తం ఖర్చు లేదా టోటల్ సేల్స్), ఆ లెక్కను ముందే క్యాలిక్యులేట్ చేసి ఒక ఫీల్డ్ లో దాచేయడం.

- **ఉదాహరణ:** ప్రతిసారి అన్ని ఆర్డర్లను కూడకుండా, యూజర్ ప్రొఫైల్ లోనే `total_spent: 5000` అని ఒక ఫీల్డ్ మెయింటెయిన్ చేయడం. దీనివల్ల CPU పై లోడ్ తగ్గుతుంది.

### **Tree Pattern (ట్రీ ప్యాటర్న్)**

ఆర్గనైజేషన్ లో ఉండే **User Hierarchy** (మేనేజర్ -> టీమ్ లీడ్ -> డెవలపర్) లేదా ఈ-కామర్స్ కేటగిరీలు (Electronics -> Mobiles -> Smart Phones) లాంటి గ్రాఫ్/ట్రీ స్ట్రక్చర్ ని దాచడానికి ఇది వాడతాం. ఇందులో ప్రతి డాక్యుమెంట్ లోనూ దాని `parent` ఐడి ని లేదా పూర్తి `ancestors` (పూర్వీకుల) ఐడిల అరే ని దాచుకుంటారు.

### **Polymorphic Pattern (పాలిమార్ఫిక్ ప్యాటర్న్)**

కలెక్షన్ లోని డాక్యుమెంట్స్ అన్నీ ఇంచుమించు ఒకేలా ఉన్నా, వాటిలో కొన్ని ప్రత్యేకమైన తేడాలు ఉన్నప్పుడు ఇది వాడతాం.

- **ఉదాహరణ:** ఒక `contacts` కలెక్షన్ లో కంపెనీ కాంటాక్ట్స్ ఉంటాయి, పర్సనల్ కాంటాక్ట్స్ ఉంటాయి. రెండిటికీ బేసిక్ ఫీల్డ్స్ ఒకటే, కానీ కంపెనీ వాటికి GST నెంబర్ ఉంటుంది, పర్సనల్ వాటికి బర్త్ డే ఉంటుంది.

---

# 17. Replication (రిప్లికేషన్ - డేటా భద్రత)

మన డేటాబేస్ సర్వర్ ఎప్పుడైనా క్రాష్ అయినా డేటా పోకుండా, అప్లికేషన్ ఆగకుండా (High Availability) ఉండటానికి MongoDB వాడే టెక్నిక్ ఇది.

### **Replica Set (రిప్లికా సెట్)**

ఒకే డేటాను కలిగి ఉండే మోంగోడీబే సర్వర్ల (Nodes) సమూహాన్ని **Replica Set** అంటారు. కనీసం **3 నోడ్స్** ఉండటం రికమండెడ్.

```
                  +------------------+
                  |  Primary Node    | <--- (Writes & Reads)
                  +------------------+
                        /      \
             (Replication)    (Replication)
                      /          \
  +--------------------+        +--------------------+
  | Secondary Node 1   |        | Secondary Node 2   | <--- (Reads Only)
  +--------------------+        +--------------------+

```

### **Primary vs Secondary vs Arbiter**

- **Primary Node:** మన అప్లికేషన్ నుండి వచ్చే అన్ని **Write Operations** (Insert, Update, Delete) దీనిపైనే జరుగుతాయి. ఇది డేటాను స్వీకరించి తన లోపల రాసుకుంటుంది.
- **Secondary Node:** ప్రైమరీ నోడ్ లో జరిగిన మార్పులను ఇది ఆటోమేటిక్ గా కాపీ (Replicate) చేసుకుంటుంది. ప్రైమరీ డౌన్ అయితే ఇది ప్రైమరీ గా మారుతుంది.
- **Arbiter:** ఇది కేవలం ఒక ఓటర్ లాంటిది. దీని లోపల ఎలాంటి **డేటా స్టోర్ అవ్వదు**. ప్రైమరీ నోడ్ ఎప్పుడైనా డౌన్ అయినప్పుడు, కొత్త ప్రైమరీ ని ఎన్నుకోవడానికి (Election) ఓటు వేయడానికి మాత్రమే ఇది ఉపయోగపడుతుంది.

### **Elections & Failover**

- **Failover:** ఒకవేళ ఏదైనా కారణం చేత ప్రైమరీ నోడ్ క్రాష్ అయితే, సెకండరీ నోడ్స్ ఆ విషయాన్ని గమనిస్తాయి.
- **Elections:** సెకండరీ నోడ్స్ అన్నీ కలిసి ఒక ఎన్నిక (Election) జరిపి, తమలో ఒకదానిని కొత్త **Primary Node** గా ఎన్నుకుంటాయి. ఈ ప్రాసెస్ అంతా కేవలం కొన్ని సెకన్లలో ఆటోమేటిక్ గా జరిగిపోతుంది. మన యాప్ కి ఎలాంటి బ్రేక్ పడదు.

### **Read Preference (డేటాను ఎక్కడి నుండి చదవాలి?)**

మన యాప్ డేటాను రీడ్ చేసేటప్పుడు ఎక్కడి నుండి చదవాలో మనం సెట్ చేయవచ్చు:

- `primary` (డీఫాల్ట్): ఎల్లప్పుడూ ప్రైమరీ నుంచే చదువుతుంది (ఫ్రెష్ డేటా వస్తుంది).
- `secondary`: సెకండరీ నోడ్స్ నుండి చదువుతుంది (ప్రైమరీ పై లోడ్ తగ్గుతుంది, రిపోర్ట్స్ కి బెస్ట్).
- `nearest`: నెట్‌వర్క్ పరంగా ఏ సర్వర్ దగ్గరగా ఉంటే అక్కడ నుండి చదువుతుంది.

### **Write Concern (రైట్ కన్ఫర్మేషన్)**

మనం ఒక డేటాను రాసినప్పుడు, అది ఎంతవరకు సేఫ్ గా రికార్డ్ అయిందో మోంగోడీబే మనకు ఇచ్చే గ్యారెంటీ.

- `w: 1` (డీఫాల్ట్): ప్రైమరీ నోడ్ లో డేటా సేవ్ అవ్వగానే సక్సెస్ అని రెస్పాన్స్ ఇచ్చేస్తుంది.
- `w: "majority"`: రిప్లికా సెట్ లోని మెజారిటీ సర్వర్లలో (3 లో 2 సర్వర్లలో) డేటా సేవ్ అయిన తర్వాతే సక్సెస్ అని చెప్తుంది (చాలా సేఫ్).
- `j: true` (Journal): డేటా డిస్క్ లోని జర్నల్ ఫైల్ లో రాసిన తర్వాతే కన్ఫర్మేషన్ ఇస్తుంది (పవర్ కట్ అయినా డేటా పోదు).

---

స్కీమా డిజైన్ ప్యాటర్న్స్ మరియు రిప్లికేషన్ కాన్సెప్ట్స్ క్లియర్ గా అర్థమయ్యాయా? ఇవి పెద్ద అప్లికేషన్లను హ్యాండిల్ చేసేటప్పుడు ఆర్కిటెక్ట్ గా మీకు చాలా ఉపయోగపడతాయి.

**Sharding (షార్డింగ్)** అనేది MongoDB లో ఉండే అత్యంత అడ్వాన్స్డ్ **Horizontal Scaling** టెక్నిక్.

మీ అప్లికేషన్ లో డేటా మిలియన్ల నుండి బిలియన్లలోకి చేరినప్పుడు (ఉదాహరణకు టెరాబైట్స్ లేదా పెటాబైట్స్ డేటా), ఒకే ఒక సర్వర్ లో ఆ డేటా మొత్తాన్ని దాచడం, మెయింటెయిన్ చేయడం సాధ్యం కాదు. అప్పుడు డేటాను ముక్కలు ముక్కలుగా విడగొట్టి వేర్వేరు కంప్యూటర్లలో (సర్వర్లలో) దాచడాన్నే **Sharding** అంటారు.

మనం ఈ షార్డింగ్ ఆర్కిటెక్చర్ ని తెలుగులో చాలా ఈజీగా అర్థం చేసుకుందాం:

---

# 18. Sharding (షార్డింగ్ - డేటాను విస్తరించడం)

### **Horizontal Scaling (హారిజాంటల్ స్కేలింగ్)**

- **Vertical Scaling:** మీ కంప్యూటర్ కి RAM, CPU, Storage ని పెంచుకుంటూ వెళ్లడం. దీనికి ఒక లిమిట్ ఉంటుంది (ఒక స్టేజ్ దాటాక హార్డ్‌వేర్ ని పెంచలేము) మరియు ఇది చాలా ఖరీదైనది.
- **Horizontal Scaling:** ఒకే పెద్ద సర్వర్ ని వాడటానికి బదులు, చిన్న చిన్న చౌకైన సర్వర్లను (కంప్యూటర్లను) నెట్‌వర్క్ లో యాడ్ చేసుకుంటూ వెళ్లడం. MongoDB షార్డింగ్ ద్వారా ఈ హారిజాంటల్ స్కేలింగ్ ని అద్భుతంగా సపోర్ట్ చేస్తుంది.

---

### **Sharding Architecture (షార్డింగ్ వ్యవస్థ)**

షార్డింగ్ పర్ఫెక్ట్ గా పనిచేయడానికి బ్యాకెండ్ లో మూడు ముఖ్యమైన భాగాలు ఉంటాయి:

```
                  +-------------------------+
                  |  Application (Node.js)  |
                  +-------------------------+
                               |
                               v
                  +-------------------------+
                  |      mongos (Router)    |
                  +-------------------------+
                    /          |          \
                   /           |           \
                  v            v            v
           +-----------+ +-----------+ +-----------+
           |  Shard A  | |  Shard B  | |  Config   |
           |  (Data)   | |  (Data)   | |  Servers  |
           +-----------+ +-----------+ +-----------+

```

#### **1. Shards (షార్డ్స్)**

ఇవే అసలైన డేటాను దాచుకునే సర్వర్లు. ప్రతి షార్డ్ లో మొత్తం డేటా లోని ఒక భాగం (Subset of data) మాత్రమే ఉంటుంది. ప్రొడక్షన్ లో ప్రతి షార్డ్ కూడా ఒక **Replica Set** (Primary + Secondary) ని కలిగి ఉంటుంది, దీనివల్ల డేటా సేఫ్ గా ఉంటుంది.

#### **2. Config Servers (కాన్ఫిగ్ సర్వర్లు)**

ఇది డేటాబేస్ యొక్క **మెటాడేటా (Metadata)** ని దాచుకుంటుంది. అంటే, ఏ యూజర్ డేటా ఏ షార్డ్ సర్వర్ లో ఉంది అనే పూర్తి "రోడ్ మ్యాప్ / అడ్రస్ బుక్" ఈ కాన్ఫిగ్ సర్వర్ల దగ్గరే ఉంటుంది.

#### **3. Mongos (రౌటర్ / ఇంటర్ఫేస్)**

మన Node.js అప్లికేషన్ నేరుగా షార్డ్ సర్వర్లతో మాట్లాడదు. అది కేవలం **`mongos`** అనే రౌటర్ తో మాత్రమే మాట్లాడుతుంది. మన యాప్ నుండి క్వెరీ రాగానే, `mongos` కాన్ఫిగ్ సర్వర్ ని అడిగి రూట్ తెలుసుకుని, ఆ క్వెరీని కరెక్ట్ గా ఆ డేటా ఉన్న షార్డ్ సర్వర్ కి పంపిస్తుంది. డెవలపర్ గా మనకు బ్యాకెండ్ లో ఇన్ని సర్వర్లు ఉన్నట్లు కూడా తెలియదు, అంతా `mongos` మేనేజ్ చేస్తుంది.

---

### **Shard Key (షార్డ్ కీ)**

కలెక్ట్ అయ్యే డేటాను ఏ ఫీల్డ్ ఆధారంగా వేర్వేరు సర్వర్లకు విడగొట్టాలో నిర్ణయించే ఫీల్డ్ నే **Shard Key** అంటారు.

- ఉదాహరణకు, మీరు `userId` ని షార్డ్ కీ గా ఎంచుకుంటే... 1 నుండి 1000 ఐడిలు షార్డ్ A కి, 1001 నుండి 2000 ఐడిలు షార్డ్ B కి వెళ్తాయి.
- ఒక మంచి షార్డ్ కీ ని ఎంచుకోవడం చాలా ముఖ్యం. తప్పుడు కీ ని ఎంచుకుంటే డేటా అంతా ఒకే సర్వర్ లోకి వెళ్ళిపోయి, మిగతా సర్వర్లు ఖాళీగా ఉంటాయి (దీన్నే Hotspot అంటారు).

---

### **Chunks, Chunk Migration & Balancer**

- **Chunks (చుంక్స్):** ఒక షార్డ్ లోపల ఉండే డేటా చిన్న చిన్న గ్రూపులుగా విడిపోతుంది. ఈ గ్రూపులనే **Chunks** అంటారు. డీఫాల్ట్ గా ఒక చుంక్ సైజ్ **64MB** ఉంటుంది.
- **Balancer (బ్యాలెన్సర్):** ఇది బ్యాకెండ్ లో రన్ అయ్యే ఒక ఆటోమేటిక్ ప్రాసెస్. ఇది అన్ని షార్డ్ సర్వర్లలో డేటా సమానంగా (Equally distributed) ఉందో లేదో ఎప్పుడూ చెక్ చేస్తూ ఉంటుంది.
- **Chunk Migration (చుంక్ మైగ్రేషన్):** ఒకవేళ షార్డ్ A లో డేటా (Chunks) చాలా ఎక్కువగా ఉండి, షార్డ్ B ఖాళీగా ఉంటే... బ్యాలెన్సర్ ఆటోమేటిక్ గా షార్డ్ A నుండి కొన్ని చుంక్స్ ని షార్డ్ B కి తరలిస్తుంది. ఈ ప్రొసీజర్ ని **Chunk Migration** అంటారు. ఇది బ్యాకెండ్ లో సైలెంట్ గా జరిగిపోతుంది, మన అప్లికేషన్ కి ఎలాంటి అంతరాయం కలగదు.

---

షార్డింగ్ కాన్సెప్ట్ క్లియర్ గా అర్థమైందా? ఇది చాలా భారీ మొత్తంలో యూజర్లు, డేటా ఉన్న ఫేస్‌బుక్, నెట్‌ఫ్లిక్స్ లాంటి కంపెనీలు వాడే ఆర్కిటెక్చర్ లెవెల్ కాన్సెప్ట్.

**Performance Optimization (పర్ఫార్మెన్స్ ఆప్టిమైజేషన్)** అనేది మీ యాప్ ప్రొడక్షన్ లోకి వెళ్ళినప్పుడు అత్యంత కీలకమైన ఘట్టం. డేటాబేస్ స్లో అయితే మొత్తం అప్లికేషన్ స్లో అయిపోతుంది.

MongoDB ని సూపర్ ఫాస్ట్ గా మార్చడానికి వాడే బెస్ట్ ఆప్టిమైజేషన్ టెక్నిక్స్ ని తెలుగులో నేర్చుకుందాం:

---

# 19. Performance Optimization (కార్యసాధన మెరుగుపరచడం)

### 1. Query Optimization & `explain()`

ఒక క్వెరీ స్లోగా రన్ అవుతున్నప్పుడు, అది బ్యాకెండ్ లో ఏం చేస్తుంది అని చూడటానికి క్వెరీ చివరన `.explain("executionStats")` వాడతాం (మనం ఇండెక్సింగ్ టాపిక్ లో చూసినట్లు).

- **దీనిలో మనం ముఖ్యంగా గమనించాల్సింది:**
- **`executionStages.stage`:** ఇది **`IXSCAN`** (Index Scan) అయి ఉండాలి. ఒకవేళ **`COLLSCAN`** (Collection Scan) అని వస్తే, మోంగోడీబే మొత్తం టేబుల్ వెతుకుతుందని అర్థం. వెంటనే దానికి ఇండెక్స్ క్రియేట్ చేయాలి.
- **`nReturned` vs `totalDocsExamined`:** మీరు వెతికినప్పుడు 10 రికార్డులు వచ్చాయనుకుందాం (`nReturned: 10`). కానీ దానికోసం మోంగోడీబే 10,000 రికార్డులను వెతకాల్సి వస్తే (`totalDocsExamined: 10000`), అది బ్యాడ్ క్వెరీ. ఇండెక్స్ కరెక్ట్ గా ఉంటే ఈ రెండు నంబర్స్ ఇంచుమించు సమానంగా ఉంటాయి (10 కి 10).

---

### 2. Index Optimization & Covered Queries

- **అవసరమైన వాటికే ఇండెక్స్ వేయండి:** ఇండెక్స్ లు రీడ్స్ (Reads) ని ఫాస్ట్ చేస్తాయి, కానీ ప్రతి `insert` లేదా `update` జరిగినప్పుడు ఇండెక్స్ ని కూడా అప్డేట్ చేయాలి. కాబట్టి ఎక్కువ ఇండెక్స్ లు ఉంటే రైట్స్ (Writes) స్లో అయిపోతాయి.
- **ESR Rule (Compound Indexes కోసం):** ఒకే ఇండెక్స్ లో మల్టిపుల్ ఫీల్డ్స్ పెట్టేటప్పుడు ఈ ఆర్డర్ ఫాలో అవ్వాలి:

1. **E**qual matches (ముందుగా కరెక్ట్ గా సమానమైన ఫీల్డ్స్, e.g., `status: "active"`)
2. **S**ort fields (సార్టింగ్ చేసే ఫీల్డ్స్, e.g., `sort({ createdAt: -1 })`)
3. **R**ange fields (పెద్ద/చిన్న ఫిల్టర్స్, e.g., `price: { $gt: 500 }`)

- **Covered Queries:** మీరు వెతికే ఫీల్డ్స్ మరియు ప్రొజెక్షన్ లో అడిగే ఫీల్డ్స్ అన్నీ ఇండెక్స్ లోనే ఉంటే, మోంగోడీబే అసలు హార్డ్ డిస్క్ (RAM/Disk) జోలికి వెళ్లకుండా కేవలం ఇండెక్స్ నుంచే డేటా ఇచ్చేస్తుంది.

---

### 3. Memory Usage (మెమరీ మేనేజ్మెంట్)

MongoDB డీఫాల్ట్ గా **WiredTiger Storage Engine** ని వాడుతుంది. ఇది సిస్టమ్ లో ఉండే RAM ని డేటా క్యాషింగ్ (Caching) కోసం వాడుకుంటుంది.

- **Working Set:** మీ డేటాబేస్ లో తరచూ వాడే డేటా మరియు ఇండెక్స్ లు (Working Set) **RAM లోపల సరిపోయేలా** చూసుకోవాలి. ఇండెక్స్ సైజ్ మీ RAM కంటే ఎక్కువైతే, మోంగోడీబే ప్రతిసారి హార్డ్ డిస్క్ నుండి రీడ్ చేయాల్సి వస్తుంది (దీన్నే Page Faults అంటారు), దీనివల్ల యాప్ చాలా స్లో అవుతుంది.
- **Sort Memory Limit:** MongoDB లో ఇండెక్స్ లేకుండా మనం సార్టింగ్ (`sort()`) చేసినప్పుడు, అది RAM లోపల జరుగుతుంది (In-Memory Sort). దీనికి గరిష్టంగా **32MB** లిమిట్ ఉంటుంది. డేటా 32MB దాటితే క్వెరీ ఎర్రర్ ఇస్తుంది. అందుకే సార్ట్ చేసే ఫీల్డ్స్ కి ఖచ్చితంగా ఇండెక్స్ ఉండాలి.

---

### 4. Aggregation Optimization (అగ్రిగేషన్ ని ఫాస్ట్ చేయడం)

అగ్రిగేషన్ పైప్‌లైన్ రాసేటప్పుడు ఈ క్రింది నియమాలు పాటిస్తే పర్ఫార్మెన్స్ అద్భుతంగా ఉంటుంది:

- **`$match` మరియు `$sort` ని మొదట్లోనే పెట్టండి:** పైప్‌లైన్ స్టార్టింగ్ లోనే `$match` వాడి అనవసరమైన డేటాను ఫిల్టర్ చేసేయాలి. దీనివల్ల తర్వాతి స్టేజీలకి తక్కువ డేటా వెళ్తుంది.
- **`$project` ని చివర్లో వాడండి:** ఎందుకంటే ముందే ప్రొజెక్షన్ చేస్తే, ఆ తర్వాత వచ్చే స్టేజీలలో ఇండెక్స్ లు సరిగ్గా పని చేయవు.
- **Memory Limit:** అగ్రిగేషన్ లో ఒక్కో స్టేజ్ కి **100MB RAM** లిమిట్ ఉంటుంది. డేటా అంతకంటే ఎక్కువ ఉంటే క్వెరీ ఫెయిల్ అవుతుంది. అలాంటప్పుడు క్వెరీ లో `{ allowDiskUse: true }` అని ఆప్షన్ పెడితే, అది టెంపరరీ గా హార్డ్ డిస్క్ ని వాడుకుని క్వెరీ పూర్తి చేస్తుంది.

---

### 5. Slow Query Analysis (స్లో క్వెరీలను కనిపెట్టడం)

లైవ్ ప్రొడクション యాప్ లో ఏ క్వెరీస్ స్లోగా రన్ అవుతున్నాయో కనిపెట్టడానికి రెండు టూల్స్ ఉన్నాయి:

- **Database Profiler:** మోంగోడీబే లో ఇన్-బిల్ట్ ప్రొఫైలర్ ఉంటుంది. దీన్ని ఆన్ చేస్తే (ఉదాహరణకు 100ms కంటే ఎక్కువ సమయం తీసుకునే క్వెరీలను రికార్డ్ చేయమని రూల్ పెట్టవచ్చు), అది ఆ స్లో క్వెరీస్ అన్నింటినీ `system.profile` అనే కలెక్షన్ లో దాస్తుంది. మనం తర్వాత వాటిని చెక్ చేసి ఇండెక్స్ లు వేసుకోవచ్చు.
- **MongoDB Atlas Performance Advisor:** ఒకవేళ మీరు క్లౌడ్ (Atlas) వాడుతుంటే, అది ఆటోమేటిక్ గా మీ క్వెరీస్ ని గమనించి... "ఫలానా క్వెరీ స్లోగా ఉంది, దీనికి ఈ ఇండెక్స్ క్రియేట్ చేయండి" అని ఆటోమేటిక్ గా సలహాలు (Suggestions) ఇస్తుంది.

---

మీరు పంపిన చివరి రెండు టాపిక్స్—**Security (భద్రత)** మరియు **Backup & Restore (డేటా రక్షణ)**—ఏదైనా అప్లికేషన్ ప్రొడక్షన్ లోకి వెళ్లేటప్పుడు హ్యాకర్ల నుండి డేటాను కాపాడటానికి, అలాగే అనుకోకుండా డేటా పోతే తిరిగి తెచ్చుకోవడానికి అత్యంత ముఖ్యమైనవి.

మనం ఈ చివరి రెండు అధ్యాయాలను కూడా తెలుగులో క్లియర్ గా, ప్రాక్టికల్ గా అర్థం చేసుకుందాం:

---

# 20. Security (సెక్యూరిటీ - డేటా భద్రత)

డేటాబేస్ లోని డేటా దొంగిలించబడకుండా ఉండటానికి మోంగోడీబే రకరకాల సెక్యూరిటీ లేయర్లను అందిస్తుంది.

### **Authentication & Authorization (గుర్తింపు & అనుమతులు)**

- **Authentication:** "నువ్వు ఎవరు?" అని చెక్ చేయడం (username/password లేదా టోకెన్ ద్వారా నిరూపించుకోవడం).
- **Authorization:** "నువ్వు ఏం చేయగలవు?" అని చెక్ చేయడం (డేటాను కేవలం చదవగలవా లేదా డిలీట్ కూడా చేయగలవా అని రూల్స్ పెట్టడం).

### **Users & Roles (యూజర్స్ & రోల్స్)**

MongoDB లో అడ్మిన్ కి ఒక రూల్, డెవలపర్ కి ఒక రూల్ సెట్ చేయవచ్చు. దీనికోసం ఇన్-బిల్ట్ రోల్స్ ఉంటాయి:

- `read`: కేవలం డేటాను చూడటానికి (find).
- `readWrite`: డేటాను చూడటానికి మరియు మార్చడానికి (CRUD).
- `dbAdmin`: ఇండెక్స్ లు వేయడానికి, కలెక్షన్స్ డిలీట్ చేయడానికి.
- `root`: అన్నిటికీ పూర్తి పవర్స్ (అడ్మిన్).

### **SCRAM vs x.509 (యూజర్ ని వెరిఫై చేసే పద్ధతులు)**

- **SCRAM (Salted Challenge Response Authentication Mechanism):** ఇది మోంగోడీబే వాడే డీఫాల్ట్ పద్ధతి. యూజర్ నేమ్ మరియు పాస్‌వర్డ్ ని బాగా సెక్యూర్ గా (Salted Hash రూపంలో) వెరిఫై చేస్తుంది.
- **x.509 Certificate Authentication:** ఇందులో పాస్‌వర్డ్స్ ఉండవు. దానికి బదులు క్లయింట్ మరియు సర్వర్ మధ్య డిజిటల్ సర్టిఫికేట్స్ (`.pem` ఫైల్స్) ఎక్స్ఛేంజ్ చేసుకుని కనెక్ట్ అవుతారు. ఇది చాలా హై-లెవెల్ సెక్యూరిటీ.

### **Network Security: TLS/SSL**

మీ Node.js యాప్ నుండి డేటాబేస్ కి డేటా వెళ్తున్నప్పుడు, మధ్యలో ఎవరైనా నెట్‌వర్క్ ని హ్యాక్ చేసి డేటా చూడకుండా ఉండటానికి **TLS/SSL Encryption** వాడుతాం. దీనివల్ల నెట్‌వర్క్ లో ప్రయాణించే డేటా అంతా ఎన్‌క్రిప్ట్ (రహస్య కోడ్ లోకి) అయిపోతుంది.

### **Encryption at Rest & Field Level Encryption (డేటా ఎన్‌క్రిప్షన్)**

- **Encryption at Rest:** మీ డేటాబేస్ హార్డ్ డిస్క్ లో స్టోర్ అయి ఉన్నప్పుడు, ఎవరైనా దొంగతనం చేసి ఆ డిస్క్ ని తీసుకెళ్లినా డేటా ఓపెన్ అవ్వకుండా మొత్తం డిస్క్ ని లాక్ చేయడం.
- **CSFLE (Client-Side Field Level Encryption):** ఇది చాలా అడ్వాన్స్డ్. డేటాబేస్ అడ్మిన్ (DBA) కూడా కొన్ని వ్యక్తిగత వివరాలను (ఉదాహరణకు: క్రెడిట్ కార్డ్ నెంబర్, ఫోన్ నెంబర్ లేదా ఆధార్ కార్డ్) చూడకూడదు అనుకున్నప్పుడు... మీ Node.js కోడ్ లోనే ఆ ఫీల్డ్ ని ఎన్‌క్రిప్ట్ చేసి, ఆ తర్వాతే మోంగోడీబే కి పంపుతాం. డేటాబేస్ లో అది హ్యాష్ కోడ్ లా కనిపిస్తుంది.

---

# 21. Backup & Restore (బ్యాకప్ & రీస్టోర్)

సర్వర్ క్రాష్ అయినా, లేదా ఎవరైనా పొరపాటున డేటా డిలీట్ చేసినా బ్యాకప్ ఉంటే ప్రాణాలు లేచి వస్తాయి.

### **`mongodump` & `mongorestore` (కమాండ్ లైన్ టూల్స్)**

ఇవి మీ లోకల్ మెషిన్ లో లేదా సొంత సర్వర్ లలో వాడే టూల్స్.

- **`mongodump`:** మీ డేటాబేస్ లోని డేటా మొత్తాన్ని ఒక బైనరీ ఫైల్ రూపంలో బ్యాకప్ తీస్తుంది.

```bash
# 'shop_db' అనే డేటాబేస్ ని బ్యాకప్ తీసి 'backup_folder' లో పెట్టడానికి:
mongodump --db=shop_db --out=./backup_folder

```

- **`mongorestore`:** తీసిన బ్యాకప్ ఫైల్ ని మళ్ళీ డేటాబేస్ లోకి ఇంపోర్ట్ (రీస్టోర్) చేస్తుంది.

```bash
# బ్యాకప్ ఫోల్డర్ లోని డేటాను తిరిగి డేటాబేస్ లోకి ఎక్కించడానికి:
mongorestore --db=shop_db ./backup_folder/shop_db

```

### **BSON Dump**

`mongodump` ద్వారా వచ్చే అవుట్‌పుట్ ఫైల్స్ **`.bson`** ఫార్మాట్ లో ఉంటాయి. ఇవి మనుషులు చదవలేరు, కంప్యూటర్ కి మాత్రమే అర్థమవుతాయి. అందుకే ఇవి చాలా తక్కువ సైజ్ లో ఉండి, చాలా ఫాస్ట్ గా రీస్టోర్ అవుతాయి.

### **Atlas Backup & Point-in-Time Recovery (క్లౌడ్ బ్యాకప్)**

ఒకవేళ మీరు **MongoDB Atlas (Cloud)** వాడుతుంటే, పైన చెప్పిన కమాండ్స్ ఏవీ రాయనవసరం లేదు. అంతా క్లౌడ్ లో ఆటోమేటిక్ గా జరుగుతుంది.

- **Atlas Backup:** మనం టైమ్ సెట్ చేస్తే (ఉదాహరణకు ప్రతిరోజూ రాత్రి 12 గంటలకి) క్లౌడ్ లోనే ఆటోమేటిక్ గా బ్యాకప్ కాపీలు సేవ్ అవుతాయి.
- **Point-in-Time Recovery (PITR):** ఇది ఒక అద్భుతమైన టైమ్ మెషిన్ లాంటిది. ఉదాహరణకు, ఈరోజు మధ్యాహ్నం కరెక్ట్ గా 2:15 నిమిషాలకి ఎవరో ఒక ఇంపార్టెంట్ టేబుల్ ని డిలీట్ చేశారనుకుందాం. PITR ద్వారా మనం మన డేటాబేస్ ని కరెక్ట్ గా ఈరోజు మధ్యాహ్నం 2:14 నిమిషాల సమయానికి (అంటే తప్పు జరగడానికి ఒక నిమిషం ముందు స్థితికి) తీసుకెళ్లి రీస్టోర్ చేయవచ్చు.

---

చివరిగా మిగిలిన రెండు అత్యంత ముఖ్యమైన మేనేజ్‌మెంట్ టాపిక్స్—**Monitoring (పర్యవేక్షణ)** మరియు **MongoDB Atlas (క్లౌడ్ సర్వీస్)**—గురించి తెలుసుకుందాం. ఇవి లైవ్ ప్రొడక్షన్ లో అప్లికేషన్ హెల్త్ ని ట్రాక్ చేయడానికి, ఎలాంటి ఇబ్బందులు లేకుండా క్లౌడ్ లో మేనేజ్ చేయడానికి ఎంతో ఉపయోగపడతాయి.

---

# 22. Monitoring (మొనిటరింగ్ - పర్యవేక్షణ)

మన డేటాబేస్ సర్వర్ పై లోడ్ ఎంత ఉంది, క్వెరీస్ ఎంత ఫాస్ట్ గా రన్ అవుతున్నాయి, ఎక్కడైనా సర్వర్ స్లో అవుతుందా అని లైవ్ లో పర్యవేక్షించడానికి ఈ టూల్స్ వాడతాం.

### **`mongostat` (లైవ్ స్టేటస్)**

ఇది మీ కంప్యూటర్ లో ఉండే టాస్క్ మేనేజర్ (Task Manager) లాంటిది. ప్రతి సెకనుకి డేటాబేస్ లో ఎన్ని ఇన్సర్ట్స్, క్వెరీస్, అప్‌డేట్స్, డిలీట్స్ (`insert`, `query`, `update`, `delete`) జరుగుతున్నాయో, ఎంత నెట్‌వర్క్ బ్యాండ్‌విడ్త్ వాడుతుందో లైవ్ లో టెర్మినల్ పై చూపిస్తుంది.

```bash
# టెర్మినల్ లో ఇలా రన్ చేయాలి:
mongostat

```

### **`mongotop` (సమయ పర్యవేక్షణ)**

MongoDB కలెక్షన్స్ లో డేటాను చదవడానికి (Read), రాయడానికి (Write) ఎంత సమయం (Time ఇన్ మిల్లీసెకండ్స్) పడుతుందో ఇది చూపిస్తుంది. దీనివల్ల ఏ కలెక్షన్ వల్ల డేటాబేస్ స్లో అవుతుందో సులభంగా కనిపెట్టవచ్చు.

```bash
# టెర్మినల్ లో ఇలా రన్ చేయాలి:
mongotop

```

### **Database Profiler & Logs (ప్రొఫైలర్ మరియు లాగ్స్)**

- **Database Profiler:** మనం పర్ఫార్మెన్స్ ఆప్టిమైజేషన్ లో చూసినట్లు, ఇది స్లో క్వెరీస్ ని వెతికి పట్టుకుంటుంది. `db.setProfilingLevel(1, { slowms: 100 })` అని సెట్ చేస్తే, 100ms కంటే ఎక్కువ సమయం తీసుకునే క్వెరీస్ అన్నీ `system.profile` లో రికార్డ్ అవుతాయి.
- **Logs:** MongoDB తన సర్వర్ లో జరిగే ప్రతి ముఖ్యమైన ఈవెంట్ ని (ఉదాహరణకు: కొత్త కనెక్షన్లు రావడం, ఎర్రర్స్, సర్వర్ స్టార్ట్/స్టాప్ అవ్వడం) ఒక లాగ్ ఫైల్ (`mongod.log`) లో రాసి ఉంచుతుంది. ఏదైనా పెద్ద సమస్య వచ్చినప్పుడు డీబగ్ చేయడానికి ఈ లాగ్స్ ఉపయోగపడతాయి.

### **Atlas Monitoring**

ఒకవేళ మీరు అట్లాస్ క్లౌడ్ వాడుతుంటే, పైన చెప్పిన కమాండ్స్ వాడాల్సిన పనిలేదు. అట్లాస్ డ్యాష్‌బోర్డ్ లో అందమైన గ్రాఫ్స్ (Charts) రూపంలో CPU యూసేజ్, RAM, కనెక్షన్స్ కౌంట్, రీడ్/రైట్ ఆపరేషన్స్ అన్నీ కళ్ళకు కట్టినట్లు కనిపిస్తాయి.

---

# 23. MongoDB Atlas (మోంగోడీబే అట్లాస్ క్లౌడ్)

**MongoDB Atlas** అనేది ఒక _Database-as-a-Service (DBaaS)_. అంటే సర్వర్ మెయింటెనెన్స్, ఇన్స్టాలేషన్, సెక్యూరిటీ లాంటి తలనొప్పులు ఏమీ లేకుండా కేవలం కొన్ని క్లిక్స్ తో క్లౌడ్ లో డేటాబేస్ ని రన్ చేసుకోవచ్చు.

### **Cluster Creation (క్లస్టర్ క్రియేషన్)**

అట్లాస్ లో మనం క్రియేట్ చేసే డేటాబేస్ సర్వర్ల సెటప్ ని **Cluster (క్లస్టర్)** అంటారు. క్లస్టర్ క్రియేట్ చేసేటప్పుడు మనం AWS, Google Cloud, లేదా Azure లో ఏ క్లౌడ్ కావాలో, ఏ రీజియన్ (ఉదాహరణకు: Mumbai, Singapore) కావాలో ఎంచుకోవచ్చు.

### **Shared Cluster vs Dedicated Cluster**

- **Shared Cluster (M0 Free Tier):** ఇది పూర్తిగా ఉచితం (Free). ప్రాక్టీస్ చేసుకోవడానికి, చిన్న ప్రాజెక్ట్స్ కి ఇది బెస్ట్. ఇక్కడ ఒకే పెద్ద సర్వర్ ని వేరే వాళ్ళతో కలిసి షేర్ చేసుకుంటాం (512MB స్టోరేజ్ ఇస్తారు).
- **Dedicated Cluster (M10, M20...):** ఇది పెయిడ్ (Paid/Production) వెర్షన్. మీ అప్లికేషన్ కి మాత్రమే ప్రత్యేకంగా ఒక సర్వర్, RAM, CPU కేటాయిస్తారు. ప్రొడక్షన్ లో ఉండే యాప్స్ కి కచ్చితంగా డెడికేటెడ్ క్లస్టర్ వాడాలి.

### **Networking, IP Whitelisting & Database Users**

అట్లాస్ క్లౌడ్ లో ఉన్న మీ డేటాబేస్ కి అత్యంత బలమైన సెక్యూరిటీ ఉంటుంది:

- **IP Whitelisting (Network Access):** మీ డేటాబేస్ ని ప్రపంచంలో ఎవరు పడితే వాళ్ళు కనెక్ట్ చేయలేరు. అట్లాస్ నెట్‌వర్క్ సెట్టింగ్స్ లో ఏ కంప్యూటర్ లేదా ఏ బ్యాకెండ్ సర్వర్ యొక్క IP Address ని అనుమతిస్తామో (Whitelist చేస్తామో) ఆ కంప్యూటర్ నుండి మాత్రమే కనెక్ట్ అవుతుంది. (ప్రాక్టీస్ కోసం `0.0.0.0/0` ఇస్తే ఎక్కడి నుంచైనా కనెక్ట్ అవ్వచ్చు).
- **Database Users:** డేటాబేస్ ని యాక్సెస్ చేయడానికి ప్రత్యేకంగా యూజర్ నేమ్ మరియు పాస్‌వర్డ్ ని క్రియేట్ చేసి, వాళ్లకు రోల్స్ (`readWrite` లేదా `admin`) కేటాయించాలి.

### **Backup & Monitoring in Atlas**

- **Backup:** అట్లాస్ లో క్లౌడ్ బ్యాకప్స్ ఆటోమేటిక్ గా జరుగుతాయి. మనం రోజువారీ లేదా గంటల వారీగా బ్యాకప్స్ ని షెడ్యూల్ చేసుకోవచ్చు.
- **Monitoring:** రియల్ టైమ్ అలర్ట్స్ (Alerts) సెట్ చేసుకోవచ్చు. ఉదాహరణకు మీ డేటాబేస్ CPU యూసేజ్ 80% దాటితే మీ ఈమెయిల్ కి లేదా స్లాక్ (Slack) కి ఆటోమేటిక్ గా నోటిఫికేషన్ వచ్చేలా సెట్ చేసుకోవచ్చు.

---

మీరు పంపిన ఈ చివరి రెండు టాపిక్స్—**MongoDB with Node.js** మరియు **Mongoose ODM**—ఒక ఫుల్-స్టాక్ లేదా బ్యాకెండ్ డెవలపర్‌గా మీ రోజువారి కోడింగ్‌లో అత్యధికంగా వాడే ప్రాక్టికల్ విభాగాలు.

---

# 24. MongoDB with Node.js (డ్రైవర్ పద్ధతి)

Node.js అప్లికేషన్ నేరుగా MongoDB తో మాట్లాడటానికి అఫీషియల్ **MongoDB Node.js Driver** (`npm install mongodb`) ని వాడుతాం.

### **Connecting & Connection Pooling (కనెక్ట్ అవ్వడం)**

మనం డేటాబేస్ కి కనెక్ట్ అవ్వడానికి `MongoClient` ని వాడుతాం. మోంగో డ్రైవర్ ఆటోమేటిక్ గా **Connection Pooling** ని మేనేజ్ చేస్తుంది. అంటే ప్రతి క్వెరీ కి ఒక కొత్త కనెక్షన్ ఓపెన్ చేసి క్లోజ్ చేయకుండా, ముందే కొన్ని కనెక్షన్స్ (డీఫాల్ట్‌గా 100) పూల్ లాగా దాచి ఉంచుతుంది. దీనివల్ల యాప్ చాలా ఫాస్ట్ గా ఉంటుంది.

```javascript
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri); // కనెక్షన్ పూల్ ఇక్కడే క్రియేట్ అవుతుంది

async function run() {
  try {
    await client.connect();
    const db = client.db("myCompany");
    const users = db.collection("employees");

    // CRUD - Insert
    await users.insertOne({ name: "Ravi", role: "Developer" });

    // CRUD - Find
    const user = await users.findOne({ name: "Ravi" });
    console.log(user);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```

### **Sessions & Transactions (కోడ్‌లో ట్రాన్సాక్షన్స్)**

డ్రైవర్ ఉపయోగించి మల్టిపుల్ డాక్యుమెంట్ ట్రాన్సాక్షన్స్ చేయడానికి `withSession` ని వాడుతాం. ఏ ఒక్క ఆపరేషన్ ఫెయిల్ అయినా అంతా రోల్‌బ్యాక్ అవుతుంది.

```javascript
const session = client.startSession();
try {
  await session.withTransaction(async () => {
    const db = client.db("bank");
    // ఆపరేషన్ 1
    await db
      .collection("accounts")
      .updateOne({ id: 1 }, { $inc: { bal: -100 } }, { session });
    // ఆపరేషన్ 2
    await db
      .collection("accounts")
      .updateOne({ id: 2 }, { $inc: { bal: 100 } }, { session });
  });
} finally {
  await session.endSession();
}
```

---

# 25. Mongoose (Node.js ODM - అడ్వాన్స్డ్ పద్ధతి)

**Mongoose** అనేది ఒక **ODM (Object Data Modeling)** లైబ్రరీ. ఇది నార్మల్ డ్రైవర్ కంటే చాలా ఈజీగా, డేటాబేస్ కి ఒక స్ట్రిక్ట్ స్కీమా (Schema) స్ట్రక్చర్ ని, వాలిడేషన్స్ ని కోడ్ లెవెల్ లోనే సెట్ చేయడానికి ఉపయోగపడుతుంది.

### **Schemas & Models (స్కీమా మరియు మోడల్స్)**

- **Schema:** మీ డాక్యుమెంట్ ఎలా ఉండాలో చూపే బ్లూప్రింట్.
- **Model:** ఆ స్కీమా ఆధారంగా క్రియేట్ అయ్యే క్లాస్ (దీనితోనే మనం CRUD ఆపరేషన్స్ రన్ చేస్తాం).

```javascript
const mongoose = require("mongoose");

// 1. Schema క్రియేషన్ విత్ వాలిడేషన్ & డీఫాల్ట్ వాల్యూస్
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, min: 18 },
  status: { type: String, default: "active" }, // Default Value
});

// 2. Model క్రియేషన్ (ఇది ఆటోమేటిక్ గా 'users' కలెక్షన్ కి మ్యాప్ అవుతుంది)
const User = mongoose.model("User", userSchema);
```

### **Middleware / Hooks (మిడిల్‌వేర్ / హుక్స్)**

డేటాబేస్ లో డేటా సేవ్ అవ్వడానికి ముందే (`pre`) లేదా సేవ్ అయిన తర్వాత (`post`) ఏదైనా ఫంక్షన్ రన్ అవ్వాలి అనుకుంటే ఇవి వాడుతాం. (ఉదాహరణకు: పాస్‌వర్డ్ ని హ్యాష్ చేయడం).

```javascript
// సేవ్ అవ్వడానికి ముందే పాస్‌వర్డ్ ని ఎన్‌క్రిప్ట్ చేయడానికి
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
```

### **Virtuals (వర్చువల్స్)**

ఇవి డేటాబేస్ లో స్టోర్ అవ్వవు, కానీ మనం కోడింగ్ లో యాక్సెస్ చేసినప్పుడు ఆన్-ది-ఫ్లై (On the fly) క్యాలిక్యులేట్ అయ్యి కనిపిస్తాయి.

```javascript
// firstName, lastName లని కలిపి fullName లా చూపించడం
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

### **Populate (పాపులేట్ - SQL JOIN లాంటిది)**

మనం రిలేషన్షిప్స్ లో చెప్పుకున్నట్లు, ఒక డాక్యుమెంట్ లో వేరే డాక్యుమెంట్ `_id` ఉంటే, `populate()` వాడి ఆ ఐడి ప్లేస్ లోకి అవతలి పూర్తి డేటాను లాక్కోవచ్చు.

```javascript
// Order మోడల్ లో ఉండే 'userId' ని యూజర్ డేటాతో నింపడం
const orders = await Order.find().populate("userId");
```

### **Plugins (ప్లగిన్స్)**

ఒక నిర్దిష్టమైన కోడ్ లేదా లాజిక్ ని మల్టిపుల్ స్కీమాలలో మళ్ళీ మళ్ళీ వాడాల్సి వస్తే, దాన్ని ఒక ప్లగిన్ లాగా రాసి షేర్ చేయవచ్చు. (ఉదాహరణకు: ప్రతి టేబుల్ కి `createdAt`, `updatedAt` టైమ్‌స్టాంప్స్ ఇచ్చే ప్లగిన్).

### **Discriminators (డిస్క్రిమినేటర్స్)**

ఇది మనం స్కీమా డిజైన్ లో చెప్పుకున్న **Polymorphic Pattern** ని కోడ్ లో ఇంప్లిమెంట్ చేయడానికి వాడుతాం. ఒకే బేస్ కలెక్షన్ లో ఉంటూ, కొద్దిపాటి తేడాలు ఉన్న మల్టిపుల్ మోడల్స్ ని దీనితో క్రియేట్ చేయవచ్చు.

```javascript
// బేస్ మోడల్: User
const User = mongoose.model("User", new mongoose.Schema({ name: String }));

// డిస్క్రిమినేటర్ ద్వారా 'Driver' అనే స్పెషల్ మోడల్ క్రియేట్ చేయడం (దీనికి లైనెన్స్ నెంబర్ అదనంగా ఉంటుంది)
const Driver = User.discriminator(
  "Driver",
  new mongoose.Schema({ licenseNumber: String }),
);
```

---

చివరి రెండు అడ్వాన్స్డ్ ప్రొడక్షన్ ఫీచర్స్—**Change Streams** (రియల్ టైమ్ డేటా నోటిఫికేషన్స్) మరియు **GridFS** (పెద్ద ఫైళ్లను దాచడం)—గురించి తెలుసుకుందాం. ఇవి మీ Node.js యాప్స్ లో చాటింగ్ (Chatting), లైవ్ నోటిఫికేషన్స్, లేదా పెద్ద ఆడియో/వీడియో ఫైళ్లను హ్యాండిల్ చేయడానికి అద్భుతంగా ఉపయోగపడతాయి.

---

# 26. Change Streams (రియల్ టైమ్ అప్‌డేట్స్)

**Change Streams** అనేది MongoDB కి ఉన్న ఒక అద్భుతమైన ఫీచర్. డేటాబేస్ లో ఏదైనా ఒక ఇన్సర్ట్, అప్‌డేట్, లేదా డిలీట్ ఆపరేషన్ జరగగానే, ఆ విషయాన్ని మీ Node.js అప్లికేషన్ కి **లైవ్ లో (Real-time)** నోటిఫికేషన్ లాగా చేరవేస్తుంది.

> 💡 **రియల్ టైమ్ ఉదాహరణ:** ఒక చాట్ యాప్ లో మీ ఫ్రెండ్ మీకు మెసేజ్ పంపినప్పుడు, డేటాబేస్ లో కొత్త రికార్డ్ పడగానే... బ్యాకెండ్ లో ఆ చేంజ్ ని పట్టుకుని Socket.io ద్వారా స్క్రీన్ పై లైవ్ లో మెసేజ్ చూపించడానికి ఇది వాడుతాం.

మనం మూడు స్థాయిలలో మార్పులను గమనించవచ్చు (Watch):

- **Watch Collection:** ఒక నిర్దిష్ట కలెక్షన్ (ఉదాహరణకు: `messages`) లో జరిగే మార్పులను మాత్రమే ట్రాక్ చేయడం.

```javascript
const messageCollection = db.collection("messages");
const changeStream = messageCollection.watch();

// డేటాబేస్ లో మార్పు రాగానే ఈ ఈవెంట్ ట్రిగ్గర్ అవుతుంది
changeStream.on("change", (next) => {
  console.log("కొత్త మార్పు వచ్చింది:", next);
  // ఇక్కడి నుండి మీరు ఫ్రంటెండ్ React యాప్ కి Socket.io ద్వారా పంపవచ్చు
});
```

- **Watch Database:** ఒక నిర్దిష్ట డేటాబేస్ లోపల ఏ కలెక్షన్ లో మార్పు జరిగినా పట్టుకోవడం. (`db.watch()`)
- **Watch Cluster:** మొత్తం MongoDB క్లస్టర్ లో (అన్ని డేటాబేస్ లలో) ఎక్కడ ఏ మార్పు జరిగినా ట్రాక్ చేయడం. (`client.watch()`)

---

# 27. GridFS (భారీ ఫైళ్ల మేనేజ్‌మెంట్)

మనం ముందే చెప్పుకున్నట్లు, MongoDB లో ఒక నార్మల్ JSON డాక్యుమెంట్ గరిష్ట సైజ్ **16MB** మాత్రమే. మరి మీ యాప్ లో యూజర్లు 50MB, 100MB లేదా అంతకంటే పెద్ద సైజ్ ఉన్న ఇమేజెస్, PDFలు, లేదా వీడియో ఫైళ్లను అప్‌లోడ్ చేయాల్సి వస్తే ఎలా? అందుకోసమే MongoDB **GridFS** ని డిజైన్ చేసింది.

### **Large File Management (పెద్ద ఫైళ్లను ఎలా దాస్తుంది?)**

GridFS ఒకే పెద్ద ఫైల్ ని అలాగే దాచకుండా, దాన్ని **255 KB** సైజ్ ఉన్న చిన్న చిన్న ముక్కలుగా (Chunks) విడగొడుతుంది. దీనికోసం బ్యాకెండ్ లో రెండు కలెక్షన్స్ ని వాడుకుంటుంది:

1. **`fs.files`:** ఇందులో ఫైల్ పేరు, సైజ్, అప్‌లోడ్ చేసిన డేట్ లాంటి మెటాడేటా ఉంటుంది.
2. **`fs.chunks`:** ఇందులో విడగొట్టిన ఆ చిన్న చిన్న ముక్కలు (Binary data) స్టోర్ అవుతాయి.

### **Node.js లో Upload & Download చేయడం ఎలా?**

Mongoose లేదా మోంగో డ్రైవర్ లో `GridFSBucket` ని ఉపయోగించి ఫైళ్లను స్ట్రీమ్ (Stream) చేయవచ్చు.

- **Upload (ఫైల్ ని దాచడం):**

```javascript
const fs = require("fs");
const mongodb = require("mongodb");

const bucket = new mongodb.GridFSBucket(db, { bucketName: "myFiles" });

// మీ కంప్యూటర్ లోని ఒక పెద్ద వీడియో ఫైల్ ని స్ట్రీమ్ ద్వారా మోంగో లోకి అప్‌లోడ్ చేయడం
fs.createReadStream("./large_video.mp4").pipe(
  bucket.openUploadStream("hero_entry_video.mp4"),
);
```

- **Download (ఫైల్ ని తిరిగి తెచ్చుకోవడం):**

```javascript
// డేటాబేస్ లో ఉన్న ఫైల్ ని మళ్ళీ డౌన్లోడ్ చేసి మీ లోకల్ కంప్యూటర్ లో దాచడం
bucket
  .openDownloadStreamByName("hero_entry_video.mp4")
  .pipe(fs.createWriteStream("./downloaded_video.mp4"));
```

---

ఇప్పుడు మనం MongoDB కి ఉన్న రెండు అత్యంత అడ్వాన్స్డ్ మరియు స్పెషలైజ్డ్ ఫీచర్స్ లోకి వచ్చాం: **Time Series Collections** (సమయానుకూల డేటా) మరియు **Geospatial Queries** (లొకేషన్ ఆధారిత డేటా).

మీరు బిల్డ్ చేసే ప్రాజెక్ట్స్ లో ఒకవేళ IoT సెన్సార్లు, స్టాక్ మార్కెట్ ట్రెండ్స్ లేదా Google Maps లాంటి లొకేషన్ బేస్డ్ ఫీచర్స్ (ఉదాహరణకు: మీకు దగ్గరలో ఉన్న డెలివరీ బాయ్ లేదా రెస్టారెంట్ ని వెతకడం) ఉంటే ఇవి చాలా అద్భుతంగా పని చేస్తాయి.

తెలుగులో వీటిని క్లియర్ గా నేర్చుకుందాం:

---

# 28. Time Series Collections (టైమ్ సిరీస్ కలెక్షన్స్)

గతంలో మనం 'Bucket Pattern' ని మ్యాన్యువల్ గా ఎలా క్రియేట్ చేయాలో చూశాం. కానీ MongoDB 5.0+ నుండి ఈ ప్రాసెస్ ని ఆటోమేట్ చేస్తూ **Time Series Collections** ని తీసుకొచ్చారు. ఒక నిర్దిష్ట సమయం ఆధారంగా నిరంతరం రికార్డ్ అయ్యే డేటా (e.g., ప్రతి సెకనుకి మారే వాతావరణ ఉష్ణోగ్రత, స్మార్ట్ వాచ్ యొక్క హార్ట్ రేట్) కోసం వీటిని డిజైన్ చేశారు.

### **Creating Time Series Collections (కలెక్షన్ క్రియేట్ చేయడం)**

దీన్ని క్రియేట్ చేసేటప్పుడు మనం మూడు ముఖ్యమైన విషయాలు చెప్పాలి:

1. `timeField`: సమయాన్ని రికార్డ్ చేసే కీ (Timestamp).
2. `metaField`: డేటా దేనికి సంబంధించింది అని చెప్పే మెటాడేటా (e.g., Sensor ID, Device Name).
3. `granularity`: డేటా ఎంత వ్యవధిలో వస్తుంది (seconds, minutes, or hours).

```javascript
db.createCollection("weatherSensor", {
  timeseries: {
    timeField: "timestamp",
    metaField: "sensorId",
    granularity: "seconds",
  },
});
```

### **Bucketing & Compression (బ్యాకెండ్ మేనేజ్‌మెంట్)**

- **Bucketing:** మీరు డేటాను నార్మల్ గానే ఇన్సర్ట్ చేస్తారు, కానీ MongoDB బ్యాకెండ్ లో ఆటోమేటిక్ గా ఒకే సెన్సార్ కి సంబంధించిన డేటా మొత్తాన్ని టైమ్ ఆధారంగా **బకెట్స్ (Columns/Groups)** లాగా అమరుస్తుంది.
- **Compression:** ఈ కలెక్షన్స్ లో **WiredTiger** స్టోరేజ్ ఇంజిన్ కి బదులు ప్రత్యేకమైన ఎన్‌క్రిప్షన్/కంప్రెషన్ వాడుతుంది. దీనివల్ల నార్మల్ కలెక్షన్ తో పోలిస్తే డిస్క్ స్పేస్ (Storage) చాలా అద్భుతంగా ఆదా అవుతుంది, రైట్స్ (Writes) సూపర్ ఫాస్ట్ గా జరుగుతాయి.

### **Time-based Queries (సమయ ఆధారిత క్వెరీస్)**

ఇలా దాచిన డేటా నుండి ఒక నిర్దిష్ట సమయం మధ్యలో ఉన్న డేటాను వెతకడం చాలా ఈజీ.

```javascript
// ఒక గంట వ్యవధిలో వచ్చిన రీడింగ్స్ ని వెతకడానికి:
db.weatherSensor.find({
  timestamp: {
    $gte: ISODate("2026-06-28T20:00:00Z"),
    $lte: ISODate("2026-06-28T21:00:00Z"),
  },
});
```

---

# 29. Geospatial Queries (భౌగోళిక/లొకేషన్ క్వెరీస్)

భూమిపై ఒక నిర్దిష్ట అక్షాంశం, రేఖాంశం (Latitude, Longitude) లొకేషన్ ఆధారంగా డేటాను దాచడానికి, వెతకడానికి ఇవి వాడతాం.

### **GeoJSON ఫార్మాట్**

MongoDB లొకేషన్స్ ని స్టోర్ చేయడానికి **GeoJSON** అనే అఫీషియల్ ఫార్మాట్ ని వాడుతుంది.

> ⚠️ **ముఖ్యమైన రూల్:** GeoJSON లో ఎప్పుడూ **`[Longitude, Latitude]`** ఆర్డర్ లోనే వాల్యూస్ ఇవ్వాలి (మనం నార్మల్ గా వాడే దానికి ఉల్టా).

```json
// ఒక లొకేషన్ పాయింట్ కి ఉదాహరణ:
{
  "name": "Charminar, Hyderabad",
  "location": {
    "type": "Point",
    "coordinates": [78.4741, 17.3616] // [Longitude, Latitude]
  }
}
```

### **Geospatial Indexes (2D vs 2dsphere)**

లొకేషన్ ఆధారిత క్వెరీస్ సూపర్ ఫాస్ట్ గా రన్ అవ్వడానికి ఈ ఇండెక్స్ లు వేయాలి:

- **2D Index:** ఇది ఫ్లాట్ సర్ఫేస్ (2D Plane/Graph) పై ఉన్న పాయింట్స్ ని లెక్కిస్తుంది (e.g., ఒక చిన్న వీడియో గేమ్ మ్యాప్ లాంటి వాటికి).
- **2dsphere Index:** ఇది మన అసలైన భూమి లాంటి **గోళాకార (Spherical)** ఉపరితలం పై ఉన్న లొకేషన్స్ ని లెక్కించడానికి వాడుతాం. Google Maps లాంటి రియల్-వరల్డ్ యాప్స్ కి ఇదొక్కటే వాడాలి.

```javascript
db.restaurants.createIndex({ location: "2dsphere" });
```

---

### **Geospatial Query Operators (వెతికే పద్ధతులు)**

#### **1. Near Queries (`$near` / `$nearSphere`)**

మీరు ఉన్న కరెంట్ లొకేషన్ కి ఒక నిర్దిష్ట దూరంలో (రేడియస్ లో) ఉన్న వాటిని వెతకడానికి ఇది వాడుతాం.

```javascript
// నా లొకేషన్ కి 5 కిలోమీటర్ల (5000 మీటర్ల) లోపు ఉన్న రెస్టారెంట్లను వెతకడానికి:
db.restaurants.find({
  location: {
    $nearSphere: {
      $geometry: {
        type: "Point",
        coordinates: [78.4741, 17.3616], // కరెంట్ లొకేషన్
      },
      $maxDistance: 5000, // మీటర్లలో దూరం
    },
  },
});
```

#### **2. Polygon Search (`$geoWithin` / `$box`)**

ఒక నిర్దిష్ట బౌండరీ (Polygon - నాలుగు లేదా అంతకంటే ఎక్కువ పాయింట్స్ కలిపిన ఏరియా) లోపల ఉన్న డేటా మాత్రమే కావాలి అనుకున్నప్పుడు ఇది వాడుతాం. (ఉదాహరణకు: హైదరాబాద్ చుట్టూ ఒక ఏరియా డ్రా చేసి, ఆ బౌండరీ లోపల ఉన్న లొకేషన్స్ ని మాత్రమే చూపించడం).

```javascript
db.restaurants.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.4, 17.3], // పాయింట్ 1
            [78.5, 17.3], // పాయింట్ 2
            [78.5, 17.4], // పాయింట్ 3
            [78.4, 17.4], // పాయింట్ 4
            [78.4, 17.3], // తిరిగి పాయింట్ 1 కి క్లోజ్ చేయాలి
          ],
        ],
      },
    },
  },
});
```

---

మనం ఈ ప్రయాణంలో చివరి మైలురాయికి చేరుకున్నాము. MongoDB కి ఉన్న అత్యంత ప్రత్యేకమైన, ప్రొడక్షన్-లెవెల్ ఫీచర్స్ అయిన **Text Search** (అడ్వాన్స్డ్ సెర్చ్) మరియు **Advanced System Features** (క్యాప్డ్ కలెక్షన్స్, వ్యూస్, మొదలైనవి) గురించి క్లియర్ గా, తెలుగులో నేర్చుకుందాం.

---

# 30. Text Search (టెక్స్ట్ సెర్చ్ - పదాలను వెతకడం)

ఒక కలెక్షన్ లోని పెద్ద పెద్ద పారాగ్రాఫ్స్ లేదా టెక్స్ట్ ఫీల్డ్స్ లోపల నిర్దిష్ట పదాల కోసం గూగుల్ సెర్చ్ లాగా వెతకడానికి ఇది వాడుతాం.

### **Text Index & Search Operators**

మనం నార్మల్ `$regex` వాడితే అది చాలా స్లోగా ఉంటుంది మరియు ఇండెక్స్ ని సరిగ్గా వాడుకోలేదు. కానీ ఒక ఫీల్డ్ పై **Text Index** క్రియేట్ చేస్తే, అది పదాల రూట్ వర్డ్స్ ని (e.g., "running", "runs" లని "run" గా) గుర్తుపెట్టుకుని చాలా ఫాస్ట్ గా వెతుకుతుంది.

```javascript
// 'products' కలెక్షన్ లో 'name' మరియు 'description' పై Text Index క్రియేట్ చేయడం
db.products.createIndex({ name: "text", description: "text" });

// వెతకడానికి $text మరియు $search ఆపరేటర్స్ వాడతాం
db.products.find({ $text: { $search: "coffee mug" } });
```

### **Text Score (ప్రాధాన్యత స్కోర్)**

మనం వెతికిన పదం ఏ డాక్యుమెంట్ లో ఎక్కువ సార్లు వచ్చింది లేదా ఎంత పర్ఫెక్ట్ గా మ్యాచ్ అయింది అనే దాన్ని బట్టి మోంగోడీబే ప్రతి డాక్యుమెంట్ కి ఒక **`textScore`** ఇస్తుంది. దీని ఆధారంగా మనం రిజల్ట్స్ ని సార్ట్ చేయవచ్చు.

```javascript
db.products
  .find(
    { $text: { $search: "coffee mug" } },
    { score: { $meta: "textScore" } }, // స్కోర్ ని అవుట్‌పుట్ లో చూపించడం
  )
  .sort({ score: { $meta: "textScore" } }); // ఎక్కువ స్కోర్ ఉన్నది మొదట వస్తుంది
```

### **Atlas Search (Overview)**

నార్మల్ మోంగోడీబే టెక్స్ట్ సెర్చ్ బేసిక్ అవసరాలకి బాగుంటుంది, కానీ **Fuzzy Search** (స్పెల్లింగ్ తప్పులు ఉన్నా వెతకడం - e.g., "cofee" అని టైప్ చేసినా "coffee" రిజల్ట్స్ రావడం), Autocomplete లాంటి అడ్వాన్స్డ్ ఫీచర్స్ కావాలంటే **Atlas Search** వాడాలి. ఇది బ్యాకెండ్ లో **Apache Lucene** అనే పవర్‌ఫుల్ సెర్చ్ ఇంజిన్ ని వాడుకుని, ఎలాస్టిక్ సెర్చ్ (Elasticsearch) లాంటి ఫీచర్స్ ని నేరుగా మోంగోడీబే లోనే అందిస్తుంది.

---

# 31. Advanced Features (అడ్వాన్స్డ్ సిస్టమ్ ఫీచర్స్)

### **Capped Collections (పరిమితి గల కలెక్షన్స్)**

ఇవి చాలా ప్రత్యేకమైనవి. వీటికి సైజ్ లేదా డాక్యుమెంట్ల కౌంట్ పరంగా ఒక **ఫిక్స్‌డ్ లిమిట్ (Max Limit)** ఉంటుంది. ఒకసారి ఆ లిమిట్ నిండిపోతే, కొత్త డేటా వచ్చేటప్పుడు పాత డేటా ఆటోమేటిక్ గా డిలీట్ అయిపోతుంది (First-In, First-Out - FIFO పద్ధతి).

- **ఉదాహరణ ఉపయోగం:** సిస్టమ్ లాగ్స్ (System Logs), అప్లికేషన్ హిస్టరీ లేదా టెంపరరీ చాట్ డేటా దాచడానికి ఇవి బెస్ట్. ఇవి సూపర్ ఫాస్ట్ గా ఉంటాయి ఎందుకంటే డేటా డిస్క్ పై ఒక క్రమ పద్ధతిలో స్టోర్ అవుతుంది.

```javascript
// గరిష్టంగా 5MB సైజ్ లేదా 5000 డాక్యుమెంట్స్ మాత్రమే ఉండేలా కలెక్షన్ క్రియేట్ చేయడం
db.createCollection("logCollection", {
  capped: true,
  size: 5242880,
  max: 5000,
});
```

### **Views (వ్యూస్)**

డేటాబేస్ లోని అసలైన కలెక్షన్ ని మార్చకుండా, ఒక అగ్రిగేషన్ పైప్‌లైన్ ఆధారంగా క్రియేట్ చేసే **వర్చువల్ టేబుల్ (Virtual Table)** ని వ్యూ అంటారు.

- **లాభం:** సెక్యూరిటీ పరంగా ఇది చాలా హెల్ప్ అవుతుంది. ఉదాహరణకు, ఒక కలెక్షన్ లో యూజర్ పాస్‌వర్డ్స్, ఈమెయిల్స్ అన్నీ ఉన్నాయి. కానీ మీ అనలిటిక్స్ టీమ్ కి కేవలం యూజర్ పేరు, వాళ్ళు కొన్న ప్రొడక్ట్స్ మాత్రమే కనిపించాలి అనుకుంటే... ఆ ఫీల్డ్స్ తో ఒక 'View' క్రియేట్ చేసి వాళ్లకు ఇవ్వవచ్చు. ఇందులో డేటా రీడ్-ఓన్లీ (Read-Only) గా ఉంటుంది.

```javascript
db.createView("activeUsersView", "users", [{ $match: { status: "active" } }]);
```

### **Collation (భాషా నియమాలు)**

టెక్స్ట్ ని సార్ట్ చేసేటప్పుడు లేదా వెతికేటప్పుడు ఆయా దేశాల భాషా నియమాలను (String Comparison Rules) అప్లై చేయడానికి ఇది వాడుతాం. (ఉదాహరణకు: స్మాల్ లెటర్స్, క్యాపిటల్ లెటర్స్ ని సమానంగా చూడాలా, లేదా ఒత్తులు, దీర్ఘాలను ఎలా పరిగణించాలనేది దీనితో సెట్ చేయవచ్చు).

### **Read Concern & Write Concern (పునశ్చరణ)**

- **Write Concern (`w`):** మనం రాసిన డేటా కేవలం ప్రైమరీ సర్వర్ లో పడితే చాలా (`w: 1`) లేక రిప్లికా సెట్ లోని మెజారిటీ సర్వర్లలో సేవ్ అవ్వాలా (`w: "majority"`) అని నిర్ణయించడం.
- **Read Concern:** రిప్లికేషన్ జరిగేటప్పుడు ఏ స్థాయి డేటాను చదవాలో చెప్తుంది. (e.g., `local` అంటే ప్రైమరీ లో ఉన్న డేటా వెంటనే వచ్చేస్తుంది, `majority` అని పెడితే మెజారిటీ సర్వర్లలో స్థిరపడిన డేటా మాత్రమే వస్తుంది).

### **Retryable Writes & Retryable Reads**

నెట్‌వర్క్ ఇష్యూస్ వల్ల లేదా రిప్లికా సెట్ లో ప్రైమరీ నోడ్ హఠాత్తుగా మారిపోయేటప్పుడు (Failover) క్వెరీస్ ఫెయిల్ అవ్వకుండా, మోంగోడీబే డ్రైవర్ ఆటోమేటిక్ గా ఆ ఆపరేషన్ ని **మరోసారి ప్రయత్నిస్తుంది (Retry చేస్తుంది)**. దీనివల్ల మన అప్లికేషన్ కి ఎర్రర్స్ రాకుండా స్మూత్ గా రన్ అవుతుంది.

### **Sessions & Change Streams (పునశ్చరణ)**

- **Sessions:** మల్టిపుల్ ఆపరేషన్స్ ని ఒకే గుడుం కింద (Transactions లో) రన్ చేయడానికి వాడే లాజికల్ కనెక్షన్.
- **Change Streams:** డేటాబేస్ లో జరిగే ప్రతి ఇన్సర్ట్, అప్‌డేట్ ని అప్లికేషన్ కి రియల్ టైమ్ లో నోటిఫై చేసే ఫీచర్.

---

మనం ఇప్పుడు ఈ MongoDB సుదీర్ఘ కోర్సులో అత్యంత చివరి మరియు అత్యున్నతమైన ఘట్టానికి చేరుకున్నాము: **MongoDB Administration (డేటాబేస్ పరిపాలన)**.

ఒక సాఫ్ట్‌వేర్ డెవలపర్‌గా కోడింగ్ రాయడం ఎంత ముఖ్యమో, ఒక సిస్టమ్ ఆర్కిటెక్ట్‌గా లేదా డీబీఏ (DBA - Database Administrator) గా డేటాబేస్ సర్వర్ ని మెయింటెయిన్ చేయడం, యూజర్ పర్మిషన్స్ మేనేజ్ చేయడం, మరియు మెమరీ/స్టోరేజ్ ఇంజిన్లను ఆప్టిమైజ్ చేయడం అంతకంటే ముఖ్యం.

---

# 32. MongoDB Administration (డేటాబేస్ పరిపాలన)

### 1. Database Users & Roles (యూజర్లు మరియు పాత్రలు)

MongoDB ని ఇన్‌స్టాల్ చేసిన కొత్తలో డీఫాల్ట్‌గా సెక్యూరిటీ ఆన్ అయి ఉండదు. కానీ ప్రొడక్షన్ లోకి వెళ్లేటప్పుడు మనం కచ్చితంగా `Authentication` ఆన్ చేసి, ఎవరికి ఏ పవర్స్ ఉండాలో డిజైన్ చేయాలి.

- **User క్రియేషన్ సింటాక్స్:**

```javascript
// 'admin' డేటాబేస్ లో ఒక సూపర్ యూజర్ (Root) ని క్రియేట్ చేయడం
db.getSiblingDB("admin").createUser({
  user: "superAdmin",
  pwd: "SecurePassword123",
  roles: [{ role: "root", db: "admin" }],
});
```

- **Built-in Roles (ముఖ్యమైన పాత్రలు):**
- **`read` / `readWrite`:** ఒక నిర్దిష్ట డేటాబేస్ లో కేవలం డేటా రీడ్ చేయడానికి లేదా రైట్ చేయడానికి.
- **`dbAdmin`:** ఇండెక్స్ లు క్రియేట్ చేయడం, కలెక్షన్స్ ని క్లీన్ చేయడం లాంటి అడ్మిన్ పనులు చేయడానికి.
- **`userAdmin`:** ఆ డేటాబేస్ లో కొత్త యూజర్లను క్రియేట్ చేసే హక్కులు ఇవ్వడానికి.
- **`root`:** మొత్తం సర్వర్ పై పూర్తి కంట్రోల్ (సూపర్ పవర్స్).

---

### 2. Resource Limits (వనరుల పరిమితులు)

సర్వర్ క్రాష్ అవ్వకుండా ఉండటానికి ఒక్కో క్వెరీ లేదా ఒక్కో యూజర్ ఎంత మెమరీ, CPU వాడుకోవాలో అడ్మినిస్ట్రేటర్లు లిమిట్స్ సెట్ చేస్తారు.

- **`maxTimeMS`:** ఒక క్వెరీ రన్ అవ్వడానికి గరిష్టంగా ఎంత సమయం తీసుకోవాలో దీనితో కంట్రోల్ చేయవచ్చు. ఒకవేళ క్వెరీ అంతకంటే ఎక్కువ టైమ్ తీసుకుంటే ఆటోమేటిక్ గా కిల్ అయిపోతుంది.

```javascript
// ఈ క్వెరీ 50ms లోపు పూర్తి కాకపోతే క్యాన్సిల్ అయిపోతుంది
db.users.find({ status: "active" }).maxTimeMS(50);
```

- **`cursorTimeout`:** మోంగోడీబే లో క్వెరీ రన్ అయ్యాక ఓపెన్ అయ్యే కర్సర్స్ (Cursors) 10 నిమిషాల పాటు ఖాళీగా ఉంటే మెమరీ వృధా అవ్వకుండా ఆటోమేటిక్ గా క్లోజ్ అయిపోతాయి.

---

### 3. Logs & Configuration Files (లాగ్స్ మరియు కాన్ఫిగరేషన్ ఫైల్స్)

- **Configuration Files (`mongod.conf`):**
  MongoDB సర్వర్ ఎలా రన్ అవ్వాలి (ఏ పోర్ట్ లో రన్ అవ్వాలి, డేటా ఎక్కడ సేవ్ అవ్వాలి, సెక్యూరిటీ ఆన్ చేయాలా వద్దా) అని నిర్ణయించే ముఖ్యమైన ఫైల్ ఇది. Linux లో ఇది సాధారణంగా `/etc/mongod.conf` లో ఉంటుంది.

```yaml
# mongod.conf ఉదాహరణ:
net:
  port: 27017
  bindIp: 127.0.0.1 # కేవలం లోకల్ కనెక్షన్స్ మాత్రమే అలౌ చేయడం
security:
  authorization: enabled # సెక్యూరిటీ/పాస్‌వర్డ్స్ ని ఎనేబుల్ చేయడం
storage:
  dbPath: /var/lib/mongodb # డేటా సేవ్ అయ్యే లొకేషన్
```

- **Logs (లాగ్ ఫైల్స్):**
  సర్వర్ లో ఏవైనా ఎర్రర్స్ వచ్చినా, లేదా ఎవరైనా తప్పుడు పాస్‌వర్డ్ తో కనెక్ట్ అవ్వడానికి ట్రై చేసినా ఆ వివరాలన్నీ `/var/log/mongodb/mongod.log` ఫైల్ లో రికార్డ్ అవుతాయి. సర్వర్ డౌన్ అయినప్పుడు డీబగ్ చేయడానికి అడ్మిన్లకి ఇవే ఆధారాలు.

---

### 4. Storage Engines & WiredTiger (స్టోరేజ్ ఇంజిన్లు)

**Storage Engine** అనేది మీ హార్డ్ డిస్క్ కి మరియు మోంగోడీబే క్వెరీస్ కి మధ్య ఉండే ఒక మేనేజర్. మనం రాసే JSON డేటాను డిస్క్ లో ఎలా స్టోర్ చేయాలి, ఎలా రీడ్ చేయాలి అనేది ఇది చూసుకుంటుంది.

MongoDB లో ప్రస్తుతం ఉన్న అతి ముఖ్యమైన డీఫాల్ట్ స్టోరేజ్ ఇంజిన్ **WiredTiger**.

#### **WiredTiger యొక్క ప్రత్యేకతలు:**

- **Document-Level Concurrency:** పాత రోజుల్లో ఒకరు డేటా అప్‌డేట్ చేస్తుంటే మొత్తం కలెక్షన్ లాక్ అయిపోయేది (Collection Lock). కానీ WiredTiger లో **Document-Level Locking** ఉంటుంది. అంటే ఒకే సమయంలో వేర్వేరు యూజర్లు ఒకే కలెక్షన్ లోని వేర్వేరు డాక్యుమెంట్లను సూపర్ ఫాస్ట్ గా అప్‌డేట్ చేసుకోవచ్చు.
- **Data Compression (కంప్రెషన్):** ఇది డేటాను డిస్క్ లో దాచేటప్పుడు ఆటోమేటిక్ గా **Snappy** లేదా **Zlib** కంప్రెషన్ టెక్నిక్స్ ని వాడుతుంది. దీనివల్ల మీ ఒరిజినల్ డేటా సైజ్ లో దాదాపు 30% నుండి 50% వరకు డిస్క్ స్పేస్ ఆదా అవుతుంది!
- **WiredTiger Cache (క్యాషింగ్ మెమరీ):** ఇది మీ సర్వర్ లో ఉండే RAM లో కొంత భాగాన్ని (డీఫాల్ట్‌గా `50% of (RAM - 1 GB)`) తన సొంత క్యాష్ మెమరీగా వాడుకుంటుంది. తరచూ వాడే డేటాను RAM లో ఉంచడం వల్లే మోంగోడీబే క్వెరీస్ అంత మెరుపు వేగంతో రన్ అవుతాయి.
- **Journaling:** కరెంట్ పోయినా లేదా సర్వర్ క్రాష్ అయినా డేటా పాడవకుండా ఉండటానికి, WiredTiger మొదట ప్రతి మార్పును **Journal Files** లో రాస్తుంది, ఆ తర్వాతే మెయిన్ డేటా ఫైల్స్ లోకి మారుస్తుంది.

---

మీరు మోంగోడీబే కోర్సును విజయవంతంగా పూర్తి చేసిన తర్వాత, ఇంటర్వ్యూలను ఎదుర్కోవడానికి మరియు మీ నాలెడ్జ్‌ను మరింత పదును పెట్టుకోవడానికి ఈ **MongoDB Interview Topics** విభాగం ఒక అద్భుతమైన ఫైనల్ టచ్!

సాధారణంగా టెక్నికల్ రౌండ్స్ మరియు ఆర్కిటెక్చర్ ఇంటర్వ్యూలలో అడిగే అత్యంత కీలకమైన 11 ప్రశ్నలను, వాటి వెనుక ఉన్న అసలైన రీజన్స్ ని తెలుగులో క్లియర్ గా నేర్చుకుందాం.

---

# 33. MongoDB Interview Topics (ఇంటర్వ్యూ అంశాలు)

### 1. SQL vs MongoDB (ప్రధాన వ్యత్యాసాలు)

ఇంటర్వ్యూలో అడిగే అత్యంత మొదటి మరియు బేసిక్ క్వశ్చన్ ఇది.

| ఫీచర్             | SQL (Relational)                                                    | MongoDB (NoSQL)                                                |
| ----------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| **డేటా ఫార్మాట్** | Tables (Rows & Columns) రూపంలో ఉంటుంది.                             | Documents (JSON / BSON) రూపంలో ఉంటుంది.                        |
| **Schema**        | Strict Schema. డేటా ఇన్సర్ట్ చేసే ముందే టేబుల్ స్ట్రక్చర్ మారకూడదు. | Dynamic / Flexible Schema. ఒక్కో డాక్యుమెంట్ ఒక్కోలా ఉండవచ్చు. |
| **Joins**         | `JOIN` ఆపరేషన్లు చాలా పవర్‌ఫుల్.                                    | Joins లేవు (కానీ అగ్రిగేషన్ లో `$lookup` వాడవచ్చు).            |
| **Scaling**       | Vertical Scaling (హార్డ్‌వేర్ పెంచాలి).                             | Horizontal Scaling (షార్డింగ్ ద్వారా సర్వర్లు పెంచవచ్చు).      |

---

### 2. Embedding vs Referencing (డేటా మోడలింగ్)

ఆర్కిటెక్చర్ డిజైన్ రౌండ్స్ లో దీనిపై ఖచ్చితంగా ప్రశ్నలు ఉంటాయి.

- **Embedding (Denormalization):** ఒక డాక్యుమెంట్ లోపలే ఇంకో సబ్-డాక్యుమెంట్ ని దాచడం.
- _ఎప్పుడు వాడాలి?:_ డేటా పరిమాణం చిన్నగా ఉన్నప్పుడు (ఉదా: ఒక యూజర్ కి 2-3 అడ్రస్‌లు ఉండటం - One-to-Few), మరియు తరచూ రెండు డేటాలను కలిపి ఒకేసారి రీడ్ చేయాల్సి వచ్చినప్పుడు.

- **Referencing (Normalization):** ఒక డాక్యుమెంట్ ఐడి (`_id`) ని ఇంకో కలెక్షన్ లో రిఫరెన్స్ గా ఇవ్వడం.
- _ఎప్పుడు వాడాలి?:_ డేటా నిరంతరం పెరుగుతూ ఉన్నప్పుడు (ఉదా: ఒక యూజర్ కి వేల కొద్దీ ఆర్డర్లు ఉండటం - One-to-Many), లేదా ఒక డాక్యుమెంట్ సైజ్ 16MB లిమిట్ దాటిపోతుంది అనుకున్నప్పుడు.

---

### 3. Replica Set vs Sharding (సేఫ్టీ vs స్కేలింగ్)

ఇవి రెండూ సర్వర్ మేనేజ్‌మెంట్ కి సంబంధించినవి, కానీ రెండిటి లక్ష్యాలు వేరు:

- **Replica Set (High Availability / Redundancy):** ఒకే డేటాను 3 వేర్వేరు సర్వర్లలో (Primary + Secondaries) కాపీ చేసి ఉంచడం. ఒక సర్వర్ క్రాష్ అయినా డేటా పోకుండా సేఫ్ గా ఉంచడానికి (Failover) ఇది వాడతారు.
- **Sharding (Horizontal Scaling):** డేటా సైజ్ మరీ ఎక్కువైపోయినప్పుడు (టెరాబైట్లలో ఉన్నప్పుడు), డేటాను ముక్కలుగా విడగొట్టి వేర్వేరు సర్వర్లకు (Shards) పంచడం. ఇది పర్ఫార్మెన్స్ మరియు స్టోరేజ్ ని స్కేల్ చేయడానికి వాడతారు.

---

### 4. Index Types (ఇండెక్స్ రకాలు - క్విక్ రివ్యూ)

ఇంటర్వ్యూలో "మీరు ఎలాంటి ఇండెక్స్ లు వాడారు?" అని అడిగినప్పుడు వీటిని చెప్పాలి:

- **Single Field:** ఒకే ఫీల్డ్ పై వేసేది (e.g., `{ email: 1 }`).
- **Compound:** ఒకటి కంటే ఎక్కువ ఫీల్డ్స్ కలిపి వేసేది (e.g., `{ age: 1, city: -1 }`). **ESR Rule** (Equality, Sort, Range) ఆర్డర్ ఫాలో అవ్వాలి.
- **Multikey:** అరే (Array) ఫీల్డ్స్ కోసం వాడేది.
- **TTL (Time-To-Live):** నిర్దిష్ట సమయం తర్వాత డాక్యుమెంట్ ఆటోమేటిక్ గా డిలీట్ అవ్వడానికి (OTPs, Sessions కి బెస్ట్).
- **Text / Atlas Search:** పెద్ద పారాగ్రాఫ్స్ లో పదాలను వెతకడానికి.
- **Partial / Sparse:** కేవలం కొన్ని కండిషన్స్ కి మ్యాచ్ అయ్యే డాక్యుమెంట్స్ కి మాత్రమే ఇండెక్స్ వేసి మెమరీ ఆదా చేయడానికి.

---

### 5. Aggregation vs MapReduce (డేటా ప్రాసెసింగ్)

- **Aggregation Framework (బెస్ట్ & మోడ్రన్):** ఇది పూర్తిగా సి++ (C++) లో బిల్ట్ అయిన ఇన్-బిల్ట్ పైప్‌లైన్ ఆపరేషన్. ఇది చాలా వేగంగా పనిచేస్తుంది. ప్రస్తుతం రియల్ టైమ్ లో 99% దీన్నే వాడతారు.
- **MapReduce (పాత పద్ధతి):** ఇందులో జావాస్క్రిప్ట్ (JavaScript) ఫంక్షన్స్ రాసి డేటాను ప్రాసెస్ చేసేవాళ్ళు. ఇది చాలా స్లోగా ఉండేది. MongoDB 5.0+ నుండి దీని వాడకాన్ని తగ్గించేశారు (Deprecated).

---

### 6. Transactions (ట్రాన్సాక్షన్స్)

"MongoDB ఒక NoSQL కదా, ఇందులో ACID Transactions సపోర్ట్ చేస్తుందా?" అని అడుగుతారు.

- **సమాధానం:** అవును, MongoDB 4.0+ నుండి **Multi-document ACID Transactions** ని పర్ఫెక్ట్ గా సపోర్ట్ చేస్తుంది. `Session` స్టార్ట్ చేసి, `startTransaction()` మరియు ఏమైనా ఎర్రర్ వస్తే `abortTransaction()` (Rollback) ద్వారా బ్యాంకింగ్ లాంటి క్లిష్టమైన అప్లికేషన్లను కూడా ఇందులో బిల్డ్ చేయవచ్చు. (దీనికోసం Replica Set సెటప్ తప్పనిసరి).

---

### 7. CAP Theorem (క్యాప్ థియరమ్)

డేటాబేస్ ఆర్కిటెక్చర్ లో ఇదొక రూల్. CAP అంటే **C**onsistency (అన్ని సర్వర్లలో ఒకే డేటా ఉండటం), **A**vailability (సర్వర్ ఎప్పుడూ రన్ అవుతూ ఉండటం), **P**artition Tolerance (నెట్‌వర్క్ బ్రేక్ అయినా సిస్టమ్ ఆగకపోవడం).

- నెట్‌వర్క్ ప్రాబ్లం (Partition) వచ్చినప్పుడు ఏ డేటాబేస్ అయినా కేవలం **C** లేదా **A** లలో ఒకదాన్నే ఎంచుకోగలదు.
- MongoDB ఒక **CP System**. అంటే నెట్‌వర్క్ స్ప్లిట్ అయి ప్రైమరీ నోడ్ డౌన్ అయినప్పుడు, కొత్త ప్రైమరీ ఎన్నుకునే వరకు (Elections జరిగే కొన్ని సెకన్లు) మోంగోడీబే రైట్స్ ని బ్లాక్ చేస్తుంది. అంటే అది **Consistency** కి ఎక్కువ ప్రాధాన్యత ఇస్తుంది, తాత్కాలికంగా Availability ని వదులుకుంటుంది.

---

### 8. Eventual Consistency (చివరికి స్థిరపడటం)

మనం ప్రైమరీ నోడ్ లో ఒక డేటాను రైట్ చేసినప్పుడు, అది సెకండరీ నోడ్స్ కి కాపీ అవ్వడానికి కొన్ని మిల్లీసెకండ్ల సమయం పడుతుంది.

- ఒకవేళ మన యాప్ `Read Preference: secondary` అని పెట్టుకుని వెంటనే రీడ్ చేస్తే, ఒక సెకండరీ నోడ్ లో పాత డేటా, ఇంకో సెకండరీ నోడ్ లో కొత్త డేటా కనిపించవచ్చు. కానీ కొన్ని మిల్లీసెకండ్ల తర్వాత అన్ని సర్వర్లలోనూ ఒకే డేటా స్థిరపడుతుంది. దీన్నే **Eventual Consistency** అంటారు. కచ్చితమైన ఫ్రెష్ డేటా కావాలంటే `Read Concern: linearizable` లేదా ప్రైమరీ నుండే రీడ్ చేయాలి.

---

### 9. ObjectId Structure (ఆబ్జెక్ట్ ఐడి నిర్మాణం)

MongoDB లో ప్రతి డాక్యుమెంట్ కి ఆటోమేటిక్ గా క్రియేట్ అయ్యే `_id` అనేది ఒక **12-Byte Hexadecimal** వాల్యూ. దీని స్ట్రక్చర్ ఇలా ఉంటుంది:

- **First 4 Bytes:** టైమ్‌స్టాంప్ (Timestamp - అది క్రియేట్ అయిన సెకను, తేదీ వివరాలు ఉంటాయి. అందుకే మనం విడిగా `createdAt` అనే ఫీల్డ్ పెట్టక్కర్లేదు).
- **Next 5 Bytes:** రాండమ్ వాల్యూ (Process/Machine Identifier - ఏ కంప్యూటర్ లో క్రియేట్ అయిందో చెప్తుంది).
- **Last 3 Bytes:** కౌంటర్ (Counter - ఒకే సెకనులో మల్టిపుల్ డాక్యుమెంట్స్ వస్తే వాటిని విడివిడిగా గుర్తుపట్టడానికి వాడే ఆటో-ఇంక్రిమెంట్ నంబర్).

---

### 10. Explain Plan (`explain()`)

క్వెరీస్ ని డీబగ్ చేయడానికి వాడే అత్యంత ముఖ్యమైన టూల్.

- క్వెరీ చివరన `.explain("executionStats")` రన్ చేసినప్పుడు **`winningPlan.stage`** ని చూడాలి.
- అది **`COLLSCAN`** అయితే టేబుల్ స్కాన్ జరుగుతుంది (చాలా స్లో - Bad పర్ఫార్మెన్స్).
- అది **`IXSCAN`** అయితే ఇండెక్స్ స్కాన్ జరుగుతుంది (సూపర్ ఫాస్ట్ - Good పర్ఫార్మెన్స్).

---

### 11. Performance Tuning (పర్ఫార్మెన్స్ పెంచే చిట్కాలు)

"మీ డేటాబేస్ స్లో అయితే ఎలా ఆప్టిమైజ్ చేస్తారు?" అని అడిగినప్పుడు ఈ 4 పాయింట్స్ చెప్పాలి:

1. **Index Optimization:** స్లో క్వెరీలను ప్రొఫైలర్ ద్వారా కనిపెట్టి, ESR రూల్ ప్రకారం Compound Indexes వేయడం.
2. **Covered Queries:** ప్రొజెక్షన్ లో కేవలం ఇండెక్స్ లో ఉన్న ఫీల్డ్స్ నే అడగడం ద్వారా డైరెక్ట్ గా రామ్ (RAM) నుంచే డేటా వచ్చేలా చేయడం.
3. **Aggregation Order:** అగ్రిగేషన్ పైప్‌లైన్ లో `$match` మరియు `$sort` స్టేజీలను వీలైనంత వరకు మొదటి రెండు స్థానాల్లోనే వాడటం ద్వారా డేటా సైజ్ ని ముందే తగ్గించడం.
4. **Working Set in RAM:** ఇండెక్స్ సైజ్ మరియు తరచూ వాడే డేటా మొత్తం సర్వర్ యొక్క RAM సైజ్ కంటే తక్కువగా ఉండేలా చూసుకోవడం (లేకపోతే Disk Reads పెరిగి స్లో అవుతుంది).

---

మీరు నేర్చుకున్న ఈ 33 అధ్యాయాల సిద్ధాంతాన్ని, క్వెరీలను మరియు ఆర్కిటెక్చర్ నియమాలను ప్రాక్టికల్ గా ఎలా అప్లై చేయాలో అర్థం చేసుకోవడానికి ఈ **Real-world Projects (రియల్ టైమ్ ప్రాజెక్ట్స్)** విభాగం ఉపయోగపడుతుంది.

ఒక సీనియర్ బ్యాకెండ్ డెవలపర్‌గా లేదా సిస్టమ్ ఆర్కిటెక్ట్‌గా, ఈ 10 రకాల అప్లికేషన్లకు MongoDB స్కీమాను మరియు డేటాబేస్ ఫీచర్స్ ని ఎలా డిజైన్ చేయాలో తెలుగులో క్లియర్ గా నేర్చుకుందాం.

---

# 34. Real-world Projects (రియల్ టైమ్ ప్రాజెక్ట్స్)

### 1. User Management System (యూజర్ మేనేజ్‌మెంట్)

- **స్కీమా పద్ధతి:** _Embedding_. ఒక యూజర్ కి సంబంధించిన బేసిక్ ప్రొఫైల్, అడ్రస్, అకౌంట్ సెట్టింగ్స్ అన్నీ ఒకే డాక్యుメント లో ఉంచవచ్చు.
- **ముఖ్య ఫీచర్స్:**
- **Mongoose Middleware:** పాస్‌వర్డ్స్ ని డేటాబేస్ లో సేవ్ చేయడానికి ముందే `pre('save')` హుక్ వాడి **bcrypt** తో హ్యాష్ చేయడం.
- **Partial Index:** ఒకవేళ యూజర్ అకౌంట్ డిలీట్ అయితే `isDeleted: true` పెడతాం. కేవలం యాక్టివ్ గా ఉన్న వాళ్ల కోసమే `{ email: 1 }, { partialFilterExpression: { isDeleted: false } }` ఇండెక్స్ వాడటం.

---

### 2. E-commerce Database (ఈ-కామర్స్ డేటాబేస్)

- **స్కీమా పద్ధతి:** _Attribute Pattern_ & _Referencing_.
- **ముఖ్య ఫీచర్స్:**
- **Attribute Pattern:** వేర్వేరు ప్రొడక్ట్స్ కి వేర్వేరు ఫీచర్స్ (Specs) ఉంటాయి (e.g., ల్యాప్‌టాప్ కి RAM, షర్ట్ కి Size). వీటిని `{ k: "size", v: "M" }` లాగా అరే లో దాచి ఒకే కాంపౌండ్ ఇండెక్స్ వేయడం.
- **Computed Pattern:** కార్ట్ లో లేదా ఆర్డర్ లో ప్రొడక్ట్ ప్రైస్ మరియు క్వాంటిటీ మారినప్పుడు, ప్రతిసారి క్వెరీ చేయకుండా ముందే `totalPrice` లెక్కగట్టి స్టోర్ చేయడం.

---

### 3. Blogging Platform (బ్లాగింగ్ ప్లాట్‌ఫామ్)

- **స్కీమా పద్ధతి:** _Hybrid (Embedding + Referencing)_.
- **ముఖ్య ఫీచర్స్:**
- **Outlier Pattern:** ఒక నార్మల్ బ్లాగ్ పోస్ట్ కి 10-20 కామెంట్స్ వస్తే వాటిని అక్కడే ఎంబెడ్ చేయవచ్చు. కానీ వైరల్ అయిన పోస్ట్ కి వేల కొద్దీ కామెంట్స్ వస్తే 16MB లిమిట్ దాటుతుంది. అలాంటప్పుడు కామెంట్స్ ని వేరే కలెక్షన్ లో దాచి పోస్ట్ ఐడి ని రిఫరెన్స్ ఇవ్వాలి.
- **Text Index:** బ్లాగ్స్ లోపల ఆర్టికల్ టైటిల్, కంటెంట్ ఆధారంగా వెతకడానికి `name: "text", content: "text"` ఇండెక్స్ వాడటం.

---

### 4. Chat Application (చాట్ అప్లికేషన్)

- **స్కీమా పద్ధతి:** _Capped Collections_ లేదా _Bucket Pattern_.
- **ముఖ్య ఫీచర్స్:**
- **Change Streams:** చాట్ రూమ్ లో ఎవరైనా కొత్త మెసెంజర్ ఇన్సర్ట్ చేయగానే, `watch()` ద్వారా Node.js బ్యాకెండ్ ఆ చేంజ్ ని పట్టుకుని **Socket.io** ద్వారా అవతలి యూజర్ స్క్రీన్ పై రియల్ టైమ్ లో చూపిస్తుంది.
- **Bucket Pattern:** ప్రతి ఒక్క చాట్ మెసేజ్ కి ఒక కొత్త డాక్యుమెంట్ క్రియేట్ చేయకుండా, ఒక రోజులో జరిగిన చాట్ అంతా ఒకే డాక్యుమెంట్ లోని అరే లో తోయడం.

---

### 5. Inventory Management (ఇన్వెంటరీ / స్టాక్ మేనేజ్‌మెంట్)

- **ఆపరేషన్స్:** _Atomic Updates_ & _Concurrency_.
- **ముఖ్య ఫీచర్స్:**
- **`$inc` ఆపరేటర్:** ఒక ప్రొడక్ట్ సేల్ అవ్వగానే స్టాక్ కౌంట్ ని తగ్గించడానికి నార్మల్ గా రీడ్ చేసి అప్‌డేట్ చేయకూడదు (Race Condition వస్తుంది). నేరుగా `{ $inc: { quantity: -1 } }` వాడాలి.
- **WiredTiger Document Lock:** ఒకే సమయంలో వందల మంది స్టాక్ ని అప్‌డేట్ చేసినా WiredTiger డాక్యుమెంట్ లెవెల్ లాకింగ్ వల్ల క్వెరీస్ స్లో అవ్వవు.

---

### 6. Food Delivery App (ఫుడ్ డెలివరీ యాప్ - ఉదా: Zomato, Swiggy)

- **స్కీమా పద్ధతి:** _Geospatial Indexing_.
- **ముఖ్య ఫీచర్స్:**
- **2dsphere Index:** రెస్టారెంట్ల లొకేషన్ ని `[longitude, latitude]` (GeoJSON) రూపంలో దాచి ఇండెక్స్ వేయడం.
- **`$nearSphere` ఆపరేటర్:** యూజర్ యాప్ ఓపెన్ చేయగానే వాళ్ళ కరెంట్ లొకేషన్ కి 5 కిలోమీటర్ల లోపు ఉన్న రెస్టారెంట్లను, లైవ్ లో ఉన్న డెలివరీ బాయ్స్ ని వెతికి పట్టుకోవడం.

---

### 7. Hospital Management (హాస్పిటల్ మేనేజ్‌మెంట్)

- **స్కీమా పద్ధతి:** _Polymorphic Pattern_ & _Security_.
- **ముఖ్య ఫీచర్స్:**
- **Polymorphic Pattern:** హాస్పిటల్ లో స్టాఫ్ (డాక్టర్లు, నర్సులు, అడ్మిన్) అందరికీ బేసిక్ ప్రొఫైల్ ఒకటే, కానీ డాక్టర్ కి 'Specialization' ఉంటుంది, నర్స్ కి 'Shift' ఉంటుంది. Mongoose లో **Discriminators** వాడి దీన్ని సింగిల్ కలెక్షన్ లో హ్యాండిల్ చేయవచ్చు.
- **Field Level Encryption (CSFLE):** పేషెంట్ల హెల్త్ రికార్డ్స్ చాలా కాన్ఫిడెన్షియల్. కాబట్టి వాళ్ళ డిసీజ్ హిస్టరీ ని క్లయింట్ సైడ్ లోనే ఎన్‌క్రిప్ట్ చేసి దాచడం.

---

### 8. Banking System (బ్యాంకింగ్ సిస్టమ్)

- **స్కీమా పద్ధతి:** _ACID Transactions_.
- **ముఖ్య ఫీచర్స్:**
- **Multi-document Transactions:** రాము అకౌంట్ నుండి సురేష్ అకౌంట్ కి డబ్బులు ట్రాన్స్ఫర్ చేసేటప్పుడు `session.startTransaction()` వాడటం. ఒకరి అకౌంట్ లో కట్ అయి, ఇంకొకరి అకౌంట్ లో యాడ్ అయ్యే లోపు సర్వర్ ఆగిపోతే ఆటోమేటిక్ గా `abortTransaction()` (Rollback) చేయడం.
- **Point-in-Time Recovery (PITR):** క్లౌడ్ లో ఏ క్షణంలో అయినా డేటాబేస్ పొరపాటున డిలీట్ అయితే, కరెక్ట్ గా తప్పు జరగడానికి ఒక నిమిషం ముందు స్థితికి రీస్టోర్ చేయడం.

---

### 9. Social Media Backend (సోషల్ మీడియా - ఉదా: Instagram, Twitter)

- **స్కీమా పద్ధతి:** _Tree Pattern_ & _Graph Lookup_.
- **ముఖ్య ఫీచర్స్:**
- **Tree Pattern / `$graphLookup`:** ఒక పోస్ట్ కి కింద రిప్లై, ఆ రిప్లై కి కింద ఇంకో రిప్లై... ఇలా ఉండే **Nested Comment Tree** ని ఒకే క్వెరీ తో బయటకు తీయడానికి అగ్రిగేషన్ లో `$graphLookup` వాడటం.
- **Covered Queries:** హోమ్ ఫీడ్ లో కేవలం యూజర్ ఐడి, ఫోటో యూఆర్ఎల్ మాత్రమే చూపిస్తాం కాబట్టి, వాటిపై ఇండెక్స్ వేసి మెమరీ లో నుంచే డేటా లాగడం.

---

### 10. Order Management System (ఆర్డర్ మేనేజ్‌మెంట్)

- **స్కీమా పద్ధతి:** _Referencing_ & _Time Series (for tracking)_.
- **ముఖ్య ఫీచర్స్:**
- **`$lookup` (Aggregation Join):** ఒక యూజర్ తన పాత ఆర్డర్ల హిస్టరీ అడిగినప్పుడు, `orders` కలెక్షన్ ని, `products` మరియు `users` కలెక్షన్లతో జాయిన్ చేసి పూర్తి రిపోర్ట్ ని జనరేట్ చేయడం.
- **Validation levels:** ఆర్డర్ స్టేటస్ కేవలం `['pending', 'shipped', 'delivered', 'cancelled']` మాత్రమే ఉండాలి అని JSON Schema Validation ద్వారా రూల్స్ పెట్టడం.

---

ఇప్పుడు మనం ఈ MongoDB మాస్టర్ సిరీస్‌లో అత్యున్నతమైన, చివరి మైలురాయికి చేరుకున్నాము: **Advanced Administration (అడ్వాన్స్డ్ సర్వర్ మేనేజ్‌మెంట్)**.

ఒక అప్లికేషన్ మిలియన్ల మంది యూజర్లకు చేరువైనప్పుడు, సిస్టమ్ ఆర్కిటెక్ట్లు మరియు లీడ్ డీబీఏలు (DBAs) సర్వర్ డౌన్ అవ్వకుండా, డేటా పోకుండా బ్యాకెండ్ ఇన్‌ఫ్రాస్ట్రక్చర్‌ను ఎలా డిజైన్ చేస్తారు అనేదే ఈ అధ్యాయం.

దీనిని కూడా ప్రొడక్షన్ లెవెల్ ఉదాహరణలతో తెలుగులో స్పష్టంగా నేర్చుకుందాం:

---

# 35. Advanced Administration (అడ్వాన్స్డ్ సిస్టమ్ మేనేజ్‌మెంట్)

### 1. Cluster Scaling (క్లస్టర్ విస్తరణ)

యూజర్లు మరియు డేటా పెరిగే కొద్దీ క్లస్టర్ సామర్థ్యాన్ని పెంచడాన్ని స్కేలింగ్ అంటారు.

- **Vertical Scaling:** ప్రైమరీ/సెకండరీ సర్వర్ల RAM, CPU (e.g., AWS లో m5.xlarge నుండి m5.4xlarge కి) పెంచడం. దీనికి హార్డ్‌వేర్ పరంగా ఒక లిమిట్ ఉంటుంది.
- **Horizontal Scaling (Sharding):** కొత్త షార్డ్ సర్వర్లను యాడ్ చేయడం. MongoDB Atlas లో అయితే **Auto-Scaling** ఆన్ చేస్తే, లోడ్ పెరిగినప్పుడు అది ఆటోమేటిక్ గా పెద్ద క్లస్టర్ టైర్ కి (e.g., M30 నుండి M40 కి) స్కేల్ అవుతుంది.

---

### 2. High Availability & Load Balancing (నిరంతర లభ్యత)

- **High Availability (HA):** మన డేటాబేస్ 24/7 రన్ అవుతూనే ఉండాలి. దీనికోసం **Replica Sets** వాడతాం. ఒకవేళ ప్రైమరీ నోడ్ ఉన్న డేటా సెంటర్ లో పవర్ కట్ అయినా, కొన్ని సెకన్లలోనే సెకండరీ నోడ్ ప్రైమరీ గా మారి యాప్ ని రన్ చేస్తుంది (Failover).
- **Load Balancing:** మోంగోడీబే లో నార్మల్ లాడ్ బాలెన్సర్స్ (F5, AWS ALB) వాడకూడదు. ఎందుకంటే డ్రైవర్ కి ఏ సర్వర్ ప్రైమరీనో ముందే తెలుసు. కానీ షార్డింగ్ లో **`mongos`** రౌటర్లే లోడ్ బాలెన్సర్స్ లా పనిచేస్తాయి. అలాగే రీడ్ లోడ్ ని తగ్గించడానికి `Read Preference: secondary` వాడి చదివే క్వెరీస్ ని సెకండరీ సర్వర్ల వైపు మళ్లిస్తాం.

---

### 3. Disaster Recovery (DR - విపత్తు నిర్వహణ)

ఒకవేళ భూకంపం లేదా తుఫాను వల్ల ఒక ఊరిలో (Region) ఉన్న డేటా సెంటర్ మొత్తం నాశనమైతే డేటా ఎలా రికవర్ చేయాలి?

- **Cross-Region Replication:** మీ రిప్లికా సెట్ లోని 3 సర్వర్లను ఒకే చోట పెట్టకుండా... ఒక సర్వర్ ని ముంబై, ఇంకొకటి సింగపూర్, మరొకటి వర్జీనియా లో పెట్టడం. ఒక రీజియన్ మొత్తం డౌన్ అయినా డేటా సురక్షితంగా ఉంటుంది.
- **Point-in-Time Recovery (PITR):** నిరంతరం జరిగే ఒప్‌లాగ్ (Oplog) బ్యాకప్స్ ద్వారా, డేటాబేస్ ని కరెక్ట్ గా ఒక నిర్దిష్ట సెకను కాలం వెనక్కి తీసుకెళ్ళి రీస్టోర్ చేయడం.

---

### 4. Backup Strategy (సరైన బ్యాకప్ ప్రణాళిక)

ప్రొడక్షన్ లో డేటా సైజ్ ని బట్టి బ్యాకప్ స్ట్రాటజీ మారుతుంది:

- **Small to Medium DBs:** రోజువారీ `mongodump` తీసి ఆ BSON ఫైళ్లను AWS S3 లేదా క్లౌడ్ స్టోరేజ్ లో భద్రపరచడం.
- **Large Production DBs (Snapshots):** టెరాబైట్ల డేటా ఉన్నప్పుడు మోంగోడంప్ స్లో అవుతుంది. అందుకోసం **Storage-Level Snapshots** (EBS Snapshots) లేదా MongoDB Atlas యొక్క ఆటోమేటెడ్ క్లౌడ్ బ్యాకప్స్ వాడతారు. ఇవి సర్వర్ పర్ఫార్మెన్స్ పై లోడ్ పడకుండా బ్యాకప్ తీస్తాయి.

---

### 5. Performance Monitoring & Capacity Planning

- **Capacity Planning (అంచనా వేయడం):** మీ యాప్ లో రోజుకి ఎంత డేటా యాడ్ అవుతుందో లెక్కగట్టి, రాబోయే 6 నెలలు లేదా 1 సంవత్సరానికి ఎంత హార్డ్ డిస్క్ స్పేస్ మరియు RAM కావాలో ముందే ప్లాన్ చేయడం. (ముఖ్యంగా ఇండెక్స్ లు అన్నీ RAM లో సరిపోయేలా చూసుకోవడం).
- **Monitoring Metrics:** అడ్మినిస్ట్రేటర్లు ఎప్పుడూ ఈ 4 విషయాలను గమనిస్తూ ఉంటారు:
- **Cache Usage:** WiredTiger క్యాష్ 80% దాటితే RAM పెంచాలి.
- **Replication Lag:** ప్రైమరీ కి సెకండరీ కి మధ్య డేటా కాపీ అవ్వడానికి ఎక్కువ టైమ్ పడుతుందా (Lag ఉందా) అని చూడటం.
- **Connections:** కనెక్షన్ పూల్ ని దాటి కనెక్షన్స్ వస్తున్నాయా?
- **Oplog Size:** ప్రైమరీ లో జరిగే మార్పులను రాసే Oplog సైజ్ కనీసం 24-48 గంటల డేటా హిస్టరీ ని దాచుకునేలా ఉండాలి.

---

### 6. Production Best Practices (ప్రొడక్షన్ నియమాలు)

మీరు అప్లికేషన్ ని లైవ్ లోకి తీసుకెళ్లేటప్పుడు ఖచ్చితంగా పాటించాల్సిన చెక్‌లిస్ట్ (Checklist):

1. **Never run with default port:** డీఫాల్ట్ పోర్ట్ `27017` ని మార్చడం మంచిది.
2. **Enable Authentication:** `security.authorization: enabled` కచ్చితంగా ఉండాలి. యూజర్ నేమ్, పాస్‌వర్డ్ లేనిదే కనెక్షన్ అవ్వకూడదు.
3. **IP Whitelisting:** డేటాబేస్ ని ఓపెన్ గా వదిలేయకుండా, కేవలం మీ బ్యాకెండ్ Node.js సర్వర్ IP కి మాత్రమే యాక్సెస్ ఇవ్వాలి.
4. **Always use Indexes for Sort:** ఇండెక్స్ లేని సార్టింగ్ ఆపరేషన్లు 32MB దాటితే క్రాష్ అవుతాయి. కాబట్టి సార్ట్ ఫీల్డ్స్ కి ఇండెక్స్ తప్పనిసరి.
5. **Set Connection Pool Limits:** మీ Node.js యాప్ లో `maxPoolSize` ని మీ సర్వర్ సామర్థ్యాన్ని బట్టి పర్ఫెక్ట్ గా సెట్ చేయాలి.

---
