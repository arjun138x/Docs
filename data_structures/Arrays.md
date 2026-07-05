For backend interviews (Node.js/NestJS/AWS), **Arrays** is the single most important DSA topic. Before moving to other data structures, you should solve around **50 array problems**.

Below is a roadmap of array problems from beginner to advanced, along with the approach and time complexity. Try solving each problem yourself before looking at the solution.

---

# Level 1 – Easy (Basics)

## 1. Find Maximum Element

**Problem**

Given an array, find the largest element.

```text
Input:
[4, 8, 2, 10, 6]

Output:
10
```

### Solution

```javascript
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([4, 8, 2, 10, 6]));
```

**Time:** O(n)

**Space:** O(1)

---

# 2. Find Minimum Element

```javascript
function findMin(arr) {
  let min = arr[0];

  for (let num of arr) {
    if (num < min) min = num;
  }

  return min;
}
```

Time: O(n)

---

# 3. Sum of Array

```javascript
function sumArray(arr) {
  let sum = 0;

  for (const num of arr) sum += num;

  return sum;
}
```

---

# 4. Average of Array

```javascript
function average(arr) {
  return sumArray(arr) / arr.length;
}
```

---

# 5. Count Even Numbers

```javascript
function countEven(arr) {
  let count = 0;

  for (const num of arr) {
    if (num % 2 === 0) count++;
  }

  return count;
}
```

---

# 6. Reverse an Array

Input

```text
1 2 3 4 5
```

Output

```text
5 4 3 2 1
```

### Solution

```javascript
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}
```

Time: O(n)

Space: O(1)

---

# 7. Check if Array is Sorted

```javascript
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}
```

---

# 8. Find Second Largest

```javascript
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second;
}
```

---

# 9. Remove Duplicates (Sorted Array)

Input

```text
1 1 2 2 3 4 4
```

Output

```text
1 2 3 4
```

Solution

```javascript
function removeDuplicates(arr) {
  if (arr.length === 0) return [];

  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  return arr.slice(0, j + 1);
}
```

---

# 10. Move Zeroes to End

Input

```text
[0,1,0,3,12]
```

Output

```text
[1,3,12,0,0]
```

Solution

```javascript
function moveZeroes(arr) {
  let index = 0;

  for (let num of arr) {
    if (num !== 0) {
      arr[index++] = num;
    }
  }

  while (index < arr.length) {
    arr[index++] = 0;
  }

  return arr;
}
```

---

# Level 2 – Intermediate

---

Great choice. Problems **11–20** cover some of the most common interview patterns (rotation, two pointers, hashing, XOR, Floyd's algorithm, Moore's voting, and greedy).

---

# 11. Rotate Array Left by K

### Problem

```text
Input:
arr = [1,2,3,4,5]
k = 2

Output:
[3,4,5,1,2]
```

### Solution (Reversal Algorithm)

```javascript
function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
```

**Time:** O(n)

**Space:** O(1)

---

# 12. Rotate Array Right by K

```text
Input:
[1,2,3,4,5]
k = 2

Output:
[4,5,1,2,3]
```

```javascript
function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function rotateRight(arr, k) {
  const n = arr.length;
  k %= n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
```

---

# 13. Merge Two Sorted Arrays

```text
Input:
[1,3,5]
[2,4,6]

Output:
[1,2,3,4,5,6]
```

```javascript
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  while (i < arr1.length) result.push(arr1[i++]);

  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

console.log(merge([1, 3, 5], [2, 4, 6]));
```

Time: **O(n+m)**

---

# 14. Intersection of Two Arrays

```text
Input:
[1,2,2,3]
[2,2,4]

Output:
[2]
```

```javascript
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (const num of nums2) {
    if (set1.has(num)) result.add(num);
  }

  return [...result];
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
```

Time: **O(n)**

---

# 15. Union of Arrays

```javascript
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3], [2, 3, 4]));
```

Output

```text
[1,2,3,4]
```

---

# 16. Find Missing Number (XOR Method)

```text
Input:
[3,0,1]

Output:
2
```

```javascript
function missingNumber(nums) {
  let xor = nums.length;

  for (let i = 0; i < nums.length; i++) {
    xor ^= i;
    xor ^= nums[i];
  }

  return xor;
}

console.log(missingNumber([3, 0, 1]));
```

