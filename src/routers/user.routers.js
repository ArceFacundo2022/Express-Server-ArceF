const router = require('express').Router();
const {getUser, postUser, postSave} = require("../controllers/user.controllers")


router.get('/user', getUser)
router.post('/user', postUser)
router.post('/save', postSave)

module.exports = router;