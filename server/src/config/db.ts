import mongoose from 'mongoose';
import * as dotenv from 'dotenv'; // 👈 FIX: Changed this line

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!MONGO_URI) {
    console.error('MONGO_URI is not defined in .env file');
    process.exit(1);
  }
  
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully. 🟢');
  } catch (error) {
    console.error('MongoDB connection failed: 🔴', error);
    process.exit(1);
  }
};

export default connectDB;