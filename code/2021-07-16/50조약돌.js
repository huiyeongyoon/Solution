function solution(pebbles) {

    let row = 0; //위아래 (세로)
    let column = 0; //왼쪽오른쪽 (가로)
    let min = 102;

    for (let i = 1; i <= pebbles; i++) {
        for (let j = 1; j <= pebbles; j++) {
            if ( i * j >= pebbles)
                if (min > i + j || min === i + j) {
                    min = i + j;
                    row = i;
                    column = j;
                    //console.log(min);
                }
        }
    }

    console.log(column, row);
}



solution(2);   // 1 2
solution(5);   // 2 3
solution(14);  // 3 5