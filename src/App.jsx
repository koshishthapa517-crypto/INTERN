import { useRandomDog } from './hooks/useRandomDog';
import useCounter from './hooks/useCounter';

const App = () => {
  const [count, increment] = useCounter(0);
  const { randomDog, handleGenerateNewImage } = useRandomDog(increment);

  return (
    <>
      <div className="flex w-screen flex-row items-center gap-10"></div>
      <div className="text-3xl font-bold ">Random Dog Generator</div>
      <button
        className="border p-3 cursor-pointer"
        onClick={handleGenerateNewImage}
      >
        Generate New Image
      </button>
      <div className="text-xl mt-4">Images Generated: {count}</div>
      {randomDog && randomDog.message && (
        <img src={randomDog.message} alt="Random Dog" />
      )}
    </>
  );
};

export default App;