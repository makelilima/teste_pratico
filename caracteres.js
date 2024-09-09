const strText = "Exemplo de String";

function interveStr(str) {
  let strInv = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInv += str[i];
  }

  return strInv;
}

const resultado = interveStr(strText);
console.log(`String original: "${strText}"`);
console.log(`String invertida: "${resultado}"`);
