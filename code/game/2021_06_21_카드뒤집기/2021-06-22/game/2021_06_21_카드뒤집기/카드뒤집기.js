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
    const cardBox = document.querySelector('#cardBox')
    cardBox.textContent = '';
    let checkDuplicated = [];
    let random = [];
    for (let i = 0; i < Number(inputCount); i++) {
        random.push(Math.floor( Math.random() * 10) + 1);
        const img = document.createElement('img');
        for (let j = 0; j < random.length; j++) {
            console.log('checkDuplicated', checkDuplicated[j]);
            console.log('random', random[i]);
            if (checkDuplicated[j] !== random[i]) {
                checkDuplicated.push(random);
                img.src = `../카드뒤집기_이미지/${random[i]}.gif`;
                img.classList.add('randomCard');
                cardBox.appendChild(img);
            } else {
                console.log('중복된 카드 생성됨');
            }
        }
    }
}
