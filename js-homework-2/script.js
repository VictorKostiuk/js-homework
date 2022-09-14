let a = +prompt("Enter your ticket code(6 characters)")
let myFunc = num => Number(num)
let intArr = Array.from(String(a), myFunc)
let poArr = [], ptArr = []

if (checkCondition(String(a))) {
    do {
        a = +prompt("Your code isn`t valid. Try again!")
    } while (checkCondition(String(a)))
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
    return isNaN(value) ||  value <= 0 || value.length !== 6
}