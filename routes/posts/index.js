var express = require('express')
var router = express.Router()

var posts = require('./posts.ctrl')

/* GET posts page. */
router.get('/', posts.list)

module.exports = router
