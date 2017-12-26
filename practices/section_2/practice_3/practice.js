function count_same_elements(collection) {
  var result = [];
  var keyA, countA;
  result.push({name:collection[0],summary:0});
  for(var i = 0; i<collection.length; i++){
      if(collection[i]===result[result.length-1].name){
          result[result.length-1].summary++;
      }else{
          result.push({name:collection[i],summary:1});
      }
  }
  //console.log(result);
  for(var j = 0; j < result.length; j++){
      if((result[j].name.length > 1 )&& (result[j].name[1]==='-' || result[j].name[1]===':'|| result[j].name[1]==='[')){
          keyA = result[j].name[0];
          if(result[j].name.length===5){
              var str1 = result[j].name.split("[");
              var str2 = str1[1].split("]");
              countA = str2[0];
          }else{
              countA = result[j].name[2];
          }
          result.splice(j,1,{name:keyA,summary:parseInt(countA)});//删除再插入处理之后的值
      }
  }
  //处理结果
  for (var k = 0; k <result.length-1; k++) {
      if (result[k].name === result[k + 1].name) {
          keyA = result[k].name;
          countA = result[k].summary + result[k + 1].summary;
          result.splice(k, 2, {name: keyA, summary: countA});
          k = k-1;
      }
  }
  return result;
}

module.exports = count_same_elements;
