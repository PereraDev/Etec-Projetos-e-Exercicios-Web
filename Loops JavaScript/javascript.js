function loop_for() {
  for (let i = 1; i <= 10; i++) {
    for (let n = 1; n <= 10; n++) {
      console.log(`Tabuada do: ${i} x ${n} = ${i * n}`);
    }
  }
}

function loop_while() {
  let conta = 0;
  while (conta <= 10) {
    console.log(conta);
    conta++;
  }
}

function loop_dowhile() {
  let conta = 0;
  do {
    if (conta === 3) break;
    console.log(conta);
    conta++;
  } while (conta <= 10);
}

function loop_contar() {
  let palavra = prompt("Digite uma palavra para contar os caracteres:");
  let contador = 0;
  let vogais = 0
  let num = 0
  let espaco = 0
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] !== " ") {
      contador++;
    }
    if ("aeiouAEIOU".includes(palavra[i])) {
      vogais++;
    }
    if (/\d/.test(palavra[i])) {
      num++;
    }
    if (palavra[i] === " ") {
      espaco++;
    }
  }
  console.log(`A palavra "${palavra}" tem ${contador} caracteres, ${vogais} vogais, ${num} números e ${espaco} espaços.`);
}
