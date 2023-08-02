let totalAlunos = 0;
let somaIdades = 0;
let idade = 0;


while (idade !== 999) {
  idade = parseInt(prompt("Digite a idade do aluno (ou 999 para parar):"));

  
  if (idade && idade !== 999) {
    totalAlunos++;
    somaIdades += idade;
  }
}


let mediaIdade = somaIdades / totalAlunos;


document.write(`Quantidade de alunos na turma: ${totalAlunos}\nMédia de idade do grupo: ${mediaIdade}`)