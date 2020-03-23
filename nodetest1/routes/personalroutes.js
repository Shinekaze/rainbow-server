var express = require('express');
var router = express.Router();

//direct to nurse page
router.get('/personal', function(req, res){
  res.render('personal', {title: 'Express'});
});
router.get('/personalindex', function(req, res){
  res.render('personalindex', {title: 'Express'});
});
//direct to page for basic output of database info ------ to be modified/reused later
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
