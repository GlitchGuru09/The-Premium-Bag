const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/thePremiumBag`)
.then(function(){
    dbgr("Mongodb server connected succesfully!");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;

//to set env variable on local system using cmd "set NODE_ENV=development or export NODE_ENV=development"
//export DEBUG=development:*
// The DEBUG environment variable is used to enable debugging logs in Node.js applications that utilize the debug library.
// The value development:* specifies which debug logs to enable. In this case, it enables all debug messages under the namespace starting with development:.

//export NODE_ENV=development
// The NODE_ENV environment variable is used to define the runtime environment of the Node.js application (e.g., development, production, or test).