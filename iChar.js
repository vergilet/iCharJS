var iChar = {
  
  sharedKeysBetween: function(firstHash, secondHash){
    var resultingHash = {};
    for (key in firstHash) {
      if(secondHash[key])
       resultingHash[key] = secondHash[key];
    }
    return resultingHash;
  },
  
  null: null
  
}
