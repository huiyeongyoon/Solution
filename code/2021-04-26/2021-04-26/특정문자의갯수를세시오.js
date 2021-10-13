// 아래 문자열에서 b와 공백의 갯수를 구한 후 곱한 값은 몇인가?
const str = 'abc def abc def abc def abc def abc def abc def';

let result;
let bCount = 0;
let emptyCount = 0;

//for문은 위str에 문자열 길이만큼 실행
for (let i = 0; i < str.length; i++) {  //i가0으로 시작한다 i가1일때 bCount는 0이다 i가 9일떄 bcount는 1이다
    //console.log(str[i]) 내생각에는 str 의 문자열 전체가 반응할줄 알았는데 알고보니 하나씩 실행된다.. (*항상 콘솔 찍어서 확인해보고 로직 생각해본다*)
    if(str[i] === "b") {
        bCount += 1;
    } 
    if(str[i] === " ") {
        emptyCount += 1;
    }

    //ELSE로 될까? (else로하면 b말고 나머지 값이 곱해진다)
}

console.log(bCount); //b의 갯수 6개 왜? if문 6번 실행되니까
console.log(emptyCount); // 11개 왜? if문 11번 실행되니까
result = bCount * emptyCount;
console.log(result);

