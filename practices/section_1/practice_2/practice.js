function collect_same_elements(collection_a, collection_b) {
  const chooseNumber = value =>{
    for(let i in collection_b){
      for(let j in collection_b[i]){
        if(value === collection_b[i][j]){
          return true;
        }
      }
  }
};
  let result= collection_a.filter(chooseNumber);
  console.log(result);
  return result;
}

module.exports = collect_same_elements;
