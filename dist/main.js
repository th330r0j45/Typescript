"use strict";
console.log('Hola TypeScript con platzi');
//Number
//Explicito
var phone;
phone = 31285290;
//Inferido
var phoneNumber = 3128529007;
//phoneNumber = true; //Error por tipo
var hex = 0xF;
var binary = 42;
var octal = 484;
//Bool
//Tipado Explicito
var isPro;
isPro = true;
//Inferido
var isUserPro = false;
isUserPro = true;
// String 
var userName = 'teodro1d';
userName = "Mateo";
// Template Sting
// Uso de back-tick `
var userInfo;
userInfo = "User Info:\nuserName : " + userName + "\nfisrtName: " + (userName + 'Rojas') + "\nphone: " + phoneNumber + "\nisPro: " + isPro;
console.log('userInfo', userInfo);
