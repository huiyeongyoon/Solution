function solution(s, n) {

  let answer = '';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < lowercase.length; i++) {
    for (let j = 0; j < s.length; j++) {

      console.log('s[j] === lowercase[i]', i, j, s[j] === lowercase[i]);
      if (s[j] === lowercase[i]) {
        console.log('s[j]', s[j]);
        if(s[j] === 'z' ){
          console.log('lowercase[n - 1] 1', lowercase[n - 1]);
          result += lowercase[n - 1];
          console.log('result 1', result);
          console.log('lowercase[n - 1] 2', lowercase[n - 1]);
        }

        console.log('s[j]', s[j]);
        if(s[j] === ' ' ){
          result += ' ';
          console.log('result 2', result);
        }
        console.log('lowercase[i + n] 1', lowercase[i + n]);
        result += lowercase[i + n];
        console.log('result 3', result);
        console.log('lowercase[i + n] 2', lowercase[i + n]);

      }

      // if (s[j] === uppercase[i]) {
      //   if(s[j] === 'Z' ){
      //     result += uppercase[n - 1];
      //   }
      //   if(s[i] === ' ' ){
      //     result += ' ';
      //   }
      //   result += uppercase[i + n];
      // }
    }
  }

  return result;
}

// console.log(solution("AB", 1));
console.log(solution("z", 1));
// console.log(solution("a B z", 4));

// s       n   result
// "AB"       1   "BC"
// "z"       1   "a"
// "a B z"   4   "e F d"