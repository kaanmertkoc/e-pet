import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc register user
// @route POST /api/users/login
// @access PRIVATE
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, address, phone, pets } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  const user = await User.create({
    name,
    email,
    password,
    address,
    phone,
    pets,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      pets: user.pets,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      pets: user.pets,
    });
  } else {
    res.status(404);
    throw new Error('User not found. ');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;
    user.pets = req.body.pets || user.pets;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      pets: updatedUser.pets,
    });
  } else {
    res.status(404);
    throw new Error('User not found. ');
  }
});

// @desc    Get all users
// @route   GET /api/users/profile
// @access  PRIVATE/admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Delete User
// @route   GET /api/users/:id
// @access  PRIVATE/admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: 'User removed. ' });
  } else {
    res.status(404);
    throw new Error('User not fonud.');
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  PRIVATE/admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('user not found ');
  }
  res.json(user);
});

export {
  registerUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUserProfile,
  deleteUser,
  loginUser,
};
