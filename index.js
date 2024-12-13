const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose')
const config = require('./config/db');
const redis = require('./utils/redis')
const http = require('http');

require('dotenv').config()

const app = express();

app.use(express.json());

//url için
app.use(express.urlencoded({ extended: true }));



  
//redis connection
redis.redisCon();

//Database connect process
config.connectDB();

app.listen(8000,() =>{
    console.log('ayaktayiz',process.env.JWT_SECRET);
})