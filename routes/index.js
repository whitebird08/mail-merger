var express = require('express');
var router = express.Router();
var data = require('../node_modules/express/lib/data.js') 

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(express)
  var contacts = req.body.contacts
  var subject = req.body.subject
  var message = req.body.message
  var recipients = {preview : data}
  res.render('index', {preview: data});
});


module.exports = router;
