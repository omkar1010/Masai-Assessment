arr = [1,2],[3,4],[5,6]

let row  = 2;
let coulumn  = 3;

for(let i =0; i<coulumn;i++){
  let String = ""
  for(let j=0; j< row; j++){
    
    String += i + j + " "
  }
  console.log(String)
}