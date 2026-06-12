import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeartContext } from '../context/HeartContext';
import { config } from '../config';
import confetti from 'canvas-confetti';
import { FaHeart, FaLock, FaUnlock, FaTimes } from 'react-icons/fa';

export default function FinalSurprise() {
  const { isGameComplete, foundHearts, totalHearts } = useHeartContext();
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isGameComplete) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f43f5e', '#a855f7', '#ffffff']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f43f5e', '#a855f7', '#ffffff']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isGameComplete]);

  return (
    <section className="py-32 px-4 max-w-4xl mx-auto text-center relative">
      {!isGameComplete ? (
        <motion.div
          className="glass p-12 rounded-3xl flex flex-col items-center justify-center opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FaLock className="text-5xl text-slate-400 mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">
            Surprise Finale Verrouillée
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            GHodwa fil 9ahwa natyk l sureprise lokhra chaimouti ♥
          </p>
          <div className="mt-6 flex gap-2">
            {[...Array(totalHearts)].map((_, i) => (
              <FaHeart
                key={i}
                className={`text-2xl ${i < foundHearts.length ? 'text-rose-500 scale-110' : 'text-slate-300 dark:text-slate-700'} transition-all duration-500`}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="glass p-12 rounded-3xl shadow-rose-500/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-violet-500/10" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-rose-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"
          />

          <FaUnlock className="text-5xl text-rose-500 mx-auto mb-6 relative z-10" />

          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500 mb-8 relative z-10 leading-tight">
            {config.finalMessage}
          </h2>

          <button
            onClick={() => setShowLetter(true)}
            className="relative z-10 px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-500/50 hover:-translate-y-1"
          >
            Voir mon dernier message
          </button>
        </motion.div>
      )}

      {/* Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setShowLetter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 50, rotateX: -20 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-[#fdfbf7] dark:bg-slate-900 p-10 md:p-16 rounded-sm shadow-2xl max-w-2xl w-full relative before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] before:opacity-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-20"
                onClick={() => setShowLetter(false)}
              >
                <FaTimes size={24} />
              </button>

              <div className="relative z-10 font-serif text-slate-800 dark:text-slate-200 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                {config.finalLetter}
              </div>

              <div className="absolute bottom-4 right-8 text-rose-300 opacity-50 rotate-12 z-0">
                <FaHeart size={100} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
