const express = require('express');

//controller functions
const { loginUser, registerUser } = require('../controllers/userController');

const router = express.Router();

//LOGIN
router.post('/login', loginUser);

//REGISTER
router.post('/register', registerUser);

module.exports = router;
