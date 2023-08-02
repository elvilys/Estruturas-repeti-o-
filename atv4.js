const nomeCliente = prompt("Digite o nome do cliente:");
const sexoCliente = prompt("Digite o sexo do cliente (M para masculino, F para feminino):").toUpperCase();
const valorCompras = parseFloat(prompt("Digite o valor total das compras:"));


if (valorCompras) {
  let desconto = 0;

  if (sexoCliente === 'M') {
    desconto = valorCompras * 0.05; 
  } else if (sexoCliente === 'F') {
    desconto = valorCompras * 0.13; 
  } else {
    alert("Sexo inválido! Por favor, digite 'M' para masculino ou 'F' para feminino.");
  }

  const precoComDesconto = valorCompras - desconto;
  document.write(`Cliente: ${nomeCliente} <br> Valor com desconto: R$ ${precoComDesconto} <br>`);

}