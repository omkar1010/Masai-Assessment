let task  = ["coding", "lecture","rest","study", "chess"];
let arr = []
let arr2 = []
 
for(let i= 0; i<task.length-1;i++){
 
  arr.push(task[i+1])// remove the first element

}
task = arr

arr2 =["task1","task2"];

for(let i=0;i< task.length;i++){
  arr2.push(task[i])
}

arr2[arr2.length-1] = "newtask added"

task = arr2
console.log(task)