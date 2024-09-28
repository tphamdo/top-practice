import { useEffect, useState } from 'react';

export default function Clock() {
  const [counter, setCounter] = useState(0);

  console.log('render:', counter);
  useEffect(() => {
    console.log('useEffect');
    const key = setInterval(() => {
      console.log('setInterval:', counter);
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      console.log('clean:', key);
      console.log('clean!');
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
