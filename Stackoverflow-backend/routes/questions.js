const express= require('express')
const { getQuizes, deleteQuestions, addQusetion, searchQuiz } = require('../controls/control')


const router= express.Router()

router.get("/quiz", getQuizes)
router.get("/search", searchQuiz)
router.delete('/:id', deleteQuestions)
router.post("/addquiz", addQusetion)


module.exports = router