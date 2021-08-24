"use strict";
// Void 
//Explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    //  return 'hola';
}
showInfo({ id: 1, username: 'Mateo0304', firstName: 'Mateo' });
//Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id:" + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n     ");
}
showFormattedInfo({ id: 1, username: 'Mateo0304', firstName: 'Mateo' });
//Tipo void, como tipo de dato en variable
var unusable;
//  unusable = null;
//  unusable = undefined;
// Tipo: never
function handleError(code, message) {
    // Process your error code 
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not found');
}
catch (error) {
}
function sumNumbers(lim) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
