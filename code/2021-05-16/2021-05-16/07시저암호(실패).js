//65 90 대문자
//97 122 소문자
//if문으로 한문제
//else if로 한문제
function solution(s, n) {

    let answer = '';
    for (let i = 0; i < s.length; i++) {
        result = s.charCodeAt(i) + n;
        blank = s.charCodeAt(i) + 1;
        Lowerz =  s.charCodeAt(i) === 122;
        UpperZ =  s.charCodeAt(i) === 90;

        if(65 <= result && result <= 89 ) {
            answer += String.fromCharCode([result]);
        }

        if(blank === 33) {
            answer += " ";
        }

        if(Lowerz) {
            answer += "a";
        }

        if(UpperZ) {
            answer += "A";
        }

    }

        return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// s	    n	result
// "AB"	    1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"