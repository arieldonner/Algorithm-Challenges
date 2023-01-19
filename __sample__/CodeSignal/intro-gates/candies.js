const { Console } = require('console');

function solution(n, m) {
  const divide = Math.floor(m / n);
  return divide * n;
}
