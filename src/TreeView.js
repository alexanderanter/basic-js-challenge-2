"use strict";

var Node = require("./Node");
// private
var nodeArray = ["doctype html\\"];

function TreeView(htmlObject) {
    this.treeStructure = this.generateNodeObjects(htmlObject, 0);

}

TreeView.prototype.generateNodeObjects = function(htmlStructure, level) {
    var levelString = "";
    var nodeObjects = [];
    if (!level) {
       /* level = 1;*/
    }


    if (htmlStructure.name && htmlStructure.name !== "undefined") {
        console.log(htmlStructure.name);
        nodeArray.push(htmlStructure.name);
    }

    var i;
    if (htmlStructure.children) {
        for (i = 0; i < htmlStructure.children.length; i++) {
            if (htmlStructure.children[i].name) {
              /*  console.log(htmlStructure.children[i].name);*/
/*                nodeObjects.push(htmlStructure.children[i].name);*/
            }

            if (htmlStructure.children[i].data) {
                console.log(htmlStructure.children[i].data.trim() + "i should be pushed");
/*                var trimmedData = htmlStructure.children[i].data.trim();*/
                nodeArray.push(htmlStructure.children[i].data);
            }

            this.generateNodeObjects(htmlStructure.children[i], level + 1);
        }
    }

    return nodeObjects;

    /*    if (htmlStructure.name && htmlStructure.name !== undefined) {
            // treeString += htmlStructure.name +"\n";
            // for(var i = 0; i < level; i++) {
            //   treeString += "\t";
            // }
            nodeObjects.push(htmlStructure.name);

            for (var j = 0; j < htmlStructure.children.length; j++) {
                console.log(htmlStructure.children[j].name);
                console.log(level);
                console.log(htmlStructure.children[j].data);
                nodeObjects.push(new Node(htmlStructure.children[j].name, level, htmlStructure.children[j].data))
                // treeString += wopp.toString();
                // treeString += "\n" + levelString;
                this.generateNodeObjects(htmlStructure.children[j], level + 1);
            }

            // console.log(nodeObjects);
            return nodeObjects;
        }*/

  // console.log(nodeObjects);

};

TreeView.prototype.toString = function(){
    console.log(nodeArray[0]);
    var treeString = "";
    var copiedArray = nodeArray.slice();
    console.log(nodeArray);
    var i;
    console.log(copiedArray);
    console.log(copiedArray.length);

    for (i = 0; i < copiedArray.length; i++) {
        treeString += copiedArray[i];
    }

    return treeString;
};

// Exports
module.exports = TreeView;
