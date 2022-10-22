var express = require('express')
var router = express.Router()

var homeRouter = require('./home/home')
var usersRouter = require('./users/users')
var postRouter = require('./post/post')
var postsRouter = require('./posts/posts')

router.use('/home', homeRouter)
router.use('/users', usersRouter)
router.use('/post', postRouter)
router.use('/posts', postsRouter)

module.exports = router
