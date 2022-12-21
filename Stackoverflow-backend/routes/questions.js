const express= require('express')
const { getQuizes, deleteQuestions, addQusetion, searchQuiz } = require('../controls/control')
const auth = require('../middleware/auth')


const router= express.Router()

router.get("/quiz",  getQuizes)
router.get("/search", searchQuiz)
router.delete('/:id', auth,deleteQuestions)
router.post("/addquiz", auth,addQusetion)


module.exports = router