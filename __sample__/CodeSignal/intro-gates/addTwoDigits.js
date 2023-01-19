function solution(n) {
  const string = n.toString();
  const arr = string.split('');
  return Number(arr[0]) + Number(arr[1]);
}
