//div 총 9 개
//플레이어는 2명
//각 플레이어는 3턴씩 사용가능
//클릭시 div가 파란색o또는 빨간색o로 변경
//두번클릭시 예외 발생 (아마o가 x로 바뀌던가 할듯)
//컨박눌르시 무시
//한줄다 차지하면 승리

const container = document.querySelector('#container');
container.addEventListener('click', clicked);

let ox = 'O';
function clicked(event) {
    let target = event.target;

    //같은거 눌르면
    if (target.textContent === 'O' || target.textContent === 'X') {
        return;
    }

    ox = (ox === 'O') ? 'X' : 'O';
    target.textContent = ox;

    // ox === 'O' ? target.classList.add('blue') : target.classList.add('red');
    target.classList.remove('blue');    //여러개 추가된거 삭제
    target.classList.remove('red');     //여러개 추가된거 삭제
    target.classList.add(ox === 'O' ? 'blue' : 'red');



    let getWinner = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

    for (let i = 0; i < getWinner.length; i++) {
        let boxes = '';
        for (let j = 0; j < getWinner[i].length; j++) {
            const box = document.querySelector('.box' + getWinner[i][j]);
            boxes += box.textContent;
            console.log(boxes);
        }

        if (boxes === 'OOO') {
            console.log('blue win');
            break;
        }
        if (boxes === 'XXX') {
            console.log('red win');
            break;
        }
    }

}

