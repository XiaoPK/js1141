'use strict';

function choose_even(collection) {
  const doubleNumber = value=>(value & 1)==0;
  return collection.filter(doubleNumber);
  //在这里写入代码
}

module.exports = choose_even;
