const { createUserDB, getUserIDDB, getUsersDB, deleteUserDB, updateUserDB } = require("../repository/user.repository")
const bcrypt = require('bcrypt');

const salt = 10;

async function createUser(userData) {
    if (userData.password.length < 8) throw new Error('password 8 letters');
    const hashPwd = await bcrypt.hash(userData.password, salt);
    const data = await createUserDB({ ...userData, password: hashPwd });
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

async function deleteUser(_id) {
    return await deleteUserDB(_id);
}

async function updateUser(_id, user) {
    return await updateUserDB(_id, user)
}

module.exports = { createUser, getUserID, getUsers, deleteUser, updateUser }