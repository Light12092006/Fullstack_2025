

//let p1 = document.getElementById('p1').innerHTML;
//console.log(p1)

//document.getElementById('p1').innerHTML = "Ola Mundo"

//exmplo1
//let nome = prompt("Qual o seu nome?");
//let idade = prompt("Qual a sua idade");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

//let resposta = "Ola " + nome + ",seu ano de nascimento e " + ano_nascimento;
//document.getElementById('exemplo1').innerHTML = resposta


//Exemplo de funcao
//function imprimeMensagem(msg){
  //  console.log(msg);
//}
//imprimeMensagem('mensagem1');
//imprimeMensagem('mensagem4');
//imprimeMensagem('mensagem2');

//function soma(n1, n2){
//    return n1 + n2;
//}
//let n3 = soma(3,4);
//console.log(n3);

//exemplo2

function ex2(){
    let num = parseInt(document.getElementById('ex2_in').value);
    for (let i = 0; i<= num; i++){
    console.log(i);
    }
}

//Exemplo3

function ex3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = num1 + num2;
    console.log(result);
    document.getElementById('ex3_resp').innerHTML = "A soma de " + num1 + " e " + num2 + " é " + result;
}

//Exemplo4

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);
    let result = 0;
    if(num1 < 0 || num2<0){
        let result = num1 + num2;
    }else{
        let result = num1 * num2;
    }
    console.log(result);
    document.getElementById('ex4_resp').innerHTML ="o resultado é: " + result;
}