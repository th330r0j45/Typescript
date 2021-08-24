//Corchetes []

//tipo explicito


let users:string [];

users = [
    'Leo','Teo','Luis'
];
// users = [1,true,'cad'];

//tipos inferidos

let otherUsers= [    
    'Leo','Teo','Luis'
]
// users = [1,true,'cad'];

//Array<tipo>

let pictureTitles:Array<string>;
pictureTitles= ['Favorite Sunset','Vacation','Foto'];

//Accediendo a los valores en un Array

console.log('FisrtUser',users[0]);
console.log('FisrtTitle',pictureTitles[0]);

//Propiedades en array

console.log('users.length',users.length);

//Usos de functiones

users.push('PlatziUser')
users.sort();
console.log('users',users);