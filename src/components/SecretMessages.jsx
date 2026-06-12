import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import { FaEnvelope, FaEnvelopeOpenText, FaTimes } from 'react-icons/fa';

export default function SecretMessages() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-rose-100 mb-12">
        Messages Secrets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.secretMessages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedMessage(msg)}
            className="glass p-8 rounded-2xl cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center text-rose-500">
                <FaEnvelope className="text-xl group-hover:hidden" />
                <FaEnvelopeOpenText className="text-xl hidden group-hover:block" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                {msg.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                onClick={() => setSelectedMessage(null)}
              >
                <FaTimes size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <FaEnvelopeOpenText className="text-3xl text-rose-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {selectedMessage.title.replace('❤️ ', '')}
                </h3>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-serif italic">
                "{selectedMessage.content}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
