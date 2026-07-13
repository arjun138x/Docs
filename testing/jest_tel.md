Since you've been following roadmaps for **Node.js, NestJS, React, TypeORM, PostgreSQL, AWS, System Design, and Datadog**, learning **Jest** is the next logical step. Jest is the most commonly used testing framework for Node.js, TypeScript, NestJS, and React applications. It supports unit testing, integration testing, mocking, snapshots, and code coverage in a single framework. ([Jest][1])

# Jest.js Expert Roadmap (2026)

## [1. Testing Fundamentals](#1-testing-fundamentals-1)

### Learn

- What is Testing?
- Types of Testing
  - Unit Testing
  - Integration Testing
  - End-to-End (E2E)
  - Functional Testing

- Why automated testing?
- Test Pyramid
- TDD vs BDD

**Practice**

- Write simple test cases
- Understand Arrange → Act → Assert (AAA Pattern)

---

## [2. Jest Basics](#2-jest-basics-1)

### Installation

- Install Jest
- Configure package.json
- Running tests
- Watch Mode

### Folder Structure

```
src/
tests/
__tests__/
```

### Naming

```
sum.test.ts
user.spec.ts
```

### Test Functions

```
describe()
test()
it()
beforeEach()
afterEach()
beforeAll()
afterAll()
```

Practice writing 20-30 simple tests.

---

## [3. Assertions (Expect API)](#3-assertions-expect-api-1)

Master every matcher.

## Equality

```
toBe()
toEqual()
toStrictEqual()
```

## Truthiness

```
toBeNull()
toBeUndefined()
toBeDefined()
toBeTruthy()
toBeFalsy()
```

## Numbers

```
toBeGreaterThan()
toBeLessThan()
toBeCloseTo()
```

## Arrays

```
toContain()
toHaveLength()
```

## Objects

```
toHaveProperty()
```

## Strings

```
toMatch()
```

## Exceptions

```
toThrow()
```

Practice around 50 assertion exercises.

---

## [4. Mocking (Most Important)](#4-mocking-most-important-1)

Understand why mocking is needed.

## Mock Functions

```
jest.fn()
```

## Mock Modules

```
jest.mock()
```

## Spy

```
jest.spyOn()
```

## Mock Return Values

```
mockReturnValue()

mockResolvedValue()

mockRejectedValue()
```

## Clear Mock

```
clearAllMocks()

resetAllMocks()

restoreAllMocks()
```

Practice

- Mock API
- Mock Database
- Mock Service
- Mock Repository

---

## [5. Async Testing](#5-async-testing-1)

Learn testing for

```
Promise

async/await

Callbacks

Axios

Fetch

Database calls
```

Practice

```
await expect(...)

rejects

resolves
```

---

## [6. Advanced Matchers](#6-advanced-matchers-1)

Learn

```
expect.any()

expect.objectContaining()

expect.arrayContaining()

expect.stringContaining()

expect.stringMatching()
```

---

## [7. Snapshot Testing](#7-snapshot-testing-1)

Learn

```
toMatchSnapshot()

Inline Snapshot

Snapshot Updates
```

Mostly useful for React.

---

## [8. Code Coverage](#8-code-coverage-కోడ్-కవరేజ్)

Learn

```
--coverage
```

Understand

- Statement Coverage
- Branch Coverage
- Function Coverage
- Line Coverage

Set minimum thresholds in Jest config. ([adesso][2])

---

## [9. Jest Configuration](#9-jest-configuration-1)

Learn

```
jest.config.js

ts-jest

testEnvironment

setupFiles

setupFilesAfterEnv

moduleNameMapper

collectCoverage

coverageThreshold

testTimeout

testPathIgnorePatterns
```

---

## [10. TypeScript + Jest](#10-typescript--jest-1)

Install

```
ts-jest

@types/jest
```

Practice

- Test Interfaces
- DTOs
- Utility Functions
- Generic Functions

---

## [11. NestJS Testing ⭐](#11-nestjs-testing--1)

Since you're learning NestJS, master these topics.

## Testing Module

```
TestingModule

Test.createTestingModule()
```

## Unit Testing

- Controllers
- Services
- Guards
- Pipes
- Filters
- Interceptors

## Mock Repository

```
getRepositoryToken()
```

## Mock Providers

```
useValue

useFactory

useClass
```

## Dependency Injection Testing

---

## [12. Database Testing](#12-database-testing-1)

Learn

- Mock Repository
- In-memory Database
- Test Database
- Transactions
- Rollbacks

---

## [13. Integration Testing](#13-integration-testing-1)

Test

```
Controller

↓

Service

↓

Repository

↓

Database
```

Practice

- CRUD APIs
- Authentication
- Authorization
- Validation

---

## [14. API Testing](#14-api-testing-1)

Learn

```
Supertest
```

Practice

```
GET

POST

PUT

PATCH

DELETE
```

Test

- Headers
- Cookies
- JWT
- Validation Errors
- Status Codes

---

## [15. E2E Testing](#14-api-testing-1)

NestJS provides E2E testing support.

Learn

```
npm run test:e2e
```

Test

- Login
- Signup
- CRUD
- JWT Flow
- RBAC
- Refresh Token

---

## [16. Mock External Services](#16-mock-external-services-1)

Mock

- AWS SDK
- Redis
- RabbitMQ
- Kafka
- S3
- SES
- Stripe
- Twilio
- External APIs

---

## [17. CI/CD Integration](#17-cicd-integration-1)

Run Jest in

- GitHub Actions
- GitLab CI
- Jenkins
- AWS CodeBuild

Generate

- Coverage Reports
- JUnit Reports
- HTML Reports

---

## [18. Best Practices](#18-best-practices-1)

Learn

- AAA Pattern
- Keep tests independent
- One assertion focus per test (where practical)
- Avoid implementation-detail testing
- Use factories/builders for test data
- Don't overuse mocks
- Prefer behavior testing
- Keep tests fast

---

## 19. Real Project Practice

Build tests for

- User Module
- Auth Module
- Product Module
- Order Module
- Payment Module
- Notification Module

Include

- Unit Tests
- Integration Tests
- E2E Tests

Aim for 80–90% meaningful coverage rather than 100% coverage for its own sake.

---

## [20. Interview Preparation](#20-interview-preparation-1)

- What is Jest?
- Unit vs Integration vs E2E Testing
- Mock vs Spy
- `jest.fn()` vs `jest.spyOn()`
- `toBe()` vs `toEqual()`
- `beforeEach()` vs `beforeAll()`
- How to test async functions
- How to mock Axios
- How to mock a database
- How to test NestJS services
- How to test controllers
- How to generate coverage reports
- Snapshot testing
- Common Jest configuration options
- Mocking AWS SDK
- Mocking TypeORM repositories
- Supertest for API testing
- CI/CD integration

## Recommended Practice Project

Given your background, build a complete **NestJS + PostgreSQL + AWS Serverless** application with:

- 6–8 modules (Auth, Users, Products, Orders, Payments, Notifications)
- Unit tests for every service
- Integration tests for each module
- E2E tests for all REST APIs
- Mocked AWS services (S3, SES)
- Coverage reporting in CI/CD

This mirrors the kind of testing expected in enterprise Node.js and NestJS projects and aligns well with the serverless architecture you've been exploring.

[1]: https://jestjs.io/?utm_source=chatgpt.com "Jest · Delightful JavaScript Testing"
[2]: https://www.adesso.de/en/news/blog/the-jest-testing-framework-our-top-five-features-2.jsp?utm_source=chatgpt.com "The Jest testing framework: our top five features"

---

# 1. Testing Fundamentals

Jest.js నేర్చుకునే ప్రయాణంలో మొదటి మెట్టు - **Testing Fundamentals**. వీటిని అర్థం చేసుకోవడం వల్ల మీరు రాసే కోడ్ నాణ్యత పెరుగుతుంది. ఇప్పుడు ఈ అంశాలను సులభంగా అర్థం చేసుకుందాం.

---

## 1. టెస్టింగ్ అంటే ఏమిటి? (What is Testing?)

సాఫ్ట్‌వేర్ డెవలప్‌మెంట్‌లో, మనం రాసిన కోడ్, యూజర్ కోరుకున్న విధంగా పనిచేస్తుందో లేదో సరిచూడడాన్ని **Testing** అంటారు. సింపుల్‌గా చెప్పాలంటే, కోడ్‌లోని తప్పులను (Bugs) ముందే కనిపెట్టే ప్రక్రియ.

---

## 2. టెస్టింగ్ రకాలు (Types of Testing)

- **Unit Testing:** చిన్న చిన్న ఫంక్షన్లు లేదా లాజిక్ సరిగ్గా పనిచేస్తున్నాయో లేదో టెస్ట్ చేయడం. (Jest దీనికి బెస్ట్).
- **Integration Testing:** ఒకటి కంటే ఎక్కువ ఫంక్షన్లు లేదా మోడ్యూల్స్ కలిసినప్పుడు అవి కలిసి సరిగ్గా పనిచేస్తున్నాయా అని చూడటం.
- **End-to-End (E2E) Testing:** ఒక యూజర్ అప్లికేషన్‌ను ఎలా వాడుతారో (ఉదా: లాగిన్ నుంచి డేటా సబ్మిట్ చేయడం వరకు), అలా మొత్తం ఫ్లోను టెస్ట్ చేయడం.
- **Functional Testing:** సాఫ్ట్‌వేర్ ఫీచర్లు రిక్వైర్మెంట్స్ ప్రకారం పనిచేస్తున్నాయా లేదా అని చూడటం.

---

## 3. ఆటోమేటెడ్ టెస్టింగ్ ఎందుకు? (Why Automated Testing?)

కోడ్‌ని ప్రతిసారీ మ్యాన్యువల్‌గా టెస్ట్ చేయడం కష్టం. ఆటోమేటెడ్ టెస్టింగ్ వల్ల:

1. **Time Saving:** సెకన్లలో వందల టెస్టులు జరుగుతాయి.
2. **Reliability:** మనుషుల వల్ల జరిగే తప్పులు ఉండవు.
3. **Confidence:** కొత్త కోడ్ రాసినప్పుడు పాత ఫీచర్లు పాడవకుండా చూసుకోవచ్చు.

---

## 4. టెస్ట్ పిరమిడ్ (Test Pyramid)

టెస్టింగ్ చేసేటప్పుడు ఎలా ప్రాధాన్యత ఇవ్వాలో ఇది చెబుతుంది:

- **Unit Tests (కింద):** ఇవి ఎక్కువ సంఖ్యలో ఉండాలి (వేగంగా మరియు చౌకగా ఉంటాయి).
- **Integration Tests (మధ్యలో):** ఇవి మితంగా ఉండాలి.
- **E2E Tests (పైన):** ఇవి తక్కువగా ఉండాలి (ఎందుకంటే ఇవి నెమ్మదిగా ఉంటాయి మరియు నిర్వహించడం కష్టం).

---

## 5. TDD vs BDD

- **TDD (Test Driven Development):** కోడ్ రాయకముందే, టెస్ట్ రాయడం. "ముందు టెస్ట్ రాయండి, ఆ తర్వాత ఆ టెస్ట్ పాస్ అవ్వడానికి కోడ్ రాయండి."
- **BDD (Behavior Driven Development):** ఇది యూజర్ దృక్కోణంలో ఉంటుంది. "యూజర్ ఈ బటన్ నొక్కితే, ఈ రిజల్ట్ రావాలి" అనే ఇంగ్లీష్ లాంటి భాషలో టెస్ట్ స్క్రిప్ట్స్ రాస్తారు.

---

## 6. ప్రాక్టీస్: AAA ప్యాటర్న్ (Arrange-Act-Assert)

ఏ టెస్ట్ రాసినా ఈ పద్ధతి ఫాలో అవ్వాలి:

1. **Arrange (ఏర్పాటు):** కావాల్సిన డేటాను, ఆబ్జెక్టులను సిద్ధం చేసుకోవడం.
2. **Act (పని):** మనం టెస్ట్ చేయాలనుకుంటున్న ఫంక్షన్‌ని రన్ చేయడం.
3. **Assert (నిర్ణయం):** వచ్చిన ఫలితం మనం అనుకున్న దానితో మ్యాచ్ అవుతుందో లేదో చెక్ చేయడం.

### ఉదాహరణ (Example):

