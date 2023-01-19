function solution(divisor, bound) {
  let largest = 1;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) {
      largest = i;
    }
  }
  return largest;
}
