# MERN Todo List Application

This repository contains a simple Todo List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with tailwindCSS. The application allows users to manage their tasks by adding, deleting, and editing them.

## Table of Contents
- Features
- Technologies Used 
- Project Structure
- Prerequisites
- Environment Variables
- Usage

## Features
- Add Task: Users can create new tasks and add them to the list.
- Delete Task: Tasks can be removed from the list with a simple click.
- Edit Task: Users can update the content of existing tasks.
- Responsive Design: The application is optimized for both desktop and mobile devices.

## Technologies Used
**Frontend:**
- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Axios: For making HTTP requests to the backend.



**Backend:**
- Node.js: A JavaScript runtime for server-side programming.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing task data.
- Mongoose: An ODM library for MongoDB and Node.js.

## Project Structure
The project is organized into two main directories:

- **client/** : Contains the React frontend code.
- **server/** : Contains the Node.js and Express backend code.

## Prerequisites
Make sure you have the following installed:

- Node.js: Download and install from Node.js official website.
- npm: Comes with Node.js, but ensure it's up to date.
- MongoDB: You can use a local instance or MongoDB Atlas for a cloud-based database.

## Environment Variables
The .env file should contain the following environment variables:

- MONGO_URl: Your MongoDB connection string.
- PORT: The port on which the backend server will run (default is ` 5000 `).

## Usage
Once the application is running:

- Adding a Task: Enter a task in the input field at the top of the list and press 'Add Task'.
- Deleting a Task: Click the delete icon next to the task.
- Editing a Task: Click the edit icon , modify the task, and press 'Save'.
