const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router =  express.Router();
require('../dataconn/connection');
const User = require("../models/userSchema");

router.get("/",(req,res) => {
    res.send("Hello from Server router");
});
//signin
router.post('/SignIn', async (req, res) => {

    //destructuring of an object
    const { fullName, email, password, phone } = req.body;
    console.log(req.body);
    if(!fullName || !email || !password || !phone){
        return  res.status(422).json({error: "plz fill all the inputs"});
    }

    try{
        const response = await User.findOne({email:email});

        if(response) {
            return res.status(422).json({error: "Email is used previously"});
        }
        const user = new User({fullName, email, password, phone});
        
        await user.save();

        res.status(201).json({message: "User registered successfully"});

    
    } catch(err){
        console.log(err);
    }
});

//login
router.post('/Login',async (req,res) =>{
    try {
        let token;
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill all fields"});
        }

        const userValidate = await User.findOne({email : email});

        if(userValidate) {
            const isOk = await bcrypt.compare(password, userValidate.password);

            token = await userValidate.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 864000000)
            })
            if(!isOk){
                res.status(400).json({ error: "user does not faound"});
            }
            else{
                res.json({message: "user login successfully"});
            }
        }else{
            res.status(400).json({ error: "Invalid Credentials "});
        }

    } catch (error) {
        console.log(error);
    }

});

router.post('/Logout',async (req,res) =>{
    console.log('this is logout');
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('User logout');
});

module.exports =  router;