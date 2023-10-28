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
