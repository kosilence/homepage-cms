var Image = require("../services").Image;
var resJson = require("../common/res_json.js");

exports.getAllImages = function(req, res, next) {
Image.getAllImages()
  .then(function(images) {
      res.send(resJson.success(images));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};

exports.storeImages = function(req, res, next) {
  var input = req.body;
  Image.storeImages(input)
    .then(function(images) {
      res.send(resJson.success(images));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};
