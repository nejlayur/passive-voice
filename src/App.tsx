import React, { useState, useEffect } from 'react';
import { sentences } from './data/sentences';
import { PassiveExercise } from './components/PassiveExercise';
import { DifficultySelector } from './components/DifficultySelector';
import { TenseList } from './components/TenseList';
import { PassiveRules } from './components/PassiveRules';
import { ScoreDisplay } from './components/ScoreDisplay';
import { GraduationCap } from 'lucide-react';
import { UserStats } from './types';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<UserStats>({
    totalScore: 0,
    correctAnswers: 0,
    scores: []
  });

  const filteredSentences = sentences.filter((s) => s.difficulty === difficulty);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSentences.length);
  };

  const handleCorrectAnswer = (points: number) => {
    setStats(prev => ({
      totalScore: prev.totalScore + points,
      correctAnswers: prev.correctAnswers + 1,
      scores: [...prev.scores, { points, timestamp: Date.now() }]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">
              İngilizce Aktif-Pasif Cümle Alıştırması
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <ScoreDisplay stats={stats} />
        
        <DifficultySelector
          difficulty={difficulty}
          onDifficultyChange={setDifficulty}
        />
        
        <TenseList difficulty={difficulty} />

        {filteredSentences.length > 0 ? (
          <>
            <PassiveExercise 
              {...filteredSentences[currentIndex]} 
              onNext={handleNext}
              onCorrectAnswer={() => handleCorrectAnswer(filteredSentences[currentIndex].points)}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Sonraki Soru
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">
            Bu zorluk seviyesinde henüz soru bulunmamaktadır.
          </p>
        )}

        <PassiveRules />
      </main>
    </div>
  );
}

export default App;