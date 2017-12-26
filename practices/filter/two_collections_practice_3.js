'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  const chooseNumber = value =>{
    for(let i in collection_b){
    if(value % collection_b[i] === 0){
      return true;
    }
  }
};
  let result= collection_a.filter(chooseNumber);
  console.log(result);
  return result;
}

module.exports = choose_divisible_integer;
