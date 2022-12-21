const express= require('express')
const { signup, getUserById} = require('../controls/userControls.js')
const { addLogin}= require("../controls/userControls.js")
const auth = require('../middleware/auth.js')

const router= express.Router()

router.get('/me',auth, getUserById)
router.post('/signup', signup)
router.post('/Login', addLogin)



module.exports= router
