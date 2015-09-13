function modifyText(contacts, message){
  
  var contactObjects = [];
  
  var lines = contacts.split('\n');
  lines.forEach(function(line){
    var contactArray = line.split(',')
    contactObjects.push({
      firstName: contactArray[0], 
      lastName: contactArray[1], 
      email: contactArray[2],
      message: message.replace('{first}', contactArray[0]).
                        replace('{last}', contactArray[1]).
                        replace('{email}', contactArray[2])
    }); 
  
  }) 
  return contactObjects;

  
}
module.exports = modifyText;
