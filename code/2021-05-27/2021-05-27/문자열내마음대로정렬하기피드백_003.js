function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {

      const word1 = strings[i];
      const word2 = strings[j];

      // console.log(i, j, strings[i], strings[j]);
      if (word1[n] > word2[n]) {
        // (sun > bed) -> (u > e)
        [strings[i], strings[j]] = [strings[j], strings[i]];
      } else if (word1[n] === word2[n]) {
        console.log(i, j, word1, word2);

        if (word1 > word2) {
          [strings[i], strings[j]] = [strings[j], strings[i]];
        }
      }
    }
  }
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
// ['car', 'bed', 'sun']

// console.log(solution(["abce", "abcd", "cdx"], 2));
// ["abcd", "abce", "cdx"]

// console.log(solution(["abcd", "ijk", "efgh"], 2));
//