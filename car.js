class Car {
    constructor(marca, model, anLansare, kilometraj, esteAutomata) {
        this.marca = marca;
        this.model = model;
        this.anLansare = anLansare;
        this.kilometraj = kilometraj;
        this.esteAutomata = esteAutomata;
    }

    display() {
        console.log(`Masina cu marca ${this.marca} si modelul ${this.model} s-a lansat in anul ${this.anLansare}`);
    }
}

export default Car;