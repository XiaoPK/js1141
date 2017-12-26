'use strict';

function doubleNumber(e){
  if(e%2 ===0){
    return e;
  }
}
function collect_all_even(collection) {
  let result;
  return result = collection.filter(doubleNumber);
}

module.exports = collect_all_even;
