//65 90 대문자
//97 122 소문자
//if문으로 한문제
//else if로 한문제
function solution(s, n) {

    let answer = '';
    for (let i = 0; i < s.length; i++) {
        const temp = s.charCodeAt(i);
        const result = temp + n;
        const blank = temp + 1;
        const changeCase = temp - 26;

        if (65 <= result && result <= 90 || 97 <= result && result <= 122) {
            answer += String.fromCharCode([result]);
        } else if (blank === 33) {
            answer += " ";
        } else {
            if (temp === 122) {
                let lowerCase = String.fromCharCode([changeCase + n]);
                answer += lowerCase;
            }
            if (temp === 90) {
                let upperCase = String.fromCharCode([changeCase + n]);
                answer += upperCase;
            }
        }
    }
        return answer;
}

console.log(solution("A B", 1));
console.log(solution("z", 1));
console.log(solution("a B Z", 4));

// s	    n	result
// "AB"	    1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"