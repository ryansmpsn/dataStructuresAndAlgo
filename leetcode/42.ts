function trap(height: number[]): number {
  let total: number = 0;
  let l: number = 0,
    r: number = height.length - 1; // Two pointers, left (l) and right (r)
  let lmax: number = 0,
    rmax: number = height[r]; // Initialize max heights for left and right

  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] < lmax) {
        total += lmax - height[l];
      } else {
        lmax = height[l];
      }
      l++;
    } else {
      if (height[r] < rmax) {
        total += rmax - height[r];
      } else {
        rmax = height[r];
      }
      r--;
    }
  }
  return total;
}
