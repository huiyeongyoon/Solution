function solution(a,b,c,d,e) {
    let answer = 0;
    if (b === '+'){
        answer = a + c;
    }
    if (d === '*'){
        answer = answer * e;
    }
    console.log(answer);
}

solution(4, '+', 5, '*', 9); //81