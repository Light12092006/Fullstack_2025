const botaoIniciar = document.getElementById("iniciar");

const cenario = document.getElementById("cenario");
const piloto = document.getElementById("piloto");

const larguraCenario = cenario.offsetWidth;
const alturaCenario = cenario.offsetHeight;

const larguraPiloto = piloto.offsetWidth;
const alturaPiloto = piloto.offsetHeight;

const velocidadePiloto = 2;

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

const iniciarJogo = () => {
  document.addEventListener("keydown", teclaPressionada);
  document.addEventListener("keyup", teclaSolta);
  setInterval(movePiloto, 10);
  botaoIniciar.style.display = "none";
};

botaoIniciar.addEventListener("click", iniciarJogo);
