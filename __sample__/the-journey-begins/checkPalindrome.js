function solution(inputString) {
  const arr = inputString.split('');
  const reverse = arr.reverse();
  const newStr = reverse.join('');
  if (newStr === inputString) {
    return true;
  } else {
    return false;
  }
}
