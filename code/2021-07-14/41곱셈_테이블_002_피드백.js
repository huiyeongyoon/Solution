function fillSpace(x, width) {
    let y = String(x);

    for (let i = y.length; i < width; i++) {
        y = ' ' + y;
    }

    return y;
}

// console.log(fillSpace(1, 3)); // '  1'
// console.log(fillSpace(12, 3)); // ' 12'
// console.log(fillSpace(123, 3)); // '123'
// console.log(fillSpace('*', 4)); // '   *'

function solution(num) {
    let row = '';
    for (let i = 0; i < num + 1; i++) {
        if (i === 0) {
            // row += '   ' + '*';
            row += fillSpace('*', 2);
        } else {
            // row += '   ' + (i);
            row += fillSpace(i, 4);
        }
    }

    console.log(row);
    for (let i = 1; i <= num; i++) {
        row = '';
        for (let j = 1; j <= num + 1; j++) {
            const space = (j === 1) ? 2 : 4;
            if (10 <= i * j && i * j < 100) {
                // row += '  ' + (i * j);
                row += fillSpace(i * j, space);
            } else{
                // row += '   ' + (i * j);
                row += fillSpace(i * j, space);
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