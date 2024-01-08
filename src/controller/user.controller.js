const express = require('express');
const { createUser, getUserID, getUsers } = require('../service/user.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (er) {
        res.send(er.message);
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getUsers();
        res.send(data);
    } catch (er) {
        res.send(er.message)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getUserID(req.params._id);
        res.send(data);
    } catch (er) {
        res.send(er.message)
    }
})


module.exports = route;
