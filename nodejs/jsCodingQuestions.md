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

### వివరణ (Explanation)

#### output

ముందుగా ఈ కోడ్ యొక్క అవుట్‌పుట్ వరుసగా ఇలా ఉంటుంది:

1. `10`
2. `5`
3. `3`

---

ఈ కోడ్‌లో `this` అనే కీవర్డ్ ఏ సందర్భంలో (context) దేనిని సూచిస్తుందో అర్థం చేసుకోవడం ముఖ్యం.

#### 1. `fn();` (అవుట్‌పుట్: 10)

ఇక్కడ `fn()` ను నేరుగా పిలిచారు. ఇలా పిలిచినప్పుడు, ఆ ఫంక్షన్ లోపల `this` అనేది **Global Object** (బ్రౌజర్‌లో అయితే `window`) ని సూచిస్తుంది. గ్లోబల్ స్కోప్‌లో `var length = 10;` అని ఉంది కాబట్టి, `this.length` విలువ **10** అవుతుంది.

#### 2. `fn.call(this);` (అవుట్‌పుట్: 5)

ఇక్కడ `call()` మెథడ్‌ని ఉపయోగించి, `fn` ఫంక్షన్‌కు `this` ని `obj` లాగా పంపించారు. కాబట్టి, ఇప్పుడు `fn` లోని `this` అనేది `obj` ని సూచిస్తుంది. `obj` లో `length: 5` అని ఉంది కాబట్టి, దీని అవుట్‌పుట్ **5** అవుతుంది.

#### 3. `arguments[0]();` (అవుట్‌పుట్: 3)

ఇది చాలా ముఖ్యమైన పాయింట్. `obj.method(fn, 1, 2)` అని పిలిచినప్పుడు, ఆ ఫంక్షన్‌కు పంపిన ఆర్గ్యుమెంట్స్ ఒక అర్రే లాంటి ఆబ్జెక్ట్ (`arguments`) లో సేవ్ అవుతాయి.

- `arguments[0]` అంటే మనం పంపిన `fn` ఫంక్షన్.
- `arguments` ఆబ్జెక్ట్‌కు కూడా ఒక `length` ప్రాపర్టీ ఉంటుంది, అది మనం ఎన్ని ఆర్గ్యుమెంట్స్ పంపామో దానిని సూచిస్తుంది. ఇక్కడ మనం మొత్తం 3 ఆర్గ్యుమెంట్స్ (`fn`, `1`, `2`) పంపాం, కాబట్టి `arguments.length` విలువ **3**.
- `arguments[0]()` అని పిలిచినప్పుడు, `this` అనేది `arguments` ఆబ్జెక్ట్‌ను సూచిస్తుంది, కాబట్టి అవుట్‌పుట్ **3** వస్తుంది.

---

### సారాంశం (Summary)

| కోడ్             | సందర్భం (Context)  | అవుట్‌పుట్ |
| ---------------- | ------------------ | ---------- |
| `fn()`           | Global Scope       | **10**     |
| `fn.call(this)`  | `obj` Context      | **5**      |
| `arguments[0]()` | `arguments` Object | **3**      |

---

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

### Explanation

ఈ కోడ్ JavaScript లో **Constructor Functions** మరియు **Prototypes** ఎలా పనిచేస్తాయో చూపిస్తుంది. దీన్ని సులభంగా అర్థం చేసుకుందాం:

### 1. Constructor Function (`Person`)

```javascript
function Person(name) {
  this.name = name;
}
```

ఇక్కడ `Person` అనేది ఒక బ్లూప్రింట్ (blueprint) లాంటిది. `new` కీవర్డ్ ఉపయోగించి మనం `Person` నుండి కొత్త ఆబ్జెక్ట్‌లను సృష్టించినప్పుడు, ఆ ఆబ్జెక్ట్‌కు `name` అనే ప్రాపర్టీని ఇది ఇస్తుంది. `this` అనేది మనం సృష్టించే కొత్త ఆబ్జెక్ట్‌ను సూచిస్తుంది.

