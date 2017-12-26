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
  for(let i in result){
    if(result.indexOf(result[i])!==result.lastIndexOf(result[i])){
      result.splice(result.lastIndexOf(result[i]),1);
    }
    if(result.indexOf(result[i])!==result.lastIndexOf(result[i])){
      result.splice(result.lastIndexOf(result[i]),1);
    }
  }
  console.log(result);
  return result;
}

module.exports = double_to_one;
