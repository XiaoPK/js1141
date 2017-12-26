'use strict';
function rank_by_two_large_one_small(collection){
  let result = [];
  let num = 0;
  collection = collection.sort((a,b)=>a-b);
  for(let i  = 0; i<collection.length-2; i++){
    if((i+1)%3 === 0){
      num = collection[i];
      collection[i] = collection[i-2];
      collection[i-2] = collection[i-1];
      collection[i-1] = num;
    }
  }
  result = collection;
  return result;
}
module.exports = rank_by_two_large_one_small;
