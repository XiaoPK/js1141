'use strict';

function average_uneven(collection) {
  const chooseNumber = value =>(value&1)!=0;
  let result = collection.filter(chooseNumber);
  let result1 = result.reduce(function(a,b){
    return a+b;
  });
  return result1/result.length;
}

module.exports = average_uneven;
