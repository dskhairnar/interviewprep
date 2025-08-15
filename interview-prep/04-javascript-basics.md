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
