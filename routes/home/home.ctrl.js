/**
 * home 조회
 * GET /api/home
 */
export const board = async (req, res, next) => {
  var sample = {
    title: 'home test',
  }
  res.json(sample)
}
