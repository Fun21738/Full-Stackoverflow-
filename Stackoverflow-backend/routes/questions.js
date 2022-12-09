const express= require('express')
const { getQuestions, deleteQuestions, addQuestion } = require('../controls/control')


const router= express.Router()

router.get("/", getQuestions)
router.delete('/:id', deleteQuestions)
router.post("/", addQuestion)


module.exports = router