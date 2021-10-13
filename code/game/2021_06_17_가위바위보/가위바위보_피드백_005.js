const scissors = document.querySelector('.scissors-img').addEventListener('click', game);
const rock = document.querySelector('.rock-img').addEventListener('click', game);
const paper = document.querySelector('.paper-img').addEventListener('click', game);


function tie(x) {
  if (x === '00') {
    return '비김';
  } else if (x === '11') {
    return '비김';
  } else if (x === '22') {
    return '비김';
  }

  return '';
}

function win(x) {
  return (x === '02')
    ? '이겼다'
    : (x === '21')
      ? '이겼다'
      : (x === '10' )
        ? '이겼다'
        : '';
}

function lose(x) {
  let result = '';
  result += (x === '12') ? '졌다' : '';
  result += (x === '01') ? '졌다' : '';
  result += (x === '20') ? '졌다' : '';
  return result;
}

// 가위바위보 게임
function game(scissors, rock, paper) {
  const arr = ['가위','바위','보'];
  const random = Math.floor(Math.random() * 3);
  const computerChoice = arr[random];
  scissors = '가위'
  rock = '바위'
  paper = '보'
  const yourChoice = scissors || rock || paper;
  console.log(yourChoice, ' VS ', computerChoice);


  const x = `${arr.indexOf(yourChoice)}${random}`;
  let result = '';
  result += tie(x);
  result += win(x);
  result += lose(x);
  return result;
}

// const yourChoice = document.getElementsByClassName("rock-img");
// const yourChoice = document.getElementsByClassName("paper-img");
//낸사람
// console.log(game('가위'));
// console.log(game('바위'));
// console.log(game('보'));