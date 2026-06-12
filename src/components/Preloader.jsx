import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function Preloader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rose-50 dark:bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <FaHeart className="text-rose-500 text-6xl drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
      </motion.div>
      <motion.p
        className="mt-6 text-rose-600 dark:text-rose-400 font-medium tracking-widest uppercase text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Chargement de l'amour...
      </motion.p>
    </motion.div>
  );
}
