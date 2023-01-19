function solution(n) {
  const hours = Math.floor(n / 60);
  const minutes = n - (hours * 60);
  const stringH = hours.toString().split('');
  const stringM = minutes.toString().split('');
  let sum = 0;
  for (let i = 0; i < stringH.length; i++) {
    sum += Number(stringH[i]);
  }
  for (let j = 0; j < stringM.length; j++) {
    sum += Number(stringM[j]);
  }
  return sum;
}
