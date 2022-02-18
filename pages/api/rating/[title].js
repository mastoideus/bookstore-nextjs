import Book from "../../../models/Book";
import nc from "next-connect";
import db from "../../../utils/db";

const handler = nc();

handler.patch(async (req, res) => {
  if (req.method === "PATCH") {
    const { slug, rating } = req.body;

    db.connect();

    const book = await Book.findOne({ slug: slug });

    if (!book) {
      res.status(422).json({ message: "Book not found" });
      return;
    }

    /*if (typeof book.rating[0] === "string") {
      book.rating.splice(0);
    }*/

    const ratingArray = [...book.rating, rating];
    const result = await Book.updateOne(
      { slug: slug },
      { $set: { rating: ratingArray } }
    );

    db.disconnect();
    console.log(ratingArray);
    /* const sumOfRatings = ratingArray.reduce((sum, el) => {
      return sum + el;
    });
    const averageRating = (sumOfRatings / ratingArray.length).toFixed(1);
    console.log(averageRating);
    const averageRatingRounded = Math.round(averageRating);
    console.log(averageRatingRounded);

    const sumVotes = ratingArray.length;
    console.log(sumVotes);

    const ratingData = {
      votes: sumVotes - 1,
      avRating: averageRating,
      avRatingRounded: averageRatingRounded,
    };*/

    res.status(201).json({ message: "succeded" });
  }
});

export default handler;
