function tie(x) {
  if (x === '가위가위') {
    return '비김';
  } else if (x === '바위바위') {
    return '비김';
  } else if (x === '보보') {
    return '비김';
  }

  return '';
}

function win(x) {
  let result = '';
  result += (x === '가위보') ? '이겼다' : '';
  result += (x === '보바위') ? '이겼다' : '';
  result += (x === '바위가위' ) ? '이겼다' : '';
  return result;
}

function lose(x) {
  let result = '';
  result += (x === '바위보') ? '졌다' : '';
  result += (x === '가위바위') ? '졌다' : '';
  result += (x === '보가위') ? '졌다' : '';
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

  const x = `${yourChoice}${computerChoice}`;
  let result = '';
  result += tie(x);
  result += win(x);
  result += lose(x);
  return result;
}

//낸사람
console.log(game('가위'));
console.log(game('바위'));
console.log(game('보'));