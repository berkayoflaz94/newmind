const express = require('express');
const logger = require('./utils/logger')
const routes = require('./routes/index');
const mongoose = require('mongoose')
const config = require('./config/db');
const redis = require('./utils/redis')
const http = require('http');
const socketIo = require('socket.io')

require('dotenv').config()

const app = express();
const server = http.createServer(app)
const io = socketIo(server)


app.use(express.json());

//url için
app.use(express.urlencoded({ extended: true }));


// log http request
app.use((req,res,next)=>{
    logger.http(`${req.method} - ${req.url}`)
    next();
})
  
//redis connection
redis.redisCon();

//Database connect process
config.connectDB();

//socket bağlantısı
io.on('connection',(socket) => {
    console.log('bir kullanıcı bağlandı');

    socket.on('disconnect',() => {
        console.log('bir kullanıcı bağlantıyı kesti')
    })
    io.emit('message','mesaj test')
    //
})


app.get('/sendMessage',(req,res) => {
    logger.info(`${req.method} - ${req.url}`)
    const { forUserId,fromUserId,message} = req.body;
    //veritabanına gönder 
    console.log(`chatroom-${forUserId}-${fromUserId}`,'test')
    io.emit(`chatroom-${forUserId}-${fromUserId}`,{fromUserId:fromUserId,message:message})
    res.status(200).send({message: 'iletildi'})
})

app.use('/api',routes)

server.listen(3000,() =>{
    console.log('ayaktayiz',process.env.JWT_SECRET);
})