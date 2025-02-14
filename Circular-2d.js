let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  

  let firstArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    firstArr.push(arr[i][0]);
  }
  

  let secondArr = [];
  for (let i = 1; i < arr.length; i++) {
    secondArr.push(arr[0][i]);
  }
  
 
  let thirdArr = [];
  for (let i = 1; i < arr.length; i++) {
    thirdArr.push(arr[i][arr.length - 1]);
  }
  

  let result = [...firstArr, ...secondArr, ...thirdArr];
  
  console.log(result.join(" ")); // Output: 7 4 1 2 3 6 9 8
  