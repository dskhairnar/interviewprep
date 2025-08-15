# JavaScript Basics - Interview Preparation

## JavaScript Fundamentals

### 1. Variables and Data Types
```javascript
// Variable declarations
let name = 'John';           // String
const age = 25;              // Number
var isStudent = true;        // Boolean
let hobbies = ['reading', 'gaming']; // Array
let person = { name: 'John', age: 25 }; // Object
let nothing = null;          // Null
let undefined;               // Undefined
let symbol = Symbol('id');   // Symbol

// Template literals
const message = `Hello ${name}, you are ${age} years old!`;
```

### 2. Hoisting
```javascript
console.log(x); // undefined (not error)
var x = 5;

// Function hoisting
sayHello(); // Works
function sayHello() {
  console.log('Hello!');
}

// Let and const are not hoisted
console.log(y); // ReferenceError
let y = 5;
```

### 3. Scope
```javascript
// Global scope
let globalVar = 'I am global';

function testScope() {
  // Function scope
  let functionVar = 'I am in function';
  
  if (true) {
    // Block scope
    let blockVar = 'I am in block';
    console.log(blockVar); // Works
  }
  
  console.log(functionVar); // Works
  // console.log(blockVar); // ReferenceError
}

console.log(globalVar); // Works
// console.log(functionVar); // ReferenceError
```

## Functions

### 1. Function Declarations
```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const divide = (a, b) => a / b;

// Arrow function with block
const complexOperation = (a, b) => {
  const result = a * b;
  return result + 10;
};
```

### 2. Higher-Order Functions
```javascript
// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Function that takes a function as parameter
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const squared = processArray(numbers, x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]
```

### 3. Closures
```javascript
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```

## Objects and Prototypes

### 1. Object Creation
```javascript
// Object literal
const person = {
  name: 'John',
  age: 25,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

const john = new Person('John', 25);

// Class (ES6)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  static create(name, age) {
    return new PersonClass(name, age);
  }
}
```

### 2. Prototypal Inheritance
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return `${this.name} barks`;
};

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // "Buddy barks"
```

### 3. Object Destructuring
```javascript
const user = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Basic destructuring
const { name, age } = user;

// Renaming variables
const { name: userName, age: userAge } = user;

// Nested destructuring
const { address: { city, country } } = user;

// Default values
const { phone = 'N/A' } = user;
```

## Arrays

### 1. Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(x => x * 2);

// filter
const evenNumbers = numbers.filter(x => x % 2 === 0);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// find
const firstEven = numbers.find(x => x % 2 === 0);

// some
const hasEven = numbers.some(x => x % 2 === 0);

// every
const allPositive = numbers.every(x => x > 0);

// forEach
numbers.forEach(x => console.log(x));
```

### 2. Array Destructuring
```javascript
const fruits = ['apple', 'banana', 'orange'];

// Basic destructuring
const [first, second, third] = fruits;

// Skipping elements
const [first, , third] = fruits;

// Rest operator
const [first, ...rest] = fruits;

// Default values
const [first, second, third, fourth = 'grape'] = fruits;
```

## Promises and Async/Await

### 1. Promises
```javascript
// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('Failed to fetch data');
      }
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Promise.all
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values));

// Promise.race
Promise.race([promise1, promise2, promise3])
  .then(value => console.log(value));
```

### 2. Async/Await
```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Using async/await
async function main() {
  try {
    const userData = await fetchUserData();
    console.log(userData);
  } catch (error) {
    console.error('Main error:', error);
  }
}
```

## Event Loop and Asynchronous Programming

### 1. Event Loop Example
```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
```

### 2. Microtasks vs Macrotasks
```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

Promise.resolve().then(() => {
  console.log('4');
  setTimeout(() => console.log('5'), 0);
});

console.log('6');

// Output: 1, 6, 4, 2, 3, 5
```

## Error Handling

### 1. Try-Catch
```javascript
function riskyOperation() {
  throw new Error('Something went wrong');
}

try {
  riskyOperation();
} catch (error) {
  console.error('Caught error:', error.message);
} finally {
  console.log('This always runs');
}
```

### 2. Custom Errors
```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
  return true;
}
```

## ES6+ Features

