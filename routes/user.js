const router = require("express").Router()

// register user
router.post('/register', (req, res) => {
    res.json({mgs: "Register user"})
})

// register user
router.post('/login', (req, res) => {
    res.json({mgs: "Login user"})
})

module.exports = router