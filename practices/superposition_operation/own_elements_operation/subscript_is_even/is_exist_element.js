'use strict';
var is_exist_element = function(collection,element){
    const chooseNumber = value =>collection.indexOf(value)%2===0;
    let result = collection.filter(chooseNumber);
    if(result.indexOf(element)!==-1){
        return true;
    }else{
        return false;
    }
};
module.exports = is_exist_element;
