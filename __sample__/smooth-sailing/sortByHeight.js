function solution(a) {
  const newArr = [];
  const copy = a.slice(0);
  const sorted = copy.sort(function (a, b) { return a - b; });
  const noTree = sorted.filter(number => number !== -1);
  const treeLoc = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treeLoc.push(i);
    }
  }
  for (let j = 0; j < a.length; j++) {
    if (treeLoc.includes(j)) {
      newArr.push(-1);
    } else {
      newArr.push(noTree.shift());
    }
  }
  return newArr;
}
