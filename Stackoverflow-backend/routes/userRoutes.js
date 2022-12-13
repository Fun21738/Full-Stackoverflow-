const express= require('express')
const { signup} = require('../controls/userControls.js')
const { addLogin}= require("../controls/userControls")

const router= express.Router()

router.post('/signup', signup)
router.post('/Login', addLogin)



module.exports= router
