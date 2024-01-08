const { createUserDB } = require("../repository/user.repository")

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}

module.exports = { createUser }