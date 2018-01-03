var User = require("../services").User;
var resJson = require("../common/res_json.js");

exports.whoami = function(req, res, next) {
  User.getUserByName(req.user.username)
    .then(function(user) {
      res.send(resJson.success(user));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};
