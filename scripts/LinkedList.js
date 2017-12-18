import Node from './Node';

export default class LinkedList {
  constructor (head = null) {
    this.head = head;
    this.length = 0;
  }

  unshift(data) {
    let nodeToAdd = new Node(data);
    let nodeToCheck = this.head;

    if(!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    nodeToAdd.next = nodeToCheck;
    this.head = nodeToAdd;
    this.length++
  }

  shift() {
    if(!this.head) {
      return null;
    }

    let nextNode = this.head.next;
    let nodeToTake = this.head;
    this.head = nextNode;
    this.length--;
    return nodeToTake;
  }

  push(data) {
    let nodeToAdd = new Node(data);
    let lastNode = this.head;

    if(!this.head) {
      this.head = nodeToAdd;
      this.length++
      return
    };

    while(lastNode.next) {
      lastNode = lastNode.next;
    }

    lastNode.next = nodeToAdd;
    this.length++;
  }

  pop() {
    if(!this.head) {
      return null;
    }

    let lastNode = this.head;
    let secondToLastNode = this.head;
    let nodeToTake = lastNode;

    if(!this.head.next) {
      this.head = null;
    }

    while(lastNode.next) {
      secondToLastNode = lastNode;
      lastNode = lastNode.next;
    }

    nodeToTake = lastNode;
    secondToLastNode.next = null;

    this.length--;
    return nodeToTake
  }
}