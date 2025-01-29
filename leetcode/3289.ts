function getSneakyNumbers(nums: number[]): number[] {
  const duplicates = [];
  const seen = [];

  for (let i = 0; i < nums.length; i++) {
    if (seen.includes(nums[i]) && !duplicates.includes(nums[i])) {
      duplicates.push(nums[i]);
    } else {
      seen.push(nums[i]);
    }
  }

  return duplicates;
}
