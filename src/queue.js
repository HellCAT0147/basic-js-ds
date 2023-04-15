const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ElementOfQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length == 0) {
      this.head = new ElementOfQueue(value); // создаётся новый объект и попадает в начало очереди ...
      this.tail = this.head; // ... и в конец
    } else if (this.length == 1) {
      this.tail = new ElementOfQueue(value);
      this.head.next = this.tail;
    } else {
      const newElement = new ElementOfQueue(value);
      this.tail.next = newElement;
      this.tail = newElement;
    }
    this.length++;
  }

  dequeue() {
    const pop = this.head;
    this.head = this.head.next;
    this.length--;
    return pop.value;
  }
}

module.exports = {
  Queue
};
