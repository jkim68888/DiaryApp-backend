/**
 * 이미지 업로드 테스트
 * POST /api/image/upload
 */
 export const upload = async (req, res, next) => {
    const image = req.file
    console.log("image: ",image)
    res.status(204)
  }
  