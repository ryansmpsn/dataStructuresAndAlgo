function findClosestNumber(nums: number[]): number {
  let closestNumber: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const currentNumber: number = Math.abs(nums[i]);

    if (currentNumber === Math.abs(closestNumber) && nums[i] > closestNumber) {
      closestNumber = nums[i];
    } else if (currentNumber < Math.abs(closestNumber)) {
      closestNumber = nums[i];
    }
  }

  return closestNumber;
}
