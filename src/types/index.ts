export interface Score {
  points: number;
  timestamp: number;
}

export interface UserStats {
  totalScore: number;
  correctAnswers: number;
  scores: Score[];
}

export interface Sentence {
  id: number;
  active: string;
  passive: string;
  tense: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'very-hard';
  hint: string;
  points: number;
}