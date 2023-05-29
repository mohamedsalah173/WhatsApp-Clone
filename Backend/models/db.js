/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const user = process.env.USER_NAME;
const password = process.env.MONGO_PASSWORD;

const connection = async () => {
  const MONGO_URL = `mongodb+srv://${user}:${password}@whatsappclone.kg3pnx7.mongodb.net/?retryWrites=true&w=majority`;
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
