const { TableUser, ObjectId } = require('../db');

async function createUserDB(user) {
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}

async function getUserIDDB(_id) {
    const data = await TableUser.find({ _id: new ObjectId(_id) });
    return data;
}

module.exports = { createUserDB, getUserIDDB };