// Change the url to the domain of your app
exports.url = 'https://imail.herokuapp.com';

exports.senderEmail = "rolando@animalbiome.com";
exports.senderName = "Rolando Sandor";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = 2660286;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "rolando@animalbiome.com";
