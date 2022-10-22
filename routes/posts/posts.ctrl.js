/**
 * home 조회
 * GET /api/home
 */
export const list = async (req, res, next) => {
  var sample = [
    {
      title: 'title',
      body: 'body is ...',
    },
    {
      title: 'title2',
      body: 'body2 is ...',
    },
  ]
  res.json(sample)
}
