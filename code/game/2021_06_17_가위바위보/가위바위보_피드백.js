function tie(yourChoice, computerChoice) {
  if (yourChoice === computerChoice) {
    console.log('비김');
  }
}
function comPaperWin(yourChoice, computerChoice) {
  if( yourChoice === '가위' && computerChoice === '보') {
    console.log('이겼다');
  }
}
function comPaperLose(yourChoice, computerChoice){
  if (yourChoice === '바위' && computerChoice === '보')  {
    console.log('졌다');
  }
}
function comRockWin(yourChoice, computerChoice){
  if (yourChoice === '보' && computerChoice === '바위')  {
    console.log('이겼다');
  }
}
function comRockLose(yourChoice, computerChoice){
  if (yourChoice === '가위' && computerChoice === '바위')  {
    console.log('졌다');
  }
}
function comScissorWin(yourChoice, computerChoice) {
  if (yourChoice === '바위' && computerChoice === '가위' )  {
    console.log('이겼다');
  }
}
function comScissorLose(yourChoice, computerChoice) {
  if (yourChoice === '보' && computerChoice === '가위')  {
    console.log('졌다');
  }
}

// 가위바위보 게임
function game(yourChoice) { // 가위
  let arr = ['가위','바위','보'];
  let random = Math.floor(Math.random() * 3);
  let computerChoice = arr[random];
  // console.log( 'yourChoice', yourChoice);
  // console.log( 'computerChoice', computerChoice);
  console.log(yourChoice, ' VS ', computerChoice);

  tie(yourChoice, computerChoice);
  comPaperWin(yourChoice, computerChoice);
  comPaperLose(yourChoice, computerChoice);
  comRockWin(yourChoice, computerChoice);
  comRockLose(yourChoice, computerChoice);
  comScissorWin(yourChoice, computerChoice);
  comScissorLose(yourChoice, computerChoice);
}

//낸사람
game('가위'); // 비겼음
game('바위'); // 이겼음
game('보'); // 졌음