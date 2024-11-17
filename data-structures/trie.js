class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }
}

const trie = new Trie();

const articleTitles = [
  "javascript",
  "Advanced JavaScript Techniques",
  "Introduction to React",
  "Getting Started with Node.js",
];

articleTitles.forEach((title) => trie.insert(title.toLowerCase()));

const findWord = trie.search("javascript");

console.log(findWord);
