// function validUserNames(usernames) {
//     return usernames.filter(function (username) {
//         return username.length < 10;
//     });
// }

const validUserNames = (usernames) => usernames.filter((username) => username.length < 10);

console.log(validUserNames(['11111111111111111111','222222222','33333333333333','44444444']));