import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, HelpCircle, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getFeedback } from '../utils/feedback';
import { parseActiveSentence } from '../utils/sentenceParser';

interface PassiveExerciseProps {
  active: string;
  passive: string;
  hint: string;
  tense: string;
  points: number;
  onNext: () => void;
  onCorrectAnswer: () => void;
}

export function PassiveExercise({ 
  active, 
  passive, 
  hint, 
  tense, 
  points,
  onNext,
  onCorrectAnswer 
}: PassiveExerciseProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setUserAnswer('');
    setShowHint(false);
    setIsCorrect(null);
    setShowAnswer(false);
    setFeedback('');
  }, [active, passive]);

  const checkAnswer = () => {
    const isAnswerCorrect = userAnswer.trim().toLowerCase() === passive.toLowerCase();
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onCorrectAnswer();
    } else {
      setFeedback(getFeedback(userAnswer, passive));
    }
  };

  const { subject, verb, object } = parseActiveSentence(active);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">{tense}</span>
          <span className="text-sm font-medium text-green-600">+{points} puan</span>
        </div>
        <h3 className="text-xl font-bold mt-1">Aktif Cümle:</h3>
        <p className="text-lg">
          <span className="bg-blue-100 px-1 rounded">{subject}</span>{' '}
          <span className="bg-green-100 px-1 rounded">{verb}</span>{' '}
          <span className="bg-red-100 px-1 rounded">{object}</span>
        </p>
        <div className="flex gap-2 mt-2 text-sm">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-blue-100 rounded mr-1"></div>
            Özne
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-green-100 rounded mr-1"></div>
            Fiil
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-red-100 rounded mr-1"></div>
            Nesne
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pasif cümleyi yazın:
        </label>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Cevabınızı buraya yazın..."
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={checkAnswer}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Kontrol Et
        </button>
        <button
          onClick={() => setShowHint(true)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <HelpCircle size={20} />
          İpucu
        </button>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <Eye size={20} />
          Doğru Cevap
        </button>
      </div>

      {isCorrect !== null && (
        <div className={`flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? (
            <>
              <CheckCircle2 size={20} />
              <span>Doğru! Harika iş! +{points} puan kazandınız!</span>
            </>
          ) : (
            <>
              <AlertCircle size={20} />
              <span>{feedback}</span>
            </>
          )}
        </div>
      )}

      {showHint && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <h4 className="font-semibold mb-2">İpucu:</h4>
          <p>{hint}</p>
        </div>
      )}

      {showAnswer && (
        <div className="mt-4 p-4 bg-green-50 rounded-md">
          <h4 className="font-semibold mb-2">Doğru Cevap:</h4>
          <p>{passive}</p>
        </div>
      )}
    </div>
  );
}