import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user.schema";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  token = token.replace(/^Bearer\s+/, "");
  try {
    const decoded = jwt.verify(token, config.SECRET);

    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized!" });
  }
};
