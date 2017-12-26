function create_updated_collection(collection_a, object_b) {
  let result = [];
    result.push({key:collection_a[0],count:0});
    for(let i = 0; i<collection_a.length; i++){
        if(collection_a[i]===result[result.length-1].key){
            result[result.length-1].count++;
        }else{
            result.push({key:collection_a[i],count:1});
        }
    }
    let num = 0;
    for(let k = 0; k < object_b.value.length; k++){
        for(let j = 0; j < result.length; j++){
            if(object_b.value[k] === result[j].key){
                num = parseInt(result[j].count/3 );
                result[j].count -= num;
            }
        }
    }
    return result;
}

module.exports = create_updated_collection;
