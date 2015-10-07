"use strict";

var parser = require("./parser");
var TreeView = require("./src/TreeView");


parser.htmlParse(__dirname + "/html/test1.html", function(err, result) {
    var treeView;
    var jadeStr;
    var html;

    if (err) {
        throw new Error("An unexpected error occurred!");
    }

    treeView = new TreeView(result);
    jadeStr = treeView.toString();
    console.log(jadeStr);
});
