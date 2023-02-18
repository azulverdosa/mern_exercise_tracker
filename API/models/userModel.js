const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static register method
userSchema.statics.register = async function ({ name, email, password }) {
  //validation - npm validator
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  if (!validator.isEmail(email)) {
    throw Error('Not a valid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('password not strong enough');
  }

  const emailExists = await this.findOne({ email });
  //better way other than "this"?

  if (emailExists) {
    throw Error('Email already in use');
  }
  const pswdSalt = await bcrypt.genSalt(10);
  const pswdHash = await bcrypt.hash(password, pswdSalt);

  const newUser = await this.create({ name, email, password: pswdHash });

  return newUser;
};

//static login method
userSchema.statics.login = async function ({ email, password }) {
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  const userExists = await this.findOne({ email });
  //better way other than "this"?
  //create const function?

  if (!userExists) {
    throw Error('User does not exist');
  }

  const match = await bcrypt.compare(password, userExists.password);
  //userExists.password is the hashed password

  if (!match) {
    throw Error('Invalid login credentials');
  }

  return userExists;
};

module.exports = mongoose.model('User', userSchema);
