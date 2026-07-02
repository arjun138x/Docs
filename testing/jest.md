# 🧪 Testing & Jest.js Notes

## ✅ Types of Testing

- **Unit Testing**
  - Testing a single unit/piece of code in isolation.

- **Integration Testing**
  - Testing how multiple components work together.

- **End-to-End Testing**
  - Testing from user entry to exit.
  - Tools: Selenium

👉 As a developer, mainly focus on:

- Unit Testing
- Integration Testing

---

## 🧱 Structure of Testing

### AAA Principles

Think of **Arrange, Act, Assert (AAA)** as a simple 3-step pattern for writing tests.

---

## 🧱 1. Arrange (Setup)

👉 Prepare everything needed for the test.

- Create data
- Initialize variables
- Setup inputs

**Simple idea:** _“Get things ready”_

**Example:**

```js
const a = 2;
const b = 3;
```

---

## ⚡ 2. Act (Execute)

👉 Perform the action you want to test.

- Call the function
- Run the logic

**Simple idea:** _“Do the action”_

**Example:**

```js
const result = add(a, b);
```

---

## ✅ 3. Assert (Verify)

👉 Check if the result is correct.

- Compare expected vs actual output

**Simple idea:** _“Check the result”_

**Example:**

```js
expect(result).toBe(5);
```

---

## 🧠 Full Example Together

```js
test("adds two numbers", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});
```

---

👉 In one line:
**“Setup → Run → Check”**

---

## 🔄 Lifecycle in Testing

### 🟢 1. Setup

👉 Prepare things **before the test runs**

- Create required data
- Initialize variables
- Setup environment (DB, mocks, etc.)

**Simple idea:** _“Get ready before test”_

**Example:**

```js
beforeEach(() => {
  console.log("Setup before each test");
});
```

---

## 🔴 2. Teardown

👉 Clean things **after the test is done**

- Reset data
- Clear mocks
- Close connections

**Simple idea:** _“Clean up after test”_

**Example:**

```js
afterEach(() => {
  console.log("Cleanup after each test");
});
```

---

## 🧠 Full Example Together

```js
beforeEach(() => {
  // Setup
  console.log("Preparing test");
});

afterEach(() => {
  // Teardown
  console.log("Cleaning up");
});

test("example test", () => {
  expect(2 + 2).toBe(4);
});
```

---

## ⚡ What is Jest.js?

- Open-source JavaScript testing framework developed by Facebook.
- Known for simplicity, speed, and built-in features.
- Works with:
  - React
  - Angular
  - Vue
  - Node.js

---

## 📦 Installation

```bash
npm install --save-dev jest
```

---

## 🚀 Key Features

### 🤖 1. Automatic Mocking

👉 Jest can **fake dependencies automatically**

- Replace real APIs, DB calls, etc.
- Helps test without real external systems

**Simple idea:** _“Use fake instead of real”_

---

### 📸 2. Snapshot Testing

👉 Saves output and compares later

- Detects UI or output changes

**Simple idea:** _“Take a screenshot and compare”_

---

### 📊 3. Code Coverage

👉 Shows how much code is tested

- % of tested lines/functions

**Simple idea:** _“How much of your code is tested?”_

---

### ⚡ 4. Parallel Testing

👉 Runs multiple tests at the same time

- Makes testing faster

**Simple idea:** _“Run tests together, not one by one”_

---

### ✅ 5. Built-in Matchers

👉 Ready-made functions to check results

- Example: `toBe()`, `toEqual()`

**Simple idea:** _“Tools to verify results easily”_

---

### ⏳ 6. Async Testing Support

👉 Supports async code (APIs, promises)

- Works with `async/await`

**Simple idea:** _“Test things that take time”_

---

## ▶️ Running Tests

👉 Create a test file like `math.test.js`

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

```js
// math.test.js
const add = require("./math");

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

👉 Run in terminal:

```bash
jest
```

✔ Jest automatically finds:

- `math.test.js`
- `math.spec.js`

---

## 🎭 Mocking in Jest

### 1. Using `jest.fn()`

```js
test("mock function example", () => {
  const mockFn = jest.fn();

  mockFn("hello");

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith("hello");
});
```

---

### 2. Using `jest.mock()`

```js
// api.js
function fetchData() {
  return "real data";
}
module.exports = fetchData;
```

```js
// api.test.js
jest.mock("./api", () => {
  return jest.fn(() => "mock data");
});

const fetchData = require("./api");

test("mock module", () => {
  expect(fetchData()).toBe("mock data");
});
```

---

## 📊 Code Coverage

👉 Run with coverage:

```bash
jest --coverage
```

✔ Output shows:

- % of lines tested
- uncovered lines

---

## ⏳ Async Testing

### 1. Using `async/await`

```js
function fetchData() {
  return Promise.resolve("data");
}

test("async test with await", async () => {
  const result = await fetchData();
  expect(result).toBe("data");
});
```

---

### 2. Using Promises

```js
test("async test with promise", () => {
  return fetchData().then((data) => {
    expect(data).toBe("data");
  });
});
```

---

### 3. Using `done()`

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 1000);
}

test("async test with done", (done) => {
  fetchData((data) => {
    expect(data).toBe("data");
    done();
  });
});
```

