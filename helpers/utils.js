module.exports.wait = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports.cleanList = (arr) =>
    arr.filter((el) => !!el).map((el) => el.trim());

module.exports.zipToObj = (keys, vals) => {
    return keys.reduce((acc, key, i) => {
        acc[key] = vals[i];
        return acc;
    }, {});
};
