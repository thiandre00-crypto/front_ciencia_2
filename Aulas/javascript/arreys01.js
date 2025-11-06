/* 
Arrays são agrupadores de valores numericos, textuais, booleanos. objetos, etc. Eles são ordenamos a partir do indice '0'
Ex.: const time = ["pedro", 22, "julio", "Ana"]
    // indices       0      1      2       3
*/
const vestuario = ["camiseta", "tenis nike", "calça jeans"]
vestuario[33] =  "chapeu"
console.log(vestuario[1])
console.log(vestuario[2])
console.log(vestuario[3])
console.log(vestuario[33])

for(let valor of vestuario){
    console.log(valor)

}

// console.log(vestuario[1])
// console.log(vestuario[2])
// console.log(vestuario[3])
// console.log(vestuario[33])
