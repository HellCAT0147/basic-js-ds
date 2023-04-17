const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.length = 0;
  }

  root() {
    if (!this.rt) return null;
    return this.rt;
  }

  add(data) {
    if (!this.length) {
      this.rt = new TreeNode(data);
      this.mn = this.rt;
      this.mx = this.rt;
    } else {
      let current = this.rt;
      while (true) {
        if (data > current.data) {
          if (!current.right) {
            current.right = new TreeNode(data);
            current.right.parent = current;
            if (this.mx.data < current.right.data)
              this.mx = current.right;
            break;
          }
          current = current.right;
        } else if (data < current.data) {
          if (!current.left) {
            current.left = new TreeNode(data);
            current.left.parent = current;
            if (this.mn.data > current.left.data)
              this.mn = current.left;
            break;
          }
          current = current.left;
        }
      }
    }
    this.length++;
  }

  has(data) {
    if (this.length) {
      let current = this.rt;
      while (current.data != data) {
        if (data > current.data)
          current = current.right;
        else if (data < current.data)
          current = current.left;
        if (current == null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  find(data) {
    if (this.length) {
      let current = this.rt;
      while (current.data != data) {
        if (data > current.data)
          current = current.right;
        else if (data < current.data)
          current = current.left;
        if (current == null) {
          return null;
        }
      }
      return current;
    }
    return null;
  }

  remove(data) {
    if (this.has(data)) {
      let node = this.find(data);
      if (node != this.rt) {
        if (!node.left && !node.right) {
          if (node.parent.left == node)
            node.parent.left = null;
          else
            node.parent.right = null;
          node.parent = null;
        } else if (!node.right) {
          if (node.parent.left == node)
            node.parent.left = node.left;
          else
            node.parent.right = node.left;
          node.left.parent = node.parent;
        } else if (!node.left) {
          if (node.parent.left == node)
            node.parent.left = node.right;
          else
            node.parent.right = node.right;
          node.right.parent = node.parent;
        } else {
          if (node.parent.left == node) {
            node.parent.left = node.right;
            node.right.parent = node.parent;
            node.right.left = node.left;
            node.left.parent = node.right;
          } else {
            node.parent.right = node.left;
            node.left.parent = node.parent;
            node.left.right = node.right;
            node.right.parent = node.left;
          }
        }
      } else {
        if (!node.left && !node.right) {
          this.rt = null;
          this.mn = null;
          this.mx = null;
        } else if (!node.right) {
          node.left.parent = null;
          this.rt = node.left;
        } else if (!node.left) {
          node.right.parent = null;
          this.rt = node.right;
        } else {
          let maxFromMin = this.findMax(node.left);
          maxFromMin.right = node.right;
          node.right.parent = maxFromMin;
          node.left.parent = null;
          this.rt = node.left;
        }
      }
      if (node == this.mn) this.mn = this.findMin(this.rt);
      if (node == this.mx) this.mx = this.findMin(this.rt);
    }
  }

  min() {
    return this.mn.data;
  }

  max() {
    return this.mx.data;
  }

  findMin(node) {
    if (!node) return null;
    if (!node.left) return node;
    return this.findMin(node.left);
  }

  findMax(node) {
    if (!node) return null;
    if (!node.right) return node;
    return this.findMax(node.right);
  }
}

module.exports = {
  BinarySearchTree
};