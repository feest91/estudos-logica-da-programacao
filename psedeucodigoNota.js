// Exemplo de nota do aluno

const nota = 8.5; // Exemplo de nota do aluno
const notaMinimaAprovacao = 7.0;
const notaMinimaRecuperacao = 5.0;

if (nota >= notaMinimaAprovacao) {
  console.log("Parabéns! O aluno foi APROVADO.");
} else if (nota >= notaMinimaRecuperacao) {
  console.log("O aluno precisa fazer RECUPERAÇÃO.");
} else {
  console.log("Infelizmente, o aluno foi REPROVADO.");
}

// FIM  

// OBS: alterar o valor da variável 'nota' para testar.
