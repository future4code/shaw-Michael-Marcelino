// import { Dog } from "./Dog";
// import { Owl } from "./Owl";


// import { Character } from "./Character";
// import Animal from "./Animal";
import User from './User';
import Customer from './Customer';

// const scooby = new Dog("Scooby Doo", 20, "Vira-lata")

// scooby.bark()

// scooby.eat(4)

// console.log(Dog.racas)

// console.log(Date.now())

// const edwiges = new Owl("Edwiges", 4)

// edwiges.chirp()
// edwiges.fly(4)
// edwiges.eat(4)

// const pluto = new Dog("Pluto", 20, "Pastor Alemão")

// const nemo = new Animal("Nemo", 5)

// const zoo: Animal[] = [scooby, pluto, edwiges, nemo]

// console.log(zoo)

// console.log(scooby instanceof Animal)
// Character.MAX_HEALTH = 1000

// const ryu = new Character("Ryu", 20, 30)

// console.log(ryu);

// const docinho = new Character("Docinho", 50, 60)

// console.log(docinho);

// const mario = new Character("Mario", 20, 50)

// console.log(mario);

// const toto = new Dog("toto", 20, Dog.racas[1])
// /Exercício 1
// const newUser = new User("3232","miked@gail.com","mike","32e3msddf")
// console.log(newUser);
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// a propriedade so pode ser acessada na classse pq e private
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? 1 vez
// /Exercício 2

// const newCostumer = new Customer("3232","miked@gail.com","mike","32e3msddf","1300 reais")
// console.log(newCostumer);
// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 1 vez

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?* 1 vez pq ela eh o pai de costumer
//exercicio 3
// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê? nao pq ela e private

//exercicio 4
// const newUser = new User("3232","miked@gail.com","mike","32e3msddf")
// console.log(newUser.getIntroduceYourself()
