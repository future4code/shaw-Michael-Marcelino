export default class Character {
   // dados privados só podem ser acessados internamente, garantindo mais segurança
   private name: string
   private movie: string

   // método construtor serve pra inicializar as variaveis. 
   // o preenchimento dos dados é obrigatório!
   constructor(name: string, movie:string) {
      this.name = name
      this.movie = movie
   }
}



export class Transaction{
   private description: string
   private value: number
   private date: string
   
   constructor(description:string,value:number , date:string){
      this.description =description,
      this.value = value,
      this.date = date
   
 }
   public getDescription() {
      return this.description
      
   }
}


export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
   public getCpf(): string {
      return this.cpf
   }
 }