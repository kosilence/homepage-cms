var express = require('express');
var router = express.Router();

// Controllers
var authController = require('../controllers/auth.controller');
var userController = require('../controllers/user.controller');

// Access Token 认证获取
router.post('/auth', authController.login);

// User controller
router.get('/users/whoami', userController.whoami);

module.exports = router;