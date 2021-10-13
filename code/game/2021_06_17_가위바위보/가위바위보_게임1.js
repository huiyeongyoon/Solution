// 가위바위보 게임
function game(yourChoice, x) { // 가위
    let arr = [-1,0,1];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = arr[random];


    console.log('computerChoice', computerChoice); //-1보 0가위 1바위
    console.log('yourChoice', yourChoice, x);
    //컴퓨터 가위일때
    if(yourChoice === computerChoice) {
        console.log('비겼다');
    }
    //컴퓨터 보일때
    if(yourChoice > computerChoice) {
        console.log('이겼다');
    }
    //컴퓨터 바위시
    if(yourChoice < computerChoice) {
        console.log('졌다');
    }
}

//game(0, '가위'); // 비겼음
game(1,'바위'); // 이겼음
//game(-1,'보'); // 졌음