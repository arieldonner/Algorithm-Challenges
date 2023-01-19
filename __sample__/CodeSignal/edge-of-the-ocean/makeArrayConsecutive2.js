function solution(statues) {
  const sorted = statues.sort(function (a, b) { return a - b; });
  let count = 0;
  let previous = sorted[0];
  let next = previous + 1;
  for (let i = 1; i < statues.length; i++) {
    if (sorted[i] !== next) {
      count += sorted[i] - next;
    }
    previous = sorted[i];
    next = sorted[i] + 1;
  }
  return count;
}
