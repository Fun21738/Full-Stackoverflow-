const express= require('express')
const { addAnswers, getAnswers } = require('../controls/control')

const router= express.Router()

router.get("",getAnswers)
router.post("/", addAnswers)



module.exports = router