### 2. Prototype (`getName`)

```javascript
Person.prototype.getName = function () {
  return this.name;
};
```

ప్రతి ఫంక్షన్‌కు `prototype` అనే ఒక ప్రత్యేక ఆబ్జెక్ట్ ఉంటుంది. మనం ఆ ప్రాపర్టీకి `getName` అనే మెథడ్‌ని జోడించాము.

- దీని వల్ల ప్రయోజనం ఏమిటంటే, మీరు ఎన్ని `Person` ఆబ్జెక్ట్‌లను సృష్టించినా, వారందరూ ఈ `getName` మెథడ్‌ను పంచుకుంటారు (share చేసుకుంటారు). ఇది మెమరీని ఆదా చేస్తుంది.

### 3. Object Creation (`new`)

```javascript
var john = new Person("John");
```

`new` కీవర్డ్‌ని వాడినప్పుడు మూడు పనులు జరుగుతాయి:

1. ఒక కొత్త ఖాళీ ఆబ్జెక్ట్ సృష్టించబడుతుంది.
2. ఆ ఆబ్జెక్ట్ యొక్క `prototype` సంబంధం `Person.prototype` కి అనుసంధానించబడుతుంది.
3. `Person` ఫంక్షన్ రన్ అవుతుంది, ఫలితంగా `john.name = "John"` అని సెట్ అవుతుంది.

### 4. Method Execution

```javascript
console.log(john.getName()); // Output: "John"
```

`john.getName()` అని పిలిచినప్పుడు, JavaScript మొదట `john` ఆబ్జెక్ట్‌లో ఆ మెథడ్ ఉందేమో వెతుకుతుంది. అక్కడ లేకపోతే, `john` యొక్క `prototype` (అంటే `Person.prototype`) లో వెతుకుతుంది. అక్కడ `getName` కనిపిస్తుంది కాబట్టి, అది రన్ అయ్యి `this.name` (అంటే "John")ని రిటర్న్ చేస్తుంది.

---

### క్లుప్తంగా:

- **Constructor:** కొత్త ఆబ్జెక్ట్‌లను తయారు చేయడానికి ఒక ఫ్యాక్టరీ లాంటిది.
- **Prototype:** ఒకే రకమైన ఆబ్జెక్ట్‌లన్నింటికీ కామన్ మెథడ్స్‌ని అందించడానికి ఒక షేర్డ్ మెమరీ లాంటిది.

