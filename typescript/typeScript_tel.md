If your goal is to become job-ready with TypeScript (especially for React, Node.js, Angular, or full-stack development), follow this roadmap:

# 🚀 TypeScript Roadmap

## 1. JavaScript Fundamentals

Before TypeScript, make sure you're comfortable with:

- Variables (`let`, `const`)
- Functions
- Arrays & Objects
- Loops
- ES6 features
  - Arrow functions
  - Destructuring
  - Spread/rest operators
  - Modules
  - Promises
  - Async/Await

---

## [2. TypeScript Basics](#2-typescript-basics-1)

Learn:

- Installing TypeScript
- `tsconfig.json`
- Basic types
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `any`
  - `unknown`
  - `never`
  - `void`

Example:

```ts
let name: string = "John";
let age: number = 25;
let isAdmin: boolean = false;
```

---

## [3. Functions](#3-functions-1)

Learn:

- Parameter types
- Return types
- Optional parameters
- Default parameters
- Rest parameters

Example:

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

---

## [4. Objects & Arrays](#4-objects--arrays-1)

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 24,
};
```

Arrays

```ts
let numbers: number[] = [1, 2, 3];
```

---

## [5. Interfaces ⭐](#5-interfaces--1)

One of the most important concepts.

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John",
};
```

Learn:

- Optional properties
- Readonly properties
- Extending interfaces

---

## [6. Type Aliases](#6-type-aliases-1)

```ts
type User = {
  id: number;
  name: string;
};
```

Learn:

- Union types

```ts
type Status = "success" | "error";
```

- Intersection types

```ts
type Admin = User & {
  role: string;
};
```

---

## [7. Enums](#7-enums-1)

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

Know when to prefer string literal unions instead of enums.

---

## [8. Generics ⭐⭐⭐](#8-generics--1)

Most interview questions include generics.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Learn:

- Generic interfaces
- Generic classes
- Constraints

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

## [9. Classes](#9-classes-1)

Learn:

- Constructors
- Access modifiers
- Inheritance
- Abstract classes
- Static members

```ts
class Person {
  constructor(public name: string) {}
}
```

---

## [10. Advanced Types](#10-advanced-types-1)

Learn:

- `keyof`
- `typeof`
- `in`
- `extends`
- Conditional types
- Mapped types
- Indexed access types

Example:

```ts
type User = {
  name: string;
  age: number;
};

type Keys = keyof User;
```

---

## [11. Utility Types ⭐⭐⭐](#11-utility-types--1)

Master these:

- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- `Exclude<T, U>`
- `Extract<T, U>`
- `ReturnType<T>`

Example:

```ts
interface User {
  name: string;
  age: number;
}

type UserUpdate = Partial<User>;
```

---

## [12. Modules](#12-modules-1)

Learn:

```ts
export
import
default export
named export
```

---

## [13. Error Handling](#13-error-handling-1)

```ts
try {
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

---

## [14. Type Narrowing](#14-type-narrowing-1)

Learn:

- `typeof`
- `instanceof`
- `in`
- User-defined type guards

Example:

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

---

# [Interview Topics](#interview-topics-1)

Be comfortable explaining:

- Difference between `type` and `interface`
- `any` vs `unknown`
- `never` vs `void`
- Generics
- Utility types
- Type inference
- Type narrowing
- Enums vs string unions
- Declaration merging
- Modules
- Strict mode

---

# 2. TypeScript Basics

TypeScript నేర్చుకోవడంలో మొదటి అడుగుగా **TypeScript Basics** గురించి వివరంగా తెలుసుకుందాం.

---

### 1. Installing TypeScript (ఇన్‌స్టాలేషన్)

TypeScript ని మీ కంప్యూటర్‌లో ఇన్‌స్టాల్ చేయడానికి **Node.js** అవసరం. ఒకసారి Node.js ఇన్‌స్టాల్ చేశాక, టెర్మినల్ (Terminal/CMD) ఓపెన్ చేసి ఈ కమాండ్ ఇవ్వండి:

```bash
npm install -g typescript

```

ఇది మీ సిస్టమ్‌లో TypeScript కంపైలర్‌ను ఇన్‌స్టాల్ చేస్తుంది. మీ వెర్షన్‌ను చెక్ చేయడానికి `tsc -v` అని టైప్ చేయండి.

---

### 2. tsconfig.json

`tsconfig.json` అనేది TypeScript ప్రాజెక్ట్ యొక్క సెట్టింగ్స్ ఫైల్. మీ ప్రాజెక్ట్‌ను ఎలా కంపైల్ చేయాలో ఇది చెబుతుంది.

- ప్రాజెక్ట్ ఫోల్డర్‌లో `tsc --init` అని టైప్ చేస్తే ఈ ఫైల్ తయారవుతుంది.
- ఇందులో `target` (ఏ జావాస్క్రిప్ట్ వెర్షన్‌లోకి మారాలి), `strict` (టైప్ చెకింగ్ కఠినంగా ఉండాలా వద్దా) వంటివి సెట్ చేయవచ్చు.

---

### 3. Basic Types (ప్రాథమిక రకాలు)

TypeScript లో మనం డేటా రకాన్ని (Type) ముందుగానే నిర్ణయించవచ్చు. దీనినే **Static Typing** అంటారు.

| Type          | వివరణ                                        | ఉదాహరణ                          |
| ------------- | -------------------------------------------- | ------------------------------- |
| **string**    | అక్షరాలు/వాక్యాలు                            | `let name: string = "Telugu";`  |
| **number**    | సంఖ్యలు (Integers/Floats)                    | `let age: number = 25;`         |
| **boolean**   | True లేదా False                              | `let isActive: boolean = true;` |
| **null**      | ఒక వేరియబుల్ వాల్యూ ఖాళీగా ఉందని చెప్పడానికి | `let empty: null = null;`       |
| **undefined** | వేరియబుల్ డిక్లేర్ అయింది కానీ వాల్యూ లేదు   | `let u: undefined = undefined;` |

---

### 4. Advanced Types (మరికొన్ని ముఖ్యమైన రకాలు)

- **any:** ఇది ఏ డేటా రకాన్నైనా అంగీకరిస్తుంది. TypeScript యొక్క మెయిన్ ఉద్దేశ్యం "Type safety", కానీ `any` వాడితే ఆ సేఫ్టీ పోతుంది. అందుకే దీన్ని వాడటం తగ్గించాలి.
- `let data: any = "Hello";` (తర్వాత దీన్ని నంబర్‌లా కూడా మార్చొచ్చు).

- **unknown:** ఇది `any` లాంటిదే, కానీ కొంచెం సురక్షితమైనది. దీని వాల్యూను వాడే ముందు, అది ఏ రకానికి చెందినదో మనం సరిచూసుకోవాలి (Type checking).
- **void:** ఇది సాధారణంగా ఫంక్షన్లకు వాడతారు. ఫంక్షన్ ఏమీ రిటర్న్ చేయనప్పుడు (return value లేనప్పుడు) `void` అని రాస్తాం.
- `function show(): void { console.log("Hello"); }`

- **never:** ఇది ఎప్పటికీ పూర్తి కాని లేదా ఎప్పటికీ ఏ వాల్యూ ఇవ్వని ఫంక్షన్లకు వాడతారు (ఉదాహరణకు: ఎప్పుడూ లూప్ అయ్యే ఫంక్షన్లు లేదా ఎర్రర్ ఇచ్చే ఫంక్షన్లు).

---

> **చిన్న గమనిక:** TypeScript వాడటం వల్ల కోడ్ రాసేటప్పుడే ఎర్రర్స్ తెలిసిపోతాయి, దీనివల్ల డెవలప్మెంట్ చాలా వేగంగా, సురక్షితంగా ఉంటుంది.

## మీకు ఈ టాపిక్స్‌లో ఏదైనా ప్రత్యేకంగా డౌట్ ఉందా? లేక తర్వాతి టాపిక్స్‌కి వెళ్దామా?

# 3. Functions

TypeScript లో **Functions** ఎలా పనిచేస్తాయో చూద్దాం. JavaScript లో ఫంక్షన్లు రాస్తాము, కానీ TypeScript లో మనం ఆ ఫంక్షన్ ఏ రకమైన డేటాను (Data Type) పంపాలో, ఏది రిటర్న్ చేయాలో ముందే డిసైడ్ చేయవచ్చు.

---

### 1. Parameter Types & Return Types

ఫంక్షన్ పారామీటర్లకు మరియు ఫంక్షన్ చివరలో అది ఏం రిటర్న్ చేయాలో మనం టైప్ ఇవ్వాలి.

```typescript
// ఇక్కడ 'a' మరియు 'b' నంబర్లు కావాలి, ఫంక్షన్ ఒక నంబర్ ని రిటర్న్ చేస్తుంది.
function add(a: number, b: number): number {
  return a + b;
}

