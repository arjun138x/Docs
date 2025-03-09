MongoDB is a NoSQL database that stores data in a flexible, document-based format (JSON-like). Here are the key topics in MongoDB:

# **1. Basics of MongoDB**

- Introduction to NoSQL and MongoDB
- Installation and Setup (MongoDB Shell, Compass, and Server)
- Databases and Collections
- MongoDB Data Types (String, Number, Boolean, Array, Object, etc.)

---

## **1. Introduction to NoSQL and MongoDB**

### **What is NoSQL?**

NoSQL (Not Only SQL) databases are designed for flexibility, scalability, and performance, unlike traditional relational databases (SQL).

#### **Key Features of NoSQL:**

- **Schema-less:** No predefined schema, allowing flexible document structures.
- **Scalability:** Horizontally scalable using sharding.
- **High Performance:** Optimized for read and write operations.
- **Support for Unstructured Data:** Handles JSON, XML, key-value pairs, graphs, etc.

### **Types of NoSQL Databases:**

- **Document-Based** (MongoDB, CouchDB)
- **Key-Value Stores** (Redis, DynamoDB)
- **Column-Family Stores** (Cassandra, HBase)
- **Graph Databases** (Neo4j, ArangoDB)

### **What is MongoDB?**

MongoDB is a **document-oriented** NoSQL database that stores data in **JSON-like** format called BSON.

#### **Why Use MongoDB?**

- **Flexible Schema:** No need to define tables or relationships.
- **Scalability:** Supports sharding (horizontal scaling).
- **High Availability:** Uses replication for failover handling.
- **Rich Query Language:** Supports filtering, aggregation, and full-text search.

---

## **2. Installation and Setup**

### **Installing MongoDB**

#### **For Windows:**

1. Download MongoDB from the [official MongoDB website](https://www.mongodb.com/try/download/community).
2. Install it and choose the MongoDB service option.
3. Add MongoDB to the system PATH.

#### **For Ubuntu (Linux):**

```bash
sudo apt update
sudo apt install -y mongodb
```

Start MongoDB:

```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

Check status:

```bash
sudo systemctl status mongod
```

#### **For MacOS (Using Homebrew):**

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

### **Setting Up MongoDB Shell and Compass**

- **MongoDB Shell (`mongosh`)**: CLI tool to interact with MongoDB.
- **MongoDB Compass**: GUI tool for MongoDB to visualize databases and collections.
- **MongoDB Server (`mongod`)**: Runs MongoDB as a service.

#### **Verify Installation:**

```bash
mongod --version
mongosh --version
```

---

## **3. Databases and Collections**

### **Understanding Databases in MongoDB**

- A **database** is a collection of related data stored together.
- In MongoDB, databases contain **collections** (similar to tables in SQL).
- Collections store **documents** (JSON-like objects).

### **Basic Database Commands:**

```javascript
// Show all databases
show dbs

// Create or switch to a database
use myDatabase

// Check the current database
db

// Drop a database
db.dropDatabase()
```

### **Collections in MongoDB**

- A **collection** is a group of MongoDB documents, similar to a table in SQL.
- Unlike tables, collections **do not enforce a fixed schema**.

### **Basic Collection Commands:**

```javascript
// Show collections in the current database
show collections

// Create a collection
db.createCollection("users")

// Drop a collection
db.users.drop()
```

---

## **4. MongoDB Data Types**

### **Common Data Types in MongoDB:**

| **Data Type**                  | **Example**                               | **Description**                    |
| ------------------------------ | ----------------------------------------- | ---------------------------------- |
| **String**                     | `"name": "John"`                          | Text data                          |
| **Number (Int, Double, Long)** | `"age": 25`                               | Integer and floating-point numbers |
| **Boolean**                    | `"isActive": true`                        | True or False values               |
| **Array**                      | `"skills": ["JavaScript", "Node.js"]`     | List of values                     |
| **Object (Embedded Document)** | `"address": {"city": "NY", "zip": 10001}` | Nested objects                     |
| **ObjectId**                   | `"_id": ObjectId("603c...")`              | Unique ID for each document        |
| **Date**                       | `"createdAt": ISODate("2023-01-01")`      | Date and time                      |
| **Null**                       | `"deletedAt": null`                       | Represents missing or empty values |

### **Example Document in MongoDB (BSON Format)**

```json
{
  "_id": ObjectId("603c..."),
  "name": "John Doe",
  "age": 30,
  "isActive": true,
  "skills": ["JavaScript", "MongoDB", "Node.js"],
  "address": {
    "city": "New York",
    "zip": 10001
  },
  "createdAt": ISODate("2025-03-09T12:00:00Z")
}
```

# **2. CRUD Operations**

- Creating Documents (`insertOne()`, `insertMany()`)
- Reading Documents (`find()`, `findOne()`, Query Operators)
- Updating Documents (`updateOne()`, `updateMany()`, `$set`, `$unset`, `$inc`)
- Deleting Documents (`deleteOne()`, `deleteMany()`)

---

## **1. Creating Documents** (`insertOne()`, `insertMany()`)

### **`insertOne()` - Insert a Single Document**

```javascript
db.users.insertOne({
  name: "Alice",
  age: 28,
  email: "alice@example.com",
  skills: ["JavaScript", "MongoDB"],
  isActive: true,
});
```

✅ **Result:**  
A single document is inserted into the `users` collection.

---

### **`insertMany()` - Insert Multiple Documents**

```javascript
db.users.insertMany([
  {
    name: "Bob",
    age: 32,
    email: "bob@example.com",
    skills: ["React", "Node.js"],
    isActive: false,
  },
  {
    name: "Charlie",
    age: 24,
    email: "charlie@example.com",
    skills: ["Python", "Django"],
    isActive: true,
  },
]);
```

✅ **Result:**  
Multiple documents are added at once.

---

## **2. Reading Documents** (`find()`, `findOne()`, Query Operators)

### **`findOne()` - Retrieve a Single Document**

```javascript
db.users.findOne({ name: "Alice" });
```

✅ **Result:**  
Returns the first document that matches the query.

---

### **`find()` - Retrieve Multiple Documents**

```javascript
db.users.find();
```

✅ **Result:**  
Returns all documents in the collection.

```javascript
db.users.find({ isActive: true });
```

✅ **Result:**  
Returns all users where `isActive` is `true`.

---

### **Query Operators**

#### **Comparison Operators**

```javascript
db.users.find({ age: { $gt: 25 } }); // Users older than 25
db.users.find({ age: { $gte: 30 } }); // Users 30 or older
db.users.find({ age: { $lt: 30 } }); // Users younger than 30
db.users.find({ age: { $ne: 28 } }); // Users NOT 28 years old
```

#### **Logical Operators**

```javascript
db.users.find({ $or: [{ age: { $lt: 25 } }, { isActive: true }] }); // Users younger than 25 OR active
db.users.find({ $and: [{ age: { $gte: 30 } }, { isActive: false }] }); // Users 30+ AND inactive
```

#### **Projection (Select Specific Fields)**

```javascript
db.users.find({}, { name: 1, email: 1, _id: 0 }); // Only show name and email, hide `_id`
```

---

## **3. Updating Documents** (`updateOne()`, `updateMany()`, `$set`, `$unset`, `$inc`)

### **`updateOne()` - Update a Single Document**

```javascript
db.users.updateOne(
  { name: "Alice" }, // Condition
  { $set: { age: 29 } } // Update
);
```

✅ **Result:**  
Updates Alice's age to `29`.

---

### **`updateMany()` - Update Multiple Documents**

```javascript
db.users.updateMany({ isActive: false }, { $set: { status: "inactive" } });
```

✅ **Result:**  
Adds a new field `status: "inactive"` to all inactive users.

---

### **Operators for Updates**

#### **`$set` - Modify Existing Fields**

```javascript
db.users.updateOne(
  { name: "Alice" },
  { $set: { email: "alice_new@example.com" } }
);
```

#### **`$unset` - Remove a Field**

```javascript
db.users.updateOne({ name: "Alice" }, { $unset: { skills: "" } });
```

✅ **Result:**  
Removes the `skills` field from Alice’s document.

#### **`$inc` - Increment a Number**

```javascript
db.users.updateOne({ name: "Alice" }, { $inc: { age: 1 } });
```

✅ **Result:**  
Increments Alice's age by `1`.

---

## **4. Deleting Documents** (`deleteOne()`, `deleteMany()`)

### **`deleteOne()` - Remove a Single Document**

```javascript
db.users.deleteOne({ name: "Alice" });
```

✅ **Result:**  
Deletes the first document where `name` is `"Alice"`.

---

### **`deleteMany()` - Remove Multiple Documents**

```javascript
db.users.deleteMany({ isActive: false });
```

✅ **Result:**  
Deletes all users who are inactive.

---

### **Final Thoughts 💡**

- Always **test queries carefully** before running `deleteMany()` or `updateMany()`.
- Use **indexes** for better performance on large datasets.
- The **aggregation pipeline** is useful for advanced queries.

# **3. Querying and Filtering Data**

- Comparison Operators (`$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`)
- Logical Operators (`$and`, `$or`, `$not`, `$nor`)
- Array Operators (`$in`, `$nin`, `$all`, `$elemMatch`)
- Projection (`find({}, { field: 1 })`)
- Sorting and Limiting (`sort()`, `limit()`, `skip()`)

---

## **1. Comparison Operators (`$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`)**

Used to filter documents based on specific conditions.

### **Example Dataset (users collection)**

```json
[
  { "name": "Alice", "age": 25, "city": "New York", "isActive": true },
  { "name": "Bob", "age": 30, "city": "Los Angeles", "isActive": false },
  { "name": "Charlie", "age": 28, "city": "Chicago", "isActive": true }
]
```

### **Using Comparison Operators**

```javascript
db.users.find({ age: { $eq: 25 } }); // Find users with age exactly 25
db.users.find({ age: { $ne: 25 } }); // Find users with age NOT 25
db.users.find({ age: { $gt: 25 } }); // Find users older than 25
db.users.find({ age: { $gte: 28 } }); // Find users 28 or older
db.users.find({ age: { $lt: 30 } }); // Find users younger than 30
db.users.find({ age: { $lte: 28 } }); // Find users 28 or younger
```

✅ **Result Example:**

- `$gt: 25` → Returns Bob (30) and Charlie (28).
- `$eq: 25` → Returns Alice (25).

---

## **2. Logical Operators (`$and`, `$or`, `$not`, `$nor`)**

Used to combine multiple conditions.

### **Using Logical Operators**

```javascript
db.users.find({
  $and: [{ age: { $gt: 25 } }, { isActive: true }],
});
// Find users older than 25 AND active (Charlie)

db.users.find({
  $or: [{ city: "New York" }, { city: "Los Angeles" }],
});
// Find users in New York OR Los Angeles (Alice & Bob)

db.users.find({
  age: { $not: { $gt: 25 } },
});
// Find users NOT older than 25 (Alice)

db.users.find({
  $nor: [{ age: { $gte: 30 } }, { isActive: false }],
});
// Find users who are NOT 30+ AND NOT inactive (Only Alice & Charlie)
```

✅ **Result Example:**

- `$and: [{ age: { $gt: 25 } }, { isActive: true }]` → Returns Charlie.
- `$or: [{ city: "New York" }, { city: "Los Angeles" }]` → Returns Alice & Bob.

---

## **3. Array Operators (`$in`, `$nin`, `$all`, `$elemMatch`)**

### **Example Dataset (products collection)**

```json
[
  { "name": "Laptop", "category": ["Electronics", "Computers"], "price": 1200 },
  { "name": "Headphones", "category": ["Electronics", "Audio"], "price": 100 },
  { "name": "Shoes", "category": ["Fashion", "Footwear"], "price": 50 }
]
```

### **Using Array Operators**

```javascript
db.products.find({ category: { $in: ["Electronics", "Fashion"] } });
// Find products in "Electronics" OR "Fashion" category (Laptop, Headphones, Shoes)

db.products.find({ category: { $nin: ["Electronics"] } });
// Find products NOT in "Electronics" category (Shoes)

db.products.find({ category: { $all: ["Electronics", "Computers"] } });
// Find products that contain BOTH "Electronics" AND "Computers" (Laptop)

db.products.find({
  category: { $elemMatch: { $eq: "Electronics" } },
});
// Find products where at least one element in the category array is "Electronics"
```

✅ **Result Example:**

- `$in: ["Electronics", "Fashion"]` → Returns Laptop, Headphones, Shoes.
- `$all: ["Electronics", "Computers"]` → Returns Laptop.

---

## **4. Projection (`find({}, { field: 1 })`)**

Used to **select specific fields** to return in query results.

### **Example Query**

```javascript
db.users.find({}, { name: 1, age: 1, _id: 0 });
```

✅ **Result:**

```json
[
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 28 }
]
```

- **`_id: 0`** → Excludes the `_id` field.
- **Default behavior:** `_id` is always included unless explicitly excluded.

---

## **5. Sorting and Limiting (`sort()`, `limit()`, `skip()`)**

Used to **sort**, **limit**, and **paginate** results.

### **Sorting (`sort()`)**

```javascript
db.users.find().sort({ age: 1 }); // Sort users by age in ascending order
db.users.find().sort({ age: -1 }); // Sort users by age in descending order
```

✅ **Result Example:**

- `{ age: 1 }` → Alice (25), Charlie (28), Bob (30).
- `{ age: -1 }` → Bob (30), Charlie (28), Alice (25).

---

### **Limiting Results (`limit()`)**

```javascript
db.users.find().limit(2);
```

✅ **Result:**  
Returns only the first **2** documents.

---

### **Skipping Documents (`skip()`)**

```javascript
db.users.find().skip(1).limit(2);
```

✅ **Result:**

- Skips **first document**, returns **next 2**.
- Useful for **pagination** (`page = (skip + limit)`).

---

### **Pagination Example** (Skip & Limit Combined)

```javascript
const page = 2;
const pageSize = 2;
db.users
  .find()
  .skip((page - 1) * pageSize)
  .limit(pageSize);
