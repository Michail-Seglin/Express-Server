const { get } = require("mongoose");
const { createUserDB, getUserIDDB, getUsersDB } = require("../repository/user.repository")
const bcrypt = require('bcrypt');

const salt = 10;

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}

async function getUsers() {
    const data = await getUsersDB();
    return data;
}

async function getUserID(_id) {
    const data = await getUserIDDB(_id);
    return data;
}

module.exports = { createUser, getUserID, getUsers }