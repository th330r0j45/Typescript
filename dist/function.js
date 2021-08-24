"use strict";
// Crear una Foto
Object.defineProperty(exports, "__esModule", { value: true });
// function createPicture(title:string,date:string,size:SquareSize){
//     //se crea la foto
//     console.log('Create picture',title,date,size);
// }
function createPicture(title, date, size) {
    //se crea la foto
    console.log("Create picture", title, date, size);
}
createPicture("BD", "2021-04-03", "100x100");
createPicture("Colombia Trip", "2021-04-03");
//Flat array function
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // }
    return { title: title, date: date, size: size };
};
var picture = createPic("BD", "2021-04-03", "100x100");
console.log("picture", picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    //Procesar el mensaje del codigo
    if (message === "Error") {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return "An error has occurred";
    }
}
try {
    var result = handleError(200, "OK"); //string
    console.log("result", result);
    result = handleError(404, "Error"); //never
    console.log("result", result);
}
catch (error) { }
