SQL (Structured Query Language) covers a wide range of topics, from basic queries to advanced database management concepts. Here’s a categorized list of important SQL topics:

# **1. Basics of SQL**

- Introduction to Databases & SQL
- Data Types in SQL
- SQL Syntax & Statements
- Basic CRUD Operations
  - `SELECT`, `INSERT`, `UPDATE`, `DELETE`

---

### **1. Introduction to Databases & SQL**

A **database** is a structured collection of data that allows efficient storage, retrieval, and management. **SQL (Structured Query Language)** is used to communicate with databases to perform various operations like querying, inserting, updating, and deleting data.

#### **Types of Databases**

- **Relational Databases (RDBMS)** – Store data in tables with relationships (e.g., MySQL, PostgreSQL, SQL Server).
- **NoSQL Databases** – Store unstructured or semi-structured data (e.g., MongoDB, Cassandra).

#### **Popular SQL Database Management Systems (DBMS)**

- **MySQL** – Open-source, widely used for web applications.
- **PostgreSQL** – Advanced, open-source with powerful features.
- **SQLite** – Lightweight, used for local applications.
- **Microsoft SQL Server** – Enterprise-level, used in corporate environments.
- **Oracle Database** – High-performance, used for large-scale applications.

---

### **2. Data Types in SQL**

Different SQL databases support different data types, but common types include:

#### **Numeric Data Types**

| Type            | Description                               |
| --------------- | ----------------------------------------- |
| `INT`           | Integer (whole number)                    |
| `BIGINT`        | Large integer                             |
| `DECIMAL(p, s)` | Fixed-point number (p=precision, s=scale) |
| `FLOAT`         | Floating-point number                     |
| `NUMERIC`       | Exact numeric value                       |

#### **Character/String Data Types**

| Type         | Description            |
| ------------ | ---------------------- |
| `CHAR(n)`    | Fixed-length string    |
| `VARCHAR(n)` | Variable-length string |
| `TEXT`       | Large text             |

#### **Date & Time Data Types**

| Type       | Description                |
| ---------- | -------------------------- |
| `DATE`     | Stores date (`YYYY-MM-DD`) |
| `TIME`     | Stores time (`HH:MI:SS`)   |
| `DATETIME` | Stores date and time       |

#### **Boolean Data Type**

| Type      | Description                               |
| --------- | ----------------------------------------- |
| `BOOLEAN` | Stores TRUE/FALSE (1/0 in some databases) |

---

### **3. SQL Syntax & Statements**

SQL statements follow a specific structure. Keywords are **not case-sensitive**, but table/column names might be.

#### **Basic SQL Structure**

```sql
SELECT column1, column2 FROM table_name WHERE condition;
```

#### **Common SQL Statements**

| Statement      | Description                        |
| -------------- | ---------------------------------- |
| `CREATE TABLE` | Creates a new table                |
| `ALTER TABLE`  | Modifies an existing table         |
| `DROP TABLE`   | Deletes a table                    |
| `INSERT INTO`  | Adds new records                   |
| `SELECT`       | Retrieves data                     |
| `UPDATE`       | Modifies existing records          |
| `DELETE`       | Removes records                    |
| `JOIN`         | Combines data from multiple tables |

---

### **4. Basic CRUD Operations**

CRUD (Create, Read, Update, Delete) are the four basic operations for managing data.

#### **(C) Create - `INSERT` Statement**

Used to insert new records into a table.

```sql
INSERT INTO employees (id, name, age, department)
VALUES (1, 'Alice', 30, 'HR');
```

#### **(R) Read - `SELECT` Statement**

Used to retrieve data from a table.

```sql
SELECT * FROM employees;
```

Retrieving specific columns:

```sql
SELECT name, department FROM employees WHERE age > 25;
```

Sorting results:

```sql
SELECT name, age FROM employees ORDER BY age DESC;
```

#### **(U) Update - `UPDATE` Statement**

Modifies existing records.

```sql
UPDATE employees
SET age = 31
WHERE id = 1;
```

#### **(D) Delete - `DELETE` Statement**

Removes records from a table.

```sql
DELETE FROM employees WHERE id = 1;
```

⚠ **Warning:** If you run `DELETE FROM employees;` without a `WHERE` clause, it will delete all records!

---

Let me know if you need deeper explanations or examples! 🚀

# **2. SQL Constraints & Keys**

- Primary Key
- Foreign Key
- Unique Constraint
- Not Null Constraint
- Default Constraint
- Check Constraint

---

### **SQL Constraints**

Constraints in SQL enforce rules on the data in a table to maintain data integrity.

---

### **1. Primary Key**

A **Primary Key (PK)** uniquely identifies each record in a table. It must contain **unique** values and **cannot be NULL**.

#### **Example: Defining a Primary Key**

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,  -- id is unique and cannot be NULL
    name VARCHAR(50),
    age INT
);
```

✅ The `id` column is the **Primary Key**, ensuring uniqueness and preventing `NULL` values.

#### **Alternate Syntax** (for existing tables):

```sql
ALTER TABLE employees ADD PRIMARY KEY (id);
```

---

### **2. Foreign Key**

A **Foreign Key (FK)** links two tables by referencing a Primary Key in another table. It ensures **referential integrity**, meaning that values in the foreign key column must exist in the referenced table.

#### **Example: Creating a Foreign Key**

```sql
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)  -- Foreign Key linking employees to departments
);
```

✅ The `dept_id` in `employees` must match an existing `dept_id` in `departments`, preventing orphaned records.

#### **Alternate Syntax (for existing tables)**

```sql
ALTER TABLE employees ADD CONSTRAINT fk_department FOREIGN KEY (dept_id) REFERENCES departments(dept_id);
```

---

### **3. Unique Constraint**

The **UNIQUE** constraint ensures that all values in a column are distinct, but unlike the Primary Key, it **can contain NULL values**.

#### **Example: Creating a Unique Constraint**

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE  -- Ensures emails are unique
);
```

✅ No two users can have the same `email`.

#### **Alternate Syntax (for existing tables)**

```sql
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);
```

---

### **4. Not Null Constraint**

The **NOT NULL** constraint ensures that a column cannot store `NULL` values.

#### **Example: Defining NOT NULL**

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL  -- Name cannot be NULL
);
```

✅ Every student must have a name.

#### **Alternate Syntax (for existing tables)**

```sql
ALTER TABLE students MODIFY name VARCHAR(50) NOT NULL;
```

---

### **5. Default Constraint**

The **DEFAULT** constraint sets a default value for a column if no value is provided.

#### **Example: Using DEFAULT Constraint**

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'Pending'  -- Default value is 'Pending'
);
```

✅ If no value is given for `status`, it will be automatically set to `'Pending'`.

#### **Alternate Syntax (for existing tables)**

```sql
ALTER TABLE orders ALTER COLUMN status SET DEFAULT 'Pending';
```

