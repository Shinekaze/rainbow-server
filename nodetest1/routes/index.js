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
module.exports = router;
