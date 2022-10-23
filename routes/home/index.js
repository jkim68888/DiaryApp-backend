var express = require('express')
var router = express.Router()
import checkToken from '../../lib/checkToken'

var home = require('./home.ctrl')

router.post('/', checkToken, home.board)

module.exports = router
