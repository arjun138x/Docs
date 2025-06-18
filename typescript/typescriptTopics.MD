# **1. Basics**

- Introduction to TypeScript
- Installing & Setting up TypeScript
- TypeScript Compiler (`tsc`) & Configuration (`tsconfig.json`)
- Differences between TypeScript and JavaScript

---

## **1. Introduction to TypeScript**

### **What is TypeScript?**

TypeScript is a **strongly typed, object-oriented, and compiled** superset of JavaScript developed by Microsoft. It compiles to plain JavaScript and runs in any environment that supports JavaScript (browser, Node.js, etc.).

### **Why Use TypeScript?**

- **Static Typing** – Detects errors during development rather than at runtime.
- **Better IDE Support** – Features like IntelliSense, auto-completion, and better refactoring.
- **Improved Readability & Maintainability** – Type annotations make code easier to understand.
- **Enhanced OOP Features** – Supports classes, interfaces, generics, and more.
- **Backward Compatibility** – TypeScript code compiles to JavaScript and runs anywhere JavaScript does.

---

## **2. Installing & Setting up TypeScript**

### **Installation**

Before installing TypeScript, ensure you have **Node.js** installed. You can check your Node.js version using:

```sh
node -v
```

### **Installing TypeScript Globally**

To install TypeScript globally on your system, run:

```sh
npm install -g typescript
```

Check if TypeScript is installed correctly:

```sh
tsc -v
```

### **Setting up TypeScript in a Project**

1. **Create a new project folder:**

   ```sh
   mkdir my-typescript-project
   cd my-typescript-project
   ```

2. **Initialize a Node.js project (optional):**

   ```sh
   npm init -y
   ```

3. **Install TypeScript locally in the project:**

   ```sh
   npm install --save-dev typescript
   ```

4. **Generate a TypeScript configuration file (`tsconfig.json`):**

   ```sh
   tsc --init
   ```

   This creates a `tsconfig.json` file with default configurations.

5. **Write your first TypeScript file (`index.ts`):**

   ```ts
   let message: string = "Hello, TypeScript!";
   console.log(message);
   ```

6. **Compile TypeScript to JavaScript:**
   ```sh
   tsc index.ts
   ```
   This generates a JavaScript file (`index.js`), which can be executed using:
   ```sh
   node index.js
   ```

---

## **3. TypeScript Compiler (`tsc`) & Configuration (`tsconfig.json`)**

### **What is the TypeScript Compiler (`tsc`)?**

The TypeScript compiler (`tsc`) converts TypeScript (`.ts`) files into JavaScript (`.js`) files.

### **Key `tsc` Commands**

- **Compile a single file:**
  ```sh
  tsc file.ts
  ```
- **Compile multiple files:**
  ```sh
  tsc file1.ts file2.ts
  ```
- **Watch mode (auto-recompile on changes):**
  ```sh
  tsc --watch
  ```
- **Compile using `tsconfig.json`:**
  ```sh
  tsc
  ```

### **Configuring `tsconfig.json`**

The `tsconfig.json` file allows you to customize TypeScript’s behavior.

#### **Important `tsconfig.json` Options**

```json
{
  "compilerOptions": {
    "target": "ES6", // JavaScript version to compile to
    "module": "CommonJS", // Module system (CommonJS, ES6, etc.)
    "strict": true, // Enable strict type-checking
    "outDir": "./dist", // Output directory for compiled files
    "rootDir": "./src", // Source directory for TypeScript files
    "watch": true // Enable watch mode
  },
  "include": ["src"], // Files to include
  "exclude": ["node_modules"] // Files to exclude
}
```

**Usage:**

- Run `tsc` in the project directory to compile all TypeScript files based on `tsconfig.json`.

---

## **4. Differences Between TypeScript and JavaScript**

| Feature             | JavaScript                                  | TypeScript                                                           |
| ------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| **Typing**          | Dynamically typed (no type checking)        | Statically typed (compile-time type checking)                        |
| **Compilation**     | Interpreted, runs directly in browsers      | Needs to be compiled into JavaScript                                 |
| **Interfaces**      | Not supported                               | Supported                                                            |
| **Generics**        | Not supported                               | Supported                                                            |
| **Modules**         | ES6 modules                                 | Supports ES6, CommonJS, AMD, etc.                                    |
| **OOP Features**    | Limited support for classes and inheritance | Full OOP support with interfaces, abstract classes, access modifiers |
| **Code Safety**     | Runtime errors due to lack of type checking | Catches errors at compile-time                                       |
| **Tooling Support** | Basic IntelliSense                          | Better IntelliSense and auto-completion                              |

### **Example: JavaScript vs TypeScript**

#### **JavaScript Code:**

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, "10")); // Output: 510 (Incorrect due to type coercion)
```

#### **TypeScript Code:**

```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, "10")); // Compilation Error: Argument of type 'string' is not assignable to type 'number'.
```

**Key Takeaway:** TypeScript prevents potential errors by enforcing type checking.

---

### **Conclusion**

- **TypeScript is a superset of JavaScript** that adds static typing, better tooling, and modern programming features.
- **Installing and setting up TypeScript** is simple using `npm` and the `tsc` compiler.
- **The TypeScript compiler (`tsc`) converts `.ts` files to `.js` files**, and `tsconfig.json` allows customization.
- **TypeScript provides better error prevention and maintainability** compared to JavaScript.

# **2. Basic Types**

- Primitive Types (`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`)
- Special Types (`any`, `unknown`, `never`, `void`)
- Type Inference & Type Annotations
- Type Assertions (`as` keyword, `<Type>` syntax)
- Literal Types (string, number, boolean literals)

---

### **1. Primitive Types in TypeScript**

Primitive types are the basic types in TypeScript, similar to JavaScript.

#### **a) `string` (Textual Data)**

```ts
let firstName: string = "John";
let message: string = `Hello, ${firstName}!`; // Template literals are also supported
```

#### **b) `number` (Numeric Values)**

```ts
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
```

#### **c) `boolean` (True/False Values)**

```ts
let isActive: boolean = true;
```

#### **d) `null` (Absence of Value)**

```ts
let emptyValue: null = null;
```

#### **e) `undefined` (Uninitialized Variable)**

```ts
let notAssigned: undefined = undefined;
```

#### **f) `bigint` (Large Numbers)**

BigInts are used for very large numbers.

```ts
let bigNumber: bigint = 9007199254740991n;
```

#### **g) `symbol` (Unique Identifiers)**

Symbols are unique and are often used as object property keys.

```ts
let uniqueKey: symbol = Symbol("id");
```

---

### **2. Special Types in TypeScript**

These types provide additional flexibility.

#### **a) `any` (Disables Type Checking)**

Use `any` when you don't want TypeScript to perform type checking.

```ts
let variable: any = 42;
variable = "Hello"; // No error
variable = true; // Still no error
```

**⚠️ Avoid using `any` unless necessary!**

#### **b) `unknown` (Safer Alternative to `any`)**

Unlike `any`, `unknown` forces type checking before usage.

```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Type-safe usage
}
```

#### **c) `never` (Represents Impossible Values)**

Functions that **never return** or always throw an error.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

#### **d) `void` (Represents No Return Value)**

Used for functions that **don’t return anything**.

```ts
function logMessage(): void {
  console.log("This function doesn't return anything.");
}
```

---

### **3. Type Inference & Type Annotations**

TypeScript can **infer types automatically** but allows explicit annotations.

#### **a) Type Inference (Automatic Detection)**

```ts
let user = "Alice"; // Inferred as `string`
let count = 42; // Inferred as `number`
```

#### **b) Type Annotations (Explicit Declaration)**

```ts
let username: string = "Alice";
let total: number = 50;
```

**⚠️ Prefer type inference when possible for cleaner code.**

---

### **4. Type Assertions (Type Casting)**

Used to tell TypeScript the specific type of a value.

#### **a) Using `as` Keyword**

```ts
let value: any = "Hello";
let length: number = (value as string).length;
```

#### **b) Using `<Type>` Syntax**

```ts
let value2: any = "TypeScript";
let length2: number = (<string>value2).length;
```

**🚀 Note:** The `as` syntax is preferred in modern TypeScript.

---

### **5. Literal Types**

Literal types restrict a variable to **specific** values.

#### **a. String Literal Type**

```ts
let direction: "left" | "right" | "up" | "down";
direction = "left"; // ✅ Allowed
// direction = "forward"; // ❌ Error: Not part of the literal type
```

#### **b. Number Literal Type**

```ts
let statusCode: 200 | 400 | 404 | 500;
statusCode = 200; // ✅ Allowed
// statusCode = 201; // ❌ Error
```

#### **c. Boolean Literal Type**

```ts
let isVerified: true | false;
isVerified = true; // ✅ Allowed
// isVerified = "yes"; // ❌ Error
```

---

### **Summary**

| Concept              | Description                                                                                           | Example                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------- |
| **Primitive Types**  | Basic types like `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`               | `let age: number = 30;`                        |
| **Special Types**    | `any` (disable type checking), `unknown` (type-safe any), `never` (never returns), `void` (no return) | `let x: any = 10;`                             |
| **Type Inference**   | TypeScript guesses the type automatically                                                             | `let message = "Hello"; // Inferred as string` |
| **Type Annotations** | Explicitly define types for clarity                                                                   | `let count: number = 42;`                      |
| **Type Assertions**  | Force TypeScript to treat a variable as a certain type                                                | `let length = (value as string).length;`       |
| **Literal Types**    | Restrict values to specific constants                                                                 | `let direction: "up"                           | "down";` |

