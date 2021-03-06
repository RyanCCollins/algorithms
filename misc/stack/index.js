class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
    this.push = this.push.bind(this);
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};

// const stack = new Stack();
// stack.push(1);
// stack.push(4);
// stack.push('Hello world');
