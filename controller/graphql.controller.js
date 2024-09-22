import { BookModel } from "../model/book.model.js";
import { UserModel } from "../model/user.model.js";

export const GetUser = async () => {
  try {
    const user = await UserModel.find({});
    return user;
  } catch (error) {}
};

export const GetBook = async () => {
  try {
    const book = await BookModel.find({});
    return book;
  } catch (error) {}
};

export const GetUserById = async (agr) => {
  try {
    const user = await UserModel.findById(agr.userId);
    return user;
  } catch (error) {}
};
