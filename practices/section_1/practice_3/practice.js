function collect_same_elements(collection_a, object_b) {
  const chooseNumber = value =>{
    for(let i in object_b.value){
      if(value === object_b.value[i]){
        return true;
      }
  }
};
  let result= collection_a.filter(chooseNumber);
  console.log(result);
  return result;
}

module.exports = collect_same_elements;
