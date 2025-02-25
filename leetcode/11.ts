function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l <= r) {
    const currentCapacity = Math.min(height[l], height[r]) * (r - l);

    if (currentCapacity > max) {
      max = currentCapacity;
    }

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
}
