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
