import Animal from "./Animal";

interface dogMethods {
  eat(quantidade: number): void
}


export class Dog extends Animal implements dogMethods { 

  // breed: string 

  static racas = ["poodle", "pincher", "bulldog"]

  constructor(name:string, weight: number, public breed:string) {
    super(name, weight) //Construtor da classe pai

    console.log("Construindo um cachorrinho...")
    // this.breed = breed
  }

  bark(): void {
    console.log(`${this.name} está fazendo au au 🐶`);
  }
}