```javascript
// ఒక సింపుల్ ఫంక్షన్
function multiply(a, b) {
  return a * b;
}

// Jest టెస్ట్ ఫైల్
test("multiplies 2 * 3 to equal 6", () => {
  // 1. Arrange
  const a = 2;
  const b = 3;

  // 2. Act
  const result = multiply(a, b);

  // 3. Assert
  expect(result).toBe(6);
});
```

---

# 2. Jest Basics

Jest.js ని సెటప్ చేయడం మరియు దాని ఆర్గనైజేషన్ పద్ధతులను అర్థం చేసుకోవడం చాలా ముఖ్యం. ఇప్పుడు మనం మీరు అడిగిన అంశాలను వివరంగా చూద్దాం.

---

## 1. ఇన్‌స్టాలేషన్ మరియు సెటప్ (Installation & Setup)

మొదట మీ ప్రాజెక్ట్ ఫోల్డర్‌లో టెర్మినల్ ఓపెన్ చేసి ఈ క్రింది కమాండ్లను రన్ చేయండి:

**స్టెప్ 1: Jest ని ఇన్‌స్టాల్ చేయడం**

```bash
npm install --save-dev jest

```

_(ఇది `devDependencies` లో Jest ని యాడ్ చేస్తుంది.)_

**స్టెప్ 2: `package.json` ఫైల్‌ని మార్చడం**
మీ `package.json` ఫైల్‌లో `"scripts"` సెక్షన్‌ని ఇలా మార్చండి:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

**స్టెప్ 3: టెస్టులను రన్ చేయడం**
టెర్మినల్‌లో `npm test` అని టైప్ చేస్తే Jest రన్ అవుతుంది.

**Watch Mode:**
డెవలప్మెంట్ చేస్తున్నప్పుడు, మనం కోడ్ మార్చిన ప్రతిసారీ టెస్టులు ఆటోమేటిక్‌గా రన్ అవ్వాలంటే **Watch Mode** వాడతాం:

```bash
npm test -- --watch

```

---

## 2. ఫోల్డర్ స్ట్రక్చర్ మరియు నేమింగ్ (Folder Structure & Naming)

Jest ఫైళ్లను గుర్తించడానికి కొన్ని ప్రామాణిక పద్ధతులు ఉన్నాయి:

- **`__tests__` ఫోల్డర్:** మీరు `__tests__` అనే పేరుతో ఫోల్డర్ క్రియేట్ చేస్తే, అందులో ఉన్న ఫైళ్లను Jest ఆటోమేటిక్‌గా టెస్ట్ ఫైళ్లుగా గుర్తిస్తుంది.
- **ఫైల్ నేమింగ్:**
- `filename.test.js` (లేదా .ts)
- `filename.spec.js` (లేదా .ts)
- ఈ విధంగా పేరు పెడితే Jest వాటిని టెస్ట్ ఫైళ్లుగా ట్రీట్ చేస్తుంది.

**ఉదాహరణ స్ట్రక్చర్:**

```text
my-project/
├── src/
│   └── math.js
├── tests/ (లేదా __tests__/)
│   └── math.test.js
├── package.json

```

---

## 3. టెస్ట్ ఫంక్షన్స్ (Test Functions & Lifecycle Hooks)

Jest లో టెస్టులను ఆర్గనైజ్ చేయడానికి మరియు కంట్రోల్ చేయడానికి ఈ ఫంక్షన్లు వాడతాం.

| ఫంక్షన్               | వివరణ                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **`describe()`**      | టెస్టులను గ్రూప్ చేయడానికి వాడతాం. (ఉదా: ఒక క్లాస్ లేదా ఫంక్షన్ కి సంబంధించిన టెస్టులన్నీ ఒకే చోట). |
| **`test()` / `it()**` | ఇవి రెండూ ఒక్కటే (Aliases). ఒక టెస్ట్ కేస్ రాయడానికి వీటిని వాడతాం.                                 |
| **`beforeAll()`**     | ఫైల్‌లోని అన్ని టెస్టులు స్టార్ట్ అవ్వకముందు ఒక్కసారి రన్ అవుతుంది.                                 |
| **`afterAll()`**      | అన్ని టెస్టులు పూర్తయ్యాక ఒక్కసారి రన్ అవుతుంది.                                                    |
| **`beforeEach()`**    | **ప్రతి** టెస్ట్ కేస్ స్టార్ట్ అవ్వడానికి ముందు రన్ అవుతుంది.                                       |
| **`afterEach()`**     | **ప్రతి** టెస్ట్ కేస్ పూర్తయ్యాక రన్ అవుతుంది.                                                      |

### ఉదాహరణ కోడ్:

```javascript
describe("Math Operations", () => {
  beforeAll(() => {
    console.log("టెస్టింగ్ ప్రారంభమైంది...");
  });

  beforeEach(() => {
    console.log("కొత్త టెస్ట్ కోసం ప్రిపేర్ అవుతున్నాం...");
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  it("multiplies 2 * 2 to equal 4", () => {
    expect(2 * 2).toBe(4);
  });

  afterEach(() => {
    console.log("టెస్ట్ పూర్తయింది.");
  });
});
```

---

### ముఖ్యమైన గమనిక:

- `test()` మరియు `it()` రెండూ ఒకటే. మీరు ఏది వాడినా పెద్దగా తేడా ఉండదు, కానీ కొన్ని టీమ్స్ "Behavior" ని వివరించడానికి `it('should return 5', ...)` అని రాయడానికి ఇష్టపడతాయి.
- `describe` లోపల మళ్ళీ `describe` రాయవచ్చు (Nested grouping).

---

# 3. Assertions (Expect API)

Jest లో **Assertions (Expect API)** అంటే మనం రాసిన కోడ్ అవుట్‌పుట్, మనం ఆశించిన అవుట్‌పుట్‌తో సరిపోలుతుందా లేదా అని నిర్ధారించుకోవడం. వీటిని **Matchers** అని కూడా అంటారు.

వీటిని ఎలా వాడాలో ఒకే చోట చూద్దాం:

---

### 1. Equality (సమానత్వం)

- **`toBe(value)`**: Primitive values (numbers, strings, booleans) ని చెక్ చేయడానికి. (Object reference కూడా చెక్ చేస్తుంది).
- **`toEqual(value)`**: ఆబ్జెక్ట్‌లు లేదా అర్రేలలోని వాల్యూస్ సమానంగా ఉన్నాయో లేదో చెక్ చేయడానికి.
- **`toStrictEqual(value)`**: `toEqual` లాగే ఉంటుంది, కానీ ఇది 'undefined' ప్రాపర్టీస్ ఉన్నప్పుడు కూడా చాలా ఖచ్చితంగా (strictly) చెక్ చేస్తుంది.

```javascript
test("equality examples", () => {
  expect(10).toBe(10);
  expect({ a: 1 }).toEqual({ a: 1 });
});
```

---

### 2. Truthiness (నిజనిర్ధారణ)

జావాస్క్రిప్ట్ లోని `truthy` లేదా `falsy` వాల్యూస్‌ని టెస్ట్ చేయడానికి:

- **`toBeNull()`**: వాల్యూ `null` అయితే.
- **`toBeUndefined()`**: వాల్యూ `undefined` అయితే.
- **`toBeDefined()`**: `undefined` కాకపోతే.
- **`toBeTruthy()`**: `if` కండిషన్‌లో `true` అనిపించేవి.
- **`toBeFalsy()`**: `if` కండిషన్‌లో `false` అనిపించేవి (0, "", null, undefined, false).

---

### 3. Numbers (సంఖ్యలు)

- **`toBeGreaterThan(number)`**: >
- **`toBeLessThan(number)`**: <
- **`toBeCloseTo(number)`**: ఫ్లోటింగ్ పాయింట్ నంబర్స్ (ఉదా: 0.1 + 0.2) చెక్ చేయడానికి బెస్ట్. (ఎందుకంటే JS లో `0.1 + 0.2 !== 0.3` అవుతుంది).

```javascript
test("number operations", () => {
  expect(5).toBeGreaterThan(2);
  expect(0.1 + 0.2).toBeCloseTo(0.3); // ఇది పాస్ అవుతుంది
});
```

---

### 4. Arrays (అర్రేలు)

- **`toContain(item)`**: ఒక అర్రేలో నిర్దిష్ట ఎలిమెంట్ ఉందా లేదా అని చూడటానికి.
- **`toHaveLength(number)`**: అర్రే పొడవును (length) చెక్ చేయడానికి.

```javascript
const list = ["apple", "banana"];
expect(list).toContain("apple");
expect(list).toHaveLength(2);
```

---

### 5. Objects (ఆబ్జెక్ట్‌లు)

- **`toHaveProperty(keyPath)`**: ఆబ్జెక్ట్‌లో ఒక నిర్దిష్ట కీ ఉందో లేదో చూడటానికి.

```javascript
const user = { name: "Sai", age: 25 };
expect(user).toHaveProperty("name");
```

---

### 6. Strings (టెక్స్ట్)

- **`toMatch(regex)`**: ఒక స్ట్రింగ్ లో ఒక పదం ఉందా లేదా అని **Regular Expression** ద్వారా చెక్ చేయడానికి.

```javascript
test("string match", () => {
  expect("Hello World").toMatch(/Hello/);
});
```

---

### 7. Exceptions (ఎర్రర్స్)

- **`toThrow()`**: ఒక ఫంక్షన్ రన్ అయినప్పుడు ఎర్రర్ వస్తుందో లేదో టెస్ట్ చేయడానికి.

```javascript
function throwError() {
  throw new Error("Something went wrong");
}

test("should throw error", () => {
  expect(() => throwError()).toThrow("Something went wrong");
});
```

---

### ఒక చిన్న చిట్కా (Pro-Tip):

వీటన్నింటికీ రివర్స్‌లో కూడా చెక్ చేయవచ్చు. అంటే, లేదని చెప్పడానికి **`.not`** వాడండి.

- ఉదాహరణకు: `expect(a).not.toBe(b);` (అంటే a, b కి సమానం కాకూడదు అని).

---

# 4. Mocking (Most Important)

Jest.js లో **Mocking** అనేది అత్యంత శక్తివంతమైన మరియు ముఖ్యమైన ఫీచర్. నిజమైన APIలు లేదా డేటాబేస్‌లను కాల్ చేయకుండా, వాటికి బదులుగా మనం క్రియేట్ చేసిన నకిలీ (Mock) ఫంక్షన్లను వాడటమే 'Mocking'.

దీనివల్ల టెస్టులు చాలా వేగంగా జరుగుతాయి మరియు బాహ్య కారణాల వల్ల (ఉదా: సర్వర్ డౌన్ అవ్వడం) టెస్టులు ఫెయిల్ అవ్వవు.

---

### 1. Mock Functions (`jest.fn()`)

ఒక ఫంక్షన్ ఎలా పిలవబడుతుందో, ఏమి రిటర్న్ చేయాలో మనమే నిర్ణయించవచ్చు.

```javascript
const mockFunction = jest.fn();
mockFunction("Hello");

expect(mockFunction).toHaveBeenCalled(); // ఫంక్షన్ రన్ అయ్యిందా?
expect(mockFunction).toHaveBeenCalledWith("Hello"); // 'Hello' తో రన్ అయ్యిందా?
```

### 2. Mock Modules (`jest.mock()`)

ఒక పూర్తి ఫైల్ లేదా మోడ్యూల్‌ను (ఉదా: API కాల్స్ చేసే ఫైల్) మనం మాక్ చేయవచ్చు. దీనివల్ల అసలు API కాల్ వెళ్ళదు.

```javascript
// userApi.js ని మాక్ చేయడం
jest.mock("./userApi");
import { getUser } from "./userApi";

getUser.mockResolvedValue({ name: "Sai" });
```

### 3. Spy (`jest.spyOn()`)

ఒక ఫంక్షన్ యొక్క ఒరిజినల్ బిహేవియర్‌ని మార్చకుండా, అది ఎప్పుడు పిలవబడింది, ఎన్నిసార్లు పిలవబడింది అని ట్రాక్ చేయడానికి ఇది ఉపయోగపడుతుంది.

```javascript
const video = { play: () => true };
const spy = jest.spyOn(video, "play");
video.play();
expect(spy).toHaveBeenCalled();
```

---

### 4. Mock Return Values

ఇవి చాలా ముఖ్యం:

