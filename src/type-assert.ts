// <tipo> // Angle bracket syntax
export {};
let username: any;
username = "teodro1d";

let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : "Username is too short";
console.log("message", message);

let usernameWithId:any = 'teodro1d 1';
// Como obtener solo el username?

username = (<string>usernameWithId).substring(0,8)
console.log('Username only',username);

//Sintaxis "As"
 
message= (username as string).length > 5
    ? `Welcome ${username}`
    : "Username is too short";
console.log("message", message);

let helloUser:any;
helloUser = 'hello teodro1d';
username = (helloUser as string).substring(6)
console.log('Username', username);
