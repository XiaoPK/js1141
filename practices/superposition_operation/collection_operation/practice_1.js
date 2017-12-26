'use strict';

function hybrid_operation(collection) {
  let result=[];
  result = collection.map(function(a){
    return a*3+2;
  });
  result= result.reduce(function(a,b){
    return a+b;
  })
  return result;
}

module.exports = hybrid_operation;

