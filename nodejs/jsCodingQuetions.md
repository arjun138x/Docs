### **1. Reverse a String Without Using Built-in Methods**

#### **Question:**

Write a function to reverse a string without using `split()`, `reverse()`, or `join()`.

#### **Solution:**

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

### **2. Find the First Non-Repeating Character**

#### **Question:**

Given a string, find the first non-repeating character and return it. If it doesn't exist, return `null`.

#### **Solution:**

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

### **3. Implement a Custom `map()` Function**

#### **Question:**

Write your own version of the `Array.prototype.map()` function.

#### **Solution:**

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

---

### **4. Flatten a Nested Array**

#### **Question:**

Write a function that flattens an array of nested arrays.

#### **Solution:**

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

### **5. Find the Missing Number in an Array**

#### **Question:**

Given an array containing `n` distinct numbers taken from `0, 1, 2, ..., n`, find the missing number.

#### **Solution:**

```js
function missingNumber(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1, 2, 3, 5])); // 4
```

---

### **6. Implement a Debounce Function**

#### **Question:**

Create a `debounce` function that delays execution of a function until after a specified delay.

#### **Solution:**

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

### **7. Implement a Throttle Function**

#### **Question:**

Create a `throttle` function that ensures a function executes at most once every given interval.

#### **Solution:**

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

### **8. Implement a Deep Clone Function**

#### **Question:**

Write a function to deeply clone an object.

#### **Solution:**

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

---

### **9. Implement an `async/await` Based `sleep()` Function**

#### **Question:**

Write a function that pauses execution for a given time.

#### **Solution:**

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

### **10. Implement a LRU Cache**

#### **Question:**

Design a **Least Recently Used (LRU) Cache** using JavaScript.

#### **Solution:**

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

These are some **challenging JavaScript coding questions** often asked in interviews. Want more? Let me know! 🚀
