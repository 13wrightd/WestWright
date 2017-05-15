exports.sendHomepage = function (req, res) {
  res.sendFile(__dirname, 'public/index.html', '../');
}

exports.sendFiles = function (req, res) {
  res.sendFile(__dirname + `public/${req.path}`, '../');
}
