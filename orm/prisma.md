## 🔰 PART 1: Prisma Basics

---

### ✅ 1. **Installing Prisma and Initializing Project**

```bash
mkdir prisma-demo && cd prisma-demo
npm init -y
npm install prisma --save-dev
npx prisma init
```

This creates:

- `.env` → to store your DB credentials
- `prisma/schema.prisma` → the main config file

---

### ✅ 2. **Setting Up PostgreSQL Connection in `.env`**

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"
```

---

### ✅ 3. **Creating Your First Model**

Update `prisma/schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

Then run:

```bash
npx prisma migrate dev --name init
```

This creates the `User` table in your PostgreSQL DB and generates the Prisma Client.

---

### ✅ 4. **Using Prisma Client (Basic CRUD)**

Install client:

```bash
npm install @prisma/client
```

Create a file `index.js`:

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create
  const user = await prisma.user.create({
    data: { name: "John", email: "john@example.com" },
  });

  // Read
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // Update
  const updatedUser = await prisma.user.update({
    where: { email: "john@example.com" },
    data: { name: "John Updated" },
  });

  // Delete
  await prisma.user.delete({ where: { email: "john@example.com" } });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
```

---

## 🧩 PART 2: Relations in Prisma

Prisma supports:

- **One-to-One**
- **One-to-Many**
- **Many-to-Many**

---

### 🔗 1. One-to-One Relation

#### Example: `User` and `Profile`

```prisma
model User {
  id      Int     @id @default(autoincrement())
  email   String  @unique
  profile Profile?
}

model Profile {
  id     Int  @id @default(autoincrement())
  bio    String
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}
```

#### Create with relation:

```js
const user = await prisma.user.create({
  data: {
    email: "one2one@example.com",
    profile: {
      create: {
        bio: "Software Engineer",
      },
    },
  },
  include: { profile: true },
});
```

---

### 🔗 2. One-to-Many Relation

#### Example: `User` and `Post`

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  posts Post[]
}

model Post {
  id      Int    @id @default(autoincrement())
  title   String
  content String
  user    User   @relation(fields: [userId], references: [id])
  userId  Int
}
```

#### Create User with Posts:

```js
const user = await prisma.user.create({
  data: {
    email: "one2many@example.com",
    posts: {
      create: [
        { title: "First Post", content: "Hello world!" },
        { title: "Second Post", content: "Another post" },
      ],
    },
  },
  include: { posts: true },
});
```

---

### 🔗 3. Many-to-Many Relation

In a **many-to-many relationship**, a record in **Table A** can be associated with **many records in Table B**, and vice versa.

- There are two ways to defined **Implicit and Explicit**

**Prisma does create a separate join table** under the hood to manage **many-to-many (M\:N)** relations. Let's understand this with full clarity.

---

#### ✅ Implicit Many-to-Many

```prisma
model User {
  id     Int     @id @default(autoincrement())
  name   String
  groups Group[]  // many-to-many with Group
}

model Group {
  id     Int     @id @default(autoincrement())
  name   String
  users  User[]   // many-to-many with User
}
```

#### 🔍 What Prisma Does:

- Prisma automatically **creates a join table** named `_GroupToUser` (or something similar).
- You won't see this table in your `schema.prisma`, but it will exist in the database.

#### 🧱 Join Table Structure (auto-created):

```sql
CREATE TABLE _GroupToUser (
  A INTEGER REFERENCES User(id),
  B INTEGER REFERENCES Group(id),
  PRIMARY KEY (A, B)
);
```

---

#### ⚙️ Explicit Many-to-Many

You can define the join table **explicitly** if you want more control (e.g., add extra fields like timestamps).

```prisma
model User {
  id        Int        @id @default(autoincrement())
  name      String
  userGroups UserGroup[]
}

model Group {
  id        Int        @id @default(autoincrement())
  name      String
  userGroups UserGroup[]
}

model UserGroup {
  user   User @relation(fields: [userId], references: [id])
  userId Int

  group   Group @relation(fields: [groupId], references: [id])
  groupId Int

  joinedAt DateTime @default(now())

  @@id([userId, groupId]) // Composite primary key
}
```

