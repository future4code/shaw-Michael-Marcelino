import { ListNode } from "./ListNode";

class LinkedList {
    constructor(
        public head: ListNode | null
    ) { }

    public addToTail = (value: any) => {
        let nodeToAdd = new ListNode(value);

        if (!this.head) {
            this.head = nodeToAdd
        } else {
            let currentNode = this.head
            while (currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = nodeToAdd
        }
    }

    public find = (value: any) => {
        let currentNode = this.head
        while(currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next
        }
        return currentNode || -1
    }
}
export {LinkedList}