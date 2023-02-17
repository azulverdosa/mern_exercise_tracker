const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
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
  //better way other than this?
  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw Error('Email already in use');
  }
  console.log('password :>> ', password);
  const pswdSalt = await bcrypt.genSalt(10);
  const pswdHash = await bcrypt.hash(password, pswdSalt);
  console.log(pswdHash);
  const newUser = await this.create({ name, email, password: pswdHash });

  return newUser;
};

module.exports = mongoose.model('User', userSchema);
