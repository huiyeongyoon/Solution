
function swap(strings, i, j) {
  [strings[i], strings[j]] = [strings[j], strings[i]];
}

function gt(strings, i, j, n) {
  const word1 = strings[i];
  const word2 = strings[j];
  if (word1[n] > word2[n]) {
    swap(strings, i, j);
  }
}

function eq(strings, i, j, n) {
  const word1 = strings[i];
  const word2 = strings[j];
  if (word1[n] === word2[n]) {
    if (word1 > word2) {
      swap(strings, i, j);
    }
  }
}

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      gt(strings, i, j, n); // strings는 콜 바이 레퍼런스
      eq(strings, i, j, n);
    }
  }
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
// ['car', 'bed', 'sun']

console.log(solution(["abce", "abcd", "cdx"], 2));
// ["abcd", "abce", "cdx"]

// console.log(solution(["abcd", "ijk", "efgh"], 2));
//