'use strict';

function compute_chain_median(collection) {
  let value = collection.replace(/->/g,"|");
  let values = value.split("|");
  for(let i in values){
    values[i] = parseInt(values[i]);
  }
  values = values.sort((a, b) => a - b);
  let lowMiddle = Math.floor((values.length - 1) / 2);
  let highMiddle = Math.ceil((values.length - 1) / 2);
  let median = (values[lowMiddle] + values[highMiddle]) / 2;
  return median;
}

module.exports = compute_chain_median;
