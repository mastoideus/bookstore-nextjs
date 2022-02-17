import nc from "next-connect";
import Book from "../../models/Book";
import mongoose from "mongoose";
import db from "../../utils/db";
import { books } from "../../data/dummy-data";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();

  await Book.deleteMany();
  await Book.insertMany(books);
  await db.disconnect();
  res.send({ message: "seeded succesfully" });
});

export default handler;
