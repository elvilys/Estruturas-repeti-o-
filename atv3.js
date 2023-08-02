const valorInicial = Number(prompt("Digite o primeiro valor:"));
const valorFinal = Number(prompt("Digite o último valor:"));
const incremento = Number(prompt("Digite o incremento:"));


if (valorInicial && valorFinal && incremento) {
    if (incremento <= 0) {
        document.write("O incremento deve ser um valor positivo maior que zero.");
    } else if (valorInicial > valorFinal) {
        document.write("O primeiro valor deve ser menor ou igual ao último valor.");
    } else {
        let contagem = "";
        for (let i = valorInicial; i <= valorFinal; i += incremento) {
            contagem += i + " ";
        }
        document.write(`Contagem: ${contagem}Acabou!`);
    }
} else {
    document.write("Entrada inválida! Por favor, digite valores numéricos válidos.");
}