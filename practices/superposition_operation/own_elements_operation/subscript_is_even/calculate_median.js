'use strict';
var calculate_median = function(collection){
    const chooseNumber = value =>collection.indexOf(value)%2!=0;
    let result = collection.filter(chooseNumber);
    let values = result.sort((a, b) => a - b);
    let lowMiddle = Math.floor((values.length - 1) / 2);
    let highMiddle = Math.ceil((values.length - 1) / 2);
    let median = Math.ceil((values[lowMiddle] + values[highMiddle]) / 2);
    return median;
};
module.exports = calculate_median;
