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
var name = "fruit";
var reverse = "";
for (let c in name) {
  reverse += name[name.length - c - 1];
}
console.log({ reverse });
```

```js
var name = "fruit";
var reverse = "";
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

### **Flatten a Nested Array with limited iterations/depth**

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
- **Efficient**: Reduces the need for intermediate variables.
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
