// Завдання 1

// let num = +prompt("Enter your number(3 characters)")
// alert(Math.trunc(num%10) + '' + Math.trunc((num%100)/10) + '' + Math.trunc((num%1000)/100))

// Завдання 2

let ticketNumber = +prompt("Enter your ticket code(6 characters)")
let myFunc = num => Number(num)
let intArr = Array.from(String(ticketNumber), myFunc)
let poArr = [], ptArr = []

if (checkCondition(ticketNumber)) {
    do {
        ticketNumber = +prompt("Your code isn`t valid. Try again!")
    } while (checkCondition(ticketNumber))
}

for (let i = 0; i < 6; i++) {
    if (i < 3) {
        poArr.push(intArr[i])
    } else {
        ptArr.push(intArr[i])
    }
}

sumArr(ptArr) === sumArr(poArr) ? alert('It`s your lucky ticket!') : alert('Mayby next time.')

function sumArr(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0)
}


function checkCondition(value) {
    debugger
    return isNaN(value) || String(value).length !== 6
}