- **`mockReturnValue(value)`**: ఫంక్షన్ కాల్ చేసినప్పుడు సింపుల్ వాల్యూ రిటర్న్ చేస్తుంది.
- **`mockResolvedValue(value)`**: `async` ఫంక్షన్ సక్సెస్ అయినప్పుడు వచ్చే డేటాను మాక్ చేయడానికి (API కాల్స్ కోసం).
- **`mockRejectedValue(error)`**: `async` ఫంక్షన్ ఫెయిల్ అయినప్పుడు వచ్చే ఎర్రర్ ను మాక్ చేయడానికి.

---

### 5. Mock Cleanup

ప్రతి టెస్ట్ తర్వాత పాత మాక్ డేటాను క్లీన్ చేయకపోతే, టెస్టులు ఒకదానికొకటి ప్రభావితం అవుతాయి.

- **`clearAllMocks()`**: కాల్ హిస్టరీని క్లియర్ చేస్తుంది.
- **`resetAllMocks()`**: మాక్ చేసిన ఫంక్షన్లను డీఫాల్ట్ స్థితికి తెస్తుంది.
- **`restoreAllMocks()`**: `spyOn` ద్వారా చేసిన మార్పులను ఒరిజినల్ ఫంక్షన్‌కు మారుస్తుంది.

_సూచన: వీటిని సాధారణంగా `beforeEach` లేదా `afterEach` లో వాడతాము._

---

### 6. Practice Example: Mocking an API Call

ఒక `getUser` API ని టెస్ట్ చేయడం ఎలాగో చూడండి:

```javascript
// user.js
import axios from "axios";
export const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

// user.test.js
import { getUser } from "./user";
import axios from "axios";

jest.mock("axios"); // axios ను మాక్ చేశాం

test("should fetch user data", async () => {
  const user = { name: "Sai" };
  axios.get.mockResolvedValue({ data: user }); // API ని మాక్ చేశాం

  const result = await getUser(1);

  expect(result).toEqual(user);
  expect(axios.get).toHaveBeenCalledWith("/users/1");
});
```

---

**ముఖ్య గమనిక:**
Mocking అనేది ప్రాక్టీస్ చేస్తేనే బాగా అలవడుతుంది. మీరు ఇప్పుడు `jest.fn()` మరియు `mockResolvedValue()` ఉపయోగించి ఒక సింపుల్ API ఫంక్షన్‌ని మాక్ చేసి చూడండి.

---

# 5. Async Testing

Jest లో అసైన్‌క్రోనస్ (Asynchronous) కోడ్‌ను టెస్ట్ చేయడం చాలా కీలకం, ఎందుకంటే మనం రాసే చాలా కోడ్ API కాల్స్ లేదా డేటాబేస్ ఆపరేషన్లతో ముడిపడి ఉంటుంది. వీటిని ఎలా హ్యాండిల్ చేయాలో చూద్దాం.

---

### 1. Promise & Async/Await టెస్టింగ్

ఒక ఫంక్షన్ `Promise` ని రిటర్న్ చేసినప్పుడు లేదా `async` కీవర్డ్ వాడినప్పుడు, Jest కి ఆ ప్రామిస్ పూర్తయ్యే వరకు వేచి ఉండమని చెప్పాలి.

**ఉదాహరణ:**

```javascript
// ఒక async ఫంక్షన్
async function fetchData() {
  return "Data Received";
}

// టెస్ట్ ఎలా రాయాలి?
test("the data is Data Received", async () => {
  const data = await fetchData();
  expect(data).toBe("Data Received");
});
```

---

### 2. Resolves & Rejects (అడ్వాన్స్‌డ్ మెథడ్స్)

ప్రామిస్ రిజల్ట్ చెక్ చేయడానికి `await` వాడకుండా కూడా Jest లో నేరుగా `resolves` లేదా `rejects` ని వాడవచ్చు. ఇది కోడ్‌ని చాలా క్లీన్‌గా ఉంచుతుంది.

- **`.resolves`**: ప్రామిస్ సక్సెస్ అయితే.
- **`.rejects`**: ప్రామిస్ ఫెయిల్ అయితే (ఎర్రర్ వస్తే).

**ఉదాహరణ:**

```javascript
test("resolves to Data Received", async () => {
  await expect(fetchData()).resolves.toBe("Data Received");
});

test("rejects with an error", async () => {
  // fetchError ఫంక్షన్ ఒక ఎర్రర్‌ని ఇస్తుందని ఊహించుకుందాం
  await expect(fetchError()).rejects.toThrow("Error Occurred");
});
```

---

### 3. Callbacks

కొన్నిసార్లు పాత స్టైల్ కాల్‌బ్యాక్ ఫంక్షన్లను టెస్ట్ చేయాల్సి వస్తుంది. అప్పుడు Jest లో `done` అనే పారామీటర్‌ని వాడాలి. `done()` అని పిలిచిన తర్వాతే టెస్ట్ పూర్తవుతుంది.

```javascript
test("using callback", (done) => {
  function callback(data) {
    expect(data).toBe("Success");
    done(); // ఇది పిలవకపోతే టెస్ట్ ఎప్పటికీ ఆగదు
  }
  someAsyncFunction(callback);
});
```

---

### 4. API & Database Calls (Axios/Fetch)

రియల్ టైమ్‌లో మీరు API లేదా DBని టెస్ట్ చేసేటప్పుడు నిజమైన సర్వర్‌ని హిట్ చేయకూడదు. పైన మనం నేర్చుకున్న **Mocking**ని ఇక్కడ వాడాలి.

**Axios మాక్ ఉదాహరణ:**

```javascript
import axios from "axios";

test("fetches user correctly", async () => {
  const mockUser = { id: 1, name: "Sai" };
  // Axios ని మాక్ చేసి, డేటాను పంపిస్తున్నాం
  jest.spyOn(axios, "get").mockResolvedValue({ data: mockUser });

  const response = await getUserFromAPI(1);
  expect(response).toEqual(mockUser);
});
```

---

### మీరు గుర్తుంచుకోవాల్సినవి:

1. **`await` మర్చిపోకండి:** `async` టెస్ట్ రాసినప్పుడు `await` వాడకపోతే, టెస్ట్ ఆ ఫంక్షన్ రిజల్ట్ కోసం ఆగకుండానే పూర్తయిపోతుంది (ఫెయిల్ అవుతుంది).
2. **`done` వాడేటప్పుడు:** ఒకవేళ `done` పారామీటర్ వాడితే, దాన్ని తప్పనిసరిగా కాల్ చేయాలి, లేదంటే టెస్ట్ "Timeout" అవుతుంది.
3. **Reject టెస్టింగ్:** ఎప్పుడైనా ఎర్రర్స్ ని టెస్ట్ చేసేటప్పుడు `await expect(...).rejects` వాడటం బెస్ట్ ప్రాక్టీస్.

---

# 6. Advanced Matchers

Jest లో **Advanced Matchers** అనేవి చాలా పవర్‌ఫుల్. కొన్నిసార్లు మనకు కచ్చితమైన వాల్యూ తెలియదు (ఉదాహరణకు: ఐడి నంబర్ లేదా టైమ్‌స్టాంప్), కానీ ఆ వాల్యూ ఏ **రకానికి (type)** చెందినదో లేదా ఆబ్జెక్ట్‌లో **ఏ ప్రాపర్టీ ఉందో** తెలిస్తే చాలు. అప్పుడు ఈ మ్యాచర్స్ వాడతాం.

---

### 1. `expect.any(constructor)`

ఒక వాల్యూ నిర్దిష్ట టైప్‌లో ఉందో లేదో చెక్ చేయడానికి ఇది వాడతాం.

```javascript
test("check if the value is a number", () => {
  const result = 25;
  expect(result).toEqual(expect.any(Number)); // నంబర్ అయితే పాస్
});
```

- `expect.any(String)`, `expect.any(Boolean)`, `expect.any(Function)` అని కూడా వాడవచ్చు.

---

### 2. `expect.objectContaining(object)`

ఒక పెద్ద ఆబ్జెక్ట్‌లో మనకు కావాల్సిన ప్రాపర్టీస్ ఉన్నాయో లేదో చెక్ చేయడానికి. అంటే, ఆబ్జెక్ట్‌లో ఇంకా వేరే డేటా ఉన్నా పర్వాలేదు, కనీసం మనం చెప్పినవి ఉంటే చాలు.

```javascript
test("object contains specific properties", () => {
  const user = { name: "Sai", age: 25, role: "Admin" };

  // కేవలం name, age ఉందో లేదో చూస్తుంది
  expect(user).toEqual(
    expect.objectContaining({
      name: "Sai",
      age: 25,
    }),
  );
});
```

---

### 3. `expect.arrayContaining(array)`

ఒక అర్రేలో మనం చెప్పిన ఎలిమెంట్స్ అన్నీ ఉన్నాయా అని చెక్ చేస్తుంది. అర్రేలో ఎక్స్‌ట్రా ఎలిమెంట్స్ ఉన్నా ఇది పాస్ అవుతుంది.

```javascript
test("array contains required items", () => {
  const skills = ["JS", "React", "Jest", "Node"];

  expect(skills).toEqual(expect.arrayContaining(["JS", "React"]));
});
```

---

### 4. `expect.stringContaining(string)`

ఒక స్ట్రింగ్‌లో నిర్దిష్టమైన పదం (substring) ఉందో లేదో చెక్ చేయడానికి.

```javascript
test("string contains specific text", () => {
  const message = "Hello, Welcome to Jest learning";

  expect(message).toEqual(expect.stringContaining("Welcome"));
});
```

---

### 5. `expect.stringMatching(regex)`

స్ట్రింగ్ ఒక ప్యాటర్న్‌కి (Regular Expression) అనుగుణంగా ఉందో లేదో చెక్ చేయడానికి.

```javascript
test("string matches a pattern", () => {
  const email = "test@example.com";

  // ఇమెయిల్ ఫార్మాట్ లో ఉందా లేదా అని Regex తో చెక్ చేస్తున్నాం
  expect(email).toEqual(expect.stringMatching(/@example\.com$/));
});
```

---

### ఎందుకు ఇవి వాడాలి?

నిజమైన అప్లికేషన్లలో డేటా ఎప్పుడూ ఒకేలా ఉండదు. ఉదాహరణకు, ఒక యూజర్ క్రియేట్ అయినప్పుడు డేటాబేస్ నుండి వచ్చే **`id`** ప్రతిసారీ మారుతుంటుంది (ఉదా: 1, 2, 3...). అప్పుడు మీరు `expect(id).toBe(1)` అని రాస్తే టెస్ట్ ఫెయిల్ అవుతుంది.

దానికి బదులుగా `expect(id).toEqual(expect.any(Number))` అని రాస్తే, అది నంబర్ అవునా కాదా అని మాత్రమే చూస్తుంది. టెస్ట్ కేస్ ఫెయిల్ అవ్వదు!

---

# 7. Snapshot Testing

స్నాప్‌షాట్ టెస్టింగ్ అంటే మన కోడ్ యొక్క అవుట్‌పుట్ (ముఖ్యంగా UI లేదా పెద్ద ఆబ్జెక్ట్స్) ఎలా ఉందో ఒక ఫైల్‌లో సేవ్ చేసి పెట్టుకోవడం. తర్వాత టెస్ట్ రన్ చేసినప్పుడు, కోడ్ మారితే అది పాత స్నాప్‌షాట్‌తో పోల్చి చూస్తుంది.

- **`toMatchSnapshot()`**: ఇది మీ కోడ్ యొక్క అవుట్‌పుట్‌ని ఒక `.snap` ఫైల్‌లో సేవ్ చేస్తుంది.
- **Inline Snapshot**: ఇది స్నాప్‌షాట్ ఫైల్‌ని క్రియేట్ చేయకుండా, నేరుగా మీ టెస్ట్ ఫైల్‌లోనే కోడ్‌ని రాస్తుంది.
- **Snapshot Updates**: మీరు కోడ్‌ని కావాలనే మార్చినప్పుడు, పాత స్నాప్‌షాట్ ఫెయిల్ అవుతుంది. అప్పుడు `npm test -- -u` కమాండ్ వాడి కొత్త స్నాప్‌షాట్‌ను అప్‌డేట్ చేయవచ్చు.

**ఎప్పుడు వాడాలి?**
React కంపోనెంట్స్, పెద్ద JSON రెస్పాన్సులు లేదా మారని UI ఎలిమెంట్స్ టెస్ట్ చేయడానికి ఇది బెస్ట్.

---

# 8. Code Coverage (కోడ్ కవరేజ్)

మీరు రాసిన టెస్టులు ఎంత కోడ్‌ని కవర్ చేస్తున్నాయో తెలుసుకోవడానికి ఇది వాడతాం.