### 1. Template Literals
```javascript
const name = 'John';
const age = 25;

const message = `Hello ${name}, you are ${age} years old!`;

// Multi-line strings
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

### 2. Spread and Rest Operators
```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { name: 'John' };
const obj2 = { ...obj1, age: 25 };

// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const [first, second, ...rest] = [1, 2, 3, 4, 5];
```

### 3. Default Parameters
```javascript
function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet('John')); // "Hello, John!"
console.log(greet('John', 'Hi')); // "Hi, John!"
```

### 4. Optional Chaining
```javascript
const user = {
  name: 'John',
  address: {
    city: 'New York'
  }
};

// Safe property access
const city = user?.address?.city; // 'New York'
const country = user?.address?.country; // undefined

// Safe method calls
const result = user?.getName?.(); // undefined
```

### 5. Nullish Coalescing
```javascript
const value1 = null ?? 'default'; // 'default'
const value2 = undefined ?? 'default'; // 'default'
const value3 = 0 ?? 'default'; // 0
const value4 = '' ?? 'default'; // ''
const value5 = false ?? 'default'; // false
```

## Modules

### 1. ES6 Modules
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply, { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
```

### 2. Dynamic Imports
```javascript
async function loadModule() {
  const module = await import('./dynamic-module.js');
  module.default();
}
```

## Common Interview Questions

### 1. What is the difference between `==` and `===`?
```javascript
console.log(5 == '5');   // true (type coercion)
console.log(5 === '5');  // false (strict equality)

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 2. What is the difference between `let`, `const`, and `var`?
```javascript
// var - function scoped, hoisted
var x = 1;
if (true) {
  var x = 2; // Same variable
}
console.log(x); // 2

// let - block scoped, not hoisted
let y = 1;
if (true) {
  let y = 2; // Different variable
}
console.log(y); // 1

// const - block scoped, cannot be reassigned
const z = 1;
// z = 2; // TypeError
```

### 3. How does `this` work?
```javascript
// Global context
console.log(this); // window (browser) or global (Node.js)

// Function context
function test() {
  console.log(this);
}
test(); // window/global

// Method context
const obj = {
  name: 'John',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
obj.greet(); // "Hello, John"

// Arrow function context
const arrowObj = {
  name: 'John',
  greet: () => {
    console.log(`Hello, ${this.name}`);
  }
};
arrowObj.greet(); // "Hello, undefined"
```

### 4. What is closure?
```javascript
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

### 5. Explain event bubbling and capturing
```javascript
// Event bubbling (default)
parent.addEventListener('click', () => console.log('Parent clicked'));
child.addEventListener('click', () => console.log('Child clicked'));

// Event capturing
parent.addEventListener('click', () => console.log('Parent clicked'), true);
child.addEventListener('click', () => console.log('Child clicked'), true);
```

## Practical Coding Examples

### 1. Debounce Function
```javascript
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);
```

### 2. Throttle Function
```javascript
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const throttledScroll = throttle(() => {
  console.log('Scrolled');
}, 100);
```

### 3. Deep Clone Object
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (typeof obj === 'object') {
    const cloned = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
}
```

### 4. Memoization
```javascript
function memoize(func) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoizedFibonacci = memoize((n) => {
  if (n <= 1) return n;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});
```

## Additional JavaScript Technical Terms (Glossary)

- **Primitive vs Reference types**: Primitives (string, number, boolean, null, undefined, symbol, bigint) are immutable and compared by value; objects/arrays/functions are reference types.
- **Pass-by-value vs pass-by-reference**: JS always passes function arguments by value; for objects, the value is a reference.
- **Prototype chain**: Object resolution path for properties via `[[Prototype]]` (accessible by `Object.getPrototypeOf`); classes are syntactic sugar over prototypes.
- **this binding**: Determined by call-site: default/global, implicit (obj.method), explicit (`call/apply/bind`), constructor (`new`), lexical in arrow functions.
- **Closures**: Functions that capture outer lexical scope; common in factories, memoization, and module patterns.
- **Event loop and task queues**: Macrotasks (setTimeout, I/O) and microtasks (Promise jobs, `queueMicrotask`); microtasks run before next macrotask.
- **Shallow vs deep copy**: Shallow copies copy top-level references; deep copies recursively copy nested objects; use structuredClone for safe deep copies when available.
- **Truthy/Falsy**: Falsy values: 0, -0, 0n, '', null, undefined, NaN, false. Everything else is truthy.
- **Coercion**: Implicit (using `==`, concatenation) vs explicit (`Number()`, `String()`); avoid surprises by using `===`.
- **Debounce vs throttle**: Debounce delays execution until inactivity; throttle limits executions per unit time.
- **Immutability**: Favor immutable updates (spread, `Object.assign`) to avoid side-effects; key in React state updates.
- **Module resolution**: ESM URL-based resolution vs CommonJS path resolution; tree-shaking works best with ESM and pure modules.
- **Generators**: Functions that can pause/resume using `yield`; useful for lazy sequences and cooperative concurrency.
- **Iterables/Iterators**: Protocols enabling `for...of`; implement `[Symbol.iterator]`.
- **Proxy/Reflect**: Intercept operations on objects to create meta-programming utilities.

## Handy JS One-liners

```javascript
// Unique array
const unique = arr => [...new Set(arr)];

// Group by key
const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] ||= []).push(item), acc), {});

