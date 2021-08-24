// Void 

 //Explicito

 export {};
 function showInfo(user:any):any{
     console.log('User Info',user.id,user.username,user.firstName);
    //  return 'hola';
 }

 showInfo({id:1,username:'Mateo0304',firstName:'Mateo'})

 //Inferido

 function showFormattedInfo(user:any){
     console.log('User Info',`
        id:${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
     `)
 }
 showFormattedInfo({id:1,username:'Mateo0304',firstName:'Mateo'});


 //Tipo void, como tipo de dato en variable

 let unusable: void;
//  unusable = null;
//  unusable = undefined;

 // Tipo: never


 function handleError(code:number,message:string):never{
     // Process your error code 
     // Generate a message
     throw new Error(`${message}. Code: ${code}`);
 }
try {
    handleError(404,'Not found');

} catch (error) {
    
}
function sumNumbers(lim: number):never{
    let sum = 0;
    while(true) {
        sum++;
    }
}
sumNumbers(10);