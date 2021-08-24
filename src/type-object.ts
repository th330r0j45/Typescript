//Type: Object

let user:Object;
user = {}; //Object


user = {
    id:1,
    userName:'teodro1d',
    fisrtName:'Mateo',
    isPro:true
};

console.log('user',user);
//Object vs object(clase JS vs tipo JS)
// console.log('user.username',user.username);

const myObject = {
    id:1,
    userName:'teodro1d',
    fisrtName:'Mateo',
    isPro:true
};

const isInstance = myObject instanceof Object; //Clase Object JS


console.log('isInstance',isInstance);
console.log('user.username',myObject.userName);