let sum = add(5, 10); // సరిగ్గా పనిచేస్తుంది
```

---

### 2. Optional Parameters

కొన్నిసార్లు ఒక పారామీటర్ పంపినా పంపకపోయినా పర్వాలేదు అనుకుంటే, పారామీటర్ పక్కన `?` గుర్తును వాడాలి.

```typescript
function greet(name: string, age?: number): void {
  console.log("Hello " + name);
  if (age) {
    console.log("Age is " + age);
  }
}

greet("Ravi"); // 'age' ఇవ్వకపోయినా ఎర్రర్ రాదు
```

---

### 3. Default Parameters

ఒకవేళ పారామీటర్ పంపకపోతే, డిఫాల్ట్‌గా ఒక వాల్యూ తీసుకోవాలి అనుకుంటే ఇలా రాయాలి:

```typescript
function setRole(role: string = "User"): void {
  console.log("Role is: " + role);
}

setRole(); // అవుట్‌పుట్: Role is: User
setRole("Admin"); // అవుట్‌పుట్: Role is: Admin
```

---

### 4. Rest Parameters

చాలా పారామీటర్లను ఒకేసారి array లాగా తీసుకోవడానికి `...` (rest operator) వాడతాము.

```typescript
// ఎన్ని నంబర్లు పంపినా వాటిని యాడ్ చేస్తుంది
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
```

---

### ముఖ్యమైన విషయాలు:

- **Parameter Types:** ఫంక్షన్ లోపలికి వచ్చే డేటా పద్ధతిని చెప్తుంది.
- **Return Types:** ఫంక్షన్ బయటకు పంపే డేటా రకాన్ని నిర్దేశిస్తుంది. ఏమీ రిటర్న్ చేయకపోతే `void` వాడాలి.
- **Optional (`?`):** ఇది పారామీటర్ లిస్టులో చివరన మాత్రమే ఉండాలి.
- **Rest Parameter:** ఇది ఎప్పుడూ పారామీటర్ లిస్టులో చివరిలోనే ఉండాలి.

---

# 4. Objects & Arrays

TypeScript లో **Objects** మరియు **Arrays** వాడటం వల్ల మన డేటా స్ట్రక్చర్ చాలా సురక్షితంగా ఉంటుంది. వీటిని ఎలా డిఫైన్ చేయాలో చూద్దాం.

---

### 1. Objects (ఆబ్జెక్ట్స్)

TypeScript లో ఒక ఆబ్జెక్ట్ లో ఏయే ప్రాపర్టీలు ఉండాలో మనం ముందే డిసైడ్ చేయవచ్చు.

```typescript
// ఆబ్జెక్ట్ టైప్ డిక్లేర్ చేయడం
let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Ravi",
  age: 25,
  isAdmin: true,
};

// మనం డిఫైన్ చేసిన ప్రాపర్టీలు మాత్రమే ఉండాలి, లేకపోతే ఎర్రర్ వస్తుంది.
```

**Optional Properties:** ఆబ్జెక్ట్‌లో ఏదైనా ప్రాపర్టీ ఉండొచ్చు లేదా ఉండకపోవచ్చు అనుకుంటే `?` వాడాలి.

```typescript
let product: { id: number; title: string; price?: number } = {
  id: 1,
  title: "Laptop",
  // price లేదు, కానీ ఎర్రర్ రాదు ఎందుకంటే అది optional
};
```

---

### 2. Arrays (అరేస్)

అరేలో ఉన్న ఎలిమెంట్స్ అన్నీ ఒకే టైప్ (Type) కి చెందినవిగా ఉండాలి.

**సింటాక్స్:** `type[]` లేదా `Array<type>`

```typescript
// Number array
let scores: number[] = [85, 90, 75];

// String array
let fruits: string[] = ["Apple", "Mango", "Banana"];

// Mixed array (అవసరం అనుకుంటే ఇలా వాడొచ్చు)
let data: (string | number)[] = ["Ravi", 25, "Hyderabad"];
```

---

### 3. Type Aliases (టైప్ అలియాసెస్)

ఒకే రకమైన ఆబ్జెక్ట్ స్ట్రక్చర్‌ను పదే పదే వాడాల్సి వస్తే, `type` కీవర్డ్ ఉపయోగించి ఒక కొత్త టైప్ పేరును క్రియేట్ చేసుకోవచ్చు. ఇది కోడ్‌ను చాలా నీట్‌గా ఉంచుతుంది.

```typescript
type User = {
  name: string;
  email: string;
  age: number;
};

let user1: User = { name: "Ravi", email: "ravi@test.com", age: 25 };
let user2: User = { name: "Sita", email: "sita@test.com", age: 22 };
```

---

### 4. Readonly Arrays (రీడ్-ఓన్లీ అరేస్)

అరేలోని వాల్యూస్ మారకూడదు (immutable) అనుకుంటే `readonly` కీవర్డ్ వాడవచ్చు.

```typescript
let numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // ఇది ఎర్రర్ ఇస్తుంది, ఎందుకంటే మనం మార్చలేము.
```

---

### ముఖ్యమైన పాయింట్స్:

- **Objects:** ప్రాపర్టీస్ ఏ టైప్ లో ఉండాలో ముందుగానే చెబితే, పొరపాట్లు జరగవు.
- **Arrays:** అరేలో ఉన్న డేటా అంతా ఒకే రకానికి చెందినదై ఉండాలి.
- **Type Aliases:** పెద్ద పెద్ద ఆబ్జెక్ట్ స్ట్రక్చర్స్ రాయకుండా, చిన్న పేరుతో వాటిని రీ-యూజ్ (Reuse) చేసుకోవచ్చు.

## ఇక్కడి వరకు మీకు ఏవైనా సందేహాలు ఉన్నాయా? లేక తర్వాతి టాపిక్స్ (Interfaces లేదా Tuples వంటివి) గురించి తెలుసుకుందామా?

# 5. Interfaces ⭐

TypeScript లో **Interfaces** అనేవి చాలా శక్తివంతమైనవి. మనం **Type Aliases** ఎలా వాడామో, Interfaces కూడా అలాగే ఆబ్జెక్ట్స్ యొక్క స్ట్రక్చర్ (shape) ని డిఫైన్ చేయడానికి వాడతాము. కానీ ఇవి Object Oriented Programming కి చాలా దగ్గరగా ఉంటాయి.

---

### 1. Interface అంటే ఏమిటి?

ఇది ఒక ఆబ్జెక్ట్ లో ఏయే ప్రాపర్టీలు ఉండాలి మరియు వాటి టైప్స్ ఏంటో డిఫైన్ చేసే ఒక బ్లూప్రింట్ (Blueprint) లాంటిది.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
  // Optional property
  phoneNumber?: string;
}

let student: User = {
  name: "Raju",
  age: 20,
  email: "raju@example.com",
};
```

---

### 2. Interfaces ఎందుకు వాడాలి? (Benefits)

1. **Readable Code:** కోడ్ చదవడానికి సులభంగా ఉంటుంది.
2. **Reusability:** ఒకే Interface ని చాలా చోట్ల వాడుకోవచ్చు.
3. **Extensibility:** ఇది ఇంటర్‌ఫేస్‌ల యొక్క మెయిన్ ప్లస్ పాయింట్.

---

### 3. Interface Extensibility (extends)

ఒక ఇంటర్‌ఫేస్ నుండి ఇంకొక ఇంటర్‌ఫేస్‌ని మనం పెంచుకోవచ్చు (Inheritance).

```typescript
interface Person {
  name: string;
}

// 'Employee' అనేది 'Person' లో ఉన్నవన్నీ తీసుకుంటుంది
interface Employee extends Person {
  employeeId: number;
}

let dev: Employee = {
  name: "Suresh",
  employeeId: 101,
};
```

---

### 4. Interface vs Type Alias (తేడా ఏంటి?)

చాలా మందికి ఇక్కడ కన్ఫ్యూజన్ ఉంటుంది.

