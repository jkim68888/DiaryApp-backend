var express = require('express')
var router = express.Router()

var home = require('./home.ctrl')

/* GET home page. */
router.get('/', home.board)

module.exports = router
