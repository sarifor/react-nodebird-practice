// 댓글 요청 핸들러
const addcomment = (req, res) => {
  const { userId, postId, comment } = req.body;

  if (userId && postId && comment) {
    return res.status(200).json({
      userId,
      postId,
      comment
    });
  } else {
    return res.status(401).end();
  }
}

export default addcomment;