function containsDuplicate(nums: number[]): boolean {
  let numset = new Set();

  for (let num of nums) {
    if (numset.has(num)) {
      return true;
    }
    numset.add(num);
  }
  return false;
}