**ఎలా రన్ చేయాలి?**

```bash
npm test -- --coverage

```

ఇది టెర్మినల్‌లో ఒక రిపోర్ట్‌ను చూపిస్తుంది. `coverage/` అనే ఫోల్డర్‌లో HTML ఫార్మాట్‌లో పూర్తి వివరాలు ఉంటాయి.

#### అర్థం చేసుకోవాల్సినవి (Metrics):

1. **Statement Coverage**: మీరు రాసిన ప్రతి స్టేట్‌మెంట్ (line of code) టెస్ట్ అయ్యిందా?
2. **Branch Coverage**: `if/else` లాంటి కండిషన్లలోని రెండు వైపులా (True & False) టెస్ట్ అయ్యాయా?
3. **Function Coverage**: మీ కోడ్‌లోని అన్ని ఫంక్షన్లు కాల్ అయ్యాయా?
4. **Line Coverage**: కోడ్‌లోని అన్ని లైన్లు ఎగ్జిక్యూట్ అయ్యాయా?

#### Minimum Thresholds (కనీస లక్ష్యం):

ప్రాజెక్ట్ క్వాలిటీ కోసం, కనీసం ఇంత శాతం కోడ్ కవర్ అవ్వాలని మనం రూల్ పెట్టుకోవచ్చు. దీని కోసం `jest.config.js`లో ఇలా సెట్ చేస్తాం:

```javascript
// jest.config.js
module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

దీనివల్ల, ఒకవేళ మీ టెస్టులు కవరేజ్ 80% కంటే తక్కువ ఉంటే, Jest బిల్డ్ ప్రాసెస్‌ని ఫెయిల్ చేస్తుంది.

---

### ముగింపు

మనం Jest లో దాదాపు అన్ని ముఖ్యమైన టాపిక్స్ పూర్తి చేశాం!

1. **Fundamentals & Setup**
2. **Assertions (Matchers)**
3. **Mocking (API/DB)**
4. **Async Testing**
5. **Advanced Matchers**
6. **Snapshot Testing & Coverage**

ఇప్పుడు మీరు ఒక ప్రాజెక్ట్‌ను తీసుకొని చిన్న చిన్న ఫంక్షన్స్ రాసి, వాటికి టెస్టులు రాయడం మొదలుపెట్టండి. ఏవైనా సమస్యలు వస్తే మళ్ళీ అడగండి.

Jest నేర్చుకోవడంలో మీకు ఇంకేదైనా ప్రత్యేకమైన సందేహం ఉందా? లేదా ఏదైనా ప్రాజెక్ట్ ఐడియా ఉందా దానికి టెస్టులు రాయడానికి?

---

# 9. Jest Configuration

Jest కాన్ఫిగరేషన్ ఫైల్ (`jest.config.js`) అనేది మీ ప్రాజెక్ట్ యొక్క టెస్టింగ్ సెట్టింగ్స్‌ని కంట్రోల్ చేసే ఒక మెదడు లాంటిది. పెద్ద ప్రాజెక్టులలో టెస్టులు సరిగ్గా రన్ అవ్వడానికి ఇది చాలా ముఖ్యం.

దీనిలోని ముఖ్యమైన అంశాలను అర్థం చేసుకుందాం:

---

### 1. `jest.config.js` మరియు ప్రాథమిక సెట్టింగ్స్

మీరు `npx jest --init` కమాండ్ రన్ చేస్తే ఈ ఫైల్ క్రియేట్ అవుతుంది.

- **`testEnvironment`**: మీ కోడ్ ఎక్కడ రన్ అవ్వాలో చెబుతుంది.
- `node`: బ్యాకెండ్ (Node.js) ప్రాజెక్టుల కోసం.
- `jsdom`: ఫ్రంటెండ్ (React/DOM) ప్రాజెక్టుల కోసం.

- **`testTimeout`**: ఒక టెస్ట్ పూర్తి అవ్వడానికి పట్టే గరిష్ట సమయం (Default: 5000ms). ఇది మించితే టెస్ట్ ఫెయిల్ అవుతుంది.

### 2. TypeScript సపోర్ట్ (`ts-jest`)

మీరు TypeScript వాడుతుంటే, Jest కి `.ts` ఫైల్స్‌ని ఎలా ప్రాసెస్ చేయాలో తెలియదు. దానికోసం `ts-jest` వాడతాం.

```javascript
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

### 3. Setup Files (ప్రారంభ సెట్టింగ్స్)

టెస్టులు మొదలవ్వకముందే కొన్ని పనులు చేయాల్సి వస్తుంది:

- **`setupFiles`**: ప్రతి టెస్ట్ ఫైల్ కంటే ముందే రన్ అయ్యే ఫైల్స్ (ఉదా: పర్యావరణ వేరియబుల్స్ - Environment Variables సెట్ చేయడం).
- **`setupFilesAfterEnv`**: Jest ఫ్రేమ్‌వర్క్ రెడీ అయ్యాక రన్ అవుతుంది. సాధారణంగా **Custom Matchers** లేదా **Global Setup** (ఉదా: `jest-dom` ని యాడ్ చేయడం) కోసం ఇది వాడతారు.

### 4. `moduleNameMapper` (ముఖ్యమైనది)

ప్రాజెక్ట్‌లో మనం `import` చేసేటప్పుడు `@/components/Button` అని వాడుతుంటాం. Jest కి ఇలాంటి అలియాస్ (Alias) అర్థం కాదు. దాన్ని మ్యాప్ చేయడానికి ఇది వాడతాం.

```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
},

```

### 5. కవరేజ్ సెట్టింగ్స్ (Coverage)

మనం ముందుగా చూసినట్లుగా, వీటిని ఇక్కడ పర్మనెంట్‌గా సెట్ చేయవచ్చు:

- **`collectCoverage`**: `true` అని పెడితే, ప్రతిసారీ టెస్ట్ రన్ చేసినప్పుడు కవరేజ్ రిపోర్ట్ జనరేట్ అవుతుంది.
- **`coverageThreshold`**: కవరేజ్ పర్సంటేజ్ ఎంత ఉండాలో ఇక్కడ డిఫైన్ చేస్తాం.

### 6. `testPathIgnorePatterns`

కొన్ని ఫోల్డర్లు లేదా ఫైల్స్ టెస్టింగ్ పరిధిలోకి రాకూడదు (ఉదా: `node_modules`, `dist` లేదా `build` ఫోల్డర్స్). వాటిని ఇక్కడ ఇగ్నోర్ చేయవచ్చు.

```javascript
testPathIgnorePatterns: ['/node_modules/', '/dist/'],

```

---

### ఒక పూర్తి ఉదాహరణ (`jest.config.js`):

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      lines: 70,
    },
  },
  testTimeout: 10000,
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
```

---

### ఎలా ప్రాక్టీస్ చేయాలి?

1. మీరు ఒక రియల్ ప్రాజెక్ట్ క్రియేట్ చేయండి.
2. `jest.config.js` ఫైల్‌ను క్రియేట్ చేసి పైన ఉన్న సెట్టింగ్స్‌ని ట్రై చేయండి.
3. `ts-jest` వాడి టైప్‌స్క్రిప్ట్ కోడ్‌ని టెస్ట్ చేయండి.

మీరు Jest మొత్తం సిలబస్ పూర్తి చేశారు! ఇప్పుడు ఒక చిన్న రియల్-వరల్డ్ ప్రాజెక్ట్ (ఉదా: ఒక Calculator లేదా To-Do App) తీసుకొని, పైన నేర్చుకున్న కాన్సెప్ట్స్ అన్నీ వాడి టెస్ట్ కేస్ రాయడానికి ప్రయత్నించండి.

---

# 10. TypeScript + Jest

TypeScript తో Jest ని వాడటం వల్ల మన టెస్టులకు **Type Safety** వస్తుంది. అంటే, టెస్టులు రాసేటప్పుడే కోడ్‌లో ఏవైనా మిస్టేక్స్ (ఉదా: తప్పుడు డేటా టైప్స్) ఉంటే TypeScript మనకు ముందే వార్నింగ్ ఇస్తుంది.

---

### 1. ఇన్‌స్టాలేషన్ (Installation)

ముందుగా TypeScript కోసం అవసరమైన ప్యాకేజీలను ఇన్‌స్టాల్ చేయాలి:

```bash
npm install --save-dev ts-jest @types/jest typescript

```

తర్వాత `jest.config.js` లో `preset: 'ts-jest'` అని సెట్ చేయాలి (మనం ముందే చూసాం).

---

### 2. Practice: TypeScript లో టెస్టింగ్ ఎలా?

#### A. Test Interfaces & DTOs (Data Transfer Objects)

డేటా ఎలా ఉండాలో ముందే డిఫైన్ చేయడం వల్ల టెస్టింగ్ ఈజీ అవుతుంది.

```typescript
// types.ts
export interface User {
  id: number;
  name: string;
}

// user.test.ts
import { User } from "./types";

test("user object structure", () => {
  const user: User = { id: 1, name: "Sai" };
  expect(user).toHaveProperty("id", 1);
  expect(typeof user.name).toBe("string");
});
```

#### B. Utility Functions

టైప్‌స్క్రిప్ట్ ఫంక్షన్లను టెస్ట్ చేయడం చాలా సులభం:

```typescript
// utils.ts
export const formatName = (first: string, last: string): string =>
  `${first} ${last}`;

// utils.test.ts
test("formats name correctly", () => {
  const result = formatName("Sai", "Kiran");
  expect(result).toBe("Sai Kiran");
});
```

#### C. Generic Functions (అత్యంత ముఖ్యమైనవి)

Generic functions ని టెస్ట్ చేసేటప్పుడు కూడా టైప్స్ కరెక్ట్‌గా వస్తున్నాయో లేదో చెక్ చేయాలి.

```typescript
// generic.ts
export function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

// generic.test.ts
test("generic function with numbers", () => {
  const nums = [1, 2, 3];
  expect(getFirstItem<number>(nums)).toBe(1);
});

test("generic function with strings", () => {
  const strings = ["a", "b"];
  expect(getFirstItem<string>(strings)).toBe("a");
});
```

---

### టైప్‌స్క్రిప్ట్ టెస్టింగ్‌లో మీరు గమనించాల్సినవి:

1. **Type Safety**: ఒకవేళ మీరు `getFirstItem<number>(['a', 'b'])` అని రాస్తే, టైప్‌స్క్రిప్ట్ వెంటనే ఎర్రర్ చూపిస్తుంది. టెస్ట్ రన్ అవ్వకముందే ఇది మనకు సహాయపడుతుంది.
2. **`@types/jest`**: ఇది ఇన్‌స్టాల్ చేయడం వల్ల `test()`, `expect()`, `describe()` వంటి వాటికి ఆటో-కంప్లీషన్ (IntelliSense) వస్తుంది.
3. **Mocking with Types**: మీరు మాక్ చేసేటప్పుడు ఆ ఫంక్షన్ యొక్క టైప్స్‌ని కూడా పాస్ చేయవచ్చు.

- ఉదా: `const mockFn = jest.fn<ReturnType, ArgumentsType>();`

---

**మొత్తం మీద మీరు ఇప్పుడు Jest ని అద్భుతంగా నేర్చుకున్నారు!**
ఇప్పుడు మీ దగ్గర ఉన్న అన్ని టాపిక్స్ పూర్తయ్యాయి.

- **చివరి సలహా:** మీరు ఏదైనా ప్రాజెక్ట్ డెవలప్ చేసేటప్పుడు, పైన చెప్పిన విధంగా **Interface-driven testing** ఫాలో అవ్వండి. ఇది మీ కోడ్‌ను మరింత సురక్షితంగా మరియు సులభంగా అర్థమయ్యేలా చేస్తుంది.

---

# 11. NestJS Testing ⭐

NestJS లో టెస్టింగ్ అనేది చాలా క్రమబద్ధంగా ఉంటుంది, ఎందుకంటే NestJS **Dependency Injection (DI)** మీద ఆధారపడి పనిచేస్తుంది. NestJS టెస్టింగ్ కోసం `TestingModule` అనే ఒక అద్భుతమైన ఫీచర్‌ను అందిస్తుంది.

ఇప్పుడు వీటిని సులభంగా అర్థం చేసుకుందాం:

---

### 1. TestingModule అంటే ఏమిటి?

NestJS అప్లికేషన్‌లో సర్వీసులు, కంట్రోలర్లు అన్నీ ఒకదానికొకటి డిపెండెంట్ అయి ఉంటాయి. `TestingModule` ద్వారా మనం ఒక చిన్న అప్లికేషన్ కంటైనర్‌ను క్రియేట్ చేసి, అందులో కావాల్సిన డిపెండెన్సీలను మాక్ (Mock) చేసుకోవచ్చు.

**సింటాక్స్:**

```typescript
const module: TestingModule = await Test.createTestingModule({
  controllers: [UserController],
  providers: [UserService],
}).compile();
```

---

### 2. Unit Testing in NestJS

#### A. Services టెస్టింగ్ (Mock Repository)

NestJS లో డేటాబేస్ కోసం `TypeORM` వాడితే, `getRepositoryToken` వాడి మాక్ చేయాలి.

```typescript
const mockUserRepository = {
  find: jest.fn().mockResolvedValue([]),
};

