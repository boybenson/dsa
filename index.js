class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      return (this.root = newNode);
    }
    return this.inserNode(this.root, newNode);
  }

  inserNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        return (root.left = newNode);
      }
      return this.inserNode(root.left, newNode);
    } else {
      if (!root.right) {
        return (root.right = newNode);
      }
      return this.inserNode(root.right, newNode);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(45);
bst.insert(10);
bst.insert(60);
bst.insert(18);
bst.insert(32);
