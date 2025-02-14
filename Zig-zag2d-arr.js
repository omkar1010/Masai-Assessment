let arr  =[
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
    ]
    
    
    // 0 , 4
    // 0 , 3
    // 0 , 2
    // 0 , 1
    // 1 , 0
    // 1 , 1
    // 1 , 2
    // 1 , 3
    // 1 , 4
    // 2 , 4
    // 2 , 3 
    // 2 , 2 
    // 2 , 1 
    // 2 , 0
    let flag  = true 
    let string = ""
    for(let i=0; i< arr.length;i++){
      
      
     if (flag){
       for(let j =0; j < arr[i].length; j++){
         console.log(arr[i][j])
         string += arr[i][j] + " "
         flag = true
       }
     } else {
       for(let a = arr[i].length-1; a >= 0; a-- ){
         console.log(arr[i][a])
         string += arr[i][a] += " "
        
       }
     }
     
     flag = !flag;
      
    }
    console.log(string)