```

✅ **Effect:**

- `page = 1` → Skips 0, returns first **2** documents.
- `page = 2` → Skips **2**, returns next **2** documents.

---

## **🔥 Summary Table**

| Operator     | Purpose                       | Example                                                    |
| ------------ | ----------------------------- | ---------------------------------------------------------- |
| `$eq`        | Equal to                      | `{ age: { $eq: 25 } }`                                     |
| `$ne`        | Not equal to                  | `{ age: { $ne: 25 } }`                                     |
| `$gt`        | Greater than                  | `{ age: { $gt: 25 } }`                                     |
| `$gte`       | Greater than or equal         | `{ age: { $gte: 30 } }`                                    |
| `$lt`        | Less than                     | `{ age: { $lt: 30 } }`                                     |
| `$lte`       | Less than or equal            | `{ age: { $lte: 28 } }`                                    |
| `$and`       | AND condition                 | `{ $and: [{ age: { $gt: 25 } }, { isActive: true }] }`     |
| `$or`        | OR condition                  | `{ $or: [{ city: "New York" }, { city: "Los Angeles" }] }` |
| `$not`       | NOT condition                 | `{ age: { $not: { $gt: 25 } } }`                           |
| `$nor`       | NOT OR condition              | `{ $nor: [{ age: { $gte: 30 } }, { isActive: false }] }`   |
| `$in`        | Matches any in array          | `{ category: { $in: ["Electronics", "Fashion"] } }`        |
| `$nin`       | NOT in array                  | `{ category: { $nin: ["Electronics"] } }`                  |
| `$all`       | Matches all elements in array | `{ category: { $all: ["Electronics", "Computers"] } }`     |
| `$elemMatch` | Matches at least one element  | `{ category: { $elemMatch: { $eq: "Electronics" } } }`     |

---

# **4. Indexing in MongoDB**

- Importance of Indexing
- Creating Indexes (`createIndex()`)
- Types of Indexes (Single Field, Compound, Multikey, Text, Geospatial)
- Index Performance (`explain()`, `hint()`)

---

Indexes in MongoDB **improve query performance** by reducing the number of documents that need to be scanned. Without indexes, MongoDB performs a **collection scan**, which can be slow for large datasets.

---

## **1. Importance of Indexing**

🔹 **Faster Queries:** Indexes allow MongoDB to retrieve data efficiently.  
🔹 **Reduces Workload:** Instead of scanning the entire collection, MongoDB uses indexes to locate data quickly.  
🔹 **Improves Sorting Performance:** Sorting without an index requires MongoDB to load all documents into memory.  
🔹 **Supports Unique Constraints:** Indexes can enforce uniqueness in fields (e.g., unique usernames or emails).  
🔹 **Optimizes Geospatial and Full-Text Search:** Special indexes allow for text search and location-based queries.

📌 **Example Without Indexing**

```javascript
db.users.find({ age: 30 });
```

- Without an index, MongoDB will **scan every document** in the collection.
- This is **slow** when the collection contains millions of documents.

📌 **Example With Indexing**

```javascript
db.users.createIndex({ age: 1 });
```

- Now, MongoDB uses the index to **quickly find documents with age = 30**.

---

## **2. Creating Indexes (`createIndex()`)**

### **Basic Index on a Single Field**

```javascript
db.users.createIndex({ age: 1 }); // Ascending order
db.users.createIndex({ age: -1 }); // Descending order
```

✅ **Effect:**

- Speeds up queries like `db.users.find({ age: 30 })`.
- The order (`1` or `-1`) affects sorting but not filtering.

---

### **3. Types of Indexes**

### **1️⃣ Single Field Index**

- Indexes a single field.

```javascript
db.users.createIndex({ email: 1 });
```

✅ Optimizes queries like `db.users.find({ email: "user@example.com" })`.

---

### **2️⃣ Compound Index (Multiple Fields)**

- Indexes **multiple fields** in a specific order.

```javascript
db.users.createIndex({ age: 1, city: 1 });
```

✅ Optimizes queries like:

```javascript
db.users.find({ age: 30, city: "New York" });
```

⚠️ **Order matters** in compound indexes.

- `{ age: 1, city: 1 }` works for `(age, city)`, but not for `(city, age)`.

---

### **3️⃣ Multikey Index (For Arrays)**

- Indexes **elements inside an array**.

```javascript
db.products.createIndex({ tags: 1 });
```

✅ Optimizes queries like:

```javascript
db.products.find({ tags: "electronics" });
```

⚠️ **Only one multikey index per query** is allowed.

---

### **4️⃣ Text Index (For Full-Text Search)**

- Enables **search within text fields**.

```javascript
db.articles.createIndex({ content: "text" });
```

✅ Optimizes queries like:

```javascript
db.articles.find({ $text: { $search: "mongodb" } });
```

⚠️ **Only one text index per collection**.

---

### **5️⃣ Geospatial Index (For Location-Based Queries)**

- Required for **location-based searches**.

```javascript
db.places.createIndex({ location: "2dsphere" });
```

✅ Optimizes queries like:

```javascript
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-73.856077, 40.848447] },
      $maxDistance: 5000,
    },
  },
});
```

⚠️ **Use `2dsphere` for real-world locations, `2d` for flat coordinates**.

---

## **4. Index Performance (`explain()`, `hint()`)**

### **Checking Index Usage with `explain()`**

```javascript
db.users.find({ age: 30 }).explain("executionStats");
```

✅ Shows:

- **`COLLSCAN`** (Collection Scan) if no index is used. ❌
- **`IXSCAN`** (Index Scan) if an index is used. ✅

---

### **Forcing Index Usage with `hint()`**

```javascript
db.users.find({ age: 30 }).hint({ age: 1 });
```

✅ Forces MongoDB to use the `age` index.

- Useful when multiple indexes exist, and you want to test their impact.

---

## **🔥 Summary Table**

| Index Type       | Usage                  | Example                                           |
| ---------------- | ---------------------- | ------------------------------------------------- |
| **Single Field** | Simple queries         | `db.users.createIndex({ age: 1 })`                |
| **Compound**     | Multiple fields        | `db.users.createIndex({ age: 1, city: 1 })`       |
| **Multikey**     | Arrays                 | `db.products.createIndex({ tags: 1 })`            |
| **Text**         | Full-text search       | `db.articles.createIndex({ content: "text" })`    |
| **Geospatial**   | Location-based queries | `db.places.createIndex({ location: "2dsphere" })` |

---

# **5. Aggregation Framework**

- Aggregation Pipeline (`$match`, `$group`, `$project`, `$sort`, `$limit`)
- `$lookup` for Joins
- `$unwind` for Arrays
- `$bucket` and `$facet` for Data Grouping
- Performance Optimization in Aggregation

---

The **Aggregation Pipeline** is a **powerful framework** in MongoDB that allows for **data transformation, filtering, grouping, and analysis** in a sequence of stages.

---

## **1️⃣ Basics of the Aggregation Pipeline**

🔹 **Works in Stages** → Data flows through multiple **stages**, each performing a specific operation.  
🔹 **Faster than Map-Reduce** → Aggregation is **optimized for performance** compared to traditional queries.  
🔹 **Common Use Cases** → Reporting, data analytics, data transformation, and complex queries.

### **Basic Syntax**

```javascript
db.collection.aggregate([{ stage1 }, { stage2 }, { stage3 }]);
```

Each stage modifies the data and passes it to the next stage.

---

## **2️⃣ Aggregation Pipeline Stages**

### **1️⃣ `$match` → Filter Documents (Like `find()`)**

```javascript
db.orders.aggregate([{ $match: { status: "shipped" } }]);
```

✅ **Filters only shipped orders.**

- `$match` **should be used at the start** for best performance.

---

### **2️⃣ `$group` → Group Data**

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$amount" },
    },
  },
]);
```