---

### **6. Check Constraint**

The **CHECK** constraint ensures that values in a column satisfy a specific condition.

#### **Example: Using CHECK Constraint**

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    age INT CHECK (age >= 18)  -- Ensures age is at least 18
);
```

✅ The `age` must be **18 or above**.

#### **Alternate Syntax (for existing tables)**

```sql
ALTER TABLE employees ADD CONSTRAINT check_age CHECK (age >= 18);
```

---

### **Summary of Constraints**

| Constraint      | Description                                                |
| --------------- | ---------------------------------------------------------- |
| **Primary Key** | Uniquely identifies each record (No duplicates, No NULLs)  |
| **Foreign Key** | Ensures referential integrity between tables               |
| **Unique**      | Ensures all values in a column are distinct (Allows NULLs) |
| **Not Null**    | Prevents NULL values in a column                           |
| **Default**     | Sets a default value if no value is provided               |
| **Check**       | Ensures values meet a specified condition                  |

# **3. SQL Queries & Filtering Data**

- `WHERE` Clause
- `ORDER BY` (Sorting Results)
- `LIMIT`, `OFFSET`
- `BETWEEN`, `IN`, `LIKE`, `IS NULL`

---

### **1. `WHERE` Clause**

The `WHERE` clause is used to filter records based on a condition.

#### **Example: Filtering Data**

```sql
SELECT * FROM employees WHERE age > 30;
```

✅ Retrieves all employees older than 30.

#### **Using Multiple Conditions**

```sql
SELECT * FROM employees WHERE age > 30 AND department = 'HR';
```

✅ Retrieves employees **older than 30** **and** in the **HR department**.

---

### **2. `ORDER BY` (Sorting Results)**

The `ORDER BY` clause is used to sort query results in **ascending (`ASC`)** or **descending (`DESC`)** order.

#### **Example: Sorting in Ascending Order (Default)**

```sql
SELECT name, age FROM employees ORDER BY age;
```

✅ Sorts employees **by age in ascending order**.

#### **Example: Sorting in Descending Order**

```sql
SELECT name, age FROM employees ORDER BY age DESC;
```

✅ Sorts employees **by age in descending order**.

#### **Sorting by Multiple Columns**

```sql
SELECT name, department, age FROM employees ORDER BY department ASC, age DESC;
```

✅ First sorts by `department` in ascending order, then by `age` in descending order.

---

### **3. `LIMIT`, `OFFSET` (Pagination & Restricting Rows)**

- `LIMIT` – Restricts the number of rows returned.
- `OFFSET` – Skips a specific number of rows before returning results.

#### **Example: Get Only 5 Rows**

```sql
SELECT * FROM employees LIMIT 5;
```

✅ Retrieves the first **5 employees**.

#### **Example: Pagination (Skip First 5 Rows, Show Next 5)**

```sql
SELECT * FROM employees LIMIT 5 OFFSET 5;
```

✅ Skips the **first 5 rows**, then retrieves the **next 5 rows**.

---

### **4. `BETWEEN`, `IN`, `LIKE`, `IS NULL`**

#### **`BETWEEN` (Range Query)**

Used to select values within a specific range (inclusive).

```sql
SELECT * FROM employees WHERE age BETWEEN 25 AND 35;
```

✅ Retrieves employees with `age` **between 25 and 35**.

#### **`IN` (Multiple Value Matching)**

Used when matching values against multiple options.

```sql
SELECT * FROM employees WHERE department IN ('HR', 'IT', 'Finance');
```

✅ Retrieves employees from **HR, IT, or Finance departments**.

#### **`LIKE` (Pattern Matching)**

Used for searching text-based patterns.

- `%` – Matches **any number of characters**.
- `_` – Matches **a single character**.

```sql
SELECT * FROM employees WHERE name LIKE 'A%';
```

✅ Retrieves employees whose **name starts with 'A'**.

```sql
SELECT * FROM employees WHERE name LIKE '%son';
```

✅ Retrieves employees whose **name ends with 'son'**.

```sql
SELECT * FROM employees WHERE name LIKE '_a%';
```

✅ Retrieves employees whose **second letter is 'a'**.

#### **`IS NULL` (Checking for NULL values)**

Used to find records where a column contains `NULL` values.

```sql
SELECT * FROM employees WHERE department IS NULL;
```

✅ Retrieves employees who have **no assigned department**.

```sql
SELECT * FROM employees WHERE department IS NOT NULL;
```

✅ Retrieves employees who **have a department assigned**.

---

### **Summary Table**

| Clause     | Description                         | Example                |
| ---------- | ----------------------------------- | ---------------------- |
| `WHERE`    | Filters rows based on conditions    | `WHERE age > 30`       |
| `ORDER BY` | Sorts the result                    | `ORDER BY salary DESC` |
| `LIMIT`    | Limits the number of rows           | `LIMIT 10`             |
| `OFFSET`   | Skips rows before returning results | `LIMIT 10 OFFSET 5`    |
| `BETWEEN`  | Selects values in a range           | `BETWEEN 25 AND 35`    |
| `IN`       | Matches multiple values             | `IN ('HR', 'IT')`      |
| `LIKE`     | Matches patterns                    | `LIKE 'A%'`            |
| `IS NULL`  | Checks for `NULL` values            | `IS NULL`              |

# **4. SQL Joins & Relationships**

- `INNER JOIN`
- `LEFT JOIN` (or `LEFT OUTER JOIN`)
- `RIGHT JOIN` (or `RIGHT OUTER JOIN`)
- `FULL JOIN` (or `FULL OUTER JOIN`)
- `CROSS JOIN`
- Self Join

---

SQL **JOINs** are used to retrieve data from two or more tables based on related columns.

---

## **1. `INNER JOIN` (Only Matching Rows)**

- Returns only the **matching rows** between both tables based on a common column.

### **Example: Employees & Departments Tables**

```sql
SELECT employees.name, employees.department_id, departments.dept_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.dept_id;
```

✅ **Only employees with a valid department_id in the `departments` table will be shown.**  
❌ Employees without a matching department will be excluded.

---

## **2. `LEFT JOIN` (All Left Table + Matching Right Table)**

- Returns **all rows from the left table**, even if there is **no match** in the right table.
- If no match is found, `NULL` is returned for the right table's columns.

```sql
SELECT employees.name, employees.department_id, departments.dept_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.dept_id;
```

✅ **All employees will be displayed**, even if they don’t have a department.  
🟡 If an employee has no `department_id`, `dept_name` will be **NULL**.

---

## **3. `RIGHT JOIN` (All Right Table + Matching Left Table)**

- Returns **all rows from the right table**, even if there is **no match** in the left table.
- If no match is found, `NULL` is returned for the left table's columns.

```sql
SELECT employees.name, employees.department_id, departments.dept_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.dept_id;
```

✅ **All departments will be displayed**, even if no employees belong to them.  
🟡 If no employees exist for a department, `name` will be **NULL**.

---

## **4. `FULL JOIN` (All Rows from Both Tables)**

- Combines `LEFT JOIN` and `RIGHT JOIN`.
- Returns **all records from both tables**, with `NULL` where there is no match.

```sql
SELECT employees.name, employees.department_id, departments.dept_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.dept_id;
```

✅ **All employees and all departments will be displayed.**  
🟡 If an employee has no department, `dept_name` will be **NULL**.  
🟡 If a department has no employees, `name` will be **NULL**.

---

## **5. `CROSS JOIN` (Cartesian Product)**

- Returns **every possible combination** of rows from both tables.

```sql
SELECT employees.name, departments.dept_name
FROM employees
CROSS JOIN departments;
```

✅ **Each employee is paired with every department, even if they don’t belong to it.**  
⚠ **This can return a large number of rows** if both tables have many records.

---

## **6. `SELF JOIN` (Join Within the Same Table)**

- Used when a table references itself (e.g., employees reporting to other employees).

```sql
SELECT e1.name AS Employee, e2.name AS Manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

