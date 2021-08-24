console.log('Hola TypeScript con platzi');

//Number
//Explicito
let phone: number;
phone = 31285290;

//Inferido
let phoneNumber = 3128529007;
//phoneNumber = true; //Error por tipo
let hex : number = 0xF;
let binary: number = 0b101010;
let octal: number = 0o744;

//Bool
//Tipado Explicito
let isPro: boolean ;
isPro = true;

//Inferido
let isUserPro = false;
isUserPro = true;


// String 
let userName: string = 'teodro1d';
userName = "Mateo";

// Template Sting
// Uso de back-tick `
let userInfo:string;
userInfo = `User Info:
userName : ${userName}
fisrtName: ${userName + 'Rojas'}
phone: ${phoneNumber}
isPro: ${isPro}`
console.log('userInfo',userInfo);