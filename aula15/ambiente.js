var num = [5, 8, 2, 9, 3]
//num[5] = 1
num.push(9)
//num.sort()
/*
console.log(`Nosso vetor é o ${num}`)
console.log(num.length)
*/

/*
for(var pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

