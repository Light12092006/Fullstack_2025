//for(let a = 1; a < 100; a+= 2){
  //  console.log(a)
//}

//console.log("Exericio 2")
//for(let i = 5; i <= 500; i += 5){
//    console.log(i);
//}

//let a = parseIntprompt("Digite um nuemero: ")
//for(a; a > 0; a-=1){
   // console.log(a)
//}

let mult = 1
let x = parseInt(prompt("Digite um numero: "));
for(let i = x; i > 0; i--){
    mult *= i;
    console.log(i,mult);
}