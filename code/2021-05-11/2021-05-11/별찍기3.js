const a = 5;
const b = 3;
let i, j;
let result = '';
let result2 = [];

for (i = 0; i < b; i++) {
  result = '';
  for (j = 0; j < a; j++) {
    result += '*';
  }
  result2.push(result); //배열에다가 차곡차곡 담기
}

for (let k = 0; k < result2.length; k++) {
  console.log(result2[k]); //배열에 길이만큼 콘솔로그 찍기
}
