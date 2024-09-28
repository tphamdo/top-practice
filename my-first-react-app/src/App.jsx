import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Hello } from './Greeting.jsx';
import Clock from './Clock.jsx';

function Button({ text = 'Click Me!', color = 'red', fontSize = 12 }) {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={() => handleClick()} style={buttonStyle}>
      {text}
      {count}
    </button>
  );
}
const _arr = ['B', 'C', 'D'];

export default function App() {
  // function handleClick() {
  //   setIndex(index + 1);
  // }
  const [arr, setArr] = useState(_arr);
  function handleClick() {
    // console.log(arr);
    // arr.push("A");
    // console.log(arr);
    setArr(['A', ...arr]);
  }

  return (
    <div>
      <Clock />
      {arr.map((el, index) => (
        <div key={index}>
          <Button text={el}></Button>
          <input />
        </div>
      ))}
      <button onClick={handleClick}>Push A to front</button>
    </div>
  );
}
/*{index === 5 && <Button />}
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <button onClick={() => handleClick()}>{index}</button>*/
//{" "}
// <button>
// {index} {el}
// //{" "}
// </button>
