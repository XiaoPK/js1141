'use strict';

function amount_even(collection) {
  const chooseNumber = value =>(value&1)===0;
  let result = collection.filter(chooseNumber);
  result = result.reduce(function(a,b){
    return a+b;
  });
  return result;
}

module.exports = amount_even;
