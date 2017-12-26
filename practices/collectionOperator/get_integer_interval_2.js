'use strict';

function get_integer_interval_2(number_a, number_b) {
  const doubleNumber = value=>(value & 1)==0;
  let result =[] ;
  for(let i = 0; i<Math.abs(number_b-number_a)+1;i++){
    if(number_a < number_b){
      result.push(number_a+i);
    }else{
      result.push(number_a-i);
    }
  }
  return result.filter(doubleNumber);
}

module.exports = get_integer_interval_2;
