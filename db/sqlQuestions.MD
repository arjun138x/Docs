---
# SQL Interview Questions & Concepts
---

### What is the order of appearance of the common statements in a SELECT query?

```sql
SELECT – FROM – JOIN – ON – WHERE – GROUP BY – HAVING – ORDER BY – LIMIT
```

---

### What is normalization?

- The process of organizing data to reduce redundancy and improve data integrity.
- It leads to better database design with minimized duplication and more efficient access and control.

---

### What is denormalization?

- The opposite of normalization — combines tables to improve read performance.
- Useful when read speed is more critical than write optimization.

---

### Difference between renaming a column and giving it an alias?

- **Renaming**: Permanently changes the column name in the table.
- **Alias**: Temporarily names the column for the duration of the query using `AS`.

---

### Nested vs Correlated Subqueries

- **Correlated Subquery**: References columns from the outer query and is executed per outer row.
- **Non-correlated Subquery**: Self-contained and can run independently.

---

### What are Indexes? Types of Indexing?

Indexes are data structures that optimize retrieval speed.

**Types:**

1. **Primary Indexing**

   - Based on primary key; unique values.

   ```sql
   -- Example Table
   | StudentID | Name    | Age |
   |-----------|---------|-----|
   | 1         | Alice   | 20  |
   ```

2. **Secondary Indexing**

   - Used for non-primary key columns.

   ```sql
   CREATE INDEX idx_name ON Students(Name);
   ```

3. **Clustered Indexing**

   - Data rows stored in index order; one per table.

   ```sql
   CREATE CLUSTERED INDEX idx_lastname ON Employees(LastName);
   ```

4. **Non-clustered Indexing**

   - Separate structure with pointers to data.

   ```sql
   CREATE NONCLUSTERED INDEX idx_firstname ON Employees(FirstName);
   ```

---

### Clustered vs Non-clustered Indexes

| Clustered Index        | Non-clustered Index        |
| ---------------------- | -------------------------- |
| Sorts actual data rows | Uses pointers to data rows |
| Only one per table     | Multiple allowed           |

---

### CASE Function

Implements `IF-THEN-ELSE` logic.

```sql
CASE
  WHEN condition_1 THEN result_1
  WHEN condition_2 THEN result_2
  ELSE default_result
END;
```

---

### HAVING vs WHERE

- **WHERE**: Filters rows _before_ grouping.
- **HAVING**: Filters groups _after_ grouping.

```sql
-- WHERE filters rows
SELECT * FROM Employees
WHERE salary > 50000;

-- HAVING filters groups
SELECT department_id, AVG(salary)
FROM Employees
GROUP BY department_id
HAVING AVG(salary) > 50000;
```

---

### Insert Record into Table

```sql
INSERT INTO table_name
VALUES
(value_1, value_2, ...),
(value_3, value_4, ...);
```

---

### Select Even or Odd Records

```sql
-- Using MOD
SELECT * FROM table_name
WHERE MOD(ID_column, 2) = 0;

-- Using %
SELECT * FROM table_name
WHERE ID_column % 2 = 0;

-- For Odd records:
WHERE ID_column % 2 <> 0;
```

---

### Prevent Duplicate Records

Use `DISTINCT`:

```sql
SELECT DISTINCT column_name FROM table_name;
```

Or enforce unique constraints on the table.

---

### Find nth Highest Value

```sql
SELECT * FROM table_name
ORDER BY column_name DESC
LIMIT 1 OFFSET (n - 1);
```

---

### Search for Values Starting with a Letter

```sql
-- Names starting with A
SELECT * FROM table_name
WHERE surname LIKE 'A%';
```

---

### Find Last ID in a Table

```sql
-- Most SQL versions
SELECT id FROM table_name
ORDER BY id DESC
LIMIT 1;

-- SQL Server
SELECT TOP 1 id FROM table_name
ORDER BY id DESC;
```

---

### Select Random Rows

