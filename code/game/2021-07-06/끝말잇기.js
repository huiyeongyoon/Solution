//로직
//몇명에서 플레이 할껀가?(최대5명) ->입력가능한단어는? 끝에 말이 같다면 다가능 만약에 존재하지 않는 단어라면?
// -> 시간은? 약 10초안에 입력해야만 가능 -> 입력못할시 탈락 메시지 띄워주고 다음사람에게 턴 넘어가기

const words = inputWord = (word) => {
    const clear = document.querySelector('#formBox');
    clear.innerHTML = ''
    const span = document.createElement('span');
    const createWordInputBox = document.createElement('input');
    const button = document.createElement('button');
    clear.appendChild(span);
    span.textContent = '단어입력하세요';
    clear.appendChild(createWordInputBox);
    clear.appendChild(button);
    button.textContent = '확인';
    createWordInputBox.classList.add('yourInput');
}

let gameStart = input = () => {
    const formBox = document.querySelector('#formBox');
    formBox.addEventListener('submit', function(event){
        event.preventDefault();
        const maxNum = 6;
        const inputContent = formBox.elements.inputContent
        console.log('11', formBox.elements[0]);
        console.log('22', formBox.elements[1]);
        console.log('33', inputContent);

        const playerNum = Number(inputContent.value);
        if (playerNum === 1 || playerNum === 0) {
            console.log('2명이상만 플레이 가능');
        }
        else if (playerNum >= maxNum) {
            console.log('최대 5명이하만 플레이 가능');
        }
        else if (playerNum > 0 && playerNum < maxNum) {
            console.log('게임시작');
            inputWord();
        } else {
            console.log('2~5만 입력가능');
        }
    });
}

gameStart();
