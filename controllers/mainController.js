exports.sendHomepage = function (req, res) {
  res.sendFile('index.html');
}

exports.sendFiles = function (req, res) {
  res.sendFile($req.path);
}
