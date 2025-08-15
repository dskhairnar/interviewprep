# Data Structures and Algorithms (DSA) - Interview Preparation

## Basic Data Structures

### 1. Arrays
```javascript
// Array operations
const arr = [1, 2, 3, 4, 5];

// Access: O(1)
console.log(arr[0]); // 1

// Search: O(n)
const index = arr.indexOf(3); // 2

// Insert at end: O(1)
arr.push(6);

// Insert at beginning: O(n)
arr.unshift(0);

// Delete from end: O(1)
arr.pop();

// Delete from beginning: O(n)
arr.shift();
```

### 2. Linked Lists
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  // Insert at end
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
  // Insert at beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  // Delete node
  delete(data) {
    if (!this.head) return;
    
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    
    if (current.next) {
      current.next = current.next.next;
    }
  }
  
  // Print list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
```

### 3. Stacks
```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  
  // Push: O(1)
  push(element) {
    this.items.push(element);
  }
  
  // Pop: O(1)
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }
  
  // Peek: O(1)
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  
  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Size
  size() {
    return this.items.length;
  }
}

// Usage example: Balanced parentheses
function isBalanced(str) {
  const stack = new Stack();
  const brackets = { '(': ')', '{': '}', '[': ']' };
  
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.isEmpty() || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  
  return stack.isEmpty();
}
```

### 4. Queues
```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  
  // Enqueue: O(1)
  enqueue(element) {
    this.items.push(element);
  }
  
  // Dequeue: O(n) - can be optimized with linked list
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }
  
  // Front: O(1)
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  
  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Size
  size() {
    return this.items.length;
  }
}
```

### 5. Hash Tables
```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  
  // Hash function
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    
    return total;
  }
  
  // Set: O(1) average
  set(key, value) {
    let index = this._hash(key);
    
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    
    this.keyMap[index].push([key, value]);
  }
  
  // Get: O(1) average
  get(key) {
    let index = this._hash(key);
    
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    
    return undefined;
  }
  
  // Keys
  keys() {
    let keysArr = [];
    
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    
    return keysArr;
  }
  
  // Values
  values() {
    let valuesArr = [];
    
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    
    return valuesArr;
  }
}
```

## Basic Algorithms

### 1. Searching Algorithms

#### Linear Search: O(n)
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

#### Binary Search: O(log n)
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
```

### 2. Sorting Algorithms

#### Bubble Sort: O(n²)
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}
```

#### Selection Sort: O(n²)
```javascript
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
```

#### Merge Sort: O(n log n)
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

#### Quick Sort: O(n log n) average, O(n²) worst
```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return quickSort(left).concat(middle).concat(quickSort(right));
}
```

## Common Interview Problems

### 1. Two Sum
```javascript
// Find two numbers that add up to target
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Time: O(n), Space: O(n)
```

### 2. Reverse String
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

// In-place reverse
function reverseStringInPlace(str) {
  const arr = str.split('');
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr.join('');
}
```

### 3. Palindrome Check
```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Two-pointer approach
function isPalindromeTwoPointer(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
```

### 4. Find Missing Number
```javascript
function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  return expectedSum - actualSum;
}

// Using XOR
function findMissingNumberXOR(nums) {
  let result = nums.length;
  
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }
  
  return result;
}
```

### 5. Valid Parentheses
```javascript
function isValidParentheses(s) {
  const stack = [];
  const brackets = { '(': ')', '{': '}', '[': ']' };
  
  for (let char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
```

### 6. Maximum Subarray (Kadane's Algorithm)
```javascript
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}
```

### 7. Remove Duplicates from Sorted Array
```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  
  return i + 1;
}
```

### 8. Climbing Stairs (Fibonacci)
```javascript
function climbStairs(n) {
  if (n <= 2) return n;
  
  let oneStep = 1, twoSteps = 2;
  
  for (let i = 3; i <= n; i++) {
    const current = oneStep + twoSteps;
    oneStep = twoSteps;
    twoSteps = current;
  }
  
  return twoSteps;
}
```

