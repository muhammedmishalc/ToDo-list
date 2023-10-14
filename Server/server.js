const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mainrouter = require('./src/routers/mainrouter')
const mainmodel = require('./src/models/mainmodel')
const parser= require("body-parser")

app.use(parser())

app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/main',mainrouter)


const url = 'mongodb+srv://mishalc5678:mishalc5678@cluster0.tgwxmvg.mongodb.net/newtodo?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>{
    app.listen(2000,()=>{
        console.log('server started');
    })
}).catch((error)=>{
    console.log(error);
})