var express = require('express');
var router = express.Router();
// var data = require('../node_modules/express/lib/data.js') 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge' });
});
router.post('/', function(req, res, next) {
  //conditional here? updatePage=true
  // var updatePage ??????
  var contacts = req.body.contacts
  console.log(contacts)
  var subject = req.body.subject
  console.log(subject)
  var message = req.body.message
  console.log(message)

  res.render('index', {
    contacts: contacts,
    subject: subject,
    message: message
  });
});

module.exports = router;
 