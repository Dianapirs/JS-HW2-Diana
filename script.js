// First task
console.log('First task');
let name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
let city = prompt('Город проживания');
let phone = prompt('Номер телефона');
let email = prompt('Адрес электронной почты');
let company = prompt('Место работы');

console.log('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + '  и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');
document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + '  и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');
console.log('');

// Second task
console.log('Second task');
let yearOfBirth = 2021 - age;
console.log(name + ' родился(лась) в ' + yearOfBirth + ' году.');
document.write(name + ' родился(лась) в ' + yearOfBirth + ' году.');
console.log('');

// Third task
console.log('Third task');
let str = '465393';
((Number(str[0]) + Number(str[1]) + Number(str[2])) == (Number(str[3]) + Number(str[4]) + Number(str[5]))) ? console.log('Да') : console.log('Нет');
console.log('');

//Forth task
console.log('Forth task');
let a = 1;
(a > 0) ? console.log('Верно') : console.log('Неверно');
    a = 0;
(a > 0) ? console.log('Верно') : console.log('Неверно');
    a = -3;
(a > 0) ? console.log('Верно') : console.log('Неверно');
console.log('');

// Fifth task
console.log('Fifth task');
    a = 10;
let b = 2;
console.log('Сумма равна ' + (a + b) + '. Разность равна ' + (a - b) + '. Произведение равно ' + (a * b) + '. Частное равно ' + (a / b) + '.');
((a + b) > 1) ? console.log('Сумма в квадрате равна ' + ((a + b) ** 2)) : console.log('Сумма меньше либо равна единице');
console.log('');

// Sixth task
console.log('Sixth task');
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}
console.log('');

// Seventh task
console.log('Seventh task');
let n = 32; //число от 0 до 59
if (n >= 0 && n < 15) {
    console.log(n + ' находится в первой четверти часа');
} else if (n >= 15 && n < 30) {
    console.log(n + ' находится во второй четверти часа');
} else if (n >= 30 && n < 45) {
    console.log(n + ' находится в третьей четверти часа');
} else if (n >= 45 && n <= 59 ) {
    console.log(n + ' находится в четвертой четверти часа');
} else {
    console.log('Число превышает количество минут');
}
console.log('');
