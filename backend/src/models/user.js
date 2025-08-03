
const mongoose = require("mongoose");
const becypt = require("bcrypt");
const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
});

module.exports = mongoose.model('User', userschema);



// string --> salt -> hashalgo == : new string  

userschema.pre("save", async function(next){
    if(!this.isModified("password"))
    {
        return next();
    }
       await becypt.hash(this.password, 10);
       next();
});

// compare the pass  
userschema.methods.isPassCorrect =  async function(pass)
{
       return await becypt.compare(pass, this.password)
};



