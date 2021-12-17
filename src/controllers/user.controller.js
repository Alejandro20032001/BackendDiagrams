import User from "../models/user.schema";
import Role from "../models/roles.schema";

export const createUser = async (req, res) => {
  const { completeName, username, password, roles } = req.body;

  const userFound = await User.findOne({ username });
  if (!userFound) {
    const newUser = new User({
      completeName,
      username,
      password: await User.encryptPass(password),
    });
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "estudiante" });
      newUser.roles = [role._id];
    }
    let userSaved = await newUser.save();
    userSaved = userSaved.toObject();
    delete userSaved.password;
    res.status(201).json(userSaved);
  } else res.status(400).json({ message: "The user name already exists" });
};

export const getAllUsers = async (req, res) => {
  const usersFound = await User.find();
  res.json(usersFound);
};

export const getUserById = async (req, res) => {
  const userFound = await User.findById(req.params.userId).populate("roles");
  res.status(200).json(userFound);
};

export const updateUser = async (req, res) => {
  const userUpdated = await User.findByIdAndUpdate(req.params.userId, req.body);
  res.status(200).json(userUpdated);
};

export const deleteUser = async (req, res) => {
  const userDeleted = await User.findByIdAndDelete(req.params.userId);
  res.status(200).json(userDeleted);
};
