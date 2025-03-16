# 1. **What is a Closure in JavaScript?**

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
