const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

const jogador = {
    x: 200,
    y: 200,
    largura: 50,
    altura: 50,
    cor: 'red',
    velocidade: 3,
    desenha: function() {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
};

let teclasPressionadas = {};

document.addEventListener('keydown', function(event) {
    teclasPressionadas[event.key.toLowerCase()] = true;
});

document.addEventListener('keyup', function(event) {
    teclasPressionadas[event.key.toLowerCase()] = false;
});

function atualizar() {
    if (teclasPressionadas['w']) jogador.y -= jogador.velocidade;
    if (teclasPressionadas['s']) jogador.y += jogador.velocidade;
    if (teclasPressionadas['a']) jogador.x -= jogador.velocidade;
    if (teclasPressionadas['d']) jogador.x += jogador.velocidade;
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    atualizar();
    jogador.desenha();
    requestAnimationFrame(animar);
}

animar();
