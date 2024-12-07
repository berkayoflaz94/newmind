const productService = require('../services/product')
const kafka = require('../utils/kafka')

const productController = {
    create: async(req,res)=>{
        const {name,color,price,stock} = req.body;
        if(!name){
            return res.status(502).send({message:"name is required"})
        }
        if(!price){
            return res.status(502).send({message:"price is required"})
        }
        try{
            const response = await productService.create(req.body)
            console.log(response,'result');
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
            const response = await productService.update(req.body)
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
            const response = await productService.deleleteF(id)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    getAll: async(req,res)=>{
        try{
            const response = await productService.getAll()
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
            const response = await productService.create(req.body)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
}
module.exports = productController