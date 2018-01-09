var express = require('express');
var router = express.Router();

// Controllers
var authController = require('../controllers/auth.controller');
var blogController = require('../controllers/blog.controller');

// Access Token 认证获取
router.post('/token', authController.login);

// Blog
router.get('/blog', blogController.getBlog);

module.exports = router;