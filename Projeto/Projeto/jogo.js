const botaoIniciar = document.getElementById("iniciar");

const cenario = document.getElementById("cenario");
const piloto = document.getElementById("piloto");
const vida = document.getElementById("vida");
const pontos = document.getElementById("pontos");

const larguraCenario = cenario.offsetWidth;
const alturaCenario = cenario.offsetHeight;

const larguraPiloto = piloto.offsetWidth;
const alturaPiloto = piloto.offsetHeight;

let intervalosInimigosIndividuais = [];

let jogoAtivo = false;


let intervaloPiloto;
let intervaloTiros;
let intervaloAtirar;
let intervaloInimigos;
let checacolisao;

const velocidadePiloto = 2;
const velocidadeTiro = 20;

let atirando = false;
let tiroAtual = 0;


let vidaAtural = 100;
let pontosAtual = 0;

let posicaoHorizontal = (larguraCenario - larguraPiloto)/2;
let posicaoVertical = (alturaCenario - alturaPiloto)/2;
let direcaoHorizontal = 0;
let direcaoVertical = 0;

const teclaPressionada = (tecla) => {
  if (tecla.key === 'w') {
    direcaoVertical = -1;
  } else if (tecla.key === 'a') {
    direcaoHorizontal = -1;
  } else if (tecla.key === 's') {
    direcaoVertical = 1;
  } else if (tecla.key === 'd') {
    direcaoHorizontal = 1;
  }
};

const teclaSolta = (tecla) => {
  if (tecla.key === 'w' || tecla.key === 's') {
    direcaoVertical = 0;
  } else if (tecla.key === 'a' || tecla.key === 'd') {
    direcaoHorizontal = 0;
  }
};

const movePiloto = () => {
  posicaoHorizontal += direcaoHorizontal * velocidadePiloto;
  posicaoVertical += direcaoVertical * velocidadePiloto;

  if (posicaoHorizontal < 0) {
    posicaoHorizontal = 0;
  } else if (posicaoHorizontal + larguraPiloto > larguraCenario) {
    posicaoHorizontal = larguraCenario - larguraPiloto;
  }

  if (posicaoVertical < 0) {
    posicaoVertical = 0;
  } else if (posicaoVertical + alturaPiloto > alturaCenario) {
    posicaoVertical = alturaCenario - alturaPiloto;
  }

  piloto.style.left = posicaoHorizontal + "px";
  piloto.style.top = posicaoVertical + "px";
};

const atirar = () => {
  const delayTiro = Date.now();
  const atrasoTiro = delayTiro - tiroAtual;

  if (atirando && atrasoTiro >= 100){
    tiroAtual = Date.now();
    criaTiros(posicaoHorizontal + 110, posicaoVertical + 50);
  }
}

document.addEventListener("keydown", (tecla) => {
  if (tecla.key === " "){
    atirando = true;
  }
})   

document.addEventListener("keyup", (tecla) => {
  if (tecla.key === " "){
    atirando = false;
  }
})

const criaTiros = (posicaoLeftTiro, posicaoTopTiro) => {
  const tiro = document.createElement("div");
  tiro.className = "tiro";
  tiro.style.position = "absolute";
  tiro.style.width = "10px";
  tiro.style.height = "10px";
  tiro.style.backgroundColor = "yellow";
  tiro.style.left = posicaoLeftTiro + "px";
  tiro.style.top = posicaoTopTiro + "px";
  tiro.style.zIndex = "10";
  cenario.appendChild(tiro);
};


const moveTiros = () =>{
  const tiros = document.querySelectorAll(".tiro");
  for(let i = 0; i<tiros.length; i++){
    if(tiros[i]) {
      let posicaoLeftTiro = tiros[i].offsetLeft;
      posicaoLeftTiro +=  velocidadeTiro;
      tiros[i].style.left = posicaoLeftTiro + "px";

      if (posicaoLeftTiro > larguraCenario) {
        tiros[i].remove();
      }
    }
  }
};

