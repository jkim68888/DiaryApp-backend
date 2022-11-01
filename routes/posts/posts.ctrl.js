import { Post } from '../../models'

/**
 * home 조회
 * GET /api/posts/list
 */
export const list = async (req, res, next) => {
  const user = req.user
  let posts
  try {
    posts = await Post.findAll({
      attributes: ['title','body','userid','created_at'],
      where: {
        userid: user.snsid,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(505)
  }
  res.json(posts)
}
