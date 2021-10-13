//홀수는 제곱해서 더하고 짝수는 제곱해서 빼는 프로그램

const solution = (number) => {

    let answer = 0;
    for (let i = 1; i < number + 1; i++) {
        if (i % 2 === 0) {
            answer += i * (-i);
            //console.log(answer);
        } else {
            answer += i * i;
            //console.log('answer', answer);
        }
    }
    console.log(answer);

}


solution(10); //-55