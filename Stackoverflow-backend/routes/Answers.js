const express= require('express')
const { addAnswers, getOpinions } = require('../controls/control')

const router= express.Router()

router.get("/answers",getOpinions)
router.post("/addAns", addAnswers)



module.exports = router