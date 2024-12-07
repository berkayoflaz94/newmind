
const mongooseOrder = require('../models/order')
const kafka = require('../utils/kafka')

async function getAll(){
    try{
        const getProduct = await mongooseOrder.find();
        return getProduct;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function getSingle(params){
    const id = params.id
    try{
        const getProduct = await mongooseOrder.findById(id);
        return getProduct;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function create(params){
    const {userId,products} = params;
    try{
        const newOrder = new mongooseOrder({
            userId,
            products
        })
        newOrder.save();
        if(newOrder){
            kafka.sendMessage('order',`orderId:${newOrder.id}`)
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e);
        return false;
    }
}
async function update(params){
    const {id,name,price,color,stock} = params;
    try{
        const product = await mongooseOrder.findById(id);
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
        const productDelete = await mongooseOrder.findByIdAndDelete(id);
        return productDelete;
    }catch(e){
        console.log(e);
        return false;
    }
}
module.exports = {
    getAll,
    getSingle,
    create,
    update,
    deleleteF
}