const mongoose = require('mongoose')
async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://berkayoflaz:A1D2yoqak757uNbd@newmind.3nujs.mongodb.net/?retryWrites=true&w=majority&appName=newmind');
        console.log('baglndik');
    }catch(e){
        console.log(error,'mongoERROR')
    }
}

module.exports = { connectDB }