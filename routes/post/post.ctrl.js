// Sequelize
const { Post } = require('../../models')
const { Image } = require('../../models')
var fs = require('fs') //fs 모듈을 사용하겠다.

/**
 * post 조회
 * GET /api/post/read?id=
 */
export const read = async (req, res, next) => {
  const postId = req.query.id
  var post, postWithImage

  try {
    post = await Post.findOne({
      where: { id: postId },
    })
  } catch (err) {
    console.err(err)
  }

  try {
    postWithImage = await Post.findAll({
      include: [
        {
          model: Image,
          // foreignKey: 'postid',
          attributes: ['path'],
        },
      ],
    })
    // console.log(postWithImage[0].image.dataValues.path)
    console.log(postWithImage[0])
  } catch (err) {
    console.error(err)
  }

  post.dataValues.image = fs.readFileSync(
    process.env.PWD + '/' + postWithImage[0].image.dataValues.path
  )

  res.json(post)
}

/**
 * post 등록
 * POST /api/post/write
 */
export const write = async (req, res, next) => {
  const data = req.body
  let resPost

  try {
    resPost = await Post.create(data)
  } catch (error) {
    console.error(error)
    res.send(505)
  }

  const imageData = {
    postid: resPost.dataValues.id,
    path: req.file.path,
  }

  try {
    await Image.create(imageData)
  } catch (error) {
    console.error(error)
    res.send(505)
  }

  res.send(204)
}

/**
 * post 갱신
 * PATCH /api/post/update?id=
 */
export const update = async (req, res, next) => {
  const postId = req.query.id
  const data = req.body

  try {
    await Post.update(data, {
      where: { id: postId },
    })
  } catch (error) {
    console.error(error)
    res.send(505)
  }

  const imageData = {
    postid: postId,
    path: req.file.path,
  }

  // TODO : image가 업데이트될 경우 이전 image는 system에서 삭제 필요
  try {
    await Image.update(imageData, {
      where: { postid: postId },
    })
  } catch (error) {
    console.error(error)
    res.send(505)
  }

  res.send(201)
}

/**
 * post 삭제
 * DELETE /api/post/remove?id=
 */
export const remove = async (req, res, next) => {
  const postId = req.query.id
  try {
    await Post.destroy({
      where: { id: postId },
    })
  } catch (error) {
    console.error(error)
    res.send(505)
  }
  try {
    await Image.destroy({
      where: { postid: postId },
    })
  } catch (error) {
    console.error(error)
    res.send(505)
  }
  res.send(204)
}
