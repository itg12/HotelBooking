const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const User = require('../Models/UserSchema')
const Rooms = require('../Models/RoomSchema')
const Contact = require('../Models/ContactSchema')
const TopRooms = require('../Models/TopRooms')
const jwt = require('jsonwebtoken')



// Signup Route

router.post("/signup", async (req,res)=>{
    
        const {name, email, phone, password} = req.body

        
        try{

            if(!name || !email || !phone ||  !password){
                return res.status(502).json({message:"Please fill the field properly"})
            }
    
            const userExist = await User.findOne({email: email})
        
            if(userExist){
                return res.status(422).json({error: "User already Registered."});
            }
    
            if(!req.body.email.includes('@gmail.com')){
                return res.status(430).json({error: 'Enter valid email'})
            }

            if(req.body.password.length<8){
                return res.status(500).json({error: "Password should be greater than 8 characters."})               
            }

        
            // Now on this step i will hash the user password and confirm password.

            const salt = await bcrypt.genSalt(12);
            const securePassword = await bcrypt.hash(req.body.password, salt); 

            // Save the data in particular schema

            const user = new User({name, email, phone, password:securePassword})  
            const userRegister = await user.save();

            if(userRegister){               
                res.status(200).json({message: "Signup Successfull", id:userRegister.id})              

                // Now we are sending the email for successfull signup to the user.

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'risansig.2019@gmail.com',
                        pass: 'ztnz okfg qrcp snqk'
                    }
                })
              
                
                async function main() {
                 // send mail with defined transport object
                 const info = await transporter.sendMail({
                   from: '"risansig.2019@gmail.com', // sender address
                   to: req.body.email, // list of receivers
                   subject: "SLIKEE Hotel", // Subject line
                   text:  `Thank you for signup with SLIKEE Hotel with id: ${userRegister.id}`, // plain text body
                 });
               
                 console.log("Message sent: %s", info.messageId);
                }
                main().catch(console.error)
            }
           
        }catch(err){
            res.status(404).json({error: "Some Error Occured"+err})
        }
         
})



// Login Route

router.post("/login", async (req,res)=>{

    try{

        const {email, password} = req.body

        if(!email || !password){
            return res.status(500).json({message:"Please fill the field properly"})
        }

        const userAuth  = await User.findOne({email: email})

        if(!userAuth){
            return res.status(422).json({message:"Invalid Details"})
        }

         // Match user password with hash password
        const isMatch = await bcrypt.compare(password, userAuth.password);

        if(!isMatch){
            return res.status(422).json({message: "Invalid Details"})
        }
        else{

            // Now i will store jwt token during login

            const data = {
                user:{
                    id:userAuth.id
                }
            }
            const Token = jwt.sign(data, process.env.SECRET_KEY);
            return res.status(200).json({Token:Token})
        }  
    }catch(err){
        return res.status(404).json({message: "Some Error Occured"} + err)
    }
})





// Contact (Message) Schema

router.post("/contact", async (req,res)=>{
    
    const {name, email, phone, message} = req.body

    
    try{

        if(!name || !email || !phone ||  !message){
            return res.status(502).json({message:"Please fill the field properly"})
        }
     

        if(!req.body.email.includes('@gmail.com')){
            res.status(430).json({message: 'Enter valid email'})
        }


        // Save the data in particular schema

        const messages = new Contact({name, email, phone, message})  
        const saveMessage = await messages.save();

        if(saveMessage){               
            res.status(200).json({message: "Message Sent Successfully"})


            // Now we are sending the email for successfull signup to the user.

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'risansig.2019@gmail.com',
                    pass: 'ztnz okfg qrcp snqk'
                }
            })
          
            
            async function main() {
             // send mail with defined transport object
             const info = await transporter.sendMail({
               from: '"risansig.2019@gmail.com', // sender address
               to: req.body.email, // list of receivers
               subject: "Shiromani Kanika Hotel", // Subject line
               text:  `${req.body.name}, Thank you for Connecting with us. We will contact you soon.` // plain text body
             });
           
             console.log("Message sent: %s", info.messageId);
            }
            main().catch(console.error)
        }
       
    }catch(err){
        return res.status(404).json({error: "Some Error Occured"+err})
    }
     
})


// Fetch TopRooms from Database

router.get('/toprooms', async (req,res)=>{
    try{
     const data = await TopRooms.find({})
     return res.send(data)
    }
    catch(err){
     return res.status(404).json({message:"Some Error Occured"}+err)
    }   
 })


 
// Fetch All Rooms from Database

router.get('/rooms', async (req,res)=>{
   try{
    const data = await Rooms.find({})
    return res.send(data)
   }
   catch(err){
    return res.status(404).json({message:"Some Error Occured"}+err)
   }
   
})


// Fetch Particular Room Details from Database
router.get('/rooms/detail/:id', async (req,res)=>{
    try{
     const data = await TopRooms.findOne({"_id":req.params.id})
     return res.send(data)
    }
    catch(err){
     return res.status(404).json({message:"Some Error Occured"}+err)
    }
    
 })




module.exports = router