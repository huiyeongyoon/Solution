// 0  1  2  3 4
// 빨 파 빨 파 빨
// 1 3 5 7 9
function solution(num) {

    let red = 0;
    let blue = 0;
    let result = 1;

    for (let i = 0; i < Math.sqrt(num); i++) {
        if (i % 2 === 1) {
            red += result;
            // console.log('red', result);
        } else {
            blue += result;
            // console.log('blue', result);
        }
        result += 2;
    }
    // console.log(red, blue);

    console.log(Math.abs(red - blue));
}

solution(25); // 5