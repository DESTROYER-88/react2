import React, { useState } from 'react';
import './C.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className='container'>
        <div className='counter'>
            
          <h1>Counter: {count}</h1>
          <div className='button1'>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
