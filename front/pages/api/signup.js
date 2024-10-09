// 회원 가입 핸들러
const signup = (req, res) => {
  const { id, password, nickname } = req.body;

  if (id && password && nickname) {
    return res.status(200).json({
      id,
      password,
      nickname
    });
  } else {
    return res.status(401).end();
  }
}

export default signup;