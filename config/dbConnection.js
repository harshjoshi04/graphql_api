import mongoose from "mongoose";

export const DbConnection = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