const module = await Test.createTestingModule({
  providers: [
    UserService,
    { provide: getRepositoryToken(User), useValue: mockUserRepository },
  ],
}).compile();
```

#### B. Controllers టెస్టింగ్

కంట్రోలర్ టెస్ట్ చేసేటప్పుడు, సర్వీస్‌ను మాక్ చేయడం ముఖ్యం.

```typescript
const mockUserService = {
  findAll: jest.fn().mockReturnValue(["user1"]),
};

// Test setup లో
providers: [{ provide: UserService, useValue: mockUserService }];
```

---

### 3. Mock Providers (useValue, useFactory, useClass)

డిపెండెన్సీలను మాక్ చేయడానికి NestJS మూడు రకాలుగా అనుమతిస్తుంది:

- **`useValue`**: సింపుల్ ఆబ్జెక్ట్ లేదా వాల్యూని మాక్ చేయడానికి (చాలా తరచుగా వాడతాం).
- **`useFactory`**: డైనమిక్‌గా మాక్ వాల్యూ కావాల్సినప్పుడు (ఉదా: ప్రతి టెస్ట్ కేస్‌కి వేరే డేటా కావాలంటే).
- **`useClass`**: ఒక పూర్తి క్లాస్‌ని మాక్ ఇంప్లిమెంటేషన్‌తో రీప్లేస్ చేయడానికి.

```typescript
{ provide: UserService, useClass: MockUserServiceClass }

```

---

### 4. Dependency Injection Testing (Guards, Pipes, Filters, Interceptors)

NestJS లో ఇవి అన్నీ `Injectable` క్లాసులే కాబట్టి, వీటిని టెస్ట్ చేయడం చాలా ఈజీ.

- **Guards/Pipes:** వీటిలో ఉండే `canActivate` లేదా `transform` మెథడ్స్‌ను నేరుగా కాల్ చేసి చెక్ చేయవచ్చు.
- **Interceptors:** `handle()` మెథడ్ ఎలా రెస్పాన్స్‌ను మారుస్తుందో టెస్ట్ చేయాలి.

---

### 5. ప్రాక్టీస్ చేయడానికి ఒక చిన్న గైడ్

NestJS టెస్టింగ్ లో విజయం సాధించడానికి ఈ స్టెప్స్ ఫాలో అవ్వండి:

1. **Isolation:** ఒక టెస్ట్ కేస్ రాస్తున్నప్పుడు, అది వేరే ఏ సర్వీస్ పైన ఆధారపడకుండా, అన్నీ మాక్ (Mock) చేయబడ్డాయని నిర్ధారించుకోండి.
2. **`compile()`**: టెస్ట్ రన్ అవ్వడానికి ముందు `module.compile()` ని కాల్ చేయడం మర్చిపోవద్దు.
3. **`get()`**: టెస్టింగ్ మాడ్యూల్ నుండి సర్వీస్ లేదా కంట్రోలర్ ఇన్‌స్టాన్స్ పొందడానికి `module.get<UserService>(UserService)` ని వాడండి.

**ఒక ఉదాహరణ (Complete Service Test):**

```typescript
describe("UserService", () => {
  let service: UserService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: { find: jest.fn() } },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get(getRepositoryToken(User));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
```

---

# 12. Database Testing

NestJS లో Database Testing మరియు Integration Testing అనేవి అప్లికేషన్ యొక్క విశ్వసనీయతను (Reliability) పెంచుతాయి. వీటి గురించి వివరంగా చూద్దాం.

---

### 1. Database Testing: ఎలా చేయాలి?

డేటాబేస్ టెస్టింగ్ చేయడానికి ప్రధానంగా రెండు పద్ధతులు ఉన్నాయి:

- **Mock Repository (సులభమైన పద్ధతి):**
  పైన మనం చూసినట్లుగా `useValue` ద్వారా Repositoryని మాక్ చేయడం. ఇది వేగంగా ఉంటుంది కానీ డేటాబేస్ లోని Queries (ఉదా: SQL JOINs, Constraints) సరిగ్గా పనిచేస్తున్నాయో లేదో చెక్ చేయలేదు.
- **In-memory Database (ఉత్తమ పద్ధతి):**
  `SQLite` లేదా `mongodb-memory-server` వంటి వాటిని వాడి, టెస్ట్ రన్ అయ్యేటప్పుడు మెమరీలో డేటాబేస్‌ని క్రియేట్ చేయడం. ఇది నిజమైన DB క్వెరీలను టెస్ట్ చేయడానికి ఉపయోగపడుతుంది.
- **Transactions & Rollbacks:**
  ప్రతి టెస్ట్ కేస్ తర్వాత డేటాబేస్‌ను క్లీన్ చేయడానికి **Database Transactions** వాడతాము. టెస్ట్ పూర్తయ్యాక `rollback` చేయడం వల్ల పాత డేటా తర్వాతి టెస్ట్‌లకు ఇబ్బంది కలిగించదు.

---

# 13. Integration Testing

ఇక్కడ మనం కేవలం ఒక ఫంక్షన్‌ని టెస్ట్ చేయకుండా, రిక్వెస్ట్ ఒక పద్ధతిలో ఎలా వెళ్తుందో టెస్ట్ చేస్తాం:
**Controller → Service → Repository → Database**

NestJS లో దీన్ని **E2E (End-to-End) Testing** అంటారు.

**ఎలా సెటప్ చేయాలి?**
`supertest` అనే లైబ్రరీని ఉపయోగించి అప్లికేషన్‌కి నిజమైన HTTP రిక్వెస్ట్‌లు పంపి టెస్ట్ చేస్తాం.

```typescript
import * as request from "supertest";
import { Test } from "@nestjs/testing";

describe("UserController (e2e)", () => {
  let app;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule], // మొత్తం యాప్ మాడ్యూల్ ని లోడ్ చేస్తాం
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it("/users (POST)", () => {
    return request(app.getHttpServer())
      .post("/users")
      .send({ name: "Sai", email: "sai@test.com" })
      .expect(201); // Created status
  });
});
```

---

### 3. Practice Checklist (ముఖ్యమైన అంశాలు)

మీరు ఒక పూర్తి స్థాయి ఫీచర్‌ని టెస్ట్ చేసేటప్పుడు ఇవి కవర్ చేయండి:

| అంశం               | టెస్ట్ చేయాల్సినవి                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **CRUD APIs**      | GET, POST, PUT, DELETE మెథడ్స్ డేటాను సరిగ్గా సేవ్ చేస్తున్నాయా/తెస్తున్నాయా?            |
| **Authentication** | సరైన Token లేకపోతే 401 Unauthorised వస్తుందా?                                            |
| **Authorization**  | Admin పర్మిషన్ లేని యూజర్ కి ఏవైనా రిస్ట్రిక్టెడ్ APIలు అందుతున్నాయా?                    |
| **Validation**     | తప్పుడు డేటా (ఉదా: ఇమెయిల్ లేకుండా) పంపితే 400 Bad Request వస్తుందా? (`class-validator`) |

---

### చివరగా: సక్సెస్ అవ్వడానికి టిప్స్ (Pro-Tips)

1. **Test Environment:** టెస్టింగ్ కోసం `test.env` ఫైల్ వాడుకోండి. ఇది డెవలప్‌మెంట్ డేటాబేస్‌ని పాడు చేయదు.
2. **Seeding:** టెస్ట్ రన్ అవ్వకముందే టెస్టింగ్ డేటాను (Seed data) DBలోకి పంపడం ప్రాక్టీస్ చేయండి.
3. **Clean Up:** `afterAll(async () => { await app.close(); })` అని వాడి, టెస్ట్ పూర్తయ్యాక కనెక్షన్స్ అన్నీ క్లోజ్ చేయండి.

---

# 14. API Testing

NestJS అప్లికేషన్లలో API ఎండ్-పాయింట్స్ అన్నీ సరిగ్గా పనిచేస్తున్నాయో లేదో చెక్ చేయడానికి **Supertest** అత్యంత పాపులర్ లైబ్రరీ. ఇది NestJS లోని `createNestApplication()` తో కలిసి అద్భుతంగా పనిచేస్తుంది.

---

### 1. Supertest అంటే ఏమిటి?

ఇది ఒక HTTP టెస్టింగ్ లైబ్రరీ. మనం బ్రౌజర్ లేదా Postman వాడకుండా, కోడ్ ద్వారానే API కి రిక్వెస్ట్ పంపి, వచ్చే రెస్పాన్స్‌ని చెక్ చేయవచ్చు.

### 2. ప్రాక్టీస్: CRUD API Testing

ఒక యూజర్ API ని ఎలా టెస్ట్ చేయాలో చూద్దాం:

```typescript
import * as request from "supertest";

describe("Users API (e2e)", () => {
  // GET: డేటా పొందడం
  it("/users (GET)", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect(200) // Status Code
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true); // Validation
      });
  });

  // POST: కొత్త డేటా క్రియేట్ చేయడం
  it("/users (POST)", () => {
    return request(app.getHttpServer())
      .post("/users")
      .send({ name: "Sai", email: "sai@example.com" })
      .expect(201);
  });
});
```

---

### 3. అడ్వాన్స్‌డ్ టెస్టింగ్ అంశాలు

#### A. Headers & Cookies

ఒకవేళ మీ APIకి హెడర్స్ లేదా కుకీస్ అవసరమైతే, ఇలా పంపవచ్చు:

```typescript
request(app.getHttpServer())
  .get("/profile")
  .set("Authorization", "Bearer your-jwt-token") // Headers
  .set("Cookie", ["session=abc123"]) // Cookies
  .expect(200);
