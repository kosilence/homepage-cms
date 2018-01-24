var models = require("../models");
var Image = models.Image;
var Promise = require("bluebird");
var https = require("https");
var config = require("../config");

exports.getAllImages = function() {
  return new Promise(function(resolve, reject) {
    Image.find()
      .sort({ updated_at: -1 })
      .then(function(images) {
        resolve(images);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

exports.storeImage = function(input) {
  return new Promise(function(resolve, reject) {
    var image = new Image({
      url: input.url,
      desc: input.desc,
      type: input.type
    });

    image
      .save()
      .then(function(image) {
        resolve(image);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

exports.storeImages = function(images) {
  let imageSavePromises = [];
  for (let i in images) {
    imageSavePromises.push(this.storeImage(images[i]));
  }

  return Promise.all(imageSavePromises);
};

exports.updateImage = function(input, id) {
  return new Promise(function(resolve, reject) {
    var imageData = {
      url: input.url,
      desc: input.desc,
      type: input.type
    };

    Image.findByIdAndUpdate(id, { $set: imageData }, { new: true })
      .then(function(image) {
        if (image) {
          resolve(image);
        } else {
          reject("Update Image Error.");
        }
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

exports.deleteImage = function(id) {
  return new Promise(function(resolve, reject) {
    Image.findByIdAndRemove(id)
      .then(function(image) {
        if (image) {
          resolve(image);
        } else {
          reject("Delete Image Error.");
        }
      })
      .catch(function(err) {
        reject(err);
      });
  });
};
