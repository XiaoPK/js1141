'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  result.push(number);
  while(number>0){
    number= (number-interval).toPrecision(1);
    result.push( parseFloat(number));
  }
  console.log(result);
  return result;
}

module.exports = spilt_to_zero;
