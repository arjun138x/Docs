### **Numbers count**

Method 1 (**using object**)

```js
let arr = [2, 3, 4, 5, 4, 3, 2, 6, 7, 7, 7];
let result = {};
arr?.forEach((n) => {
  result[n] = (result[n] || 0) + 1;
});
console.log({ result });
```

Method 2 (**using new Map**)

```js
let arr = [2, 3, 4, 5, 4, 3, 2, 6, 7, 7, 7];
//  new Map() is faster then the Object
let result = new Map();
arr?.forEach((n) => {
  result.get(n) ? result.set(n, result.get(n) + 1) : result.set(n, 1);
});
console.log({ result });
```

---

### **Remove the duplicates**

```js
let arr = [5, 7, 9, 3, 2, 9, 7, 8, 6, 6];

const count = {};
const result = [];
for (const n of arr) {
  count[n] = (count[n] || 0) + 1;
  //   if count is >1 it is a duplicate
  if (count[n] > 1) result.splice(result.indexOf(n), 1);
  else result.push(n);
}

console.log(result); // result: [ 5, 3, 2, 8 ]
```

---

### **Flatten a Nested Array**

Write a function that flattens an array of nested arrays.

```js
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
```

```js
function customFlatten(arr) {
  let flattened = [];

  function flattenHelper(arr) {
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenHelper(element);
      } else {
        flattened.push(element);
      }
    }
  }

  flattenHelper(arr);
  return flattened;
}

const originalArray = [1, 2, [3, 4], [5, [6, 7, [8, [9]]]]];
const flattenedArray = customFlatten(originalArray);
console.log(flattenedArray);
```

---

### **Flatten a Nested Array with depth**

```js
function flattenArray(arr, depth) {
  let result = [];

  function helper(arr, currentDepth) {
    for (let element of arr) {
      if (Array.isArray(element) && currentDepth < depth) {
        helper(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    }
  }

  helper(arr, 0);

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6], 1));
// Output: [1, 2, [3, 4], 5, 6]
```

---

### **Find the sum of numbers**

- Filter the numbers(question 2)

```js
obj = {
  a: 2,
  b: { x: 4, y: { foo: 3, z: { bar: 2 } } },
  c: { p: { h: 2, r: 5 }, q: "ball", r: 5 },
  d: 1,
  e: { nn: { lil: 2 }, mm: "car" },
};

function sumOfNumbers(obj) {
  var sum = 0;

  function supportFunction(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        sum += obj[key];
      } else if (typeof obj[key] === "object") {
        supportFunction(obj[key]);
      }
    }
  }

  supportFunction(obj);

  return sum;
}

console.log(sumOfNumbers(obj));
```

---

### **Remove duplicate with one iteration**

```js
var array = [1, 2, 1, 3, 5, 1, true, undefined, false, "aa", true, "aa"];

const uniqueValues = [];
const seen = new Map();

for (let i = 0; i < array.length; i++) {
  const value = array[i];
  if (!seen.has(value)) {
    uniqueValues.push(value);
    seen.set(value, true);
  }
}

console.log(uniqueValues);
```

---

### Factorial of a given number.

```js
function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

var fact = factorial(5);
console.log({ fact });
```

---

### Guess the output

- Question

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    /**
     * run this in browser.
     * we are calling the fn() the output is 10
     * we are calling outside function so that function scope is applied.
     * in this case we are calling function in global scope so this refers to the window object.
     */
    fn(); //

    /** to manipulate this we can use call(), apply(), bind() methods */
    fn.call(this);

    /* *
     * run this in browser.
     * in this case this is referred to arguments
     * */
    arguments[0](); // calling fn() output = 3
  },
};

obj.method(fn, 1, 2);
```

- Question

```js
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);

  /* * it will print 1 3 and through the error.
   * the IIFE will execute immediately and the callback function is undefined. it through the error
   * TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
   */
  setTimeout(
    (function () {
      console.log(3);
    })(), // IIFE
    3000,
  );
  console.log(4);
})();
```

- Question

```js
let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter); // 55
console.log(i); //11
```

- Question

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("John");
console.log(john.getName());
```

- Question

