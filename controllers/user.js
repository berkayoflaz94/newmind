const userService = require('../services/user')
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
    }
}
module.exports = userController