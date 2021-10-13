let a = 5;
let b = 0;
let result = '';
let i,j;
for (i = 0; i < a; i++) { //i가 0, 1, 2, 3, 4 일때 총 5바퀴 돌고
        result = '';
        b += 1;
    for (j = 6; j > b; j--) {
        // j는 6부터 시작하여 1씩 줄어 5 4 3 2 1  바퀴수
        // b의 값은 1씩 늘어 1,2,3,4,5 바퀴수
        result += '*';
    }
    console.log(result);
}

