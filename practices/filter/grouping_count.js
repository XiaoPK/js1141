'use strict';

function grouping_count(collection) {
  let result=[];
  for(let i in collection){
    if(!result[collection[i]]){
      result[collection[i]] = 1;
    }else{
      result[collection[i]]++;
    }
  }
  return result;
}

module.exports = grouping_count;