✅ **Finds each employee’s manager from the same `employees` table.**  
🟡 If an employee **doesn’t have a manager**, `Manager` will be **NULL**.

---

## **Summary Table**

| **Join Type**    | **Returns**                                                        |
| ---------------- | ------------------------------------------------------------------ |
| **`INNER JOIN`** | Only matching rows                                                 |
| **`LEFT JOIN`**  | All left table rows + matching right table rows (NULL if no match) |
| **`RIGHT JOIN`** | All right table rows + matching left table rows (NULL if no match) |
| **`FULL JOIN`**  | All rows from both tables (NULL where no match)                    |
| **`CROSS JOIN`** | All possible combinations (Cartesian Product)                      |
| **`SELF JOIN`**  | Joins the table with itself                                        |

# **5. SQL Aggregation & Grouping**

- Aggregate Functions: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`
- `GROUP BY`
- `HAVING` Clause

---

SQL **aggregate functions** perform calculations on a set of values and return a single result. They are often used with `GROUP BY` and `HAVING` to analyze data.

---

## **1. Aggregate Functions**

| Function  | Description                            | Example       |
| --------- | -------------------------------------- | ------------- |
| `COUNT()` | Returns the number of rows             | `COUNT(*)`    |
| `SUM()`   | Returns the total sum of a column      | `SUM(salary)` |
| `AVG()`   | Returns the average value of a column  | `AVG(salary)` |
| `MIN()`   | Returns the smallest value in a column | `MIN(age)`    |
| `MAX()`   | Returns the largest value in a column  | `MAX(salary)` |

### **Example: Aggregate Functions on Employee Data**

```sql
SELECT
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees;
```

✅ **Retrieves statistics** about the `employees` table.

---

## **2. `GROUP BY` (Grouping Data for Aggregation)**

The `GROUP BY` clause **groups rows** that have the same values in a specified column and applies aggregate functions.

### **Example: Count Employees in Each Department**

```sql
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department;
```

✅ **Groups employees by department and counts the number of employees per department.**

### **Example: Average Salary by Department**

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

✅ **Calculates the average salary per department.**

---

## **3. `HAVING` Clause (Filtering Groups)**

- `HAVING` is used **after `GROUP BY`** to filter grouped results.
- Similar to `WHERE`, but **`WHERE` cannot be used with aggregate functions**.

### **Example: Departments with More Than 5 Employees**

```sql
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

✅ **Filters only those departments where `total_employees` > 5.**

### **Example: Departments with Average Salary Above 50,000**

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
```

✅ **Retrieves only departments where the average salary is greater than 50,000.**

---

## **Summary**

| Clause/Function | Purpose                     | Example               |
| --------------- | --------------------------- | --------------------- |
| `COUNT()`       | Counts rows                 | `COUNT(*)`            |
| `SUM()`         | Calculates total sum        | `SUM(salary)`         |
| `AVG()`         | Finds the average value     | `AVG(salary)`         |
| `MIN()`         | Finds the smallest value    | `MIN(salary)`         |
| `MAX()`         | Finds the largest value     | `MAX(salary)`         |
| `GROUP BY`      | Groups data for aggregation | `GROUP BY department` |
| `HAVING`        | Filters grouped data        | `HAVING COUNT(*) > 5` |

# **6. SQL Subqueries & Advanced Queries**

- Subqueries in `SELECT`, `FROM`, `WHERE`
- Correlated Subqueries
- Common Table Expressions (CTEs)
- `EXISTS`, `NOT EXISTS`

---

## **1. Subqueries (Nested Queries)**

A **subquery** is a query inside another query. It is used to retrieve intermediate results that are then used by the main query.

### **Subquery in `SELECT` (Derived Column)**

- Computes values for each row dynamically.

```sql
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS avg_salary
FROM employees;
```

✅ **Displays each employee’s salary alongside the company's average salary.**

---

### **Subquery in `FROM` (Derived Table / Inline View)**

- Treats a subquery as a temporary table.

```sql
SELECT dept_name, avg_salary
FROM (SELECT department AS dept_name, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department) AS dept_avg
WHERE avg_salary > 50000;
```

✅ **Filters only departments with an average salary above 50,000.**

---

### **Subquery in `WHERE` (Filtering with Subqueries)**

- Used when filtering rows based on another table’s data.

```sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

✅ **Finds employees earning above the company's average salary.**

---

## **2. Correlated Subqueries**

A **correlated subquery** depends on the outer query and runs **once for each row**.

```sql
SELECT name, salary
FROM employees e1
WHERE salary > (SELECT AVG(salary)
                FROM employees e2
                WHERE e1.department = e2.department);
```

✅ **Finds employees whose salary is above their department’s average.**  
🛑 **Slower than normal subqueries** because it runs for each row.

---

## **3. Common Table Expressions (CTEs)**

A **CTE (WITH statement)** is a temporary result set that can be referenced multiple times in a query.

### **Example: Using CTE to Find Departments with High Salaries**

```sql
WITH DepartmentSalaries AS (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
)
SELECT department, avg_salary
FROM DepartmentSalaries
WHERE avg_salary > 50000;
```

✅ **Makes queries more readable & reusable compared to subqueries.**

### **Example: Recursive CTE (Find Employee Hierarchy)**

```sql
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT id, name, manager_id
    FROM employees
    WHERE manager_id IS NULL  -- Start with top-level manager

    UNION ALL

    SELECT e.id, e.name, e.manager_id
    FROM employees e
    JOIN EmployeeHierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM EmployeeHierarchy;
```

✅ **Finds all employees reporting to a top-level manager.**  
🔁 **Recursive queries are useful for hierarchical data (e.g., Org charts, Categories).**

