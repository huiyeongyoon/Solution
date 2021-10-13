function random(n) {
    return Math.floor( Math.random() * n);
}

function createNumber(n) {
    const arr = [];
// console.log(arr);

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < n / 2; i++) {
            arr.push(j + 1);
        }
    }

    for (let i = 0; i < 100; i++) {
        const r1 = random(arr.length);
        const r2 = random(arr.length);

        const temp = arr[r1];
        arr[r1] = arr[r2];
        arr[r2] = temp;
    }

    return arr;
}

//카드는 20장 까지
//같은카드는 무조건 2개 까지만 존재가능
//카드선택 2번하며 같을경우 뒤집혀진상태유지 아닐경우 다시 돌아간다
//카드가 뒤집혀져있어야한다
//다맞추면 완성출력

//카드이미지 만들어주는애 최대 20까지가능
const times = document.querySelector('#times');
const startButton = document.querySelector('.start-btn');
startButton.addEventListener('click',function (event){

    //왜 문자열만 가능하지??
    if (times.value === "0" || times.value >= 21) {
        console.log('카드 20개 이하만 가능 (0~20으로 입력해주세요');
    } else if (times.value % 2 !== 0) {
        console.log('짝수만 가능');
    } else if (times.value <= 20  && times.value > 0){
        //console.log('카드생성',times.value);
        numberOfCard(times.value);
    } else {
        console.log('에러');
    }
});

//1부터~10까지  랜덤으로 돌려서 이미생성되어져있으면 튕기고 생성안되어져있으면 카드생성
function numberOfCard(inputCount) {
    // cardBox 초기화하는 부분
    const cardBox = document.querySelector('#cardBox')
    cardBox.textContent = '';

    const shuffled = createNumber(inputCount);
    console.log('shuffled', shuffled);

    for (let i = 0; i < shuffled.length; i++) {
        const img = document.createElement('img');
        img.src = `../images/${shuffled[i]}.gif`;
        img.classList.add('randomCard');
        cardBox.appendChild(img);
    }
    const selectedCard = document.querySelector('#cardBox');
    selectedCard.addEventListener('click', clickHandler);
    let compareCard = []; //왜 여기에다가 선언해야되?
    // 다른 1번카드를 눌러야지만 정답 처리가된다 (뭔가넣어줘야되)
    // 한번 정답처리된 카드는 무시된다 (타겟이 안되게 하던가... 리스트에서 지우던가...)
    // 모든 카드를 찾으면 게임이 종료된다 (모든카드가 타겟이 안되거나 리스트에서 지워지면...)
    // 카드 만들어질떄 뒤집어져 있어야한다..
    // 눌르면 카드가 숫자모양으로 바뀌어야한다
    function clickHandler(event) {
        compareCard.push(event.target);
        for (let i = 0; i < compareCard.length; i++) {
            if (compareCard.length % 2 === 0) {
                if (compareCard[i].src === compareCard[i].src) {
                    console.log('정답');
                }
            }
        }
    }
}
