var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//======================================================================================
//connection to MongoDB
var monk = require('monk');
//mount the nodetest1 database -> contains the "collections"/ data tables resides in /var/lib/mongodb on Linux
var db = monk('localhost:27017/nodetest1');

//=======================================================================================
//define paths to routing tables
var indexRouter = require('./routes/index');
var patientRouter = require('./routes/patientroutes');
var personalRouter = require('./routes/personalroutes');
//======================================================================================
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//======================================================================================
//Open the interface for the DB to the routing program
app.use(function(req,res,next){
  req.db = db;
  next();
});
//=====================================================================================
//define routing switches
app.use('/', indexRouter);
app.use('/patient', patientRouter);
app.use('/personal', personalRouter);
//======================================================================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//======================================================================================
//This export function should remain the LAST LINE
module.exports = app;
