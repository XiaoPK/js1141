'use strict';
var even_asc_odd_desc = function(collection){
    let result1 = [];
    let result2 = [];
    const chooseNumber = value => (value&1)==0;
    const chooseNumber2 = value => (value&1)!==0;
    result1 = collection.filter(chooseNumber);
    result2 = collection.filter(chooseNumber2);
    result1 = result1.sort((a,b)=>a-b);
    result2 = result2.sort((a,b)=>b-a);
    let result = result1.concat(result2);
    return result;
};
module.exports = even_asc_odd_desc;
