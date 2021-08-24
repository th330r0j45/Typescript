"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("title: " + picture.title + ",\n     date: " + picture.date + ", \n     orientation: " + picture.orientation);
}
var myPic = {
    title: 'Test Title',
    date: '2021-04-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'test title',
    date: '2021-04-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'
});
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020-12-12' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('Picture', picture);
picture = generatePicture({ title: 'Test Title' });
console.log('Picture', picture);
picture = generatePicture({ date: '2020-12-12' });
console.log('Picture', picture);
var user;
user = { id: 1, username: 'test10', isPro: true };
console.log('user', user);
user.username = 'teodro1d';
console.log('user', user);
// user.id = 20; //solo lectura
// console.log('user',user);
