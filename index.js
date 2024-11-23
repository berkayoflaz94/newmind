const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose')
const config = require('./config/db');

const app = express();

app.use(express.json());

//url için
app.use(express.urlencoded({ extended: true }));


//Database connect process
config.connectDB();

//localhost:3000
//örnek router
app.use('/api',routes);
app.listen(3000,() =>{
    console.log('ayaktayiz')
})