```sql
-- MySQL
SELECT * FROM table_name
ORDER BY RAND()
LIMIT 5;

-- PostgreSQL
SELECT * FROM table_name
ORDER BY RANDOM()
LIMIT 5;
```

---

### What is a View?

- A virtual table based on the result of a query.

---

### ACID Properties

- **Atomicity**: All steps succeed or fail as one.
- **Consistency**: Data remains valid after transactions.
- **Isolation**: Transactions don’t interfere.
- **Durability**: Once committed, changes are permanent.

---

### What is a Subquery?

A query nested inside another.

#### Example Usages:

1. **SELECT clause**

```sql
SELECT employee_id,
  (SELECT department_name
   FROM departments
   WHERE departments.id = employees.department_id) AS department_name
FROM employees;
```

2. **FROM clause**

```sql
SELECT sub.employee_id, sub.total_sales
FROM (
  SELECT employee_id, SUM(sales) AS total_sales
  FROM sales
  GROUP BY employee_id
) AS sub;
```

3. **WHERE clause**

```sql
SELECT employee_id, name
FROM employees
WHERE department_id = (
  SELECT id FROM departments
  WHERE department_name = 'HR'
);
```

4. **HAVING clause**

```sql
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > (
  SELECT AVG(employee_count)
  FROM (
    SELECT COUNT(*) AS employee_count
    FROM employees
    GROUP BY department_id
  ) AS dept_counts
);
```

---

### Types of Subqueries

- **Single-row**
- **Multiple-row**
- **Multiple-column**

#### Example:

```sql
-- Single-row
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Multiple-row
SELECT name FROM employees
WHERE department_id IN (
  SELECT department_id FROM employees WHERE name = 'John'
);

-- Multiple-column
SELECT name, department_id
FROM employees
WHERE (salary, department_id) > (
  SELECT MAX(salary), id
  FROM departments
  WHERE department_name = 'HR'
);
```

---

### What is a Correlated Subquery?

References columns from the outer query.

```sql
SELECT name, salary
FROM employees e1
WHERE salary > (
  SELECT AVG(salary)
  FROM employees e2
  WHERE e1.department_id = e2.department_id
);
```

### What is a Cursor?

- A **cursor** in SQL is a database object used to retrieve, manipulate, and navigate through a result set **row by row**.
- Useful when operations on each row individually are required (instead of set-based operations).

---

### Types of Cursors

1. **Static Cursor**: Result set is fixed when the cursor is opened.
2. **Dynamic Cursor**: Reflects changes to the result set while open.
3. **Forward-only Cursor**: Can only fetch rows sequentially (first to last).
4. **Keyset-driven Cursor**: Key set is fixed, but data values are updated as they change.

---

### Cursor Lifecycle

1. **Declare**: Define the cursor with the SQL query.
2. **Open**: Allocate resources and populate the cursor with data.
3. **Fetch**: Retrieve rows from the cursor one at a time.
4. **Close**: Release the cursor resources.
5. **Deallocate**: Remove the cursor definition from memory.

---

### Example: Cursor in SQL Server

```sql
-- Declare variables to hold the data from the cursor
DECLARE @EmployeeID INT;
DECLARE @EmployeeName NVARCHAR(100);
DECLARE @Salary DECIMAL(10, 2);

-- Declare the cursor
DECLARE employee_cursor CURSOR FOR
SELECT EmployeeID, EmployeeName, Salary
FROM Employees;

-- Open the cursor
OPEN employee_cursor;

-- Fetch the first row from the cursor
FETCH NEXT FROM employee_cursor INTO @EmployeeID, @EmployeeName, @Salary;

-- Loop through the result set
WHILE @@FETCH_STATUS = 0
BEGIN
  -- Print the employee details
  PRINT 'Employee ID: ' + CAST(@EmployeeID AS NVARCHAR) +
        ', Name: ' + @EmployeeName +
        ', Salary: ' + CAST(@Salary AS NVARCHAR);

  -- Fetch the next row
  FETCH NEXT FROM employee_cursor INTO @EmployeeID, @EmployeeName, @Salary;
END;

-- Close the cursor
CLOSE employee_cursor;

-- Deallocate the cursor
DEALLOCATE employee_cursor;
```

