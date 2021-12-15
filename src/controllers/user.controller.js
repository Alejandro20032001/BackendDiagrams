import User from '../models/user.schema'

export const createUser = async (req, res) => {
    const { completeName, username, password } = req.body;
    const newUser = new User({completeName, username, password});

    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
}

export const getAllUsers = async (req, res) => {
    const usersFound = await User.find();
    res.json(usersFound);
}

export const getUserById = async (req, res) => {
    const userFound = await User.findById(req.params.userId);
    res.status(200).json(userFound);
}

export const updateUser = async (req, res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.userId, req.body);
    res.status(200).json(userUpdated);
}

export const deleteUser = async (req, res) => {
    const userDeleted = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json(userDeleted);
}