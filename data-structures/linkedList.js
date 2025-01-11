class ListNode {
  constructor(val, nextNode = null) {
    this.val = val;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    // dummy node
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
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
    // index out of bounds
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;

    // if list was null before insertion
    if (!newNode.next) {
      this.tail = newNode;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0;
    let current = this.head;

    while (i < index && current) {
      i++;
      current = current.next;

      if (current && current.next) {
        if (current.next === this.tail) {
          this.tail = current;
        }
        current.next = current.next.next;
      }
      return true;
    }

    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const values = [];
    let current = this.head.next;

    while (current) {
      values.push(current.val);
      current = current.next;
    }

    return values;
  }
}
