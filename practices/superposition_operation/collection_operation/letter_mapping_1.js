'use strict';

function even_to_letter(collection) { 
  const doubleNumber = value =>(value&1) == 0;
  let result = collection.filter(doubleNumber);
  var map = Array.prototype.map;
  var a = map.call(result,function(x){
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
}

module.exports = even_to_letter;
