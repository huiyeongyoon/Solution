// 5개의 단어를 출력하시오.
function meetBlank(letter){
    if(letter === " ") {
        return '';
    } else {
        return letter;
    }
}

function solution(str){
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        // console.log('meetBlank', meetBlank(str[i]));
        if(meetBlank(str[i])) {
            answer += str[i];
            // console.log('if answer', answer);
            // console.log('if', meetBlank(str[i]));
        } else {
            console.log(answer);
            answer = '';
            // console.log('else answer', answer);
            // console.log('else', meetBlank(str[i]));
        }
    }
    console.log(answer);
}
solution('apple pear banana orange melon');
// apple
// pear
// banana
// orange
// melon