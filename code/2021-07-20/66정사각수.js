function solution(min, max) {

    const square = [];
    let x = 0;
    for (let i = 1; i < max; i += 2) {
        x += i;
        if (x >= min && x <= max) {
            // console.log(x);
            square.push(x);
        }
    }

    let sum = 0;
    for (let i = 0; i < square.length; i++) {
        sum += square[i];
    }

    if (square.length > 0) {
        console.log(sum);
        console.log(square[0]);
    } else {
        console.log(-1);
    }
}

solution(1,100); // 385 1
solution(50,60); // -1