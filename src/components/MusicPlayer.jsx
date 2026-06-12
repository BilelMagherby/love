import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaHeart, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { config } from '../config';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isLiked, setIsLiked] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = new Audio(config.music.audioUrl);
    audio.loop = true;
    audioRef.current = audio;

    const updateProgress = () => {
      setCurrentTime(formatTime(audio.currentTime));
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const setAudioData = () => {
      setDuration(formatTime(audio.duration));
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setAudioData);

    // Try to auto-play
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Auto-play prevented. Waiting for user interaction.", error);
        
        // Setup one-time listeners to play audio on first user interaction
        const enableAudio = () => {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(e => console.log(e));
          document.removeEventListener('click', enableAudio);
          document.removeEventListener('touchstart', enableAudio);
          document.removeEventListener('keydown', enableAudio);
          document.removeEventListener('scroll', enableAudio);
        };
        
        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
        document.addEventListener('keydown', enableAudio);
        document.addEventListener('scroll', enableAudio, { once: true });
      });
    }
    
    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', setAudioData);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); // prevent triggering the document click listener if it's still there
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[320px] shadow-2xl flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={config.music.coverUrl} 
            alt="Album cover" 
            className="w-12 h-12 rounded-md object-cover shadow-md"
          />
          <div>
            <h4 className="text-white font-semibold text-sm line-clamp-1">{config.music.title}</h4>
            <p className="text-white/60 text-xs line-clamp-1">{config.music.artist}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="text-white/60 hover:text-rose-400 transition-colors flex-shrink-0"
        >
          <FaHeart className={isLiked ? "text-rose-400" : ""} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-6">
        <button className="text-white/80 hover:text-white transition-colors">
          <FaStepBackward size={14} />
        </button>
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
        >
          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-1" />}
        </button>
        <button className="text-white/80 hover:text-white transition-colors">
          <FaStepForward size={14} />
        </button>
      </div>

      <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
        <span>{currentTime}</span>
        <div 
          ref={progressRef}
          onClick={handleSeek}
          className="flex-1 h-1 bg-white/20 rounded-full relative cursor-pointer group"
        >
          <div 
            className="absolute top-0 left-0 h-full bg-rose-400 rounded-full" 
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-rose-400 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" 
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
        <span>{duration}</span>
      </div>
    </motion.div>
  );
}
