const jwt = require('../../lib/jwt')

export const kakao = async (req, res, next) => {
  const { access_token } = req.body

  console.log('headers : ', req.headers)
  console.log('body : ', req.body)

  // 유저 데이터 요청
  try {
    RepUser = await axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  } catch (err) {
    console.log(err.response.data)
  }

  // 유저 데이터 저장

  // 자체 토큰 발급
  //   const jwtToken = await jwt.sign(user)

  //   result = {
  //     token: jwtToken.token,
  //     is_new: is_new,
  //     user: user,
  //   }

  // access token을 JWT를 사용하여 서버만의 토큰으로 발급 후 front에 전달
  res.json(req.body)
}
