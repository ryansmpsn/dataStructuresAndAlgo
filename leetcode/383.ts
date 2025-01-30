function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineChars = new Map<string, number>();

  for (const char of magazine) {
    magazineChars.set(char, magazineChars.get(char) + 1 || 1);
  }

  for (const char of ransomNote) {
    const count = magazineChars.get(char);

    if (magazineChars.get(char)) {
      magazineChars.set(char, count - 1);
    } else {
      return false;
    }
  }

  return true;
}
