var express = require('express');
var router = express.Router();
var expressJwt = require('express-jwt');
var config = require('../config');

// Controllers
var authController = require('../controllers/auth.controller');
var userController = require('../controllers/user.controller');
var blogController = require('../controllers/blog.controller');
var imageController = require('../controllers/image.controller');

//******************************/
// Public Routes
//******************************/
// Access Token 认证获取
router.post('/token', authController.login);
router.get('/blog', blogController.getBlog);
router.get('/images', imageController.getAllImages);
router.post('/images', imageController.storeImages);

//******************************/
// Private Routes
//******************************/
router.get('/users/whoami', expressJwt({ secret: config.jwt_secret}), userController.whoami);
router.post('/blog', expressJwt({ secret: config.jwt_secret}), blogController.refreshBlog);

module.exports = router;