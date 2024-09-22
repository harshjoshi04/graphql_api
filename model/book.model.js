import mongoose, { model, Schema } from "mongoose";

const BookSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  title: String,
  description: String,
});

export const BookModel = model("book", BookSchema, "book");
