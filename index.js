require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn')

app.use(express.json());

const UserInfo = require('./routes/user_info');
app.use(UserInfo);

app.listen(3000, () => console.log('Server Started'));
