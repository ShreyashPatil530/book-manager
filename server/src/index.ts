// -----------------------------------------------------------------
// THIS IS THE FINAL CODE FOR index.ts
// -----------------------------------------------------------------

import express = require('express');      // <-- FIX for TS1259
import { Request, Response } from 'express'; // <-- This stays the same
import cors = require('cors');              // <-- FIX for TS1259
import * as dotenv from 'dotenv';          // <-- FIX for TS1192
import connectDB from './config/db';
import bookRoutes from './routes/book.routes'; // 👈 --- THIS LINE IMPORTS YOUR ROUTES

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- API Routes ---
// This line tells your server:
// "For any URL that starts with '/api/books', 
//  use the routes from the 'bookRoutes' file."
app.use('/api/books', bookRoutes); // 👈 --- THIS LINE USES YOUR ROUTES

// A simple test route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running! 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});