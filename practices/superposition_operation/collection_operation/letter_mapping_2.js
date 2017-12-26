'use strict';

function average_to_letter(collection) {
  let result = collection.reduce(function(a,b){
    return a+b;
  });
  result = Math.ceil(result/collection.length);
  let x = result;
    if(x<=26){
      return String.fromCharCode(x+96);
    }
    if(x%26===0 && x>=26){
      return String.fromCharCode(x/26+95)+String.fromCharCode(122);
    }else{
      return String.fromCharCode(x/26+96)+String.fromCharCode(x%26+96);
    }
}

module.exports = average_to_letter;

