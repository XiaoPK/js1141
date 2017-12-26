function collect_same_elements(collection_a, object_b) {
  const chooseNumber = value =>{
    for(let i in object_b.value){
      if(value['key'] === object_b.value[i]){
        result.push(value['key']);
        return true;
      }
  }
};
let result = [];
 collection_a.filter(chooseNumber);
  console.log(result);
  return result;
}

module.exports = collect_same_elements;
