// 댓글 요청 핸들러
const editnickname = (req, res) => {
  const { newNickname } = req.body;

  if (newNickname) {
    return res.status(200).json({
      newNickname
    });
  } else {
    return res.status(401).end();
  }
}

export default editnickname;