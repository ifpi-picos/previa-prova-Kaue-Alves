// 1. Função 1 (maiorNumero): Retorna o maior número da lista usando Math.max(). Se a lista for vazia ou inválida, retorna null.

export function maiorNumero(lista) {
  // Verifica se a lista é válida e não está vazia
  if (!Array.isArray(lista) || lista.length === 0) {
      return null;
  }
  return Math.max(...lista);
}

export function verificarParOuImpar(num) {
  if (typeof num === "number") {
    if (num % 2 == 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  } else {
    return null
  }
}

export function contarCaracter(palavra, letra) {
  if (typeof palavra == "string" && typeof letra == "string") {

    palavra = palavra.toLowerCase();
    letra = letra.toLowerCase();
    
    let palavraArray = palavra.split("")
    
    let listaDasLetrasEscolhidas = palavraArray.filter((a) => {
      return a === letra;
    })

    return listaDasLetrasEscolhidas.length
  } else {
    return null
  }
}

// 1. Função 4 (atualizarPropriedade): Atualiza o valor de uma propriedade existente em um objeto. Se a chave não existir, retorna null.
export function atualizarPropriedade(objeto, propriedade, valor) {
  if (propriedade in objeto) {
    objeto[propriedade] = valor;
    return objeto;
  } else {
    return null;
  }
}