import { useState } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/Footer";

function App() {
  const DEFVALUE= 0
  const [count, setCount] = useState(DEFVALUE);

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncreaseByFive = () => {
    setCount((prev) => prev + 5);
  };

  const handleDecreaseByFive = () => {
    setCount((prev) => prev - 5);
  };

  const handleDivideByTen = () => {
    setCount((prev) => prev / 10);
  };

  const handleMultiplyByTen = () => {
    setCount((prev) => prev * 10);
  };

  const handleSetValueToThousand = () => {
    setCount(1000);
  };

  const handleReset = () => {
    setCount(DEFVALUE);
  };

  return (
    <>
      <Navbar />
      <Body />
      <div style={{ textAlign: "center", margin: "20px", backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Value of count = {count}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <button style={{ padding: "10px 20px" }} onClick={handleDecreaseCount}>Decrease</button>
          <button style={{ padding: "10px 20px" }} onClick={handleIncreaseByFive}>Increase by 5</button>
          <button style={{ padding: "10px 20px" }} onClick={handleDecreaseByFive}>Decrease by 5</button>
          <button style={{ padding: "10px 20px" }} onClick={handleDivideByTen}>Divide by 10</button>
          <button style={{ padding: "10px 20px" }} onClick={handleMultiplyByTen}>Multiply by 10</button>
          <button style={{ padding: "10px 20px" }} onClick={handleSetValueToThousand}>Set Value to 1000</button>
          <button style={{ padding: "10px 20px" }} onClick={handleReset}>Reset</button>
          <button style={{ padding: "10px 20px" }} onClick={handleIncreaseCount}>Increase</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;