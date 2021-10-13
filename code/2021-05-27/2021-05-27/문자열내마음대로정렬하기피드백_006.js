
function swap(strings, i, j) {
  [strings[i], strings[j]] = [strings[j], strings[i]];
}

function gt(a, b) {
  // return a > b ? true : false;
  if (a > b) {
    return true;
  }
  return false;
}

function eq(a, b) {
  // return a === b ? true : false;
  if (a === b) {
    return true;
  }
  return false;
}

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      const word1 = strings[i];
      const word2 = strings[j];

      if (gt(word1[n], word2[n])) {
        swap(strings, i, j);
      }

      if (eq(word1[n], word2[n])) {
        if (gt(word1, word2)) {
          swap(strings, i, j);
        }
      }
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