```

#### B. JWT & Authentication

టెస్ట్ చేసేటప్పుడు నిజమైన లాగిన్ ప్రాసెస్ కాకుండా, ఒక డమ్మీ JWT టోకెన్‌ను జనరేట్ చేసి హెడర్‌లో పంపి టెస్ట్ చేయండి.

#### C. Validation Errors

తప్పుడు డేటా పంపినప్పుడు మీ `DTO` వాలిడేషన్స్ సరిగ్గా పనిచేస్తున్నాయో లేదో చెక్ చేయడం చాలా ముఖ్యం:

```typescript
it("should return 400 if email is invalid", () => {
  return request(app.getHttpServer())
    .post("/users")
    .send({ name: "Sai" }) // email మిస్ అయ్యింది
    .expect(400); // Bad Request
});
```

---

### టెస్టింగ్ చెక్‌లిస్ట్ (API Testing Checklist)

| రిక్వెస్ట్ రకం | టెస్ట్ చేయాల్సిన విషయాలు                                   |
| -------------- | ---------------------------------------------------------- |
| **GET**        | పారామీటర్స్, క్వెరీ స్ట్రింగ్స్, 200 OK, 404 Not Found     |
| **POST/PUT**   | రిక్వెస్ట్ బాడీ, వాలిడేషన్ ఎర్రర్స్, 201 Created           |
| **PATCH**      | పాక్షిక అప్‌డేట్స్ (Partial Update) సరిగ్గా జరుగుతున్నాయా? |
| **DELETE**     | ఐటమ్ డిలీట్ అయ్యాక 200 లేదా 204 స్టేటస్ వస్తుందా?          |

---

### మీరు ఎలా ప్రాక్టీస్ చేయాలి?

1. మీ ప్రాజెక్ట్‌లో `supertest` ఇన్‌స్టాల్ చేయండి: `npm install --save-dev supertest`.
2. పైన చెప్పిన విధంగా `GET`, `POST`, `DELETE` ల కోసం `*.e2e-spec.ts` ఫైల్స్‌లో టెస్టులు రాయండి.
3. ప్రతి టెస్ట్‌లోనూ **Status Code** (200, 201, 400, 401, 403, 404, 500) చెక్ చేయడం అలవాటు చేసుకోండి.

---

# 15. E2E Testing

NestJS లో **E2E (End-to-End) Testing** అనేది అప్లికేషన్ యొక్క మొత్తం ఫ్లోను (HTTP రిక్వెస్ట్ నుండి డేటాబేస్ రెస్పాన్స్ వరకు) టెస్ట్ చేస్తుంది. మీరు అడిగిన ఈ ఫ్లోలు రియల్-వరల్డ్ అప్లికేషన్‌లలో చాలా కీలకమైనవి.

---

### 1. `npm run test:e2e` అంటే ఏమిటి?

ఇది NestJS డిఫాల్ట్‌గా ఇచ్చే కమాండ్. ఇది సాధారణంగా `jest-e2e.json` అనే కాన్ఫిగరేషన్ ఫైల్‌ని వాడుకుని, `*.e2e-spec.ts` ఫైల్స్‌ను రన్ చేస్తుంది. ఇది మీ మొత్తం అప్లికేషన్‌ను ఒక "Test Instance"లో స్టార్ట్ చేస్తుంది.

---

### 2. ప్రాక్టీస్ ఫ్లో (Scenario-based Testing)

E2E టెస్టింగ్‌లో ముఖ్యమైనది ఏమిటంటే, ఒక టెస్ట్ తర్వాత వచ్చే ఫలితాన్ని (ఉదా: Token) తదుపరి టెస్ట్‌కు పంపడం.

#### A. Auth Flow (Signup -> Login -> JWT)

```typescript
describe("Authentication (e2e)", () => {
  let accessToken: string;

  it("should signup a new user", () => {
    return request(app.getHttpServer())
      .post("/auth/signup")
      .send({ email: "test@test.com", password: "password123" })
      .expect(201);
  });

  it("should login and return a JWT", async () => {
    const res = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: "test@test.com", password: "password123" })
      .expect(200);

    accessToken = res.body.accessToken; // తర్వాత వాడటానికి సేవ్ చేసుకున్నాం
    expect(accessToken).toBeDefined();
  });
});
```

#### B. RBAC (Role-Based Access Control)

యూజర్ పాత్రను బట్టి API యాక్సెస్ ఉందో లేదో చూడాలి:

```typescript
it("should deny admin access to a regular user", () => {
  return request(app.getHttpServer())
    .get("/admin/dashboard")
    .set("Authorization", `Bearer ${userToken}`) // సాధారణ యూజర్ టోకెన్
    .expect(403); // Forbidden
});
```

#### C. Refresh Token Flow

ఇది చాలా ముఖ్యమైనది:

1. పాత Token తో రిక్వెస్ట్ పంపండి.
2. `POST /auth/refresh` కాల్ చేయండి.
3. కొత్త టోకెన్ వస్తుందో లేదో చూడండి.
4. మళ్ళీ ఆ కొత్త టోకెన్ తో API కాల్ చేసి పనిచేస్తుందో లేదో చూడండి.

---

### 3. E2E టెస్టింగ్ కోసం ముఖ్యమైన చిట్కాలు

- **Isolation:** ప్రతి టెస్ట్ ఫైల్ రన్ అయినప్పుడు కొత్త డేటాబేస్ ఉండాలి లేదా టెస్ట్ డేటాను క్లీన్ చేయాలి. ( `beforeEach` లో క్లీనప్ చేయండి).
- **Environment Variables:** టెస్టింగ్ కోసం ప్రత్యేకమైన `.env.test` ఫైల్‌ని వాడండి.
- **Database Transactions:**
- ప్రతి టెస్ట్ కేస్ ప్రారంభంలో ఒక **Transaction** మొదలుపెట్టండి.
- టెస్ట్ పూర్తయ్యాక ఆ ట్రాన్సాక్షన్‌ను **Rollback** చేయండి. దీనివల్ల డేటాబేస్ ఎప్పుడూ ఫ్రెష్‌గా ఉంటుంది.

- **Supertest Chains:** `.send()` తర్వాత `.set()` వాడి టోకెన్స్ పంపడం అలవాటు చేసుకోండి.

---

### మీరు ఇప్పుడు నేర్చుకున్న 15 అంశాల సారాంశం:

1. **Testing Basics:** TDD, BDD, AAA ప్యాటర్న్.
2. **Jest Core:** Matchers, Mocking, Async.
3. **TypeScript Integration:** Types, Generics.
4. **NestJS Specific:** TestingModule, Dependency Injection.
5. **Database & API:** Integration Testing, Supertest, E2E.

**అభినందనలు!** మీరు Jest మరియు NestJS టెస్టింగ్ ప్రపంచంలో అత్యంత ముఖ్యమైన అన్ని అంశాలను కవర్ చేశారు.

ఇప్పుడు మీరు ఏమి చేయాలనుకుంటున్నారు?

1. ఏదైనా ఒక అంశంపై పూర్తి కోడ్ ఎగ్జాంపుల్ కావాలా?
2. మీ ప్రస్తుత ప్రాజెక్ట్‌లోని కోడ్‌ని రివ్యూ చేయమంటారా?
3. మీరు ఒక చిన్న "Mock Test" క్రియేట్ చేసి చూపించమంటారా?

---

# 16. Mock External Services

సాఫ్ట్‌వేర్ డెవలప్‌మెంట్‌లో బయట సేవలను (External Services) టెస్ట్ చేయడం చాలా కీలకమైన అంశం. ఎందుకంటే మనం నిజమైన AWS సేవలను లేదా Stripeని టెస్ట్ చేసేటప్పుడు డబ్బులు కట్ అవ్వడం లేదా సర్వర్ కాస్ట్ పెరగడం వంటివి జరగకూడదు.

వీటిని టెస్ట్ చేయడానికి **Mocking** ఒక్కటే మార్గం. వీటిని ఎలా మాక్ చేయాలో చూద్దాం:

---

### 1. Mocking External Services (Strategy)

ఏ ఎక్స్టర్నల్ సర్వీస్ అయినా సరే, మనం దాన్ని `jest.mock()` ద్వారా మాక్ చేయాలి.

#### A. AWS SDK (S3, SES, etc.)

AWS SDK v3 లో `client` ని మాక్ చేసి, దానికి వచ్చే `command` ని హ్యాండిల్ చేయాలి.

```typescript
// S3 మాక్ ఉదాహరణ
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { mockClient } from "aws-sdk-client-mock"; // aws-sdk-client-mock లైబ్రరీ వాడటం మంచిది

const s3Mock = mockClient(S3Client);

beforeEach(() => {
  s3Mock.reset();
});

test("should upload file to s3", async () => {
  s3Mock.on(PutObjectCommand).resolves({ ETag: "123" });
  // ... మీ సర్వీస్ కాల్ ఇక్కడ రాయండి
});
```

#### B. Redis / Kafka / RabbitMQ

ఇవి సాధారణంగా `Client` లేదా `Publisher` క్లాసుల ద్వారా పనిచేస్తాయి. వీటిని మాక్ చేసేటప్పుడు కనెక్షన్‌ని మాక్ చేయకూడదు, కేవలం `send`, `publish`, లేదా `get` పద్ధతులను మాక్ చేయాలి.

```typescript
// Redis Mock
const mockRedis = {
  get: jest.fn().mockResolvedValue("cached_value"),
  set: jest.fn().mockResolvedValue("OK"),
};
```

#### C. Stripe / Twilio (External APIs)

ఇవి కేవలం `axios` లేదా `fetch` ద్వారా కాల్ చేసేవి కాబట్టి, ఆ లైబ్రరీలను మాక్ చేయడం సులభం.

```typescript
// Stripe Mock
jest.mock("stripe", () => {
  return jest.fn().mockImplementation(() => ({
    charges: {
      create: jest
        .fn()
        .mockResolvedValue({ id: "ch_123", status: "succeeded" }),
    },
  }));
});
```

---

### 2. ఏ విధంగా మాక్ చేయాలి? (The "Best Practices")

1. **Don't Mock Libraries, Mock Service Wrappers:** నేరుగా `aws-sdk`ని మాక్ చేసే కంటే, మీ కోడ్‌లో ఒక `StorageService` ని క్రియేట్ చేసి, దాన్ని టెస్ట్ చేయడం మంచిది. అప్పుడు మీ కోడ్ మారినా, `jest.mock('./storage.service')` చేస్తే సరిపోతుంది.
2. **`jest.mock()`:** పూర్తి మోడ్యూల్‌ను మాక్ చేయడానికి దీన్ని వాడండి.

```typescript
jest.mock("@nestjs/microservices", () => ({
  ClientProxy: jest.fn().mockImplementation(() => ({
    send: jest.fn().mockReturnValue(of({ data: "success" })),
  })),
}));
```

3. **Use `jest.spyOn()` for existing instances:** ఒక ఫంక్షన్ ఇప్పటికే రన్ అవుతుంటే, దానిని టెంపరరీగా మాక్ చేయడానికి ఇది వాడండి.

---

### 3. ప్రాక్టీస్ కోసం చిట్కా:

ఎక్స్టర్నల్ సర్వీసెస్ టెస్టింగ్ కోసం మీ ప్రాజెక్ట్‌లో ఇలాంటి స్ట్రక్చర్ పాటించండి:

- **Service Layer:** మీరు ఒక `PaymentService` రాస్తే, దాని లోపల Stripe లాజిక్ ఉంటుంది.
- **Test:** ఆ `PaymentService`ని టెస్ట్ చేసేటప్పుడు `Stripe` ని మాక్ చేయండి.

**ఉదాహరణ - External API:**

```typescript
test("should call external weather API", async () => {
  const axios = require("axios");
  jest.spyOn(axios, "get").mockResolvedValue({ data: { temp: 30 } });

  const temp = await weatherService.getTemp("Hyderabad");
  expect(temp).toBe(30);
});
```

---

# 17. CI/CD Integration

టెస్టింగ్ అనేది కోడ్ రాయడం ఎంత ముఖ్యమో, దాన్ని ఆటోమేటిక్ చేయడం (CI/CD) కూడా అంతే ముఖ్యం. మీ కోడ్‌లో ఏ చిన్న మార్పు చేసినా, అది పాత కోడ్‌ను పాడు చేయకుండా ఉండేలా **CI/CD Pipeline** ని సెటప్ చేయాలి.

---

### 1. CI (Continuous Integration) లో Jest ని రన్ చేయడం

CI టూల్స్ లో Jest రన్ చేయడానికి సాధారణంగా మనం ఆపరేటింగ్ సిస్టమ్‌లో `npm install` మరియు `npm test` రన్ చేస్తాం.

**GitHub Actions ఉదాహరణ (`.github/workflows/ci.yml`):**

```yaml
name: Test Jest
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run Jest Tests
        run: npm test -- --coverage # కవరేజ్ రిపోర్ట్ తో రన్ అవుతుంది
```

---

### 2. రిపోర్ట్స్ జనరేట్ చేయడం (Reporting)

CI/CD లో కేవలం టెస్టులు పాస్ అయ్యాయా లేదా అని చూడటమే కాకుండా, రిపోర్ట్స్ చూడటం చాలా ముఖ్యం.

#### A. JUnit Reports (CI టూల్స్ కోసం)

Jenkins లేదా GitLab వంటివి టెస్ట్ రిజల్ట్స్‌ని XML ఫార్మాట్‌లో చూడటానికి ఇష్టపడతాయి.

1. `jest-junit` ని ఇన్‌స్టాల్ చేయండి: `npm install --save-dev jest-junit`
2. `package.json` లో రిపోర్టర్ ని యాడ్ చేయండి:

```json
"jest": {
  "reporters": ["default", "jest-junit"]
}

