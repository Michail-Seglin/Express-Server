const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/project');

const TableUser = mongoose.model('users', {
    name: String,
    surname: String,
    email: String,
    password: String,
    age: Number
});

const ObjectId = mongoose.Types.ObjectId;
module.exports = { TableUser, ObjectId };