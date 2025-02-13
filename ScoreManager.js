let score = [45,75,30,85,90,95,97,34,90,50]
let passed = 0
for(let i=0;i<score.length;i++){
    if(score[i] < 40){
        score[i] = score[i] + 20
    }
    if(score[i] > 90){
        score[i] = 90
    }

    if(score[i] > 50){
        passed++
    }
}

console.log(score)
console.log("passed student" , passed)