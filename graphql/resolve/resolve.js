import { title } from "process";
import {
  GetBook,
  GetUser,
  GetUserById,
} from "../../controller/graphql.controller.js";

export const resolve = {
  Book: {
    user: GetUserById,
  },
  Query: {
    user: GetUser,
    book: GetBook,
  },
};
