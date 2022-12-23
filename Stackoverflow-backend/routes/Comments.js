const express= require('express')
const { addComments, getComments } = require('../controls/control')
const auth = require('../middleware/auth')

const router= express.Router()

router.get("/get", getComments)
router.post("/comment",auth, addComments)


module.exports =router 