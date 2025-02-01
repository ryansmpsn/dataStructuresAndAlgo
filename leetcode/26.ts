function removeDuplicates(nums: number[]): number {
  let unique = 1;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== nums[unique - 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return unique;
}
