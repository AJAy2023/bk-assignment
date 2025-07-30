const express = require("express");
const app = express();
const dnconnect = require("./config/db");
 require("dotenv").config({path:(__dirname,  '.env')});
dnconnect();
// app.use(express.json());  // mid


const port = process.env.PORT||8000

app.get('/', (req, res)=>{
    res.send("welcome ");
})

app.listen(port ,  ()=>{
    console.log(`server  is  running on the  port  ${port} `);
})