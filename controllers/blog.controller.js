var Blog = require("../services").Blog;
var resJson = require("../common/res_json.js");

exports.getBlog = function(req, res, next) {
  Blog.getBlogLatest()
    .then(function(blog) {
      res.send(resJson.success(blog));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};

exports.refreshBlog = function(req, res, next) {
  Blog.storeBlog()
    .then(function(blog) {
      res.send(resJson.success(blog));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};
