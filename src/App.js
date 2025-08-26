import React, { useState } from 'react';

// --------------- Horse Data ---------------
const horseCouncil = [
  {
    name: 'Horse of Agreement and Affirmation',
    verdict: 'Yes, definitely.',
    imageUrl: 'https://media1.tenor.com/m/6aKl2CLA_PwAAAAd/horse-nodding.gif',
  },
  {
    name: 'Horse of Absolute Disapproval and Discouragement',
    verdict: 'No, absolutely not.',
    imageUrl: 'https://media.tenor.com/ZI4MnuJ5C1wAAAAM/horse-no.gif',
  },
  {
    name: 'Horse of Suspicion and Distrust',
    verdict: 'Uhm, you sure about that?',
    imageUrl: 'https://media.tenor.com/NVVUoYe-0JIAAAAM/side-eye-horse.gif',
  },
  {
    name: 'Horse of Shock and Astonishment',
    verdict: "Don't count on it.",
    imageUrl: 'https://media.tenor.com/KyzbdYCzs-IAAAAM/horse-riding-surprised-face.gif',
  },
  {
    name: 'Horse of Absolute Joy and Happiness',
    verdict: "Yes, yes, YES.",
    imageUrl: 'https://media.tenor.com/7LbpM-q_QZoAAAAM/i-have-something-in-my-face-viralhog.gif',
  },
  {
    name: 'Horse of Judgement and Gossip',
    verdict: "Side eye...",
    imageUrl: 'https://media.tenor.com/MPb8dzSrYlgAAAAM/f%C3%A4rd-pferd.gif',
  },
];

export default function App() {
  const [question, setQuestion] = useState('');
  const [currentHorse, setCurrentHorse] = useState({
    name: 'The Council Awaits',
    verdict: 'Type your question and seek the wisdom of the horse council.',
    imageUrl: 'https://placehold.co/600x338/1e293b/94a3b8?text=Your+Destiny+Awaits',
  });
  const [isThinking, setIsThinking] = useState(false);

  const askTheCouncil = () => {
    if (isThinking) return;

    setIsThinking(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * horseCouncil.length);
      setCurrentHorse(horseCouncil[randomIndex]);
      setIsThinking(false);
    }, 2000);
  };

  return (
      <div className="bg-slate-900 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700 text-center">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-6">
            Consult the Council of Horses
          </h1>

          {/* Horse Display */}
          <div className="aspect-[4/3] mb-6 rounded-lg overflow-hidden border-2 border-slate-700 transition-all duration-300">
          <img
                src={currentHorse.imageUrl}
                alt={currentHorse.name}
                className={`w-full h-full object-cover transition duration-500 ${
                    isThinking ? 'scale-110 blur-sm' : 'scale-105 blur-0'
                }`}
            />
          </div>

          {/* Verdict */}
          <div className="bg-slate-900 p-4 rounded-lg min-h-[100px] flex flex-col justify-center items-center mx-auto max-w-md">
            <h2 className="text-xl font-semibold mb-1 text-white">{currentHorse.name}</h2>
            <p
                className={`text-lg text-sky-300 transition-opacity duration-500 ${
                    isThinking ? 'opacity-0' : 'opacity-100'
                }`}
            >
              {isThinking ? 'The council is deliberating...' : currentHorse.verdict}
            </p>
          </div>

          {/* Input + Button */}
          <div className="mt-8 mx-auto max-w-md">
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your yes/no question..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-slate-400 text-center"
            />
            <button
                onClick={askTheCouncil}
                disabled={!question || isThinking}
                className="w-full mt-4 flex items-center justify-center bg-sky-600 text-white font-bold py-3 px-4
                   rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500
                   focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300
                   disabled:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isThinking ? 'Consulting...' : 'Ask the Council'}
            </button>
          </div>
        </div>
      </div>
  );
}
