import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function useRandomDog(increment) {
  const [randomDog, setRandomDog] = useState(null);

  const handleGenerateNewImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setRandomDog(response.data);
      if (increment) increment();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGenerateNewImage();
  }, []);
  
  return { randomDog, handleGenerateNewImage };
}