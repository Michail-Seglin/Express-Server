const express = require('express');
const { createUser } = require('../service/user.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send;
    } catch (er) {
        res.send(er.message);
    }
})


module.exports = route;
