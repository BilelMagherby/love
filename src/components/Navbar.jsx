import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';

export default function Navbar({ onToggleMusic }) {
  const navLinks = [
    { label: 'Accueil', isActive: true },
    { label: 'Notre Histoire', isActive: false },
    { label: 'Galerie', isActive: false },
    { label: "Pourquoi je t'aime", isActive: false },
    { label: 'Quiz', isActive: false },
    { label: 'Messages', isActive: false },
    { label: 'Jeu', isActive: false },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex items-center justify-between">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-serif text-white font-medium tracking-wide flex items-center gap-2"
      >
        Pour Toi <span className="text-rose-400">❤️</span>
      </motion.div>

      {/* Navigation Links */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden lg:flex items-center gap-8 text-sm text-white/80"
      >
        {navLinks.map((link, index) => (
          <li key={index} className="relative group cursor-pointer hover:text-white transition-colors">
            {link.label}
            {link.isActive ? (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-rose-400 rounded-full" />
            ) : (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-rose-400 rounded-full transition-all group-hover:w-4" />
            )}
          </li>
        ))}
      </motion.ul>

      {/* Music Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onToggleMusic}
        className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all text-sm backdrop-blur-sm bg-white/5"
      >
        <FaMusic className="text-xs" />
        Musique
      </motion.button>
    </nav>
  );
}