---

# **3. Functions**

- Function Parameters & Return Types
- Optional & Default Parameters
- Rest Parameters
- Function Overloading
- Arrow Functions & `this` Context

---

## **1. Function Parameters & Return Types in TypeScript**

In TypeScript, you can define function parameters and return types explicitly for type safety.

### **Basic Function with Explicit Types**

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- `a: number, b: number` → Specifies parameter types.
- `: number` after the parentheses → Specifies the return type.

### **Function without Return Value (`void` Type)**

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

- The `void` type indicates that the function does **not return a value**.

---

## **2. Optional & Default Parameters**

### **Optional Parameters (`?` Operator)**

You can make parameters **optional** by adding `?` after the parameter name.

```ts
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"
```

- `greeting?` → This parameter is **optional**.
- If not provided, it defaults to `undefined`, so we handle it with `|| "Hello"`.

### **Default Parameters**

You can provide a **default value** for parameters.

```ts
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Alice")); // "Hello, Alice!"
console.log(greetUser("Bob", "Hi")); // "Hi, Bob!"
```

- Default parameters **prevent `undefined` values**.

---

## **3. Rest Parameters (`...args`)**

Rest parameters allow a function to accept **multiple arguments as an array**.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(10, 20, 30)); // 60
```

- `...numbers: number[]` → Accepts multiple numbers as an array.
- `reduce()` calculates the sum.

---

## **4. Function Overloading**

Function overloading allows multiple function signatures **for different argument types**.

### **Example Without Overloading**

```ts
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return a.toString() + b.toString();
}

console.log(combine(5, 10)); // 15
console.log(combine("Hello, ", "Alice")); // "Hello, Alice"
```

- This works, but the return type is **not strict** (`number | string`).

### **Using Function Overloading**

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return a.toString() + b.toString();
}

console.log(combine(5, 10)); // 15 (number)
console.log(combine("Hello, ", "Alice")); // "Hello, Alice" (string)
```

- The function has **multiple signatures** (`number, number` and `string, string`).
- The actual implementation handles both cases.

---

## **5. Arrow Functions & `this` Context**

Arrow functions in TypeScript have a **lexical `this`**, meaning they don’t rebind `this`.

### **Regular Function (`this` Depends on How It's Called)**

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice");
alice.greet(); // "Hello, my name is Alice"

const greetFunction = alice.greet;
greetFunction(); // ❌ Error: `this` is undefined in a regular function
```

- The issue: When `greetFunction` is called **without context**, `this` becomes `undefined`.

### **Arrow Function (`this` is Preserved)**

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const bob = new Person("Bob");
const greetFunction = bob.greet;
greetFunction(); // ✅ Works correctly, "Hello, my name is Bob"
```

- The arrow function **preserves `this`** from where it was defined.

---

## **Summary**

| Concept                                | Description                                | Example                                                        |
| -------------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| **Function Parameters & Return Types** | Explicitly define parameter & return types | `function add(a: number, b: number): number { return a + b; }` |
| **Optional Parameters**                | Use `?` to make a parameter optional       | `function greet(name: string, msg?: string)`                   |
| **Default Parameters**                 | Provide default values for parameters      | `function greet(name: string, msg: string = "Hi")`             |
| **Rest Parameters**                    | Use `...args` for multiple arguments       | `function sum(...nums: number[])`                              |
| **Function Overloading**               | Define multiple function signatures        | `function combine(a: number, b: number): number;`              |
| **Arrow Functions & `this` Context**   | Arrow functions preserve `this`            | `greet = () => console.log(this.name);`                        |

---

# **4. Objects & Interfaces**

- Object Types
- Interfaces (`interface`)
- Readonly & Optional Properties
- Extending Interfaces
- Intersection & Union Types
- Type Aliases (`type`)

---

## **1. Object Types in TypeScript**

Object types define the structure of an object with specific properties and their types.

### **Basic Object Type**

```ts
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
```

### **Using a Function with an Object Type**

```ts
function printUser(user: { name: string; age: number }): void {
  console.log(`${user.name} is ${user.age} years old.`);
}

printUser({ name: "Bob", age: 30 });
```

---

## **2. Interfaces (`interface`)**

Interfaces define the structure of objects in a reusable way.

### **Basic Interface**

```ts
interface User {
  name: string;
  age: number;
}

const person: User = { name: "Charlie", age: 28 };
```

### **Interface with Methods**

```ts
interface Employee {
  name: string;
  age: number;
  getSalary(): number;
}

const emp: Employee = {
  name: "David",
  age: 32,
  getSalary: () => 50000,
};
```

---

## **3. Readonly & Optional Properties**

### **Readonly Properties (`readonly`)**

Prevents modification of a property after initialization.

```ts
interface Product {
  readonly id: number;
  name: string;
}

const item: Product = { id: 101, name: "Laptop" };
// item.id = 202; // ❌ Error: Cannot assign to 'id' because it is a read-only property
```

### **Optional Properties (`?`)**

Makes properties optional.

```ts
interface Car {
  brand: string;
  model?: string; // Optional
}

const car1: Car = { brand: "Tesla" };
const car2: Car = { brand: "BMW", model: "X5" };
```

---

## **4. Extending Interfaces**

An interface can **inherit** properties from another interface.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const pet: Dog = {
  name: "Buddy",
  breed: "Labrador",
};
```

### **Multiple Interface Inheritance**

```ts
interface CanFly {
  fly(): void;
}

interface CanSwim {
  swim(): void;
}

interface Bird extends CanFly, CanSwim {
  name: string;
}

const duck: Bird = {
  name: "Ducky",
  fly: () => console.log("Flying..."),
  swim: () => console.log("Swimming..."),
};
```

---

## **5. Intersection & Union Types**

### **Intersection Types (`&`)**

Combines multiple types into one.

```ts
interface Person {
  name: string;
}

interface Employee {
  company: string;
}

type Worker = Person & Employee;

const developer: Worker = {
  name: "Eve",
  company: "Google",
};
```

### **Union Types (`|`)**

A variable can hold values of **multiple types**.

```ts
let data: string | number;

data = "Hello"; // ✅ Allowed
data = 42; // ✅ Allowed
// data = true;  // ❌ Error: Boolean not allowed
```

### **Using Union Types in Functions**

```ts
function display(value: string | number): void {
  console.log(`Value: ${value}`);
}

display("Alice"); // ✅ OK
display(100); // ✅ OK
```

---

## **6. Type Aliases (`type`)**

Type aliases create **custom names** for types.

### **Basic Type Alias**

```ts
type ID = string | number;

let userId: ID = "ABC123";
let orderId: ID = 789;
```

### **Using Type Aliases for Objects**

```ts
type Student = {
  name: string;
  age: number;
};

