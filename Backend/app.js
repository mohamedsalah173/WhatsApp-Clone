const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const connection = require('./models/db');

const router = require('./routes/Routes');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connection();

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}...`);
});
