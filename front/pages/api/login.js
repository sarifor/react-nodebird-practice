// 로그인 요청 핸들러
// - 아이디, 패스워드 유무 확인
const login = (req, res) => {
  const { id, password } = req.body;

  if (id && password) {
    return res.status(200).json({
      id,
      password,
    });
  } else {
    return res.status(401).end();
  }
}

export default login;