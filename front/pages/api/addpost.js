// 포스트 요청 핸들러
// - 포스트 유무 확인
// - res.json()은 자동으로 응답 종료하므로, end() 불필요
const addpost = (req, res) => {
  const { userId, text, image } = req.body;

  if (text) {
    return res.status(200).json({
      userId,
      text,
      image: image || null,
    });
  } else {
    return res.status(401).end();
  }
}

export default addpost;