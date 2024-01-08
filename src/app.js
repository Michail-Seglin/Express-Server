const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
const route = require('./controller/user.controller')

// app.use(cookieParser());

app.use(bodyParser.json());

app.use('/user', route);

app.use((er, req, res, next) => res.status(500).send(er.message));

module.exports = app;