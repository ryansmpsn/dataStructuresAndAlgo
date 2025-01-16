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

  get(index) {}

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
