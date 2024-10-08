# API Documentation

## Overview

This API enables users to manage events, points, registrations, favorites, and user accounts. It features authentication for user registration and login, as well as protected routes for user management, allowing for secure and efficient management of resources.

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Data Modeling](#data-modeling)
* [Project Setup](#project-setup)
* [Endpoints](#endpoints)
* [Developers](#developers)
* [License](#license)

## Introduction

This API is designed to facilitate the management of events and resources related to waste collection and community engagement. Users can register, log in, create and manage events, as well as mark their favorite events and points.

## Features

- **User Management**: Register, login, and manage user accounts with role-based access (admin or regular user).
- **Event Management**: Create, read, update, and delete events.
- **Favorites Management**: Add and manage favorite events and points.
- **Point Management**: Create and manage waste collection points.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens for protected access.
- **Error Handling**: Standardized error responses for better debugging and user experience.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for Node.js to build APIs.
- **Sequelize**: ORM for PostgreSQL, simplifying database operations.
- **JSON Web Tokens (JWT)**: For secure token-based authentication.
- **Bcrypt**: For hashing passwords securely.
- **Dotenv**: For managing environment variables.
- **PostgreSQL**: Relational database for data storage.

## Project Structure

```plaintext
├── src
│   ├── config         # Configuration files
│   ├── controllers    # API controllers
│   ├── middlewares    # Middleware functions
│   ├── migrations     # Sequelize migrations
│   ├── models         # Sequelize models
│   ├── routes         # API routes
│   └── server.js      # Entry point for the application
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project metadata and dependencies
└── README.md          # Documentation
```

## Data Modelling
Link for ER Diagram

## Project Setup
1. Clone this repository:
```bash
git clone https://github.com/ste-coding/backend-projeto-final-M5.git
cd backend-projeto-final-M5
```

2. Install the dependencies:
```bash
npm install
```

3. Create a .env file in the root of the project and define the environment variables as shown in `.env_EXAMPLE`:


4. Run database migrations (assuming you have Sequelize CLI installed):
```bash
npm run migrate
```

5. Start the server:
```bash
npm run dev
```

## Endpoints
Base URL

`http://localhost:3000/api`

## Authentication

### Register a New User

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123",
    "cpf": "12345678901",
    "phone": "1234567890",
    "user_type": "regular" // or "admin"
  }
  ```

### Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Protected Routes

All routes that require authentication must include a JWT token in the `Authorization` header as follows:

```
Authorization: Bearer <token>
```

## User Management

### Get All Users

- **Endpoint:** `/auth/users`
- **Method:** `GET`

### Get User by ID

- **Endpoint:** `/auth/users/:id`
- **Method:** `GET`

### Update User

- **Endpoint:** `/auth/users/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com",
    "phone": "0987654321",
    "cpf": "10987654321"
  }
  ```

### Delete User

- **Endpoint:** `/auth/users/:id`
- **Method:** `DELETE`

## Event Management

### Create Event

- **Endpoint:** `/events`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Event Name",
    "description": "Event Description",
    "date": "2024-10-10T10:00:00Z",
    "location": "Event Location",
    "event_type": "mutirão",
    "status": "pending",
    "created_by": "user_id_here"
  }
  ```

### Get All Events

- **Endpoint:** `/events`
- **Method:** `GET`

### Get Event by ID

- **Endpoint:** `/events/:id`
- **Method:** `GET`

### Update Event

- **Endpoint:** `/events/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Updated Event Name",
    "description": "Updated Description"
    // other fields as necessary
  }
  ```

### Delete Event

- **Endpoint:** `/events/:id`
- **Method:** `DELETE`

## Favorite Management

### Add Favorite

- **Endpoint:** `/favorites`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "user_id": "user_id_here",
    "point_id": "point_id_here", // can be null
    "event_id": "event_id_here" // can be null
  }
  ```

### Get All Favorites

- **Endpoint:** `/favorites`
- **Method:** `GET`

### Get Favorite by ID

- **Endpoint:** `/favorites/:id`
- **Method:** `GET`

### Update Favorite

- **Endpoint:** `/favorites/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "user_id": "updated_user_id"
    // other fields as necessary
  }
  ```

### Delete Favorite

- **Endpoint:** `/favorites/:id`
- **Method:** `DELETE`

## Point Management

### Create Point

- **Endpoint:** `/points`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Point Name",
    "location": "Point Location",
    "waste_type": "plastic",
    "operating_hours": "9 AM - 5 PM",
    "status": "approved",
    "created_by": "user_id_here"
  }
  ```

### Get All Points

- **Endpoint:** `/points`
- **Method:** `GET`

### Get Point by ID

- **Endpoint:** `/points/:id`
- **Method:** `GET`

### Update Point

- **Endpoint:** `/points/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Updated Point Name"
    // other fields as necessary
  }
  ```

### Delete Point

- **Endpoint:** `/points/:id`
- **Method:** `DELETE`

## Backend Developers🧑‍💻  <a name="backend-developers"></a>

  <table>
  <tr>
    <td align="center">
      <a href="https://github.com/ste-coding">
        <img src="https://avatars.githubusercontent.com/u/83964857?v=4" width="115" alt="Stéphanie Cândido"/><br />
        <sub><b>Stéphanie</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="">
        <img src="" width="115" alt=""/><br />
        <sub><b>Raissa</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="">
        <img src="" width="115" alt=""/><br />
        <sub><b>Matheus</b></sub>
      </a>
    </td>
  </tr>
</table>

## License  <a name="license"></a>
This project is licensed by: [GNU GPL-3.0](https://github.com/ste-coding/backend-projeto-final-M5/blob/main/LICENSE)