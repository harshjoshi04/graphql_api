import { UserModel } from "../model/user.model.js";

export const CreateUser = async (req, res) => {
  try {
    const reqBody = req.body;
    await UserModel.create(reqBody);
    return res.json({ message: "User Create Successfully !" });
  } catch (err) {
    return res
      .status(404)
      .json({ status: 404, message: "Internal Sevrer Error !" });
  }
};
