class Queue{
    constructor(
        public items: any[] = [],
        public length: number = 0
    ){}

    public enqueu = (value: any) =>{
        this.items[this.length++] = value;
    }

    public dequeu = () =>{
        if (this.length === 0) {
            console.log("Empty queue")
        } else {
            const removedItem = this.items[0];
            for (let index = 0; index < this.items.length; index++) {
                this.items[index] = this.items[index+1];
            }
            this.length--;
            return removedItem;
        }
    }

    public front = ():any =>{
        return this.items[0]
    }
}
let queu = new Queue();
queu.enqueu("Fravo")
queu.enqueu("Fravio")
queu.enqueu("Flabio")
queu.enqueu("Flaivo")

console.log(queu.dequeu())
console.log(queu.front())
console.log(queu.dequeu())
console.log(queu.dequeu())
console.log(queu.dequeu())
console.log(queu.dequeu())
