var express = require('express');
var router = express.Router();
//===================================================================================================
//Post functionality for adding Help Request records to database
router.post('/addpatient', function(req, res){
  var db = req.db;

  //capture request variables for handoff to database
  var BedNumber = req.body.BedNumber;
  var Help = req.body.Help;
  var Prio = req.body.Prio;

  var collection = db.get('usercollect');

  //insert new information to usercollect database
  collection.insert({
    "BedNumber": BedNumber,
    "Help": Help,
    "Prio": Prio,
    "TimeIn": Date()
  }, function (err, doc){
    if(err) {
      //error handling
      res.send("Error in adding record to database");
    }
    else{
      //forward to patient page
      res.redirect("patient/patient");
    }
  });
});
//===================================================================================================
// GET functions - Routes requests to the proper html/ejs pages!
//direct to homepage/index - two options!
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/personalindex', function(req, res) {
  res.render('personalindex', { title: 'Express' });
});
router.get('/patientindex', function(req, res) {
  res.render('patientindex', { title: 'Express' });
});
//====================================================================================================
//This export function should remain the LAST LINE in the file
module.exports = router;
