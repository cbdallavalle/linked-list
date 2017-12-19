import Node from './Node';

export default class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let nodeToAdd = new Node(data)
    let current = this.head;

    if(!this.head) {
      this.head = nodeToAdd
    } else {
      nodeToAdd.next = this.head
      this.head.prev = nodeToAdd;
      this.head = nodeToAdd;
    }

    this.length++
  }

}