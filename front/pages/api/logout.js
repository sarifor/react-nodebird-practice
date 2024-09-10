// 로그아웃 요청 핸들러
// - end()로 응답의 명시적 종료
const logout = (req, res) => {
  try {
    return res.status(200).end();
  } catch (e) {
    return res.status(401).end();
  }
}

export default logout;