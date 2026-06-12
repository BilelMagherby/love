import { motion } from 'framer-motion';
import { config } from '../config';

export default function Story() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-slate-800 dark:text-rose-100 mb-4">Notre Histoire</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-violet-400 mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-rose-200 dark:bg-rose-900/50 h-full rounded-full" />

        <div className="space-y-24">
          {config.story.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Content */}
              <div className="w-full md:w-5/12 mb-8 md:mb-0 relative">
                <div className="glass p-6 rounded-2xl shadow-lg hover:shadow-rose-500/20 transition-shadow duration-300">
                  <span className="inline-block px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 text-sm font-semibold mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-rose-400 to-violet-400 border-4 border-rose-50 dark:border-slate-950 z-10 shadow-lg" />

              {/* Image */}
              <div className="w-full md:w-5/12">
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
