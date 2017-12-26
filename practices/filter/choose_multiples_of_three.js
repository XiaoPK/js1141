'use strict';

function choose_multiples_of_three(collection) {
  const threeNumber=value=>(value%3===0);
  return collection.filter(threeNumber);
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
