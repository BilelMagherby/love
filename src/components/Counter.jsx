import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

export default function Counter() {
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const start = new Date(config.startDate).getTime();
  const difference = Math.max(0, now - start); // Ensure it doesn't go negative

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const timeBlocks = [
    { label: 'Jours', value: days },
    { label: 'Heures', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Secondes', value: seconds }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-rose-100 mb-12">
          Le temps passé à t'aimer
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-3xl flex flex-col items-center justify-center aspect-square"
            >
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-violet-500 mb-2 font-mono">
                {block.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
