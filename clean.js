const fs = require('fs');
const { convert } = require('./convert')
const { rename } = require('./fs')

let compare;
let tocompare;

// fs.readdir('./data/', async (err, files) => {
//     if (err) {
//         console.log("Something went wrong when trying to read the input directory.")
//     } else {
//         tocompare = files   
//         fs.readdir('./output/', async (err, files) => {
//             if (err) {
//                 console.log("Something went wrong when trying to read the input directory.")
//             } else {
//                 compare = files
//                 tocompare.forEach(async element => {

//                     if (!compare.includes(element)) {
//                         console.log(element)
//                     } else {
//                         return;
//                     }
//                 });   
//             }
            
//         })
//     }
// })

let files = [
    // "page10.swf",
    //  "page11.swf",
    //  "page100.swf",
    //  "page101.swf",
    //  "page102.swf",
    //  "page103.swf",
    //  "page104.swf",
    //  "page105.swf",
    //  "page106.swf",
    //  "page107.swf",
    //  "page108.swf",
    //  "page110.swf",
     "page111.swf",
     "page117.swf",
    //  "page17.swf",
    //  "page118.swf",
    //  "page120.swf",
 ]

files.forEach(file => {
    rename(file)
    
})








