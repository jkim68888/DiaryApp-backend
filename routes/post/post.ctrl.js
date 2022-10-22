// Sequelize
const { Post } = require('../../models')

/**
 * post 조회
 * GET /api/post/read?id=
 */
export const read = async (req, res, next) => {
  const postId = req.query.id

  var post = await Post.findOne({
    where: { id: postId },
  })

  res.json(post)
}

/**
 * post 조회
 * POST /api/post/write
 */
export const write = async (req, res, next) => {
  var data = req.body

  console.log(data)

  Post.create({
    title: 'express with msyql',
    body: 'express with msyql is ...',
    userId: 'pizzaZoa',
  })
  res.json(data)
}
