import { useState, useEffect } from 'react';
import { HeartProvider } from './context/HeartContext';
import Preloader from './components/Preloader';
import HeartRain from './components/HeartRain';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Reasons from './components/Reasons';
import Quiz from './components/Quiz';
import Counter from './components/Counter';
import SecretMessages from './components/SecretMessages';
import FinalSurprise from './components/FinalSurprise';
import HiddenHeart from './components/HiddenHeart';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Custom cursor class added to body
    document.body.classList.add('heart-cursor');
    
    // Simulate initial loading for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeartProvider>
      <AnimatePresence>
        {loading ? (
          <Preloader key="preloader" onComplete={() => {}} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen relative"
          >
            <HeartRain />
            
            
            {/* Main Sections */}
            <Hero />
            
            <div className="relative">
              {/* Hidden Heart 1 */}
              <HiddenHeart id={1} className="top-10 left-10 md:left-20" />
              <Story />
            </div>

            <div className="relative">
              {/* Hidden Heart 2 */}
              <HiddenHeart id={2} className="top-1/2 right-10 md:right-32" />
              <Gallery />
            </div>

            <Reasons />
            
            <div className="relative">
              {/* Hidden Heart 3 */}
              <HiddenHeart id={3} className="bottom-10 left-1/4" />
              <Counter />
            </div>

            <Quiz />

            <div className="relative">
              {/* Hidden Heart 4 */}
              <HiddenHeart id={4} className="top-20 right-1/4" />
              <SecretMessages />
            </div>

            <div className="relative">
              {/* Hidden Heart 5 */}
              <HiddenHeart id={5} className="bottom-32 left-1/2 -ml-32" />
              <FinalSurprise />
            </div>

            {/* Footer */}
            <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              <p>Fait avec ❤️ pour toi</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </HeartProvider>
  );
}

export default App;
