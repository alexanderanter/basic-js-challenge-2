"use strict";

function Node(name, level, text) {
  this.name = name;
  this.level = level;
  this.text = text;
}

Node.prototype.toString = function(){
  var result = "";
  var tabString = "";
  var textString = "";
  for(var i = 0; i < this.level; i++) {
    tabString += "\t";
  }
  result += tabString;
  if(this.name){
    result += this.name;
    console.log(this.name);
  }
  if(this.text){
    textString += " " + this.text;
  }
  var beginSlice = textString.indexOf("\n");
  var startNextSlice = textString.indexOf("\n") + 1;

  // var endSlice = textString.indexOf("\n") + 1;

  textString = textString.slice(beginSlice);

  if(textString != "") {
      result += textString;
  }

  return textString;
  // return result;
};
// Exports
module.exports = Node;
