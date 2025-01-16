function findDuplicates(nums: number[]): number[] {
  const abs = Math.abs;
  const duplicate = [];

  for (let i = 0; i < nums.length; i++) {
    const checkNumber = abs(nums[i]);

    // check if number is negative
    if (nums[checkNumber - 1] < 0) {
      duplicate.push(abs(nums[i]));
    } else {
      // Mark as seen
      nums[checkNumber - 1] *= -1;
    }
  }

  return duplicate;
}
