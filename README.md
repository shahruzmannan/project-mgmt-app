# Project Management App

A full-stack project management application built with **React.js**, **Node.js**, **Express.js**, **GraphQL**, **MongoDB**, and **Mongoose**. This app allows users to create and manage clients, and associate projects with those clients. It features a modern, responsive frontend with React.js, a robust backend powered by Node.js and Express.js, and a flexible API using GraphQL for efficient data querying. MongoDB and Mongoose are used for database management, ensuring scalability and reliability.

## Key Features

- **Client Management**: Create, update, and delete clients.
- **Project Management**: Add, edit, and remove projects linked to specific clients.
- **GraphQL API**: Efficiently query and mutate data with a well-structured GraphQL API.
- **Responsive UI**: A clean and intuitive user interface built with React.js and Bootstrap.
- **Database**: MongoDB with Mongoose for schema-based data modeling and management.

## Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **API**: GraphQL
- **Database**: MongoDB, Mongoose

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Set up environment variables**

   Create a .env file in the root directory and add port and your MongoDB connection string:

   ```bash
     NODE_ENV = 'development'
     PORT = 5000
     MONGO_URI = your_mongodb_connection_string
  
2. **Install dependencies**
   ```bash
   cd client
   npm install
   
   cd ../server
   npm install
   
3. **Run the application**

   **Server:**
   
   ```bash
   cd server
   npm start
   ```
   
   **or with Nodemon:**
   
   ```bash
   cd server
   npm run dev
   ```
   **Client:**

   ```bash
   cd client
   npm start
   ```
