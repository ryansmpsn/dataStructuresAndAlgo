class DynamicArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(this.capacity).fill(0);
  }

  get(i) {
    return this.arr[i];
  }

  set(i, n) {
    this.arr[i] = n;
  }

  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.arr[this.length] = n;
    this.length++;
  }

  popback() {
    if (this.length > 0) {
      this.length--;
    }

    return this.arr[this.length];
  }

  resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity).fill(0);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.arr[i];
    }

    this.arr = newArray;
  }

  getSize() {
    return this.length;
  }

  getCapacity() {
    return this.capacity;
  }
}
