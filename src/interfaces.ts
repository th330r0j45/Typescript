// F para mostrar un Foto
export {};
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title:string,
    date:string,
    orientation:PhotoOrientation
}

function showPicture(picture:Picture){
    console.log(`title: ${picture.title},
     date: ${picture.date}, 
     orientation: ${picture.orientation}`)
}

let myPic =  {
    title:'Test Title',
    date: '2021-04-03',
    orientation:PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
    title:'test title',
    date: '2021-04-03',
    orientation:PhotoOrientation.Portrait,
    // extra: 'test'
})


interface PictureConfig{
    title?:string,
    date?:string,
    orientation?:PhotoOrientation
}
function generatePicture(config:PictureConfig){
    const pic = {title:'Default',date:'2020-12-12'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    return pic;
}
let picture  = generatePicture({});
console.log('Picture',picture)
picture = generatePicture({title:'Test Title'});
console.log('Picture',picture)
picture = generatePicture({date:'2020-12-12'});
console.log('Picture',picture)

// Inferfaz: Usuario
interface User{
    readonly id:number;
    username:string;
    isPro:boolean;
}
let user: User;
user = {id:1,username:'test10',isPro:true}
console.log('user',user);
user.username = 'teodro1d';
console.log('user',user);
// user.id = 20; //solo lectura
// console.log('user',user);

