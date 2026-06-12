import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const emojis = ['❤️', '💖', '💕', '💘', '💝', '💗', '💓'];

const Heart = ({ delay, left, top, duration, size, directionX, directionY }) => (
  <motion.div
    className="fixed pointer-events-none z-[100] drop-shadow-lg"
    style={{ left: `${left}%`, top: `${top}%`, fontSize: size }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      x: directionX,
      y: directionY,
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1.2, 0.8],
      rotate: [0, 15, -15, 30] 
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    {emojis[Math.floor(Math.random() * emojis.length)]}
  </motion.div>
);

export default function HeartRain() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate random floating hearts everywhere
    const newHearts = Array.from({ length: 35 }).map((_, i) => {
      // Randomize movement: some go up, some go down, some drift left/right
      const dirY = (Math.random() > 0.5 ? 1 : -1) * (100 + Math.random() * 300); // pixels to move
      const dirX = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 150);

      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 15,
        size: 15 + Math.random() * 25,
        directionX: dirX,
        directionY: dirY
      };
    });
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {hearts.map(heart => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
}