#### Advantages of Explicit Many-to-Many:

- You can store extra data like `joinedAt`, `role`, etc.
- More flexibility in querying and indexing.

---

#### 📦 Prisma Migration Output (for implicit)

When you run:

```bash
npx prisma migrate dev --name add-many-to-many
```

Prisma creates the required join table in the database schema even if it’s not shown in `schema.prisma`.

---

#### 📌 Summary

| Feature             | Implicit Many-to-Many       | Explicit Many-to-Many     |
| ------------------- | --------------------------- | ------------------------- |
| Join Table Visible? | ❌ (auto-managed by Prisma) | ✅ (defined manually)     |
| Add Extra Fields?   | ❌ Not possible             | ✅ You can add fields     |
| Use Case            | Simple M\:N relations       | Complex joins or metadata |

---

## 🔍 PART 3: Advanced Queries

---

### 🔎 1. Nested Queries

```js
const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
});
```

---

### 🔎 2. Filtering with `where`, `AND`, `OR`

```js
const filteredUsers = await prisma.user.findMany({
  where: {
    email: {
      contains: "@example.com",
    },
    AND: [
      {
        posts: {
          some: {
            title: {
              contains: "First",
            },
          },
        },
      },
    ],
  },
});
```

---

### 🔎 3. Sorting and Pagination

```js
const paginatedPosts = await prisma.post.findMany({
  orderBy: { id: "desc" },
  skip: 0,
  take: 10,
});
```

---

### 🔎 4. Aggregation

```js
const count = await prisma.post.count();
const stats = await prisma.post.aggregate({
  _avg: { id: true },
  _max: { id: true },
  _min: { id: true },
});
```

---

## 🔄 PART 4: Transactions

Prisma supports both **interactive** and **batch** transactions.

---

### 🔁 1. Batch Transactions

```js
await prisma.$transaction([
  prisma.user.create({ data: { email: "a@demo.com" } }),
  prisma.user.create({ data: { email: "b@demo.com" } }),
]);
```

---

### 🔁 2. Interactive Transactions

```js
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { email: "transact@example.com" },
  });

  await tx.profile.create({
    data: { bio: "In a transaction", userId: user.id },
  });
});
```

---

## 🧩 PART 5: Middleware, Seeding, and Raw SQL

---

### 🧱 1. Prisma Middleware

Middleware allows you to **hook into Prisma's lifecycle** and log or transform operations before they execute.

#### Setup example: Log every query

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  console.log(`Query: ${params.model}.${params.action}`);
  const result = await next(params);
  return result;
});

async function main() {
  await prisma.user.findMany();
}

main().finally(() => prisma.$disconnect());
```

---

### 🌱 2. Seeding the Database

1. Add this to `package.json`:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

2. Create `prisma/seed.js`:

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "seed@example.com",
      posts: {
        create: { title: "Seeded post", content: "Seed data" },
      },
    },
  });
}

main()
  .then(() => console.log("**DATA INSERTED SUCCESSFULLY**"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

3. Run:

```bash
npx prisma db seed
```

---

### 🛠️ 3. Raw SQL Queries

Useful when Prisma doesn’t support a certain query.

```js
const allUsers = await prisma.$queryRaw`SELECT * FROM "User"`;
```

Avoid using `prisma.$executeRaw` or `$queryRawUnsafe` with dynamic inputs unless using parameterized queries to prevent SQL injection.

---

## ✅ Bonus: Prisma Studio for Visual Database

```bash
npx prisma studio
```

Opens a browser GUI to manage and edit DB entries.

---

## 🧪 PART 6:Testing Prisma with Jest

- Use **Jest** to test Prisma-based services
- Use a real **PostgreSQL test database**
- Reset DB between tests using `migrate reset` or transaction rollbacks
- Seed data for tests

---

### 🛠️ 1. Setup Project

Assume you already have:

- Prisma schema and `@prisma/client`
- A `User` model like this:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

---

### 🧪 2. Install Testing Tools

```bash
npm install --save-dev jest ts-jest @types/jest
npm install --save-dev supertest
```

> If using TypeScript, initialize config:

```bash
npx ts-jest config:init
```

---

### 🧪 3. Create a Test Database

Create a separate PostgreSQL DB called `myapp_test`.

Update `.env.test`:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp_test"
```

