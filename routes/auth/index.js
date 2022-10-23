var express = require('express')
var router = express.Router()

var auth = require('./auth.ctrl')

router.post('/callback/kakao', authCtrl.kakao)

module.exports = router