const learner: Student = {
  name: "Tom",
  age: 22,
};
```

### **Difference Between `type` and `interface`**

| Feature                                   | `type`                  | `interface`        |
| ----------------------------------------- | ----------------------- | ------------------ |
| Can define objects, functions, and unions | ✅ Yes                  | ✅ Yes             |
| Can be extended                           | ❌ No                   | ✅ Yes (`extends`) |
| Can be intersected                        | ✅ Yes (`&`)            | ✅ Yes (`extends`) |
| Supports computed properties              | ❌ No                   | ✅ Yes             |
| Preferred for                             | Union types, primitives | Object structures  |

---

## **Summary**

| Concept                       | Description                                | Example                                           |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------- | ----------------- | -------- |
| **Object Types**              | Defines an object structure                | `let user: { name: string; age: number }`         |
| **Interfaces (`interface`)**  | Creates reusable object structures         | `interface User { name: string; age: number }`    |
| **Readonly Properties**       | Prevents modification of properties        | `readonly id: number;`                            |
| **Optional Properties (`?`)** | Makes properties optional                  | `model?: string;`                                 |
| **Extending Interfaces**      | Inherits properties from another interface | `interface Dog extends Animal { breed: string; }` |
| **Intersection Types (`&`)**  | Combines multiple types                    | `type Worker = Person & Employee;`                |
| \*\*Union Types (`            | `)\*\*                                     | Allows multiple possible types                    | `let data: string | number;` |
| **Type Aliases (`type`)**     | Creates custom type names                  | `type ID = string                                 | number;`          |

---

# **5. Classes & OOP Concepts**

- Class Syntax (`class`, `constructor`, `this`)
- Access Modifiers (`public`, `private`, `protected`)
- Readonly Properties
- Getters & Setters
- Abstract Classes & Methods
- Interfaces vs Abstract Classes
- Static Properties & Methods
- Implementing Interfaces in Classes

---

## **1. Class Syntax in TypeScript (`class`, `constructor`, `this`)**

Classes in TypeScript allow creating reusable object blueprints with properties and methods.

### **Basic Class Example**

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Output: Hello, my name is Alice
```

- The `constructor` initializes object properties.
- `this` refers to the current instance.

---

## **2. Access Modifiers (`public`, `private`, `protected`)**

Access modifiers control property and method visibility.

### **1️⃣ Public (Default)**

- Accessible **everywhere**.

```ts
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const dog = new Animal("Buddy");
console.log(dog.name); // ✅ Allowed
```

### **2️⃣ Private (`private`)**

- Accessible **only within the class**.

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
// console.log(account.balance); // ❌ Error: Property 'balance' is private
console.log(account.getBalance()); // ✅ Allowed via method
```

### **3️⃣ Protected (`protected`)**

- Accessible **within the class** and **subclasses**.

```ts
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log(`Salary is ${this.salary}`); // ✅ Accessible inside subclass
  }
}

const manager = new Manager(50000);
// console.log(manager.salary); // ❌ Error: 'salary' is protected
manager.showSalary(); // ✅ Allowed
```

---

## **3. Readonly Properties**

- `readonly` properties **cannot be modified** after initialization.

```ts
class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const myCar = new Car("Tesla");
// myCar.brand = "BMW"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
console.log(myCar.brand); // ✅ Allowed
```

---

## **4. Getters & Setters**

- `get` methods return values.
- `set` methods update values **with validation**.

```ts
class User {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const user = new User(25);
console.log(user.age); // ✅ Accessing using getter
user.age = 30; // ✅ Updating using setter
// user.age = -5; // ❌ Error: Age cannot be negative
```

---

## **5. Abstract Classes & Methods**

- **Abstract classes** cannot be instantiated.
- **Abstract methods** must be implemented in subclasses.

```ts
abstract class Shape {
  abstract area(): number; // Must be implemented in subclasses

  display() {
    console.log("This is a shape");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.54
```

---

## **6. Interfaces vs Abstract Classes**

| Feature                         | Interface                        | Abstract Class                    |
| ------------------------------- | -------------------------------- | --------------------------------- |
| Can have properties             | ✅ Yes (only declarations)       | ✅ Yes (can have implementations) |
| Can have method implementations | ❌ No                            | ✅ Yes                            |
| Can be instantiated             | ❌ No                            | ❌ No                             |
| Supports multiple inheritance   | ✅ Yes (via multiple interfaces) | ❌ No (only single inheritance)   |
| When to use?                    | **For defining structure**       | **For sharing common behavior**   |

---

## **7. Static Properties & Methods**

- **Static properties/methods** belong to the class itself, not instances.

```ts
class MathUtils {
  static PI = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius ** 2;
  }
}

console.log(MathUtils.PI); // ✅ Accessing static property
console.log(MathUtils.circleArea(5)); // ✅ Calling static method
```

---

## **8. Implementing Interfaces in Classes**

A class can **implement** multiple interfaces.

```ts
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

class Document implements Printable, Loggable {
  print() {
    console.log("Printing document...");
  }

  log() {
    console.log("Logging document activity...");
  }
}

const doc = new Document();
doc.print(); // Output: Printing document...
doc.log(); // Output: Logging document activity...
```

---

## **Summary**

| Concept                                | Description                                               | Example                             |
| -------------------------------------- | --------------------------------------------------------- | ----------------------------------- |
| **Class Syntax**                       | Defines object blueprints                                 | `class Person { constructor() {} }` |
| **Access Modifiers**                   | `public`, `private`, `protected`                          | `private balance: number;`          |
| **Readonly Properties**                | Cannot be modified after initialization                   | `readonly id: number;`              |
| **Getters & Setters**                  | Encapsulated property access                              | `get age() { return this._age; }`   |
| **Abstract Classes & Methods**         | Enforces method implementation in subclasses              | `abstract area(): number;`          |
| **Interfaces vs Abstract Classes**     | Interfaces define structure, abstract classes share logic | `class Dog implements Animal`       |
| **Static Properties & Methods**        | Belong to the class, not instances                        | `static PI = 3.14;`                 |
| **Implementing Interfaces in Classes** | A class can implement multiple interfaces                 | `class Doc implements Printable`    |

---

# **6. Advanced Types**

- Union & Intersection Types
- Type Guards (`typeof`, `instanceof`, `in`)
- Discriminated Unions
- Mapped Types
- Conditional Types
- Template Literal Types
- Indexed Access Types
- Keyof Type Operator

---

## **1. Union & Intersection Types**

### **Union Types (`|`)**

A variable can have multiple possible types.

```ts
let data: string | number;

data = "Hello"; // ✅ Allowed
data = 42; // ✅ Allowed
// data = true;  // ❌ Error: Boolean not allowed
```

#### **Using Union Types in Functions**

```ts
function display(value: string | number): void {
  console.log(`Value: ${value}`);
}

display("Alice"); // ✅ OK
display(100); // ✅ OK
```

---

### **Intersection Types (`&`)**

Combines multiple types into one.

```ts
interface Person {
  name: string;
}

interface Employee {
  company: string;
}

type Worker = Person & Employee;

const developer: Worker = {
  name: "Eve",
  company: "Google",
};
```

---

## **2. Type Guards (`typeof`, `instanceof`, `in`)**

### **1️⃣ `typeof` Type Guard**

Used for **primitive types** (`string`, `number`, `boolean`).

```ts
function checkType(value: string | number) {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);
  } else {
    console.log(`Number: ${value.toFixed(2)}`);
  }
}

checkType("hello"); // ✅ String: HELLO
checkType(123.456); // ✅ Number: 123.46
```

---

### **2️⃣ `instanceof` Type Guard**

Used for **class-based objects**.

```ts
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Bike {
  ride() {
    console.log("Riding a bike");
  }
}

function operate(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive(); // ✅ Allowed
  } else {
    vehicle.ride(); // ✅ Allowed
  }
}
```

---

### **3️⃣ `in` Type Guard**

Used to check **property existence**.

```ts
interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

---

## **3. Discriminated Unions**

A **discriminated union** uses a **common property (`kind`)** to distinguish object types.

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

console.log(getArea({ kind: "square", size: 4 })); // ✅ 16
console.log(getArea({ kind: "circle", radius: 5 })); // ✅ 78.54
```

---

## **4. Mapped Types**

Mapped types create **new types** by modifying existing ones.

```ts
type User = {
  name: string;
  age: number;
};

type OptionalUser = {
  [Key in keyof User]?: User[Key];
};

const user: OptionalUser = {
  name: "Alice", // ✅ OK
};
```

---

## **5. Conditional Types**

Conditional types work like **ternary operators** for types.

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"
```

---

## **6. Template Literal Types**

Allows **dynamic string-based types**.

```ts
type Colors = "red" | "blue";
type Shades = "light" | "dark";

type ColoredShades = `${Shades}-${Colors}`; // "light-red" | "light-blue" | "dark-red" | "dark-blue"
```

---

## **7. Indexed Access Types**

Extracts a type from an **object type**.

```ts
type User = {
  name: string;
  age: number;
};

type NameType = User["name"]; // string
type AgeType = User["age"]; // number
```

---

## **8. `keyof` Type Operator**

Extracts **keys from an object type**.

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; // "name" | "age"
```

Using it in a function:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
console.log(getProperty(user, "name")); // ✅ "Alice"
// console.log(getProperty(user, "email")); // ❌ Error: 'email' does not exist
```

---

## **Summary**

