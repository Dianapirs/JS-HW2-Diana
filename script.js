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
