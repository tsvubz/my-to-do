# React + Vite To-Do List Application

This project is a simple To-Do List application built using React and Vite. It allows users to add, delete, and reorder tasks.

## Features

- **Add Tasks**: Users can input a new task and add it to the list.
- **Delete Tasks**: Each task has a delete button to remove it from the list.
- **Reorder Tasks**: Users can move tasks up or down in the list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **ESLint**: For linting and maintaining code quality.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm run dev`.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Code Structure

- `src/ToDoList.jsx`: Contains the main logic for the To-Do List component, including state management for tasks and functions for adding, deleting, and moving tasks.
- `src/App.jsx`: The main application component that renders the `ToDoList`.
- `src/index.css`: Styles for the application.
- `vite.config.js`: Configuration for Vite.

## Usage

To add a task, type in the input field and click the "Add" button. You can delete a task by clicking the "Delete" button next to it. Use the "Up" and "Down" buttons to reorder tasks in the list.