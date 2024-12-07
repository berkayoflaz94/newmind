
const mongooseProduct = require('../models/product')

async function getAll(){
    try{
        const getProduct = await mongooseProduct.find();
        return getProduct;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function getSingle(params){
    const id = params.id
    try{
        const getProduct = await mongooseProduct.findById(id);
        return getProduct;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function create(params){
    const {title,price,color,stock} = params;
    try{
        const newProduct = new mongooseProduct({
            title,
            price,
            color,
            stock
        })
        newProduct.save();
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function update(params){
    const {id,name,price,color,stock} = params;
    try{
        const product = await mongooseProduct.findById(id);
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
        const productDelete = await mongooseProduct.findByIdAndDelete(id);
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