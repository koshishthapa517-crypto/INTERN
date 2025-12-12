import { useState, useCallback } from 'react';

const useCounter = (initialCount = 0, step = 1) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - step);
  }, [step]);

  return [count, increment, decrement];
};

export default useCounter;