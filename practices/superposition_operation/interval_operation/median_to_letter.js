'use strict';

function median_to_letter(collection) {
  let values = collection.sort((a, b) => a - b);
  let lowMiddle = Math.floor((values.length - 1) / 2);
  let highMiddle = Math.ceil((values.length - 1) / 2);
  let median = Math.ceil((values[lowMiddle] + values[highMiddle]) / 2);
  let x = median;
  if(x<=26){
    return String.fromCharCode(x+96);
  }
  if(x%26===0 && x>=26){
    return String.fromCharCode(x/26+95)+String.fromCharCode(122);
  }else{
    return String.fromCharCode(x/26+96)+String.fromCharCode(x%26+96);
  }
}

module.exports = median_to_letter;
