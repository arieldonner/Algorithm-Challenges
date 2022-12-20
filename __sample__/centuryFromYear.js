function solution(year) {
  const string = year.toString();
  if (string.length < 3) {
    return 1;
  } else if (string.length < 4) {
    if (string[2] === '0') {
      return Number(string[0]);
    } else {
      return Number(string[0]) + 1;
    }
  } else {
    if (string[3] === '0') {
      return Number(string[0] + string[1]);
    } else {
      const secNum = Number(string[1]) + 1;
      if (secNum === 10) {
        return Number(Number(string[0]) + 1 + '0');
      }
      const add = string[0] + secNum;
      return Number(add);
    }
  }
}

/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc. */
