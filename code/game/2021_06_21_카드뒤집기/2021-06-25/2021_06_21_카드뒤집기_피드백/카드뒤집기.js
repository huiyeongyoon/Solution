function showingCard(a,b) {
    setTimeout(function (){
        a.children[0].style.visibility = "hidden";
        b.children[0].style.visibility = "hidden";
    },300);
}

function random(n) {
    return Math.floor( Math.random() * n);
}

function createNumber(n) {
    const arr = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < n / 2; j++) {
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

    for (let i = 0; i < shuffled.length; i++) {
        const img = document.createElement('img');
        img.src = `../images/${shuffled[i]}.gif`;
        img.classList.add('randomCard');
        img.classList.add('randomCard' + (i + 1));
        img.setAttribute('disabled','able')
        img.setAttribute('style','visibility: hidden')
        const div = document.createElement('div');
        div.classList.add('card');
        div.appendChild(img);
        cardBox.appendChild(div);

    }
}

const cardBox = document.querySelector('#cardBox');
cardBox.addEventListener('click', clickHandler);

let compareCard = []; //함수가 종료되면 모든 스코프 내용이 사라지기 때문에 변수를 밖에다가 만들어줘야 한다
function clickHandler(event) {
    let target = event.target;

    const cardBox = document.querySelector('#cardBox');
    if (target === cardBox) {
        console.log('딴거눌르지마');
        return;
    }

    if (target.nodeName === 'IMG') {
        console.log('IMG-----------------------', target.parentNode);
        target = target.parentNode;
    }

    if (target.getAttribute('disabled') === 'disabled') {
        console.log('이미 정답으로 처리된 애!!!!');
        return;
    }

    compareCard.push(target);
    target.children[0].style.visibility = 'visible';

    //카드가 2개 선택될때
    if (compareCard.length === 1) {
        return;
    }

    if (compareCard.length === 2) {
        if (compareCard[0] !== compareCard[1]) {
            if (compareCard[0].children[0].src === compareCard[1].children[0].src) {
                console.log('정답');
                compareCard[0].setAttribute('disabled', 'disabled');
                compareCard[1].setAttribute('disabled', 'disabled');
            } else {
                console.log('1234',compareCard[0]);
                console.log('떙');
                showingCard(compareCard[0], compareCard[1])
                // setTimeout(function (){
                //     compareCard[0].children[0].style.visibility = "hidden";
                //     compareCard[1].children[0].style.visibility = "hidden";
                // },300);
            }
        }
    }

    compareCard = [];
}
