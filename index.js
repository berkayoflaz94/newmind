const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

//url için
app.use(express.urlencoded({ extended: true }));

//localhost:3000
//örnek router
app.use('/api',routes);
app.listen(3000,() =>{
    console.log('ayaktayiz')
})