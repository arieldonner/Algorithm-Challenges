function solution(min1, min2_10, min11, s) {
  let minutes = 0;
  let cents = s;
  if (cents >= min1) {
    cents = s - min1;
    minutes += 1;
  } else {
    return 0;
  }
  for (let i = 1; i < 10; i++) {
    if (cents > 0 && cents - min2_10 > 0) {
      minutes += 1;
      cents = cents - min2_10;
    } else {
      return minutes;
    }
  }
  const last = Math.floor(cents / min11);
  minutes += last;
  return minutes;
}
