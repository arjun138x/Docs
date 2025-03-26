# **1. What is a Closure in JavaScript?**

A **closure** is a function that "remembers" the variables from its **outer scope** even after the outer function has finished executing.

It allows a function to access variables from its **lexical scope** even when it's executed outside that scope.

Closure is a feature in JavaScript where an inner function has access to the outer function's variables and parameters

---

### **Example 1: Basic Closure**

```js
function outer() {
  var x = 50;
  function inner() {
    var y = 10;
    console.log(x + y); // hear we are trying to access "y" it is in another function
    console.log({ x, y });
    x++;
    y++;
  }
  return inner;
}
let inner = outer(); // after calling the outer() function the "y" scope will destroy. in below line we are calling (inner). hear we are accessing "y" value. in this place closer come to the picture.
inner(); // 60
inner(); // 61
```

---

### **Example 2: Private Variables using Closures**

Closures are useful to create **private variables** in JavaScript.

```js
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

console.log(counter.count); // Undefined (can't access count directly)
```

📌 **Why is `count` not accessible outside?**  
Since `count` is inside the closure, it's **not exposed** outside the function.

---

### **Example 3: Closure with a Loop**

Closures help maintain variable values in loops.

❌ **Without Closure (Incorrect Output in `setTimeout`)**

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4 (not 1, 2, 3)
```

📌 **Problem**: The function inside `setTimeout` refers to `i`, which changes before the timeout executes.

✅ **With Closure (Correct Output)**

```js
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => console.log(x), 1000);
  })(i);
}
// Output: 1, 2, 3
```

📌 **Fix**: The IIFE captures `i` in `x`, creating a new scope.

---

### **Closures have some disadvantages**:

1. **Increased Memory Usage** – Since closures keep references to their outer scope, they can prevent garbage collection, leading to higher memory consumption.
2. **Potential Memory Leaks** – If closures are not properly managed (e.g., in event listeners or long-lived objects), they can cause memory leaks.
3. **Debugging Complexity** – Debugging closures can be tricky because the variables are retained in hidden scopes, making it harder to track changes.
4. **Performance Overhead** – Excessive use of closures can slow down execution, especially if they hold large objects in memory.
5. **Unexpected Behavior** – If not used carefully (e.g., inside loops with `var`), closures can lead to unintended variable sharing issues.

Closures are powerful but should be used wisely to avoid these pitfalls. 🚀

### **Why Use Closures?**

1. **Data Encapsulation** – Prevents direct modification of variables.
2. **Maintaining State** – Useful in counters, event handlers, and loops.
3. **Avoiding Global Variables** – Reduces risk of variable conflicts.

Here's a refined version of your content with better structure, explanations, and readability.

---

# **2. Callbacks, Promises, and Async-Await in JavaScript**

JavaScript handles asynchronous operations using **callbacks, promises, and async-await**. These concepts are crucial, especially in **Node.js**, where non-blocking I/O operations improve efficiency.

## **Synchronous vs Asynchronous Code**

### **Synchronous Code (Blocking)**

Synchronous code executes line by line, blocking further execution until the current task completes.

```js
function print(string) {
  console.log(string);
}

print("Start");
print("Printing something");
print("Finish");
```

### **Output:**

```
Start
Printing something
Finish
```

Here, each function executes sequentially.

---

## **Asynchronous Code (Non-Blocking)**

Asynchronous code allows execution to continue while waiting for tasks (like network requests or file operations) to complete.

```js
function print(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100));
}

print("Start");
print("Printing something");
print("Finish");
```

### **Possible Output (due to random delays):**

```
Finish
Start
Printing something
```

Since `setTimeout` runs asynchronously, execution moves forward without waiting.

---

## **1️⃣ Callbacks**

A **callback** is a function passed as an argument to another function, which is executed later.

```js
function print(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback(); // Executes the next function
  }, Math.floor(Math.random() * 100));
}

