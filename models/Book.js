import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Array, required: true },
    description: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, required: true },
    featured: { type: Boolean, required: true },
    genre: { type: String, required: true },
  },
  {
    timestamps: false,
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
