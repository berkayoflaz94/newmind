const basketService = require('../services/basket')


const basketController = {
    create: async(req,res)=>{
        const {userId,productId} = req.body;
        if(!userId){
            return res.status(502).send({message:"userId is required"})
        }
        if(!productId){
            return res.status(502).send({message:"productId is required"})
        }
        try{
            const response = await basketService.addToCart(req.body)
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
        const {id} = req.body;
        if(!id){
            return res.status(502).send({message:"id is required"})
        }
        try{
            const response = await basketService.deleleteF(id)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    getAll: async(req,res)=>{
        try{
            const response = await basketService.getAll()
            console.log(response,'result');
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