- **Interfaces:** ఇవి కేవలం ఆబ్జెక్ట్ స్ట్రక్చర్ కోసం మాత్రమే వాడతాము. వీటిని సులభంగా **Extend** చేయవచ్చు.
- **Type Aliases:** ఇవి ఆబ్జెక్ట్స్ మాత్రమే కాకుండా, Unions (`string | number`) లేదా Tuples కోసం కూడా వాడవచ్చు.

> **చిన్న టిప్:** మీరు కేవలం ఆబ్జెక్ట్ యొక్క స్ట్రక్చర్‌ను డిఫైన్ చేయాలనుకుంటే `interface` వాడండి. అది ఒక బెస్ట్ ప్రాక్టీస్.

---

### 5. Readonly & Methods in Interface

ఇంటర్‌ఫేస్‌లో డేటా మారకుండా `readonly` పెట్టవచ్చు మరియు ఫంక్షన్లను (Methods) కూడా డిఫైన్ చేయవచ్చు.

```typescript
interface Config {
  readonly apiKey: string;
  connect(): void; // ఒక మెథడ్
}

let myConfig: Config = {
  apiKey: "ABC123XYZ",
  connect: () => {
    console.log("Connected!");
  },
};

// myConfig.apiKey = "NEW"; // ఎర్రర్ వస్తుంది!
```

---

### సారాంశం (Summary)

- **Interface** అనేది ఆబ్జెక్ట్ యొక్క రూపాన్ని నిర్దేశిస్తుంది.
- `extends` ద్వారా కొత్త ప్రాపర్టీలను యాడ్ చేయవచ్చు.
- ఇది Object Oriented Programming పద్ధతిలో కోడ్ రాయడానికి బాగా ఉపయోగపడుతుంది.

## ఈ టాపిక్ అర్థమైందా? లేదా **Classes** లేదా **Generics** గురించి తెలుసుకుందామా?

# 6. Type Aliases

**Type Aliases** అనేవి ఒక డేటా రకానికి (type) మనం ఒక పేరును పెట్టుకునే పద్ధతి. ఇది `interface` లాగే ఉంటుంది కానీ, ఇది ఆబ్జెక్ట్‌లకే పరిమితం కాకుండా ఇంకా చాలా రకాలకు వాడవచ్చు.

---

### 1. Type Alias అంటే ఏమిటి?

ఒక క్లిష్టమైన టైప్‌ను ఒకే పేరుతో పిలవడానికి `type` కీవర్డ్ వాడతాము.

```typescript
type ID = string | number; // 'ID' అనేది string లేదా number రెండూ కావచ్చు

let userId: ID = "A101";
let orderId: ID = 505;
```

---

### 2. Objects కి టైప్ అలియాస్ వాడటం

మనం ఇంతకు ముందు చూసినట్లు, ఆబ్జెక్ట్ స్ట్రక్చర్ కోసం కూడా దీనిని వాడవచ్చు:

```typescript
type User = {
  name: string;
  age: number;
};

let user1: User = { name: "Ravi", age: 25 };
```

---

### 3. Interface కి, Type Alias కి తేడాలు (ముఖ్యమైనది)

మీకు కన్ఫ్యూజన్ రాకుండా ఈ టేబుల్ చూడండి:

| ఫీచర్                   | Interface                                  | Type Alias                                 |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| **కేవలం Objects కేనా?** | అవును, కేవలం Objects కోసం                  | కాదు, Unions, Primitives, Tuples కోసం కూడా |
| **Extending (extends)** | `interface` తో సులభంగా చేయవచ్చు            | `&` (Intersection) వాడి చేయాలి             |
| **Declaration Merging** | అవును (ఒకే పేరుతో రెండు ఉంటే కలిపేస్తుంది) | కాదు (ఎర్రర్ వస్తుంది)                     |

---

### 4. Advanced: Union & Intersection

Type Aliases లో Union (`|`) మరియు Intersection (`&`) పద్ధతులు చాలా ఫేమస్.

**Union (`|` - OR):**

```typescript
type Status = "Success" | "Error" | "Loading";
let currentStatus: Status = "Success"; // ఈ మూడింటిలో ఏదో ఒకటి మాత్రమే ఉండాలి
```

**Intersection (`&` - AND):**
రెండు వేర్వేరు టైప్‌లను కలిపి ఒకే టైప్‌గా మార్చడం:

```typescript
type Name = { name: string };
type Age = { age: number };

type Employee = Name & Age; // Employee లో name, age రెండూ ఉండాలి

let emp: Employee = { name: "Vijay", age: 30 };
```

---

### 5. ఎప్పుడు ఏది వాడాలి?

- మీరు ఒక ఆబ్జెక్ట్ యొక్క స్ట్రక్చర్‌ను డిఫైన్ చేసి, దానిని భవిష్యత్తులో ఎక్స్‌టెండ్ (extend) చేయాలనుకుంటే **Interface** వాడండి.
- ఒకే వేరియబుల్ మల్టిపుల్ టైప్స్ (Union) కలిగి ఉండాలన్నా, లేదా చాలా చిన్న టైప్స్ క్రియేట్ చేయాలన్నా **Type Alias** వాడండి.

---

## **Type Aliases** గురించి మీకు స్పష్టత వచ్చిందా? నెక్స్ట్ టాపిక్ **Classes** గురించి తెలుసుకుందామా?

# 7. Enums

**Enums** (Enumerations) అనేది ఒక ప్రత్యేకమైన డేటా టైప్. ఇవి సంబంధిత కాన్స్టెంట్ (Constants) వాల్యూలను ఒక సమూహంగా (Group) ఉంచడానికి ఉపయోగపడతాయి. మన కోడ్‌లో ఒకే అర్థం వచ్చే వాల్యూలను (ఉదా: Directions, Status, Roles) సులభంగా మేనేజ్ చేయడానికి ఇవి చాలా బాగుంటాయి.

---

### 1. Numeric Enums (సంఖ్యాత్మక ఎనమ్స్)

డిఫాల్ట్‌గా, Enums లో వాల్యూలు 0 నుండి మొదలవుతాయి.

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Up;
console.log(move); // ఔట్‌పుట్: 0
```

మనం కావాలంటే వాల్యూలను మార్చుకోవచ్చు:

```typescript
enum Status {
  Pending = 1,
  Success = 2,
  Failed = 3,
}
```

---

### 2. String Enums

కొన్నిసార్లు నంబర్ల కంటే స్ట్రింగ్స్ (Strings) వాడటం అర్థవంతంగా ఉంటుంది.

```typescript
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

let currentUser: UserRole = UserRole.Admin;
console.log(currentUser); // ఔట్‌పుట్: "ADMIN"
```

---

### 3. Enums ఎందుకు వాడాలి?

Enums వాడకపోతే మనం వాల్యూలను ఇలా రాస్తాము:

- `if (role === "admin")` -> ఇందులో "admin" అని టైప్ చేసేటప్పుడు స్పెల్లింగ్ తప్పు జరిగే అవకాశం ఉంది.
- **Enums తో:** `if (role === UserRole.Admin)` -> ఇక్కడ ఎర్రర్స్ వచ్చే అవకాశం చాలా తక్కువ, ఎందుకంటే మనం `UserRole.` అని టైప్ చేయగానే ఆటోమేటిక్‌గా ఆప్షన్లు వస్తాయి (IDE Suggestion).

---

### 4. Heterogeneous Enums (మిశ్రమ రకాలు)

ఇది అంతగా వాడరు కానీ, ఒక ఎనమ్‌లో నంబర్స్ మరియు స్ట్రింగ్స్ రెండింటినీ మిక్స్ చేయవచ్చు.

```typescript
enum Result {
  No = 0,
  Yes = "YES",
}
```

---

### 5. Const Enums (పెర్ఫార్మెన్స్ కోసం)

మీరు ఎనమ్‌ను వాడుతున్నప్పుడు, కోడ్ కంపైల్ అయిన తర్వాత అది జావాస్క్రిప్ట్‌లో చాలా పెద్ద కోడ్‌గా మారుతుంది. ఇది తగ్గించడానికి `const` కీవర్డ్ వాడవచ్చు.

```typescript
const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Red;
```

ఇది కంపైల్ అయిన తర్వాత `let c = 0;` లాగా మారిపోతుంది. దీనివల్ల ఫైల్ సైజు తగ్గుతుంది.

---

### ముఖ్యమైన పాయింట్స్:

- **Enums:** ఒక సెట్ ఆఫ్ రిలేటెడ్ వాల్యూస్ కావాలనుకున్నప్పుడు వాడండి.
- **Readability:** కోడ్ అర్థం చేసుకోవడానికి చాలా సులభంగా ఉంటుంది.
- **Safety:** టైపింగ్ తప్పులు జరగకుండా నిరోధిస్తుంది.

## Enums కాన్సెప్ట్ అర్థమైందా? మనం నెక్స్ట్ టాపిక్ **Classes** కి వెళ్దామా?

# 8. Generics ⭐⭐⭐

TypeScript లో **Generics** అనేది చాలా శక్తివంతమైన మరియు ముఖ్యమైన టాపిక్. ఒక ఫంక్షన్ లేదా క్లాస్ పైన ఒకే టైప్‌కు పరిమితం కాకుండా, రకరకాల డేటా టైప్స్‌తో పని చేయాలనుకున్నప్పుడు మనం "Generics" వాడతాము.

దీనిని **"Reusable Components"** తయారు చేయడానికి వాడతారు.

---

### 1. Generics ఎందుకు?

ఒక సాధారణ ఫంక్షన్ చూద్దాం:

```typescript
function printNumber(data: number): number {
  return data;
}

