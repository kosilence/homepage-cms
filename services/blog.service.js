var models = require("../models");
var Blog = models.Blog;
var Promise = require("bluebird");
var https = require("https");
var config = require("../config");

/**
 * 数据库查询获取最新的Blog
 */
exports.getBlogLatest = function(input) {
  return new Promise(function(resolve, reject) {
    Blog.find().sort({ created_at: -1 }).limit(1)
      .then(function(blog) {
        resolve(blog[0]);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

exports.storeBlog = function() {
  return new Promise(function(resolve, reject) {
    getNewBlogFromSite()
      .then(function(html) {
        var blog = new Blog({
          posts: formatBlogHtml(html)
        });
        return blog.save();
      })
      .then(function(blog) {
        resolve(blog);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

getNewBlogFromSite = function() {
  var options = {
    host: config.blog.host,
    path: config.blog.path
  };
  return new Promise(function(resolve, reject) {
    https.get(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (html) => {
        resolve(html);
      });
      res.on('error', (err) => {
        reject(err);
      });
    });
  });
}

formatBlogHtml = function(html) {
  var articleReg = /<article[\s\S]*?<\/article>/gi;
  var posts = html.match(articleReg);
  var formatPosts = posts.map(post => {
    var titleReg = /<h2[\s\S]*?<\/h2>/;
    var dateReg = /<div class="post-info">[\s\S]*?<\/div>/;
    var linkReg = /href="[\s\S]*?\/"/;
    var contentReg = /<div class="post-content">[\s\S]*?<\/div>/;

    var title = post.match(titleReg)[0].replace(/<[\s\S]*?>|\n/g, "").trim();
    var date = post.match(dateReg)[0].replace(/<[\s\S]*?>/g, "").trim();
    var link = post.match(linkReg)[0].split('"')[1];
    var content = post.match(contentReg)[0].replace(/<[\s\S]*?>/g, "").replace(/\n/g, " | ").trim();
    return {
      title: title,
      summary: content,
      link: link,
      created: date
    }
  });
  return formatPosts;
}
