import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white/40 dark:bg-black/20 rounded-3xl backdrop-blur-md my-10 shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-slate-800 dark:text-rose-100 mb-4">Nos Souvenirs</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-violet-400 mx-auto rounded-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-12 px-6"
      >
        <div className="relative p-10 md:p-16 rounded-3xl glass text-center max-w-3xl border border-rose-200 dark:border-rose-900/30 shadow-2xl overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-pink-400 to-violet-400" />
          <FaHeart className="absolute -bottom-10 -right-10 text-rose-500/10 text-9xl transform -rotate-12" />
          <FaHeart className="absolute -top-10 -left-10 text-violet-500/10 text-9xl transform rotate-12" />
          
          <p className="relative z-10 text-2xl md:text-3xl font-serif text-slate-700 dark:text-rose-100 leading-relaxed italic">
            "Nos plus beaux souvenirs sont encore à écrire. <br className="hidden md:block" />
            <span className="text-rose-500 font-bold font-sans not-italic mt-4 block text-3xl md:text-4xl">
              Créons nos souvenirs ensemble.
            </span>"
          </p>
        </div>
      </motion.div>
    </section>
  );
}
