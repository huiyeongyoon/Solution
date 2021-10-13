function tie(yourChoice, computerChoice) {
  return (yourChoice === computerChoice) ? '비김' : '';
}

function win(user, com) {
  let result = '';
  result += (user === '가위' && com === '보') ? '이겼다' : '';
  result += (user === '보' && com === '바위') ? '이겼다' : '';
  result += (user === '바위' && com === '가위' ) ? '이겼다' : '';
  return result;
}

function lose(user, com) {
  let result = '';
  result += (user === '바위' && com === '보') ? '졌다' : '';
  result += (user === '가위' && com === '바위') ? '졌다' : '';
  result += (user === '보' && com === '가위') ? '졌다' : '';
  return result;
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
  result += win(yourChoice, computerChoice);
  result += lose(yourChoice, computerChoice);
  return result;
}

//낸사람
console.log(game('가위'));
console.log(game('바위'));
console.log(game('보'));