✅ **Groups orders by `customerId` and calculates total spent.**

- `_id` is the field to group by.
- `$sum` computes the total amount spent by each customer.

---

### **3️⃣ `$project` → Restructure Data (Select Fields)**

```javascript
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      email: 1,
      _id: 0,
    },
  },
]);
```

✅ **Concatenates `firstName` and `lastName` into `fullName`**

- `_id: 0` → Excludes `_id` field.
- `$concat` joins strings.

---

### **4️⃣ `$sort` → Sort Data**

```javascript
db.orders.aggregate([
  { $sort: { amount: -1 } }, // Sort by amount (highest first)
]);
```

✅ **Sorts orders by amount in descending order.**

- `1` for **ascending**, `-1` for **descending**.

---

### **5️⃣ `$limit` → Limit Results**

```javascript
db.orders.aggregate([{ $sort: { amount: -1 } }, { $limit: 5 }]);
```

✅ **Returns the top 5 highest orders.**

- Works well with `$sort` for **leaderboards, top lists, etc.**

---

## **3️⃣ `$lookup` → Join Two Collections (SQL `JOIN`)**

MongoDB **does not have direct joins**, but `$lookup` can join two collections.

### **Example: Joining Users and Orders**

```javascript
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "userId",
      foreignField: "customerId",
      as: "orders",
    },
  },
]);
```

✅ **Joins `users` with `orders` where `userId` matches `customerId`.**

- **`from`** → Target collection (`orders`).
- **`localField`** → Field in the first collection (`userId`).
- **`foreignField`** → Matching field in the second collection (`customerId`).
- **`as`** → Name of the resulting array (`orders`).

📌 **Example Output:**

```json
{
  "name": "Alice",
  "userId": 1,
  "orders": [
    { "orderId": 101, "amount": 50 },
    { "orderId": 102, "amount": 75 }
  ]
}
```

---

## **4️⃣ `$unwind` → Flatten Arrays**

Used to **break an array into multiple documents**.

### **Example: Flattening an Orders Array**

```javascript
db.users.aggregate([{ $unwind: "$orders" }]);
```

✅ **Converts each order in the `orders` array into a separate document.**

📌 **Before:**

```json
{
  "name": "Alice",
  "orders": [
    { "orderId": 101, "amount": 50 },
    { "orderId": 102, "amount": 75 }
  ]
}
```

📌 **After `$unwind`:**

```json
{ "name": "Alice", "orderId": 101, "amount": 50 }
{ "name": "Alice", "orderId": 102, "amount": 75 }
```

---

## **5️⃣ `$bucket` → Group Data into Ranges**

Divides values into **custom-defined buckets**.

### **Example: Grouping Orders by Price Range**

```javascript
db.orders.aggregate([
  {
    $bucket: {
      groupBy: "$amount",
      boundaries: [0, 100, 500, 1000, 5000],
      default: "Other",
      output: { count: { $sum: 1 } },
    },
  },
]);
```

