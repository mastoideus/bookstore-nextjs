import { hash, compare } from "bcryptjs";
import { MongoClient } from "mongodb";

export const hashPassword = (password) => {
  const hashedPassword = hash(password, 12);
  return hashedPassword;
};

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_cluster}.d2mgr.mongodb.net/${process.env.mongo_database}?retryWrites=true&w=majority`
  );
  return client;
};

export const comparePasswords = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
