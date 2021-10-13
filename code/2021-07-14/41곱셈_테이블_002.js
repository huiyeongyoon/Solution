function solution(num) {
    let row = '';
    for (let i = 0; i < num + 1; i++) {
        if (i === 0) {
            row += '   ' + '*';
        } else {
            row += '   ' + (i);
        }
    }

    console.log(row);
    for (let i = 1; i <= num; i++) {
        row = '';
        for (let j = 1; j <= num + 1; j++) {
            if (10 <= i * j && i * j < 100) {
                row += '  ' + (i * j);
            } else{
                row += '   ' + (i * j);
            }
        }

        console.log(row);
    }
}


// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
solution(4);

//* 1 2 3 4
// 1 1 2 3 4
// 2 2 4 6 8
// 3 3 6 9 12
// 4 4 8 12 16


//   1   2   3   4
// 2 4 6 8
// 3 6 9 12
// 4 8 12 16