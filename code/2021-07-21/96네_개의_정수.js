
function solution(num) {
    num.sort(function (a,b) {
        return a - b;
    })

    let result = Math.abs(num[0] - num[1]);
    num.push(num[2] + result);

    if (Math.abs(num[0] - num[1]) === Math.abs(num[1] - num[2])) {
        console.log(num[3]);
    } else {
        console.log(num[3] - (num[2] - num[1]));
    }
}

solution([4,6,8]); // 10
solution([10,1,4]); // 7