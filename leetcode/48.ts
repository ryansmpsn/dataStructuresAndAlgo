/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const length = matrix.length;

  // Transpose
  for (let i: number = 0; i < length; i++) {
    for (let j: number = i; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //  Reflection
  for (let i: number = 0; i < length; i++) {
    matrix[i].reverse();
  }
}