✅ **Groups orders into price ranges:**

- **`0 - 100`**
- **`100 - 500`**
- **`500 - 1000`**
- **`1000 - 5000`**
- `"Other"` for amounts beyond 5000.

---

## **6️⃣ `$facet` → Multiple Aggregations in One Query**

Allows running **multiple aggregations** at once.

### **Example: Two Different Analyses in One Query**

```javascript
db.orders.aggregate([
  {
    $facet: {
      topOrders: [{ $sort: { amount: -1 } }, { $limit: 5 }],
      totalSpentByCustomer: [
        { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
      ],
    },
  },
]);
```

✅ **Results:**

- `topOrders` → Top 5 highest orders.
- `totalSpentByCustomer` → Total spent per customer.

---

## **7️⃣ Aggregation Performance Optimization 🚀**

1️⃣ **Use `$match` First**

- `$match` **filters data before processing** to reduce workload.

```javascript
db.orders.aggregate([
  { $match: { status: "shipped" } }, // ✅ Place early for efficiency
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
]);
```

2️⃣ **Use Indexes**

- If filtering by `status`, create an index:

```javascript
db.orders.createIndex({ status: 1 });
```

- This **makes `$match` faster**.

3️⃣ **Avoid `$unwind` if Possible**

- `$unwind` can generate **many** documents.
- Instead, **use `$lookup` and `$group` when possible**.

4️⃣ **Use `$limit` and `$sort` Wisely**

- `$sort` on **large collections** can be slow.
- Ensure the **sorting field is indexed**.

5️⃣ **Check Performance with `explain()`**

```javascript
db.orders.aggregate([...]).explain("executionStats")
```

- Look for **COLLSCAN (bad)** vs. **IXSCAN (good)**.

---

## **🔥 Summary Table**

| Stage          | Purpose                     | Example                                                                                           |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------- |
| **`$match`**   | Filter documents            | `{ $match: { age: { $gt: 25 } } }`                                                                |
| **`$group`**   | Group and aggregate data    | `{ $group: { _id: "$city", total: { $sum: 1 } } }`                                                |
| **`$project`** | Select and transform fields | `{ $project: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }`                       |
| **`$sort`**    | Sort data                   | `{ $sort: { age: -1 } }`                                                                          |
| **`$limit`**   | Limit results               | `{ $limit: 5 }`                                                                                   |
| **`$lookup`**  | Join collections            | `{ $lookup: { from: "orders", localField: "userId", foreignField: "customerId", as: "orders" } }` |
| **`$unwind`**  | Flatten arrays              | `{ $unwind: "$orders" }`                                                                          |
| **`$bucket`**  | Group into ranges           | `{ $bucket: { groupBy: "$age", boundaries: [20, 30, 40] } }`                                      |
| **`$facet`**   | Multiple queries in one     | `{ $facet: { topOrders: [...], totalSpent: [...] } }`                                             |

---

# **6. Data Modeling in MongoDB**

- Embedded vs. Referenced Documents
- One-to-One, One-to-Many, and Many-to-Many Relationships
- Schema Design Best Practices

---

MongoDB is **schema-flexible**, but designing a good schema is **crucial** for performance and scalability.

This guide covers:  
✅ **Embedded vs. Referenced Documents**  
✅ **One-to-One, One-to-Many, and Many-to-Many Relationships**  
✅ **Schema Design Best Practices**

---

## **1️⃣ Embedded vs. Referenced Documents**

MongoDB supports two ways to **relate data**:

1. **Embedded (Denormalized)** → Store related data **inside** the document.
2. **Referenced (Normalized)** → Store related data in **separate collections** and reference them using IDs.

---

### **📍 Embedded Documents (Denormalized)**

- **Faster reads** since all data is stored in a single document.
- **Best for closely related data** (e.g., user profile & address).

📌 **Example: Embedding Address inside User Document**

```json
{
  "_id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}
```

✅ **Pros:**

- Faster reads (no joins needed).
- Simpler queries.

❌ **Cons:**

- Increases document size.
- Harder to update specific fields (e.g., address changes often).

---

### **📍 Referenced Documents (Normalized)**

- **Best for frequently updated or shared data** (e.g., orders & customers).
- **Uses `$lookup`** to join collections when needed.

📌 **Example: Storing Addresses in a Separate Collection**  
**Users Collection:**

```json
{
  "_id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "addressId": 101
}
```

**Addresses Collection:**

```json
{
  "_id": 101,
  "street": "123 Main St",
  "city": "New York",
  "zip": "10001"
}
```

✅ **Pros:**

- Reduces duplication (addresses can be reused).
- Smaller document size.
- Easier updates (change an address without affecting user data).

❌ **Cons:**

- Slower reads (requires `$lookup`).
- More complex queries.

---

## **2️⃣ One-to-One, One-to-Many, and Many-to-Many Relationships**

### **📍 One-to-One Relationship**

✅ **Example: A user has one profile**  
**📌 Best Approach:** **Embed profile data inside the user document.**

```json
{
  "_id": 1,
  "name": "Alice",
  "profile": {
    "bio": "Software Engineer",
    "avatar": "alice.jpg"
  }
}
```

✅ **Best for:** Rarely changing data, fast access.  
❌ **Avoid** embedding if the sub-document grows too large.

---

### **📍 One-to-Many Relationship**

✅ **Example: A blog has many comments**  
**📌 Option 1: Embed (if few comments per post)**

```json
{
  "_id": 1,
  "title": "MongoDB Guide",
  "comments": [
    { "user": "Alice", "text": "Great article!" },
    { "user": "Bob", "text": "Very helpful!" }
  ]
}
```

✅ **Fast reads**  
❌ Not scalable if comments grow indefinitely.

**📌 Option 2: Reference (if many comments per post)**  
**Posts Collection:**

```json
{
  "_id": 1,
  "title": "MongoDB Guide",
  "comments": [101, 102]
}
```

**Comments Collection:**

```json
{ "_id": 101, "postId": 1, "user": "Alice", "text": "Great article!" }
{ "_id": 102, "postId": 1, "user": "Bob", "text": "Very helpful!" }
```

✅ **Better scalability for large comments**  
❌ Requires `$lookup` to fetch comments.

---

### **📍 Many-to-Many Relationship**

✅ **Example: Students & Courses (Many students enroll in many courses)**  
**📌 Best Approach: Use Reference IDs in an Array**

**Students Collection:**

```json
{
  "_id": 1,
  "name": "Alice",
  "courses": [201, 202]
}
```

**Courses Collection:**

```json
{
  "_id": 201,
  "title": "MongoDB 101",
  "students": [1, 2, 3]
}
```

✅ Flexible, scalable  
❌ Requires `$lookup` for joining collections.

---

## **3️⃣ Schema Design Best Practices 🚀**

### **✅ Choose Embedded vs. Referenced Based on Data Usage**

- **Use Embedded Documents** when **data is always accessed together** (e.g., user profile).
- **Use Referenced Documents** when **data is large, shared, or updated frequently** (e.g., orders, customers).

---

### **✅ Optimize for Read or Write Performance**

📌 **If Read-heavy → Embed Data**  
📌 **If Write-heavy → Use References**  
📌 **For Balanced Workloads → Hybrid Approach**

---

### **✅ Keep Documents Small (<16MB Limit)**

- MongoDB has a **16MB document size limit**.
- Keep embedded arrays **small** (<100 elements).
- If an array grows too large, use **pagination** or reference another collection.

📌 **Example: Splitting Large Orders into Multiple Documents**  
Instead of storing **1000+ order items** inside an order, break them into smaller documents.

---

### **✅ Use Indexes for Fast Queries**

Indexes speed up searches, sorts, and lookups.

📌 **Example: Creating an Index on Email**

```javascript
db.users.createIndex({ email: 1 });
```

✅ **Queries like `db.users.find({ email: "alice@example.com" })` run faster.**

---

### **✅ Avoid Deep Nesting (Keep Documents Flat)**

MongoDB supports **nested documents**, but deep nesting **hurts performance**.

❌ **Bad Example (Deep Nesting)**

```json
{
  "user": {
    "profile": {
      "social": {
        "twitter": "@alice"
      }
    }
  }
}
```

✅ **Better Approach (Flat Structure)**

```json
{
  "userId": 1,
  "profile": { "twitter": "@alice" }
}
```

