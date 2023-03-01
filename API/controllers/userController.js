const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//function to create token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

//login user
const loginUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.login({
      name,
      email,
      password,
    });

    //create token
    const token = createToken(user._id);
    //user object was just created above and we can now access the _id from it

    console.log('User logged-in');
    return res.status(200).send({ name, email, token });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ error: err.message });
  }
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

    //create token
    const token = createToken(user._id);
    //user object was just created above and we can now access the _id from it

    console.log('New User created');
    return res.status(200).send({ email, token });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ error: err.message });
  }
};

module.exports = { loginUser, registerUser };
