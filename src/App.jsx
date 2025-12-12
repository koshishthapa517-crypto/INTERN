
import { use, useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
     const [randomDog,setRandomDog] = useState({});
      const handleGenerateNewImage = async () => {
        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          setRandomDog(response.data);
        } catch (error) {
          console.error(error);
        }
      };

        useEffect(() => {
        handleGenerateNewImage();
      }, []);
  return (
      <>
    <div className="flex w-screen flex-row items-center gap-10"></div>
      <div className="text-3xl font-bold ">Random Dog Generator</div>
      <button className='border p-3 cursor-pointer '
      onClick={handleGenerateNewImage}> 
      Generate  New Image
      </button>
      <img src={randomDog.message} alt=""/>
      
    </>
  )
}

export default App