class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertHead(data) {
    const newNode = new Node(data);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  insertTail(data) {
    const newNode = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = current.next;
    this.length++;
  }

  insertAt(data, index) {}

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LL = new LinkedList();
LL.insertHead(10);
LL.insertTail(9);
LL.insertHead(2);
LL.insertTail(5);

LL.print();
