import { connectToDatabase, hashPassword } from "../../../utils/util";

const handler = async (req, res) => {
  const { password, email, username } = req.body;

  if (
    !email.includes("@") ||
    !email ||
    email.trim().length === 0 ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({ message: "Invalid input data", color: "red" });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const client = await connectToDatabase();

  const db = client.db();
  const existingUser = await db
    .collection("bookusers")
    .findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "Email already exists!", color: "red" });
    client.close();
    return;
  }
  const result = await db
    .collection("bookusers")
    .insertOne({ password: hashedPassword, email, username });
  res.status(200).json({ message: "User added", result, color: "green" });
  client.close();
};

export default handler;