| Concept                      | Description                          | Example                            |
| ---------------------------- | ------------------------------------ | ---------------------------------- | -------------- | -------- |
| \*\*Union Types (`           | `)\*\*                               | Allows multiple types              | `let x: string | number;` |
| **Intersection Types (`&`)** | Combines multiple types              | `type Worker = Person & Employee;` |
| **Type Guards**              | Runtime type checks                  | `if (typeof x === "string")`       |
| **Discriminated Unions**     | Common property for type distinction | `kind: "square"                    | "circle"`      |
| **Mapped Types**             | Modify existing types                | `{ [Key in keyof T]?: T[Key] }`    |
| **Conditional Types**        | Type-based conditions                | `T extends string ? "Yes" : "No"`  |
| **Template Literal Types**   | Creates dynamic string types         | `"light-red"                       | "dark-blue"`   |
| **Indexed Access Types**     | Extracts type from object properties | `User["name"]`                     |
| **`keyof` Type Operator**    | Extracts object keys                 | `type K = keyof User;`             |

---

# **7. Generics**

- Generic Functions
- Generic Classes
- Generic Interfaces
- Generic Constraints (`extends`)
- Using Multiple Generics

---

## **1. Generic Functions**

Generics allow creating reusable functions with flexible types.

### **Basic Generic Function**

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity("Hello")); // ✅ "Hello"
console.log(identity(42)); // ✅ 42
```

- `<T>` is a **generic type placeholder**.
- The function works with any type (`string`, `number`, etc.).

### **Explicit vs. Implicit Generic Type Inference**

```ts
identity<number>(100); // Explicit
identity("Hello"); // Implicit (TypeScript infers `T` as string)
```

---

## **2. Generic Classes**

Generic classes allow defining **flexible data structures**.

### **Example: Generic Storage Class**

```ts
class Storage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const stringStorage = new Storage<string>();
stringStorage.add("Apple");
stringStorage.add("Banana");

console.log(stringStorage.getAll()); // ✅ ["Apple", "Banana"]

const numberStorage = new Storage<number>();
numberStorage.add(10);
numberStorage.add(20);

console.log(numberStorage.getAll()); // ✅ [10, 20]
```

---

## **3. Generic Interfaces**

Interfaces can be made generic for **flexible object structures**.

### **Example: Generic API Response Interface**

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Alice", age: 30 },
};

console.log(userResponse.data.name); // ✅ Alice
```

### **Example: Generic Key-Value Interface**

```ts
interface KeyValue<K, V> {
  key: K;
  value: V;
}

const user: KeyValue<string, number> = { key: "age", value: 30 };
```

---

## **4. Generic Constraints (`extends`)**

Restrict the types that can be used in generics.

### **Example: Ensuring `T` is an object with a `length` property**

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello")); // ✅ 5
console.log(getLength([1, 2, 3])); // ✅ 3
// console.log(getLength(100));    // ❌ Error: Number has no `length`
```

### **Example: Generic Constraint with Interface**

```ts
interface Person {
  name: string;
  age: number;
}

function getPersonInfo<T extends Person>(person: T): string {
  return `${person.name} is ${person.age} years old.`;
}

const user = { name: "Bob", age: 40, city: "NYC" };
console.log(getPersonInfo(user)); // ✅ "Bob is 40 years old."
```

---

## **5. Using Multiple Generics**

Generics can accept **multiple type parameters**.

### **Example: Multiple Generic Types in a Function**

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Alice", 25);
console.log(result); // ✅ ["Alice", 25]
```

### **Example: Multiple Generics in Classes**

```ts
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  display(): void {
    console.log(`${this.key}: ${this.value}`);
  }
}

const kv = new KeyValuePair<string, number>("Age", 30);
kv.display(); // ✅ "Age: 30"
```

---

## **Summary**

| Concept                             | Description                            | Example                             |
| ----------------------------------- | -------------------------------------- | ----------------------------------- |
| **Generic Functions**               | Reusable functions with flexible types | `function identity<T>(value: T): T` |
| **Generic Classes**                 | Flexible class structures              | `class Storage<T> {}`               |
| **Generic Interfaces**              | Reusable object types                  | `interface ApiResponse<T> {}`       |
| **Generic Constraints (`extends`)** | Restrict types in generics             | `T extends { length: number }`      |
| **Using Multiple Generics**         | Multiple placeholders for flexibility  | `<T, U>`                            |

---

# **8. Modules & Namespaces**

- Import & Export (`import`, `export`)
- Default & Named Exports
- Aliases (`import * as alias`)
- Type-Only Imports & Exports (`import type`)

---

## **1. Import & Export (`import`, `export`)**

TypeScript follows **ES Modules (ESM)** syntax for importing and exporting between files.

### **Example: Exporting in a File (`math.ts`)**

```ts
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
```

### **Importing in Another File (`app.ts`)**

```ts
import { add, multiply } from "./math";

console.log(add(2, 3)); // ✅ 5
console.log(multiply(4, 5)); // ✅ 20
```

---

## **2. Default & Named Exports**

There are **two types** of exports:

- **Named Exports** → Export multiple items.
- **Default Export** → Export a **single item**.

### **Named Exports (`utils.ts`)**

```ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export const PI = 3.14159;
```

#### **Importing Named Exports**

```ts
import { greet, PI } from "./utils";

console.log(greet("Alice")); // ✅ "Hello, Alice!"
console.log(PI); // ✅ 3.14159
```

---

### **Default Export (`config.ts`)**

```ts
export default function log(message: string): void {
  console.log(`LOG: ${message}`);
}
```

#### **Importing Default Exports**

```ts
import log from "./config";

log("Application started"); // ✅ "LOG: Application started"
```

**Note:**

- **Default exports** don’t require curly braces `{}`.
- A module can only have **one default export**.

---

## **3. Aliases (`import * as alias`)**

Useful when importing **many exports** from a module.

### **Example (`constants.ts`)**

```ts
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;
```

#### **Importing with an Alias (`app.ts`)**

```ts
import * as Constants from "./constants";

console.log(Constants.API_URL); // ✅ "https://api.example.com"
console.log(Constants.TIMEOUT); // ✅ 5000
```

---

## **4. Type-Only Imports & Exports (`import type`)**

Used for **type safety** without affecting runtime code.

### **Example (`types.ts`)**

```ts
export type User = {
  id: number;
  name: string;
};
```

#### **Importing as a Type (`app.ts`)**

```ts
import type { User } from "./types";

const user: User = { id: 1, name: "Alice" };
console.log(user);
```

- The `import type` ensures that `User` is **only used for type checking**.
- It is **removed from compiled JavaScript**, reducing bundle size.

---

## **Summary**

| Feature               | Syntax                               | Example                               |
| --------------------- | ------------------------------------ | ------------------------------------- |
| **Named Export**      | `export { item }`                    | `export function add() {}`            |
| **Named Import**      | `import { item } from "./file"`      | `import { add } from "./math"`        |
| **Default Export**    | `export default item`                | `export default function log() {}`    |
| **Default Import**    | `import item from "./file"`          | `import log from "./config"`          |
| **Import with Alias** | `import * as alias from "./file"`    | `import * as Utils from "./utils"`    |
| **Type-Only Import**  | `import type { Type } from "./file"` | `import type { User } from "./types"` |

---

# **9. Utility Types**

- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- `Extract<T, U>`
- `Exclude<T, U>`
- `NonNullable<T>`
- `ReturnType<T>`, `Parameters<T>`

---

Utility types are **built-in generic types** that help manipulate and transform types efficiently.

---

## **1. `Partial<T>` – Makes Properties Optional**

Creates a type where **all properties of `T` become optional**.

### **Example:**

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = { name: "Alice" }; // ✅ `id` & `email` are optional
```

---

## **2. `Required<T>` – Makes Properties Required**

Converts all optional properties of `T` into **required** ones.

### **Example:**

```ts
interface Profile {
  name?: string;
  age?: number;
}

type FullProfile = Required<Profile>;

const profile: FullProfile = { name: "Bob", age: 25 }; // ✅ Must provide all properties
```

---

## **3. `Readonly<T>` – Prevents Modification**

Marks all properties of `T` as **readonly**.

### **Example:**

```ts
interface Settings {
  theme: string;
  darkMode: boolean;
}

const config: Readonly<Settings> = { theme: "light", darkMode: false };

// config.theme = "dark"; ❌ Error: Cannot assign to 'theme' because it is a read-only property.
```

---

## **4. `Pick<T, K>` – Selects Specific Properties**

Creates a new type with **only the selected keys** from `T`.

### **Example:**

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type BasicProduct = Pick<Product, "id" | "name">;

const item: BasicProduct = { id: 101, name: "Laptop" }; // ✅ Only `id` & `name`
```

---

## **5. `Omit<T, K>` – Removes Specific Properties**

Creates a new type by **excluding specific keys** from `T`.

### **Example:**

