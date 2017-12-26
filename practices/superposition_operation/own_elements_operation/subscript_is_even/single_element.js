'use strict';
var single_element = function(collection){
    let result = [];
    for(let i in collection){
        if(i%2===1){
            result.push(collection[i]);
        }
    }
    for(let i in result){
        if(result.indexOf(result[i])!==result.lastIndexOf(result[i])){
            let num = result[i];
            result.splice(result.lastIndexOf(result[i]),1);
            result.splice(result.lastIndexOf(result[i]),1);
            if(result.indexOf(num)!==-1){
                result.splice(result.lastIndexOf(num),1);
            }
        }
      }
    return result;
};
module.exports = single_element;
