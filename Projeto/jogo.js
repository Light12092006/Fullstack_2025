const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');

    function redimensionarCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', redimensionarCanvas);
    redimensionarCanvas(); // chama no início

    const jogador = {
      x: 200,
      y: 200,
      largura: 50,
      altura: 50,
      cor: 'red',
      velocidade: 4,
      desenha: function() {
        ctx.drawImage(imgpiloto, this.x, this.y, this.largura, this.altura);
      }
      };
    

    const imgpiloto = new Image();
imgpiloto.src = 'piloto.png';

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
      
        // Limitar dentro do canvas
        jogador.x = Math.max(0, Math.min(jogador.x, canvas.width - jogador.largura));
        jogador.y = Math.max(0, Math.min(jogador.y, canvas.height - jogador.altura));
      }

    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      atualizar();
      jogador.desenha();
      requestAnimationFrame(animar);
    }

    animar();