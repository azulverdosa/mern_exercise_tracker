const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
  //verify authenitication w/ auth headder on req
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'auth token required' });
  }

  //get token from authorization header
  //auth header looks like 'Bearer qgvyk34qvyg4u.qg4yiv3q5iuh.gyiv3qvli3'
  const token = authorization.split(' ')[1];

  //verify token
  //get _id from payload
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    //use _id from pyload to find user in db
    //NOTE - req.user(user could be called anything) used to then when we use next the user is attached to the req
    //.select allows you to pick one property from the model
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log('Error :>> ', Error);
    res.status(401).json({ error: 'req is not authorized' });
  }
};

module.exports = requireAuth;
