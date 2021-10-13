// 3명에게 동시2장까지 구울수있는 팬
// 2분구워야 완성

function solution(n,k) {

    if (n <= k) {
        console.log('2');
    }
    else if (n === k) {
        console.log('2');
    } else {
        console.log(n / k * 2);

    }
}

solution(3,2); // 3