---

## **4. `EXISTS` and `NOT EXISTS`**

- `EXISTS` checks if a subquery **returns any rows**.
- `NOT EXISTS` ensures a subquery **returns no rows**.

### **Example: Using `EXISTS` (Employees Who Belong to a Department)**

```sql
SELECT name
FROM employees e
WHERE EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.dept_id);
```

✅ **Only returns employees who belong to a valid department.**

### **Example: Using `NOT EXISTS` (Employees Without a Department)**

```sql
SELECT name
FROM employees e
WHERE NOT EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.dept_id);
```

✅ **Finds employees without an assigned department.**

---

## **Summary Table**

| Feature                    | Description                               | Example                                                                                  |
| -------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Subquery in `SELECT`**   | Computes values dynamically               | `(SELECT AVG(salary) FROM employees) AS avg_salary`                                      |
| **Subquery in `FROM`**     | Creates a temporary table                 | `FROM (SELECT department, AVG(salary) FROM employees) AS dept_avg`                       |
| **Subquery in `WHERE`**    | Filters results dynamically               | `WHERE salary > (SELECT AVG(salary) FROM employees)`                                     |
| **Correlated Subquery**    | Depends on outer query, runs for each row | `WHERE salary > (SELECT AVG(salary) FROM employees WHERE e1.department = e2.department)` |
| **CTE (`WITH` statement)** | Improves readability & reusability        | `WITH avg_salaries AS (SELECT department, AVG(salary) FROM employees)`                   |
| **Recursive CTE**          | Handles hierarchical data                 | `WITH RECURSIVE EmployeeHierarchy AS (...)`                                              |
| **`EXISTS`**               | Checks if a subquery returns any rows     | `WHERE EXISTS (SELECT 1 FROM departments WHERE e.department_id = dept_id)`               |
| **`NOT EXISTS`**           | Checks if a subquery returns no rows      | `WHERE NOT EXISTS (SELECT 1 FROM departments WHERE e.department_id = dept_id)`           |

# **7. SQL Views & Indexes**

- Creating & Using Views
- Materialized Views
- Indexing for Performance
- Clustered vs. Non-Clustered Index

---

## **1. Creating & Using Views**

A **view** is a **virtual table** that stores a query result but **does not store data**. It simplifies complex queries and improves security by restricting access to certain columns.

### **Creating a View**

```sql
CREATE VIEW EmployeeDetails AS
SELECT id, name, department, salary
FROM employees
WHERE salary > 50000;
```

✅ **Now, you can use the view like a table:**

```sql
SELECT * FROM EmployeeDetails;
```

### **Updating a View**

```sql
CREATE OR REPLACE VIEW EmployeeDetails AS
SELECT id, name, department, salary
FROM employees
WHERE salary > 60000;
```

### **Dropping a View**

```sql
DROP VIEW EmployeeDetails;
```

✅ **Use Cases of Views:**

- Hiding complex joins and calculations.
- Restricting access to sensitive data.
- Making queries more readable.

---

## **2. Materialized Views**

Unlike normal views, **materialized views store actual data** and improve performance by reducing query execution time.

### **Creating a Materialized View (PostgreSQL, Oracle)**

```sql
CREATE MATERIALIZED VIEW HighSalaryEmployees AS
SELECT id, name, department, salary
FROM employees
WHERE salary > 70000;
```

### **Refreshing a Materialized View**

- Unlike normal views, **materialized views must be refreshed** to get updated data.

```sql
REFRESH MATERIALIZED VIEW HighSalaryEmployees;
```

✅ **Use Cases of Materialized Views:**

- Precomputing expensive aggregations (e.g., monthly sales reports).
- Reducing query load on large databases.
- Improving performance in **data warehouses**.

---

## **3. Indexing for Performance**

An **index** is a data structure that improves the speed of read operations by allowing fast lookups.

### **Creating an Index**

```sql
CREATE INDEX idx_employee_name ON employees(name);
```

✅ **Speeds up queries like:**

```sql
SELECT * FROM employees WHERE name = 'John Doe';
```

### **Unique Index (Prevents Duplicates)**

```sql
CREATE UNIQUE INDEX idx_unique_email ON employees(email);
```

### **Dropping an Index**

```sql
DROP INDEX idx_employee_name;
```

✅ **When to Use Indexes?**

- Frequently searched columns (`WHERE`, `JOIN`, `ORDER BY`).
- Primary and foreign keys.
- Columns with high **cardinality** (many unique values).

🛑 **When Not to Use Indexes?**

- Small tables (scanning is faster).
- Columns with mostly **duplicate values** (e.g., `gender` with only "Male" & "Female").
- Columns that are **frequently updated**.

---

## **4. Clustered vs. Non-Clustered Index**

| Type                    | Description                                                 | Use Case                       |
| ----------------------- | ----------------------------------------------------------- | ------------------------------ |
| **Clustered Index**     | Stores actual table data in sorted order based on the index | Primary Key (faster retrieval) |
| **Non-Clustered Index** | Stores a separate index pointing to actual table rows       | Searching, filtering, joins    |

### **Example: Creating Indexes**

#### **Clustered Index (Only One Per Table)**

```sql
CREATE CLUSTERED INDEX idx_emp_id ON employees(id);
```

✅ **Sorts table data based on `id`**.

#### **Non-Clustered Index (Multiple Allowed)**

```sql
CREATE NONCLUSTERED INDEX idx_emp_salary ON employees(salary);
```

✅ **Speeds up queries filtering by `salary`** but does not change data storage.

---

## **Summary Table**

| Feature                 | Purpose                              | Example                                               |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| **View**                | Virtual table for simplified queries | `CREATE VIEW view_name AS SELECT ...`                 |
| **Materialized View**   | Stores query results for performance | `CREATE MATERIALIZED VIEW ...`                        |
| **Index**               | Improves search speed                | `CREATE INDEX idx_name ON table(column)`              |
| **Clustered Index**     | Sorts table data physically          | `CREATE CLUSTERED INDEX idx_name ON table(column)`    |
| **Non-Clustered Index** | Separate index for lookups           | `CREATE NONCLUSTERED INDEX idx_name ON table(column)` |

# **8. SQL Transactions & Concurrency**

- ACID Properties (Atomicity, Consistency, Isolation, Durability)
- `COMMIT`, `ROLLBACK`, `SAVEPOINT`
- Isolation Levels (`READ UNCOMMITTED`, `READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`)
- Deadlocks & Locking Mechanisms

---

## **1. ACID Properties**

ACID properties ensure reliable and consistent transactions in a database.

| Property        | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Atomicity**   | A transaction is **all or nothing**. If one part fails, the entire transaction is rolled back. |
| **Consistency** | A transaction brings the database from one **valid state** to another, ensuring integrity.     |
| **Isolation**   | Transactions execute independently to avoid conflicts.                                         |
| **Durability**  | Committed transactions **persist** even in case of a crash.                                    |

