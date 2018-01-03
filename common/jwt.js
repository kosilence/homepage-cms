var config = require('../config');
var jwt = require('jsonwebtoken');

// 获取 token
jwt.signToken = function(user) {
    var tokenInfo = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
        _id: user._id,
        username: user.username
    }
    var token = jwt.sign(tokenInfo, config.jwt_secret);
    return token;
}

module.exports = jwt;