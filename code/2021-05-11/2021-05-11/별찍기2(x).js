const a = 5;
const b = 3;
let i, j;
let result = '';

for (i = 0; i < b; i++) {
  // result = ''; //초기화 안할경우
  for (j = 0; j < a; j++) {
    result += '*';
  }
  console.log(result);
}

