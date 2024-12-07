const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose')
const config = require('./config/db');
const redis = require('./utils/redis')
require('dotenv').config()

const app = express();

app.use(express.json());

//url için
app.use(express.urlencoded({ extended: true }));



//redis connection
redis.redisCon();

//Database connect process
config.connectDB();

//localhost:3000
//örnek router
app.get('/test',function(req,res,next){
    console.log('middleware')
    next();
},function(req,res){
    console.log('controller');
    res.status(200).send({success:true});
})
//localhost:3000/test
app.use('/api',routes);
app.listen(8000,() =>{
    console.log('ayaktayiz',process.env.JWT_SECRET);
})