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

Here are **more advanced JavaScript coding questions** for interview preparation:

---

### **11. Find the Longest Substring Without Repeating Characters**

#### **Question:**

Given a string, find the length of the longest substring without repeating characters.

#### **Solution:**

```js
function longestUniqueSubstring(s) {
  let seen = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
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

---

### **12. Find Pairs in an Array That Sum to a Target**

#### **Question:**

Given an array of integers, return all pairs that sum to a given target.

#### **Solution:**

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

### **13. Merge Two Sorted Arrays Without Duplicates**

#### **Question:**

Given two sorted arrays, merge them into one sorted array without duplicates.

#### **Solution:**

```js
function mergeSortedArrays(arr1, arr2) {
  let merged = [...new Set([...arr1, ...arr2])];
  return merged.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 3, 6])); // [1, 2, 3, 5, 6]
```

---

### **14. Find the Majority Element in an Array**

#### **Question:**

Given an array, find the majority element (appears more than `n/2` times).

#### **Solution:** (Using **Boyer-Moore Voting Algorithm**)

```js
function majorityElement(nums) {
  let count = 0,
    candidate = null;

  for (let num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
```

---

### **15. Find the Kth Largest Element in an Array**

#### **Question:**

Find the `k`th largest element in an unsorted array.

#### **Solution:**

```js
function kthLargestElement(arr, k) {
  return arr.sort((a, b) => b - a)[k - 1];
}

console.log(kthLargestElement([3, 2, 1, 5, 6, 4], 2)); // 5
```

---

### **16. Check if Two Strings are Anagrams**

#### **Question:**

Determine if two strings are anagrams of each other.

#### **Solution:**

```js
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```

---

### **17. Implement a Function to Generate Fibonacci Numbers**

#### **Question:**

Generate the first `n` Fibonacci numbers.

#### **Solution:**

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

### **18. Implement a Function to Rotate an Array**

#### **Question:**

Rotate an array to the right by `k` steps.

#### **Solution:**

```js
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // [5, 6, 1, 2, 3, 4]
```

---

### **19. Implement a Function to Find the Longest Palindromic Substring**

#### **Question:**

Find the longest palindromic substring in a given string.

#### **Solution:**

```js
function longestPalindrome(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    let even = expandAroundCenter(s, i, i + 1);

    let longer = odd.length > even.length ? odd : even;
    if (longer.length > res.length) res = longer;
  }

  return res;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
```

---

### **20. Find the Intersection of Two Arrays**

#### **Question:**

Find the common elements between two arrays.

#### **Solution:**

```js
function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  return arr2.filter((num) => set1.has(num));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // [2, 4]
```

---

### **21. Implement a Function to Generate Power Set**

#### **Question:**

Generate all subsets of a given set (Power Set).

#### **Solution:**

```js
function powerSet(arr) {
  let result = [[]];

  for (let num of arr) {
    let newSubsets = result.map((subset) => [...subset, num]);
    result.push(...newSubsets);
  }

  return result;
}

console.log(powerSet([1, 2, 3]));
// [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
```

---