```ts
type ProductWithoutStock = Omit<Product, "stock">;

const newItem: ProductWithoutStock = { id: 102, name: "Phone", price: 999 };
// ✅ `stock` is removed
```

---

## **6. `Record<K, T>` – Defines a Key-Value Object Type**

Creates a type where the **keys are `K`** and the **values are `T`**.

### **Example:**

```ts
type Role = "admin" | "user" | "guest";

const permissions: Record<Role, boolean> = {
  admin: true,
  user: false,
  guest: false,
}; // ✅ Only "admin", "user", and "guest" are allowed as keys
```

---

## **7. `Extract<T, U>` – Gets Common Types**

Creates a type that **extracts the common (intersection) types** between `T` and `U`.

### **Example:**

```ts
type Status = "active" | "inactive" | "banned";
type Allowed = "active" | "banned";

type AllowedStatus = Extract<Status, Allowed>; // "active" | "banned"
```

---

## **8. `Exclude<T, U>` – Removes Specific Types**

Creates a type that **excludes matching types** from `T`.

### **Example:**

```ts
type DisallowedStatus = Exclude<Status, Allowed>; // "inactive"
```

---

## **9. `NonNullable<T>` – Removes `null` & `undefined`**

Creates a type that **removes `null` and `undefined`** from `T`.

### **Example:**

```ts
type Name = string | null | undefined;

type ValidName = NonNullable<Name>; // ✅ `string` (null & undefined removed)
```

---

## **10. `ReturnType<T>` – Gets the Return Type of a Function**

Extracts the **return type** of a function.

### **Example:**

```ts
function getAge(): number {
  return 30;
}

type AgeType = ReturnType<typeof getAge>; // `number`
```

---

## **11. `Parameters<T>` – Gets Function Parameter Types**

Extracts **parameter types as a tuple**.

### **Example:**

```ts
function logMessage(message: string, level: number): void {
  console.log(`${level}: ${message}`);
}

type LogParams = Parameters<typeof logMessage>; // `[string, number]`
```

---

## **Summary Table**

| Utility Type         | Purpose                        | Example                         |
| -------------------- | ------------------------------ | ------------------------------- | -------- |
| **`Partial<T>`**     | Makes all properties optional  | `Partial<User>`                 |
| **`Required<T>`**    | Makes all properties required  | `Required<Profile>`             |
| **`Readonly<T>`**    | Makes all properties read-only | `Readonly<Settings>`            |
| **`Pick<T, K>`**     | Selects specific properties    | `Pick<Product, "id"             | "name">` |
| **`Omit<T, K>`**     | Removes specific properties    | `Omit<Product, "stock">`        |
| **`Record<K, T>`**   | Defines key-value pairs        | `Record<Role, boolean>`         |
| **`Extract<T, U>`**  | Gets common types              | `Extract<Status, Allowed>`      |
| **`Exclude<T, U>`**  | Removes specific types         | `Exclude<Status, Allowed>`      |
| **`NonNullable<T>`** | Removes `null` & `undefined`   | `NonNullable<Name>`             |
| **`ReturnType<T>`**  | Gets function return type      | `ReturnType<typeof getAge>`     |
| **`Parameters<T>`**  | Gets function parameter types  | `Parameters<typeof logMessage>` |

---

# **10. TypeScript with React**

- Typing Props & State
- Functional & Class Components
- React Hooks with TypeScript
- Context API with TypeScript
- Custom Hooks with TypeScript

---

Using TypeScript in React improves type safety and developer experience. Let’s explore **typing props, state, components, hooks, and Context API**.

---

## **1. Typing Props & State**

### **Typing Props**

Props can be typed using **interfaces** or **type aliases**.

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

🔹 `React.FC<ButtonProps>` ensures props are correctly typed.

---

### **Typing State**

State is typed using `useState<T>()`.

```tsx
const [count, setCount] = useState<number>(0);

setCount(5); // ✅ Valid
setCount("Hello"); // ❌ Error: Type 'string' is not assignable to type 'number'
```

For complex state:

```tsx
type User = { id: number; name: string };
const [user, setUser] = useState<User | null>(null);
```

---

## **2. Functional & Class Components**

### **Functional Components (Preferred)**

```tsx
type CardProps = {
  title: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
```

---

### **Class Components (Rarely Used)**

```tsx
type CounterState = { count: number };

class Counter extends React.Component<{}, CounterState> {
  state: CounterState = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
```

🔹 Class components use **generic types**: `<Props, State>`.

---

## **3. React Hooks with TypeScript**

### **Typing `useState`**

```tsx
const [isDarkMode, setDarkMode] = useState<boolean>(false);
```

### **Typing `useEffect`**

```tsx
useEffect(() => {
  console.log("Component mounted");
}, []); // ✅ No dependencies
```

### **Typing `useRef`**

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (inputRef.current) inputRef.current.focus();
}, []);
```

---

## **4. Context API with TypeScript**

### **Creating a Context**

```tsx
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

---

### **Providing Context**

```tsx
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

### **Consuming Context**

```tsx
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```

```tsx
const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
};
```

---

## **5. Custom Hooks with TypeScript**

### **Example: `useLocalStorage` Hook**

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}

// Usage
const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
```

🔹 **Generics (`<T>`)** allow reusability for any data type.

---

## **Summary**

| Concept                   | Example                                              |
| ------------------------- | ---------------------------------------------------- | ----------------------- |
| **Typing Props**          | `type ButtonProps = { label: string }`               |
| **Typing State**          | `const [count, setCount] = useState<number>(0);`     |
| **Functional Components** | `const Card: React.FC<Props>`                        |
| **Class Components**      | `class Counter extends React.Component<{}, State>`   |
| **Typing Hooks**          | `const inputRef = useRef<HTMLInputElement>(null);`   |
| **Context API**           | `const ThemeContext = createContext<Type             | undefined>(undefined);` |
| **Custom Hooks**          | `function useLocalStorage<T>(key: string, value: T)` |

---

# **11. TypeScript with Node.js**

- Typing Express.js
- Using TypeScript with `fs`, `path`, `http`
- Configuring `tsconfig.json` for Node.js

---

Incorporating TypeScript in **Node.js** applications improves type safety, better autocompletion, and cleaner code. Here’s how to set up **Express.js** with TypeScript, and configure the `tsconfig.json` file for Node.js environments.

---

## **1. Typing Express.js**

Express.js can be typed with the `@types/express` package, which provides type definitions for Express.

### **Setting Up Express with TypeScript**

1. **Install dependencies**:

   ```bash
   npm install express
   npm install --save-dev typescript @types/node @types/express
   ```

2. **Create a basic Express app (`app.ts`)**:

   ```ts
   import express, { Request, Response } from "express";

   const app = express();
   const port = 3000;

   app.get("/", (req: Request, res: Response) => {
     res.send("Hello, TypeScript with Express!");
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

---

## **2. Using TypeScript with `fs`, `path`, and `http`**

TypeScript integrates easily with Node.js's core modules, such as `fs`, `path`, and `http`, using the `@types/node` package for type definitions.

### **Using `fs` Module (File System)**

```ts
import fs from "fs";

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### **Using `path` Module**

```ts
import path from "path";

const filePath = path.join(__dirname, "example.txt");
console.log(filePath);
```

### **Using `http` Module**

