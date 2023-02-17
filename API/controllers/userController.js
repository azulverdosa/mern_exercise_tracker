const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
  // const { name, password } = req.body;

  res.json({ mssg: 'User logged in' });
};

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.register({
      name,
      email,
      password,
    });
    console.log('New User created');
    return res.status(200).send({ email, user });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ error: err.message });
  }
};

module.exports = { loginUser, registerUser };
