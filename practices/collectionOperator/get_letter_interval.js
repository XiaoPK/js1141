'use strict';

function get_letter_interval(number_a, number_b) {
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
    return String.fromCharCode(x+96);
  })
  console.log(a);
  return a;
}

module.exports = get_letter_interval;
