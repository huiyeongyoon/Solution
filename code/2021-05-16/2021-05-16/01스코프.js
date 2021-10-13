//- 선언된 변수가 함수 scope를 가진다

function varTest() {
    if (true) {
        var x = 10;
    }

    // x변수는 함수 scope를 가지기 때문에
    // varTest 함수 안에서라면
    // 어디에서든 사용 할 수 있다
    console.log(x); // 10
}

function letTest() {
    if (true) {
        let y = 10;
        console.log(y);
    }

    // y변수는 if의 블록에 속하기 때문에 사용할 수 없다
    console.log(y); // y is not defined
}

varTest();
letTest();