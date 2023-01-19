function solution(a) {
  const total = [];
  const team1 = [];
  const team2 = [];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < a.length; i += 2) {
    team1.push(a[i]);
  }
  for (let j = 1; j < a.length; j += 2) {
    team2.push(a[j]);
  }
  for (let k = 0; k < team1.length; k++) {
    sum1 += team1[k];
  }
  for (let l = 0; l < team2.length; l++) {
    sum2 += team2[l];
  }
  total.push(sum1);
  total.push(sum2);
  return total;
}
