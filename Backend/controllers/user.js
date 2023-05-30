const User = require('../models/user');

const add = async (request, response) => {
  try {
    const exist = await User.findOne({ sub: request.body.sub });
    if (exist) {
      response.status(200).json({ message: 'user Already exist' });
      return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getusers = async (request, response) => {
  const users = await User.find();
  response.status(200).json(users);
};

module.exports = {
  add,
  getusers,
};
