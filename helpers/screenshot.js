module.exports.screenshotNode = async function screenshotNode(el, name) {
    try {
        await el.screenshot({
            path: `ads/${name.toLowerCase()}-${new Date().getTime()}.png`
        });
        return true;
    } catch (e) {
        return false;
    }
};
