const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get('/',function(req,res){
    res.send("hey its working.");
})

// console.log(process.env.NODE_ENV);
//creating routes based on env variable if the env variable i.e NODE_ENV != development then it wont show the create route
if(process.env.NODE_ENV === "development"){
    router.get('/create',function(req,res){
        res.send("hey its working.");
    })
}


module.exports = router;