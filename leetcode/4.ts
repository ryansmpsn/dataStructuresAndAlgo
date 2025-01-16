function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const half = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[half] + mergedArray[half - 1]) / 2;
  } else {
    return mergedArray[half];
  }
}
