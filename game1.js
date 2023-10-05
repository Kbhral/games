//Definição da função que calcula o dano em combate
//Arma e dano do heroi
function calcularDano(tipoItem, dano) {
    if (tipoItem.toLowerCase() === 'arma') {
      return dano * 2;  // Dano dobrado para arma
    } else {
      return dano;  // Dano normal para outros tipos de item
    }
  }
  
  // Pedir ao usuário para inserir os detalhes do item mágico
  const tipoItem = "Espada Sagrada";
  const dano = "5000 dano fisico";
  const armadura = "100";
  
  // Criar o objeto que representa o item mágico
  const itemMagico = {
    tipo: tipoItem,
    dano: dano,
    armadura: armadura,
  };
  
  // Calcular o dano em combate
  const danoEmCombate = calcularDano(itemMagico.tipo, itemMagico.dano);
  
  // Imprimir os detalhes do item mágico e o dano em combate
  console.log('Detalhes do item mágico:');
  console.log('Tipo: ' + itemMagico.tipo);
  console.log('Dano: ' + itemMagico.dano);
  console.log('Armadura: ' + itemMagico.armadura);
  console.log('Dano em combate: ' + danoEmCombate);
  