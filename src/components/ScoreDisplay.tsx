import React from 'react';
import { Trophy } from 'lucide-react';
import { UserStats } from '../types';

interface ScoreDisplayProps {
  stats: UserStats;
}

export function ScoreDisplay({ stats }: ScoreDisplayProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-2">
        <Trophy className="text-yellow-500" size={24} />
        <div>
          <h3 className="text-lg font-semibold">Toplam Puan: {stats.totalScore}</h3>
          <p className="text-sm text-gray-600">Doğru Cevaplar: {stats.correctAnswers}</p>
        </div>
      </div>
    </div>
  );
}