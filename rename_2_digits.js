const fs = require('fs')

const rename_2_digits = async (pagenum) => {

    console.log("iteration: ", pagenum)
    fs.rename(`./output/page${pagenum}.swf.png`, `./output/page00${pagenum}.swf.png`, (err) => {
        if (err) console.log(err)
         else {
            console.log("Done renaming")
         }
    })

}

for (let i = 1; i < 9; i++) {
    rename_2_digits(i)
}