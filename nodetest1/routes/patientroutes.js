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

module.exports = router;
