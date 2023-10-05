//movimentação do personagem 
function simularJornada(posicaoInicial, totalPassos) {
    let posicaoAtual = posicaoInicial;
  
    for (let passo = 1; passo <= totalPassos; passo++) {
      if (passo % 2 === 0) {
        // Se o passo é par, avança 2 posições
        posicaoAtual += 2;
      } else {
        // Se o passo é ímpar, avança 1 posição
        posicaoAtual += 1;
      }
    }
  
    return posicaoAtual;
  }
  
  const posicaoInicial = 10; // Posição inicial do herói
  const totalPassos = 5; // Número total de passos
  
  const posicaoFinal = simularJornada(posicaoInicial, totalPassos);
  
  console.log('Posição final do herói: ' + posicaoFinal);
  