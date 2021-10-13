function tie(yourChoice, computerChoice) {
  return (yourChoice === computerChoice) ? '비김' : '';
}

function comPaperWin(yourChoice, computerChoice) {
  return ( yourChoice === '가위' && computerChoice === '보') ? '이겼다' : '';
}
function comRockWin(yourChoice, computerChoice){
  return (yourChoice === '보' && computerChoice === '바위') ? '이겼다' : '';
}
function comScissorWin(yourChoice, computerChoice) {
  return (yourChoice === '바위' && computerChoice === '가위' ) ? '이겼다' : '';
}

function comPaperLose(yourChoice, computerChoice){
  return (yourChoice === '바위' && computerChoice === '보') ? '졌다' : '';
}
function comRockLose(yourChoice, computerChoice){
  return (yourChoice === '가위' && computerChoice === '바위') ? '졌다' : '';
}
function comScissorLose(yourChoice, computerChoice) {
  return (yourChoice === '보' && computerChoice === '가위') ? '졌다' : '';
}

// 가위바위보 게임
function game(yourChoice) { // 가위
  let arr = ['가위','바위','보'];
  let random = Math.floor(Math.random() * 3);
  let computerChoice = arr[random];
  // console.log( 'yourChoice', yourChoice);
  // console.log( 'computerChoice', computerChoice);
  console.log(yourChoice, ' VS ', computerChoice);

  let result = '';
  result += tie(yourChoice, computerChoice);
  result += comPaperWin(yourChoice, computerChoice);
  result += comPaperLose(yourChoice, computerChoice);
  result += comRockWin(yourChoice, computerChoice);
  result += comRockLose(yourChoice, computerChoice);
  result += comScissorWin(yourChoice, computerChoice);
  result += comScissorLose(yourChoice, computerChoice);
  return result;
}

//낸사람
console.log(game('가위'));
console.log(game('바위'));
console.log(game('보'));