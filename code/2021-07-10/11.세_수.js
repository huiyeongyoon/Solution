function solution(a,b,c) {

    const arr = ['+','-','*','/','='];

    if (arr[0] === '+') {
        if (a + b === c) {
            console.log(a, '+', b, '=', c);
        }
    }

    if (arr[1] === '-') {

    }

    if (arr[2] === '*') {

    }

    if (arr[3] === '/') {
        if (a === b / c) {
            console.log(a, '=', b, '/', c);
        }
    }
}

solution(5,3,8); //5+3=8
solution(5,15,3); //5=15/3