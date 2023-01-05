function solution(s1, s2) {
  let count = 0;
  let longest;
  let shorter;
  if (s1.length > s2.length) {
    longest = s1.split('');
    shorter = s2.split('');
  } else {
    longest = s2.split('');
    shorter = s1.split('');
  }
  for (let i = 0; i < longest.length; i++) {
    if (shorter.includes(longest[i])) {
      count++;
      shorter.splice(shorter.indexOf(longest[i]), 1);
    }
  }
  return count;
}
