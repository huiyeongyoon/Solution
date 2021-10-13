const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', function (event){

  const scissors = document.querySelector('.scissors-img');
  const rock = document.querySelector('.rock-img');
  const paper = document.querySelector('.paper-img');
  const changeText = document.querySelector('.choice-font');

  scissors.addEventListener('click', function (event) {
    const arr = ['가위','바위','보'];
    const random = Math.floor(Math.random() * 3);
    const computerChoice = arr[random];
    console.log('가위', ' VS ', computerChoice);

    const x = `${arr.indexOf('가위')}${random}`;
    let result = '';
    result += tie(x);
    result += win(x);
    result += lose(x);

    console.log('result', result);
  });

  rock.addEventListener('click', function (event) {
    const arr = ['가위','바위','보'];
    const random = Math.floor(Math.random() * 3);
    const computerChoice = arr[random];
    console.log('바위', ' VS ', computerChoice);

    const x = `${arr.indexOf('바위')}${random}`;
    let result = '';
    result += tie(x);
    result += win(x);
    result += lose(x);

    console.log('result', result);
  });

  paper.addEventListener('click', function (event) {
    const arr = ['가위','바위','보'];
    const random = Math.floor(Math.random() * 3);
    const computerChoice = arr[random];
    console.log('보', ' VS ', computerChoice);


    const x = `${arr.indexOf('보')}${random}`;
    let result = '';
    result += tie(x);
    result += win(x);
    result += lose(x);

    console.log('result', result);
  });

  changeText.innerHTML = "가위 바위 보를 선택해주세요";

})

function tie(x) {
  const tie = document.querySelector('.tie');
  if (x === '00') {
    return tie.innerHTML = '비겼다';
  } else if (x === '11') {
    return tie.innerHTML = '비겼다';
  } else if (x === '22') {
    return tie.innerHTML = '비겼다';
  }

  return '';
}

function win(x) {
  const win = document.querySelector('.win');
  return (x === '02')
    ? win.innerHTML = '승리'
    : (x === '21')
      ? win.innerHTML = '승리'
      : (x === '10' )
        ? win.innerHTML = '승리'
        : '';
}

function lose(x) {
  const lose = document.querySelector('.lose');
  let result = '';
  result += (x === '12') ? lose.innerHTML = '패배' : '';
  result += (x === '01') ? lose.innerHTML = '패배' : '';
  result += (x === '20') ? lose.innerHTML = '패배' : '';
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