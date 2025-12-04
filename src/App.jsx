import { useState } from "react";

function App() {
  const [count , setcount] = useState(1);
  const handleIncreaseCount =()=>{
    setcount((prev)=>prev+1)
  }
  const handleDecreaseCount =()=>{
    setcount((prev)=>prev-1)
  }
  return (
    <>
    <div>
      <button onClick={handleDecreaseCount}>Decrease</button>
      <div>Value of count = {count}</div>
      <button onClick={handleIncreaseCount}>Increase</button>
    </div>
    </>
  )
}

export default App