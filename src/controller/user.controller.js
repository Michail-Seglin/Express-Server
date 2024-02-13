const express = require('express');
const { createUser, getUserID, getUsers, deleteUser } = require('../service/user.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const userData = req.body;
        const data = await createUser(userData);
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
        const { _id } = req.params;
        const data = await getUserID(req.params._id);
        res.send(data);
    } catch (er) {
        res.send(er.message)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await deleteUser(req.params._id, 200);
        res.send(data);
    } catch (er) {
        res.send(er.message)
    }
});

module.exports = route;
