var express = require('express')
var router = express.Router()

var post = require('./post.ctrl')

/* GET post page. */
router.get('/', post.read)

module.exports = router
