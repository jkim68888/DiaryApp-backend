var express = require('express')
var router = express.Router()

var post = require('./post.ctrl')

router.get('/read', post.read)
router.post('/write', post.write)

module.exports = router
