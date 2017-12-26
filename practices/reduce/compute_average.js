'use strict';

function compute_average(collection) {
  let result = collection.reduce(function(a,b){
    return a+b;
  })
  return result/collection.length;
}

module.exports = compute_average;

