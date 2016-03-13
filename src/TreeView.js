"use strict";

var Node = require("./Node");
// private
var treeString;

function TreeView(htmlObject) {
  var result = [];
  result = this.generateNodeObjects(htmlObject, 0);
  return result;
}

TreeView.prototype.generateNodeObjects = function(htmlStructure, level) {
  var levelString = "";
  if(!level) {
      level = 1;
    }
  for(var i = 0; i < level; i++) {
    levelString += "\t";
  }
  if(htmlStructure.name) {

      for(var j = 0; j < htmlStructure.children.length; j++) {
        var wopp = new Node(htmlStructure.children[j].name, level, htmlStructure.children[j].data);
        treeString += wopp.name;
        // treeString += "\n" + levelString;
        this.generateNodeObjects(htmlStructure.children[j], level + 1);
      }
  }
};

TreeView.prototype.toString = function(htmlStructure, level){
  return treeString;
};

// Exports
module.exports = TreeView;
