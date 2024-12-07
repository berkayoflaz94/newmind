const { createClient } = require('redis')

async function redisCon(){
    try{
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
    console.log('redise baglandik');
    }catch(e){
        console.log(e,'error')
    }
}
module.exports = {
    redisCon
}