---

## 🔗 Tool Integration (Simple Explanation)

### 🧹 1. ESLint

👉 Helps you **check code quality and errors**

- Finds mistakes (unused variables, bad syntax)
- Keeps code clean and consistent

**Simple idea:** _“Grammar checker for your code”_

**Example:**

```bash
npm run lint
```

✔ You can run ESLint **before tests** to ensure clean code

---

### 📦 2. Webpack

👉 Bundles your code so it can run in browser

- Combines multiple files into one
- Transforms code (ES6 → ES5)

**Simple idea:** _“Pack everything into one file”_

**Example:**

```bash
npm run build
```

✔ Jest can work with Webpack configs (via Babel) to test your code

---

### 🔄 3. CI/CD Pipelines

👉 Automatically run tests when you push code

- CI = Continuous Integration (test on every commit)
- CD = Continuous Deployment (auto deploy)

**Simple idea:** _“Auto test + auto deploy”_

---

### 🧪 Example (GitHub Actions CI)

```yaml
name: Run Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install
        run: npm install
      - name: Run tests
        run: npm test
```

✔ Every time you push → tests run automatically

---

## 📚 Test Suite vs Test Case

### 📦 Test Suite (`describe`)

👉 A **group of related tests**

- Used to organize tests
- Contains multiple test cases

**Simple idea:** _“Folder of tests”_

---

### 🧪 Test Case (`test`)

👉 A **single test**

- Tests one specific behavior
- Gives pass/fail result

**Simple idea:** _“One check”_

---

## 🧠 Side-by-Side Comparison

| Feature  | Test Suite (`describe`) | Test Case (`test`)  |
| -------- | ----------------------- | ------------------- |
| Meaning  | Group of tests          | Single test         |
| Purpose  | Organize tests          | Verify one behavior |
| Contains | Multiple test cases     | Assertions          |
| Keyword  | `describe()`            | `test()` / `it()`   |
| Output   | Group name in result    | Pass/Fail result    |

---

## 💻 Example

```js
describe("Math tests", () => {
  // ✅ Test Suite

  test("adds numbers", () => {
    // ✅ Test Case
    expect(2 + 3).toBe(5);
  });

  test("subtract numbers", () => {
    // ✅ Another Test Case
    expect(5 - 2).toBe(3);
  });
});
```

---

## 🔄 `beforeEach` vs `afterEach`

### 🟢 `beforeEach`

👉 Runs **before every test**

- Used for setup
- Prepare data, variables, mocks

**Simple idea:** _“Get ready before test”_

---

### 🔴 `afterEach`

👉 Runs **after every test**

- Used for cleanup
- Reset data, clear mocks

**Simple idea:** _“Clean up after test”_

---

## 🧠 Side-by-Side Comparison

| Feature        | `beforeEach`            | `afterEach`           |
| -------------- | ----------------------- | --------------------- |
| Runs when?     | Before each test        | After each test       |
| Purpose        | Setup                   | Cleanup               |
| Use case       | Initialize data         | Reset/clear data      |
| Example action | Create mock / variables | Clear mock / close DB |

---

## 💻 Example

```js id="fq60pr"
let count;

beforeEach(() => {
  count = 0; // setup
});

afterEach(() => {
  count = null; // cleanup
});

test("increment test", () => {
  count++;
  expect(count).toBe(1);
});

test("another test", () => {
  expect(count).toBe(0); // fresh setup again
});
```

---

## 🎯 Skip vs Focus Tests

### ⏭️ `test.skip()`

👉 **Ignore this test**

- Test will NOT run
- Still visible in results (as skipped)

**Simple idea:** _“Don’t run this test”_

---

### 🎯 `test.only()`

👉 **Run ONLY this test**

- All other tests are ignored
- Useful for debugging

**Simple idea:** _“Run only this one”_

---

## 🧠 Side-by-Side Comparison

| Feature     | `test.skip()`      | `test.only()`       |
| ----------- | ------------------ | ------------------- |
| Behavior    | Skips test         | Runs only this test |
| Other tests | Run normally       | Skipped             |
| Use case    | Ignore temporarily | Debug specific test |
| Output      | Marked as skipped  | Only this runs      |

---

## 💻 Example

```js id="mtxg8m"
test("test 1", () => {
  expect(1 + 1).toBe(2);
});

test.skip("test 2", () => {
  expect(2 + 2).toBe(4);
});

test.only("test 3", () => {
  expect(3 + 3).toBe(6);
});
```

👉 Result:

- ❌ `test 1` → skipped
- ❌ `test 2` → skipped
- ✅ `test 3` → runs

---

## 🧠 `toBe()` vs `toEqual()`

### 🔹 `toBe()`

👉 Checks **exact match (===)**

- Works for:
  - numbers
  - strings
  - booleans

**Simple idea:** _“Are they exactly the same?”_

