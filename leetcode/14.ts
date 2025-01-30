function longestCommonPrefix(strs: string[]): string {
  let output = '';

  for (let i: number = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    const isCommonPrefix: boolean = strs.every((str) => char === str[i]);

    if (isCommonPrefix) {
      output += char;
    } else {
      break;
    }
  }

  return output;
}
