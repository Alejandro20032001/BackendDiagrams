import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user.schema";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    let userFound = await User.findOne({ username });
    if (!userFound)
      return res.status(404).json({ message: "Username or password invalid" });

    const compare = await User.validatePass(password, userFound.password);

    if (!compare)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, // 1 dia
    });

    userFound = userFound.toObject();
    delete userFound.password;

    res.status(201).json({ User: userFound, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
