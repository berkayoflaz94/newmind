
const bcrypt = require('bcryptjs');
const mongooseUser = require('../models/user')
const jwt = require('jsonwebtoken')

async function login(userParams){
    const {email,password} = userParams;
    try{
        const user = await mongooseUser.findOne({email:email});
        console.log(user,'USer')
        if(!user || !(await bcrypt.compare(password, user.password))){
            return {message:'invalid username or password'}
        }

        const token = jwt.sign({email:user.email}, process.env.JWT_SECRET,{
            expiresIn: '1h'
        })
        return {token:token,message:'success'}
    }catch(e){
        console.log(e);
        return false;
    }
}
module.exports = {
    login
}