---

### 🔄 4. Reset DB Before Each Test

In your test file or setup file:

#### `prisma-test-utils.ts` (Reusable)

```ts
import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import path from "path";

const prisma = new PrismaClient();

export async function resetTestDB() {
  execSync(
    "npx prisma migrate reset --force --skip-seed --schema=./prisma/schema.prisma",
    {
      stdio: "inherit",
      env: {
        ...process.env,
        DATABASE_URL: process.env.DATABASE_URL, // from .env.test
      },
    }
  );
}
```

---

### 🧪 5. Write a Jest Test Using Prisma

#### `user.test.ts`

```ts
import { PrismaClient } from "@prisma/client";
import { resetTestDB } from "./prisma-test-utils";

const prisma = new PrismaClient();

beforeAll(async () => {
  await resetTestDB();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("User Model", () => {
  it("should create a user", async () => {
    const user = await prisma.user.create({
      data: {
        name: "Test User",
        email: "test@example.com",
      },
    });

    expect(user.id).toBeDefined();
    expect(user.email).toBe("test@example.com");
  });

  it("should find a user by email", async () => {
    await prisma.user.create({
      data: { name: "Find Me", email: "findme@example.com" },
    });

    const user = await prisma.user.findUnique({
      where: { email: "findme@example.com" },
    });

    expect(user?.name).toBe("Find Me");
  });
});
```

---

### ⚙️ 6. Run Tests Using `.env.test`

#### Add script to `package.json`

```json
"scripts": {
  "test": "cross-env NODE_ENV=test DATABASE_URL=$(cat .env.test | grep DATABASE_URL | cut -d '=' -f2-) jest"
}
```

Or manually run:

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp_test" npx jest
```

---

### 🧼 7. Alternative: Use Transactions for Speed (Optional)

Instead of resetting the DB every time, wrap each test in a transaction:

```ts
let tx: PrismaClient;

beforeEach(async () => {
  tx = new PrismaClient();
  await tx.$executeRaw`BEGIN`;
});

