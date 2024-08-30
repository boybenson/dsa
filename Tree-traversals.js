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

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(45);
bst.insert(10);
bst.insert(60);
bst.insert(18);
bst.insert(32);

console.log(bst.inOrder(bst.root));
