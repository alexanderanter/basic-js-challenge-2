"use strict";

function Node(name, level, text) {
  this.name = name;
  this.level = level;
  this.text = text;
}

function replaceString(stringReplace, oldString, newString) {
  var re = new RegExp(oldString, "gi");
  return stringReplace.replace(re, newString);
}

Node.prototype.toString = function(){
  var result = "";
  var tabString = "";
  var textString = "";

  for(var i = 0; i < this.level; i++) {
    tabString += "\t";
  }

  result += tabString;
  if(this.name) {
    result += this.name;
    console.log(this.name);
  }

  if(this.text) {
    textString += " " + this.text;
  }
//first repleace all \n with correct tab value
  textString = replaceString(textString, "\n", "\n" + tabString + "\t");
// then check for any line breaks that leads with a whitespace and replace that whitespace with a full stop.
  textString = replaceString(textString, " \n", ".\n");

  if(textString !== "") {
      result += textString;
  }
  // return textString;
  return result;
};
// Exports
module.exports = Node;
