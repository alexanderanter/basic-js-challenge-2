"use strict";

function Node(name, level, text) {
  this.name = name;
  this.level = level;
  this.text = text;
}

Node.prototype.toString = function(){
  var result = "";
  for(var i = 0; i < this.level; i++) {
    result += "\t";
  }
  if(this.name){
    result += this.name;
  }
  if(this.text){
      result += " " + this.text;
  }





  return result;
};
// Exports
module.exports = Node;
