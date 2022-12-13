const express= require('express')
const { getAnswers, addAnswers } = require('../controls/control')

const router= express.Router()

router.get("/",getAnswers)
router.post("/", addAnswers)



module.exports = router