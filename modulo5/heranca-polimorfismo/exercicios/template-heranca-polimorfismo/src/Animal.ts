export default class Animal {
    // protected name: string;
    // protected é tipo um private só que libera pros herdeiros usarem a variavel
    // private weight: number;
    // atributos privados só podem ser acessados dentro da classe pai
    
    constructor(protected name: string, private weight: number) {
        // this.name = name;
        // /this.weight = weight;

        console.log("Construindo um animalzinho...")
    }

    eat(quantity: number): void {
        console.log("the animal has eaten " + quantity);

        this.weight += quantity
    }
}