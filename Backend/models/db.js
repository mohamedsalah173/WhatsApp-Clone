const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://user:ZIHhuSPeDzbId9DG@whatsappclone.kg3pnx7.mongodb.net/?retryWrites=true&w=majority';

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connect to mongoDB');
  } catch (error) {
    console.log('Can not connect to mongoDB');
  }
};

module.exports = connection;

// const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/user';

// mongoose.connect(MONGO_URL);
