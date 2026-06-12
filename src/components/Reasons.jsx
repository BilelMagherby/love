import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import { FaHeart } from 'react-icons/fa';

export default function Reasons() {
  const [currentReason, setCurrentReason] = useState(null);

  const showRandomReason = () => {
    let newReason;
    do {
      const randomIndex = Math.floor(Math.random() * config.reasons.length);
      newReason = config.reasons[randomIndex];
    } while (newReason === currentReason && config.reasons.length > 1);
    
    setCurrentReason(newReason);
  };

  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-10 md:p-16 rounded-3xl max-w-2xl w-full shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-pink-500 to-violet-500" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-white">
          Pourquoi je t'aime
        </h2>

        <div className="min-h-[120px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            {currentReason ? (
              <motion.p
                key={currentReason}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-rose-600 dark:text-rose-400 italic"
              >
                "{currentReason}"
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-500 dark:text-slate-400 text-lg"
              >
                Clique sur le bouton pour découvrir un secret...
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={showRandomReason}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-rose-500/50 hover:scale-105 active:scale-95 overflow-hidden"
          whileHover="hover"
        >
          <motion.span
            variants={{
              hover: { rotate: [0, -15, 15, -15, 15, 0] }
            }}
            transition={{ duration: 0.5 }}
          >
            <FaHeart />
          </motion.span>
          <span>Découvre pourquoi je t'aime</span>
          
          <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
        </motion.button>
      </motion.div>
    </section>
  );
}
