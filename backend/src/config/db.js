
const  mongoose = require("mongoose");
 require("dotenv").config({path:(__dirname, '../.env')});

const dbconnection = async ()=>{
   
    try{
         await mongoose.connect(process.env.mongourl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
    });
        console.log("db is connected");
    }catch(err)
    {
        console.error("the db is disconnected : ", err.message)
    }
}

module.exports=dbconnection;