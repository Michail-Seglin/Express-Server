const bcrypt = require('bcrypt');

const { getUserID } = require('./user.service');
const { createToken } = require('../helper/jwt');

async function authUser(_id, email, password) {
    const findUser = await getUserID(_id);
    const checkPwd = await bcrypt.compare(password, findUser.password);
    if (!checkPwd) throw new Error('incorrect password');
    const accessToken = createToken({ _id, email });
    return { accessToken };
}

module.exports = { authUser }