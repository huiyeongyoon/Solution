// 5개의 단어를 출력하시오.
const str = 'apple pear banana orange melon'; //1.공백넣어주거나
let word = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {  //공백에서 조건걸리고
        console.log(word); //워드찍고
        word = "";         // 초기화 해주고
        continue;          // 공백 건너뛰고
    }
     word += str[i];       //문자를 문자열로 합쳐주고
}
console.log(word);         //2.여기콘솔 한번더 찍거나

//else도 사용가능


//자괴감... 언젠가 이해할듯 2분컷당함...
// String str = "apple pear banana orange melon";
//       String arrStr[] = str.split(" ");
//       for(String s : arrStr) {
//          System.out.println(s);
//       }

//       String arrStr[] = "apple pear banana orange melon".split(" ");
//       for(String s : arrStr) {
//          System.out.println(s);
//       }


//       for(String s : "apple pear banana orange melon".split(" ")) {
//         System.out.println(s);
//      }