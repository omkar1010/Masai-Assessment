const myPromise = new Promise((resolve, reject) => {
   
    const data = "some data";
    const error = null;
  
    if (error) {
      reject(error); 
    } else {
      resolve(data); 
    }
  });