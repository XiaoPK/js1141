'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  const chooseNumber=value=>collection_b.indexOf(value)===-1;
  let result= collection_a.filter(chooseNumber);
  console.log(result);
  return result;
}

module.exports = choose_no_common_elements;
