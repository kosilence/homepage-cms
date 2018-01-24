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
router.get('/blog', blogController.get);
router.get('/images', imageController.getAll);

//******************************/
// Private Routes
//******************************/
router.get('/users/whoami', expressJwt({ secret: config.jwt_secret}), userController.whoami);
router.post('/blog', expressJwt({ secret: config.jwt_secret}), blogController.refresh);
router.post('/images', expressJwt({ secret: config.jwt_secret}), imageController.store);
router.put('/images/:id', expressJwt({ secret: config.jwt_secret}), imageController.update);
router.delete('/images/:id', expressJwt({ secret: config.jwt_secret}), imageController.delete);

module.exports = router;