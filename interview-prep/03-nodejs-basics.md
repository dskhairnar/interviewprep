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

## Additional Node.js Technical Terms (Glossary)

- **libuv**: Cross-platform C library that provides Node.js with an event loop, file system, DNS, network, child processes, and thread pool.
- **Event loop phases**: timers → pending callbacks → idle/prepare → poll → check → close callbacks; microtasks (Promises, `queueMicrotask`) run after each task and before moving to the next phase.
- **process.nextTick vs microtask**: `nextTick` callbacks run before microtasks; overusing can starve the event loop.
- **V8**: JS engine providing parsing, JIT compilation, garbage collection; Node embeds V8.
- **Buffer**: Raw binary data container; not resizable; used for I/O with sockets/files.
- **Streams**: Abstractions for incremental I/O. Types: Readable, Writable, Duplex, Transform. Modes: object mode vs binary; flowing vs paused. Handle backpressure via `stream.write()` return value and `drain` event.
- **Cluster**: Multi-process model that forks workers sharing server ports; good for CPU-bound parallelism; each worker has its own memory.
- **worker_threads**: True threads within a process with separate event loops; communicate via `MessagePort` or `SharedArrayBuffer`; better for CPU-bound tasks requiring shared memory.
- **CommonJS vs ESM**: CJS uses `require` and `module.exports` with synchronous resolution; ESM uses `import/export` with static analysis and asynchronous loading; avoid mixing in the same file.
- **Package management**: `package-lock.json` locks dependency graph; semver ranges: caret(^) updates minor/patch, tilde(~) updates patch.
- **dotenv & config**: Load secrets via environment variables; follow 12-factor app; never commit `.env`.
- **Express middleware types**: Application-level, router-level, built-in (`express.json`), error-handling `(err, req, res, next)`.
- **CORS**: Controls cross-origin requests with `Access-Control-*` headers; preflight uses OPTIONS; configure `origin`, `methods`, `credentials` carefully.
- **CSRF**: Cross-site request forgery; mitigate with same-site cookies, CSRF tokens when using cookie-based auth.
- **JWT**: Self-contained token with header.payload.signature; verify algorithm and audience/issuer; set reasonable expiry and rotation.
- **Mongoose**: ODM providing schemas, validators, indexes, middleware (pre/post hooks), virtuals, population; prefer lean queries for performance when no document methods needed.
- **Indexes**: Add compound indexes to support queries and sort; monitor with `explain()`; avoid unbounded regex prefixes.
- **Caching**: Use Redis for hot data, idempotency keys, rate limits; invalidate carefully.
- **Logging**: Prefer structured logs (pino/winston); include correlation ids; avoid logging PII.
- **Security headers**: Use `helmet` to set HSTS, CSP, X-Frame-Options, etc.
- **Rate limiting**: Token bucket or leaky bucket; throttle abusive clients; combine with IP + user id.
- **Graceful shutdown**: Handle SIGTERM/SIGINT; stop accepting new requests, finish inflight, close DB connections.
- **Health checks**: Liveness vs readiness endpoints; readiness should verify DB/cache access.
- **File uploads**: Use streaming (`busboy`, `multer` in stream mode); validate MIME/size; store to S3-like storage; scan for malware if needed.
- **WebSockets**: Real-time bi-directional; consider heartbeats, reconnection, and auth renewal; use Socket.IO or native `ws`.

## Theory for Key Node.js Topics

### Event-driven, Non-blocking Architecture
- Node.js uses a single-threaded event loop plus a libuv-managed thread pool for certain operations (fs, crypto, DNS). Non-blocking I/O allows high concurrency by avoiding thread-per-request overhead. CPU-bound work should be offloaded (worker_threads, clustering) to prevent blocking the loop.

### Event Loop Phases and Microtasks
- Core phases: timers → pending callbacks → idle/prepare → poll → check → close callbacks. Between tasks, microtasks (Promises, `queueMicrotask`, `process.nextTick`) run. Excessive `nextTick` can starve I/O; prefer microtasks where possible.

### Buffers and Streams
- Buffers represent raw memory for binary I/O. Streams enable backpressure-aware, incremental processing: readables emit chunks, writables accept chunks; transform streams modify data. Respect backpressure by pausing/resuming or waiting for `drain`.

### Module Systems
- CommonJS (require/exports) vs ESM (import/export). ESM supports top-level await and static analysis; in Node, opt-in via `"type": "module"` or `.mjs`. Interop requires care (default vs named exports).

### Express Middleware and Error Handling
- Middleware chain processes requests; order matters. Error handlers use 4 args `(err, req, res, next)`. Validate inputs early, centralize error formatting, and avoid leaking internals. Use async wrappers to catch promise rejections.

### Security Best Practices
- Never trust input—validate and sanitize. Use `helmet` for headers, parameterized queries/ODM validators to avoid injection, rate limit to mitigate brute force, store secrets in env or secret manager, and rotate JWTs regularly.

### Logging, Metrics, and Tracing
- Structured logging (JSON) enables querying; include request ids. Expose health and metrics endpoints (Prometheus). Distributed tracing (OpenTelemetry) instruments outbound calls and DB queries for latency analysis.

### Deployment and Scaling
- Stateless processes behind a load balancer. Graceful shutdown handles SIGTERM to drain in-flight requests. Horizontal scaling via clustering or multiple containers; use sticky sessions if WebSockets are used or externalize session state.

### Database Performance
- Use proper indexes; analyze slow queries with `explain()`. Use pagination (cursor-based preferably). Cache hot reads with Redis, and design idempotency for repeated writes (e.g., retries).
