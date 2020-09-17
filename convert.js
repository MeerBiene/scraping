const jpexs = require('jpexs-flash-decompiler');
const fs = require('fs');



const convert = async (pagenum) => {
    jpexs.export({
        file: `./data/${pagenum}`,
        output: `./output/${pagenum}`,
        items: [jpexs.ITEM.FRAME],
        formats: [jpexs.FORMAT.FRAME.PNG],
        silence: false // optional. if set to `true`, there's no console log.
    }, async function (err) {
        if (err) {
            console.log('Error: ', err.message);
        } else {
            console.log('DONE!');
            //await sleep(7000);
        }
    });

}

// fs.readdir('./data/', async (err, files) => {
//     if (err) {
//         console.log("Something went wrong when trying to read the input directory.")
//     } else {

//          files.forEach(async file => {
//              await convert(file)
//          })
//         //convert("page1.swf")
//     }
// })


module.exports = { convert };