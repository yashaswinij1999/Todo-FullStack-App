# TodoApp

This project is a full-stack Todo application featuring a React frontend and a Node.js backend. Follow the steps below to set up and run the project locally.

## Index

- [TodoApp](#todoapp)
  - [Index](#index)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Running the Application](#running-the-application)
  - [Features](#features)
  - [Project Details](#project-details)
  - [Middleware and Controllers](#middleware-and-controllers)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)

## Getting Started

Follow these steps to set up and run the project locally.

1. **Clone the Repository** (if you have Git installed) or download the repository as a ZIP file and extract it.

First, clone the repository to your local machine using the following command:

```
git clone https://github.com/yashaswinij1999/todo-fullStack-app.git
```

2. **Navigate to the Project Directory**

```
   cd Todo-FullStack-App
```

## Project Structure

The project is organized into two main directories:

- **backend** - Contains the Node.js backend.
- **frontend** - Contains the React frontend.

### Backend Setup

1.Navigate to the backend directory:

```
cd backend
```

2.Install dependencies:

```
npm install
```

3.Start the backend server:

```
node index.js
```

The backend server will run on http://localhost:3000.

### Frontend Setup

1.Navigate to the frontend directory:

```
cd frontend
```

2.Install dependencies:

```
npm install
```

3.Start the frontend development server:

```
npm run dev
```

The frontend development server will run on http://localhost:5173.

### Running the Application

- Ensure the backend server is running (see Backend Setup).
- Ensure the frontend development server is running (see Frontend Setup).
- Open your browser and navigate to http://localhost:5173 to see the Todo application.

## Features

- **Add Task** - Use the input field to enter a new task and click "Add".
- **View Tasks** - View the list of tasks.
- **Edit Tasks** - Click the edit icon to modify an existing task.
- **Delete Task:** - Click the delete icon to remove a task.

## Project Details

**Backend**
The backend is built using Node.js and Express. It provides RESTful API endpoints to handle CRUD operations for the Todo items.

**Frontend**
The frontend is built using React and Vite. It provides a user interface to interact with the Todo items and communicates with the backend API.

## Middleware and Controllers

- **Express Router:** Used to define and manage routes.
- **CORS:** Used to allow cross-origin requests.
- **Controllers:** Handle the business logic for each route.
