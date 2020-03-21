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
      res.redirect("patient");
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

// direct to patient page
router.get('/patient', function(req, res){
  res.render('patient', {title: 'Express'});
});

//direct to nurse page
router.get('/personal', function(req, res){
  res.render('personal', {title: 'Express'});
});

//direct to page for adding new patient entries -------- to be modified/reused later
router.get('/newpatient', function(req, res){
  res.render('newpatient', {title: 'Express'});
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
//====================================================================================================
//This export function should remain the LAST LINE in the file
module.exports = router;
