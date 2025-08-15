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
