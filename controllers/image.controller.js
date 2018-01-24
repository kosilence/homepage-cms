var Image = require("../services").Image;
var resJson = require("../common/res_json.js");

exports.getAll = function(req, res, next) {
  Image.getAllImages()
    .then(function(images) {
      res.send(resJson.success(images));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};

exports.store = function(req, res, next) {
  var input = req.body;
  Image.storeImages(input)
    .then(function(images) {
      res.send(resJson.success(images));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};

exports.update = function(req, res, next) {
  var imageId = req.params.id;
  var input = {
    url: req.body.url,
    desc: req.body.desc,
    type: req.body.type
  };

  Image.updateImage(input, imageId)
    .then(function(image) {
      res.send(resJson.success(image));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};

exports.delete = function(req, res, next) {
  var imageId = req.params.id;

  Image.deleteImage(imageId)
    .then(function(image) {
      res.send(resJson.success(image));
    })
    .catch(function(err) {
      res.send(resJson.fail([], err));
    });
};