Time: **O(n)**

Space: **O(1)**

---

# 17. Find Duplicate Number (Floyd's Cycle Detection)

```text
Input:
[1,3,4,2,2]

Output:
2
```

```javascript
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
```

Time: **O(n)**

Space: **O(1)**

---

# 18. Majority Element (Moore Voting)

```text
Input:
[2,2,1,1,2]

Output:
2
```

```javascript
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) candidate = num;

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 2]));
```

Time: **O(n)**

Space: **O(1)**

---

# 19. Best Time to Buy and Sell Stock

```text
Input:
[7,1,5,3,6,4]

Output:
5
```

Explanation:

Buy at **1**

Sell at **6**

Profit = **5**

```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let profit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
```

Time: **O(n)**

Space: **O(1)**

---

# 20. Maximum Consecutive Ones

```text
Input:
[1,1,0,1,1,1]

Output:
3
```

```javascript
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
```

Time: **O(n)**

Space: **O(1)**

---

## Patterns You Learn from Problems 11–20

| Problem                           | Pattern/Technique                         |
| --------------------------------- | ----------------------------------------- |
| 11. Rotate Left                   | Reversal Algorithm                        |
| 12. Rotate Right                  | Reversal Algorithm                        |
| 13. Merge Sorted Arrays           | Two Pointers                              |
| 14. Intersection                  | Hash Set                                  |
| 15. Union                         | Hash Set                                  |
| 16. Missing Number                | XOR                                       |
| 17. Find Duplicate                | Floyd's Cycle Detection (Tortoise & Hare) |
| 18. Majority Element              | Moore's Voting Algorithm                  |
| 19. Best Time to Buy & Sell Stock | Greedy / Single Pass                      |
| 20. Maximum Consecutive Ones      | Linear Traversal                          |

These are among the most frequently asked array problems in technical interviews and introduce several foundational algorithmic techniques you'll reuse in later topics like linked lists, trees, and graphs.

---

Problems **21–30** introduce **Sliding Window** and **Prefix Sum**, which are among the most important interview patterns. Mastering these patterns will help you solve many array and string problems efficiently.

---

# 21. Maximum Sum Subarray of Size K

### Problem

```text
Input:
arr = [2,1,5,1,3,2]
k = 3

Output:
9

Explanation:
[5,1,3] = 9
```

### Solution (Sliding Window)

```javascript
function maxSumSubarray(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
```

**Time:** O(n)

**Space:** O(1)

---

# 22. Minimum Size Subarray Sum

### Problem

Find the minimum length of a contiguous subarray whose sum is at least `target`.

```text
Input:
target = 7
nums = [2,3,1,2,4,3]

Output:
2

Explanation:
[4,3]
```

### Solution

```javascript
function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
```

Time: **O(n)**

---

# 23. Longest Substring Without Repeating Characters

```text
Input:
"abcabcbb"

Output:
3

Explanation:
"abc"
```

```javascript
function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
```

Time: **O(n)**

---

# 24. Fruits Into Baskets

### Problem

Find the longest subarray containing at most **2 distinct numbers**.

```text
Input:
[1,2,1]

Output:
3
```

```javascript
function totalFruit(fruits) {
  let left = 0;
  let max = 0;
  const map = new Map();

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);

      if (map.get(fruits[left]) === 0) map.delete(fruits[left]);

      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(totalFruit([1, 2, 1]));
```

Time: **O(n)**

---

# 25. Maximum Average Subarray

```text
Input:
nums=[1,12,-5,-6,50,3]
k=4

Output:
12.75
```

```javascript
function findMaxAverage(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) sum += nums[i];

  let max = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }

  return max / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
```

---

# 26. Prefix Sum

```text
Input:
[2,4,6,8]

Output:
[2,6,12,20]
```

```javascript
function prefixSum(arr) {
  const prefix = [];
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

console.log(prefixSum([2, 4, 6, 8]));
```

---

# 27. Range Sum Query

### Problem

```text
Array:
[2,4,6,8]

Query:
left=1
right=3

Output:
18
```

### Solution

