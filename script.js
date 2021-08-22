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

// Eighth task 
console.log('Eighth task');
let day = 0; //число от 1 до 31
if (day > 0 && day <= 10) {
    console.log(day + ' число находится в первой декаде месяца');
} else if (day > 10 && day <= 20) {
    console.log(day + ' число находится во второй декаде месяца');
} else if (day > 20 && day <= 31) {
    console.log(day + ' число находится в третьей декаде месяца');
} else {
    console.log('Такого числа нет ни в одном месяце');
}
console.log('');

// Ninth task
console.log('Ninth task');
let num = 15; // любое число
if (num >= 365) console.log(num + ' день/дней/дня составят(-ит) ' + (num / 365) + ' год/года/лет');
else console.log('Меньше года');
if (num >= 31) console.log(num + ' день/дней/дня составят(-ит) ' + (num / 31) + ' месяц/месяца/месяцев');
else console.log('Меньше месяца');
if (num >= 7) console.log(num + ' день/дней/дня составят(-ит) ' + (num / 7) + ' неделю/недели/недель');
else console.log('Меньше недели');
console.log(num + ' день/дней/дня составят(-ит) ' + (num * 24) + ' час/часа/часов');
console.log(num + ' день/дней/дня составят(-ит) ' + (num * 24 * 60) + ' минуту/минуты/минут');
console.log(num + ' день/дней/дня составят(-ит) ' + (num * 24 * 60 * 60) + ' секунду/секунды/секунд');
console.log('');

// Tenth task
console.log('Tenth task'); 
switch(true) { // определяем месяц
    case(day >= 1 && day <= 31):
        console.log('Зимний месяц январь');
    break;
    case(day >= 32 && day <= 59):
        console.log('Зимний месяц февраль');
    break;
    case(day >= 60 && day <= 90):
        console.log('Весенний месяц март');
    break;
    case(day >= 91 && day <= 120):
        console.log('Весенний месяц апрель');
    break;
    case(day >= 121 && day <= 151):
        console.log('Весенний месяц май');
    break;
    case(day >= 152 && day <= 181):
        console.log('Летний месяц июнь');
    break;
    case(day >= 182 && day <= 212):
        console.log('Летний месяц июль');
    break;
    case(day >= 213 && day <= 243):
        console.log('Летний месяц август');
    break;
    case(day >= 244 && day <= 273):
        console.log('Осенний месяц сентябрь');
    break;
    case(day >= 274 && day <= 304):
        console.log('Осенний месяц октябрь');
    break;
    case(day >= 305 && day <= 334):
        console.log('Осенний месяц ноябрь');
    break;
    case(day >= 335 && day <= 365):
        console.log('Зимний месяц декабрь');
    break;
    default:
        console.log('В году нет такого дня!');
}
