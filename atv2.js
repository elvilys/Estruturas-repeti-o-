let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
  const salario = parseFloat(prompt("Digite o salário do funcionário:"));
  const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();

  
  if ((salario) && (sexo === 'M' || sexo === 'F')) {
    if (sexo === 'M') {
      totalSalarioHomens += salario;
    } else {
      totalSalarioMulheres += salario;
    }

    continuar = confirm("Deseja continuar cadastrando?");
  } else {
    document.write("Entrada inválida! Por favor, digite um salário válido e o sexo como 'M' ou 'F'.");
  }
}

document.write(`Total de salários pagos aos homens: R$ ${totalSalarioHomens} <br> <br>`);
document.write(`Total de salários pagos às mulheres: R$ ${totalSalarioMulheres}<br>`);