print("Start", () => {
  print("Printing something", () => {
    print("Finish", () => {});
  });
});
```

### **Potential Output:**

```
Start
Printing something
Finish
```

### **Problem: Callback Hell (Pyramid of Doom)**

Deeply nested callbacks make code harder to read and maintain.

---

## **2️⃣ Promises**

A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise has **three states**:

- **pending**: Initial state
- **fulfilled**: Operation completed successfully
- **rejected**: Operation failed

```js
function print(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100));
  });
}

print("Start")
  .then(() => print("Printing something"))
  .then(() => print("Finish"));
```

### **Advantages of Promises:**

✔ Avoids deep nesting (better readability)  
✔ Can handle errors using `.catch()`

---

## **3️⃣ Async-Await (Modern Approach)**

`async` and `await` provide a cleaner way to work with asynchronous code.

```js
async function startAll() {
  await print("Start");
  await print("Printing something");
  await print("Finish");
}

startAll();
```

### **Key Benefits of Async-Await:**

✔ **Cleaner Code** – Looks synchronous but handles async tasks  
✔ **Error Handling** – Use `try-catch` for better error management  
✔ **Easier Debugging**

---

## **Conclusion**

| Approach        | Pros                                   | Cons                            |
| --------------- | -------------------------------------- | ------------------------------- |
| **Callbacks**   | Simple for small tasks                 | Callback Hell, Hard to Maintain |
| **Promises**    | Better readability, `.then()/.catch()` | Still uses chaining             |
| **Async-Await** | Cleaner syntax, easy to read/debug     | Must use `try-catch` for errors |

For modern JavaScript, **async-await** is preferred due to its simplicity and readability.
Here's a well-structured and refined version of your content with better readability and explanations:

---

# **3. Promises in JavaScript**

## **What are Promises?**

Promises in JavaScript are used for **asynchronous programming**. They represent a **future value** that may be available **now, later, or never**.

They provide a structured way to handle asynchronous operations like:  
✅ Fetching data from a server  
✅ Reading files  
✅ Executing long-running computations

---

## **Creating a Promise**

A Promise takes a function with two arguments: **resolve** (on success) and **reject** (on failure).

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber); // Successful execution
    } else {
      reject(new Error("Random number is too large")); // Failure case
    }
  }, 1000);
});
```

---

## **Promise Methods**

### **1️⃣ `.then()` – Handle Success**

`.then()` runs when a Promise is resolved successfully.

```js
myPromise.then((result) => {
  console.log("Resolved:", result);
});
```

---

### **2️⃣ `.catch()` – Handle Errors**

`.catch()` is executed when the Promise is rejected.

```js
myPromise.catch((error) => {
  console.error("Rejected:", error.message);
});
```

---

### **3️⃣ `.finally()` – Always Runs**

`.finally()` executes **regardless of success or failure**.

```js
myPromise.finally(() => {
  console.log("Promise settled");
});
```

---

## **Handling Multiple Promises**

### **4️⃣ `Promise.all()` – Waits for All to Resolve**

Executes when **all** promises resolve successfully.  
If any promise **fails**, the entire `Promise.all()` **fails**.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

📌 **Note:** If **any** promise rejects, `Promise.all()` throws an error.

---

### **5️⃣ `Promise.allSettled()` – Resolves All, Regardless of Failure**

Returns an array with the result of each promise: `{ status: 'fulfilled' | 'rejected' }`.

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((_, reject) => setTimeout(reject, 100, "Error"));

Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
  /*
    [
      { status: 'fulfilled', value: 3 },
      { status: 'rejected', reason: 'Error' }
    ]
  */
});
```

📌 Unlike `Promise.all()`, this method **never fails**—it reports each result separately.

---

### **6️⃣ `Promise.race()` – First to Settle Wins**

Whichever promise **resolves or rejects first** determines the outcome.

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "one"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "two"));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // 'one' (since it resolves first)
});
```

📌 Useful for **timeouts**—whichever task completes first gets used.

