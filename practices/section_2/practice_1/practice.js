function count_same_elements(collection) {
  let result = [];
  let keyA, countA;
  result.push({key:collection[0],count:0});
  for(let i = 0; i<collection.length; i++){
      if(collection[i]===result[result.length-1].key){
          result[result.length-1].count++;
      }else{
          result.push({key:collection[i],count:1});
      }
  }
  return result;
}

module.exports = count_same_elements;
