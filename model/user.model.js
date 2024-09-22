import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  age: Number,
  address: String,
});

export const UserModel = model("user", UserSchema, "user");