```js
// promise(micro task queue) has high priority then the timeIntervals(macro task queue)
console.log("Start");
setTimeout(function () {
  console.log("Timeout");
}, 0);
Promise.resolve().then(function () {
  console.log("Promise");
});
console.log("End");

// guess the output
console.log("Start");
setTimeout(() => console.log("First timeout"), 0);
setTimeout(() => console.log("Second timeout"), 100);
setTimeout(() => console.log("Third timeout"));
console.log("End");
// Start
// End
// First timeout
// Third timeout
// Second timeout
```

- Question

```js
/**
 * The code starts with a self-executing function enclosed in parentheses ((function() { ... })();).
 * It creates a private scope, meaning variables and functions declared within it are not accessible from outside.
 * It executes immediately, producing a value that's assigned to CalculatorModule.
 * This pattern creates a module-like construct with controlled access to certain parts.
 * It's a way to organize code with private data and public methods.
 * The underscore prefix (_) is a convention to indicate private members, but JavaScript doesn't have true private variables.
 */
const CalculatorModule = (function () {
  let _data = 0; // private member

  function add(input) {
    _data += input;
    return _data;
  }

  function subtract(input) {
    _data -= input;
    return _data;
  }

  return {
    add,
    subtract,
  };
})();
console.log(CalculatorModule.add(5)); // 5
console.log(CalculatorModule.subtract(2)); // 3
```

- Question

```js

```

---

### **Print 1 2 3. without changing the var**

```js
for (var i = 0; i < 3; i++) {
  (setTimeout(() => console.log(i)), 1000);
}

// by using closer we can archive this
for (var i = 0; i < 3; i++) {
  function fn(i) {
    (setTimeout(() => console.log(i)), 1000);
  }
  fn(i);
}
```

---

### **Find sum of array without using for loop**

```js
function sumArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

const array = [1, 2, 3, 4, 5];
var sum = sumArray(array);
console.log(sum); // Output: 15
```

---

### **Binary search**

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // element found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // continue searching on the right side
    } else {
      right = mid - 1; // continue searching on the left side
    }
  }

  return -1; // element not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

const resultIndex = binarySearch(sortedArray, target);
if (resultIndex !== -1) {
  console.log(`Element ${target} found at index ${resultIndex}`);
} else {
  console.log(`Element ${target} not found in the array`);
}
```

---

### **Find coins count for amount**

```js
const coins = [1, 2, 5, 10, 20, 50, 100, 200, 500].reverse();
const value = [179, 1059, 42, 80, 542];

const output = []; // [6, 6, 3, 3, 4];

for (let amount of value) {
  let count = 0;
  for (const coin of coins) {
    if (amount >= coin) {
      count += Math.floor(amount / coin);
      amount = amount % coin;
    }
  }
  output.push(count);
}

console.log({ output });
```

---

### **How can I schedule a series of calendar events in Node.js to execute after specific intervals of time? For instance:**

- Schedule book a movie, then wait for a 5-second delay.
- Schedule a coffee break reminder then wait for a 6-second delay.
- Schedule a grocery shopping reminder and wait for 7-second delay.
- Schedule a car wash reminder and wait for 8-second delay.
- Schedule - means just console.log the task name

```js
(async () => {
  async function scheduleEvent(eventName, delay) {
    // Create a promise that resolves after the specified delay
    await new Promise((resolve) => setTimeout(resolve, delay));
    // Log the event name after the delay
    console.log(eventName);
  }

  // Schedule events
  await scheduleEvent("Book a movie", 3000);
  await scheduleEvent("Coffee break reminder", 3000);
  await scheduleEvent("Grocery shopping reminder", 3000);
  await scheduleEvent("Car wash reminder", 3000);
})();
```

---

### **Filter the duplicates by fName & lName**

```js
let data = [
  { fName: "a", lName: "b", age: 21 },
  { fName: "ay", lName: "b", age: 22 },
  { fName: "a", lName: "bc", age: 23 },
  { fName: "a", lName: "b", age: 24 },
  { fName: "a", lName: "bc", age: 25 },
  { fName: "ac", lName: "b", age: 23 },
  { fName: "ab", lName: "c", age: 26 },
  { lName: "c", fName: "ab", age: 26 },
];

