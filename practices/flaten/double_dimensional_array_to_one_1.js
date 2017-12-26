'use strict';

function double_to_one(collection) {
  let result = [];
  for(let i in collection){
    if(Array.isArray(collection[i])){
     result=result.concat(collection[i]);
    }else{
      result.push(collection[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = double_to_one;
