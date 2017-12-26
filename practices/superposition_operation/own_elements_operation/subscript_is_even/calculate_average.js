'use strict';
var calculate_average = function(collection){
    const chooseNumber = value =>collection.indexOf(value)%2!=0;
    let result = collection.filter(chooseNumber);
    let num = result.reduce(function(a,b){
        return a+b;
    })
    return num/result.length;
};
module.exports = calculate_average;