---

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
  const result = [];

  function backtrack(index, currentSubset, currentSum) {
    // సమ్ మ్యాచ్ అయితే, ఆ సబ్‌సెట్‌ను రిజల్ట్‌లో యాడ్ చేయాలి
    if (currentSum === targetSum) {
      result.push([...currentSubset]);
      return;
    }

    // సమ్ ఎక్కువైతే లేదా అర్రే పూర్తయితే ఆపాలి
    if (currentSum > targetSum || index >= arr.length) {
      return;
    }

    // ప్రతి నంబర్‌ను సబ్‌సెట్‌లో చేర్చడం
    for (let i = index; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      backtrack(i + 1, currentSubset, currentSum + arr[i]);
      // బ్యాక్‌ట్రాక్: తర్వాత కాంబినేషన్ కోసం నంబర్‌ను తొలగించడం
      currentSubset.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}

// Example usage
const arr = [1, 3, 5, 4, 2];
const targetSum = 5;
const subsets = findSubsets(arr, targetSum);
console.log(subsets);
```

ఈ సమస్యను పరిష్కరించడానికి మనము **Backtracking** (బ్యాక్‌ట్రాకింగ్) అనే పద్ధతిని ఉపయోగిస్తాము. ఇచ్చిన అర్రేలో ఏ ఏ నంబర్ల మొత్తాన్ని కూడితే `targetSum` వస్తుందో, ఆ కాంబినేషన్లను కనుగొనడం దీని ముఖ్య ఉద్దేశ్యం.

---

### వివరణ (Explanation)

ఈ కోడ్ ఎలా పనిచేస్తుందో స్టెప్ బై స్టెప్ చూద్దాం:

1. **Recursion (పునరావృతం):** `backtrack` అనే ఫంక్షన్ ప్రతి నంబర్‌ను తీసుకుంటూ, దాన్ని సబ్‌సెట్‌లో యాడ్ చేస్తుంది.
2. **Base Case:** \* `currentSum === targetSum`: మనకు కావలసిన మొత్తం దొరికితే, ఆ సబ్‌సెట్‌ను `result`లో సేవ్ చేస్తుంది.

- `currentSum > targetSum`: ఒకవేళ సమ్ పెరిగిపోతే, ఆ దారిలో వెళ్లడం ఆపేస్తుంది (దీనినే 'Pruning' అంటారు).

3. **Backtracking (`pop` చేయడం):** ఒక కాంబినేషన్‌ని చెక్ చేసిన తర్వాత, `pop()` ఉపయోగించి చివరగా యాడ్ చేసిన నంబర్‌ను తొలగిస్తుంది. దీనివల్ల వేరే కొత్త నంబర్లతో కాంబినేషన్లు ట్రై చేయడానికి వీలవుతుంది.
4. **అవుట్‌పుట్:** మనం పంపిన `[1, 3, 5, 4, 2]` అర్రేలో 5ని ఇచ్చే కాంబినేషన్లు:

- `1 + 4 = 5`
- `3 + 2 = 5`
- `5 = 5`

**గమనిక:** పైన ఉన్న కోడ్ అన్ని సాధ్యమయ్యే సబ్‌సెట్‌లను కనుగొంటుంది. ఒకవేళ మీకు కేవలం నంబర్ల ఇండెక్స్ లేదా కౌంట్ కావాలంటే కోడ్‌ను చిన్నగా మార్చుకోవచ్చు.

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

ఈ సమస్యను పరిష్కరించడానికి అత్యంత సమర్థవంతమైన మార్గం **"Sliding Window"** పద్ధతి. ఇందులో మనం ఒక `window` (అంటే ఒక సబ్-స్ట్రింగ్)ని మెయింటైన్ చేస్తూ, డూప్లికేట్ అక్షరాలు రాకుండా చూసుకుంటాం.

```javascript
function longestUniqueSubstring(s) {
  let start = 0; // విండో ప్రారంభం
  let maxLength = 0; // గరిష్ట పొడవు
  let charMap = new Map(); // అక్షరాల ఇండెక్స్‌ను స్టోర్ చేయడానికి

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    // ఒకవేళ అక్షరం ఇప్పటికే విండోలో ఉంటే, స్టార్టింగ్ పాయింట్‌ను అప్‌డేట్ చేయాలి
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    }

    // అక్షరం యొక్క కొత్త ఇండెక్స్‌ను మ్యాప్‌లో స్టోర్ చేయాలి
    charMap.set(char, end);

    // విండో యొక్క పొడవును లెక్కించి, మ్యాక్స్‌ని అప్‌డేట్ చేయాలి
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb")); // 1
console.log(longestUniqueSubstring("pwwkew")); // 3
```

---

### వివరణ (Explanation)

ఈ అల్గారిథమ్ ఎలా పనిచేస్తుందో స్టెప్ బై స్టెప్ ఇక్కడ ఉంది:

1. **Sliding Window (`start` మరియు `end`):** మనం స్ట్రింగ్‌లో `end` పాయింటర్‌ను ఉపయోగిస్తూ ఒక్కో అక్షరాన్ని పరిశీలిస్తాం. `start` అనేది మన ప్రస్తుత యూనిక్ సబ్-స్ట్రింగ్ ఎక్కడ మొదలైందో చూపిస్తుంది.
2. **Map (`charMap`):** మనం చూసిన అక్షరం ఏ ఇండెక్స్‌లో ఉందో ఈ మ్యాప్ గుర్తుంచుకుంటుంది.
3. **డూప్లికేట్ అక్షరం వస్తే:** ఒకవేళ మనం చూస్తున్న అక్షరం ఇప్పటికే మన విండోలో ఉంటే (అంటే దాని ఇండెక్స్ `start` కంటే ఎక్కువగా ఉంటే), మనం విండోను కుదించి, పాత అక్షరం తర్వాత ఉన్న ఇండెక్స్ నుండి `start`ని కొత్తగా మొదలుపెడతాం.
4. **పొడవును లెక్కించడం:** ప్రతి అడుగులో `end - start + 1` ద్వారా విండో పొడవును కనుగొని, ఇప్పటివరకు వచ్చిన వాటిలో పెద్దది ఏదో `maxLength`లో సేవ్ చేస్తాం.

### ఎందుకు ఇది ఉత్తమమైనది?

- **Time Complexity:** $O(n)$, ఎందుకంటే మనం స్ట్రింగ్‌ను కేవలం ఒక్కసారి మాత్రమే స్కాన్ చేస్తాం.
- **Space Complexity:** $O(min(m, n))$, ఇక్కడ $m$ అనేది ఆల్ఫాబెట్ పరిమాణం.

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

### **Sorting an array with .sort((a,b) => a>b) works. Why?**

JavaScriptలో `.sort()` మెథడ్ గురించి మీరు అడిగిన ప్రశ్న చాలా ముఖ్యమైనది. దీనికి ప్రధాన కారణం: **JavaScript డిఫాల్ట్‌గా అన్నింటినీ 'స్ట్రింగ్స్' (Strings) లాగానే చూస్తుంది.**

దీనిని ఇంకా వివరంగా అర్థం చేసుకుందాం:

### 1. డిఫాల్ట్ ప్రవర్తన (The Default Behavior)

మీరు ఏ పారామీటర్ పంపకుండా కేవలం `arr.sort()` అని రాస్తే, JavaScript ఆ నంబర్లను అక్షరాల (UTF-16 code units) లాగా మారుస్తుంది.

ఉదాహరణకు:

```javascript
let nums = [10, 2, 5];
nums.sort();
console.log(nums); // అవుట్‌పుట్: [10, 2, 5]
```

ఇక్కడ `2` కంటే `10` చిన్నదని JavaScript గ్రహించలేదు. ఎందుకంటే అది `"10"` లోని మొదటి అక్షరం `"1"`ని, `"2"`తో పోల్చింది. `"1"`, `"2"` కంటే చిన్నది కాబట్టి `10` ముందు వచ్చింది.

### 2. `(a, b) => a - b` ఎందుకు రాస్తాం?

`sort()` మెథడ్‌కు మనం ఇచ్చే ఈ ఫంక్షన్‌ని **"Compare Function"** అంటారు. ఇది ఎలా పనిచేస్తుందంటే:

- **`a - b` అనేది నెగటివ్ విలువ ఇస్తే:** అంటే `a` చిన్నది, `b` పెద్దది. అప్పుడు `a`ని ముందు ఉంచుతుంది.
- **`a - b` అనేది పాజిటివ్ విలువ ఇస్తే:** అంటే `a` పెద్దది, `b` చిన్నది. అప్పుడు `b`ని ముందు ఉంచుతుంది (అంటే స్థానాన్ని మారుస్తుంది).
- **`0` వస్తే:** రెండూ సమానం అని అర్థం.

దీనివల్ల JavaScript ఆ నంబర్లను కేవలం అక్షరాలుగా కాకుండా, **గణిత విలువలుగా (Numeric values)** పోల్చి, సరిగ్గా అసెండింగ్ ఆర్డర్ (చిన్న నుండి పెద్దకు)లో అమర్చుతుంది.

### ఉదాహరణ:

```javascript
let nums = [10, 2, 5];
nums.sort((a, b) => a - b);
// పోలిక ఇలా జరుగుతుంది:
// 10 - 2 = 8 (పాజిటివ్, కాబట్టి 2 ముందు వస్తుంది)
// 10 - 5 = 5 (పాజిటివ్, కాబట్టి 5 ముందు వస్తుంది)
// ఫలితం: [2, 5, 10]
```

### గుర్తుంచుకోవాల్సిన చిట్కా:

- **అసెండింగ్ ఆర్డర్ (చిన్న నుండి పెద్దకు):** `(a, b) => a - b`
- **డిసెండింగ్ ఆర్డర్ (పెద్ద నుండి చిన్నకు):** `(a, b) => b - a`

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

ఈ ప్రశ్న **"Longest Palindromic Substring"** గురించి. ఒక స్ట్రింగ్‌లో ముందుకు చదివినా, వెనుకకు చదివినా ఒకేలా ఉండే అత్యంత పొడవైన భాగాన్ని (Substring) మనం కనుగొనాలి.

ఉదాహరణకు: `"cbbd"`లో `"bb"` అనేది పాలిండ్రోమ్. `"noon"` లో `"noon"` మొత్తం పాలిండ్రోమే.

### పరిష్కారం (JavaScript Solution):

దీనిని పరిష్కరించడానికి **"Expand Around Center"** అనే పద్ధతి చాలా సులభం మరియు సమర్థవంతమైనది.

```javascript
function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0,
    maxLength = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // పాలిండ్రోమ్ పొడవును లెక్కించడం
    let currentLength = right - left - 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      start = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // బేసి సంఖ్యలో అక్షరాలు ఉన్నప్పుడు (ఉదా: "aba")
    expandAroundCenter(i, i + 1); // సరి సంఖ్యలో అక్షరాలు ఉన్నప్పుడు (ఉదా: "abba")
  }

  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("noon")); // "noon"
