function gerador_tabuada() {
    for (let tentativa = 1; tentativa <= 10; tentativa++) {
    let numero = prompt("Digite um número para gerar a tabuada:");
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    let resposta = prompt("Deseja gerar outra tabuada? (sim/não)");
    if (resposta.toLowerCase() !== "sim") {
        break;
    }
    } 
}