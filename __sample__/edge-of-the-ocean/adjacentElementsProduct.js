function solution(inputArray) {
  let highest = inputArray[0] * inputArray[1];
  let previous = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * previous > highest && i !== 0) {
      highest = inputArray[i] * previous;
    }
    if (inputArray[i] * inputArray[i + 1] > highest) {
      highest = inputArray[i] * inputArray[i + 1];
    }
    previous = inputArray[i];
  }
  return highest;
}
