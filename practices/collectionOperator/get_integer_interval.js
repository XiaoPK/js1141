'use strict';

function get_integer_interval(number_a, number_b) {
  let result =[] ;
  for(let i = 0; i<Math.abs(number_b-number_a)+1;i++){
    if(number_a < number_b){
      result.push(number_a+i);
    }else{
      result.push(number_a-i);
    }
  }
  return result;
}

module.exports = get_integer_interval;

