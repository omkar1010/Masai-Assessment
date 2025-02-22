let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let str  = ""
for(let i in book){
 str  += i + ":" + book[i] + " "
}
console.log(str)