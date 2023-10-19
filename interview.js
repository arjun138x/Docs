// js

// event loop == it has 3 parts
// folder structure
// performance optimization - it was in nodejs, browser
// in mongodb query taking long time. by using performance optimization we can sole this
// worked thread - convert into multi-thread
// micro thread and work thread
// cluster - nodejs is single threaded. by using cluster we can create instances of node
// pm2 ia a package - nodejs is single threaded. by using cluster we can create instances of node

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