```ts
import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

**Note**: The `@types/node` package provides type definitions for these core modules, so you don’t need to install separate types for `fs`, `path`, and `http`.

---

## **3. Configuring `tsconfig.json` for Node.js**

The `tsconfig.json` file configures how TypeScript compiles your code. For Node.js applications, here’s an example configuration.

### **Basic `tsconfig.json` Setup for Node.js**

```json
{
  "compilerOptions": {
    "target": "ES2020", // Specifies the ECMAScript target version.
    "module": "CommonJS", // CommonJS is the module system used by Node.js.
    "moduleResolution": "node", // Use Node.js module resolution.
    "esModuleInterop": true, // Ensures compatibility with CommonJS imports.
    "strict": true, // Enable strict type checking.
    "skipLibCheck": true, // Skip type checking of declaration files.
    "forceConsistentCasingInFileNames": true, // Ensure file names are case-consistent.
    "outDir": "./dist", // Directory for compiled JavaScript files.
    "rootDir": "./src", // Directory for TypeScript source files.
    "resolveJsonModule": true, // Allows importing of JSON files.
    "types": ["node"] // Include Node.js types for core modules.
  },
  "include": ["src/**/*"], // Include all files in the src folder.
  "exclude": ["node_modules"] // Exclude node_modules folder.
}
```

### **Explanation of Key Options**:

- **`target`**: Specifies which version of ECMAScript you want to target. `ES2020` is commonly used for Node.js applications.
- **`module`**: `CommonJS` is the most compatible module system for Node.js.
- **`esModuleInterop`**: Ensures compatibility between ES Modules and CommonJS.
- **`strict`**: Enables strict type checking.
- **`skipLibCheck`**: Skips type checking of third-party type declaration files (`.d.ts`).
- **`resolveJsonModule`**: Allows importing `.json` files as modules (useful if you need to load configuration files).
- **`types`**: Specifies type definition files, such as `node` for core Node.js modules.

---

## **4. Running the TypeScript Node.js Application**

Once you’ve set up your `tsconfig.json` and written your code, you can **compile** and **run** your TypeScript Node.js app.

1. **Compile TypeScript**:

   ```bash
   npx tsc
   ```

2. **Run the generated JavaScript (`dist/app.js`)**:
   ```bash
   node dist/app.js
   ```

Alternatively, you can use **`ts-node`** to directly run TypeScript without needing to compile it first.

1. **Install `ts-node`**:

   ```bash
   npm install --save-dev ts-node
   ```

2. **Run the TypeScript file**:
   ```bash
   npx ts-node src/app.ts
   ```

---

## **Summary of Key Points**

- **Typing Express**: Use `@types/express` for type definitions and type props and request handlers for Express routes.
- **Core Modules**: Use `@types/node` to type modules like `fs`, `path`, and `http`.
- **`tsconfig.json` for Node.js**: Configure TypeScript for Node.js apps, specifying modules, target, and type definitions.

---

# **12. TypeScript with Third-Party Libraries**

- Installing Type Definitions (`@types/*`)
- Handling Libraries without Type Definitions

---

TypeScript provides type safety, but to fully integrate with external libraries, you often need type definitions. Let’s go over **installing type definitions** for libraries and how to **handle libraries without type definitions**.

---

## **1. Installing Type Definitions (`@types/*`)**

Many popular libraries have **TypeScript type definitions** available under the `@types` namespace. These definitions can be installed from **DefinitelyTyped**, which is a repository of TypeScript type definitions.

### **How to Install Type Definitions**:

1. **Install type definitions for libraries**:

   ```bash
   npm install --save-dev @types/<library-name>
   ```

   For example:

   - To install type definitions for **Express.js**:
     ```bash
     npm install --save-dev @types/express
     ```
   - To install type definitions for **Node.js**:
     ```bash
     npm install --save-dev @types/node
     ```

2. **Using the library with type definitions**:
   After installing the type definitions, TypeScript automatically picks them up. You can use the library in your code with full type support.

   ```ts
   import express, { Request, Response } from "express";

   const app = express();
   app.get("/", (req: Request, res: Response) => {
     res.send("Hello, TypeScript with Express!");
   });
   ```

   In this example, `@types/express` provides types for Express’s `Request`, `Response`, and other core features.

---

## **2. Handling Libraries Without Type Definitions**

Some libraries may not have type definitions available in the `@types` scope. In such cases, there are several ways to handle the situation.

### **Option 1: Use `any` Type (Quick & Dirty)**

If you’re in a hurry or just need to bypass type checking for a specific library, you can use the `any` type. However, this sacrifices the benefits of TypeScript’s type safety.

```ts
// If there's no type definition available
import someLibrary from "some-library";

// Using `any` to bypass type checking
const library: any = someLibrary;
```

### **Option 2: Create a Declaration File (`*.d.ts`)**

You can create your own type declaration file (`*.d.ts`) to provide basic type information for a library.

1. **Create a custom type definition file** in your `src` or `types` folder:

   ```ts
   // src/types/some-library.d.ts
   declare module "some-library" {
     export function someFunction(arg: string): void;
   }
   ```

2. **Usage in your code**:

   ```ts
   import { someFunction } from "some-library";

   someFunction("test"); // Now TypeScript knows the signature
   ```

### **Option 3: Use `declare module` for Unknown Modules**

If you're using a third-party module that doesn’t have type definitions, but you know the module structure, you can use `declare module` in a `.d.ts` file to define it.

```ts
// src/types/unknown-library.d.ts
declare module "unknown-library" {
  export function someMethod(arg: string): string;
}
```

This will tell TypeScript about the module's existence and provide the necessary types to use it, even if the library is not part of `@types`.

### **Option 4: Contribute to DefinitelyTyped**

If you create or find good type definitions for a library without types, you can contribute them back to the **DefinitelyTyped** repository.

1. Fork the **DefinitelyTyped** repository on GitHub.
2. Add your types in a new file within the `types` folder.
3. Submit a **pull request** to share the types with others.

### **Option 5: Use JavaScript with JSDoc**

If the library does not have TypeScript definitions, but you still want to use some type annotations, you can write JSDoc comments in your JavaScript code. TypeScript can infer types from JSDoc comments.

```js
// @ts-check
/**
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  return `Hello, ${name}`;
}
```

You can also use JSDoc in TypeScript files if you need to document complex types.

---

## **3. Example Workflow for Working with Libraries Without Type Definitions**

### **Step-by-Step Example:**

Let’s say you’re using a library called `some-library`, and there are no type definitions available for it.

1. **Install the library**:

   ```bash
   npm install some-library
   ```

2. **Create a Declaration File**:
   Create a `some-library.d.ts` file to declare the module and provide basic typings.

   ```ts
   // src/types/some-library.d.ts
   declare module "some-library" {
     export function someFunction(arg: string): string;
   }
   ```

3. **Use the Library**:
   Now you can import and use `some-library` with TypeScript knowing that basic typings are available.

   ```ts
   import { someFunction } from "some-library";

   const result = someFunction("Hello TypeScript");
   console.log(result); // TypeScript knows about `someFunction` signature.
   ```

---

## **Summary of Key Points**

| Task                                            | Action                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Installing Type Definitions**                 | `npm install --save-dev @types/<library-name>`                                     |
| **Handling Libraries without Type Definitions** | Use `any`, create custom `.d.ts` files, or use `declare module`                    |
| **Creating a Declaration File**                 | Create `*.d.ts` files to define module types                                       |
| **Contributing to `DefinitelyTyped`**           | Fork, add types, and submit a pull request to DefinitelyTyped                      |
| **Using JSDoc for Type Inference**              | Use `@ts-check` and JSDoc comments to provide type information in JavaScript files |

---

# **13. Compilation & Build Tools**

- Configuring `tsconfig.json`
- Using `tsc` Compiler
- TypeScript with Babel
- Webpack & TypeScript
- Using `ts-node` for Execution

---

Here’s an overview of the essential configurations and tools you need to work effectively with **TypeScript** in a modern development environment.

---

## **1. Configuring `tsconfig.json`**

The `tsconfig.json` file is the central configuration file for a TypeScript project. It controls how TypeScript compiles your code.

### **Basic `tsconfig.json` Configuration**:

Here’s a sample configuration for general TypeScript use with Node.js or a client-side project:

```json
{
  "compilerOptions": {
    "target": "ES6", // Set ECMAScript target version
    "module": "CommonJS", // Use CommonJS module system (for Node.js)
    "moduleResolution": "node", // Use Node.js module resolution
    "strict": true, // Enable strict type checking
    "esModuleInterop": true, // Ensures compatibility between ES and CommonJS modules
    "skipLibCheck": true, // Skip checking types in declaration files
    "forceConsistentCasingInFileNames": true, // Ensure case consistency in filenames
    "outDir": "./dist", // Output directory for compiled JavaScript files
    "rootDir": "./src", // Root directory of TypeScript source files
    "resolveJsonModule": true, // Allows importing JSON files as modules
    "types": ["node"] // Include Node.js type definitions for core modules
  },
  "include": ["src/**/*"], // Include all files in the `src` directory
  "exclude": ["node_modules"] // Exclude the `node_modules` folder
}
```

### **Key Options Explained**:

- **`target`**: The JavaScript version that TypeScript will compile to (e.g., `ES6`, `ES5`).
- **`module`**: Defines the module system. For Node.js, use `CommonJS`. For browsers, you might use `ESNext` or `ES6`.
- **`esModuleInterop`**: Ensures you can use CommonJS modules alongside ES Modules without issues.
- **`outDir`**: The directory where the compiled JavaScript files will be saved.
- **`rootDir`**: The root directory where TypeScript files are located.

---

## **2. Using `tsc` Compiler**

The `tsc` (TypeScript Compiler) is used to compile TypeScript files into JavaScript.

### **Running the Compiler**:

1. **Compile the project**:
   Run `tsc` from the command line in your project directory (ensure you have a `tsconfig.json` file).

   ```bash
   npx tsc
   ```

   This will compile all `.ts` files in your `src/` directory according to your `tsconfig.json` settings and output the compiled `.js` files to the `dist/` folder.

2. **Compile a single file**:
   You can also compile a specific file directly:

   ```bash
   npx tsc src/app.ts --outDir dist
   ```

---

## **3. TypeScript with Babel**

If you want to use **Babel** to transpile TypeScript, this is commonly used in frontend development, especially when you need to use modern JavaScript features (like JSX) or support browser compatibility.

### **Steps to Set Up TypeScript with Babel**:

1. **Install Dependencies**:
   You'll need to install `@babel/preset-typescript`, `babel-loader`, and related Babel packages.

   ```bash
   npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript babel-loader
   ```

2. **Configure Babel (`babel.config.js`)**:
   Set up your Babel configuration to support TypeScript.

   ```js
   module.exports = {
     presets: [
       "@babel/preset-env", // For modern JavaScript features
       "@babel/preset-typescript", // For TypeScript
     ],
   };
   ```

3. **Configure Webpack** (if using Webpack):
   Ensure Webpack uses `babel-loader` for `.ts` and `.tsx` files.

   ```js
   module.exports = {
     module: {
       rules: [
         {
           test: /\.tsx?$/, // Match TypeScript files
           use: "babel-loader", // Use Babel loader
           exclude: /node_modules/,
         },
       ],
     },
   };
   ```

4. **Using Babel**:
   Run `webpack` to transpile the TypeScript code using Babel instead of `tsc`.

   ```bash
   npx webpack --config webpack.config.js
   ```

---

## **4. Webpack & TypeScript**

Webpack is a popular tool to bundle TypeScript files, especially for frontend projects. It’s great for handling code splitting, asset management, and integrating with Babel.

### **Steps to Set Up Webpack with TypeScript**:

1. **Install Webpack and Loaders**:

   ```bash
   npm install --save-dev webpack webpack-cli ts-loader
   ```

2. **Configure Webpack** (`webpack.config.js`):
   Use `ts-loader` to handle TypeScript files.

   ```js
   const path = require("path");

   module.exports = {
     entry: "./src/index.ts", // Entry point for your app
     output: {
       filename: "bundle.js", // Output bundle file
       path: path.resolve(__dirname, "dist"), // Output directory
     },
     resolve: {
       extensions: [".ts", ".js"], // Resolve .ts and .js files
     },
     module: {
       rules: [
         {
           test: /\.tsx?$/, // Match .ts and .tsx files
           use: "ts-loader", // Use ts-loader to transpile TypeScript
           exclude: /node_modules/, // Exclude node_modules folder
         },
       ],
     },
   };
   ```

3. **Run Webpack**:
   Build your project using Webpack:

   ```bash
   npx webpack --config webpack.config.js
   ```

   This will compile TypeScript files and bundle them into the `dist/` folder.

---

## **5. Using `ts-node` for Execution**

`ts-node` is a tool to directly execute TypeScript files without needing to compile them first. It's particularly useful in development environments and during testing.

### **Install `ts-node`**:

1. **Install `ts-node`**:

   ```bash
   npm install --save-dev ts-node typescript
   ```

2. **Execute TypeScript Files with `ts-node`**:
   Once `ts-node` is installed, you can run TypeScript files directly.

   ```bash
   npx ts-node src/app.ts
   ```

3. **Run with TypeScript Configuration**:
   `ts-node` will use your `tsconfig.json` file automatically, so you don't need to provide additional configurations.

---

## **Summary of Key Tools and Configuration**

| Tool/Process                    | Description                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`tsconfig.json`**             | Configuration file for TypeScript compiler settings, such as target version, module system, and directories.  |
| **`tsc` (TypeScript Compiler)** | Transpiles TypeScript files into JavaScript based on the `tsconfig.json` settings.                            |
| **TypeScript with Babel**       | Use Babel for transpiling TypeScript with modern JavaScript features and JSX.                                 |
| **Webpack with TypeScript**     | Use Webpack with `ts-loader` or Babel for bundling TypeScript files in frontend applications.                 |
| **`ts-node`**                   | Directly execute TypeScript files without compiling to JavaScript first. Great for development and debugging. |

---

# **14. Testing with TypeScript**

- Using Jest with TypeScript
- Typing Tests
- Mocking in TypeScript

---

### Jest is a popular testing framework that works seamlessly with TypeScript. This section will guide you through setting up Jest for TypeScript, typing your tests, and mocking in TypeScript.

---

## **1. Setting Up Jest with TypeScript**

### **Step 1: Install Dependencies**

To use Jest with TypeScript, you'll need to install the necessary packages:

- `jest` for the testing framework
- `ts-jest` for TypeScript support in Jest
- `@types/jest` for type definitions

Run the following command to install them:

```bash
npm install --save-dev jest ts-jest @types/jest typescript
```

### **Step 2: Configure Jest**

Create a `jest.config.js` file to configure Jest to use `ts-jest` for TypeScript files.

```js
module.exports = {
  preset: "ts-jest", // Use ts-jest preset for TypeScript support
  testEnvironment: "node", // Set test environment to node (use 'jsdom' for browser-like tests)
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform .ts files with ts-jest
  },
  moduleFileExtensions: ["ts", "js"], // Jest should understand .ts and .js file extensions
};
```

### **Step 3: Add a Test Script**

Add a test script to your `package.json` to run Jest.

```json
"scripts": {
  "test": "jest"
}
```

### **Step 4: Create a Test File**

Create a test file (e.g., `sum.test.ts`) to write your tests.

```ts
// sum.ts (module to test)
export const sum = (a: number, b: number): number => {
  return a + b;
};
```

Now, write a test case for the `sum` function:

```ts
// sum.test.ts
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