afterEach(async () => {
  await tx.$executeRaw`ROLLBACK`;
  await tx.$disconnect();
});
```

> ⚠️ Works best for unit-style tests, not end-to-end.

---

### ✅ Summary

| Tool            | Purpose                          |
| --------------- | -------------------------------- |
| Jest            | Test framework                   |
| Prisma          | DB client with migration support |
| PostgreSQL      | Real test database               |
| `migrate reset` | Ensure clean DB per test run     |
| `supertest`     | For REST API tests (optional)    |

---

Here’s a list of the **most popular and commonly used Prisma ORM methods**, grouped by category — covering **CRUD, filtering, transactions, raw queries, and advanced operations**.

---

## 📦 PART 7: Important prisma methods

### CRUD Methods (Core Operations)

| Method         | Description                                  |
| -------------- | -------------------------------------------- |
| `findMany()`   | Fetch multiple records                       |
| `findUnique()` | Fetch one record by unique field (like `id`) |
| `findFirst()`  | Fetch the first matching record              |
| `create()`     | Insert a new record                          |
| `createMany()` | Insert multiple records at once              |
| `update()`     | Update a record by unique field              |
| `updateMany()` | Update multiple records with filter          |
| `delete()`     | Delete a record by unique field              |
| `deleteMany()` | Delete multiple records                      |
| `upsert()`     | Update if exists, otherwise create           |
| `count()`      | Count number of matching records             |

---

### 🔍 Filtering, Sorting, and Pagination

| Feature                | Example Syntax                                 |
| ---------------------- | ---------------------------------------------- |
| Filtering              | `where: { email: { contains: "@gmail.com" } }` |
| AND / OR / NOT         | `where: { AND: [...], OR: [...], NOT: [...] }` |
| Include related data   | `include: { posts: true }`                     |
| Select specific fields | `select: { name: true, email: true }`          |
| Sorting                | `orderBy: { createdAt: 'desc' }`               |
| Pagination (offset)    | `skip: 10, take: 10`                           |
| Pagination (cursor)    | `cursor: { id: 5 }, take: 5`                   |

---

### 💡 Aggregation & Grouping

| Method        | Description                                |
| ------------- | ------------------------------------------ |
| `aggregate()` | Get stats: `count`, `avg`, `sum`, etc.     |
| `groupBy()`   | Group results by field (like SQL GROUP BY) |

**Example:**

```ts
await prisma.user.aggregate({
  _count: { email: true },
  _avg: { id: true },
});
```

---

### 🔄 Transactions

| Method                   | Use Case                          |
| ------------------------ | --------------------------------- |
| `$transaction([])`       | Batch multiple queries atomically |
| `$transaction(async tx)` | Interactive transaction           |

**Example:**

```ts
await prisma.$transaction([
  prisma.user.create({ data: {...} }),
  prisma.post.create({ data: {...} })
]);
```

---

### 🛠️ Raw SQL Queries

| Method        | Purpose                          |
| ------------- | -------------------------------- |
| `$queryRaw`   | Perform a raw SELECT query       |
| `$executeRaw` | Perform raw INSERT/UPDATE/DELETE |

**Example:**

```ts
await prisma.$queryRaw`SELECT * FROM "User" WHERE id = ${userId}`;
```

---

### 🧪 Utility & Meta Methods

| Method              | Description                       |
| ------------------- | --------------------------------- |
| `$connect()`        | Connect to DB manually (optional) |
| `$disconnect()`     | Disconnect from DB                |
| `$on('beforeExit')` | Hook to handle cleanup            |
| `$use()`            | Middleware hook                   |

---

### ✅ Most Frequently Used in Practice

1. `findMany`, `findUnique`, `create`, `update`, `delete`
2. `include`, `where`, `orderBy`, `skip`, `take`
3. `count`, `aggregate`
4. `$transaction`
5. `$queryRaw` (when Prisma doesn’t support a complex query)

---

## 📈 PART 8: Performance and Optimization

### 🚀 PART 1: Query Performance Optimization

---

#### ✅ 1. Select Only Needed Fields (`select` and `include`)

**❌ Bad**: Fetching everything (default)

```ts
const users = await prisma.user.findMany();
```

**✅ Good**: Select only what you need

```ts
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
  },
});
```

---

#### ✅ 2. Avoid N+1 Query Problem (Use `include`)

**❌ Bad**: Looping and calling separate queries

```ts
const users = await prisma.user.findMany();
for (const user of users) {
  const posts = await prisma.post.findMany({ where: { userId: user.id } });
}
```

**✅ Good**: Use `include` to load relations in one query

```ts
const users = await prisma.user.findMany({
  include: { posts: true },
});
```

---

#### ✅ 3. Use Indexes in Prisma Models

Add `@unique`, `@id`, or `@@index` in your `schema.prisma`:

```prisma
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  published Boolean
  createdAt DateTime @default(now())

  @@index([published])
}
```

This improves query speed on filtered/sorted fields.

---

#### ✅ 4. Pagination (Avoid `findMany` without `take`)

Fetching huge datasets can kill memory.

**✅ Use `skip` & `take`:**

```ts
const page = 2;
const pageSize = 10;

