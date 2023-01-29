
// const xx=require('fs');
// console.log("hiii jiiii ");
// xx.writeFileSync("hii2.txt" ,"hii i am a ");
// // fs is golobal module 
// // console.log(__dirname)
// const x=require('fs').writeFileSync
// x("newhu.txt" ,"new is a ")
// const http= require('http')
// http.createServer((req ,resp)=>{
//     resp.write(" <h1> abhijeet </h1> ");
//     resp.end();
// }

// ).listen(4500);

let http = require('http')
const data=(req ,resp)=>{
    resp.write(" <h1> i am abhijeetddddddddddddddd </h1>")
    resp.end();
}
http.createServer(data).listen(4600)
