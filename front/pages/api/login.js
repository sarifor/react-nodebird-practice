const login = (req, res) => {
  const { id, password } = req.body;

  if (id && password) {
    return res.status(200).json({
      id,
      password,
    });
  } else {
    return res.state(401).end();
  }
}

export default login;