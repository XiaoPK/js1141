'use strict';

function collect_max_number(collection) {
  let result = collection.reduce(function(a,b){
    return a>b?a:b;
  })
  return result;
}

module.exports = collect_max_number;