```javascript
function rangeSum(arr, left, right) {
  const prefix = [];
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  if (left === 0) return prefix[right];

  return prefix[right] - prefix[left - 1];
}

console.log(rangeSum([2, 4, 6, 8], 1, 3));
```

Time:

- Build → **O(n)**
- Query → **O(1)**

---

# 28. Pivot Index

### Problem

Find the index where the sum of the left side equals the sum of the right side.

```text
Input:
[1,7,3,6,5,6]

Output:
3
```

```javascript
function pivotIndex(nums) {
  const total = nums.reduce((a, b) => a + b, 0);

  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;

    left += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
```

---

# 29. Product of Array Except Self

```text
Input:
[1,2,3,4]

Output:
[24,12,8,6]
```

### Solution

```javascript
function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
```

Time: **O(n)**

Space: **O(1)** (excluding output array)

---

# 30. Subarray Sum Equals K

### Problem

Count the number of subarrays whose sum equals `k`.

```text
Input:
nums=[1,1,1]
k=2

Output:
2
```

### Solution

```javascript
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;

    if (map.has(sum - k)) count += map.get(sum - k);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));
```

**Time:** O(n)

**Space:** O(n)

---

# Patterns Learned (21–30)

| Problem                                            | Pattern                   |
| -------------------------------------------------- | ------------------------- |
| 21. Maximum Sum Subarray of Size K                 | Fixed Sliding Window      |
| 22. Minimum Size Subarray Sum                      | Variable Sliding Window   |
| 23. Longest Substring Without Repeating Characters | Sliding Window + Hash Set |
| 24. Fruits Into Baskets                            | Sliding Window + Hash Map |
| 25. Maximum Average Subarray                       | Fixed Sliding Window      |
| 26. Prefix Sum                                     | Prefix Sum                |
| 27. Range Sum Query                                | Prefix Sum                |
| 28. Pivot Index                                    | Prefix Sum                |
| 29. Product of Array Except Self                   | Prefix & Suffix Products  |
| 30. Subarray Sum Equals K                          | Prefix Sum + Hash Map     |

These ten problems are excellent for building intuition around **window-based algorithms** and **prefix sums**, two techniques that appear very frequently in coding interviews.

---

Problems **31–40** cover three major interview patterns:

- **Two Pointers**
- **Kadane's Algorithm**
- **Matrix Problems**

These are among the most frequently asked problems in coding interviews.

---

# 31. Two Sum II (Sorted Array)

### Problem

```text
Input:
numbers = [2,7,11,15]
target = 9

Output:
[1,2]
```

### Solution (Two Pointers)

```javascript
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    if (sum < target) left++;
    else right--;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
```

**Time:** O(n)

**Space:** O(1)

---

# 32. Container With Most Water

### Problem

```text
Input:
[1,8,6,2,5,4,8,3,7]

Output:
49
```

### Solution

```javascript
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
```

**Time:** O(n)

---

# 33. Three Sum

### Problem

Find all unique triplets whose sum is **0**.

```text
Input:
[-1,0,1,2,-1,-4]

Output:
[[-1,-1,2],[-1,0,1]]
```

### Solution

```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
```

**Time:** O(n²)

---

# 34. Four Sum

```javascript
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}
```

**Time:** O(n³)

---

# 35. Remove Element

```text
Input:
nums=[3,2,2,3]
val=3

Output:
[2,2]
```

```javascript
function removeElement(nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i];
    }
  }

  return nums.slice(0, index);
}

console.log(removeElement([3, 2, 2, 3], 3));
```

Time: O(n)

---

# 36. Maximum Subarray (Kadane's Algorithm)

```text
Input:
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6
```

```javascript
function maxSubArray(nums) {
  let current = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

Time: O(n)

---

# 37. Maximum Circular Subarray

```javascript
function maxSubarraySumCircular(nums) {
  let total = 0;

  let maxSum = nums[0];
  let currentMax = 0;

  let minSum = nums[0];
  let currentMin = 0;

  for (const num of nums) {
    currentMax = Math.max(num, currentMax + num);
    maxSum = Math.max(maxSum, currentMax);

    currentMin = Math.min(num, currentMin + num);
    minSum = Math.min(minSum, currentMin);

    total += num;
  }

  if (maxSum < 0) return maxSum;

  return Math.max(maxSum, total - minSum);
}

