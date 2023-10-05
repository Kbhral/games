//missão de XP
function calcularXP(nivelMonstro, dificuldadeBatalha) {
    const xpGanho = nivelMonstro * dificuldadeBatalha * 100;
    return xpGanho;
  }
  
  const nivelMonstro = 5; // Nível do monstro
  const dificuldadeBatalha = 75; // Dificuldade da batalha (varia de 1 a 100)
  
  const xpGanho = calcularXP(nivelMonstro, dificuldadeBatalha);
  
  console.log(`XP ganho após derrotar o monstro: ${xpGanho}`);  