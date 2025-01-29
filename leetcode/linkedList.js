// Access	Search	Insertion	Deletion
// O(n)     O(n)	O(1)	    O(n)

class ListNode {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  get(index) {
    let current = this.head.next;
    let i = 0;

    while (current) {
      if (i === index) {
        return current;
      }

      i++;
      current = current.next;
    }

    return -1;
  }

  insertHead(val) {}

  insertTail(val) {}

  remove(index) {}

  /**
   * @return {number[]}
   */
  getValues() {
    const values = [];
    let current = this.head.next;

    while (current) {
      values.push(current.data);
      current = current.next;
    }

    return values;
  }

  /**
   * @return {ThisType}
   */
  reverse() {
    let current = this.head;
    let prevNode = null;
    let nextNode = null;

    while (current) {
      nextNode = current.nextNode;

      current.next = prevNode;

      prevNode = current;
      current = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
