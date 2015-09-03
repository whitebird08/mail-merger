////test
// var form = document.getElementById('form');

// form.addEventListener('submit', function(event) {
//   var contact = this.elements[0].value
//   var subject = this.elements[1].value
//   var message = this.elements[2].value
//   var preview ='To:' + contact +'Subject' + subject + 'Message:' + message;
//   document.getElementById('preview').innerHTML = total;
//   event.preventDefault();
// })
/////test

function changeText(){
  var oldHTML = document.getElementById('para').innerHTML;
  var newHTML = "<span style='color:#ffffff'>" + oldHTML + "</span>";
  document.getElementById('para').innerHTML = newHTML;
}

// var contacts = req.body.contacts.split('\r\n')
  // console.log(contacts)
  // var contactObjects = [];

  // contacts.forEach(function(contactString){
  //   var contactArray = contactString.split(',')
  //   contactObjects.push({
  //     firstName: contactArray[0], 
  //     lastName: contactArray[1], 
  //     email: contactArray[2]
  //   });
  // });
  
  // var subject = req.body.subject
  // console.log(subject)
  // var message = req.body.message
  // console.log(message)

  // console.log(contactObjects)
  // var newMessage = message
  // console.log(message);
  // console.log(newMessage);
  // newMessage = newMessage.replace('{first}', contactObjects.firstName);
  // return newMessage;

  // for each contact in the contact Objects array
  
  // replace the {} in the message, with the corresponding property from the contact object
  // (replace {first}) with obj.firstName
  // output what we send to the view, should be an array of messages
