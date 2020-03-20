var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/patient', function(req, res, next){
  res.render('patient', {title: 'Express'});
});
router.get('/personal', function(req, res, next){
  res.render('personal', {title: 'Express'});
});
router.get('/reqlist', function(req, res){
  var db = req.db;
  var collection = db.get('usercollect');
  collection.find({},{}, function (e, docs) {
    res.render('reqlist',{
          "reqlist" : docs
    });
  });
});
module.exports = router;
