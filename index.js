// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
const puppeteer = require('puppeteer-extra')

const express = require('express')
const app = express()

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
//puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

const flash = require('puppeteer-extra-plugin-flash')
puppeteer.use(flash)

const scraper = async (req, res) => {
    // That's it, the rest is puppeteer usage as normal 😊
    puppeteer.launch({ headless: false }).then(async browser => {
        const page = await browser.newPage()
        await page.setViewport({ width: 800, height: 700 })

        console.log("Testing Flash support")
        await page.goto('https://c.wgr.de/f/flashbooks/978-3-14-220000-2/content/vector/page627.swf', { waitUntil: 'domcontentloaded' })
        await page.waitFor(10000)
        // const pdf = await await page.pdf({
        //     format: "A4",
        //     path: "test.pdf",
        //     printBackground: true,
        //     margin: "none",
        //     height: "10px"
        // });
        // await page.screenshot({ path: 'westermann.png', fullPage: true })

        console.log(`All done, check the screenshots. ✨`)
        await browser.close()

        //res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
        //res.send(pdf)
        res.send("Crunching your data.")
    })

}


app.get("/", (req, res) => {
    scraper(req, res)
})

app.listen(3000, () => {
    console.log(`App is listening on port 3000`)
})

