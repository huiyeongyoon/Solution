
function swap(strings, i, j) {
  [strings[i], strings[j]] = [strings[j], strings[i]];
}

function gt(a, b, strings, i, j) {
  if (a > b) {
    swap(strings, i, j);
  }
}

function eq(a, b, strings, i, j, word1, word2) {
  if (a === b) {
    if (word1 > word2) {
      swap(strings, i, j);
    }
  }
}

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      const word1 = strings[i];
      const word2 = strings[j];

      gt(word1[n], word2[n], strings, i, j); // strings는 콜 바이 레퍼런스
      eq(word1[n], word2[n], strings, i, j, word1, word2);
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