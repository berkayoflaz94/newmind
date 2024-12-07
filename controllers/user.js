const userService = require('../services/user')
const kafka = require('../utils/kafka')
const userController = {
    updateUser: async(req,res)=>{
        try{
            const response = await userService.updateUser(req.body);
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    deleteUser:async(req,res) => {
        try{
            const response = await userService.deleteUser(req.params)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
    },
    getUser:async(req,res) => {
        try{
            const response = await userService.getUser(req.params)
            console.log(response,'result');
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
    },
    getUsers:async(req,res) => {
        try{
            const response = await userService.getUsers();
            console.log(response,`result ${response} `);
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
    },
    createOrder:async(req,res) => {
        try{
            /*const response = await userService.createOrder();
            if(response){
                
            }*/
            //kafka.sendMessage('asdas','asdads')
            kafka.sendMessage('order','test3')
            res.status(200).send({response:[]})
        }catch(e){
            console.log(e,'error')
        }
    },
}
module.exports = userController