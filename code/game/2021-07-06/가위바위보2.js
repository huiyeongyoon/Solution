//로직
//로그인도하면 좋을듯? -> 게임시작 -> 최대 5판 까지 선택가능 ->
//플레이어가 버튼 혹은 이미지눌르면 가위 바위 보 중에 선택가능 ->
//컴퓨터는 랜덤으로 선택 이미지 3개와 버튼3개 필요함 -> 최대 5번 먼저 이기면 게임 종료
//로그인
userLogin = () => {
    //form 태그 가져오기
    const form = document.querySelector('form');
    //submit 되면
    form.addEventListener('submit', function (event){
        event.preventDefault(); //새로고침 방지
        const userId = form.elements.userId //name 값 가져오기 다른건 못가져오나?
        const userPassword = form.elements.userPassword
        //아뒤 비번
        if (userId.value === '123' && userPassword.value === '123') {
            userId.value = '';
            userPassword.value = '';
            gameStart();
        } else {
            userId.value = '';
            userPassword.value = '';
        }
    });
}

createButton = () => {
    const yourChoice = ['가위','바위','보']
    const buttons = document.querySelector('#buttons');
    // buttons.innerHTML = ''; //대안1
    buttons.querySelectorAll('*').forEach(buttons => buttons.remove()); //대안2
    for (let i = 0; i < yourChoice.length; i++) {
        const createButton = document.createElement('button');
        createButton.classList.add(yourChoice[i]);
        buttons.appendChild(createButton)
        createButton.textContent = yourChoice[i]; //자식요소말고 형제요소로는 어떻게?
    }
}

// 형제 요소로 만든다면?..
// const a = document.createTextNode(yourChoice[i]);
// buttons.appendChild(a); //자식요소말고 형제요소로는 어떻게?

random = () => {
    const arr = ['가위','바위','보']
    const random = Math.floor(Math.random() * 3);
    return arr[random];

}



gameStart = () => {
    createButton();
    const buttonBoxes = document.querySelector('#buttons');
    buttonBoxes.addEventListener('click', clickHandler);

    function clickHandler(event) {

        const computerChoice = random();
        const target = event.target;
        const yourChoice = target.className;

        console.log('computerChoice',computerChoice);

        if (yourChoice === computerChoice) { //컴퓨터 가위
            console.log('무승부');
        } else if (yourChoice + computerChoice === '가위바위') {
            console.log('패배');
        } else if (yourChoice + computerChoice === '가위보') {
            console.log('승리');
        } else if (yourChoice + computerChoice === '바위보') {
            console.log('패배');
        } else if (yourChoice + computerChoice === '바위가위') {
            console.log('승리');
        } else if (yourChoice + computerChoice === '보가위') {
            console.log('패배');
        } else if (yourChoice + computerChoice === '보바위') {
            console.log('승리');
        } else {
            console.log('에러');
        }
    }
}

userLogin();

