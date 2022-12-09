const express= require('express')
const { getAskedQuiz  } = require('../controls/control')

const router= express.Router()

router.get("",getAskedQuiz )


module.exports =router