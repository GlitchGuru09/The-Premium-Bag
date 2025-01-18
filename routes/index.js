const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');

router.get("/", function(req, res){
    let error = req.flash("error")
    let success = req.flash("success")
    res.render('index', { error, success });
});

router.get("/shop", isLoggedin, async function(req, res){
    let products = await productModel.find()
    res.render('shop', { products });
});

module.exports = router;