## Time and Space Complexity

### Big O Notation
- **O(1)**: Constant time
- **O(log n)**: Logarithmic time
- **O(n)**: Linear time
- **O(n log n)**: Linearithmic time
- **O(n²)**: Quadratic time
- **O(2ⁿ)**: Exponential time
- **O(n!)**: Factorial time

### Common Operations Complexity

#### Arrays
- Access: O(1)
- Search: O(n)
- Insert at end: O(1)
- Insert at beginning: O(n)
- Delete from end: O(1)
- Delete from beginning: O(n)

#### Linked Lists
- Access: O(n)
- Search: O(n)
- Insert at beginning: O(1)
- Insert at end: O(n)
- Delete from beginning: O(1)
- Delete from end: O(n)

#### Hash Tables
- Access: O(1) average
- Search: O(1) average
- Insert: O(1) average
- Delete: O(1) average

#### Stacks/Queues
- Push/Enqueue: O(1)
- Pop/Dequeue: O(1)
- Peek: O(1)

## Problem-Solving Strategies

### 1. Two Pointers
```javascript
// Example: Find pair with given sum in sorted array
function findPair(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [-1, -1];
}
```

### 2. Sliding Window
```javascript
// Example: Maximum sum of k consecutive elements
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

### 3. Recursion
```javascript
// Example: Fibonacci with memoization
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  
  if (memo[n] !== undefined) {
    return memo[n];
  }
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

## Interview Tips

1. **Clarify the problem**: Ask questions about input, output, edge cases
2. **Think out loud**: Explain your thought process
3. **Start with brute force**: Then optimize
4. **Consider time/space complexity**: Always mention Big O
5. **Test with examples**: Use small test cases
6. **Handle edge cases**: Empty arrays, null values, etc.
7. **Write clean code**: Use meaningful variable names
8. **Practice common patterns**: Two pointers, sliding window, etc.

## Frequently Asked DSA Interview Questions (Basics)

### Conceptual
- **What is the difference between array and linked list?**
  - Array: contiguous memory, O(1) random access, expensive inserts/deletes in middle; Linked list: non-contiguous nodes, O(n) access, O(1) insert/delete at head.
- **Stack vs Queue use-cases?**
  - Stack: backtracking, function call stack, undo; Queue: BFS, task scheduling, producer-consumer.
- **Stable vs unstable sorting?**
  - Stable keeps equal elements' relative order (Merge Sort), unstable may not (Quick Sort typical implementations).
- **Hash table collisions handling?**
  - Separate chaining (lists/buckets), open addressing (linear/quadratic probing, double hashing).
- **Big-O of common operations**
  - Hash map: average O(1) get/set, worst O(n); Binary search tree balanced: O(log n) search/insert/delete.

### Quick Practice Q&A
- **Find middle of linked list**: Use slow/fast pointers; when fast reaches end, slow is middle.
- **Detect cycle in linked list**: Floyd’s Tortoise and Hare; if pointers meet, cycle exists.
- **Reverse a linked list**: Iterate with three pointers: prev, curr, next.
- **Validate binary search tree**: DFS with value bounds (min, max) propagated to children.
- **Binary tree traversal orders**: Preorder (NLR), Inorder (LNR), Postorder (LRN), Level-order (BFS).
- **Two-sum variations**: Unsorted use hash map; sorted use two pointers.
- **Maximum sliding window**: Use deque storing indices of decreasing elements → O(n).
- **Kth largest element**: Use min-heap of size k (O(n log k)) or Quickselect average O(n).
- **Merge K sorted lists**: Min-heap by head values or divide-and-conquer.
- **Top-K frequent elements**: Hash frequencies + bucket sort or min-heap of size k.

### Common Patterns to Recognize
- Two pointers, Sliding window, Fast/slow pointers, Monotonic stack/deque, Prefix sums, Binary search on answer, DFS/BFS, Backtracking, Dynamic programming (knapsack, LIS), Greedy (intervals), Union-Find (disjoint sets).
