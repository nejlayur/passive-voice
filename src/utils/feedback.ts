export function getFeedback(userAnswer: string, correctAnswer: string): string {
  const userWords = userAnswer.toLowerCase().trim().split(' ');
  const correctWords = correctAnswer.toLowerCase().trim().split(' ');
  
  if (userWords.length !== correctWords.length) {
    return "Cümle uzunluğu doğru değil. Tüm gerekli kelimeleri kullandığınızdan emin olun.";
  }

  // Check for be verb errors
  const beVerbs = ['am', 'is', 'are', 'was', 'were', 'been'];
  const userBeVerb = userWords.find(word => beVerbs.includes(word));
  const correctBeVerb = correctWords.find(word => beVerbs.includes(word));
  
  if (userBeVerb !== correctBeVerb) {
    return "Yardımcı fiil (am/is/are/was/were) kullanımı hatalı.";
  }

  // Check for past participle form
  const lastVerb = userWords[userWords.findIndex(word => word === 'by') - 1];
  const correctLastVerb = correctWords[correctWords.findIndex(word => word === 'by') - 1];
  
  if (lastVerb !== correctLastVerb) {
    return "Fiilin past participle (V3) formu doğru değil.";
  }

  // Check for "by" phrase
  if (!userWords.includes('by')) {
    return "'by' edatını kullanmayı unutmayın.";
  }

  return "Cümle yapısını kontrol edin ve tekrar deneyin.";
}