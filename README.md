# UnFold Blogging Application

## Project Description

UnFold is a full-stack blogging application where users can share their thoughts, stories, and experiences. The application is built with modern web technologies, featuring a robust backend with Prisma, and Hono for efficient data handling. The frontend is built using React and Vite for fast and responsive user experiences. This project promotes clean architecture with reusable TypeScript utilities shared across the frontend and backend, ensuring seamless integration and a maintainable codebase.

## Technologies Used

### Backend
- Hono
- Prisma
- TypeScript

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS

### Common
- Shared TypeScript utilities

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables by copying `.env.example` to `.env` and filling in the required values.

4. Run Prisma migrations:
    ```sh
    npx prisma migrate dev
    ```

5. Start the backend server:
    ```sh
    npm run dev
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm run dev
    ```

### Common Setup

1. Navigate to the `common` directory:
    ```sh
    cd common
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the shared utilities:
    ```sh
    npm run build
    ```

## Running the Project

1. Start the backend server as described in the Backend Setup section.
2. Start the frontend server as described in the Frontend Setup section.

Once both servers are running, you can access the application in your browser.