const naveInimigas = () => {
  if (!jogoAtivo) return;

  const inimigo = document.createElement("div");
  inimigo.className = "inimigo";
  inimigo.setAttribute("data-vida", 5);
  inimigo.style.position = "absolute";
  inimigo.style.width = "100px";
  inimigo.style.height = "100px";
  inimigo.style.backgroundImage = "url('inimigo.gif')";
  inimigo.style.backgroundPosition = "center";
  inimigo.style.backgroundRepeat = "no-repeat";
  inimigo.style.backgroundSize = "contain";
  inimigo.style.zIndex = "5"; 

  const topAleatorio = Math.floor(Math.random() * (alturaCenario - 100));
  let posicaoLeft = larguraCenario;

  inimigo.style.top = topAleatorio + "px";
  inimigo.style.left = posicaoLeft + "px";

  cenario.appendChild(inimigo);

  const moverInimigo = setInterval(() => {
    if (!jogoAtivo) {
      clearInterval(moverInimigo);
      inimigo.remove();
      return;
    }

    posicaoLeft -= 3;

    if (posicaoLeft < -100) {
      inimigo.remove();
      clearInterval(moverInimigo);
      vidaAtural -= 5;
      if (vidaAtural <= 0) gameOver();
      vida.innerText = "Vida: " + vidaAtural;
    } else {
      inimigo.style.left = posicaoLeft + "px";
    }
  }, 10);
  
  inimigo.intervalo = moverInimigo;
  clearInterval(naveInimiga.intervalo);
};


const colisao = () => {
  const todasNaveInimigas = document.querySelectorAll(".inimigo");
  const todosTiros = document.querySelectorAll(".tiro");

  todasNaveInimigas.forEach((naveInimiga) => {
    const rectInimigo = naveInimiga.getBoundingClientRect();
    let vidaAtual = parseInt(naveInimiga.getAttribute("data-vida"), 10);

    todosTiros.forEach((tiro) => {
      const rectTiro = tiro.getBoundingClientRect();

      const colidiu = (
        rectInimigo.left < rectTiro.right &&
        rectInimigo.right > rectTiro.left &&
        rectInimigo.top < rectTiro.bottom &&
        rectInimigo.bottom > rectTiro.top
      );

      if (colidiu) {
        tiro.remove();
        vidaAtual--;

        if (vidaAtual <= 0) {
          pontosAtual += 10;
          pontos.textContent =`Pontos: ${pontosAtual}`;

          clearInterval(naveInimiga.intervalo);
          naveInimiga.remove();
        } else {
          naveInimiga.setAttribute("data-vida", vidaAtual);
        }
      }
    });
  });
};




const gameOver = () => {
  jogoAtivo = false; 

  document.removeEventListener("keydown", teclaPressionada);
  document.removeEventListener("keyup", teclaSolta);
  clearInterval(intervaloPiloto);
  clearInterval(intervaloTiros);
  clearInterval(intervaloAtirar);
  clearInterval(intervaloInimigos);
  clearInterval(checacolisao);

  intervalosInimigosIndividuais.forEach(clearInterval);
  intervalosInimigosIndividuais = [];

  atirando = false;

  const perdeu = document.createElement("div");
  perdeu.innerHTML = "Game Over";
  perdeu.style.backgroundColor = "white";
  perdeu.style.color = "black";
  perdeu.style.position = "absolute";
  perdeu.style.left = "50%";
  perdeu.style.top = "50%";
  perdeu.style.transform = "translate(-50%, -50%)";
  perdeu.style.padding = "20px";
  perdeu.style.borderRadius = "5px";
  perdeu.style.fontSize = "24px";
  perdeu.style.zIndex = "1000";
  cenario.appendChild(perdeu);
  cenario.removeChild(piloto);
  const todosTiros = document.querySelectorAll(".tiro");
  todosTiros.forEach((tiros) => {
    tiros.remove();
    })
  };





const iniciarJogo = () => {
  jogoAtivo = true; 

  document.addEventListener("keydown", teclaPressionada);
  document.addEventListener("keyup", teclaSolta);
  intervaloPiloto = setInterval(movePiloto, 10);
  intervaloTiros = setInterval(moveTiros, 50);
  intervaloAtirar = setInterval(atirar, 10); 
  checacolisao = setInterval(colisao, 10); 
  intervaloInimigos = setInterval(naveInimigas, 2500);
  botaoIniciar.style.display = "none";
  
};


botaoIniciar.addEventListener("click", iniciarJogo);