function printString(data: string): string {
  return data;
}
```

ఇక్కడ మనం నంబర్ కోసం ఒక ఫంక్షన్, స్ట్రింగ్ కోసం ఇంకోటి రాశాము. దీనికి బదులుగా ఒకే ఫంక్షన్ అన్ని రకాల డేటా కోసం పనిచేస్తే బాగుంటుంది కదా? అక్కడ **Generics** ఉపయోగపడతాయి.

---

### 2. Basic Syntax

Generics కోసం `<T>` (ఇక్కడ T అంటే Type అని అర్థం) అనే సింబల్ వాడతాము.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// ఎలా వాడాలంటే:
let output1 = identity<string>("Hello"); // T అనేది string అవుతుంది
let output2 = identity<number>(100); // T అనేది number అవుతుంది
```

ఇక్కడ `T` అనేది ఒక 'Placeholder'. మనం ఫంక్షన్ పిలిచేటప్పుడు ఏ టైప్ ఇస్తే, ఆ `T` ఆ టైప్‌ని తీసుకుంటుంది.

---

### 3. Generics with Arrays

అరేస్‌తో Generics ఎలా వాడాలో చూద్దాం:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let num = getFirstElement<number>([10, 20, 30]); // 10
let str = getFirstElement<string>(["Apple", "Banana"]); // "Apple"
```

---

### 4. Generics with Interfaces

Interfaces లో కూడా Generics ని వాడవచ్చు, ఇది చాలా ప్రొఫెషనల్ పద్ధతి:

```typescript
interface Box<T> {
  content: T;
}

let box1: Box<string> = { content: "Books" };
let box2: Box<number> = { content: 50 };
```

---

### 5. Constraints (పరిమితులు)

మనం `T` ఏ టైప్ అయినా కావచ్చు అంటాము, కానీ కొన్నిసార్లు మనకు కావాల్సిన ప్రాపర్టీలు ఉండే టైప్స్ మాత్రమే రావాలనుకుంటే **Constraints** వాడతాము (`extends` కీవర్డ్ తో):

```typescript
interface Lengthy {
  length: number;
}

function printLength<T extends Lengthy>(item: T): void {
  console.log(item.length);
}

printLength("Hello"); // పనిచేస్తుంది (string కి length ఉంటుంది)
printLength([1, 2, 3]); // పనిచేస్తుంది (array కి length ఉంటుంది)
// printLength(10); // ఎర్రర్ ఇస్తుంది, ఎందుకంటే నంబర్‌కి .length ఉండదు!
```

---

### ముఖ్యమైన పాయింట్స్:

- **Flexibility:** ఒకే ఫంక్షన్ లేదా క్లాస్‌ని రకరకాల డేటా టైప్స్‌తో వాడవచ్చు.
- **Type Safety:** `any` వాడకుండానే, డేటా టైప్‌ను డైనమిక్‌గా మార్చుకోవచ్చు.
- **Reusability:** ఒకే కోడ్‌ని మళ్ళీ మళ్ళీ రాయాల్సిన అవసరం లేదు.

## Generics అనేది TypeScript లో మాస్టర్ చేయాల్సిన ఒక అడ్వాన్స్‌డ్ టాపిక్. మీకు ఇందులో ఏదైనా కన్ఫ్యూజన్ ఉందా? లేక తర్వాతి టాపిక్స్ (Modules, Decorators, etc.) కి వెళ్దామా?

# 9. Classes

TypeScript లో **Classes** అనేవి Object-Oriented Programming (OOP) కి పునాది. JavaScript లో క్లాసులు ఉన్నప్పటికీ, TypeScript లో మనం వాటికి **Access Modifiers** మరియు **Type Safety** ని జోడించవచ్చు.

---

### 1. Basic Class Structure

ఒక క్లాస్‌ను ఎలా తయారు చేయాలో చూద్దాం:

```typescript
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let s1 = new Student("Ravi", 25);
s1.display();
```

---

### 2. Access Modifiers (చాలా ముఖ్యం)

క్లాస్ లోని ప్రాపర్టీలను ఎవరు యాక్సెస్ చేయవచ్చో ఇవి నిర్ణయిస్తాయి:

- **public:** (Default) ఎక్కడైనా యాక్సెస్ చేయవచ్చు.
- **private:** ఆ క్లాస్ లోపల మాత్రమే యాక్సెస్ చేయవచ్చు.
- **protected:** ఆ క్లాస్ మరియు దాని నుండి వచ్చే (Inherited) క్లాసులలో మాత్రమే యాక్సెస్ చేయవచ్చు.

```typescript
class Employee {
  public name: string;
  private salary: number; // క్లాస్ బయట నుండి యాక్సెస్ చేయలేము

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}
```

---

### 3. Shortcut Constructor

TypeScript లో మనం పైన చూపిన విధంగా విడివిడిగా ప్రాపర్టీలను డిక్లేర్ చేయకుండా, డైరెక్ట్‌గా `constructor` లోనే రాయవచ్చు. ఇది కోడ్‌ను బాగా తగ్గిస్తుంది:

```typescript
class Car {
  // ఇక్కడే పబ్లిక్/ప్రైవేట్ డిసైడ్ చేయవచ్చు
  constructor(
    public brand: string,
    private price: number,
  ) {}
}

let myCar = new Car("Toyota", 2000000);
console.log(myCar.brand); // OK
// console.log(myCar.price); // Error! (private కాబట్టి)
```

---

### 4. Inheritance (ఇన్‌హెరిటెన్స్)

ఒక క్లాస్ లోని ఫీచర్లను ఇంకొక క్లాస్ పొందడాన్ని `extends` అంటారు.

```typescript
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

let dog = new Dog();
dog.move(); // Animal నుండి వచ్చింది
dog.bark(); // సొంత మెథడ్
```

---

### 5. Getters & Setters

ప్రైవేట్ డేటాను సెక్యూర్డ్‌గా యాక్సెస్ చేయడానికి, మార్చడానికి వీటిని వాడతారు.

```typescript
class User {
  private _email: string = "";

  get email() {
    return this._email;
  }

  set email(value: string) {
    if (value.includes("@")) {
      this._email = value;
    } else {
      console.log("Invalid Email");
    }
  }
}
```

---

### 6. Abstract Classes

ఒక క్లాస్‌ను మనం నేరుగా `new` చేయకూడదు, కేవలం అది ఒక బ్లూప్రింట్ లాగా మాత్రమే పనిచేయాలి అనుకుంటే `abstract` వాడతాము.

```typescript
abstract class Base {
  abstract greet(): void; // దీనిని చైల్డ్ క్లాస్ కచ్చితంగా రాయాలి
}