---

### 🔸 `toEqual()`

👉 Checks **value/content match**

- Works for:
  - objects
  - arrays

**Simple idea:** _“Do they look the same inside?”_

---

## 🧠 Side-by-Side Comparison

| Feature    | `toBe()`        | `toEqual()`      |
| ---------- | --------------- | ---------------- |
| Comparison | Strict (`===`)  | Deep comparison  |
| Use for    | Primitives      | Objects & arrays |
| Checks     | Reference/value | Content          |

---

## 💻 Examples

### ✅ `toBe()` (Primitives)

```js id="9sq0h5"
test("number test", () => {
  expect(2 + 2).toBe(4); // ✅
});
```

---

### ❌ `toBe()` with Objects (Wrong)

```js id="2q6rhm"
test("object test", () => {
  expect({ a: 1 }).toBe({ a: 1 }); // ❌ fails
});
```

👉 Because they are different references

---

### ✅ `toEqual()` (Objects)

```js id="u9kk3h"
test("object test", () => {
  expect({ a: 1 }).toEqual({ a: 1 }); // ✅
});
```

## ⏱️ Mock Timers

```js
jest.useFakeTimers();
```

---

## 🧩 F.I.R.S.T Principles

### ⚡ **F — Fast**

👉 Tests should run **quickly**

- Developers run tests often
- Slow tests = ignored tests

**Simple idea:** _“Tests should not waste time”_

---

### 🔗 **I — Independent**

👉 Tests should NOT depend on each other

- One test should not affect another
- Order should not matter

**Simple idea:** _“Each test stands alone”_

---

### 🔁 **R — Repeatable**

👉 Tests should give **same result every time**

- Works on any machine
- No random failures

**Simple idea:** _“Same input → same result”_

---

### ✅ **S — Self-validating**

👉 Tests should **automatically say pass/fail**

- No manual checking needed
- Uses assertions (`expect`)

**Simple idea:** _“Test checks itself”_

---

### 🎯 **T — Thorough**

👉 Tests should cover **important scenarios**

- Edge cases
- Different inputs

**Simple idea:** _“Test properly, not just basic”_

---

## 🧠 Quick Example

```js id="8f0v6k"
test("adds numbers", () => {
  const result = 2 + 3; // Fast & Independent
  expect(result).toBe(5); // Self-validating
});
```

## 🚫 Ignore Code Coverage

```js
/* istanbul ignore next */
```

---

## 🧪 Test Doubles

👉 **Test doubles = fake versions of real things**

Used to:

- Avoid real API/DB calls
- Control behavior
- Test safely

**Simple idea:** _“Use fake instead of real”_

---

## 🎭 Types of Test Doubles

### 🤖 1. Mock Functions (`jest.fn()`)

👉 Create a **fake function**

```js
const mockFunction = jest.fn();
mockFunction.mockReturnValue(42);
```

✔ Always returns `42`

**Simple idea:** _“Fake function with controlled output”_

---

### 👀 2. Spies (`jest.spyOn()`)

👉 **Watch a real function**

```js
const spy = jest.spyOn(obj, "method");
```

✔ Tracks:

- How many times called
- What arguments passed

❗ Does NOT replace original logic (by default)

**Simple idea:** _“Just observe, don’t change”_

---

### 🎯 3. Stubs

👉 Fake function with **predefined response**

```js
const fetchData = jest.fn();
fetchData.mockResolvedValue({ data: "mocked data" });
```

✔ Useful for async (API calls)

**Simple idea:** _“Return fixed fake data”_

---

### 🧱 4. Mocks (`jest.mock()`)

👉 Replace entire module with fake

```js
jest.mock("./dependency", () => {
  return jest.fn(() => "mocked dependency");
});
```

✔ Real module is NOT used

**Simple idea:** _“Replace real with fake completely”_

---

## 🔍 Spies vs Mocks (Important)

### 👀 Spies

- Observe real function
- Keep original behavior
- Used for tracking

**Example use:**
👉 “Was this function called?”

---

### 🧱 Mocks

- Replace real function/module
- Provide fake behavior
- Used for isolation

**Example use:**
👉 “Don’t call real API, use fake”

---

## 🧠 Side-by-Side

| Feature        | Spies       | Mocks               |
| -------------- | ----------- | ------------------- |
| Behavior       | Observe     | Replace             |
| Real code runs | ✅ Yes      | ❌ No               |
| Purpose        | Track calls | Fake implementation |

---

## 💡 Easy Way to Remember

- **Mock function →** fake function
- **Spy →** watch function
- **Stub →** return fixed data
- **Mock →** replace module

---

## 🔁 Unit Testing vs Integration Testing

### Unit Testing

- Tests small units
- Isolated (mock dependencies)
- Fast & granular

### Integration Testing

- Tests multiple components
- Uses real dependencies
- Validates interactions

---

## 📌 Summary

- Unit = individual logic
- Integration = combined behavior
- Jest = powerful testing framework
- Use mocks & spies wisely
- Follow F.I.R.S.T principles