✅ **Example:**

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

If one `UPDATE` fails, **Atomicity** ensures the whole transaction is rolled back.

---

## **2. `COMMIT`, `ROLLBACK`, and `SAVEPOINT`**

SQL provides transaction control commands:

| Command     | Description                                               |
| ----------- | --------------------------------------------------------- |
| `COMMIT`    | Saves all changes made in the transaction permanently.    |
| `ROLLBACK`  | Reverts the database to its state before the transaction. |
| `SAVEPOINT` | Creates a checkpoint to partially roll back changes.      |

✅ **Example: Using `ROLLBACK`**

```sql
START TRANSACTION;
UPDATE employees SET salary = salary + 5000 WHERE id = 1;
ROLLBACK;  -- Undo the update
```

✅ **Example: Using `SAVEPOINT`**

```sql
START TRANSACTION;
UPDATE employees SET salary = salary + 5000 WHERE id = 1;
SAVEPOINT sp1;
UPDATE employees SET salary = salary + 10000 WHERE id = 2;
ROLLBACK TO sp1;  -- Undo only the second update
COMMIT;
```

---

## **3. Isolation Levels in SQL**

Isolation levels control how transactions interact with each other.

| Isolation Level      | Dirty Reads? | Non-Repeatable Reads? | Phantom Reads? |
| -------------------- | ------------ | --------------------- | -------------- |
| **READ UNCOMMITTED** | ✅ Yes       | ✅ Yes                | ✅ Yes         |
| **READ COMMITTED**   | ❌ No        | ✅ Yes                | ✅ Yes         |
| **REPEATABLE READ**  | ❌ No        | ❌ No                 | ✅ Yes         |
| **SERIALIZABLE**     | ❌ No        | ❌ No                 | ❌ No          |

### **Problems Explained:**

1. **Dirty Reads** → Reading uncommitted changes from another transaction.
2. **Non-Repeatable Reads** → Different results when reading the same row twice.
3. **Phantom Reads** → New rows appear when re-executing the same query.

✅ **Example: Setting an Isolation Level**

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
SELECT * FROM accounts WHERE balance > 5000;
-- Other transactions cannot insert/update data affecting this query.
COMMIT;
```

---

## **4. Deadlocks & Locking Mechanisms**

A **deadlock** occurs when two transactions hold locks and wait for each other to release.

### **Lock Types:**

| Lock Type                   | Description                                        |
| --------------------------- | -------------------------------------------------- |
| **Shared Lock (S Lock)**    | Multiple transactions can read, but not write.     |
| **Exclusive Lock (X Lock)** | Only one transaction can read/write.               |
| **Row-Level Locking**       | Locks individual rows to allow concurrent updates. |
| **Table-Level Locking**     | Locks the entire table, reducing concurrency.      |

✅ **Example: Avoiding Deadlocks with Ordered Updates**

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

🔹 **Best Practices to Prevent Deadlocks:**

- **Access tables in the same order** in all transactions.
- Use **short transactions** to minimize locked resources.
- **Use indexing** to speed up queries and reduce locking time.

---

## **Summary Table**

| Feature              | Description                                    | Example                                                                |
| -------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| **ACID Properties**  | Ensures transaction reliability                | Transactions follow Atomicity, Consistency, Isolation, and Durability. |
| **COMMIT**           | Saves transaction changes                      | `COMMIT;`                                                              |
| **ROLLBACK**         | Reverts transaction changes                    | `ROLLBACK;`                                                            |
| **SAVEPOINT**        | Partially roll back changes                    | `SAVEPOINT sp1;`                                                       |
| **Isolation Levels** | Controls concurrency                           | `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`                        |
| **Deadlocks**        | Prevents two transactions from waiting forever | Use ordered updates and indexing.                                      |

# **9. SQL Stored Procedures & Functions**

- Creating & Using Stored Procedures
- User-Defined Functions (UDFs)
- Triggers & Events

---

## **1. Stored Procedures**

A **Stored Procedure** is a precompiled SQL code block that can be executed with a single call. It improves performance and security by encapsulating complex logic.

### **Creating a Stored Procedure**

```sql
DELIMITER //
CREATE PROCEDURE GetEmployeeSalary (IN emp_id INT)
BEGIN
    SELECT name, salary FROM employees WHERE id = emp_id;
END //
DELIMITER ;
```

### **Executing a Stored Procedure**

```sql
CALL GetEmployeeSalary(101);
```

### **Stored Procedure with Output Parameter**

```sql
DELIMITER //
CREATE PROCEDURE GetTotalSalary (OUT total DECIMAL(10,2))
BEGIN
    SELECT SUM(salary) INTO total FROM employees;
