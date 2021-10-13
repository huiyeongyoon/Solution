function solution(a,b,c) {

    if (a + b === c) {
        console.log(a, '+', b, '=', c);
    }

    if (a === b / c) {
        console.log(a, '=', b, '/', c);
    }
}

solution(5,3,8); //5+3=8
solution(5,15,3); //5=15/3