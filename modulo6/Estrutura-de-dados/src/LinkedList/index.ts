import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";


const headElement : ListNode = new ListNode(1)
const list: LinkedList = new LinkedList(headElement)

list.addToTail(2)
list.addToTail(3)
list.addToTail(4)
list.addToTail(5)
list.addToTail(6)
list.addToTail(7)
list.addToTail(8)

console.log(list.find(2))
console.log(list.find(8))
console.log(list.find(5614))