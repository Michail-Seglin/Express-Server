const { createUserDB, getUserIDDB } = require("../repository/user.repository")
const bcrypt = require('bcrypt');

const salt = 10;

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}

async function getUserID(_id) {
    const data = await getUserIDDB(_id);
    return data;
}

module.exports = { createUser, getUserID }