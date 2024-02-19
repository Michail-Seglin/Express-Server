const express = require('express');
const { createUser, getUserID, getUsers, deleteUser, updateUser } = require('../service/user.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const userData = req.body;
        const data = await createUser(userData);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getUsers();
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await getUserID(req.params._id);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const user = req.body;
        await updateUser((_id, user), 200);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await deleteUser(req.params._id, 200);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
});

module.exports = route;
