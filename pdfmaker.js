const PDFDocument = require('pdfkit');
const fs = require('fs');


const pdfmaker = (pages) => {
    // Create a document
    const doc = new PDFDocument();

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream('final_output.pdf'));

    const sorted = pages.sort(function (a, b) { return a - b });

    //doc.addPage()
    

    sorted.forEach(page => {
        // Add an image, constrain it to a given size, and center it vertically and horizontally
        try {
            doc.image(`./output/${page}`, {
                //cover: [580, 120],
                width: 530,
                align: 'left',
                valign: 'left',
                scale: 0.9
            });
            console.log(`
         Added Page "${page}" to the pdf.
         `)
         doc.addPage()
            
        } catch (e) {
            return console.log(page, e)
        }

    })
    




    // Finalize PDF file
    doc.end();


}


const pages = fs.readdirSync('./output/')
pdfmaker(pages)