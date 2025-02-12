let arr = ["study" , "book reading", "smaple", "test"]

arr.shift()
let task1 = "Addtask1"
let task2 = "Addtask2"
let narr = []
narr.push(task1)
    narr.push(task2)
for(let i=0;i<arr.length;i++){

    
    narr.push(arr[i])
}
narr.pop()
   

console.log(narr)