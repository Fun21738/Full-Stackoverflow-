const express= require('express')
const { addComments, getComments } = require('../controls/control')

const router= express.Router()

router.get("/get",getComments)
router.post("/comment", addComments)


module.exports =router 