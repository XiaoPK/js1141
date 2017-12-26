'use strict';

function hybrid_operation_to_uneven(collection) {
  const chooseNumber = value => (value&1)!=0;
  let result = collection.filter(chooseNumber);
  result = result.map(function(a){
    return a*3+5;
  });
  result = result.reduce(function(a,b){
    return a+b;
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

