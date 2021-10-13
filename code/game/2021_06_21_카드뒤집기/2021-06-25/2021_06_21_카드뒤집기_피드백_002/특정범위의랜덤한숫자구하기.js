function random(n) {
  return Math.floor( Math.random() * n);
}

function createNumber(n) {
  const arr = [];
// console.log(arr);

  for (let i = 0; i < n / 2; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < n / 2; i++) {
    arr.push(i + 1);
  }

  console.log(arr);

  for (let i = 0; i < 100; i++) {
    const r1 = random(arr.length);
    const r2 = random(arr.length);

    const temp = arr[r1];
    arr[r1] = arr[r2];
    arr[r2] = temp;
  }

  return arr;
}

console.log(createNumber(10));
//console.log(createNumber(20));