'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  for(let i in collection_b){
    if(collection_a.indexOf(collection_b[i])!==-1){
      result.push(collection_b[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = get_intersection;
