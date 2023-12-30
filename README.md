# Contact Management App

Welcome to the Contact Management Application! This project is a React-based solution designed for efficient contact management.

## Overview

This project aims to streamline the management of contacts by providing various functionalities to view, search, and display detailed information about each contact. It utilizes React, React Router for routing, and Axios for API handling.

## Features

### Contact List
- Displays a list of contacts fetched from an API source.
- Allows filtering contacts based on first_name, last, or phone number using the search bar.

### Contact Details
- Provides detailed information about a selected contact, including name, phone, email, gender, and more.
- Displays an avatar image if available.

### Error Handling
- Utilizes Error Boundary components to catch errors during rendering and displays a fallback UI.

### Testing
- Implements Cypress for end-to-end testing, including error boundary scenarios.

## Getting Started

### Installation
1. Clone this repository.
2. Run `npm install` to install dependencies.

### Run the Project
- Execute `npm start` to launch the development server at [http://localhost:3000](http://localhost:3000).

### Testing
- Use Cypress for end-to-end testing: `npx cypress open`.

## Project Structure

- `src/` contains the project's source code.
  - `components/` holds various UI components.
    - `contacts/` contains components related to contact management.
  - `api/` includes functions to handle API requests.
  - `ErrorBoundaryTest.js` for testing error boundaries.

## Dependencies


### API Handling
- "axios": "^1.6.3"

### React & Related Libraries
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-router-dom": "^6.21.1"
- "react-scripts": "5.0.1"
- "react-spinners": "^0.13.8"

### Other Tools
- "cypress": "^13.6.2"
- "tailwindcss": "^3.4.0"

## Additional Notes

- Each component file provides specific implementations and functionalities.

Feel free to explore the individual components to understand their functionalities and explore test files for an understanding of the testing suites.
