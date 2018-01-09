var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('./config');
var logger = require('morgan');

var index = require('./routes/index');
var auth = require('./routes/auth');
var api = require('./routes/api');

require('./models');

var app = express();
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json({limit:1024102420, type:'application/json'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

///=======路由 开始===========//
app.use('/api', api);
app.use('/auth', expressJwt({ secret: config.jwt_secret}), auth);
app.use('/', index);
///=======路由 结束===========//

app.use(express.static(path.join(__dirname, '/build')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error pageserver
    res.status(err.status || 500).send(err.message);
});

module.exports = app;
