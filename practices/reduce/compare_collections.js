'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function(a,b){
    return a+b+'';
  }) === collection_b.reduce(function(a,b){
    return a+b+'';
  });
}

module.exports = compare_collections;


