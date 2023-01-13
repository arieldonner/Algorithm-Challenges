function solution(a, b) {
  const toSwitch = [];
  const swapPlace = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      const sliced = b.slice(i, i + 1).join();
      const toNum = Number(sliced);
      toSwitch.push(toNum);
      swapPlace.push(i);
    }
  }
  if (swapPlace.length < 3 && swapPlace.length !== 0) {
    b.splice(swapPlace[0], 1, toSwitch[1]);
    console.log(b);
    b.splice(swapPlace[1], 1, toSwitch[0]);
  }
  let result = true;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[j]) {
      result = false;
    }
  }
  return result;
}
