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
let arr_1 = [2, 3, 4, 5, 4, 3, 2, 6, 7, 7, 7];
const count = {};

for (let i = 0; i < arr_1.length; i++) {
  count[arr_1[i]] = count[arr_1[i]] || 0;
  count[arr_1[i]]++;
}

console.log({ count });

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