const posts = await prisma.post.findMany({
  skip: (page - 1) * pageSize,
  take: pageSize,
  orderBy: { createdAt: "desc" },
});
```

---

### 🔄 PART 2: Efficient Data Handling

---

#### ✅ 5. Use `createMany`, `updateMany`, `deleteMany`

Avoid inserting/updating/deleting in loops.

**❌ Bad:**

```ts
for (const item of items) {
  await prisma.item.create({ data: item });
}
```

**✅ Good:**

```ts
await prisma.item.createMany({ data: items });
```

---

#### ✅ 6. Batch Multiple Queries with `$transaction`

Instead of sequential queries:

```ts
await prisma.user.create(...);
await prisma.profile.create(...);
```

**Use transaction:**

```ts
await prisma.$transaction([
  prisma.user.create({ data: ... }),
  prisma.profile.create({ data: ... }),
]);
```

---

#### ✅ 7. Use `prisma.$queryRaw` for Complex or Faster Queries

If Prisma doesn’t support an efficient native query, use SQL:

```ts
await prisma.$queryRaw`
  SELECT name FROM "User" WHERE active = true ORDER BY createdAt DESC LIMIT 10
`;
```

---

### ⚙️ PART 3: Connection Management & Caching

---

#### ✅ 8. Use Connection Pooling in Production

- If you're using **serverless functions** (like Vercel or AWS Lambda), use [Prisma Data Proxy](https://www.prisma.io/docs/data-platform/data-proxy) or a **connection pooler** like PgBouncer.
- Use a `.env.production` file with:

```env
DATABASE_URL="postgresql://user:pass@host/db?connection_limit=10"
```

---

#### ✅ 9. Close Connections Gracefully

In apps like NestJS or Express, use:

```ts
await prisma.$disconnect();
```

Or listen to shutdown hooks:

```ts
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
```

---

### 📊 PART 4: Monitoring and Logging

---

#### ✅ 10. Enable Query Logging

```ts
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
```

This shows SQL queries in your terminal, helpful for debugging.

---

#### ✅ 11. Profile Slow Queries with Logs or EXPLAIN

Use PostgreSQL’s `EXPLAIN ANALYZE` or look at Prisma logs to identify:

- Missing indexes
- Full table scans
- Sorting on unindexed columns

---

### 🧪 PART 5: Other Optimization Tips

---

| Tip                                          | Purpose                         |
| -------------------------------------------- | ------------------------------- |
| Use `take`/`skip` with `orderBy`             | Ensure pagination doesn't break |
| Avoid deeply nested `include`s               | Increases memory and DB load    |
| Use `count()` instead of `findMany().length` | More efficient                  |
| Use `groupBy()` for analytics                | Efficient for reporting         |
| Seed only needed test data                   | Speeds up test runtime          |

---

### ✅ Summary Table

| Optimization Area | Technique                                  |
| ----------------- | ------------------------------------------ |
| Queries           | `select`, `include`, `where`, `orderBy`    |
| Performance       | `createMany`, `updateMany`, `$transaction` |
| Pagination        | `skip`, `take`, `cursor`                   |
| SQL Tuning        | Raw SQL, Indexes, `EXPLAIN ANALYZE`        |
| Monitoring        | Prisma logs, custom query logging          |
| Connections       | Pooling, graceful shutdown                 |

---

## ⚙️ PART 9: DDATABASE OPERATIONS IN PRISMA

#### ✅ 1. `prisma migrate dev` — **Development Migrations**

This command:

- Creates a new SQL migration file
- Applies it to your **local development** database
- Regenerates Prisma Client

📌 **Use when you** make schema changes during development.

###### 🔧 Usage:

```bash
npx prisma migrate dev --name init
```

###### 📝 Example:

Modify your `schema.prisma`:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String
}
```

Then run:

```bash
npx prisma migrate dev --name add-user
```

✅ It:

- Applies the change to DB
- Saves a migration in `prisma/migrations`
- Updates Prisma Client

---

#### ✅ 2. `prisma migrate deploy` — **Production Migrations**

This command:

- Runs all **pending migrations** against a production/staging DB.
- Does **not** re-generate Prisma Client or prompt interactively.

📌 **Use when** deploying to prod (CI/CD or server).

###### 🔧 Usage:

```bash
npx prisma migrate deploy
```

✅ It reads `prisma/migrations` and applies any pending SQL files to the target DB.

---

#### ✅ 3. `prisma migrate reset` — **Resetting the DB (Dev only)**

This command:

- Drops the database
- Recreates it
- Re-applies all migrations
- Runs `prisma db seed` (if configured)
- Regenerates Prisma Client

📌 **Use for** testing or local development when you want a clean DB.

###### 🔧 Usage:

```bash
npx prisma migrate reset
```

✅ Useful in:

- Test automation
- Resetting schema & reloading test data

---

#### ✅ 4. `prisma db push` — **Push Schema (No Migrations)**

This command:

- Directly applies your Prisma schema to the database
- **Does not** create or track migrations

📌 **Use in:**

- Prototyping
- Quickly syncing schema
- MongoDB (which doesn’t support migrations yet)

