// nome e xp
let herois = [
  { nome: "Carlos", xp: 800 },
  { nome: "Leticia", xp: 1500 },
  { nome: "Lucas", xp: 3500 },
  { nome: "Nicolas", xp: 6000 }
]

// usei o for que aprendi no chatGPT ao inves de length
for (let heroi of herois) {
  let nivel = ""

  if (heroi.xp <= 1000) {
    nivel = "Ferro"
  } else if (heroi.xp <= 2000) {
    nivel = "Bronze"
  } else if (heroi.xp <= 5000) {
    nivel = "Prata"
  } else if (heroi.xp <= 7000) {
    nivel = "Ouro"
  } else {
    nivel = "Lendário "
  }

  // console log
  console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel}`)
}

// fim do código e sainda
// O Herói de nome Carlos está no nível Ferro
// O Herói de nome Leticia está no nível Bronze
// O Herói de nome Lucas está no nível Prata
// O Herói de nome Nicolas está no nível Ouro

