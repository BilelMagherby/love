import { motion } from 'framer-motion';
import { config } from '../config';
import { FaArrowDown } from 'react-icons/fa';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518199266791-5375a8319d40?q=80&w=2000')",
          filter: "brightness(0.7) contrast(1.1) saturate(1.2)"
        }}
      />
      
      {/* Navbar overlay */}
      <Navbar onToggleMusic={() => {}} />

      {/* Main Content */}
      <div className="relative z-10 w-full h-screen max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            {config.heroTitle}
            <br />
            <span className="text-rose-300 font-normal">{config.heroSubtitle}</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl font-light mt-6 max-w-md leading-relaxed">
            {config.heroDescription}
          </p>

          <div className="flex justify-start my-6 opacity-70">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 Q 50 20 100 10 T 190 10" stroke="#fecdd3" strokeWidth="1" fill="none" />
              <circle cx="100" cy="10" r="4" fill="none" stroke="#fecdd3" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="relative mt-8">
            <motion.button
              onClick={scrollToNext}
              className="px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full text-white font-medium text-lg hover:from-rose-500 hover:to-rose-600 transition-all shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:shadow-[0_0_40px_rgba(244,63,94,0.7)] flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.heroButtonText} <span className="font-serif">→</span>
            </motion.button>
            
            <motion.div 
              className="absolute -bottom-12 left-10 flex items-center gap-2 text-rose-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-handwriting text-xl">Clique ici pour commencer ♡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Left Music Player */}
      <div className="absolute bottom-10 left-8 md:left-16 z-20">
        <MusicPlayer />
      </div>

      {/* Bottom Center Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 bg-rose-500/80 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(244,63,94,0.5)] backdrop-blur-sm">
          <FaArrowDown />
        </div>
        <span className="text-white/80 text-sm">Scroller pour découvrir</span>
      </motion.div>

      {/* Cloud border effect at the bottom */}
      <div className="cloud-border z-10" />

      {/* Right Side Dots Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        <div className="w-2 h-2 rounded-full bg-white/50 cursor-pointer flex items-center justify-center"><div className="w-6 h-6 border border-white/50 rounded-full absolute" /></div>
        <div className="w-2 h-2 rounded-full bg-white cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-white cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-white cursor-pointer" />
      </div>
    </section>
  );
}
