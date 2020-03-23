var express = require('express');
var router = express.Router();

/* GET users listing. */
// direct to patient page
router.get('/patient', function(req, res, next){
  res.render('patient', {title: 'Express'});
});
router.get('/patientindex', function(req, res, next){
  res.render('patientindex', {title: 'Express'});
});
//direct to page for adding new patient entries -------- to be modified/reused later
router.get('/newpatient', function(req, res){
  res.render('newpatient', {title: 'Express'});
});
router.get('/1', function(req, res){
  res.render('1', {title: 'Express'});
});
router.get('/2a', function(req, res){
  res.render('2a', {title: 'Express'});
});
router.get('/2b', function(req, res){
  res.render('2b', {title: 'Express'});
});
router.get('/2c', function(req, res){
  res.render('2c', {title: 'Express'});
});
router.get('/2d', function(req, res){
  res.render('2d', {title: 'Express'});
});
router.get('/2e', function(req, res){
  res.render('2e', {title: 'Express'});
});
router.get('/3', function(req, res){
  res.render('3', {title: 'Express'});
});
module.exports = router;
