const express= require('express')
const { getQuizes, deleteQuestions, addQuizes } = require('../controls/control')


const router= express.Router()

router.get("/quiz", getQuizes)
router.delete('/:id', deleteQuestions)
router.post("/addQuiz", addQuizes)


module.exports = router