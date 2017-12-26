'use strict';
var even_group_calculate_average = function(collection){
    const chooseNumber = value =>(collection.indexOf(value)%2!=0)&&(value&1)==0;
    let result = collection.filter(chooseNumber);
    let num1=[0], num2 = [0], num3= [0];
    for(let i in result){
        if(result[i]<10){
            num1.push(result[i]);
        }else if(result[i]<100){
            num2.push(result[i]);
        }else{
            num3.push(result[i]);
        }
    }
    let result0 = [];
    let numa = 0;
    if(num1){
        numa = num1.reduce(function(a,b){
            return a+b;
        })
        numa = numa/(num1.length-1);
    }

    let numb = 0;
   
    if(num2){
        numb = num2.reduce(function(a,b){
            return a+b;
        })
        numb = numb/(num2.length-1);
    }
    
    let numc = 0;
    
    if(num3){
        numc = num3.reduce(function(a,b){
            return a+b;
        })
        numc = numc/(num3.length-1);
    }
    if(result.length===0){
        return [0];
    }else if( num1==0  && num2==0 && numc!=0){
        result0.push(numc); 
    }else{
        result0.push(numa);
        result0.push(numb);
        result0.push(numc);
    }
    return result0;    
};
module.exports = even_group_calculate_average;
