import React, { useEffect } from 'react';
import useCounter from '../hooks/useCounter';

const Counter = ({ initialCount, step }) => {
  const [count, increment, decrement] = useCounter(initialCount, step);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;