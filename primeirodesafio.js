// Lista de heróis com nome e XP
let herois = [
  { nome: "Carlos", xp: 800 },
  { nome: "Leticia", xp: 1500 },
  { nome: "Lucas", xp: 3500 },
  { nome: "Nicolas", xp: 6000 }
]

// Laço de repetição para percorrer cada herói
for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i]
  let nivel = ""

  // Estruturas de decisão para classificar
  if (heroi.xp <= 1000) {
    nivel = "Ferro"
  } else if (heroi.xp <= 2000) {
    nivel = "Bronze"
  } else if (heroi.xp <= 5000) {
    nivel = "Prata"
  } else if (heroi.xp <= 7000) {
    nivel = "Ouro"
  } else {
    nivel = "Lendário 🏆"
  }

  // Exibindo resultado
  console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel}`)
}
// e possui ${heroi.xp} pontos de experiência.`)