END //
DELIMITER ;
```

```sql
CALL GetTotalSalary(@total_salary);
SELECT @total_salary;
```

✅ **Use Cases of Stored Procedures:**

- Reducing network traffic for complex queries.
- Improving security by restricting direct table access.
- Reusing business logic.

---

## **2. User-Defined Functions (UDFs)**

A **User-Defined Function (UDF)** is a function that **returns a value** and can be used in SQL statements.

### **Creating a Scalar UDF**

```sql
DELIMITER //
CREATE FUNCTION GetBonus(salary DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN salary * 0.10;
END //
DELIMITER ;
```

### **Using a UDF**

```sql
SELECT name, salary, GetBonus(salary) AS bonus FROM employees;
```

✅ **Types of UDFs:**

1. **Scalar Functions** – Returns a single value (e.g., `GetBonus()`).
2. **Table-Valued Functions** – Returns a table.
3. **Aggregate Functions** – Custom functions used in aggregations.

🛑 **Difference Between Stored Procedures & UDFs**
| Feature | Stored Procedure | User-Defined Function |
|---------|----------------|---------------------|
| Returns a Value? | ❌ (Optional) | ✅ (Always) |
| Used in `SELECT`? | ❌ No | ✅ Yes |
| Modifies Data (`INSERT/UPDATE`)? | ✅ Yes | ❌ No |

---

## **3. Triggers**

A **Trigger** is an automatic action executed before or after a database event (`INSERT`, `UPDATE`, `DELETE`).

### **Creating a Trigger (Audit Log Example)**

```sql
CREATE TABLE audit_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    action_type VARCHAR(10),
    employee_id INT,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```sql
DELIMITER //
CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (action_type, employee_id)
    VALUES ('INSERT', NEW.id);
END //
DELIMITER ;
```

### **Types of Triggers**

| Trigger Type      | Description                     |
| ----------------- | ------------------------------- |
| **BEFORE INSERT** | Executes before inserting data. |
| **AFTER INSERT**  | Executes after inserting data.  |
| **BEFORE UPDATE** | Executes before updating a row. |
| **AFTER UPDATE**  | Executes after updating a row.  |
| **BEFORE DELETE** | Executes before deleting a row. |
| **AFTER DELETE**  | Executes after deleting a row.  |

✅ **Use Cases of Triggers:**

- Enforcing business rules automatically.
- Auditing changes in tables.
- Keeping data consistency between tables.

---

## **4. Events (Scheduled Jobs)**

An **Event** is a scheduled SQL task that runs automatically at specific times.

### **Enabling Event Scheduler (MySQL)**

```sql
SET GLOBAL event_scheduler = ON;
```

### **Creating an Event (Delete Old Records)**

```sql
DELIMITER //
CREATE EVENT DeleteOldLogs
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
    DELETE FROM audit_log WHERE action_time < NOW() - INTERVAL 30 DAY;
END //
DELIMITER ;
```

### **Viewing Scheduled Events**

```sql
SHOW EVENTS;
```

### **Dropping an Event**

```sql
DROP EVENT DeleteOldLogs;
```

✅ **Use Cases of Events:**

- Automating backups or log cleanups.
- Scheduling periodic report generation.
- Running data maintenance tasks.

---

## **Summary Table**

| Feature                         | Purpose                                      | Example                                                            |
| ------------------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| **Stored Procedure**            | Encapsulates SQL logic for reuse             | `CREATE PROCEDURE GetEmployeeSalary(...)`                          |
| **User-Defined Function (UDF)** | Returns a computed value                     | `CREATE FUNCTION GetBonus(salary DECIMAL) RETURNS DECIMAL`         |
| **Trigger**                     | Automatically runs on `INSERT/UPDATE/DELETE` | `CREATE TRIGGER after_employee_insert AFTER INSERT ON employees`   |
| **Event**                       | Runs scheduled SQL tasks                     | `CREATE EVENT DeleteOldLogs ON SCHEDULE EVERY 1 DAY DO DELETE ...` |

# **10. SQL Performance Optimization**

- Query Optimization Techniques
- Using `EXPLAIN` or `EXPLAIN ANALYZE`
- Indexing Strategies
- Partitioning & Sharding

---

## **1. Query Optimization Techniques**

Optimizing SQL queries improves performance and reduces execution time.

✅ **Best Practices for Query Optimization:**

- **Avoid `SELECT *`** – Retrieve only necessary columns.
- **Use Proper Indexing** – Improve search speed.
- **Use `EXISTS` Instead of `IN`** – Faster for subqueries.
- **Use `JOIN` Instead of Subqueries** – Better performance.
- **Use `LIMIT` to Reduce Results** – Improves response time.
- **Optimize `ORDER BY`** – Index the sorting column.
- **Use Batching for Large Inserts** – Reduces locking issues.

✅ **Example: Inefficient Query (`SELECT *` and Subquery Usage)**

```sql
SELECT * FROM employees WHERE id IN (SELECT employee_id FROM payroll);
```

❌ **Issues:**

- `SELECT *` fetches unnecessary data.
- `IN` is inefficient for large subqueries.

✅ **Optimized Query (Column Selection & `JOIN`)**

```sql
SELECT e.id, e.name, p.salary
FROM employees e
JOIN payroll p ON e.id = p.employee_id;
```

✅ **Why is this better?**

- Fetches only required columns.
- `JOIN` is optimized using indexes.

---

## **2. Using `EXPLAIN` and `EXPLAIN ANALYZE`**

SQL databases provide `EXPLAIN` to understand query execution plans.

✅ **Example: Checking Query Execution Plan**

```sql
EXPLAIN SELECT * FROM employees WHERE salary > 50000;
```

🔍 **Output Analysis (MySQL Example)**  
| id | select_type | table | type | possible_keys | key | rows | Extra |
|----|------------|-------|------|--------------|-----|------|-------|
| 1 | SIMPLE | employees | ALL | idx_salary | NULL | 100000 | Using where |

❌ **Issue:**

- `ALL` means **full table scan**, which is slow.

✅ **Adding an Index for Optimization**

```sql
CREATE INDEX idx_salary ON employees(salary);
```

```sql
EXPLAIN SELECT * FROM employees WHERE salary > 50000;
```

🔍 **Improved Output:**  
| id | select_type | table | type | possible_keys | key | rows | Extra |
|----|------------|-------|------|--------------|-----|------|-------|
| 1 | SIMPLE | employees | RANGE | idx_salary | idx_salary | 100 | Using index |

✅ **Now, the query uses an index, making it much faster.**

---

## **3. Indexing Strategies**

Indexes improve search speed by allowing the database to locate data faster.

### **Types of Indexes**

| Index Type              | Description                           | Use Case                                         |
| ----------------------- | ------------------------------------- | ------------------------------------------------ |
| **Single-Column Index** | Index on one column                   | Frequently filtered column (`WHERE`, `ORDER BY`) |
| **Composite Index**     | Index on multiple columns             | Queries using multiple columns in `WHERE`        |
| **Unique Index**        | Ensures values are unique             | Email, Username                                  |
| **Full-Text Index**     | Optimized for text searches           | Searching in large text fields                   |
| **Clustered Index**     | Physically sorts data                 | Primary key (only one per table)                 |
| **Non-Clustered Index** | Separate structure storing references | Lookup operations on large tables                |

✅ **Example: Creating an Index for Faster Search**

```sql
CREATE INDEX idx_lastname ON employees(lastname);
```

✅ **Example: Composite Index (`first_name` + `last_name`)**

```sql
CREATE INDEX idx_name ON employees(first_name, last_name);
```

🔍 **Query Using Composite Index**

```sql
SELECT * FROM employees WHERE first_name = 'John' AND last_name = 'Doe';
```

✅ **Uses `idx_name` for optimized search!**

---

## **4. Partitioning & Sharding**

Partitioning and sharding help manage large datasets by splitting data efficiently.

### **4.1 Partitioning**

Partitioning divides a table into smaller parts based on a column (e.g., `date`, `region`).

✅ **Types of Partitioning:**  
| Type | Description | Example |
|------|------------|---------|
| **Range Partitioning** | Splits data into ranges | `January-March`, `April-June` |
| **List Partitioning** | Divides based on specific values | `Region A`, `Region B` |
| **Hash Partitioning** | Distributes data evenly using a hash function | Used for load balancing |
| **Composite Partitioning** | Combination of methods | Range + Hash |

✅ **Example: Range Partitioning (MySQL, PostgreSQL)**

```sql
CREATE TABLE sales (
    id INT,
    sale_date DATE,
    amount DECIMAL(10,2)
) PARTITION BY RANGE(YEAR(sale_date)) (
    PARTITION p1 VALUES LESS THAN (2022),
    PARTITION p2 VALUES LESS THAN (2023),
    PARTITION p3 VALUES LESS THAN (2024)
);
```

✅ **Benefits of Partitioning:**

- Faster query performance for large tables.
- Parallel processing across partitions.
- Efficient data archiving & cleanup.

---

### **4.2 Sharding**

Sharding splits data across multiple servers to distribute load and improve performance.

✅ **Example: Horizontal Sharding (Dividing Users by Region)**  
| Server | Data Stored |
|--------|------------|
| **Shard 1** | Users from North America |
| **Shard 2** | Users from Europe |
| **Shard 3** | Users from Asia |

✅ **Sharding Techniques:**  
| Method | Description |
|--------|------------|
| **Range-Based Sharding** | Splits data by ranges (e.g., `User ID < 10000`) |
| **Hash-Based Sharding** | Uses a hash function to distribute data |
| **Geographic Sharding** | Divides data by user location |
| **Directory-Based Sharding** | Uses a lookup table to find shard location |

🔍 **When to Use Sharding?**

- Large-scale applications (millions of users).
- High query loads requiring distributed databases.
- Reducing single-server failures and bottlenecks.

---

## **Summary Table**

| Feature                | Purpose                                     | Example                               |
| ---------------------- | ------------------------------------------- | ------------------------------------- |
| **Query Optimization** | Improves SQL performance                    | Avoid `SELECT *`, use indexing        |
| **EXPLAIN ANALYZE**    | Analyzes query execution plan               | `EXPLAIN SELECT ...`                  |
| **Indexing**           | Speeds up search operations                 | `CREATE INDEX idx_col ON table(col);` |
| **Partitioning**       | Divides large tables for better performance | `PARTITION BY RANGE(...)`             |
| **Sharding**           | Distributes data across multiple servers    | `User data split by region`           |

# **11. SQL Security & User Management**

- User Roles & Permissions (`GRANT`, `REVOKE`)
- SQL Injection & Prevention
- Data Masking & Encryption

---

## **1. User Roles & Permissions (`GRANT`, `REVOKE`)**

SQL databases use roles and permissions to control access to tables, views, and procedures.

### **1.1 Granting Permissions (`GRANT`)**

The `GRANT` statement allows a user to perform specific actions on a database object.

✅ **Example: Grant Read Access**

```sql
GRANT SELECT ON employees TO 'john'@'localhost';
```

✅ **Example: Grant Read & Write Access**

```sql
GRANT SELECT, INSERT, UPDATE ON employees TO 'john'@'localhost';
```

✅ **Granting All Privileges (Admin User)**

```sql
GRANT ALL PRIVILEGES ON mydatabase.* TO 'admin'@'%';
```

---

### **1.2 Revoking Permissions (`REVOKE`)**

The `REVOKE` statement removes privileges from a user.

✅ **Example: Revoke Write Access**

```sql
REVOKE INSERT, UPDATE ON employees FROM 'john'@'localhost';
```

✅ **Revoke All Privileges**

```sql
REVOKE ALL PRIVILEGES ON mydatabase.* FROM 'john'@'localhost';
```

---

### **1.3 Creating & Assigning Roles**

Using roles simplifies permission management.

✅ **Creating a Role (MySQL 8.0, PostgreSQL)**

```sql
CREATE ROLE read_only;
GRANT SELECT ON employees TO read_only;
GRANT read_only TO 'john'@'localhost';
```

✅ **Dropping a Role**

```sql
DROP ROLE read_only;
```

🔍 **Best Practices for Roles & Permissions:**

- Follow **least privilege** principle (grant only necessary access).
- Use **roles** instead of assigning permissions to individual users.
- Regularly **audit permissions** to remove unnecessary access.

---

## **2. SQL Injection & Prevention**

**SQL Injection** is a security vulnerability where attackers manipulate SQL queries to access or modify data.

---

### **2.1 Example of SQL Injection Attack**

An insecure login query:

```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'password';
```

An attacker enters:  
`' OR 1=1 --`  
Which results in:

```sql
SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = '';
```

✅ **Effect:** This **bypasses authentication**, allowing access without valid credentials.

---

### **2.2 Preventing SQL Injection**

✅ **1. Use Prepared Statements (Parameterized Queries)**

```sql
PREPARE stmt FROM 'SELECT * FROM users WHERE username = ? AND password = ?';
SET @user = 'admin', @pass = 'password';
EXECUTE stmt USING @user, @pass;
```

✅ **2. Use ORM (Object-Relational Mapping) Libraries**  
Frameworks like **Sequelize (Node.js), SQLAlchemy (Python), and Hibernate (Java)** handle queries securely.

✅ **3. Validate & Sanitize User Input**

- Allow only **expected characters** (e.g., `A-Za-z0-9`).
- Limit input length (`VARCHAR(50)` instead of `TEXT`).

✅ **4. Use Web Application Firewalls (WAFs)**  
A WAF filters out malicious SQL patterns.

✅ **5. Restrict Database Privileges**

- **Do not use `root` or `admin` for applications**.
- Use a **limited-privilege** database user.

🔍 **Best Practices for Preventing SQL Injection:**  
| 🔒 Security Measure | ✅ Best Practice |
|------------------|--------------|
| **Use Prepared Statements** | Yes ✅ |
| **Escape User Input** | Yes ✅ |
| **Restrict Database User Permissions** | Yes ✅ |
| **Regular Security Audits** | Yes ✅ |

---

## **3. Data Masking & Encryption**

Data security ensures sensitive data (like passwords & credit card details) is protected.

---

### **3.1 Data Masking (Hiding Sensitive Data)**

✅ **Example: Masking Credit Card Numbers**

```sql
SELECT CONCAT('****-****-****-', RIGHT(card_number, 4)) AS masked_card FROM payments;
```

🔍 **Output:**  
| card_number | masked_card |
|------------|-------------|
| 1234567812345678 | \***\*-\*\***-\*\*\*\*-5678 |

✅ **Dynamic Data Masking (SQL Server Example)**

```sql
ALTER TABLE customers ALTER COLUMN email ADD MASKED WITH (FUNCTION = 'email()');
```

🔍 **Best Practices for Data Masking:**

- Mask **PII (Personally Identifiable Information)** in logs & reports.
- Restrict access to unmasked data.

---

### **3.2 Data Encryption (Protecting Stored Data)**

✅ **1. Hashing Passwords (`SHA-256`, `bcrypt`)**

```sql
UPDATE users SET password = SHA2('mypassword', 256) WHERE username = 'john';
```

✅ **2. Encrypting & Decrypting Data (AES Encryption - MySQL Example)**

```sql
UPDATE users SET ssn = AES_ENCRYPT('123-45-6789', 'my_secret_key');
SELECT AES_DECRYPT(ssn, 'my_secret_key') FROM users;
```

✅ **3. Using Column-Level Encryption (PostgreSQL Example)**

```sql
CREATE EXTENSION pgcrypto;
UPDATE users SET ssn = PGP_SYM_ENCRYPT('123-45-6789', 'my_secret_key');
SELECT PGP_SYM_DECRYPT(ssn, 'my_secret_key') FROM users;
```

🔍 **Best Practices for Encryption:**  
| 🛡️ Security Measure | ✅ Best Practice |
|------------------|--------------|
| **Use Strong Hashing for Passwords** | Yes ✅ |
| **Encrypt Sensitive Data (PII, Financial Data)** | Yes ✅ |
| **Use Environment Variables for Keys** | Yes ✅ |

---

## **Summary Table**

| Feature                      | Purpose                  | Example                              |
| ---------------------------- | ------------------------ | ------------------------------------ |
| **User Roles & Permissions** | Restrict access to users | `GRANT SELECT ON employees TO user;` |
| **SQL Injection Prevention** | Protect from attacks     | Use prepared statements              |
| **Data Masking**             | Hide sensitive info      | Mask credit card numbers             |
| **Data Encryption**          | Secure stored data       | `AES_ENCRYPT`, `SHA-256`             |

# **12. NoSQL & Advanced SQL Concepts**

- JSON & XML Handling in SQL
- Recursive Queries (`WITH RECURSIVE`)
- Window Functions (`RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`)
- Full-Text Search

---

## **1. JSON & XML Handling in SQL**

Modern databases support **JSON & XML** for storing and querying structured data.

### **1.1 JSON Handling**

Most databases (MySQL, PostgreSQL, SQL Server) support JSON functions.

✅ **Storing JSON Data (MySQL Example)**

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    details JSON
);
```

✅ **Inserting JSON Data**

```sql
INSERT INTO products (details) VALUES ('{"name": "Laptop", "price": 1200}');
```

✅ **Querying JSON Data (MySQL)**

```sql
SELECT details->>'$.name' AS product_name FROM products;
```

✅ **Querying JSON Data (PostgreSQL)**

```sql
SELECT details->>'name' AS product_name FROM products;
```

✅ **Indexing JSON Fields (PostgreSQL Example)**

```sql
CREATE INDEX idx_json ON products USING gin(details);
```

---

### **1.2 XML Handling**

SQL Server and PostgreSQL support XML functions.

✅ **Storing XML Data (SQL Server Example)**

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    order_data XML
);
```