### **Step 5: Run the Tests**

Run the tests using the following command:

```bash
npm test
```

This will run Jest, which will compile the TypeScript files and execute the tests.

---

## **2. Typing Tests in Jest**

Jest integrates well with TypeScript, and you can type your test files just like any other TypeScript code. You can specify types for the test variables, mocks, and assertions.

### **Typing a Simple Test**

Jest automatically understands TypeScript types through `@types/jest`, so you can type your tests:

```ts
// add.test.ts
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  const result: number = sum(1, 2);
  expect(result).toBe(3);
});
```

### **Typing Jest Mocks**

If you are using mocks, you can also type them for better type safety.

```ts
// userService.ts
export const getUser = async (id: string) => {
  // Imagine a call to a database
  return { id, name: "Alice" };
};
```

```ts
// userService.test.ts
import { getUser } from "./userService";

// Create a mock function for the `getUser` function
jest.mock("./userService");
const mockedGetUser = getUser as jest.Mock;

test("fetches user", async () => {
  // Type the mock return value
  mockedGetUser.mockResolvedValue({ id: "1", name: "Bob" });

  const user = await getUser("1");
  expect(user.name).toBe("Bob");
});
```

### **Mocking with TypeScript**

When mocking functions, Jest’s type inference works with TypeScript, but it’s also useful to explicitly type the mocks.

```ts
// mockExample.ts
export const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
```

```ts
// mockExample.test.ts
import { fetchData } from "./mockExample";

jest.mock("./mockExample");
const mockFetchData = fetchData as jest.Mock;

test("fetches data correctly", async () => {
  mockFetchData.mockResolvedValue("mocked data");
  const result = await fetchData("http://example.com");
  expect(result).toBe("mocked data");
});
```

In the above example, `fetchData` is mocked, and its return type is explicitly typed to ensure type safety.

---

## **3. Mocking in TypeScript**

Mocking in Jest is useful when testing functions that interact with external systems (e.g., API calls, database queries). TypeScript helps you ensure that your mocks conform to the correct types.

### **Basic Mocking Example**

Let's say we have a module that fetches data from a remote server:

```ts
// dataService.ts
export const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
```

Now, we want to mock `fetchData` in our test:

```ts
// dataService.test.ts
import { fetchData } from "./dataService";

// Mock the entire fetchData module
jest.mock("./dataService");

// Create a mock function for fetchData
const mockedFetchData = fetchData as jest.Mock;

test("fetches mocked data", async () => {
  // Type the mock return value
  mockedFetchData.mockResolvedValue("mocked data");

  const result = await fetchData("http://mock.com");
  expect(result).toBe("mocked data");
});
```

In this example:

- **`mockResolvedValue`** is used to specify what the mocked function returns.
- The mock function is typed using `as jest.Mock`, and TypeScript helps ensure the mock’s return type is consistent with the original function.

### **Mocking Modules and Class Instances**

You can also mock entire modules or specific class methods. For instance:

```ts
// dbService.ts
export class Database {
  public getData(id: string): string {
    return "real data from DB";
  }
}
```

Now, mock the `Database` class:

