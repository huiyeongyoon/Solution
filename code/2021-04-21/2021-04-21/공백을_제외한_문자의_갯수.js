// 공백을 제외한 문자의 갯수는?
const str = 'The next day the little prince came back';
let answer = 0;
for (let i = 0; i < str.length; i++) {
    if(str[i] !== " ") { //문자 하나하나를 비교한다
        answer += 1;
    }
    
}
console.log(answer);
