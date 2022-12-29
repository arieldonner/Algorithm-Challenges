function solution(n) {
  if (n === 1) {
    return 1;
  }
  let previous = 1;
  for (let i = 2; i <= n; i++) {
    previous = previous + 4 * (i - 1);
  }
  return previous;
}

// 1, 5, 13, 25, 41
// +4  +8 +12 + 16
