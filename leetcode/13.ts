function romanToInt(s: string): number {
  let output: number = 0;

  const compareChars = (comp: string, char1: string, char2: string) => {
    return comp === char1 || comp === char2 ? -1 : 1;
  };

  for (let i: number = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        output += 1 * compareChars(s[i + 1], 'V', 'X');
        break;
      case 'V':
        output += 5;
        break;
      case 'X':
        output += 10 * compareChars(s[i + 1], 'L', 'C');
        break;
      case 'L':
        output += 50;
        break;
      case 'C':
        output += 100 * compareChars(s[i + 1], 'D', 'M');
        break;
      case 'D':
        output += 500;
        break;
      case 'M':
        output += 1000;
        break;
    }
  }

  return output;
}
