const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get('/admin',function(req,res){
    let success = req.flash("success");
    res.render("createproducts", { success });
})

// console.log(process.env.NODE_ENV);
// console.log(process.env.DEBUG);

//creating routes based on env variable if the env variable i.e NODE_ENV != development then it wont show the create route
if(process.env.NODE_ENV === "development"){
    router.get('/create',async function(req,res){
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res
                .status(403)
                .send("You dont have permission to create new account");
        }
        let {fullname, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(201).send(createdOwner);
    })
}


module.exports = router;