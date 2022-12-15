const express= require('express')
const { getQuizes, deleteQuestions, addQusetion } = require('../controls/control')


const router= express.Router()

router.get("/quiz", getQuizes)
router.delete('/:id', deleteQuestions)
router.post("/addquiz", addQusetion)


module.exports = router