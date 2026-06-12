import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import confetti from 'canvas-confetti';

export default function Quiz() {
  const [quizState, setQuizState] = useState('welcome'); // 'welcome', 'playing', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [shake, setShake] = useState(false);

  const triggerHeartConfetti = () => {
    const defaults = { spread: 360, ticks: 100, gravity: 1, decay: 0.94, startVelocity: 30, shapes: ['heart'], colors: ['#e11d48', '#fb7185', '#f43f5e'] };
    confetti({ ...defaults, particleCount: 40, scalar: 1.2 });
    confetti({ ...defaults, particleCount: 15, scalar: 2 });
  };

  const handleAnswer = (selectedIndex) => {
    const questionConfig = config.quiz[currentQuestion];
    const isCorrect = questionConfig.correctAnswers.includes(selectedIndex);

    if (isCorrect) {
      setScore(score + 1);
      setFeedback({ type: 'success', text: questionConfig.successMessage });
      triggerHeartConfetti();
    } else {
      setFeedback({ type: 'error', text: questionConfig.errorMessage });
      setShake(true);
      setTimeout(() => setShake(false), 500); // Stop shaking after 500ms
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestion + 1 < config.quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizState('result');
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizState('playing');
    setFeedback(null);
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <motion.div
        animate={{ x: shake ? [-10, 10, -10, 10, 0] : 0 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative"
      >
        <AnimatePresence mode="wait">
          {quizState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
                {config.quizConfig.welcomeTitle}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                {config.quizConfig.welcomeSubtitle}
              </p>
              <button
                onClick={() => setQuizState('playing')}
                className="px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full text-white font-medium text-lg hover:from-rose-500 hover:to-rose-600 transition-all shadow-lg"
              >
                Start the Quiz ❤️
              </button>
            </motion.div>
          )}

          {quizState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
                {config.quizConfig.finalTitle}
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
                {config.quizConfig.finalSubtitle}
              </p>
              <div className="mb-8">
                <span className="text-2xl font-bold text-slate-700 dark:text-rose-200">
                  Score: {score} / {config.quiz.length}
                </span>
              </div>
              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 rounded-full font-semibold hover:bg-rose-200 dark:hover:bg-rose-800/50 transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          )}

          {quizState === 'playing' && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="mb-6 flex justify-between items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                <span>Question {currentQuestion + 1} / {config.quiz.length}</span>
                <span>Score: {score}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-8 text-slate-800 dark:text-white">
                {config.quiz[currentQuestion].question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.quiz[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !feedback && handleAnswer(index)}
                    disabled={feedback !== null}
                    className={`p-4 rounded-xl text-left font-medium transition-all duration-300 border-2 
                      ${feedback ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:border-rose-400 hover:shadow-md'}
                      bg-white/50 dark:bg-slate-900/50 border-transparent dark:border-white/5 text-slate-700 dark:text-slate-200
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Feedback Message */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-6 p-4 rounded-xl text-center font-semibold ${feedback.type === 'success'
                        ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                      }`}
                  >
                    {feedback.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
