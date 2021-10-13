function f1(x) {
    x += 1;
}

function f2(x) {
    x.z += 1;
}

let a = 10;
f1(a);
console.log('a', a);

let b = { z: 20 }
f2(b);
console.log('b', b);