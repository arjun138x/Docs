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
