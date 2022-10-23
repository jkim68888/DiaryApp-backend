/**
 * home 조회
 * GET /api/home
 */
export const board = async (req, res, next) => {
  res.send('Hello, ', req.state.user.nickname)
}
