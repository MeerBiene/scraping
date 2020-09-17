const fs = require('fs')

const rename = async (pagenum) => {


    fs.rename(`./output/${pagenum}/1.png`, `./output/${pagenum}.png`, (err) => {
        if (err) console.log(err)
         else {
            fs.rmdir(`./output/${pagenum}/`, (err) => {
                if (err) console.log(err)
            })
         }
    })

    

}

// fs.readdir('./output/', async (err, files) => {
//     if (err) {
//         console.log("Something went wrong when trying to read the input directory.")
//     } else {
//         files.forEach(file => {
//             rename(file)
//         })
//     }
// });

module.exports = { rename }