###### 🔧 Usage:

```bash
npx prisma db push
```

✅ Best for early-stage dev when you don’t need full migration history.

---

#### ✅ 5. Seeding the Database

Seeds are scripts to populate default or test data in your database.

---

###### 🧱 Step-by-step:

####### 🧩 A. Configure `seed` in `package.json`:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

####### 🧩 B. Create the seed file `prisma/seed.js`:

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "John Seed",
      email: "john@seed.com",
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

####### 🧩 C. Run the seed script:

```bash
npx prisma db seed
```

✅ Or it'll run automatically after `migrate reset`.

---

### 🧾 Summary Table

| Command          | Purpose                             | Use When                   |
| ---------------- | ----------------------------------- | -------------------------- |
| `migrate dev`    | Create & apply migrations           | During local development   |
| `migrate deploy` | Apply pending migrations            | In production              |
| `migrate reset`  | Drop DB & reapply migrations + seed | Local/test reset           |
| `db push`        | Apply schema without migrations     | Prototyping / MongoDB      |
| `db seed`        | Run custom seed script              | Populate default/test data |

## 🛡️ PART 10: Security and Best Practices

### 🔐 1. Input Validation (Zod / Joi)

**Prisma does not validate input automatically.** Always validate user input before calling Prisma methods.

---

#### ✅ Using [Zod](https://zod.dev/):

```bash
npm install zod
```

###### Example: Validate user input

```ts
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const validated = userSchema.parse(req.body); // throws error if invalid

await prisma.user.create({ data: validated });
```

---

#### ✅ Using Joi:

```bash
npm install joi
```

```ts
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
});

const { error, value } = schema.validate(req.body);
if (error) return res.status(400).json({ message: error.message });

await prisma.user.create({ data: value });
```

---

### 🛡️ 2. Preventing Raw SQL Injection

#### ❌ Bad:

```ts
await prisma.$queryRawUnsafe(`SELECT * FROM User WHERE email = '${email}'`);
```

#### ✅ Safe (parameterized):

