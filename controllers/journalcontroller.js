const Express = require('express')
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt")

router.get('/practice', validateJWT, (req,res) => {
    res.send('this is a practice route')
})

router.get('/about', (req,res) => {
    res.send('this is a about route')
})

module.exports = router;