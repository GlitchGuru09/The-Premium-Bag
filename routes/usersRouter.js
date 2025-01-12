const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logout} = require('../controllers/authController')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isloggedin = require('../middlewares/isLoggedIn')


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout',isloggedin, logout);


module.exports = router;