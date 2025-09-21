// cores dos semáforos

const VERMELHO = "Vermelho";
const AMARELO = "Amarelo";
const VERDE = "Verde";

// semarafo atual (pode alterar cor pra testar

let semaforo = AMARELO;

// lógica do semáforo

if (semaforo === VERMELHO) {
    console.log("Stop!");
} else if (semaforo === AMARELO) {
    console.log("Atenção e pare!");
} else if (semaforo === VERDE) {
    console.log("Pode atravessar!");
} else {
    console.log("Cor inválida do semáforo."); // NAO DEVE ACONTECER
}

// fim