const { isAd } = require("../helpers/ads");
const { screenshotNode } = require("../helpers/screenshot");
const { wait } = require("../helpers/utils");

module.exports.scrape = async function scrape(
    page,
    { url, name, cookies = false, additional = false }
) {
    console.log(`Scraping ${name} (${url})`);
    let adsFound = 0;

    await page.goto(url, { waitUntil: "networkidle2" });

    if (cookies) {
        await page.waitForSelector(cookies);
        await page.click(cookies);
    }

    await page.waitForSelector("iframe");
    await wait(10000);

    const iframes = await page.$$("iframe");
    const ads = await Promise.all(
        iframes.map(async (ad) => {
            let src = await ad.getProperty("src");
            let url = await src.jsonValue();
            return [url, ad];
        })
    );

    for ([url, ad] of ads) {
        if (isAd(url)) {
            found = await screenshotNode(ad, name);
            if (found) adsFound++;
        }
    }

    if (additional) {
        additionalAds = await page.$$(additional.join(","));
        for (ad of additionalAds) {
            found = await screenshotNode(ad, name);
            if (found) adsFound++;
        }
    }

    console.log(` ✓ Screenshotted ${adsFound} ad${adsFound == 1 ? "" : "s"}`);
};
