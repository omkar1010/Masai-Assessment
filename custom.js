
Array.prototype.filterEvenNumbers = function() {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

  Array.prototype.sumOfArray = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };
  
 
  Array.prototype.sortAndConcat = function(arr1, arr2) {
    // Sort both arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
  
 
    return arr1.concat(arr2);
  };
  

  const numbers1 = [10, 5, 20, 15, 3];
  const numbers2 = [2, 12, 8, 22, 1];
  
  
  const evenNumbers = numbers1.filterEvenNumbers();
  console.log("Filtered even numbers:", evenNumbers);
  

  const totalSum = numbers2.sumOfArray();
  console.log("Sum of numbers2:", totalSum);
  

  const sortedAndConcatenated = numbers1.sortAndConcat(numbers1, numbers2);
  console.log("Sorted and concatenated arrays:", sortedAndConcatenated);