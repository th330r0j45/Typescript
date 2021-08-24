"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username;
username = "teodro1d";
var message = username.length > 5
    ? "Welcome " + username
    : "Username is too short";
console.log("message", message);
var usernameWithId = 'teodro1d 1';
// Como obtener solo el username?
username = usernameWithId.substring(0, 8);
console.log('Username only', username);
//Sintaxis "As"
message = username.length > 5
    ? "Welcome " + username
    : "Username is too short";
console.log("message", message);
var helloUser;
helloUser = 'hello teodro1d';
username = helloUser.substring(6);
console.log('Username', username);
