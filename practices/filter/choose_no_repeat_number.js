'use strict';

function choose_no_repeat_number(collection) {
  let result = collection;
  for(let i in result){
    if(result.indexOf(result[i])!==result.lastIndexOf(result[i])){
      result.splice(result.lastIndexOf(result[i]),1);
    }
  }
  console.log(result);
  return result;
}

module.exports = choose_no_repeat_number;
