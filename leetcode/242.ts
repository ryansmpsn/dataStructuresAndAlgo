function isAnagram(s: string, t: string): boolean {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (const char of t) {
    tMap.set(char, tMap.get(char) + 1 || 1);
  }

  for (const char of s) {
    sMap.set(char, sMap.get(char) + 1 || 1);
  }

  if (sMap.size !== tMap.size) {
    return false;
  }

  for (let [key, val] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== val) {
      return false;
    }
  }

  return true;
}
