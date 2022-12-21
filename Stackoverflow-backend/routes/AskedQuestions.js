const express= require('express')
const { getAskedQuiz  } = require('../controls/control')
const auth = require('../middleware/auth')

const router= express.Router()

router.get("/", auth ,getAskedQuiz )


module.exports =router
