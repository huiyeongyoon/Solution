function solution(price, burgers, totalPrice) {

    let unpaid = 0;
    let answer = 0;
    unpaid = price * burgers;

    if (unpaid > totalPrice) {
        answer = Math.abs(totalPrice - unpaid);
    }

    console.log(answer);
}

solution(500, 5, 2000); // 500
solution(1000, 3, 5000); // 0

