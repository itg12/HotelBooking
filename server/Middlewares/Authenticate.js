const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");


const Authenticate = async (req,res,next)=>{
    try{
        const decode= jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:decode._id, token: token});

        if(!rootUser){
            throw new Error("User not Found");
        }

        req.token = token;

        next();
       
    }
    catch(err){
        res.status(401).send('Unauthorised Person: No Token Provided')
        console.log(err);
    }

}

module.exports = Authenticate;

