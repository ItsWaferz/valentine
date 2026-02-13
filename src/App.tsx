import { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  answers: {
    text: string;
    nextId: string;
  }[];
  subtitle?: string;
}

const flowchart: Record<string, Question> = {
  q1: {
    id: 'q1',
    question: 'Will you be my Valentine?',
    subtitle: 'Gândește-te bine la răspuns...',
    answers: [
      { text: 'Daaa!', nextId: 'ending' },
      { text: 'Nu cred..', nextId: 'q2' },
    ],
  },
  q2: {
    id: 'q2',
    question: 'Ți-a alunecat cumva degetul?',
    subtitle: 'E ok, fii atenă acum :)',
    answers: [
      { text: 'Daaaa!', nextId: 'ending' },
      { text: 'Tot nu :(', nextId: 'q3' },
    ],
  },
  q3: {
    id: 'q3',
    question: 'Cumva nu merge butonul de sus?',
    subtitle: 'O să pun butonul DA jos atunci',
    answers: [
      { text: 'Nu era butonul..', nextId: 'q4' },
      { text: 'Daaaaa!', nextId: 'ending' },
    ],
  },
  q4: {
    id: 'q4',
    question: 'Nici daca-ți zic ca am bomboane?',
    subtitle: 'Sunt foaarte bune',
    answers: [
      { text: 'Nu mai mananc zahar', nextId: 'q5' },
      { text: 'Daa, m-ai convins!', nextId: 'ending' },
    ],
  },
  q5: {
    id: 'q5',
    question: 'Nici tu nu te crezi :) Shaorma?',
    subtitle: '🌯🌯🌯',
    answers: [
      { text: 'Daaaa🤤!', nextId: 'ending' },
      { text: 'M-am apucat de sală..', nextId: 'q6' },
    ],
  },
  q6: {
    id: 'q6',
    question: 'Et si je vous posais la question en français?',
    subtitle: 'Veux-tu être mon Valentine?',
    answers: [
      { text: 'Oui!!', nextId: 'ending' },
      { text: 'Non..', nextId: 'q7' },
    ],
  },
  q7: {
    id: 'q7',
    question: 'Și Blacky ar vrea, sa știi!',
    subtitle: 'Ham Ham',
    answers: [
      { text: 'Woof! (Da)', nextId: 'ending' },
      { text: 'Wau! (Nu)', nextId: 'q8' },
    ],
  },
  q8: {
    id: 'q8',
    question: 'Bine atunci.. Închide ochii și alege ceva',
    subtitle: 'Nu trișa!',
    answers: [
      { text: 'Da!', nextId: 'ending' },
      { text: 'Sigur!', nextId: 'ending' },
      { text: 'A 2-a varianta', nextId: 'ending' },
      { text: 'A 3-a varianta', nextId: 'ending' },
      { text: 'Niu', nextId: 'q9' },
    ],
  },
  q9: {
    id: 'q9',
    question: 'Ai tișat!! MEG!!',
    subtitle: 'Hai că te ajut eu',
    answers: [
      { text: 'Da!! Doar am vrut să te oftic 💖💖🥹', nextId: 'ending' },

    ],
  },
};

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState('q1');
  const [isCompleted, setIsCompleted] = useState(false);
  const [visitedQuestions, setVisitedQuestions] = useState<string[]>(['q1']);

  const currentQuestion = flowchart[currentQuestionId];

  const handleAnswer = (nextId: string) => {
    if (nextId === 'ending') {
      setIsCompleted(true);
    } else {
      setCurrentQuestionId(nextId);
      setVisitedQuestions([...visitedQuestions, nextId]);
    }
  };

  if (isCompleted) {
    const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 2.5,
    }));

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute text-4xl animate-confetti"
              style={{
                left: `${piece.left}%`,
                top: '-20px',
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
              }}
            >
              {['❤️', '💕', '💖', '✨', '🎉', '💝'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center relative z-10 transform animate-scale-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-6">
            YAAAAY! 🎉
          </h1>
          <p className="text-2xl text-gray-700 mb-4 leading-relaxed font-semibold">
            Știam eu că o să spui da!
          </p>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Dacă aș avea 100 de inimi tot nu ar fi suficiete pentru toată iubirea pe care ți-o port
          </p>
          <div className="space-y-4 mb-10">
            <div className="text-5xl animate-bounce flex justify-center gap-2">
              <span>❤️</span>
              <span>💕</span>
              <span>💖</span>
            </div>
            <p className="text-lg text-gray-500 italic">
              Te iubesc foarte mult, Lulu! 💝
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg"
          >
            Redeschide ❤️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              opacity: Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full relative z-10 transform animate-scale-in">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-4">
            <p className="text-sm text-pink-600 font-semibold">
              Întrebarea {visitedQuestions.length} din aventura noastră 💫
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-3 animate-fade-in leading-normal py-2">
  {currentQuestion.question}
</h1>
          {currentQuestion.subtitle && (
            <p className="text-lg text-gray-600 italic animate-fade-in">
              {currentQuestion.subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4 mt-10">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.nextId)}
              className="w-full bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-between group"
            >
              <span>{answer.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            "Kiss love" 
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