```

---

### వివరణ (Explanation):

1. **కేంద్రం (Center):** ఒక పాలిండ్రోమ్‌కు మధ్యలో ఒక కేంద్రం ఉంటుంది.

- ఉదాహరణకు `"aba"`లో `'b'` కేంద్రం.
- `"abba"`లో `'bb'` మధ్యలో కేంద్రం ఉంటుంది.

2. **అల్గారిథమ్:**

- మనం ప్రతి అక్షరాన్ని కేంద్రంగా భావించి, రెండు వైపులా (ఎడమ మరియు కుడి) అక్షరాలను పోల్చుకుంటూ వెళ్తాం.
- అక్షరాలు సమానంగా ఉన్నంత వరకు `while` లూప్ ద్వారా విండోను విస్తరిస్తాం (`left--`, `right++`).
- అక్షరాలు వేరుగా మారినప్పుడు, లూప్ ఆగిపోతుంది. అప్పటివరకు వచ్చిన పాలిండ్రోమ్ యొక్క పొడవును `maxLength`తో పోల్చి అప్‌డేట్ చేస్తాం.

3. **రెండు రకాల సెంటర్లు:**

- `expandAroundCenter(i, i)`: ఇది బేసి సంఖ్యల (odd length) పాలిండ్రోమ్‌ల కోసం (ఉదా: `aba`).
- `expandAroundCenter(i, i + 1)`: ఇది సరి సంఖ్యల (even length) పాలిండ్రోమ్‌ల కోసం (ఉదా: `bb`, `noon`).

### ఎందుకు ఈ పద్ధతి?

- **Time Complexity:** $O(n^2)$ - స్ట్రింగ్ పొడవు $n$ అనుకుంటే, ప్రతి అక్షరం నుండి బయటకు విస్తరించడానికి ఈ సమయం పడుతుంది. ఇది చాలా వేగవంతమైన పద్ధతి.
- **Space Complexity:** $O(1)$ - ఎందుకంటే మనం కొత్తగా పెద్ద మెమరీని వాడట్లేదు.

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
