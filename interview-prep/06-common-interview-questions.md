# Common Interview Questions and Answers

## Node.js Questions

### 1. What is Node.js and how does it work?
**Answer**: Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server-side. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

**Key Points**:
- Single-threaded with event loop
- Non-blocking I/O operations
- Event-driven architecture
- NPM ecosystem
- Cross-platform compatibility

### 2. Explain the Event Loop in Node.js
**Answer**: The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It continuously checks the call stack and processes events in the following order:

1. **Call Stack**: Executes synchronous code
2. **Microtasks**: Processes promises and process.nextTick()
3. **Macrotasks**: Handles setTimeout, setInterval, setImmediate
4. **I/O Operations**: Processes file system, network requests

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2
```

### 3. What is the difference between process.nextTick() and setImmediate()?
**Answer**: 
- **process.nextTick()**: Executes in the current phase of the event loop, before the next phase begins
- **setImmediate()**: Executes in the check phase of the event loop, after the current phase completes

```javascript
console.log('1');
setImmediate(() => console.log('2'));
process.nextTick(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2
```

### 4. How does Node.js handle child threads?
**Answer**: Node.js uses the `worker_threads` module to handle CPU-intensive tasks. It creates separate threads that can run in parallel, but they don't share memory by default.

```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (result) => {
    console.log('Result:', result);
  });
} else {
  // Worker thread code
  const result = heavyComputation();
  parentPort.postMessage(result);
}
```

### 5. What is clustering in Node.js?
**Answer**: Clustering allows you to create multiple instances of your Node.js application to utilize all CPU cores. The cluster module creates child processes that share the same server port.

```javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./server.js');
}
```

### 6. Explain middleware in Express.js
**Answer**: Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle.

```javascript
// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Authentication middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');
  // Verify token logic
  next();
};
```

### 7. How do you handle errors in Node.js?
**Answer**: Node.js provides several ways to handle errors:

```javascript
// Try-catch for synchronous code
try {
  const result = riskyOperation();
} catch (error) {
  console.error('Error:', error.message);
}

// Error-first callbacks
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

// Promise error handling
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/await error handling
async function handleData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### 8. What is the difference between require() and import?
**Answer**: 
- **require()**: CommonJS module system (synchronous, dynamic)
- **import**: ES6 module system (static, asynchronous)

```javascript
// CommonJS
const express = require('express');
const { Router } = require('express');

// ES6 Modules
import express from 'express';
import { Router } from 'express';
```

## JavaScript Questions

### 1. What is the difference between == and ===?
**Answer**: 
- **==**: Loose equality (performs type coercion)
- **===**: Strict equality (no type coercion)

```javascript
console.log(5 == '5');   // true
console.log(5 === '5');  // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 2. Explain closures in JavaScript
**Answer**: A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.

```javascript
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

### 3. What is hoisting in JavaScript?
**Answer**: Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.

```javascript
console.log(x); // undefined (not error)
var x = 5;

sayHello(); // Works
function sayHello() {
  console.log('Hello!');
}

// Let and const are not hoisted
console.log(y); // ReferenceError
let y = 5;
```

### 4. Explain the 'this' keyword
**Answer**: The 'this' keyword refers to the object that is currently executing the code.

```javascript
// Global context
console.log(this); // window (browser) or global (Node.js)

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

### 5. What are Promises and how do they work?
**Answer**: Promises are objects representing the eventual completion or failure of an asynchronous operation.

```javascript
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

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### 6. What is the difference between let, const, and var?
**Answer**:
- **var**: Function-scoped, hoisted
- **let**: Block-scoped, not hoisted, can be reassigned
- **const**: Block-scoped, not hoisted, cannot be reassigned

```javascript
// var - function scoped
var x = 1;
if (true) {
  var x = 2; // Same variable
}
console.log(x); // 2

// let - block scoped
let y = 1;
if (true) {
  let y = 2; // Different variable
}
console.log(y); // 1

// const - cannot be reassigned
const z = 1;
// z = 2; // TypeError
```

### 7. What are async/await and how do they work?
**Answer**: Async/await is syntactic sugar over promises that makes asynchronous code look and behave more like synchronous code.

```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
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

### 8. Explain event bubbling and capturing
**Answer**: Event bubbling and capturing are two ways of event propagation in the DOM.

```javascript
// Event bubbling (default) - from target to root
parent.addEventListener('click', () => console.log('Parent clicked'));
child.addEventListener('click', () => console.log('Child clicked'));

// Event capturing - from root to target
parent.addEventListener('click', () => console.log('Parent clicked'), true);
child.addEventListener('click', () => console.log('Child clicked'), true);
```

## Database Questions

### 1. What is the difference between SQL and NoSQL databases?
**Answer**:
- **SQL**: Relational, structured, ACID properties, complex queries
- **NoSQL**: Non-relational, flexible schema, eventual consistency, horizontal scaling

### 2. How do you handle database connections in Node.js?
**Answer**: Use connection pooling to manage database connections efficiently.

```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10
});

async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
```

### 3. What is MongoDB and how do you use it with Node.js?
**Answer**: MongoDB is a NoSQL document database. Use Mongoose ODM for better schema management.

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb');

// Create user
const user = new User({ name: 'John', email: 'john@example.com', age: 25 });
await user.save();
```

## Security Questions

### 1. How do you secure a Node.js application?
**Answer**:
- Use HTTPS
- Implement authentication and authorization
- Validate and sanitize input
- Use security headers (helmet)
- Implement rate limiting
- Use environment variables for secrets
- Regular dependency updates

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