```ts
await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`;
```

✅ Always use **template literal tagged** `$queryRaw` instead of unsafe strings.

---

### 🔐 3. Role-Based Access Control (RBAC)

Prisma doesn't enforce access control — you must handle it in your business logic.

---

#### 🧩 Example: Middleware + Roles

```ts
// userService.ts
async function deleteUser(id, role) {
  if (role !== "admin") {
    throw new Error("Unauthorized");
  }
  return prisma.user.delete({ where: { id } });
}
```

---

#### ✅ Using Context (in NestJS or GraphQL):

```ts
if (context.user.role !== "ADMIN") {
  throw new ForbiddenException();
}
```

---

#### ✅ Best Practice:

- Store roles in a column (e.g. `role: 'ADMIN' | 'USER'`)
- Create reusable role-checking middleware
- Don’t expose admin-only routes in public API

---

### 🌐 4. Environment Separation (dev, prod, test)

Use separate `.env` files:

#### `.env`

```env
DATABASE_URL="postgresql://user:pass@localhost:5432/dev_db"
```

#### `.env.test`

```env
DATABASE_URL="postgresql://user:pass@localhost:5432/test_db"
```

#### `.env.production`

```env
DATABASE_URL="postgresql://user:pass@prod-host/db"
```

✅ Use tools like [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) or set manually in CI/CD:

```bash
dotenv -e .env.test -- npx prisma migrate reset
```

---

### 🔑 5. Protecting Database Credentials

#### ✅ Use `.env` (and never commit it)

- Add `.env` to `.gitignore`
- Don’t hardcode secrets in your source files

#### ✅ Use Secret Managers in Production:

- Vercel: Use **Environment Variables**
- AWS: Use **Secrets Manager**
- Docker: Use **secrets volume** or `.env.production`

---

#### ✅ Use Environment-Specific Prisma Client

Prisma Client connects to the DB using the URL from `DATABASE_URL`.

So you can safely build & deploy using:

```bash
DATABASE_URL=$PROD_URL npx prisma generate
```

---

### 🧾 Summary: Prisma Security Best Practices

| Area               | Best Practice                                                   |
| ------------------ | --------------------------------------------------------------- |
| Input Validation   | Use Zod or Joi before calling Prisma methods                    |
| SQL Injection      | Always use `$queryRaw` tagged literals, avoid `$queryRawUnsafe` |
| Access Control     | Implement RBAC in services/controllers                          |
| Env Separation     | Use `.env`, `.env.test`, `.env.production` with correct DB URLs |
| Secrets Management | Never commit `.env`, use secret managers in production          |

## 🧩 Other Topics

### 🎛️ 1. Prisma Studio – GUI for DB Browsing

Prisma Studio is a browser-based GUI for viewing and editing your database.

#### 🔧 Start it:

```bash
npx prisma studio
```

#### 🔍 Features:

- View, edit, delete records
- Create new rows
- Explore relational data visually
- Great for debugging and non-technical testers

---

### ⚙️ 2. Prisma Client Generation

Every time your schema changes, you must regenerate the Prisma Client.

#### 🔧 Command:

```bash
npx prisma generate
```

This compiles the types and methods based on your `schema.prisma` and is stored in `node_modules/@prisma/client`.

#### ✅ Automatically runs after:

- `migrate dev`
- `db push`
- `migrate reset`

You can also run manually in CI/CD or build steps.

---

### 🧪 3. Shadow Databases for Migrations

Prisma uses a **shadow database** to safely evaluate schema changes **during development migrations**.

#### 🔍 What is it?

- A **temporary copy** of your real DB
- Used during `migrate dev` to check migration safety
- Not applied to your main DB

#### 🔧 Config (optional):

In `.env`:

```env
SHADOW_DATABASE_URL="postgresql://user:pass@localhost:5432/shadow_db"
```

#### ✅ Prisma will:

- Create, reset, and drop this DB automatically

---

### 🍃 4. Working with MongoDB (Experimental)

Prisma supports **MongoDB** since v3.x — but it’s still **experimental** (less mature than PostgreSQL or MySQL support).

#### 🔧 Setup:

In `schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(auto()) @map("_id") @test.ObjectId
  name  String
  email String @unique
}
```

#### ⚠️ Limitations:

- No support for relations (as MongoDB is NoSQL)
- No `migrate dev` — use `db push` only
- Fewer filters/operators supported

---

### ☁️ 5. Prisma Data Proxy (Serverless Environments)

Prisma Data Proxy is a **secure, pooled connection layer** between your app and DB — ideal for **serverless environments** (e.g., Vercel, AWS Lambda).

#### 🔧 Setup:

1. Enable Data Proxy in Prisma Cloud
2. Change `schema.prisma`:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["dataProxy"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

3. Use `npx prisma generate`

#### ✅ Benefits:

- Instant cold starts
- No need to manage connection pooling
- Works seamlessly with serverless functions

---

### 🧩 6. Working with Multiple Databases

Prisma supports **multiple datasources** in a single project (experimental, limited support).

#### Example `schema.prisma`:

```prisma
// MySQL DB
datasource mysql {
  provider = "mysql"
  url      = env("MYSQL_URL")
}

// PostgreSQL DB
datasource postgres {
  provider = "postgresql"
  url      = env("POSTGRES_URL")
}

// Client config must be duplicated (not ideal for production)
generator client_mysql {
  provider = "prisma-client-js"
  output   = "./generated/mysql"
  previewFeatures = ["multiSchema"]
}

generator client_postgres {
  provider = "prisma-client-js"
  output   = "./generated/postgres"
  previewFeatures = ["multiSchema"]
}
```

You’ll now have two clients:

```ts
import { PrismaClient as MySQLClient } from "./generated/mysql";
import { PrismaClient as PostgresClient } from "./generated/postgres";