---

### Explanation of the Example

- **`DECLARE`**: Declares variables to store values from each row.
- **`DECLARE employee_cursor CURSOR FOR`**: Defines the cursor with a query.
- **`OPEN employee_cursor`**: Executes the query and stores the result set.
- **`FETCH NEXT`**: Retrieves one row into the variables.
- **`WHILE @@FETCH_STATUS = 0`**: Loops until all rows are fetched.
- **`PRINT`**: Outputs employee info for each row.
- **`CLOSE`**: Releases resources.
- **`DEALLOCATE`**: Deletes the cursor definition.

---

### When to Use Cursors

- Need row-by-row logic.
- Complex workflows not possible in a single SQL statement.
- Operations requiring procedural steps.

---

### When to Avoid Cursors

- **Performance overhead**: Cursors are resource-intensive.
- **Set-based operations** are usually more efficient and should be preferred when possible.

## Advanced SQL Questions

---

### What Are Window Functions?

- Functions that perform calculations across a set of table rows that are **related to the current row**.
- Common examples:
  - `ROW_NUMBER()`
  - `RANK()`
  - `DENSE_RANK()`
  - `NTILE()`

---

### `UNION` vs `UNION ALL`

| Feature     | `UNION`                         | `UNION ALL`                   |
| ----------- | ------------------------------- | ----------------------------- |
| Duplicates  | Removes duplicates              | Keeps duplicates              |
| Performance | Slower (due to duplicate check) | Faster (no duplicate check)   |
| Use case    | When unique results are needed  | When all results are required |

---

### What Is an Execution Plan?

- A **graphical or textual representation** of how SQL Server or another RDBMS **executes a query**.
- Shows the steps like table scans, index usage, joins, sorts, etc.
- Helps in **query optimization and debugging performance issues**.

---

### `EXISTS` vs `IN`

| Feature     | `EXISTS`                                   | `IN`                                   |
| ----------- | ------------------------------------------ | -------------------------------------- |
| Use case    | Checks if **any row exists** in a subquery | Checks if a **value exists in a list** |
| Efficiency  | Stops on the **first match**               | Evaluates **all values**               |
| Performance | Better for correlated subqueries           | Better for small, static lists         |

---

### What Is a Temporary Table?

- A table that is **created and used during a session**.
- Automatically **deleted when the session ends**.
- Useful for **storing intermediate results**.
- Created using:
  ```sql
  CREATE TABLE #TempTable (...)
  ```

---

### What Are Common Table Expressions (CTEs)?

- **Temporary result sets** defined within the scope of a single SQL statement.
- Syntax:
  ```sql
  WITH CTE_Name AS (
    SELECT ...
  )
  SELECT * FROM CTE_Name;
  ```
- Improves readability and supports **recursive queries**.

---

### What Is Database Partitioning?

- Dividing a **large database/table into smaller, manageable parts** (partitions).
- Each partition can be stored/accessed **independently**.
- Improves:
  - Query performance
  - Maintenance
  - Scalability

---

### Explain `MERGE` Statement

- Combines `INSERT`, `UPDATE`, and `DELETE` in a **single SQL statement**.
- Syntax:
  ```sql
  MERGE target_table AS T
  USING source_table AS S
  ON T.id = S.id
  WHEN MATCHED THEN
    UPDATE SET ...
  WHEN NOT MATCHED THEN
    INSERT ...
  ```

---

### What Are OLTP and OLAP?

