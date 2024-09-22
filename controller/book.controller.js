import { BookModel } from "../model/book.model.js";

export const CreateBook = async (req, res) => {
  try {
    const reqBody = req.body;
    await BookModel.create(reqBody);
    return res.json({ message: "Booke Create Successufully " });
  } catch (error) {
    return res.status(404).json({ message: "Internal sevrer error !" });
  }
};
