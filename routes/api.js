var express = require('express')
var router = express.Router()

var homeRouter = require('./home')
var usersRouter = require('./users')
var postRouter = require('./post')
var postsRouter = require('./posts')

router.use('/home', homeRouter)
router.use('/users', usersRouter)
router.use('/post', postRouter)
router.use('/posts', postsRouter)

module.exports = router
