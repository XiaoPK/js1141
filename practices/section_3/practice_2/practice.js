function create_updated_collection(collection_a, object_b) {
  for(let i in object_b.value){
    for(let j in collection_a){
      if(object_b.value[i] === collection_a[j].key){
        collection_a[j].count -= parseInt(collection_a[j].count/3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