const mysql = new MySQLClient();
const postgres = new PostgresClient();
```

---

### ✅ Summary Table

| Topic                      | Tool / Feature                                   |
| -------------------------- | ------------------------------------------------ |
| GUI Browser                | `npx prisma studio`                              |
| Client Generation          | `npx prisma generate`                            |
| Shadow DB (dev migrations) | `SHADOW_DATABASE_URL`                            |
| MongoDB Support            | `provider = "mongodb"` + `db push` only          |
| Data Proxy                 | Prisma Cloud + `previewFeatures = ["dataProxy"]` |
| Multiple DBs               | Multiple datasources + custom client outputs     |

---

## 🏗️ Prisma Schema & Data Modeling

### 📦 Models and Fields

Every model in Prisma represents a **table**, and each field represents a **column**.

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

- `@id`: Marks as primary key
- `@default(autoincrement())`: Auto-incrementing ID
- `@unique`: Ensures uniqueness in the DB

---

### 🧮 Field Types

| Type       | Description              |
| ---------- | ------------------------ |
| `Int`      | Integer                  |
| `String`   | Text or varchar          |
| `Boolean`  | `true` / `false`         |
| `Float`    | Decimal numbers          |
| `DateTime` | Date + time              |
| `Json`     | Arbitrary JSON           |
| `Bytes`    | Binary data (base64)     |
| `BigInt`   | Large integers           |
| `Decimal`  | Fixed-precision decimals |

Example:

```prisma
model Product {
  id       Int      @id @default(autoincrement())
  name     String
  price    Float
  inStock  Boolean  @default(true)
  addedAt  DateTime @default(now())
}
```

---

### ✍️ Relation Directives

| Directive     | Description                                      |
| ------------- | ------------------------------------------------ |
| `@relation()` | Defines relation with `fields` and `references`  |
| `@map()`      | Maps Prisma field/table name to a custom DB name |
| `@default()`  | Sets default value                               |

Example:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String @map("full_name") // Will be called "full_name" in DB
}
```

---

### 📚 Enum Types

Enums restrict a field to specific string values.

```prisma
enum Role {
  USER
  ADMIN
  MODERATOR
}

model User {
  id   Int   @id @default(autoincrement())
  role Role  @default(USER)
}
```

➡ In TypeScript, this becomes a native union type.

---

### 🧱 Composite Types (Embeddables)

Like embedded documents in MongoDB or complex types in relational DBs.

```prisma
type Address {
  street  String
  city    String
  zip     String
}

model User {
  id      Int     @id @default(autoincrement())
  address Address
}
```

> ⚠️ Only supported in MongoDB for now.

---

### 📌 Indexes and Constraints

| Directive      | Purpose                             |
| -------------- | ----------------------------------- |
| `@id`          | Primary key                         |
| `@unique`      | Unique constraint on a field        |
| `@@unique([])` | Composite unique constraint         |
| `@@id([])`     | Composite primary key               |
| `@@index([])`  | Regular index on one or more fields |

```prisma
model User {
  id     Int    @id @default(autoincrement())
  email  String @unique
  name   String

  @@index([name])
  @@unique([email, name]) // composite unique
}
```

---

### 🧹 Cascading Deletes and Updates

Control what happens to related records when a parent is deleted or updated.

```prisma
model User {
  id     Int     @id @default(autoincrement())
  posts  Post[]
}

model Post {
  id      Int     @id @default(autoincrement())
  userId  Int
  user    User    @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

| Option     | Behavior                       |
| ---------- | ------------------------------ |
| `Cascade`  | Delete/update related records  |
| `Restrict` | Prevent deletion if referenced |
| `SetNull`  | Set foreign key to NULL        |
| `NoAction` | Do nothing                     |

---

### ✅ Summary Table

| Feature         | Keyword/Directive      | Notes                              |
| --------------- | ---------------------- | ---------------------------------- |
| Models          | `model`                | Defines DB tables                  |
| Field Types     | `Int`, `String`, etc.  | Maps to DB column types            |
| Relations       | `@relation`            | Defines 1:1, 1\:n, n\:m            |
| Enums           | `enum`                 | Fixed set of string values         |
| Embeddables     | `type`                 | Composite field (MongoDB only)     |
| Defaults        | `@default(...)`        | e.g., `@default(now())`            |
| Indexes         | `@unique`, `@@index`   | Performance, uniqueness            |
| Constraints     | `@@unique`, `@@id`     | Composite constraints              |
| Cascade Actions | `onDelete`, `onUpdate` | Set DB behavior on relation change |
| Field Mapping   | `@map()`               | Custom column/table names          |

---
