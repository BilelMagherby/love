export const config = {
  // Hero Section
  heroTitle: "J'ai créé quelque chose",
  heroSubtitle: "de spécial pour toi ♡",
  heroDescription: "Prépare-toi à découvrir un monde rempli de souvenirs, de surprises et d'amour...",
  heroButtonText: "Découvrir la surprise",

  // Music Player
  music: {
    title: "الليله جاي (الزين)",
    artist: "Audio Ellila Gay ELzayn",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=150&q=80",
    audioUrl: "/song.mp3"
  },

  // Counter Section
  // Remplace cette date par la VRAIE date de ce fameux mardi ! (Format: AAAA-MM-JJTHH:mm:ss)
  startDate: "2026-06-09T18:29:00",

  // Story Section
  story: [
    {
      id: 1,
      date: "Tuesday at 6:29 PM",
      title: "First message in Facebook",
      description: "Le tout premier message échangé entre nous.",
      image: "/fb.jpg" // Place ton image facebook dans le dossier 'public' sous le nom 'fb.jpg'
    },
    {
      id: 2,
      date: "Wednesday 7:48 PM",
      title: "First message in Instagram",
      description: "Quand la conversation s'est poursuivie sur Instagram.",
      image: "/insta.jpg" // Place ton image instagram dans le dossier 'public' sous le nom 'insta.jpg'
    },
    {
      id: 3,
      date: "BOLBOLTI ♥",
      title: "First nickname from me",
      description: "Le premier surnom que je t'ai donné.",
      image: "/wa.jpg" // Place ton image whatsapp dans le dossier 'public' sous le nom 'wa.jpg'
    },
    {
      id: 4,
      date: "CHAIMOUTI ♥",
      title: "First nickname for my love",
      description: "Le magnifique surnom pour mon amour.",
      image: "/wa.jpg" // J'ai utilisé la même image WhatsApp ici, tu peux la changer si besoin !
    }
  ],

  // Gallery Section (Replace with your own image URLs)
  gallery: [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=500&q=80",
    "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=500&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&q=80",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&q=80"
  ],

  // Reasons Why I Love You
  reasons: [
    "Ton sourire qui illumine mes journées",
    "Ta gentillesse infinie",
    "Ton humour qui me fait toujours rire",
    "Ton intelligence et ta curiosité",
    "Ton soutien inconditionnel",
    "Ta présence apaisante",
    "La façon dont tu me regardes",
    "Ta passion pour la vie"
  ],

  // Quiz Section Configuration
  quizConfig: {
    welcomeTitle: "❤️ Love Quiz",
    welcomeSubtitle: "Answer the questions and see how well you know us! 🥰",
    finalTitle: "🎉 Congratulations, my love!",
    finalSubtitle: "You know us better than anyone else ❤️"
  },

  // Quiz Questions
  quiz: [
    {
      question: "When was our first message?",
      options: ["Tuesday", "Monday", "Friday", "Sunday"],
      correctAnswers: [0],
      successMessage: "Correct! ❤️",
      errorMessage: "Oops... try again! 😉"
    },
    {
      question: "What do I love most about you?",
      options: ["Your eyes", "Your style", "Your smile", "Everything about you"],
      correctAnswers: [3],
      successMessage: "Yes, exactly! ✨",
      errorMessage: "Nope, think harder! 🤔"
    },
    {
      question: "What do I call you as a nickname?",
      options: ["Chaimouti", "Chima", "Chacha", "Habyby"],
      correctAnswers: [0, 3], // Multiple correct answers
      successMessage: "Spot on! 🥰",
      errorMessage: "Not quite right! 🎬"
    }
  ],

  // Secret Messages
  secretMessages: [
    {
      title: "❤️ Ouvre quand tu es triste",
      content: "N'oublie jamais que je suis là pour toi. Tes pleurs sont les miens, et je ferai tout pour ramener ton magnifique sourire. Je t'aime plus que tout."
    },
    {
      title: "❤️ Ouvre quand tu penses à moi",
      content: "Je pense à toi aussi en ce moment même. Tu es ma première pensée le matin et la dernière le soir. Tu me manques."
    },
    {
      title: "❤️ Ouvre quand tu veux sourire",
      content: "Tu te souviens de cette fois où on a ri jusqu'à en pleurer ? Chaque instant avec toi est une comédie romantique. Tu es ma joie de vivre."
    },
    {
      title: "❤️ Ouvre quand tu as besoin de motivation",
      content: "Tu es la personne la plus forte et la plus brillante que je connaisse. Tu es capable d'accomplir tout ce que tu entreprends. Crois en toi comme je crois en toi !"
    }
  ],

  // Final Surprise
  finalMessage: "Merci d'être la plus belle chose qui me soit arrivée ❤️",
  finalLetter: "Mon amour,\n\nDepuis que tu es entrée dans ma vie, tout a changé. Chaque jour passé à tes côtés est un cadeau. J'ai créé ce petit site pour te rappeler à quel point tu es spéciale pour moi, et à quel point je tiens à nous.\n\nJe t'aime de tout mon cœur, aujourd'hui et pour toujours.\n\nTon amour."
};
