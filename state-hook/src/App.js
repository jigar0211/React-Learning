import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const [click,setClick] = useState([]);

  const addNumbers = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ]);
  }
  return (
    <div className="App">
      <h2> You have Clicked Button {count} times</h2>
      <button onClick={handleClick}>Click Here</button>
      <h2> The Number is {count % 2 === 0 ? "EVEN!" : "ODD!"} </h2>
      <button onClick={addNumbers}>
        Generate Random Numbers
      </button>
      <ul>
       {click.map(item => (
          <li key={item.id}>{item.value}</li>
       ))}
      </ul>
      <Form />
    </div>
  );
}

export default App;
