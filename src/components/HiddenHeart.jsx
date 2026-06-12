import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useHeartContext } from '../context/HeartContext';

export default function HiddenHeart({ id, className }) {
  const { foundHearts, findHeart } = useHeartContext();
  const isFound = foundHearts.includes(id);

  if (isFound) return null;

  return (
    <motion.button
      onClick={() => findHeart(id)}
      className={`absolute z-20 text-rose-300/40 hover:text-rose-500 hover:scale-125 transition-all duration-300 ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.1, 0.8],
        opacity: [0.4, 0.8, 0.4] 
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 2 + Math.random(),
        ease: "easeInOut" 
      }}
    >
      <FaHeart size={24} />
    </motion.button>
  );
}
