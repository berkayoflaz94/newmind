
const bcrypt = require('bcryptjs');
const mongooseUser = require('../models/user')

async function createUser(userParams){
    const {username,email,password} = userParams;
    try{
        const hashedPassword = bcrypt.hashSync(password,10);
        const newUser = new mongooseUser({
            username,
            email,
            password:hashedPassword
        })
        newUser.save();
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}
async function updateUser(userParams){
    const id = userParams.id;
    const email = userParams.email;
    try{
        const user = await mongooseUser.findById(id);
        user.email = email;
        const userSave = await user.save();
        console.log(userSave);
        return userSave;
    }catch(e){
        console.log(e);
        return false;
    }
}

async function deleteUser(userParams){
    const id = userParams.id;
    try{
        const userDelete = await mongooseUser.findByIdAndDelete(id);
        return userDelete;
    }catch(e){
        console.log(e);
        return false;
    }
}
module.exports = {
    createUser,
    updateUser,
    deleteUser
}