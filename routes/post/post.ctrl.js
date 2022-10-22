/**
 * home 조회
 * GET /api/home
 */
export const read = async (req, res, next) => {
  var sample = {
    title: 'title',
    body: 'body is ...',
  }
  res.json(sample)
}
