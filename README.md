# API Documentation

## Overview

This API allows users to manage events, points, registrations, favorites, and user accounts. It includes authentication features for user registration and login, as well as protected routes for user management.

## Base URL

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
    "tipo_usuario": "regular" // or "admin"
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