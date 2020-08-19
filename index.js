const puppeteer = require("puppeteer");
const { read } = require("./helpers/files");
const { scrape } = require("./src/scrape");

async function main() {
    console.clear();
    console.log("==================================");
    console.log(" ★ intelligenerator/ad-scraper ★");
    console.log("==================================");

    const browser = await puppeteer.launch();
    const sites = JSON.parse(await read("../config/sites.json"));

    for (const siteInfo of sites) {
        const page = await browser.newPage();
        await page.setViewport({ width: 3840, height: 2160 });
        try {
            await scrape(page, siteInfo);
        } catch (e) {
            console.error(
                `An error occurred while scraping ${siteInfo.name}: ${e}`
            );
        } finally {
            await page.close();
        }
    }

    console.log("Done!");
    await browser.close();
}

try {
    main();
} catch (e) {
    console.error(`A general error occured: ${e}`);
}
