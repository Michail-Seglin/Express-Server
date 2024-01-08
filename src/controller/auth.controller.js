const { authUser } = require('../service/auth.service');
const router = require('express').Router();

router.post('/login', async (req, res) => {
    try {
        const { _id, email, password } = req.body;
        const data = await authUser(_id, email, password);
        res.send(data);
    } catch (er) {
        res.send(er.message)
    }
})

module.exports = router;