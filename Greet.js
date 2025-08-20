

let Greet = function(){
  let name  = prompt("Enter Your Name")

  if(!name){
    name = "Guest"
  } 

  console.log("Hello" + " " + name )
}

console.log(Greet())