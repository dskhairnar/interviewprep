# Node.js Basics - Interview Preparation

## What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side. It's designed for building scalable network applications.

## Key Characteristics
- **Event-driven**: Uses event loop for non-blocking I/O operations
- **Single-threaded**: Uses a single thread with event loop
- **Non-blocking**: I/O operations don't block the execution
- **Cross-platform**: Runs on Windows, macOS, and Linux
- **NPM**: Largest package ecosystem for JavaScript

## Node.js Architecture

### Event Loop
```javascript
// Example of event loop
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2
```

### Event-Driven Programming
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', (data) => {
  console.log('Event received:', data);
});

myEmitter.emit('event', 'Hello World!');
```

## File Structure Best Practices

### Basic Project Structure
```
project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── config/
├── public/
├── views/
├── tests/
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── server.js
```

### Detailed Structure Explanation

#### 1. `src/` - Source Code
- **controllers/**: Business logic and request handling
- **models/**: Data models and database schemas
- **routes/**: API route definitions
- **middleware/**: Custom middleware functions
- **utils/**: Helper functions and utilities
- **config/**: Configuration files

#### 2. `public/` - Static Files
- CSS, JavaScript, images, and other static assets

#### 3. `views/` - Template Files
- EJS, Handlebars, or other template files

#### 4. `tests/` - Test Files
- Unit tests, integration tests

## Core Modules

### 1. HTTP Module
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 2. File System (fs) Module
```javascript
const fs = require('fs');

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');

// Asynchronous
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promises (fs.promises)
const fsPromises = require('fs').promises;
async function readFile() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### 3. Path Module
```javascript
const path = require('path');

path.join(__dirname, 'public', 'index.html');
path.resolve(__dirname, '..', 'config');
path.extname('file.txt'); // '.txt'
path.basename('/path/to/file.txt'); // 'file.txt'
```

### 4. URL Module
```javascript
const url = require('url');

const parsedUrl = url.parse('http://example.com/path?query=value');
console.log(parsedUrl.pathname); // '/path'
console.log(parsedUrl.query); // 'query=value'
```

## Package Management

### package.json Structure
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.0.0"
  }
}
```

### NPM Commands
```bash
npm init              # Initialize new project
npm install           # Install all dependencies
npm install express   # Install specific package
npm install -D nodemon # Install dev dependency
npm uninstall express # Remove package
npm update            # Update packages
npm run dev           # Run script
```

## Common Terminology

### 1. Callback Functions
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

### 2. Promises
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 3. Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### 4. Middleware
```javascript
const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

### 5. Streams
```javascript
const fs = require('fs');

// Read stream
const readStream = fs.createReadStream('input.txt');

// Write stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe streams
readStream.pipe(writeStream);
```

## Error Handling

### Try-Catch
```javascript
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('Error occurred:', error.message);
}
```

### Error-First Callbacks
```javascript
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

### Promise Error Handling
```javascript
fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Environment Variables
```javascript
require('dotenv').config();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;
```

## Process Object
```javascript
// Process information
console.log(process.pid);        // Process ID
console.log(process.version);    // Node.js version
console.log(process.platform);   // Operating system
console.log(process.cwd());      // Current working directory

// Environment variables
console.log(process.env.NODE_ENV);

// Exit process
process.exit(0);  // Success
process.exit(1);  // Error
```

## Buffer and Streams

### Buffer
```javascript
const buf = Buffer.from('Hello World');
console.log(buf.toString()); // 'Hello World'
console.log(buf.length);     // 11
```

### Streams
```javascript
const fs = require('fs');

// Readable stream
const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading');
});
```

## Common Design Patterns

### 1. Singleton Pattern
```javascript
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }
}
```

### 2. Factory Pattern
```javascript
class UserFactory {
  createUser(type, data) {
    switch (type) {
      case 'admin':
        return new AdminUser(data);
      case 'regular':
        return new RegularUser(data);
      default:
        throw new Error('Invalid user type');
    }
  }
}
```

### 3. Observer Pattern
```javascript
const EventEmitter = require('events');

class UserService extends EventEmitter {
  createUser(userData) {
    // Create user logic
    this.emit('userCreated', userData);
  }
}
```

## Performance Optimization

### 1. Caching
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

### 2. Connection Pooling
```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10
});
```

### 3. Clustering
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

## Security Best Practices

### 1. Input Validation
```javascript
const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const { error, value } = schema.validate(req.body);
```

### 2. Helmet for Security Headers
```javascript
const helmet = require('helmet');
app.use(helmet());
```

### 3. Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

## Testing

### Unit Testing with Jest
```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### Integration Testing
```javascript
const request = require('supertest');
const app = require('./app');

test('GET /api/users', async () => {
  const response = await request(app)
    .get('/api/users')
    .expect(200);
  
  expect(response.body).toHaveProperty('users');
});
```
