'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  for(let i = 0; i<Math.abs(number_b-number_a)+1;i++){
    if(number_a < number_b){
      result.push(number_a+i);
    }else{
      result.push(number_a-i);
    }
  }
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

module.exports = get_letter_interval_2;

