exports.register = (req, res) => {
  const { body } = req;

  console.log(body);
  res.json(body);
};
