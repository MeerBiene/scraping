const fetch = require('node-fetch');
const FileType = require('file-type');
const SWFReader = require('swf-reader');
const fs = require('fs');
const { URL } = require('./config.json')

const fetcher = async (num) => {
    const resp = await fetch(`${URL}${num}.swf`, {
        method: "GET"
    })
    //console.log(typeof resp)
    let a = await resp.buffer()
    //console.log(a)
    //console.log(await FileType.fromBuffer(a))

    fs.writeFile(`./data/page${num}.swf`, a, () => {
        console.log("File Saved")
    })
    console.log(`
    Wrote file "page${num}" to the disk.
    `)
    // SWFReader.read('page627.swf', (err, swf) => {
    //     if (err) return console.error(err)
    //     console.log(swf)
    //     swf.tags.forEach(tag => {
    //         console.log(tag)
    //     })
    // })

}

for (let i = 1; i < 627; i++) {
    fetcher(i)
}