| Aspect      | OLTP                          | OLAP                                 |
| ----------- | ----------------------------- | ------------------------------------ |
| Full Form   | Online Transaction Processing | Online Analytical Processing         |
| Purpose     | Day-to-day transactions       | Complex queries and data analysis    |
| Operations  | Insert, Update, Delete        | Read-heavy, analytical queries       |
| Data Volume | Smaller, real-time            | Large, historical                    |
| Schema      | Normalized                    | Denormalized (star/snowflake schema) |

---

### What Is a Materialized View?

- A **view that stores the result set** of the query physically.
- Unlike normal views, it **improves performance** by caching results.
- Needs to be **refreshed** to stay up-to-date.
- Especially useful in **data warehousing and reporting**.

# SQL Queries

DROP SCHEMA

```sql
DROP SCHEMA if exists public cascade
```

Find the second highest salary.

```sql
  SELECT MAX(salary)
  FROM employees
  WHERE salary < (SELECT MAX(salary) FROM employees);

  SELECT Salary
  FROM Employee
  ORDER BY Salary DESC LIMIT 1 OFFSET 1;
```

Count the number of employees in each department.

```sql
  SELECT department_id, COUNT(\*)
  FROM employees
  GROUP BY department_id;
```

Find employees who have the highest salary in each department.

```sql
SELECT department_id, MAX(salary)
FROM employees
GROUP BY department_id;
```

Update the salary of employees by 10%.

```sql
UPDATE employees
SET salary = salary \* 1.1;
```

Retrieve the names of employees starting with 'A'.

```sql
SELECT name
FROM employees
WHERE name LIKE 'A%';
```

List all employees who joined in the last 30 days.

```sql
SELECT \*
FROM employees
WHERE join_date > CURRENT_DATE INTERVAL '30' DAY;
```

Show departments with more than 5 employees.

```sql
SELECT department*id, COUNT(*)
FROM employees
GROUP BY department*id
HAVING COUNT(*) > 5;
```

Find the nth highest salary.

```sql
SELECT salary
FROM (
SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
FROM employees
) AS ranked
WHERE rank = n;
```

Retrieve employees who earn more than the average salary.

```sql
SELECT \*
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

Show the difference between the highest and lowest salaries.

```sql
SELECT MAX(salary) MIN(salary) AS salary_difference
FROM employees;
```

Find employees who do not report to anyone.

```sql
SELECT \*
FROM employees
WHERE manager_id IS NULL;
```

Retrieve the top 3 salaries from each department.

```sql
SELECT _
FROM (
SELECT _, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank
FROM employees
) AS ranked
WHERE rank <= 3;
```

Find all employees whose salary is above the department's average salary.

```sql
SELECT \*
FROM employees e1
WHERE salary > (SELECT AVG(salary)
FROM employees e2
WHERE e1.department_id = e2.department_id);
```

List the names of employees along with their manager’s name.

```sql
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

Calculate the cumulative salary of employees.

```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY salary) AS cumulative_salary
FROM employees;
```

Find departments where all employees earn above $5000.

```sql
SELECT department_id
FROM employees
GROUP BY department_id
HAVING MIN(salary) > 5000;
```

Generate a report showing the average salary and total salary for each department.

```sql
SELECT department_id, AVG(salary) AS average_salary, SUM(salary) AS total_salary
FROM employees
GROUP BY department_id;
```

Non-Indian Countries with More Than 5 Students

```sql
SELECT COUNT(studentId), country
FROM myDB.students
WHERE country != "INDIA"
GROUP BY country
HAVING COUNT(studentID) > 5;
```

## DB dump

- sudo -i -u postgres
- psql DB name < file path
- psql localDB < Downloads/postgres-backup.sql

---

## typeOrm

OneToMany relation

    > each bill has multiple pdf's. in bill table we have billNumber and in pdf table we have billNumber.

    // Bill table
    @OneToMany(() => Pdf, (document) => document.bill)
    documents: Pdf[];

    // Pdf table
    @ManyToOne(() => Bill, (bill) => bill.documents)
    @JoinColumn({ name: 'billNumber', referencedColumnName: 'billNumber' })
    bill: Bill;
