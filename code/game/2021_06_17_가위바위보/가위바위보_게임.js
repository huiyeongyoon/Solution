// 가위바위보 게임
function game(yourChoice) { // 가위
    let arr = ['가위','바위','보'];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = arr[random];

    let scissors = '';
    let rock = '';
    let paper = '';

    console.log( 'yourChoice', yourChoice);
    console.log( 'computerChoice', computerChoice);

    if (computerChoice === '가위') {
        scissors = 1;
    }
    if (computerChoice === '바위') {
        rock = 2;
    }
    if (computerChoice === '보') {
        paper = 3;
    }

    if(yourChoice === '가위') {
        if (yourChoice === computerChoice) {
            console.log('비김');
            return '';
        }
        if (yourChoice < computerChoice && paper)  {
            console.log('이겼다');
        } else {
            console.log('졌다');
        }
        return '';
    }

    if(yourChoice === '바위') {
        if (yourChoice === computerChoice) {
            console.log('비김');
            return '';
        }
        if (yourChoice > computerChoice && scissors)  {
            console.log('이겼다');
        } else {
            console.log('졌다');
        }
        return '';
    }

    if(yourChoice === '보') {
        if (yourChoice === computerChoice) {
            console.log('비김');
            return '';
        }
        if (yourChoice > computerChoice && rock)  {
            console.log('이겼다');
        } else {
            console.log('졌다');
        }
        return '';
    }


}

//낸사람
game('가위'); // 비겼음
game('바위'); // 이겼음
game('보'); // 졌음