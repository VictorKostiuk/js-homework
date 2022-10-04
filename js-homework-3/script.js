// Запросіть у користувача його вік та визначте, ким він є: дитиною (0–12), підлітком (12–
// 18), дорослим (18-60) або пенсіонером (60–…).

// let age = +prompt("Enter your age")
//
// if (age >= 0 && age <= 12) {
//     alert("You`re child")
// }else if (age > 12 && age <= 18){
//     alert("You`re teenager")
// }else if (age > 18 && age <= 60){
//     alert("You`re adult")
// }else if (age > 60){
//     alert("You`re pensioner")
// }else {
//     alert("Who are you? O_o")
// }

// Запросіть у користувача число від 0 до 9 і виведіть йому спеціальний символ, який
// розташований на цій клавіші (1–!, 2–@, 3–# тощо).

// let num = +prompt("Enter number");
//
// switch (num) {
//     case 1:
//         alert( '!' );
//         break;
//     case 2:
//         alert( '@' );
//         break;
//     case 3:
//         alert( '#' );
//         break;
//     case 4:
//         alert( '$' );
//         break;
//     case 5:
//         alert( '%' );
//         break;
//     case 6:
//         alert( '^' );
//         break;
//     case 7:
//         alert( '&' );
//         break;
//     case 8:
//         alert( '*' );
//         break;
//     case 9:
//         alert( '(' );
//         break;
//     case 0:
//         alert( ')' );
//         break;
//     default:
//         alert( "Something wrong" );
// }

// Напишіть конвертор валют. Користувач вводить кількість USD, вибирає в яку валюту
// хоче перекласти: EUR, UAN або AZN, і отримує відповідну суму.

// let USD = +prompt("Enter number");
// let value = +prompt("Translate to what");
//
// switch (value) {
//     case 'EUR':
//         alert( USD * 1.03 );
//         break;
//     case 'UAH':
//         alert( USD * 37 );
//         break;
//     case 'AZN':
//         alert( USD * 1.7 );
//         break;
//     default:
//         alert( "Something wrong" );
// }

// Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну
// правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві
// кількість набраних балів.

// let sum = 0
// let city = +prompt("Where are you living? A) Lviv, B) Kiev, C) Kharkiv");
// let country = +prompt("Where are you from? A) Ukraine, B) Poland, C) Germany");
// if (city === 'Lviv') {
//     sum += 2
// }
// if(country === 'Ukraine') {
//     sum += 2
// }
//
// alert(sum)
//
// Реалізуйте калькулятор. Користувач вводить 2 числа та знак (+ - */).
// Залежно від введеного знака розв’яжіть приклад та виведіть результат.

// let numA = +prompt('Enter number 1')
// let numB = +prompt('Enter number 2')
// let action = prompt('Enter action ')
//
// switch (action) {
//     case '+':
//         alert( numA + numB );
//         break;
//     case '-':
//         alert( numA - numB );
//         break;
//     case '*':
//         alert( numA * numB );
//         break;
//     case '/':
//         alert( numA / numB );
//         break;
//     default:
//         alert( "Something wrong" );
// }

// Запросіть у користувача час (години, хвилини, секунди) та перевірте коректність введених даних.

let hours = +prompt('Enter hours')
hours = checkValue(hours)
let minutes = +prompt('Enter minutes')
minutes = checkValue(minutes)
let seconds = +prompt('Enter seconds')
seconds = checkValue(seconds)
if (minutes >= 60) {
    hours += Math.trunc(minutes / 60)
    minutes = minutes % 60
}

if (seconds >= 60) {
    minutes += Math.trunc(seconds / 60)
    seconds = seconds % 60
}

alert(hours + ':' + minutes + ':' + seconds )

function checkValue(value) {
    if(checkCondition(value)){
        do {
            value = +prompt(value + " isn`t valid. Try again!")
        } while (checkCondition(value))
    }
    return value
}

function checkCondition(value) {
    return isNaN(value) || value < 0 || !isInt(value)
}

function isInt(n) {
    return n % 1 === 0;
}