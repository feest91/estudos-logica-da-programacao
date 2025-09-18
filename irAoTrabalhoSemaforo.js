// SEMAFÓRO 
const VERMELHO = "vermelho";
const AMARELO = "amarelo";
const VERDE = "verde";

// SIMULAR O TRAJETO 
function irParaTrabalho(semaforo) {
  console.log("Saindo de casa...");

  if (semaforo === VERMELHO) {
    console.log("Semáforo vermelho: Pare!");
  } else if (semaforo === AMARELO) {
    console.log("Semáforo amarelo: Espere!");
  } else if (semaforo === VERDE) {
    console.log("Semáforo verde: Atravessando a rua...");
    console.log("Cheguei ao trabalho!");
  } else {
    console.log("Cor de semáforo inválida");
  }
}

// TROQUE A COR PARA TESTAR (VERMELHO, AMARELO, VERDE)
irParaTrabalho(VERDE);
