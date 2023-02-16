const user = require('../models/userModel');

//ogin user
const loginUser = async (req, res) => {
  // const { name, password } = req.body;

  return res.json({ mssg: 'User logged in' });
};

//register user

const registerUser = async (req, res) => {
  return res.json({ mssg: 'User registered' });
};

module.exports = { loginUser, registerUser };
