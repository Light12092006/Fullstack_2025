let numero_aleatorio = Math.floor(Math.random() * 100); 
console.log(numero_aleatorio)

function adivinhar(){
    let numero = parseInt(document.getElementById('numero').value);
    if (numero > numero_aleatorio){
        document.getElementById('resposta').innerHTML = "tente um numero menor"
        document.getElementById("resposta").style.setProperty("background-color", "red");}
    if (numero < numero_aleatorio){
        document.getElementById('resposta').innerHTML = "tente um numero maior"
        document.getElementById("resposta").style.setProperty("background-color", "red");}
    if (numero == numero_aleatorio){
        document.getElementById('resposta').innerHTML = "Numero igual"
        document.getElementById("resposta").style.setProperty("background-color", "green");}
}