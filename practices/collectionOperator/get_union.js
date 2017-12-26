'use strict';

function get_union(collection_a, collection_b) {
  let result =[];
  result = collection_a.concat(collection_b);
  for(let i in result){
    if(result.indexOf(result[i])!==result.lastIndexOf(result[i])){
      result.splice(result.lastIndexOf(result[i]),1);
    }
  }
  console.log(result);
  return result;
}

module.exports = get_union;