---

### **7️⃣ `Promise.any()` – First Successful Promise Wins**

Returns the **first fulfilled promise**.  
If **all** promises reject, it throws an `AggregateError`.

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 500, "Second"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, "Third"));

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // 'First' (first resolved promise)
  })
  .catch((error) => {
    console.error(error);
  });
```

📌 Unlike `Promise.race()`, **only resolved promises are considered**.

---

## **Utility Methods**

### **8️⃣ `Promise.resolve()` – Create an Instantly Resolved Promise**

Creates a promise that resolves **immediately**.

```js
const resolvedPromise = Promise.resolve("Resolved value");
resolvedPromise.then(console.log); // 'Resolved value'
```

---

### **9️⃣ `Promise.reject()` – Create an Instantly Rejected Promise**

Creates a promise that **rejects immediately**.

```js
const rejectedPromise = Promise.reject(new Error("Promise rejected"));
rejectedPromise.catch(console.error); // 'Promise rejected'
```

---

## **Summary Table**

| Method                 | Behavior                                                     | Example Use Case                     |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------ |
| `.then()`              | Runs on success                                              | Handle API responses                 |
| `.catch()`             | Runs on failure                                              | Handle errors                        |
| `.finally()`           | Runs always                                                  | Cleanup after async task             |
| `Promise.all()`        | Resolves when **all** promises resolve (fails if any reject) | Fetch multiple API requests          |
| `Promise.allSettled()` | Resolves when **all** promises settle (never fails)          | Fetch multiple APIs & track failures |
| `Promise.race()`       | Resolves/rejects **as soon as one** settles                  | Implement timeouts                   |
| `Promise.any()`        | Resolves with **first fulfilled** promise                    | Use first available API response     |
| `Promise.resolve()`    | Returns a **resolved** promise                               | Testing async functions              |
| `Promise.reject()`     | Returns a **rejected** promise                               | Immediate failure scenarios          |

---

## **Final Thoughts**

- **Use Promises to handle async operations cleanly.**
- **Prefer `Promise.allSettled()` when you need all results, even if some fail.**
- **Use `Promise.race()` or `Promise.any()` for performance optimizations.**
- **Always handle errors using `.catch()`.**
  Here's a well-structured and refined version of your content with better readability and explanations:

---

# **4. JavaScript OOP (Object-Oriented Programming)**

## **What is OOP?**

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of **objects**. These objects contain **data (properties)** and **methods (functions)** that operate on the data.

## **Four Pillars of OOP in JavaScript**

1️⃣ **Encapsulation** – Hiding internal details and exposing only what’s necessary.  
2️⃣ **Abstraction** – Hiding implementation details and showing only functionality.  
3️⃣ **Inheritance** – Creating new classes from existing ones to reuse code.  
4️⃣ **Polymorphism** – One interface, multiple implementations.

---

## **Benefits of OOP**

✅ **Code reusability** – Reduce duplication using **inheritance**.  
✅ **Flexibility** – Modify behavior easily using **polymorphism**.  
✅ **Easier debugging** – **Encapsulation** isolates parts of the code.  
✅ **Code maintainability** – Modular and structured code.

---

## **1️⃣ Encapsulation**

Encapsulation is the process of **binding data and methods together** while restricting direct access to some properties.

🔹 **Protects data from unauthorized access**.  
🔹 **Prevents accidental modification**.

### **Example: Encapsulation in JavaScript**

```js
class BankAccount {
  #balance; // Private property (ES2020+ syntax)

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  getBalance() {
    // Public method to access balance
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150

// account.#balance = 1000; // ❌ Error: Private field cannot be accessed directly
```

📌 **Encapsulation ensures that data is only modified through controlled methods.**

---

## **2️⃣ Abstraction**

Abstraction **hides unnecessary details** and only exposes what’s essential.

🔹 **Simplifies complexity** by hiding implementation details.  
🔹 **Only necessary functionalities are available to the user**.

### **Example: Abstraction in JavaScript**

```js
class Car {
  startEngine() {
    console.log("Engine started...");
  }

  stopEngine() {
    console.log("Engine stopped...");
  }

  drive() {
    this.startEngine(); // Internal process hidden from the user
    console.log("Car is moving...");
  }
}

const myCar = new Car();
myCar.drive(); // User does not need to know how the engine starts.
```

📌 **We don’t expose how the engine starts—just that it does.**

---

## **3️⃣ Inheritance**

Inheritance allows a **child class** to acquire properties and methods from a **parent class**.

🔹 **Eliminates redundant code**.  
🔹 **Facilitates code reusability**.

### **Example: Inheritance in JavaScript**

```js
class Parent {
  getUser() {
    console.log("User data");
  }
}

class Child extends Parent {
  getRole() {
    console.log("User role");
  }
}

const obj = new Child();
obj.getUser(); // ✅ Inherited from Parent
obj.getRole(); // ✅ Defined in Child
```

📌 **The `Child` class reuses the `getUser()` method from `Parent`.**

---

## **4️⃣ Polymorphism**

Polymorphism allows objects to be used in **multiple forms**.

🔹 **Different objects can respond to the same method in different ways**.  
🔹 **Increases flexibility and scalability**.

### **Example 1: Method Overriding in Polymorphism**

```js
class Parent {
  getMobile() {
    console.log("Mobile 1");
  }
}

class Child extends Parent {
  getMobile() {
    console.log("Mobile 2"); // Overriding Parent's method
  }
}

const obj = new Child();
obj.getMobile(); // Output: Mobile 2
```

📌 **The method `getMobile()` is overridden in the `Child` class.**

---

### **Example 2: Using `toString()` in Polymorphism**

Different objects can define their own `toString()` method.

```js
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  toString() {
    return `Bank Account Balance: $${this.balance}`;
  }
}

const account = new BankAccount(100);
console.log(account.toString()); // Output: Bank Account Balance: $100

const person = { name: "John Doe" };
console.log(person.toString()); // Output: [object Object]
```

📌 **Each object provides a different string representation.**

---

## **Summary Table**

| Concept           | Definition                                            | Example                            |
| ----------------- | ----------------------------------------------------- | ---------------------------------- |
| **Encapsulation** | Hides internal details and protects data.             | Private class fields and getters.  |
| **Abstraction**   | Shows only relevant details, hides complexity.        | Car class with `drive()` method.   |
| **Inheritance**   | Child class inherits from parent class.               | `extends` keyword in JS classes.   |
| **Polymorphism**  | Same method behaves differently in different classes. | Method overriding (`getMobile()`). |

---

## **Final Thoughts**

✅ **Encapsulation** protects data from direct modification.  
✅ **Abstraction** hides internal logic and exposes only necessary parts.  
✅ **Inheritance** allows code reuse by extending classes.  
✅ **Polymorphism** enables objects to take multiple forms.

Would you like to see real-world examples like **API handling with OOP**? 🚀

# **5. HTTP Methods(GET, POST, PUT, and PATCH)**

In Node.js (or generally in REST APIs), the HTTP methods **GET, POST, PUT, and PATCH** are used for different types of operations:

### **1. GET**

- Used to retrieve data from a server.
- It should not change the server state (idempotent and safe).
- Example:
  ```js
  app.get("/users/:id", (req, res) => {
    // Fetch user data based on ID
    res.send({ id: req.params.id, name: "John Doe" });
  });
  ```

---

### **2. POST**

- Used to create new resources on the server.
- It is **not idempotent** (sending the same request multiple times can create duplicate resources).
- Example:
  ```js
  app.post("/users", (req, res) => {
    // Create a new user
    res.status(201).send({ message: "User created", user: req.body });
  });
  ```

---

### **3. PUT**

- Used to update a resource **completely** (replace the entire resource).
- It is **idempotent** (sending the same request multiple times will have the same effect).
- Example:
  ```js
  app.put("/users/:id", (req, res) => {
    // Replace the user data completely
    res.send({ message: "User updated", user: req.body });
  });
  ```

---

### **4. PATCH**

- Used to update a resource **partially** (only specific fields).
- It is **not necessarily idempotent** (depends on implementation).
- Example:
  ```js
  app.patch("/users/:id", (req, res) => {
    // Update specific fields of a user
    res.send({ message: "User partially updated", updatedFields: req.body });
  });
  ```

---

### **Other HTTP Methods in Node.js**

1. **DELETE** - Deletes a resource.

   ```js
   app.delete("/users/:id", (req, res) => {
     res.send({ message: "User deleted" });
   });
   ```

2. **OPTIONS** - Used to check what HTTP methods are supported on a route.

   ```js
   app.options("/users", (req, res) => {
     res.set("Allow", "GET, POST, PUT, PATCH, DELETE").send();
   });
   ```

3. **HEAD** - Same as GET but without a response body (useful for checking if a resource exists).

   ```js
   app.head("/users/:id", (req, res) => {
     res.status(200).end();
   });
   ```

4. **TRACE** - Used for debugging purposes to see what changes were made to the request.

# 6. **What is the event loop in JavaScript?**

The **event loop** is a mechanism in JavaScript that handles asynchronous operations by continuously checking the call stack and the task queue.

- **Call Stack**: Executes synchronous code.
- **Task Queue**: Stores callback functions from asynchronous operations.
- **Microtask Queue**: Stores promises and other high-priority tasks.
- **Macrotask Queue**: Stores intervals and other low-priority tasks.
- **Execution Order**:
  - Executes all synchronous code in the call stack.
  - Executes all microtasks (e.g., `Promise.then()`, `MutationObserver`).
  - Executes one task from the task queue (e.g., `setTimeout`, `setInterval`).

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

---

# 7. **Explain `this` in JavaScript.**

The value of `this` depends on how a function is called:

- **Global Scope (non-strict mode)**: `this` refers to the `window` object.
- **Global Scope (strict mode)**: `this` is `undefined`.
- **Inside an Object Method**: `this` refers to the object.
- **Arrow Functions**: `this` is lexically inherited (does not create its own `this`).
- **Constructor Function**: `this` refers to the newly created object.

```js
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
obj.greet(); // Alice

const arrowFunc = () => console.log(this);
arrowFunc(); // `this` depends on the surrounding scope

function regularFunc() {
  console.log(this);
}
regularFunc(); // In strict mode: undefined, otherwise window
```

# 8. **What is the difference between `var`, `let`, and `const`?**

| Feature      | `var`                                | `let`                     | `const`                   |
| ------------ | ------------------------------------ | ------------------------- | ------------------------- |
| Scope        | Function-scoped                      | Block-scoped              | Block-scoped              |
| Hoisting     | Hoisted (initialized as `undefined`) | Hoisted (not initialized) | Hoisted (not initialized) |
| Reassignable | Yes                                  | Yes                       | No                        |
| Redeclarable | Yes                                  | No                        | No                        |

```js
console.log(a); // undefined (hoisting)
var a = 10;

// console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;

const c = 30;
c = 40; // Error: Assignment to constant variable
```

### Example 2

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10 (hoisting)
console.log(b); // Error: Cannot access 'b' before initialization
console.log(c); // Error: Cannot access 'b' before initialization
```

---

# 9. **Explain `call()`, `apply()`, and `bind()`.**

- These methods are used to manipulate the `.this()` in javascript
- **call() :** Calls a function with a given this value and arguments passed individually.
- **apply() :** Similar to call(), but arguments are passed as an array.
- **bind() :**
  - Returns a new function with this set to the specified object.
  - Unlike call() and apply(), it does not immediately invoke the function.

| Method  | Function Invocation          | Arguments           |
| ------- | ---------------------------- | ------------------- |
| `call`  | Invokes function immediately | Passed individually |
| `apply` | Invokes function immediately | Passed as an array  |
| `bind`  | Returns a new function       | Passed individually |

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Hello, Alice!
greet.apply(person, ["Hi", "."]); // Hi, Alice.
const boundFunc = greet.bind(person, "Hey");
boundFunc("?"); // Hey, Alice?
```

# 10. **What is debouncing and throttling?**

Both **debouncing** and **throttling** are techniques used to control the rate at which a function executes, particularly useful for optimizing event-driven operations like scrolling, resizing, and input handling.

---

## **1. Debouncing**

Debouncing ensures that a function is executed **only after a specified delay** has passed **since the last time** the function was invoked. If the function is triggered again within the delay period, the timer resets.

### **Use Case:**

- Handling **search inputs** (e.g., triggering API calls only after the user stops typing).
- Resizing the window (e.g., only executing a function after resizing stops).

### **Implementation**

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example: Debounced search input
const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
  handleSearch(e.target.value);
});
```

🔹 **Explanation**: If the user types continuously, the function keeps delaying execution. It runs only when they stop typing for `500ms`.

---

## **2. Throttling**

Throttling ensures that a function **executes at most once per specified time interval**, no matter how many times the event is triggered.

### **Use Case:**

- Handling **scroll events** (e.g., triggering animations or lazy loading).
- Handling **button clicks** (e.g., preventing multiple submissions).

### **Implementation**

```javascript
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example: Throttled scroll event
const handleScroll = throttle(() => {
  console.log("Scrolled!");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

🔹 **Explanation**: The function executes at most **once per second**, even if the user scrolls continuously.

### Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS</title>
  </head>
  <body>
    <input id="wrapper" />
    <script>
      let s = document.getElementById("wrapper");
      s.onkeypress = wrapper;

      let counter = 0;
      let flag = true;
      function wrapper(params) {
        if (flag) {
          throttling();
          flag = false;
          setTimeout(() => {
            flag = true;
          }, 2000);
        }
      }

      function throttling() {
        console.log("called", ++counter);
      }
    </script>
  </body>
</html>
```

---

### **Key Differences**

| Feature              | Debouncing                                    | Throttling                                          |
| -------------------- | --------------------------------------------- | --------------------------------------------------- |
| **Definition**       | Executes function **after a delay**           | Ensures function runs **at most once per interval** |
| **Best for**         | Input fields, resize events                   | Scroll events, button clicks                        |
| **How it works**     | Delays execution, resets timer on new trigger | Executes at fixed intervals                         |
| **Example scenario** | Search input API calls                        | Preventing excessive API calls on scrolling         |

---

### **Which One to Use?**

- **Use debouncing** when you want to execute a function **only after the event stops occurring**.
- **Use throttling** when you want to execute a function **at a controlled rate** even if the event continues.

---

# 11. **What is the difference between `==` and `===` in JavaScript?**

| Operator | Type Coercion | Checks Value | Checks Type |
| -------- | ------------- | ------------ | ----------- |
| `==`     | Yes           | Yes          | No          |
| `===`    | No            | Yes          | Yes         |

```js
console.log(5 == "5"); // true  (type coercion)
console.log(5 === "5"); // false (strict comparison)
```

---

# 12. **What are generators in JavaScript?**

A **generator** is a special function that can pause execution and resume later.

```js
function* generatorFunction() {
  yield "First";
  yield "Second";
  yield "Third";
}

const gen = generatorFunction();
console.log(gen.next().value); // First
console.log(gen.next().value); // Second
console.log(gen.next().value); // Third
```

Generators are useful for **lazy evaluation** and **iterating over large datasets**.

---

# 13. **What is Deep Copy vs. Shallow Copy & Pass by Value vs. Pass by Reference?**

### **Deep Copy vs. Shallow Copy**

#### **Shallow Copy**

- A shallow copy creates a new object, but it only copies references to nested objects instead of copying the actual objects.
- If the original object contains other objects (like arrays or objects), the references to those objects are copied rather than the objects themselves.
- This means changes to a nested object in the copied object will also reflect in the original object.

##### **Example of Shallow Copy:**

```javascript
let obj1 = { a: 10, b: { c: 20 } };
let obj2 = Object.assign({}, obj1);

// Modify nested object
obj2.b.c = 50;

console.log(obj1.b.c); // 50 (Changed in both obj1 and obj2)
console.log(obj2.b.c); // 50
```

- Since `b` is an object, only its reference is copied.

##### **Other Ways to Create a Shallow Copy:**

- Using spread operator (`{ ...obj }`)
- Using `Object.assign({}, obj)`

---

#### **Deep Copy**

- A deep copy creates a completely new object, duplicating **all** values, including nested objects.
- Changes made in the copied object will **not** affect the original object.

##### **Example of Deep Copy:**

```javascript
let obj1 = { a: 10, b: { c: 20 } };

// Using JSON methods
let obj2 = JSON.parse(JSON.stringify(obj1));

// Modify nested object
obj2.b.c = 50;

console.log(obj1.b.c); // 20 (Remains unchanged)
console.log(obj2.b.c); // 50
```

- Here, `JSON.stringify()` converts the object into a string, and `JSON.parse()` converts it back to an object, breaking any reference links.

##### **Other Ways to Create a Deep Copy:**

- Using **Lodash**: `_.cloneDeep(obj)`
- Using **structuredClone()** (for modern browsers):
  ```javascript
  let obj2 = structuredClone(obj1);
  ```

---

### **Pass by Value vs. Pass by Reference**

#### **Pass by Value**

- **Primitive types** (like `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`, and `BigInt`) are **passed by value**.
- This means a copy of the value is passed to a function, and modifying it inside the function **does not** affect the original variable.

##### **Example:**

```javascript
let a = 10;

function modify(x) {
  x = 20;
}

modify(a);
console.log(a); // 10 (Unchanged)
```

- The function gets a copy of `a`, so the original `a` remains unchanged.

---

#### **Pass by Reference**

- **Objects, Arrays, and Functions** are **passed by reference** in JavaScript.
- This means that the function receives a reference (or memory address) of the original object, so modifying it inside the function **does affect** the original object.

##### **Example:**

```javascript
let obj = { a: 10 };

function modify(objRef) {
  objRef.a = 20;
}

modify(obj);
console.log(obj.a); // 20 (Changed)
```

- Since `obj` is an object, its reference is passed, and changes inside the function reflect in the original object.

---

### **Common Misconception: JavaScript Uses Pass-by-Value for Everything**

- Technically, **everything in JavaScript is passed by value**.
- However, for objects, the **value passed is a reference to the memory location** (not the actual object itself).
- This is why objects seem to behave as "pass by reference."

##### **Example to Demonstrate This:**

```javascript
let obj1 = { a: 10 };

function modify(objRef) {
  objRef = { a: 20 }; // This creates a new object and assigns it to objRef
}

modify(obj1);
console.log(obj1.a); // 10 (Unchanged)
```

- Inside the function, `objRef` gets a **new** object, but this **does not** affect `obj1`.

---

### **Summary Table**

| Concept               | Explanation                                                                          | Example                                                   |
| --------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Shallow Copy**      | Copies the object but keeps references to nested objects.                            | `Object.assign({}, obj)`, `{ ...obj }`                    |
| **Deep Copy**         | Copies everything, including nested objects.                                         | `JSON.parse(JSON.stringify(obj))`, `structuredClone(obj)` |
| **Pass by Value**     | Only a copy of the value is passed; changes do not affect the original variable.     | Works for primitives (`Number`, `String`, etc.)           |
| **Pass by Reference** | The reference (memory address) is passed; modifying the object affects the original. | Works for `Object`, `Array`, `Function`                   |

---
