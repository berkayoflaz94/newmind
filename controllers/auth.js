const authController = {
    login: async(req,res)=>{
        try{
            console.log(req.body.email,'email')
            console.log(req.body.password,'password')
            res.status(200).send({response:req.body})
        }catch(e){
            console.log(e,'error')
        }
        
    },
    register:async(req,res) => {
        console.log('geldi');
        res.status(200).send({response:'success'})
    }
}
module.exports = authController