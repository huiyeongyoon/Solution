

function random() {
  return Math.floor( Math.random() * 10) + 1;
}

// console.log(random());

const arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(random());
}

console.log(arr);