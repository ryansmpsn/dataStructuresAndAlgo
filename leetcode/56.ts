function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let returnVal: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const latestReturnVal = returnVal[returnVal.length - 1] || null;
    const current = intervals[i];

    if (latestReturnVal && latestReturnVal[1] >= current[0]) {
      const secondVal =
        current[1] >= latestReturnVal[1] ? current[1] : latestReturnVal[1];

      returnVal[returnVal.length - 1] = [latestReturnVal[0], secondVal];
    } else {
      returnVal.push(current);
    }
  }

  return returnVal;
}
