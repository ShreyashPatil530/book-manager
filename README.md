📚 MERN + TypeScript Book Management System

A complete, full-stack web application for managing a personal book collection. This project allows you to create, read, update, and delete book entries, complete with cover images and details.

Built with the MERN stack (MongoDB, Express, React, Node.js) and written entirely in TypeScript for a robust, type-safe, and scalable application.

🛠️ Tech Stack & Badges

This project uses a modern, in-demand stack:

✨ Key Features

Full CRUD Functionality: Create, Read, Update, and Delete books.

MongoDB Database: Uses MongoDB Atlas for persistent cloud data storage.

RESTful API: A robust backend API built with Express and Node.js.

Modern Frontend: A clean, responsive single-page application (SPA) built with React.

End-to-End Type Safety: Fully written in TypeScript for both the server and client, ensuring fewer bugs and a better developer experience.

Stylish UI: Styled with Tailwind CSS for a modern, responsive design.

Book Cover Images: Supports adding image URLs for book covers, with a fallback placeholder for broken links.

Responsive Design: Looks great on all devices, from desktops to mobile phones.

🚀 How to Run This Project

You must have two terminals open to run both the server and the client.

1. Backend Server (/server)

# 1. Navigate to the server folder
cd server

# 2. Create a .env file and add your MongoDB URI:
#    (Example: MONGO_URI=your_mongodb_connection_string)

# 3. Install dependencies
npm install

# 4. Run the server
npm run dev


The server will be running on http://localhost:5000.

2. Frontend Client (/client)

# 1. Open a new terminal and navigate to the client folder
cd client

# 2. Install dependencies
npm install

# 3. Run the React app
npm start


The React app will open in your browser at http://localhost:3000.

📂 Project Structure

The project is organized into two main folders:

/book-management-system
  ├── /client   # The React + TypeScript Frontend
  │   ├── /public
  │   ├── /src
  │   │   ├── /pages       (HomePage.tsx, BookForm.tsx)
  │   │   ├── /services    (api.ts)
  │   │   ├── /types.ts    (IBook interface)
  │   │   └── App.tsx
  │   └── package.json
  │
  ├── /server   # The Express + Node.js Backend
  │   ├── /src
  │   │   ├── /config      (db.ts)
  │   │   ├── /controllers (book.controller.ts)
  │   │   ├── /models      (book.model.ts)
  │   │   ├── /routes      (book.routes.ts)
  │   │   └── index.ts
  │   ├── .env             (Your secret keys)
  │   └── package.json
  │
  ├── .gitignore           # Ignores node_modules and .env files
  └── README.md            # This file








You can add your screenshot here

You can add your screenshot here
