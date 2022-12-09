const express= require('express')
const { addComments, getComments } = require('../controls/control')

const router= express.Router()

router.get("",getComments)
router.post("/", addComments)


module.exports =router