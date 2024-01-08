const { TableUser, ObjectId } = require('../db');

async function createUserDB(user) {
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}

module.exports = { createUserDB };