// Clamp number
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// Flatten 1-level
const flatten1 = arr => [].concat(...arr);
```

## Theory for Key Topics

### Variables and Data Types
- Primitives are immutable and stored by value; objects/arrays/functions are reference types stored on the heap, and variables hold references.
- `let` and `const` are block-scoped and live in the Temporal Dead Zone until initialized; `var` is function-scoped and hoisted with `undefined` initialization.

### Hoisting
- Declarations are hoisted to the top of their scope. Function declarations hoist with their definitions; variable declarations hoist without initialization. Accessing `let`/`const` before declaration throws due to TDZ.

### Scope and Closures
- JS uses lexical scoping: the scope of a variable is determined by its position in code. Closures capture variables from outer scopes, enabling encapsulation, partial application, and factory patterns. Beware of common pitfalls (loop variables captured by closures—use `let`).

### Functions and this
- Function declaration vs expression vs arrow: arrows have lexical `this` (no own `this`, `arguments`, or `prototype`). `bind` permanently sets `this`; `call`/`apply` set `this` for a single invocation.

### Prototypes and Classes
- Every object has an internal `[[Prototype]]` pointing to another object used for property lookup. `Class` syntax wraps prototypal inheritance with sugar (constructor, methods on prototype, `extends` for inheritance).

### Destructuring, Spread, Rest
- Destructuring extracts properties/elements by pattern. Spread copies enumerable properties/elements. Rest collects remaining properties/elements. Prefer immutable updates using spread for predictability.

### Array Methods and Complexity
- Pure methods: `map`, `filter`, `reduce`, `slice`, `concat` do not mutate. Mutating methods: `push`, `pop`, `splice`, `sort`. Consider algorithmic complexity when chaining operations on large arrays.

### Promises and Async/Await
- Promise states: pending → fulfilled/rejected. Microtasks queue ensures `then/catch/finally` handlers run after current call stack. With async/await, parallelize independent async work using `Promise.all` and catch errors with `try/catch`.

### Event Loop
- Tasks (macrotasks) include timers, I/O callbacks; microtasks include Promises. Microtasks run to completion before the event loop proceeds to the next macrotask. Over-queuing microtasks can starve rendering.

### Error Handling
- Synchronous errors with try/catch. For promises, attach `.catch` or wrap in async/await try/catch. Unhandled promise rejections can crash the process in Node (depending on version); always handle.

### Modules
- ESM enables static analysis and tree-shaking; CJS resolves synchronously at runtime. Prefer ESM for modern toolchains. Avoid circular dependencies; refactor shared pieces.

### Equality and Coercion
- `===` avoids coercion. Abstract equality (`==`) follows complex rules (e.g., `[] == ![]` is true). Prefer strict equality except when intentionally leveraging coercion with clear tests.

### Event Propagation
- Capturing: root → target; Bubbling: target → root. Use event delegation by listening on a common ancestor and filtering by `event.target` to handle dynamic lists efficiently.

## JavaScript Coding Questions and Answers (Last Updated: 05 Aug, 2025)

JavaScript is the most commonly used interpreted, and scripted programming language. It is used to make web pages, mobile applications, web servers, and other platforms. Developed in 1995 by Brendan Eich. Developers should have a solid command over this because many job roles need proficiency in JavaScript.

We will see the Top 50 JavaScript coding questions and answers including basic and medium JavaScript coding questions and answers. In this section, we cover JavaScript core concepts such as arrays, strings, arrow functions, and classes. These Top 50 coding questions and answers will help you to improve your coding concept in JavaScript.

### Basic JavaScript Coding Questions and Answers

1) Write a Program to reverse a string in JavaScript.
This code splits the string into an array of characters using `split()`, reverses the array, and joins it back into a string using `join()`.

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks"));
// Output: skeeGroFskeeG
```

