"use strict";
//Tipo explicito
var idUser;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser: ' + idUser);
//Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('otherID: ' + otherId);
var surprise = 'hello ts';
var res = surprise.substring(6);
console.log('res', res);
