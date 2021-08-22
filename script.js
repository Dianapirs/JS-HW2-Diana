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