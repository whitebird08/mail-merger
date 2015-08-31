var express = require('express');
var router = express.Router();
var data = require('../node_modules/express/lib/data.js') 
var contacts;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge' });
});
router.post('/', function(req, res, next) {
  var contacts = req.body.contacts
  var subject = req.body.subject
  var message = req.body.message
  var recipients = {preview : data}
  res.render('index', {preview: data});
});

module.exports = router;
