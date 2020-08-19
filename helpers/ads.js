const { read } = require("./files");
const { cleanList } = require("./utils");

let domains = new Set();
const hostNameRegex = new RegExp("[a-z0-9]+.[a-z0-9]+$");

async function init(list = "../config/ad-servers.json") {
    lines = await read(list);
    lines = cleanList(JSON.parse(lines));
    domains = new Set(lines);
}

function hostName(url) {
    return (url.match(hostNameRegex) || [])[0];
}

module.exports.isAd = function isAd(domain) {
    let url;

    try {
        url = new URL(domain).hostname;
    } catch (e) {
        return false;
    }

    if (!url) {
        return false;
    }

    host = hostName(url);

    if (!host) {
        return false;
    }
    return domains.has(host);
};

init();
