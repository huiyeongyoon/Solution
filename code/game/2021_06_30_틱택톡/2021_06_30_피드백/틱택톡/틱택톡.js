
//div 총 9 개
//플레이어는 2명
//각 플레이어는 3턴씩 사용가능
//클릭시 div가 파란색o또는 빨간색o로 변경
//두번클릭시 예외 발생 (아마o가 x로 바뀌던가 할듯)
//컨박눌르시 무시
//한줄다 차지하면 승리



const tryNum = document.querySelector('#container');
tryNum.addEventListener('click', clicked);
let times = 0;

function clicked(event) {
    let target = event.target;

    const container = document.querySelector('#container');
    const row = document.querySelector('.row');

    if (target === container) {
        console.log('딴거눌르지마');
        return;
    }

    if (target === row) {
        console.log('딴거눌르지마');
        return;
    }

    const player1 = document.createElement('span');
    player1.classList.add('circle1');
    if (target){
        times += 1;
    }
    console.log(times);
    console.log('target', target);
    // const box = document.querySelector('.box + times');
    const box = document.querySelector('.box' + times);
    console.log(box);
    box.appendChild(player1);

    // const player2 = document.createElement('span');
    // player2.classList.add('circle2');
    // vertical.appendChild(player2);
}


