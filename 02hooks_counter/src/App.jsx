import { use, useState} from 'react';

function App() {

  let [counter, setCounter]=useState(0);


  const increment = () => {
    counter++;
    if(counter > 10) {
      counter = counter - 1; // Prevent going above 10
    }
    else{
      setCounter(counter);
      console.log("Counter incremented: ", counter);
    }
  }

  const decrement = () => {
    counter--;
    if(counter < 0) {
      counter = counter + 1; // Prevent going below zero
    } 
    else{
      setCounter(counter);
      console.log("Counter decremented: ", counter);
    }
  }

  const reset = () => {
    counter = 0;
    setCounter(counter);
    console.log("Counter reset: ", counter);
  }

  return(
    <>
      <h1>Counter App</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={increment}> Increment</button> <br/>
      <button onClick={decrement}>Decrement</button> <br/>
      <button onClick={reset}>Reset</button> <br/>
    </>
  )
}

export default App