var result = [data[0]];
for (let i = 1; i < data.length; i++) {
  const { fName, lName, age } = data[i];
  let exist = false;
  for (const res of result)
    if (res?.fName === fName && res?.lName === lName) {
      exist = true;
      break;
    }
  if (!exist) result.push(data[i]);
}

console.log({ result });
```

---

### **Filter the duplicates with order of n**

```js
function removerDuplicateObjectsInSingleIteration() {
  const users = [
    { name: "arjun", age: 25 },
    { name: "arjun", age: 25 },
  ];

  const seen = new Set();

  const result = users.filter((user) => {
    const exist = seen.has(user.name + user.age);
    seen.add(user.name + user.age);
    if (!exist) return user;
  });

  console.log(result);
}
removerDuplicateObjectsInSingleIteration();
```

---

### Filter by status

- StatusData contains the id's of user which are currently active, we have to create two arrays.
- one is activeUsers and another for nonActiveUsers also include one more key of active:true/false

- Example
  - activeUsers = [{ name: 'devin', id: '1234', active: true },.......]
  - nonActiveUsers = [{name: 'alex', id: '1235', active: false},......]

```js
function creteActiveAndInactiveUsers() {
  let data = [
    { name: "devin", id: "1234" },
    { name: "alex", id: "1235" },
    { name: "sam", id: "1236" },
    { name: "jordan", id: "1237" },
    { name: "taylor", id: "1238" },
    { name: "morgan", id: "1239" },
    { name: "casey", id: "1240" },
    { name: "jamie", id: "1241" },
    { name: "pat", id: "1242" },
    { name: "drew", id: "1243" },
  ];

  let statusData = [
    { id: "1234" },
    { id: "1236" },
    { id: "1238" },
    { id: "1240" },
  ];

  const newStatusData = new Set(statusData.map(({ id }) => id));
  const activeUsers = [];
  const nonActiveUsers = [];

  for (const user of data) {
    newStatusData.has(user.id)
      ? activeUsers.push({ ...user, active: true })
      : nonActiveUsers.push({ ...user, active: false });
  }

  console.log({ activeUsers, nonActiveUsers });
}
```

---

### **Subsets of targeted number**

```js
function findSubsets(arr, targetSum) {
  const result = []; // Array to store valid subsets

  function support(i = 0, sum = 0, subset = []) {
    console.log(subset);
    // Base case: If the sum matches the target, add the subset to the result
    if (sum === targetSum) {
      result.push(subset);
      return;
    }

    // Base case: Stop recursion if sum exceeds target or index reaches the end
    if (sum > targetSum || i === arr.length) return;

    // Recursive case: Include the current element if sum remains within target
    if (sum < targetSum) support(i + 1, sum + arr[i], subset.concat(arr[i]));

    // Recursive case: Exclude the current element and move to the next one
    support(i + 1, sum, subset);
  }

  support(0, 0, []); // Initial call to recursive function
  return result; // Return all valid subsets
}

// Example usage
const arr = [1, 3, 5, 4, 2];
const targetSum = 5;
const subsets = findSubsets(arr, targetSum);
console.log(subsets);
```

---

### **Third highest**

```js
function thirdHighest(arr) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? null : third;
}

// Example usage:
console.log(thirdHighest([4, 1, 7, 7, 2, 4, 8, 8])); // Output: 4
console.log(thirdHighest([10, 10, 10])); // Output: null
console.log(thirdHighest([1, 2])); // Output: null
```

---

### **Reverse a String Without Using Built-in Methods `split()`, `reverse()`, or `join()`**

```js
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

```js
let name = "fruit";
let reverse = "";
for (let c in name) {
  reverse += name[name.length - c - 1];
}
console.log({ reverse });
```

```js
let name = "fruit";
let reverse = "";
for (let c of name) {
  reverse = c + reverse;
}
console.log({ reverse });
```

---

### **Find the First Non-Repeating Character**

```js
function firstNonRepeatingChar(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbccdeff")); // "d"
console.log(firstNonRepeatingChar("aabb")); // null
```

---

### **Implement a Debounce Function**

