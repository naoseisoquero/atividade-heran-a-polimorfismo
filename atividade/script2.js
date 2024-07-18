/*const Veiculo = require('./script'); 

class Moto extends Veiculo {
    constructor(cilindrada, rodas, velocidade, modelo, cor){
        super(velocidade, modelo, cor);
        this.cilindrada = cilindrada;
        this.rodas = rodas;
    }
}

const ninja = new Moto(500, 2, 150, 'ninja', 'azul', 1 );
ninja.acelera()
ninja.acelera()
console.log(ninja.acelera())
*/
const Veiculo = require('./script');

class Barco extends Veiculo {
    constructor(noz, velocidade, modelo, cor) {
        super(modelo, cor, velocidade);
        this.noz = noz;
    }

    acelera() {
        this.noz += 1;
        console.log(`A velocidade atual é ${this.noz}`);
    }
}

const lancha = new Barco(0, 5, "lancha", "branca");
lancha.acelera();
