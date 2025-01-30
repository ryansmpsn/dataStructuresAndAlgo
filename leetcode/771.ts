function numJewelsInStones(jewels: string, stones: string): number {
  const jewlSet = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (jewlSet.has(stone)) {
      count++;
    }
  }
  return count;
}
