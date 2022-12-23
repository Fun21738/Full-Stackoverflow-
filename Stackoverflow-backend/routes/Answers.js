const express= require('express')
const { addAnswers, getOpinions } = require('../controls/control')
const auth = require('../middleware/auth')

const router= express.Router()

router.get("/answers/:Quizesid",getOpinions)
router.post("/addAns",auth, addAnswers)



module.exports = router