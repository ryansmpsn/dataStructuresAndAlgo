function mergeAlternately(word1: string, word2: string): string {
  let mergedString = '';

  const length = word1.length > word2.length ? word1.length : word2.length;

  for (let i: number = 0; i < length; i++) {
    mergedString += word1[i] || '';
    mergedString += word2[i] || '';
  }

  return mergedString;
}
