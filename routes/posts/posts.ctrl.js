import { Post } from '../../models'
const { Image } = require('../../models')

/**
 * home 조회
 * GET /api/posts/list
 */
export const list = async (req, res, next) => {
  const user = req.user
  let postListRaw
  try {
    postListRaw = await Post.findAll({
      attributes: ['id','title','body','userid','created_at'],
      where: {
        userid: user.snsid,
      },
      include: [
        {
          model: Image,
          attributes: ['path'],
        },
      ],      
    })
  } catch (err) {
    console.error(err)
    res.status(505)
  }

  if(postListRaw === undefined) {
    res.send(505)
  } else {
    // const postJson = postListRaw.toJSON()
    res.json(postListRaw)
  }
}
