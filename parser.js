"use strict";

var htmlToJson = require("html-to-json");
var fs = require("fs");

function htmlParse(path, callback) {

    fs.readFile(path, "utf-8", function read(err, content) {
        if (err) {
            throw err;
        }

        htmlToJson.parse(content, function(data) {
            var root = data[0].children[0];
            callback(null, root);
        });
    });
}

module.exports.htmlParse = htmlParse;
