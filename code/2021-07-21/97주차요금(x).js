
// 1 2 3 4 5 6 7 8
// 1 2 3 3 2 1 1
function solution(money, car1, car2, car3) {
    const arr = [];
    let answer = 0;
    arr.push(Math.abs(car1[0] - car1[1]))
    arr.push(Math.abs(car2[0] - car2[1]))
    arr.push(Math.abs(car3[0] - car3[1]))

    arr.sort();
    money.sort();
    console.log(arr);
    console.log(money);

    console.log(answer);
}


solution([5,3,1],[1,6],[3,5],[2,8]); // 33
//solution([10,8,6],[15,30],[25,50],[70,80]); // 480