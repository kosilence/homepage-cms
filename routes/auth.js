var express = require('express');
var router = express.Router();

// Controllers
var userController = require('../controllers/user.controller');
var blogController = require('../controllers/blog.controller');

// User
router.get('/users/whoami', userController.whoami);
// Blog
router.put('/blog', blogController.refreshBlog);

module.exports = router;