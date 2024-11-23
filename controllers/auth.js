const userService = require('../services/user')
const authController = {
    login: async(req,res)=>{
        try{
            //const response = await userService.createUser(req.body);
            res.status(200).send({response:{}})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    register:async(req,res) => {
        try{
            const response = await userService.createUser(req.body);
            res.status(200).send({response:response})
        }catch(e){
            console.log(e,'error')
        }
    }
}
module.exports = authController