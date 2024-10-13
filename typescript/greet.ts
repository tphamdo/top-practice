// Parameter type annotation
function greet(name: string): Promise<number> {
  console.log('Hello, ' + name.toUpperCase() + '!!');
  return new Promise((res) => {
    res(12);
  });
}

greet('tim');

function printAll(strs: string | string[] | null) {
  if (strs === null) {
  } else if (typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}
function printId(id: number | string) {
  console.log(id.toUpperCase());
}

function get(): string {
  return 'dog';
}

let x = get();
x = 12;

// An interface can be re-opened
// and new values added:

interface Mammal {
  genus: string;
}

interface Mammal {
  breed?: string;
}

const animal: Mammal = {
  genus: '1234',
  // Fails because breed has to be a string
  breed: 1,
};

type Reptile = {
  genus: string;
};

// You cannot add new variables in the same way
type Reptile = {
  breed?: string;
};

const num = <any>(<number>12);
const num2 = 12 as any as number;

let dogString = 'dog'; // hover var with K
const dogString2 = 'dog'; // hover var with K

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}
