const axios = require('axios')
const jwt = require('../../lib/jwt')
import { User } from '../../models'

export const kakao = async (req, res, next) => {
  const accessToken = req.headers['access-token']

  let payload, user
  console.log('accessToken : ', accessToken)
  console.log('headers : ', req.headers)
  console.log('body : ', req.body)

  // 유저 데이터 요청
  try {
    payload = await axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  } catch (err) {
    console.error('kakao login error : ', err)
    res.send(505)
  }

  if (payload.status != 200) {
    console.error('Unknown error')
    res.send(505)
  } else {
    user = payload.data
  }

  const dbdata = {
    snsid: user.id,
    nickname: user.properties.nickname,
  }

  // 유저 데이터 저장
  User.create(dbdata)

  // 자체 토큰 발급
  const jwtToken = await jwt.sign(user)
  const result = {
    token: jwtToken.token,
  }

  res.json(result)
}
