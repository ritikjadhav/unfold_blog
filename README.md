# UnFold Blogging Application

## Project Description

UnFold is a full-stack blogging platform where users can share their thoughts, stories, and experiences. The application is built using modern web technologies, with a backend powered by Hono.js and Prisma for efficient data management, and a frontend developed with React and Vite to provide a smooth, responsive user experience. The project follows clean architecture principles, featuring reusable TypeScript utilities shared between the frontend and backend for seamless integration and maintainability.

### Features

- **Create and Manage Blogs**: Users can create, edit, and delete their blogs effortlessly.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a great user experience.
- **User Authentication**: Secure authentication to manage user-generated content.

### Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Hono.js
- **Database**: PostgreSQL
- **Deployment**: Cloudflare Workers

## Project Structure

### Frontend (React.js)

- Handles the user interface and client-side logic.
- Built with React.js and styled using Tailwind CSS.

### Backend (Hono.js)

- Manages APIs and server-side operations.
- Integrated with a PostgreSQL database to store and manage blog data.

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Backend
1. Go to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Set up `.env` file and run Prisma migrations: `npx prisma migrate dev`
4. Start server: `npm run dev`

### Frontend
1. Go to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

### Common
1. Go to common directory: `cd common`
2. Install dependencies: `npm install`
3. Build utilities: `npm run build`