### 2. What is JWT and how do you implement it?
**Answer**: JWT (JSON Web Token) is a standard for creating access tokens.

```javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: '24h'
});

// Verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

## Performance Questions

### 1. How do you optimize Node.js performance?
**Answer**:
- Use clustering for CPU-intensive tasks
- Implement caching (Redis)
- Use compression middleware
- Optimize database queries
- Use CDN for static assets
- Implement proper error handling
- Use streaming for large files

### 2. What is caching and how do you implement it?
**Answer**: Caching stores frequently accessed data in memory for faster retrieval.

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 });

function getData(id) {
  const cached = cache.get(id);
  if (cached) return cached;
  
  const data = fetchFromDatabase(id);
  cache.set(id, data);
  return data;
}
```

## Testing Questions

### 1. How do you test Node.js applications?
**Answer**: Use testing frameworks like Jest, Mocha, or Chai.

```javascript
const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  test('GET /api/users should return users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body).toHaveProperty('users');
  });
});
```

### 2. What is unit testing vs integration testing?
**Answer**:
- **Unit Testing**: Tests individual functions/methods in isolation
- **Integration Testing**: Tests how different parts work together

## Deployment Questions

### 1. How do you deploy a Node.js application?
**Answer**:
- Use process managers (PM2)
- Set up reverse proxy (Nginx)
- Use environment variables
- Implement logging
- Set up monitoring
- Use CI/CD pipelines

```javascript
// PM2 ecosystem file
module.exports = {
  apps: [{
    name: 'my-app',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
```

### 2. What is Docker and how do you use it with Node.js?
**Answer**: Docker is a containerization platform.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Behavioral Questions

### 1. How do you handle conflicts in a team?
**Answer**: Focus on communication, understanding different perspectives, finding common ground, and working towards a solution that benefits the team.

### 2. How do you stay updated with technology?
**Answer**: Follow tech blogs, participate in communities, attend conferences, take online courses, and work on personal projects.

### 3. Describe a challenging project you worked on
**Answer**: Structure your response with:
- Problem description
- Your approach
- Challenges faced
- Solutions implemented
- Results achieved
- Lessons learned

### 4. How do you handle tight deadlines?
**Answer**: Prioritize tasks, communicate with stakeholders, break down complex tasks, and maintain code quality while meeting deadlines.

## Technical Problem-Solving Questions

### 1. How would you design a URL shortener?
**Answer**:
- Generate short codes (hash function or base62 encoding)
- Store mappings in database
- Handle collisions
- Implement analytics
- Consider caching for popular URLs

### 2. How would you implement a rate limiter?
**Answer**:
- Use sliding window or token bucket algorithm
- Store request counts in Redis
- Check limits before processing requests
- Return appropriate HTTP status codes

### 3. How would you optimize a slow database query?
**Answer**:
- Add proper indexes
- Optimize the query structure
- Use query caching
- Consider database partitioning
- Analyze query execution plans

## Questions to Ask the Interviewer

1. What technologies does the team use?
2. What is the development process like?
3. How does the team handle code reviews?
4. What opportunities are there for learning and growth?
5. What are the biggest technical challenges the team faces?
6. How does the team approach testing and deployment?
7. What is the team structure and collaboration like?

## Additional Node.js/Backend Interview Questions (with brief pointers)

1. Explain backpressure in streams and how to handle it.
   - Check `writable.write()` boolean; pause/resume or wait for `drain` before writing more.
2. How do you secure JWTs on the web?
   - Prefer HttpOnly, Secure, SameSite cookies; rotate/short expiry; verify audience/issuer.
3. What is the difference between authentication and authorization?
   - AuthN: who you are; AuthZ: what you can do.
4. How to implement request id correlation?
   - Generate UUID per request in middleware; pass via headers; log with the id.
5. What are idempotent HTTP methods and why they matter?
   - GET, PUT, DELETE are idempotent; safe retries and deduplication.
6. How to design rate limiting?
   - Token bucket, store counters in Redis with expiry; key by IP/user; return 429.
7. How to migrate databases safely?
   - Backwards-compatible migrations, expand-and-contract, feature flags, rollbacks.
8. How to handle file uploads reliably?
   - Stream to storage, validate size/type, checksum, virus scan, resumable uploads if large.
9. Compare SQL vs NoSQL for your project.
   - Access patterns, schema rigidity, transactions, scaling, reporting needs.
10. How would you paginate large lists?
   - Prefer cursor-based pagination over offset for performance at scale.

## Additional JavaScript Interview Questions

1. Explain event delegation and why it’s useful.
2. What is the difference between `bind`, `call`, and `apply`?
3. How does garbage collection work in V8 (mark-and-sweep, generations)?
4. Explain `map`, `filter`, `reduce` and when to use each.
5. What is a memory leak in JS and how to detect/prevent it?
6. Difference between deep and shallow copy; limitations of `JSON.parse(JSON.stringify())`.
7. What are web workers and when would you use them?
8. Explain CORS preflight and how to configure correctly.
9. What is the difference between `for...of` and `for...in`?
10. Explain `Symbol` and real-world uses (private-ish keys, well-known symbols).

## System Design Style Questions (Brief)

1. Design an authentication service supporting JWT and refresh tokens.
2. Design a notification system (email/SMS/push) with retries and deduplication.
3. Design a file processing pipeline (uploads, virus scanning, metadata extraction).
4. Design an analytics event ingestion service (high write throughput, query needs).
5. Design a leaderboard with frequent updates and top-k queries.
