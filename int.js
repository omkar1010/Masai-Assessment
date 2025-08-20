function extractAndReverse(arr) {

    const subArray = arr.slice(2, 5);
  
   
    subArray.reverse();
  
    
    return subArray;
  }
  
  
  const integers = [15, 30, 45, 60, 75, 90];
  const reversedSubarray = extractAndReverse(integers);
  
  console.log(reversedSubarray);
  console.log(integers); 