✅ **Querying XML Data**

```sql
SELECT order_data.value('(/order/customer/name)[1]', 'VARCHAR(100)') FROM orders;
```

✅ **Converting JSON to XML (PostgreSQL Example)**

```sql
SELECT json_to_xml('{"name": "John", "age": 30}');
```

🔍 **When to Use JSON vs XML?**  
| Feature | JSON | XML |
|---------|------|-----|
| Readability | Easy | Complex |
| Data Storage | Flexible | Structured |
| Indexing | Yes | Yes |
| Best For | Web APIs, NoSQL | Configurations, Documents |

---

## **2. Recursive Queries (`WITH RECURSIVE`)**

Recursive queries retrieve hierarchical data (e.g., employee hierarchy, categories).

✅ **Example: Employee Hierarchy (PostgreSQL & MySQL 8+)**

```sql
WITH RECURSIVE employee_tree AS (
    SELECT id, name, manager_id, 1 AS level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, et.level + 1
    FROM employees e
    JOIN employee_tree et ON e.manager_id = et.id
)
SELECT * FROM employee_tree;
```

🔍 **How It Works?**

1. **Base Case:** Selects top-level managers.
2. **Recursive Case:** Joins with itself to find subordinates.

✅ **Example Output:**  
| id | name | manager_id | level |
|----|------|-----------|-------|
| 1 | Alice | NULL | 1 |
| 2 | Bob | 1 | 2 |
| 3 | Charlie | 2 | 3 |

