//Tipo explicito

let idUser: any;
idUser = 1; //number
idUser = '1'; //string

console.log('idUser: '+idUser);
//Tipo inferido
let otherId;
otherId = 1;
otherId  = '1';
// otherId = true;
console.log('otherID: '+otherId);


let surprise:any = 'hello ts';

const res = surprise.substring(6);
console.log('res',res);