📌 **Reason:** Queries become faster when **documents remain shallow**.

---

### **✅ Use `$lookup` Only When Necessary**

- `$lookup` (joins) can **slow down queries** if used too much.
- If required, **index the foreign keys** to speed up joins.

📌 **Example: Indexing Foreign Key in Orders Collection**

```javascript
db.orders.createIndex({ customerId: 1 });
```

✅ Now, `db.orders.aggregate([ { $lookup: { ... } } ])` runs faster.

---

## **🚀 Final Takeaways**

| **Decision**        | **Best Choice**                           |
| ------------------- | ----------------------------------------- |
| User Profile        | **Embedded**                              |
| Orders & Customers  | **Referenced**                            |
| Blog & Comments     | **Hybrid (Embed small, Reference large)** |
| Tags & Categories   | **Referenced (Many-to-Many)**             |
| Data Changes Often  | **Referenced**                            |
| Read-Heavy Queries  | **Embedded**                              |
| Write-Heavy Updates | **Referenced**                            |

---

# **7. Transactions and ACID Compliance**

- Session-based Transactions (`startSession()`, `commitTransaction()`, `abortTransaction()`)
- Multi-Document Transactions

---

MongoDB supports **transactions** to ensure atomicity and consistency across multiple documents. This is useful when updating **multiple collections** or **multiple documents** within a collection.

This guide covers:  
✅ **Session-based Transactions** (`startSession()`, `commitTransaction()`, `abortTransaction()`)  
✅ **Multi-Document Transactions**

---

## **1️⃣ What Are Transactions?**

- Transactions **group multiple operations** into a single unit.
- If any operation fails, **all changes are rolled back** (ACID compliance).
- Transactions **work only in replica sets and sharded clusters** (not standalone servers).

---

## **2️⃣ Session-Based Transactions**

MongoDB transactions require a **session** to execute multiple operations together.

### **📌 Steps to Use Transactions**

1️⃣ **Start a session**  
2️⃣ **Start a transaction**  
3️⃣ **Execute multiple operations**  
4️⃣ **Commit the transaction** (if successful) or **abort** (if an error occurs)

---

### **✅ Example: Transferring Money Between Accounts**

💡 Scenario: **Move $100 from Alice to Bob**

```javascript
const session = db.getMongo().startSession(); // Start a session

session.startTransaction(); // Begin transaction

try {
  // Deduct $100 from Alice
  db.accounts.updateOne(
    { name: "Alice" },
    { $inc: { balance: -100 } },
    { session }
  );

  // Add $100 to Bob
  db.accounts.updateOne(
    { name: "Bob" },
    { $inc: { balance: 100 } },
    { session }
  );

  // Commit the transaction
  session.commitTransaction();
  print("✅ Transaction committed successfully!");
} catch (error) {
  // If any error occurs, rollback changes
  session.abortTransaction();
  print("❌ Transaction aborted due to error:", error);
} finally {
  session.endSession(); // End the session
}
```

---

### **📌 Key Functions**

| Function              | Description                           |
| --------------------- | ------------------------------------- |
| `startSession()`      | Starts a new session                  |
| `startTransaction()`  | Begins a new transaction              |
| `commitTransaction()` | Commits all operations if successful  |
| `abortTransaction()`  | Rolls back all operations if any fail |
| `endSession()`        | Closes the session                    |

---

## **3️⃣ Multi-Document Transactions**

MongoDB normally applies **operations per document**, but transactions let us **update multiple documents across collections atomically**.

### **✅ Example: Booking a Flight**

💡 **Scenario:** Book a flight by updating **two collections**:

1. **Reduce available seats in flights collection**
2. **Create a booking record in the reservations collection**

```javascript
const session = db.getMongo().startSession();
session.startTransaction();

try {
  // Step 1: Reduce available seats for the flight
  db.flights.updateOne(
    { flightNumber: "AI123", availableSeats: { $gte: 1 } },
    { $inc: { availableSeats: -1 } },
    { session }
  );

  // Step 2: Add a booking entry
  db.reservations.insertOne(
    {
      userId: 101,
      flightNumber: "AI123",
      status: "Confirmed",
    },
    { session }
  );

  // Commit transaction
  session.commitTransaction();
  print("✅ Flight booked successfully!");
} catch (error) {
  // Rollback changes if something goes wrong
  session.abortTransaction();
  print("❌ Booking failed. Rolling back transaction.", error);
} finally {
  session.endSession();
}
```

---

## **4️⃣ Best Practices for Transactions 🚀**

🔹 **Use transactions only when necessary** – Simple operations don’t need transactions.  
🔹 **Ensure indexes are used** to speed up queries inside transactions.  
🔹 **Keep transactions short** to avoid performance issues.  
🔹 **Use transactions in replica sets/sharded clusters** (they won’t work on standalone MongoDB).

---

# **8. Replication and High Availability**

- What is Replication?
- Replica Sets (Primary, Secondary, Arbiter)
- Failover and Automatic Elections

---

**Replication** in MongoDB ensures **high availability, fault tolerance, and data redundancy** by copying data across multiple servers.

This guide covers:  
✅ **What is Replication?**  
✅ **Replica Sets (Primary, Secondary, Arbiter)**  
✅ **Failover and Automatic Elections**

---

## **1️⃣ What is Replication?**

Replication **keeps multiple copies** of your data on different servers.

- Ensures **data availability** even if one server goes down.
- Helps with **disaster recovery** and **load balancing** for reads.

💡 **MongoDB achieves replication using Replica Sets.**

---

## **2️⃣ Replica Sets (Primary, Secondary, Arbiter)**

A **Replica Set** is a group of **MongoDB servers** (nodes) that store the same data.

### **📍 Components of a Replica Set**

| Role          | Description                                              |
| ------------- | -------------------------------------------------------- |
| **Primary**   | The main server that handles all write operations.       |
| **Secondary** | Copies data from the Primary and can serve read queries. |
| **Arbiter**   | Helps with elections but **doesn’t store data**.         |

📌 **A typical replica set consists of at least 3 nodes:**

- **1 Primary**
- **1 or more Secondary nodes**
- **(Optional) 1 Arbiter**

📌 **Example Setup:**

```
+-----------+      +------------+      +------------+
|  Primary  | ---> | Secondary 1 | --->| Secondary 2 |
+-----------+      +------------+      +------------+
       |
       v
  (Arbiter)  🗳️  [Optional]
```

---

### **✅ How to Create a Replica Set**

1️⃣ Start MongoDB instances with replication enabled:

```bash
mongod --replSet "rs0" --port 27017 --dbpath /data/db1
mongod --replSet "rs0" --port 27018 --dbpath /data/db2
mongod --replSet "rs0" --port 27019 --dbpath /data/db3
```

2️⃣ Connect to one instance and initiate the replica set:

```javascript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" },
  ],
});
```

3️⃣ Check the replica set status:

```javascript
rs.status();
```

---

## **3️⃣ Failover and Automatic Elections 🗳️**

When the **Primary node fails**, MongoDB **automatically elects a new Primary** from the Secondary nodes.

### **📌 How Automatic Elections Work:**

1️⃣ The Primary **goes down**.  
2️⃣ Secondary nodes **vote** for a new Primary.  
3️⃣ The node with the **highest priority and latest data** becomes the new Primary.  
4️⃣ A new Primary **takes over write operations**.

⏳ **Election time:** Usually within **10-12 seconds**.

---

### **✅ How to Force a Re-Election**

📌 If the **Primary is slow or unresponsive**, you can force an election:

```javascript
rs.stepDown();
```

This makes the **current Primary step down**, and a new Primary is elected.

---

## **🚀 Best Practices for Replication**

🔹 **Always use an odd number of nodes** (to prevent voting ties).  
🔹 **Place replicas in different data centers** for disaster recovery.  
🔹 **Monitor replication lag** to ensure secondaries are up-to-date.  
🔹 **Use read preferences** to optimize performance:

- `primary` → Read from Primary (default).
- `secondary` → Read from Secondary.
- `nearest` → Read from the closest node.

---

# **9. Sharding (Horizontal Scaling)**

- What is Sharding?
- Shard Key Selection
- Configuring a Sharded Cluster

---

Sharding in MongoDB helps distribute large datasets **across multiple servers**, improving **performance, scalability, and fault tolerance**.

