const { slice } = require('lodash');

function solution(picture) {
  let long = '**';
  const newArr = [];
  for (let i = 0; i < picture[0].length; i++) {
    long += '*';
  }
  for (let j = 0; j < picture.length; j++) {
    const sliced = '*' + picture[j].slice(0) + '*';
    newArr.push(sliced);
  }
  newArr.unshift(long);
  newArr.push(long);
  return newArr;
}
