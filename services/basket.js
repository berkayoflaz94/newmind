
const redis = require('../utils/redis')


const cartKey = getCartKey(userId)

async function addToCart(params){
    const {userId,productId} = params
    try{
        await client.hset(cartKey,productId,userId)
        res.status(200).send({message:'success'})
       
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function getCartKey(params){
    const cartKey = getCartKey(userId)

    try{
        const cart = await client.hgetall(cartKey)

        if(!cart){
            return res.status(404).send({message:"sepet boş"})
        }
        res.status(200).send({message:'success',data:cart})
    }catch(e){
        console.log(e);
    }
}
async function removeFromCart(params){
    const {userId,productId} = params
    const cartKey = getCartKey(userId)
    try{
        const result = await client.hdel(cartKey,productId)

        if(result === 0){
            return res.status(404).send({message:"Ürün bulunamadı"})
        }
        res.status(200).send({message:'Ürün sepetten silindi.'})

    }catch(e){
        console.log(e);
        return false;
    }
}

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
async function deleleteF(params){
    const id = params;
    try{
        const productDelete = await mongooseBasket.findByIdAndDelete(id);
        return productDelete;
    }catch(e){
        console.log(e);
        return false;
    }
}
module.exports = {
    addToCart,
    update,
    deleleteF,
    removeFromCart
}