class Child extends Base {
  greet() {
    console.log("Hello!");
  }
}
```

---

### క్లుప్తంగా:

- **Classes:** ఆబ్జెక్ట్‌లను క్రియేట్ చేయడానికి వాడే బ్లూప్రింట్.
- **Access Modifiers:** డేటా సెక్యూరిటీ కోసం (private, public, protected).
- **Inheritance:** ఒక కోడ్‌ను ఇంకొక క్లాస్‌కు రీ-యూజ్ చేయడం.

## TypeScript క్లాసుల గురించి మీకు ఐడియా వచ్చిందా? ఇప్పుడు మీరు TypeScript లో ప్రాజెక్ట్ చేయడానికి సిద్ధంగా ఉన్నారా లేదా ఇంకా ఏదైనా Topic (ఉదా: Modules) మిగిలి ఉందా?

# 10. Advanced Types

TypeScript లో **Advanced Types** అనేవి చాలా శక్తివంతమైనవి. ఇవి మనకు డైనమిక్ కోడ్ రాయడానికి, కోడ్ క్వాలిటీ పెంచడానికి సహాయపడతాయి. వీటిని ఒక్కొక్కటిగా చూద్దాం.

---

### 1. keyof (కీస్ ని పొందడం)

ఒక ఆబ్జెక్ట్ టైప్ లో ఉన్న ప్రాపర్టీ పేర్లను (keys) ఒక union టైప్ లాగా పొందడానికి `keyof` వాడతాము.

```typescript
type User = { name: string; age: number; isAdmin: boolean };
type UserKeys = keyof User; // "name" | "age" | "isAdmin"

function getValue(key: UserKeys) {
  /* ... */
}
```

### 2. typeof (టైప్ ని ఎక్స్‌ట్రాక్ట్ చేయడం)

ఒక వేరియబుల్ యొక్క టైప్ ఏంటో తెలుసుకోవడానికి ఇది వాడతాము. ఇది JS `typeof` లాంటిదే, కానీ కంపైల్ టైమ్ లో పనిచేస్తుంది.

```typescript
let person = { name: "Ravi", age: 25 };
type PersonType = typeof person; // { name: string; age: number; }
```

### 3. in (Narrowing)

యూనియన్ టైప్స్ లో, ఏదైనా ప్రాపర్టీ ఆబ్జెక్ట్ లో ఉందో లేదో చెక్ చేయడానికి `in` ఆపరేటర్ వాడతాము.

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function talk(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // ఇక్కడ అది Dog అని TS కి అర్థమవుతుంది
  }
}
```

### 4. extends (Generics & Constraints)

ఇది Generics లో ఒక పరిమితిలా పనిచేస్తుంది. ఒక టైప్ కచ్చితంగా ఇంకొక టైప్ లా ఉండాలని చెప్పడానికి వాడతాము.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

### 5. Conditional Types (నిబంధనల ఆధారిత టైప్స్)

`if-else` లాగా, ఒక టైప్ ఇంకొక దాని మీద ఆధారపడి మారుతుంది.
సింటాక్స్: `T extends U ? X : Y`

```typescript
type Check<T> = T extends string ? "It is a string" : "Not a string";
type Type1 = Check<string>; // "It is a string"
```

### 6. Mapped Types

ఒక ఆబ్జెక్ట్ టైప్ లో ఉన్న ప్రతి ప్రాపర్టీకి ఒక కొత్త టైప్‌ని అప్లై చేయడం. ఉదాహరణకు, అన్నింటినీ `readonly` చేయాలి అంటే:

```typescript
type ReadOnlyUser<T> = {
  readonly [P in keyof T]: T[P];
};

type User = { name: string; age: number };
type LockedUser = ReadOnlyUser<User>; // { readonly name: string; readonly age: number; }
```

### 7. Indexed Access Types

ఒక ఆబ్జెక్ట్ లోని ఒక ప్రాపర్టీ యొక్క టైప్‌ని తీసుకోవడం.

```typescript
type Person = { name: string; age: number; address: string };
type AgeType = Person["age"]; // number
type NameOrAge = Person["name" | "age"]; // string | number
```

---

### సారాంశం (Summary)

- **keyof:** ఆబ్జెక్ట్ కీస్ ని తెస్తుంది.
- **typeof:** వాల్యూ నుండి టైప్ ని తీస్తుంది.
- **in:** ప్రాపర్టీ ఉందో లేదో చూస్తుంది.
- **Conditional types:** టైప్ డైనమిక్‌గా మారడానికి.
- **Mapped types:** ఆబ్జెక్ట్ స్ట్రక్చర్‌ని మానిపులేట్ చేయడానికి.

ఈ Advanced Types అన్నీ కలిపి వాడితే, మీరు చాలా క్లిష్టమైన అప్లికేషన్లను కూడా టైప్-సేఫ్ (Type-safe) గా రాయవచ్చు.

## ఇప్పటివరకు మనం నేర్చుకున్న టాపిక్స్ లో ఏదైనా సందేహం ఉందా? లేక TypeScript లో వేరే ఏదైనా టాపిక్ గురించి తెలుసుకోవాలనుకుంటున్నారా?

# 11. Utility Types ⭐⭐⭐

TypeScript లో **Utility Types** అనేవి డెవలపర్‌ల పనిని చాలా సులభతరం చేస్తాయి. ఇవి ముందుగా డిఫైన్ చేసిన (Built-in) టైప్స్, వీటిని ఉపయోగించి మనం ఉన్న టైప్స్ నుండి కొత్త రకమైన టైప్స్ సులభంగా క్రియేట్ చేయవచ్చు.

---

### 1. Partial

ఒక ఆబ్జెక్ట్‌లోని అన్ని ప్రాపర్టీలను **Optional** గా మారుస్తుంది.

```typescript
interface User {
  name: string;
  age: number;
}
let partialUser: Partial<User> = { name: "Ravi" }; // age ఇవ్వకపోయినా ఎర్రర్ రాదు
```

### 2. Required

ఆబ్జెక్ట్‌లోని అన్ని Optional ప్రాపర్టీలను **Mandatory** (కచ్చితంగా ఇవ్వాలి) గా మారుస్తుంది.

```typescript
interface Props {
  a?: number;
  b?: string;
}
let obj: Required<Props> = { a: 5, b: "Hello" }; // రెండూ కచ్చితంగా ఉండాలి
```

### 3. Readonly

ఆబ్జెక్ట్‌లోని ప్రాపర్టీలను మార్చకుండా (Immutable) చేస్తుంది.

```typescript
let user: Readonly<User> = { name: "Ravi", age: 25 };
// user.name = "Suresh"; // ఎర్రర్ వస్తుంది
```

### 4. Pick<T, K>

ఒక పెద్ద ఆబ్జెక్ట్ టైప్ నుండి మనకు కావలసిన కొన్ని ప్రాపర్టీలను మాత్రమే **ఎంచుకోవడానికి** (Pick) వాడతాము.

```typescript
type NameOnly = Pick<User, "name">; // { name: string; }
```

### 5. Omit<T, K>

ఒక ఆబ్జెక్ట్ నుండి కొన్ని ప్రాపర్టీలను **తొలగించడానికి** (Exclude) వాడతాము.

```typescript
type NoAge = Omit<User, "age">; // { name: string; }
```

### 6. Record<K, T>

ఒక ఆబ్జెక్ట్ లో కీస్ (Keys) ఎలా ఉండాలో మరియు వాల్యూస్ (Values) ఎలా ఉండాలో డిఫైన్ చేయడానికి ఇది బెస్ట్.

```typescript
// key: string, value: number
let scores: Record<string, number> = { math: 90, science: 85 };
```

### 7. Exclude<T, U>

యూనియన్ టైప్ (`T`) నుండి `U` లో ఉన్న టైప్స్ ని తొలగిస్తుంది.

