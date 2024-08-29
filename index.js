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

  search(value) {
    if (!this.root) {
      return false;
    }
    if (this.root.value === value) {
      return true;
    }
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (value < root.value) {
      return this.searchNode(root.left, value);
    }
    return this.searchNode(root.right, value);
  }
}

const bst = new BinarySearchTree();
bst.insert(30);
bst.insert(20);
bst.insert(50);

console.log(bst.search(20));
