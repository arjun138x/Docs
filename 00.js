//  find sum of array without using for loop
const array = [1, 2, 3, 4, 5];

function sum(arr) {
  if (arr.length === 1) return arr[0];
  else return (arr[0] += sum(arr.slice(1)));
}
console.log(sum(array));
