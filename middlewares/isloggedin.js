const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(req,res , next){
    if(!req.cookies.token){
        req.flash("error","you need to logged in first");
        return res.redirect("/");
    }

    try{
        
    //   let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    //   let user = await userModel
    //   .findOne({email:decoded.email})
    //   .select("-password");
    //   req.user = user;
    //   next();
    let user =userModel.findOne({email:req.body.email});
    let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
    req.user=decoded;
    next();

    }catch(err){
        req.flash("error", "something went wrong");
        res.redirect("/");
    }
}