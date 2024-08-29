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
}

const bst = new BinarySearchTree();