Create a `debounce` function that delays execution of a function until after a specified delay.

```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Debounced!"), 300);
window.addEventListener("resize", log);
```

---

### **Implement a Throttle Function**

Create a `throttle` function that ensures a function executes at most once every given interval.

```js
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const log = throttle(() => console.log("Throttled!"), 1000);
window.addEventListener("scroll", log);
```

---

### **Implement a Deep Clone Function**

Write a function to deeply clone an object.

```js
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 99;

console.log(original.b.c); // 2 (original remains unchanged)
console.log(copy.b.c); // 99
```

#### Solution 2

```js
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
copy.b.c = 99;

console.log(original.b.c); // 2 (original remains unchanged)
console.log(copy.b.c); // 99
```

---

### **Implement an `async/await` Based `sleep()` Function**

Write a function that pauses execution for a given time.

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test() {
  console.log("Start");
  await sleep(2000);
  console.log("After 2 seconds");
}

test();
```

---

### **Implement a LRU Cache**

Design a **Least Recently Used (LRU) Cache** using JavaScript.

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // Remove least recently used
      this.map.keys() returns an iterator over the keys of the Map.
      /*
      .next() retrieves the first key from the iterator (which is the least recently used key because Map maintains insertion order).
      .value extracts the key from the next() result.
      this.cache.delete(...) attempts to remove the least recently used (LRU) key from the cache.
      */
    }
    this.cache.set(key, value);
  }
}

const lru = new LRUCache(2);
lru.put(1, 10);
lru.put(2, 20);
console.log(lru.get(1)); // 10
lru.put(3, 30);
console.log(lru.get(2)); // -1 (removed)
```

---

### **Find the Longest Substring Without Repeating Characters**

Given a string, find the length of the longest substring without repeating characters.

```js
function longestUniqueSubstring(s) {
  let seen = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Sliding Window Approach
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
console.log(longestUniqueSubstring("bbbbb")); // 1 ("b")
console.log(longestUniqueSubstring("pwwkew")); // 3 ("wke")
```

### Explanation: [Youtube video](https://www.youtube.com/watch?v=wiGpQwVHdE0)

---

### **Find Pairs in an Array That Sum to a Target**

Given an array of integers, return all pairs that sum to a given target.

```js
function findPairs(arr, target) {
  let seen = new Set();
  let pairs = [];

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([num, complement]);
    }
    seen.add(num);
  }

  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7)); // [[4, 3], [5, 2], [6, 1]]
```

---

### **Merge Two Sorted Arrays Without Duplicates**

```js
function mergeSortedArrays(arr1, arr2) {
  let merged = [...new Set([...arr1, ...arr2])];
  return merged.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 3, 6])); // [1, 2, 3, 5, 6]
```

---

### **Check if Two Strings are Anagrams**

```js
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```

---

### **Implement a Function to Generate Fibonacci Numbers**

Generate the first `n` Fibonacci numbers.

```js
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

### **Find the Intersection of Two Arrays**

Find the common elements between two arrays.

```js
function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  return arr2.filter((num) => set1.has(num));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // [2, 4]
```

---

### **What is Method Chaining**?

**Method chaining** is a programming technique where **multiple methods are called in a single line**, one after the other, on the **same object**. Each method returns the object itself (`this`), allowing the next method in the chain to be called.

#### ✅ **Example using classes**

```js
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this; // Important for chaining
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  result() {
    return this.value;
  }
}

// Usage
const calc = new Calculator();
const final = calc.add(10).subtract(3).multiply(2).result();
console.log(final); // Output: 14

// wrap with function
function cal() {
  return new Cal();
}
console.log(cal().add(10).subtract(5).multiply(20).divide(2).getResult());
```

#### ✅ **Example using function**

```js
function cal() {
  let val = 0;
  return {
    add(n) {
      val += n;
      return this;
    },
    subtract(n) {
      val -= n;
      return this;
    },
    multiply(n) {
      val *= n;
      return this;
    },
    divide(n) {
      val /= n;
      return this;
    },
    getResult() {
      return val;
    },
  };
}