This guide covers:  
✅ **What is Sharding?**  
✅ **Shard Key Selection**  
✅ **Configuring a Sharded Cluster**

---

## **1️⃣ What is Sharding?**

**Sharding** is a **horizontal scaling** technique where data is **split across multiple servers (shards)**.

💡 **Why Use Sharding?**  
✔️ **Handles large datasets** (scales beyond a single server’s storage).  
✔️ **Improves read/write performance** (queries run on multiple shards).  
✔️ **Ensures high availability** (data is replicated across shards).

📌 **Example: Without vs. With Sharding**

🚫 **Without Sharding (Single Server, Bottleneck)**

```
+--------------------+
| Large Database    |
| (Performance Issues) |
+--------------------+
```

✅ **With Sharding (Multiple Shards, Faster Queries)**

```
+------------+   +------------+   +------------+
| Shard 1   |   | Shard 2   |   | Shard 3   |
| (Data A)  |   | (Data B)  |   | (Data C)  |
+------------+   +------------+   +------------+
```

---

## **2️⃣ Shard Key Selection**

A **shard key** is the field used to distribute data across shards.

### **✅ Choosing the Right Shard Key**

| Shard Key Type                   | Pros                   | Cons                           |
| -------------------------------- | ---------------------- | ------------------------------ |
| **Hashed** (`hashed` index)      | Even data distribution | Slower range queries           |
| **Ranged** (`ascending` index)   | Fast range queries     | Uneven distribution (hotspots) |
| **Zone-Based** (`tagged` shards) | Custom distribution    | Complex setup                  |

💡 **Best Practices:**  
✔️ **Choose a field with high cardinality** (many unique values).  
✔️ **Avoid monotonically increasing keys** (e.g., timestamps).  
✔️ **Use compound keys** (`{ region: 1, userId: 1 }`) for better distribution.

---

## **3️⃣ Configuring a Sharded Cluster**

### **📌 Components of a Sharded Cluster**

| Component          | Role                                      |
| ------------------ | ----------------------------------------- |
| **Shards**         | Stores data (each shard is a replica set) |
| **Config Servers** | Stores metadata about shards              |
| **Mongos Router**  | Routes queries to the correct shard       |

📌 **Sharded Cluster Architecture**

```
+-------------------+
| Mongos (Router)  |  <--- Clients connect here
+-------------------+
      |
      v
+-------------------+      +-------------------+
| Config Server 1  | --->  | Config Server 2  |
+-------------------+      +-------------------+
      |
      v
+------------+  +------------+  +------------+
|  Shard 1   |  |  Shard 2   |  |  Shard 3   |
+------------+  +------------+  +------------+
```

---

### **✅ Steps to Set Up a Sharded Cluster**

1️⃣ **Start Config Servers**

```bash
mongod --configsvr --replSet configReplSet --port 27019 --dbpath /data/configdb
```

2️⃣ **Initiate Config Replica Set**

```javascript
rs.initiate({
  _id: "configReplSet",
  configsvr: true,
  members: [{ _id: 0, host: "localhost:27019" }],
});
```

3️⃣ **Start Shard Servers**

```bash
mongod --shardsvr --replSet shardReplSet1 --port 27018 --dbpath /data/shard1
```

4️⃣ **Start Mongos Router**

```bash
mongos --configdb configReplSet/localhost:27019 --port 27017
```

5️⃣ **Connect and Enable Sharding**

```javascript
sh.enableSharding("myDatabase");
sh.shardCollection("myDatabase.users", { userId: "hashed" });
```

---

## **🚀 Best Practices for Sharding**

✔️ **Choose the right shard key** to avoid hotspots.  
✔️ **Use hashed sharding for even distribution**.  
✔️ **Monitor shard balancing** (`balancerStatus()`).  
✔️ **Distribute shards across multiple data centers** for fault tolerance.

---

# **10. Security in MongoDB**

- Authentication & Authorization (Role-Based Access Control)
- Encryption (TLS/SSL, Field-Level Encryption)
- Auditing and Logging

---

Security is **critical** in MongoDB to protect data from **unauthorized access, breaches, and tampering**.

This guide covers:  
✅ **Authentication & Authorization (Role-Based Access Control)**  
✅ **Encryption (TLS/SSL, Field-Level Encryption)**  
✅ **Auditing and Logging**

---

## **1️⃣ Authentication & Authorization (Role-Based Access Control)**

MongoDB **authentication** verifies **who** is accessing the database, while **authorization** controls **what actions** they can perform.

### **📌 Authentication Methods**

| Authentication Method                                          | Description                                                           |
| -------------------------------------------------------------- | --------------------------------------------------------------------- |
| **SCRAM (Salted Challenge Response Authentication Mechanism)** | Default authentication method (secure password-based authentication). |
| **X.509 Certificates**                                         | Uses SSL/TLS certificates for authentication.                         |
| **LDAP (Lightweight Directory Access Protocol)**               | Integrates with corporate directories (e.g., Active Directory).       |
| **Kerberos Authentication**                                    | Uses a central authentication server for single sign-on (SSO).        |

#### **✅ Enabling Authentication**

1️⃣ **Start MongoDB with authentication enabled**

```bash
mongod --auth --dbpath /data/db
```

2️⃣ **Create an admin user**

```javascript
use admin;
db.createUser({
  user: "adminUser",
  pwd: "securePassword",
  roles: [{ role: "root", db: "admin" }]
});
```

3️⃣ **Connect with authentication**

```bash
mongo -u "adminUser" -p "securePassword" --authenticationDatabase "admin"
```

---

### **📍 Role-Based Access Control (RBAC)**

RBAC **restricts users** to specific **permissions** based on assigned roles.

| Built-in Role | Description                                     |
| ------------- | ----------------------------------------------- |
| `read`        | Can only read data.                             |
| `readWrite`   | Can read and write data.                        |
| `dbAdmin`     | Can manage indexes, collections, and profiling. |
| `userAdmin`   | Can create and modify user roles.               |
| `root`        | Full access (admin only).                       |

#### **✅ Example: Creating a Read-Only User**

```javascript
use myDatabase;
db.createUser({
  user: "readonlyUser",
  pwd: "password123",
  roles: [{ role: "read", db: "myDatabase" }]
});
```

---

## **2️⃣ Encryption (TLS/SSL, Field-Level Encryption)**

Encryption ensures that **data is protected** both **in transit** (between clients and servers) and **at rest** (stored data).

### **📌 Transport Encryption (TLS/SSL)**

🔒 **Encrypts communication** between the client and the MongoDB server using SSL/TLS.

#### **✅ Enabling TLS/SSL Encryption**

1️⃣ **Generate SSL certificates**

```bash
openssl req -newkey rsa:2048 -nodes -keyout mongodb-key.pem -x509 -days 365 -out mongodb-cert.pem
```

2️⃣ **Start MongoDB with TLS enabled**

```bash
mongod --tlsMode requireTLS --tlsCertificateKeyFile /etc/ssl/mongodb.pem
```

3️⃣ **Connect using TLS**

```bash
mongo --tls --host myserver.com --tlsCertificateKeyFile /etc/ssl/mongodb.pem
```

---

### **📌 Field-Level Encryption (FLE)**

🔒 **Encrypts specific fields** instead of encrypting the whole database.

**Why Use FLE?**  
✔️ Protects sensitive fields (e.g., credit cards, passwords).  
✔️ Encryption/decryption happens **on the client-side**, so **MongoDB never sees the plaintext data**.

#### **✅ Example: Encrypting a Field in a Document**

```javascript
db.customers.insertOne({
  name: "John Doe",
  ssn: "ENCRYPTED_STRING",
  creditCard: "ENCRYPTED_STRING",
});
```

---

## **3️⃣ Auditing and Logging**

Auditing **tracks who accessed the database, what operations were performed, and when**.

### **📌 Enabling Audit Logging**

1️⃣ **Start MongoDB with auditing enabled**

```bash
mongod --auditDestination file --auditFormat JSON --auditPath /var/log/mongodb_audit.log
```

2️⃣ **Check the audit log**

```bash
cat /var/log/mongodb_audit.log
```

---

## **🚀 Best Practices for MongoDB Security**

