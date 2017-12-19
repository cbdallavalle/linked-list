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

  find(data) {
    let foundNode = null;
    let currentNode = this.head;

    while(currentNode) {
    if(currentNode.data === data) {
      foundNode = currentNode;
      break;
    } else {
      currentNode = currentNode.next;
    }
  }
    return foundNode;
  }

  delete(data) {
    if(this.head.data === data) {
      this.length--;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let secondToLastNode;
    let nextNode = null;


    while(currentNode) {
      if(currentNode.data === data) {
        secondToLastNode.next = currentNode.next;
        currentNode = null;
        this.length--;
        //OR take out line 108, and break;
      } else {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  toArray() {
    let array = [];
    let count = 0;

    let currentNode = this.head;
    while(currentNode) {
      array[count] = currentNode.data;
      currentNode = currentNode.next;
      count++
    }

    return array
  }

  insert(index, data) {
    let currentNode = this.head;
    let previous = this.head;
    let nodeToAdd = new Node(data);

    for(let i = 0; i < index; i++) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = nodeToAdd;
    nodeToAdd.next = currentNode;
    this.length++;
  }

//check this one out
  includes(data) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.data === data) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false
  }

  index(data) {

  }

}