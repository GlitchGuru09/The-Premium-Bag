const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');

//register
module.exports.registerUser = async function(req,res){
    try {
        let {fullname, email, password} = req.body;

        let user = await userModel.findOne({email: email});
        if(user){
            req.flash("error", "you already have a account, please Login");
            return res.status(401).redirect("/")
        }
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err){
                    return res.send(err.message);
                }else{
                    let user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    });
                    let token = generateToken(user)
                    res.cookie("token", token)
                    req.flash("success", "user created successfully");
                    return res.redirect("/");
                }
            })
        })
    } catch (err) {
        res.send(err.message);
    }
}

//login
module.exports.loginUser = async function (req, res) {
    try {
        let { email, password } = req.body;

        let user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: "Incorrect Email or Password" });
        }

        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            if (result) {
                let token = generateToken(user);
                res.cookie("token", token);
                return res.status(200).json({ message: "Login successful"});
            } else {
                return res.status(401).json({ error: "Incorrect Email or Password" });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



//logout
module.exports.logout = function(req,res){
    res.cookie("token", "");
    res.redirect("/");
}