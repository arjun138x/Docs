// js

// event loop == it has 3 parts
// folder structure
// performance optimization - it was in nodejs, browser
// in mongodb query taking long time. by using performance optimization we can sole this
// worked thread - convert into multi-thread
// micro thread and work thread
// cluster - nodejs is single threaded. by using cluster we can create instances of node
// pm2 ia a package - nodejs is single threaded. by using cluster we can create instances of node

//  count of array of numbers
var arr = [2, 3, 4, 5, 4, 3, 2, 6, 7, 7, 7];
// method 1
var result = {};
arr?.forEach((n) => {
  result[n] = result[n] || 0;
  result[n]++;
});
console.log({ result });

// method 2
var result = new Map();
arr?.forEach((n) => {
  result.get(n) ? result.set(n, result.get(n) + 1) : result.set(n, 1);
});
console.log({ result });

// sort given array. odd numbers in left and even numbers in right ascending order
const a = [3, 5, 2, 1, 6, 8];
for (let i = 0; i < a.length - 1; i++) {
  for (let j = i; j < a.length; j++) {
    // move odd numbers into left
    if (a[j] % 2 === 1 && a[i] % 2 === 0) [a[j], a[i]] = [a[i], a[j]];
    // sort numbers by ascending order
    else if (a[j] < a[i] && a[i] % 2 === a[j] % 2) [a[j], a[i]] = [a[i], a[j]];
  }
}

console.log(a); // [ 1, 3, 5, 2, 6, 8 ]

/* Flatten following array without using array.flat
[1,2,[3,4], [5, [6, 7,[8,[9]]]]] into -> [1,2,3,4,5,6,7,8,9] */

// method one
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

// method two with reduce
function customFlatArray(arr) {
  return arr.reduce((result, value) => {
    if (Array.isArray(value)) {
      result.push(...customFlatArray(value));
    } else {
      result.push(value);
    }
    return result;
  }, []);
}

console.log(customFlatArray([1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]));

// find the sum of numbers
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

// remove duplicate with one iteration
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

//  factorial of a given number.
function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

var fact = factorial(5);
console.log({ fact });

//  gassing the output

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

// what is the output
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
    3000
  );
  console.log(4);
})();

// print 1 2 3. without changing the var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i)), 1000;
}

// by using closer we can archive this
for (var i = 0; i < 3; i++) {
  function fn(i) {
    setTimeout(() => console.log(i)), 1000;
  }
  fn(i);
}

//  find sum of array without using for loop
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

// output of the following code
let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter); // 55
console.log(i); //11

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

// reverse the string
var name = "fruit";
var reverse = "";
for (let c in name) {
  reverse += name[name.length - c - 1];
}
console.log({ reverse });

// find coins count for amount
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

// How can I schedule a series of calendar events in Node.js to execute after specific intervals of time? For instance:
// Schedule book a movie, then  wait for a 5-second delay.
// Schedule a coffee break reminder then wait for a 6-second delay.
// Schedule a grocery shopping reminder and wait for 7-second delay.
// Schedule a car wash reminder and wait for 8-second delay.
// Schedule - means just console.log the task name

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

// filter the duplicates by fName & lName
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

// filter the duplicates with order of n
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

// guess the output
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("John");
console.log(john.getName());

// guess the output
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

// guess the output
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

// guess the output
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  // no change
  get(key) {
    // if key not exit return -1
    if (!this.map.has(key)) {
      return -1;
    }
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value); // 1,1
    if (this.map.size > this.capacity) {
      /**
       * map.keys(): This returns an iterator object that contains the keys of the Map in insertion order.
       * next(): This method of the iterator moves the iterator to the next key in the Map and returns an object with two properties: value, which is the next key, and done, which is a boolean indicating whether all keys have been iterated through.
       * next().value: This accesses the value property of the object returned by next(), which represents the next key in the Map.
       */
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
  }
}
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1

cache.put(3, 3);
console.log(cache.get(2)); // -1

cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4

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

  /* 
StatusData contains the id's of user which are currently active, we have to create two arrays 
one is activeUsers and another for nonActiveUsers also include one more key of active:true/false

Example
activeUsers = [{ name: 'devin', id: '1234', active: true },.......]
nonActiveUsers = [{name: 'alex', id: '1235', active: false},......]
*/

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

function secondAndThirdIndexAreMultipleOfTwo(params) {
  const input = [1, 2, 3];

  // output = [ [ 1, 2, 3 ], [ 4, 6, 8 ], [ 6, 8, 10 ] ]
  // second and third will be multiple of 2

  const len = 3;

  const test = [];

  for (let i = 0; i < len; i++) {
    const result = [];

    //   logic 1
    //   for (let j = 0; j < input.length; j++)
    //     result[j] = i === 0 ? input[j] : test[i - 1][j] * 2;

    //   logic 2
    for (let j = 0; j < input.length; j++)
      result[j] = i === 0 ? input[j] : (input[j] + i) * 2;

    test.push(result);
  }

  console.log(test);
}