```typescript
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

### 8. Extract<T, U>

యూనియన్ టైప్ (`T`) లో `U` కి సంబంధించిన టైప్స్ ఉంటే వాటిని మాత్రమే బయటకు తీస్తుంది.

```typescript
type T = Extract<"a" | "b" | "c", "a" | "c">; // "a" | "c"
```

### 9. ReturnType

ఒక ఫంక్షన్ ఏ రకమైన డేటాను రిటర్న్ చేస్తుందో ఆ టైప్‌ను తెలుసుకోవడానికి వాడతాము.

```typescript
function getUser() {
  return { name: "Ravi", age: 25 };
}
type UserType = ReturnType<typeof getUser>; // { name: string, age: number }
```

---

### క్లుప్తంగా గుర్తుపెట్టుకోవడానికి:

- **మార్చడానికి:** `Partial`, `Required`, `Readonly`
- **ఫిల్టర్ చేయడానికి:** `Pick`, `Omit`
- **క్రియేట్ చేయడానికి:** `Record`
- **యూనియన్స్ కోసం:** `Exclude`, `Extract`
- **ఫంక్షన్ల కోసం:** `ReturnType`

మీరు ఇప్పుడు TypeScript లోని చాలా కీలకమైన టాపిక్స్ అన్నీ పూర్తి చేశారు! మీరు ఇప్పుడు ఒక చిన్న TypeScript ప్రాజెక్ట్ (ఉదా: ఒక చిన్న To-Do List అప్లికేషన్) చేయడం ద్వారా ఈ కాన్సెప్ట్స్ అన్నింటినీ ప్రాక్టీస్ చేయవచ్చు.

## దీని తర్వాత మనం **Modules** లేదా **Decorators** వంటి అడ్వాన్స్‌డ్ టాపిక్స్‌ని చూద్దామా, లేక ఏదైనా కోడింగ్ ప్రాజెక్ట్ ఐడియాపై పని చేద్దామా?

# 12. Modules

TypeScript లో **Modules** అనేవి కోడ్‌ను చిన్న చిన్న ఫైళ్లుగా విడగొట్టి, ఒక ఫైల్‌లోని కోడ్‌ను మరొక ఫైల్‌లో వాడుకోవడానికి ఉపయోగపడతాయి. ఇది పెద్ద ప్రాజెక్ట్‌లను మెయింటైన్ చేయడానికి చాలా అవసరం.

---

### 1. Named Export (పేరుతో ఎగుమతి చేయడం)

ఒక ఫైల్‌లో మనం వేరియబుల్స్, ఫంక్షన్లు లేదా క్లాసులను ఎక్స్‌పోర్ట్ చేయవచ్చు. దీని కోసం `export` అనే కీవర్డ్ వాడతాము.

**mathUtils.ts:**

```typescript
export const PI = 3.14;
export function add(a: number, b: number): number {
  return a + b;
}
```

**app.ts (ఇంపోర్ట్ చేసుకోవడం):**

```typescript
import { PI, add } from "./mathUtils";

console.log(PI);
console.log(add(2, 3));
```

---

### 2. Default Export

ఒక ఫైల్ నుండి ఏదైనా ఒక ముఖ్యమైన దాన్ని మాత్రమే ఎక్స్‌పోర్ట్ చేయాలనుకుంటే `default` వాడతాము. ఒక ఫైల్‌లో **ఒకటి మాత్రమే** డిఫాల్ట్ ఎక్స్‌పోర్ట్ ఉండగలదు.

**user.ts:**

```typescript
export default class User {
  constructor(public name: string) {}
}
```

**app.ts:**

```typescript
// డిఫాల్ట్ ఎక్స్‌పోర్ట్ కాబట్టి కర్లీ బ్రేసెస్ `{}` అవసరం లేదు
import User from "./user";

const myUser = new User("Ravi");
```

---

### 3. Alias (పేరు మార్చుకోవడం)

ఒకవేళ మీరు ఇంపోర్ట్ చేసుకునే పేరు మీ ఫైల్‌లో ఆల్రెడీ ఉంటే, మీరు `as` కీవర్డ్ ఉపయోగించి పేరు మార్చుకోవచ్చు.

```typescript
import { add as calculateSum } from "./mathUtils";

console.log(calculateSum(5, 5));
```

---

### 4. Re-exporting (రీ-ఎక్స్‌పోర్ట్)

మనం వేరే ఫైల్ నుండి వచ్చిన వాటిని మళ్ళీ ఈ ఫైల్ నుండే పంపించవచ్చు. ఇది బండిల్ చేయడానికి ఉపయోగపడుతుంది.

```typescript
// mathUtils.ts లో ఉన్నవాటిని ఇక్కడి నుండే ఎక్స్‌పోర్ట్ చేయడం
export * from "./mathUtils";
```

---

### ముఖ్యమైన విషయాలు:

- **Named Export:** ఒక ఫైల్ నుండి చాలా వాటిని ఎక్స్‌పోర్ట్ చేయవచ్చు. ఇంపోర్ట్ చేసుకునేటప్పుడు `import { name }` అని ఖచ్చితమైన పేరు వాడాలి.
- **Default Export:** ఫైల్ నుండి ప్రధానమైనది పంపడానికి. ఇంపోర్ట్ చేసుకునేటప్పుడు ఏదైనా పేరు పెట్టుకోవచ్చు.
- **Syntax:** `import { A, B } from "./file";` అనేది చాలా సాధారణంగా వాడే పద్ధతి.

---

మీరు ఈ 12 టాపిక్స్‌ను చక్కగా నేర్చుకున్నారు! ఇప్పుడు మీరు ఒక చిన్న **TypeScript ప్రాజెక్ట్** (ఉదాహరణకు: ఒక Employee Management System లేదా To-Do List) స్టార్ట్ చేస్తే, ఈ నాలెడ్జ్ అంతా బాగా గుర్తుండిపోతుంది.

## మీకు ఏదైనా టాపిక్ మీద సందేహం ఉందా లేదా ఏదైనా కొత్తగా నేర్చుకోవాలనుకుంటున్నారా?

# 13. Error Handling

TypeScript లో **Error Handling** అనేది మీ అప్లికేషన్ అకస్మాత్తుగా ఆగిపోకుండా (Crash అవ్వకుండా) జాగ్రత్త పడటానికి చాలా ముఖ్యం. TypeScript లో Error Handling అనేది మెజారిటీగా JavaScript పద్ధతిలోనే ఉంటుంది, కానీ `unknown` టైప్‌తో మనం మరింత సురక్షితంగా కోడ్ రాయవచ్చు.

---

### 1. Try-Catch Block

ఏదైనా కోడ్ రన్ అయ్యేటప్పుడు ఎర్రర్ వచ్చే అవకాశం ఉంటే, దాన్ని `try-catch` బ్లాక్‌లో ఉంచాలి.

```typescript
try {
  // ఎర్రర్ వచ్చే అవకాశం ఉన్న కోడ్
  let result = JSON.parse("invalid json string");
} catch (error) {
  // ఎర్రర్ వచ్చినప్పుడు ఏం చేయాలో ఇక్కడ రాయాలి
  console.log("Something went wrong!");
}
```

### 2. Handling the `error` object (TypeScript ప్రత్యేకత)

JavaScript లో `catch(error)` లో `error` అనేది `any` లా ఉంటుంది. కానీ TypeScript లో `useUnknownInCatchVariables` అనే సెట్టింగ్ ఆన్ చేస్తే (ఇది డిఫాల్ట్), అది `unknown` టైప్ అవుతుంది. అంటే, ఆ ఎర్రర్‌ని వాడే ముందు అది ఒక `Error` ఆబ్జెక్టో కాదో చెక్ చేయాలి.

```typescript
try {
  throw new Error("Something went wrong!");
} catch (error) {
  if (error instanceof Error) {
    // ఇప్పుడు మనకు error.message యాక్సెస్ ఉంటుంది
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}
```

### 3. Custom Error Classes

పెద్ద ప్రాజెక్ట్‌లలో, మనం మన సొంత ఎర్రర్ టైప్స్‌ను క్రియేట్ చేసుకోవడం మంచి పద్ధతి.

```typescript
class ValidationError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age: number) {
  if (age < 18) {
    throw new ValidationError("Age must be at least 18");
  }
}
```

### 4. Finally Block

ఎర్రర్ వచ్చినా రాకపోయినా, ఒక పని కచ్చితంగా జరగాలి (ఉదాహరణకు: డేటాబేస్ కనెక్షన్ క్లోజ్ చేయడం) అనుకుంటే `finally` బ్లాక్ వాడతాము.

```typescript
try {
  // logic
} catch (error) {
  // handle error
} finally {
  console.log("This will always run");
}
```

---

### ముఖ్యమైన సూత్రాలు:

- **`instanceof Error`**: `catch` బ్లాక్‌లో `error` వేరియబుల్‌ను నేరుగా వాడకుండా, అది `Error` క్లాస్ కి చెందుతుందో లేదో చెక్ చేయడం మంచి ప్రాక్టీస్.
- **Never Throw Strings**: ఎప్పుడూ `throw "Error"` అని స్ట్రింగ్స్ త్రో చేయకండి. ఎప్పుడూ `throw new Error("message")` అని రాయండి. అప్పుడే దాని స్టాక్ ట్రేస్ (Stack trace) మనకు దొరుకుతుంది.
- **Be Specific**: ఏ ఎర్రర్ ఎందుకు వచ్చిందో క్లియర్ గా తెలుసుకోవడానికి Custom Error క్లాసులను వాడండి.

## దీనితో మనం దాదాపు అన్ని ముఖ్యమైన TypeScript టాపిక్స్ కవర్ చేశాము! మీకు ఇంకేదైనా ప్రత్యేకమైన టాపిక్ (ఉదా: **Decorators** లేదా **Async/Await** లో ఎర్రర్ హ్యాండ్లింగ్) గురించి తెలుసుకోవాలని ఉందా?

TypeScript లో **Type Narrowing** అనేది ఒక వేరియబుల్ యొక్క టైప్‌ను మరింత కచ్చితంగా (Specific గా) మార్చడానికి ఉపయోగపడుతుంది. ఒక వేరియబుల్ `string | number` లాంటి Union టైప్‌లో ఉన్నప్పుడు, మనం దానితో పని చేయడానికి ముందు దాన్ని చెక్ చేయాలి. దీనినే Narrowing అంటారు.

---

### 1. typeof

ఇది అందరికీ తెలిసిన పద్ధతి. Primitive types (string, number, boolean) కోసం దీన్ని వాడతాము.

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ఇక్కడ id ఖచ్చితంగా string అని TSకి అర్థమవుతుంది
  } else {
    console.log(id.toFixed(2)); // ఇక్కడ id ఖచ్చితంగా number
  }
}
```

