"use strict";
//Type: Object
var user;
user = {}; //Object
user = {
    id: 1,
    userName: 'teodro1d',
    fisrtName: 'Mateo',
    isPro: true
};
console.log('user', user);
//Object vs object(clase JS vs tipo JS)
// console.log('user.username',user.username);
var myObject = {
    id: 1,
    userName: 'teodro1d',
    fisrtName: 'Mateo',
    isPro: true
};
var isInstance = myObject instanceof Object; //Clase Object JS
console.log('isInstance', isInstance);
console.log('user.username', myObject.userName);
