function solution(inputArray) {
  let longest = 0;
  const longestStr = [];
  for (let i = 0; i < inputArray.length; i++) {
    const length = inputArray[i].length;
    if (length > longest) {
      longest = length;
    }
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longest) {
      longestStr.push(inputArray[j]);
    }
  }
  return longestStr;
}
