import { createContext, useContext, useState, useEffect } from 'react';

const HeartContext = createContext();

export const useHeartContext = () => useContext(HeartContext);

export const HeartProvider = ({ children }) => {
  const [foundHearts, setFoundHearts] = useState([]);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const totalHearts = 5;

  useEffect(() => {
    const saved = localStorage.getItem('foundHearts');
    if (saved) {
      const parsed = JSON.parse(saved);
      setFoundHearts(parsed);
      if (parsed.length >= totalHearts) {
        setIsGameComplete(true);
      }
    }
  }, []);

  const findHeart = (id) => {
    if (!foundHearts.includes(id)) {
      const newHearts = [...foundHearts, id];
      setFoundHearts(newHearts);
      localStorage.setItem('foundHearts', JSON.stringify(newHearts));
      
      if (newHearts.length >= totalHearts) {
        setIsGameComplete(true);
      }
    }
  };

  return (
    <HeartContext.Provider value={{ foundHearts, findHeart, isGameComplete, totalHearts }}>
      {children}
    </HeartContext.Provider>
  );
};
