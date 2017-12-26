'use strict';

function find_last_even(collection) {
  const num = value =>(value&1)==0;
  return collection.reverse(collection).find(num);
}

module.exports = find_last_even;
