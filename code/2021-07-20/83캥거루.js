function solution(a,b,c) {
    if (b-a < c-b) {
        console.log(c - b - 1);
    } else {
        console.log(b - a -1);
    }
}

solution(2,3,5); // 1
solution(3,5,9); // 3
