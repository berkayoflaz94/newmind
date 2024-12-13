const { createClient } = require('redis')


let redisClient;

async function createRedisClient(){
    if(!redisClient){
        redisClient = await createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .connect()

    }
    return redisClient
}


async function addProductInBasket(params){
    
    const {userId,product} = params
    const cartKey = userId;
    try{
        const client = await createRedisClient();
        const getBasket = await client.get(cartKey) ? JSON.parse(await client.get(cartKey)) : [];
        getBasket.push(product)
        /*const newBasket = getBasketParse.concat(products);*/
        await client.set(cartKey,JSON.stringify(getBasket))
        console.log(getBasket,'getBasket')
        //return true;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function getBasket(params){
    const client = await createRedisClient();
    const cartKey = params.userId

    try{
        const value = await client.get(cartKey);
        return JSON.parse(value);
    }catch(e){
        console.log(e);
    }
}
async function removeProductFromBasket(params){
    const {userId,productId} = params
    try{
        const client = await createRedisClient();
        
        const getBasket = await client.get(userId) ? JSON.parse(await client.get(userId)) : [];
        const indexToRemove = getBasket.findIndex(product => product.productId === productId) 
        if(indexToRemove !== -1){
            getBasket.splice(indexToRemove,1)
        }
        await client.set(userId,JSON.stringify(getBasket))
        console.log(getBasket,'getBasket')
        return true;
    }catch(e){
        console.log(e,'error')
        return false;
    }
}
async function clearBasket(params){
    const {userId} = params
    try{
        const client = await createRedisClient();
        await client.set(userId,"")
        return true;
    }catch(e){
        console.log(e,'error')
        return false;
    }

}

/*
async function update(params){
    const {id,name,price,color,stock} = params;
    try{
        const product = await mongooseBasket.findById(id);
        product.name = name;
        product.price = price;
        product.color = color;
        product.stock = stock;
        const productSave = await product.save();
        console.log(productSave);
        return productSave;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function removeProductFromBasket(params){
    const id = params;
    try{
        const productDelete = await mongooseBasket.findByIdAndDelete(id);
        return productDelete;
    }catch(e){
        console.log(e);
        return false;
    }
}*/
module.exports = {
    addProductInBasket,
    getBasket,
    removeProductFromBasket,
    clearBasket
    //update,
    //deleleteF,
}