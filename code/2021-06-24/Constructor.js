// 변수명을 선언
// 생성자 만들고
// 인수 담아줄 함수만들어주고 넣어줄 인수 정해주고
// 인수 명 만들어주고
// this로 객체에 값을 돌려준다

//생성자
function Card(suit, rank) {
    this.suit = suit; //인수
    this.rank = rank;
    //this로 객체생성 (인스턴스)
}

//new 연산자
const card = new Card('하트','A');

console.log(card);
console.log(card.suit);