const { TableUser, ObjectId } = require('../db');

async function createUserDB(userData) {
    await TableUser.create(userData);
    const data = await TableUser.find();
    return data;
}

async function getUsersDB() {
    const data = await TableUser.find();
    return data;
}

async function getUserIDDB(_id) {
    const data = await TableUser.find({ _id: new ObjectId(_id) });
    return data;
}

async function deleteUserDB(_id) {
    return await TableUser.deleteOne({ _id: new ObjectId(_id) });
}

module.exports = { createUserDB, getUserIDDB, getUsersDB, deleteUserDB };