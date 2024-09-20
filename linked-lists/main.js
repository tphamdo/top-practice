class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  append(value) {
    if (!this.#head) {
      this.#head = new Node(value);
      this.#tail = this.#head;
    } else {
      let next = new Node(value);
      this.#tail.nextNode = next;
      this.#tail = next;
    }
    this.#size++;
  }

  prepend(value) {
    let front = new Node(value);
    front.nextNode = this.#head;
    this.#head = front;
    if (!this.#tail) this.#tail = front;
    this.#size++;
  }

  at(index) {
    if (index < 0 || index >= this.#size) {
      return null;
    }
    let ptr = this.#head;
    while (index--) {
      ptr = ptr.nextNode;
    }
    return ptr;
  }

  pop() {
    if (!this.#size) return;
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      return;
    }

    let ptr = this.#head;
    while (ptr.nextNode && ptr.nextNode.nextNode) {
      ptr = ptr.nextNode;
    }
    ptr.nextNode = null;
    this.#tail = ptr;
    this.#size--;
  }

  contains(value) {
    let ptr = this.#head;
    while (ptr) {
      if (ptr.value === value) return true;
      ptr = ptr.nextNode;
    }
    return false;
  }

  find(value) {
    let ptr = this.#head;
    let i = 0;
    while (ptr) {
      if (ptr.value === value) return i;
      ptr = ptr.nextNode;
      ++i;
    }
    return false;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.#size + 1) return;
    if (index === 0) {
      let node = new Node(value);
      node.nextNode = this.#head;
      this.#head = node;
      this.#size++;
      return;
    }

    let ptr = this.#head;
    let i = 0;
    while (i + 1 !== index) {
      ptr = ptr.nextNode;
      ++i;
    }
    let node = new Node(value);
    let temp = ptr.nextNode;
    ptr.nextNode = node;
    node.nextNode = temp;
  }

  toString() {
    let ptr = this.#head;
    let str = "";
    while (ptr) {
      str += `( ${ptr.value} ) -> `;
      ptr = ptr.nextNode;
    }
    str += "null";
    return str;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}

class Node {
  constructor(value = null, node = null) {
    this.value = value;
    this.nextNode = node;
  }
}

let ll = new LinkedList();

let node = new Node();
ll.prepend("1");
ll.append("dog");
ll.append("cat");
ll.pop();
ll.append("pussy");
ll.prepend("a");
ll.pop();
ll.pop();
ll.pop();
ll.pop();
ll.pop();
ll.pop();
ll.prepend("1");
ll.pop();
ll.pop();
ll.append("dog");
ll.append("cat");
ll.pop();
ll.append("pussy");
ll.append("cat");
ll.append("cat");
ll.append("cat");
ll.append("cat");
console.log(ll.toString());
ll.insertAt(1, "2");
console.log(ll.toString());
ll.insertAt(0, "1");
console.log(ll.toString());
ll.insertAt(10, "4");
console.log(ll.toString());
ll.insertAt(8, "3");
console.log(ll.toString());
