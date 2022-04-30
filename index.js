// This is my first Javascript code
console.log('Hello World!');
let name = 'Satish'; // String literals
let age = 30; // Number literals
let isApproved = true;
let firstName = undefined;
let lastName = undefined;
let person = {
    name: 'Anay',
    age: 8
}
console.log(person.name);
console.log(person['name']);
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'yellow';
console.log(selectedColors);
function greet(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName)
}
greet('Anay', 'Sharma');
function square(number) {
    return number * number;
}
console.log(square(2));
let x = 1;
let y = 3;
// Arithmatic operator
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x % y);
console.log(x ** y);
console.log(++x);
console.log(x++);
console.log(x);
console.log(--y);
console.log(x += 5);
console.log(x *= 3);
console.log(x > 1);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);
// Strict Equality
console.log(x === 1);
console.log(1 === '1');
console.log(x !== 1);
// Lose Equality
console.log(x == 1);
console.log(1 == '1');
// Ternary Operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
// Logical Operator
console.log(true && false);
console.log(true || false);
let isRefused = true;
const job = !isRefused;
console.log(job);
// Falsy false undefined null 0 NaN
let userColor = 'red';
let defaultColor = 'blue';
const currentColor = userColor || defaultColor;
console.log(currentColor);
// Bitwise
// Read, Write and Execute
// 00000100
// 00000010
// 00000001
const readPermission = 4
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
let hour = 10;
if (hour >= 6 && hour < 12) console.log('Good Morning!');
else if (hour >= 12 && hour < 18) console.log('Good Afternoon');
else console.log('Good Evening!');
let user = 'guest';
switch (user) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}
for (let i = 5; i > 5; i--) {
    if (i % 2 !== 0) console.log(i);
}
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
let j = 9;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5)
// Avoid Infinite loop like missing i++ increment or incorrect 
// For object
for (let key in person) console.log(key, person[key]);
// For Array
for (let color of selectedColors) console.log(color);
// let k = 0;
// while (k <= 10) {
//     if (k === 5) break;
//     console.log(i);
//     k++
// }

