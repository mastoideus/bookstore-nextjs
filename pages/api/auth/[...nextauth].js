import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase, comparePasswords } from "../../../utils/util";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const db = client.db();

        const user = await db
          .collection("bookusers")
          .findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("User not found!");
        }

        const comparePasswordValid = await comparePasswords(
          credentials.password,
          user.password
        );
        if (!comparePasswordValid) {
          client.close();
          throw new Error("Invalid password!");
        }

        client.close();
        return {
          email: user.email,
        };
      },
    }),
  ],
});
