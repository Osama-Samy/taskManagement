# Express Task Management API

## Overview
This project is a simple task management API built with Node.js and Express. It provides endpoints for user management and task operations such as creating, updating, deleting, and fetching tasks. The project includes email verification for user registration and utilizes middleware for token-based authentication.

---

## Features

- **User Management:**
  - User registration with email verification.
  - User login with JWT-based authentication.

- **Task Management:**
  - Add, update, delete, and fetch tasks.
  - Pagination for fetching tasks.
  - Endpoint to update task status.

- **Authentication:**
  - Secure endpoints with JWT middleware.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **JWT** for authentication
- **dotenv** for environment variable management
- **Joi** for validation
- **Bcrypt** for password hashing

## API Endpoints

### User Routes

#### `POST /user/signup`
- Registers a new user and sends a verification email.

#### `POST /user/login`
- Logs in a user and returns a JWT.

#### `GET /user/verifyEmail/:token`
- Verifies a user’s email using a token.

### Task Routes

#### `POST /task/add`
- Adds a new task. (Requires authentication)

#### `GET /task/all?page=<page>`
- Fetches all tasks with pagination. (Requires authentication)

#### `PUT /task/update/:id`
- Updates a specific task by ID. (Requires authentication)

#### `DELETE /task/delete/:id`
- Deletes a specific task by ID. (Requires authentication)

#### `PATCH /task/patch/:id`
- Updates the status of a specific task. (Requires authentication)

---

## Middleware

- **Authentication Middleware:** Ensures endpoints are accessible only to authenticated users.
- **Validation Middleware:** Validates request bodies using Joi.
  ## By: Osama Samy


