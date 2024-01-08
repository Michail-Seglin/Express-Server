const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./controller/user.controller')
const authUser = require('./controller/auth.controller')

app.use(cookieParser());

app.use(bodyParser.json());
app.use((er, req, res, next) => res.status(500).send(er.message));

app.use('/user', userRouter);

app.use('/auth', authUser);


module.exports = app;