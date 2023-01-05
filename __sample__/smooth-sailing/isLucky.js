function solution(n) {
  const string = n.toString();
  const half = string.length / 2;
  let first = 0;
  let second = 0;
  for (let i = 0; i < half; i++) {
    first += Number(string[i]);
  }
  for (let j = half; j < string.length; j++) {
    second += Number(string[j]);
  }
  if (first === second) {
    return true;
  } else {
    return false;
  }
}