```ts
// dbService.test.ts
import { Database } from "./dbService";

// Mock the entire Database class
jest.mock("./dbService");

// Create a mock instance of Database
const mockDatabase = new Database() as jest.Mocked<Database>;

test("gets mocked data", () => {
  // Mock the getData method
  mockDatabase.getData.mockReturnValue("mocked data");

  const result = mockDatabase.getData("123");
  expect(result).toBe("mocked data");
});
```

In this example:

- **`jest.Mocked<T>`** is used to type the mock instance of the `Database` class.
- You can mock methods on the class instance (`getData` in this case).

---

## **4. Summary**

| Task                            | Action                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| **Set Up Jest with TypeScript** | Install `jest`, `ts-jest`, `@types/jest` and configure `jest.config.js`                       |
| **Typing Tests**                | Use TypeScript types in your test files to improve type safety and development experience.    |
| **Mocking Functions**           | Use `jest.Mock` and `jest.Mocked` to type mock functions and class instances for type safety. |
| **Mocking Modules**             | Use `jest.mock()` to mock entire modules or specific functions and type them with TypeScript. |
| **Mocking with Return Types**   | Type mock return values (`mockResolvedValue`, `mockReturnValue`) to ensure type consistency.  |

---

# **15. Performance Optimization & Best Practices**

- Avoiding `any`
- Using Type Inference Smartly
- Avoiding Excessive Type Assertions
- Structuring TypeScript Projects

---

## **Best Practices for Writing TypeScript Code**

When writing TypeScript, it's important to follow best practices that improve the quality and maintainability of your code. This includes avoiding certain pitfalls like using `any`, leveraging Type Inference effectively, and structuring your TypeScript projects for better scalability.

---

## **1. Avoiding `any`**

The `any` type in TypeScript is a "type escape hatch," which allows you to bypass the type-checking system. While it can be useful in some situations, overusing it defeats the purpose of using TypeScript for static type checking. Instead, try to be more specific about the types in your code.

### **Why Avoid `any`?**

- It turns off TypeScript’s type-checking for that variable or function.
- It can lead to runtime errors due to lack of type safety.
- It makes your code harder to maintain and refactor.

### **Alternatives to `any`**

1. **Use `unknown` Instead of `any`**:
   `unknown` is safer than `any` because you must perform some type of checking before you can use it.

   ```ts
   function processInput(input: unknown) {
     if (typeof input === "string") {
       console.log(input.length); // Safe: input is a string now
     }
   }
   ```

2. **Use Specific Types**:
   If you can determine the specific type, avoid using `any`. For example, use `number`, `string`, `boolean`, or even more complex types like `Record<string, number>`.

   ```ts
   // Avoid:
   let value: any = 42;

   // Better:
   let value: number = 42;
   ```

3. **Use `never` for Impossible Values**:
   If a function should never return anything (e.g., it throws an error or causes an infinite loop), use `never`.

   ```ts
   function throwError(message: string): never {
     throw new Error(message);
   }
   ```

4. **Use Type Guards**:
   Instead of casting types or using `any`, you can create more specific type guards.

   ```ts
   function isString(value: unknown): value is string {
     return typeof value === "string";
   }

   function processInput(value: unknown) {
     if (isString(value)) {
       console.log(value.length); // Safe: value is now a string
     }
   }
   ```

---

## **2. Using Type Inference Smartly**

TypeScript has a powerful type inference system that can automatically determine the type of variables, function return values, and more. However, it's important to balance inference with explicit typing when needed.

### **When to Rely on Type Inference**:

TypeScript’s type inference is usually smart enough to deduce types, which leads to cleaner code.

```ts
let count = 10; // TypeScript infers the type as 'number'
const isActive = true; // TypeScript infers the type as 'boolean'
```

### **Avoid Over-specifying Types**:

If TypeScript can infer a type, let it do its job. Avoid specifying the type unnecessarily.

```ts
// Inferred types are usually sufficient
const total = calculateTotal(100, 5); // TypeScript infers the return type
```

### **When to Explicitly Define Types**:

There are situations where you might want to explicitly define types, even if TypeScript can infer them.

1. **Complex Function Signatures**: Explicitly declare types for function parameters and return values if they are complex, to improve readability and prevent mistakes.

   ```ts
   function add(a: number, b: number): number {
     return a + b;
   }
   ```

2. **Generics**: For functions or classes using generics, provide explicit types when necessary to avoid ambiguity.

   ```ts
   function wrap<T>(value: T): T {
     return value;
   }
   ```

3. **Avoiding Ambiguity**:
   Sometimes TypeScript might infer a type incorrectly, or the inference is unclear. In those cases, providing an explicit type is helpful.

   ```ts
   let data: string | number = "hello";
   data = 42; // Avoid ambiguity with union types
   ```

---

## **3. Avoiding Excessive Type Assertions**

Type assertions allow you to override TypeScript's type system and force it to treat a value as a certain type. However, overusing them can lead to unexpected behavior and runtime errors.

### **What Are Type Assertions?**

Type assertions tell TypeScript to treat a value as a certain type, bypassing the usual checks.

```ts
let input = "42" as unknown as number;
```

### **Risks of Type Assertions**:

- You lose the benefit of TypeScript’s type checking, which can lead to errors that are hard to catch during development.
- Excessive assertions can make your codebase harder to maintain and refactor.

### **When to Use Type Assertions**:

- **When you're confident about the type** but TypeScript can’t infer it correctly, such as when working with DOM elements.

  ```ts
  const element = document.getElementById("my-element") as HTMLDivElement;
  ```

- **When interacting with third-party libraries** that don’t provide type definitions.

  ```ts
  const someLib = require("someLib") as SomeLibraryType;
  ```

### **Better Alternatives to Type Assertions**:

Instead of using assertions, use proper type guards or correct typing for better safety.

1. **Type Guards**:
   Use type guards (e.g., `typeof`, `instanceof`) to narrow down types safely.

   ```ts
   function isString(value: unknown): value is string {
     return typeof value === "string";
   }

   if (isString(input)) {
     console.log(input.length); // TypeScript knows `input` is a string here
   }
   ```

2. **Optional Chaining**:
   In situations where you might access nested properties, consider using optional chaining (`?.`) instead of assertions to avoid runtime errors.

   ```ts
   const user = { name: "Alice" };
   const nameLength = user?.name?.length; // Safely handle undefined
   ```

---

## **4. Structuring TypeScript Projects**

A well-structured TypeScript project is easier to maintain and scale. Proper project organization can improve collaboration, make the codebase more navigable, and help enforce best practices.

### **Basic Structure of a TypeScript Project**:

A typical TypeScript project might look like this:

```
/my-ts-project
├── /src                # Source code
│   ├── /components     # UI components or modules
│   ├── /services       # Business logic
│   ├── /utils          # Utility functions
│   ├── index.ts        # Entry point
├── /tests              # Test files (unit, integration)
├── /dist               # Compiled JavaScript files (output folder)
├── tsconfig.json       # TypeScript configuration file
├── package.json        # NPM package configuration
└── jest.config.js      # Jest configuration file
```

### **Organizing Code with Modules**:

- **Modules** help split the code into smaller, reusable pieces.
- Group related functions, classes, and types into appropriate directories, such as `services`, `components`, `utils`, etc.

  Example:

  ```ts
  // utils/format.ts
  export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
  ```

### **Using `types` Directory for Custom Types**:

Store custom types and interfaces in a `types/` folder, separate from regular code.

```
/types
  └── user.ts
```

### **Using `index.ts` for Public API**:

The `index.ts` file serves as the public API for your module, exporting the key functionalities.

```ts
// index.ts
export * from "./services";
export * from "./utils";
```

### **`tsconfig.json` Best Practices**:

- **Use `strict` mode**: This enables all strict type-checking options, which is beneficial in a large codebase.

  ```json
  "compilerOptions": {
    "strict": true
  }
  ```

- **Use `baseUrl` and `paths` for Module Resolution**:
  This can help make your imports cleaner.

  ```json
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@services/*": ["services/*"]
    }
  }
  ```

  Now, you can import modules like:

  ```ts
  import { myService } from "@services/myService";
  ```

---

## **Summary**

| Practice                               | Description                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Avoiding `any`**                     | Use specific types or `unknown` instead of `any` to maintain type safety.                              |
| **Using Type Inference Smartly**       | Let TypeScript infer types where it can, but explicitly type when necessary for clarity or complexity. |
| **Avoiding Excessive Type Assertions** | Use type assertions sparingly. Prefer type guards and proper typing for safer code.                    |
| **Structuring TypeScript Projects**    | Organize your project by separating concerns, using modules, and maintaining a clear folder structure. |

---
