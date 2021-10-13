function solution(s, n) {

    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < lowercase.length; i++) {

        for (let j = 0; j < s.length; j++) {
            if (s[j] === lowercase[i]) {
                if(s[j] === 'z' ){
                    result += lowercase[n - 1];
                }
                if(s[i] === ' ' ){
                    result += ' ';
                }
                result += lowercase[i + n];
            }

            if (s[j] === uppercase[i]) {
                if(s[j] === 'Z' ){
                    result += uppercase[n - 1];
                }
                if(s[i] === ' ' ){
                    result += ' ';
                }
                result += uppercase[i + n];
            }
        }
    }
    return result;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// s	    n	result
// "AB"	    1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"