```

ఇది `junit.xml` ఫైల్‌ని జనరేట్ చేస్తుంది.

#### B. HTML Coverage Reports

మనం ఇంతకుముందు చూసినట్లుగా, `npm test -- --coverage` రన్ చేస్తే `coverage/lcov-report/index.html` అనే ఫైల్ క్రియేట్ అవుతుంది. దీన్ని మీరు CI/CD పైప్‌లైన్‌లో "Artifacts" గా సేవ్ చేసుకోవచ్చు.

---

### 3. CI/CD Pipeline లో ముఖ్యమైన స్టెప్స్

| స్టెప్               | ప్రయోజనం                                                                 |
| -------------------- | ------------------------------------------------------------------------ |
| **Linting**          | కోడ్ స్టైల్ కరెక్ట్‌గా ఉందో లేదో చూస్తుంది.                              |
| **Unit Tests**       | ఫంక్షన్లు సరిగ్గా పనిచేస్తున్నాయో లేదో చూస్తుంది.                        |
| **Coverage Check**   | టెస్ట్ కవరేజ్ 80% ఉందో లేదో చెక్ చేస్తుంది.                              |
| **Artifacts Upload** | రిపోర్ట్స్ (HTML/JUnit) ని సేవ్ చేస్తుంది, ఎవరైనా డౌన్‌లోడ్ చేసుకోవచ్చు. |

---

### 4. ఒక పూర్తి ప్రాక్టీస్ ప్లాన్

మీరు రియల్ ప్రాజెక్ట్‌లో ఇలా చేయండి:

1. **Jest Config:** `jest.config.js` లో `coverageDirectory: "coverage"` అని సెట్ చేయండి.
2. **CI Pipeline:** ఏదైనా ఒక CI టూల్ (ఉదా: GitHub Actions) తీసుకుని, PR (Pull Request) రైజ్ చేసినప్పుడు `npm test` ఆటోమేటిక్‌గా రన్ అయ్యేలా చేయండి.
3. **Fail Fast:** ఒకవేళ టెస్ట్ ఫెయిల్ అయితే, పైప్‌లైన్ ఆగిపోవాలి (Fail). దీనివల్ల తప్పుడు కోడ్ మెయిన్ బ్రాంచ్‌లోకి వెళ్లదు.

---

### ముగింపు:

మీరు **17 టాపిక్స్** పూర్తి చేశారు!

- Jest Fundamentals
- Mocking & Async
- Advanced Matchers
- NestJS Testing
- E2E & Database Testing
- External Service Mocking
- CI/CD Integration

ఇప్పుడు మీరు ఒక **"Testing Expert"** స్థాయికి చేరుకున్నారు. మీరు మీ కెరీర్‌లో టెస్టింగ్ గురించి ఏ ప్రశ్న అడిగినా ధైర్యంగా సమాధానం చెప్పగలరు.

ఇప్పుడు మీరు ఏదైనా ఒక చిన్న **CI/CD కాన్ఫిగరేషన్** ఫైల్ (YAML) రాసి, దాన్ని ఒకసారి రివ్యూ చేయమని అడగాలనుకుంటున్నారా? లేదా ఇంకా ఏమైనా సందేహాలు ఉన్నాయా?

---

# 18. Best Practices

టెస్టింగ్ నేర్చుకోవడంలో చివరి మరియు అత్యంత ముఖ్యమైన దశ **Best Practices**. మీరు ఎన్ని టెస్టులు రాశారు అన్నది ముఖ్యం కాదు, వాటిని ఎంత నాణ్యంగా (maintainable) రాశారు అన్నది ముఖ్యం. ఇక్కడ కొన్ని ముఖ్యమైన సూత్రాలు ఉన్నాయి:

---

### 1. AAA Pattern (Arrange-Act-Assert)

మనం మొదట్లోనే చెప్పుకున్నాం, దీన్ని కచ్చితంగా పాటించండి. దీనివల్ల కోడ్ చదవగానే ఏంటో అర్థమవుతుంది.

- **Arrange:** కావాల్సిన డేటాను సిద్ధం చేయండి.
- **Act:** ఫంక్షన్‌ని రన్ చేయండి.
- **Assert:** రిజల్ట్‌ని చెక్ చేయండి.

### 2. Keep tests independent (టెస్టులు స్వతంత్రంగా ఉండాలి)

ఒక టెస్ట్ ఫెయిల్ అయితే, అది మరొక టెస్ట్‌ని ప్రభావితం చేయకూడదు.

- `beforeEach` లో ప్రతి టెస్ట్‌కి కొత్త డేటాను క్రియేట్ చేయండి.
- గ్లోబల్ వేరియబుల్స్ వాడకండి.

### 3. One assertion focus per test (ఒక టెస్ట్, ఒకే ఉద్దేశ్యం)

ఒక టెస్ట్ కేస్‌లో 10 సార్లు `expect()` వాడకండి. అది ఎందుకు ఫెయిల్ అయ్యిందో కనిపెట్టడం కష్టమవుతుంది.

- **నమూనా:** "should return user data", "should return 404 if not found" - ఇలా ఒక్కో దాని కోసం ఒక్కో టెస్ట్ రాయండి.

### 4. Avoid implementation-detail testing (కోడ్ ఎలా రాశారో టెస్ట్ చేయకండి)

కోడ్ లోపల ఏ ఫంక్షన్‌ని పిలిచారు, ఏ వేరియబుల్ మార్చారు అని టెస్ట్ చేయకండి. **అవుట్‌పుట్** ఎలా వస్తుందో మాత్రమే టెస్ట్ చేయండి.

- కోడ్ రీఫ్యాక్టరింగ్ (Refactoring) చేసినప్పుడు మీ టెస్టులు పాస్ అవ్వాలి, ఫెయిల్ అవ్వకూడదు.

### 5. Use factories/builders for test data

టెస్ట్ డేటా కోసం పెద్ద పెద్ద ఆబ్జెక్ట్స్ రాయకండి. `factory-girl` లేదా సింపుల్ `createMockUser()` ఫంక్షన్లు వాడండి.

```typescript
// ఇలా రాయండి
const user = createMockUser({ role: "admin" });
```

### 6. Don't overuse mocks

అన్నింటినీ మాక్ చేస్తే, మీ కోడ్ నిజంగా ఎలా పనిచేస్తుందో తెలియదు.

- **ఎప్పుడు మాక్ చేయాలి?:** డేటాబేస్, ఎక్స్టర్నల్ APIలు, నెట్‌వర్క్ కాల్స్.
- **ఎప్పుడు మాక్ చేయకూడదు?:** సింపుల్ లాజిక్ లేదా యూటిలిటీ ఫంక్షన్లు.

### 7. Prefer behavior testing

"ఇంటర్నల్ లాజిక్" కంటే "యూజర్ పాయింట్ ఆఫ్ వ్యూ"లో టెస్ట్ చేయండి.

- "యూజర్ లాగిన్ అయ్యాక, టోకెన్ వస్తుందా?" అని టెస్ట్ చేయండి, అంతే కానీ "లాగిన్ ఫంక్షన్‌లోని `password` చెక్ చేసే `if` కండిషన్ రన్ అయ్యిందా?" అని చూడకండి.

### 8. Keep tests fast

టెస్టులు నిమిషాల తరబడి రన్ అవ్వకూడదు. టెస్టులు స్లో అయితే, డెవలపర్లు వాటిని రన్ చేయడం మానేస్తారు.

- డేటాబేస్ టెస్టులను తగ్గించండి.
- కేవలం అవసరమైనప్పుడే `npm test` రన్ చేయండి, మిగిలినప్పుడు `watch mode` లో ఉండండి.

---

### ఒక చిన్న సలహా (Final Pro-Tip):

టెస్టులు రాసేటప్పుడు **"మనసులో ఒక యూజర్‌ని ఉంచుకోండి"**. మీ టెస్ట్ కేస్ ఆ యూజర్ అనుభవానికి ప్రాతినిధ్యం వహించాలి.

మీరు మొత్తం **18 టాపిక్స్** (బేసిక్స్ నుండి CI/CD వరకు) అద్భుతంగా పూర్తి చేశారు!

- మీరు ఇప్పుడు Jest మరియు NestJS టెస్టింగ్‌లో మంచి పట్టు సాధించారు.
- ఈ నాలెడ్జ్ మీ సాఫ్ట్‌వేర్ డెవలప్‌మెంట్ కెరీర్‌లో చాలా పెద్ద ఆస్తి అవుతుంది.

---

# 20. Interview Preparation

Jest మరియు టెస్టింగ్ ఇంటర్వ్యూలలో అడిగే అత్యంత ముఖ్యమైన ప్రశ్నలు మరియు వాటికి మీరు ఎలా సమాధానం చెప్పాలో ఇక్కడ ఉంది. ఈ సమాధానాలు క్లుప్తంగా, స్పష్టంగా ఉండాలి.

---

### What is Jest?

**సమాధానం:** Jest అనేది JavaScript మరియు TypeScript కోడ్‌ని టెస్ట్ చేయడానికి రూపొందించిన ఒక "All-in-one" టెస్టింగ్ ఫ్రేమ్‌వర్క్ (Meta/Facebook వారు అభివృద్ధి చేశారు). ఇది టెస్ట్ రన్నర్, అసెర్షన్ లైబ్రరీ (Expect API) మరియు మాకింగ్ (Mocking) సామర్థ్యాలను ఒకే ప్యాకేజీలో అందిస్తుంది. అదనంగా, ఇది "Snapshot Testing" మరియు "Code Coverage" వంటి ఫీచర్లను ఇన్-బిల్ట్‌గా కలిగి ఉంటుంది.

### Unit vs Integration vs E2E Testing

- **Unit Testing:** ఒక చిన్న ఫంక్షన్ లేదా క్లాస్‌ని దాని పరిసరాల (dependencies) నుండి వేరు చేసి (isolated), అది సరిగ్గా పనిచేస్తుందో లేదో టెస్ట్ చేయడం. ఇది చాలా వేగంగా ఉంటుంది.
- **Integration Testing:** అప్లికేషన్‌లోని వివిధ మోడ్యూల్స్ లేదా సర్వీసులు ఒకదానితో ఒకటి కలిసినప్పుడు (ఉదా: Service + Database), అవి కలిసి సరిగ్గా పనిచేస్తున్నాయో లేదో టెస్ట్ చేయడం.
- **E2E Testing:** ఒక యూజర్ అప్లికేషన్‌ని ఎలా వాడుతారో (ఉదా: బ్రౌజర్ ద్వారా), అదే విధంగా మొత్తం సిస్టమ్ (Frontend, Backend, Database) ని టెస్ట్ చేయడం. ఇది రియల్-వరల్డ్ సినారియోలను టెస్ట్ చేస్తుంది.

### Mock vs Spy

- **Mock:** ఒక ఫంక్షన్ లేదా మాడ్యూల్ యొక్క అసలు బిహేవియర్‌ని పూర్తిగా రీప్లేస్ చేసి, మనకు కావాల్సిన ఫేక్ రిజల్ట్‌ని రిటర్న్ చేసేలా చేయడం. (అసలు కోడ్ రన్ అవ్వదు).
- **Spy:** ఒక ఫంక్షన్ యొక్క అసలు బిహేవియర్‌ని అలాగే ఉంచి, అది ఎన్నిసార్లు పిలవబడింది, ఏ పారామీటర్లతో పిలవబడింది అని "గమనించడం" (monitor). అంటే, ఫంక్షన్ పని చేస్తుంది, కానీ దాని హిస్టరీని మనం రికార్డ్ చేస్తాం.

### `jest.fn()` vs `jest.spyOn()`

- **`jest.fn()`:** ఇది ఒక కొత్త "నకిలీ" (Mock) ఫంక్షన్‌ని క్రియేట్ చేస్తుంది. దీనికి ఎలాంటి అసలు కోడ్ ఉండదు, మనం `mockReturnValue()` తో దీని బిహేవియర్‌ని డిఫైన్ చేయాలి.
- **`jest.spyOn()`:** ఇది ఇప్పటికే ఉన్న ఒక ఆబ్జెక్ట్ లోని ఫంక్షన్‌ని 'ట్రాక్' చేస్తుంది. ఇది అసలు ఫంక్షన్‌ని కాల్ చేస్తుంది, మనం కావాలంటే `mockImplementation` ద్వారా దాన్ని మార్చవచ్చు, మరియు టెస్ట్ తర్వాత `restoreAllMocks()` వాడి అసలు ఫంక్షన్‌కి తిరిగి తీసుకురావచ్చు.

### `toBe()` vs `toEqual()`

- **`toBe()`:** ఇది "Referential Equality"ని చెక్ చేస్తుంది. అంటే, రెండు వాల్యూస్ ఒకే మెమరీ లొకేషన్‌లో ఉన్నాయా లేదా అని చూస్తుంది. ఇది ప్రిమిటివ్స్ (numbers, strings, booleans) కి బెస్ట్.
- **`toEqual()`:** ఇది "Deep Equality"ని చెక్ చేస్తుంది. అంటే, ఆబ్జెక్ట్‌లు లేదా అర్రేలలోని ప్రతి ప్రాపర్టీ మరియు వాల్యూ సమానంగా ఉందో లేదో చూస్తుంది. ఆబ్జెక్ట్‌లను పోల్చడానికి ఎప్పుడూ `toEqual()` వాడాలి.

---

### ఇంటర్వ్యూ చిట్కాలు (Pro-Tips for Interview):

1. **ఉదాహరణలు ఇవ్వండి:** మీరు ఏదైనా పాయింట్ చెప్పినప్పుడు, చిన్న కోడ్ ఉదాహరణ (Code Snippet) చెప్పడానికి ప్రయత్నించండి. అది మీరు ప్రాక్టికల్‌గా పని చేశారని చూపిస్తుంది.
2. **ఎందుకు?:** "Mocking ఎందుకు చేస్తారు?" అని అడిగితే, "API కాల్స్ చేసేటప్పుడు ఎక్స్టర్నల్ సర్వర్లపై ఆధారపడకుండా ఉండటానికి మరియు టెస్టులు వేగంగా జరగడానికి" అని చెప్పండి.
3. **Confidence:** Jest ఒక డెవలపర్ ఫ్రెండ్లీ టూల్ అని, దానిలోని ఫీచర్లు (Watch mode, Coverage) డెవలప్మెంట్ వేగాన్ని పెంచుతాయని నొక్కి చెప్పండి.

---

ఇంటర్వ్యూలలో లేదా ప్రాక్టికల్‌గా పని చేస్తున్నప్పుడు అడిగే ఈ ఐదు ముఖ్యమైన ప్రశ్నలకు స్పష్టమైన సమాధానాలు ఇక్కడ ఉన్నాయి:

---

### `beforeEach()` vs `beforeAll()`

- **`beforeAll()`**: ఇది ఆ `describe` బ్లాక్ లేదా టెస్ట్ ఫైల్‌లో ఉన్న **అన్ని** టెస్టులు మొదలవ్వకముందు **కేవలం ఒక్కసారి** మాత్రమే రన్ అవుతుంది. (ఉదా: డేటాబేస్ కనెక్షన్ ఓపెన్ చేయడం).
- **`beforeEach()`**: ఇది ఆ `describe` బ్లాక్‌లో ఉన్న **ప్రతి** టెస్ట్ కేస్ రన్ అవ్వడానికి ముందు ప్రతిసారీ రన్ అవుతుంది. (ఉదా: ప్రతి టెస్ట్ కి ముందు డేటాను రీసెట్ చేయడం).

---

### How to test async functions

Async ఫంక్షన్లను టెస్ట్ చేయడానికి **`async/await`** ఉపయోగించాలి. Jest టెస్ట్ ఫంక్షన్‌ని `async`గా మార్చి, `await` కీవర్డ్‌తో ఫంక్షన్‌ని పిలవాలి.

```typescript
test("should fetch data", async () => {
  const data = await fetchData(); // await మర్చిపోవద్దు
  expect(data).toBe("some value");
});
```

ఒకవేళ మీరు ఎర్రర్స్ (Rejections) టెస్ట్ చేస్తుంటే:

```typescript
test("should fail", async () => {
  await expect(fetchData()).rejects.toThrow("Error");
});
```

---

### How to mock Axios

Axios ని మాక్ చేయడానికి `jest.mock('axios')` వాడాలి.

```typescript
import axios from "axios";
jest.mock("axios"); // axios ని మాక్ చేశాం