console.log(cal().add(10).subtract(5).multiply(20).divide(2).getResult());
```

---

#### 🔍 Why Method Chaining?

- **Readable**: Looks clean and fluent.
- **Efficient**: Reduces the need for intermediate letiables.
- **Popular in Libraries**: Like jQuery, Mongoose, Lodash, etc.

---

#### 🔧 Real-World Example: Mongoose (MongoDB ODM)

```js
User.find({ active: true })
  .sort({ name: 1 })
  .limit(10)
  .select("name email")
  .exec((err, users) => {
    if (err) return console.error(err);
    console.log(users);
  });
```

Each method returns a query object, allowing further chaining.

---

### **nested children / buildTree ?**

```js
// Sample flat user data where each user has an `id`, a `name`, and a `managerId`.
// The `managerId` establishes the hierarchy (e.g., who reports to whom).
const userData = [
  { id: 1, name: "Alice", managerId: null }, // Top-level manager (CEO)
  { id: 2, name: "Bob", managerId: 1 }, // Reports to Alice
  { id: 3, name: "Charlie", managerId: 1 }, // Reports to Alice
  { id: 4, name: "David", managerId: 2 }, // Reports to Bob
  { id: 5, name: "Eve", managerId: 2 }, // Reports to Bob
  { id: 6, name: "Frank", managerId: 4 }, // Reports to David
];

// Recursive function to build a hierarchical tree structure from flat data.
function buildTree(users, parentId = null) {
  const tree = [];

  // Find all users whose managerId matches the current parentId
  const childNodes = users.filter((user) => user.managerId === parentId);

  // For each child node, recursively build its own children
  childNodes.forEach((node) => {
    const children = buildTree(users, node.id); // Recursive call for current node's children

    // Create a new node object including its children (or null if no children)
    const newNode = {
      ...node,
      children: childNodes.length > 0 ? children : null,
    };

    // Add the new node to the result tree
    tree.push(newNode);
  });

  return tree; // Return the constructed tree for the current level
}

const treeStructure = buildTree(userData);
console.log(JSON.stringify(treeStructure, null, 2));
```

---

### **Implement a Custom `map()` Function**

Write your own version of the `Array.prototype.map()` function.

```js
function customMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

console.log(customMap([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
```

### **Implement a Function to Find the Longest Palindromic Substring**

Find the longest palindromic substring in a given string.

- A palindrome is any set of characters that read the same forwards and backwards. For example: 'noon' is a palindrome, and 'loon' is not. Both of these strings contain palindromic substrings 'oo'.

```js
function longestPalindrome(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (centered at i)
    let odd = expandAroundCenter(s, i, i);
    // Check for even-length palindromes (centered between i and i+1)
    let even = expandAroundCenter(s, i, i + 1);

    let longer = odd.length > even.length ? odd : even;
    if (longer.length > res.length) res = longer;
  }

  return res; // Return the longest palindromic substring
}

// Function to expand around a given center and return the longest palindrome substring
function expandAroundCenter(s, left, right) {
  // Expand while characters at left and right are equal and within bounds
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--; // Move left pointer outward
    right++; // Move right pointer outward
  }

  // Return the valid palindrome found (substring between left+1 and right)
  return s.slice(left + 1, right);
}

// Example test cases
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
console.log(longestPalindrome("noon")); // Output: "noon"
```

---

### **Implement a Promise Pool (Advanced)**

Implement a function that runs a maximum of `N` promises concurrently.

```js
function promisePool(tasks, n) {
  let index = 0;
  let running = 0;

  return new Promise((resolve) => {
    function next() {
      if (index >= tasks.length && running === 0) resolve();

      while (running < n && index < tasks.length) {
        running++;
        tasks[index++]().finally(() => {
          running--;
          next();
        });
      }
    }
    next();
  });
}

// Example usage:
const tasks = [
  () =>
    new Promise((res) => setTimeout(() => res(console.log("Task 1")), 1000)),
  () => new Promise((res) => setTimeout(() => res(console.log("Task 2")), 500)),
  () =>
    new Promise((res) => setTimeout(() => res(console.log("Task 3")), 1500)),
  () => new Promise((res) => setTimeout(() => res(console.log("Task 4")), 800)),
];

promisePool(tasks, 2);
```

---