2) Write a Program to check whether a string is a palindrome string.
Checks if a string is a palindrome by reversing it and comparing it to the original.

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("GFG"));
// Output: true
```

3) Find the largest number in an array in JavaScript.
Using a for loop:

```javascript
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));
// Output: 100
```

Using the spread operator and Math.max:

```javascript
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([99, 5, 3, 100, 1]));
// Output: 100
```

4) How to remove the first element from an array in JavaScript?

```javascript
let arr = [5, 6, 7];
arr = arr.slice(1);
console.log(arr);
// Output: [6, 7]
```

5) Write a Program to use a callback function.

```javascript
function greet(name, callback) {
  callback(`Hello, ${name}!`);
}
greet("Geek", message => console.log(message));
// Output: Hello, Geek!
```

6) Write code to create an arrow function.

```javascript
const add = (a, b) => a + b;
console.log(add(6, 2));
// Output: 8
```

7) Write a Program to add a property to an object.

```javascript
const obj = { name: "Riya" };
obj.age = 21;
console.log(obj);
// Output: { name: 'Riya', age: 21 }
```

8) Write a Program to delete a property from an object.

```javascript
const obj = { name: "Riya", age: 21 };
delete obj.age;
console.log(obj);
// Output: { name: 'Riya' }
```

9) What will be the output of the given code?

```javascript
console.log([1, 2, 3].reduce((a, b) => a + b));
// Output: 6
```

10) What will be the output of the given code?

```javascript
console.log("gfg".repeat(3));
// Output: gfggfggfg
```

11) What will be the output of the given code?

```javascript
console.log(1 + "2");
// Output: '12'
```

12) What will be the output of the given code?

```javascript
console.log("6" - 1);
// Output: 5
```

13) What will be the output of the given code?

```javascript
console.log(1 === "1");
// Output: false
```

14) What will be the output of the given code?

```javascript
console.log(null == undefined);
// Output: true
```

15) Write a Program to find the sum of an array.

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([15, 6, 10, 2]));
// Output: 33
```

16) Write a Program to check if a number is prime or not.

```javascript
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
// Output: true
```

17) Write a Program to print Fibonacci sequence up to n terms.

```javascript
function fibonacci(n) {
  let num1 = 0, num2 = 1, nextNum;
  console.log("Fibonacci Sequence:");
  for (let i = 1; i <= n; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}

fibonacci(7);
/* Output:
Fibonacci Sequence:
0
1
1
2
3
5
8
*/
```

18) Write a Program to find factorial of a number.

```javascript
function factorial(num) {
  let answer = 1;
  for (let i = 2; i <= num; i++) {
    answer *= i;
  }
  return answer;
}

console.log(factorial(7));
// Output: 5040
```

19) Calculate the power of a number in JavaScript.

```javascript
function power(base, exponent) {
  return base ** exponent;
}

console.log(power(3, 4));
// Output: 81
```

20) Write a Program to print the frequency of elements in an array.

```javascript
function frequency(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));
// Output: { '1': 2, '2': 1, '3': 2, '4': 1 }
```

### Medium JavaScript Coding Questions and Answers

21) Write a Program to count the occurrences of a character in a string.
Using `split()` method:

```javascript
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("GeeksForGeeks", "G"));
// Output: 2
```

Using a for loop:

```javascript
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("GeeksForGeeks", "G"));
// Output: 2
```