✔️ **Enable authentication and role-based access control (RBAC).**  
✔️ **Use TLS/SSL encryption for secure communication.**  
✔️ **Encrypt sensitive fields using Field-Level Encryption.**  
✔️ **Regularly monitor logs and enable audit logging.**  
✔️ **Restrict database access using IP whitelisting.**  
✔️ **Run MongoDB with the least privileges needed.**

---

# **11. MongoDB Performance Tuning**

- Profiling Queries (`db.setProfilingLevel()`)
- Connection Pooling
- Write Concerns and Read Preferences

---

Optimizing MongoDB performance requires **understanding query execution, managing connections efficiently, and fine-tuning read/write strategies**.

This guide covers:  
✅ **Profiling Queries (`db.setProfilingLevel()`)**  
✅ **Connection Pooling**  
✅ **Write Concerns and Read Preferences**

---

## **1️⃣ Profiling Queries (`db.setProfilingLevel()`)**

**Query Profiling** helps **identify slow queries** and optimize performance. MongoDB’s profiler logs slow queries in the `system.profile` collection.

### **📌 Profiling Levels**

| Level | Description                                            |
| ----- | ------------------------------------------------------ |
| `0`   | **Off** – No profiling (default).                      |
| `1`   | **Only slow queries** (queries exceeding a threshold). |
| `2`   | **All queries** are logged (use with caution).         |

### **✅ Enable Profiling for Slow Queries**

```javascript
db.setProfilingLevel(1, 100); // Logs queries slower than 100ms
```

### **✅ View Slow Queries**

```javascript
db.system.profile.find().sort({ ts: -1 }).limit(5);
```

### **✅ Enable Full Query Logging (Debugging)**

```javascript
db.setProfilingLevel(2);
```

📌 **Tip:** Keep profiling level `1` in production to avoid performance overhead.

---

## **2️⃣ Connection Pooling**

MongoDB handles thousands of client connections using **connection pooling**.

📌 **Connection pooling** reduces the overhead of creating new connections by **reusing existing ones**.

### **📌 How Connection Pooling Works?**

✔️ **Clients request a connection.**  
✔️ **If a connection exists, it is reused.**  
✔️ **If no available connection exists, a new one is created (up to a limit).**  
✔️ **Idle connections are closed after a timeout.**

### **✅ Configuring Connection Pooling in Node.js (Mongoose)**

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 50, // Maximum connections in the pool
  minPoolSize: 10, // Minimum idle connections
});
```

📌 **Best Practices:**  
✔️ Set `maxPoolSize` based on your application’s needs.  
✔️ Use **connection pooling in production** for scalability.  
✔️ **Monitor connection usage** with `db.serverStatus().connections`.

---

## **3️⃣ Write Concerns and Read Preferences**

**Write Concerns** and **Read Preferences** ensure **data consistency, durability, and performance** based on application needs.

---

### **📌 Write Concerns (Ensuring Data Durability)**

Write concerns **define how MongoDB acknowledges write operations**.

| Write Concern       | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `{ w: 0 }`          | **Unacknowledged** – No response from the server (fastest, but risky).             |
| `{ w: 1 }`          | **Acknowledged** – Confirms write to the Primary (default).                        |
| `{ w: "majority" }` | **Majority Acknowledged** – Confirms write to most nodes in a replica set (safer). |
| `{ w: 2 }`          | **Custom Acknowledged** – Ensures write is stored on at least 2 nodes.             |

### **✅ Example: Setting Write Concern**

```javascript
db.orders.insertOne(
  { orderId: 123, status: "shipped" },
  { writeConcern: { w: "majority", j: true, wtimeout: 2000 } }
);
```

📌 **Best Practice:** Use `{ w: "majority" }` in production to prevent data loss.

---

### **📌 Read Preferences (Optimizing Read Performance)**

Read preferences **control where MongoDB reads data from in a replica set**.

| Read Preference      | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `primary`            | **Reads from the Primary node** (default, strong consistency).    |
| `primaryPreferred`   | **Prefers Primary** but falls back to Secondary if unavailable.   |
| `secondary`          | **Reads from Secondary nodes** (faster but eventual consistency). |
| `secondaryPreferred` | **Prefers Secondary** but reads from Primary if needed.           |
| `nearest`            | Reads from the **nearest** node (lowest latency).                 |

### **✅ Example: Setting Read Preference**

```javascript
db.orders.find().readPref("secondaryPreferred");
```

📌 **Best Practice:**  
✔️ Use `primary` for **critical data consistency**.  
✔️ Use `secondaryPreferred` for **read-heavy applications** (analytics, reporting).  
✔️ Use `nearest` for **geo-distributed applications**.

---

## **🚀 Best Practices for Performance Optimization**

✔️ Use **profiling** to detect slow queries (`db.setProfilingLevel(1, 100)`).  
✔️ **Optimize connection pooling** (`maxPoolSize` & `minPoolSize`).  
✔️ Adjust **write concerns** (`w: "majority"`) for durability.  
✔️ Use **read preferences** based on **consistency vs. performance trade-off**.  
✔️ **Monitor and tune performance** (`db.serverStatus()`, `db.currentOp()`).

---

# **12. MongoDB with Node.js**

- Connecting MongoDB with Node.js using Mongoose
- CRUD Operations with Mongoose
- Schema and Model Validation

---

Mongoose is a **popular ODM (Object Data Modeling) library** for MongoDB and Node.js. It simplifies database interactions by providing **schema-based models, validation, and query-building features**.

This guide covers:  
✅ **Connecting MongoDB with Node.js using Mongoose**  
✅ **CRUD Operations with Mongoose**  
✅ **Schema and Model Validation**

---

## **1️⃣ Connecting MongoDB with Node.js using Mongoose**

### **📌 Install Mongoose**

```bash
npm install mongoose
```

### **✅ Connect to MongoDB**

```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 Connected to MongoDB!"))
  .catch((err) => console.error("❌ Connection failed:", err));
```

📌 **Best Practices:**  
✔️ Always handle connection errors using `.catch()`.  
✔️ Use `useNewUrlParser` and `useUnifiedTopology` to avoid deprecation warnings.

---

## **2️⃣ CRUD Operations with Mongoose**

Let's create a **User model** and perform **Create, Read, Update, Delete (CRUD) operations**.

### **📌 Define a Schema and Model**

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  age: Number,
});

const User = mongoose.model("User", userSchema);
```

---

### **✅ Create a Document (`INSERT`)**

```javascript
const createUser = async () => {
  try {
    const newUser = new User({
      name: "Alice",
      email: "alice@example.com",
      age: 25,
    });
    await newUser.save();
    console.log("✅ User created:", newUser);
  } catch (err) {
    console.error("❌ Error creating user:", err);
  }
};

createUser();
```

---

### **✅ Read Documents (`FIND`)**

```javascript
const getUsers = async () => {
  const users = await User.find();
  console.log("📌 All Users:", users);
};

getUsers();
```

📌 **Query Filters**  
✔️ `User.find({ age: { $gt: 20 } })` → Find users older than 20.  
✔️ `User.findOne({ email: "alice@example.com" })` → Find a user by email.

---

### **✅ Update a Document (`UPDATE`)**

```javascript
const updateUser = async () => {
  const updatedUser = await User.findOneAndUpdate(
    { email: "alice@example.com" }, // Filter
    { age: 26 }, // Update
    { new: true } // Return updated document
  );
  console.log("🔄 Updated User:", updatedUser);
};

updateUser();
```

---

### **✅ Delete a Document (`DELETE`)**

```javascript
const deleteUser = async () => {
  await User.deleteOne({ email: "alice@example.com" });
  console.log("🗑️ User deleted!");
};

deleteUser();
```

---

## **3️⃣ Schema and Model Validation**

Mongoose provides **built-in validators** to ensure **data integrity**.

### **📌 Schema Validation Example**

```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
  age: { type: Number, min: 18, max: 100 },
});

const User = mongoose.model("User", userSchema);
```

### **✅ Validation in Action**

```javascript
const createUser = async () => {
  try {
    const user = new User({ name: "", email: "invalidEmail", age: 150 });
    await user.save();
  } catch (err) {
    console.error("❌ Validation Error:", err.message);
  }
};

createUser();
```

📌 **Common Validators:**  
✔️ `required: true` → Ensures field is required.  
✔️ `unique: true` → Ensures uniqueness (email).  
✔️ `match: /\S+@\S+\.\S+/` → Ensures a valid email format.  
✔️ `min: 18, max: 100` → Restricts age values.