🔍 **Best Use Cases for Recursive Queries**

- Organizational hierarchy
- Folder structures
- Graph-based queries

---

## **3. Window Functions (`RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`)**

Window functions **perform calculations across a subset of rows** without collapsing them.

✅ **Example: Employee Salaries (PostgreSQL, MySQL 8+, SQL Server)**

```sql
SELECT id, name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank,
       LAG(salary) OVER (PARTITION BY department ORDER BY salary) AS previous_salary,
       LEAD(salary) OVER (PARTITION BY department ORDER BY salary) AS next_salary
FROM employees;
```

🔍 **Window Function Differences**  
| Function | Description |
|----------|------------|
| `RANK()` | Assigns ranks **with gaps** (1, 2, 2, 4) |
| `DENSE_RANK()` | Assigns **consecutive ranks** (1, 2, 2, 3) |
| `LAG()` | Retrieves **previous row** value |
| `LEAD()` | Retrieves **next row** value |

✅ **Example Output**  
| id | name | department | salary | rank | dense_rank | previous_salary | next_salary |
|----|------|-----------|--------|------|------------|----------------|------------|
| 1 | Alice | IT | 5000 | 1 | 1 | NULL | 4500 |
| 2 | Bob | IT | 4500 | 2 | 2 | 5000 | 4000 |

🔍 **Best Use Cases for Window Functions**

- **Rankings** (e.g., top salespersons per region).
- **Comparing current & previous records**.
- **Moving averages & cumulative sums**.

---

## **4. Full-Text Search**

Full-text search (FTS) improves text-based queries (e.g., searching articles, product descriptions).

✅ **4.1 Enabling Full-Text Search (MySQL)**

```sql
CREATE FULLTEXT INDEX idx_search ON articles (title, content);
```

✅ **Searching with `MATCH()`**

```sql
SELECT * FROM articles WHERE MATCH(title, content) AGAINST('database optimization');
```

✅ **4.2 PostgreSQL Full-Text Search**

```sql
SELECT * FROM articles WHERE to_tsvector(title || ' ' || content) @@ to_tsquery('database & optimization');
```

🔍 **FTS vs. `LIKE` Performance**  
| Method | Speed | Use Case |
|--------|-------|---------|
| `LIKE '%word%'` | Slow (scans entire table) | Small datasets |
| Full-Text Index | Fast | Large datasets |

🔍 **Best Use Cases for Full-Text Search**

- **Search engines** for blogs, e-commerce.
- **Filtering user-generated content**.

---

## **Summary Table**

| Feature               | Purpose                       | Example                                                  |
| --------------------- | ----------------------------- | -------------------------------------------------------- |
| **JSON/XML Handling** | Store & query structured data | `SELECT details->>'name' FROM products;`                 |
| **Recursive Queries** | Query hierarchical data       | `WITH RECURSIVE employee_tree AS (...)`                  |
| **Window Functions**  | Rank & compare records        | `RANK() OVER (PARTITION BY dept ORDER BY salary DESC)`   |
| **Full-Text Search**  | Fast text-based searches      | `MATCH(title, content) AGAINST('database optimization')` |

---
