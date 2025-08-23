function deepClone(obj) {
    
    const jsonString = JSON.stringify(obj);
  
  
    const newObject = JSON.parse(jsonString);
  
    return newObject;
  }