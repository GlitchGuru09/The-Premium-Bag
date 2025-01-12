const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedIn')

router.get("/", function(req, res){
    let error = req.flash("error")
    let success = req.flash("success")
    res.render('index', { error, success });
});

router.get("/shop", isLoggedin, function(req, res){
    res.render('shop');
});

module.exports = router;