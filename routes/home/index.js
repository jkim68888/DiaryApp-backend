var express = require('express')
var router = express.Router()
import checkToken from '../../lib/checkToken'

var home = require('./home.ctrl')

router.get('/', checkToken, home.board)

module.exports = router
