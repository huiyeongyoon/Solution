//      구입할 물건의 목록과 구입한 물건의 목록이 보기와 같이 있을 때 구입하지 않는 물건을 출력하세요
//      구입할 물건 ["냉장고", "선풍기", "TV", "노트북", "세탁기" "에어컨"]
//      구입한 물건 ["노트북", "TV", "에어컨"]

let productList = ["냉장고", "선풍기", "TV", "노트북", "세탁기", "에어컨"];
let bought = ["노트북", "TV", "에어컨"];
let soldOut = "";

for (let i = 0; i < productList.length; i++) {
    if (productList[i] !== bought[0]) {
        console.log(i); //i에 3번이 안돌아?
        if (productList[i] !== bought[1]) {
            //console.log(2,i); //i에 2번3번이 안돌아
            if (productList[i] !== bought[2]) {
                //console.log(3, soldOut, productList, bought, i);
                soldOut += bought[i]
            }
        }
    }
}
    console.log(soldOut); //왜 노트북 tv undefiend?
