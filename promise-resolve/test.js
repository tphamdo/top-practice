async function asyncFunc() {
  console.log('inside asyncFunc');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json);
  throw new Error('internal server error');
}

function next(err) {
  console.log('inside next');
  console.log(err);
  console.log(err);
  console.log(err);
  console.log(err);
  console.log(err);
}

Promise.resolve(asyncFunc()).catch(next);
