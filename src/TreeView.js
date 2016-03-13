"use strict";

var Node = require("./Node");
// private


function TreeView(htmlObject) {
  this.treeStructure = this.generateNodeObjects(htmlObject, 0);
}

TreeView.prototype.generateNodeObjects = function(htmlStructure, level) {
  var levelString = "";
  var nodeObjects = [];

  if(htmlStructure.name && htmlStructure.name !== undefined) {
        // treeString += htmlStructure.name +"\n";
        // for(var i = 0; i < level; i++) {
        //   treeString += "\t";
        // }
        nodeObjects.push(htmlStructure.name);

      for(var j = 0; j < htmlStructure.children.length; j++) {

        nodeObjects.push(new Node(htmlStructure.children[j].name, level, htmlStructure.children[j].data))
        // treeString += wopp.toString();
        // treeString += "\n" + levelString;
        this.generateNodeObjects(htmlStructure.children[j], level + 1);
      }
 // console.log(nodeObjects);
   return nodeObjects;
  }
  // console.log(nodeObjects);

};

TreeView.prototype.toString = function(){
  var treeString = "";
  console.log(this.treeStructure);

  return treeString;
};

// Exports
module.exports = TreeView;
