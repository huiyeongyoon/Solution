input = 'quit';
input1 = 'q';

console.log(input !== 'quit');
console.log(input1 !== 'quit');
//          false            true
if (input !== 'quit' || input !== 'q') {
    console.log('111');
}
//          true            false
if (input1 !== 'quit' || input1 !== 'q') {
    console.log('222');
}

//          false            true
if (input !== 'quit' && input !== 'q') {
    console.log('333');
}
//          true             false
if (input1 !== 'quit' && input1 !== 'q') {
    console.log('444');
}
//          true            true
if ('a' !== 'quit' && 'a' !== 'q') {
    console.log('555');
}
