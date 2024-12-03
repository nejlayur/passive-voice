import React from 'react';

interface DifficultySelectorProps {
  difficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

export function DifficultySelector({ difficulty, onDifficultyChange }: DifficultySelectorProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Zorluk Seviyesi:</h3>
      <div className="flex gap-2">
        {['easy', 'medium', 'hard', 'very-hard'].map((level) => (
          <button
            key={level}
            onClick={() => onDifficultyChange(level)}
            className={`px-4 py-2 rounded-lg ${
              difficulty === level
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {level === 'easy' && 'Kolay'}
            {level === 'medium' && 'Orta'}
            {level === 'hard' && 'Zor'}
            {level === 'very-hard' && 'Çok Zor'}
          </button>
        ))}
      </div>
    </div>
  );
}