22) Convert Celsius to Fahrenheit.

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(20));
// Output: 68
```

23) Convert Fahrenheit to Celsius.

```javascript
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(68));
// Output: 20
```

24) Sort an array in ascending order.

```javascript
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 3, 8, 1]));
// Output: [1, 3, 5, 8]
```

25) Sort an array in descending order.

```javascript
function sortArrayDesc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));
// Output: [8, 5, 3, 1]
```

26) Merge two arrays in JavaScript.

```javascript
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));
// Output: [5, 6, 7, 8]
```

27) Find the intersection of two arrays.

```javascript
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7, 8]));
// Output: [6, 7]
```

28) Find the union of two arrays.

```javascript
function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));
// Output: [1, 2, 3, 4]
```

29) Check if a number is even or odd.

```javascript
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10));
// Output: true
```

30) Find the minimum value in an array.
Using for loop:

```javascript
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([5, 10, -1, 8]));
// Output: -1
```

Using Math.min:

```javascript
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 10, -1, 8]));
// Output: -1
```

31) Check if a string contains another string.

```javascript
function containsSubstring(str, substring) {
  return str.indexOf(substring) !== -1;
}

console.log(containsSubstring("GeeksForGeeks", "For"));
// Output: true
```

32) Find the first non-repeated character in a string.

```javascript
function firstNonRepeated(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}

console.log(firstNonRepeated("GeeksForGeeks"));
// Output: F
```

33) Find the longest word in a string.

```javascript
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(longestWord("GeeksForGeeks is great"));
// Output: GeeksForGeeks
```

34) Capitalize the first letter of each word in a sentence.

```javascript
function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeFirstLetter("hello geeks"));
// Output: Hello Geeks
```

35) Convert an array of strings to uppercase.

```javascript
function toUpperCaseArray(arr) {
  const upperCaseArray = [];
  for (let i = 0; i < arr.length; i++) {
    upperCaseArray[i] = arr[i].toUpperCase();
  }
  return upperCaseArray;
}

console.log(toUpperCaseArray(["g", "f", "g"]));
// Output: ['G', 'F', 'G']
```

### Hard JavaScript Coding Questions and Answers

36) Write a Program to reverse an array.

```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([5, 6, 7, 8]));
// Output: [8, 7, 6, 5]
```

37) Get the last element of an array.

```javascript
function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log(lastElement([6, 2, 9, 5]));
// Output: 5
```

38) Remove falsy values from an array.

```javascript
function removeFalsyValues(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      answer[answer.length] = arr[i];
    }
  }
  return answer;
}

console.log(removeFalsyValues([0, 5, false, 6, '', 7]));
// Output: [5, 6, 7]
```

39) Calculate the factorial of a number using recursion.

```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));
// Output: 24
```

40) Create an object and print the property.

```javascript
let person = { name: "GFG", age: 25 };
console.log(person.name);
// Output: GFG
```

41) Use the map function on an array.

```javascript
let numbers = [5, 6, 7];
let ans = numbers.map(function (num) {
  return num * 2;
});
console.log(ans);
// Output: [10, 12, 14]
```

42) Write a Program to create a simple class in JavaScript.

```javascript
class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
let dog = new Animals("Dog");
dog.speak();
// Output: Dog makes a noise
```

43) Use JSON to parse and stringify data in JavaScript.

```javascript
let jsonData = '{"name": "Geeks"}';
let parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
// Output: Geeks
```

44) Convert a string to an array of words.

```javascript
let sentence = "Geeks For Geeks";
let wordsArray = sentence.split(" ");
console.log(wordsArray);
// Output: ['Geeks', 'For', 'Geeks']
```

45) Write a switch statement.

```javascript
let course = "javascript";
switch (course) {
  case "javascript":
    console.log("This is a javascript course");
    break;
  default:
    console.log("Not a javascript course");
}
// Output: This is a javascript course
```

46) Check if two strings are anagrams.

```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count1 = {}, count2 = {};
  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    count2[str2[i]] = (count2[str2[i]] || 0) + 1;
  }
  for (let ch in count1) {
    if (count1[ch] !== count2[ch]) return false;
  }
  return true;
}

console.log(areAnagrams("listen", "silent"));
// Output: true
```

47) Find the maximum difference between two numbers in an array.

```javascript
function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - min;
    maxDiff = Math.max(maxDiff, diff);
    min = Math.min(min, arr[i]);
  }
  return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110]));
// Output: 109
```

48) Remove duplicates from an array.

```javascript
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));
// Output: [5, 2, 6, 7]
```

49) Count vowels in a string.

```javascript
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}

console.log(countVowels("hello geek"));
// Output: 4
```

50) Get unique characters from a string.

```javascript
function uniqueCharacters(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join('');
}

console.log(uniqueCharacters("geeksforgeeks"));
// Output: geksfor
```
