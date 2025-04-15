//let carro = {
//    cor: "green",
//    modelo: 'SUV',
//    marca: 'Toyota',
//    buzina: function(){
//        return'BI BI';
//    }
//};

//let carro2 = {
//    cor: 'black',
//    modelo: 'SUV',
//    marca: 'Ford',
//    buzina: function(){
//        return'FON FON';
//    }
//};

class Carro {
    constructor(cor,modelo,marca){
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina(){
        return 'bi bi'
    }
}

let carro1= new Carro('green', 'SUV', 'Toyota');
let carro2= new Carro('black', 'SUV', 'Ford');

console.log(carro1);
console.log(carro2)

//console.log(carro);
//console.log(carro.cor)

//console.log(carro.buzina())
//console.log(carro2.buzina())

let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i< carros.length; i++){
    console.log(carros[i].buzina())
}


class retangulo{
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura){
        this.cor_linha =cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(ctx){
    ctx.beginPath();
    ctx.lineWidth = this.espessura_linha;
    ctx.fillStyle = this.cor_preenchimento;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
    ctx.closePath();
    }
}

let canvas = document.getElementById('canvas1');
let ctx1 = canvas.getContext('2d');


let retangulo_1 = new retangulo('blue', 'red', 3, 0, 0, 20, 20);
let retangulo_2 = new retangulo('blue', 'blue', 3, 100, 100, 20, 20);
let retangulo_3 = new retangulo('blue', 'green', 3, 100, 100, 20, 20);

retangulo_1.desenhe(ctx1)
retangulo_2.desenhe(ctx1)
retangulo_3.desenhe(ctx1)

function animacao(contexto){
    retangulo_1.x +=1;
    ctx1.clearRect(0,0,400,400)
    retangulo_1.desenhe(ctx1)
    retangulo_2.desenhe(ctx1)
    retangulo_3.desenhe(ctx1)

    requestAnimationFrame(animacao)
}

animacao()
document.addEventListener('keydown', function(evento){
let tecla = evento.key;
console.log(tecla);

let velocidade = 5
if(tecla == "ArrowUp"){ retangulo_2.y -= velocidade}
if(tecla == "ArrowDown"){ retangulo_2.y += velocidade}
if(tecla == "ArrowLeft"){ retangulo_2.x -= velocidade}
if(tecla == "ArrowRight"){ retangulo_2.x += velocidade}
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY -rect.top;

    retangulo_3.x = x_mouse
    retangulo_3.y = y_mouse
})