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
        message: "Invalid Username or Password",
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

export const miPerfil = async (req, res) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  token = token.replace(/^Bearer\s+/, "");
  try {
    const decoded = jwt.verify(token, config.SECRET);

    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized!" });
  }
};
