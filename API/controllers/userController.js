const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
  // const { name, password } = req.body;

  res.json({ mssg: 'User logged in' });
};

//register user

const registerUser = async (req, res) => {
  res.json({ mssg: 'User registered' });
};

module.exports = { loginUser, registerUser };
