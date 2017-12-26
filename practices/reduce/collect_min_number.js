'use strict';

function collect_min_number(collection) {
  let result = collection.reduce(function(a,b){
    return a<b?a:b;
  })
  return result;
}

module.exports = collect_min_number;

