const {  } = require('../server')

const router = Router()


router.get("",Question)
router.post("", Answer)
router.get('/:id', getQuestion)
router.put('/:id', updateAnswers)
router.delete('/:id', deleteQuestions)

module.exports = router