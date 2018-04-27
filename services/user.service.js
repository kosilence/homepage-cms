var models = require("../models");
var User = models.User;
var Promise = require("bluebird");
var config = require("../config");
var CryptoJS = require("crypto-js");

/**
 * 管理员注册/添加管理员
 */
exports.storeUser = function(input) {
  return new Promise(function(resolve, reject) {
    var hashedPassword = CryptoJS.SHA256(input.password);
    var user = new User({
      username: input.username,
      password: hashedPassword
    });
    user.save()
      .then(function(user) {
        if (user) {
          resolve(user);
        }
        reject("Add User Error.");
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

/**
 * 根据 username 查询管理员信息
 */
exports.getUserByName = function(userName) {
  return new Promise(function(resolve, reject) {
    User.findOne({ username: userName })
      .then(function(user) {
        resolve(user);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};
