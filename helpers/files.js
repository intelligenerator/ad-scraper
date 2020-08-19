const fs = require("fs");

module.exports.read = function read(uri) {
    return new Promise((res, rej) => {
        fs.readFile(__dirname + "/" + uri, function (err, data) {
            if (err) rej(err);
            res(data.toString());
        });
    });
};
