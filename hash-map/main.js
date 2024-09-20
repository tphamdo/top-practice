const DEFAULT_NUM_BUCKETS = 16;

class HashMap {
  buckets = new Array(DEFAULT_NUM_BUCKETS);
  size = DEFAULT_NUM_BUCKETS;
  count = 0;

  constructor(loadFactor = 0.75) {
    this.loadFactor = loadFactor;
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, val) {
    let idx = this.#hash(key) % this.size;

    this.buckets[idx] = this.buckets[idx] || [];

    for (let i = 0; i < this.buckets[idx].length; i++) {
      if (this.buckets[idx][i][0] === key) {
        this.buckets[idx][i][1] = val;
        return;
      }
    }

    this.buckets[idx].push([key, val]);
    this.count++;

    // resize if new size exceeds load factor
    if (this.count / this.size > this.loadFactor) {
      this.resize();
    }

    /* console.log(typeof this.buckets[idx][0]);
    console.log(this.buckets[idx][0] instanceof Array); */
  }

  get(key) {
    let idx = this.#hash(key) % this.size;

    for (let i = 0; i < this.buckets[idx].length; i++) {
      if (this.buckets[idx][i][0] === key) {
        return this.buckets[idx][i][1];
      }
    }
    return null;
  }

  resize() {
    this.size *= 2;
    this.count = 0;

    let elements = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((el) => {
          elements.push(el);
        });
      }
    });

    this.buckets = new Array(this.size);

    elements.forEach((el) => {
      this.set(el[0], el[1]);
    });
  }

  print() {
    for (let i = 0; i < this.size; ++i) {
      console.log(`${i}: ${this.buckets[i]}`);
    }
  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.get("hat") === "black");
console.log(test.get("ice cream") === "white");
console.log(test.get("jacket") === "blue");
console.log(test.get("kite") === "pink");
console.log(test.get("lion") === "golden");

test.set("moon", "silver");

console.log(test.get("lion") === "golden");
console.log(test.get("moon") === "silver");
