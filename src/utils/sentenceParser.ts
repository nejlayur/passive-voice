export function parseActiveSentence(sentence: string): {
  subject: string;
  verb: string;
  object: string;
} {
  const words = sentence.split(' ');
  let verbIndex = -1;
  
  // Common verbs to help identify the verb position
  const commonVerbs = ['is', 'are', 'was', 'were', 'have', 'has', 'had', 'will', 'must', 'can', 'could', 'should', 'would', 'might'];
  
  // Find the verb position
  for (let i = 0; i < words.length; i++) {
    if (commonVerbs.includes(words[i].toLowerCase()) || 
        (i > 0 && words[i-1].toLowerCase() === 'will') ||
        (i > 0 && words[i-1].toLowerCase() === 'have')) {
      verbIndex = i;
      break;
    }
  }
  
  // If no auxiliary verb found, assume the second word is the main verb
  if (verbIndex === -1) {
    verbIndex = 1;
  }
  
  const subject = words.slice(0, verbIndex).join(' ');
  const verb = words.slice(verbIndex, verbIndex + (words[verbIndex-1]?.toLowerCase() === 'will' ? 2 : 1)).join(' ');
  const object = words.slice(verbIndex + (words[verbIndex-1]?.toLowerCase() === 'will' ? 2 : 1)).join(' ');
  
  return { subject, verb, object };
}