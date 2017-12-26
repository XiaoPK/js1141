'use strict';

function find_first_even(collection) {
  const num = value =>(value&1)==0;
  return collection.find(num);
}

module.exports = find_first_even;

