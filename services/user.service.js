var models = require("../models");
var User = models.User;
var Promise = require("bluebird");
var bcrypt = require("bcrypt");
var config = require("../config");

/**
 * 管理员注册/添加管理员
 */
exports.storeUser = function(input) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(input.password, config.bcrypt.saltRounds)
      .then(function(hashedPassword) {
        var user = new User({
          username: input.username,
          password: hashedPassword
        });
        return user.save();
      })
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
