const basketService = require('../services/basket')


const basketController = {
    create: async(req,res)=>{
        const {userId,product} = req.body;
        if(!userId){
            return res.status(502).send({message:"userId is required"})
        }
        if(!product.productId){
            return res.status(502).send({message:"productId is required"})
        }
        try{
            const response = await basketService.addProductInBasket(req.body)
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    update: async(req,res)=>{
        const {name,color,price,stock} = req.body;
        if(!name){
            return res.status(502).send({message:"name is required"})
        }
        if(!price){
            return res.status(502).send({message:"price is required"})
        }
        try{
            const response = await basketService.update(req.body)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    delete: async(req,res)=>{
        const {userId,productId} = req.body;
        if(!userId){
            return res.status(502).send({message:"userId is required"})
        }
        if(!productId){
            return res.status(502).send({message:"productId is required"})
        }
        try{
            const response = await basketService.removeProductFromBasket(req.body)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    clearBasket:async(req,res)=>{
        const {userId} = req.body;
        if(!userId){
            return res.status(502).send({message:"userId is required"})
        }
        try{
            const response = await basketService.clearBasket(req.body)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
    },
    getBasket: async(req,res)=>{
        try{
            const response = await basketService.getBasket(req.params);
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    getSingle: async(req,res)=>{
        const {name,color,price,stock} = req.body;
        if(!name){
            return res.status(502).send({message:"name is required"})
        }
        if(!price){
            return res.status(502).send({message:"price is required"})
        }
        try{
            const response = await basketService.create(req.body)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
}
module.exports = basketController