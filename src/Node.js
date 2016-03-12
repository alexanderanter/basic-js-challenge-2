"use strict";

function Node(name, level, text) {
  this.name = name;
  this.level = level;
  this.text = text;
}
function repleaceString(toReplace, stringReplace, newString) {
  var re = /toReplace/gi;
  var replaceWith = newString;
  var replacedString = stringReplace.replace(re, replaceWith);
  return replacedString;
}
Node.prototype.toString = function(){
  var result = "";
  var tabString = "";
  var textString = "";
  var re;
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

  re = /\n/gi;
  var replaceWith = "\n" + tabString + "\t";
  var textString = textString.replace(re, replaceWith);
  
  re = / \n/gi;
  replaceWith = ".\n";
  textString = textString.replace(re, replaceWith);

  if(textString != "") {
      result += textString;
  }
  // return textString;
  return result;
};
// Exports
module.exports = Node;
