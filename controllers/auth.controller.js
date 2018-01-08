var User = require("../services").User;
var jwt = require("../common/jwt.js");
var resJson = require("../common/res_json.js");
var config = require("../config");
var bcrypt = require("bcrypt");

exports.login = function(req, res, next) {
  var input = {
    username: req.body.username,
    password: req.body.password
  };
  var userData = null;
  User.getUserByName(input.username)
    .then(function(user) {
      if (user) {
        return user;
      } else if (input.password === config.admin.password) {
        return User.storeUser(input);
      } else {
        throw new Error("NO WAY !");
      }
    })
    .then(function(user) {
      userData = user;
      return bcrypt.compare(input.password, user.password);
    })
    .then(function(result) {
      if (result === true) {
        var resData = {
          token: jwt.signToken(userData)
        };
        res.send(resJson.success(resData));
      } else {
        throw new Error("NO WAY !");
      }
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};
