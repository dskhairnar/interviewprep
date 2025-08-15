# Employee Management System (EMS) - Project Details

## Project Overview
Full-stack MERN application for managing employees, departments, attendance, leaves, payslips, and admin reports.

## Tech Stack
- **Backend**: Node.js + Express + MongoDB (Mongoose) + JWT Authentication
- **Frontend**: React 18 + Vite + React Router v6 + Context API + Axios
- **UI/UX**: Tailwind CSS + shadcn/ui + Radix UI primitives
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure
```
EMS/                 # Backend
├── server.js        # Express app + MongoDB connection + route mounting
├── routes/          # Route modules: auth, employee, department
├── middleware/      # auth middleware (JWT verification)
├── models/          # Mongoose models: Employee, Department, Attendance, Leave, Payslip, User
└── scripts/         # Utilities like createAdmin.js

EMS2/                # Frontend
├── src/
│   ├── context/     # Auth context (login/logout, token storage, role helpers)
│   ├── utils/       # PrivateRoutes, RoleBaseRoutes
│   ├── components/  # UI + pages (admin, employee, dashboards, lists)
│   └── api.js       # Axios instance + interceptor
```

## Key Features

### Backend Features
1. **Authentication System**
   - User registration and login
   - Password hashing with bcrypt
   - JWT token generation and verification
   - Role-based access control (Admin/Employee)

2. **Employee Management**
   - CRUD operations for employees
   - Profile management
   - Department assignment
   - Payslip generation and management

3. **Attendance System**
   - Daily attendance marking
   - Attendance history tracking
   - Monthly attendance reports

4. **Leave Management**
   - Leave request submission
   - Leave approval/rejection workflow
   - Leave history and reports

5. **Department Management**
   - Department CRUD operations
   - Employee-department relationships

6. **Reporting System**
   - Attendance reports
   - Leave reports
   - Department distribution reports

### Frontend Features
1. **Authentication Context**
   - Global state management for user authentication
   - Token persistence in localStorage
   - Role-based UI rendering

2. **Protected Routes**
   - Route protection for authenticated users
   - Role-based route access
   - Automatic redirects for unauthorized access

3. **Responsive Dashboards**
   - Admin dashboard with comprehensive overview
   - Employee dashboard with personal information
   - Real-time data updates

4. **Modern UI/UX**
   - Clean, responsive design
   - Accessible components
   - Intuitive navigation

## Authentication Flow
1. User registers/logs in via API endpoints
2. Backend validates credentials and issues JWT
3. Frontend stores token in localStorage
4. Axios interceptor attaches token to all requests
5. Backend middleware validates token on protected routes
6. Role-based access control on both frontend and backend

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `GET /api/auth/verify` - Verify token validity

### Employee Management
- `GET /api/employee/` - List all employees
- `GET /api/employee/profile` - Get current user profile
- `PUT /api/employee/profile` - Update profile
- `GET /api/employee/:id` - Get specific employee
- `PUT /api/employee/:id` - Update employee
- `DELETE /api/employee/:id` - Delete employee

### Attendance
- `GET /api/employee/attendance` - Get user attendance
- `POST /api/employee/attendance/mark` - Mark attendance
- `GET /api/employee/attendance/all` - Get all attendance (admin)

### Leave Management
- `GET /api/employee/leaves` - Get user leaves
- `POST /api/employee/leaves` - Request leave
- `GET /api/employee/leaves/all` - Get all leaves (admin)
- `PUT /api/employee/leaves/:id/status` - Update leave status

### Reports
- `GET /api/employee/reports/attendance` - Attendance reports
- `GET /api/employee/reports/leave` - Leave reports
- `GET /api/employee/reports/department` - Department reports

## Security Implementation
- JWT token-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- Role-based access control
- Protected API endpoints

## Database Schema
- **User Model**: Authentication and basic user info
- **Employee Model**: Extended employee information
- **Department Model**: Department details
- **Attendance Model**: Daily attendance records
- **Leave Model**: Leave requests and status
- **Payslip Model**: Salary and payment information

## Deployment Considerations
- Environment variables for sensitive data
- MongoDB Atlas for database hosting
- CORS configuration for production
- Error handling and logging
- Performance optimization

## Challenges Faced and Solutions
1. **State Management**: Used React Context for global auth state
2. **Route Protection**: Implemented custom route guards
3. **Real-time Updates**: Used polling for data updates
4. **Responsive Design**: Tailwind CSS for mobile-first approach
5. **API Security**: JWT middleware for route protection

## Possible Interview Questions (EMS) with Sample Answers

### 1) Why MERN for EMS?
**Answer**: MERN enables rapid CRUD and real-time UX: MongoDB’s flexible schemas model employee, attendance, and leave records; Express provides a simple REST layer; React/Vite gives fast interactive dashboards; JWT supports stateless auth, easy to scale horizontally.

### 2) How is authentication and authorization handled?
**Answer**: Passwords are bcrypt-hashed. On login, the server signs a JWT with user id and role (24h TTL). The frontend stores it in `localStorage` and attaches via Axios interceptor. Protected routes use `auth` middleware to verify the token from `Authorization` or `x-auth-token` and expose `req.user`. Role checks can be enforced in route handlers for admin-only endpoints.

### 3) How do you protect admin endpoints?
**Answer**: Add a role guard after `auth` middleware:
```js
function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  next();
}
```
Use it on admin routes like leaves/attendance listing and department CRUD.

### 4) How are reports generated efficiently?
**Answer**: Use MongoDB aggregation pipelines with indexes on `employeeId`, `date`, `departmentId`, and `status`. For monthly reports, filter by `$gte/$lt` date boundaries and group by department or status. Optionally cache frequently accessed monthly aggregates.

### 5) How do you prevent duplicate daily attendance?
**Answer**: Enforce a unique compound index on `(employeeId, date)` at day resolution. In the service, use upsert or check before insert to avoid duplicates.

### 6) How is data validated?
**Answer**: Request schemas validated in middleware (Joi/Zod) and at the Mongoose level with schema validators. Rejects invalid date ranges for leaves and ensures required fields for employees.

### 7) How do you handle CORS and security?
**Answer**: CORS configured to allow the dev origin (5173) and production origin. Use `helmet`, rate limiting, and input sanitization. JWT expiry and rotation policies mitigate token theft risk.

### 8) How would you scale EMS?
**Answer**: Stateless API with JWT supports horizontal scaling behind a load balancer; move sessions to Redis if needed for rate limiting; shard or partition attendance/leave collections by date or department; use read replicas for reports; adopt message queues for heavy tasks.

### 9) Backup and disaster recovery?
**Answer**: Automated daily backups of MongoDB, point-in-time recovery on Atlas, and infrastructure as code for reproducible environments.

### 10) What were the hardest bugs?
**Answer**: Token desync between tabs and stale role state. Fixed with an auth context that subscribes to `storage` events and token verification ping on mount.
