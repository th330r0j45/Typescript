// Crear una Foto

// function createPicture(title,date,size){

// }

//Usando TypeScript
export {};
type SquareSize = "100x100" | "500x500" | "1000x1000";
// function createPicture(title:string,date:string,size:SquareSize){
//     //se crea la foto
//     console.log('Create picture',title,date,size);
// }

function createPicture(title: string, date: string, size?: SquareSize) {
  //se crea la foto
  console.log("Create picture", title, date, size);
}
createPicture("BD", "2021-04-03", "100x100");
createPicture("Colombia Trip", "2021-04-03");

//Flat array function

let createPic = (title: string, date: string, size: SquareSize): object => {
  // return {
  //     title: title,
  //     date: date,
  //     size: size
  // }
  return { title, date, size };
};

const picture = createPic("BD", "2021-04-03", "100x100");
console.log("picture", picture);

// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
  //Procesar el mensaje del codigo
  if (message === "Error") {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return "An error has occurred";
  }
}

try {
  let result = handleError(200, "OK"); //string
  console.log("result", result);
  result = handleError(404, "Error"); //never
  console.log("result", result);
} catch (error) {}
