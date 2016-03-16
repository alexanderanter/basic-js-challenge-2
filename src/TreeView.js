"use strict";

var Node = require("./Node");
// private
var nodeArray = ["doctype html"];
nodeArray.push("\n");
function TreeView(htmlObject) {
    this.treeStructure = [];
    this.generateNodeObjects(htmlObject, 0);

}

function replaceString(stringReplace, oldString, newString) {
    var re = new RegExp(oldString, "gi");
    return stringReplace.replace(re, newString);
}

TreeView.prototype.generateNodeObjects = function(htmlStructure, level) {
    var nodeObjects = [];
    var newObject = {};

    Node.call(newObject, htmlStructure.name, level, htmlStructure.data);
    console.log(newObject.toString());
    /*nodeArray.push(objectinString);*/

    if (htmlStructure.name && htmlStructure.name !== "undefined") {
        nodeArray.push(htmlStructure.name);
    }

    if (htmlStructure.data && htmlStructure.data !== "undefined") {
        nodeArray.push(htmlStructure.data);
    }

    if (htmlStructure.name !== "undefined") {
        for (var l = 0; l < level; l++) {
            nodeArray.push("\t");
        }
    }

    if (htmlStructure.children) {
        var i;
        for (i = 0; i < htmlStructure.children.length; i++) {
            this.generateNodeObjects(htmlStructure.children[i], level + 1);
        }
    }
    return nodeObjects;

/*    var levelString = "";
    var nodeObjects = [];

    if (htmlStructure.name && htmlStructure.name !== "undefined") {

        for (var l = 0; l < level; l++) {
            nodeArray.push("\t");
        }

        nodeArray.push(htmlStructure.name);
        if (level === 2) {
            nodeArray.push(" ");
        }

    }



    if (htmlStructure.children) {

        var i;
        for (i = 0; i < htmlStructure.children.length; i++) {
            if(htmlStructure.children[i].name || htmlStructure.children[i].tag){

            }
            if (htmlStructure.children[i].data) {
                nodeArray.push(htmlStructure.children[i].data);
            }

            this.generateNodeObjects(htmlStructure.children[i], level + 1);

        }
    }

    return nodeObjects;*/


};

TreeView.prototype.toString = function(){
    var treeString = "";
    var copiedArray = nodeArray.slice();

    var i;
    for (i = 0; i < copiedArray.length - 1; i++) {
        treeString += copiedArray[i];
    }

    treeString = replaceString(treeString, "\n    ", "\n");
    return treeString;
};

// Exports
module.exports = TreeView;
