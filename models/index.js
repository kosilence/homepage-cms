var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require('../config');

mongoose.connect(config.db, {
    server: { poolSize: 20 }
}, function(err) {
    if (err) {
        console.log('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// models
require('./user.model');
require('./blog.model');
exports.User = mongoose.model('User');
exports.Blog = mongoose.model('Blog');