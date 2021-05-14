const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: "../config.env"})
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    phone:{
        type:Number,
        required:true
    },
    tokens: [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

UserSchema.pre('save', async function(next) {
    console.log("hi from inside");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        console.log("krja kam");
    }
    next();
});

UserSchema.methods.generateAuthToken = async function () {
    try{
        let tokenUser = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: tokenUser});
        await this.save();
        return tokenUser;
    }catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('User', UserSchema);

module.exports = User;

