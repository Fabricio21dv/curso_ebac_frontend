function Pokemon(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    
    this.apresentar = function() {
        console.log(`${this.nome} é um Pokémon do tipo ${this.tipo}!`);
    }
}

function PokemonAquatico(nome) {
    Pokemon.call(this, nome, "Água");
    
    this.atacar = function() {
        console.log(`${this.nome} usou Jato d'Água!`);
    }
    
    this.nadar = function() {
        console.log(`${this.nome} está nadando rapidamente!`);
    }
}

function PokemonVoador(nome) {
    Pokemon.call(this, nome, "Voador");
    
    this.atacar = function() {
        console.log(`${this.nome} usou Ataque de Ar!`);
    }
    
    this.voar = function() {
        console.log(`${this.nome} está voando alto!`);
    }
}

const squirtle = new PokemonAquatico("Squirtle");
const pidgey = new PokemonVoador("Pidgey");
const magikarp = new PokemonAquatico("Magikarp");


squirtle.apresentar();
squirtle.atacar();       
squirtle.nadar();

pidgey.apresentar();    
pidgey.atacar();        
pidgey.voar();          

magikarp.apresentar();  
magikarp.atacar();      