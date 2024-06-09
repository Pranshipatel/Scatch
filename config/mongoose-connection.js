const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
  console.log("connercted")
})
.catch(function(err){
   console.log("error")
})

module.exports = mongoose.connection;