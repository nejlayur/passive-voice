import React from 'react';
import { sentences } from '../data/sentences';

interface TenseListProps {
  difficulty: string;
}

export function TenseList({ difficulty }: TenseListProps) {
  const tenses = [...new Set(
    sentences
      .filter(s => s.difficulty === difficulty)
      .map(s => s.tense)
  )];

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Bu Seviyedeki Zaman Kalıpları:</h3>
      <div className="flex flex-wrap gap-2">
        {tenses.map((tense) => (
          <span
            key={tense}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tense}
          </span>
        ))}
      </div>
    </div>
  );
}