---

## **🚀 Best Practices**

✔️ Always **handle errors** using `try-catch`.  
✔️ Use **validations** to maintain **data integrity**.  
✔️ Prefer **Mongoose models** over raw MongoDB queries.  
✔️ Use **async/await** for cleaner, non-blocking code.

---

# **13. Backup and Restore**

- `mongodump` and `mongorestore`
- `mongoexport` and `mongoimport`
- Cloud Backup Solutions (MongoDB Atlas)

---

Ensuring **data backup and recovery** is **critical** for maintaining MongoDB databases. MongoDB offers several tools for **backing up, restoring, exporting, and importing data**.

This guide covers:  
✅ **`mongodump` and `mongorestore`** (Binary Backup & Restore)  
✅ **`mongoexport` and `mongoimport`** (JSON/CSV Export & Import)  
✅ **Cloud Backup Solutions (MongoDB Atlas)**

---

## **1️⃣ `mongodump` and `mongorestore` (Binary Backup & Restore)**

The **`mongodump`** and **`mongorestore`** commands create and restore **binary backups** of your MongoDB databases.

### **📌 `mongodump` (Backup MongoDB Database)**

This creates a **binary snapshot** of your database.

```bash
mongodump --db myDatabase --out /backup/
```

📌 **Options:**  
✔️ `--db myDatabase` → Backup a specific database.  
✔️ `--out /backup/` → Save the backup in `/backup/` directory.  
✔️ `--archive=mybackup.gz --gzip` → Create a **compressed** backup.  
✔️ `--host <host> --port <port>` → Specify a remote database.

---

### **📌 `mongorestore` (Restore MongoDB Backup)**

This restores the backup created by `mongodump`.

```bash
mongorestore --db myDatabase /backup/myDatabase
```

📌 **Options:**  
✔️ `--drop` → Drops existing collections before restoring.  
✔️ `--archive=mybackup.gz --gzip` → Restore from a compressed backup.

✅ **Example: Restore from a Compressed Archive**

```bash
mongorestore --gzip --archive=mybackup.gz
```

---

## **2️⃣ `mongoexport` and `mongoimport` (JSON/CSV Export & Import)**

The **`mongoexport`** and **`mongoimport`** commands are used for exporting and importing **JSON or CSV data**.

### **📌 `mongoexport` (Export Data as JSON/CSV)**

```bash
mongoexport --db myDatabase --collection users --out users.json
```

📌 **Options:**  
✔️ `--collection users` → Export data from the `users` collection.  
✔️ `--jsonArray` → Export data as a **JSON array** (useful for imports).  
✔️ `--type=csv --fields name,email,age --out users.csv` → Export as CSV.

✅ **Example: Export Users as CSV**

```bash
mongoexport --db myDatabase --collection users --type=csv --fields name,email,age --out users.csv
```

---

### **📌 `mongoimport` (Import JSON/CSV Data)**

```bash
mongoimport --db myDatabase --collection users --file users.json --jsonArray
```

📌 **Options:**  
✔️ `--jsonArray` → Required if JSON is an array (`[ {...}, {...} ]`).  
✔️ `--drop` → Deletes existing data before importing.

✅ **Example: Import CSV Data**

```bash
mongoimport --db myDatabase --collection users --type=csv --headerline --file users.csv
```

✔️ `--headerline` → Uses the first row as field names.

---

## **3️⃣ Cloud Backup Solutions (MongoDB Atlas)**

MongoDB Atlas provides **automated backups** with **point-in-time recovery** and **cloud storage**.

### **📌 Enabling Automated Backups in MongoDB Atlas**

1. **Go to** MongoDB Atlas Dashboard.
2. **Select your cluster** and navigate to **Backup**.
3. **Enable Backup** and configure snapshot settings.
4. Choose **Daily, Weekly, or Hourly backups**.

✅ **Restoring from a Backup**

1. Go to **Backup > Snapshots**.
2. Select a **backup snapshot**.
3. Click **Restore** to a new cluster or **download** for local use.

📌 **Best Practice:** Always enable **Cloud Backups** for production databases.

---

## **🚀 Best Practices for MongoDB Backups**

✔️ **Use `mongodump` for full backups**, **`mongoexport` for data migrations**.  
✔️ **Automate backups** using **cron jobs** or **MongoDB Atlas**.  
✔️ **Compress backups (`--gzip`)** to save space.  
✔️ **Store backups securely** in **AWS S3, Google Cloud, or local storage**.  
✔️ **Test restores regularly** to ensure backups work.

---

# **14. MongoDB Atlas (Cloud Database as a Service)**

- Setting Up an Atlas Cluster
- Connecting to Atlas from Applications
- Monitoring and Performance Optimization
---

MongoDB Atlas is a **fully managed cloud database service** that provides **high availability, scalability, and security**.  

This guide covers:  
✅ **Setting Up an Atlas Cluster**  
✅ **Connecting to Atlas from Applications**  
✅ **Monitoring and Performance Optimization**  

---

## **1️⃣ Setting Up an Atlas Cluster**  

### **📌 Step 1: Create a MongoDB Atlas Account**  
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
2. Click **Start Free** and create an account.  
3. Log in to the **Atlas Dashboard**.  

---

### **📌 Step 2: Create a New Cluster**  
1. Click **Create a Cluster**.  
2. Choose **Shared Cluster (Free Tier)** or **Dedicated Cluster**.  
3. Select a **Cloud Provider** (AWS, GCP, Azure).  
4. Pick a **Region** (closer to your users for lower latency).  
5. Click **Create Cluster** (takes a few minutes).  

---

### **📌 Step 3: Configure Security Settings**  
1. **Add Database User**  
   - Go to **Database Access** → Click **Add New Database User**.  
   - Set **Username & Password**.  
   - Choose **Role: Atlas Admin** (or restrict access if needed).  

2. **Allow Network Access**  
   - Go to **Network Access** → Click **Add IP Address**.  
   - Select **"Allow Access from Anywhere"** (for development).  
   - Or **add your specific IP address** for better security.  

✅ **Your Atlas Cluster is now ready! 🎉**  

---

## **2️⃣ Connecting to Atlas from Applications**  

### **📌 Step 1: Get the Connection String**  
1. Go to **Clusters** → Click **Connect**.  
2. Choose **"Connect Your Application"**.  
3. Copy the **MongoDB URI**, which looks like:  
   ```
   mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
   ```

---

### **📌 Step 2: Connect Using Mongoose in Node.js**  
Install Mongoose:  
```bash
npm install mongoose
```

Connect to MongoDB Atlas:  
```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:password@cluster0.mongodb.net/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas!"))
.catch(err => console.error("❌ Connection Error:", err));
```

📌 **Best Practices:**  
✔️ Store credentials in **environment variables** instead of hardcoding.  
✔️ Use `retryWrites=true&w=majority` for better reliability.  

---

## **3️⃣ Monitoring and Performance Optimization**  

### **📌 1. Real-Time Monitoring in Atlas**  
- Go to **Atlas Dashboard** → **Clusters** → **Metrics**.  
- Check **CPU Usage, Memory, Query Performance, and Connections**.  
- Set **Alerts** for high resource usage.  

---

### **📌 2. Performance Optimization Techniques**  

✅ **Indexing for Faster Queries**  
```javascript
db.users.createIndex({ email: 1 });
```
✔️ Use **indexes** on frequently queried fields.  
✔️ Use `explain()` to analyze query performance.  

✅ **Sharding for Large Databases**  
✔️ Distribute data across multiple servers.  
✔️ Choose an **optimal shard key** to prevent bottlenecks.  

✅ **Connection Pooling for Efficiency**  
```javascript
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 10 });
```
✔️ Increase **poolSize** for high-traffic applications.  

✅ **Optimize Aggregation Pipelines**  
✔️ Filter data **early** using `$match`.  
✔️ Use `$project` to return **only necessary fields**.  

---

## **🚀 Best Practices for Atlas**  
✔️ Use **Replica Sets** for high availability.  
✔️ Enable **Automatic Backups** for data recovery.  
✔️ Monitor slow queries using **Atlas Performance Advisor**.  
✔️ Set up **Multi-Region Clusters** for global availability.  

---
