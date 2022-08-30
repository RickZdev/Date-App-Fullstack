const mongoose = require('mongoose');
const User = require('../models/userModel');

// get all users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
}

// get single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not a valid user' });
  }

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// create new user
const createUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phoneNumber } = req.body;

  // add doc to db
  try {
    const user = await User.create({ firstName, lastName, emailAddress, phoneNumber });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not a valid user' });
  }

  try {
    const user = await User.findOneAndDelete({ _id: id });
    res.status(200).json({ message: 'user deleted successfully!' });
  } catch (error) {
    res.status(404).json({ error: 'No such user' });
  }
}

// update user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not a valid user' });
  }

  try {
    const user = await User.findOneAndUpdate({ _id: id }, {
      ...req.body
    });
    res.status(200).json({ message: 'user updated successfully!' });
  } catch (error) {
    res.status(404).json({ error: 'No such user' });
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
}