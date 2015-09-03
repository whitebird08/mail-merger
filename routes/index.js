var express = require('express');
var router = express.Router();
var mailMerge = require('../lib/mail_merge') 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge' });
});

router.post('/', function(req, res, next) {
 // var updatePage = false;
  var contacts = req.body.contacts//getting input text from user/client
  var subject = req.body.subject//getting input text from user/client
  var message = req.body.message//getting input text from user/client

  var previewMessage = mailMerge(contacts, message);

  res.render('index', {
    contacts: contacts,
    subject: subject,
    message: message,
    previewMessage: previewMessage
  });
});

module.exports = router;
 