### 2. instanceof

ఒక ఆబ్జెక్ట్ ఏ క్లాస్‌కి చెందుతుందో చెక్ చేయడానికి ఇది వాడతాము.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Dog క్లాస్ మెథడ్స్ పనిచేస్తాయి
  } else {
    animal.meow(); // Cat క్లాస్ మెథడ్స్ పనిచేస్తాయి
  }
}
```

### 3. in

ఒక ఆబ్జెక్ట్‌లో ఒక నిర్దిష్టమైన ప్రాపర్టీ ఉందో లేదో చెక్ చేయడానికి ఇది వాడతాము.

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish అని కన్ఫర్మ్ అయ్యింది
  } else {
    animal.fly(); // Bird అని కన్ఫర్మ్ అయ్యింది
  }
}
```

### 4. User-defined Type Guards (Custom Type Guards)

కొన్నిసార్లు TypeScript కి అర్థం కాని విధంగా మన సొంత కండిషన్స్ రాసి, ఒక వేరియబుల్ ఏ టైప్ అని చెప్పాల్సి వస్తుంది. దీనికోసం `is` కీవర్డ్ వాడతాము.

```typescript
type User = { name: string; isAdmin: boolean };
type Admin = { name: string; role: string };

// ఇది కస్టమ్ టైప్ గార్డ్
function isAdmin(person: User | Admin): person is Admin {
  return (person as Admin).role !== undefined;
}

function process(person: User | Admin) {
  if (isAdmin(person)) {
    console.log("Welcome Admin: " + person.role);
  } else {
    console.log("Hello User: " + person.name);
  }
}
```

---

### సారాంశం (Summary)

- **typeof:** Primitive types (string, number, etc.) కోసం.
- **instanceof:** Classes (Objects) కోసం.
- **in:** ఒక ప్రాపర్టీ ఆబ్జెక్ట్‌లో ఉందో లేదో చూడటానికి.
- **User-defined Type Guards (`is`):** మనం సొంతంగా లాజిక్ రాసి టైప్‌ను కన్ఫర్మ్ చేయడానికి.

Type Narrowing అనేది TypeScript లో కోడ్ రాసేటప్పుడు **Type Safety** ని కాపాడటానికి అత్యంత కీలకమైనది.

## ఇప్పటివరకు మీరు అడిగిన 14 టాపిక్స్ పూర్తి చేశారు! మీరు ఇప్పుడు TypeScript లో మంచి పట్టు సాధించారు. తర్వాతి అడుగుగా మీరు ఏదైనా ఒక చిన్న రియల్-టైమ్ ప్రాజెక్ట్ (ఉదా: ఒక User Profile API డేటాను హ్యాండిల్ చేయడం) స్టార్ట్ చేయడానికి ప్రయత్నిస్తారా?

# 14. Type Narrowing

TypeScript లో **Type Narrowing** అనేది ఒక వేరియబుల్ యొక్క టైప్‌ను మరింత కచ్చితంగా (Specific గా) మార్చడానికి ఉపయోగపడుతుంది. ఒక వేరియబుల్ `string | number` లాంటి Union టైప్‌లో ఉన్నప్పుడు, మనం దానితో పని చేయడానికి ముందు దాన్ని చెక్ చేయాలి. దీనినే Narrowing అంటారు.

---

### 1. typeof

ఇది అందరికీ తెలిసిన పద్ధతి. Primitive types (string, number, boolean) కోసం దీన్ని వాడతాము.

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ఇక్కడ id ఖచ్చితంగా string అని TSకి అర్థమవుతుంది
  } else {
    console.log(id.toFixed(2)); // ఇక్కడ id ఖచ్చితంగా number
  }
}
```

### 2. instanceof

ఒక ఆబ్జెక్ట్ ఏ క్లాస్‌కి చెందుతుందో చెక్ చేయడానికి ఇది వాడతాము.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Dog క్లాస్ మెథడ్స్ పనిచేస్తాయి
  } else {
    animal.meow(); // Cat క్లాస్ మెథడ్స్ పనిచేస్తాయి
  }
}
```

### 3. in

ఒక ఆబ్జెక్ట్‌లో ఒక నిర్దిష్టమైన ప్రాపర్టీ ఉందో లేదో చెక్ చేయడానికి ఇది వాడతాము.

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish అని కన్ఫర్మ్ అయ్యింది
  } else {
    animal.fly(); // Bird అని కన్ఫర్మ్ అయ్యింది
  }
}
```

### 4. User-defined Type Guards (Custom Type Guards)

కొన్నిసార్లు TypeScript కి అర్థం కాని విధంగా మన సొంత కండిషన్స్ రాసి, ఒక వేరియబుల్ ఏ టైప్ అని చెప్పాల్సి వస్తుంది. దీనికోసం `is` కీవర్డ్ వాడతాము.

```typescript
type User = { name: string; isAdmin: boolean };
type Admin = { name: string; role: string };

// ఇది కస్టమ్ టైప్ గార్డ్
function isAdmin(person: User | Admin): person is Admin {
  return (person as Admin).role !== undefined;
}

