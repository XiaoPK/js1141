'use strict';
var number_map_to_word = function(collection){
  var map = Array.prototype.map;
  var a = map.call(collection,function(x){
    if(x<=26){
      return String.fromCharCode(x+96);
    }
    if(x%26===0 && x>=26){
      return String.fromCharCode(x/26+95)+String.fromCharCode(122);
    }else{
      return String.fromCharCode(x/26+96)+String.fromCharCode(x%26+96);
    }
  })
  return a;
};

module.exports = number_map_to_word;
