
const User = require('../models/user');

const add = async (request, respose) => {
    try {
        let exist = await User.findOne({sub: request.body.sub});
        if(exist){
            respose.status(200).json({message:'user Already exist'});
        }
        const newUser = new User(request.body);
        await newUser.save();
        respose.status(200).json(newUser);
    } catch (error) {
        respose.status(500).json(error.message);
    }
} 




module.exports = {
    add,
}