class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso:
let heroi1 = new Heroi("Merlin", 150, "mago");
heroi1.atacar(); // o mago atacou usando magia

let heroi2 = new Heroi("Arthur", 30, "guerreiro");
heroi2.atacar(); // o guerreiro atacou usando espada

let heroi3 = new Heroi("Lee", 40, "monge");
heroi3.atacar(); // o monge atacou usando artes marciais

let heroi4 = new Heroi("Hanzo", 25, "ninja");
heroi4.atacar(); // o ninja atacou usando shuriken

// fim  