console.log(maxSubarraySumCircular([5, -3, 5]));
```

Time: O(n)

---

# 38. Maximum Product Subarray

```javascript
function maxProduct(nums) {
  let max = nums[0];
  let min = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];

    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);

    answer = Math.max(answer, max);
  }

  return answer;
}

console.log(maxProduct([2, 3, -2, 4]));
```

Time: O(n)

---

# 39. Spiral Matrix

```javascript
function spiralOrder(matrix) {
  const result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);

      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);

      left++;
    }
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
```

Time: O(m × n)

---

# 40. Rotate Matrix (90° Clockwise)

### Problem

```text
Input

1 2 3
4 5 6
7 8 9

Output

7 4 1
8 5 2
9 6 3
```

### Solution

```javascript
function rotate(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (const row of matrix) {
    row.reverse();
  }

  return matrix;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
```

**Time:** O(n²)

**Space:** O(1)

---

# Patterns Learned (31–40)

| Problem                       | Pattern                               |
| ----------------------------- | ------------------------------------- |
| 31. Two Sum II                | Two Pointers                          |
| 32. Container With Most Water | Two Pointers                          |
| 33. Three Sum                 | Sorting + Two Pointers                |
| 34. Four Sum                  | Sorting + Nested Loops + Two Pointers |
| 35. Remove Element            | Two Pointers                          |
| 36. Maximum Subarray          | Kadane's Algorithm                    |
| 37. Maximum Circular Subarray | Kadane's Algorithm                    |
| 38. Maximum Product Subarray  | Dynamic Programming                   |
| 39. Spiral Matrix             | Matrix Traversal                      |
| 40. Rotate Matrix             | Transpose + Reverse                   |

These problems introduce several core interview techniques that are reused across many coding questions, especially **two pointers**, **Kadane's algorithm**, and **matrix manipulation**.

---

Problems **41–50** are the **advanced array problems** that frequently appear in interviews at companies like Google, Amazon, Microsoft, and Meta. They combine multiple techniques such as matrix traversal, binary search, intervals, heaps, sliding windows, and monotonic stacks.

---

# 41. Set Matrix Zeroes

### Problem

If an element is `0`, set its entire row and column to `0`.

### Example

```text
Input:
[
 [1,1,1],
 [1,0,1],
 [1,1,1]
]

Output:
[
 [1,0,1],
 [0,0,0],
 [1,0,1]
]
```

### Solution

```javascript
function setZeroes(matrix) {
  const rows = new Set();
  const cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (const row of rows) {
    matrix[row].fill(0);
  }

  for (const col of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
```

**Time:** O(m × n)

**Space:** O(m + n)

---

# 42. Search a 2D Matrix

```text
Input:
[
 [1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]
]

Target = 3

Output:
true
```

```javascript
function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let value = matrix[Math.floor(mid / cols)][mid % cols];

    if (value === target) return true;

    if (value < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
```

**Time:** O(log(m × n))

---

# 43. Diagonal Traverse

```javascript
function diagonalTraverse(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = [];

  for (let d = 0; d < m + n - 1; d++) {
    const temp = [];

    let r = d < n ? 0 : d - n + 1;
    let c = d < n ? d : n - 1;

    while (r < m && c >= 0) {
      temp.push(matrix[r][c]);

      r++;
      c--;
    }

    if (d % 2 === 0) temp.reverse();

    result.push(...temp);
  }

  return result;
}

console.log(
  diagonalTraverse([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
```

Time: **O(m × n)**

---

# 44. Trapping Rain Water

```text
Input:
[0,1,0,2,1,0,1,3,2,1,2,1]

Output:
6
```

```javascript
function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else water += leftMax - height[left];

      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else water += rightMax - height[right];

      right--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
```

Time: **O(n)**

Space: **O(1)**

---

# 45. First Missing Positive

```javascript
function firstMissingPositive(nums) {
  const set = new Set(nums);

  let i = 1;

  while (true) {
    if (!set.has(i)) return i;

    i++;
  }
}

console.log(firstMissingPositive([3, 4, -1, 1]));
```

Time: **O(n)**

Space: **O(n)**

> **Interview Note:** The optimal solution uses **constant extra space** by placing each number at its correct index (cyclic sort), but this `Set`-based solution is easier to understand.

---

# 46. Median of Two Sorted Arrays

```javascript
function findMedianSortedArrays(nums1, nums2) {
  const merged = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) merged.push(nums1[i++]);
    else merged.push(nums2[j++]);
  }

  while (i < nums1.length) merged.push(nums1[i++]);

  while (j < nums2.length) merged.push(nums2[j++]);

  const n = merged.length;

  if (n % 2 === 0) return (merged[n / 2 - 1] + merged[n / 2]) / 2;

  return merged[Math.floor(n / 2)];
}

console.log(findMedianSortedArrays([1, 3], [2]));
```

Time: **O(n + m)**

> **Interview Note:** The optimal interview solution runs in **O(log(min(n, m)))** using binary search on partitions.

---

# 47. Merge Intervals

```javascript
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];

    if (intervals[i][0] <= last[1])
      last[1] = Math.max(last[1], intervals[i][1]);
    else result.push(intervals[i]);
  }

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
```

Time: **O(n log n)**

---

# 48. Insert Interval

```javascript
function insert(intervals, newInterval) {
  const result = [];

  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0])
    result.push(intervals[i++]);

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];

    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) result.push(intervals[i++]);

  return result;
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
```

Time: **O(n)**

---

# 49. Sliding Window Maximum

```javascript
function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift();

    while (deque.length && nums[deque[deque.length - 1]] <= nums[i])
      deque.pop();

    deque.push(i);

    if (i >= k - 1) result.push(nums[deque[0]]);
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
```

Time: **O(n)**

---

# 50. Largest Rectangle in Histogram

```javascript
function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack.pop()];

      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;

      maxArea = Math.max(maxArea, h * width);
    }

    stack.push(i);
  }

  heights.pop();

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
```

Time: **O(n)**

Space: **O(n)**

---

# Patterns Learned (41–50)

| Problem                            | Pattern                               |
| ---------------------------------- | ------------------------------------- |
| 41. Set Matrix Zeroes              | Matrix Traversal + Hash Set           |
| 42. Search a 2D Matrix             | Binary Search                         |
| 43. Diagonal Traverse              | Matrix Traversal                      |
| 44. Trapping Rain Water            | Two Pointers                          |
| 45. First Missing Positive         | Hash Set (or Cyclic Sort for optimal) |
| 46. Median of Two Sorted Arrays    | Merge (or Binary Search for optimal)  |
| 47. Merge Intervals                | Sorting + Interval Merging            |
| 48. Insert Interval                | Interval Merging                      |
| 49. Sliding Window Maximum         | Monotonic Deque                       |
| 50. Largest Rectangle in Histogram | Monotonic Stack                       |

## Array Roadmap Complete 🎉

By completing these **50 array problems**, you've covered the most important array techniques used in technical interviews:

- ✅ Linear Traversal
- ✅ Two Pointers
- ✅ Sliding Window
- ✅ Prefix Sum
- ✅ Hashing
- ✅ Greedy
- ✅ Kadane's Algorithm
- ✅ Matrix Traversal
- ✅ Binary Search on Arrays
- ✅ Interval Problems
- ✅ Monotonic Stack
- ✅ Monotonic Queue (Deque)

This foundation will make the next topics—**Strings**, **Linked Lists**, **Stacks**, **Queues**, **Trees**, and **Graphs**—much easier to learn because many of these patterns carry over directly.

---

# Recommended Order

| Step | Topic              |
| ---- | ------------------ |
| 1    | Basic Traversal    |
| 2    | Min / Max          |
| 3    | Reverse            |
| 4    | Second Largest     |
| 5    | Remove Duplicates  |
| 6    | Move Zeroes        |
| 7    | Rotate Array       |
| 8    | Two Sum            |
| 9    | Prefix Sum         |
| 10   | Sliding Window     |
| 11   | Two Pointers       |
| 12   | Kadane's Algorithm |
| 13   | Matrix Problems    |
| 14   | Advanced Problems  |

This progression builds the core array techniques used across interviews: **linear traversal**, **two pointers**, **sliding window**, **prefix sums**, **Kadane's algorithm**, and **matrix manipulation**.

For someone targeting backend engineering roles, completing these 50 problems will provide a strong foundation for many coding interviews.
