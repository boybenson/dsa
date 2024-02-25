class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
    }
  }
}

const LL = new LinkedList();
LL.insertHead(10);

console.log(LL);
