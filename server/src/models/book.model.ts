import mongoose, { Document, Schema } from 'mongoose';

// -----------------------------------------------------------------
// 1. CREATE THE TYPESCRIPT INTERFACE
// -----------------------------------------------------------------
// This interface describes the properties of a Book object.
// TypeScript will use this for type-checking.
export interface IBook extends Document {
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  isbn?: string; // Optional property
  summary?: string; // Optional property
  coverImage?: string; // Optional: URL to a cover image
}

// -----------------------------------------------------------------
// 2. CREATE THE MONGOOSE SCHEMA
// -----------------------------------------------------------------
// This schema defines the structure of the document in MongoDB.
// Mongoose will use this to validate data.
const BookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple documents to have no ISBN (null)
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    coverImage: {
      type: String,
      trim: true,
    },
  },
  {
    // Automatically adds `createdAt` and `updatedAt` fields
    timestamps: true,
  }
);

// -----------------------------------------------------------------
// 3. CREATE AND EXPORT THE MODEL
// -----------------------------------------------------------------
// This line creates the 'Book' model from the schema.
// We can now use this model to interact with the 'books' collection
// in our database.
export default mongoose.model<IBook>('Book', BookSchema);