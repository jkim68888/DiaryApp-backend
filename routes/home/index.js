var express = require('express')
var checkToken = require('../../lib/checkToken')
var router = express.Router()

var home = require('./home.ctrl')

/* GET home page. */
router.get('/', checkToken, home.board)

module.exports = router
