class Stack {
    constructor(
        public length: number = 0,
        public items: any[] = [],
    ) { }

    public show = () => { 
        console.log(this.items)
    }

    //push
    public push = (item: any): void => {
        this.items[this.length++] = item
    }

    //pop
    public pop = (): any => {
        if (this.length === 0) {
            console.log("Empty stack")
        } else {
            const removedItem = this.items[--this.length]
            this.items.length = this.length
            return removedItem
        }
    }

    //peek
    public peek = ():any =>{
        const index = this.length - 1
        return this.items[index]
    }

    
}
const stack = new Stack()
stack.push("Fravo")
stack.push("Flavio")
stack.push("Fravia")
stack.push("Fravio")
stack.push("Flabio")

console.log(stack.pop())// Flabio
console.log(stack.peek())// Fravio
console.log(stack.pop())// Fravio
console.log(stack.peek())// Fravia
