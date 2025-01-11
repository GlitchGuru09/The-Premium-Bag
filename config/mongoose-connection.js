const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/thePremiumBag")
.then(function(){
    console.log("Mongodb server connected succesfully!");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;