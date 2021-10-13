let productList = ["냉장고", "선풍기", "TV", "노트북", "세탁기", "에어컨"];
let bought = ["노트북", "TV", "에어컨"];
let inShop = "";

for (let i = 0; i < productList.length; i++) {
    let flag = false;
    for (let j = 0; j < bought.length; j++) {
        console.log(productList[i], ' VS ', bought[j]);
        if (productList[i] === bought[j]) {
            console.log('if true!!!!!', productList[i], bought[j]);
            flag = true;
            break;
        }
    }

    if (!flag) {
        inShop += ' ' + productList[i];
        console.log('inShop >> ', inShop);
    }

}
console.log(inShop);