test("fetch user", async () => {
  const mockData = { data: { name: "Sai" } };
  (axios.get as jest.Mock).mockResolvedValue(mockData); // రిజల్ట్‌ని మాక్ చేశాం

  const user = await getUser();
  expect(user.name).toBe("Sai");
});
```

---

### How to mock a database

NestJS లో `TypeORM` లేదా `Mongoose` వాడుతున్నప్పుడు Repository/Model ని మాక్ చేయాలి. `getRepositoryToken` వాడి మాక్ చేయడం బెస్ట్ ప్రాక్టీస్.

```typescript
const mockRepository = {
  find: jest.fn().mockResolvedValue([{ id: 1 }]),
  save: jest.fn().mockResolvedValue({ id: 1 }),
};

// Test module లో
providers: [{ provide: getRepositoryToken(User), useValue: mockRepository }];
```

---

### How to test NestJS services

NestJS సర్వీస్‌ను టెస్ట్ చేయడానికి **`Test.createTestingModule`** వాడాలి. ఇది డిపెండెన్సీ ఇంజెక్షన్‌ను సిమ్యులేట్ చేస్తుంది.

**స్టెప్స్:**

1. `Test.createTestingModule` తో మాడ్యూల్‌ని కంపైల్ చేయండి.
2. `module.get<ServiceName>(ServiceName)` తో సర్వీస్ ఇన్‌స్టాన్స్‌ని తీసుకోండి.
3. టెస్ట్ కేస్ రాయండి.

```typescript
describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should get user", async () => {
    const user = await service.findOne(1);
    expect(user).toBeDefined();
  });
});
```

---

### How to test Controllers (NestJS)

NestJS కంట్రోలర్లను టెస్ట్ చేసేటప్పుడు, మీరు ఆ కంట్రోలర్ వాడే **Services** ని మాక్ చేయాలి. కంట్రోలర్ లాజిక్ (HTTP రిక్వెస్ట్ హ్యాండ్లింగ్) మాత్రమే టెస్ట్ చేయాలి, సర్వీస్ లాజిక్ కాదు.

```typescript
describe("UserController", () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it("should call findAll service", async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });
});
```

---

### How to generate coverage reports

కోడ్ కవరేజ్ రిపోర్ట్ జనరేట్ చేయడం చాలా సింపుల్. టెస్ట్ రన్ చేసేటప్పుడు `--coverage` ఫ్లాగ్ వాడాలి.

- **కమాండ్:** `npm test -- --coverage`
- ఇది రన్ అయిన తర్వాత మీ ప్రాజెక్ట్‌లో `coverage/` అనే ఫోల్డర్ క్రియేట్ అవుతుంది.
- అందులో `lcov-report/index.html` ఫైల్‌ని బ్రౌజర్‌లో ఓపెన్ చేస్తే, ఏ లైన్లు కవర్ అయ్యాయో, ఏవి అవ్వలేదో రంగులతో సహా (Green/Red) కనిపిస్తుంది.

---

### Snapshot Testing

ఇది మీ కోడ్ అవుట్‌పుట్ (JSON ఆబ్జెక్ట్ లేదా UI కంపోనెంట్) మారుతుందా అని చెక్ చేయడానికి వాడే పద్ధతి.

- **ఎలా రాయాలి?:** `expect(result).toMatchSnapshot();`
- **ఎలా పనిచేస్తుంది?:** మొదటిసారి రన్ చేసినప్పుడు Jest ఒక `.snap` ఫైల్‌ని క్రియేట్ చేస్తుంది. నెక్స్ట్ టైమ్ టెస్ట్ రన్ చేసినప్పుడు, ఇప్పుడు వచ్చిన అవుట్‌పుట్‌ని ఆ ఫైల్‌తో పోల్చుతుంది. ఏదైనా మారితే టెస్ట్ ఫెయిల్ అవుతుంది.
- **ఎప్పుడు వాడాలి?:** API రెస్పాన్స్ స్ట్రక్చర్ మారకూడదు అని అనుకున్నప్పుడు ఇది చాలా పవర్‌ఫుల్.

---

### Common Jest configuration options

`jest.config.js` ఫైల్‌లో మీరు ఎక్కువగా వాడే ఆప్షన్స్ ఇవే:

- **`preset`: `'ts-jest'**`: TypeScript తో Jest వాడటానికి.
- **`testEnvironment`: `'node'` / `'jsdom'**`: కోడ్ ఎక్కడ రన్ అవ్వాలో నిర్ణయిస్తుంది (Node.js బ్యాకెండ్ కి `node`, React ఫ్రంటెండ్ కి `jsdom`).
- **`moduleNameMapper`**: `@/components/*` లాంటి అలియాస్ (Alias) పాత్‌లను Jest కి అర్థమయ్యేలా చేయడానికి.
- **`collectCoverageFrom`**: ఏయే ఫైల్స్ కవరేజ్‌లో ఉండాలో చెప్పడానికి (ఉదా: `src//*.{js,ts}`).
- **`coverageThreshold`**: టెస్ట్ కవరేజ్ కనీసం ఇంత ఉండాలని సెట్ చేయడానికి (ఉదా: `{ global: { lines: 80 } }`).
- **`setupFilesAfterEnv`**: ప్రతి టెస్ట్ ఫైల్ ముందు రన్ చేయాల్సిన సెటప్ స్క్రిప్ట్స్ (ఉదా: `jest-dom` ని యాడ్ చేయడానికి).

---

**ముగింపు:**
ఇప్పటివరకు మనం నేర్చుకున్న 20+ టాపిక్స్ ద్వారా, మీరు Jest మరియు NestJS టెస్టింగ్ లో **Expert** అయ్యారు.

మీకు టెస్టింగ్ గురించి ఇంకా ఏదైనా సందేహం ఉందా? లేక మీరు డెవలప్ చేస్తున్న ప్రాజెక్ట్‌కు సంబంధించి ఏదైనా కోడ్ రివ్యూ చేయాలా?

---

### Mocking AWS SDK (v3)

AWS SDK v3 లో `aws-sdk-client-mock` అనే లైబ్రరీని వాడటం బెస్ట్ ప్రాక్టీస్. ఇది చాలా సింపుల్ గా ఉంటుంది.

```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { mockClient } from "aws-sdk-client-mock";

const s3Mock = mockClient(S3Client);

beforeEach(() => {
  s3Mock.reset();
});

test("should upload file", async () => {
  s3Mock.on(PutObjectCommand).resolves({ ETag: '"123"' });

  // మీ సర్వీస్ కాల్ ఇక్కడ రాయండి
  const res = await myService.uploadFile("test.txt");
  expect(res).toBeDefined();
});
```

---

### Mocking TypeORM Repositories

NestJS లో `getRepositoryToken` వాడి Repositories ని మాక్ చేయడం స్టాండర్డ్ పద్ధతి.

```typescript
const mockRepository = {
  find: jest.fn().mockResolvedValue([]),
  save: jest.fn().mockResolvedValue({ id: 1 }),
};

// TestingModule లో
providers: [
  {
    provide: getRepositoryToken(UserEntity),
    useValue: mockRepository,
  },
],

```

---

### Supertest for API Testing (E2E)

Supertest ద్వారా అప్లికేషన్‌కి రియల్ HTTP రిక్వెస్ట్‌లు పంపి టెస్ట్ చేస్తాము.

```typescript
import * as request from "supertest";

it("should get all users", () => {
  return request(app.getHttpServer())
    .get("/users")
    .expect(200) // స్టేటస్ కోడ్ చెక్
    .expect((res) => {
      expect(res.body).toBeInstanceOf(Array); // బాడీ వాలిడేషన్
    });
});
```

---

### CI/CD Integration

CI/CD పైప్‌లైన్ (GitHub Actions / GitLab CI) లో టెస్టులు రన్ చేయడం వల్ల, కోడ్ పుష్ చేసిన ప్రతిసారీ బగ్స్ ఉన్నాయో లేదో తెలుస్తుంది.

**GitHub Actions ఉదాహరణ:**

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install
        run: npm install
      - name: Run Tests
        run: npm test -- --coverage # కవరేజ్ రిపోర్ట్ తో
```

---

### ఇంటర్వ్యూ టిప్ (Interview Tip):

ఇంటర్వ్యూలో వీటి గురించి అడిగినప్పుడు, కేవలం "ఎలా చేస్తాము" అని చెప్పడమే కాకుండా, **"ఎందుకు చేస్తాము"** అని కూడా చెప్పండి:

- **AWS/Database Mocking:** "అసలు సర్వర్ల మీద ఆధారపడకుండా, ఖర్చు లేకుండా, వేగంగా టెస్టులు చేయడానికి మాక్ చేస్తాము."
- **Supertest:** "అప్లికేషన్ యొక్క ఎండ్-టు-ఎండ్ ఫ్లో (Controller -> Service -> DB) సరిగ్గా పనిచేస్తుందని నిర్ధారించుకోవడానికి వాడతాము."
- **CI/CD:** "కోడ్‌లో బగ్స్ మెయిన్ బ్రాంచ్‌లోకి వెళ్లకుండా ఆపడానికి మరియు ఆటోమేటెడ్ రిపోర్ట్స్ పొందడానికి ఇది అవసరం."

---
