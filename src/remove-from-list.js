const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function findPosition(l, k) {
  let actual = l;
  let i = 0;
  while (actual) {
    if (actual.value == k) return i;
    actual = actual.next;
    i++;
  }
  return -1;
}

function deleteByPosition(l, id) {
  if (id >= 0) {
    let actual = l;
    if (id == 0) {
      l = l.next;
    } else {
      for (let i = 0; i < id-1; i++)
        actual = actual.next;
      actual.next = actual.next.next;
      while(l.next.value != actual.value) {        
        let lTemp = l;
        while(lTemp.next.value != actual.value) {
          lTemp = lTemp.next;
        }
        l.next = actual;
      }
    }
  }
  return l;
}

function removeKFromList(l, k) {
  while(findPosition(l, k) != -1) {
    l = deleteByPosition(l, findPosition(l, k));
  }
  return l;
}

module.exports = {
  removeKFromList
};
