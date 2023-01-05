function solution(matrix) {
  let sum = 0;
  const exclude = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        exclude.push(j);
      } else if (matrix[i][j] !== 0 && !exclude.includes(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