function process(person: User | Admin) {
  if (isAdmin(person)) {
    console.log("Welcome Admin: " + person.role);
  } else {
    console.log("Hello User: " + person.name);
  }
}
```

---

### సారాంశం (Summary)

- **typeof:** Primitive types (string, number, etc.) కోసం.
- **instanceof:** Classes (Objects) కోసం.
- **in:** ఒక ప్రాపర్టీ ఆబ్జెక్ట్‌లో ఉందో లేదో చూడటానికి.
- **User-defined Type Guards (`is`):** మనం సొంతంగా లాజిక్ రాసి టైప్‌ను కన్ఫర్మ్ చేయడానికి.

Type Narrowing అనేది TypeScript లో కోడ్ రాసేటప్పుడు **Type Safety** ని కాపాడటానికి అత్యంత కీలకమైనది.

## ఇప్పటివరకు మీరు అడిగిన 14 టాపిక్స్ పూర్తి చేశారు! మీరు ఇప్పుడు TypeScript లో మంచి పట్టు సాధించారు. తర్వాతి అడుగుగా మీరు ఏదైనా ఒక చిన్న రియల్-టైమ్ ప్రాజెక్ట్ (ఉదా: ఒక User Profile API డేటాను హ్యాండిల్ చేయడం) స్టార్ట్ చేయడానికి ప్రయత్నిస్తారా?

# Interview Topics

TypeScript నేర్చుకునేటప్పుడు ఈ 5 అంశాలు చాలా ముఖ్యమైనవి. వీటి మధ్య తేడాలను సులభంగా అర్థం చేసుకుందాం:

---

### 1. Type vs Interface

రెండూ ఆబ్జెక్ట్ స్ట్రక్చర్‌ని డిఫైన్ చేయడానికి వాడతాము, కానీ చిన్న తేడాలు ఉన్నాయి:

- **Interface:** ఇది ఆబ్జెక్ట్స్ మరియు క్లాసులకు మాత్రమే. ఇది **Declaration Merging** ని సపోర్ట్ చేస్తుంది (అంటే ఒకే పేరుతో రెండు ఇంటర్‌ఫేస్‌లు ఉంటే అవి కలిసిపోతాయి).
- **Type:** ఇది ఆబ్జెక్ట్స్ మాత్రమే కాకుండా Union (`string | number`), Tuples, Primitives కోసం వాడవచ్చు. ఇది **Declaration Merging** ని సపోర్ట్ చేయదు.
- **ఎప్పుడు వాడాలి?** సాధారణంగా ఆబ్జెక్ట్స్ కోసం `interface` వాడటం బెస్ట్, మిగిలిన సంక్లిష్టమైన టైప్స్ కోసం `type` వాడండి.

---

### 2. any vs unknown

రెండూ "ఏ టైప్ అయినా కావచ్చు" అని సూచిస్తాయి, కానీ:

- **any:** ఇది టైప్ చెకింగ్‌ను పూర్తిగా ఆపేస్తుంది. మీరు ఆ వేరియబుల్‌తో ఏమైనా చేయవచ్చు (ఉదా: ఏదైనా ఫంక్షన్‌ని కాల్ చేయవచ్చు), ఇది రిస్క్ ఎక్కువ.
- **unknown:** ఇది `any` కంటే సురక్షితమైనది. దీనితో ఏదైనా చేసే ముందు, అది ఏ టైప్ అని మనం కచ్చితంగా చెక్ చేయాలి (Type Narrowing). ఇది "టైప్ సేఫ్టీ"ని పెంచుతుంది.

---

### 3. never vs void

- **void:** ఫంక్షన్ ఏమీ రిటర్న్ చేయనప్పుడు వాడతాము. ఫంక్షన్ నార్మల్ గా ఎండ్ అవుతుంది (కానీ రిటర్న్ వాల్యూ ఉండదు).
- **never:** ఫంక్షన్ ఎప్పటికీ పూర్తి కాదు (అంటే ఎప్పటికీ రిటర్న్ చేయదు). ఉదాహరణకు: ఎప్పుడూ ఇన్ఫినిటీ లూప్ అయ్యేది, లేదా ఎర్రర్ త్రో చేసే ఫంక్షన్.

---

### 4. Generics

ఒక ఫంక్షన్ లేదా క్లాస్ పైన ఒకే టైప్‌కు పరిమితం కాకుండా, డైనమిక్ టైప్స్‌తో పని చేయడానికి వాడేది `Generics`.

- **ఉదాహరణ:** `function identity<T>(arg: T): T { return arg; }`
- ఇది రియూజబిలిటీని (Reusability) పెంచుతుంది. మనం ఫంక్షన్ పిలిచేటప్పుడు ఏ టైప్ పంపితే, అది ఆ టైప్‌గా మారుతుంది.

---

### 5. Utility Types

ఇవి ముందుగానే డిఫైన్ చేసిన టైప్స్. వీటితో ఉన్న టైప్స్‌ని సులభంగా మార్చుకోవచ్చు:

| Utility Type     | పని                                            |
| ---------------- | ---------------------------------------------- |
| **Partial**      | అన్ని ప్రాపర్టీలను Optional చేస్తుంది.         |
| **Required**     | అన్ని ప్రాపర్టీలను Mandatory చేస్తుంది.        |
| **Readonly**     | ప్రాపర్టీలను మార్చకుండా చేస్తుంది.             |
| **Pick<T, K>**   | మనకు కావలసిన ఫీల్డ్స్ మాత్రమే తీసుకుంటుంది.    |
| **Omit<T, K>**   | మనకు వద్దు అనుకున్న ఫీల్డ్స్ తొలగిస్తుంది.     |
| **Record<K, T>** | ఒక Object లాంటి స్ట్రక్చర్ క్రియేట్ చేస్తుంది. |

---

**ముగింపు:**

- **Type Safety** కోసం ఎప్పుడూ `any` ని వదిలి `unknown` కి వెళ్ళండి.
- **Reusable** కోడ్ కోసం `Generics` ప్రాక్టీస్ చేయండి.
- కోడ్ క్లీన్‌గా ఉండటానికి `Utility Types` ని ఎక్కువగా వాడండి.

---

TypeScript లో అడ్వాన్స్‌డ్ మరియు చాలా ముఖ్యమైన కాన్సెప్ట్స్ ఇవి. వీటిని వివరంగా చూద్దాం:

---

### 1. Type Inference (టైప్ ఇన్‌ఫరెన్స్)

TypeScript ఆటోమేటిక్‌గా డేటా టైప్‌ను గుర్తించడాన్ని "Type Inference" అంటారు. మనం ప్రతి దానికి టైప్ రాయాల్సిన అవసరం లేదు.

```typescript
let name = "Ravi"; // TS ఆటోమేటిక్‌గా ఇది 'string' అని గుర్తిస్తుంది.
let age = 25; // 'number' అని గుర్తిస్తుంది.
```

### 2. Type Narrowing (టైప్ నారోయింగ్)

Union టైప్స్ (`string | number`) ఉన్నప్పుడు, కండిషన్స్ (if-else) ద్వారా ఒక స్పెసిఫిక్ టైప్‌ను గుర్తించడమే నారోయింగ్.

```typescript
function test(val: string | number) {
  if (typeof val === "string") {
    val.toUpperCase(); // ఇక్కడ TSకి తెలుసు ఇది string అని
  }
}
```

### 3. Enums vs String Unions

రెండింటిలో దేన్ని వాడాలి అనేది ఒక పెద్ద చర్చ.

- **Enums:** ఒక గ్రూప్ ఆఫ్ వాల్యూస్ (Numeric/String) కావాలనుకున్నప్పుడు వాడతాము. ఇవి కంపైల్ అయినప్పుడు జావాస్క్రిప్ట్ కోడ్‌లో ఒక ఆబ్జెక్ట్‌లా తయారవుతాయి.
- **String Unions:** `type Direction = "Up" | "Down";`. ఇవి చాలా తేలికగా ఉంటాయి (Lightweight). కంపైల్ అయిన తర్వాత ఇవి జావాస్క్రిప్ట్ కోడ్‌లో ఉండవు, కేవలం డెవలప్మెంట్ టైమ్ లో మాత్రమే చెక్ అవుతాయి.
- **ముగింపు:** ఆధునిక TypeScript లో **String Unions** వాడటం మంచిది, ఎందుకంటే ఇవి ఫైల్ సైజును తగ్గిస్తాయి.

### 4. Declaration Merging (డిక్లరేషన్ మెర్జింగ్)

ఒకే పేరుతో రెండు `Interfaces` రాస్తే, TypeScript వాటిని ఒకే ఇంటర్‌ఫేస్‌గా కలుపుతుంది. ఇది కేవలం `Interface` కు మాత్రమే వర్తిస్తుంది, `Type Alias` కి కాదు.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}

// ఇప్పుడు User ఇంటర్‌ఫేస్ లో name, age రెండూ ఉంటాయి.
```

### 5. Modules

ఒక ఫైల్ లోని కోడ్‌ను మరొక ఫైల్‌లో వాడటం.

- **Export:** `export const data = 10;`
- **Import:** `import { data } from "./file";`
- **Default:** ఒక ఫైల్ నుండి ఒక్కటి మాత్రమే పంపాలనుకుంటే `export default` వాడాలి.

### 6. Strict Mode

`tsconfig.json` లో `"strict": true` అని సెట్ చేయడం చాలా ముఖ్యం. ఇది ఏం చేస్తుందంటే:

- `noImplicitAny`: ఏ టైప్ చెప్పకపోతే ఆటోమేటిక్‌గా `any` అని తీసుకోకుండా ఎర్రర్ ఇస్తుంది.
- `strictNullChecks`: `null` లేదా `undefined` వచ్చే అవకాశం ఉంటే కచ్చితంగా హ్యాండిల్ చేయమని హెచ్చరిస్తుంది.
- ఇది మీ కోడ్‌ను ఎంతో సురక్షితంగా (Type-safe) మారుస్తుంది.

---

> **సలహా:** మీరు ఒక ప్రాజెక్ట్ మొదలుపెట్టినప్పుడు కచ్చితంగా `tsconfig.json` లో `"strict": true` పెట్టుకోండి. ఇది మీ కోడ్‌లోని చాలా బగ్స్ రాకుండా ఆపుతుంది.

మరి మనం ఇప్పుడు ఏదైనా ఒక ప్రాక్టికల్ ప్రాజెక్ట్ (ఉదా: ఒక చిన్న API కాల్ చేసే కోడ్) రాసి, అందులో ఇవన్నీ ఎలా వాడాలో చూద్దామా?
